import {
  Box,
  Button,
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
          <Center
            width="100%"
            // direction={{ base: "column", sm: "row" }}
            // spacing={{ base: "3", md: "2" }}
          >
            <Center width="100%">
              <Stack
                direction={{ base: "column", md: "column" }}
                justify="center"
                spacing={{ base: "0.5", md: "1.5" }}
                pe={{ base: "4", sm: "0", md: "0" }}
              >
                <Text textAlign="center" color="#c5050cd9" fontWeight="bold">
                  Limited quantity available
                </Text>
                <Text fontWeight="medium">Free shipping across the US!</Text>
              </Stack>
            </Center>
          </Center>
        </Center>
      </Box>
    </Box>
  );
};
