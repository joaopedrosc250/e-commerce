import { Footer } from "@/components/Footer";

export default function Profile(props: any) {
  const userId = props.params.id;

  return (
    <div className="bg-white h-auto text-black">
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="bg-zinc-100 grid grid-cols-2 border rounded-t-2xl p-2 lg:w-1/4 xs:w-2/4 text-center">
          <h2>
            User <span className="font-bold">✏</span>
          </h2>
          <p>
            Email <span className="font-bold">✏</span>
          </p>
        </div>
        <div className="bg-zinc-100 border p-40 lg:w-1/4 xs:w-2/4 text-center rounded-b-2xl ">
          history
        </div>
      </div>
      <Footer />
    </div>
  );
}