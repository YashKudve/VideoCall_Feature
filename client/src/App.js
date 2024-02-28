import { Routes, Route } from "react-router-dom";
import "./App.css";
import LobbyScreen from "./screens/Lobby";
import RoomPage from "./screens/Room";
import DepressionTest from "./questions/Depress.jsx";
import Depress1 from "./questions/Depress1.jsx";
import Depress2 from "./questions/Depress2.jsx";
import Depress3 from "./questions/Depress3.jsx";
import Anxiety from "./questions/Anxiety.jsx";

function App() {
  return (
    <div className="App">
      {/* <DepressionTest /> */}
      {/* <Depress1 /> */}
      {/* <Depress2 /> */}
      {/* <Depress3 /> */}
      <Anxiety />
      {/* <Routes>
        <Route path="/" element={<LobbyScreen />} />
        <Route path="/room/:roomId" element={<RoomPage />} />
        <Route path="/depress" element={<DepressionTest />} />
      </Routes> */}
    </div>
  );
}

export default App;
