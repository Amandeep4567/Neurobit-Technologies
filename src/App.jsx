import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage } from "./pages";
import MapChannels from "./pages/MapChannels";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/map-channels" element={<MapChannels />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
