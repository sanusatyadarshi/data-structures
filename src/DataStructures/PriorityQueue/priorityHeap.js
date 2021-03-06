const HeapMin = require('../Heap/heapMin');


class Node {
    constructor(element, priority) {
        this.element = element; 
        this.priority = priority;
    }
}


class PriorityHeap extends HeapMin{

    constructor() {
        super();
    }

    /**
     * Add item to the priority queue.
     * @param {*} value - item we're going to add to the queue.
     * @param {number} [priority] - items priority.
     * @return {PriorityQueue}
    */
    insert(value, priority = 0) {
        var newNode = new Node(value, priority);
        super.insert(newNode);
        return this;
    }

    remove() {
        if(this.isEmpty())
            return false;
        if(this.getSize() == 1){
            this.list.pop();
        } else {
            this.swapToRemove();
            this.heapify(0);
        }
    } 

    /**
        * Action element according of priority
        * @param {number} value
        * @param {number} index
    */
    shouldSwap(childIndex, parentIndex) {
        if(!this.list[childIndex] || !this.list[parentIndex]){
            return false;
        }
        return this.list[childIndex].priority > this.list[parentIndex].priority;
    }

    getFirstElement(){
        if(this.isEmpty())
            return false;

        return this.list[0].element;
    }


}
module.exports = PriorityHeap;