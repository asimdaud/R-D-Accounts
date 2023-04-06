import React from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = '#2222'
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        borderBottomColor: '#2222',
        borderBottomWidth: 1,
        alignItems: 'center',
        height: 24,
        fontSize: 12,
        fontStyle: 'bold',
        fontFamily: "Times-Roman",
    },
    description: {
        width: '75%',
        textAlign: 'right',
        borderRightColor: borderColor,
        borderRightWidth: 1,
        paddingRight: 8,
    },
    total: {
        width: '25%',
        textAlign: 'right',
        paddingRight: 8,
    },
  });


const ReportTableFooter = ({items}) => {
    const total = items.map(item => (item.amount * (item.percentage/100)))
        .reduce((accumulator, currentValue) => accumulator + currentValue , 0)

    return(    
        <View style={styles.row}>
            <Text style={styles.description}>TOTAL</Text>
            <Text style={styles.total}>{ Number.parseFloat(total).toFixed(2)}</Text>
        </View>
    )
};
  
  export default ReportTableFooter