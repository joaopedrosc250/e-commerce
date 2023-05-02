import Link from "next/link";

export const Search = () => {
  return (
    <div id="search-box" className="flex flex-row justify-center items-center">
      <div className="flex justify-center items-center border-2 rounded-3xl p-2 focus:rounded-none">
        <input
          type="text"
          placeholder="Search..."
          className="pl-1 outline-none"
        />
        <Link href="" className="fa fa-search scale-125 px-1"></Link>
      </div>
    </div>
  );
};
