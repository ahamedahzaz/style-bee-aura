import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import CategoryProducts from "./pages/CategoryProducts";
import AllProducts from "./components/AllProducts";
import ProductDetails from "./pages/ProductDetails";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<AdminLogin />} />
      <Route path="/dashboard" element={<AdminDashboard />} />

      <Route path="/collections" element={<AllProducts />} />

      <Route
        path="/collection/:category"
        element={<CategoryProducts />}
      />
      <Route
  path="/product/:id"
  element={<ProductDetails />}
/>
    </Routes>
  );
}

export default App;