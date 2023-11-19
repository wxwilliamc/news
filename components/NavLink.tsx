import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

interface NavLinkProps {
    category: Category
    isActive: boolean
}

const NavLink = ({ category, isActive }: NavLinkProps) => {
  return (
    <Link href={`/news/${category}`} className={cn(`hover:bg-slate-800 hover:text-white px-4 py-2 rounded-full transition duration-200 hover:shadow-md hover:scale-105 hover:underline hover:underline-offset-4 hover:decoration-white dark:hover:bg-white dark:hover:text-slate-800 dark:hover:decoration-slate-800`, isActive && 'bg-slate-800 text-white px-4 py-2 rounded-full transition duration-200 shadow-md scale-105 underline underline-offset-4 decoration-white dark:bg-white dark:text-slate-800 dark:decoration-slate-800')}>
        {category}
    </Link>
  )
}

export default NavLink