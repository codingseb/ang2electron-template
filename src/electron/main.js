const {app, BrowserWindow} = require('electron');
var mainWindow = null;

app.on('ready', ()=>{
    var mainWindow = new BrowserWindow({
        width: 1280,
        height: 720
    });

    console.log(__dirname);
    mainWindow.loadURL('file://' + __dirname + '/../../build/index.html');

    mainWindow.on('closed', function () {
        mainWindow = null;
    });
});

app.on('window-all-closed', function () {
    if(process.platform !== 'darwin') {
        app.quit();
    }
});