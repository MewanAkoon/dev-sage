import { BreadcrumbComponent } from '@/components/shared/breadcrumb-component';

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
