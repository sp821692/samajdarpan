import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
// Basic Styles (Can be customized further)
const primaryColor = "#29ABE2"; // Example primary color
const secondaryColor = "#8E2DE2"; // Example secondary color
const textColor = "#333";
const lightGray = "#eee";

// Styled Components
const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${lightGray};
  font-family: sans-serif; /* Consistent font */
`;

const LoginForm = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 16px 17px 12px 0px rgba(0, 0, 0, 0.1);
  width: 350px; /* or a percentage for responsiveness */
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: ${textColor};
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const Logo = styled.div`
  width: 50px;
  height: 50px;
  background-color: black;
  color: white;
  font-size: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box; /* Prevents padding from affecting width */
  &:focus {
    border-color: ${primaryColor};
    outline: none;
    box-shadow: 0 0 5px rgba(${primaryColor}, 0.2);
  }
`;

const UnderlinedInput = styled.input`
  width: 100%;
  padding: 8px 0; /* Adjust vertical padding as needed */
  margin-bottom: 15px;
  border: none;
  border-bottom: 1px solid #ddd; /* Only bottom border */
  outline: none; /* Remove default outline */
  box-sizing: border-box;
  font-size: 1rem; /* Adjust font size as needed */
  &:focus {
    border-bottom-color: ${primaryColor}; /* Change border color on focus */
  }
  &::placeholder {
    /* Style placeholder text */
    color: #aaa;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-image: linear-gradient(
    to right,
    ${primaryColor},
    ${secondaryColor}
  );
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease; /* Smooth transition */
  &:hover {
    opacity: 0.9;
  }
`;

const SignUpLink = styled.p`
  text-align: center;
  margin-top: 15px;
  color: ${textColor};
  a {
    color: ${primaryColor};
    text-decoration: none;
  }
`;

const Login = () => {
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login ID:", loginId);
    console.log("Password:", password);
    navigate("/home"); // Navigate to Dashboard after login

    // Add your login logic here
  };

  return (
    <PageContainer>
      <LoginForm>
        <Title>Welcome</Title>
        <UnderlinedInput
          type="email"
          placeholder="Email"
          value={loginId}
          onChange={(e) => setLoginId(e.target.value)}
        />
        <UnderlinedInput
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleLogin}>LOGIN</Button>
      </LoginForm>
    </PageContainer>
  );
};

export default Login;
