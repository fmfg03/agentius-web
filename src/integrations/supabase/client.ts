
// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from '@/types/database';

const SUPABASE_URL = "https://murxvnwhxvtfkajcwenw.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im11cnh2bndoeHZ0ZmthamN3ZW53Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQzMzczMDgsImV4cCI6MjA1OTkxMzMwOH0.e_8xx3dOjJSc5BW94O1OixzpTw46VJr0MCN8O0ycE6g";

// For debugging purposes
console.log("🔌 Initializing Supabase client with:");
console.log("🌐 URL:", SUPABASE_URL);
console.log("🔑 API Key valid?", !!SUPABASE_PUBLISHABLE_KEY);

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true
  }
});

// Test the client is working on initialization
supabase.auth.getSession().then(({ data, error }) => {
  if (error) {
    console.error("❌ Supabase initialization error:", error);
  } else {
    console.log("✅ Supabase client initialized successfully");
    console.log("Session exists:", !!data.session);
  }
}).catch(err => {
  console.error("❌ Unexpected error during Supabase initialization:", err);
});
