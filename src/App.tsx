import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/auth/authSlice.tsx";
import { ThemeProvider } from "./contexts/ThemeContext";
import { SidebarProvider } from "./contexts/SidebarContext";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Appointments from "./pages/Appointments";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./components/login/Login";
import Registro from "./components/login/Register";

function App() {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider>
          <SidebarProvider>
            <Router>
              <Layout>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route
                    path="/citas"
                    element={
                      <ProtectedRoute>
                        <Appointments />
                      </ProtectedRoute>
                    }
                  />
                  <Route path="/servicios" element={<Services />} />
                  <Route path="/acerca" element={<About />} />
                  <Route path="/contacto" element={<Contact />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/registro" element={<Registro />} />
                </Routes>
              </Layout>
            </Router>
          </SidebarProvider>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
