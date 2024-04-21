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
import RecoverTemplate from "./questions/More/RecoverTemplate.jsx";
import Prescription1 from "./questions/More/Prescription1.jsx";
import Prescription2 from "./questions/More/Prescription2.jsx";
import Bipolar from "./questions/Bipolar.jsx";
import Depress3 from "./questions/Depress3.jsx";
import Moodlifter from "./questions/More/Moodlifter.jsx";
import M1 from "./questions/More/Moodlifter1.jsx";
import M2 from "./questions/More/M2.jsx";

function App() {
  return (
    <div className="App">
    
      {/* <UnderstandDepression/> */}
      {/* <UnderstandAnxiety/> */}
      {/* <UnderstandAddiction/> */}
      {/* <UnderstandED/> */}
      {/* <UnderstandADHD/> */}
      {/* <PrescriptionUpload/> */}
      {/* <Prescription1/> */}
      {/* <Prescription2/> */}
      {/* <UnderstandBipolar/> */}
      {/* <UnderstandPTSD/> */}
      {/* <HospitalList/> */}
      {/* <H1/> */}
      {/* <Bipolar/> */}
      {/* <Depress3/> */}
      {/* <Moodlifter/> */}
      <M2/>
      {/* <M1/> */}
      {/* <RecoverTemplate/> */}
    
      {/* <Routes>
        <Route path="/" element={<LobbyScreen />} />
        <Route path="/room/:roomId" element={<RoomPage />} />
        <Route path="/depress" element={<DepressionTest />} />
      </Routes> */}
    </div>
  );
}

export default App;
