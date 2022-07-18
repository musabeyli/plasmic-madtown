import {
  Box,
  Button,
  CloseButton,
  Container,
  Icon,
  Square,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import * as React from "react";
import { FiInfo } from "react-icons/fi";

export const HeadBanner = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Box as="section" pb={{ base: "1", md: "1" }}>
      <Box bg="bg-surface" boxShadow={useColorModeValue("sm", "sm-dark")}>
        <Container py={{ base: "4", md: "2" }} position="relative">
          <CloseButton
            display={{ sm: "none" }}
            position="absolute"
            right="1"
            top="1"
          />
          <Stack
            direction={{ base: "column", sm: "row" }}
            justify="center"
            spacing={{ base: "3", md: "2" }}
          >
            <Stack
              spacing="4"
              justify="center"
              direction={{ base: "column", md: "row" }}
              align={{ base: "start", md: "center" }}
            >
              {!isMobile && (
                <Square size="12" bg="bg-subtle" borderRadius="md">
                  <Icon as={FiInfo} boxSize="6" />
                </Square>
              )}
              {/* <VStack> */}
              <Stack
                direction={{ base: "column", md: "column" }}
                justify="center"
                spacing={{ base: "0.5", md: "1.5" }}
                pe={{ base: "4", sm: "0", md: "0" }}
              >
                <Text fontWeight="medium">Only 500 units are available</Text>
                {/* <Text color="muted">Read our press release</Text> */}
              </Stack>
            </Stack>
              <Stack
                direction={{ base: "column", sm: "row" }}
                spacing={{ base: "3", sm: "2" }}
                align={{ base: "stretch", sm: "center" }}
              >
                <Button variant="primary" width="full">
                  Free shipping
                </Button>
                <CloseButton display={{ base: "none", sm: "inline-flex" }} />
              </Stack>
            </VStack>
            {/* </VStack> */}
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};
