import { Flex } from "@chakra-ui/layout";
import React from "react";

export const Container: React.FC = ({ children }) => {
  return (
    <Flex minH="100vh" w="full" bg="gray.800">
      {children}
    </Flex>
  );
};
