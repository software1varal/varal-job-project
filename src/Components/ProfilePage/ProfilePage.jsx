import React, { useState } from "react";
import Appbar from "../../Shared/Navbar/Appbar";
import AvatarCard from "./Avatar/AvatarCard";
import "./ProfilePage.css";
import starsImg from "../../asset/stars.svg";
import profilePic from "../../asset/user-profile.svg";

function ProfilePage() {
  const [editProfile, setEditProfile] = useState(false)

  return (
    <>
      <Appbar />
      <div className="container">
        <div className="profile-container">
        {/* left panel for avatar card */}
          <div className="profile-left-pane">
            <AvatarCard />
            <div className="side-navigation-tab selected">Account Settings</div>
            <div className="side-navigation-tab">Notifications Settings</div>
          
          </div>
          <div className="profile-right-pane">
            {/* personal info section row */}
            <div className="row">
                {/* left column for personal info */}
              <div className="col-lg">
                <div className="profile-info-section">
                  <div class="mobile-only">
                    <img src={profilePic} />
                  </div>
                  <div className="pro-data">
                  <div className="name">Ruhma Tariq</div>
                  <div className="member">{editProfile ? 'You can update your account information here except your work email.' :'Member since 2018'}</div>
                  {!editProfile && <button className="edit-profile-btn" onClick={()=>setEditProfile(true)}>
                    Edit profile <i class="fa-solid fa-pencil"></i>
                  </button>}
                    </div>
                </div>
              </div>
              {/* right column for personal info */}
              <div className="p-0 col-lg">
              <div className="mobile-only info-section-heading mobile-heading">General Information</div>
               
                <div className={`"profile-personal" ${editProfile && 'edit-enabled'}`}>
                
                <div className="profile-data">
                  <i class="fa-solid fa-user">&nbsp;</i> 
                  <input value="Ruhma tarik" disabled={!editProfile}/>
                 {!editProfile && <img src={starsImg} />}
                </div>
                <div className={`profile-data`}>
                  <i class="fa-solid fa-envelope"></i>
                  <input value='ruhmatarik007@gmail.com' disabled={!editProfile}/>
                </div>
                <div className="profile-data">
                  <i class="fa-solid fa-location-dot"> </i>
                  <input value='New Delhi, India' disabled={!editProfile}/>
                  
                </div>
                <div className="profile-data">
                  <i class="fa-solid fa-phone"> </i>
                  <input value='+92 900 900 900' disabled={!editProfile}/>
                </div>
                </div>
                
              </div>
              
            </div>
            <div className="section-divider desktop-only"></div>
            {/* organisation info section */}
            <div className="row">
                {/*left column for organisation info heading */}
                <div className="col-lg">
                    <div className="profile-org-info">
                        <div className="profile-info-heading mobile-heading">Organisation information</div>
                        <div className="profile-info-subtext desktop-only">{editProfile ? 'You won’t be able to update these informations.':'You can add your current company here and also edit the experience.'}</div>
                    </div>
                </div>
               {/* right column for organisation info details */}
                <div className="col-lg">
                  <div className={`"profile-org-details" ${editProfile && 'edit-enabled'}`}>
                  <div className="profile-data">
                <i class="fa-solid fa-building"></i>DiveDeepAI
                </div>
                <div className="profile-data">
                <i class="fa-solid fa-briefcase"></i>3 Years Experience
                 
                </div>
                  </div>
                
                </div>
            </div>
            <div className="section-divider desktop-only"></div>
            {/* file upload section */}
            <div className="row">
                {/*left column for file upload heading */}
                <div className="col-lg">
                    <div className="profile-org-info">
                        <div className="profile-info-heading mobile-heading">Files</div>
                        <div className="profile-info-subtext desktop-only">{editProfile ?'You can edit/change the visa file and Emirates ID card.' : 'You can edit/change the visa file and Emirates ID card.'}</div>
                    </div>
                </div>
               {/* right column for file upload details */}
                <div className="col-lg profile-file-details">
                <div className="profile-data">
                <i class="fa-solid fa-paperclip"></i> {editProfile ? 'Drop Files here or Browse Visa File' :'Visa File'}
                </div>
                <div className="profile-data">
                <i class="fa-solid fa-address-card"></i> {editProfile ? 'Drop Files here or Browse Visa File' :'Emirated Id'}
                </div>
                </div>
            </div>
            <div className="section-divider desktop-only"></div>

          {/* password change section for edit profile */}
            {editProfile && <><div className="row change-password-section">
                {/*left column for change password heading */}
                <div className="col-lg">
                    <div className="profile-org-info">
                        <div className="profile-info-heading mobile-heading">Change Password</div>
                        <div className="profile-info-subtext desktop-only">You can change your password at any time.</div>
                    </div>
                </div>
               {/* right column for change password details */}
                <div className="col-lg">
                  <div className={`"profile-org-details" ${editProfile && 'edit-enabled'}`}>
                  <div className="profile-data">
                  <i class="fa-solid fa-lock"></i>
                <input value='' disabled={!editProfile} placeholder='Current Password'/> 
                </div>
                <div className="profile-data">
                <i class="fa-solid fa-lock"></i>
                <input value='' disabled={!editProfile} placeholder='New Password'/>
                 
                </div>
                <button className="save-password-button" >
                  Save Password
                  </button>
                  </div>
                
                </div>
            </div>
            <div className="section-divider desktop-only"></div>
            </>}

          {/* about section for edit profile */}
            <div className="row">
                {/*left column for about info heading */}
                <div className="col-lg">
                    <div className="profile-org-info">
                        <div className="profile-info-heading mobile-heading">About</div>
                        <div className="profile-info-subtext desktop-only">You can change your description.</div>
                    </div>
                </div>
               {/* right column for about info details */}
                <div className="col-lg">
                  <div className={`"profile-org-details" ${editProfile && 'edit-enabled'}`}>
                  <div className="profile-data">
                <textarea value='' disabled={!editProfile}/> 
                </div>
                  </div>
                
                </div>
            </div>
            <div className="section-divider desktop-only"></div>

            {/* gallery section */}
            <div className="row">
                {/*left column for gallery  heading */}
                <div className="col-lg">
                    <div className="profile-org-info">
                        <div className="profile-info-heading mobile-heading">Gallery</div>
                        <div className="profile-info-subtext desktop-only">You can add upto 5 images</div>
                    </div>
                </div>
               {/* right column for gallery  details */}
                <div className="col-lg profile-gallery-detail">
                    <div className="gallery-placeholder"></div>
                    <div className="gallery-placeholder"></div>
                    <div className="gallery-placeholder"></div>
                    <div className="gallery-placeholder"></div>
                    {editProfile && <div className="gallery-placeholder add-image">
                    <i class="fa-solid fa-camera"></i>
                      </div>}
                      <div className="flex p-auto">

                      <button className="save-profile-change">Save Changes</button>
                      <button className="cancel-profile-change">Discard</button>
                      </div>
                </div>
                
            </div>
            <div className="section-divider desktop-only"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
