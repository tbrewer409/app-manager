const express = require('express');
const { exec } = require('child_process');
const app = express();
const PORT = 8000;

app.use(express.static('public'));

app.get('/stop_a1111', (req, res) => {
    exec('fuser -k 3001/tcp', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error stopping A1111: ${error}`);
        }
    });

    res.send('Stopped A1111 successfully!');
});

app.get('/start_a1111', (req, res) => {
    exec('scripts/start_a1111.sh &', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error starting A1111: ${error}`);
        }
    });

    res.send('Started A1111 successfully!');
});

app.get('/stop_kohya', (req, res) => {
    exec('fuser -k 3011/tcp', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error stopping Kohya_ss: ${error}`);
        }
    });

    res.send('Stopped Kohya_ss successfully!');
});

app.get('/start_kohya', (req, res) => {
    exec('scripts/start_kohya.sh &', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error starting Kohya_ss: ${error}`);
        }
    });

    res.send('Started Kohya_ss successfully!');
});

app.get('/stop_comfyui', (req, res) => {
    exec('fuser -k 3021/tcp', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error stopping ComfyUI: ${error}`);
        }
    });

    res.send('Stopped ComfyUI successfully!');
});

app.get('/start_comfyui', (req, res) => {
    exec('scripts/start_comfyui.sh &', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error starting ComfyUI: ${error}`);
        }
    });

    res.send('Started ComfyUI successfully!');
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on http://0.0.0.0:${PORT}`);
});
