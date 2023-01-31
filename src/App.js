import { BrowserRouter, Routes, Route } from "react-router-dom";
import Common from "./components/Common";
import Login from "./components/Login";
import Users from "./components/Users";
import ErrorBoundary from "./components/ErrorBoundary"
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/users"
            element={
              <ErrorBoundary>
                <Users/>
              </ErrorBoundary>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
