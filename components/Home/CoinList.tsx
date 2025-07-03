import React from "react";
import {
  Box,
  Text,
  Image,
  Flex,
  VStack,
  HStack,
  Heading,
} from "@chakra-ui/react";

type Coin = {
  symbol: string;
  name: string;
  price: string;
  change: string;
  volume: string;
  positive: boolean;
};

const coins: Coin[] = [
  { symbol: "fun", name: "FUN", price: "0.006517", change: "+42.48%", volume: "687M", positive: true },
  { symbol: "uni", name: "UNI", price: "6.902", change: "-13.16%", volume: "504M", positive: false },
  { symbol: "sol", name: "SOL", price: "0.2773", change: "-14.47%", volume: "84.4M", positive: false },
  { symbol: "fun", name: "FUN", price: "0.006517", change: "+42.48%", volume: "687M", positive: true },
  { symbol: "uni", name: "UNI", price: "6.902", change: "-13.16%", volume: "504M", positive: false },
  { symbol: "sol", name: "SOL", price: "0.2773", change: "-14.47%", volume: "84.4M", positive: false },
  { symbol: "fun", name: "FUN", price: "0.006517", change: "+42.48%", volume: "687M", positive: true },
  { symbol: "uni", name: "UNI", price: "6.902", change: "-13.16%", volume: "504M", positive: false },
  { symbol: "sol", name: "SOL", price: "0.2773", change: "-14.47%", volume: "84.4M", positive: false },
  { symbol: "fun", name: "FUN", price: "0.006517", change: "+42.48%", volume: "687M", positive: true },
  { symbol: "uni", name: "UNI", price: "6.902", change: "-13.16%", volume: "504M", positive: false },
  { symbol: "fun", name: "FUN", price: "0.006517", change: "+42.48%", volume: "687M", positive: true },
  { symbol: "uni", name: "UNI", price: "6.902", change: "-13.16%", volume: "504M", positive: false },
  { symbol: "sol", name: "SOL", price: "0.2773", change: "-14.47%", volume: "84.4M", positive: false },
  { symbol: "fun", name: "FUN", price: "0.006517", change: "+42.48%", volume: "687M", positive: true },
  { symbol: "uni", name: "UNI", price: "6.902", change: "-13.16%", volume: "504M", positive: false },
  { symbol: "sol", name: "SOL", price: "0.2773", change: "-14.47%", volume: "84.4M", positive: false },
  { symbol: "fun", name: "FUN", price: "0.006517", change: "+42.48%", volume: "687M", positive: true },
  { symbol: "uni", name: "UNI", price: "6.902", change: "-13.16%", volume: "504M", positive: false },
  { symbol: "fun", name: "FUN", price: "0.006517", change: "+42.48%", volume: "687M", positive: true },
  { symbol: "uni", name: "UNI", price: "6.902", change: "-13.16%", volume: "504M", positive: false },
  { symbol: "sol", name: "SOL", price: "0.2773", change: "-14.47%", volume: "84.4M", positive: false },
  { symbol: "fun", name: "FUN", price: "0.006517", change: "+42.48%", volume: "687M", positive: true },
  { symbol: "uni", name: "UNI", price: "6.902", change: "-13.16%", volume: "504M", positive: false },
  { symbol: "sol", name: "SOL", price: "0.2773", change: "-14.47%", volume: "84.4M", positive: false },
  { symbol: "fun", name: "FUN", price: "0.006517", change: "+42.48%", volume: "687M", positive: true },
  { symbol: "uni", name: "UNI", price: "6.902", change: "-13.16%", volume: "504M", positive: false },
  { symbol: "sol", name: "SOL", price: "0.2773", change: "-14.47%", volume: "84.4M", positive: false },
  { symbol: "doge", name: "DOGE", price: "0.0701", change: "+8.12%", volume: "900M", positive: true }
  // More coins can be added
];

export default function CoinList() {
  return (
    <Box mt={6} maxH="100%" overflowY="auto" mb="100px">
      <Heading fontSize={"27px"} size="md" mb={10} color="white">
        🔥 Top Movers
      </Heading>

      {coins.map((coin, i) => (
        <Flex
          key={i}
          justify="space-between"
          align="center"
          p={6}
          height={"200px"}
          mb={6}
          bg="#1a1a1a"
          fontSize={"40px"}
          borderRadius="30px"
        >
          {/* Left Info */}
          <HStack spacing={3}  gap={10}>
            <Image
              boxSize="60px"
              borderRadius="full"
              bg="white"
              src={`https://cryptoicon-api.pages.dev/api/icon/${coin.symbol}`}
              alt={coin.name}
              onError={(e) =>
                (e.currentTarget.src = "https://via.placeholder.com/24")
              }
            />
            <VStack align="start" spacing={0}>
              <Text fontWeight="bold" color="white">
                {coin.name} / USDT
              </Text>
              <Text fontSize="md" color="gray.400">
                Vol {coin.volume}
              </Text>
            </VStack>
          </HStack>

          {/* Right Stats */}
          <VStack align="end" spacing={0}>
            <Text fontSize="xx-large" color="gray.300">
              ₹{coin.price}
            </Text>
            <Text
              fontSize="xx-large"
              px={2}
              py={0.5}
              borderRadius="5px"
              color="white"
              bg={coin.positive ? "#27a774" : "#ff5252"}
            >
              {coin.change}
            </Text>
          </VStack>
        </Flex>
      ))}
    </Box>
  );
}
