import { Box } from "@mui/material";
import { Message } from "./components/message";

export const App = () => {
  return (
    <Box sx={{ p: "2rem", backgroundColor: "black" }}>
      <Message name="Kira" body="Tive uma ideia incrível para um projeto! 😍" />
      <Message body="Sério? Me conta mais." sender />
    </Box>
  );
};
