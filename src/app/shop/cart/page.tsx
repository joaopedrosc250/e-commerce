import data from "@/app/utils/data";
import { Footer } from "@/components/Footer";
import ProductCart from "@/components/ProductCart";

export default function Cart() {
  return (
    <div className="flex flex-col items-center justify-center bg-white text-black xs:h-auto lg:h-auto">
      <div className="flex h-screen items-center justify-center gap-10 xs:flex-col lg:flex-col">
        <i className="fa fa-shopping-cart scale-150"></i>
        {data.product
          .filter((element) => element.type)
          .slice(0, 1)
          .sort(() => Math.random() - 0.5)
          .map((element) => (
            <ProductCart
              id={element.id}
              key={element.id}
              image={element.image}
              title={element.title}
              price={element.price}
            />
          ))}
      </div>
      <Footer />
    </div>
  );
}
