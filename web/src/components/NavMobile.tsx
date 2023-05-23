import { ShoppingCart, User } from '@phosphor-icons/react'
import Link from 'next/link'

export default function NavMobile() {
  return (
    <div className="w-full bg-white font-alt lg:hidden">
      <div className="flex flex-col items-end justify-center gap-2">
        <Link className="transition-colors hover:text-zinc-700" href="/shop">
          Shop
        </Link>
        <Link href="/home/profile/1">
          <User size={24} />
        </Link>
        <Link className="flex flex-row" href="/shop/cart">
          <ShoppingCart size={28} />0
        </Link>
      </div>
    </div>
  )
}
