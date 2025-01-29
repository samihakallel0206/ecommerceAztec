import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUsers } from "../JS/actions/userAction";
import ListUsers from "../components/ListUsers";

const DashBoard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div className="page">
      <img
        src="https://c8.alamy.com/compfr/r5yaeg/pignon-et-le-mot-admin-3d-illustration-r5yaeg.jpg"
        alt="board"
        width="150px"
        height="150px"
      />
      <ListUsers />
    </div>
  );
};

export default DashBoard;
