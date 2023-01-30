import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Users from "./components/Users";
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
