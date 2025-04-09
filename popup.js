document.addEventListener('DOMContentLoaded', () => {
    const skipIntro = document.getElementById('skipIntro');
    const nextEpisode = document.getElementById('nextEpisode');

    chrome.storage.sync.get(['skipIntro', 'nextEpisode'], (data) => {
        skipIntro.checked = data.skipIntro ?? true;
        nextEpisode.checked = data.nextEpisode ?? true;
    });

    skipIntro.addEventListener('change', () => {
        chrome.storage.sync.set({ skipIntro: skipIntro.checked });
    });

    nextEpisode.addEventListener('change', () => {
        chrome.storage.sync.set({ nextEpisode: nextEpisode.checked });
    });
});