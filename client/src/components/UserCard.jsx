import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteUser, getUsers } from "../JS/actions/userAction";

const UserCard = ({ user }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch, user]);
  return (
    <div style={{ display: "flex" }}>
      {" "}
      <h2>{user.name} </h2>
      <button onClick={() => dispatch(deleteUser(user._id))}>delete</button>
    </div>
  );
};

export default UserCard;
