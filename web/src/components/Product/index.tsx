import Link from 'next/link'
import Image from 'next/image'
import { ProductProps } from '@/@types/product'

export const Product = ({ url, id, image, title, price }: ProductProps) => {
  return (
    <div key={id} className="grid justify-items-center">
      <Link href={url} className="grid justify-items-center gap-2">
        <Image
          src={image}
          className="h-60 w-full rounded-3xl object-cover transition-all"
          alt="image"
          width={1920}
          height={1080}
        />
        <p className="text-lg font-bold">{title}</p>
      </Link>
      <p className="text-center">U$ {price}</p>
    </div>
  )
}
