import Node from "./node.js";

export default class LinkedList {
    constructor() {
        this.headNode = null;
        this.tailNode = null;
    }

    append(value) {
        if(this.headNode == null) this.prepend(value);
        else {
            let tmp = this.headNode;
            while(tmp.nextNode != null) tmp = tmp.nextNode;

            tmp.nextNode = new Node(value);
        }
        
    }

    prepend(value) {
        this.headNode = new Node(value, this.headNode)
    }

    size() {
        if(this.headNode == null) return 0;
        else {
            let tmp = this.headNode;
            let size = 1;
            while(tmp.nextNode != null) {
                tmp = tmp.nextNode;
                size += 1;
            }
        return size;
        }
    }

    head() {
        return this.headNode;
    }

    tail() {
        const length = this.size();
        let tmp = this.headNode;
        for(let i=0;i<(length-1);i++){
            tmp = tmp.nextNode;
        }
        return tmp;
    }

    at(index) {
        let tmp = this.headNode;
        for(let i=0;i<(index-1);i++) {
            tmp = tmp.nextNode;
        }
        return tmp;
    }

    pop() {
        if(!this.headNode) return; //If list is empty
        else if(!this.headNode.nextNode) {
            this.headNode = null;
            this.tailNode = null;
        } else {
            const length = this.size();
            const prev = this.at(length-1);
            let tail = this.tail();
            prev.nextNode = tail.nextNode;
        }
    }

    contains(value) {
        const length = this.size();
        let tmp = this.headNode;
        for(let i=0;i<length;i++){
            if(tmp.value === value) return true;
            tmp = tmp.nextNode;
        }
        return false;
    }

    find(value) {
        const length = this.size();
        let tmp = this.headNode;
        for(let i=1;i<length;i++){
            if(tmp.value === value) return i;
            tmp = tmp.nextNode;
        }
        return null;
    }

    toString() {
        const length = this.size();
        let string = '';
        let tmp = this.headNode;
        for(let i=0;i<length;i++){
            string += '(' + tmp.value + ') -> ';
            tmp = tmp.nextNode;
        }
        string += 'null';
        return console.log(string);
    }

    insertAt(value, index){
        if(index <= 0) return console.error("Error occured:", "Index must be positive integer");
        else if(index === 1) this.prepend(value);
        else if(index > this.size()) this.append(value);  //Adds to end of list if index does not exist
        else{
            let nodeBefore = this.at(index-1);
            let nodeAfter = this.at(index);
            let tmp = this.headNode;
            let i = 1;
            while(tmp.nextNode != null && i<(index-1)) {
                tmp = tmp.nextNode;
                i++;
            }

            tmp = new Node(value, nodeAfter);
            nodeBefore.nextNode = tmp;
        }
    }


    removeAt(index){
        if(index === 1) {
            let nodeAfter = this.at(index+1);
            this.headNode = nodeAfter;
        }
        else if(index > 1 && this.size() >= index) {
            let nodeBefore = this.at(index-1);
            let nodeRemove = this.at(index);
            nodeBefore.nextNode = nodeRemove.nextNode;
        }else{
            console.error("Error occured:", "List index does not exist");
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

list.insertAt("turtle", 1);
list.toString();

list.removeAt(1);
list.toString();
