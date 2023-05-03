import { Footer } from "@/components/Footer";

function Fav() {
  return (
    <div className="bg-white h-auto text-black">
      <div className="flex lg:flex-col xs:flex-col justify-center gap-20 items-center h-screen">
        <div className="flex flex-col justify-center items-center fa fa-heart scale-150"></div>
        <div className="bg-slate-100 lg:p-[20rem] xs:p-[12rem] rounded-3xl">
          <p>Your fav list is empty</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Fav;