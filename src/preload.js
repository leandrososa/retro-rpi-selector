import { ipcRenderer, contextBridge } from 'electron';

// window.closeBtn = () => ipcRenderer.send('close-window')
// window.teste = 'teste'

console.log('Preload file successfuly loaded')

/* const closeBtn = document.getElementById('CLOSE_BTN')

closeBtn.addEventListener('click', function (event) {
       ipcRenderer.send('close-window');
}) */

contextBridge.exposeInMainWorld(
    "api", {
        send: (channel) => {
            // whitelist channels
            let validChannels = ["close-window"];
            if (validChannels.includes(channel)) {
                ipcRenderer.send("close-window");
            }
        }
    }
);