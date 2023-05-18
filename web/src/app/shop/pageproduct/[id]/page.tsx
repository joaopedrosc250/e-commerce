import { Footer } from '@/components/Footer'
import Image from 'next/image'
import data from '../../../utils/data'
import DescProduct from '@/components/DescProduct'
import PageProductInfo from '@/components/PageProductInfo'

export default function PageProduct(props: any) {
  const prodId = props.params.id

  return (
    <div className="flex h-auto flex-col bg-white text-black">
      <div className="flex flex-row items-center justify-center gap-20 font-alt xs:h-auto lg:h-auto">
        <div className="mt-20 flex flex-col items-center justify-center gap-16">
          <div className="flex items-center justify-center gap-32 xs:flex-col lg:flex-row">
            {data.product
              .filter((element) => element.id === prodId)
              .map((element) => (
                <>
                  <Image
                    width={1920}
                    height={1080}
                    key={element.id}
                    src={element.image}
                    alt={element.type}
                    className="rounded-3xl xs:h-[16rem] xs:w-5/6 lg:h-[30rem] lg:w-full"
                  />
                  <PageProductInfo
                    id={prodId}
                    title={element.title}
                    price={element.price}
                    stock={element.stock}
                  />
                </>
              ))}
          </div>
          {data.product
            .filter((element) => element.id === prodId)
            .map((element) => (
              <DescProduct key={prodId} desc={element.desc} id={prodId} />
            ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}
