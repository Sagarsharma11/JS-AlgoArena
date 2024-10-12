class Stack{
    constructor(){
        this.stack = []
    }

    push(ele){
        this.stack.push(ele);
    }

    isEmpty(){
        return this.stack.length === 0
    }

    peek(){
        if(this.isEmpty()){
            return "Stack is empty"
        }
        return this.stack[ this.size()-1]
    }

    size(){
        return this.stack.length
    }

    pop(ele){
        if(this.isEmpty()){
            return "Stack is empty"
        }
        this.stack.pop();
    }
}

module.exports = {Stack}

