import { BrowserWindow, shell } from 'electron';
import { join } from 'path';
import icon from '../../../resources/icon.png?asset';
import { is } from '@electron-toolkit/utils';

function createMainWindow() {
  const mainWindow = new BrowserWindow({
    width: 360,
    height: 650,
    title: 'Time Tracker',
    show: false,
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  });

  mainWindow.on('ready-to-show', () => {
    mainWindow.show();
  });

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url);
    return { action: 'deny' };
  });

  const url = is.dev && process.env['ELECTRON_RENDERER_URL']
    ? process.env['ELECTRON_RENDERER_URL']
    : `file://${join(__dirname, '../renderer/index.html')}`;

  mainWindow.loadURL(url);

  return mainWindow;
}

export { createMainWindow };
