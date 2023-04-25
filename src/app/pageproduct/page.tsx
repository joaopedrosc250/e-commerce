import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { Product } from "@/components/Product";

export default function PageProduct() {
  const product = [
    /* best-sellers */

    {
      title: "t-shirt-1",
      type: "best",
      id: "22",
      url: "/pageproduct",
      size: "G",
      image: "/t-shirt-1.jpg",
      price: 54.95,
    },
    {
      title: "t-shirt-2",
      id: "23",
      type: "best",
      url: "/pageproduct",
      size: "G",
      image: "/t-shirt-2.jpg",
      price: 60.95,
    },
    {
      title: "t-shirt-3",
      type: "best",
      id: "24",
      url: "/pageproduct",
      size: "G",
      image: "/t-shirt-3.jpg",
      price: 54.95,
    },
    {
      title: "t-shrit-4",
      id: "25",
      type: "best",
      url: "/pageproduct",
      size: "G",
      image: "/cap-1.jpg",
      price: 60.95,
    },

    /* t-shirts 👕 */

    {
      title: "t-shirt-1",
      type: "tshirt",
      id: "1",
      url: "/pageproduct",
      size: "G",
      image: "/t-shirt-1.jpg",
      price: 54.95,
    },
    {
      title: "t-shrit-2",
      id: "2",
      type: "tshirt",
      url: "/pageproduct",
      size: "G",
      image: "/t-shirt-2.jpg",
      price: 60.95,
    },
    {
      title: "t-shirt-3",
      id: "3",
      type: "tshirt",
      url: "/pageproduct",
      size: "M",
      image: "/t-shirt-3.jpg",
      price: 67.8,
    },
    {
      title: "t-shirt-4",
      id: "4",
      type: "tshirt",
      url: "/pageproduct",
      size: "G",
      image: "/t-shirt-1.jpg",
      price: 150,
    },
    {
      title: "t-shirt-5",
      id: "5",
      type: "tshirt",
      url: "/pageproduct",
      size: "G",
      image: "/t-shirt-1.jpg",
      price: 130.99,
    },
    {
      title: "t-shirt-6",
      id: "6",
      type: "tshirt",
      url: "/pageproduct",
      size: "G",
      image: "/t-shirt-3.jpg",
      price: 130,
    },
    {
      title: "t-shirt-7",
      id: "7",
      type: "tshirt",
      url: "/pageproduct",
      size: "G",
      image: "/t-shirt-2.jpg",
      price: 155,
    },
    {
      title: "t-shirt-8",
      id: "8",
      type: "tshirt",
      url: "/pageproduct",
      size: "G",
      image: "/t-shirt-3.jpg",
      price: 130,
    },
    {
      title: "t-shirt-9",
      id: "9",
      type: "tshirt",
      url: "/pageproduct",
      size: "G",
      image: "/t-shirt-2.jpg",
      price: 125,
    },
    {
      title: "t-shirt-10",
      id: "10",
      type: "tshirt",
      url: "/pageproduct",
      size: "G",
      image: "/t-shirt-2.jpg",
      price: 125,
    },
    {
      title: "t-shirt-11",
      id: "11",
      type: "tshirt",
      url: "/pageproduct",
      size: "G",
      image: "/t-shirt-3.jpg",
      price: 130,
    },
    {
      title: "t-shirt-12",
      id: "12",
      type: "tshirt",
      url: "/pageproduct",
      size: "G",
      image: "/t-shirt-3.jpg",
      price: 129.9,
    },
    {
      title: "t-shirt-13",
      id: "13",
      type: "tshirt",
      url: "/pageproduct",
      size: "G",
      image: "/t-shirt-2.jpg",
      price: 137,
    },

    /* caps 🧢 */

    {
      title: "cap-1",
      id: "14",
      type: "cap",
      url: "/pageproduct",
      image: "/cap-1.jpg",
      price: 69.9,
    },
    {
      title: "cap-2",
      id: "15",
      type: "cap",
      url: "/pageproduct",
      image: "/cap-1.jpg",
      price: 74.95,
    },
    {
      title: "cap-3",
      id: "16",
      type: "cap",
      url: "/pageproduct",
      image: "/cap-1.jpg",
      price: 89.99,
    },
    {
      title: "cap-4",
      id: "17",
      type: "cap",
      url: "/pageproduct",
      image: "/cap-1.jpg",
      price: 67.8,
    },

    /* Shoe 👟 */

    {
      title: "shoe-1",
      id: "18",
      type: "shoe",
      url: "/pageproduct",
      image: "/shoe-1-1.png",
      price: 69.99,
    },

    {
      title: "shoe-1",
      id: "19",
      type: "shoe",
      url: "/pageproduct",
      image: "/shoe-1.jpg",
      price: 69.99,
    },

    {
      title: "shoe-1",
      id: "20",
      type: "shoe",
      url: "/pageproduct",
      image: "/shoe-1-2.png",
      price: 69.99,
    },

    {
      title: "shoe-1",
      id: "21",
      type: "shoe",
      url: "/pageproduct",
      image: "/shoe-1-3.png",
      price: 69.99,
    },
  ];

  return (
    <div className="flex flex-col h-auto bg-white text-black">
      <Nav />
      <div className="flex flex-row gap-20 justify-center items-center lg:h-auto xs:h-auto">
        <div className="flex flex-col justify-center gap-16 items-center mt-20">
          <div className="flex flex-row gap-32 justify-center items-center">
            <img
              src="model-5.jpg"
              alt="product"
              className="w-80 h-[30rem] rounded-3xl opacity-95 hover:opacity-100"
            />
            <div className="flex flex-col gap-6">
              <h2 className="font-bold text-2xl">T-shirt-1</h2>
              <p className="text-xl">U$ 50,00</p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <p className="indent-12 w-3/6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
              corporis harum, unde quisquam facere nulla neque quas provident
              voluptatibus blanditiis officia consequuntur, repellat quod enim!
              Ea, possimus? Obcaecati, architecto libero.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <h3 className="mt-10 text-xl">Other products</h3>
            <div className="grid items-center lg:gap-16 xs:gap-20 w-5/6 lg:grid-cols-5 xs:grid-cols-1 md:grid-cols-2 mt-6 mb-24">
              {product
                .filter((element) => element)
                .slice(0, 5)
                .map((element) => (
                  <Product
                    url={element.url}
                    id={element.id}
                    key={element.id}
                    image={element.image}
                    title={element.title}
                    price={element.price}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
