let app;

window.onload = function() {

    app = new PIXI.Application({
        width: innerWidth,
        height: innerHeight,
        backgroundColor: 0xAAAAAA
    });
    document.body.appendChild(app.view);
    // player Objects
    player = new PIXI.Sprite.from("images/player.png");
    player.anchor.set(0.5);
    player.x = app.view.width / 2;
    player.y = app.view.height / 2;

    app.stage.addChild(player);

    // mouse Interactions
    app.stage.tnteractive = true;
    app.stage.on("pointermove", movePlayer);

}

// function movePlayer(e)