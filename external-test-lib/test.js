const a = 12;
const b = a + 4;
const printGreeting = () => {
    console.log("This is test file!");
    console.log(require("./test2").greeting);
}
printGreeting();