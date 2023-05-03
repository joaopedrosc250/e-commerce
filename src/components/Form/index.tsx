import Link from "next/link";

export const Form = () => {
  return (
    <div className="text-black flex lg:flex-row xs:flex-col justify-center items-center bg-white bg-cover bg-center lg:h-screen xs:h-auto lg:p-0 xs:p-5 gap-8">
      <div className="flex flex-row lg:justify-start lg:items-start xs:justify-center xs:items-center w-full">
        <div className="flex flex-col gap-6 justify-center items-center w-full">
          <Link href="/">
            <h1 className="text-3xl">UrbanAvenue</h1>
          </Link>
          <p className="text-justify lg:w-4/6 xs:w-3/4">
            Discover the latest trends in urban fashion. With easy browsing,
            join us on the streetwear movement and elevate your wardrobe with
            our trendy and comfortable pieces.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center lg:w-full xs:w-2/3 gap-10">
        <div className="flex flex-col justify-center items-center p-28 pb-16 rounded-2xl shadow-2xl bg-white">
          <form
            action=""
            method="post"
            className="flex flex-col justify-center items-center gap-2"
          >
            <label className="mt-3 font-semibold">First name: </label>
            <input
              type="text"
              name="name"
              id="first"
              placeholder="Type the first name..."
              className="rounded-xl border-2 focus:outline-zinc-300 p-2"
              required
            />
            <label className="mt-3 font-semibold">Last name: </label>
            <input
              type="text"
              name="name"
              id="last"
              placeholder="Type the last name..."
              className="rounded-xl border-2 focus:outline-zinc-300 p-2"
              required
            />
            <label className="mt-3 font-semibold">E-mail: </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Type your better email..."
              className="rounded-xl border-2 focus:outline-zinc-300 p-2"
              required
            />
            <button
              title="submit"
              type="submit"
              value="Send"
              className="text-white mt-8 p-2 rounded-xl bg-blue-600 hover:rounded-none hover:bg-black transition-all ease-in-out"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
