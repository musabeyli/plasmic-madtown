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
    if(showNewsLetterForm) {

    }
    
  );
}
