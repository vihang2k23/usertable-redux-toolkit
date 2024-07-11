import styled from "styled-components";
import { useSelector } from "react-redux";
import { MdDeleteOutline } from "react-icons/md";
import { removeUser } from "../store/slices/UserSlice";
import { useDispatch } from "react-redux";
const DisplayUsers = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.users;
  });
  const deleteUser = (payload) => {
    dispatch(removeUser(payload));
    console.log(" payload: ", payload);
  };
  console.log("data: ", data);
  return (
    <Wrapper>
      <h2>
        {data.map((user, id) => {
          return (
            <li key={id}>
              <span>{user}</span>
              <span>
                <MdDeleteOutline
                  onClick={() => {
                    deleteUser(user);
                  }}
                />
              </span>
            </li>
          );
        })}
      </h2>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  li {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 1px solid #eee;
    &:firts-child {
      border-top: 1px solid #eee;
    }
  }
`;

export default DisplayUsers;
