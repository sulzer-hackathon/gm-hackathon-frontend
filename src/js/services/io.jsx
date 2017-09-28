class IOService {

  constructor(){

  }

  readFile(filePath){
    var contents = gm.io.readFile(filePath);
    if (contents !== null) {
      processContents(contents);
    }
  }

  processContents(contents){
    //TODO handle uploading contents to speech to text service
  }

}

var ioService = new IOService();
