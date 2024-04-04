import { Routes, Route } from "react-router-dom";
import "./App.css";
import LobbyScreen from "./screens/Lobby";
import RoomPage from "./screens/Room";

import UnderstandDepression from "./questions/More/UnderstandDepression.jsx";
import UnderstandAnxiety from "./questions/More/UnderstandAnxiety.jsx";
import UnderstandAddiction from "./questions/More/UnderstandingAddiction.jsx";
import UnderstandED from "./questions/More/UnderstandED.jsx";

function App() {
  return (
    <div className="App">
    
      {/* <UnderstandDepression/> */}
      {/* <UnderstandAnxiety/> */}
      {/* <UnderstandAddiction/> */}
      <UnderstandED/>
    
      {/* <Routes>
        <Route path="/" element={<LobbyScreen />} />
        <Route path="/room/:roomId" element={<RoomPage />} />
        <Route path="/depress" element={<DepressionTest />} />
      </Routes> */}
    </div>
  );
}

export default App;
