export const isValidEmail = (email: string): boolean => {
  // Custom email validation regex pattern
  const emailPattern: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return emailPattern.test(email);
};
export const isValidPassword = (password: string): boolean => {
  // Customize password validation accordingly
  if (password.length >= 8) {
    return true;
  } else {
    return false;
  }
};
export const isValidPhoneNum = (phoneNum: string): boolean => {
  // Customize phone number validation accordingly
  if (phoneNum.length === 10) {
    return true;
  } else {
    return false;
  }
};

export const validateLoginForm = (
  email: string,
  password: string,
): {email?: string; password?: string} => {
  const errors: {email?: string; password?: string} = {};

  if (!email) {
    errors.email = 'Email is required';
  } else if (!isValidEmail(email)) {
    errors.email = 'Invalid email format';
  }

  if (!password) {
    errors.password = 'Password is required';
  } else if (!isValidPassword(password)) {
    errors.password = 'Password must be of 8 Character';
  }

  return errors;
};
export const validateSignupForm = (formData: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string;
}): {[key: string]: string} => {
  const errors: {[key: string]: string} = {};

  if (!formData.firstName) {
    errors.firstName = 'First name is required';
  }

  if (!formData.lastName) {
    errors.lastName = 'Last name is required';
  }

  if (!formData.email) {
    errors.email = 'Email is required';
  } else if (!isValidEmail(formData.email)) {
    errors.email = 'Invalid email format';
  }

  if (!formData.password) {
    errors.password = 'Password is required';
  } else if (!isValidPassword(formData.password)) {
    errors.password = 'Password must be of 8 Character';
  }

  if (!formData.phoneNumber) {
    errors.phoneNumber = 'Phone number is required';
  } else if (!isValidPhoneNum(formData.phoneNumber)) {
    errors.phoneNumber = 'Phone number must be of 10 digit';
  }

  return errors;
};
