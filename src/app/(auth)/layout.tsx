export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main className='flex w-full h-full items-center justify-center'>
			{children}
		</main>
	);
}
