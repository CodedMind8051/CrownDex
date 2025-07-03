import React from "react";
import { Box, Text } from "@chakra-ui/react";

export default function Summary() {
  return (
    <Box my={6}>
      <Text   fontWeight="bold" fontSize={{ base: "lg", md: "xxx-large" }}>
        Today's Coins PNL ▲ ₹15.11 (0.69%)
      </Text>
    </Box>
  );
}
