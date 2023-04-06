// import { useCallback, useState } from "react";
// import {
//   Box,
//   Button,
//   Card,
//   CardActions,
//   CardContent,
//   CardHeader,
//   Divider,
//   TextField,
//   Unstable_Grid2 as Grid,
// } from "@mui/material";

// const companySizes = [
//   {
//     value: "micro",
//     label: "Microentreprise",
//   },
//   {
//     value: "small",
//     label: "Small enterprise",
//   },
//   {
//     value: "medium",
//     label: "Medium-sized enterprise",
//   },
//   {
//     value: "large",
//     label: "Large enterprise",
//   },
// ];

// export const PdfCompanyDetails = () => {
//   const [values, setValues] = useState([{
//     companyName: "Company ABC Ltd",
//     ownerName: "Name",
//     email: "ceo@company.xyz",
//     phone: "",
//     size: "medium",
//     country: "UK",
//   }]);

//   const handleChange = useCallback((event) => {
//     setValues((prevState) => ({
//       ...prevState,
//       [event.target.name]: event.target.value,
//     }));
//   }, []);

//   const handleSubmit = useCallback((event) => {
//     event.preventDefault();
//   }, []);

//   return (
//     <form autoComplete="off" noValidate onSubmit={handleSubmit}>
//       <Card>
//         <CardHeader
//           subheader="The information can be edited"
//           title="Company details"
//         />
//         <CardContent sx={{ pt: 0 }}>
//           <Box sx={{ m: -1.5 }}>
//             <Grid container spacing={3}>
//               <Grid xs={12} md={6}>
//                 <TextField
//                   fullWidth
//                   helperText="Please specify company's name"
//                   label="Company's Name"
//                   name="companyName"
//                   onChange={handleChange}
//                   required
//                   value={values.companyName}
//                 />
//               </Grid>
//               <Grid xs={12} md={6}>
//                 <TextField
//                   fullWidth
//                   label="Owner name"
//                   name="ownerName"
//                   onChange={handleChange}
//                   required
//                   value={values.ownerName}
//                 />
//               </Grid>
//               <Grid xs={12} md={6}>
//                 <TextField
//                   fullWidth
//                   label="Email Address"
//                   name="email"
//                   onChange={handleChange}
//                   required
//                   value={values.email}
//                 />
//               </Grid>
//               <Grid xs={12} md={6}>
//                 <TextField
//                   fullWidth
//                   label="Select Size"
//                   name="size"
//                   onChange={handleChange}
//                   required
//                   select
//                   SelectProps={{ native: true }}
//                   value={values.size}
//                 >
//                   {companySizes.map((option) => (
//                     <option key={option.value} value={option.value}>
//                       {option.label}
//                     </option>
//                   ))}
//                 </TextField>
//               </Grid>
//               <Grid xs={12} md={6}>
//                 <TextField
//                   fullWidth
//                   label="Country"
//                   name="country"
//                   onChange={handleChange}
//                   required
//                   value={values.country}
//                 />
//               </Grid>
//               <Grid xs={12} md={6}>
//                 <TextField
//                   fullWidth
//                   label="Phone Number"
//                   name="phone"
//                   onChange={handleChange}
//                   type="number"
//                   value={values.phone}
//                 />
//               </Grid>
//             </Grid>
//           </Box>
//         </CardContent>
//         <Divider />
        // <CardActions sx={{ justifyContent: "flex-end" }}>
        //   <Button variant="contained">Save details</Button>
        // </CardActions>
//       </Card>
//     </form>
//   );
// };
