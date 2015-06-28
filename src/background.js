"use strict";

chrome.tabCapture.capture(function (stream) {
    console.log(stream);
});
