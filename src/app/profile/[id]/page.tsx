import { Nav } from "@/components/Nav";
import React from "react";

export default function Profile(props: any) {
  const prodId = props.params.id;

  return (
    <div className="bg-white h-auto text-black">
      <Nav />
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="bg-zinc-100 grid grid-cols-2 border rounded-t-2xl   p-2 w-1/4 text-center">
          <h2>Lucas Amaral  <span className="font-bold">✏</span></h2>
          <p>Email  <span className="font-bold">✏</span></p>
        </div>
        <div className="bg-zinc-100 border p-40 w-1/4 text-center rounded-b-2xl ">aaa</div>
      </div>
    </div>
  );
}
