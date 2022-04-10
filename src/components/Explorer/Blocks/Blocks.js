import React from "react";
import { data } from "./Blockdata.js";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
} from "@chakra-ui/react";
const Blocks = () => {
  return (
    <>
      <Box padding={4}>
        <Box overflowY="auto" maxHeight="450px" w={[200, 350, 450, 600]}>
          <TableContainer overflowWrap="nowrap">
            <Table variant="striped">
              <Thead>
                <Tr>
                  <Th color="#4287f5">Block</Th>
                  <Th color="#4287f5">Miner</Th>
                  <Th color="#4287f5">Reward</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data.map(({ Block, Miner, Reward }) => (
                  <Tr>
                    <Td>{Block}</Td>
                    <Td>{Miner}</Td>
                    <Td>{Reward}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </>
  );
};

export default Blocks;
