import React, { useState } from "react";
interface Props {
  Best?: (size: string) => void;
  onReset: () => void;
  lowestPrice: (minPrice: number, maxPrice: number) => void;
  higherPrice: (minPrice: number, maxPrice: number) => void;
}

export const Filter = (props: Props) => {
  const { Best, onReset, lowestPrice, higherPrice } = props;

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
    <div className="grid xs:pb-4 xs:w-3/4 p-1 rounded-xl gap-2 border-lime-600">
      <h2 className="font-bold flex justify-start">Filter by:</h2>
      <div className="grid gap-1 justify-items-start">
        <h4 className="flex">Filter by size:</h4>
        {Best ? (
          <>
            <button
              onClick={() => Best("P")}
              type="button"
              value="Filter"
              className="flex justify-center items-center rounded-xl w-1/6 hover:text-black hover:bg-white bg-zinc-700 text-white"
            >
              P
            </button>
            <button
              onClick={() => Best("M")}
              type="button"
              value="Filter"
              className="flex justify-center items-center rounded-xl w-1/6 hover:text-black hover:bg-white bg-zinc-700 text-white"
            >
              M
            </button>
            <button
              onClick={() => Best("G")}
              type="button"
              value="Filter"
              className="flex justify-center items-center rounded-xl w-1/6 hover:text-black hover:bg-white bg-zinc-700 text-white"
            >
              G
            </button>
          </>
        ) : null }
      </div>
      <div className="grid gap-1 justify-items-start">
        <h4 className="flex justify-center">Filter by price:</h4>
        <button
          onClick={() => lowestPrice(50, 100)}
          type="button"
          value="Filter"
          className="flex justify-center items-center rounded-xl w-2/4 hover:text-black hover:bg-white bg-zinc-700 text-white"
        >
          U$50 & U$100
        </button>
        <button
          onClick={() => higherPrice(100, 150)}
          type="button"
          value="Filter"
          className="flex justify-center items-center rounded-xl w-2/4 hover:text-black hover:bg-white bg-zinc-700 text-white"
        >
          U$100 & U$150
        </button>
      </div>
      <h3 className="flex justify-start">Reset filter</h3>
      <div className="flex justify-start">
        <button
          onClick={handleResetClick}
          type="button"
          value="Reset"
          className="flex justify-center items-center rounded-xl w-2/4 hover:text-black hover:bg-white bg-zinc-700 text-white"
        >
          Reset
        </button>
      </div>
    </div>
  );
};
