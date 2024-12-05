import Home from "./pages/Home";
import FirstPage from "./components/FirstPage";
import SecondPage from "./components/SecondPage";
import ThirdPage from "./components/ThirdPage";
import { Routes, Route } from "react-router-dom";
import FourthPage from "./components/FourthPage";
import Specimen from "./components/Specimen";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<FirstPage />} />
        <Route path="/second-page" element={<SecondPage />} />
        <Route path="/third-page" element={<ThirdPage />} />
        <Route path="/fourth-page" element={<FourthPage />} />{" "}
        <Route path="/specimen" element={<Specimen />} />
      </Route>
    </Routes>
  );
}

export default App;
