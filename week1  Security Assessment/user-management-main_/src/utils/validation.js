const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const isEmailFormatCorrect = (email) => {
  return emailRegex.test(email);
};

export { isEmailFormatCorrect };
