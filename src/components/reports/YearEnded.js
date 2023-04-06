import React, { Fragment } from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    reportNoContainer: {
        flexDirection: 'row',
        marginTop: 36,
        justifyContent: 'center',
        fontFamily: "Oswald",
    },
    reportDateContainer: {
        flexDirection: 'row',
        // justifyContent: 'flex-end'
    },
    reportDate: {
            fontSize: 14,
            fontStyle: 'bold',
    },
    label: {
        width: 60
    }
    
  });


  const YearEnded = ({report}) => (
        <Fragment>
            <View style={styles.reportNoContainer}>
                <Text style={styles.label}>Year Ended</Text>
                <Text >{report.yearEnded}</Text>
            </View >
        </Fragment>
  );
  
  export default YearEnded