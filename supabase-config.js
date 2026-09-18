// ============================================================
// SUPABASE КОНФИГУРАЦИЯ
// ============================================================

// ⚠️ ЗАМЕНИТЕ ЭТИ ЗНАЧЕНИЯ НА ВАШИ ИЗ SUPABASE
// Где взять: Supabase Dashboard → Settings → API
const SUPABASE_URL = 'https://riskopravdan38.github.io/finance-os/';
const SUPABASE_ANON_KEY = 'sb_publishable_w5-wn3PMizlAUsZ-ACoUXw_tJBC9cCC';

// Инициализация клиента
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Экспорт для использования в других частях приложения
window.supabaseClient = supabase;

console.log('✅ Supabase клиент инициализирован');
