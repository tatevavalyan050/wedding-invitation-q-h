/**
 * Language switcher — Armenian / Russian / English
 */
(function () {
  const STORAGE_KEY = "wedding-lang";
  const DEFAULT_LANG = "hy";
  const SUPPORTED = ["hy", "ru", "en"];

  const translations = {
    hy: {
      "meta.title": "Հովո և Քրիստինա | Հարսանիք",
      "meta.description": "Սիրով հրավիրում ենք Ձեզ Հովոյի և Քրիստինայի հարսանիքին՝ 29 սեպտեմբերի, 2026",
      "nav.home": "Սկիզբ",
      "nav.schedule": "Ծրագիր",
      "nav.contact": "Կապ",
      "nav.aria": "Հիմնական նավիգացիա",
      "nav.ariaMobile": "Բջջային նավիգացիա",
      "hero.eyebrow": "Սիրով հրավիրում ենք Ձեզ",
      "hero.groom": "Հովո",
      "hero.and": "և",
      "hero.bride": "Քրիստինա",
      "hero.text": "Եկեք կիսեք մեզ հետ մեր կյանքի ամենալուսավոր և սիրառատ օրը",
      "hero.place": "Ոսկե Ծիրան Պրեմիում Հոլլ",
      "hero.cta": "Տեսնել օրվա ծրագիրը",
      "countdown.label": "Մինչև մեր մեծ օրը",
      "countdown.days": "օր",
      "countdown.hours": "ժամ",
      "countdown.minutes": "րոպե",
      "countdown.seconds": "վայրկյան",
      "countdown.weddingDay": "Այսօր մեր հարսանիքն է",
      "schedule.eyebrow": "Ծրագիր",
      "schedule.title": "Մեր օրվա գեղեցիկ պահերը",
      "schedule.bride": "Հարսի տուն",
      "schedule.brideAddr": "Estet Bride House, Գեղանիստ, Արարատ · 10-րդ փողոց, 52 տուն",
      "schedule.groom": "Փեսայի տուն",
      "schedule.groomAddr": "գյուղ Գոռավան · Հովհաննես Շիրազի փողոց, տուն 35",
      "schedule.church": "Պսակի արարողություն",
      "schedule.churchAddr": "Արտաշատի Սուրբ Հովհաննես եկեղեցի",
      "schedule.party": "Հարսանյաց տոն",
      "schedule.partyAddr": "Ոսկե Ծիրան Պրեմիում Հոլլ",
      "schedule.map": "Քարտեզ",
      "rsvp.eyebrow": "Հաստատում",
      "rsvp.title": "Կապ և մասնակցության հաստատում",
      "rsvp.text": "Սիրով սպասում ենք Ձեզ։ Մասնակցությունը հաստատելու կամ հարցերի դեպքում կարող եք կապ հաստատել մեզ հետ։",
      "footer.note": "Սիրով և երախտագիտությամբ",
      "footer.names": "Հովո և Քրիստինա · 29.09.2026",
      "audio.fallback": "Ձեր դիտարկիչը չի աջակցում ձայնային նվագարկումը։",
    },
    ru: {
      "meta.title": "Ово и Кристина | Свадьба",
      "meta.description": "С любовью приглашаем вас на свадьбу Ово и Кристины — 29 сентября 2026",
      "nav.home": "Главная",
      "nav.schedule": "Программа",
      "nav.contact": "Контакты",
      "nav.aria": "Основная навигация",
      "nav.ariaMobile": "Мобильная навигация",
      "hero.eyebrow": "С любовью приглашаем вас",
      "hero.groom": "Ово",
      "hero.and": "и",
      "hero.bride": "Кристина",
      "hero.text": "Разделите с нами самый светлый и любимый день нашей жизни",
      "hero.place": "Voske Tsiran Premium Hall",
      "hero.cta": "Смотреть программу дня",
      "countdown.label": "До нашего большого дня",
      "countdown.days": "дн.",
      "countdown.hours": "час.",
      "countdown.minutes": "мин.",
      "countdown.seconds": "сек.",
      "countdown.weddingDay": "Сегодня наш свадебный день",
      "schedule.eyebrow": "Программа",
      "schedule.title": "Прекрасные моменты нашего дня",
      "schedule.bride": "Дом невесты",
      "schedule.brideAddr": "Estet Bride House, Геганист, Арарат · 10-я улица, дом 52",
      "schedule.groom": "Дом жениха",
      "schedule.groomAddr": "село Гораван · улица Оганеса Шираза, дом 35",
      "schedule.church": "Венчание",
      "schedule.churchAddr": "Церковь Святого Ованеса, Арташат",
      "schedule.party": "Свадебный праздник",
      "schedule.partyAddr": "Voske Tsiran Premium Hall",
      "schedule.map": "Карта",
      "rsvp.eyebrow": "Подтверждение",
      "rsvp.title": "Связь и подтверждение участия",
      "rsvp.text": "С любовью ждём вас. Пожалуйста, подтвердите участие или свяжитесь с нами по любым вопросам.",
      "footer.note": "С любовью и благодарностью",
      "footer.names": "Ово и Кристина · 29.09.2026",
      "audio.fallback": "Ваш браузер не поддерживает воспроизведение аудио.",
    },
    en: {
      "meta.title": "Hovo & Kristina | Wedding",
      "meta.description": "With love, we invite you to Hovo and Kristina’s wedding — September 29, 2026",
      "nav.home": "Home",
      "nav.schedule": "Schedule",
      "nav.contact": "Contact",
      "nav.aria": "Main navigation",
      "nav.ariaMobile": "Mobile navigation",
      "hero.eyebrow": "With love, we invite you",
      "hero.groom": "Hovo",
      "hero.and": "&",
      "hero.bride": "Kristina",
      "hero.text": "Join us to share the brightest and most loving day of our lives",
      "hero.place": "Voske Tsiran Premium Hall",
      "hero.cta": "View the day’s schedule",
      "countdown.label": "Until our big day",
      "countdown.days": "days",
      "countdown.hours": "hours",
      "countdown.minutes": "min",
      "countdown.seconds": "sec",
      "countdown.weddingDay": "Today is our wedding day",
      "schedule.eyebrow": "Schedule",
      "schedule.title": "Beautiful moments of our day",
      "schedule.bride": "Bride’s home",
      "schedule.brideAddr": "Estet Bride House, Geghanist, Ararat · 10th Street, house 52",
      "schedule.groom": "Groom’s home",
      "schedule.groomAddr": "Goravan village · Hovhannes Shiraz Street, house 35",
      "schedule.church": "Wedding ceremony",
      "schedule.churchAddr": "Saint Hovhannes Church, Artashat",
      "schedule.party": "Wedding celebration",
      "schedule.partyAddr": "Voske Tsiran Premium Hall",
      "schedule.map": "Map",
      "rsvp.eyebrow": "RSVP",
      "rsvp.title": "Contact & confirmation",
      "rsvp.text": "We look forward to seeing you. Please confirm your attendance or reach out with any questions.",
      "footer.note": "With love and gratitude",
      "footer.names": "Hovo & Kristina · 29.09.2026",
      "audio.fallback": "Your browser does not support audio playback.",
    },
  };

  function getLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    return SUPPORTED.includes(saved) ? saved : DEFAULT_LANG;
  }

  function applyLanguage(lang) {
    const dict = translations[lang] || translations[DEFAULT_LANG];
    document.documentElement.lang = lang === "en" ? "en" : lang === "ru" ? "ru" : "hy";

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (key && dict[key] != null) {
        el.textContent = dict[key];
      }
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria");
      if (key && dict[key] != null) {
        el.setAttribute("aria-label", dict[key]);
      }
    });

    if (dict["meta.title"]) document.title = dict["meta.title"];
    const desc = document.querySelector('meta[name="description"]');
    if (desc && dict["meta.description"]) {
      desc.setAttribute("content", dict["meta.description"]);
    }

    document.querySelectorAll(".lang-switch__btn").forEach((btn) => {
      const active = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });

    localStorage.setItem(STORAGE_KEY, lang);
  }

  function init() {
    const switcher = document.getElementById("lang-switch");
    if (!switcher) return;

    switcher.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-lang]");
      if (!btn) return;
      applyLanguage(btn.getAttribute("data-lang"));
    });

    applyLanguage(getLang());
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
