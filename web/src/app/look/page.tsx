import { Nav } from '@/components/Nav'
import img1 from '../../../public/model-1.jpg'
import img2 from '../../../public/model-2.jpg'
import img3 from '../../../public/model-3.jpg'
import img4 from '../../../public/cap-4.jpg'
import img5 from '../../../public/model-13.jpg'
import img6 from '../../../public/model-5.jpg'
import img7 from '../../../public/model-6.jpg'
import img8 from '../../../public/model-7.jpg'
import img9 from '../../../public/model-8.jpg'
import img10 from '../../../public/model-9.jpg'
import img11 from '../../../public/model-10.jpg'
import img12 from '../../../public/model-12.jpg'
import Image from 'next/image'
import { Footer } from '@/components/Footer'
import Link from 'next/link'

export default function LookBook() {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
  ]

  return (
    <div className="flex flex-col items-center justify-center">
      <Nav />
      <div className="grid w-full items-center justify-items-center gap-6 p-10 xs:grid-cols-2 lg:grid-cols-4">
        {images.map((image, index) => (
          <div
            className="flex w-full flex-col items-center justify-center"
            key={`image${index}`}
          >
            <Image
              src={image}
              alt="image"
              width={1920}
              height={1080}
              placeholder="blur"
              className="w-[35vh]"
            />
          </div>
        ))}
      </div>
      <Link
        className="mb-16 mt-8 text-xl font-semibold text-blue-600"
        href="/home"
      >
        Join us
      </Link>
      <Footer />
    </div>
  )
}
