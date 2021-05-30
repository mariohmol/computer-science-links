// Linkedin Lis with 4 -> 5 -> 6 -> null
var head = {
    value: 4, 
    next: { 
       value: 5, 
       next: {
            value: 6, 
            next: null
        }
   }
};

function printLinkedLists(node){
    while(node){
        console.log(value);
        node = node.next;
    }
}

printLinkedLists(head)

// STACK 
// H = 4                    insert(4)   
// H = 5 -> 4               insert(5)
// H = 6 -> 5 -> 4          insert(6)


// QUEUE
// H = 4                    insert(4)   
// H = 4 -> 5               insert(5)
// H = 4 -> 5 -> 6          insert(6)



class LinkedList {
    head = null;

    insertBefore(value){
        if(this.head){
            this.head = { value, next: this.head };
        }else{
            this.head = { value, next: null };
        }
    }

    insertLast(value){
        if(this.head){
            let node = head;
            while(node.next){ node = node.next }
            node.next = { value, next: null };
        }else{
            this.head = { value, next: null };
        }
    }
}

const myLinkedList = new LinkedList();
myLinkedList.insertBefore(4)
myLinkedList.insertBefore(5)
myLinkedList.insertBefore(6)
printLinkedLists(myLinkedList)



// ----

var head = {
    value: 4,
};

middle =  { 
    value: 5
};

head.next = middle

var tail = {
    value: 6
};

middle.next = tail;






// Linkedin List using pointers style with 4 -> 5 -> 6 -> null
var tail = {
    value: 6, 
    next: null
};

var middle = { 
    value: 5, 
    next: tail
};

var head = {
    value: 4, 
    next: middle
};




// Double Linkedin List using pointers style with 4 -> 5 -> 6 -> null
var tail = {
    value: 6, 
    next: null,
    prev: middle
};

var middle = { 
    value: 5, 
    next: tail,
    prev: head
};

var head = {
    value: 4, 
    next: middle,
    prev: null
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
