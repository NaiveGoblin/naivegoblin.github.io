
document.addEventListener("DOMContentLoaded", () => {

    const currentPath = window.location.pathname;
    const isJapanese = currentPath.startsWith("/ja/") ||
                       currentPath === "/ja";

    // Remove the Japanese prefix to get the English equivalent.
    let englishPath = currentPath.replace(/^\/ja(?=\/|$)/, "");

    if (!englishPath || englishPath === "/") {
        englishPath = "/";
    }

    // Calculate the destination language URL.
    const japanesePath = "/ja" + (englishPath === "/"
        ? "/"
        : englishPath);

    // Find all language switch elements.
    document.querySelectorAll("[data-language-switch]").forEach(link => {

        const targetPath = isJapanese
            ? englishPath
            : japanesePath;

        link.href = targetPath;
        link.textContent = isJapanese ? "English" : "日本語";

        link.lang = isJapanese ? "en" : "ja";
        link.setAttribute("aria-label",
            isJapanese ? "Switch to English" : "日本語に切り替える"
        );

    });

});
