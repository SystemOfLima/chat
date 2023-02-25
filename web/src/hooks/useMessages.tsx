import { useContext } from "react";
import { MessageContext } from "../context/messageContext";

export const useMessages = () => useContext(MessageContext);
