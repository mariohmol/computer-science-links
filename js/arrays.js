
/*
Array with 10 spaces:
H is the HEAD
*/
[  H, 0, 0, 0, 0, 0, 0, 0, 0, 0   , 0]
[  1, H, 0, 0, 0, 0, 0, 0, 0, 0   , 0] //push 1 - ptr=0, length=1, head=1
[  1, 1, 2, H, 0, 0, 0, 0, 0, 0   , 0] //push 2 - ptr=1, length=2, head=3
[  1, 1, 2, 1, 2, 3, H, 0, 0, 0   , 0] //push 3 - ptr=3, length=3, , head=6
[  1, 1, 2, 1, 2, 3, 1, 2, 3, 4   , H] //push 4 - ptr=3, length=3, , head=
[  1, 1, 2, 1, 2, 3, 1, 3, 4, 4(H), 0] //remove index of number 2, so move left array to the right and legth--

/*
ptr is the same =3 , and length will be 2
/Number 3 will be in head as a trash value, can ignore


Ex. with ratio x 3 
*/
[  H, 0, 0, 0, 0, 0, 0, 0, 0, 0] //empty memory
[  1, 0, 0, H, 0, 0, 0, 0, 0, 0] //ad
[  1, 2, 0, H, 0, 0, 0, 0, 0, 0] //
[  1, 2, 3, 1, 2, 3, 0, 0, 0, H] //Copy the array 1 time
[  1, 2, 3, 1, 2, 3, 4, 0, 0, H] //
[  1, 2, 3, 1, 2, 3, 4, 5, 0, H] //
[  1, 2, 3, 1, 2, 3, 4, 5, 6, H] //Copy the array 2 time
// If you try to add 7 to this array you will receive out of memory exception

