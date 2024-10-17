// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <div className="group-6">
      <div class="footer-left">
        <div className="contact-us-title">Contact US</div>
        <div class="contact-us-area">
          <div class="contact-us-detail">
            <img className="combine-logo" alt="Vector" src="/position.svg" />
            <div className="combine-text">10 Ettrick, Wisconsin(WI), 54627</div>
          </div>
          <div class="contact-us-detail">
            <img className="combine-logo" alt="Vector" src="/phone.svg" />
            <div className="combine-text">+440 835-5599</div>
          </div>
          <div class="contact-us-detail">
            <img className="combine-logo" alt="Vector" src="/message.svg" />
            <div className="combine-text">mail@thevictorias.co.au</div>
          </div>
        </div>
      </div>
      
      <div class="footer-mid">
        <div class="flex-box">
          <img className="victorias-nameonly" alt="Victorias nameonly" src="/Asset 20@4x.png"/>
        </div>
        
        <div class="social">
          <img className="group-7" alt="Group" src="/group-1000000916.png"/>
        </div>
        
      </div>
      
      <div class="footer-right">
        <div className="working-hours-title">Working Hours</div>
        <div class="working-hours-area">
          <div className="working-hours-detail">
            <div className="day">Mon - Fri</div>
            <div className="time"> 5:00pm - 12:00pm</div>
          </div>
          <div className="working-hours-detail">
            <div className="day">Sat</div>
            <div className="time"> 5:00pm - 12:00pm</div>
          </div>
          <div className="working-hours-detail">
            <div className="day">Sun</div>
            <div className="time"> 5:00pm - 12:00pm</div>
          </div>
        </div>
      </div> 
      
    </div>
  );
};

export default Footer;
