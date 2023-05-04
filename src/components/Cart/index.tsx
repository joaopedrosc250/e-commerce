interface CartProps {
    setIsShowCart: React.Dispatch<React.SetStateAction<boolean>>;
  }  

export default function Cart({ setIsShowCart }: CartProps) {
  return (
   <div className="fixed inset-0 bg-[rgba(0,0,0,0.7)]">
        <div className="bg-white w-[250px] h-full absolute right-0">
            <h1 className="bg-red-400 py-2 text-center text-white">Cart</h1>
        </div>
   </div>
  );
}
