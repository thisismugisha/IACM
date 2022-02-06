function setAppropriateFavicon() {
    // Check if the dark-mode Media-Query matches
    if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
    
        document.querySelector("link[rel='icon']").href = "../images/favicon_light.svg";
        document.querySelector("link[rel='alternate icon']").href = "../images/favicon_light.png";
    } else {
        document.querySelector("link[rel='icon']").href = "../images/favicon_dark.svg";
        document.querySelector("link[rel='alternate icon']").href = "../images/favicon_dark.png";
    }
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', setAppropriateFavicon);