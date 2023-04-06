import React from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
   
    titleContainer:{
        flexDirection: 'row',
        marginTop: 12,
        fontFamily: "Oswald",

    },
    reportTitle:{
        fontSize: 12,
        // textAlign: 'center',
        marginLeft: 10,
        marginBottom: 5,
        textAlign: "justify",
        // textTransform: 'uppercase',
    }
  });


  const ReportThankYouMsg = () => (
    <View style={styles.titleContainer}>
        <Text style={styles.reportTitle}>End of report</Text>
    </View>
  );
  
  export default ReportThankYouMsg