

(Math.pow(2,5)).toString(2) //    100000
(Math.pow(2,5)-1).toString(2)  // 011111
//2^n = odd , 2^n - 1=even

function setBit3(x){  return x|4 }
function toggleBit3(x){  return x^4 }

// Check if the third bit is set: 0100 = 4
(20 & 4) === 4 // true
(16 & 4) === 4 // false

// If is even or odd
(20 & 1) === 1 // false
(19 & 1) === 1 // true

/**
SUM:

Carry: 11
        110
        011
       -----
       1001


110
011
---
010
*/
function clearBit3(x){  return x&(~4) }
function isSetBit3(x){  return x&4==4 }

//https://en.wikipedia.org/wiki/Two's_complement
x=5
x.toString(2) // "101"
y=~5 //-6
(y>>>0).toString(2) // "11111111111111111111111111111010"

//101 to number
parseInt("101",2)

//two complemnts
x="11111111111111111111111111111010"
//convert to decimal, invert bits and include the - signal
-~parseInt(x,2) // == -5
