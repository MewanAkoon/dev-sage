import Link from 'next/link';
import Image from 'next/image';
import { NavItems } from './navItems';

import devSageLogo from '../../../public/assets/logos/logo.png';

export function Header() {
	return (
		<header className='bg-slate-100 w-full h-fit'>
			<div className='wrapper flex justify-between items-center'>
				<Link href='/' className='flex gap-x-4'>
					<Image
						src={devSageLogo}
						alt='DevSage Logo'
						width={20}
						height={20}
						className='w-5 h-5 my-auto object-contain'
						priority
					/>
					DevSage
				</Link>

				<NavItems />
			</div>
		</header>
	);
}
