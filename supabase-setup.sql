-- ============================================================
--  Chronic Travel — Supabase baza sxemasi
--  Supabase Dashboard -> SQL Editor -> New query -> pastdagini
--  to'liq nusxalab qo'ying va "Run" bosing.
-- ============================================================

-- ---------- 1) TURLAR ----------
create table if not exists public.tours (
  id uuid primary key default gen_random_uuid(),
  sort int default 0,
  image text,
  price text,
  badge_uz text, badge_ru text, badge_en text,
  title_uz text, title_ru text, title_en text,
  place_uz text, place_ru text, place_en text,
  days_uz text,  days_ru text,  days_en text,
  desc_uz text,  desc_ru text,  desc_en text,
  includes_uz text, includes_ru text, includes_en text,
  active boolean default true,
  created_at timestamptz default now()
);

-- ---------- 2) BUYURTMALAR ----------
create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  name text,
  phone text,
  tour text,
  lang text,
  status text default 'new',
  created_at timestamptz default now()
);

-- ---------- 3) SOZLAMALAR (matnlar) ----------
create table if not exists public.settings (
  key text primary key,
  value text
);

-- ============ RLS (xavfsizlik) ============
alter table public.tours    enable row level security;
alter table public.orders   enable row level security;
alter table public.settings enable row level security;

-- TURLAR: hamma o'qiy oladi, faqat admin o'zgartiradi
drop policy if exists "tours_read"   on public.tours;
drop policy if exists "tours_insert" on public.tours;
drop policy if exists "tours_update" on public.tours;
drop policy if exists "tours_delete" on public.tours;
create policy "tours_read"   on public.tours for select using (true);
create policy "tours_insert" on public.tours for insert to authenticated with check (true);
create policy "tours_update" on public.tours for update to authenticated using (true);
create policy "tours_delete" on public.tours for delete to authenticated using (true);

-- BUYURTMALAR: hamma qo'sha oladi (forma), faqat admin ko'radi
drop policy if exists "orders_insert" on public.orders;
drop policy if exists "orders_read"   on public.orders;
drop policy if exists "orders_update" on public.orders;
drop policy if exists "orders_delete" on public.orders;
create policy "orders_insert" on public.orders for insert to anon, authenticated with check (true);
create policy "orders_read"   on public.orders for select to authenticated using (true);
create policy "orders_update" on public.orders for update to authenticated using (true);
create policy "orders_delete" on public.orders for delete to authenticated using (true);

-- SOZLAMALAR: hamma o'qiydi, faqat admin o'zgartiradi
drop policy if exists "settings_read"   on public.settings;
drop policy if exists "settings_insert" on public.settings;
drop policy if exists "settings_update" on public.settings;
create policy "settings_read"   on public.settings for select using (true);
create policy "settings_insert" on public.settings for insert to authenticated with check (true);
create policy "settings_update" on public.settings for update to authenticated using (true);

-- ============ Boshlang'ich matnlar ============
insert into public.settings (key, value) values
  ('phone', '+998 77 688 66 00'),
  ('hero_text_uz', 'Malaysia, Thailand, Vietnam va Maldivga qulay narxlarda hashamatli turlar. Litsenziyalangan kompaniya — ishonchli xizmat, kafolatlangan qulaylik.'),
  ('hero_text_ru', 'Роскошные туры в Малайзию, Таиланд, Вьетнам и на Мальдивы по доступным ценам. Лицензированная компания — надёжный сервис и гарантированный комфорт.'),
  ('hero_text_en', 'Luxury tours to Malaysia, Thailand, Vietnam and the Maldives at great prices. A licensed company — reliable service and guaranteed comfort.')
on conflict (key) do nothing;
