import React from 'react';
const ProfileHeaders = (props) => {
  return (
    <div className="profile-header">
        <div className="profile-cover">
          <img
            src="https://thealphaurbaneproject.com/assets/web/assets/images/about-banner.jpg"
            alt=""
          />
        </div>
        <div className="profile-detail d-flex justify-between align-center">
          <div className="profile-avatar d-flex justify-between">
            <img
              src="https://investmentnovel.com/wp-content/uploads/2018/05/17241-200.png"
              alt=""
            />
            <div className="general-info d-flex flex-column">
              <div class="info-name-edit d-flex align-center"> <span>John Doe</span><i className="material-icons hidden-icon">edit</i> </div> 
              <span > Senior Devloper </span>
            </div>
          </div>
          <div className="social-info  d-flex justify-between">
            <i class="fa fa-facebook" aria-hidden="true"></i>
            <i class="fa fa-instagram" aria-hidden="true"></i>
            <i class="fa fa-linkedin" aria-hidden="true"></i>
            <i class="fa fa-github" aria-hidden="true"></i>
          </div>
        </div>
      </div>
  )
}
export default ProfileHeaders;