// ============================================================
// SUPABASE КОНФИГУРАЦИЯ
// ============================================================

// ⚠️ ЗАМЕНИТЕ ЭТИ ЗНАЧЕНИЯ НА ВАШИ ИЗ SUPABASE
// Где взять: Supabase Dashboard → Settings → API
const SUPABASE_URL = 'https://akdmthyhcleeealdwyuy.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_w5-wn3PMizlAUsZ-ACoUXw_tJBC9cCC';

// Инициализация клиента — используем другое имя, 
// потому что window.supabase уже занята SDK
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Экспорт для использования в других частях приложения
window.supabaseClient = supabaseClient;

console.log('✅ Supabase клиент инициализирован');
