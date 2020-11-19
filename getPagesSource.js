function StringToEmoji(document_root) {
    document_root.getElementsByTagName("p")[0].innerHTML = "replace it";

    chrome.runtime.sendMessage({
        action: "consoleLog",
        source: document_root.getElementsByTagName("p")
    });

    return html;
}

StringToEmoji(document);

chrome.runtime.sendMessage({
    action: "getSource",
    // source: StringToEmoji(document)
    source: "test"
});