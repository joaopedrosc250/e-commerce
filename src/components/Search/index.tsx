import Image from "next/image";
import Link from "next/link";

export const Search = () => {
  return (
    <div id="search-box" className="flex flex-row justify-center items-center">
      <div className="flex relative gap-2">
        <input
          type="text"
          placeholder="Search..."
          className="border-none bg-none outline-none p-0 transition-all duration-500 focus:outline-zinc-200 focus:rounded-2xl focus:px-3 focus:shadow-2xl focus:bg-zinc-50"
        />
        <Link href="">
          <Image
            width={33}
            height={35}
            src={"/icon.png"}
            alt="lupe"
            className="flex justify-center items-center"
          />
        </Link>
      </div>
    </div>
  );
};
