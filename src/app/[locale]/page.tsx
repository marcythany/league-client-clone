import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Metadata } from 'next';

export default function HomePage() {
	const t = useTranslations('home');

	return (
		<div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
			<h1 className='text-4xl font-bold mb-4'>{t('title')}</h1>
			<p className='text-xl mb-8'>{t('description')}</p>
			<Link
				href='/login'
				className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
			>
				{t('common.login')}
			</Link>
		</div>
	);
}

export async function generateMetadata({
	params,
}: {
	params: { locale: string };
}): Promise<Metadata> {
	const { locale } = await params;

	return {
		title: 'League of Legends Client Clone',
		description: 'A faithful reproduction of the LoL client UI',
	};
}
