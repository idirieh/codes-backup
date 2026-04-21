setTimeout(() => {
    document.getElementById('title1').style.visibility = "visible";
    setTimeout(() => {
        document.getElementById('title2').style.visibility = "visible";
        setTimeout(() => {
            document.getElementById('title3').style.visibility = "visible";
            setTimeout(() => {
                document.getElementById('title4').style.visibility = "visible"
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function revealTitles() {
    const titles = ['title1', 'title2', 'title3', 'title4'];
    for (const title of titles) {
        document.getElementById(title).style.visibility = "visible";
        await delay(1000); // Wait for 1 second before revealing the next title
    }
}

revealTitles();
