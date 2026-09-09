/* ============================================================
   Chronic Travel — script.js
   Til (UZ/RU/EN), Light/Dark tema, turlar, modal, forma
   ============================================================ */

/* ---------- Tarjimalar ---------- */
const I18N = {
    uz: {
        nav_home: "Bosh sahifa", nav_tours: "Turlar", nav_about: "Biz haqimizda", nav_contact: "Aloqa",
        header_cta: "Bron qilish",
        hero_eyebrow: "Dunyo sizni kutmoqda",
        hero_title: "Orzuingizdagi sayohat <span>Chronic Travel</span> bilan boshlanadi",
        hero_text: "Malaysia, Thailand, Vietnam va Maldivga qulay narxlarda hashamatli turlar. Litsenziyalangan kompaniya — ishonchli xizmat, kafolatlangan qulaylik.",
        hero_cta1: "Turlarni ko'rish", hero_cta2: "Bepul konsultatsiya",
        stat_exp: "Yil tajriba", stat_travelers: "Sayohatchi", stat_dest: "Yo'nalish",
        tours_eyebrow: "Bizning takliflar", tours_title: "Mashhur turlar va xizmatlar",
        tours_lead: "Har bir tur — sizning qulayligingiz uchun puxta tanlangan. Aviabilet, mehmonxona va transfer narxga kiritilgan.",
        btn_details: "Batafsil", btn_book: "Bron qilish",
        about_eyebrow: "Biz haqimizda", about_title: "Ishonch bilan sayohat qiling",
        about_p: "<strong>Chronic Travel</strong> — O'zbekiston bozorida faoliyat yuritayotgan rasmiy turistik operator. Biz mijozlarimizga eng qulay narxlarda yuqori sifatli xizmat taqdim etamiz. Har bir sayohat individual yondashuv asosida tashkil etiladi.",
        about_li1: "Rasmiy litsenziyalangan turoperator", about_li2: "24/7 qo'llab-quvvatlash xizmati",
        about_li3: "Kafolatlangan mehmonxona va aviabiletlar", about_li4: "Tajribali gid va hamrohlar",
        about_cta: "Biz bilan bog'laning",
        lic_cap: "Rasmiy guvohnoma",
        contact_eyebrow: "Aloqa", contact_title: "Bron qilmoqchimisiz?",
        contact_lead: "Ma'lumotlaringizni yozing va \"Telegram orqali yuborish\"ni bosing — xabar tayyor holda menejerimiz Telegramiga tushadi.",
        contact_addr: "Surxondaryo vil., Denov tumani, Shifokorlar ko'chasi, 94A",
        contact_hours: "Har kuni: 09:00 – 20:00",
        form_name: "Ismingiz", form_name_ph: "Masalan: Ali Valiyev", form_phone: "Telefon raqamingiz",
        form_tour: "Qaysi tur / yo'nalish?", form_tour_ph: "Masalan: Thailand — Phuket", form_submit: "Telegram orqali yuborish",
        form_success: "✅ Telegram ochilmoqda — xabarni jo'natish uchun Telegramdagi \"Yuborish\" tugmasini bosing.",
        err_name: "Iltimos, ismingizni kiriting.", err_phone: "Telefon raqamini kiriting.",
        err_phone2: "To'g'ri telefon raqamini kiriting.", err_tour: "Iltimos, tur yoki yo'nalishni yozing.",
        tg_hello: "Assalomu alaykum! Bron qilmoqchiman 👋", tg_name: "👤 Ism", tg_phone: "📞 Telefon", tg_tour: "🌍 Tur", tg_book: "Assalomu alaykum! Ushbu turni bron qilmoqchiman 👋",
        footer_about: "Dunyo bo'ylab ishonchli va hashamatli sayohatlar. Sizning qulayligingiz — bizning ustuvor vazifamiz.",
        footer_req_title: "Rekvizitlar", footer_req_stir: "STIR: 313 055 675", footer_req_lic: "Guvohnoma № 6721665",
        footer_req_addr: "Surxondaryo vil., Denov tumani, Shifokorlar ko'ch., 94A",
        footer_menu_title: "Menyu", footer_social_title: "Ijtimoiy tarmoqlar",
        footer_offer: "Ommaviy oferta", footer_rights: "Barcha huquqlar himoyalangan.",
        tour_includes: "Narxga kiradi:"
    },
    ru: {
        nav_home: "Главная", nav_tours: "Туры", nav_about: "О нас", nav_contact: "Контакты",
        header_cta: "Забронировать",
        hero_eyebrow: "Мир ждёт вас",
        hero_title: "Путешествие вашей мечты начинается с <span>Chronic Travel</span>",
        hero_text: "Роскошные туры в Малайзию, Таиланд, Вьетнам и на Мальдивы по доступным ценам. Лицензированная компания — надёжный сервис и гарантированный комфорт.",
        hero_cta1: "Смотреть туры", hero_cta2: "Бесплатная консультация",
        stat_exp: "Лет опыта", stat_travelers: "Путешественников", stat_dest: "Направлений",
        tours_eyebrow: "Наши предложения", tours_title: "Популярные туры и услуги",
        tours_lead: "Каждый тур тщательно подобран для вашего комфорта. Авиабилет, отель и трансфер включены в стоимость.",
        btn_details: "Подробнее", btn_book: "Забронировать",
        about_eyebrow: "О нас", about_title: "Путешествуйте с уверенностью",
        about_p: "<strong>Chronic Travel</strong> — официальный туроператор на рынке Узбекистана. Мы предоставляем клиентам качественный сервис по самым выгодным ценам. Каждое путешествие организуется с индивидуальным подходом.",
        about_li1: "Официально лицензированный туроператор", about_li2: "Поддержка 24/7",
        about_li3: "Гарантированные отели и авиабилеты", about_li4: "Опытные гиды и сопровождающие",
        about_cta: "Связаться с нами",
        lic_cap: "Официальное свидетельство",
        contact_eyebrow: "Контакты", contact_title: "Хотите забронировать?",
        contact_lead: "Укажите свои данные и нажмите «Отправить в Telegram» — готовое сообщение придёт в Telegram нашему менеджеру.",
        contact_addr: "Сурхандарья, Денауский р-н, ул. Шифокорлар, 94A",
        contact_hours: "Ежедневно: 09:00 – 20:00",
        form_name: "Ваше имя", form_name_ph: "Например: Али Валиев", form_phone: "Номер телефона",
        form_tour: "Какой тур / направление?", form_tour_ph: "Например: Таиланд — Пхукет", form_submit: "Отправить в Telegram",
        form_success: "✅ Открывается Telegram — нажмите «Отправить» в Telegram, чтобы отправить сообщение.",
        err_name: "Пожалуйста, введите имя.", err_phone: "Введите номер телефона.",
        err_phone2: "Введите корректный номер телефона.", err_tour: "Пожалуйста, укажите тур или направление.",
        tg_hello: "Здравствуйте! Хочу забронировать 👋", tg_name: "👤 Имя", tg_phone: "📞 Телефон", tg_tour: "🌍 Тур", tg_book: "Здравствуйте! Хочу забронировать этот тур 👋",
        footer_about: "Надёжные и роскошные путешествия по всему миру. Ваш комфорт — наш приоритет.",
        footer_req_title: "Реквизиты", footer_req_stir: "ИНН: 313 055 675", footer_req_lic: "Свидетельство № 6721665",
        footer_req_addr: "Сурхандарья, Денауский р-н, ул. Шифокорлар, 94A",
        footer_menu_title: "Меню", footer_social_title: "Соцсети",
        footer_offer: "Публичная оферта", footer_rights: "Все права защищены.",
        tour_includes: "В стоимость входит:"
    },
    en: {
        nav_home: "Home", nav_tours: "Tours", nav_about: "About", nav_contact: "Contact",
        header_cta: "Book now",
        hero_eyebrow: "The world is waiting",
        hero_title: "Your dream journey begins with <span>Chronic Travel</span>",
        hero_text: "Luxury tours to Malaysia, Thailand, Vietnam and the Maldives at great prices. A licensed company — reliable service and guaranteed comfort.",
        hero_cta1: "View tours", hero_cta2: "Free consultation",
        stat_exp: "Years experience", stat_travelers: "Travelers", stat_dest: "Destinations",
        tours_eyebrow: "Our offers", tours_title: "Popular tours & services",
        tours_lead: "Each tour is carefully curated for your comfort. Flights, hotel and transfers are included in the price.",
        btn_details: "Details", btn_book: "Book now",
        about_eyebrow: "About us", about_title: "Travel with confidence",
        about_p: "<strong>Chronic Travel</strong> is an official tour operator in the Uzbekistan market. We deliver high-quality service at the most affordable prices. Every trip is arranged with an individual approach.",
        about_li1: "Officially licensed tour operator", about_li2: "24/7 support service",
        about_li3: "Guaranteed hotels and flight tickets", about_li4: "Experienced guides and companions",
        about_cta: "Get in touch",
        lic_cap: "Official certificate",
        contact_eyebrow: "Contact", contact_title: "Want to book?",
        contact_lead: "Enter your details and tap \"Send via Telegram\" — a ready-made message will reach our manager on Telegram.",
        contact_addr: "Surkhandarya, Denov district, Shifokorlar st., 94A",
        contact_hours: "Every day: 09:00 – 20:00",
        form_name: "Your name", form_name_ph: "e.g. Ali Valiyev", form_phone: "Phone number",
        form_tour: "Which tour / destination?", form_tour_ph: "e.g. Thailand — Phuket", form_submit: "Send via Telegram",
        form_success: "✅ Telegram is opening — tap \"Send\" in Telegram to deliver your message.",
        err_name: "Please enter your name.", err_phone: "Enter your phone number.",
        err_phone2: "Enter a valid phone number.", err_tour: "Please enter a tour or destination.",
        tg_hello: "Hello! I'd like to book 👋", tg_name: "👤 Name", tg_phone: "📞 Phone", tg_tour: "🌍 Tour", tg_book: "Hello! I'd like to book this tour 👋",
        footer_about: "Reliable and luxurious travel around the world. Your comfort is our priority.",
        footer_req_title: "Details", footer_req_stir: "TIN: 313 055 675", footer_req_lic: "Certificate № 6721665",
        footer_req_addr: "Surkhandarya, Denov district, Shifokorlar st., 94A",
        footer_menu_title: "Menu", footer_social_title: "Social media",
        footer_offer: "Public offer", footer_rights: "All rights reserved.",
        tour_includes: "Included in the price:"
    }
};

/* ---------- Turlar ma'lumoti ---------- */
const TELEGRAM_USER = "MyTripChronic";
const TELEGRAM_BOOK = "https://t.me/" + TELEGRAM_USER;
// Telegram lichkaga tayyor matnli havola yaratadi
function tgLink(text) {
    return "https://t.me/" + TELEGRAM_USER + "?text=" + encodeURIComponent(text);
}
const TOURS = [
    {
        id: "malaysia",
        img: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=800&q=80",
        price: "$890",
        badge: { uz: "Eng ommabop", ru: "Популярный", en: "Popular" },
        title: { uz: "Malaysia — Kuala Lumpur", ru: "Малайзия — Куала-Лумпур", en: "Malaysia — Kuala Lumpur" },
        place: { uz: "🌴 Kuala Lumpur", ru: "🌴 Куала-Лумпур", en: "🌴 Kuala Lumpur" },
        days: { uz: "7 kun", ru: "7 дней", en: "7 days" },
        desc: {
            uz: "Petronas minoralari, tropik orollar va zamonaviy shahar hayoti — barchasi bir turda.",
            ru: "Башни Петронас, тропические острова и жизнь современного города — всё в одном туре.",
            en: "Petronas Towers, tropical islands and vibrant city life — all in one tour."
        },
        includes: {
            uz: ["To'g'ridan-to'g'ri aviabilet", "4* mehmonxona (nonushta bilan)", "Transfer va ekskursiyalar", "Sug'urta va viza yordami"],
            ru: ["Прямой авиабилет", "Отель 4* (с завтраком)", "Трансфер и экскурсии", "Страховка и помощь с визой"],
            en: ["Direct flight ticket", "4* hotel (breakfast included)", "Transfers and excursions", "Insurance and visa assistance"]
        }
    },
    {
        id: "thailand",
        img: "https://images.unsplash.com/photo-1537956965359-7573183d1f57?auto=format&fit=crop&w=800&q=80",
        price: "$790",
        badge: { uz: "Chegirma", ru: "Скидка", en: "Sale" },
        title: { uz: "Thailand — Phuket", ru: "Таиланд — Пхукет", en: "Thailand — Phuket" },
        place: { uz: "🏝 Phuket", ru: "🏝 Пхукет", en: "🏝 Phuket" },
        days: { uz: "8 kun", ru: "8 дней", en: "8 days" },
        desc: {
            uz: "Oq qumli plyajlar, Phi Phi orollari va tropik dam olish — unutilmas taassurotlar.",
            ru: "Белоснежные пляжи, острова Пхи-Пхи и тропический отдых — незабываемые впечатления.",
            en: "White sandy beaches, the Phi Phi islands and tropical relaxation — unforgettable memories."
        },
        includes: {
            uz: ["Aviabilet va transfer", "Plyaj bo'yidagi mehmonxona", "Orollar bo'ylab sayohat", "Tungi hayot va shopping"],
            ru: ["Авиабилет и трансфер", "Отель на берегу моря", "Прогулка по островам", "Ночная жизнь и шопинг"],
            en: ["Flight ticket and transfer", "Beachfront hotel", "Island-hopping tour", "Nightlife and shopping"]
        }
    },
    {
        id: "vietnam",
        img: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80",
        price: "$850",
        badge: { uz: "Yangi", ru: "Новинка", en: "New" },
        title: { uz: "Vietnam — Nha Trang", ru: "Вьетнам — Нячанг", en: "Vietnam — Nha Trang" },
        place: { uz: "⛰ Ha Long & Nha Trang", ru: "⛰ Халонг и Нячанг", en: "⛰ Ha Long & Nha Trang" },
        days: { uz: "9 kun", ru: "9 дней", en: "9 days" },
        desc: {
            uz: "Ha Long ko'rfazi, ekzotik taomlar va sokin plyajlar bilan haqiqiy Osiyo mo''jizasi.",
            ru: "Бухта Халонг, экзотическая кухня и тихие пляжи — настоящее азиатское чудо.",
            en: "Ha Long Bay, exotic cuisine and calm beaches — a true Asian wonder."
        },
        includes: {
            uz: ["Aviabilet va transfer", "Kruiz bo'yicha ekskursiya", "3-4* mehmonxona", "Milliy taomlar degustatsiyasi"],
            ru: ["Авиабилет и трансфер", "Круизная экскурсия", "Отель 3-4*", "Дегустация национальной кухни"],
            en: ["Flight ticket and transfer", "Cruise excursion", "3-4* hotel", "National cuisine tasting"]
        }
    },
    {
        id: "maldives",
        img: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80",
        price: "$1 900",
        badge: { uz: "VIP", ru: "VIP", en: "VIP" },
        title: { uz: "Maldiv orollari", ru: "Мальдивы", en: "Maldives" },
        place: { uz: "🌊 Male & atollar", ru: "🌊 Мале и атоллы", en: "🌊 Male & atolls" },
        days: { uz: "6 kun", ru: "6 дней", en: "6 days" },
        desc: {
            uz: "Suv ustidagi villalar, kristalldek dengiz va mukammal xizmat — juftliklar uchun ideal.",
            ru: "Виллы над водой, кристальное море и безупречный сервис — идеально для пар.",
            en: "Overwater villas, crystal-clear sea and flawless service — perfect for couples."
        },
        includes: {
            uz: ["Biznes-klass aviabilet", "Suv ustidagi villa", "All-inclusive ovqatlanish", "Snorkeling va SPA"],
            ru: ["Авиабилет бизнес-класса", "Вилла над водой", "Питание all-inclusive", "Снорклинг и SPA"],
            en: ["Business-class flight", "Overwater villa", "All-inclusive meals", "Snorkeling and SPA"]
        }
    },
    {
        id: "bali",
        img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
        price: "$980",
        badge: { uz: "Medoviy oy", ru: "Медовый месяц", en: "Honeymoon" },
        title: { uz: "Indoneziya — Bali", ru: "Индонезия — Бали", en: "Indonesia — Bali" },
        place: { uz: "🏖 Bali", ru: "🏖 Бали", en: "🏖 Bali" },
        days: { uz: "7 kun", ru: "7 дней", en: "7 days" },
        desc: {
            uz: "Ma'badlar, sholi terrasalar va ekzotik plyajlar — orzudagi romantik sayohat.",
            ru: "Храмы, рисовые террасы и экзотические пляжи — романтическое путешествие мечты.",
            en: "Temples, rice terraces and exotic beaches — the romantic trip of your dreams."
        },
        includes: {
            uz: ["Aviabilet va transfer", "Villa yoki 5* mehmonxona", "Ekskursiyalar dasturi", "Romantik kechki ovqat"],
            ru: ["Авиабилет и трансфер", "Вилла или отель 5*", "Программа экскурсий", "Романтический ужин"],
            en: ["Flight ticket and transfer", "Villa or 5* hotel", "Excursion program", "Romantic dinner"]
        }
    },
    {
        id: "dubai",
        img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
        price: "$760",
        badge: { uz: "Hit", ru: "Хит", en: "Hit" },
        title: { uz: "BAA — Dubay", ru: "ОАЭ — Дубай", en: "UAE — Dubai" },
        place: { uz: "🌆 Dubay", ru: "🌆 Дубай", en: "🌆 Dubai" },
        days: { uz: "5 kun", ru: "5 дней", en: "5 days" },
        desc: {
            uz: "Burj Khalifa, sahro safari va zamonaviy shopping — hashamat va sarguzasht birga.",
            ru: "Бурдж-Халифа, сафари по пустыне и современный шопинг — роскошь и приключения.",
            en: "Burj Khalifa, desert safari and modern shopping — luxury and adventure combined."
        },
        includes: {
            uz: ["Aviabilet va transfer", "Markazda 4-5* mehmonxona", "Sahro safari kechasi", "Shahar ekskursiyasi"],
            ru: ["Авиабилет и трансфер", "Отель 4-5* в центре", "Ночное сафари по пустыне", "Обзорная экскурсия"],
            en: ["Flight ticket and transfer", "4-5* central hotel", "Desert safari night", "City sightseeing tour"]
        }
    }
];

let currentLang = 'uz';

/* ---------- Turlarni chizish ---------- */
function renderTours(lang) {
    const grid = document.getElementById('toursGrid');
    if (!grid) return;
    const t = I18N[lang];
    grid.innerHTML = TOURS.map(tour => `
        <article class="tour-card" data-reveal data-id="${tour.id}">
            <div class="tour-card__media">
                <img src="${tour.img}" alt="${tour.title[lang]}" loading="lazy">
                <span class="tour-card__badge">${tour.badge[lang]}</span>
            </div>
            <div class="tour-card__body">
                <div class="tour-card__meta"><span>${tour.place[lang]}</span><span>${tour.days[lang]}</span></div>
                <h3 class="tour-card__title">${tour.title[lang]}</h3>
                <p class="tour-card__desc">${tour.desc[lang]}</p>
                <span class="tour-card__price">${tour.price}<small>/${lang === 'ru' ? 'чел.' : (lang === 'en' ? 'person' : 'kishi')}</small></span>
                <div class="tour-card__actions">
                    <button class="btn btn--sm btn--ghost js-details" data-id="${tour.id}">${t.btn_details}</button>
                    <a class="btn btn--sm btn--gold" href="${tgLink(t.tg_book + '\n' + t.tg_tour + ': ' + tour.title[lang] + ' (' + tour.price + ')')}" target="_blank" rel="noopener">${t.btn_book}</a>
                </div>
            </div>
        </article>
    `).join('');

    observeReveal(grid.querySelectorAll('[data-reveal]'));
}

/* ---------- Modal ---------- */
function openModal(id) {
    const tour = TOURS.find(x => x.id === id);
    if (!tour) return;
    const lang = currentLang;
    document.getElementById('modalImg').src = tour.img;
    document.getElementById('modalImg').alt = tour.title[lang];
    document.getElementById('modalBadge').textContent = tour.badge[lang];
    document.getElementById('modalTitle').textContent = tour.title[lang];
    document.getElementById('modalMeta').textContent = `${tour.place[lang]} • ${tour.days[lang]}`;
    document.getElementById('modalDesc').textContent = tour.desc[lang];
    document.getElementById('modalPrice').textContent = tour.price;
    const list = document.getElementById('modalList');
    list.innerHTML = tour.includes[lang].map(i => `<li>${i}</li>`).join('');
    const t = I18N[lang];
    document.getElementById('modalBook').href = tgLink(t.tg_book + '\n' + t.tg_tour + ': ' + tour.title[lang] + ' (' + tour.price + ')');
    const modal = document.getElementById('tourModal');
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
}
function closeModal() {
    document.getElementById('tourModal').hidden = true;
    document.body.style.overflow = '';
}

/* ---------- Reveal observer ---------- */
let revealObserver = null;
function observeReveal(els) {
    if (!('IntersectionObserver' in window)) {
        els.forEach(el => el.classList.add('visible'));
        return;
    }
    if (!revealObserver) {
        revealObserver = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });
    }
    els.forEach(el => revealObserver.observe(el));
}

/* ---------- Tilni qo'llash ---------- */
function applyLang(lang) {
    if (!I18N[lang]) lang = 'uz';
    currentLang = lang;
    const t = I18N[lang];
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) el.textContent = t[key];
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        if (t[key] !== undefined) el.innerHTML = t[key];
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
        const key = el.getAttribute('data-i18n-ph');
        if (t[key] !== undefined) el.setAttribute('placeholder', t[key]);
    });

    document.querySelectorAll('.lang__btn').forEach(b => {
        b.classList.toggle('active', b.dataset.lang === lang);
    });

    renderTours(lang);

    try { localStorage.setItem('ct_lang', lang); } catch (e) {}
}

/* ---------- Tema ---------- */
function applyTheme(theme) {
    const isDark = theme === 'dark';
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    const icon = document.querySelector('.theme-toggle__icon');
    if (icon) icon.textContent = isDark ? '☀️' : '🌙';
    try { localStorage.setItem('ct_theme', isDark ? 'dark' : 'light'); } catch (e) {}
}

/* ============================================================ */
document.addEventListener('DOMContentLoaded', () => {

    /* Yil */
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    /* Boshlang'ich til va tema */
    let savedLang = 'uz', savedTheme = 'light';
    try {
        savedLang = localStorage.getItem('ct_lang') || 'uz';
        savedTheme = localStorage.getItem('ct_theme') ||
            (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    } catch (e) {}
    applyTheme(savedTheme);
    applyLang(savedLang);

    /* Header scroll */
    const header = document.getElementById('header');
    const onScroll = () => {
        if (window.scrollY > 40) header.classList.add('scrolled');
        else header.classList.remove('scrolled');
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    /* Til tugmalari */
    document.querySelectorAll('.lang__btn').forEach(btn => {
        btn.addEventListener('click', () => applyLang(btn.dataset.lang));
    });

    /* Tema tugmasi */
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
            applyTheme(isDark ? 'light' : 'dark');
        });
    }

    /* Mobil menyu */
    const navToggle = document.getElementById('navToggle');
    const nav = document.getElementById('nav');
    const closeMenu = () => {
        nav.classList.remove('open');
        navToggle.classList.remove('open');
        document.body.style.overflow = '';
    };
    navToggle.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('open');
        navToggle.classList.toggle('open', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
    });
    nav.querySelectorAll('.nav__link').forEach(link => link.addEventListener('click', closeMenu));
    document.addEventListener('click', (e) => {
        if (nav.classList.contains('open') && !nav.contains(e.target) && !navToggle.contains(e.target)) closeMenu();
    });

    /* Reveal (statik elementlar) */
    observeReveal(document.querySelectorAll('[data-reveal]'));

    /* Statistika sanoq */
    const counters = document.querySelectorAll('[data-count]');
    let counted = false;
    const runCounters = () => {
        counters.forEach(el => {
            const target = +el.dataset.count;
            const suffix = el.dataset.suffix || '';
            const duration = 1600;
            const start = performance.now();
            const step = (now) => {
                const p = Math.min((now - start) / duration, 1);
                const eased = 1 - Math.pow(1 - p, 3);
                el.textContent = Math.floor(eased * target).toLocaleString('ru-RU');
                if (p < 1) requestAnimationFrame(step);
                else el.textContent = target.toLocaleString('ru-RU') + suffix;
            };
            requestAnimationFrame(step);
        });
    };
    const heroStats = document.querySelector('.hero__stats');
    if (heroStats && 'IntersectionObserver' in window) {
        const statObs = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !counted) { counted = true; runCounters(); }
            });
        }, { threshold: 0.4 });
        statObs.observe(heroStats);
    } else { runCounters(); }

    /* Scroll-spy */
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav__link');
    const spy = () => {
        const pos = window.scrollY + 120;
        sections.forEach(sec => {
            const top = sec.offsetTop, bottom = top + sec.offsetHeight;
            const link = document.querySelector(`.nav__link[href="#${sec.id}"]`);
            if (!link) return;
            if (pos >= top && pos < bottom) {
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        });
    };
    window.addEventListener('scroll', spy, { passive: true });
    spy();

    /* Batafsil (modal) — delegatsiya */
    document.getElementById('toursGrid').addEventListener('click', (e) => {
        const btn = e.target.closest('.js-details');
        if (btn) openModal(btn.dataset.id);
    });
    document.getElementById('tourModal').addEventListener('click', (e) => {
        if (e.target.hasAttribute('data-close')) closeModal();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });

    /* Forma */
    const form = document.getElementById('orderForm');
    const success = document.getElementById('formSuccess');
    const showError = (field, msg) => {
        field.classList.add('invalid');
        const s = field.querySelector('.field__error'); if (s) s.textContent = msg;
    };
    const clearError = (field) => {
        field.classList.remove('invalid');
        const s = field.querySelector('.field__error'); if (s) s.textContent = '';
    };
    const validatePhone = (v) => v.replace(/\D/g, '').length >= 7;

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const t = I18N[currentLang];
            let valid = true;
            const nameInput = form.querySelector('#name');
            const phoneInput = form.querySelector('#phone');
            const tourInput = form.querySelector('#tour');
            const nameField = nameInput.closest('.field');
            const phoneField = phoneInput.closest('.field');
            const tourField = tourInput.closest('.field');

            if (nameInput.value.trim().length < 2) { showError(nameField, t.err_name); valid = false; }
            else clearError(nameField);

            if (!phoneInput.value.trim()) { showError(phoneField, t.err_phone); valid = false; }
            else if (!validatePhone(phoneInput.value)) { showError(phoneField, t.err_phone2); valid = false; }
            else clearError(phoneField);

            if (!tourInput.value.trim()) { showError(tourField, t.err_tour); valid = false; }
            else clearError(tourField);

            if (!valid) return;

            // Ma'lumotlardan tayyor xabar yasab, Telegram lichkani ochamiz
            const name = nameInput.value.trim();
            const phone = phoneInput.value.trim();
            const tour = tourInput.value.trim();
            const message = `${t.tg_hello}\n${t.tg_name}: ${name}\n${t.tg_phone}: ${phone}\n${t.tg_tour}: ${tour}`;
            window.open(tgLink(message), '_blank');

            success.textContent = t.form_success;
            success.hidden = false;
            form.reset();
            success.scrollIntoView({ behavior: 'smooth', block: 'center' });
            setTimeout(() => { success.hidden = true; }, 8000);
        });
        form.querySelectorAll('input, select').forEach(el => {
            el.addEventListener('input', () => clearError(el.closest('.field')));
        });
    }
});
