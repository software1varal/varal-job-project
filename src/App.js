import './App.css';
import { Routes, Route } from 'react-router-dom';
import WelcomePage from './Components/WelcomePage/WelcomePage';
import Signin from './Components/Signin/Signin';
import ForgetPassword from './Components/Signin/ForgetPassWord/ForgetPassword';
import SignUpFrm from './Components/Signin/SignUpFrm/SignUpFrm';
import RestPassWord from './Components/Signin/RestPassword/RestPassWord';
import SignupWithUserSelection from './Components/Signin/SignupWithUserSelection/SignupWithUserSelection';
import Otp from './Components/Signin/Otp/Otp';
import Joblisting from './Components/JobListing/Joblisting';
import JobsCard from './Components/JobsCard/JobsCard';
import DataPrivacy from './Components/DataPrivacy/DataPrivacy';
// import FooterMobileNav from './Shared/FooterMobileNav/FooterMobileNav';
// import JobsCard from './Components/JobsCard/JobsCard';

function App() {
  return (
    <div className="App">
 
      <Routes>
        <Route path="/" element={<WelcomePage/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/forgetpassword" element={<ForgetPassword/>} />
        <Route path="/signup" element={<SignUpFrm/>} />
        <Route path="/restpassWord" element={<RestPassWord/>} />
        <Route path="/userselection" element={<SignupWithUserSelection/>} />
        <Route path="/otp" element={<Otp/>} />
        <Route path="/joblisting" element={<Joblisting/>} />
        <Route path="/jobsCard" element={<JobsCard/>} />
        <Route path="/dataPrivacy" element={<DataPrivacy/>} />
        {/* <Route path="/jobsCard" element={<FooterMobileNav/>} /> */}
      </Routes>
   
    </div>
  );
}

export default App;
