import React from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    headerContainer: {
        marginTop: 400,
        fontFamily: "Times-Roman",
    },
    billTo: {
        // marginTop: 450,
        paddingBottom: 3,
        // fontFamily: 'Helvetica-Oblique',
        fontStyle: 'bold',
    },
    start: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    end: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    label: {
        paddingBottom: 3,
        // fontFamily: 'Helvetica-Oblique',
        fontStyle: 'bold',
        // width: 60
    }
  });


  const Footer = ({report}) => (
    <View style={styles.headerContainer}>
  
        <Text style={styles.billTo}>Prepared By:</Text>
        <Text>{report.editor}</Text>
        <Text>{report.address}</Text>
        <Text>Tel: {report.phone}</Text>
        <Text>Email: {report.email}</Text>
        <View style={styles.start}>
            <Text style={styles.label}>Date Prepared: </Text>
            <Text >{report.trans_date}</Text>
        </View>
    </View>
  );
  
  export default Footer