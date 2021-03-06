//IIFE -- Immediately Invoked Function Expression
// also called self executing anonymous function
(function () {
    // Game Variables
    var canvas;
    var stage;
    var AssetManager;
    var CurrentScene;
    var CurrentState;
    var ScoreBoardManager;
    var Manifest = [
        { id: "StartButton", src: "/Assets/images/StartButton.png" },
        { id: "RestartButton", src: "/Assets/images/RestartButton.png" },
        { id: "InstructionButton", src: "/Assets/images/Instructionbtn.png" },
        { id: "ExitButton", src: "/Assets/images/ExitButton.png" },
        { id: "MenuButton", src: "/Assets/images/menu.png" },
        { id: "rocket", src: "/Assets/images/ship.png" },
        { id: "space", src: "/Assets/images/space.gif" },
        { id: "spaceman", src: "/Assets/images/sman.png" },
        { id: "stone", src: "/Assets/images/stone.png" },
        { id: "save", src: "/Assets/audio/save.wav" },
        { id: "crash", src: "/Assets/audio/crash.wav" },
        { id: "GameStartSou", src: "/Assets/audio/GameStart.wav" },
        { id: "GameovSound", src: "/Assets/audio/gameOver.ogg" },
        { id: "engine", src: "/Assets/audio/engine.ogg" }
    ];
    function Init() {
        console.log("%c Assets Loading...", "font-weight:bold; font-size:20px; color: green;");
        AssetManager = new createjs.LoadQueue();
        managers.Game.AssetManager = AssetManager; // set as single instance of the LoadQueue object
        AssetManager.installPlugin(createjs.Sound); // enables sound file preloading
        AssetManager.on("complete", Start);
        AssetManager.loadManifest(Manifest);
    }
    function Start() {
        console.log("%c Game Initializing...", "font-weight:bold; font-size:20px; color: red;");
        canvas = document.getElementsByTagName("canvas")[0];
        stage = new createjs.Stage(canvas);
        managers.Game.Stage = stage; // create a reference to the stage class
        stage.enableMouseOver(20); // enables mouse over events
        createjs.Ticker.framerate = 60; // sets framerate to 60fps
        createjs.Ticker.on("tick", Update);
        CurrentState = config.Scene.START;
        managers.Game.CurrentState = CurrentState;
        // setup scoreboard manager
        ScoreBoardManager = new managers.ScoreBoard();
        managers.Game.ScoreBoardManager = ScoreBoardManager;
        // This is where all the magic happens
        Main();
    }
    function Update() {
        if (CurrentState != managers.Game.CurrentState) {
            CurrentState = managers.Game.CurrentState;
            Main();
        }
        CurrentScene.Update();
        stage.update();
    }
    function Main() {
        console.log("%c Switching Scenes...", "font-style:italic; font-size:16px; color:blue;");
        if (CurrentScene) {
            CurrentScene.Destroy();
            stage.removeChild(CurrentScene);
            // createjs.Sound.stop(); // stop all sounds
        }
        switch (CurrentState) {
            case config.Scene.START:
                CurrentScene = new scenes.Start();
                break;
            case config.Scene.PLAY:
                CurrentScene = new scenes.Play();
                break;
            case config.Scene.END:
                CurrentScene = new scenes.End();
                break;
            case config.Scene.INSTRUSTION:
                CurrentScene = new scenes.Instructon();
                break;
        }
        managers.Game.CurrentScene = CurrentScene;
        stage.addChild(CurrentScene);
    }
    window.addEventListener("load", Init);
})();
//# sourceMappingURL=game.js.map