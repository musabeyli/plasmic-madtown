import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import PopupModal from "../components/PopupModal";

const unsubscribe = () => {
  return (
    <ChakraProvider>
      <PopupModal />
    </ChakraProvider>
  );
};

export default unsubscribe;
