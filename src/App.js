import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route, Router } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Sidebar from "./components/admin/sidebar/Sidebar";
import Topbar from "./components/admin/topbar/Topbar";
import Listcompany from "./components/admin/listcompany/Listcompany";
import UpdateBusiness from "./components/admin/edit/UpdateBusiness";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import "bootstrap/dist/css/bootstrap.css";
import { createBrowserHistory } from "history";
export const history = createBrowserHistory();
function App() {
  function handleFiltersChange(newFilter) {
    console.log("New filters:", newFilter);
  }
  return (
    <Col>
      <UserAuthContextProvider history={history}>
        <Listcompany onSubmit={handleFiltersChange} />
        <Routes>
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<Login />} />
          <Route path="/topbar" element={<Topbar />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/listcompany" element={<Listcompany />} />
          <Route
            exact
            path="/updateBusiness/:id"
            element={<UpdateBusiness />}
          />
        </Routes>
      </UserAuthContextProvider>
      //{" "}
    </Col>
  );
}

export default App;
