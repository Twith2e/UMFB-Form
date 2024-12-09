import { Outlet, Link, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";

function Home() {
  const location = useLocation();
  const { pathname: currentPage } = location;
  const [prev, setPrev] = useState("");
  const [next, setNext] = useState("");

  useEffect(() => {
    if (currentPage === "/") {
      setNext("/second-page");
    } else if (currentPage === "/second-page") {
      setNext("/third-page");
      setPrev("/");
    } else if (currentPage === "/third-page") {
      setNext("/fourth-page");
      setPrev("/second-page");
    } else if (currentPage === "/fourth-page") {
      setNext("/last-page");
      setPrev("/third-page");
    } else {
      setPrev("/fourth-page");
    }
  }, [currentPage]);

  return (
    <div className="container-fluid py-4">
      <div className="row">
        <div className="col-10 mx-auto">
          <header>
            <Navbar />
          </header>
          <div>
            <Outlet />
          </div>
          <div className="flex gap-3 items-center justify-center mt-8">
            <button
              className="text-black border-black btn cursor-not-allowed p-0"
              disabled={currentPage === "/" ? true : false}
            >
              <Link
                className="no-underline text-black hover:text-green-500 p-3"
                to={prev}
              >
                PREV
              </Link>
            </button>
            <button
              className="btn p-0 bg-black"
              disabled={currentPage === "/last-page" ? true : false}
            >
              <Link className="no-underline text-white p-3" to={next}>
                NEXT
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
