import { MagnifyingGlass } from '@phosphor-icons/react'
import Link from 'next/link'

export const Search = () => {
  return (
    <div id="search-box" className="flex flex-row items-center justify-center">
      <div className="flex items-center justify-center rounded-3xl border-2 border-slate-300 p-2">
        <input
          type="text"
          placeholder="Search..."
          className="pl-1 outline-none"
        />
        <Link href="" className=" px-1">
          <MagnifyingGlass size={25} />
        </Link>
      </div>
    </div>
  )
}
