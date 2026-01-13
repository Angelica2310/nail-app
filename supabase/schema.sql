create type booking_status as enum ('new', 'confirmed', 'cancelled', 'completed');

create table if not exists public.staff (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  role text,
  email text,
  phone text,
  is_active boolean default true,
  created_at timestamptz default now()
);

create table if not exists public.availability (
  id uuid primary key default gen_random_uuid(),
  staff_id uuid references public.staff(id) on delete set null,
  date date not null,
  start_time time not null,
  end_time time not null,
  is_available boolean default true,
  notes text,
  created_at timestamptz default now()
);

create table if not exists public.bookings (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz default now(),
  customer_name text not null,
  customer_phone text not null,
  customer_email text not null,
  service text not null,
  requested_date date,
  requested_time time not null,
  notes text,
  status booking_status default 'new',
  staff_id uuid references public.staff(id) on delete set null
);

create index if not exists bookings_created_at_idx on public.bookings (created_at desc);
create index if not exists bookings_requested_date_idx on public.bookings (requested_date);
create index if not exists availability_date_idx on public.availability (date);

alter table public.bookings enable row level security;
alter table public.staff enable row level security;
alter table public.availability enable row level security;

create policy "Staff can read bookings"
  on public.bookings
  for select
  to authenticated
  using (true);

create policy "Staff can read availability"
  on public.availability
  for select
  to authenticated
  using (true);

create policy "Staff can read staff"
  on public.staff
  for select
  to authenticated
  using (true);
