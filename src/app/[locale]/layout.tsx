import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

export default async function LocaleLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: { locale: string };
}) {
	// Aguardando o acesso ao `params`
	const { locale } = await params;

	// Garantir que o `locale` recebido é válido
	if (!routing.locales.includes(locale as any)) {
		notFound();
	}

	// Fornecendo todas as mensagens para o lado do cliente
	const messages = await getMessages();

	return (
		<html lang={locale}>
			<body>
				<NextIntlClientProvider messages={messages}>
					{children}
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
