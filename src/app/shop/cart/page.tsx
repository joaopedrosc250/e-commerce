import { Footer } from "@/components/Footer";

export default function Bag() {
  return (
    <div className="bg-white flex flex-col text-black lg:h-auto xs:h-auto">
      <div className="flex lg:flex-col xs:flex-col justify-center gap-20 items-center h-screen">
        <div className="flex flex-col justify-center items-center fa fa-shopping-cart scale-150"></div>
        <div className="bg-slate-100 rounded-3xl lg:p-[20rem] xs:p-[12rem]">your cart is empty</div>
      </div>
      <Footer />
    </div>
  );
}
