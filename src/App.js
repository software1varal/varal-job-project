import './App.css';

import { Route, Routes } from 'react-router-dom';

import DataPrivacy from './Components/DataPrivacy/DataPrivacy';
// import Footer from './Shared/Footer/Footer';
import ForgetPassword from './Components/Signin/ForgetPassWord/ForgetPassword';
import Joblisting from './Components/JobListing/Joblisting';
import JobsCard from './Components/JobsCard/JobsCard';
import Notifications from './Components/Notifications';
import Otp from './Components/Signin/Otp/Otp';
import RestPassWord from './Components/Signin/RestPassword/RestPassWord';
import SignUpFrm from './Components/Signin/SignUpFrm/SignUpFrm';
import Signin from './Components/Signin/Signin';
import SignupWithUserSelection from './Components/Signin/SignupWithUserSelection/SignupWithUserSelection';
import TransactionHistory from './Components/TransactionHistory';
import WelcomePage from './Components/WelcomePage/WelcomePage';
import Proposal from './Components/Proposal/Proposal';
import ProfilePage from './Components/ProfilePage/ProfilePage';
import Dashboard from './Components/Dashboard/Dashboard';
import PostedJobsList from './Components/Dashboard/PostedJobsList/PostedJobsList';
import DeatailsJobsPostOne from './Components/Dashboard/DeatailsJobsPostOne/DeatailsJobsPostOne';
import DetailsJobsPostTwo from './Components/Dashboard/DeatailsJobsPostTwo/DetailsJobsPostTwo';
import DeatailsJobsPostThree from './Components/Dashboard/DeatailsJobsPostThree/DeatailsJobsPostThree';
import PostJobOne from './Components/Dashboard/PostJobOne/PostJobOne';
import PostJobTow from './Components/Dashboard/PostJobTwo/PostJobTow';
import PostJobThree from './Components/Dashboard/PostJobThree/PostJobThree';
import TramsAndCondition from './Components/TramsAndCondition/TramsAndCondition';

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
        <Route path="/tramsAndCondition" element={<TramsAndCondition/>} />
        <Route path="/transaction-history" element={<TransactionHistory/>} />
        <Route path="/notifications" element={<Notifications/>} />
        <Route path="/proposal" element={<Proposal/>} />
        <Route path='/profile' element={<ProfilePage/>}/>
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/postedJobsList' element={<PostedJobsList/>} />
        <Route path='/deatailsJobsPostOne' element={<DeatailsJobsPostOne/>} />
        <Route path='/detailsJobsPostTwo' element={<DetailsJobsPostTwo/>} />
        <Route path='/detailsJobsPostThree' element={<DeatailsJobsPostThree/>} />
        <Route path='/postjobone' element={<PostJobOne/>}/>
        <Route path='/postjobone/postjobtwo' element={<PostJobTow/>}/>
        <Route path='postjobone/postjobtwo/postjobthree' element={<PostJobThree/>}/>
      </Routes>
   {/* <Footer/> */}
    </div>
  );
}

export default App;
