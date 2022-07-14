import { FormEvent, ChangeEvent, useState } from "react";
import {
  Stack,
  FormControl,
  Input,
  Button,
  useColorModeValue,
  Heading,
  Text,
  Container,
  Flex,
  CloseButton,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

export default function Simple() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [state, setState] = useState<"initial" | "submitting" | "success">(
    "initial"
  );
  const [showNewsLetterForm, setShowNewsLetterForm] = useState(true);
  const [error, setError] = useState(false);

  const fetchBooks = async () => {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ email: email, name: name }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <div>
    {showNewsLetterForm  &&
    <Flex position="fixed" bottom="0" right="0" py={12}>
      <Container
        maxW={"lg"}
        bg={useColorModeValue("white", "whiteAlpha.100")}
        boxShadow={"xl"}
        rounded={"lg"}
        p={6}
      >
        <CloseButton
          as="button"
          size="sm"
          onClick={() => setShowNewsLetterForm(false)}
        />

        <Heading
          as={"h2"}
          fontSize={{ base: "xl", sm: "2xl" }}
          textAlign={"center"}
          mb={5}
        >
          Subscribe to our Newsletter
        </Heading>
        <Stack
          direction={{ base: "column", md: "row" }}
          as={"form"}
          spacing={"12px"}
          onSubmit={(e: FormEvent) => {
            e.preventDefault();
            setError(false);
            setState("submitting");
            console.log(email, " email is this");
            console.log(name, " this is name");
            console.log(showNewsLetterForm, " this is to show");
            fetchBooks();

            // remove this code and implement your submit logic right here
            setTimeout(() => {
              if (email === "fail@example.com") {
                setError(true);
                setState("initial");
                return;
              }

              setState("success");
            }, 1000);
          }}
        >
          <FormControl>
            <Input
              variant={"solid"}
              borderWidth={1}
              color={"gray.800"}
              _placeholder={{
                color: "gray.400",
              }}
              borderColor={useColorModeValue("gray.300", "gray.700")}
              id={"name"}
              required
              placeholder={"Your Name"}
              aria-label={"Your Name"}
              value={name}
              disabled={state !== "initial"}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setName(e.target.value);
              }}
            />
            <Input
              mt="10px"
              variant={"solid"}
              borderWidth={1}
              color={"gray.800"}
              _placeholder={{
                color: "gray.400",
              }}
              borderColor={useColorModeValue("gray.300", "gray.700")}
              id={"email"}
              type={"email"}
              required
              placeholder={"Your Email"}
              aria-label={"Your Email"}
              value={email}
              disabled={state !== "initial"}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setEmail(e.target.value);
              }}
            />
            <Button
              mt="10px"
              colorScheme={state === "success" ? "green" : "blue"}
              isLoading={state === "submitting"}
              w="100%"
              type={state === "success" ? "button" : "submit"}
            >
              {state === "success" ? <CheckIcon /> : "Submit"}
            </Button>
          </FormControl>
        </Stack>
        <Text
          mt={2}
          textAlign={"center"}
          color={error ? "red.500" : "gray.500"}
        >
          {error
            ? "Oh no an error occured! 😢 Please try again later."
            : "You won't receive any spam! ✌️"}
        </Text>
      </Container>
    </Flex>
    </div>
          }
  );
}
