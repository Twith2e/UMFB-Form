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
    } else if (currentPage === "fourth-page") {
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
              className="btn-warning text-white btn cursor-not-allowed"
              disabled={currentPage === "/" ? true : false}
            >
              <Link className="no-underline text-white" to={prev}>
                PREV
              </Link>
            </button>
            <button
              className="btn-success btn"
              disabled={currentPage === "/fourth-page" ? true : false}
            >
              <Link className="no-underline text-white" to={next}>
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
