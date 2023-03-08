import React from "react";
import './AvatarCard.css';
import profilePic from '../../../asset/user-profile.svg'

function AvatarCard() {
  return (
    <div class="card-container">
      <div class="upper-container">
        <div class="image-container">
          <img src={profilePic} />
        </div>
        <div className="icon-container">
        <i class="fa-solid fa-pencil"></i>
        </div>
      </div>
    </div>
  );
}

export default AvatarCard;
