import styled from "@emotion/styled";

export const RootStyle = styled("div")(({ theme }) => ({
  display: "flex",
  width: "100%",
  height: "100vh",
  transition: "margin-left 0.3s ease",
  alignItems: "center",
  justifyContent: "center",
  background: "#e9ecef",
  fontFamily: "'Poppins', sans-serif",
}));
