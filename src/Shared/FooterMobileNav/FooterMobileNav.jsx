import React from 'react';
import './FooterMobilenav.css'
import search from '../../asset/search.png';

const FooterMobileNav = () => {
    return (
        <div>
            <div className='footer-icon-nav'>
            <div className='icon-text'>
            <i class="fa-sharp fa-solid fa-house home"></i>
            <span>Home</span>
            </div>

            <div className='icon-text'>
            <img src={search} alt="" className="image-icon"/>
            <span>Search</span>
            </div>

            <div className='icon-text'>
            <i class="fa-solid fa-heart"></i>
            <span>Saved</span>
            </div>

            <div className='icon-text'>
            <i class="fa-solid fa-user"></i>
            <span>User</span>
            </div>
           
           
           
            </div>
        </div>
    );
};

export default FooterMobileNav;