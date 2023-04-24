export const Footer = () => {
  return (
    <div className="text-black flex lg:flex-col lg:justify-around lg:items-center xs:flex-col xs:justify-center xs:items-center xs:gap-6 lg:h-56 w-full xs:h-auto">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <div className="grid lg:grid-cols-4 lg:justify-items-center xs:grid-cols-1 xs:justify-items-center xs:gap-6 w-full">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl">UrbanAvenue</h1>
          <p>Streetwear shop online: style meets comfort.</p>
        </div>
        <div className="flex gap-4 justify-center">
          <ul className="grid lg:grid-cols-1 xs:grid-cols-1">
            <li>
              <a
                className="hover:underline hover:underline-offset-1 transition-all"
                href="mailto: amaralrdev@gmail.com"
                target="_blank"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="hover:underline hover:underline-offset-1 transition-all"
                href="mailto: amaralrdev@gmail.com"
                target="_blank"
              >
                Products
              </a>
            </li>
            <li>
              <a
                className="hover:underline hover:underline-offset-1 transition-all"
                href="mailto: amaralrdev@gmail.com"
                target="_blank"
              >
                Contact me!
              </a>
            </li>
          </ul>
          <ul className="grid lg:grid-cols-1 xs:grid-cols-1">
          <li>
            <a
              className="hover:underline hover:underline-offset-1 transition-all"
              href="mailto: amaralrdev@gmail.com"
              target="_blank"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="hover:underline hover:underline-offset-1 transition-all"
              href="mailto: amaralrdev@gmail.com"
              target="_blank"
            >
              Products
            </a>
          </li>
          <li>
            <a
              className="hover:underline hover:underline-offset-1 transition-all"
              href="mailto: amaralrdev@gmail.com"
              target="_blank"
            >
              Contact me!
            </a>
          </li>
        </ul>
        </div>
        <div></div>
        <div className="flex justify-center items-center flex-col">
          <h3 className="">Social</h3>
          <div className="flex justify-center items-center text-2xl flex-row">
            <a
              href="https://www.linkedin.com/in/lucas-amaral-73650a1b0/"
              target="_blank"
              title="linkedin profile"
              className="fa fa-linkedin hover:scale-110 px-2 hover:underline hover:underline-offset-8 transition-all"
              rel="noopener noreferrer"
            ></a>
            <a
              href="https://github.com/LrAmaral"
              target="_blank"
              title="github profile"
              className="fa fa-github hover:scale-110 px-2 hover:underline hover:underline-offset-8 transition-all"
              rel="noopener noreferrer"
            ></a>
            <a
              href="https://www.instagram.com/amaraldev/"
              target="_blank"
              title="github profile"
              className="fa fa-instagram hover:scale-110 px-2 hover:underline hover:underline-offset-8 transition-all"
              rel="noopener noreferrer"
            ></a>
          </div>
        </div>
      </div>
      <h2>
        <span>&#169; </span>All rights reserved to LrAmaral
      </h2>
    </div>
  );
};
