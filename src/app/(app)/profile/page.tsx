import React from 'react';

import Image from 'next/image';
import { Fingerprint, Mail, User } from 'lucide-react';
import { currentUser } from '@clerk/nextjs/server';
import { SignOutButton } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export default async function Page() {
	const user = await currentUser();

	if (!user) return;

	return (
		<div className='my-2 sm:my-8 flex flex-col gap-y-4 w-full h-full items-center'>
			<div className='grid grid-cols-1 sm:grid-cols-2 w-full gap-4'>
				{/* User Info Section */}
				<section className='flex flex-col sm:flex-row gap-x-4 rounded-xl p-6 bg-slate-600 shadow-sm shadow-slate-300'>
					<Image
						src={user.imageUrl}
						alt='User Image'
						width={200}
						height={200}
						className='w-52 h-52 object-cover rounded-full mx-auto'
						priority
					/>

					<div className='flex flex-col justify-between min-h-44 h-full w-full mt-4 sm:mt-0'>
						<div className='w-full'>
							<p className='font-semibold mb-2 text-slate-200'>My Profile</p>
							<Separator />
						</div>
						<div className='flex flex-col gap-y-3 text-slate-300'>
							<p className='flex gap-2 items-center'>
								<Fingerprint width={12} height={12} /> {user.username}
							</p>
							<p className='flex gap-2 items-center'>
								<User width={12} height={12} /> {user.fullName}
							</p>
							<p className='flex gap-2 items-center'>
								<Mail width={12} height={12} />
								{user.primaryEmailAddress?.emailAddress}
							</p>
						</div>
						<Button
							variant='destructive'
							className='w-fit mx-auto rounded-full'
							asChild
						>
							<SignOutButton />
						</Button>
					</div>
				</section>

				{/* Add Custom Questions Section */}
				<section className='flex flex-col sm:flex-row gap-x-8 rounded-xl p-6 bg-slate-100 shadow-sm shadow-slate-300'>
					<div className='flex flex-col justify-between min-h-44 h-full w-full mt-4 sm:mt-0 text-gray-800'>
						<div className='w-full'>
							<p className='font-semibold mb-2'>
								Add Custom Interview Questions
							</p>
							<Separator />
						</div>
						<button
							type='button'
							className='relative bg-slate-50 block w-full rounded-lg border-2 border-dashed border-gray-300 p-4 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2 mt-2 h-full'
						>
							<svg
								className='mx-auto h-12 w-12 text-gray-400'
								stroke='currentColor'
								fill='none'
								viewBox='0 0 48 48'
								aria-hidden='true'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M8 14v20c0 4.418 7.163 8 16 8 1.381 0 2.721-.087 4-.252M8 14c0 4.418 7.163 8 16 8s16-3.582 16-8M8 14c0-4.418 7.163-8 16-8s16 3.582 16 8m0 0v14m0-4c0 4.418-7.163 8-16 8S8 28.418 8 24m32 10v6m0 0v6m0-6h6m-6 0h-6'
								/>
							</svg>
							<span className='mt-4 block text-sm text-gray-600'>
								Add additional interview questions along with their
								corresponding answers here
							</span>
						</button>
					</div>
				</section>
			</div>

			<Separator />
		</div>
	);
}
