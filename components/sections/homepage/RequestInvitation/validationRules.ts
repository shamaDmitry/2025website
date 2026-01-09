export const validationRules = {
  firstName: {
    required: { message: "First name is required", value: true },
    minLength: {
      value: 2,
      message: "First name must be at least 2 characters",
    },
    pattern: {
      value: /^[A-Za-z]+$/,
      message: "First name must contain only letters",
    },
  },
  lastName: {
    required: { message: "Last name is required", value: true },
    minLength: {
      value: 2,
      message: "Last name must be at least 2 characters",
    },
    pattern: {
      value: /^[A-Za-z]+$/,
      message: "Last name must contain only letters",
    },
  },
  email: {
    required: { message: "Email is required", value: true },
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: "Invalid email address",
    },
  },
  phone: {
    required: { message: "Phone number is required", value: true },
    pattern: {
      value: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
      message: "Invalid phone number format (XXX-XXX-XXXX)",
    },
  },
  message: {
    required: { message: "Message is required", value: true },
    minLength: {
      value: 10,
      message: "Message must be at least 10 characters",
    },
    maxLength: {
      value: 500,
      message: "Message cannot exceed 500 characters",
    },
  },
};
