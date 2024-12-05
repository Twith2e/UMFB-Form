function Navbar() {
  return (
    <nav className="flex gap-5 items-center mb-5">
      <div>
        <img
          src="./src/assets/UMFB-LOGO-MAIN-SMALL.png"
          alt="logo"
          style={{ width: "120px", height: "100px" }}
        />
      </div>
      <div className="flex flex-col items-end relative">
        <h1 className="text-[60px] text-[#7d3330] font-bold p-0 m-0">
          UNILAG Microfinance Bank
        </h1>
        <span className="p-0 m-0 absolute right-0 bottom-[-15px] text-red-600 text-2xl font-indie">
          ...empowering town and gown
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
