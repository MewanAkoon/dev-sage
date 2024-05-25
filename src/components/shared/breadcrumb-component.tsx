'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

import { Home } from 'lucide-react';
import { getTitleCase } from '@/utils';

export function BreadcrumbComponent() {
	const pathname = usePathname();

	const pathnames = pathname.split('/').filter((x) => x);

	const breadcrumbItems = pathnames.map((path, index) => {
		const route = `/${pathnames.slice(0, index + 1).join('/')}`;
		return { label: path.replace(/[-]/g, ' '), path: route };
	});

	return (
		<Breadcrumb className='my-2 hidden sm:flex'>
			<BreadcrumbList>
				<BreadcrumbItem>
					<BreadcrumbLink asChild>
						<Link href='/'>
							<Home width={14} height={14} />
						</Link>
					</BreadcrumbLink>
				</BreadcrumbItem>
				{breadcrumbItems.map((item, idx) => (
					<React.Fragment key={idx}>
						<BreadcrumbSeparator />
						<BreadcrumbItem>
							{idx === breadcrumbItems.length - 1 ? (
								<BreadcrumbPage>{getTitleCase(item.label)}</BreadcrumbPage>
							) : (
								<BreadcrumbLink asChild>
									<Link href={item.path}>{getTitleCase(item.label)}</Link>
								</BreadcrumbLink>
							)}
						</BreadcrumbItem>
					</React.Fragment>
				))}
			</BreadcrumbList>
		</Breadcrumb>
	);
}
