class Node {
    constructor(value=null, nextNode=null) {
        this.value = value;
        this.nextNode = nextNode;
    }

}


class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {

        if(this.head == null) this.prepend(value);
        else {
            let tmp = this.head;
            while(tmp.nextNode != null) tmp = tmp.nextNode;

            tmp.nextNode = new Node(value);
        }
        
    }

    prepend(value) {
        this.head = new Node(value, this.head)
    }

    size() {
        if(this.head == null) return 0;
        else {
            let tmp = this.head;
            let size = 1;
            while(tmp.nextNode != null) {
                tmp = tmp.nextNode;
                size += 1;
            }
        return size;
        }
    }

    findHead() {
        return this.head;
    }

    findTail() {
        const length = this.size();
        let tmp = this.head;
        for(let i=0;i<(length-1);i++){
            tmp = tmp.nextNode;
        }
        return tmp;
    }

    at(index) {
        let tmp = this.head;
        for(let i=0;i<(index-1);i++) {
            tmp = tmp.nextNode;
        }
        return tmp;
    }

    pop() {
        const length = this.size();
        const prev = this.at(length-1);
        let tail = this.findTail();
        prev.nextNode = tail.nextNode;
    }

    contains(value) {
        const length = this.size();
        let tmp = this.head;
        for(let i=0;i<length;i++){
            if(tmp.value === value) return true;
            tmp = tmp.nextNode;
        }
        return false;
    }

    find(value) {
        const length = this.size();
        let tmp = this.head;
        for(let i=1;i<length;i++){
            if(tmp.value === value) return i;
            tmp = tmp.nextNode;
        }
        return null;
    }

    toString() {
        const length = this.size();
        let string = '';
        let tmp = this.head;
        for(let i=0;i<length;i++){
            string += '(' + tmp.value + ') -> ';
            tmp = tmp.nextNode;
        }
        string += 'null';
        return console.log(string);
    }

    insertAt(value, index){
        if(this.size()>=index) {
            let nodeBefore = this.at(index-1);
            let nodeAfter = this.at(index);
            let tmp = this.head;
            let i = 1;
            while(tmp.nextNode != null && i<(index-1)) {
                tmp = tmp.nextNode;
                i++;
            }

            tmp = new Node(value, nodeAfter);
            nodeBefore.nextNode = tmp;
        }else{
            console.log('List not long enough!');
        }
    }


    removeAt(index){
        if(this.size()>=index) {
            let nodeBefore = this.at(index-1);
            let nodeRemove = this.at(index);
            nodeBefore.nextNode = nodeRemove.nextNode;
        }else{
            console.log('List index does not exist');
        }
    }
    
};


// example uses class syntax - adjust as necessary
const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.prepend("mouse");

list.toString();

list.insertAt("turtle", 3);
list.toString();

list.removeAt(5);
list.toString();
