import data from '../app/utils/data'

export function Best(size: string, setFilteredProducts: any) {
  const filtered = data.product.filter((product) => product.size === size)
  setFilteredProducts(filtered)
}

export function handleResetClick(setFilteredProducts: any) {
  console.log('resetou')
  setFilteredProducts(data.product)
}

export function lowestPrice(
  minPrice: number,
  maxPrice: number,
  setFilteredProducts: any,
) {
  const filtered = data.product.filter(
    (product) => product.price >= minPrice && product.price <= maxPrice,
  )
  setFilteredProducts(filtered)
}

export function higherPrice(
  minPrice: number,
  maxPrice: number,
  setFilteredProducts: any,
) {
  const filtered = data.product.filter(
    (product) => product.price >= minPrice && product.price <= maxPrice,
  )
  setFilteredProducts(filtered)
}

export function bestLowestPrice(
  minPrice: number,
  maxPrice: number,
  size: string,
  setFilteredProducts: any,
) {
  const filtered = data.product.filter(
    (product) =>
      product.price >= minPrice &&
      product.price <= maxPrice &&
      product.size === size,
  )
  setFilteredProducts(filtered)
}

export function bestHigherPrice(
  minPrice: number,
  maxPrice: number,
  size: string,
  setFilteredProducts: any,
) {
  const filtered = data.product.filter(
    (product) =>
      product.price >= minPrice &&
      product.price <= maxPrice &&
      product.size === size,
  )
  setFilteredProducts(filtered)
}
