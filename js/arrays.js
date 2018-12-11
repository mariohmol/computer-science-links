/*
Array with 10 spaces:
H is the HEAD
*/
[  0  1  2  3  4  5  6  7  8  9    10 ] // Memory positions - where pointer points to
[  H, 0, 0, 0, 0, 0, 0, 0, 0, 0   , 0 ] // ptr = null - empty memory
[  A, H, 0, 0, 0, 0, 0, 0, 0, 0   , 0 ] // push A - ptr=0, length=1, head=1
[  A, A, B, H, 0, 0, 0, 0, 0, 0   , 0 ] // push B - ptr=1, length=2, head=3
[  A, A, B, A, B, C, H, 0, 0, 0   , 0 ] // push C - ptr=3, length=3, , head=6
[  A, A, B, A, B, C, A, B, C, D   , H ] // push D - ptr=6, length=4, , head=10
[  A, A, B, A, B, C, A, C, D, D(H), 0 ] // remove index of number 2, so move left array to the right and leNgth--

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

