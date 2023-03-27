chrome.runtime.onMessage.addListener(data => {
  console.log(data);
  if (data.type === 'notification') {
    var listImg = data.options.data;
    var counter = 1;
    for (let src of listImg) {
      var filename = (new Date()).valueOf() + "_" + counter+ ".jpg";
      console.log(filename);
      chrome.downloads.download({url:src, 
        filename:"GoogleImages/"+ filename});
      counter++;
    };
  }
});