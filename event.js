const EventEmitter = require('events');

class test extends EventEmitter {
    execute(task) {
        console.log('Before emit');
        this.emit('begin',this);
        task();
        console.log('after emit');
        this.emit('after');
    }
}

const newTest = new test();
newTest.on('begin',()=> console.log('execute'+this));
newTest.on('after',()=>console.log('done executing'));

newTest.execute(() => console.log(`** executong **`));