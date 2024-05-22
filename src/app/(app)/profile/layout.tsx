import { ClerkLoaded, ClerkLoading } from '@clerk/nextjs';
import { Loading } from '@/components/shared/loading';

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main className='flex w-full h-full items-center justify-center'>
			<ClerkLoading>
				<Loading />
			</ClerkLoading>
			<ClerkLoaded>{children}</ClerkLoaded>
		</main>
	);
}
