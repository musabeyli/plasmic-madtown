import {
  Box,
  Button,
  CloseButton,
  Container,
  Icon,
  Square,
  Stack,
  Text,
  Center,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";
import { FiInfo } from "react-icons/fi";

export const HeadBanner = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Box as="section" pb={{ base: "1", md: "1" }}>
      <Box
        bg="bg-surface"
        boxShadow={useColorModeValue("sm", "sm-dark")}
        width="100%"
      >
        <Center py={{ base: "4", md: "2" }} position="relative" width="100%">
          <CloseButton
            display={{ sm: "none" }}
            position="absolute"
            right="1"
            top="1"
          />
          <Center
            bg="green"
            width="100%"
            // direction={{ base: "column", sm: "row" }}
            justify="center"
            spacing={{ base: "3", md: "2" }}
          >
            <Stack
              width="100%"
              spacing="4"
              bg="blue"
              justify="center"
              direction={{ base: "column", md: "row" }}
              align={{ base: "start", md: "center" }}
            >
              <Stack
                direction={{ base: "column", md: "column" }}
                justify="center"
                spacing={{ base: "0.5", md: "1.5" }}
                pe={{ base: "4", sm: "0", md: "0" }}
              >
                <Text textAlign="center" color="#c5050cd9" fontWeight="bold">
                  Only 500 units are available
                </Text>
                <Text fontWeight="medium">Free shipping across the US!</Text>
              </Stack>
            </Stack>
          </Center>
        </Center>
      </Box>
    </Box>
  );
};
