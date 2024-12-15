import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
import { useTranslations } from 'next-intl';

export default async function Dashboard() {
	const supabase = await createClient();
	const t = useTranslations('dashboard');

	const {
		data: { user },
		error,
	} = await supabase.auth.getUser();

	if (error || !user) {
		redirect('/login');
	}

	return (
		<div className='p-4'>
			<h1 className='text-2xl font-bold mb-4'>{t('title')}</h1>
			<p>{t('greeting', { name: user.id })}</p>
			{/* Add more dashboard content here */}
		</div>
	);
}
