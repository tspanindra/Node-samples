const EventEmitter = require('events');

class WithLog extends EventEmitter {
  execute(taskFunc) {
    console.log('Before executing');
    this.emit('begin');
    taskFunc();
    this.emit('end');
    console.log('After executing');
  }
}

const withLog = new WithLog();

withLog.on('begin', () => console.log('About to Execute'));
withLog.on('end', () => console.log('End of Execution'));

withLog.execute(() => console.log('**** Executing task ***'));
