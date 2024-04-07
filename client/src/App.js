import { Routes, Route } from "react-router-dom";
import "./App.css";
import LobbyScreen from "./screens/Lobby";
import RoomPage from "./screens/Room";

import UnderstandDepression from "./questions/More/UnderstandDepression.jsx";
import UnderstandAnxiety from "./questions/More/UnderstandAnxiety.jsx";
import UnderstandAddiction from "./questions/More/UnderstandingAddiction.jsx";
import UnderstandED from "./questions/More/UnderstandED.jsx";
import UnderstandADHD from "./questions/More/UnderstandADHD.jsx";
import PrescriptionUpload from "./questions/More/PrescriptionUpload.jsx";
import UnderstandBipolar from "./questions/More/UnderstandBipolar.jsx";
import UnderstandPTSD from "./questions/More/UnderstandPTSD.jsx";
import HospitalList from "./questions/More/HospitalList.js";
import H1 from "./questions/More/H1.js";

function App() {
  return (
    <div className="App">
    
      {/* <UnderstandDepression/> */}
      {/* <UnderstandAnxiety/> */}
      {/* <UnderstandAddiction/> */}
      {/* <UnderstandED/> */}
      {/* <UnderstandADHD/> */}
      {/* <PrescriptionUpload/> */}
      {/* <UnderstandBipolar/> */}
      {/* <UnderstandPTSD/> */}
      {/* <HospitalList/> */}
      <H1/>
    
      {/* <Routes>
        <Route path="/" element={<LobbyScreen />} />
        <Route path="/room/:roomId" element={<RoomPage />} />
        <Route path="/depress" element={<DepressionTest />} />
      </Routes> */}
    </div>
  );
}

export default App;
