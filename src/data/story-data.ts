import type { StoryPage } from '@/lib/story-types';

export const storyPages: Record<string, StoryPage> = {

  // ═══════════════════════════════════════════
  // PROLOGUE
  // ═══════════════════════════════════════════
  prologue: {
    id: 'prologue',
    chapter: 0,
    chapterTitle: 'Prologue',
    paragraphs: [
      `Dans un petit village niché entre les collines, là où le vent porte le parfum de la terre mouillée, vivait un garçon de dix ans qui portait un nom lumineux : Souhayl — l'étoile du soir, celle qui guide les voyageurs égarés.`,
      `Et ce soir, Souhayl allait lui-même devenir un voyageur. Mais son voyage ne se mesurerait pas en kilomètres. Il traverserait l'âme elle-même.`,
    ],
    mood: 'prologue',
    next: 'ch1-start',
    isChapterStart: true,
  },

  // ═══════════════════════════════════════════
  // CHAPTER 1: LA DÉCOUVERTE
  // ═══════════════════════════════════════════
  'ch1-start': {
    id: 'ch1-start',
    chapter: 1,
    chapterTitle: 'La Découverte',
    paragraphs: [
      `C'était un jeudi après-midi. Souhayl rentrait de l'école en traînant ses pieds quand il remarqua quelque chose d'inhabituel : la porte du grenier — toujours fermée — était entrouverte. Un filet de lumière dorée en filtrait.`,
      `Son grand-père Moulay était assis dans la cour, son chapelet entre ses doigts. — « Le grenier t'attend, dit-il sans lever les yeux. Il t'attendait depuis ta naissance. »`,
    ],
    mood: 'wonder',
    next: 'ch1-grenier',
    isChapterStart: true,
  },

  'ch1-grenier': {
    id: 'ch1-grenier',
    chapter: 1,
    chapterTitle: 'La Découverte',
    paragraphs: [
      `L'escalier grinçait sous ses pieds. Quand il poussa la trappe, Souhayl resta bouche bée. L'espace était transformé — des bougies flottaient dans l'air, des tapis anciens couvraient le sol, et au centre, un livre attendait sur un pupitre sculpté.`,
      `Sa couverture était en cuir noir, ornée d'inscriptions dorées en arabe. Elle était tiède, comme la peau de quelqu'un qui vient de s'endormir au soleil.`,
    ],
    mood: 'wonder',
    next: 'ch1-choice-reaction',
  },

  // ─── CHOICE 1: Réaction face au livre mystérieux ───
  'ch1-choice-reaction': {
    id: 'ch1-choice-reaction',
    chapter: 1,
    chapterTitle: 'La Découverte',
    paragraphs: [
      `Le livre semblait vivant, comme s'il respirait. Ses inscriptions dorées pulsaient doucement. Qu'allait faire Souhayl ?`,
    ],
    mood: 'wonder',
    choices: [
      {
        id: 'open-immediately',
        text: 'L\'ouvrir tout de suite — la curiosité est trop forte, il DOIT savoir ce qu\'il y a dedans !',
        nextPage: 'ch1-a1-open',
        tag: 'curiosity',
        emoji: '📖',
      },
      {
        id: 'examine-first',
        text: 'L\'examiner d\'abord — observer les inscriptions, toucher la couverture, essayer de comprendre avant d\'agir.',
        nextPage: 'ch1-a2-examine',
        tag: 'patience',
        emoji: '🔍',
      },
      {
        id: 'call-grandfather',
        text: 'Appeler Moulay — c\'est son grenier, son livre. Il ne devrait pas toucher quelque chose qui ne lui appartient pas.',
        nextPage: 'ch1-a3-call',
        tag: 'respect',
        emoji: '👴',
      },
    ],
  },

  'ch1-a1-open': {
    id: 'ch1-a1-open',
    chapter: 1,
    chapterTitle: 'La Découverte',
    paragraphs: [
      `Souhayl ouvrit le livre d'un geste vif. Les pages, épaisses et jaunies, exhalaient un parfum de santal et de pluie. Sur la première page, une phrase en arabe et en français :`,
      `« Celui qui connaît son âme connaît son Seigneur. » — Prophète Muhammad ﷺ`,
      `Et en dessous, écrit à la hâte : « Souhayl — le voyage commence quand tu fermes les yeux. » Son nom ! Écrit dans ce livre ! Son cœur battait si fort qu'il l'entendait dans ses tempes.`,
    ],
    mood: 'wonder',
    next: 'ch1-moulay',
  },

  'ch1-a2-examine': {
    id: 'ch1-a2-examine',
    chapter: 1,
    chapterTitle: 'La Découverte',
    paragraphs: [
      `Souhayl passa ses doigts sur les inscriptions dorées. Elles étaient gravées profondément, comme si quelqu'un y avait consacré des années. Il reconnut quelques lettres arabes — le bismillah, peut-être ? — mais le reste lui échappait.`,
      `Il souleva le livre avec précaution. Il était plus lourd qu'il n'en avait l'air. Et quand il l'ouvrit enfin, la première page lui coupa le souffle : une phrase magnifique en calligraphie dorée, et en dessous... son propre nom.`,
    ],
    mood: 'wonder',
    next: 'ch1-moulay',
  },

  'ch1-a3-call': {
    id: 'ch1-a3-call',
    chapter: 1,
    chapterTitle: 'La Découverte',
    paragraphs: [
      `— « Grand-père ! cria Souhayl depuis le grenier. Il y a un livre ici ! Un livre avec mon nom dessus ! »`,
      `Moulay monta lentement, chaque marche un acte de patience. Il s'assit sur un tapis et invita Souhayl à faire de même. — « Ouvre-le, mon étoile du soir. Ce livre t'attendait. »`,
      `Les pages s'ouvrirent sous ses doigts, révélant une calligraphie dorée : « Celui qui connaît son âme connaît son Seigneur. » Et en dessous, son nom.`,
    ],
    mood: 'wonder',
    next: 'ch1-moulay',
  },

  'ch1-moulay': {
    id: 'ch1-moulay',
    chapter: 1,
    chapterTitle: 'La Découverte',
    paragraphs: [
      `— « Ce livre, expliqua Moulay, contient la carte d'un monde que peu de gens connaissent — le monde intérieur. Le cœur est un univers entier : des océans, des déserts, des montagnes. Et il contient aussi des ennemis. »`,
      `Souhayl sentit un frisson. — « Des ennemis ? » — « Le plus dangereux vit en toi : le Nafs — l'ego. Et il a un allié très rusé qu'on appelle Shaytan. »`,
      `Moulay posa sa main sur l'épaule de Souhayl. — « Le Tassawuf, c'est le chemin pour nettoyer le cœur, comme on nettoie un miroir couvert de poussière. Tu devras entrer dans ton propre monde intérieur. »`,
    ],
    mood: 'wisdom',
    shaykhSpeaks: 'Le plus long voyage est celui qui va de la tête au cœur. Et le plus court, celui du cœur à Allah.',
    next: 'ch1-choice-question',
  },

  // ─── CHOICE 2: Question à poser à Moulay ───
  'ch1-choice-question': {
    id: 'ch1-choice-question',
    chapter: 1,
    chapterTitle: 'La Découverte',
    paragraphs: [
      `Souhayl avait la tête pleine de questions. Moulay attendait, patient comme toujours. Mais une question allait définir la suite de son voyage.`,
    ],
    mood: 'wisdom',
    choices: [
      {
        id: 'ask-fear',
        text: '« J\'ai peur... Et si je n\'arrive pas à nettoyer mon cœur ? Et si je suis trop faible ? »',
        nextPage: 'ch1-b1-fear',
        tag: 'vulnerability',
        emoji: '😰',
      },
      {
        id: 'ask-ego',
        text: '« Mon ego... Comment je fais pour le voir ? Il est invisible, non ? Comment combattre quelque chose que je ne vois pas ? »',
        nextPage: 'ch1-b2-ego',
        tag: 'courage',
        emoji: '🤔',
      },
      {
        id: 'ask-why-me',
        text: '« Mais pourquoi moi ? Je suis qu\'un enfant. Il y a des adultes bien plus sages que moi ! »',
        nextPage: 'ch1-b3-why',
        tag: 'humility',
        emoji: '👶',
      },
    ],
  },

  'ch1-b1-fear': {
    id: 'ch1-b1-fear',
    chapter: 1,
    chapterTitle: 'La Découverte',
    paragraphs: [
      `Moulay sourit tendrement. — « La peur est le début de la sagesse, Souhayl. Seul l'insensé n'a pas peur. Mais écoute bien : la faiblesse n'est pas un défaut quand on s'appuie sur le Fort. Et le plus Fort de tous, c'est Allah. »`,
      `— « Quand tu te sentiras faible, murmura-t-il, souviens-toi de cette phrase : « Hasbunallahu wa ni'mal wakeel » — Allah nous suffit, et quel excellent protecteur. Ce n'est pas ta force qui comptera, mais ta confiance en Lui. »`,
    ],
    mood: 'wisdom',
    shaykhSpeaks: 'La peur est la porte de la foi. Celui qui a peur et avance quand même est plus fort que celui qui n\'a jamais eu peur.',
    next: 'ch1-night',
  },

  'ch1-b2-ego': {
    id: 'ch1-b2-ego',
    chapter: 1,
    chapterTitle: 'La Découverte',
    paragraphs: [
      `Moulay écarquilla les yeux, surpris. — « Excellente question ! L'ego est invisible, oui... mais il laisse des traces. Quand tu te mets en colère sans raison, c'est lui. Quand tu refuses d'admettre que tu as tort, c'est lui. Quand tu compares tes jouets à ceux de ton ami et que tu en veux plus, c'est encore lui. »`,
      `— « Le Tassawuf t'apprendra à le reconnaître. Pas à le détruire — impossible — mais à le connaître, pour qu'il ne te contrôle plus sans que tu le saches. »`,
    ],
    mood: 'wisdom',
    shaykhSpeaks: 'Ton ego est comme un chien en laisse. Si tu ne le tiens pas, il te traîne. Si tu le tiens trop fort, il te mord. La sagesse, c\'est de connaître la bonne longueur de laisse.',
    next: 'ch1-night',
  },

  'ch1-b3-why': {
    id: 'ch1-b3-why',
    chapter: 1,
    chapterTitle: 'La Découverte',
    paragraphs: [
      `Moulay rit doucement, un rire qui venait du fond de sa poitrine. — « Précisément ! Les adultes ont construit des forteresses autour de leur ego — si épaisses que même la lumière a du mal à y pénétrer. Le tien est encore une cabane. Plus facile à transformer. »`,
      `— « Et puis, continua-t-il, tu as quelque chose que beaucoup d'adultes ont perdu : la sincérité. Tu ne cherches pas la gloire ni la reconnaissance. Tu veux juste comprendre. Et c'est la meilleure intention possible. »`,
    ],
    mood: 'wisdom',
    shaykhSpeaks: 'Les cœurs purs voient ce que les cœurs voilés ne peuvent même pas imaginer. Ne sous-estime jamais la force de ton innocence.',
    next: 'ch1-night',
  },

  'ch1-night': {
    id: 'ch1-night',
    chapter: 1,
    chapterTitle: 'La Découverte',
    paragraphs: [
      `Cette nuit-là, Souhayl ne put pas dormir. Les mots de Moulay tournaient dans sa tête. Dehors, la lune baignait le village d'une lumière argentée.`,
      `Il ferma les yeux. Et au moment exact où ses paupières se rejoignirent, l'odeur de sa chambre changea — plus de lavande, mais du sable chaud, de l'encens brûlé. Une voix intérieure murmura : « Souhayl... le voyage commence maintenant. »`,
    ],
    mood: 'wonder',
    next: 'ch1-door',
  },

  'ch1-door': {
    id: 'ch1-door',
    chapter: 1,
    chapterTitle: 'La Découverte',
    paragraphs: [
      `Quand Souhayl rouvrit les yeux, il se tenait debout sur un sol de terre rouge, sous un ciel changeant. Devant lui, une porte immense — noire, ornée de symboles dorés pulsant comme un cœur vivant. Au centre du mot « قلب » — Qalb — Le Cœur.`,
      `À ses pieds, une petite lampe à huile attendait. La voix intérieure demanda : « Avec quoi veux-tu franchir cette porte, Souhayl ? »`,
    ],
    mood: 'wonder',
    next: 'ch1-choice-enter',
  },

  // ─── CHOICE 3: Comment franchir la porte ───
  'ch1-choice-enter': {
    id: 'ch1-choice-enter',
    chapter: 1,
    chapterTitle: 'La Découverte',
    paragraphs: [
      `La porte pulsait doucement. Chaque battement résonnait dans sa poitrine, comme si la porte et son cœur battaient au même rythme. Le moment était venu de choisir.`,
    ],
    mood: 'wonder',
    choices: [
      {
        id: 'enter-courage',
        text: 'Pousser la porte avec force — « Je n\'ai peur de rien ! Mon cœur est brave et Allah est avec moi ! »',
        nextPage: 'ch1-c1-courage',
        tag: 'courage',
        emoji: '🦁',
      },
      {
        id: 'enter-humility',
        text: 'S\'agenouiller et prier — « Ya Allah, je ne suis rien sans Toi. Ouvre-moi cette porte, car seul Toi le peux. »',
        nextPage: 'ch1-c2-humility',
        tag: 'humility',
        emoji: '🤲',
      },
      {
        id: 'enter-wonder',
        text: 'Tendre la main et toucher la porte doucement — la caresser comme on caresse un animal sauvage, avec curiosité et respect.',
        nextPage: 'ch1-c3-wonder',
        tag: 'sensitivity',
        emoji: '✨',
      },
    ],
  },

  'ch1-c1-courage': {
    id: 'ch1-c1-courage',
    chapter: 1,
    chapterTitle: 'La Découverte',
    paragraphs: [
      `La porte s'ouvrit dans un grondement sourd. Un corridor aux murs de mosaïques scintillantes apparut. Mais quelque chose avait aussi été réveillé — au loin, un grondement répondit au sien. Quelque chose de vivant qui avait entendu sa bravoure et le défiait.`,
      `— « Le courage est une arme, murmura la voix. Mais toute arme peut se retourner contre celui qui la manie. Veille à ce que ta bravoure ne devienne pas de l'orgueil. »`,
    ],
    mood: 'wonder',
    next: 'ch1-arrival',
  },

  'ch1-c2-humility': {
    id: 'ch1-c2-humility',
    chapter: 1,
    chapterTitle: 'La Découverte',
    paragraphs: [
      `La porte se dissolut comme du sel dans l'eau. Derrière elle, une lumière dorée infiniment paisible l'accueillit — comme l'aube filtrant les fenêtres d'une mosquée. Des larmes coulèrent sur les joues de Souhayl sans qu'il sache pourquoi.`,
      `— « L'humilité est la clé de toutes les portes du ciel, murmura la voix avec tendresse. Garde-la précieusement — beaucoup la perdent en chemin. »`,
    ],
    mood: 'peace',
    next: 'ch1-arrival',
  },

  'ch1-c3-wonder': {
    id: 'ch1-c3-wonder',
    chapter: 1,
    chapterTitle: 'La Découverte',
    paragraphs: [
      `Ses doigts frôlèrent la porte. Elle trembla, puis s'entrouvit doucement, comme une fleur qui s'épanouit. À l'intérieur, le monde était différent — le sol était translucide, révélant des océans et des forêts souterraines. Le plafond était un ciel en spirale de nébuleuses colorées.`,
      `— « La sensibilité est un don rare, murmura la voix. Le monde intérieur se révèle à ceux qui savent le toucher avec douceur. Ton cœur est doux, Souhayl. Ne laisse jamais le monde l'endurcir. »`,
    ],
    mood: 'wonder',
    next: 'ch1-arrival',
  },

  'ch1-arrival': {
    id: 'ch1-arrival',
    chapter: 1,
    chapterTitle: 'La Découverte',
    paragraphs: [
      `Souhayl fit ses premiers pas. Le sol changeait sous ses pieds — herbe tendre, puis sable chaud, puis marbre froid. Sa lampe brûlait d'une flamme constante. Des arbres aux feuilles de lumière poussaient par endroits, leurs branches chargées de fruits-souvenirs.`,
      `Et au loin, trois chemins se dessinaient : un vers une lumière blanche, un vers un son mélodieux, un vers une rivière scintillante. Chacun semblait l'appeler différemment.`,
    ],
    mood: 'wonder',
    next: 'ch1-choice-path',
  },

  // ─── CHOICE 4: Quel chemin explorer en premier ───
  'ch1-choice-path': {
    id: 'ch1-choice-path',
    chapter: 1,
    chapterTitle: 'La Découverte',
    paragraphs: [
      `Les trois chemins l'attiraient chacun avec une force différente. Le chemin de lumière lui donnait envie de courir. Le chemin du son l'apaisait. Le chemin de la rivière éveillait sa soif. Lequel choisir ?`,
    ],
    mood: 'wonder',
    choices: [
      {
        id: 'path-light',
        text: 'La lumière blanche — quelque chose de pur et de brillant l\'attend là-bas. Il veut voir ce qui brille autant.',
        nextPage: 'ch1-d1-light',
        tag: 'truth',
        emoji: '☀️',
      },
      {
        id: 'path-sound',
        text: 'Le son mélodieux — une mélodie ancienne l\'appelle. C\'est comme une prière, mais en musique. Il veut l\'écouter.',
        nextPage: 'ch1-d2-sound',
        tag: 'devotion',
        emoji: '🎵',
      },
      {
        id: 'path-river',
        text: 'La rivière scintillante — ses eaux sont transparentes comme du cristal. Quelque chose lui dit qu\'elles reflètent la vérité.',
        nextPage: 'ch1-d3-river',
        tag: 'reflection',
        emoji: '🌊',
      },
    ],
  },

  'ch1-d1-light': {
    id: 'ch1-d1-light',
    chapter: 1,
    chapterTitle: 'La Découverte',
    paragraphs: [
      `Souhayl marcha vers la lumière. Plus il s'approchait, plus il se sentait léger — comme si des poids invisibles se détachaient de ses épaules. Quand il arriva à la source, il découvrit une lanterne ancienne flottant dans les airs, sa flamme blanche irradiant une paix indescriptible.`,
      `— « La lumière de la guidance, dit une voix grave. Elle ne brille que pour celui qui la cherche sincèrement. Souhayl, tu as choisi la voie de la vérité. Souviens-toi de cette lumière quand l'obscurité viendra. »`,
    ],
    mood: 'peace',
    next: 'ch1-end',
  },

  'ch1-d2-sound': {
    id: 'ch1-d2-sound',
    chapter: 1,
    chapterTitle: 'La Découverte',
    paragraphs: [
      `La mélodie se faisait plus claire à chaque pas. Ce n'était pas une musique ordinaire — c'était du dhikr, la répétition des noms d'Allah, chantée par des voix invisibles d'une beauté surnaturelle. Souhayl sentit son cœur vibrer à l'unisson.`,
      `— « Le dhikr est la nourriture des âmes, dit une voix douce. Quand tu te sentiras seul dans ce monde, rappelle-toi d'Allah, et Il se souviendra de toi. C'est la promesse la plus sûre. »`,
    ],
    mood: 'peace',
    next: 'ch1-end',
  },

  'ch1-d3-river': {
    id: 'ch1-d3-river',
    chapter: 1,
    chapterTitle: 'La Découverte',
    paragraphs: [
      `Souhayl s'agenouilla au bord de la rivière. Ses eaux ne reflétaient pas son visage — elles reflétaient ses émotions. Bleu quand il était calme, rouge quand il pensait à la colère, noir quand la peur traversait son esprit. C'était fascinant et terrifiant.`,
      `— « Cette rivière est ton cœur, dit une voix sourde. Regarde-la bien. Apprends à la connaître. Car bientôt, tu devras la traverser, et seule la sincérité te permettra de ne pas couler. »`,
    ],
    mood: 'wonder',
    next: 'ch1-end',
  },

  'ch1-end': {
    id: 'ch1-end',
    chapter: 1,
    chapterTitle: 'La Découverte',
    paragraphs: [
      `Après cette première exploration, une voix appela depuis les hauteurs : « Souhayl ! Le désert de ton âme t'attend ! Viens voir ce que ton cœur contient vraiment ! »`,
      `Le paysage se transforma. L'horizon s'ouvrit sur un désert immense aux dunes dorées, sous un ciel où deux lunes se croisaient. Le vent soufflait, chaud et chargé de mystère.`,
    ],
    mood: 'wonder',
    next: 'ch2-start',
  },

  // ═══════════════════════════════════════════
  // CHAPTER 2: LE DÉSERT DE L'ÂME
  // ═══════════════════════════════════════════
  'ch2-start': {
    id: 'ch2-start',
    chapter: 2,
    chapterTitle: 'Le Désert de l\'Âme',
    paragraphs: [
      `Les dunes du désert n'étaient pas faites de sable — chaque grain était une pensée de Souhayl. Des millions de grains, des milliards de pensées, certaines dorées et brillantes, d'autres sombres comme des cendres.`,
      `Il marchait depuis combien de temps ? Impossible à dire. Sa lampe vacillait sous le souffle du vent. Et puis, il vit des traces — pas les siennes. Elles le suivaient, parallèles, invisibles. Souhayl accéléra — les traces accélérèrent.`,
    ],
    mood: 'darkness',
    next: 'ch2-choice-footsteps',
    isChapterStart: true,
  },

  // ─── CHOICE 5: Réaction aux pas mystérieux ───
  'ch2-choice-footsteps': {
    id: 'ch2-choice-footsteps',
    chapter: 2,
    chapterTitle: 'Le Désert de l\'Âme',
    paragraphs: [
      `Les traces s'arrêtèrent quand il s'arrêta. Elles l'imitaient. Quelque chose — ou quelqu'un — marchait juste à côté de lui, invisible. Son cœur battait si fort que le sable vibrait autour de ses pieds.`,
    ],
    mood: 'darkness',
    choices: [
      {
        id: 'call-out',
        text: 'Crier vers l\'invisible — « Montre-toi ! Qui es-tu ? Je n\'ai pas peur de toi ! » — l\'affronter directement.',
        nextPage: 'ch2-a1-call',
        tag: 'boldness',
        emoji: '📢',
      },
      {
        id: 'follow-traces',
        text: 'Suivre les traces silencieusement — se déplacer prudemment, essayer de surprendre cette chose par ruse.',
        nextPage: 'ch2-a2-follow',
        tag: 'cunning',
        emoji: '👣',
      },
      {
        id: 'stand-still',
        text: 'S\'immobiliser et attendre — ne pas bouger, ne pas parler. Laisser l\'invisible venir à lui.',
        nextPage: 'ch2-a3-still',
        tag: 'patience',
        emoji: '🧘',
      },
    ],
  },

  'ch2-a1-call': {
    id: 'ch2-a1-call',
    chapter: 2,
    chapterTitle: 'Le Désert de l\'Âme',
    paragraphs: [
      `— « MONTE-TOI ! » Sa voix déchira le silence du désert. Les dunes tremblèrent. Et la silhouette apparut — pas un ennemi, mais un vieil homme en haillons, assis sur le sable, qui le regardait avec des yeux brillants d'amusement.`,
      `— « Tu cries fort pour un petit garçon, dit le vieillard. Mais la vraie force, ce n'est pas de crier plus fort que l'ombre — c'est de faire taire l'ombre par ta lumière. Je suis le Gardien du Désert. Je ne suis pas ton ennemi. Je suis ton premier test. »`,
    ],
    mood: 'darkness',
    next: 'ch2-guardian',
  },

  'ch2-a2-follow': {
    id: 'ch2-a2-follow',
    chapter: 2,
    chapterTitle: 'Le Désert de l\'Âme',
    paragraphs: [
      `Souhayl se mit à marcher à pas de loup, les yeux fixés sur les traces. Il contourna une dune, baissa la tête, accéléra — et trébucha sur quelque chose de chaud. Le vieillard était là, allongé sur le sable, comme s'il l'attendait.`,
      `— « Tu essaies de me surprendre par ruse ? rit le vieil homme. L'esprit est une bonne chose, Souhayl. Mais la ruse contre soi-même ne fonctionne pas. Je suis le Gardien du Désert. Viens, assieds-toi. »`,
    ],
    mood: 'darkness',
    next: 'ch2-guardian',
  },

  'ch2-a3-still': {
    id: 'ch2-a3-still',
    chapter: 2,
    chapterTitle: 'Le Désert de l\'Âme',
    paragraphs: [
      `Souhayl s'immobilisa. Il ferma les yeux, tendit l'oreille. Le vent chuchotait des mots qu'il ne comprenait pas. Et puis, lentement, il sentit une présence s'installer à côté de lui — tiède, calme, comme un vieil ami.`,
      `Quand il ouvrit les yeux, le vieillard était là, assis à côté de lui, un sourire paisible sur son visage ridé. — « Tu as choisi le silence. C'est le choix des sages, Souhayl. Je suis le Gardien du Désert. Bienvenue. »`,
    ],
    mood: 'darkness',
    next: 'ch2-guardian',
  },

  'ch2-guardian': {
    id: 'ch2-guardian',
    chapter: 2,
    chapterTitle: 'Le Désert de l\'Âme',
    paragraphs: [
      `Le Gardien pointa une dune plus haute que les autres. — « Là-haut se trouve le Miroir de l'Âme. Il montrera ton cœur tel qu'il est — avec sa poussière et sa lumière. Avant d'y aller, tu dois me dire quelque chose... »`,
      `— « Dis-moi, Souhayl : quand tu te disputes avec ton frère ou ton ami, qu'est-ce qui te pousse à continuer ? Qu'est-ce qui ne veut pas lâcher ? »`,
    ],
    mood: 'darkness',
    next: 'ch2-choice-truth',
  },

  // ─── CHOICE 6: Dialogue avec le Gardien ───
  'ch2-choice-truth': {
    id: 'ch2-choice-truth',
    chapter: 2,
    chapterTitle: 'Le Désert de l\'Âme',
    paragraphs: [
      `Le Gardien attendait sa réponse. Le vent soufflait, soulevant des volutes de sable-pensées autour d'eux. Cette question n'était pas anodine — elle allait déterminer comment le miroir allait le recevoir.`,
    ],
    mood: 'darkness',
    choices: [
      {
        id: 'truth-justice',
        text: '« C\'est parce que j\'ai raison ! L\'autre a tort et je veux qu\'il le reconnaisse ! C\'est une question de justice ! »',
        nextPage: 'ch2-b1-justice',
        tag: 'pride',
        emoji: '⚖️',
      },
      {
        id: 'truth-hurt',
        text: '« Parce que l\'autre m\'a blessé... et quand on me blesse, je veux que ça s\'arrête. Même si ça veut dire que je blesse aussi. »',
        nextPage: 'ch2-b2-hurt',
        tag: 'honesty',
        emoji: '💔',
      },
      {
        id: 'truth-dont-know',
        text: '« Je... je ne sais pas. Au moment où ça arrive, je ne réfléchis pas. C\'est comme si quelque chose prenait le contrôle. Et après, je regrette toujours. »',
        nextPage: 'ch2-b3-dontknow',
        tag: 'awareness',
        emoji: '💭',
      },
    ],
  },

  'ch2-b1-justice': {
    id: 'ch2-b1-justice',
    chapter: 2,
    chapterTitle: 'Le Désert de l\'Âme',
    paragraphs: [
      `Le Gardien inclina la tête. — « La justice, oui... mais est-ce vraiment la justice ? Ou est-ce l'ego qui porte le masque de la justice ? L'ego adore se faire passer pour un justicier. C'est sa ruse la plus ancienne. »`,
      `— « Souviens-toi : chaque fois que tu te dis 'j'ai raison', pose-toi cette question — 'Et si je me trompais ?' La vraie justice commence par le doute en soi-même. »`,
    ],
    mood: 'wisdom',
    next: 'ch2-mirror',
  },

  'ch2-b2-hurt': {
    id: 'ch2-b2-hurt',
    chapter: 2,
    chapterTitle: 'Le Désert de l\'Âme',
    paragraphs: [
      `Le Gardien posa sa main sur celle de Souhayl. — « La douleur parle, Souhayl. Et elle dit souvent la vérité. Mais attention — répondre à la douleur par la douleur, c'est comme éteindre un feu avec du feu. Ça ne fait que grossir les flammes. »`,
      `— « Le Prophète ﷺ disait : 'Ne sois pas en colère.' Ce n'est pas un ordre de ne pas ressentir — c'est un conseil de ne pas agir sous le coup de l'émotion. La colère est un visiteur. Laisse-le entrer, mais ne lui donne pas les clés de la maison. »`,
    ],
    mood: 'wisdom',
    next: 'ch2-mirror',
  },

  'ch2-b3-dontknow': {
    id: 'ch2-b3-dontknow',
    chapter: 2,
    chapterTitle: 'Le Désert de l\'Âme',
    paragraphs: [
      `Le Gardien sourit, et cette fois son sourire illuminait tout le désert. — « Tu ne sais pas. Et c'est la réponse la plus vraie que tu puisses donner. Le 'je ne sais pas' est le début de toute connaissance. »`,
      `— « Ce qui prend le contrôle en toi, c'est le Nafs. Et le fait que tu le reconnaisses — que tu regrettes après — c'est la preuve que ta fitra, ta nature originelle, est intacte. Le Tassawuf va t'apprendre à faire en sorte que ce 'quelque chose' n'ait plus le dernier mot. »`,
    ],
    mood: 'wisdom',
    shaykhSpeaks: 'Celui qui reconnaît son ignorance est plus savant que celui qui croit tout savoir.',
    next: 'ch2-mirror',
  },

  'ch2-mirror': {
    id: 'ch2-mirror',
    chapter: 2,
    chapterTitle: 'Le Désert de l\'Âme',
    paragraphs: [
      `Au sommet de la dune, le Miroir de l'Âme l'attendait. Un rectangle de verre poli enchâssé dans le sable, reflétant la lumière des deux lunes. Et ce qu'il montrait n'était pas le visage de Souhayl — mais son cœur, battant lentement, couvert de poussière.`,
      `Des ombres rampaient comme des serpents autour du cœur. Des couches de poussière voilaient sa lumière. Et au centre, une petite flamme dorée — la fitra — pulsait faiblement, comme une bougie dans une pièce sombre.`,
    ],
    mood: 'darkness',
    next: 'ch2-nafs-appears',
  },

  'ch2-nafs-appears': {
    id: 'ch2-nafs-appears',
    chapter: 2,
    chapterTitle: 'Le Désert de l\'Âme',
    paragraphs: [
      `Une silhouette se détacha du miroir. Le Nafs — l'ego de Souhayl. Il avait ses traits, ses yeux, mais son expression était différente : un sourire narquois, des yeux brillants de malice.`,
      `— « Tu me regardes ? dit le Nafs. Regarde bien. Voilà ce que tu es vraiment. Couvert de poussière. Faible. Mauvais. Tu ne pourras jamais me vaincre. »`,
      `Le Shaykh apparut à gauche, sa lumière repoussant les ombres. — « Le moment est venu, Souhayl. Tu dois affronter ton Nafs. Pas moi. Toi. C'est ton épreuve. »`,
    ],
    mood: 'danger',
    next: 'ch2-choice-nafs',
  },

  // ─── CHOICE 7: Affronter le Nafs ───
  'ch2-choice-nafs': {
    id: 'ch2-choice-nafs',
    chapter: 2,
    chapterTitle: 'Le Désert de l\'Âme',
    paragraphs: [
      `Le Nafs se tenait entre Souhayl et le miroir, un sourire satisfait aux lèvres. Le Shaykh observait sans intervenir. C'était l'épreuve de la première bataille intérieure.`,
    ],
    mood: 'danger',
    choices: [
      {
        id: 'nafs-confront',
        text: 'Le regarder droit dans les yeux et crier — « Tu n\'es qu\'une illusion ! Mon cœur appartient à Allah ! » L\'affronter de face.',
        nextPage: 'ch2-c1-confront',
        tag: 'confrontation',
        emoji: '⚔️',
      },
      {
        id: 'nafs-ignore',
        text: 'Se détourner de lui et se concentrer sur la petite lumière dorée dans le miroir — la fitra. L\'ignorer complètement.',
        nextPage: 'ch2-c2-ignore',
        tag: 'detachment',
        emoji: '👁️',
      },
      {
        id: 'nafs-talk',
        text: 'Lui parler calmement — « Pourquoi tu me fais du mal ? Qu\'est-ce que tu veux ? Comprendre pour mieux agir. »',
        nextPage: 'ch2-c3-talk',
        tag: 'empathy',
        emoji: '🗣️',
      },
    ],
  },

  'ch2-c1-confront': {
    id: 'ch2-c1-confront',
    chapter: 2,
    chapterTitle: 'Le Désert de l\'Âme',
    paragraphs: [
      `Souhayl serra les poings et cria avec toute la force de son cœur. Le Nafs recula d'un pas, surpris. Mais les fissures dans le miroir se propagèrent, les ombres s'agitèrent — la confrontation avait aussi agité le cœur.`,
      `Le Nafs ricana. — « Tu cries fort... mais crie-tu parce que tu es fort, ou parce que tu as peur ? » Le Shaykh murmura : « Le courage est une étape. Mais le cri sans sagesse est du vent. »`,
    ],
    mood: 'danger',
    next: 'ch2-after-nafs',
  },

  'ch2-c2-ignore': {
    id: 'ch2-c2-ignore',
    chapter: 2,
    chapterTitle: 'Le Désert de l\'Âme',
    paragraphs: [
      `Souhayl tourna le dos au Nafs. — « Je ne te regarde même pas, murmura-t-il. » Il fixa la petite flamme dorée dans le miroir et se concentra sur elle de tout son être. La flamme grandit, dévorant la poussière autour d'elle.`,
      `Le Nafs hurla de rage, puis sa voix faiblit, puis se tut. Sans l'attention de Souhayl, il n'avait plus de nourriture. Le Shaykh approuva : « Le plus grand combat contre l'ego est de ne pas lui donner ce qu'il veut : ton attention. »`,
    ],
    mood: 'peace',
    next: 'ch2-after-nafs',
  },

  'ch2-c3-talk': {
    id: 'ch2-c3-talk',
    chapter: 2,
    chapterTitle: 'Le Désert de l\'Âme',
    paragraphs: [
      `— « Pourquoi tu me fais du mal ? demanda Souhayl calmement. » Le Nafs fut déstabilisé. On ne lui avait jamais posé cette question. — « Je... je ne te fais pas de mal. Je te protège. Sans moi, tu n'oserais rien. Sans moi, tu serais invisible. »`,
      `Souhayl comprit : le Nafs n'était pas purement mauvais. Il était un outil devenu maître. — « Merci de me protéger, dit-il. Mais maintenant, je veux choisir moi-même. » Le Nafs vacilla, diminua, et s'assit en silence.`,
    ],
    mood: 'wisdom',
    shaykhSpeaks: 'Comprendre son ennemi, c\'est déjà le désarmer. Celui qui connaît son ego le maîtrise. Celui qui le combat sans le connaître le renforce.',
    next: 'ch2-after-nafs',
  },

  'ch2-after-nafs': {
    id: 'ch2-after-nafs',
    chapter: 2,
    chapterTitle: 'Le Désert de l\'Âme',
    paragraphs: [
      `Le Shaykh posa sa main sur la tête de Souhayl. — « Tu as survécu à ta première rencontre avec le Nafs. Il reviendra sous d'autres formes — colérique, séduisant, compatissant. Ne te fie jamais à ses apparences. »`,
      `Le désert changea. La végétation apparut, puis les arbres immenses d'une forêt mystérieuse. — « La Forêt des Épreuves t'attend. Chaque arbre, chaque ombre, sera un test. »`,
    ],
    mood: 'wisdom',
    shaykhSpeaks: 'La victoire sur soi est la plus grande des victoires. Mais ne célèbre pas trop vite — la guerre du cœur dure jusqu\'au dernier souffle.',
    next: 'ch3-start',
  },

  // ═══════════════════════════════════════════
  // CHAPTER 3: LA FORÊT DES ÉPREUVES
  // ═══════════════════════════════════════════
  'ch3-start': {
    id: 'ch3-start',
    chapter: 3,
    chapterTitle: 'La Forêt des Épreuves',
    paragraphs: [
      `La forêt était immense. Des arbres plus hauts que des maisons, des troncs couverts d'une écorce qui ressemblait à de la peau humaine, des branches qui semblaient bouger quand il ne regardait pas. La lumière filtrait en rayons dorés entre les feuilles.`,
      `Au bout de quelques minutes, Souhayl arriva à un carrefour. Trois chemins partaient dans trois directions. Et au centre du carrefour, un vieil arbre était tombé en travers du passage. Un arbre énorme qui bloquait complètement le chemin principal.`,
    ],
    mood: 'darkness',
    next: 'ch3-choice-tree',
    isChapterStart: true,
  },

  // ─── CHOICE 8: L'arbre tombé (épreuve d'obstacle) ───
  'ch3-choice-tree': {
    id: 'ch3-choice-tree',
    chapter: 3,
    chapterTitle: 'La Forêt des Épreuves',
    paragraphs: [
      `L'arbre tombé était massif — impossible à franchir directement. Le chemin principal était bloqué. Mais les deux chemins de contournement semblaient... différents. Celui de gauche sentait l'humidité et la mousse. Celui de droite était sec, couvert de feuilles mortes.`,
    ],
    mood: 'darkness',
    choices: [
      {
        id: 'tree-climb',
        text: 'Essayer de grimper sur l\'arbre et passer par-dessus — c\'est un obstacle, pas un mur. On peut toujours trouver un moyen de traverser.',
        nextPage: 'ch3-a1-climb',
        tag: 'perseverance',
        emoji: '🧗',
      },
      {
        id: 'tree-left',
        text: 'Prendre le chemin de gauche, humide et vert — ça semble plus long mais plus sûr. Les choses qui poussent ont plus de vie.',
        nextPage: 'ch3-a2-left',
        tag: 'caution',
        emoji: '🌿',
      },
      {
        id: 'tree-right',
        text: 'Prendre le chemin de droite, sec et direct — le plus court est souvent le meilleur. Pas de temps à perdre.',
        nextPage: 'ch3-a3-right',
        tag: 'efficiency',
        emoji: '🍂',
      },
    ],
  },

  'ch3-a1-climb': {
    id: 'ch3-a1-climb',
    chapter: 3,
    chapterTitle: 'La Forêt des Épreuves',
    paragraphs: [
      `Souhayl s'agrippa à l'écorce et commença à grimper. L'arbre gémit sous son poids mais tint bon. Arrivé en haut, il découvrit quelque chose d'étonnant : une cache creusée dans le tronc, contenant un petit sachet en soie rouge.`,
      `Il l'ouvrit. À l'intérieur, une médaille dorée avec une inscription : « La patience est la clé du Paradis. » — « Tu as été récompensé pour ton effort, murmura le Shaykh. Dans le Tassawuf, chaque difficulté surmontée porte un cadeau. »`,
    ],
    mood: 'wonder',
    next: 'ch3-creature',
  },

  'ch3-a2-left': {
    id: 'ch3-a2-left',
    chapter: 3,
    chapterTitle: 'La Forêt des Épreuves',
    paragraphs: [
      `Le chemin de gauche était plus long mais magnifique. Des fleurs lumineuses poussaient sur les bords, des papillons dorés voletaient autour de lui. Et au milieu du chemin, une petite fontaine d'eau claire. Souhayl but — l'eau était douce et fraîche.`,
      `— « Le chemin le plus sûr n'est pas toujours le plus court, dit le Shaykh. Mais il donne souvent plus que le chemin rapide. La fontaine de la patience n'apparaît que sur les chemins de ceux qui prennent le temps. »`,
    ],
    mood: 'peace',
    next: 'ch3-creature',
  },

  'ch3-a3-right': {
    id: 'ch3-a3-right',
    chapter: 3,
    chapterTitle: 'La Forêt des Épreuves',
    paragraphs: [
      `Le chemin de droite était rapide mais rude. Des racines affleurantes le firent trébucher trois fois. Des branches basses lui fouettaient le visage. Mais il avançait vite — peut-être trop vite.`,
      `Il arriva de l'autre côté essoufflé, les genoux écorchés. — « La vitesse est utile, dit le Shaykh, mais elle a un prix. Celui qui court trop vite ne voit pas les panneaux sur la route. Prends le temps de regarder, même quand tu as envie de courir. »`,
    ],
    mood: 'darkness',
    next: 'ch3-creature',
  },

  'ch3-creature': {
    id: 'ch3-creature',
    chapter: 3,
    chapterTitle: 'La Forêt des Épreuves',
    paragraphs: [
      `Au détour d'un arbre, Souhayl s'arrêta net. Un petit être était assis sur le chemin, les jambes pendantes, la tête baissée. Pas un monstre — un enfant. Ou plutôt, quelque chose qui ressemblait à un enfant, avec des yeux trop grands et une peau d'un bleu pâle, presque transparent.`,
      `— « S'il te plaît... murmura l'être sans lever la tête. Je suis perdu. Je cherche le chemin de la rivière de lumière, mais je ne le trouve pas. Peux-tu m'aider ? »`,
    ],
    mood: 'wonder',
    next: 'ch3-choice-help',
  },

  // ─── CHOICE 9: Aider la créature ───
  'ch3-choice-help': {
    id: 'ch3-choice-help',
    chapter: 3,
    chapterTitle: 'La Forêt des Épreuves',
    paragraphs: [
      `L'être le regardait avec ses yeux immenses, remplis d'une tristesse ancienne. Souhayl sentit quelque chose dans sa poitrine — un appel à l'aide qu'il ne pouvait pas ignorer. Mais le chemin était long, et il avait ses propres épreuves à affronter.`,
    ],
    mood: 'wonder',
    choices: [
      {
        id: 'help-guide',
        text: '« Viens avec moi, je vais t\'aider à trouver la rivière. On ira ensemble. » Le guider personnellement, même si ça le ralentit.',
        nextPage: 'ch3-b1-guide',
        tag: 'generosity',
        emoji: '🤝',
      },
      {
        id: 'help-directions',
        text: '« La rivière ? Continue tout droit, puis tourne à gauche au grand chêne. Tu ne peux pas la manquer. » Lui donner des indications sans s\'arrêter.',
        nextPage: 'ch3-b2-directions',
        tag: 'kindness',
        emoji: '🗺️',
      },
      {
        id: 'help-question',
        text: '« Qui es-tu ? D\'où tu viens ? Pourquoi tu cherches cette rivière ? » Poser des questions d\'abord — comprendre avant d\'agir.',
        nextPage: 'ch3-b3-question',
        tag: 'wisdom',
        emoji: '❓',
      },
    ],
  },

  'ch3-b1-guide': {
    id: 'ch3-b1-guide',
    chapter: 3,
    chapterTitle: 'La Forêt des Épreuves',
    paragraphs: [
      `Souhayl tendit la main à l'être. — « Viens. » Ils marchèrent ensemble pendant ce qui semblut être des heures. L'être tremblait de froid — Souhayl lui donna sa lampe. L'être avait peur des bruits — Souhayl chanta pour le rassurer.`,
      `Quand ils atteignirent la rivière, l'être se transforma. Sa peau bleue devint dorée. — « Merci, Souhayl. Tu m'as donné ta lumière, ta chaleur, ton temps. Sache que dans le monde intérieur, chaque acte de bonté nettoie une couche de poussière sur ton cœur. » Le Shaykh approuva silencieusement.`,
    ],
    mood: 'peace',
    next: 'ch3-waswas',
  },

  'ch3-b2-directions': {
    id: 'ch3-b2-directions',
    chapter: 3,
    chapterTitle: 'La Forêt des Épreuves',
    paragraphs: [
      `Souhayl s'arrêta, réfléchit aux directions que Moulay lui avait décrites, et donna les meilleures indications qu'il put. L'être le remercia et s'éloigna en boitant.`,
      `Le Shaykh apparut à côté de lui. — « La bonté est une graine, Souhayl. Tu en as planté une. Mais une graine seule ne fait pas un jardin. La générosité qui prend le temps de s'asseoir à côté de l'autre est plus forte que la bonté pressée. Ne sois pas avare de ton temps — c'est la monnaie la plus précieuse. »`,
    ],
    mood: 'wisdom',
    next: 'ch3-waswas',
  },

  'ch3-b3-question': {
    id: 'ch3-b3-question',
    chapter: 3,
    chapterTitle: 'La Forêt des Épreuves',
    paragraphs: [
      `— « Je suis la Sadda — la tristesse, répondit l'être. Je nais quand quelqu'un fait du mal à un autre. Et je cherche la rivière de lumière parce que seule la lumière peut me transformer en quelque chose de beau. »`,
      `Souhayl comprit. La tristesse n'était pas un ennemi — elle cherchait la guérison. Il s'assit à côté d'elle et dit : « Je ne connais pas le chemin de la rivière. Mais on peut la chercher ensemble. » Et c'est ensemble qu'ils la trouvèrent.`,
    ],
    mood: 'peace',
    next: 'ch3-waswas',
  },

  'ch3-waswas': {
    id: 'ch3-waswas',
    chapter: 3,
    chapterTitle: 'La Forêt des Épreuves',
    paragraphs: [
      `Les arbres devinrent plus sombres. Les branches s'entremêlaient, bloquant le ciel. Et dans les ténèbres entre les troncs, des ombres vivantes apparurent — les sbires de Shaytan. Elles convergèrent vers Souhayl.`,
      `Une silhouette se matérialisa devant lui. Jeune, beau, souriant. Des vêtements élégants, un parfum enivrant. — « Salam, Souhayl ! Je suis Waswās — le Chuchoteur. Je suis ton ami. Je veux juste t'aider. »`,
      `Derrière lui, un festin apparut — fruits, coussins moelleux, boissons dorées. — « Prends. Repose-toi. Tu mérites le confort. Pourquoi souffrir quand tu peux être heureux maintenant ? »`,
    ],
    mood: 'danger',
    next: 'ch3-choice-waswas',
  },

  // ─── CHOICE 10: Face à Waswās ───
  'ch3-choice-waswas': {
    id: 'ch3-choice-waswas',
    chapter: 3,
    chapterTitle: 'La Forêt des Épreuves',
    paragraphs: [
      `Waswās tendait sa main avec un sourire parfait. Les fruits sentaient divinement bons. Tout en Souhayl voulait dire oui. Mais au fond de son cœur, la petite flamme de la fitra pulsait faiblement, comme un rappel.`,
    ],
    mood: 'danger',
    choices: [
      {
        id: 'waswas-reject',
        text: 'Repousser la main — « Non ! Tes mensonges ne me tromperont pas ! Mon chemin est difficile mais il est vrai ! Va-t\'en ! »',
        nextPage: 'ch3-c1-reject',
        tag: 'firmness',
        emoji: '🛡️',
      },
      {
        id: 'waswas-question',
        text: 'Poser des questions — « Si tu es mon ami, pourquoi tu es apparu dans l\'obscurité ? Pourquoi tes fruits sont-ils si parfaits ? Que me caches-tu ? »',
        nextPage: 'ch3-c2-question',
        tag: 'discernment',
        emoji: '🧠',
      },
      {
        id: 'waswas-dhikr',
        text: 'Fermer les yeux et invoquer Allah — réciter « A\'udhu billahi min ash-shaytan ar-rajim ». La prière comme bouclier.',
        nextPage: 'ch3-c3-dhikr',
        tag: 'dhikr',
        emoji: '📿',
      },
    ],
  },

  'ch3-c1-reject': {
    id: 'ch3-c1-reject',
    chapter: 3,
    chapterTitle: 'La Forêt des Épreuves',
    paragraphs: [
      `Waswās grimça. Son sourire se brisa comme du verre, révélant une expression de rage froide. — « Tu vas le regretter, gamin. » L'illusion explosa — les fruits devinrent des cailloux, les coussins de la cendre. Waswās disparut dans les ténèbres.`,
      `Le Shaykh apparut. — « La force est utile contre Shaytan. Mais n'oublie pas : la fermeté sans douceur peut devenir de la dureté du cœur. Le meilleur des boucliers est celui qui protège sans blesser. »`,
    ],
    mood: 'triumph',
    next: 'ch3-path-choice',
  },

  'ch3-c2-question': {
    id: 'ch3-c2-question',
    chapter: 3,
    chapterTitle: 'La Forêt des Épreuves',
    paragraphs: [
      `Waswās bégaya. Ses mots perdirent leur mordant. — « Je... je t'offre le bonheur... » — « Le bonheur ne se vend pas, dit Souhayl. Et s'il est gratuit, il y a un piège. Qui es-tu vraiment ? »`,
      `Waswās poussa un cri de rage et l'illusion explosa. — « Tu as utilisé l'intelligence, dit le Shaykh. Et l'intelligence est l'arme la plus puissante contre le mensonge. Celui qui comprend le piège ne peut pas y tomber. »`,
    ],
    mood: 'wisdom',
    next: 'ch3-path-choice',
  },

  'ch3-c3-dhikr': {
    id: 'ch3-c3-dhikr',
    chapter: 3,
    chapterTitle: 'La Forêt des Épreuves',
    paragraphs: [
      `Souhayl ferma les yeux : « A'udhu billahi min ash-shaytan ar-rajim... » Sa voix tremblait au début, puis grossit, portée par quelque chose de plus grand que lui. « La ilaha illa Allah... »`,
      `Une lumière explosive jaillit de son cœur. Waswās et ses ombres se consumèrent comme du papier dans le feu. Le dhikr — le souvenir d'Allah — avait brûlé toutes les impuretés. Le Shaykh avait les larmes aux yeux. — « Le dhikr est le bouclier dont parle le Coran, Souhayl. Rappelle-toi d'Allah, et Il se souviendra de toi. »`,
    ],
    mood: 'peace',
    shaykhSpeaks: 'Le dhikr est le remède des cœurs et la lumière des âmes. Plus tu te souviens d\'Allah, plus Il se souvient de toi.',
    next: 'ch3-path-choice',
  },

  'ch3-path-choice': {
    id: 'ch3-path-choice',
    chapter: 3,
    chapterTitle: 'La Forêt des Épreuves',
    paragraphs: [
      `La forêt s'ouvrit sur une clairière. Trois chemins partaient vers la montagne lointaine : un étroit et rocailleux, un large et verdoyant, un droit et ardent comme du feu.`,
      `Le Shaykh s'arrêta. — « Ces trois chemins mènent tous à la Montagne de la Vérité. Mais la façon d'y arriver dépendra du chemin que tu choisiras. Écoute ton cœur, Souhayl. »`,
    ],
    mood: 'wonder',
    next: 'ch3-choice-path',
  },

  // ─── CHOICE 11: Le chemin de la montagne ───
  'ch3-choice-path': {
    id: 'ch3-choice-path',
    chapter: 3,
    chapterTitle: 'La Forêt des Épreuves',
    paragraphs: [
      `Chaque chemin avait une allure différente. Le rocheux semblait difficile mais honnête. Le verdoyant promettait douceur. Le ardent brillait d'une énergie presque magnétique. Souhayl sentait que ce choix allait façonner la suite de son voyage.`,
    ],
    mood: 'wonder',
    choices: [
      {
        id: 'path-rock',
        text: 'Le chemin rocailleux — difficile, exigeant, mais chaque pas est concret. Comme l\'effort dans la prière quand on n\'en a pas envie.',
        nextPage: 'ch3-d1-rock',
        tag: 'discipline',
        emoji: '⛰️',
      },
      {
        id: 'path-green',
        text: 'Le chemin verdoyant — doux, bordé de fleurs et de ruisseaux. La miséricorde plutôt que la rigueur. L\'amour plutôt que la peur.',
        nextPage: 'ch3-d2-green',
        tag: 'mercy',
        emoji: '🌸',
      },
      {
        id: 'path-fire',
        text: 'Le chemin ardent — droit, puissant, brûlant. Le feu de l\'amour divin qui consume tout ce qui n\'est pas essentiel.',
        nextPage: 'ch3-d3-fire',
        tag: 'passion',
        emoji: '🔥',
      },
    ],
  },

  'ch3-d1-rock': {
    id: 'ch3-d1-rock',
    chapter: 3,
    chapterTitle: 'La Forêt des Épreuves',
    paragraphs: [
      `Le chemin rocailleux demandait chaque pas. Chaque marche était un acte de volonté. Souhayl transpirait, ses muscles brûlaient, mais son esprit était étrangement clair — comme si la difficulté physique nettoyait ses pensées.`,
      `Quand il atteignit le sommet du sentier, la Montagne de la Vérité se dressait devant lui, majestueuse. — « La discipline forge des âmes solides, dit le Shaykh. Mais la rigidité sans compassion est un arbre sans feuilles — il survit mais ne donne rien. »`,
    ],
    mood: 'triumph',
    next: 'ch4-start',
  },

  'ch3-d2-green': {
    id: 'ch3-d2-green',
    chapter: 3,
    chapterTitle: 'La Forêt des Épreuves',
    paragraphs: [
      `Sur le chemin verdoyant, Souhayl croisa des créatures blessées — un oiseau, un renardeau, un vieil arbre. Et chaque fois, il s'arrêtait pour aider. La miséricorde devenait son mode de navigation.`,
      `La montagne apparut, auréolée de nuages dorés. — « La miséricorde ouvre les cœurs — le tien et celui des autres, dit le Shaykh. Mais la miséricorde sans justice est un océan sans rives — elle se perd dans l'infini. »`,
    ],
    mood: 'peace',
    next: 'ch4-start',
  },

  'ch3-d3-fire': {
    id: 'ch3-d3-fire',
    chapter: 3,
    chapterTitle: 'La Forêt des Épreuves',
    paragraphs: [
      `Le chemin de feu brûlait. Pas de douleur — de l'intensité pure. Chaque pas consumait une peur, un doute, une attache. Souhayl courait, poussé par un désir insatiable de se rapprocher d'Allah. C'était le 'ishq — l'amour divin des poètes soufis.`,
      `La montagne semblait plus proche que jamais. — « Le feu de la passion est le plus beau et le plus dangereux des chemins, dit le Shaykh. Un feu sans contrôle consume celui qui le porte autant que ce qu'il espère atteindre. »`,
    ],
    mood: 'triumph',
    next: 'ch4-start',
  },

  // ═══════════════════════════════════════════
  // CHAPTER 4: LA MONTAGNE DE LA VÉRITÉ
  // ═══════════════════════════════════════════
  'ch4-start': {
    id: 'ch4-start',
    chapter: 4,
    chapterTitle: 'La Montagne de la Vérité',
    paragraphs: [
      `La Montagne de la Vérité se dressait comme un géant de pierre et de lumière, si haute que son sommet se perdait dans les nuages. Des centaines de sentiers la parcouraient, tracés par des voyageurs depuis des siècles.`,
      `— « Le dernier voyage t'appartient, Souhayl. Je ne peux pas monter avec toi jusqu'au bout. Souviens-toi de tout ce que tu as appris. Et n'oublie pas : le Shaykh n'est pas une personne — c'est la sagesse qui vit en toi. »`,
    ],
    mood: 'wonder',
    next: 'ch4-climb',
    isChapterStart: true,
  },

  'ch4-climb': {
    id: 'ch4-climb',
    chapter: 4,
    chapterTitle: 'La Montagne de la Vérité',
    paragraphs: [
      `À mi-chemin, le sentier se rétrécit dangereusement. D'un côté, une paroi rocheuse. De l'autre, un vide vertigineux. Et au milieu, un passage si étroit qu'un seul pied à la fois pouvait y avancer.`,
      `Le vent soufflait, essayant de le déséquilibrer. Souhayl regarda le vide, puis regarda la paroi, puis regarda le passage étroit. Son cœur battait à tout rompre.`,
    ],
    mood: 'danger',
    next: 'ch4-choice-cliff',
  },

  // ─── CHOICE 12: Le passage étroit ───
  'ch4-choice-cliff': {
    id: 'ch4-choice-cliff',
    chapter: 4,
    chapterTitle: 'La Montagne de la Vérité',
    paragraphs: [
      `Le passage était terrifiant mais inévitable. Pas de contournement possible. Souhayl devait traverser. Comment allait-il gérer cette peur ?`,
    ],
    mood: 'danger',
    choices: [
      {
        id: 'cliff-focus',
        text: 'Fixer un point au loin et avancer sans regarder en bas — une respiration après l\'autre. Contrôler sa peur par la concentration.',
        nextPage: 'ch4-a1-focus',
        tag: 'tawakkul',
        emoji: '🎯',
      },
      {
        id: 'cliff-trust',
        text: 'Fermer les yeux, avancer à l\'aveugle, et faire confiance — « Ya Allah, Tu es mon guide. Mène-moi. » Se remettre totalement à Allah.',
        nextPage: 'ch4-a2-trust',
        tag: 'surrender',
        emoji: '🙈',
      },
      {
        id: 'cliff-back',
        text: 'Faire demi-tour et chercher un autre chemin — il doit bien y en avoir un autre. Ce passage est trop dangereux pour un enfant.',
        nextPage: 'ch4-a3-back',
        tag: 'prudence',
        emoji: '↩️',
      },
    ],
  },

  'ch4-a1-focus': {
    id: 'ch4-a1-focus',
    chapter: 4,
    chapterTitle: 'La Montagne de la Vérité',
    paragraphs: [
      `Souhayl fixa un point lumineux au loin — le sommet, peut-être — et avança. Un pas. Puis un autre. Son cœur cognait contre ses côtes, mais ses pieds étaient précis. La peur était là, mais elle ne le contrôlait plus. Il l'observait comme on observe un orage — de loin.`,
      `Quand il atteignit l'autre côté, il sentit quelque chose de nouveau en lui : la maîtrise. Pas la disparition de la peur — la capacité de marcher malgré elle. — « C'est ça, le vrai courage, murmura une voix. Pas l'absence de peur, mais la décision d'avancer quand même. »`,
    ],
    mood: 'triumph',
    next: 'ch4-plateau',
  },

  'ch4-a2-trust': {
    id: 'ch4-a2-trust',
    chapter: 4,
    chapterTitle: 'La Montagne de la Vérité',
    paragraphs: [
      `Souhayl ferma les yeux. — « Ya Allah... » Ses pieds trouvèrent le passage seuls, comme guidés par une force invisible. Le vent s'apaisa. Le vide sous ses pieds semblait se combler. Il avançait dans une paix totale.`,
      `Quand il rouvrit les yeux, il était de l'autre côté. Le tawakkul — la confiance en Allah — l'avait porté. — « Celui qui fait confiance à Allah ne sera jamais déçu, dit la voix. Car la confiance, c'est la certitude qu'Allah fait ce qu'il y a de meilleur pour toi. »`,
    ],
    mood: 'peace',
    next: 'ch4-plateau',
  },

  'ch4-a3-back': {
    id: 'ch4-a3-back',
    chapter: 4,
    chapterTitle: 'La Montagne de la Vérité',
    paragraphs: [
      `Souhayl fit demi-tour. Il chercha — un autre sentier, une échelle, un pont, n'importe quoi. Mais plus il cherchait, plus les sentiers s'effaçaient derrière lui. Bientôt, il n'y eut plus qu'un seul chemin : le passage étroit.`,
      `Il comprit : il n'y avait pas d'autre voie. Le passage était le seul chemin. Avec le cœur lourd, il revint et le traversa — tremblant, pleurant, mais traversant. — « La prudence est bonne, dit la voix. Mais parfois, ce que nous fuyons est exactement ce dont nous avons besoin. »`,
    ],
    mood: 'darkness',
    next: 'ch4-plateau',
  },

  'ch4-plateau': {
    id: 'ch4-plateau',
    chapter: 4,
    chapterTitle: 'La Montagne de la Vérité',
    paragraphs: [
      `Au sommet du sentier, un plateau circulaire. Et là, assis sur un trône de cristal noir, le Nafs l'attendait — transformé, plus grand, plus puissant, en armure sombre.`,
      `— « Tu es de retour, dit le Nafs. J'ai grandi, Souhayl. Chaque fois que tu m'as nourri — par la colère, l'orgueil, l'envie — j'ai grandi. Et maintenant... » Il se leva, immense. « ...je suis toi. »`,
      `Les ténèbres l'enveloppèrent. Le Nafs chargea, et Souhayl s'effondra sous le poids de ses propres doutes. Au cœur de l'obscurité, une voix demanda : « Que vas-tu faire, Souhayl ? »`,
    ],
    mood: 'danger',
    next: 'ch4-choice-final',
  },

  // ─── CHOICE 13: Le choix ultime ───
  'ch4-choice-final': {
    id: 'ch4-choice-final',
    chapter: 4,
    chapterTitle: 'La Montagne de la Vérité',
    paragraphs: [
      `Au cœur de l'obscurité, trois voies s'ouvrirent dans l'âme de Souhayl. Pas des chemins physiques — des réponses du cœur. Ce dernier choix définirait qui il était devenu. Pour toujours.`,
    ],
    mood: 'wonder',
    choices: [
      {
        id: 'final-surrender',
        text: 'L\'abandon total — « Ya Allah, je me rends. Je ne suis rien et Tu es tout. Prends ce qui reste de moi. Je suis Ton serviteur. »',
        nextPage: 'ending-light',
        tag: 'surrender',
        emoji: '🤲',
      },
      {
        id: 'final-seek',
        text: 'La demande sincère — « Ya Allah, guide-moi encore. Je veux comprendre, pas seulement croire. Montre-moi la voie de la sagesse. »',
        nextPage: 'ending-wisdom',
        tag: 'guidance',
        emoji: '📖',
      },
      {
        id: 'final-struggle',
        text: 'Se relever et livrer bataille — « Non. Je ne me rendrai pas. Je vais me battre contre mon ego jusqu\'à mon dernier souffle. »',
        nextPage: 'ending-shadow',
        tag: 'independence',
        emoji: '🗡️',
      },
    ],
  },

  // ═══════════════════════════════════════════
  // ENDINGS
  // ═══════════════════════════════════════════

  'ending-light': {
    id: 'ending-light',
    chapter: 4,
    chapterTitle: 'La Montagne de la Vérité',
    paragraphs: [
      `Souhayl tomba à genoux. — « Ya Allah... je me rends. Je ne suis rien et Tu es tout. »`,
      `Et à ce moment, tout changea. Les ténèbres se transformèrent en lumière. L'armure du Nafs se brisa en étoiles. Son ego apparut, nu et vulnérable, et pour la première fois, il n'était plus un ennemi — il était une partie de lui qui avait besoin de guérison.`,
      `— « Je te pardonne, dit Souhayl en posant sa main sur l'épaule du Nafs. Car si Allah le Très Haut peut pardonner, qui suis-je pour refuser la même grâce ? »`,
      `Le sommet de la montagne s'ouvrit sur une lumière infinie. Le Shaykh murmura : « Bienvenue, Souhayl. L'abandon est la plus grande des forces. Celui qui se rend à Allah trouve la liberté. »`,
    ],
    mood: 'ending',
    isEnding: true,
    endingType: 'light',
  },

  'ending-wisdom': {
    id: 'ending-wisdom',
    chapter: 4,
    chapterTitle: 'La Montagne de la Vérité',
    paragraphs: [
      `— « Ya Allah... guide-moi encore. Je veux comprendre. »`,
      `Une lumière douce se fit — pas éblouissante, mais illuminante. Comme l'aube. Le Nafs recula, apaisé, et le Shaykh apparut, rayonnant : « Tu as choisi la sagesse, Souhayl. La sagesse de savoir que l'on ne sait pas tout. »`,
      `— « Retourne dans ton monde, continua le Shaykh. Vis, fais des erreurs, apprends. Chaque jour est un pas vers Allah. Le Tassawuf n'a pas de fin — chaque réponse ouvre de nouvelles questions. Et c'est magnifique. Car c'est dans la recherche que l'âme grandit. »`,
    ],
    mood: 'ending',
    isEnding: true,
    endingType: 'wisdom',
  },

  'ending-shadow': {
    id: 'ending-shadow',
    chapter: 4,
    chapterTitle: 'La Montagne de la Vérité',
    paragraphs: [
      `Souhayl se releva. — « Je ne me rendrai pas. Je vais me battre ! » Il chargea le Nafs avec toute sa force. Mais plus il luttait, plus l'ego grandissait — car la volonté de détruire l'ego est elle-même un acte de l'ego.`,
      `Finalement, il s'effondra. Le Nafs se pencha sur lui — et pleura. — « Pourquoi ne demandes-tu pas de l'aide ? » murmura l'ego blessé.`,
      `Le Shaykh apparut. — « Tu n'as pas perdu. Tu as appris la leçon la plus difficile : la limite de soi-même. La vraie force, ce n'est pas de se battre seul — c'est d'avoir l'humilité de demander de l'aide. Va en paix, Souhayl. Et reviens quand tu seras prêt. »`,
    ],
    mood: 'ending',
    isEnding: true,
    endingType: 'shadow',
  },

};

export const firstPageId = 'prologue';
export const totalChapters = 4;
export const totalEndings = 3;
