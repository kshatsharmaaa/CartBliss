import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css';
import { Navbar } from "./components/navbar";
import { Auth } from "./pages/auth";
import { Shop } from "./pages/shop";
import { Checkout } from "./pages/checkout";
import { PurchasedItems } from "./pages/purchased-items";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Shop/>}/>
          <Route path="/auth" element={<Auth/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/purchased-items" element={<PurchasedItems/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
