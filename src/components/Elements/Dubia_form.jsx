import React from 'react';
import { useFormik } from 'formik';

// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues
const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Must be 15 characters or less';
  }

  if (!values.lastName) {
    errors.lastName = 'Required';
  } else if (values.lastName.length > 20) {
    errors.lastName = 'Must be 20 characters or less';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

const Dubia_Form = ({items}) => {
  // Pass the useFormik() hook initial form values, a validate function that will be called when
  // form values change or fields are blurred, and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      select:'',
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (

    <><div>
        {items.title}
        </div><form onSubmit={formik.handleSubmit}>
          <label htmlFor="firstName" style={{ color: 'red' }}>First Name</label>
          <div><input
              id="firstName"
              name="firstName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.firstName} /></div>

          {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}

          <label htmlFor="lastName">Last Name</label>
          <div>
              <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.lastName} /></div>
          {formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
          <label htmlFor="phone" style={{ color: 'red' }}>Phone</label>
          <div><input
              id="phone"
              name="phone"
              type="phone"
              onChange={formik.handleChange}
              value={formik.values.phone} /></div>
          <label htmlFor="email">Email Address</label>
          <div>
              <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={formik.handleChange}
                  value={formik.values.email} />
          </div>



          {formik.errors.email ? <div>{formik.errors.email}</div> : null}
          <select
              name="star"
              value={formik.values.color}
              onChange={formik.handleChange}
              style={{ display: "block" }}
          >
              <option value="" label="Select a hotel star">
                  Select a star{" "}
              </option>
              <option value="3" label="3 star">
                  {" "}
                  3 star
              </option>
              <option value="4" label="4 star">
                  4 star
              </option>
              <option value="g5" label="5 star">
                  5 star
              </option>
          </select>
          <button type="submit">Submit</button>
      </form></>
  );
};


export default Dubia_Form