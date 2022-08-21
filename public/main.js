const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');
const os = require('os');
require('@electron/remote/main').initialize();


function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        title: 'Nozdive Program',
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true
        }
    })

    console.log('createWindow', os);
    console.log(os.hostname());

    win.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
    win.webContents.send('ping', os.hostname());
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0)
        createWindow();
});

// Event handler for asynchronous incoming messages
ipcMain.on('asynchronous-message', (event, arg) => {
    console.log(arg) // prints "ping" in the Node console
    // works like `send`, but returning a message back
    // to the renderer that sent the original message
    event.reply('asynchronous-reply', {
        hostname: os.hostname(),
        platform: os.platform(),
        type: os.type()
    })
})
