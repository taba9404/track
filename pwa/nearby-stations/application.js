if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/track/pwa/nearby-stations/service_worker.js')
        .then(reg => {
        console.log('Service worker registered!', reg);
    });
}