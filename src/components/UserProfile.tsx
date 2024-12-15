'use client'

import { useEffect, useState } from 'react'
import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react'
import { useTranslations } from 'next-intl'

interface RiotAccount {
  id: string
  summonerName: string
  // Add more fields as needed
}

export function UserProfile() {
  const supabase = useSupabaseClient()
  const user = useUser()
  const [riotAccount, setRiotAccount] = useState<RiotAccount | null>(null)
  const t = useTranslations('userProfile')

  useEffect(() => {
    if (user) {
      fetchRiotAccount()
    }
  }, [user])

  const fetchRiotAccount = async () => {
    const { data, error } = await supabase
      .from('riot_accounts')
      .select('*')
      .eq('user_id', user?.id)
      .single()

    if (error) {
      console.error('Error fetching Riot account:', error)
    } else {
      setRiotAccount(data)
    }
  }

  if (!user) {
    return <div>{t('loginPrompt')}</div>
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">{t('title')}</h2>
      <p className="mb-4">{t('email')}: {user.email}</p>
      {riotAccount ? (
        <div>
          <h3 className="text-xl font-semibold mb-2">{t('linkedAccount')}</h3>
          <p>{t('summonerName')}: {riotAccount.summonerName}</p>
          {/* Add more Riot account details here */}
        </div>
      ) : (
        <p>{t('noLinkedAccount')}</p>
      )}
    </div>
  )
}

