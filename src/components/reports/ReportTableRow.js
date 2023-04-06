import React, {Fragment} from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = '#2222'
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        borderBottomColor: '#2222',
        borderBottomWidth: 1,
        alignItems: 'center',
        height: 24,
        fontStyle: 'bold',
        fontFamily: "Times-Roman",
    },
    expense: {
        width: '45%',
        textAlign: 'left',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        paddingLeft: 8,
    },
    amount: {
        width: '15%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        textAlign: 'right',
        paddingRight: 8,
    },
    percentage: {
        width: '15%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        textAlign: 'right',
        paddingRight: 8,
    },
    claim: {
        width: '25%',
        textAlign: 'right',
        paddingRight: 8,
    },
  });


const ReportTableRow = ({items}) => {
    const rows = items.map( item => 
        <View style={styles.row} key={(item.expense+item.amount).toString()}>
            <Text style={styles.expense}>{item.expense}</Text>
            <Text style={styles.amount}>{item.amount}</Text>
            <Text style={styles.percentage}>{item.percentage} %</Text>
            <Text style={styles.claim}>{(item.amount * (item.percentage/100)).toFixed(2)}</Text>
        </View>
    )
    return (<Fragment>{rows}</Fragment> )
};
  
  export default ReportTableRow