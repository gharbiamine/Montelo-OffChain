import { Box, Flex, HStack, Spacer, Stack } from "@chakra-ui/react";
import React from "react";
import Blocks from "./Blocks/Blocks";
import Transactions from "./Transactions/Transactions";
import styles from "./explorer.module.css";

const Explorer = () => {
  return (
    <>
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing="20px"
        justifyContent="center"
      >
        <Box>
          <Blocks />
        </Box>
        <Spacer />
        <Box>
          <Transactions />
        </Box>
      </Stack>
    </>
  );
};

export default Explorer;
