export const isValid = (values) => {
  let errors = {};
  if (!values.name) {
    errors.name = "name is required";
  }
  if (!values.address) {
    errors.address = "address is required";
  }
  if (!values.email) {
    errors.email = "email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Email address is invalid";
  }
  if (values.phoneNumber && values.phoneNumber.length !== 10) {
    errors.phoneNumber = "Enter valid phoneNumber of 10 digits";
  }
  return errors;
};
