let canvas, ctx;
    window.onload = function () {
        canvas = document.getElementById('canvas')
        ctx = canvas.getContext("2d");
        document.addEventListener("keydown", keyDownEvent);
        let x = 8;
        setInterval(draw, 1000 / x);
    };

    let gridSize = (tileSize = 20);
    let nextX = (nextY = 0);

    let defaultTailSize = 3;
    let tailSize = defaultTailSize;
    let snakeTrail = [];
    let snakeX = (snakeY = 10);

    let appleX = (appleY = 15);
function draw() {
    // move Snake in next pos
    snakeX += nextX;
    snakeY += nextY;
    if (snakeX < 0) {
        snakeX = gridSize - 1;
    }
    if (snakeX > gridSize - 1) {
        snakeX = 0;
    }
    if (snakeY < 0) {
        snakeY = gridSize - 1;
    }
    if (snakeY > gridSize - 1) {
        snakeY = 0;
    }
    if (snakeX == appleX && snakeY == appleY) {
        tailSize++;
        appleX = Math.floor(Math.random() * gridSize);
        appleY = Math.floor(Math.random() * gridSize);
    }
    ctx.fillStyle = "#1C1D24";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    grd = ctx.createLinearGradient(0.000, 150.000, 300.000, 150.000);

    grd.addColorStop(0.000, 'rgba(247, 149, 51, 1.000)');
    grd.addColorStop(0.151, 'rgba(243, 112, 85, 1.000)');
    grd.addColorStop(0.311, 'rgba(239, 78, 123, 1.000)');
    grd.addColorStop(0.462, 'rgba(161, 102, 171, 1.000)');
    grd.addColorStop(0.621, 'rgba(80, 115, 184, 1.000)');
    grd.addColorStop(0.748, 'rgba(16, 152, 173, 1.000)');
    grd.addColorStop(0.875, 'rgba(7, 179, 155, 1.000)');
    grd.addColorStop(1.000, 'rgba(111, 186, 130, 1.000)');
    ctx.fillStyle = grd;
    for (var i = 0; i < snakeTrail.length; i++) {
        ctx.fillRect(
            snakeTrail[i].x * tileSize,
            snakeTrail[i].y * tileSize,
            tileSize,
            tileSize
        );
        if (snakeTrail[i].x == snakeX && snakeTrail[i].y == snakeY) {
            tailSize = defaultTailSize;
        }
    }
    ctx.fillStyle = grd;
    ctx.fillRect(appleX * tileSize, appleY * tileSize, tileSize, tileSize);

    snakeTrail.push({ x: snakeX, y: snakeY });
    while (snakeTrail.length > tailSize) {
        snakeTrail.shift();
    }
}
function keyDownEvent(e) {
    switch (e.keyCode) {
        case 37:
            nextX = -1;
            nextY = 0;
            break;
        case 38:
            nextX = 0;
            nextY = -1;
            break;
        case 39:
            nextX = 1;
            nextY = 0;
            break;
        case 40:
            nextX = 0;
            nextY = 1;
            break;
    }
}






