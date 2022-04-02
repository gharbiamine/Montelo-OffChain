import React from "react";
import { data } from "./Txdata.js";
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
const Transactions = () => {
  return (
    <>
      <Box padding={4}>
        <Box overflowY="auto" maxHeight="350px" w={[300, 400, 600]}>
          <TableContainer overflowWrap="nowrap">
            <Table variant="striped">
              <Thead>
                <Tr>
                  <Th color="#4287f5">Transaction</Th>
                  <Th color="#4287f5">From</Th>
                  <Th color="#4287f5">To</Th>
                  <Th color="#4287f5">Amount</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data.map(({ Transaction, From, To, Amount }) => (
                  <Tr>
                    <Td>{Transaction}</Td>
                    <Td isNumeric>{From}</Td>
                    <Td isNumeric>{To}</Td>
                    <Td>{Amount}</Td>
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

export default Transactions;
