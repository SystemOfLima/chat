import { Grid } from "@mui/material";
import { InputSender } from "../components/input-sender";
import { Message } from "../components/message";
import { messagesMock } from "../mock/messages";

export const Chat = () => {
  return (
    <Grid
      container
      sx={{
        padding: "2rem",
        backgroundColor: "#1A1924",
      }}
    >
      <Grid item xs={12} height={`calc(100vh - 10rem)`}>
        <>
          {messagesMock.map(({ name, body, createdAt }) => (
            <Message
              name={name}
              body={body}
              createdAt={createdAt}
              sender={name === "Ikidon" ? true : false}
              key={`message/${Math.random()}`}
            />
          ))}
        </>
      </Grid>

      <InputSender xs={12} sx={{ color: "green" }} />
    </Grid>
  );
};
