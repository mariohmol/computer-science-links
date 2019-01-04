var root={value: 8};
root.left={value: 3};
root.right={value: 10};
root.left.left={value: 1};
root.left.right={value: 6};
root.right.right={value: 14};

var total=0;
var elements=[];
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
