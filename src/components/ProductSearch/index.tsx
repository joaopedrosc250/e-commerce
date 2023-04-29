import Link from "next/link";
import Image from "next/image";

interface InputProps {
  url: string;
  id: string;
  title: string;
}

export const ProductSearch = ({ url, id, title}: InputProps) => {
  return (
    <div key={id} className="flex flex-row justify-end gap-10 ">
      <Link href={url} className="hover:bg-slate-200">
        <p className="text-lg">{title}</p>
      </Link>
    </div>
  );
};
