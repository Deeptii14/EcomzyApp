import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Contact from "./pages/Contact";
import Homepage from "./pages/Homepage";
import PagenotFound from "./pages/PagenotFound";
import Policy from "./pages/Policy";
import Dashboard from "./pages/user/Dashboard.js";
import PrivateRoute from "./components/routes/Private.js";
import ForgotPassWord from "./pages/auth/ForgotPassWord";
import AdminRoute from "./components/routes/AdminRoute";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import CreateCategory from "./pages/Admin/CreateCategory";
import CreateProduct from "./pages/Admin/CreateProduct";
import User from "./pages/Admin/User";
import Profile from "./pages/user/Profile";
import Orders from "./pages/user/Orders";
import Products from "./pages/Admin/Products";
import UpdateProduct from "./pages/Admin/UpdateProduct";
import Search from "./pages/Search";
import ProductDetails from "./pages/ProductDetails";
import Categories1 from "./pages/Categories1";
import CategoryProdduct1 from "./pages/CategoryProdduct1";
import CartPage from "./pages/CartPage";
import AdminOrder from "./pages/Admin/AdminOrder";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product/:slug" element={<ProductDetails />} />
        <Route path="/categories" element={<Categories1 />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/category1/:slug" element={<CategoryProdduct1 />} />
        <Route path="/search" element={<Search />} />
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
          <Route path="user/profile" element={<Profile />} />
          <Route path="user/orders" element={<Orders />} />
        </Route>
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/orders" element={<AdminOrder />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
          <Route path="admin/products/:slug" element={<UpdateProduct />} />

          <Route path="admin/user" element={<User />} />
          <Route path="admin/products" element={<Products />} />
        </Route>
        <Route path="/forgot-password" element={<ForgotPassWord />} />
        <Route path="/about" element={<About />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<PagenotFound />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
