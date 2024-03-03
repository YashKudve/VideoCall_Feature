import { Routes, Route } from "react-router-dom";
import "./App.css";
import LobbyScreen from "./screens/Lobby";
import RoomPage from "./screens/Room";
import DepressionTest from "./questions/Depress.jsx";
import Depress3 from "./questions/Depress3.jsx";
import Anxiety2 from "./questions/Anxiety2.jsx";
import PTSD from "./questions/PTSD.jsx";
import PTSDTest from "./questions/PTSD2.jsx";
import Bipolar from "./questions/Bipolar.jsx";
import YouthTest from "./questions/YouthTest.jsx";
import EDTest from "./questions/EDTest.jsx";

function App() {
  return (
    <div className="App">
      {/* <DepressionTest /> */}
      {/* <Depress3 /> */}
      {/* <Anxiety2 /> */}
      {/* <PTSD /> */}
      {/* <PTSDTest /> */}
      {/* <Bipolar /> */}
      {/* <YouthTest /> */}
      <EDTest />
      {/* <Routes>
        <Route path="/" element={<LobbyScreen />} />
        <Route path="/room/:roomId" element={<RoomPage />} />
        <Route path="/depress" element={<DepressionTest />} />
      </Routes> */}
    </div>
  );
}

export default App;
