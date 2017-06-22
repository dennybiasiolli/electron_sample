if (MY_BUILD === 'electron') {
  const { ipcRenderer } = require('electron')

  console.log(ipcRenderer.sendSync('synchronous-message', 'ping')) // prints "pong"

  ipcRenderer.on('asynchronous-reply', (event, arg) => {
    console.log(arg) // prints "pong"
  })
  ipcRenderer.send('asynchronous-message', 'ping')
}


var dynamicParagraph = document.getElementById('dynamicParagraph');
setTimeout(function () {
  dynamicParagraph.innerHTML = '...it change after 2 seconds!';
}, 2000);
