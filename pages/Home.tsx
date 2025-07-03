import React from "react";
import { useEffect } from "react";
import { Box, Flex, Spacer } from "@chakra-ui/react";

import Header from "../components/Home/Header";
import Summary from "../components/Home/Summary";
import ActionButtons from "../components/Home/ActionButtons";
import CoinList from "../components/Home/CoinList";
import BottomNav from "../components/Globle/BottomNav";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function Home() {
    useEffect(() => {
      const viewport = document.getElementById("viewport");
      if (viewport) {
        viewport.setAttribute(
          "content",
          "width=1024, user-scalable=no"
        );
      }
    }, []);

  return (
    <Flex
      direction="column"
      minH="100vh"
      bg="#0a0a0a"      // solid dark background
      color="white"     // white text
      fontFamily="Arial, sans-serif"
    >
      <Box
        maxW="1280px"
        w="full"
        mx="auto"
        p={{ base: 4, md: 8 }}
        flex="1"
        display="flex"
        flexDirection="column"
        gap={6}
      >
        <Header />
        <Summary />
        <ActionButtons />
        <CoinList />
        <Spacer />
      </Box>

      {/* Fixed Bottom Nav with shadow */}

    </Flex>
  );
}

export default Home;
