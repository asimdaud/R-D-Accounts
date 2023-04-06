import PropTypes from "prop-types";
import { format } from "date-fns";
import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
// import  PlusSmallIcon  from "@heroicons/24/outline/PlusSmallIcon";
import MinusCircleIcon from "@heroicons/react/24/solid/MinusCircleIcon";
import PlusCircleIcon from "@heroicons/react/24/solid/PlusCircleIcon";
import DocumentArrowDownIcon from "@heroicons/react/24/solid/DocumentArrowDownIcon";
import CheckIcon from "@heroicons/react/24/solid/CheckIcon";
import React, { useRef, useState, useEffect } from "react";
import { IOSSlider, PrettoSlider, AirbnbSlider } from "src/components/slider";

import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Zoom,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  Fade,
  Badge,
  TableRow,
  SvgIcon,
  Typography,
  CardActions,
  TableFooter,
  filledInputClasses,
  Button,
  Input,
  TextField,
  IconButton,
  OutlinedInput,
  FilledInput,
  InputAdornment,
  FormControl,
  InputLabel,
} from "@mui/material";
import { Scrollbar } from "src/components/scrollbar";
import { getInitials } from "src/utils/get-initials";

import Report from "../../components/reports/Report";
// import report from "../data/report";
// import report from "../sections/pdf/pdf-table"

import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
  PDFDownloadLink,
} from "@react-pdf/renderer";
import { display } from "@mui/system";

export const PdfTable = (props) => {
  const [clicked, setClicked] = useState(false);
  const [doneCheck, setDoneCheck] = useState(false);
  const [fields, setFields] = useState([
    {
      expense: "",
      amount: "",
      percentage: "",
      number: 1,
    },
  ]);
  const [number, setNumber] = useState(1);
  const {
    count = 0,
    items = [],
    onDeselectAll,
    onDeselectOne,
    onPageChange = () => {},
    onRowsPerPageChange,
    onSelectAll,
    onSelectOne,
    page = 0,
    rowsPerPage = 0,
    selected = [],
  } = props;

  const selectedSome = selected.length > 0 && selected.length < items.length;
  const selectedAll = items.length > 0 && selected.length === items.length;

  function handleAddRow() {
    console.log("props", props);
    const values = [...fields];
    console.log(fields);

    if (
      values[number - 1].amount !== "" &&
      values[number - 1].amount !== null &&
      values[number - 1].amount
    ) {
      // if (number < 10) {
      values.push({ number: number + 1 });
      setNumber(number + 1);
      setFields(values);
      setDoneCheck(false);

      // } else console.log("MAX LIMIT REACHED");
    }
  }

  function handleRemoveRow() {
    const values = [...fields];
    if (fields.length > 1) {
      values.pop();
      setNumber(number - 1);
      setFields(values);
      setDoneCheck(false);
    }
  }

  function handleChangeExpense(i, event) {
    const values = [...fields];
    values[i].expense = event.target.value;
    setFields(values);
    setDoneCheck(false);
  }

  function handleChangeAmount(i, event) {
    const values = [...fields];
    values[i].amount = event.target.value;
    setFields(values);
    setDoneCheck(false);

    console.log(
      fields[fields.length - 1].amount *
        (fields[fields.length - 1].percentage / 100)
    );
  }

  function handleChangePercentage(i, event) {
    const values = [...fields];
    values[i].percentage = event.target.value;
    setFields(values);
    setDoneCheck(false);
  }

  const showGrandTotal = (fields) => {
    let total = "--";
    if (
      fields[fields.length - 1].amount *
        (fields[fields.length - 1].percentage / 100) >
      0
    ) {
      total = fields
        .map((item) => item.amount * (item.percentage / 100))
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
        .toFixed(2);
    }

    return <TableCell>{total}</TableCell>;
  };

  return (
    <>
      <Card>
        <Scrollbar>
          <Box sx={{ minWidth: 800 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Expense</TableCell>
                  <TableCell>Amount</TableCell>
                  <TableCell>percentage</TableCell>
                  <TableCell>Total</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {fields?.map((field, idx) => {
                  return (
                    <TableRow hover key={`${field}-${idx}`}>
                      <TableCell style={{ paddingBottom: "20px" }}>
                        <Stack alignItems="center" direction="row" spacing={2}>
                          <Typography variant="subtitle2">
                            <TextField
                              label={"Type of expense"}
                              variant="filled"
                              id="expense"
                              type="text"
                              autoComplete="off"
                              onChange={(e) => handleChangeExpense(idx, e)}
                              value={fields[idx].expense}
                            />
                          </Typography>
                        </Stack>
                      </TableCell>
                      <TableCell style={{ paddingBottom: "20px" }}>
                        <FormControl variant="filled">
                          <InputLabel htmlFor="filled-adornment-amount">
                            Amount
                          </InputLabel>
                          <FilledInput
                            id="amount"
                            variant="filled"
                            type="number"
                            min="0"
                            autoComplete="off"
                            onChange={(e) => handleChangeAmount(idx, e)}
                            value={fields[idx].amount}
                            startAdornment={
                              <InputAdornment position="start">
                                £
                              </InputAdornment>
                            }
                          />
                        </FormControl>
                      </TableCell>
                      <TableCell >
                        <FormControl  fullWidth variant="filled">
                          {/* <InputLabel htmlFor="filled-adornment-percentage">
                            Percentage
                          </InputLabel> */}
                          {/* <FilledInput
                            id="percentage"
                            variant="filled"
                            type="number"
                            min="0"
                            max="100"
                            onChange={(e) => handleChangePercentage(idx, e)}
                            value={fields[idx].percentage}
                            endAdornment={
                              <InputAdornment position="start">
                                %
                              </InputAdornment>
                            }
                          /> */}

                        <IOSSlider
                        style={{width:"70%",paddingRight:"20px"}}
                          aria-label="ios slider"
                          defaultValue={0}
                          // marks={marks}
                          onChange={(e) => handleChangePercentage(idx, e)}
                          valueLabelDisplay="on"
                        />
                        </FormControl>
                      </TableCell>
                      <TableCell style={{ paddingBottom: "20px" }}>
                        <TextField
                          label={(
                            field.amount *
                            (field.percentage / 100)
                          ).toFixed(2)}
                          variant="standard"
                          // type="number"
                          disabled
                        />
                        {/* {(field.amount * (field.percentage / 100)).toFixed(2)} */}
                      </TableCell>
                      {idx == fields.length - 1 ? (
                        <>
                          {fields.length - 1 == idx &&
                          field?.expense != "" &&
                          field?.amount != "" &&
                          field?.percentage != "" ? (
                            <Fade
                              in={
                                idx == fields.length - 1 &&
                                fields.length - 1 == idx &&
                                field.expense != "" &&
                                field.amount != "" &&
                                field.percentage != ""
                              }
                              unmountOnExit
                            >
                              <Avatar
                                sx={{
                                  position: "absolute",
                                  transform: "translate(28px, 75px)",
                                  backgroundColor: "success.main",
                                  height: 30,
                                  width: 30,
                                  left: -3,
                                }}
                                onClick={() => handleAddRow()}
                              >
                                <SvgIcon>
                                  <PlusCircleIcon />
                                </SvgIcon>
                              </Avatar>
                            </Fade>
                          ) : null}

                          {fields.length > 1 ? (
                            <Fade
                              in={idx == fields.length - 1 && fields.length > 1}
                              unmountOnExit
                            >
                              <Avatar
                                sx={{
                                  position: "absolute",
                                  transform: "translate(56px, 75px)",
                                  backgroundColor: "error.main",
                                  height: 30,
                                  width: 30,
                                  left: 3,
                                }}
                                onClick={() => handleRemoveRow()}
                              >
                                <SvgIcon>
                                  <MinusCircleIcon />
                                </SvgIcon>
                              </Avatar>
                            </Fade>
                          ) : null}
                        </>
                      ) : null}
                    </TableRow>
                  );
                })}
              </TableBody>
              <TableHead>
                <TableRow>
                  <TableCell colSpan={3} style={{ paddingTop: "20px" }}>
                    <p>Grand Total</p>
                  </TableCell>
                  {showGrandTotal(fields)}
                </TableRow>
              </TableHead>
            </Table>
          </Box>
        </Scrollbar>
        {/* <TablePagination
        component="div"
        count={count}
        onPageChange={onPageChange}
        onRowsPerPageChange={onRowsPerPageChange}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
      /> */}

        <Fade in timeout={600} unmountOnExit>
          <CardActions sx={{ justifyContent: "flex-end" }}>
            <Button
              startIcon={
                <SvgIcon fontSize="small">
                  <CheckIcon />
                </SvgIcon>
              }
              disabled={
                !(
                  fields[fields.length - 1].amount *
                    (fields[fields.length - 1].percentage / 100) >
                    0 && !doneCheck
                )
              }
              onClick={() => setDoneCheck(true)}
              color="success"
            >
              Done
            </Button>
          </CardActions>
        </Fade>
        {/* {fields[fields.length - 1].amount *
          (fields[fields.length - 1].percentage / 100) >
          0 && !doneCheck ? (
          <>
            <Fade in timeout={600} unmountOnExit>
              <CardActions sx={{ justifyContent: "flex-end" }}>
                <Button
                  startIcon={
                    <SvgIcon fontSize="small">
                      <CheckIcon />
                    </SvgIcon>
                  }
                  onClick={() => setDoneCheck(true)}
                  variant="contained"
                  color="success"
                  // style={{ background: "#F79009", color: "white" }}
                >
                  Done
                </Button>
              </CardActions>
            </Fade>
          </>
        ) : null} */}
      </Card>

      {doneCheck ? (
        <PDFDownloadLink
          style={{ alignSelf: "center", textDecoration: "none" }}
          document={<Report report={generatePdfTable(fields, props)} />}
          fileName={
            generatePdfTable(fields, props).company.name +
            "-" +
            generatePdfTable(fields, props).trans_date 
          } //"rnd_report.pdf"
        >
          {/* {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')} */}
          <Fade in timeout={800} unmountOnExit>
            <Button
              startIcon={
                <SvgIcon fontSize="small">
                  <DocumentArrowDownIcon />
                </SvgIcon>
              }
              onClick={() => generatePdfTable(fields, props)}
              // variant="contained"
              style={{ background: "#F79009", color: "white" }}
            >
              Generate PDF
            </Button>
          </Fade>
        </PDFDownloadLink>
      ) : null}

      {/* <Card>
        <PDFViewer width="1000" height="600" className="app">
          <Report report={generatePdfTable(fields)} />
        </PDFViewer>
      </Card> */}
    </>
  );
};

PdfTable.propTypes = {
  count: PropTypes.number,
  items: PropTypes.array,
  onDeselectAll: PropTypes.func,
  onDeselectOne: PropTypes.func,
  onPageChange: PropTypes.func,
  onRowsPerPageChange: PropTypes.func,
  onSelectAll: PropTypes.func,
  onSelectOne: PropTypes.func,
  page: PropTypes.number,
  rowsPerPage: PropTypes.number,
  selected: PropTypes.array,
};

// Dynamic filledInputClasses
// https://rkstrdee.medium.com/dynamic-form-fields-using-react-with-hooks-b7d4d037042c

export function generatePdfTable(fields, props) {
  console.log(fields,props);
  if (fields != undefined) {
    const todaysDate = new Date().toLocaleDateString();

    const report = [
      {
        id: "5df3180a09ea16dc4b95f910",
        report_no: "201906-28",
        editor: props.editorData.editor,
        email: props.editorData.editorEmail,
        phone: props.editorData.editorPhone,
        address: props.editorData.editorAddress,
        yearEnded: props.companyData.yearEnded,
        company: props.companyData,
        balance: "$2,283.74",
        trans_date: todaysDate,
        due_date: "2019-10-12",
        expense: fields,
        companyDetails: props.companyActivitiesData,
        companyHistory: props.companyActivitiesData.company_history,
        companyUncertainties: props.companyActivitiesData.company_uncertainties,
        companyActivities: props.companyActivitiesData.company_activities,
      },
    ];

    console.log("FromPdfTableGenFunc", report);

    return report[0];
  }
  return null;
}
