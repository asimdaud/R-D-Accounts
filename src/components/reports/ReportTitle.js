import React from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
   
    titleContainer:{
        // flexDirection: 'row',
        marginTop: 27,
        paddingBottom: 8,
        paddingTop: 8,
        fontFamily: "Oswald",


    },
    reportTitle:{
        color: '#222222',
        letterSpacing: 2,
        fontSize: 21,
        textAlign: 'center',
        textTransform: 'uppercase',
        paddingBottom: 2,

    },
    subheading:{
        color: '#222222',
        letterSpacing: 1,
        fontSize: 14,
        textAlign: 'center',
        // textTransform: 'uppercase',
    }
  });


  const ReportTitle = ({title, subheading}) => (
    <>
    <View style={styles.titleContainer}>
        <Text style={styles.reportTitle}>{title}</Text>
    {/* </View>
    <View style={styles.titleContainer}> */}
        <Text style={styles.subheading}>{subheading}</Text>
    </View>
    </>
  );
  
  export default ReportTitle