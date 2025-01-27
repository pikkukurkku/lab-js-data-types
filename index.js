/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string

const tongueTwister = `${s1} ${s2} ${s3} ${s4} ${s5} ${s3} ${s2} ${s1} ${s4}`;


// Print out the concatenated string

console.log(tongueTwister);


/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings


const javaCamelTail = part1.slice(-1).toUpperCase()
const scriptCamelTail = part2.slice(-1).toUpperCase()

const javaCut = part1.slice(0, -1)
const scriptCut = part2.slice(0, -1)


// Print the cameLtaiL-formatted string

console.log(`${javaCut}${javaCamelTail} ${scriptCut}${scriptCamelTail}`)


/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)

const tip = billTotal * 0.15

// Print out the tipAmount

console.log(Math.round(tip));


/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)

const randomInteger = Math.floor(Math.random()*10+1);


// Print the generated random number

console.log(randomInteger);



/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b; //--> false


const expression2 = a || b; //--> true

const expression3 = !a && b; //--> false

const expression4 = !(a && b); //--> false               this should be true, but why? aaaa its a negation of false, ok makes sense

const expression5 = !a || !b; //--> true

const expression6 = !(a || b); //--> false

const expression7 = a && a; //--> true


// THE MOMENT OF TRUTH

console.log(expression1, expression2, expression3, expression4, expression5, expression6, expression7); //got 6/7 right