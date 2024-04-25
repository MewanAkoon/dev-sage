'use client';

import { AnswerSegment, QAPair, SearchParamProps } from '@/lib/types';
import React, { useState } from 'react';
import {
	ColumnDef,
	ColumnFiltersState,
	SortingState,
	VisibilityState,
	flexRender,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable,
} from '@tanstack/react-table';

import { ArrowUpDown, ChevronDown } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import { getQuestionsAndAnswers } from '@/actions/q-and-a.actions';
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import DifficultyBadge from '@/components/shared/difficultyBadge';
import { Input } from '@/components/ui/input';

const columns: ColumnDef<QAPair>[] = [
	{
		accessorKey: 'number',
		header: 'Number',
		cell: ({ row }) => <div className='text-center'>{Number(row.id) + 1}</div>,
	},
	{
		accessorKey: 'question',
		header: 'Question',
		cell: ({ row }) => (
			<div className='line-clamp-2 min-w-56 sm:min-w-[400px]'>
				{row.getValue('question')}
			</div>
		),
	},
	{
		accessorKey: 'answer',
		header: 'Answer',
		cell: ({ row }) => (
			<div className='line-clamp-2'>
				{(row.getValue('answer') as AnswerSegment[])[0].content}
			</div>
		),
	},
	{
		accessorKey: 'difficulty',
		header: ({ column }) => {
			return (
				<Button
					variant='ghost'
					onClick={() => column.toggleSorting(column.getIsSorted() !== 'desc')}
				>
					Difficulty
					<ArrowUpDown className='ml-2 h-4 w-4' />
				</Button>
			);
		},
		cell: ({ row }) => {
			return (
				<div className='flex items-center justify-center'>
					<DifficultyBadge difficulty={row.getValue('difficulty')} />
				</div>
			);
		},
	},
	{
		accessorKey: 'estimatedTime',
		header: () => <div className='text-center'>Estimated Time</div>,
		cell: ({ row }) => {
			const time = parseInt(row.getValue('estimatedTime'));

			const formatted = `${time} mins`;

			return <div className='text-center'>{formatted}</div>;
		},
	},
];

function AnswerRenderer({ segments }: { segments: AnswerSegment[] }) {
	return (
		<div className='flex flex-col gap-y-2 max-w-full w-full'>
			{segments.map((segment, index) => {
				if (segment.type === 'text') {
					return <p key={index}>{segment.content}</p>;
				} else {
					return (
						<div key={index} className='bg-gray-100 text-green-700 p-3 mb-2'>
							<pre className='whitespace-pre-wrap break-words'>
								<code className='text-sm block'>{`${segment.content}`}</code>
							</pre>
						</div>
					);
				}
			})}
		</div>
	);
}

function PaginationTextRenderer({
	pageIndex,
	pageSize,
	rowsLength,
}: {
	pageIndex: number;
	pageSize: number;
	rowsLength: number;
}) {
	const currentPageStartIndex = pageIndex * pageSize + 1;
	const tempCurrentPageEndIndex = currentPageStartIndex + pageSize;

	const currentPageEndIndex =
		tempCurrentPageEndIndex > rowsLength ? rowsLength : tempCurrentPageEndIndex;

	return (
		<>
			{currentPageStartIndex} - {currentPageEndIndex} of {rowsLength}{' '}
			question(s).
		</>
	);
}

export default function Page({ params }: SearchParamProps) {
	const data = getQuestionsAndAnswers(params.id);

	const [sorting, setSorting] = useState<SortingState>([]);
	const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({
		answer: false,
	});
	const [pagination, setPagination] = useState({
		pageIndex: 0,
		pageSize: 10,
	});

	const table = useReactTable({
		data,
		columns,
		onSortingChange: setSorting,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		onColumnVisibilityChange: setColumnVisibility,
		onPaginationChange: setPagination,
		state: {
			sorting,
			columnVisibility,
			pagination,
		},
	});

	return (
		<main>
			<h1 className='text-center mt-8 mb-4 capitalize'>
				{params.id} Interview Questions
			</h1>

			<div className='w-full'>
				<div className='flex items-center py-4 gap-x-1'>
					<Input
						placeholder='Filter questions...'
						value={
							(table.getColumn('question')?.getFilterValue() as string) ?? ''
						}
						onChange={(event) =>
							table.getColumn('question')?.setFilterValue(event.target.value)
						}
						className='w-full max-w-md'
					/>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant='outline' className='ml-auto'>
								Columns <ChevronDown className='ml-2 h-4 w-4' />
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align='end'>
							{table
								.getAllColumns()
								.filter((column) => column.getCanHide())
								.map((column) => {
									return (
										<DropdownMenuCheckboxItem
											key={column.id}
											className='capitalize'
											checked={column.getIsVisible()}
											onCheckedChange={(value) =>
												column.toggleVisibility(!!value)
											}
										>
											{column.id}
										</DropdownMenuCheckboxItem>
									);
								})}
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
				<div className='rounded-md border'>
					<Table>
						<TableHeader>
							{table.getHeaderGroups().map((headerGroup) => (
								<TableRow key={headerGroup.id}>
									{headerGroup.headers.map((header) => {
										return (
											<TableHead key={header.id}>
												{header.isPlaceholder
													? null
													: flexRender(
															header.column.columnDef.header,
															header.getContext()
													  )}
											</TableHead>
										);
									})}
								</TableRow>
							))}
						</TableHeader>
						<TableBody>
							{table.getRowModel().rows?.length ? (
								table.getRowModel().rows.map((row) => (
									<Dialog
										onOpenChange={(open) =>
											!open && table.toggleAllPageRowsSelected(false)
										}
										key={row.id}
									>
										<DialogTrigger asChild>
											<TableRow
												data-state={row.getIsSelected() && 'selected'}
												className='cursor-pointer'
												onClick={() => {
													table.toggleAllPageRowsSelected(false);
													row.toggleSelected();
												}}
											>
												{row.getVisibleCells().map((cell) => (
													<TableCell key={cell.id}>
														{flexRender(
															cell.column.columnDef.cell,
															cell.getContext()
														)}
													</TableCell>
												))}
											</TableRow>
										</DialogTrigger>
										<DialogContent className='w-full max-h-full sm:max-w-xl overflow-y-auto'>
											<DialogHeader>
												<DialogTitle className='flex gap-x-4 items-center w-full'>
													<span className='capitalize'>
														{params.id} Question {parseInt(row.id) + 1}
													</span>
													<DifficultyBadge
														difficulty={row.getValue('difficulty')}
													/>
												</DialogTitle>
											</DialogHeader>
											<Separator />
											<div className='flex w-full flex-col gap-y-4 my-2'>
												<section className='font-semibold'>
													{row.getValue('question')}
												</section>
												<section className='text-gray-600 leading-relaxed'>
													<AnswerRenderer segments={row.getValue('answer')} />
												</section>
											</div>
										</DialogContent>
									</Dialog>
								))
							) : (
								<TableRow>
									<TableCell
										colSpan={columns.length}
										className='h-24 text-center'
									>
										No results.
									</TableCell>
								</TableRow>
							)}
						</TableBody>
					</Table>
				</div>
				<div className='flex items-center justify-end space-x-2 py-4'>
					<div className='flex-1 text-sm text-muted-foreground'>
						<PaginationTextRenderer
							{...pagination}
							rowsLength={table.getFilteredRowModel().rows.length}
						/>
					</div>
					<div className='space-x-2'>
						<Button
							variant='outline'
							size='sm'
							onClick={() => table.previousPage()}
							disabled={!table.getCanPreviousPage()}
						>
							Previous
						</Button>
						<Button
							variant='outline'
							size='sm'
							onClick={() => table.nextPage()}
							disabled={!table.getCanNextPage()}
						>
							Next
						</Button>
					</div>
				</div>
			</div>
		</main>
	);
}
