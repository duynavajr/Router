import "./App.css";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import NotFound from "./components/NotFound";
import AboutProduct from "./components/Page/AboutProduct";
import AboutUsers from "./components/Page/AboutUsers";
import IndexAbout from "./components/Page/IndexAbout";
import ProductPage from "./components/ProductPage";
import Login from "./components/SIGN_IN/Login";
import Checkout from "./components/SIGN_IN/Checkout";

function App() {
  //  mac dinh tham so la isActive
  const activeStyle = ({ isActive }) => ({
    color: isActive ? "red" : "black",
    backgroundColor: isActive ? "black" : "red",
  });
  return (
    <div>
      {/* SU DUNG LINK */}
      {/* <ul>
        <li>
          <Link to="/">HomePage</Link>
        </li>

        <li>
          <Link to="/contact">Contact Page</Link>
        </li>
        <li>
          <Link to="/about">About Page</Link>
          <ul>
            <li>
              <Link to="/about/aboutProduct">About Product</Link>
            </li>
            <li>
              <Link to="/about/aboutUser"> About Users</Link>
            </li>
          </ul>
        </li>
      </ul> */}
      {/* SU DUNG NAVLINK */}
      {/* navlink va link giong nhau deu dung de anh xa den Route
      nhung khi su dung navlink thi : className se duoc active */}
      <ul>
        <li>
          <NavLink to="/" style={activeStyle}>
            HomePage
          </NavLink>
        </li>

        <li>
          <NavLink to="/contact" style={activeStyle}>
            Contact Page
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" style={activeStyle}>
            About Page
          </NavLink>
          <ul>
            <li>
              <NavLink to="/about/aboutProduct" style={activeStyle}>
                About Product
              </NavLink>
            </li>
            <li>
              <NavLink to="/about/aboutUser" style={activeStyle}>
                {" "}
                About Users
              </NavLink>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/checkout">Thanh toan</Link>
        </li>
      </ul>
      <ProductPage />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/contact" element={<ContactPage />}></Route>
        <Route path="/about" element={<AboutPage />}>
          {/* router index cua about */}
          <Route index element={<IndexAbout />}></Route>
          {/* nested router (dinh tuyen long nhau) */}
          <Route path="aboutProduct" element={<AboutProduct />}></Route>
          <Route path="aboutUser" element={<AboutUsers />}></Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>

        {/* luu y */}
        {/* de router co path="*" o cuoi cung */}
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
