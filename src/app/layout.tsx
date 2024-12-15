import '@/styles/globals.css'; // Importa estilos globais
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className='bg-gray-50 text-gray-900'>{children}</body>
		</html>
	);
}
