import { BrowserWindow, shell } from "electron"
import { join } from "path"
import icon from '../../../resources/icon.png?asset'
import { is } from "@electron-toolkit/utils"
import { createWindow } from "./mainWindow"


function createSettingsWindow(parentWindow) {
  const settingsWindow = new BrowserWindow({
    parent: parentWindow,
    width: 960,
    height: 750,
    title: "Settings",
    show: false,
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  });

  
    // settingsWindow.on('ready-to-show', () => {
    //   settingsWindow.show();
    // });
  settingsWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
  //   settingsWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  // } else {
  //   settingsWindow.loadFile(join(__dirname, '../renderer/settings.html'));
  // }

  // settingsWindow.on('closed', () => {
  //   // Dereference the window object
  //   settingsWindow = null;
  // });

  return settingsWindow;

}

export { createSettingsWindow }
