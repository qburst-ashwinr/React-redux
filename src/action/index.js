export const formHandler = (formName, formAge, formAddress) => ({
  type: formManipulation.FORM_SUBMIT,
  nameOfUser: formName,
  ageOfUser: formAge,
  addressOfUser: formAddress
});
export const formManipulation = {
  FORM_SUBMIT: "FORM_SUBMIT"
};
