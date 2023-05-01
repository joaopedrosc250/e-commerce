import Link from "next/link";
import FilterSearch from "../FilterSearch";

export const Search = () => {
  return (
    <div id="search-box" className="flex flex-row justify-center items-center">
      <div className="flex box-border gap-2">
        <FilterSearch />
        <Link href="" className="fa fa-search scale-125"></Link>
      </div>
    </div>
  );
};
