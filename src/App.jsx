import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage, PreviewConfig } from "./pages";
import MapChannels from "./pages/MapChannels";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/map-channels" element={<MapChannels />} />
        <Route path="/preview-config" element={<PreviewConfig />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
