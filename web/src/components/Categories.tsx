export default function Categories() {
  return (
    <nav className="flex flex-col gap-6 font-alt xs:p-0 lg:p-20">
      <strong className="">Categories</strong>
      <ul className="flex flex-col items-center justify-center gap-2">
        <li>
          <a href="#tshirts">T-shirts</a>
        </li>
        <li>
          <a href="#caps">Caps </a>
        </li>
        <li>
          <a href="#shoes">Shoes </a>
        </li>
      </ul>
    </nav>
  )
}
