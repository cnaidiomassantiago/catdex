/* ============================================================
   CATDEX — script.js  v2
   Sistema completo de Enciclopédia Felina
   ============================================================ */

'use strict';

// ══════════════════════════════════════════════════════════════
// DADOS DOS GATOS
// Cada gato tem:
//   emoji        — aparência padrão
//   emojiLight   — reação ao tema claro  (gatos noturnos ficam tristes)
//   emojiDark    — reação ao tema escuro (gatos diurnos dormem)
//   nightCat     — true = gato noturno/sombrio
// ══════════════════════════════════════════════════════════════
const CATS_DATA = [
  {
    id: 1,
    name: 'Neko Coder',
    emoji: '🐱💻',
    emojiLight: '😸💻',   // ativo de dia
    emojiDark: '😴💻',   // dorme à noite (diurno)
    nightCat: false,
    type: 'Tecnologia',
    rarity: 'Raro',
    level: 42,
    xp: 8400, xpMax: 10000,
    description: 'Um gato lendário dos servidores que digita 400 palavras por minuto com apenas uma pata. Vive alimentado de café e bugs.',
    abilities: [
      { icon: '⚡', name: 'Stack Overflow', desc: 'Cola código do Stack Overflow em 0,3 segundos, funciona 70% das vezes.' },
      { icon: '🐛', name: 'Debug Místico', desc: 'Encontra o bug que ninguém mais acha — geralmente é um ponto e vírgula.' }
    ],
    curiosities: [
      'Dorme com os olhos abertos enquanto o código compila.',
      'Tem mais commits do que mias ao longo da vida.',
      'Seu IDE favorito é VIM. Ninguém sabe como ele sai do VIM.'
    ],
    stats: { atk: 70, def: 45, spd: 88, mana: 32 }
  },
  {
    id: 2,
    name: 'Ninja Felino',
    emoji: '🐈‍⬛🥷',
    emojiLight: '😾🥷',   // triste de dia — criatura das sombras
    emojiDark: '🐈‍⬛🥷',  // em seu elemento à noite
    nightCat: true,
    type: 'Combate',
    rarity: 'Épico',
    level: 67,
    xp: 6700, xpMax: 8000,
    description: 'Invisível à luz do dia, implacável à meia-noite. Treinou nas montanhas Nyapon por 9 vidas seguidas.',
    abilities: [
      { icon: '🌑', name: 'Sombra Nyan', desc: 'Desaparece completamente, reaparece atrás do inimigo com petiscos.' },
      { icon: '🌀', name: 'Shuriken de Arranhão', desc: 'Lança 7 garras simultaneamente com precisão cirúrgica.' }
    ],
    curiosities: [
      'Nunca faz barulho. Nem quando derruba o copo de propósito.',
      'Usa roupa preta mesmo no verão porque "é a estética".',
      'Mestre em 93 formas de arte marcial felina.'
    ],
    stats: { atk: 95, def: 60, spd: 99, mana: 72 }
  },
  {
    id: 3,
    name: 'Gato das Trevas',
    emoji: '🦇🐱',
    emojiLight: '😿🌞',   // sofre no claro
    emojiDark: '🦇🐱',   // poder total no escuro
    nightCat: true,
    type: 'Sombrio',
    rarity: 'Épico',
    level: 55,
    xp: 5500, xpMax: 7000,
    description: 'Nasce ao pôr do sol, governa a madrugada. Seus olhos brilham no escuro e ele come apenas entre 2h e 4h da manhã.',
    abilities: [
      { icon: '🌙', name: 'Uivo Lunar', desc: 'Emite um miado às 3h da manhã que acorda toda a vizinhança.' },
      { icon: '👁️', name: 'Visão Noturna Máxima', desc: 'Enxerga na escuridão total e julga seus humanos silenciosamente.' }
    ],
    curiosities: [
      'Dorme 20h por dia e ainda parece cansado.',
      'Possui aliança com as pombas e os corvos locais.',
      'Foi avistado às 3h47 apenas olhando para a parede.'
    ],
    stats: { atk: 80, def: 70, spd: 75, mana: 90 }
  },
  {
    id: 4,
    name: 'Samurai Miado',
    emoji: '⚔️🐯',
    emojiLight: '⚔️😤',   // concentrado de dia
    emojiDark: '⚔️😴',   // medita/dorme à noite
    nightCat: false,
    type: 'Guerreiro',
    rarity: 'Lendário',
    level: 99,
    xp: 9900, xpMax: 10000,
    description: 'O último samurai felino. Carrega uma katana feita de arranhão de pedra de granito. Honra acima de tudo — exceto sardinha.',
    abilities: [
      { icon: '⚔️', name: 'Golpe dos Mil Miados', desc: 'Um único riscar de garra que ecoa por toda a tatame.' },
      { icon: '🛡️', name: 'Armadura de Pelo', desc: 'Pelagem tão densa que bloqueia qualquer arranhão ou crítica.' }
    ],
    curiosities: [
      'Medita por 4h antes de cada batalha. E antes de cada refeição.',
      'Nunca recua. Mas aceita petisco como "sinal de paz".',
      'Tem 7 dojos e nenhum diploma, mas todos respeitam.'
    ],
    stats: { atk: 99, def: 95, spd: 77, mana: 85 }
  },
  {
    id: 5,
    name: 'Hacker Purrfect',
    emoji: '💀🐱',
    emojiLight: '😑🐱',   // indiferente de dia
    emojiDark: '💀🐱',   // hacker ativo à noite
    nightCat: true,
    type: 'Tecnologia',
    rarity: 'Épico',
    level: 78,
    xp: 7800, xpMax: 9000,
    description: 'Invadiu a NASA por acidente procurando vídeos de pássaros. Suas patas digitam código binário enquanto dorme.',
    abilities: [
      { icon: '🖥️', name: 'SQL Injection Felino', desc: 'Acessa qualquer sistema com uma combinação de mia + sudo.' },
      { icon: '🔓', name: 'Social Engineering', desc: 'Convence qualquer humano a lhe dar comida com um único olhar.' }
    ],
    curiosities: [
      'Seu IP favorito é 127.0.0.1 porque "não sai de casa".',
      'Tem 47 VPNs. Ninguém sabe onde ele está, incluindo ele.',
      'Usa Linux. Claro que usa Linux.'
    ],
    stats: { atk: 85, def: 55, spd: 80, mana: 64 }
  },
  {
    id: 6,
    name: 'Mago Nyarlan',
    emoji: '🧙‍♂️🐱',
    emojiLight: '🧙‍♂️😺',  // conjura magia solar de dia
    emojiDark: '🧙‍♂️🌙',  // invoca poderes lunares à noite
    nightCat: false,
    type: 'Magia',
    rarity: 'Lendário',
    level: 100,
    xp: 10000, xpMax: 10000,
    description: 'Estudou por 9 vidas nas torres de Arcánya. Seu cajado é uma varinha de pescar com pena mágica. Transforma inimigos em caixas de papelão.',
    abilities: [
      { icon: '✨', name: 'Bola de Fogo Fofa', desc: 'Lança uma bolinha brilhante que o gato mesmo persegue depois.' },
      { icon: '🌀', name: 'Portal do Banheiro', desc: 'Abre portais dimensionais, geralmente para o banheiro alheio.' }
    ],
    curiosities: [
      'Seu chapéu é maior que ele mesmo e ainda assim fica elegante.',
      'Transformou um cachorro em almofada por engano.',
      'Conhece 9.999 feitiços. O décimo-milésimo faz café.'
    ],
    stats: { atk: 78, def: 65, spd: 60, mana: 100 }
  },
  {
    id: 7,
    name: 'DJ Scratch',
    emoji: '🎧🐱',
    emojiLight: '🎧😸',   // groovy de dia
    emojiDark: '🎧🐱',   // lota os clubs à noite
    nightCat: true,
    type: 'Arte',
    rarity: 'Raro',
    level: 38,
    xp: 3800, xpMax: 5000,
    description: 'O gato mais groovy da cidade. Suas arranhadas no sofá são, na verdade, samples de vinil raros. Lota clubs às 2h da madrugada.',
    abilities: [
      { icon: '🎵', name: 'Drop Fatal', desc: 'Seu drop faz todos no dancefloor rolarem no chão (involuntariamente).' },
      { icon: '🔊', name: 'Bass Boost Ronronar', desc: 'Ronrona no BPM exato de qualquer música, sempre.' }
    ],
    curiosities: [
      'Já fez remix do miado de 12 gatos diferentes.',
      'Suas playlists têm nomes como "Naps & Vibes" e "3AM Fur".',
      'Arranha o toca-disco porque "é arte, humano".'
    ],
    stats: { atk: 55, def: 40, spd: 90, mana: 77 }
  },
  {
    id: 8,
    name: 'Astronauta Nyan',
    emoji: '🚀🐱',
    emojiLight: '🚀😸',   // decolando de dia
    emojiDark: '🌌🐱',   // explorando o cosmos à noite
    nightCat: false,
    type: 'Cósmico',
    rarity: 'Lendário',
    level: 88,
    xp: 8800, xpMax: 10000,
    description: 'O primeiro felino no espaço. Viajou até Marte só para ver se havia caixas de areia melhores. (Não havia.) Seu rastro deixa um arco-íris de pixels.',
    abilities: [
      { icon: '🌌', name: 'Velocidade Warp Nyan', desc: 'Acelera a ponto de deixar rastro de arco-íris no espaço-tempo.' },
      { icon: '🪐', name: 'Gravidade Zero Ronron', desc: 'Em gravidade zero, o ronronar ressoa por parsecs inteiros.' }
    ],
    curiosities: [
      'Fundou uma colônia felina na Lua. É chamada de Nyaaluna.',
      'Viajou no tempo para ver se a ração do futuro é melhor. (É.)',
      'Seu traje espacial tem furos estratégicos para as orelhas.'
    ],
    stats: { atk: 82, def: 80, spd: 95, mana: 88 }
  },
  {
    id: 9,
    name: 'Capitão Miaurgan',
    emoji: '🏴‍☠️🐱',
    emojiLight: '🏴‍☠️😸',  // navegando de dia
    emojiDark: '🏴‍☠️🌙',  // saqueando à noite
    nightCat: true,
    type: 'Aventura',
    rarity: 'Épico',
    level: 61,
    xp: 6100, xpMax: 8000,
    description: 'Saqueador dos Sete Mares Felinos. Seu navio, o "Pata Negra", navega à base de sardinha e ventos marinhos. Teme apenas veterinários.',
    abilities: [
      { icon: '⚓', name: 'Canhão de Bolas de Pelo', desc: 'Dispara bolinhas de pelo a 200km/h. Ninguém escapa.' },
      { icon: '🗡️', name: 'Sabre de Arranha', desc: 'Sua garra esquerda é afiada como uma espada élfica.' }
    ],
    curiosities: [
      'Tem mapa do tesouro tatuado na barriga. Ninguém consegue ver.',
      'Chama de "pillagem" quando come o peixe do vizinho.',
      'Seu papagaio é, na verdade, um hamster que aprendeu a voar.'
    ],
    stats: { atk: 88, def: 72, spd: 70, mana: 65 }
  },
  {
    id: 10,
    name: 'Sir Purrington',
    emoji: '⚔️🛡️🐱',
    emojiLight: '🛡️😤',   // guardando o reino de dia
    emojiDark: '🛡️😴',   // descansando o cavaleiro à noite
    nightCat: false,
    type: 'Guerreiro',
    rarity: 'Raro',
    level: 50,
    xp: 5000, xpMax: 6500,
    description: 'Cavaleiro da Ordem do Sofá Carmesim. Protege o reino das almofadas com fervor. Jamais abandona um humano em apuros — a menos que esteja dormindo.',
    abilities: [
      { icon: '🛡️', name: 'Escudo de Bigodes', desc: 'Seus bigodes formam um campo de força impenetrável.' },
      { icon: '🏇', name: 'Galope Felino', desc: 'Corre pela casa às 3h da manhã como se estivesse em batalha.' }
    ],
    curiosities: [
      'Tem armadura feita de tampas de garrafa e papel alumínio.',
      'Jurou proteger o sofá de todos os intrusos. Inclusive de crianças.',
      'Seu código de cavalaria proíbe acordar antes do meio-dia.'
    ],
    stats: { atk: 75, def: 92, spd: 65, mana: 68 }
  },
  {
    id: 11,
    name: 'Cyber Neko',
    emoji: '🤖🐱',
    emojiLight: '🤖😤',   // processando dados de dia
    emojiDark: '🤖🔋',   // recarregando à noite
    nightCat: false,
    type: 'Tecnologia',
    rarity: 'Lendário',
    level: 95,
    xp: 9500, xpMax: 10000,
    description: 'Meio gato, meio máquina, totalmente incompreensível. Seus olhos são LEDs vermelhos que escaneiam ameaças. A ameaça geralmente é o aspirador de pó.',
    abilities: [
      { icon: '🔋', name: 'Laser Ocular Neon', desc: 'Disparos de laser que recarregam sua bateria ao mesmo tempo.' },
      { icon: '⚙️', name: 'Modo Turbo Purrr', desc: 'Entra em modo turbo: 300% mais velocidade, mesmo ronronar.' }
    ],
    curiosities: [
      'Carrega via USB-C mas só aceita cabos Apple. Diva.',
      'Seu sistema operacional é o CatOS 13.9 "Whisker".',
      'Trava ao ver laser pointer. Buffer overflow de felicidade.'
    ],
    stats: { atk: 92, def: 88, spd: 93, mana: 5 }
  },
  {
    id: 12,
    name: 'Espectro Gatuno',
    emoji: '👻🐱',
    emojiLight: '😿👻',   // fantasma triste com tanta luz
    emojiDark: '👻🌙',   // assombra de madrugada
    nightCat: true,
    type: 'Sombrio',
    rarity: 'Comum',
    level: 15,
    xp: 1500, xpMax: 3000,
    description: 'Um gato que existiu, não existe mais, mas continua atrapalhando. Derruba objetos do além e assombra a despensa à meia-noite.',
    abilities: [
      { icon: '👻', name: 'Travessura Espectral', desc: 'Derruba objetos sem que ninguém veja. Clássico.' },
      { icon: '🌫️', name: 'Fase Intangível', desc: 'Passa por portas fechadas. Entra no quarto mesmo com a porta trancada.' }
    ],
    curiosities: [
      'Ainda exige ração mesmo sendo um fantasma. Pura teimosia.',
      'Aparece apenas em fotos, sempre com olhos brilhando.',
      'Odeia aspiradores mesmo depois de morto. Alguns traumas não passam.'
    ],
    stats: { atk: 2, def: 99, spd: 60, mana: 85 }
  }
];

// ══════════════════════════════════════════════════════════════
// ESTADO GLOBAL
// ══════════════════════════════════════════════════════════════
const state = {
  unlockedIds: new Set(),
  newIds: new Set(),
  favoriteIds: new Set(),
  filters: { rarity: 'all', type: 'all', status: 'all', sort: 'id' },
  searchQuery: '',
  theme: 'dark',
  currentPage: 'home',
  currentTab: 'catalog',
  rankingStat: 'atk',
};

// ══════════════════════════════════════════════════════════════
// BOOT
// ══════════════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  loadState();
  applyTheme(state.theme, false);
  initParticles();
  initHomePreview();
  initAnimatedCounters();
  renderTypeFilters();
  renderCards();
  updateProgress();
  renderCollectionDashboard();
  renderRanking();
  setupEventListeners();
  setupMobileMenu();
  setupScrollReveal();

  // Loader desaparece após animação
  setTimeout(() => {
    const loader = document.getElementById('loader');
    loader.classList.add('fade-out');
    setTimeout(() => loader.remove(), 600);
  }, 2200);
});

// ══════════════════════════════════════════════════════════════
// NAVEGAÇÃO ENTRE PÁGINAS
// ══════════════════════════════════════════════════════════════
function navigateTo(page) {
  state.currentPage = page;
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(`page-${page}`).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (page === 'dex') {
    renderCards();
    updateProgress();
    renderCollectionDashboard();
    renderRanking();
  }
}
window.navigateTo = navigateTo;

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}
window.scrollToSection = scrollToSection;

// ══════════════════════════════════════════════════════════════
// LOCAL STORAGE
// ══════════════════════════════════════════════════════════════
function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem('catdex_v2') || '{}');
    if (saved.unlockedIds) state.unlockedIds = new Set(saved.unlockedIds);
    if (saved.favoriteIds) state.favoriteIds = new Set(saved.favoriteIds);
    if (saved.theme) state.theme = saved.theme;
  } catch (e) { /* silencioso */ }
}

function saveState() {
  localStorage.setItem('catdex_v2', JSON.stringify({
    unlockedIds: [...state.unlockedIds],
    favoriteIds: [...state.favoriteIds],
    theme: state.theme
  }));
}

// ══════════════════════════════════════════════════════════════
// TEMA — incluindo reação dos gatos
// ══════════════════════════════════════════════════════════════
function applyTheme(theme, animate = true) {
  state.theme = theme;
  document.documentElement.setAttribute('data-theme', theme);

  // Botões de tema
  const icons = theme === 'dark' ? '🌙' : '☀️';
  ['theme-toggle', 'theme-toggle-home'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.textContent = icons;
  });

  // Loader emoji reage ao tema
  const loaderEmoji = document.getElementById('loader-emoji');
  if (loaderEmoji) loaderEmoji.textContent = theme === 'dark' ? '🐱' : '😺';

  // Re-renderiza cards com novo emoji de humor
  if (animate) {
    renderCards();
    updateMoodOnModal();
  }
  saveState();
}

function toggleTheme() {
  applyTheme(state.theme === 'dark' ? 'light' : 'dark', true);
}

/** Retorna o emoji correto do gato para o tema atual */
function getCatEmoji(cat) {
  if (!state.unlockedIds.has(cat.id)) return cat.emoji; // bloqueado = padrão
  if (state.theme === 'light') return cat.emojiLight || cat.emoji;
  return cat.emojiDark || cat.emoji;
}

/** Texto de humor exibido no card e no modal */
function getMoodText(cat) {
  if (!state.unlockedIds.has(cat.id)) return null;
  if (state.theme === 'light' && cat.nightCat) {
    return { icon: '😿', text: 'Sofre com tanta luz...' };
  }
  if (state.theme === 'dark' && !cat.nightCat) {
    return { icon: '😴', text: 'Preferia estar dormindo...' };
  }
  if (state.theme === 'dark' && cat.nightCat) {
    return { icon: '😈', text: 'Em seu ambiente natural!' };
  }
  return { icon: '😸', text: 'No melhor momento do dia!' };
}

// ══════════════════════════════════════════════════════════════
// HOME — PREVIEW GRID
// ══════════════════════════════════════════════════════════════
function initHomePreview() {
  const grid = document.getElementById('home-preview-grid');
  if (!grid) return;
  // Mostra 6 gatos variados na home
  const preview = [1, 4, 6, 8, 11, 2].map(id => CATS_DATA.find(c => c.id === id));
  preview.forEach((cat, i) => {
    const card = document.createElement('div');
    card.className = 'preview-card';
    card.style.animationDelay = `${i * 0.1}s`;
    card.innerHTML = `
      <span class="preview-emoji">${cat.emoji}</span>
      <div class="preview-name">${cat.name}</div>
      <div class="preview-rarity ${cat.rarity}">${cat.rarity}</div>
    `;
    card.addEventListener('click', () => navigateTo('dex'));
    grid.appendChild(card);
  });
}

// ══════════════════════════════════════════════════════════════
// HOME — CONTADORES ANIMADOS
// ══════════════════════════════════════════════════════════════
function initAnimatedCounters() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.target, 10);
      let current = 0;
      const step = Math.ceil(target / 40);
      const timer = setInterval(() => {
        current = Math.min(current + step, target);
        el.textContent = current;
        if (current >= target) clearInterval(timer);
      }, 35);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.stat-num').forEach(el => observer.observe(el));
}

// ══════════════════════════════════════════════════════════════
// SCROLL REVEAL (seções da home)
// ══════════════════════════════════════════════════════════════
function setupScrollReveal() {
  const style = document.createElement('style');
  style.textContent = `
    .reveal { opacity: 0; transform: translateY(30px); transition: opacity .6s ease, transform .6s ease; }
    .reveal.visible { opacity: 1; transform: none; }
  `;
  document.head.appendChild(style);

  const els = document.querySelectorAll('.feature-card, .rarity-showcase, .preview-card, .stat-counter');
  els.forEach(el => el.classList.add('reveal'));

  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 60);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  els.forEach(el => obs.observe(el));
}

// ══════════════════════════════════════════════════════════════
// MOBILE MENU (home)
// ══════════════════════════════════════════════════════════════
function setupMobileMenu() {
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.querySelector('.home-nav-links');
  if (!btn || !menu) return;
  btn.addEventListener('click', () => {
    menu.classList.toggle('open');
    btn.textContent = menu.classList.contains('open') ? '✕' : '☰';
  });
}

// ══════════════════════════════════════════════════════════════
// FILTROS DE TIPO (DEX)
// ══════════════════════════════════════════════════════════════
function renderTypeFilters() {
  const types = [...new Set(CATS_DATA.map(c => c.type))].sort();
  const container = document.getElementById('type-filters');
  if (!container) return;
  types.forEach(type => {
    const btn = document.createElement('button');
    btn.className = 'pill';
    btn.dataset.filter = 'type';
    btn.dataset.value = type;
    btn.textContent = type;
    container.appendChild(btn);
  });
}

// ══════════════════════════════════════════════════════════════
// RENDERIZAÇÃO DE CARDS
// ══════════════════════════════════════════════════════════════
function renderCards() {
  const grid = document.getElementById('cards-grid');
  if (!grid) return;
  grid.innerHTML = '';

  const filtered = getFilteredCats();
  const noResults = document.getElementById('no-results');
  if (noResults) noResults.classList.toggle('hidden', filtered.length > 0);

  filtered.forEach((cat, index) => {
    const card = createCard(cat, index);
    grid.appendChild(card);
    // XP bar animada com delay
    setTimeout(() => {
      const fill = card.querySelector('.xp-bar-fill');
      if (fill) fill.style.width = `${(cat.xp / cat.xpMax) * 100}%`;
    }, 80 + index * 50);
  });
}

function getFilteredCats() {
  let list = CATS_DATA.filter(cat => {
    const unlocked = state.unlockedIds.has(cat.id);
    const { rarity, type, status } = state.filters;
    const q = state.searchQuery.toLowerCase();
    if (rarity !== 'all' && cat.rarity !== rarity) return false;
    if (type !== 'all' && cat.type !== type) return false;
    if (status === 'unlocked' && !unlocked) return false;
    if (status === 'locked' && unlocked) return false;
    if (q && !cat.name.toLowerCase().includes(q) &&
      !cat.type.toLowerCase().includes(q) &&
      !cat.rarity.toLowerCase().includes(q)) return false;
    return true;
  });

  // Ordenação
  const sort = state.filters.sort;
  if (sort === 'level') list.sort((a, b) => b.level - a.level);
  else if (sort === 'name') list.sort((a, b) => a.name.localeCompare(b.name));
  else if (sort === 'atk') list.sort((a, b) => b.stats.atk - a.stats.atk);
  // padrão: por id

  return list;
}

function createCard(cat, index) {
  const unlocked = state.unlockedIds.has(cat.id);
  const isNew = state.newIds.has(cat.id);
  const isFav = state.favoriteIds.has(cat.id);
  const mood = unlocked ? getMoodText(cat) : null;
  const displayEmoji = getCatEmoji(cat);

  const card = document.createElement('div');
  card.className = `cat-card${unlocked ? '' : ' locked'}${(mood && (mood.icon === '😿' || mood.icon === '😴')) ? ' mood-active' : ''}`;
  card.dataset.rarity = cat.rarity;
  if (cat.nightCat) card.dataset.night = "true";
  else card.dataset.day = "true";
  card.style.animationDelay = `${index * 0.055}s`;

  card.innerHTML = `
    ${isNew ? '<div class="badge-new">NOVO!</div>' : ''}
    ${isFav && unlocked ? '<div class="badge-fav" title="Favorito">⭐</div>' : ''}
    ${mood && unlocked ? `<div class="mood-overlay" title="${mood.text}">${mood.icon}</div>` : ''}
    <div class="card-avatar">${displayEmoji}</div>
    <div class="card-name">${cat.name}</div>
    <div class="card-meta">
      <span class="card-type">${cat.type}</span>
      <span class="card-rarity ${cat.rarity}">${cat.rarity}</span>
    </div>
    <div class="card-level">
      <span class="level-badge">Lv.${cat.level}</span>
      <span class="xp-label">${cat.xp.toLocaleString()}/${cat.xpMax.toLocaleString()} XP</span>
    </div>
    <div class="xp-bar-outer"><div class="xp-bar-fill" style="width:0%"></div></div>
    <button class="btn-details" data-id="${cat.id}">
      ${unlocked ? '📋 Detalhes' : '🔒 Bloqueado'}
    </button>
  `;

  card.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-details')) return;
    openModal(cat.id);
    playSound('open');
  });
  card.querySelector('.btn-details').addEventListener('click', (e) => {
    e.stopPropagation();
    openModal(cat.id);
    playSound('open');
  });

  return card;
}

// ══════════════════════════════════════════════════════════════
// MODAL
// ══════════════════════════════════════════════════════════════
function openModal(catId) {
  const cat = CATS_DATA.find(c => c.id === catId);
  if (!cat) return;
  const unlocked = state.unlockedIds.has(cat.id);
  const isFav = state.favoriteIds.has(cat.id);
  const xpPct = (cat.xp / cat.xpMax) * 100;
  const mood = getMoodText(cat);
  const displayEmoji = getCatEmoji(cat);

  const content = document.getElementById('modal-content');
  content.innerHTML = `
    <div class="modal-avatar">${displayEmoji}</div>
    <div class="modal-name">${cat.name}</div>
    <div class="modal-badges">
      <span class="card-type">${cat.type}</span>
      <span class="card-rarity ${cat.rarity}">${cat.rarity}</span>
      <span class="level-badge">Lv.${cat.level}</span>
    </div>

    ${unlocked && mood ? `
      <div class="modal-mood-badge">
        <span>${mood.icon}</span>
        <span>${mood.text}</span>
        <span style="margin-left:auto;font-size:.72rem;opacity:.5">${state.theme === 'dark' ? '🌙 Tema Escuro' : '☀️ Tema Claro'}</span>
      </div>
    ` : ''}

    <p class="modal-desc">${cat.description}</p>

    <div class="modal-stats">
      <div class="stat-item"><div class="stat-value">⚔️ ${cat.stats.atk}</div><div class="stat-label">Ataque</div></div>
      <div class="stat-item"><div class="stat-value">🛡️ ${cat.stats.def}</div><div class="stat-label">Defesa</div></div>
      <div class="stat-item"><div class="stat-value">💨 ${cat.stats.spd}</div><div class="stat-label">Velocidade</div></div>
      <div class="stat-item"><div class="stat-value">✨ ${cat.stats.mana}</div><div class="stat-label">Mana</div></div>
    </div>

    <div class="modal-xp-section">
      <div class="modal-section-title">Experiência · Lv.${cat.level}</div>
      <div style="display:flex;justify-content:space-between;font-size:.78rem;color:var(--text-dim);margin-bottom:4px">
        <span>${cat.xp.toLocaleString()} XP</span><span>${cat.xpMax.toLocaleString()} XP</span>
      </div>
      <div class="modal-xp-bar-outer">
        <div class="modal-xp-bar-fill" style="width:${xpPct}%"></div>
      </div>
    </div>

    <div class="modal-section-title">Habilidades</div>
    <div class="modal-abilities">
      ${cat.abilities.map(a => `
        <div class="ability-item">
          <div class="ability-icon">${a.icon}</div>
          <div><div class="ability-name">${a.name}</div><div class="ability-desc">${a.desc}</div></div>
        </div>
      `).join('')}
    </div>

    <div class="modal-section-title">Curiosidades</div>
    <ul class="modal-curiosities">
      ${cat.curiosities.map(c => `<li>${c}</li>`).join('')}
    </ul>

    ${unlocked ? `
      <div style="display:flex;gap:10px;margin-bottom:14px">
        <button class="btn-fav-modal ${isFav ? 'active' : ''}" onclick="toggleFavorite(${cat.id})" id="fav-btn-${cat.id}">
          ${isFav ? '⭐ Favorito' : '☆ Favoritar'}
        </button>
      </div>
      <button class="btn-unlock-modal" disabled>✅ Já Desbloqueado</button>
    ` : `
      <button class="btn-unlock-modal" onclick="unlockCat(${cat.id}, true)">
        ⚡ Desbloquear ${cat.name}
      </button>
    `}
  `;

  // Injetar estilos inline para o btn-fav
  injectFavStyle();

  document.getElementById('modal-overlay').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function injectFavStyle() {
  if (document.getElementById('fav-style')) return;
  const s = document.createElement('style');
  s.id = 'fav-style';
  s.textContent = `
    .btn-fav-modal {
      flex: 1; padding: 11px;
      background: var(--surface); border: 1px solid var(--border);
      border-radius: 12px; color: var(--text-dim);
      font-family: 'Exo 2', sans-serif; font-size: .85rem; font-weight: 600;
      cursor: pointer; transition: all .3s;
    }
    .btn-fav-modal:hover { border-color: var(--neon-gold); color: var(--neon-gold); }
    .btn-fav-modal.active { background: rgba(251,191,36,.12); border-color: var(--neon-gold); color: var(--neon-gold); }
    .badge-fav {
      position: absolute; top: 11px; left: 11px; z-index: 10;
      font-size: 1rem;
    }
  `;
  document.head.appendChild(s);
}

function closeModal() {
  document.getElementById('modal-overlay').classList.add('hidden');
  document.body.style.overflow = '';
}

/** Atualiza o badge de humor se o modal estiver aberto */
function updateMoodOnModal() {
  const overlay = document.getElementById('modal-overlay');
  if (overlay.classList.contains('hidden')) return;
  // Re-renderiza o modal atual sem fechar
  // (pega o id do botão de favoritar para saber qual cat está aberto)
  const favBtn = document.querySelector('[id^="fav-btn-"]');
  if (!favBtn) return;
  const catId = parseInt(favBtn.id.replace('fav-btn-', ''), 10);
  openModal(catId);
}

// ══════════════════════════════════════════════════════════════
// FAVORITOS
// ══════════════════════════════════════════════════════════════
function toggleFavorite(catId) {
  if (!state.unlockedIds.has(catId)) return;
  if (state.favoriteIds.has(catId)) {
    state.favoriteIds.delete(catId);
    showToast('☆ Removido dos favoritos', '');
  } else {
    state.favoriteIds.add(catId);
    showToast('⭐ Adicionado aos favoritos!', 'success');
    playSound('fav');
  }
  saveState();
  renderCards();
  renderCollectionDashboard();

  // Atualiza botão no modal sem fechar
  const btn = document.getElementById(`fav-btn-${catId}`);
  if (btn) {
    const isFav = state.favoriteIds.has(catId);
    btn.textContent = isFav ? '⭐ Favorito' : '☆ Favoritar';
    btn.classList.toggle('active', isFav);
  }
}
window.toggleFavorite = toggleFavorite;

// ══════════════════════════════════════════════════════════════
// DESBLOQUEIO
// ══════════════════════════════════════════════════════════════
function unlockCat(catId, fromModal = false) {
  if (state.unlockedIds.has(catId)) return;
  const cat = CATS_DATA.find(c => c.id === catId);
  if (!cat) return;

  state.unlockedIds.add(catId);
  state.newIds.add(catId);
  saveState();

  if (fromModal) closeModal();
  showUnlockEffect(cat);
  playSound('unlock');

  setTimeout(() => {
    state.newIds.delete(catId);
    renderCards();
    updateProgress();
    renderCollectionDashboard();
    renderRanking();
  }, 3100);
}
window.unlockCat = unlockCat;

function unlockRandom() {
  const locked = CATS_DATA.filter(c => !state.unlockedIds.has(c.id));
  if (locked.length === 0) {
    showToast('🎉 Você já coletou todos os gatos!', 'success');
    return;
  }
  const cat = locked[Math.floor(Math.random() * locked.length)];
  unlockCat(cat.id);
}

// ══════════════════════════════════════════════════════════════
// EFEITO DE DESBLOQUEIO
// ══════════════════════════════════════════════════════════════
function showUnlockEffect(cat) {
  const fx = document.getElementById('unlock-fx');
  document.getElementById('unlock-cat-icon').textContent = getCatEmoji(cat);
  document.getElementById('unlock-name').textContent = cat.name;

  const colors = { Comum: '#94a3b8', Raro: '#38bdf8', Épico: '#a855f7', Lendário: '#fbbf24' };
  const color = colors[cat.rarity] || '#a855f7';

  const rEl = document.getElementById('unlock-rarity');
  rEl.textContent = cat.rarity;
  rEl.style.cssText = `background:${color}22;border:1px solid ${color};color:${color}`;

  // Rings coloridas com a raridade
  document.querySelectorAll('.unlock-ring').forEach(r => r.style.borderColor = color);

  fx.classList.remove('hidden');
  spawnParticles(color, 28);
}

function spawnParticles(color, count = 20) {
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'unlock-particle';
    const angle = (i / count) * 360;
    const dist = 90 + Math.random() * 180;
    p.style.cssText = `
      left:50%;top:50%;
      background:${color};
      box-shadow:0 0 6px ${color};
      --tx:${Math.cos((angle * Math.PI) / 180) * dist}px;
      --ty:${Math.sin((angle * Math.PI) / 180) * dist - 80}px;
      animation-delay:${Math.random() * 0.35}s;
    `;
    document.body.appendChild(p);
    setTimeout(() => p.remove(), 1800);
  }
}

// ══════════════════════════════════════════════════════════════
// PROGRESSO
// ══════════════════════════════════════════════════════════════
function updateProgress() {
  const count = state.unlockedIds.size;
  const total = CATS_DATA.length;
  const pct = Math.round((count / total) * 100);
  const el_c = document.getElementById('collection-count');
  const el_b = document.getElementById('global-progress-bar');
  const el_p = document.getElementById('global-progress-pct');
  if (el_c) el_c.textContent = count;
  if (el_b) el_b.style.width = `${pct}%`;
  if (el_p) el_p.textContent = `${pct}%`;
}

// ══════════════════════════════════════════════════════════════
// TAB: COLEÇÃO
// ══════════════════════════════════════════════════════════════
function renderCollectionDashboard() {
  const panel = document.getElementById('collection-dashboard');
  if (!panel) return;

  const unlocked = CATS_DATA.filter(c => state.unlockedIds.has(c.id));
  const total = CATS_DATA.length;
  const pct = Math.round((unlocked.length / total) * 100);

  const rarityCounts = { Comum: 0, Raro: 0, Épico: 0, Lendário: 0 };
  const rarityTotal = { Comum: 0, Raro: 0, Épico: 0, Lendário: 0 };
  CATS_DATA.forEach(c => rarityTotal[c.rarity]++);
  unlocked.forEach(c => rarityCounts[c.rarity]++);

  const rarityColor = { Comum: 'var(--rarity-comum)', Raro: 'var(--rarity-raro)', Épico: 'var(--rarity-epico)', Lendário: 'var(--rarity-lendario)' };

  panel.innerHTML = `
    <div class="dash-hero">
      <div class="dash-pct">${pct}%</div>
      <div class="dash-label">${unlocked.length} de ${total} gatos coletados</div>
    </div>

    <div class="modal-section-title" style="margin-bottom:14px">Por Raridade</div>
    <div class="dash-rarity-breakdown">
      ${Object.entries(rarityCounts).map(([r, n]) => `
        <div class="dash-rarity-card">
          <div class="dash-rarity-count" style="color:${rarityColor[r]}">${n}/${rarityTotal[r]}</div>
          <div class="dash-rarity-name">${r}</div>
        </div>
      `).join('')}
    </div>

    ${state.favoriteIds.size > 0 ? `
      <div class="modal-section-title" style="margin-bottom:14px">⭐ Favoritos</div>
      <div class="dash-unlocked-list" style="margin-bottom:28px">
        ${CATS_DATA.filter(c => state.favoriteIds.has(c.id) && state.unlockedIds.has(c.id)).map(cat => `
          <div class="dash-cat-mini" onclick="openModal(${cat.id})">
            ${getCatEmoji(cat)}
            <div class="dash-cat-mini-name">${cat.name}</div>
          </div>
        `).join('')}
      </div>
    ` : ''}

    ${unlocked.length > 0 ? `
      <div class="modal-section-title" style="margin-bottom:14px">🐾 Coleção Desbloqueada</div>
      <div class="dash-unlocked-list">
        ${unlocked.map(cat => `
          <div class="dash-cat-mini" onclick="openModal(${cat.id})">
            ${getCatEmoji(cat)}
            <div class="dash-cat-mini-name">${cat.name}</div>
          </div>
        `).join('')}
      </div>
    ` : `
      <div class="dash-empty">
        <span>😿</span>
        <p>Nenhum gato desbloqueado ainda,faça algo!<br>Clique em <strong>⚡ Desbloquear</strong> para começar!</p>
      </div>
    `}
  `;
}
window.openModal = openModal;

// ══════════════════════════════════════════════════════════════
// TAB: RANKING
// ══════════════════════════════════════════════════════════════
function renderRanking() {
  const panel = document.getElementById('ranking-panel');
  if (!panel) return;

  const stat = state.rankingStat;
  const label = { atk: 'Ataque ⚔️', def: 'Defesa 🛡️', spd: 'Velocidade 💨', mana: 'Mana ✨', level: 'Nível 📊' };
  const sorted = [...CATS_DATA].sort((a, b) => {
    if (stat === 'level') return b.level - a.level;
    return b.stats[stat] - a.stats[stat];
  });

  panel.innerHTML = `
    <div class="ranking-tabs">
      ${Object.entries(label).map(([k, v]) => `
        <button class="ranking-tab ${k === stat ? 'active' : ''}" data-stat="${k}">${v}</button>
      `).join('')}
    </div>
    <div class="ranking-list">
      ${sorted.map((cat, i) => {
    const unlocked = state.unlockedIds.has(cat.id);
    const val = stat === 'level' ? cat.level : cat.stats[stat];
    const posClass = i === 0 ? 'pos-1' : i === 1 ? 'pos-2' : i === 2 ? 'pos-3' : '';
    const medal = i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : `#${i + 1}`;
    return `
          <div class="ranking-item ${unlocked ? '' : 'ranking-locked'}" onclick="${unlocked ? `openModal(${cat.id})` : ''}">
            <div class="ranking-pos ${posClass}">${medal}</div>
            <div class="ranking-emoji">${unlocked ? getCatEmoji(cat) : '🔒'}</div>
            <div class="ranking-info">
              <div class="ranking-name">${unlocked ? cat.name : '???'}</div>
              <div class="ranking-sub">${unlocked ? cat.type + ' · ' + cat.rarity : 'Bloqueado'}</div>
            </div>
            <div class="ranking-val">${unlocked ? val : '—'}</div>
          </div>
        `;
  }).join('')}
    </div>
  `;

  // Tabs do ranking
  panel.querySelectorAll('.ranking-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      state.rankingStat = btn.dataset.stat;
      renderRanking();
    });
  });
}

// ══════════════════════════════════════════════════════════════
// TOAST
// ══════════════════════════════════════════════════════════════
function showToast(msg, type = '') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = msg;
  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.add('out');
    setTimeout(() => toast.remove(), 380);
  }, 3200);
}

// ══════════════════════════════════════════════════════════════
// WEB AUDIO — sons procedurais
// ══════════════════════════════════════════════════════════════
let audioCtx = null;
function getAudio() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  if (audioCtx.state === 'suspended') audioCtx.resume();
  return audioCtx;
}

function playSound(type) {
  try {
    const ctx = getAudio();
    const now = ctx.currentTime;

    if (type === 'open') {
      const o = ctx.createOscillator(), g = ctx.createGain();
      o.connect(g); g.connect(ctx.destination);
      o.type = 'sine';
      o.frequency.setValueAtTime(520, now);
      o.frequency.exponentialRampToValueAtTime(960, now + 0.14);
      g.gain.setValueAtTime(0.07, now);
      g.gain.exponentialRampToValueAtTime(0.001, now + 0.28);
      o.start(now); o.stop(now + 0.3);

    } else if (type === 'unlock') {
      // Fanfarra épica
      [523, 659, 784, 880, 1047].forEach((freq, i) => {
        const o = ctx.createOscillator(), g = ctx.createGain();
        o.connect(g); g.connect(ctx.destination);
        o.type = 'triangle';
        o.frequency.setValueAtTime(freq, now + i * 0.1);
        g.gain.setValueAtTime(0.13, now + i * 0.1);
        g.gain.exponentialRampToValueAtTime(0.001, now + i * 0.1 + 0.28);
        o.start(now + i * 0.1); o.stop(now + i * 0.1 + 0.3);
      });
      // Sub bass hit
      const sub = ctx.createOscillator(), sg = ctx.createGain();
      sub.connect(sg); sg.connect(ctx.destination);
      sub.type = 'sine'; sub.frequency.value = 80;
      sg.gain.setValueAtTime(0.25, now); sg.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
      sub.start(now); sub.stop(now + 0.5);

    } else if (type === 'fav') {
      [880, 1100].forEach((freq, i) => {
        const o = ctx.createOscillator(), g = ctx.createGain();
        o.connect(g); g.connect(ctx.destination);
        o.type = 'sine';
        o.frequency.setValueAtTime(freq, now + i * 0.1);
        g.gain.setValueAtTime(0.06, now + i * 0.1);
        g.gain.exponentialRampToValueAtTime(0.001, now + i * 0.1 + 0.18);
        o.start(now + i * 0.1); o.stop(now + i * 0.1 + 0.2);
      });
    }
  } catch (e) { /* silencioso */ }
}

// ══════════════════════════════════════════════════════════════
// EVENT LISTENERS
// ══════════════════════════════════════════════════════════════
function setupEventListeners() {
  // ── Modal
  document.getElementById('modal-close')?.addEventListener('click', closeModal);
  document.getElementById('modal-overlay')?.addEventListener('click', e => {
    if (e.target === document.getElementById('modal-overlay')) closeModal();
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  // ── Unlock random
  document.getElementById('unlock-random-btn')?.addEventListener('click', unlockRandom);

  // ── Fechar unlock-fx
  document.getElementById('unlock-fx')?.addEventListener('click', () => {
    document.getElementById('unlock-fx').classList.add('hidden');
    renderCards();
    updateProgress();
    renderCollectionDashboard();
    renderRanking();
  });

  // ── Busca
  const searchInput = document.getElementById('search-input');
  searchInput?.addEventListener('input', e => {
    state.searchQuery = e.target.value;
    renderCards();
  });
  document.getElementById('search-clear')?.addEventListener('click', () => {
    if (searchInput) { searchInput.value = ''; state.searchQuery = ''; renderCards(); }
  });

  // ── Filtros (event delegation em cada grupo)
  document.querySelectorAll('.filter-pills').forEach(group => {
    group.addEventListener('click', e => {
      const btn = e.target.closest('.pill');
      if (!btn) return;
      const filterType = btn.dataset.filter;
      const value = btn.dataset.value;
      if (!filterType || !value) return;
      group.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      state.filters[filterType] = value;
      renderCards();
    });
  });

  // ── Tema (DEX)
  document.getElementById('theme-toggle')?.addEventListener('click', toggleTheme);

  // ── Tema (HOME)
  document.getElementById('theme-toggle-home')?.addEventListener('click', toggleTheme);

  // ── Tabs DEX
  document.querySelectorAll('.dex-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      state.currentTab = target;
      document.querySelectorAll('.dex-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById(`tab-${target}`)?.classList.add('active');
      if (target === 'collection') renderCollectionDashboard();
      if (target === 'ranking') renderRanking();
    });
  });

  // ── Ranking btn no header (atalho)
  document.getElementById('ranking-btn')?.addEventListener('click', () => {
    document.querySelectorAll('.dex-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    document.querySelector('[data-tab="ranking"]')?.classList.add('active');
    document.getElementById('tab-ranking')?.classList.add('active');
    renderRanking();
    document.getElementById('tab-ranking')?.scrollIntoView({ behavior: 'smooth' });
  });

  // Smooth scroll nos links da nav home
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
        document.querySelector('.home-nav-links')?.classList.remove('open');
        const btn = document.getElementById('mobile-menu-btn');
        if (btn) btn.textContent = '☰';
      }
    });
  });
}

// ══════════════════════════════════════════════════════════════
// PARTÍCULAS (canvas fundo)
// ══════════════════════════════════════════════════════════════
function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let w = canvas.width = window.innerWidth;
  let h = canvas.height = window.innerHeight;

  const COLORS = ['#a855f7', '#38bdf8', '#f472b6', '#4ade80', '#fbbf24'];
  const particles = Array.from({ length: 60 }, () => mkP());

  function mkP() {
    return {
      x: Math.random() * w, y: Math.random() * h,
      r: Math.random() * 2 + 0.4,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.45 + 0.08,
      pulse: Math.random() * Math.PI * 2
    };
  }

  window.addEventListener('resize', () => {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  });

  (function loop() {
    ctx.clearRect(0, 0, w, h);
    particles.forEach(p => {
      p.pulse += 0.022;
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = w; if (p.x > w) p.x = 0;
      if (p.y < 0) p.y = h; if (p.y > h) p.y = 0;
      const a = p.alpha * (0.6 + 0.4 * Math.sin(p.pulse));
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color + Math.floor(a * 255).toString(16).padStart(2, '0');
      ctx.fill();
    });
    requestAnimationFrame(loop);
  })();
}
