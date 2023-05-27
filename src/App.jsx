import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage, PreviewConfig, SavedConfig } from "./pages";
import MapChannels from "./pages/MapChannels";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/map-channels" element={<MapChannels />} />
        <Route path="/preview-config" element={<PreviewConfig />} />
        <Route path="/saved-config" element={<SavedConfig />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
