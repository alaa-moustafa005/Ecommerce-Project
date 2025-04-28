import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header"; // ده الـ component اللي فيه "Latest Arrivals" والصورة
import Products from "./components/Products";
import Subscribe from "./components/Sub";
import Footer from "./components/Footer";
import Home from "./pages/Home"; // ممكن تستخدم ده لصفحة تانية لو عايز
import About from "./pages/About";
import Collection from "./pages/Collection";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <div className="md:max-w-[85%] mx-auto max-w-[90%]">
        <Navbar />
        <Routes>
          {/* خلي ده اللي يظهر ديفولت ولما تضغط على "Home" */}
          <Route path="/" element={<Header />} />
          <Route path="/about" element={<About />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/contact" element={<Contact />} />
          {/* صفحة المنتجات هتبقى ليها رابط تاني */}
          <Route path="/products" element={<Products />} />
          {/* ممكن تستخدم ده لصفحة تانية لو محتاجها */}
          <Route path="/home-page" element={<Home />} />
          <Route path="/subscribe" element={<Subscribe />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

