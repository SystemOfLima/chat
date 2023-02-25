import { Grid, GridProps, InputAdornment, Input } from "@mui/material";
import { Send, EmojiEmotions } from "@mui/icons-material";
import { KeyboardEvent, useRef } from "react";
import { useMessages } from "../hooks/useMessages";

export const InputSender = ({ ...rest }: GridProps) => {
  const { methods } = useMessages();
  const textRef = useRef<any>();

  const handleMessageSubmit = {
    enter: (e: KeyboardEvent) => {
      const messageValid = textRef.current.value.trim();

      if (e.code === "Enter" && messageValid !== "") {
        methods?.createMessage({
          name: "Ikidon",
          body: messageValid,
          createdAt: `${new Date()}`,
        });

        textRef.current.value = "";
      }
    },
    click: () => {
      const messageValid = textRef.current.value.trim();

      if (messageValid !== "") {
        methods?.createMessage({
          name: "Ikidon",
          body: messageValid,
          createdAt: `${new Date()}`,
        });

        textRef.current.value = "";
      }
    },
  };

  return (
    <Grid item position="sticky" bottom={0} paddingY={2} {...rest}>
      <Input
        inputRef={textRef}
        placeholder="Send your message"
        onKeyUp={handleMessageSubmit.enter}
        fullWidth
        startAdornment={
          <InputAdornment position="start">
            <EmojiEmotions sx={{ color: "#E1E1E6", cursor: "pointer" }} />
          </InputAdornment>
        }
        endAdornment={
          <InputAdornment position="end">
            <Send
              sx={{ color: "#E1E1E6", cursor: "pointer" }}
              onClick={handleMessageSubmit.click}
            />
          </InputAdornment>
        }
        sx={{
          backgroundColor: "#282843",
          padding: "0.875rem 1.5rem",
          borderRadius: "10rem",
          color: "#E1E1E6",
        }}
        disableUnderline
      />
    </Grid>
  );
};
