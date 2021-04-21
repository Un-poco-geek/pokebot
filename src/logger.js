const colors = require("colors")
const getTime = () => {
    return Date().toString().split(" ")[4]
}
const sucess = (message)=>  {
    console.log(colors.green(`[${getTime().blue}] - [SUCESS] - ${message}`))
}
const info = (message)=>  {
    console.info(colors.gray(`[${getTime().blue}] - [INFO] - ${message}`))
}
const error = (message)=>  {
    console.error(colors.red(`[${getTime().blue}] - [ERROR] - ${message}`))
}
const warn = (message)=>  {
    console.warn(colors.yellow(`[${getTime().blue}] - [WARN] - ${message}`))
}

module.exports = {sucess,info,error,warn}