// import React, { useState } from 'react';
// import { Button, TextField, Typography, Box, Stack, Grid } from '@mui/material';
// import CloudUploadIcon from '@mui/icons-material/CloudUpload';
// import Footer from './Footer';

// const UploadForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     images: []
//   });

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleFileChange = (e) => {
//     const files = Array.from(e.target.files); // Convert FileList to an array
//     setFormData((prevData) => ({
//       ...prevData,
//       images: [...prevData.images, ...files], // Append new images to the existing ones
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // For demonstration, logging the form data
//     console.log("Name:", formData.name);
//     console.log("Selected Images:", formData.images);

//     // You can handle file uploads here by using formData and passing it to an API or service
//   };

//   return (
// <>
// <div className='h-[81vh] flex items-center justify-center '          
//     style={{
//         background:
//           "linear-gradient(0deg, rgba(37, 30, 84, 0.96) 0%, rgba(37, 30, 84, 0.96) 100%)",
//       }}>
//     <Box
//       component="form"
//       onSubmit={handleSubmit}
//       sx={{
//         maxWidth: '600px',
//         mx: 'auto',
//         p: 4,
//         border: '1px solid #e0e0e0',
//         borderRadius: '8px',
//         boxShadow: '0px 3px 6px rgba(0,0,0,0.1)',
//         backgroundColor:'white',
//       }}
//     >
//       <Typography variant="h4" gutterBottom align="center">
//         Upload Employee Data
//       </Typography>

//       <Stack spacing={3}>
//         {/* Name Input */}
//         <TextField
//           label="Name"
//           name="name"
//           fullWidth
//           value={formData.name}
//           onChange={handleInputChange}
//           variant="outlined"
//           required
//           sx={{
//             '& .MuiOutlinedInput-root': {
//               '& fieldset': {
//                 borderColor: 'gray',
//               },
//               '&:hover fieldset': {
//                 borderColor: 'gray',
//               },
//               '&.Mui-focused fieldset': {
//                 borderColor: 'purple',
//               },
//             },
//             '& .MuiInputLabel-root.Mui-focused': {
//               color: 'purple',
//             },
//           }}
//         />

//         {/* File Input */}
//         <Button
//           variant="contained"
//           component="label"
//           fullWidth
//           startIcon={<CloudUploadIcon />}
//           sx={{
//             padding: '10px 20px',
//             backgroundColor: '#534998',
//             '&:hover': {
//               backgroundColor: '#6E28AC',
//             },
//           }}
//         >
//           Upload Images
//           <input
//             type="file"
//             name="images"
//             hidden
//             multiple
//             onChange={handleFileChange}
//             accept="image/*"
//           />
//         </Button>

//         {/* Display Selected Images */}
//         {formData.images.length > 0 && (
//           <>
//             <Typography variant="body1" color="textSecondary">
//               {formData.images.length} image(s) selected
//             </Typography>

//             {/* Image Previews */}
//             <Grid container spacing={2}>
//               {formData.images.map((image, index) => (
//                 <Grid item xs={4} key={index}>
//                   <img
//                     src={URL.createObjectURL(image)}
//                     alt={`Selected Preview ${index + 1}`}
//                     style={{ width: '100%', height: 'auto', borderRadius: '8px', border: '1px solid #e0e0e0' }}
//                   />
//                 </Grid>
//               ))}
//             </Grid>
//           </>
//         )}

//         {/* Submit Button */}
//         <Button
//           type="submit"
//           variant="contained"
//           color="primary"
//           size="large"
//           fullWidth
//           sx={{
//             padding: '12px',
//             backgroundColor: '#534998',
//             '&:hover': {
//               backgroundColor: '#6E28AC',
//             },
//           }}
//         >
//           Submit
//         </Button>
//       </Stack>
//     </Box>
//     </div>
//     <Footer/>
// </>

//   );
// };

// export default UploadForm;


// import React, { useState } from 'react';
// import { Button, TextField, Typography, Box, Stack, Grid, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
// import CloudUploadIcon from '@mui/icons-material/CloudUpload';
// import Footer from './Footer';

// const UploadForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     images: []
//   });

//   const [open, setOpen] = useState(false); // State to control modal

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleFileChange = (e) => {
//     const files = Array.from(e.target.files); // Convert FileList to an array
//     setFormData((prevData) => ({
//       ...prevData,
//       images: [...prevData.images, ...files], // Append new images to the existing ones
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // For demonstration, logging the form data
//     console.log("Name:", formData.name);
//     console.log("Selected Images:", formData.images);

//     // Show the modal when form is submitted
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <>
//       <div className='h-[81vh] flex items-center justify-center '          
//         style={{
//           background: "linear-gradient(0deg, rgba(37, 30, 84, 0.96) 0%, rgba(37, 30, 84, 0.96) 100%)",
//         }}>
//         <Box
//           component="form"
//           onSubmit={handleSubmit}
//           sx={{
//             maxWidth: '600px',
//             mx: 'auto',
//             p: 4,
//             border: '1px solid #e0e0e0',
//             borderRadius: '8px',
//             boxShadow: '0px 3px 6px rgba(0,0,0,0.1)',
//             backgroundColor:'white',
//           }}
//         >
//           <Typography variant="h4" gutterBottom align="center">
//             Upload Employee Data
//           </Typography>

//           <Stack spacing={3}>
//             {/* Name Input */}
//             <TextField
//               label="Name"
//               name="name"
//               fullWidth
//               value={formData.name}
//               onChange={handleInputChange}
//               variant="outlined"
//               required
//               sx={{
//                 '& .MuiOutlinedInput-root': {
//                   '& fieldset': {
//                     borderColor: 'gray',
//                   },
//                   '&:hover fieldset': {
//                     borderColor: 'gray',
//                   },
//                   '&.Mui-focused fieldset': {
//                     borderColor: 'purple',
//                   },
//                 },
//                 '& .MuiInputLabel-root.Mui-focused': {
//                   color: 'purple',
//                 },
//               }}
//             />

//             {/* File Input */}
//             <Button
//               variant="contained"
//               component="label"
//               fullWidth
//               startIcon={<CloudUploadIcon />}
//               sx={{
//                 padding: '10px 20px',
//                 backgroundColor: '#534998',
//                 '&:hover': {
//                   backgroundColor: '#6E28AC',
//                 },
//               }}
//             >
//               Upload Images
//               <input
//                 type="file"
//                 name="images"
//                 hidden
//                 multiple
//                 onChange={handleFileChange}
//                 accept="image/*"
//               />
//             </Button>

//             {/* Display Selected Images */}
//             {formData.images.length > 0 && (
//               <>
//                 <Typography variant="body1" color="textSecondary">
//                   {formData.images.length} image(s) selected
//                 </Typography>

//                 {/* Image Previews */}
//                 <Grid container spacing={2}>
//                   {formData.images.map((image, index) => (
//                     <Grid item xs={4} key={index}>
//                       <img
//                         src={URL.createObjectURL(image)}
//                         alt={`Selected Preview ${index + 1}`}
//                         style={{ width: '100%', height: 'auto', borderRadius: '8px', border: '1px solid #e0e0e0' }}
//                       />
//                     </Grid>
//                   ))}
//                 </Grid>
//               </>
//             )}

//             {/* Submit Button */}
//             <Button
//               type="submit"
//               variant="contained"
//               color="primary"
//               size="large"
//               fullWidth
//               sx={{
//                 padding: '12px',
//                 backgroundColor: '#534998',
//                 '&:hover': {
//                   backgroundColor: '#6E28AC',
//                 },
//               }}
//             >
//               Submit
//             </Button>
//           </Stack>
//         </Box>
//       </div>

//       {/* Modal (Dialog) */}
//       <Dialog open={open} onClose={handleClose}>
//         <DialogTitle>Form Submitted Successfully</DialogTitle>
//         <DialogContent>
//           <Typography>Name: {formData.name}</Typography>
//           <Typography>Number of images: {formData.images.length}</Typography>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose} color="primary">
//             Close
//           </Button>
//         </DialogActions>
//       </Dialog>

//       <Footer/>
//     </>
//   );
// };

// export default UploadForm;


import React, { useState } from 'react';
import { Button, TextField, Typography, Box, Stack, Grid, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CheckCircleIcon from '@mui/icons-material/CheckCircle'; // Import CheckCircle icon
import Footer from './Footer';

const UploadForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    images: []
  });

  const [open, setOpen] = useState(false); // State to control modal

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files); // Convert FileList to an array
    setFormData((prevData) => ({
      ...prevData,
      images: [...prevData.images, ...files], // Append new images to the existing ones
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For demonstration, logging the form data
    console.log("Name:", formData.name);
    console.log("Selected Images:", formData.images);

    // Show the modal when form is submitted
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className='h-[80.40vh] flex items-center justify-center '          
        style={{
          background: "linear-gradient(0deg, rgba(37, 30, 84, 0.96) 0%, rgba(37, 30, 84, 0.96) 100%)",
        }}>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            maxWidth: '600px',
            mx: 'auto',
            p: 4,
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
            boxShadow: '0px 3px 6px rgba(0,0,0,0.1)',
            backgroundColor:'white',
          }}
        >
          <Typography variant="h4" gutterBottom align="center">
            Upload Employee Data
          </Typography>

          <Stack spacing={3}>
            {/* Name Input */}
            <TextField
              label="Name"
              name="name"
              fullWidth
              value={formData.name}
              onChange={handleInputChange}
              variant="outlined"
              required
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'gray',
                  },
                  '&:hover fieldset': {
                    borderColor: 'gray',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'purple',
                  },
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: 'purple',
                },
              }}
            />

            {/* File Input */}
            <Button
              variant="contained"
              component="label"
              fullWidth
              startIcon={<CloudUploadIcon />}
              sx={{
                padding: '10px 20px',
                backgroundColor: '#534998',
                '&:hover': {
                  backgroundColor: '#6E28AC',
                },
              }}
            >
              Upload Images
              <input
                type="file"
                name="images"
                hidden
                multiple
                onChange={handleFileChange}
                accept="image/*"
              />
            </Button>

            {/* Display Selected Images */}
            {formData.images.length > 0 && (
              <>
                <Typography variant="body1" color="textSecondary">
                  {formData.images.length} image(s) selected
                </Typography>

                {/* Image Previews */}
                <Grid container spacing={2}>
                  {formData.images.map((image, index) => (
                    <Grid item xs={4} key={index}>
                      <img
                        src={URL.createObjectURL(image)}
                        alt={`Selected Preview ${index + 1}`}
                        style={{ width: '100%', height: 'auto', borderRadius: '8px', border: '1px solid #e0e0e0' }}
                      />
                    </Grid>
                  ))}
                </Grid>
              </>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              sx={{
                padding: '12px',
                backgroundColor: '#534998',
                '&:hover': {
                  backgroundColor: '#6E28AC',
                },
              }}
            >
              Submit
            </Button>
          </Stack>
        </Box>
      </div>

      {/* Modal (Dialog) */}
      <Dialog open={open} onClose={handleClose} sx={{ padding: '20px' }}>
        <DialogTitle>
          <Typography variant="h6" color="success.main" sx={{ display: 'flex', alignItems: 'center' }}>
            <CheckCircleIcon sx={{ color: 'green', marginRight: '8px' }} /> 
            Employee Data Uploaded Successfully
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Typography>Name: {formData.name}</Typography>
          <Typography>Number of images: {formData.images.length}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary"
              sx={{
                backgroundColor: '#534998',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#6E28AC',
                },
              }}>
            Close
          </Button>
        </DialogActions>
      </Dialog>

      <Footer/>
    </>
  );
};

export default UploadForm;
