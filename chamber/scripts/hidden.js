function getTimestamp() {
    const now = new Date();
    return now;
};

document.querySelector("submitBtn").addEventListener("submit", function(event) {
    const event= document.getElementById("timeStamp");
    event.value = getTimestamp();
});
