import Home from "./pages/Home";
import FirstPage from "./components/FirstPage";
import SecondPage from "./components/SecondPage";
import ThirdPage from "./components/ThirdPage";
import { Routes, Route } from "react-router-dom";
import Specimen from "./components/Specimen";
import NotFound from "./pages/404";
import DropDown from "./components/DropDown";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<FirstPage />} />
        <Route path="/second-page" element={<SecondPage />} />
        <Route path="/third-page" element={<ThirdPage />} />
        <Route path="/last-page" element={<Specimen />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
