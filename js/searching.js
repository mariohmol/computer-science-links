# Searching

Searching

```js
const tree = {
  value: 8
  right: { value: 5},
  left: { value: 5}
}

// Pre Order 
function preOrder(node){
  if(!node){
    return;
  }
  console.log(node.value);
  preOrder(node.left);
  preOrder(node.right)
}
preOrder(tree)


In Order
function inOrder(node){
  if(!node){
    return;
  }
  
  inOrder(node.left);
  console.log(node.value);
  inOrder(node.right)
}

Pos Order
function posOrder(node){
  if(!node){
    return;
  }
  
  posOrder(node.left);
  posOrder(node.right);
  console.log(node.value);
}
```

## Exercises

//https://en.wikipedia.org/wiki/List_of_Dewey_Decimal_classes

/**

Contents  [hide] 
1	Class 000 – Computer science, information & general works
2	Class 100 – Philosophy & psychology
3	Class 200 – Religion
4	Class 300 – Social sciences
5	Class 400 – Language
6	Class 500 – Science
7	Class 600 – Technology
8	Class 700 – Arts & recreation
9	Class 800 – Literature
10	Class 900 – History & geography
11	*/

// 0000001 = 000.001 example with 3 digis after class
var librarybook = [ 000001, 1000001, 2000001, 3000001,3000002,3000003, 400001,500001,600001,700001,800001,900001,900002];

var books = [ {id: 000001, value: {name: "book 1"} } , {id: 100001, value: {name: "book 2"} } ];


const library = [
    {code: '005.133', title: 'Mike Cowlishaw: The REXX Language'},
    {code: '005.133', title: 'Sams: Teach Yourself C++ In 21 Days'},
    {code: '005.133', title: 'Bjarne Stroustrup: The C++ Programming Language'},
    {code: '005.2762', title: 'Douglas Crockford: JavaScript: The Good Parts'},
    {code: '005.2762', title: 'David Flanagan: JavaScript: The Definitive Guide'},
    {code: '005.44684', title: 'Meinhard Schmidt: Windows Vista for Dummies'},
    {code: '220.52081', title: 'Zondervan: NIV Study Bible'},
    {code: '231.7652', title: 'Dr Russell Humphries: Starlight and Time'},
    {code: '623.82509051', title: 'Frederick Thomas Jane: Jane\'s Fighting Ships'}, 
    {code: '796.8092', title: 'Chuck Norris: The Official Chuck Norris Fact Book'},
];
const searchBook = (library, dewey, title) => {
  let start = 0;
  let end = library.length;
  while('') {
    if(start > end) {
      return false;
    }
    const index = Math.floor((start + end) / 2);
    const ptr = library[index];
    if(ptr.code > dewey) {
      end = index - 1;
      continue;
    } 
    if(ptr.code < dewey) {
      start = index + 1;
      continue;
    }
    if(ptr.title === title) {
      return ptr;
    } 
    for(let i = index + 1; i < end && library[i].code === dewey; i++) {
      if(library[i].title === title) {
        return library[i];
      }
    }
    for(let i = index - 1; i >= start && library[i].code === dewey; i--) {
      if(library[i].title === title) {
        return library[i];
      }
    }
    return false;
  }
  
};





//  1 min to 10 max  
//Loop over the array and make currentNode - minValue = newPosition , example node 1 - 1 =0 , 3 -1 = 2 position
var  original = [ 3, 4, 8, 7, 2, 1, 5, 10 , 9, 6 ] ;
// [  ,  , 3 ,4  ,  ,  ,  ,  ,  , 10 ] 

//swtich nodes in the same array
var i=2;
var j=3;
var temp=original[i];
original[i]=original[j];
original[j]=temp;



