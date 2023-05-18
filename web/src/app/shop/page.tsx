import { Footer } from '@/components/Footer'
import Categories from '@/components/Categories'
import CategoriesProducts from '@/components/CategoriesProducts'

export default function All() {
  return (
    <div className="flex flex-col bg-white text-black">
      <div className="grid p-20 xs:h-auto xs:grid-cols-1 lg:h-auto lg:grid-cols-4 lg:gap-24">
        <div className="col-span-1 grid w-full xs:row-start-1 xs:grid-rows-1 xs:justify-items-center lg:row-start-1 lg:grid-rows-4 lg:justify-items-start">
          <Categories />
        </div>
        <CategoriesProducts />
      </div>
      <Footer />
    </div>
  )
}
