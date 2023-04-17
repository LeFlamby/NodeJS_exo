

const information = require('./information');


const cowsay = require("cowsay");

console.log(cowsay.say({
    text: `Yosh! My name is ${information.nom} and i'm in the ${information.campus}'s campus`,
    e: "oO",
    T: "U",}))
