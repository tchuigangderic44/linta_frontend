import React from "react";
import { Text } from "@mantine/core";
import TableOrder from "../../components/TableOrder.component";
function OrderHistory() {
  return (
    <>
      <Text tt={"uppercase"} mb={"md"}>
        Order History
      </Text>
      <TableOrder />
    </>
  );
}

export default OrderHistory;
