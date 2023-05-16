import { FunctionProps } from "@/@types/filter";
import React, { useState } from "react";

export const Filter = (props: FunctionProps) => {
  const {
    Best,
    onReset,
    lowestPrice,
    higherPrice,
    bestLowestPrice,
    bestHigherPrice,
  } = props;

  function handleResetClick() {
    onReset();
  }

  /* Verifica se no produto existe a propriedade size */
  const [size, setSize] = useState("");

  const handleBestClick = () => {
    if (!Best) return;
    Best(size ? size : "");
  };

  return (
    <div className="grid gap-2 rounded-xl border-lime-600 p-1 xs:w-3/4 xs:pb-4">
      <h2 className="flex justify-start font-bold">Filter by:</h2>
      <div className="grid justify-items-start gap-1">
        <h4 className="flex">Filter by size:</h4>
        {Best ? (
          <>
            <button
              onClick={() => Best("P")}
              type="button"
              value="Filter"
              className="flex w-1/6 lg:p-0 xs:p-2 items-center justify-center rounded-3xl bg-zinc-900 text-white transition-all ease-in-out hover:rounded-none"
            >
              P
            </button>
            <button
              onClick={() => Best("M")}
              type="button"
              value="Filter"
              className="flex w-1/6 lg:p-0 xs:p-2 items-center justify-center rounded-3xl bg-zinc-900 text-white transition-all ease-in-out hover:rounded-none"
            >
              M
            </button>
            <button
              onClick={() => Best("G")}
              type="button"
              value="Filter"
              className="flex w-1/6 lg:p-0 xs:p-2 items-center justify-center rounded-3xl bg-zinc-900 text-white transition-all ease-in-out hover:rounded-none"
            >
              G
            </button>
          </>
        ) : null}
      </div>
      <div className="grid justify-items-start gap-1">
        <h4 className="flex justify-center">Filter by price:</h4>
        <button
          onClick={() => lowestPrice(50, 100)}
          type="button"
          value="Filter"
          className="flex w-3/6 lg:p-0 xs:p-2 items-center justify-center rounded-3xl bg-zinc-900 text-white transition-all ease-in-out hover:rounded-none"
        >
          U$50 & U$100
        </button>
        <button
          onClick={() => higherPrice(100, 150)}
          type="button"
          value="Filter"
          className="flex w-3/6 lg:p-0 xs:p-2 items-center justify-center rounded-3xl bg-zinc-900 text-white transition-all ease-in-out hover:rounded-none"
        >
          U$100 & U$150
        </button>
        <h4 className="flex justify-center">Merge Filter:</h4>
        <button
          onClick={() => bestLowestPrice(50, 100, "P")}
          type="button"
          value="Filter"
          className="flex w-4/6 lg:p-0 xs:p-2 items-center justify-center rounded-3xl bg-zinc-900 text-white transition-all ease-in-out hover:rounded-none"
        >
          U$50 & U$100 & P
        </button>
        <button
          onClick={() => bestLowestPrice(50, 100, "M")}
          type="button"
          value="Filter"
          className="flex w-4/6 lg:p-0 xs:p-2 items-center justify-center rounded-3xl bg-zinc-900 text-white transition-all ease-in-out hover:rounded-none"
        >
          U$50 & U$100 & M
        </button>
        <button
          onClick={() => bestLowestPrice(50, 100, "G")}
          type="button"
          value="Filter"
          className="flex w-4/6 lg:p-0 xs:p-2 items-center justify-center rounded-3xl bg-zinc-900 text-white transition-all ease-in-out hover:rounded-none"
        >
          U$50 & U$100 & G
        </button>
        <button
          onClick={() => bestHigherPrice(100, 150, "P")}
          type="button"
          value="Filter"
          className="flex w-4/6 lg:p-0 xs:p-2 items-center justify-center rounded-3xl bg-zinc-900 text-white transition-all ease-in-out hover:rounded-none"
        >
          U$100 & U$150 & P
        </button>
        <button
          onClick={() => bestHigherPrice(100, 150, "M")}
          type="button"
          value="Filter"
          className="flex w-4/6 lg:p-0 xs:p-2 items-center justify-center rounded-3xl bg-zinc-900 text-white transition-all ease-in-out hover:rounded-none"
        >
          U$100 & U$150 & M
        </button>
        <button
          onClick={() => bestHigherPrice(100, 150, "G")}
          type="button"
          value="Filter"
          className="flex w-4/6 lg:p-0 xs:p-2 items-center justify-center rounded-3xl bg-zinc-900 text-white transition-all ease-in-out hover:rounded-none"
        >
          U$100 & U$150 & G
        </button>
      </div>
      <h3 className="flex justify-start">Reset filter</h3>
      <div className="flex justify-start">
        <button
          onClick={handleResetClick}
          type="button"
          value="Reset"
          className="flex w-2/6 items-center justify-center rounded-3xl bg-zinc-900 text-white transition-all ease-in-out hover:rounded-none"
        >
          Reset
        </button>
      </div>
    </div>
  );
};
