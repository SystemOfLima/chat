import { Grid, GridProps, InputAdornment, InputBase } from "@mui/material";
import { Send, EmojiEmotions } from "@mui/icons-material";

export const InputSender = ({ ...rest }: GridProps) => {
  return (
    <Grid item position="sticky" bottom={0} paddingY={2} {...rest}>
      <InputBase
        className="inputSender"
        placeholder="Send your message"
        fullWidth
        startAdornment={
          <InputAdornment position="start">
            <EmojiEmotions sx={{ color: "#E1E1E6", cursor: "pointer" }} />
          </InputAdornment>
        }
        endAdornment={
          <InputAdornment position="end">
            <Send sx={{ color: "#E1E1E6", cursor: "pointer" }} />
          </InputAdornment>
        }
        sx={{
          backgroundColor: "#282843",
          padding: "0.875rem 1.5rem",
          borderRadius: "10rem",
          color: "#E1E1E6",
        }}
      />
    </Grid>
  );
};
