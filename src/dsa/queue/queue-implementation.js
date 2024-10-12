class Queue {
    constructor() {
        this.queue = []
    }
    enqueue(element) {
        this.queue.push(element)
    }
    dequeue() {
        if (this.isEmpty()) {
            return console.log("Queue is Underflow, Cannot do dequeue")
        }
        this.queue.shift;
    }
    isEmpty() {
        return this.queue.length === 0;
    }
    front() {
        if (this.isEmpty()) {
            return console.log("Queue is Underflow, cannot fetch front element")
        }
        return this.queue[0]
    }

    size() {
        return this.queue.length;
    }
    printQueue (){
        console.log(this.queue.join(","))
    }
}

module.exports = { Queue }