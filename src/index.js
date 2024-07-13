const { node } = require("webpack");

function LinkedList () {


  const Node = class {
    constructor(value = null, nextNode = null) {
      this.data = value;
      this.next = nextNode;
    }
  }

  const head = new Node();

  const append = (value, current = head) => {
    if (current.next == null){
      current.next = new Node(value);
      return
    } else {
      append(value, current.next);
    }
  }

  const prepend = (value, current = head) => {
    if (current.next == null) {
      current.next = new Node(value);
    } else if (current.next != null) {
      let save = current.next;
      current.next = new Node(value);
      current.next.next = save;
    } else { return }
  }

  const size = (current = head, counter = 0) => {
    if (current.next == null) {
      console.log(`List has ${counter} nodes.`);
      return;
    } else {
      size(current.next, counter+1);
    }
  }

  const start = (current = head) => {
    return current.next;
  }

  const end = (current = head) => {
    if(current.next == null) {
      return current;
    } else {
      end(current.next);
    }
  }

  const readList = (current = head) => {
    if (current.next == null){
      console.log(current);
      console.log(`end of list`);
      return
    } else {
      console.log(current);
      readList(current.next);
    }
  }

  append(10, head);
  append(20, head);

  start()

  prepend(11, head);
  append(30, head);
  append(40, head);
  append(50, head);




  readList();
  size();
  console.log(start());
  console.log(end());

}



const list = LinkedList();