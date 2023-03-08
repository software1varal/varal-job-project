import React from 'react'
import userImage from '../../../asset/user-profile.svg'
import bannerImage from '../../../asset/banner-image.svg'
import './Banner.css'

function Banner() {
  return (
    <div className="dashboard-banner">
            <div className="banner-user-image">
                <div className="img-cont">
                <img src={userImage}/>
                </div>

            </div>
            <div className="banner-body row ">
            <p className="banner-welcome-text">Welcome, Ruhma Tariq</p>
            <span className="banner-welcome-subtext">Check your activities in this dashboard.</span>
            <div className="banner-buttons">
            <button className="bnr-apply-btn">Apply Job</button>
            <button className="bnr-trxn-btn">Transaction</button>
            </div>
            

            </div>
            <div className="banner-image desktop-only">
            <img src={bannerImage} />
            </div>
        </div>
        
  )
}

export default Banner