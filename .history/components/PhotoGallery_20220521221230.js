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

import React from "react";
import Link from "next/link";

const PhotoGallery = () => {
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
