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
      setNext("/last-page");
      setPrev("/second-page");
    } else {
      setPrev("/third-page");
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
              className={`text-black btn p-0 ${
                currentPage === "/" ? "d-none" : ""
              }`}
              style={{ borderColor: "#7d3330" }}
            >
              <Link
                className="no-underline text-black hover:text-green-500 p-3"
                to={prev}
              >
                PREV
              </Link>
            </button>
            <button
              className={`btn p-0 ${
                currentPage === "/last-page" ? "d-none" : ""
              }`}
              style={{ background: "#7d3330" }}
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
