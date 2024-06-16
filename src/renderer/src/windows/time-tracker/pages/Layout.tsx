import CustomRoutes from "../customRoutes"

import React, { useState, useEffect, useRef } from 'react';

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(timerRef.current);
    }

    return () => clearInterval(timerRef.current);
  }, [isRunning]);

  const formatTime = (time) => {
    const getSeconds = `0${time % 60}`.slice(-2);
    const minutes = Math.floor(time / 60);
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(time / 3600)}`.slice(-2);

    return `${getHours}:${getMinutes}:${getSeconds}`;
  };

  return (
    <div>
      <h1>{formatTime(time)}</h1>
      <button onClick={() => setIsRunning(true)}>Start</button>
      <button onClick={() => setIsRunning(false)}>Stop</button>
      <button onClick={() => setTime(0)}>Reset</button>
    </div>
  );
};

function RootLayout() {
   
  function openSettingsWindow() {
    window.electron.ipcRenderer.send('open-settings-window');
  } 

  function openDashboardWindow() {
    window.electron.ipcRenderer.send('open-dashboard-window');
  } 
  
  return (
    <div className="flex flex-col h-full overflow-hidden">
      <header className="">
        <Timer />
      </header>
      <main className="overflow-y-auto">
        <CustomRoutes />
      </main>
      <footer className="">
        
        <button onClick={() => openDashboardWindow()}>Dashboard</button>
        <button onClick={() => openSettingsWindow()}>Settings</button>
      </footer>
    </div>
  )
}

export default RootLayout
