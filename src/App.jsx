import Layout from "./Layout";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<h1>Home</h1>} />
          <Route path="space/:id" element={<h1>Spaces</h1>} />
          <Route path="favorites" element={<h1>Favorites</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
