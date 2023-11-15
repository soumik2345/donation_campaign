import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Donation from "./pages/Donation";
import Statistics from "./pages/Statistics";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <BrowserRouter>
    <Toaster
  position="top-right"
  reverseOrder={false}
/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="donation" element={<Donation />} />
        <Route path="statistics" element={<Statistics />} />
        <Route path="details/:id" element={<Details />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
