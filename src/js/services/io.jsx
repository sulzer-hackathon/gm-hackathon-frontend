class IOService {

  constructor(){
    this.callback;
  }

  readFile(filePath, callback){
    this.callback = callback;
    var contents = gm.io.readFile(filePath);
    if (contents !== null) {
      this.processContents(contents);
    }
  }

  processContents(contents){
    this.callback(contents);
  }

}

var ioService = new IOService();
