export const Form = () => {
  return (
    <div className="text-black flex flex-col justify-center items-center bg-slate-100 lg:h-screen xs:h-auto xs:p-5 gap-8">
      <h1 className="text-3xl">UrbanAvenue</h1>
      <p className="indent-10 lg:w-3/6 xs:w-3/4">
            Welcome to our online streetwear shop, where style meets comfort!
            Discover the latest trends in urban fashion, from casual hoodies and
            joggers to edgy graphic tees and sneakers. Our curated collection is
            perfect for those who love the urban street style and want to make a
            statement with their clothing. With easy browsing and secure
            checkout, shopping with us is convenient and hassle-free. Join the
            streetwear movement and elevate your wardrobe with our trendy and
            comfortable pieces. Shop now and express your unique style!
          </p>
      <h2 className="text-xl lg:shadow-lime-400 xs:shadow-lime-400 hover:shadow-lime-500 animate-bounce transition-all duration-300">
        👇🏽 write here 👇🏽
      </h2>
      <div className="flex flex-col justify-center items-center lg:w-1/5 xs:w-2/3 p-6 rounded-2xl shadow-2xl">
        <form
          action=""
          className="flex flex-col justify-center items-center gap-1"
        >
          <p className="mt-3 font-semibold">Name: </p>
          <input
            type="text"
            name="name"
            placeholder="Type the first name..."
            className="p-1 rounded-xl border-2 focus:outline-zinc-300 focus:shadow-xl"
            required
          />
          <p className="mt-3 font-semibold">Last name: </p>
          <input
            type="text"
            name="last-name"
            placeholder="Type the last name..."
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
          <p className="mt-3 font-semibold">Number: </p>
          <input
            type="text"
            name="number"
            placeholder="Type the number..."
            className="p-1 rounded-xl border-2 focus:outline-zinc-300 focus:shadow-xl"
            required
          />
          <input
            type="submit"
            value="Done"
            className="text-black mt-3 p-2 rounded-xl bg-white hover:scale-110 hover:text-white hover:bg-black transition-all"
          />
        </form>
      </div>
      <a
        href="/"
        className="text-white bg-black p-2 rounded-2xl hover:scale-110 hover:bg-white hover:text-black"
      >
        Back
      </a>
    </div>
  );
};
