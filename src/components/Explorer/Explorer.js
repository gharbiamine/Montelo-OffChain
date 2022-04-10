import { Box, Wrap, WrapItem, Stack } from "@chakra-ui/react";
import React from "react";
import Blocks from "./blocks/Blocks";
import Transactions from "./transactions/Transactions";
import styles from "./explorer.module.css";

const Explorer = () => {
  return (
    <>
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing="5vw"
        justifyContent="center"
      >
        <Wrap align="center" justify="center">
          <WrapItem>
            <Blocks />
          </WrapItem>
          <WrapItem>
            <Transactions />
          </WrapItem>
        </Wrap>
      </Stack>
    </>
  );
};

export default Explorer;
