import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state.authReducer.user);
  // console.log(user);
  return (
    <div className="page">
      <h3>{user.name && `Hello ${user.name} `}</h3>
      <img
        src="https://images.pexels.com/photos/30183849/pexels-photo-30183849/free-photo-of-interieur-minimaliste-avec-vase-noir-et-mur-texture.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        alt="profile"
        width="40%"
        height="40%"
      />
    </div>
  );
};

export default Profile;
