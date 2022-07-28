import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import PopupModal from "../components/PopupModal";
import UnsubscribeForm from "../components/UnsubscribeComponent";

const unsubscribe = () => {
  return (
    <ChakraProvider>
      <UnsubscribeForm />
    </ChakraProvider>
  );
};

export default unsubscribe;
