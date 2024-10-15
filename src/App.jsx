import { Box } from "@mui/material";
import "./App.css";
import { Navbar } from "./components";
import { Home, Categories } from "./pages";
import { Routes, Route } from "react-router-dom";

function App() {
  const mainBoxStyle = {
    maxWidth: 1440,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    margin: "0 auto",
  };

  return (
    <Box sx={mainBoxStyle}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </Box>
  );
}

export default App;
