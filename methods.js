function capitalize(word) {
    if (!word) return '';
    return word[0].toUpperCase() + word.slice(1);
};

function reverseString(str) {
    const reversed = str.split("").reverse().join("");
    return reversed;
};

const calculator = {
    add: function (a, b) {
        return a + b;
    },
    subtract: function (a, b) {
        return a - b;
    },
    divide: function (a, b) {
        return a / b;
    },
    multiply: function (a, b) {
        return a * b;
    }
};

function caesarCipher(str, shift) {

}

export { capitalize, reverseString, calculator }