'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';

export async function loginWithProvider(provider: 'github' | 'google') {
  const supabase = await createClient();
  
  const { error } = await supabase.auth.signInWithOAuth({
    provider,
  });

  if (error) {
    redirect('/error');
  }

  revalidatePath('/');
  redirect('/');
}
