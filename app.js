MathOperations = (a, b) => {
    console.log("Addition", (a + b));
    console.log("Subtraction", (a - b));
    console.log("Multiplication", (a * b));
    console.log("Division", (a / b));
};
MathOperations(1, 2);

onlyAdd = (a, b) => {
    console.log("Addition", (a + b));
};
onlyAdd(1, 2);