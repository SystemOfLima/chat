import { PropsWithChildren, useEffect, useRef, useState } from "react";
import { createContext } from "react";
import { messagesMock } from "../mock/messages";
import { MessageType } from "../types/message";

export const MessageContext = createContext<MessageContextValues<MessageType>>(
  {}
);

export const MessageProvider = ({ children }: PropsWithChildren) => {
  const [messages, setMessages] = useState<MessageType[]>([]);

  const createMessage = async ({ name, body, createdAt }: MessageType) => {
    const message = {
      name,
      body,
      createdAt,
    } as MessageType;

    setMessages([...messages, message]);
  };

  const getAllMessages = async () => {
    setMessages(messagesMock);
  };

  const values: MessageContextValues<MessageType> = {
    variables: {
      states: {
        messages,
      },
      refs: {
        // messageInput,
      },
    },
    methods: {
      getAllMessages,
      createMessage,
    },
  };

  useEffect(() => {
    getAllMessages();
  }, []);

  return (
    <MessageContext.Provider value={values}>{children}</MessageContext.Provider>
  );
};

interface MessageContextValues<T> {
  variables?: {
    states?: {
      messages: T[];
    };
    refs?: {
      // messageInput?: React.MutableRefObject<T | undefined>;
    };
  };
  methods?: {
    createMessage: (props: T) => Promise<void>;
    getAllMessages: () => Promise<void>;
  };
}
