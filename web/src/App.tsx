import "@fontsource/roboto";
import { MessageProvider } from "./context/messageContext";
import { Chat } from "./pages/chat";

export const App = () => {
  return (
    <MessageProvider>
      <Chat />
    </MessageProvider>
  );
};
