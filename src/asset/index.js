/*globals chrome:true*/

"use strict";

chrome.tabCapture.capture({
    video: true
}, function (stream) {
    if (stream === null) {
        console.error("failed to capture");
        return;
    }

    let video = document.createElement("video");

    video.src = stream;

    document.querySelector("body").appendChild(video);

    video.play();
});
