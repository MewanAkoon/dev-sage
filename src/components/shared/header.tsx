import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import NavItems from './navItems';

export default function Header() {
	return (
		<header className='bg-slate-100 w-full h-fit'>
			<div className='wrapper flex justify-between items-center'>
				<Link href='/' className='flex gap-x-4'>
					<Image
						src='/assets/images/logo.png'
						alt='logo'
						width={20}
						height={20}
						className='w-auto h-auto'
					/>
					DevSage
				</Link>

				<NavItems />
			</div>
		</header>
	);
}
