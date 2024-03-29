import Link from 'next/link'

export default function About() {
  return (
    <div
      id="about"
      className="item-center mb-16 mt-8 flex flex-col justify-center font-alt xs:w-full xs:px-14 lg:w-3/4"
    >
      <div className="flex flex-col items-center justify-center gap-6 text-justify">
        <p>
          Discover a curated collection of trendy streetwear pieces that embrace
          the latest fashion trends, without compromising on comfort. From sleek
          hoodies to trendy joggers, UrbanAvenue offers a wide range of apparel
          that reflects the urban lifestyle and speaks to the fashion-forward
          individual.
        </p>
        <p>
          Our mission is to provide fashion enthusiasts with a convenient and
          seamless shopping experience. With just a few clicks, you can explore
          our carefully selected streetwear selection, designed to elevate your
          style while keeping you comfortable throughout the day.
        </p>
        <Link className="font-semibold text-blue-600" href="/home">
          Register now
        </Link>
      </div>
    </div>
  )
}
