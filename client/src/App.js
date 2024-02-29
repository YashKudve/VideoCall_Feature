import { Routes, Route } from "react-router-dom";
import "./App.css";
import LobbyScreen from "./screens/Lobby";
import RoomPage from "./screens/Room";
import DepressionTest from "./questions/Depress.jsx";
import Depress3 from "./questions/Depress3.jsx";
import Anxiety2 from "./questions/Anxiety2.jsx";

function App() {
  return (
    <div className="App">
      {/* <DepressionTest /> */}
      {/* <Depress3 /> */}
      <Anxiety2 />
      {/* <Routes>
        <Route path="/" element={<LobbyScreen />} />
        <Route path="/room/:roomId" element={<RoomPage />} />
        <Route path="/depress" element={<DepressionTest />} />
      </Routes> */}
    </div>
  );
}

export default App;
