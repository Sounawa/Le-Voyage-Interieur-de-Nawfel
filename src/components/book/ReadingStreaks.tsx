'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useStoryStore } from '@/store/story-store';

const STREAK_MILESTONES = [3, 7, 14, 30] as const;

const MILESTONE_EMOJIS: Record<number, string> = {
  3: '\uD83D\uDD25',
  7: '\u2B50',
  14: '\uD83D\uDC8E',
  30: '\uD83D\uDC51',
};

const MILESTONE_ACHIEVEMENT_IDS: Record<number, string> = {
  3: 'streak_3',
  7: 'streak_7',
  14: 'streak_14',
  30: 'streak_30',
};

/**
 * ReadingStreaks — displays a streak tracking widget in the bottom-left corner.
 * Shows current streak with fire emoji, progress bar to next milestone,
 * and triggers achievement unlocks on milestone days.
 */
export default function ReadingStreaks() {
  const currentStreak = useStoryStore((s) => s.currentStreak);
  const bestStreak = useStoryStore((s) => s.bestStreak);
  const achievements = useStoryStore((s) => s.achievements);
  const unlockAchievement = useStoryStore((s) => s.unlockAchievement);

  const [isReady, setIsReady] = useState(false);
  const [animatingCount, setAnimatingCount] = useState(false);
  const [milestoneJustReached, setMilestoneJustReached] = useState<number | null>(null);
  const prevStreakRef = useRef<number>(currentStreak);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  // Show widget after a short delay (like ReadingTimer)
  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Subscribe to store for streak changes (external system subscription pattern)
  useEffect(() => {
    const unsub = useStoryStore.subscribe((state, prevState) => {
      const newStreak = state.currentStreak;
      const oldStreak = prevState.currentStreak;

      if (newStreak > oldStreak && newStreak > 0) {
        // Trigger bounce animation via microtask to avoid synchronous setState in effect
        const bt = setTimeout(() => {
          setAnimatingCount(true);
          const resetBounce = setTimeout(() => setAnimatingCount(false), 500);
          timersRef.current.push(resetBounce);
        }, 0);
        timersRef.current.push(bt);

        // Check milestones
        for (const milestone of STREAK_MILESTONES) {
          if (newStreak === milestone && !state.achievements.includes(MILESTONE_ACHIEVEMENT_IDS[milestone])) {
            unlockAchievement(MILESTONE_ACHIEVEMENT_IDS[milestone]);
            const gt = setTimeout(() => {
              setMilestoneJustReached(milestone);
              const resetGlow = setTimeout(() => setMilestoneJustReached(null), 4000);
              timersRef.current.push(resetGlow);
            }, 0);
            timersRef.current.push(gt);
          }
        }
      }
    });

    return () => {
      unsub();
      timersRef.current.forEach(t => clearTimeout(t));
      timersRef.current = [];
    };
  }, [unlockAchievement]);

  // Calculate progress to next milestone
  const getNextMilestone = useCallback((streak: number): { current: number; next: number; progress: number } => {
    let currentMilestone = 0;
    let nextMilestone = STREAK_MILESTONES[0];
    for (const m of STREAK_MILESTONES) {
      if (streak >= m) {
        currentMilestone = m;
      } else {
        nextMilestone = m;
        break;
      }
    }
    if (streak >= STREAK_MILESTONES[STREAK_MILESTONES.length - 1]) {
      return { current: STREAK_MILESTONES[STREAK_MILESTONES.length - 1], next: STREAK_MILESTONES[STREAK_MILESTONES.length - 1], progress: 100 };
    }
    if (currentMilestone === 0) {
      const progress = (streak / nextMilestone) * 100;
      return { current: 0, next: nextMilestone, progress };
    }
    const prevMilestoneIndex = STREAK_MILESTONES.indexOf(currentMilestone as 3 | 7 | 14 | 30);
    const rangeStart = currentMilestone;
    const rangeEnd = STREAK_MILESTONES[prevMilestoneIndex + 1] ?? nextMilestone;
    const progress = ((streak - rangeStart) / (rangeEnd - rangeStart)) * 100;
    return { current: currentMilestone, next: rangeEnd, progress };
  }, []);

  const { next, progress } = getNextMilestone(currentStreak);

  // Don't show until ready and streak is at least 1
  if (!isReady || currentStreak < 1) return null;

  return (
    <div className="fixed bottom-16 left-4 z-20">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200, delay: 0.1 }}
          className={`streak-pill rounded-full overflow-hidden cursor-default select-none ${
            milestoneJustReached ? 'streak-milestone' : ''
          }`}
          title={`S\u00e9rie : ${currentStreak} jour${currentStreak !== 1 ? 's' : ''} \u00b7 Meilleure : ${bestStreak} jour${bestStreak !== 1 ? 's' : ''}`}
        >
          <div className="flex items-center gap-1.5 px-3 py-1.5">
            {/* Fire emoji with pulse */}
            <span className="streak-fire text-sm leading-none">
              {'\uD83D\uDD25'}
            </span>

            {/* Streak count with bounce */}
            <span
              className={`streak-count text-[11px] font-serif font-bold tabular-nums text-amber-300/70 ${
                animatingCount ? 'bounce' : ''
              }`}
            >
              {currentStreak}
            </span>

            <span className="text-[11px] font-serif text-amber-600/35">
              {currentStreak === 1 ? 'jour' : 'jours'}
            </span>

            {/* Next milestone indicator */}
            {currentStreak < 30 && (
              <span className="text-[9px] text-amber-700/30 ml-0.5">
                {MILESTONE_EMOJIS[next]} {next}
              </span>
            )}
          </div>

          {/* Progress bar to next milestone */}
          {currentStreak < 30 && (
            <div className="streak-progress mx-1.5 mb-1">
              <div
                className="streak-progress-fill"
                style={{ width: `${Math.min(progress, 100)}%` }}
              />
            </div>
          )}

          {/* Milestone glow overlay when just reached */}
          <AnimatePresence>
            {milestoneJustReached && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 pointer-events-none rounded-full"
                style={{
                  background: 'linear-gradient(90deg, transparent, rgba(218, 165, 32, 0.15), transparent)',
                }}
              />
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
