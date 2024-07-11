import React from "react";
import styled from "styled-components";
import { deleteUsers } from "../store/slices/UserSlice";
import { useDispatch } from "react-redux";
const DeleteAllUser = () => {
  const dispatch = useDispatch();
  const deleteUsersData = () => {
    dispatch(deleteUsers());
  };
  return (
    <Wrapper>
      <button
        className="btn clear-btn"
        onClick={() => {
          deleteUsers(deleteUsersData());
        }}
      >
       Clear User
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .clear-btn {
    text-transform: capitalize;
    background-color: #db338a;
    margin-top: 2rem;
  }
`;
export default DeleteAllUser;
