// ============================================================
// SUPABASE КОНФИГУРАЦИЯ
// ============================================================

// ⚠️ ЗАМЕНИТЕ ЭТИ ЗНАЧЕНИЯ НА ВАШИ ИЗ SUPABASE
// Где взять: Supabase Dashboard → Settings → API
const SUPABASE_URL = 'https://ВАШ-ПРОЕКТ.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...';

// Инициализация клиента
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Экспорт для использования в других частях приложения
window.supabaseClient = supabase;

console.log('✅ Supabase клиент инициализирован');
