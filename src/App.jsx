import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages//Home/Home";
import Cart from "./Pages/Cart/Cart";
import Contact from "./Pages/Contact/Contact";
import Shop from "./Pages/Shop/Shop";
import './App.css'
import Layout from "./Pages/Layout";
import Product from "./Pages/Product/Product";
function App() {

  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<Product />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
