import { Grid } from "@mui/material";
import "./style.sass";

type MessageProps = {
  name?: string;
  body: string;
  sender?: boolean;
};

export const Message = ({ name, body, sender }: MessageProps) => {
  return (
    <Grid container className={`message ${sender && "sender"}`}>
      <Grid item xs={12}>
        <strong className="message_title">
          {sender ? "You" : name} - 11:30
        </strong>
      </Grid>

      <Grid item xs={12}>
        <div className="message_body">
          <p>{body}</p>
        </div>
      </Grid>
    </Grid>
  );
};
