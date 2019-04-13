import * as electron from 'electron'
import {app, BrowserWindow} from 'electron'

let win: Electron.BrowserWindow = null

app.on('ready', () => {
  win = new BrowserWindow()
  win.loadURL('https://en.wikipedia.org/wiki/Electron_(software_framework)')
})