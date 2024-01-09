import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import { CssBaseline } from "@mui/material";
import NotFound from "./scenes/NotFound";

function App() {
  return (
    <>
      <CssBaseline />
      <div className="app" style={{ backgroundColor: "#fafafa",height:"100vh" }}>

        <Sidebar />
        <main className="content">
          <Topbar />
          <Routes>
            <Route path="/payments" element={<Dashboard />} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
