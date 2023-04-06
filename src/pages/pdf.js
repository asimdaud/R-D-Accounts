import { useCallback, useMemo, useState } from "react";
import Head from "next/head";
import { subDays, subHours } from "date-fns";
import ArrowDownOnSquareIcon from "@heroicons/react/24/solid/ArrowDownOnSquareIcon";
import ArrowUpOnSquareIcon from "@heroicons/react/24/solid/ArrowUpOnSquareIcon";
import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
import BanknotesIcon from "@heroicons/react/24/solid/BanknotesIcon";
import BuildingOffice2Icon from "@heroicons/react/24/solid/BuildingOffice2Icon";
import IdentificationIcon from "@heroicons/react/24/solid/IdentificationIcon";
import PlusCircleIcon from "@heroicons/react/24/solid/PlusCircleIcon";
import MinusCircleIcon from "@heroicons/react/24/solid/MinusCircleIcon";
import ArrowRightIcon from "@heroicons/react/24/solid/ArrowRightIcon";
import ArrowRightCircleIcon from "@heroicons/react/24/solid/ArrowRightCircleIcon";
import ArrowLeftIcon from "@heroicons/react/24/solid/ArrowLeftIcon";
import ArrowLeftCircleIcon from "@heroicons/react/24/solid/ArrowLeftCircleIcon";
import DocumentTextIcon from "@heroicons/react/24/solid/DocumentTextIcon";

import { userAccountData, clientAndCompanyData } from "src/services/data";

import {
  Container,
  Stack,
  SvgIcon,
  Typography,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  Tab,
  Tabs,
  Unstable_Grid2 as Grid,
  TextareaAutosize,
  Backdrop,
  CircularProgress,
} from "@mui/material";
import { useSelection } from "src/hooks/use-selection";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { PdfTable } from "src/sections/pdf/pdf-table";
import { PdfSearch } from "src/sections/pdf/pdf-search";
import { applyPagination } from "src/utils/apply-pagination";

import Report from "../components/reports/Report";
// import report from "../data/report";
import report from "../sections/pdf/pdf-table";

import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
import { PdfCompanyDetails } from "src/sections/pdf/pdf-company-details";

// const styles = StyleSheet.create({
//   page: {
//     backgroundColor: "white",
//     color: "black",
//   },
//   section: {
//     margin: 10,
//     padding: 10,
//   },
//   // viewer: {
//   //   width: window.innerWidth, //the pdf viewer will take up all of the width and height
//   //   height: window.innerHeight,
//   // },
// });

// // Create Document Component
// function BasicDocument() {
//   return (
//     <PDFViewer style={styles.viewer}>
//       {/* Start of the document*/}
//       <Document>
//         {/*render a single page*/}
//         <Page size="A4" style={styles.page}>
//           <View
//             render={({ pageNumber }) =>
//               //detect if user is NOT on an even page:
//               pageNumber % 2 === 0 && (
//                 <View style={{ background: "red" }}>
//                   {/*If condition is fulfilled, display this component*/}
//                   <Text>I'm only visible in odd pages!</Text>
//                 </View>
//               )
//             }
//           />
//           <View style={styles.section}>
//             <Text>Hello</Text>
//           </View>
//           <View style={styles.section}>
//             <Text>World</Text>
//           </View>
//           <View style={{ margin: 0 }}>
//             <Text style={{ margin: 0 }}>Hello</Text>
//             <Text style={{ margin: 0 }}>jee</Text>
//           </View>
//           <View style={{ marginLeft: 100 }}>
//             <Text>suui</Text>
//           </View>
//         </Page>
//       </Document>
//     </PDFViewer>
//   );
// }

// const useCustomers = (page, rowsPerPage) => {
//   return useMemo(
//     () => {
//       return applyPagination(data, page, rowsPerPage);
//     },
//     [page, rowsPerPage]
//   );
// };

// const useCustomerIds = (customers) => {
//   return useMemo(
//     () => {
//       return customers.map((customer) => customer.id);
//     },
//     [customers]
//   );
// };

const companySizes = [
  {
    value: "microentreprise",
    label: "Microentreprise",
  },
  {
    value: "small enterprise",
    label: "Small enterprise",
  },
  {
    value: "medium-sized enterprise",
    label: "Medium-sized enterprise",
  },
  {
    value: "large enterprise",
    label: "Large enterprise",
  },
];

const PdfPage = () => {
  const [tabValue, setTabValue] = useState(0);
  const [previewToggleTest, setPreviewToggleTest] = useState(false);
  const [number, setNumber] = useState(1);

  const [companyData, setCompanyData] = useState({
    name: clientAndCompanyData.company[0].name,
    owner: clientAndCompanyData.fullName,
    email: clientAndCompanyData.company[0].name,
    phone: clientAndCompanyData.company[0].name,
    size: clientAndCompanyData.company[0].size,
    country: clientAndCompanyData.company[0].country,
    officers: clientAndCompanyData.company[0].officers,
    founded: clientAndCompanyData.company[0].foundedIn,
    yearEnded: clientAndCompanyData.company[0].yearEnded,
  });

  const [additionalOfficers, setAdditionalOfficers] = useState([
    clientAndCompanyData.company[0]?.officers?.map((field, idx) => ({
      name: field.name,
      date: field.dateJoined,
      position: field.position,
      number: idx + 1,
    })),
  ]);

  const [editorData, setEditorData] = useState({
    editor: userAccountData.fullName,
    editorEmail: userAccountData.email,
    editorPhone: userAccountData.phone,
    editorAddress: userAccountData.address,
  });

  const [companyActivitiesData, setCompanyActivitiesData] = useState({
    company_history: clientAndCompanyData?.company[0]?.developmentActivities
      ? clientAndCompanyData?.company[0]?.developmentActivities[0]?.history
      : "",
    company_uncertainties: clientAndCompanyData?.company[0]
      ?.developmentActivities
      ? clientAndCompanyData?.company[0]?.developmentActivities[0]
          ?.uncertainties
      : "",
    company_activities: clientAndCompanyData?.company[0]?.developmentActivities
      ? clientAndCompanyData?.company[0]?.developmentActivities[0]?.activities
      : "",
  });

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleChange = useCallback((event) => {
    if (
      [
        "name",
        "owner",
        "email",
        "phone",
        "size",
        "country",
        "officers",
        "founded",
        "yearEnded",
      ].indexOf(event.target.name) >= 0
    ) {
      setCompanyData((prevState) => ({
        ...prevState,
        [event.target.name]: event.target.value,
      }));
      console.log(companyData);
    }

    if (
      ["editor", "editorEmail", "editorPhone", "editorAddress"].indexOf(
        event.target.name
      ) >= 0
    ) {
      // setEditorData((prevState) => ({
      //   ...prevState,
      //   [event.target.name]: event.target.value,
      // }));
      // console.log(editorData);
    }

    if (
      [
        "company_history",
        "company_uncertainties",
        "company_activities",
      ].indexOf(event.target.name) >= 0
    ) {
      setCompanyActivitiesData((prevState) => ({
        ...prevState,
        [event.target.name]: event.target.value,
      }));
      console.log(companyActivitiesData);
    }
  }, []);

  function handleChangeOfficersName(i, event) {
    const values = [...additionalOfficers];
    values[i].name = event.target.value;
    setAdditionalOfficers(values);
  }

  function handleChangeOfficersDate(i, event) {
    const values = [...additionalOfficers];
    values[i].date = event.target.value;
    setAdditionalOfficers(values);
  }

  function handleAddOfficerRow() {
    const values = [...additionalOfficers];

    if (
      values[number - 1].name !== "" &&
      values[number - 1].name !== null &&
      values[number - 1].name
    ) {
      values.push({ number: number + 1 });
      setNumber(number + 1);
      setAdditionalOfficers(values);
    }
  }

  function handleRemoveRow() {
    const values = [...additionalOfficers];
    if (additionalOfficers.length > 1) {
      values.pop();
      setNumber(number - 1);
      setAdditionalOfficers(values);
    }
  }

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
  }, []);

  const handleChangeTabs = (newValue, event) => {
    setTabValue(newValue);
    // console.log(activeTab,tabValue)
  };
  // const [activeTab, setActiveTab] = useState(0);

  // const toggleTab = (tab) => {
  //   if (activeTab !== tab) setActiveTab(tab) && console.log(activeTab,tabValue);
  //   // console.log(activeTab,tabValue)

  // };

  // const [page, setPage] = useState(0);
  // const [rowsPerPage, setRowsPerPage] = useState(5);
  // const customers = useCustomers(page, rowsPerPage);
  // const customersIds = useCustomerIds(customers);
  // const customersSelection = useSelection(customersIds);

  // const handlePageChange = useCallback(
  //   (event, value) => {
  //     setPage(value);
  //   },
  //   []
  // );

  // const handleRowsPerPageChange = useCallback(
  //   (event) => {
  //     setRowsPerPage(event.target.value);
  //   },
  //   []
  // );

  return (
    <>
      <Head>
        <title>Report | Devias Kit</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={3}>
            <Stack direction="row" justifyContent="space-between" spacing={4}>
              <Stack spacing={1}>
                <Typography variant="h4">Reports</Typography>
                {/* <Stack alignItems="center" direction="row" spacing={1}>
                  <Button
                    color="inherit"
                    onClick={() => console.log(PdfCompanyDetails)}
                    startIcon={
                      <SvgIcon fontSize="small">
                        <ArrowUpOnSquareIcon />
                      </SvgIcon>
                    }
                  >
                    Import
                  </Button>
                  <Button
                    color="inherit"
                    startIcon={
                      <SvgIcon fontSize="small">
                        <ArrowDownOnSquareIcon />
                      </SvgIcon>
                    }
                  >
                    Export
                  </Button>
                </Stack> */}
                {/* <Stack alignItems="center" direction="row" spacing={2}>
                <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
                  <Tabs value={tabValue} onChange={handleChangeTabs} centered>
                    <Tab label="Item One" />
                    <Tab label="Item Two" />
                    <Tab label="Item Three" />
                  </Tabs>
                </Box>
                </Stack> */}
              </Stack>

              <div>
                <Button
                  startIcon={
                    <SvgIcon fontSize="small">
                      <PlusIcon />
                    </SvgIcon>
                  }
                  variant="contained"
                >
                  Add
                </Button>
              </div>
            </Stack>

            {/* <Stack alignItems="center" direction="row" spacing={2} sx={{width: "100%", bgcolor: "background.paper" }}> */}
            <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
              <Tabs
                value={tabValue}
                // onChange={handleChangeTabs}
                centered
                // indicatorColor="secondary"
                textColor="inherit"
                variant="fullWidth"
                aria-label="full width tabs example"
              >
                <Tab
                  value={0}
                  label="Your Details"
                  iconPosition="start"
                  icon={
                    <SvgIcon fontSize="small">
                      <IdentificationIcon />
                    </SvgIcon>
                  }
                  disabled={tabValue < 0}
                  disableRipple={tabValue < 0}
                  onClick={() => setTabValue(0)}
                />
                <Tab
                  value={1}
                  label="Company Details"
                  iconPosition="start"
                  icon={
                    <SvgIcon fontSize="small">
                      <BuildingOffice2Icon />
                    </SvgIcon>
                  }
                  disabled={tabValue < 1}
                  disableRipple={tabValue < 1}
                  onClick={() => setTabValue(1)}
                />
                <Tab
                  value={2}
                  label="Activities"
                  iconPosition="start"
                  icon={
                    <SvgIcon fontSize="small">
                      <DocumentTextIcon />
                    </SvgIcon>
                  }
                  disabled={tabValue < 2}
                  disableRipple={tabValue < 2}
                  onClick={() => setTabValue(2)}
                />

                <Tab
                  value={3}
                  label="Expense"
                  iconPosition="start"
                  icon={
                    <SvgIcon fontSize="small">
                      <BanknotesIcon />
                    </SvgIcon>
                  }
                  disabled={tabValue < 3}
                  disableRipple={tabValue < 3}
                  onClick={() => setTabValue(3)}
                />
              </Tabs>
            </Box>
            {/* </Stack> */}

            {/* YOUR DETAILS */}
            {tabValue == 0 ? (
              <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Card>
                  <CardHeader
                    subheader="To change your details, go to Account page"
                    title="Your details"
                  />
                  <CardContent sx={{ pt: 0 }}>
                    <Box sx={{ m: -1.5 }}>
                      <Grid container spacing={3}>
                        <Grid xs={12} md={6}>
                          <TextField
                            disabled
                            fullWidth
                            // helperText="Your name"
                            label="Your Name"
                            name="editor"
                            // onChange={handleChange}
                            // required
                            value={editorData.editor}
                          />
                        </Grid>

                        <Grid xs={12} md={6}>
                          <TextField
                            fullWidth
                            label="Email Address"
                            name="editorEmail"
                            // onChange={handleChange}
                            // required
                            disabled
                            value={editorData.editorEmail}
                          />
                        </Grid>

                        <Grid xs={12} md={6}>
                          <TextField
                            fullWidth
                            label="Phone Number"
                            name="editorPhone"
                            // onChange={handleChange}
                            type="text"
                            // required
                            disabled
                            value={editorData.editorPhone}
                          />
                        </Grid>
                        <Grid xs={12} md={6}>
                          <TextField
                            fullWidth
                            label="Address"
                            name="editorAddress"
                            disabled
                            // onChange={handleChange}
                            // required
                            value={editorData.editorAddress}
                          />
                        </Grid>
                      </Grid>
                    </Box>
                  </CardContent>
                </Card>
                {/* <Divider /> */}
                <CardActions sx={{ justifyContent: "flex-end" }}>
                  <Button
                    color="success"
                    // variant="outlined"
                    size="small"
                    endIcon={
                      <SvgIcon fontSize="small">
                        <ArrowRightCircleIcon />
                      </SvgIcon>
                    }
                    disabled={
                      !(
                        editorData.editor &&
                        editorData.editorEmail &&
                        editorData.editorPhone &&
                        editorData.editorAddress
                      )
                    }
                    onClick={() => handleChangeTabs(1)}
                  >
                    Next
                  </Button>
                </CardActions>
              </form>
            ) : null}

            {/* <PdfSearch /> */}

            {/* COMPANY DETAILS */}
            {tabValue == 1 ? (
              <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Card>
                  <CardHeader
                    subheader="The information can be edited"
                    title="Company details"
                  />
                  <CardContent sx={{ pt: 0 }}>
                    <Box sx={{ m: -1.5 }}>
                      <Grid container spacing={3}>
                        <Grid xs={12} md={6}>
                          <TextField
                            fullWidth
                            helperText="Please specify company's name"
                            label="Company's Name"
                            name="name"
                            onChange={handleChange}
                            required
                            value={companyData.name}
                          />
                        </Grid>
                        <Grid xs={12} md={6}>
                          <TextField
                            fullWidth
                            label="Owner name"
                            name="owner"
                            onChange={handleChange}
                            required
                            value={companyData.owner}
                          />
                        </Grid>
                        <Grid xs={12} md={6}>
                          <TextField
                            fullWidth
                            label="Email Address"
                            name="email"
                            onChange={handleChange}
                            // required
                            value={companyData.email}
                          />
                        </Grid>
                        <Grid xs={12} md={6}>
                          <TextField
                            fullWidth
                            label="Select Size"
                            name="size"
                            onChange={handleChange}
                            required
                            select
                            SelectProps={{ native: true }}
                            value={companyData.size}
                          >
                            {companySizes.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </TextField>
                        </Grid>

                        <Grid xs={12} md={6}>
                          <TextField
                            fullWidth
                            label="Founded in"
                            name="founded"
                            onChange={handleChange}
                            required
                            // type={Date}
                            value={companyData.founded}
                          />
                        </Grid>
                        <Grid xs={12} md={6}>
                          <TextField
                            fullWidth
                            label="Year Ended"
                            name="yearEnded"
                            onChange={handleChange}
                            required
                            value={companyData.yearEnded}
                          />
                        </Grid>
                        {/* {additionalOfficers.map((field, idx) => {
                          return (
                            <Grid
                              xs={24}
                              md={12}
                              key={`${field}-${idx}`}
                              style={{ display: "inline-flex" }}
                            >
                              <Grid xs={12} md={6}>
                                <TextField
                                  fullWidth
                                  label="Add additional company's officers"
                                  name="officers"
                                  onChange={(e) =>
                                    handleChangeOfficersName(idx, e)
                                  }
                                  value={additionalOfficers[idx].name}
                                />
                              </Grid>

                              <Grid xs={10} md={5}>
                                <TextField
                                  fullWidth
                                  label="Add date"
                                  name="officers"
                                  onChange={(e) =>
                                    handleChangeOfficersDate(idx, e)
                                  }
                                  value={additionalOfficers[idx].date}
                                />
                              </Grid>
                              <Grid xs={2} md={1} style={{ padding: "0px" }}>
                           

                                <Button
                                  disabled={
                                    !(
                                      additionalOfficers[number - 1].name !=
                                        "" &&
                                      additionalOfficers[number - 1].name !==
                                        "" &&
                                      additionalOfficers[number - 1].name !==
                                        null &&
                                      additionalOfficers[number - 1].name
                                    )
                                  }
                                  startIcon={
                                    <SvgIcon fontSize="small">
                                      <PlusCircleIcon />
                                    </SvgIcon>
                                  }
                                  onClick={() => handleAddOfficerRow()}
                                ></Button>
                                {additionalOfficers.length > 1 && (
                                  <Button
                                    startIcon={
                                      <SvgIcon fontSize="small">
                                        <MinusCircleIcon />
                                      </SvgIcon>
                                    }
                                    onClick={() => handleRemoveRow()}
                                  ></Button>
                                )}
                              </Grid>
                            </Grid>
                          );
                        })} */}
                      </Grid>
                    </Box>
                  </CardContent>
                </Card>
                {/* <Divider /> */}
                <CardActions sx={{ justifyContent: "space-between" }}>
                  <Button
                    color="error"
                    sx={{ justifyContent: "flex-start" }}
                    // variant="outlined"
                    size="small"
                    startIcon={
                      <SvgIcon fontSize="small">
                        <ArrowLeftCircleIcon />
                      </SvgIcon>
                    }
                    onClick={() => handleChangeTabs(0)}
                  >
                    Back
                  </Button>
                  {/* </CardActions>
                  <CardActions sx={{ justifyContent: "flex-end" }}> */}
                  <Button
                    sx={{ justifyContent: "flex-end" }}
                    color="success"
                    size="small"
                    // variant="outlined"

                    endIcon={
                      <SvgIcon fontSize="small">
                        <ArrowRightCircleIcon />
                      </SvgIcon>
                    }
                    disabled={
                      !(
                        companyData.name &&
                        companyData.owner &&
                        companyData.size &&
                        companyData.founded &&
                        companyData.yearEnded
                      )
                      // ( additionalOfficers.number>1 && (additionalOfficers[1].name == null) )
                    }
                    onClick={() => handleChangeTabs(2)}
                  >
                    Next
                  </Button>
                </CardActions>
              </form>
            ) : null}

            {tabValue == 2 ? (
              <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Card>
                  <CardHeader
                    subheader="Design and development of a new and improved process/workflow"
                    title="Development Activities"
                  />
                  <CardContent sx={{ pt: 0 }}>
                    <Box sx={{ m: -1.5 }}>
                      <Grid container spacing={3}>
                        <Grid xs={24} md={12}>
                          <TextField
                            id="company_history"
                            label="History and Technological advance sought"
                            multiline
                            fullWidth
                            name="company_history"
                            maxRows={26}
                            // rows={2}
                            onChange={handleChange}
                            value={companyActivitiesData.company_history}
                            type="text"
                            // defaultValue="Default Value"
                          />
                        </Grid>

                        <Grid xs={24} md={12}>
                          <TextField
                            id="company_uncertainties"
                            label="Technological uncertainties"
                            multiline
                            fullWidth
                            maxRows={26}
                            name="company_uncertainties"
                            onChange={handleChange}
                            // type="text"
                            // required
                            value={companyActivitiesData.company_uncertainties}
                            // defaultValue="Default Value"
                          />
                        </Grid>

                        <Grid xs={24} md={12}>
                          <TextField
                            id="company_activities"
                            label="Research and Development Activity Main activities"
                            multiline
                            fullWidth
                            maxRows={26}
                            onChange={handleChange}
                            name="company_activities"
                            // type="text"
                            // required
                            value={companyActivitiesData.company_activities}
                            // defaultValue="Default Value"
                          />
                        </Grid>
                      </Grid>
                    </Box>
                  </CardContent>
                </Card>
                {/* <Divider /> */}

                {/* <Card>
                  <CardHeader
                    subheader="Design and development of a new and improved process/workflow"
                    title="Development Activities"
                  />
                  <CardContent sx={{ pt: 0 }}>
                    <Box sx={{ m: -1.5 }}>
                      <Grid container spacing={3}>
                        <Grid xs={24} md={12}>
                          <TextField
                            id="company_history"
                            label="History and Technological advance sought"
                            multiline
                            fullWidth
                            rows={4}
                            // defaultValue="Default Value"
                          />
                        </Grid>

                        <Grid xs={24} md={12}>
                          <TextField
                            id="company_uncertainties"
                            label="Technological uncertainties"
                            multiline
                            fullWidth
                            rows={4}
                            // defaultValue="Default Value"
                          />
                        </Grid>

                        <Grid xs={24} md={12}>
                          <TextField
                            id="company_activities"
                            label="Research and Development Activity Main activities"
                            multiline
                            fullWidth
                            rows={4}
                            // defaultValue="Default Value"
                          />
                        </Grid>
                      </Grid>
                    </Box>
                  </CardContent>
                </Card> */}
                {/* <Divider /> */}
                <CardActions sx={{ justifyContent: "space-between" }}>
                  <Button
                    color="error"
                    sx={{ justifyContent: "flex-start" }}
                    // variant="outlined"
                    size="small"
                    startIcon={
                      <SvgIcon fontSize="small">
                        <ArrowLeftCircleIcon />
                      </SvgIcon>
                    }
                    disabled={false}
                    onClick={() => handleChangeTabs(1)}
                  >
                    Back
                  </Button>
                  <Button
                    sx={{ justifyContent: "flex-end" }}
                    color="success"
                    size="small"
                    // variant="outlined"

                    endIcon={
                      <SvgIcon fontSize="small">
                        <ArrowRightCircleIcon />
                      </SvgIcon>
                    }
                    disabled={
                      !(
                        companyActivitiesData.company_history &&
                        companyActivitiesData.company_uncertainties &&
                        companyActivitiesData.company_activities
                      )
                    }
                    onClick={() => handleChangeTabs(3)}
                  >
                    Next
                  </Button>
                </CardActions>
              </form>
            ) : null}

            {/* USER INPUT TABLE FOR REPORT */}
            {tabValue == 3 ? (
              <>
                <PdfTable
                  companyData={companyData}
                  editorData={editorData}
                  companyActivitiesData={companyActivitiesData}
                  // count={1} //{report.expense.length}
                  // items={report.expense}
                  // onDeselectAll={customersSelection.handleDeselectAll}
                  // onDeselectOne={customersSelection.handleDeselectOne}
                  // onPageChange={handlePageChange}
                  // onRowsPerPageChange={handleRowsPerPageChange}
                  // onSelectAll={customersSelection.handleSelectAll}
                  // onSelectOne={customersSelection.handleSelectOne}
                  // page={page}
                  // rowsPerPage={rowsPerPage}
                  // selected={customersSelection.selected}
                />
                {/* <Divider /> */}
                <CardActions sx={{ justifyContent: "space-between" }}>
                  <Button
                    color="error"
                    sx={{ justifyContent: "flex-start" }}
                    // variant="outlined"
                    size="small"
                    startIcon={
                      <SvgIcon fontSize="small">
                        <ArrowLeftCircleIcon />
                      </SvgIcon>
                    }
                    disabled={
                      !(
                        companyData.name &&
                        companyData.owner &&
                        companyData.size &&
                        companyData.founded &&
                        companyData.yearEnded
                      )
                    }
                    onClick={() => handleChangeTabs(2)}
                  >
                    Cancel
                  </Button>
                  {/* <Button
                    sx={{ justifyContent: "flex-end" }}
                    color="success"
                    startIcon={<SvgIcon fontSize="small"><ArrowRightCircleIcon /></SvgIcon>}
                  >
                    Done
                  </Button> */}
                </CardActions>
              </>
            ) : null}

            {/* <Button
              onClick={()=>setPreviewToggleTest(!previewToggleTest)}
       
              color="secondary"
              size="small"
              variant="contained"
            >
              Toggle Preview

              
            </Button>

            {previewToggleTest ? (
              <>

                <PDFViewer width="1000" height="600" className="app">
                  <Report report={report} />
                </PDFViewer>
              </>
            ) : null} */}
          </Stack>
        </Container>
      </Box>
      <Button color="info" onClick={handleToggle}>
        Show backdrop
      </Button>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
};

PdfPage.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default PdfPage;
