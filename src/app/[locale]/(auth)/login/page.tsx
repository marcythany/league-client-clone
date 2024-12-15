'use client';

import { useTranslations } from 'next-intl';
import { loginWithProvider } from './actions';
import { SiGithub, SiGoogle } from '@icons-pack/react-simple-icons';

export default function LoginPage() {
	const t = useTranslations('login');

	return (
		<div className='flex justify-center items-center min-h-screen bg-gray-100'>
			<div className='bg-white p-8 rounded-lg shadow-md w-auto'>
				<h2 className='text-2xl font-bold mb-6 text-center'>{t('title')}</h2>

				<div className='flex items-center justify-between gap-4 mb-4'>
					<button
						onClick={() => loginWithProvider('github')}
						className='flex items-center bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
					>
						<SiGithub className='mr-2' />
						<p>{t('loginWithGithub')}</p>
					</button>
					<button
						onClick={() => loginWithProvider('google')}
						className='flex items-center bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
					>
						<SiGoogle className='mr-2' />
						<p>{t('loginWithGoogle')}</p>
					</button>
				</div>
			</div>
		</div>
	);
}
