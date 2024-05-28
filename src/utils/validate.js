export const validate = (email, password, name) => {

    const isCorrectName = /([a-zA-Z0-9_\s]+)/.test(name)

    const isCorrectEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

    const isCorrectPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);



    if (!isCorrectEmail) return "Enter a valid Email !!"
    else if (!isCorrectPassword) return "Enter a valid Password !!"
    else if (!isCorrectName) return "Enter a valid name !!"

    else return null;
}