/* ============================================================
   Chronic Travel — Admin panel logikasi (Supabase)
   ============================================================ */
const SUPABASE_URL = 'https://wfqhnjmazdtcssdmdkzi.supabase.co';
const SUPABASE_KEY = 'sb_publishable_ozlNK2jGpxLnFE19tI1g-Q_RrWFfiAi';
const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

const $ = (id) => document.getElementById(id);
const LANGS = ['uz', 'ru', 'en'];
const TFIELDS = ['badge', 'title', 'place', 'days', 'desc', 'includes'];
const TLABEL = { badge: 'Belgi (badge)', title: 'Nomi', place: 'Joy', days: 'Muddat', desc: 'Tavsif', includes: 'Narxga kiradi (har qatorда bittadan)' };

/* Namunaviy turlar (import uchun) */
const SEED = [
  { sort:1, image:'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=800&q=80', price:'$890', badge:{uz:'Eng ommabop',ru:'Популярный',en:'Popular'}, title:{uz:'Malaysia — Kuala Lumpur',ru:'Малайзия — Куала-Лумпур',en:'Malaysia — Kuala Lumpur'}, place:{uz:'🌴 Kuala Lumpur',ru:'🌴 Куала-Лумпур',en:'🌴 Kuala Lumpur'}, days:{uz:'7 kun',ru:'7 дней',en:'7 days'}, desc:{uz:'Petronas minoralari, tropik orollar va zamonaviy shahar hayoti.',ru:'Башни Петронас, тропические острова и современный город.',en:'Petronas Towers, tropical islands and vibrant city life.'}, includes:{uz:["To'g'ridan-to'g'ri aviabilet","4* mehmonxona (nonushta bilan)","Transfer va ekskursiyalar","Sug'urta va viza yordami"],ru:["Прямой авиабилет","Отель 4* (с завтраком)","Трансфер и экскурсии","Страховка и помощь с визой"],en:["Direct flight ticket","4* hotel (breakfast included)","Transfers and excursions","Insurance and visa assistance"]} },
  { sort:2, image:'https://images.unsplash.com/photo-1537956965359-7573183d1f57?auto=format&fit=crop&w=800&q=80', price:'$790', badge:{uz:'Chegirma',ru:'Скидка',en:'Sale'}, title:{uz:'Thailand — Phuket',ru:'Таиланд — Пхукет',en:'Thailand — Phuket'}, place:{uz:'🏝 Phuket',ru:'🏝 Пхукет',en:'🏝 Phuket'}, days:{uz:'8 kun',ru:'8 дней',en:'8 days'}, desc:{uz:'Oq qumli plyajlar, Phi Phi orollari va tropik dam olish.',ru:'Белые пляжи, острова Пхи-Пхи и тропический отдых.',en:'White beaches, the Phi Phi islands and tropical relaxation.'}, includes:{uz:["Aviabilet va transfer","Plyaj bo'yidagi mehmonxona","Orollar bo'ylab sayohat","Tungi hayot va shopping"],ru:["Авиабилет и трансфер","Отель на берегу","Прогулка по островам","Ночная жизнь и шопинг"],en:["Flight and transfer","Beachfront hotel","Island-hopping tour","Nightlife and shopping"]} },
  { sort:3, image:'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80', price:'$850', badge:{uz:'Yangi',ru:'Новинка',en:'New'}, title:{uz:'Vietnam — Nha Trang',ru:'Вьетнам — Нячанг',en:'Vietnam — Nha Trang'}, place:{uz:'⛰ Ha Long & Nha Trang',ru:'⛰ Халонг и Нячанг',en:'⛰ Ha Long & Nha Trang'}, days:{uz:'9 kun',ru:'9 дней',en:'9 days'}, desc:{uz:"Ha Long ko'rfazi, ekzotik taomlar va sokin plyajlar.",ru:'Бухта Халонг, экзотическая кухня и тихие пляжи.',en:'Ha Long Bay, exotic cuisine and calm beaches.'}, includes:{uz:["Aviabilet va transfer","Kruiz bo'yicha ekskursiya","3-4* mehmonxona","Milliy taomlar"],ru:["Авиабилет и трансфер","Круизная экскурсия","Отель 3-4*","Национальная кухня"],en:["Flight and transfer","Cruise excursion","3-4* hotel","National cuisine"]} },
  { sort:4, image:'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=80', price:'$1 900', badge:{uz:'VIP',ru:'VIP',en:'VIP'}, title:{uz:'Maldiv orollari',ru:'Мальдивы',en:'Maldives'}, place:{uz:'🌊 Male & atollar',ru:'🌊 Мале и атоллы',en:'🌊 Male & atolls'}, days:{uz:'6 kun',ru:'6 дней',en:'6 days'}, desc:{uz:'Suv ustidagi villalar, kristalldek dengiz va mukammal xizmat.',ru:'Виллы над водой, кристальное море и сервис.',en:'Overwater villas, crystal-clear sea and flawless service.'}, includes:{uz:["Biznes-klass aviabilet","Suv ustidagi villa","All-inclusive ovqatlanish","Snorkeling va SPA"],ru:["Авиабилет бизнес-класса","Вилла над водой","Питание all-inclusive","Снорклинг и SPA"],en:["Business-class flight","Overwater villa","All-inclusive meals","Snorkeling and SPA"]} },
  { sort:5, image:'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80', price:'$980', badge:{uz:'Medoviy oy',ru:'Медовый месяц',en:'Honeymoon'}, title:{uz:'Indoneziya — Bali',ru:'Индонезия — Бали',en:'Indonesia — Bali'}, place:{uz:'🏖 Bali',ru:'🏖 Бали',en:'🏖 Bali'}, days:{uz:'7 kun',ru:'7 дней',en:'7 days'}, desc:{uz:"Ma'badlar, sholi terrasalar va ekzotik plyajlar.",ru:'Храмы, рисовые террасы и экзотические пляжи.',en:'Temples, rice terraces and exotic beaches.'}, includes:{uz:["Aviabilet va transfer","Villa yoki 5* mehmonxona","Ekskursiyalar","Romantik kechki ovqat"],ru:["Авиабилет и трансфер","Вилла или отель 5*","Экскурсии","Романтический ужин"],en:["Flight and transfer","Villa or 5* hotel","Excursions","Romantic dinner"]} },
  { sort:6, image:'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80', price:'$760', badge:{uz:'Hit',ru:'Хит',en:'Hit'}, title:{uz:'BAA — Dubay',ru:'ОАЭ — Дубай',en:'UAE — Dubai'}, place:{uz:'🌆 Dubay',ru:'🌆 Дубай',en:'🌆 Dubai'}, days:{uz:'5 kun',ru:'5 дней',en:'5 days'}, desc:{uz:'Burj Khalifa, sahro safari va zamonaviy shopping.',ru:'Бурдж-Халифа, сафари и современный шопинг.',en:'Burj Khalifa, desert safari and modern shopping.'}, includes:{uz:["Aviabilet va transfer","Markazda 4-5* mehmonxona","Sahro safari","Shahar ekskursiyasi"],ru:["Авиабилет и трансфер","Отель 4-5* в центре","Сафари по пустыне","Обзорная экскурсия"],en:["Flight and transfer","4-5* central hotel","Desert safari","City sightseeing"]} }
];

/* ---------- AUTH ---------- */
async function init() {
  const { data } = await sb.auth.getSession();
  if (data.session) showApp(data.session.user);
  else showLogin();
}
function showLogin(){ $('appView').classList.add('hidden'); $('loginView').classList.remove('hidden'); }
function showApp(user){
  $('loginView').classList.add('hidden'); $('appView').classList.remove('hidden');
  $('whoami').textContent = user.email || '';
  loadTours(); loadOrders(); loadSettings();
}

$('loginBtn').addEventListener('click', async () => {
  const email = $('email').value.trim(), password = $('password').value;
  $('loginMsg').textContent = 'Kirilmoqda...'; $('loginMsg').className = 'msg';
  const { data, error } = await sb.auth.signInWithPassword({ email, password });
  if (error) { $('loginMsg').textContent = 'Xato: ' + error.message; $('loginMsg').className = 'msg msg--err'; return; }
  $('loginMsg').textContent = ''; showApp(data.user);
});
$('password').addEventListener('keydown', e => { if (e.key === 'Enter') $('loginBtn').click(); });
$('logoutBtn').addEventListener('click', async () => { await sb.auth.signOut(); showLogin(); });

/* ---------- TABS ---------- */
document.querySelectorAll('.tab').forEach(t => t.addEventListener('click', () => {
  document.querySelectorAll('.tab').forEach(x => x.classList.remove('active'));
  t.classList.add('active');
  ['tours','orders','settings'].forEach(n => $('tab-'+n).classList.toggle('hidden', n !== t.dataset.tab));
}));

/* ---------- TURLAR ---------- */
async function loadTours() {
  const list = $('toursList'); list.innerHTML = '<p class="muted">Yuklanmoqda...</p>';
  const { data, error } = await sb.from('tours').select('*').order('sort', { ascending: true });
  if (error) { list.innerHTML = '<p class="msg msg--err">Xato: ' + error.message + '</p>'; return; }
  if (!data.length) { list.innerHTML = '<div class="card"><p class="muted">Hali tur yo\'q. «Namunaviy turlarni import qilish» tugmasini bosing yoki yangi tur qo\'shing.</p></div>'; return; }
  list.innerHTML = data.map(t => `
    <div class="card tour-item">
      <img src="${t.image||''}" alt="" onerror="this.style.visibility='hidden'">
      <div class="tour-item__info">
        <b>${t.title_uz||'(nomsiz)'}</b> ${t.active ? '' : '<span class="muted">(yashirin)</span>'}<br>
        <span class="muted">${t.place_uz||''} · ${t.days_uz||''}</span> — <span class="tour-item__price">${t.price||''}</span>
      </div>
      <div class="tour-item__actions">
        <button class="btn btn--ghost btn--sm" onclick="editTour('${t.id}')">✏️</button>
        <button class="btn btn--danger btn--sm" onclick="delTour('${t.id}','${(t.title_uz||'').replace(/'/g,"")}')">🗑</button>
      </div>
    </div>`).join('');
}

$('importBtn').addEventListener('click', async () => {
  const { data: existing } = await sb.from('tours').select('id');
  if (existing && existing.length && !confirm('Bazada allaqachon turlar bor. Namunalarni baribir qo\'shaymi?')) return;
  const rows = SEED.map(s => toRow(s));
  const { error } = await sb.from('tours').insert(rows);
  if (error) alert('Xato: ' + error.message); else { alert('Namunaviy turlar qo\'shildi ✅'); loadTours(); }
});

function toRow(o) {
  const r = { sort: o.sort||0, image: o.image||'', price: o.price||'', active: o.active !== false };
  LANGS.forEach(l => TFIELDS.forEach(f => {
    let v = o[f] ? o[f][l] : '';
    if (f === 'includes' && Array.isArray(v)) v = v.join('\n');
    r[f + '_' + l] = v || '';
  }));
  return r;
}

/* modal */
function buildLangFields() {
  $('langFields').innerHTML = LANGS.map(l => `<div class="lang-pane" data-lp="${l}" ${l!=='uz'?'style="display:none"':''}>
    ${TFIELDS.map(f => `<div class="field">
      <label>${TLABEL[f]} (${l.toUpperCase()})</label>
      ${f==='includes'||f==='desc' ? `<textarea id="f_${f}_${l}" rows="${f==='includes'?4:2}"></textarea>` : `<input id="f_${f}_${l}">`}
    </div>`).join('')}
  </div>`).join('');
}
document.querySelectorAll('.lang-tab').forEach(t => t.addEventListener('click', () => {
  document.querySelectorAll('.lang-tab').forEach(x => x.classList.remove('active'));
  t.classList.add('active');
  document.querySelectorAll('.lang-pane').forEach(p => p.style.display = p.dataset.lp === t.dataset.l ? '' : 'none');
}));
$('t_image').addEventListener('input', e => { const p = $('t_preview'); if (e.target.value) { p.src = e.target.value; p.style.display = 'block'; } else p.style.display = 'none'; });

function openTourModal() { buildLangFields(); $('tourModal').classList.remove('hidden'); $('tourMsg').textContent=''; }
$('addTourBtn').addEventListener('click', () => {
  $('modalTitle').textContent = 'Yangi tur';
  $('t_id').value=''; $('t_image').value=''; $('t_price').value=''; $('t_sort').value='0'; $('t_active').checked=true; $('t_preview').style.display='none';
  openTourModal();
  document.querySelector('.lang-tab[data-l="uz"]').click();
});
$('cancelTour').addEventListener('click', () => $('tourModal').classList.add('hidden'));

window.editTour = async (id) => {
  const { data, error } = await sb.from('tours').select('*').eq('id', id).single();
  if (error) { alert('Xato: ' + error.message); return; }
  $('modalTitle').textContent = 'Turni tahrirlash';
  $('t_id').value = data.id; $('t_image').value = data.image||''; $('t_price').value = data.price||'';
  $('t_sort').value = data.sort||0; $('t_active').checked = !!data.active;
  if (data.image) { $('t_preview').src = data.image; $('t_preview').style.display='block'; } else $('t_preview').style.display='none';
  openTourModal();
  LANGS.forEach(l => TFIELDS.forEach(f => { const el = $(`f_${f}_${l}`); if (el) el.value = data[`${f}_${l}`] || ''; }));
  document.querySelector('.lang-tab[data-l="uz"]').click();
};

$('saveTour').addEventListener('click', async () => {
  const row = { sort: parseInt($('t_sort').value)||0, image: $('t_image').value.trim(), price: $('t_price').value.trim(), active: $('t_active').checked };
  LANGS.forEach(l => TFIELDS.forEach(f => { const el = $(`f_${f}_${l}`); row[`${f}_${l}`] = el ? el.value.trim() : ''; }));
  const id = $('t_id').value;
  $('tourMsg').textContent = 'Saqlanmoqda...';
  let res;
  if (id) res = await sb.from('tours').update(row).eq('id', id);
  else res = await sb.from('tours').insert(row);
  if (res.error) { $('tourMsg').textContent = 'Xato: ' + res.error.message; return; }
  $('tourModal').classList.add('hidden'); loadTours();
});

window.delTour = async (id, name) => {
  if (!confirm('"' + name + '" turini o\'chirasizmi?')) return;
  const { error } = await sb.from('tours').delete().eq('id', id);
  if (error) alert('Xato: ' + error.message); else loadTours();
};

/* ---------- BUYURTMALAR ---------- */
async function loadOrders() {
  const { data, error } = await sb.from('orders').select('*').order('created_at', { ascending: false });
  const body = $('ordersBody'); const empty = $('ordersEmpty');
  if (error) { empty.textContent = 'Xato: ' + error.message; body.innerHTML=''; return; }
  if (!data.length) { body.innerHTML=''; empty.textContent = 'Hali buyurtma yo\'q.'; return; }
  empty.textContent = data.length + ' ta buyurtma';
  body.innerHTML = data.map(o => {
    const d = new Date(o.created_at);
    const dt = d.toLocaleDateString('ru-RU') + ' ' + d.toLocaleTimeString('ru-RU', {hour:'2-digit',minute:'2-digit'});
    const done = o.status === 'done';
    return `<tr>
      <td>${dt}</td>
      <td><b>${esc(o.name)}</b></td>
      <td><a href="tel:${esc(o.phone)}">${esc(o.phone)}</a></td>
      <td>${esc(o.tour)}</td>
      <td><span class="badge ${done?'badge--done':'badge--new'}">${done?'Bajarildi':'Yangi'}</span></td>
      <td style="white-space:nowrap">
        <button class="btn btn--sm btn--ghost" onclick="toggleOrder('${o.id}','${done?'new':'done'}')">${done?'↩ Yangi':'✓ Bajarildi'}</button>
        <button class="btn btn--sm btn--danger" onclick="delOrder('${o.id}')">🗑</button>
      </td></tr>`;
  }).join('');
}
$('refreshOrders').addEventListener('click', loadOrders);
window.toggleOrder = async (id, status) => { await sb.from('orders').update({status}).eq('id', id); loadOrders(); };
window.delOrder = async (id) => { if (confirm('Buyurtmani o\'chirasizmi?')) { await sb.from('orders').delete().eq('id', id); loadOrders(); } };
function esc(s){ return (s||'').toString().replace(/[<>&]/g, c=>({'<':'&lt;','>':'&gt;','&':'&amp;'}[c])); }

/* ---------- SOZLAMALAR ---------- */
async function loadSettings() {
  const { data } = await sb.from('settings').select('*');
  const map = {}; (data||[]).forEach(r => map[r.key] = r.value);
  $('set_phone').value = map.phone || '';
  $('set_hero_text_uz').value = map.hero_text_uz || '';
  $('set_hero_text_ru').value = map.hero_text_ru || '';
  $('set_hero_text_en').value = map.hero_text_en || '';
}
$('saveSettings').addEventListener('click', async () => {
  const rows = [
    { key:'phone', value:$('set_phone').value.trim() },
    { key:'hero_text_uz', value:$('set_hero_text_uz').value.trim() },
    { key:'hero_text_ru', value:$('set_hero_text_ru').value.trim() },
    { key:'hero_text_en', value:$('set_hero_text_en').value.trim() },
  ];
  $('settingsMsg').textContent = 'Saqlanmoqda...'; $('settingsMsg').className='msg';
  const { error } = await sb.from('settings').upsert(rows);
  if (error) { $('settingsMsg').textContent = 'Xato: ' + error.message; $('settingsMsg').className='msg msg--err'; }
  else { $('settingsMsg').textContent = 'Saqlandi ✅'; $('settingsMsg').className='msg msg--ok'; }
});

init();
