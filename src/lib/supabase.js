import { createClient } from '@supabase/supabase-js';
import AsyncStorage from '@react-native-async-storage/async-storage';

const supabaseUrl = 'https://zypsyizhkeqtizklsrnr.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp5cHN5aXpoa2VxdGl6a2xzcm5yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM2MzI5MDksImV4cCI6MjA4OTIwODkwOX0.G4FzoIgDRvAgJiImZwRaMuSpAR2C2a_PrArPTo54ylc';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});