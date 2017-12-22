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

  const win = window.open("", "child", "width=640,height=480");
  win.document.open("text/html");
  win.document.write('<html><head><script language="Javascript">setTimeout(function(){document.getElementById("progress").style.display="none";window.print();window.close();},2000);<\/script></head><body>');
  win.document.write('My test text');
  win.document.write('<div id="progress" style="position:fixed;top:0px;left:0px;width:100%;height:100%;color:#000;font-family:Verdana;padding:30px;font-size:12px;z-index:1000;text-align:center;padding-top:200px;">Print in progress...</div>');
  win.document.write("</body></html>");
}, 2000);
