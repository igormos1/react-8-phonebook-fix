import { useFormik } from 'formik';
import * as yup from 'yup';
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { useId } from "react";

import toast from 'react-hot-toast';
import PropTypes from 'prop-types';

import { useGetContactsQuery } from 'redux/contacts/contactsSlice';

const schema = yup.object().shape({
  name: yup.string().required("enter a name, this is a required field"),
  number: yup.string().min(8).max(13).required("enter a phone number, this is a required field"),
});


export const ContactForm = ({ initialValues = {
  name: '', number: '',}, onSubmit, buttonText }) => {
    
  
  const handleSubmit = async (values, { resetForm }) => {
     if (contacts.find(contact => contact.name.toLocaleLowerCase() === values.name.toLocaleLowerCase())){
       toast.error(`${values.name} is already in contacts`)
        return
     }
    await onSubmit(values);
    resetForm();
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: schema,
    onSubmit: handleSubmit,
  });
  
  const id = useId();
  
  const { data: contacts } = useGetContactsQuery();


  return (

    <div>
      <form onSubmit={formik.handleSubmit}
        autoComplete="off">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id={`${id}-name`}
              type="text"
              name="name"
              label="Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id={`${id}-number`}
              type="tel"
              name="number"
              label="Number"
              value={formik.values.number}
              onChange={formik.handleChange}
              error={formik.touched.number && Boolean(formik.errors.number)}
              helperText={formik.touched.number && formik.errors.number}
            />
          </Grid>
        </Grid>
        <Button color="primary" variant="contained" fullWidth sx={{ mt: 3, mb: 2 }} type="submit">
          {buttonText}
        </Button>
      </form>
    </div>
  );
  
}

ContactForm.propTypes = {
  initialValues: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  onSubmit: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,

};


// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import { useId } from "react";
// import * as yup from 'yup';

// import toast from 'react-hot-toast';
// import PropTypes from 'prop-types';

// import { useGetContactsQuery } from 'redux/contacts/contactsSlice';
// import s from "./ContactForm.module.css";

// const schema = yup.object().shape({
//   name: yup.string().required("enter a name, this is a required field"),
//   number: yup.string().min(8).max(13).required("enter a phone number, this is a required field"),
// });


// export const ContactForm = ({ initialValues = {
//   name: '', number: '',}, onSubmit, buttonText }) => {
      
//     const id = useId();
  
//   const { data: contacts } = useGetContactsQuery();


//   const handleSubmit = async (values, { resetForm }) => {
//      if (contacts.find(contact => contact.name.toLocaleLowerCase() === values.name.toLocaleLowerCase())){
//        toast.error(`${values.name} is already in contacts`)
//         return
//      }
//     await onSubmit(values);
//     resetForm();
//   };


//   return (
//     <Formik
//       initialValues={initialValues}
//       onSubmit={handleSubmit}
//       validationSchema={schema}>
//       <Form className={s.form} autoComplete='off'>
//         <label htmlFor={`${id}-name`} className={s.label}>Name</label>
//         <Field
//           className={s.input}
//           type="text"
//           name="name"
//           id={`${id}-name`}
//         />
//         <ErrorMessage className={s.error} name="name" component="div" />
//         <label htmlFor={`${id}-number`} className={s.label}>Number</label>
//         <Field
//           className={s.input}
//           type="tel"
//           name="number"
//           id={`${id}-number`}
//         />
//         <ErrorMessage className={s.error} name="number" component="div" />
//         <button className={s.button} type='submit'>{buttonText}</button>
//       </Form>
//     </Formik>
//   );
  
// }

// ContactForm.propTypes = {
//   initialValues: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     number: PropTypes.string.isRequired,
//   }),
//   onSubmit: PropTypes.func.isRequired,
//   buttonText: PropTypes.string.isRequired,

// };