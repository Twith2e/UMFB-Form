import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex gap-2 items-center mb-5">
      <Link to={"/"}>
        <img
          className="w-[clamp(60px, 10vw, 120px)] h-auto max-h-[100px] min-h-[60px] object-contain"
          src="./src/assets/mfb-logo.png"
          alt="logo"
        />
      </Link>
      <div className="flex flex-col items-end relative">
        <h1 className="text-[clamp(20px, 10vw, 60px)] text-[#7d3330] font-bold p-0 m-0">
          UNILAG Microfinance Bank
        </h1>
        <span className="p-0 m-0 absolute right-0 bottom-[-15px] text-red-600 text-[clamp(12px, 90vw, 400px)] font-indie">
          ...empowering town and gown
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
