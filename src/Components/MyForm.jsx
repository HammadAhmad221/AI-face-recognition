// import { useState } from "react";
// import {
//   Box,
//   TextField,
//   Button,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   Typography,
//   TextareaAutosize,
//   FormControl,
// } from "@mui/material";

// import CheckCircleIcon from "@mui/icons-material/CheckCircle";

// const MyForm = () => {
//   const [openModal, setOpenModal] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setOpenModal(true);
//   };

//   const handleCloseModal = () => {
//     setOpenModal(false);
//   };

//   return (
//     <>
//       <Box
//         component="form"
//         noValidate
//         autoComplete="off"
//         onSubmit={handleSubmit}
//         sx={{
//           width: "80%",
//           textAlign: "center",
//           p: 4,
//           borderRadius: 2,
//         }}
//       >
//         <TextField
//           fullWidth
//           margin="normal"
//           label="Full Name"
//           variant="outlined"
//           placeholder="Full Name"
//         />

//         <TextField
//           fullWidth
//           margin="normal"
//           label="Email"
//           variant="outlined"
//           placeholder="E-mail"
//           type="email"
//         />

//         <TextField
//           fullWidth
//           margin="normal"
//           label="Organisation name"
//           variant="outlined"
//           placeholder="Organisation name"
//         />
//         <TextField
//           fullWidth
//           margin="normal"
//           label="Phone number"
//           variant="outlined"
//           placeholder="Phone number"
//         />

//         <TextField
//           fullWidth
//           margin="normal"
//           label="How we can Help"
//           variant="outlined"
//           placeholder="How we can Help"
//         />

//         <TextField
//           fullWidth
//           margin="normal"
//           label="Government sector"
//           variant="outlined"
//           placeholder="Government sector"
//         />

//         <FormControl>
//           <TextareaAutosize placeholder="Send us a message ...." minRows={2} />
//         </FormControl>
//         <Button
//           variant="contained"
//           color="secondary"
//           type="submit"
//           sx={{ mt: 2 }}
//         >
//           Submit
//         </Button>
//       </Box>

//       <Dialog open={openModal} onClose={handleCloseModal}>
//         <DialogTitle sx={{ textAlign: "center" }}>
//           <CheckCircleIcon sx={{ fontSize: 60, color: "green" }} />
//         </DialogTitle>
//         <DialogContent sx={{ textAlign: "center" }}>
//           <Typography variant="h6">Form Submitted Successfully!</Typography>
//           <Button
//             variant="contained"
//             color="primary"
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

// export default MyForm;

import { useState } from "react";
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

const MyForm = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add form validation logic here
    setOpenModal(true);
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
          // backgroundColor: "#f9f9f9",
          // boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Full Name"
              name="fullName"
              variant="outlined"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleInputChange}
              required
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              variant="outlined"
              placeholder="Enter your email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Organization Name"
              name="organization"
              variant="outlined"
              placeholder="Enter your organization name"
              value={formData.organization}
              onChange={handleInputChange}
              required
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Phone Number"
              name="phone"
              variant="outlined"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="How Can We Help?"
              name="help"
              variant="outlined"
              placeholder="Describe how we can assist you"
              value={formData.help}
              onChange={handleInputChange}
              required
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Government Sector"
              name="sector"
              variant="outlined"
              placeholder="Enter the government sector"
              value={formData.sector}
              onChange={handleInputChange}
              required
            />
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel htmlFor="message"> </InputLabel>
              <TextareaAutosize
                id="message"
                name="message"
                placeholder="Write your message here"
                minRows={4}
                value={formData.message}
                onChange={handleInputChange}
                style={{
                  width: "100%",
                  borderColor: "rgba(0, 0, 0, 0.23)",
                  padding: "12px",
                  borderRadius: "4px",
                  fontSize: "16px",
                  marginTop: "8px",
                }}
              />
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <Button
              // fullWidth
              variant="contained"
              color="primary"
              type="submit"
              sx={{
                mt: 2,
                px: 2,
                backgroundColor: "#534998",

                fontSize: "1rem",
                "&:hover": {
                  backgroundColor: "#ff79b0",
                },
              }}
            >
              Send Message
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

export default MyForm;
