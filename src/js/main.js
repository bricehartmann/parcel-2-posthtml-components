(function() {
    window.buttonClicks = 0;

    document.getElementById('ExampleButton').addEventListener('click', (event) => {
        buttonClicks++;

        document.getElementById('ButtonClickCounter').innerText =
            `You've clicked the button ${buttonClicks} ${buttonClicks === 1 ? 'time' : 'times'}!`;
    });
})();
