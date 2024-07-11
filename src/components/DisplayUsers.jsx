import styled from "styled-components";
import {useSelector} from "react-redux"
const DisplayUsers = () =>{

    const data = useSelector((state)=>{
        return state.users
        })
    console.log('data: ', data);
    return <Wrapper>
        <h1>{data.map((e,id)=>{
            return <li  key={id}>{e}</li>
        })}</h1>
    </Wrapper>
}

const Wrapper = styled.section`
li{
    width: 100%;
    display: flex;
    align-items:center;
    justify-content : space-between;
    padding:1rem;
    border-bottom:1px solid #eee;
    &:firts-child{
        border-top: 1px solid #eee
    }

}
`;

export default DisplayUsers