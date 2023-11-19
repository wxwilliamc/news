import { Bars3Icon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import React from 'react'
import { ThemeToggle } from './Theme-Toggle'
import { Button } from './ui/button'
import NavLinks from './NavLinks'
import SearchBar from './SearchBar'
import { Separator } from './ui/separator'

const Header = () => {
  return (
    <div>
        <div className='flex py-10 px-16 items-center justify-between container'>
          {/* Menu Sidebar */}
          <Bars3Icon className="w-7 h-7 cursor-pointer"/>

          {/* Title */}
          <Link href='/' prefetch={false} className='font-semibold text-xl font-serif'>
            The BitNews Jean
          </Link>
          
          <div className='flex items-center gap-4'>
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Subscribe Button - Optional */}
            <Button className='rounded-full hidden md:inline'>
              Subscribe Now
            </Button>
          </div>
        </div>

        {/* Nav links */}
        <NavLinks />

        <Separator className='my-6 bg-slate-800 dark:bg-white max-w-6xl mx-auto py-[2.5px] rounded-full'/>

        {/* Search Bar */}
        <SearchBar />
    </div>
  )
}

export default Header