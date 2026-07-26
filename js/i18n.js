/**
 * i18n & Localization State Management
 * Supported Languages: EN, DE, FR, ES, IT, JA, ZH
 * Currency Support: USD ($), EUR (€), GBP (£), NPR (Rs.)
 * Unit Support: Meters (m) / Feet (ft) | Kilometers (km) / Miles (mi)
 */

const translations = {
  en: {
    tagline: "Your Trusted Gateway to the Himalayas",
    nav_home: "Home",
    nav_regions: "Trekking Regions",
    nav_treks: "Popular Treks",
    nav_seasons: "Seasons & Weather",
    nav_about: "About Us",
    nav_contact: "Contact",
    btn_plan_trip: "Customize My Trek",
    btn_search_treks: "Find Treks",
    label_region: "Select Region",
    label_duration: "Duration",
    label_difficulty: "Difficulty Level",
    label_budget: "Estimated Budget",
    label_all: "All Options",
    altitude_title: "Interactive Altitude Profile Visualizer",
    altitude_desc: "Track elevation gain and acclimatization stops across key Nepalese routes.",
    faq_title: "Frequently Asked Questions",
    footer_quick_links: "Quick Links",
    footer_regions: "Top Regions",
    footer_trust: "Trust & Safety",
    footer_rights: "All rights reserved."
  },
  de: {
    tagline: "Ihr vertrauenswürdiges Tor zum Himalaya",
    nav_home: "Startseite",
    nav_regions: "Trekking-Regionen",
    nav_treks: "Beliebte Treks",
    nav_seasons: "Jahreszeiten & Wetter",
    nav_about: "Über Uns",
    nav_contact: "Kontakt",
    btn_plan_trip: "Mein Trek Anpassen",
    btn_search_treks: "Trek Suchen",
    label_region: "Region Auswählen",
    label_duration: "Dauer",
    label_difficulty: "Schwierigkeitsgrad",
    label_budget: "Geschätztes Budget",
    label_all: "Alle Optionen",
    altitude_title: "Interaktiver Höhenprofil-Visualisierer",
    altitude_desc: "Verfolgen Sie Höhenmeter und Akklimatisierungsstopps auf den Routen in Nepal.",
    faq_title: "Häufig gestellte Fragen",
    footer_quick_links: "Schnelllinks",
    footer_regions: "Top-Regionen",
    footer_trust: "Vertrauen & Sicherheit",
    footer_rights: "Alle Rechte vorbehalten."
  },
  fr: {
    tagline: "Votre porte d'entrée de confiance vers l'Himalaya",
    nav_home: "Accueil",
    nav_regions: "Régions de Trekking",
    nav_treks: "Treks Populaires",
    nav_seasons: "Saisons & Météo",
    nav_about: "À Propos",
    nav_contact: "Contact",
    btn_plan_trip: "Personnaliser mon Trek",
    btn_search_treks: "Trouver des Treks",
    label_region: "Sélectionner une Région",
    label_duration: "Durée",
    label_difficulty: "Niveau de Difficulté",
    label_budget: "Budget Estimé",
    label_all: "Toutes les Options",
    altitude_title: "Visualiseur de Profil d'Altitude Interactif",
    altitude_desc: "Suivez le dénivelé et les étapes d'acclimatation sur les itinéraires népalais.",
    faq_title: "Foire Aux Questions",
    footer_quick_links: "Liens Rapides",
    footer_regions: "Meilleures Régions",
    footer_trust: "Confiance & Sécurité",
    footer_rights: "Tous droits réservés."
  },
  es: {
    tagline: "Su puerta de entrada de confianza al Himalaya",
    nav_home: "Inicio",
    nav_regions: "Regiones de Trekking",
    nav_treks: "Treks Populares",
    nav_seasons: "Temporadas y Clima",
    nav_about: "Nosotros",
    nav_contact: "Contacto",
    btn_plan_trip: "Personalizar mi Trek",
    btn_search_treks: "Buscar Treks",
    label_region: "Seleccionar Región",
    label_duration: "Duración",
    label_difficulty: "Nivel de Dificultad",
    label_budget: "Presupuesto Estimado",
    label_all: "Todas las Opciones",
    altitude_title: "Visualizador Interactivo de Perfil de Altitud",
    altitude_desc: "Siga la elevación y las paradas de aclimatación en las rutas de Nepal.",
    faq_title: "Preguntas Frecuentes",
    footer_quick_links: "Enlaces Rápidos",
    footer_regions: "Principales Regiones",
    footer_trust: "Confianza y Seguridad",
    footer_rights: "Todos los derechos reservados."
  },
  it: {
    tagline: "La tua porta di fiducia per l'Himalaya",
    nav_home: "Home",
    nav_regions: "Regioni di Trekking",
    nav_treks: "Trek Popolari",
    nav_seasons: "Stagioni e Meteo",
    nav_about: "Chi Siamo",
    nav_contact: "Contatti",
    btn_plan_trip: "Personalizza il mio Trek",
    btn_search_treks: "Trova Trek",
    label_region: "Seleziona Regione",
    label_duration: "Durata",
    label_difficulty: "Livello di Difficoltà",
    label_budget: "Budget Stimato",
    label_all: "Tutte le Opzioni",
    altitude_title: "Visualizzatore Interattivo del Profilo d'Altitudine",
    altitude_desc: "Traccia il dislivello e le tappe di acclimatazione sulle rotte del Nepal.",
    faq_title: "Domande Frequenti",
    footer_quick_links: "Link Rapidi",
    footer_regions: "Principali Regioni",
    footer_trust: "Fiducia e Sicurezza",
    footer_rights: "Tutti i diritti riservati."
  },
  ja: {
    tagline: "ヒマラヤへの信頼できるゲートウェイ",
    nav_home: "ホーム",
    nav_regions: "トレッキング地域",
    nav_treks: "人気のトレック",
    nav_seasons: "ベストシーズン",
    nav_about: "会社概要",
    nav_contact: "お問い合わせ",
    btn_plan_trip: "カスタムトレックを計画",
    btn_search_treks: "トレックを検索",
    label_region: "エリアを選択",
    label_duration: "日数",
    label_difficulty: "難易度",
    label_budget: "ご予算",
    label_all: "すべて表示",
    altitude_title: "インタラクティブ標高プロファイル",
    altitude_desc: "ネパールの主要ルートにおける標高差と高度順応ポイントを確認できます。",
    faq_title: "よくある質問",
    footer_quick_links: "クイックリンク",
    footer_regions: "人気エリア",
    footer_trust: "安全と信頼",
    footer_rights: "All rights reserved."
  },
  zh: {
    tagline: "您值得信赖的喜马拉雅门户",
    nav_home: "首页",
    nav_regions: "徒步区域",
    nav_treks: "热门路线",
    nav_seasons: "季节与气候",
    nav_about: "关于我们",
    nav_contact: "联系我们",
    btn_plan_trip: "定制我的徒步行程",
    btn_search_treks: "搜索徒步路线",
    label_region: "选择区域",
    label_duration: "徒步天数",
    label_difficulty: "难度等级",
    label_budget: "预算范围",
    label_all: "显示全部",
    altitude_title: "互动式海拔高度图表",
    altitude_desc: "追踪尼泊尔经典路线的海拔上升与高原适应节点。",
    faq_title: "常见问题解答",
    footer_quick_links: "快速链接",
    footer_regions: "热门大区",
    footer_trust: "安全与保障",
    footer_rights: "版权所有。"
  }
};

const currencyRates = {
  USD: { symbol: "$", rate: 1.0 },
  EUR: { symbol: "€", rate: 0.92 },
  GBP: { symbol: "£", rate: 0.78 },
  NPR: { symbol: "Rs.", rate: 134.5 }
};

let currentLang = 'en';
let currentCurrency = 'USD';
let currentUnit = 'm'; // 'm' or 'ft'

export function setLanguage(lang) {
  if (translations[lang]) {
    currentLang = lang;
    document.documentElement.lang = lang;
    updateDOMTranslations();
  }
}

export function setCurrency(curr) {
  if (currencyRates[curr]) {
    currentCurrency = curr;
    updateCurrencyDisplay();
  }
}

export function setUnit(unit) {
  currentUnit = unit;
  updateUnitDisplay();
}

function updateDOMTranslations() {
  const dict = translations[currentLang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = dict[key];
      } else {
        el.textContent = dict[key];
      }
    }
  });
}

export function formatPrice(usdAmount) {
  const info = currencyRates[currentCurrency];
  const converted = Math.round(usdAmount * info.rate);
  return `${info.symbol}${converted.toLocaleString()}`;
}

export function formatAltitude(meters) {
  if (currentUnit === 'ft') {
    const feet = Math.round(meters * 3.28084);
    return `${feet.toLocaleString()} ft`;
  }
  return `${meters.toLocaleString()} m`;
}

function updateCurrencyDisplay() {
  document.querySelectorAll('[data-price-usd]').forEach(el => {
    const usd = parseFloat(el.getAttribute('data-price-usd'));
    el.textContent = formatPrice(usd);
  });
}

function updateUnitDisplay() {
  document.querySelectorAll('[data-altitude-m]').forEach(el => {
    const m = parseFloat(el.getAttribute('data-altitude-m'));
    el.textContent = formatAltitude(m);
  });
}

// Global Listener Attachment
document.addEventListener('DOMContentLoaded', () => {
  const langSelect = document.getElementById('lang-select');
  const currSelect = document.getElementById('curr-select');
  const unitSelect = document.getElementById('unit-select');

  if (langSelect) {
    langSelect.addEventListener('change', (e) => setLanguage(e.target.value));
  }
  if (currSelect) {
    currSelect.addEventListener('change', (e) => setCurrency(e.target.value));
  }
  if (unitSelect) {
    unitSelect.addEventListener('change', (e) => setUnit(e.target.value));
  }

  updateDOMTranslations();
});
