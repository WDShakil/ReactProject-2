import PropTypes from "prop-types";

import img from "../assets/profile.jpg";
function User(props) {
  const { name, email, profession } = props.sendData;
  return (
    <div className="userProfile">
      <button className="followBtn">Follow</button>
      <div className="profile">
        <img src={img} alt="react logo" />
      </div>
      <h1 className="profileName">{name}</h1>
      <h3 className="userMail">{email}</h3>
      <h4 className="userPro">{profession}</h4>
      <h6 className="userFollower">251M Follower</h6>
      <button className="messagebtn">Message</button>
    </div>
  );
}

User.propTypes = {
  sendData: PropTypes.object.isRequired, // Corrected to object
};

export default User;
