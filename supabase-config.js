// ============================================================
// SUPABASE КОНФИГУРАЦИЯ
// ============================================================

// ⚠️ ЗАМЕНИТЕ ЭТИ ЗНАЧЕНИЯ НА ВАШИ ИЗ SUPABASE
// Где взять: Supabase Dashboard → Settings → API
const SUPABASE_URL = 'https://akdmthyhcleeealdwyuy.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFrZG10aHloY2xlZWVhbGR3eXV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk3MTYwODcsImV4cCI6MjEwNTI5MjA4N30.8erRyqnU29waY-StQlEa5TKn1dpLhuxr9g578sDh2MM';

// Инициализация клиента — используем другое имя, 
// потому что window.supabase уже занята SDK
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Экспорт для использования в других частях приложения
window.supabaseClient = supabaseClient;
console.log('📍 URL:', SUPABASE_URL);
console.log('📍 KEY (первые 20):', SUPABASE_ANON_KEY.substring(0, 20));
console.log('✅ Supabase клиент инициализирован');
