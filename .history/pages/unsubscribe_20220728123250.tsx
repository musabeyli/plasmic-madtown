import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import PopupModal from "../components/PopupModal";

const unsubscribe = () => {
  return (
    <ChakraProvider> 
  <div>unsubscribe</div>;
  <ChakraProvider></ChakraProvider>
  )
};

export default unsubscribe;
