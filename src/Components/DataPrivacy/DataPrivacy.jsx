import React from 'react';
import { Container } from 'react-bootstrap';
import FooterMobileNav from '../../Shared/FooterMobileNav/FooterMobileNav';
import Appbar from '../../Shared/Navbar/Appbar';

const DataPrivacy = () => {
    return (
        <div>
        <Appbar/>
        
         <Container className='my-5'>
           <div  className='text-start'>
              <h3>Data Privacy Policy</h3> <br /> <br />
              <h4>1. Introduction</h4>
              <p>
              Welcome to Varal Consultancy DMCC.Varal Consultancy DMCC.(“us”, “we”, or “our”) operates habot marketplace (hereinafter referred to as “Service” or “Habot” ). <br /> <br />
              Our Privacy Policy governs your visit to habot website, and explains how we collect, safeguard and disclose information that results from your use of our Service.We use your data to provide and improve Service. By using Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, the terms used in this Privacy Policy have the same meanings as in our Terms and Conditions. Our Terms and Conditions ( “Terms” ) govern all use of our Service and together with the Privacy Policy constitutes your agreement with us ( “agreement” ).
              <hr />
              </p> <br />

              <h4>2. Definitions</h4>
              <h5>2.1 Service</h5>
              <p>Means the habot.io website operated by Varal Consultancy DMCC.</p> <br />

              <h5>2.2 Personal Data</h5>
              <p>
              Means any data relating to an identified natural person, or one who can be identified directly or indirectly by way of linking data, using identifiers such as name, voice, picture, identification number, online identifier, geographic location, or one or more special features that express the physical, psychological, economic, cultural or social identity of such person. It also includes Sensitive Personal Data and Biometric Data. 2.3. USAGE DATA is data collected automatically either generated by the use of Service or from Service infrastructure itself (for example, the duration of a page visit).

              </p>
           </div>
         </Container>

        <FooterMobileNav/>
        </div>
    );
};

export default DataPrivacy;