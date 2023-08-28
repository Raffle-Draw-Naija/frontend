export const validateEmail = (email) => {
    const regex = /^\w+([.-]\w+)*@\w+([.-]\w+)*\.\w{2,3}$/;
    if (regex.test(email)) return false;
    return true;
};

export const validatePassword = (password) => {
    const regex = /(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])/;
    const regexTest = regex.test(password);
    if (regexTest && password.length >= 8) return false;
    return true;
};