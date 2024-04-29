import { BreadcrumbComponent } from '@/components/shared/breadcrumbComponent';

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main>
			<BreadcrumbComponent /> {children}
		</main>
	);
}
