"use client"

import React from 'react'
import { categories } from '@/constant'
import NavLink from './NavLink'
import { usePathname } from 'next/navigation'

const NavLinks = () => {

    const pathname = usePathname();

    const isActive = (path: string) => {
        return pathname.split('/').pop() === path
    }

  return (
    <nav className='flex items-center justify-center container mx-auto md:gap-8 flex-wrap gap-4'>
        {categories.map((category) => (
            <NavLink key={category} category={category} isActive={isActive(category)}/>
        ))}
    </nav>
  )
}

export default NavLinks