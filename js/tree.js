// PURE JS

var root={value: 8};
root.left={value: 3};
root.right={value: 10};
root.left.left={value: 1};
root.left.right={value: 6};
root.right.right={value: 14};

var total=0;
var elements=[];


//CLASS




// METHODS
let sortTree= function(node,depth){  
         if(!node) return depth;
         depth++;
         var right=  sortTree(node.right,depth);
          //elements.push(node);
         var left =  sortTree(node.left,depth); //return null
          if(right>left) return right;
          else return left;
}
sortTree(root,0);
console.log(elements[-3])

findHeight(node, depth){
         if(!node){
                  return depth;
         }
       const left =  findHeight(node.left, depth +1);
       const right =  findHeight(node.right, depth +1);
         if(left>right){
                  return left;
         }else{
                 return right;
         }
}

const height = findHeight(root,0);

/*
Normal Binary Tree - BFS
          1
     2          3
  4     5     6     7


Binary Search Tree - DFS - recursive to the left
          4
      3       6   
    1   2   5   7
*/


arr = [128, 97, 121, 123, 98, 97, 105]
var root={value: 128};
root.left={value: 97};
root.left.right={value: 121};
root.left.right.left={value: 98};
root.left.right.right={value: 123};
root.left.right.left.left={value: 97};
root.left.right.left.right={value: 105};
/*
          128       
       97 
         121
       98   123
     97   105

123 - 97=26
105 - 98=7
123 - 121=2

*/

function getStockes(node){
    if(node.right) {
              maxValue= getStockes(node.right);
              return maxValue;
    }else if(node.left) {
              maxValue= getStockes(node.left);
              return maxValue;
    }
    else return node.value;
    return node.value-maxValue;
}

getStockes(root)


//class


// class Node {
//     constructor(value, right, left) {
//         this.value = value;
//         this.left = left;
//         this.right = right;
//     }

//      insert(value) {
//         const newNode = new Node(value);
//         if (this.value) {
//             if (value > this.value.value) {
//                 if (this.right) {
//                     this.right.insert(value);
//                 } else {
//                     this.right = newNode;
//                 }
//             } else {
//                 if (this.left) {
//                     this.left.insert(value);
//                 } else {
//                     this.left = newNode;
//                 }
//             }
//         } else {
//             this.value = vakye;
//         }
//     }
// }


// const tree = new Node('mario'); // Root Node
// tree.left = new Node('garret');
// tree.right = new Node('john');


// // class Tree {

// //     root = null;

   

// // }

// const objTree = new Node();
// objTree.insert(5);
// objTree.insert(3);
// objTree.insert(8);
// objTree.insert(2);
// objTree.insert(9);

// console.log(objTree.root)



var root={value: 8};
root.left={value: 3};
root.right={value: 10};
root.left.left={value: 1};
root.left.right={value: 6};
root.right.right={value: 14};

function preOrder(node){
    if(!node){
        return;
    }
    console.log(node.value)
    preOrder(node.left);
    preOrder(node.right);
}
// preOrder(root)

function inOrder(node){
    if(!node){
        return;
    }
    inOrder(node.left);
    console.log(node.value)
    inOrder(node.right);
}
// inOrder(root);

function posOrder(node){
    if(!node){
        return;
    }
    posOrder(node.left);
    posOrder(node.right);
    console.log(node.value);
}
posOrder(root)
