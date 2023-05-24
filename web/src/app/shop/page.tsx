import { Footer } from '@/components/Footer'
import CategoriesProducts from '@/components/CategoriesProducts'

export default function All() {
  return (
    <div className="flex flex-col bg-white text-black">
      <div className="mb-16 flex w-full flex-col items-center justify-center">
        <CategoriesProducts />
      </div>
      <Footer />
    </div>
  )
}
