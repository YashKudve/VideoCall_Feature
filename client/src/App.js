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
import PST from "./questions/PST.jsx";
import ADHD from "./questions/ADHD.jsx";
import TreatInfo from "./questions/More/TreatInfo.jsx";
import TimeLine from "./questions/More/TimeLine.jsx";
import T1 from "./questions/More/T1.jsx";

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
      {/* <EDTest /> */}
      {/* <PST /> */}
      {/* <ADHD/> */}
      {/* // <TreatInfo/> */}
      <TimeLine/>
      {/* <T1/> */}
      {/* <Routes>
        <Route path="/" element={<LobbyScreen />} />
        <Route path="/room/:roomId" element={<RoomPage />} />
        <Route path="/depress" element={<DepressionTest />} />
      </Routes> */}
    </div>
  );
}

export default App;
