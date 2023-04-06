import React from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = '#2222'
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderBottomColor: '#2222',
        backgroundColor: '#2222',
        borderBottomWidth: 1,
        alignItems: 'center',
        height: 24,
        textAlign: 'center',
        fontStyle: 'bold',
        flexGrow: 1,
        fontFamily: "Times-Roman",
    },
    description: {
        width: '45%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
    },
    qty: {
        width: '15%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
    },
    rate: {
        width: '15%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
    },
    amount: {
        width: '25%'
    },
  });

  const ReportTableHeader = () => (
    <View style={styles.container}>
        <Text style={styles.description}>Expenses</Text>
        <Text style={styles.qty}>Amount</Text>
        <Text style={styles.rate}>Percentage</Text>
        <Text style={styles.amount}>Claim</Text>
    </View>
  );
  
  export default ReportTableHeader