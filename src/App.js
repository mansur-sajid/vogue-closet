import "./App.css";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import { QueryClientProvider, QueryClient } from "react-query";
import ProductPage from "./Pages/ProductPage";
import { Route, Routes } from "react-router-dom";
import SingleProduct from "./Pages/SingleProduct";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="products">
            <Route index element={<ProductPage />} />
            <Route path="product/:category/:id" element={<SingleProduct />} />
          </Route>
        </Routes>
        <Footer />
      </QueryClientProvider>
    </>
  );
}

export default App;
