import {
  Box,
  Container,
  Text,
  Wrap,
  WrapItem,
  Input,
  IconButton,
  InputRightElement,
  InputGroup,
  useToast,
  Flex,
} from "@chakra-ui/react";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const PhotoGallery = () => {
  const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
  ] as const;

  return (
    <Wrap px="1rem" spacing={4} justify="center">
      {photos.map((pic) => (
        <WrapItem
          key={pic.id}
          boxShadow="base"
          rounded="20px"
          overflow="hidden"
          bg="white"
          lineHeight="0"
          _hover={{ boxShadow: "dark-lg" }}
        >
          <Link href={`/photos/${pic.id}`}>
            <a>
              <Image
                src={pic.src.portrait}
                height={600}
                width={400}
                alt={pic.url}
              />
            </a>
          </Link>
        </WrapItem>
      ))}
    </Wrap>
  );
};

export default PhotoGallery;
