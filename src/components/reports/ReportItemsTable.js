import React from 'react';
import {View, StyleSheet } from '@react-pdf/renderer';
import ReportTableHeader from './ReportTableHeader'
import ReportTableRow from './ReportTableRow'
import ReportTableBlankSpace from './ReportTableBlankSpace'
import ReportTableFooter from './ReportTableFooter'

const tableRowsCount = 6;

const styles = StyleSheet.create({
    tableContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 24,
        borderWidth: 1,
        borderColor: '#2222',
        fontFamily: "Times-Roman",
    },
});

  const ReportItemsTable = ({report}) => (
    <View style={styles.tableContainer}>
        <ReportTableHeader />
        <ReportTableRow items={report.expense} />
        <ReportTableBlankSpace rowsCount={1} />
        <ReportTableFooter items={report.expense} />
    </View>
  );



  
  
  export default ReportItemsTable