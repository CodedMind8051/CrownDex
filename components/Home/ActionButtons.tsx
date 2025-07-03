import React from "react";
import { Box, Button, Flex, Stack } from "@chakra-ui/react";

export default function ActionButtons() {
  return (
    <Box p={4}>
      <Flex flexWrap="wrap" gap={2}>
        <Button  fontSize={"x-large"}  width={200} height={70} bg="#1a1a1a" color="white" borderRadius="20px">
          ⚡ Buy
        </Button>
        <Button fontSize={"x-large"}  width={200} height={70} bg="#1a1a1a" color="white" borderRadius="5px">
          ⏱️ Earn
        </Button>
        <Button  fontSize={"x-large"}  width={200} height={70} bg="#1a1a1a" color="white" borderRadius="5px">
          📅 SIP
        </Button>
        <Button fontSize={"x-large"}  width={200} height={70} bg="#1a1a1a" color="white" borderRadius="5px">
          💰 Rewards
        </Button>
        <Button fontSize={"x-large"}  width={200} height={70} bg="#1a1a1a" color="white" borderRadius="5px">
          ⋯ More
        </Button>
      </Flex>

      <Stack mt={4} spacing={2}>
        <Button fontSize={"xx-large"}   height={75} bg="#1a1a1a" color="white" borderRadius="5px">
          Add INR ₹0
        </Button>
        <Button fontSize={"xx-large"}   height={75} bg="#1a1a1a" color="white" borderRadius="5px">
          Deposit Crypto
        </Button>
      </Stack>
    </Box>
  );
}
