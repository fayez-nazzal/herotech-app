/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const buttonStyle = css({
  backgroundColor: "#fff",
  border: "1px solid #000",
  borderRadius: "5px",
  color: "#000",
  fontSize: "1.2rem",
  fontWeight: "bold",
  padding: "0.5rem 1rem",
  textAlign: "center",
  textDecoration: "none",
  ":hover": {
    backgroundColor: "#000",
    color: "#fff",
  },
});

const EmotionButton = () => <button css={buttonStyle}>Emotion Button</button>;

export default EmotionButton;
