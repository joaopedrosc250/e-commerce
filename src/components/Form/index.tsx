export const Form = () => {
  return (
    <div className='text-black flex lg:flex-row xs:flex-col justify-center items-center lg:bg-[url("/wave-2.jpg")] bg-cover bg-center lg:h-screen xs:h-auto lg:p-0 xs:p-5 gap-8'>
      <div className="flex flex-row lg:justify-start lg:items-start xs:justify-center xs:items-center w-full">
        <div className="flex flex-col gap-6 justify-center items-center w-full">
          <h1 className="text-3xl">UrbanAvenue</h1>
          <p className="indent-10 lg:w-3/6 xs:w-3/4">
            Welcome to our online streetwear shop, where style meets comfort!
            Discover the latest trends in urban fashion. With easy browsing and
            secure checkout join the streetwear movement and elevate your
            wardrobe with our trendy and comfortable pieces.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center lg:w-full xs:w-2/3 gap-4">
        <div className="flex flex-col justify-center items-center p-16 pb-8 rounded-2xl shadow-2xl bg-white">
          <form
            action=""
            className="flex flex-col justify-center items-center gap-4"
          >
            <p className="mt-3 font-semibold">Name: </p>
            <input
              type="text"
              name="name"
              placeholder="Type the first name..."
              className="p-1 rounded-xl border-2 focus:outline-zinc-300 focus:shadow-xl"
              required
            />
            <p className="mt-3 font-semibold">E-mail: </p>
            <input
              type="text"
              name="email"
              placeholder="Type the email..."
              className="p-1 rounded-xl border-2 focus:outline-zinc-300 focus:shadow-xl"
              required
            />
            <input
              type="submit"
              value="Send"
              className="text-black mt-3 p-2 rounded-xl bg-white hover:scale-110 hover:text-white hover:bg-black transition-all"
            />
          </form>
        </div>
        <a
          href="/"
          className="text-white w-fit p-4 bg-black rounded-2xl hover:scale-110 hover:bg-white hover:text-black"
        >
          Back
        </a>
      </div>
    </div>
  );
};
