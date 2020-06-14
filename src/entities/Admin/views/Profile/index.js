import React from "react";
import './profile.scss';
import ProfileHeaders from "./containers/ProfileHeader";
const Profile = props => {
  return (
    <section className="profile card my-10px">
      <ProfileHeaders/>
      <div className="general-info">  
        <div className="card">
          <label class="title">General Info <hr/></label>
            <p>jhondoe@gmail.com</p>
            <p class="list-address">bhaktaur, Nepal</p>
            <p class="list-country">Nepal</p>
        </div>
      </div>
    </section>
  );
};
export default Profile;
