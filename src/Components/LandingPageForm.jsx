// import { useState } from "react";
// import { useTranslation } from 'react-i18next';
// import {
//   Box,
//   TextField,
//   Button,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   Typography,
//   FormControl,
//   InputLabel,
//   TextareaAutosize,
//   Grid,
// } from "@mui/material";

// import CheckCircleIcon from "@mui/icons-material/CheckCircle";

// const Form = () => {
//   const { t } = useTranslation();

//   const [openModal, setOpenModal] = useState(false);
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     organization: "",
//     phone: "",
//     help: "",
//     sector: "",
//     message: "",
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // You can add form validation logic here
//     setOpenModal(true);
//   };

//   const handleCloseModal = () => {
//     setOpenModal(false);
//   };

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   return (
//     <>
//       <Box
//         component="form"
//         noValidate
//         autoComplete="off"
//         onSubmit={handleSubmit}
//         sx={{
//           width: "100%",
//           maxWidth: "600px",
//           margin: "0 auto",
//           p: 4,
//           borderRadius: 2,
//           // backgroundColor: "#f9f9f9",
//           // boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
//         }}
//       >
//         <Grid container spacing={2}>
//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               // label={t("name")}
//               name="fullName"
//               variant="outlined"
//               placeholder={t("name")}
//               value={formData.fullName}
//               onChange={handleInputChange}
//               required
//             />
//           </Grid>

//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               // label="Email"
//               name="email"
//               variant="outlined"
//               placeholder={t("email")}
//               type="email"
//               value={formData.email}
//               onChange={handleInputChange}
//               required
//             />
//           </Grid>

//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               // label="Organization Name"
//               name="organization"
//               variant="outlined"
//               placeholder={t("organization")}
//               value={formData.organization}
//               onChange={handleInputChange}
//               required
//             />
//           </Grid>

//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               // label="Phone Number"
//               name="phone"
//               variant="outlined"
//               placeholder={t("phone")}
//               value={formData.phone}
//               onChange={handleInputChange}
//               required
//             />
//           </Grid>

//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               // label="How Can We Help?"
//               name="help"
//               variant="outlined"
//               placeholder={t("help")}
//               value={formData.help}
//               onChange={handleInputChange}
//               required
//             />
//           </Grid>

//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               // label="Government Sector"
//               name="sector"
//               variant="outlined"
//               placeholder={t("sector")}
//               value={formData.sector}
//               onChange={handleInputChange}
//               required
//             />
//           </Grid>

//           <Grid item xs={12}>
//             <FormControl fullWidth>
//               <InputLabel htmlFor="message"> </InputLabel>
//               <TextareaAutosize
//                 id="message"
//                 name="message"
//                 placeholder={t("message")}
//                 minRows={4}
//                 value={formData.message}
//                 onChange={handleInputChange}
//                 style={{
//                   width: "100%",
//                   borderColor: "rgba(0, 0, 0, 0.23)",
//                   padding: "12px",
//                   borderRadius: "4px",
//                   fontSize: "16px",
//                   marginTop: "8px",
//                 }}
//               />
//             </FormControl>
//           </Grid>

//           <Grid item xs={12}>
//             <Button
//               // fullWidth
//               variant="contained"
//               color="primary"
//               type="submit"
//               sx={{
//                 mt: 2,
//                 px: 2,
//                 backgroundColor: "#534998",
//                 fontSize: "1rem",
//               }}
//             >
//               {/* Send Message */}
//               {t("formButton")}
//             </Button>
//           </Grid>
//         </Grid>
//       </Box>

//       <Dialog open={openModal} onClose={handleCloseModal}>
//         <DialogTitle sx={{ textAlign: "center" }}>
//           <CheckCircleIcon sx={{ fontSize: 60, color: "green" }} />
//         </DialogTitle>
//         <DialogContent sx={{ textAlign: "center" }}>
//           <Typography variant="h6">Form Submitted Successfully!</Typography>
//           <Button
//             variant="contained"
//             color="#534998"
//             onClick={handleCloseModal}
//             sx={{ mt: 2 }}
//           >
//             Close
//           </Button>
//         </DialogContent>
//       </Dialog>
//     </>
//   );
// };

// export default Form;

import { useState } from "react";
import { useTranslation } from 'react-i18next';
import {
  Box,
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  FormControl,
  InputLabel,
  TextareaAutosize,
  Grid,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Form = () => {
  const { t } = useTranslation();

  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    organization: "",
    phone: "",
    help: "",
    sector: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    fullName: false,
    email: false,
    organization: false,
    phone: false,
    help: false,
    sector: false,
    message: false,
  });

  const validateField = (name, value) => {
    switch (name) {
      case "email":
        // Basic email validation
        const emailRegex = /\S+@\S+\.\S+/;
        return emailRegex.test(value);
      case "phone":
        // Basic phone validation for numbers only
        const phoneRegex = /^\d+$/;
        return phoneRegex.test(value);
      default:
        // Ensure the field is not empty
        return value.trim() !== "";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields
    const newFormErrors = {};
    Object.keys(formData).forEach((field) => {
      newFormErrors[field] = !validateField(field, formData[field]);
    });
    setFormErrors(newFormErrors);

    // If there are no errors, open the modal
    if (Object.values(newFormErrors).every((error) => error === false)) {
      setOpenModal(true);
    }
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
        sx={{
          width: "100%",
          maxWidth: "600px",
          margin: "0 auto",
          p: 4,
          borderRadius: 2,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              name="fullName"
              // variant="outlined"
              placeholder={`${t("name")} *`}
              value={formData.fullName}
              onChange={handleInputChange}
              error={formErrors.fullName}
              helperText={formErrors.fullName ? "Name is required" : ""}
              required
              InputProps={{
                sx: {
                  borderRadius: "10px",  // Apply border-radius to the input field
                },
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              name="email"
              variant="outlined"
              placeholder={`${t("email")} *`}
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              error={formErrors.email}
              helperText={formErrors.email ? "Invalid email address" : ""}
              required
              InputProps={{
                sx: {
                  borderRadius: "10px",  // Apply border-radius to the input field
                },
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              name="organization"
              variant="outlined"
              placeholder={`${t("organization")} *`}
              value={formData.organization}
              onChange={handleInputChange}
              error={formErrors.organization}
              helperText={formErrors.organization ? "Organization is required" : ""}
              required
              InputProps={{
                sx: {
                  borderRadius: "10px",  // Apply border-radius to the input field
                },
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              name="phone"
              variant="outlined"
              placeholder={`${t("phone")} *`}
              value={formData.phone}
              onChange={handleInputChange}
              error={formErrors.phone}
              helperText={formErrors.phone ? "Invalid phone number" : ""}
              required
              InputProps={{
                sx: {
                  borderRadius: "10px",  // Apply border-radius to the input field
                },
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              name="help"
              variant="outlined"
              placeholder={`${t("help")} *`}
              value={formData.help}
              onChange={handleInputChange}
              error={formErrors.help}
              helperText={formErrors.help ? "This field is required" : ""}
              required
              InputProps={{
                sx: {
                  borderRadius: "10px",  // Apply border-radius to the input field
                },
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              name="sector"
              variant="outlined"
              placeholder={`${t("sector")} *`}
              value={formData.sector}
              onChange={handleInputChange}
              error={formErrors.sector}
              helperText={formErrors.sector ? "Sector is required" : ""}
              required
              InputProps={{
                sx: {
                  borderRadius: "10px",  // Apply border-radius to the input field
                },
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel htmlFor="message"> </InputLabel>
              <TextareaAutosize
                id="message"
                name="message"
                placeholder={`${t("message")} *`}
                minRows={4}
                value={formData.message}
                onChange={handleInputChange}
                style={{
                  width: "100%",
                  borderColor: formErrors.message ? "red" : "rgba(0, 0, 0, 0.23)",
                  padding: "12px",
                  borderRadius: "4px",
                  fontSize: "16px",
                  marginTop: "8px",
                }}
              />
              {formErrors.message && (
                <Typography variant="body2" color="error">
                  Message is required
                </Typography>
              )}
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              sx={{
                mt: 2,
                px: 2,
                backgroundColor: "#534998",
                fontSize: "1rem",
              }}
            >
              {t("formButton")}
            </Button>
          </Grid>
        </Grid>
      </Box>

      <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogTitle sx={{ textAlign: "center" }}>
          <CheckCircleIcon sx={{ fontSize: 60, color: "green" }} />
        </DialogTitle>
        <DialogContent sx={{ textAlign: "center" }}>
          <Typography variant="h6">Form Submitted Successfully!</Typography>
          <Button
            variant="contained"
            color="#534998"
            onClick={handleCloseModal}
            sx={{ mt: 2 }}
          >
            Close
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Form;
