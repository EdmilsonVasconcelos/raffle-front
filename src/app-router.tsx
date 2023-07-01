import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageHome from "./pages/PageHome";
import DetailsProduct from "./content/DetailsProduct";

const AppRouter: React.FC = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<PageHome />} />
          <Route path="/details-product/:id" element={<DetailsProduct />} />
        </Routes>
      </Router>
    </>
  );
};

export default AppRouter;
