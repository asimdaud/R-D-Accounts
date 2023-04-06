import React, { Fragment } from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const borderColor = "#2222";
const styles = StyleSheet.create({
  table_container: {
    flexDirection: "row",
    alignItems: "center",
    textAlign: "center",
    fontFamily: "Times-Roman",
  },
  table_row: {
    width: "50%",
    textAlign: "center",
  },
});

const AdditionalOfficers = ({ company, officers }) => {
  const rows = officers.map((item) => (
    <View style={styles.table_container}>
      <Text style={styles.table_row}>{item.name}</Text>
      <Text style={styles.table_row}>{item.position?item.position:"N/A"}</Text>
      <Text style={styles.table_row}>{item.dateJoined?item.dateJoined:"N/A"}</Text>
    </View>
  ));
  return <Fragment>{rows}</Fragment>;
};

export default AdditionalOfficers;
