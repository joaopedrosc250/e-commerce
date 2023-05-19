import { Product } from './Product'

const PageSale = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="grid justify-items-center">
        <Product
          url={'#'}
          id={'1'}
          image={'./cap.avif'}
          title={'cap'}
          price={45.95}
          type={''}
          size={''}
          desc={''}
          stock={0}
          quantity={0}
          selectedProductId={0}
        />
      </div>
      <div className="grid justify-items-center">
        <h2 className="font-bold">Black cap</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati,
          quas consequatur, quod nisi in enim, pariatur unde a dolor fugit
          perspiciatis. Necessitatibus cum ipsam nesciunt doloribus tenetur
          molestiae, odio quo?
        </p>
      </div>
    </div>
  )
}

export default PageSale
