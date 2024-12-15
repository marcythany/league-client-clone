import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function Custom404() {
	const t = useTranslations('404');

	return (
		<div className='flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800'>
			<h1 className='text-4xl font-bold text-red-500'>404</h1>
			<p className='mt-2 text-lg'>{t('notFound')}</p>
			<p className='mt-4 text-sm text-gray-600'>{t('description')}</p>
			<Link
				href='/'
				className='mt-6 px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-all'
			>
				{t('goHome')}
			</Link>
		</div>
	);
}
