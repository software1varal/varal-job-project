import React from "react";
import './AvatarCard.css';
import profilePic from '../../../asset/user-profile.svg'

function AvatarCard() {
  return (
    <div class="avatar-card-container">
      <div class="upper-container">
        <div class="image-container">
          <img src={profilePic} />
        </div>
        <div className="icon-container">
        
        <input type="file" id="profile-pic-file" hidden/>
            <label for="profile-pic-file"><i class="fa-solid fa-pencil"></i></label>
           
        </div>
      </div>
    </div>
  );
}

export default AvatarCard;
