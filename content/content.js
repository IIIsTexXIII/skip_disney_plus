const config = {
    skipIntro: true,
    nextEpisode: true
};

chrome.storage.sync.get(["skipIntro", "nextEpisode"], (data) => {
    config.skipIntro = data.skipIntro ?? true;
    config.nextEpisode = data.nextEpisode ?? true;
});

const observer = new MutationObserver(() => {
    if (config.skipIntro) {
        const skipButton = document.querySelector('button.skip__button[aria-label="SALTAR INTRO"]');
        if (skipButton) {
            skipButton.click();
        }
    }

    if (config.nextEpisode) {
        const nextEpisodeButtons = Array.from(document.querySelectorAll('button.skip__button'));
        const nextButton = nextEpisodeButtons.find(btn => btn.textContent.trim().toUpperCase().includes("SIGUIENTE EPISODIO"));
        if (nextButton) {
            nextButton.click();
        }
    }
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});