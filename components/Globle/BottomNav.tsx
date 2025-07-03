import React from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function BottomNav() {
  const navItems = [
    { label: "Home", icon: "🏠", path: "/" },
    { label: "Invest", icon: "📈", path: "/invest" },
    { label: "Futures", icon: "💹", path: "/futures" },
    { label: "Portfolio", icon: "📁", path: "/portfolio" },
  ];

  return (
    <Flex
      position="fixed"
      bottom="0"
      left="0"
      width="100%"
      bg="#111"
      gap={2}
      borderTop="1px solid #333"
      justify="space-around"
      py={{ base: 2, md: 3 }}
      px={{ base: 1, md: 3 }}
      borderRadius="10px 10px 0 0"
      zIndex="1000"
    >
      {navItems.map((item, idx) => (
        <Link key={idx} to={item.path} style={{ flex: 1 }}>
          <Button
            variant="ghost"
            color="white"
            fontSize={{ base: "lg", md: "xl" }}
            height={{ base: "50px", md: "60px" }}
            width="100%"
            _hover={{ bg: "rgba(207, 218, 223, 0.2)" }}
          >
            <Flex
              direction={{ base: "row", md: "column" }}
              align="center"
              justify="center"
              
              marginTop={3}
              width="100%"
            >
              <Box as="span" fontSize={{ base: "xl", md: "2xl" }}>
                {item.icon}
              </Box>
              <Text fontSize={{ base: "xs", md: "sm" }} whiteSpace="nowrap">
                {item.label}
              </Text>
            </Flex>
          </Button>
        </Link>
      ))}
    </Flex>
  );
}
