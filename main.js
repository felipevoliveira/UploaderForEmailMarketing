require('dotenv').config()

const { fs } = require('fs')
const { path } = require('path')
const { app, BrowserWindow, ipcMain, ipcRenderer} = require('electron')

require('electron-reload')(__dirname);



const AWS = require('aws-sdk')

const s3 = new AWS.S3();

function createWindow(){
    const win = new BrowserWindow({
        width: 600,
        heigth: 400,
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.loadFile('index.html')
    win.webContents.openDevTools()
    
    
     
}

app.whenReady().then(createWindow)

app.on('window-all-close', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('active', () => {
    if (BrowserWindow.getAllWindows().length === 0){
        createWindow()
    }
})



  function upload (e){
      console.log("upload")
  }