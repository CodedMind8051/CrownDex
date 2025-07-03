import React from "react";
import {
  Box,
  Flex,
  Input,
  Button,
  Icon,
  useBreakpointValue,
  Stack,
  Text,
} from "@chakra-ui/react";
import { MdCardGiftcard, MdAccountCircle } from "react-icons/md";

export default function Header() {
  const buttonSize = useBreakpointValue({ base: "sm", md: "md" });

  return (
    <Box
      bg="#0e0e10"
      p={5}
      borderBottom="1px solid #1f1f1f"
      boxShadow="0 4px 12px rgba(0, 0, 0, 0.4)"
      borderBottomRadius="16px"
    >
      {/* Top Bar */}
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="center"
        gap={4}
        p={4}
        bgGradient="linear(to-r, #1c1c1e, #29292c)"
        borderRadius="14px"
        boxShadow="0 2px 6px rgba(0, 0, 0, 0.3)"
        mb={4}
        flexWrap="wrap"
      >
        {/* Profile Icon */}
        <Icon as={MdAccountCircle} fontSize="60px" color="white" />

        {/* Exchange Toggle */}
        <Stack
          direction={{ base: "column", sm: "row" }}
          spacing={4}
          flex="1"
          justify="center"
          gap={10}
        >
          <Button fontSize={"27px"} height={50} colorScheme="teal" size={buttonSize} width={{ base: "100%", sm: "auto" }}>
            Exchange
          </Button>
          <Button  height={50}  fontSize={"27px"} colorScheme="teal" size={buttonSize} width={{ base: "100%", sm: "auto" }}>
            Web 3
          </Button>
        </Stack>

        {/* Gift Icon */}
        <Icon as={MdCardGiftcard} fontSize="60px" color="white" />
      </Flex>

      {/* Search Bar */}
      <Input
        placeholder="Search 500+ coins 🔥"
        size="xx-large"
        fontSize="27px"
        color="white"
        bg="#1f1f22"
        padding={5}
        border="none"
        borderRadius="18px"
        _focus={{
          bg: "#232326",
          boxShadow: "0 0 6px #00ffa1",
        }}
      />
    </Box>
  );
}
