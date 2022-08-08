import HomePage from "pages/HomePage";
import NotFound from "pages/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./config/theme/fonts.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
