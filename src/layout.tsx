import React from 'react'
import { Outlet } from 'react-router-dom';
import BottomNav from "../components/Globle/BottomNav";
import { Box, Flex, Spacer } from "@chakra-ui/react";

function Layout() {
    return (
        <>
            <main><Outlet /></main>
          <Box
                as="footer"
                position="fixed"
                bottom="0"
                left="0"
                w="full"
                bg="#121212"     // slightly lighter dark for footer
                boxShadow="0 -2px 10px rgba(0, 0, 0, 0.7)"
                py={3}
                zIndex={100}
              >
                <BottomNav />
              </Box>
        </>

    )
}

export default Layout