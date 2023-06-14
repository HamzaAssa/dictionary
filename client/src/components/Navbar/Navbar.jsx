import { StyledNave, NavButtons, NavButton } from "./Navbar.Styled";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <StyledNave>
      <NavButtons>
        <NavButton onClick={() => navigate("/")}>Home</NavButton>
        <NavButton onClick={() => navigate("/search")}>Search</NavButton>
        <NavButton onClick={() => navigate("/addword")}>Add Word</NavButton>
        <NavButton
          prefer="blue"
          onClick={() => navigate("/author/unverifiedwords")}
        >
          Admin
        </NavButton>
      </NavButtons>
    </StyledNave>
  );
};

export default Navbar;
