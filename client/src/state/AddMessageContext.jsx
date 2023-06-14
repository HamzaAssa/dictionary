import { createContext, useState } from "react";

export const AddMessageContext = createContext();

export const MessageProvider = (props) => {
  const [message, setMessage] = useState("");
  return (
    <AddMessageContext.Provider value={[message, setMessage]}>
      {props.children}
    </AddMessageContext.Provider>
  );
};
