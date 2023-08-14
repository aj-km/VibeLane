// import { useEffect, useState } from "react";
import styled from "styled-components";
// import { logout } from "../redux/apiCalls";
// import { mobile } from "../responsive";
// import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// import { logoutStart, logoutSuccess, logoutFailure} from "../redux/userRedux";

const Button = styled.button`
  width: 100%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
  font-size: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;


// const Logout = () => {
//     const dispatch = useDispatch();
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
  
    // useEffect(() => {
    //   dispatch({ type: "CLEAR_USER_DATA" });
    //   setUsername("");
    //   setPassword("");
    // }, []);
  
    // const handleLogoutClick = (e) => {
    //   e.preventDefault();
    //   logout(dispatch);
    // };

    const Logout = () => {
      const handleLogout = () => {
        localStorage.removeItem("persist:root");
        window.location.href = "/login"; // redirect to login page
      };
    
      return (
        <>
          <h1>LOGOUT NOW</h1>
    
          <Form>
            <Link to="/login">
            <Button  onClick={handleLogout}>LOGOUT</Button>
            </Link>
          </Form>
        </>
      );
    };
    
    
  

export default Logout;