const preprocessRut = (rutInput) => {
    let rutValue = rutInput.replace('-', '');
    rutValue = rutValue.replace(/^0+/, '');
    const rutBody = rutValue.slice(0, -1);
    const initialVerificationDigit = rutValue.slice(-1).toUpperCase();
    const sanitizedRut = `${rutBody}-${initialVerificationDigit}`;
    return { rutValue, rutBody, initialVerificationDigit, sanitizedRut };
  };
  
  const getExpectedVerificationDigit = (rutValue, rutBody) => {
    let counter = 0;
    let multiplier = 2;
    for (let i = 1; i <= rutBody.length; i += 1) {
      const index = multiplier * rutValue.charAt(rutBody.length - i);
      counter += index;
      if (multiplier < 7) {
        multiplier += 1;
      } else {
        multiplier = 2;
      }
    }
    return 11 - (counter % 11);
  };
  
  const specialCasesObject = {
    k: 10,
    0: 11,
  };
  
  const specialValuesValidation = (value) => {
    return specialCasesObject[value.toLowerCase()] || value;
  };
  
  const checkVerificationDigit = (rutValue, rutBody, initialVerificationDigit) => {
    return (
      getExpectedVerificationDigit(rutValue, rutBody).toString() !==
      specialValuesValidation(initialVerificationDigit).toString()
    );
  };
  
  const checkRut = (rutString) => {
    const { rutValue, rutBody, initialVerificationDigit } = preprocessRut(rutString);
    if (rutBody.length < 7 || checkVerificationDigit(rutValue, rutBody, initialVerificationDigit))
      return false;
    return true;
  };
  
  const validateRut = (rutInput) => {
    const rutValue = rutInput.replace(/\./g, '');
    const rutRegex = /^[0-9]+-[0-9kK]{1}$/;
    return rutRegex.test(rutValue) && checkRut(rutValue);
  };
  
  const rutValidator = (rutInput) => {
    if (!rutInput) return false;
    return validateRut(rutInput);
  };
  
  export default rutValidator;