import { StyledCTA } from "./Cta.Styled";

const CtaBtn = ({ id, handleChange, type, text, color }) => {
  return (
    <StyledCTA onClick={handleChange} size={type} color={color}>
      {text}
    </StyledCTA>
  );
};

export default CtaBtn;
