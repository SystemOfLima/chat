import { Grid } from "@mui/material";
import "@fontsource/roboto";

type MessageProps = {
  name?: string;
  sender?: boolean;
  body: string;
  createdAt: string;
};

export const Message = ({ name, body, sender, createdAt }: MessageProps) => {
  const transformedStringInDate = new Date(createdAt);
  const creationDate = `${transformedStringInDate.getHours()}:${transformedStringInDate.getMinutes()}`;

  return (
    <Grid
      container
      sx={{
        display: "grid",
        marginTop: "1rem",
        fontFamily: "Roboto, sans-serif",
        fontWeight: 400,
      }}
    >
      <Grid
        item
        xs={12}
        sx={{ color: "#E1E1E6", textAlign: sender ? "end" : "start" }}
      >
        <strong>
          {sender ? "You" : name} - {creationDate}
        </strong>
      </Grid>

      <Grid
        item
        xs={12}
        sx={{
          marginTop: "0.625rem",
          padding: "0.875rem",
          maxWidth: "max-content",
          color: "#E1E1E6",
          borderRadius: sender
            ? "0.5rem 0 0.5rem 0.5rem"
            : "0 0.5rem 0.5rem 0.5rem",
          backgroundColor: sender ? "#07847E" : "#633BBC",
          justifySelf: sender ? "flex-end" : "flex-start",
        }}
      >
        <div>
          <p>{body}</p>
        </div>
      </Grid>
    </Grid>
  );
};
