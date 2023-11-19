"use client"

import { Input } from './ui/input'
import { useState, useCallback } from 'react'
import debounce from 'lodash.debounce'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

const SearchBar = () => {

    const [input, setInput] = useState("");
    const router = useRouter();

    const { data: searchResults, refetch, isFetched, isFetching } = useQuery({
        queryFn: async () => {
            if(!input) return

            router.push(`/search?query=${input}`)
        },
        queryKey: ['search-query'],
        enabled: false,
    })

    const searchReq = debounce(() => {
        refetch();
    }, 2000)

    const debounceReq = useCallback(() => {
        searchReq()
    }, [searchReq])

  return (

    // TODO: Continue Here
    <div className='container max-w-lg'>
        <Input 
            placeholder='Search Keywords'
            className='py-2 px-4 outline-none focus:border-none focus:outline-none ring-0'
            value={input}
            onChange={(e) => {setInput(e.target.value); debounceReq()}}
        />

        {/* Show Search Results Here ? */}
    </div>
  )
}

export default SearchBar