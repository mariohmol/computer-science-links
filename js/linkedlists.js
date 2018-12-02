var head = {
            value: 4, 
            next: { value: 5, 
                   next: {
                     value: 6, 
                     next: null
                   }
                  }
            };



var last = {
             value: 6, 
             next: null
           };
var middle = { value: 5, 
             next: last
            };
var head = {
            value: 4, 
            next: middle
            };


//couting the size
var node = head;
function middleItem(head){
  if(!head) return;
  var count=0;
  while(node.next){
    node=node.next;
    count++
  }
  //getting the middle item in list
  node = head;
  for(i=0;i<count/2;i++){
    node=node.next;
  }
  console.log("Middle man ",node);
}

//Using recursive 
function counter(head){
  if(!head) return 0;
  return counter(head.next)+1;
}

let reverse = function(head){
  let   node = tail = head;
  let prev;
  //4 -> 5 - >6
  while(node){ //4
    let next = node.next; //next=5
    node.next = prev;
    prev = node;
    node = next;
  }
  console.log(prev);
  return prev;
}

var head = { value: 4, next: { value: 5, next: {value: 6, next: null}}};
head.next.next.next = head;
let iscicle = function(head){
 let node = head;
 let i=0;
 while(node){
   let check=head;
   for(k=0;k<i;k++){
     if(check==node) return true;
     check=check.next;
   }
    i++;
   node = node.next;
 }
  return false;
}
