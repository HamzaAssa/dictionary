import {
  StyledDiv,
  StyledH3,
  StyledInput,
  StyledMessage,
  Styledpara,
  StyledSubmit,
} from "./Login.Styled";

import { login } from "../../api";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();
  const [message, setMessage] = useState("");
  let authorName = useRef();
  let authorCode = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(authorName.current.value);
    const result = await login({
      name: authorName.current.value,
      code: authorCode.current.value,
    });
    if (result?.auth) {
      localStorage.setItem(
        "balochi-dectioanry-auth",
        JSON.stringify(result.auth)
      );
      navigate("/author/unverifiedwords");
    } else {
      setMessage(result.message);
    }
  };
  return (
    <StyledDiv>
      <StyledH3>Enter Your Author credentials</StyledH3>
      <form onSubmit={handleSubmit}>
        <div>
          <StyledInput
            ref={authorName}
            type="text"
            name="name"
            placeholder="Enter your name"
          />
          <StyledInput
            ref={authorCode}
            type="text"
            name="code"
            placeholder="Enter your code"
          />
          <StyledSubmit type="submit" value="Submit" />
          <Styledpara>This section is only for authors</Styledpara>
          <StyledMessage>{message}</StyledMessage>
        </div>
      </form>
    </StyledDiv>
  );
};

export default Login;
