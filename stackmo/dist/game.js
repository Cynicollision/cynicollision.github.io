/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vastgame", function() { return Vastgame; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__canvas__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__enum__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__input__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__game_context__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__game_runner__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__room__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actor__ = __webpack_require__(9);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Actor", function() { return __WEBPACK_IMPORTED_MODULE_6__actor__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ActorInstance", function() { return __WEBPACK_IMPORTED_MODULE_6__actor__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__boundary__ = __webpack_require__(17);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Boundary", function() { return __WEBPACK_IMPORTED_MODULE_7__boundary__["a"]; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Enum", function() { return __WEBPACK_IMPORTED_MODULE_1__enum__; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return __WEBPACK_IMPORTED_MODULE_2__input__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__grid__ = __webpack_require__(10);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Grid", function() { return __WEBPACK_IMPORTED_MODULE_8__grid__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "GridCell", function() { return __WEBPACK_IMPORTED_MODULE_8__grid__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Room", function() { return __WEBPACK_IMPORTED_MODULE_5__room__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__sprite__ = __webpack_require__(6);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Sprite", function() { return __WEBPACK_IMPORTED_MODULE_9__sprite__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SpriteTransformation", function() { return __WEBPACK_IMPORTED_MODULE_9__sprite__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__view__ = __webpack_require__(11);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "View", function() { return __WEBPACK_IMPORTED_MODULE_10__view__["a"]; });






// export public modules








var VastgameHTML2D = /** @class */ (function () {
    function VastgameHTML2D() {
    }
    VastgameHTML2D.prototype.init = function (canvasElementID, options) {
        if (options === void 0) { options = {}; }
        __WEBPACK_IMPORTED_MODULE_2__input__["a" /* Input */].init();
        var element = document.getElementById(canvasElementID);
        var canvas = new __WEBPACK_IMPORTED_MODULE_0__canvas__["a" /* GameCanvasHTML2D */](element);
        canvas.init(options.canvas);
        __WEBPACK_IMPORTED_MODULE_3__game_context__["a" /* GameContext */].setCanvas(canvas);
        this.runner = new __WEBPACK_IMPORTED_MODULE_4__game_runner__["a" /* GameRunner */](canvas, options);
    };
    VastgameHTML2D.prototype.start = function (roomID) {
        this.setRoom(roomID);
        this.runner.start();
    };
    VastgameHTML2D.prototype.setRoom = function (roomID, startArgs) {
        var room = __WEBPACK_IMPORTED_MODULE_5__room__["a" /* Room */].get(roomID);
        var previousRoom = __WEBPACK_IMPORTED_MODULE_3__game_context__["a" /* GameContext */].getCurrentRoom();
        if (previousRoom) {
            previousRoom.end();
        }
        __WEBPACK_IMPORTED_MODULE_3__game_context__["a" /* GameContext */].setCurrentRoom(room);
        if (room.hasStart) {
            room.callStart(startArgs);
        }
    };
    return VastgameHTML2D;
}());
var Vastgame = /** @class */ (function () {
    function Vastgame() {
    }
    Vastgame.start = function (canvasElementID, initialRoomID, options) {
        this.game.init(canvasElementID, options);
        this.game.start(initialRoomID);
        return this.game;
    };
    Vastgame.setRoom = function (roomID, startArgs) {
        this.game.setRoom(roomID, startArgs);
    };
    Vastgame.game = new VastgameHTML2D();
    return Vastgame;
}());



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameContext; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__input__ = __webpack_require__(5);

var GameContext = /** @class */ (function () {
    function GameContext() {
        this.actors = {};
        this.events = {};
        this.rooms = {};
        this.sprites = {};
        this.nextEventID = (function () {
            var currentID = 0;
            return (function () { return ++currentID; });
        })();
    }
    GameContext.setCanvas = function (canvas) {
        var _this = this;
        this._instance.canvas = canvas;
        __WEBPACK_IMPORTED_MODULE_0__input__["a" /* Input */].registerClickHandler(function (ev) {
            if (_this._instance.currentRoom) {
                _this._instance.currentRoom.handleClick(ev);
            }
        });
    };
    // actors
    GameContext.defineActor = function (name, actor) {
        if (this._instance.actors[name]) {
            throw new Error("Actor " + name + " has already been defined.");
        }
        this._instance.actors[name] = actor;
    };
    GameContext.getActor = function (name) {
        if (!this._instance.actors[name]) {
            throw new Error("Actor " + name + " has not been defined.");
        }
        return this._instance.actors[name];
    };
    // rooms
    GameContext.defineRoom = function (name, room) {
        if (this._instance.rooms[name]) {
            throw new Error("Room " + name + " has already been defined.");
        }
        this._instance.rooms[name] = room;
    };
    GameContext.getRoom = function (name) {
        if (!this._instance.rooms[name]) {
            throw new Error("Room " + name + " has not been defined.");
        }
        return this._instance.rooms[name];
    };
    GameContext.getCurrentRoom = function () {
        return this._instance.currentRoom;
    };
    GameContext.setCurrentRoom = function (room) {
        this._instance.currentRoom = room;
    };
    // sprites
    GameContext.defineSprite = function (name, sprite) {
        if (this._instance.sprites[name]) {
            throw new Error("Sprite " + name + " has already been defined.");
        }
        this._instance.sprites[name] = sprite;
    };
    GameContext.getSprite = function (name) {
        if (!this._instance.sprites[name]) {
            throw new Error("Sprite " + name + " has not been defined.");
        }
        return this._instance.sprites[name];
    };
    // events
    GameContext.registerEvent = function (event) {
        this._instance.events[this._instance.nextEventID()] = event;
    };
    GameContext.checkAndFireEvents = function () {
        for (var eventID in this._instance.events) {
            var event_1 = this._instance.events[eventID];
            if (event_1.conditionCallback()) {
                event_1.actionCallback();
                if (event_1.fireOnce) {
                    delete this._instance.events[eventID];
                }
            }
        }
    };
    GameContext._instance = new GameContext();
    return GameContext;
}());



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Settings", function() { return Settings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActorID", function() { return ActorID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomID", function() { return RoomID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpriteID", function() { return SpriteID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameAction", function() { return GameAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LevelBgColor", function() { return LevelBgColor; });
var Settings;
(function (Settings) {
    Settings["CanvasWidth"] = "CanvasWidth";
    Settings["CanvasHeight"] = "CanvasHeight";
    Settings["StackmoProgress"] = "StackmoProgress";
})(Settings || (Settings = {}));
var ActorID;
(function (ActorID) {
    ActorID["ExitButton"] = "BackButton";
    ActorID["Block"] = "Block";
    ActorID["LevelIcon"] = "LevelIcon";
    ActorID["Player"] = "Player";
    ActorID["ScrollArrow"] = "ScrollArrow";
    ActorID["Title"] = "Title";
    ActorID["Wall"] = "Wall";
    ActorID["Win"] = "Win";
})(ActorID || (ActorID = {}));
var RoomID;
(function (RoomID) {
    RoomID["Title"] = "Title";
    RoomID["LevelSelect"] = "LevelSelect";
    RoomID["Level"] = "Level";
})(RoomID || (RoomID = {}));
var SpriteID;
(function (SpriteID) {
    SpriteID["Arrows"] = "Arrows";
    SpriteID["Digits"] = "Digits";
    SpriteID["DoorSheet"] = "DoorSheet";
    SpriteID["Box"] = "Box";
    SpriteID["LevelIcon"] = "LevelIcon";
    SpriteID["StackmoSheet"] = "StackmoSheet";
    SpriteID["TextSheet"] = "TextSheet";
    SpriteID["Title"] = "Title";
    SpriteID["Wall"] = "Wall";
    SpriteID["X"] = "X";
})(SpriteID || (SpriteID = {}));
var GameAction;
(function (GameAction) {
    GameAction["Drop"] = "Drop";
    GameAction["Fall"] = "Fall";
    GameAction["Jump"] = "Jump";
    GameAction["Lift"] = "Lift";
    GameAction["Move"] = "Move";
    GameAction["CheckStopMoving"] = "CheckStopMoving";
    GameAction["Stop"] = "Stop";
    GameAction["Win"] = "Win";
})(GameAction || (GameAction = {}));
// from top row of NES color palette (TODO: rest of them)
var LevelBgColor;
(function (LevelBgColor) {
    LevelBgColor["DarkTeal"] = "#001820";
    LevelBgColor["Teal"] = "#006070";
})(LevelBgColor || (LevelBgColor = {}));


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActorState", function() { return ActorState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Direction", function() { return Direction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameState", function() { return GameState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Key", function() { return Key; });
var ActorState;
(function (ActorState) {
    ActorState[ActorState["Active"] = 1] = "Active";
    ActorState[ActorState["Destroyed"] = 2] = "Destroyed";
})(ActorState || (ActorState = {}));
var Direction;
(function (Direction) {
    Direction[Direction["Right"] = 0] = "Right";
    Direction[Direction["Down"] = 90] = "Down";
    Direction[Direction["Left"] = 180] = "Left";
    Direction[Direction["Up"] = 270] = "Up";
})(Direction || (Direction = {}));
var GameState;
(function (GameState) {
    GameState[GameState["Running"] = 1] = "Running";
    GameState[GameState["Paused"] = 2] = "Paused";
})(GameState || (GameState = {}));
var Key;
(function (Key) {
    Key[Key["Any"] = -1] = "Any";
    Key[Key["Space"] = 32] = "Space";
    Key[Key["Left"] = 37] = "Left";
    Key[Key["Up"] = 38] = "Up";
    Key[Key["Right"] = 39] = "Right";
    Key[Key["Down"] = 40] = "Down";
})(Key || (Key = {}));


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Black", function() { return Black; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasMaxWidth", function() { return CanvasMaxWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasMaxHeight", function() { return CanvasMaxHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridCellSize", function() { return GridCellSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockFallSpeed", function() { return BlockFallSpeed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerMoveSpeed", function() { return PlayerMoveSpeed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerJumpSpeed", function() { return PlayerJumpSpeed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerFallSpeed", function() { return PlayerFallSpeed; });
var Black = '#000';
var CanvasMaxWidth = 1024;
var CanvasMaxHeight = 768;
var GridCellSize = 64;
var BlockFallSpeed = 8;
var PlayerMoveSpeed = 4;
var PlayerJumpSpeed = 8;
var PlayerFallSpeed = 8;


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Input; });
/* unused harmony export PointerInputEvent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__enum__ = __webpack_require__(3);

var Input = /** @class */ (function () {
    function Input() {
    }
    Object.defineProperty(Input, "clickActive", {
        get: function () {
            return !!Input._activePointerEvent;
        },
        enumerable: true,
        configurable: true
    });
    Input.init = function () {
        var _this = this;
        var raisePointerEvent = function (ev) {
            if (Input._activePointerEvent) {
                return;
            }
            Input._activePointerEvent = ev;
            if (Input.clickHandlers.length) {
                Input.clickHandlers.forEach(function (handler) {
                    if (handler.isAlive) {
                        handler.callback(ev);
                    }
                });
            }
        };
        var endPointerEvent = function () {
            Input._activePointerEvent = null;
        };
        // register mouse/touch input 
        document.body.onmousedown = function (ev) {
            raisePointerEvent(PointerInputEvent.fromMouseEvent(ev));
        };
        document.body.ontouchstart = function (ev) {
            document.body.onmousedown = null;
            raisePointerEvent(PointerInputEvent.fromTouchEvent(ev));
        };
        document.body.onmouseup = endPointerEvent;
        document.body.ontouchend = endPointerEvent;
        // register keyboard input
        document.body.onkeydown = function (ev) {
            var keyCode = ev.keyCode || ev.code;
            var handler = _this.keyboardHandlers[keyCode];
            if (handler && handler.isAlive && !_this.keyboardActivity[keyCode]) {
                _this.keyboardActivity[keyCode] = true;
                handler.callback(ev);
            }
            var globalHandler = _this.keyboardHandlers[__WEBPACK_IMPORTED_MODULE_0__enum__["Key"].Any];
            if (globalHandler && globalHandler.isAlive && !_this.keyboardActivity[__WEBPACK_IMPORTED_MODULE_0__enum__["Key"].Any]) {
                _this.keyboardActivity[__WEBPACK_IMPORTED_MODULE_0__enum__["Key"].Any] = true;
                globalHandler.callback(ev);
            }
        };
        document.body.onkeyup = function (ev) {
            var keyCode = ev.keyCode || ev.code;
            var handler = _this.keyboardHandlers[keyCode];
            _this.keyboardActivity[__WEBPACK_IMPORTED_MODULE_0__enum__["Key"].Any] = false;
            if (handler && handler.isAlive) {
                _this.keyboardActivity[keyCode] = false;
            }
        };
    };
    Input.registerClickHandler = function (callback) {
        var clickHandler = new ConcreteEventHandler(callback);
        ;
        Input.clickHandlers.push(clickHandler);
        return clickHandler;
    };
    Input.registerKeyHandler = function (key, callback) {
        var keyHandler = new ConcreteEventHandler(callback);
        Input.keyboardHandlers[key] = keyHandler;
        return keyHandler;
    };
    Input.keyDown = function (key) {
        return !!this.keyboardActivity[key];
    };
    Input.clickHandlers = [];
    Input.keyboardHandlers = {};
    Input.keyboardActivity = {};
    Input._activePointerEvent = null;
    return Input;
}());

var ConcreteEventHandler = /** @class */ (function () {
    function ConcreteEventHandler(callback) {
        this.callback = callback;
        this.isAlive = true;
    }
    ConcreteEventHandler.prototype.dispose = function () {
        this.isAlive = false;
    };
    return ConcreteEventHandler;
}());
var PointerInputEvent = /** @class */ (function () {
    function PointerInputEvent() {
    }
    PointerInputEvent.fromMouseEvent = function (ev) {
        return { x: ev.offsetX, y: ev.offsetY };
    };
    PointerInputEvent.fromTouchEvent = function (ev) {
        var touch = ev.touches[0];
        return { x: touch ? touch.clientX : 0, y: touch ? touch.clientY : 0 };
    };
    return PointerInputEvent;
}());



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SpriteTransformation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sprite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SpriteAnimation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game_context__ = __webpack_require__(1);

var SpriteTransformation;
(function (SpriteTransformation) {
    SpriteTransformation[SpriteTransformation["Opacity"] = 0] = "Opacity";
})(SpriteTransformation || (SpriteTransformation = {}));
var Sprite = /** @class */ (function () {
    function Sprite(options) {
        this.transformatons = {};
        this.image = new Image();
        this.image.src = options.imageSource;
        this.height = options.height;
        this.width = options.width;
        this.frameBorder = options.frameBorder;
        this.setDefaultTransforms();
    }
    Sprite.define = function (name, options) {
        var sprite = new Sprite(options);
        __WEBPACK_IMPORTED_MODULE_0__game_context__["a" /* GameContext */].defineSprite(name, sprite);
        return sprite;
    };
    Sprite.get = function (name) {
        return __WEBPACK_IMPORTED_MODULE_0__game_context__["a" /* GameContext */].getSprite(name);
    };
    Sprite.prototype.setDefaultTransforms = function () {
        this.transformatons[SpriteTransformation.Opacity] = 1;
    };
    Sprite.prototype.getTransform = function (transformation) {
        return this.transformatons[transformation];
    };
    Sprite.prototype.transform = function (transformation, delta) {
        this.transformatons[transformation] += delta;
    };
    Sprite.prototype.setTransform = function (transformation, value) {
        this.transformatons[transformation] = value;
    };
    return Sprite;
}());

var SpriteAnimation = /** @class */ (function () {
    function SpriteAnimation(sprite) {
        this.sprite = sprite;
        this.current = 0;
        this.depth = 0;
        this.current = 0;
    }
    Object.defineProperty(SpriteAnimation.prototype, "frame", {
        get: function () {
            return this.current;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpriteAnimation.prototype, "source", {
        get: function () {
            return this.sprite;
        },
        enumerable: true,
        configurable: true
    });
    SpriteAnimation.prototype.start = function (start, end, delay) {
        var _this = this;
        this.stop();
        this.current = start;
        this.timer = setInterval(function () {
            _this.current = _this.current === end ? start : _this.current + 1;
        }, delay);
    };
    SpriteAnimation.prototype.stop = function () {
        if (this.timer) {
            clearInterval(this.timer);
        }
    };
    SpriteAnimation.prototype.set = function (frame) {
        this.stop();
        this.current = frame;
    };
    return SpriteAnimation;
}());



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Registry", function() { return Registry; });
var Registry = /** @class */ (function () {
    function Registry() {
    }
    Registry.get = function (id) {
        return this.values[id];
    };
    Registry.load = function (id) {
        this.values[id] = localStorage.getItem(id);
        return this.values[id];
    };
    Registry.set = function (id, val, persist) {
        if (persist === void 0) { persist = false; }
        this.values[id] = val;
        if (persist) {
            localStorage.setItem(id, val);
        }
    };
    Registry.values = {};
    return Registry;
}());



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Background */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Room; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actor__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__input__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_context__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__grid__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__view__ = __webpack_require__(11);





var Background = /** @class */ (function () {
    function Background(color, pageColor, width, height) {
        if (pageColor === void 0) { pageColor = '#000'; }
        this.color = color;
        this.pageColor = pageColor;
        this.width = width;
        this.height = height;
    }
    return Background;
}());

var Room = /** @class */ (function () {
    function Room() {
        this.actorInstanceMap = {};
        this.eventHandlers = [];
    }
    Room.define = function (name) {
        var room = new Room();
        __WEBPACK_IMPORTED_MODULE_2__game_context__["a" /* GameContext */].defineRoom(name, room);
        return room;
    };
    Room.get = function (name) {
        return __WEBPACK_IMPORTED_MODULE_2__game_context__["a" /* GameContext */].getRoom(name);
    };
    Object.defineProperty(Room, "current", {
        get: function () {
            return __WEBPACK_IMPORTED_MODULE_2__game_context__["a" /* GameContext */].getCurrentRoom();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Room.prototype, "hasStart", {
        get: function () {
            return !!this.onStartCallback;
        },
        enumerable: true,
        configurable: true
    });
    Room.prototype.onStart = function (callback) {
        this.onStartCallback = callback;
    };
    Room.prototype.callStart = function (args) {
        this.onStartCallback(args);
    };
    Object.defineProperty(Room.prototype, "hasDraw", {
        get: function () {
            return !!this.onDrawCallback;
        },
        enumerable: true,
        configurable: true
    });
    Room.prototype.onDraw = function (callback) {
        this.onDrawCallback = callback;
    };
    Room.prototype.callDraw = function (gameCanvasContext) {
        this.onDrawCallback(gameCanvasContext);
    };
    Room.prototype.onClick = function (callback) {
        var clickHandler = __WEBPACK_IMPORTED_MODULE_1__input__["a" /* Input */].registerClickHandler(callback);
        this.eventHandlers.push(clickHandler);
    };
    Room.prototype.onKey = function (key, callback) {
        var keyHandler = __WEBPACK_IMPORTED_MODULE_1__input__["a" /* Input */].registerKeyHandler(key, callback);
        this.eventHandlers.push(keyHandler);
    };
    Room.prototype.defineGrid = function (tileSize) {
        this.grid = new __WEBPACK_IMPORTED_MODULE_3__grid__["a" /* Grid */](tileSize, this);
        return this.grid;
    };
    Room.prototype.defineView = function (x, y, width, height) {
        this.view = new __WEBPACK_IMPORTED_MODULE_4__view__["a" /* View */](x, y, width, height);
        return this.view;
    };
    Room.prototype.setBackground = function (color, width, height, pageColor) {
        this.background = new Background(color, pageColor, width, height);
        if (pageColor) {
            document.body.style.backgroundColor = pageColor;
        }
    };
    Room.prototype.step = function () {
        var _this = this;
        this.getInstances().forEach(function (instance) {
            var parent = instance.parent;
            if (instance.isActive) {
                // apply actor instance movement
                if (instance.speed !== 0) {
                    _this.applyInstanceMovement(instance);
                }
                _this.checkCollisions(instance);
                // call actor 'step' callbacks
                if (parent.hasStep) {
                    parent.callStep(instance);
                }
                // internal 'post-step'
                instance.doPostStep();
            }
            else {
                _this.destroyActorInstance(instance);
            }
        });
        if (this.view) {
            this.view.update();
        }
    };
    Room.prototype.applyInstanceMovement = function (instance) {
        var offsetX = Math.round(instance.getMovementOffsetX());
        var offsetY = Math.round(instance.getMovementOffsetY());
        if (offsetX !== 0 || offsetY !== 0) {
            instance.setPositionRelative(offsetX, offsetY);
        }
    };
    Room.prototype.checkCollisions = function (selfInstance) {
        var parent = selfInstance.parent;
        ;
        for (var actorName in parent.collisionHandlers) {
            var callback = parent.collisionHandlers[actorName];
            var otherActor = __WEBPACK_IMPORTED_MODULE_0__actor__["a" /* Actor */].get(actorName);
            for (var otherID in this.actorInstanceMap) {
                var other = this.actorInstanceMap[otherID];
                if (other.parent === otherActor) {
                    if (selfInstance !== other && selfInstance.collidesWith(other)) {
                        callback(selfInstance, other);
                    }
                }
            }
            ;
        }
        ;
    };
    Room.prototype.createActor = function (parentActor, x, y) {
        var newActorInstanceID = Room.nextActorInstanceID();
        var newInstance = new __WEBPACK_IMPORTED_MODULE_0__actor__["b" /* ActorInstance */](parentActor, newActorInstanceID, x, y);
        this.actorInstanceMap[newActorInstanceID] = newInstance;
        if (parentActor.hasCreate) {
            parentActor.callCreate(newInstance);
        }
        return newInstance;
    };
    Room.prototype.destroyActorInstance = function (instance) {
        var parent = instance.parent;
        if (parent.hasDestroy) {
            parent.callDestroy(instance);
        }
        delete this.actorInstanceMap[instance.id];
    };
    Room.prototype.getInstances = function () {
        var instances = [];
        for (var instance in this.actorInstanceMap) {
            instances.push(this.actorInstanceMap[instance]);
        }
        return instances;
    };
    Room.prototype.getInstancesAtPosition = function (x, y) {
        return this.getInstances().filter(function (instance) { return instance.occupiesPosition(x, y); });
    };
    Room.prototype.isPositionFree = function (x, y) {
        return !this.getInstancesAtPosition(x, y).length;
    };
    Room.prototype.getView = function () {
        return this.view;
    };
    Room.prototype.handleClick = function (event) {
        var clickX = event.x;
        var clickY = event.y;
        if (this.view) {
            clickX += this.view.x;
            clickY += this.view.y;
        }
        if (this.grid) {
            this.grid.raiseClickEvent(clickX, clickY);
        }
        this.getInstancesAtPosition(clickX, clickY).forEach(function (instance) {
            var parent = instance.parent;
            if (parent.hasClick && instance.occupiesPosition(clickX, clickY)) {
                parent.callClick(instance, event);
            }
        });
    };
    Room.prototype.end = function () {
        this.actorInstanceMap = {};
        this.eventHandlers.forEach(function (eventHandler) { return eventHandler.dispose(); });
    };
    Room.nextActorInstanceID = (function () {
        var currentID = 0;
        return (function () { return ++currentID; });
    })();
    return Room;
}());



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Actor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ActorInstance; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__enum__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__events__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_context__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sprite__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util__ = __webpack_require__(16);





var Actor = /** @class */ (function () {
    function Actor(name, options) {
        if (options === void 0) { options = {}; }
        // game event handlers
        this.collisionHandlers = {};
        this.actorEventHandlers = {};
        this.boundary = options.boundary;
        this.name = name;
        this.sprite = options.sprite;
    }
    Actor.define = function (name, options) {
        var actor = new Actor(name, options);
        __WEBPACK_IMPORTED_MODULE_2__game_context__["a" /* GameContext */].defineActor(name, actor);
        return actor;
    };
    Actor.get = function (name) {
        return __WEBPACK_IMPORTED_MODULE_2__game_context__["a" /* GameContext */].getActor(name);
    };
    Object.defineProperty(Actor.prototype, "hasCreate", {
        get: function () {
            return !!this.onCreateCallback;
        },
        enumerable: true,
        configurable: true
    });
    Actor.prototype.onCreate = function (callback) {
        this.onCreateCallback = callback;
    };
    Actor.prototype.callCreate = function (selfInstance) {
        this.onCreateCallback(selfInstance);
    };
    Object.defineProperty(Actor.prototype, "hasStep", {
        get: function () {
            return !!this.onStepCallback;
        },
        enumerable: true,
        configurable: true
    });
    Actor.prototype.onStep = function (callback) {
        this.onStepCallback = callback;
    };
    Actor.prototype.callStep = function (selfInstance) {
        this.onStepCallback(selfInstance);
    };
    Object.defineProperty(Actor.prototype, "hasDestroy", {
        get: function () {
            return !!this.onDestroyCallback;
        },
        enumerable: true,
        configurable: true
    });
    Actor.prototype.onDestroy = function (callback) {
        this.onDestroyCallback = callback;
    };
    Actor.prototype.callDestroy = function (selfInstance) {
        this.onDestroyCallback(selfInstance);
    };
    Object.defineProperty(Actor.prototype, "hasClick", {
        get: function () {
            return !!this.onClickCallback;
        },
        enumerable: true,
        configurable: true
    });
    Actor.prototype.onClick = function (callback) {
        this.onClickCallback = callback;
    };
    Actor.prototype.callClick = function (selfInstance, event) {
        this.onClickCallback(selfInstance, event);
    };
    Object.defineProperty(Actor.prototype, "hasDraw", {
        get: function () {
            return !!this.onDrawCallback;
        },
        enumerable: true,
        configurable: true
    });
    Actor.prototype.onDraw = function (callback) {
        this.onDrawCallback = callback;
    };
    Actor.prototype.callDraw = function (selfInstance, gameCanvasContext) {
        this.onDrawCallback(selfInstance, gameCanvasContext);
    };
    Actor.prototype.onCollide = function (actorName, callback) {
        this.collisionHandlers[actorName] = callback;
    };
    Actor.prototype.onEvent = function (eventName, callback) {
        this.actorEventHandlers[eventName] = callback;
    };
    return Actor;
}());

var ActorInstance = /** @class */ (function () {
    function ActorInstance(parent, id, x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.parent = parent;
        this.id = id;
        this.x = x;
        this.y = y;
        this.speed = 0;
        this.direction = __WEBPACK_IMPORTED_MODULE_0__enum__["Direction"].Right;
        this.visible = true;
        this.state = __WEBPACK_IMPORTED_MODULE_0__enum__["ActorState"].Active;
        this.previousX = this.x;
        this.previousY = this.y;
        if (this.parent.sprite) {
            this.spriteAnimation = new __WEBPACK_IMPORTED_MODULE_3__sprite__["b" /* SpriteAnimation */](this.parent.sprite);
        }
    }
    Object.defineProperty(ActorInstance.prototype, "hasMoved", {
        get: function () {
            return (this.x !== this.previousX || this.y !== this.previousY);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActorInstance.prototype, "isActive", {
        get: function () {
            return (this.state === __WEBPACK_IMPORTED_MODULE_0__enum__["ActorState"].Active);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActorInstance.prototype, "boundary", {
        get: function () {
            return this.parent.boundary;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActorInstance.prototype, "animation", {
        get: function () {
            return this.spriteAnimation;
        },
        enumerable: true,
        configurable: true
    });
    ActorInstance.prototype.raiseEvent = function (eventName, eventArgs) {
        // register an event to fire immediately
        this.raiseEventWhen(eventName, function () { return true; }, eventArgs);
    };
    ActorInstance.prototype.raiseEventWhen = function (eventName, conditionCallback, eventArgs) {
        if (eventArgs === void 0) { eventArgs = {}; }
        this.setGameContextEventArgs(eventArgs);
        var callback = this.parent.actorEventHandlers[eventName];
        if (!callback) {
            throw new Error("Attempting to raise undefined Event: " + eventName);
        }
        __WEBPACK_IMPORTED_MODULE_1__events__["a" /* DeferredEvent */].register(new __WEBPACK_IMPORTED_MODULE_1__events__["a" /* DeferredEvent */](conditionCallback, callback.bind(null, this, eventArgs)));
    };
    ActorInstance.prototype.setGameContextEventArgs = function (eventArgs) {
        eventArgs.game = {
            currentRoom: __WEBPACK_IMPORTED_MODULE_2__game_context__["a" /* GameContext */].getCurrentRoom(),
        };
    };
    ActorInstance.prototype.destroy = function () {
        this.state = __WEBPACK_IMPORTED_MODULE_0__enum__["ActorState"].Destroyed;
    };
    ActorInstance.prototype.doPostStep = function () {
        this.previousX = this.x;
        this.previousY = this.y;
    };
    ActorInstance.prototype.collidesWith = function (other) {
        if (this.hasMoved && this.boundary && other.boundary) {
            return this.boundary.atPosition(this.x, this.y).collidesWith(other.boundary.atPosition(other.x, other.y));
        }
        return false;
    };
    ActorInstance.prototype.getMovementOffsetX = function () {
        return __WEBPACK_IMPORTED_MODULE_4__util__["a" /* MathUtil */].getLengthDirectionX(this.speed * 100, this.direction) / 100;
    };
    ActorInstance.prototype.getMovementOffsetY = function () {
        return __WEBPACK_IMPORTED_MODULE_4__util__["a" /* MathUtil */].getLengthDirectionY(this.speed * 100, this.direction) / 100;
    };
    ActorInstance.prototype.setPositionRelative = function (x, y) {
        this.setPosition(this.x + x, this.y + y);
    };
    ActorInstance.prototype.setPosition = function (x, y) {
        this.previousX = this.x;
        this.previousY = this.y;
        this.x = x;
        this.y = y;
    };
    ActorInstance.prototype.move = function (speed, direction) {
        this.speed = speed;
        this.direction = direction;
    };
    ActorInstance.prototype.occupiesPosition = function (x, y) {
        return this.boundary ? this.boundary.atPosition(this.x, this.y).containsPosition(x, y) : false;
    };
    return ActorInstance;
}());



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export GridClickEvent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GridCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Grid; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__enum__ = __webpack_require__(3);

var GridClickEvent = /** @class */ (function () {
    function GridClickEvent(grid, x, y) {
        this.grid = grid;
        this.x = x;
        this.y = y;
    }
    GridClickEvent.prototype.getCell = function () {
        var cellX = this.x - this.x % this.grid.tileSize;
        var cellY = this.y - this.y % this.grid.tileSize;
        return new GridCell(this.grid, cellX, cellY);
    };
    return GridClickEvent;
}());

var GridCell = /** @class */ (function () {
    function GridCell(grid, x, y) {
        this.grid = grid;
        this.x = x;
        this.y = y;
    }
    GridCell.prototype.getAdjacentCell = function (direction) {
        var offsetX = 0;
        var offsetY = 0;
        switch (direction) {
            case __WEBPACK_IMPORTED_MODULE_0__enum__["Direction"].Down:
                offsetY = this.grid.tileSize;
                break;
            case __WEBPACK_IMPORTED_MODULE_0__enum__["Direction"].Left:
                offsetX = -this.grid.tileSize;
                break;
            case __WEBPACK_IMPORTED_MODULE_0__enum__["Direction"].Right:
                offsetX = this.grid.tileSize;
                break;
            case __WEBPACK_IMPORTED_MODULE_0__enum__["Direction"].Up:
                offsetY = -this.grid.tileSize;
                break;
        }
        return new GridCell(this.grid, this.x + offsetX, this.y + offsetY);
    };
    GridCell.prototype.getContents = function () {
        return this.grid.room.getInstancesAtPosition(this.x + this.grid.tileSize / 2, this.y + this.grid.tileSize / 2);
    };
    GridCell.prototype.containsInstance = function (instance) {
        return this.getContents().some(function (contents) { return contents === instance; });
    };
    GridCell.prototype.containsInstanceOf = function (actor) {
        return this.getContents().some(function (contents) { return contents.parent === actor; });
    };
    GridCell.prototype.isFree = function () {
        return !this.getContents().length;
    };
    return GridCell;
}());

var Grid = /** @class */ (function () {
    function Grid(tileSize, room) {
        this.tileSize = tileSize;
        this.room = room;
    }
    Grid.prototype.onClick = function (callback) {
        this._onClick = callback;
    };
    Grid.prototype.raiseClickEvent = function (x, y) {
        var instances = this.room.getInstancesAtPosition(x, y);
        var event = new GridClickEvent(this, x, y);
        this._onClick(event);
    };
    Grid.prototype.getCellAtPosition = function (x, y) {
        return new GridCell(this, x, y);
    };
    return Grid;
}());



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return View; });
var ViewMode;
(function (ViewMode) {
    ViewMode[ViewMode["SamePosition"] = 1] = "SamePosition";
    ViewMode[ViewMode["Center"] = 2] = "Center";
})(ViewMode || (ViewMode = {}));
var View = /** @class */ (function () {
    function View(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.attachments = [];
    }
    View.prototype.follow = function (actorInstance, center) {
        if (center === void 0) { center = false; }
        this.viewMode = center ? ViewMode.Center : ViewMode.SamePosition;
        this.followInstance = actorInstance;
    };
    View.prototype.attach = function (actorInstance, offsetX, offsetY) {
        this.attachments.push(new ActorInstanceAttachement(this, actorInstance, offsetX, offsetY));
    };
    View.prototype.update = function () {
        if (!this.followInstance) {
            return;
        }
        if (this.viewMode === ViewMode.Center) {
            this.centerAroundBoundary(this.followInstance.boundary);
        }
        else {
            this.x = this.followInstance.x || 0;
            this.y = this.followInstance.y || 0;
        }
        this.attachments.forEach(function (att) { return att.update(); });
    };
    View.prototype.centerAroundBoundary = function (boundary) {
        if (!boundary) {
            throw new Error("boundary is " + boundary);
        }
        this.x = this.followInstance.x + (boundary.width / 2) - (this.width / 2);
        this.y = this.followInstance.y + (boundary.height / 2) - (this.height / 2);
    };
    return View;
}());

var ActorInstanceAttachement = /** @class */ (function () {
    function ActorInstanceAttachement(parent, instance, offsetX, offsetY) {
        this.parent = parent;
        this.instance = instance;
        this.offsetX = offsetX;
        this.offsetY = offsetY;
    }
    ActorInstanceAttachement.prototype.update = function () {
        this.instance.x = this.parent.x + this.offsetX;
        this.instance.y = this.parent.y + this.offsetY;
    };
    return ActorInstanceAttachement;
}());


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpriteFader", function() { return SpriteFader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__ = __webpack_require__(0);

var DelayInterval = 100;
var OpacityDelta = 0.25;
var SpriteFader = /** @class */ (function () {
    function SpriteFader() {
    }
    // TODO (fortification): alternatives that accept Room objects, dynamically getting a unique collection of Sprites
    SpriteFader.fadeOut = function (sprites, callback) {
        var fade = 1;
        var timer = setInterval(function () {
            fade -= OpacityDelta;
            sprites.forEach(function (sprite) { return sprite.transform(__WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["SpriteTransformation"].Opacity, -OpacityDelta); });
            if (fade <= 0) {
                clearInterval(timer);
                setTimeout(callback, DelayInterval * 2);
            }
        }, DelayInterval);
    };
    SpriteFader.fadeIn = function (sprites, callback) {
        var fade = 0;
        sprites.forEach(function (sprite) { return sprite.setTransform(__WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["SpriteTransformation"].Opacity, 0); });
        var timer = setInterval(function () {
            fade += OpacityDelta;
            sprites.forEach(function (sprite) { return sprite.transform(__WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["SpriteTransformation"].Opacity, OpacityDelta); });
            if (fade >= 1) {
                clearInterval(timer);
                if (callback) {
                    setInterval(callback, DelayInterval * 2);
                }
            }
        }, DelayInterval);
    };
    return SpriteFader;
}());



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameCanvasHTML2D; });
/* unused harmony export GameCanvasContext */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sprite__ = __webpack_require__(6);

var DefaultHeight = 480;
var DefaultWidth = 640;
var DefaultOpacity = 1;
var GameCanvasHTML2D = /** @class */ (function () {
    function GameCanvasHTML2D(canvasElement) {
        this.canvasElement = canvasElement;
        this.gameCanvasContext = new GameCanvasContext(this);
    }
    Object.defineProperty(GameCanvasHTML2D.prototype, "context", {
        get: function () {
            return this.canvasElement.getContext('2d');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameCanvasHTML2D.prototype, "height", {
        get: function () {
            return this.canvasElement.height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameCanvasHTML2D.prototype, "width", {
        get: function () {
            return this.canvasElement.width;
        },
        enumerable: true,
        configurable: true
    });
    GameCanvasHTML2D.prototype.init = function (options) {
        if (options === void 0) { options = {}; }
        this.canvasElement.height = options.height || DefaultHeight;
        this.canvasElement.width = options.width || DefaultWidth;
    };
    // TODO: separate canvas interactions from room/instance logic
    GameCanvasHTML2D.prototype.drawRoom = function (room) {
        var _this = this;
        // clear the canvas
        this.context.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
        // get view offset
        var _a = this.getViewOffset(room.getView()), offsetX = _a[0], offsetY = _a[1];
        // draw room background
        if (room.background) {
            this.context.beginPath();
            this.context.rect(-offsetX, -offsetY, room.background.width, room.background.height);
            this.context.fillStyle = room.background.color;
            this.context.fill();
        }
        // call room draw event callback
        if (room.hasDraw) {
            room.callDraw(this.gameCanvasContext);
        }
        var orderedInstances = room.getInstances().sort(function (a, b) {
            return (b.spriteAnimation ? b.spriteAnimation.depth : 0) - (a.spriteAnimation ? a.animation.depth : 0);
        });
        orderedInstances.forEach(function (instance) {
            // call actor draw event callbacks
            if (instance.parent.hasDraw) {
                instance.parent.callDraw(instance, _this.gameCanvasContext);
            }
            // draw sprites
            if (instance.animation && instance.visible) {
                _this.drawSprite(instance.animation.source, instance.x - offsetX, instance.y - offsetY, instance.spriteAnimation.frame);
            }
        });
    };
    GameCanvasHTML2D.prototype.getViewOffset = function (view) {
        var offsetX = view ? view.x : 0;
        var offsetY = view ? view.y : 0;
        return [offsetX, offsetY];
    };
    GameCanvasHTML2D.prototype.drawSprite = function (sprite, x, y, frame) {
        if (frame === void 0) { frame = 0; }
        var image = sprite.image;
        var frameBorder = sprite.frameBorder || 0;
        var width = sprite.width;
        var height = sprite.height;
        var frameOffset = frame * frameBorder;
        var opacity = sprite.getTransform(__WEBPACK_IMPORTED_MODULE_0__sprite__["c" /* SpriteTransformation */].Opacity);
        var previousOpacity = null;
        if (opacity !== DefaultOpacity && opacity !== null && opacity !== undefined) {
            previousOpacity = this.context.globalAlpha;
            this.context.globalAlpha = opacity;
        }
        this.context.drawImage(image, frame * width + frameOffset, 0, width, height, Math.floor(x), Math.floor(y), width, height);
        // reset opacity
        if (previousOpacity !== null) {
            this.context.globalAlpha = previousOpacity;
        }
    };
    GameCanvasHTML2D.prototype.drawSpriteViewRelative = function (sprite, x, y, frame, view) {
        var _a = this.getViewOffset(view), offsetX = _a[0], offsetY = _a[1];
        this.drawSprite(sprite, x - offsetX, y - offsetY, frame);
    };
    return GameCanvasHTML2D;
}());

var GameCanvasContext = /** @class */ (function () {
    function GameCanvasContext(gameCanvas) {
        this.gameCanvas = gameCanvas;
    }
    GameCanvasContext.prototype.drawSprite = function (sprite, x, y, frame, view) {
        if (frame === void 0) { frame = 0; }
        this.gameCanvas.drawSpriteViewRelative(sprite, x, y, frame, view);
    };
    return GameCanvasContext;
}());



/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameRunner; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__enum__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_context__ = __webpack_require__(1);


var DefaultFPS = 60;
var GameRunner = /** @class */ (function () {
    function GameRunner(canvas, options) {
        this.canvas = canvas;
        this.options = options;
        this.state = __WEBPACK_IMPORTED_MODULE_0__enum__["GameState"].Paused;
        this.targetFPS = options.targetFPS || DefaultFPS;
    }
    Object.defineProperty(GameRunner.prototype, "isRunning", {
        get: function () {
            return this.state === __WEBPACK_IMPORTED_MODULE_0__enum__["GameState"].Running;
        },
        enumerable: true,
        configurable: true
    });
    GameRunner.prototype.pause = function () {
        this.state = __WEBPACK_IMPORTED_MODULE_0__enum__["GameState"].Paused;
    };
    GameRunner.prototype.start = function () {
        var _this = this;
        var stepSize = 1 / this.targetFPS;
        var offset = 0;
        var previous = window.performance.now();
        var gameLoop = function () {
            var room = __WEBPACK_IMPORTED_MODULE_1__game_context__["a" /* GameContext */].getCurrentRoom();
            var current = window.performance.now();
            offset += (Math.min(1, (current - previous) / 1000));
            while (offset > stepSize) {
                if (_this.isRunning) {
                    __WEBPACK_IMPORTED_MODULE_1__game_context__["a" /* GameContext */].checkAndFireEvents();
                    room.step();
                }
                else {
                    return;
                }
                offset -= stepSize;
            }
            if (_this.isRunning) {
                _this.canvas.drawRoom(room);
            }
            previous = current;
            requestAnimationFrame(gameLoop);
        };
        // start the game loop
        this.state = __WEBPACK_IMPORTED_MODULE_0__enum__["GameState"].Running;
        requestAnimationFrame(gameLoop);
    };
    return GameRunner;
}());



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeferredEvent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game_context__ = __webpack_require__(1);

var DeferredEvent = /** @class */ (function () {
    function DeferredEvent(conditionCallback, actionCallback, fireOnce) {
        if (fireOnce === void 0) { fireOnce = true; }
        this.conditionCallback = conditionCallback;
        this.actionCallback = actionCallback;
        this.fireOnce = fireOnce;
    }
    DeferredEvent.register = function (event) {
        __WEBPACK_IMPORTED_MODULE_0__game_context__["a" /* GameContext */].registerEvent(event);
    };
    return DeferredEvent;
}());



/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MathUtil; });
var MathUtil = /** @class */ (function () {
    function MathUtil() {
    }
    MathUtil.getLengthDirectionX = function (length, direction) {
        return length * Math.cos(direction * (Math.PI / 180));
    };
    MathUtil.getLengthDirectionY = function (length, direction) {
        return length * Math.sin(direction * (Math.PI / 180));
    };
    return MathUtil;
}());



/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PositionedBoundary */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Boundary; });
var PositionedBoundary = /** @class */ (function () {
    function PositionedBoundary(x, y, boundary) {
        this.x = x;
        this.y = y;
        this.height = boundary.height;
        this.width = boundary.width;
    }
    PositionedBoundary.prototype.collidesWith = function (other) {
        if (this.x > other.x + other.width || other.x >= this.x + this.width) {
            return false;
        }
        if (this.y > other.y + other.height || other.y >= this.y + this.height) {
            return false;
        }
        return true;
    };
    PositionedBoundary.prototype.containsPosition = function (x, y) {
        if (this.x > x || x > this.x + this.width) {
            return false;
        }
        if (this.y > y || y > this.y + this.height) {
            return false;
        }
        return true;
    };
    return PositionedBoundary;
}());

var Boundary = /** @class */ (function () {
    function Boundary(height, width, solid) {
        if (solid === void 0) { solid = false; }
        this.height = height;
        this.width = width;
        this.solid = solid;
        if (height <= 0 || width <= 0) {
            throw new Error('Height and width must both be greater than zero.');
        }
    }
    Boundary.fromSprite = function (sprite, solid) {
        if (solid === void 0) { solid = false; }
        return new Boundary(sprite.height, sprite.width, solid);
    };
    Boundary.prototype.atPosition = function (x, y) {
        return new PositionedBoundary(x, y, this);
    };
    return Boundary;
}());



/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_enum__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_util__ = __webpack_require__(19);



// load game modules
Object(__WEBPACK_IMPORTED_MODULE_2__util_util__["requireModules"])('actors', ['block', 'hud', 'player', 'wall', 'win']);
Object(__WEBPACK_IMPORTED_MODULE_2__util_util__["requireModules"])('rooms', ['level', 'level-select', 'title']);
// determine canvas dimensions based on viewport size
var _a = Object(__WEBPACK_IMPORTED_MODULE_2__util_util__["buildCanvasDimensions"])(), canvasWidth = _a[0], canvasHeight = _a[1];
__WEBPACK_IMPORTED_MODULE_2__util_util__["Registry"].set(__WEBPACK_IMPORTED_MODULE_1__util_enum__["Settings"].CanvasWidth, canvasWidth);
__WEBPACK_IMPORTED_MODULE_2__util_util__["Registry"].set(__WEBPACK_IMPORTED_MODULE_1__util_enum__["Settings"].CanvasHeight, canvasHeight);
// hacks:
__WEBPACK_IMPORTED_MODULE_2__util_util__["Registry"].set(__WEBPACK_IMPORTED_MODULE_1__util_enum__["Settings"].StackmoProgress, 1, true);
__WEBPACK_IMPORTED_MODULE_2__util_util__["Registry"].load(__WEBPACK_IMPORTED_MODULE_1__util_enum__["Settings"].StackmoProgress);
// start the game with the title room
__WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Vastgame"].start('game', __WEBPACK_IMPORTED_MODULE_1__util_enum__["RoomID"].Title, {
    canvas: { width: canvasWidth, height: canvasHeight },
});


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["requireModules"] = requireModules;
/* harmony export (immutable) */ __webpack_exports__["buildCanvasDimensions"] = buildCanvasDimensions;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__registry__ = __webpack_require__(7);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Registry", function() { return __WEBPACK_IMPORTED_MODULE_1__registry__["Registry"]; });



function requireModules(rootDir, fileNames) {
    fileNames.forEach(function (name) { return __webpack_require__(29)("./" + rootDir + '/' + name); });
}
function buildCanvasDimensions() {
    var fillScreen = window.innerWidth < __WEBPACK_IMPORTED_MODULE_0__constants__["CanvasMaxWidth"];
    var canvasWidth = fillScreen ? window.innerWidth : __WEBPACK_IMPORTED_MODULE_0__constants__["CanvasMaxWidth"];
    canvasWidth += (canvasWidth % 2 === 0) ? 0 : 1;
    var canvasHeight = fillScreen ? window.innerHeight : __WEBPACK_IMPORTED_MODULE_0__constants__["CanvasMaxHeight"];
    canvasHeight += (canvasHeight % 2 === 0) ? 0 : 1;
    return [canvasWidth, canvasHeight];
}


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LevelBuilder", function() { return LevelBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Levels", function() { return Levels; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__enum__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(4);



var LevelBuilder = /** @class */ (function () {
    function LevelBuilder() {
    }
    LevelBuilder.populateRoom = function (room, roomID) {
        var cellSize = __WEBPACK_IMPORTED_MODULE_2__constants__["GridCellSize"];
        var Block = __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Actor"].get('Block');
        var Player = __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Actor"].get('Player');
        var Wall = __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Actor"].get('Wall');
        var Win = __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Actor"].get('Win');
        var instances = [];
        var levelMap = Levels.get(roomID);
        var colorEnumMap = {
            0: [__WEBPACK_IMPORTED_MODULE_1__enum__["LevelBgColor"].Teal, __WEBPACK_IMPORTED_MODULE_1__enum__["LevelBgColor"].DarkTeal]
        };
        // TODO: randomize/cycle colors (take as parameter?)
        room.setBackground(colorEnumMap[0][0], levelMap[0].length * cellSize, levelMap.length * cellSize, colorEnumMap[0][1]);
        for (var i = 0; i < levelMap.length; i++) {
            var row = levelMap[i];
            for (var j = 0; j < row.length; j++) {
                switch (row.charAt(j)) {
                    case 'X':
                        instances.push(room.createActor(Block, j * cellSize, i * cellSize));
                        break;
                    case 'P':
                        instances.push(room.createActor(Player, j * cellSize, i * cellSize));
                        break;
                    case 'W':
                        instances.push(room.createActor(Win, j * cellSize, i * cellSize));
                        break;
                    case '#':
                        var wall = room.createActor(Wall, j * cellSize, i * cellSize);
                        var frame = this.getWallFrame(levelMap, i, j);
                        wall.spriteAnimation.set(frame);
                        instances.push(wall);
                        break;
                }
            }
        }
        return instances;
    };
    LevelBuilder.getWallFrame = function (levelMap, row, position) {
        var wallChar = '#';
        var maxX = levelMap[0].length - 1;
        var maxY = levelMap.length - 1;
        var topFree = (row > 0) ? levelMap[row - 1][position] !== wallChar : false;
        var topLeftFree = (row > 0 && position > 0) ? levelMap[row - 1][position - 1] !== wallChar : false;
        var topRightFree = (row > 0 && position < maxX) ? levelMap[row - 1][position + 1] !== wallChar : false;
        var bottomFree = (row < maxY) ? levelMap[row + 1][position] !== wallChar : false;
        var bottomLeftFree = (row < maxY && position > 0) ? levelMap[row + 1][position - 1] !== wallChar : false;
        var bottomRightFree = (row < maxY && position < maxX) ? levelMap[row + 1][position + 1] !== wallChar : false;
        var leftFree = (position > 0) ? levelMap[row][position - 1] !== wallChar : false;
        var rightFree = (position < maxX) ? levelMap[row][position + 1] !== wallChar : false;
        if (!topFree) {
            if (!leftFree) {
                if (!rightFree) {
                    if (!bottomFree) {
                        if (!topLeftFree) {
                            if (!topRightFree) {
                                if (!bottomLeftFree) {
                                    return !bottomRightFree ? WallStyle.Inner : WallStyle.InnerCornerTopLeft;
                                }
                                return !bottomRightFree ? WallStyle.InnerCornerTopRight : WallStyle.ThreewayBottom;
                            }
                            if (!bottomLeftFree) {
                                return !bottomRightFree ? WallStyle.InnerCornerBottomLeft : WallStyle.ThreewayRight;
                            }
                        }
                        if (!topRightFree && !bottomRightFree) {
                            return !bottomLeftFree ? WallStyle.InnerCornerBottomRight : WallStyle.ThreewayLeft;
                        }
                        return !bottomLeftFree && !bottomRightFree ? WallStyle.ThreewayTop : WallStyle.Fourway;
                    }
                    return !topLeftFree && !topRightFree ? WallStyle.FlatTop : WallStyle.ThreewayNarrowTop;
                }
                if (!bottomFree) {
                    return !topLeftFree && !bottomLeftFree ? WallStyle.FlatLeft : WallStyle.ThreewayNarrowLeft;
                }
                if (!topLeftFree) {
                    return WallStyle.OuterCornerBottomRight;
                }
            }
            if (!rightFree) {
                if (!bottomFree) {
                    return !topRightFree && !bottomRightFree ? WallStyle.FlatRight : WallStyle.ThreewayNarrowRight;
                }
                if (!topRightFree) {
                    return WallStyle.OuterCornerBottomLeft;
                }
            }
            return !bottomFree ? WallStyle.NarrowVertical : WallStyle.CappedBottom;
        }
        if (!leftFree) {
            if (!rightFree) {
                if (!bottomFree) {
                    return !bottomLeftFree && !bottomRightFree ? WallStyle.FlatBottom : WallStyle.ThreewayNarrowBottom;
                }
                return WallStyle.NarrowHorizontal;
            }
            return !bottomLeftFree && !bottomFree ? WallStyle.OuterCornerTopRight : WallStyle.CappedRight;
        }
        if (!rightFree) {
            return !bottomRightFree && !bottomFree ? WallStyle.OuterCornerTopLeft : WallStyle.CappedLeft;
        }
        return !bottomFree ? WallStyle.CappedTop : WallStyle.Solo;
    };
    return LevelBuilder;
}());

var Levels = /** @class */ (function () {
    function Levels() {
    }
    Object.defineProperty(Levels, "count", {
        get: function () {
            var c = 0;
            for (var p in this.levels) {
                c++;
            }
            return c;
        },
        enumerable: true,
        configurable: true
    });
    Levels.get = function (levelNumber) {
        return this.levels[levelNumber];
    };
    Levels.levels = {
        1: [
            '##################',
            '#                #',
            '#       ##       #',
            '#       ##       #',
            '#XW              #',
            '#####           X#',
            '#######       P###',
            '##########    ####',
            '##########  ######',
            '##################',
        ],
        2: [
            '##################',
            '#    #      #    #',
            '#   ##   #  ##   #',
            '#P   #      #    #',
            '##       #       #',
            '#W      ###  #####',
            '####     #       #',
            '#                #',
            '# XX X  #    XXWX#',
            '##################',
        ],
        3: [
            '##################',
            '#                #',
            '#                #',
            '#                #',
            '#                #',
            '#                #',
            '# W       #      #',
            '# XXX      #     #',
            '# XXXX  P # #  XX#',
            '##################',
        ],
        4: [
            '##################',
            '#                #',
            '#   #            #',
            '#         #      #',
            '#    #           #',
            '#  #         XX  #',
            '#           XXXXX#',
            '#          XXXXXX#',
            '#  P    XXXXXXXXX#',
            '##################',
        ], 5: [], 6: [], 7: [], 8: [], 9: [], 10: [], 11: [], 12: [], 13: [], 14: [], 15: [], 16: [], 17: [], 18: [],
        19: [], 20: [], 21: [], 22: [], 23: [], 24: [], 25: [], 26: [], 27: [], 28: [], 29: [], 30: [], 31: [], 32: [],
    };
    return Levels;
}());

// enum values correspond to sprite sheet frames
var WallStyle;
(function (WallStyle) {
    WallStyle[WallStyle["InnerCornerTopLeft"] = 0] = "InnerCornerTopLeft";
    WallStyle[WallStyle["FlatTop"] = 1] = "FlatTop";
    WallStyle[WallStyle["InnerCornerTopRight"] = 2] = "InnerCornerTopRight";
    WallStyle[WallStyle["OuterCornerTopLeft"] = 3] = "OuterCornerTopLeft";
    WallStyle[WallStyle["OuterCornerBottomLeft"] = 4] = "OuterCornerBottomLeft";
    WallStyle[WallStyle["FlatLeft"] = 5] = "FlatLeft";
    WallStyle[WallStyle["Inner"] = 6] = "Inner";
    WallStyle[WallStyle["FlatRight"] = 7] = "FlatRight";
    WallStyle[WallStyle["OuterCornerTopRight"] = 8] = "OuterCornerTopRight";
    WallStyle[WallStyle["InnerCornerBottomLeft"] = 9] = "InnerCornerBottomLeft";
    WallStyle[WallStyle["FlatBottom"] = 10] = "FlatBottom";
    WallStyle[WallStyle["InnerCornerBottomRight"] = 11] = "InnerCornerBottomRight";
    WallStyle[WallStyle["OuterCornerBottomRight"] = 12] = "OuterCornerBottomRight";
    WallStyle[WallStyle["NarrowHorizontal"] = 13] = "NarrowHorizontal";
    WallStyle[WallStyle["NarrowVertical"] = 14] = "NarrowVertical";
    WallStyle[WallStyle["CappedLeft"] = 15] = "CappedLeft";
    WallStyle[WallStyle["CappedTop"] = 16] = "CappedTop";
    WallStyle[WallStyle["CappedRight"] = 17] = "CappedRight";
    WallStyle[WallStyle["CappedBottom"] = 18] = "CappedBottom";
    WallStyle[WallStyle["ThreewayNarrowTop"] = 19] = "ThreewayNarrowTop";
    WallStyle[WallStyle["ThreewayNarrowRight"] = 20] = "ThreewayNarrowRight";
    WallStyle[WallStyle["ThreewayNarrowBottom"] = 21] = "ThreewayNarrowBottom";
    WallStyle[WallStyle["ThreewayNarrowLeft"] = 22] = "ThreewayNarrowLeft";
    WallStyle[WallStyle["Fourway"] = 23] = "Fourway";
    WallStyle[WallStyle["Solo"] = 24] = "Solo";
    WallStyle[WallStyle["ThreewayTop"] = 25] = "ThreewayTop";
    WallStyle[WallStyle["ThreewayRight"] = 26] = "ThreewayRight";
    WallStyle[WallStyle["ThreewayBottom"] = 27] = "ThreewayBottom";
    WallStyle[WallStyle["ThreewayLeft"] = 28] = "ThreewayLeft";
})(WallStyle || (WallStyle = {}));


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_constants__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_enum__ = __webpack_require__(2);



var BlockSprite = __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Sprite"].define(__WEBPACK_IMPORTED_MODULE_2__util_enum__["SpriteID"].Box, {
    imageSource: '../resources/box.png',
    height: __WEBPACK_IMPORTED_MODULE_1__util_constants__["GridCellSize"],
    width: __WEBPACK_IMPORTED_MODULE_1__util_constants__["GridCellSize"],
});
var Block = __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Actor"].define(__WEBPACK_IMPORTED_MODULE_2__util_enum__["ActorID"].Block, {
    boundary: __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Boundary"].fromSprite(BlockSprite),
    sprite: BlockSprite,
});
// Falling
Block.onEvent(__WEBPACK_IMPORTED_MODULE_2__util_enum__["GameAction"].Fall, function (block, args) {
    var room = args.game.currentRoom;
    if (!room.isPositionFree(block.x + 1, block.y + __WEBPACK_IMPORTED_MODULE_1__util_constants__["GridCellSize"] + 1)) {
        return;
    }
    var startY = block.y;
    var stopCondition = function () { return Math.abs(startY - block.y) >= __WEBPACK_IMPORTED_MODULE_1__util_constants__["GridCellSize"]; };
    // move the target cell to the one below the previous target cell
    args.targetCell = args.targetCell.getAdjacentCell(__WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Enum"].Direction.Down);
    block.move(__WEBPACK_IMPORTED_MODULE_1__util_constants__["BlockFallSpeed"], __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Enum"].Direction.Down);
    block.raiseEventWhen(__WEBPACK_IMPORTED_MODULE_2__util_enum__["GameAction"].Stop, stopCondition, args);
});
// Stopping
Block.onEvent(__WEBPACK_IMPORTED_MODULE_2__util_enum__["GameAction"].Stop, function (block, args) {
    var room = args.game.currentRoom;
    var targetCell = args.targetCell;
    // snap to the grid
    block.move(0);
    block.setPosition(targetCell.x, targetCell.y);
    // check if falling
    if (room.isPositionFree(block.x + 1, block.y + __WEBPACK_IMPORTED_MODULE_1__util_constants__["GridCellSize"] + 1)) {
        block.raiseEvent(__WEBPACK_IMPORTED_MODULE_2__util_enum__["GameAction"].Fall, args);
    }
});


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_constants__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_enum__ = __webpack_require__(2);



var XSprite = __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Sprite"].define(__WEBPACK_IMPORTED_MODULE_2__util_enum__["SpriteID"].X, {
    imageSource: '../resources/x.png',
    height: __WEBPACK_IMPORTED_MODULE_1__util_constants__["GridCellSize"],
    width: __WEBPACK_IMPORTED_MODULE_1__util_constants__["GridCellSize"],
});
var ExitButton = __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Actor"].define(__WEBPACK_IMPORTED_MODULE_2__util_enum__["ActorID"].ExitButton, {
    boundary: __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Boundary"].fromSprite(XSprite),
    sprite: XSprite,
});
ExitButton.onClick(function () { return __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Vastgame"].setRoom(__WEBPACK_IMPORTED_MODULE_2__util_enum__["RoomID"].LevelSelect); });


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_constants__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_enum__ = __webpack_require__(2);



var BotSprite = __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Sprite"].define(__WEBPACK_IMPORTED_MODULE_2__util_enum__["SpriteID"].StackmoSheet, {
    imageSource: '../resources/stackmo_sheet.png',
    height: __WEBPACK_IMPORTED_MODULE_1__util_constants__["GridCellSize"],
    width: __WEBPACK_IMPORTED_MODULE_1__util_constants__["GridCellSize"],
    frameBorder: 4,
});
var Player = __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Actor"].define(__WEBPACK_IMPORTED_MODULE_2__util_enum__["ActorID"].Player, {
    boundary: __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Boundary"].fromSprite(BotSprite),
    sprite: BotSprite,
});
var heldBlock;
var lastDirection = __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Enum"].Direction.Right;
Player.onCreate(function (self) {
    self.animation.depth = -50;
    heldBlock = null;
});
Player.onStep(function (self) {
    if (heldBlock) {
        heldBlock.setPosition(self.x, self.y - __WEBPACK_IMPORTED_MODULE_1__util_constants__["GridCellSize"]);
    }
});
// Moving
Player.onEvent(__WEBPACK_IMPORTED_MODULE_2__util_enum__["GameAction"].Move, function (player, args) {
    var targetCell = args.targetCell;
    var direction = args.direction;
    var startX = player.x;
    var stopCondition = function () {
        return Math.abs(startX - player.x) >= __WEBPACK_IMPORTED_MODULE_1__util_constants__["GridCellSize"];
    };
    lastDirection = direction;
    // clearance check
    if (!heldBlock || (heldBlock && targetCell.getAdjacentCell(__WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Enum"].Direction.Up).isFree())) {
        player.move(__WEBPACK_IMPORTED_MODULE_1__util_constants__["PlayerMoveSpeed"], direction);
        player.raiseEventWhen(__WEBPACK_IMPORTED_MODULE_2__util_enum__["GameAction"].CheckStopMoving, stopCondition, args);
        animate(player, direction, true);
    }
});
// Stop moving or continue
Player.onEvent(__WEBPACK_IMPORTED_MODULE_2__util_enum__["GameAction"].CheckStopMoving, function (player, args) {
    var targetCell = args.targetCell;
    var action = __WEBPACK_IMPORTED_MODULE_2__util_enum__["GameAction"].Stop;
    // snap to the grid
    player.move(0);
    player.setPosition(targetCell.x, targetCell.y);
    if (__WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Input"].clickActive || __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Input"].keyDown(lastDirection === __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Enum"].Direction.Left ? __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Enum"].Key.Left : __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Enum"].Key.Right)) {
        var nextCell = targetCell.getAdjacentCell(lastDirection);
        var belowCell = targetCell.getAdjacentCell(__WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Enum"].Direction.Down);
        if (nextCell.isFree() && !belowCell.isFree()) {
            args.targetCell = nextCell;
            action = __WEBPACK_IMPORTED_MODULE_2__util_enum__["GameAction"].Move;
        }
    }
    player.raiseEvent(action, args);
});
// Falling
Player.onEvent(__WEBPACK_IMPORTED_MODULE_2__util_enum__["GameAction"].Fall, function (player, args) {
    var startY = player.y;
    var direction = args.direction;
    var stopCondition = function () { return Math.abs(startY - player.y) >= __WEBPACK_IMPORTED_MODULE_1__util_constants__["GridCellSize"]; };
    // move the target cell to the one below the previous target cell
    args.targetCell = args.targetCell.getAdjacentCell(__WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Enum"].Direction.Down);
    player.move(__WEBPACK_IMPORTED_MODULE_1__util_constants__["PlayerFallSpeed"], __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Enum"].Direction.Down);
    player.raiseEventWhen(__WEBPACK_IMPORTED_MODULE_2__util_enum__["GameAction"].Stop, stopCondition, args);
    animate(player, direction, false);
});
// Stopping
Player.onEvent(__WEBPACK_IMPORTED_MODULE_2__util_enum__["GameAction"].Stop, function (player, args) {
    var room = args.game.currentRoom;
    var targetCell = args.targetCell;
    // snap to the grid
    player.move(0);
    player.setPosition(targetCell.x, targetCell.y);
    // check if falling
    if (room.isPositionFree(player.x + 1, player.y + __WEBPACK_IMPORTED_MODULE_1__util_constants__["GridCellSize"] + 1)) {
        player.raiseEvent(__WEBPACK_IMPORTED_MODULE_2__util_enum__["GameAction"].Fall, args);
    }
    else {
        animate(player, lastDirection);
    }
    // check for victory
    var WinActor = __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Actor"].get(__WEBPACK_IMPORTED_MODULE_2__util_enum__["ActorID"].Win);
    if (targetCell.containsInstanceOf(WinActor)) {
        var win = room.getInstances().find(function (actorInstance) { return actorInstance.parent === WinActor; });
        win.raiseEvent(__WEBPACK_IMPORTED_MODULE_2__util_enum__["GameAction"].Win);
    }
});
// Jumping
Player.onEvent(__WEBPACK_IMPORTED_MODULE_2__util_enum__["GameAction"].Jump, function (player, args) {
    var targetCell = args.targetCell;
    var direction = args.direction;
    var startY = player.y;
    // clearance check
    var cellAbovePlayer = targetCell.getAdjacentCell(direction === __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Enum"].Direction.Right ? __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Enum"].Direction.Left : __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Enum"].Direction.Right);
    var cellAboveBox = !!heldBlock ? cellAbovePlayer.getAdjacentCell(__WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Enum"].Direction.Up) : null;
    var canJump = !!cellAboveBox
        ? cellAboveBox.isFree() && cellAboveBox.getAdjacentCell(direction).isFree()
        : cellAbovePlayer.isFree();
    if (canJump) {
        // stop after moving up one space
        var stopCondition = function () { return Math.abs(startY - player.y) >= __WEBPACK_IMPORTED_MODULE_1__util_constants__["GridCellSize"]; };
        player.move(__WEBPACK_IMPORTED_MODULE_1__util_constants__["PlayerJumpSpeed"], __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Enum"].Direction.Up);
        player.raiseEventWhen(__WEBPACK_IMPORTED_MODULE_2__util_enum__["GameAction"].Move, stopCondition, args);
    }
});
// Lifting
Player.onEvent(__WEBPACK_IMPORTED_MODULE_2__util_enum__["GameAction"].Lift, function (player, args) {
    var block = args.block;
    var targetCell = args.targetCell;
    var validBlockLiftCell = lastDirection === __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Enum"].Direction.Left ? __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Enum"].Direction.Right : __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Enum"].Direction.Left;
    // prevent lifting if there's something on top of the box or on top of the player
    var aboveBoxCell = targetCell.getAdjacentCell(__WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Enum"].Direction.Up);
    var abovePlayerCell = aboveBoxCell.getAdjacentCell(validBlockLiftCell);
    if (!heldBlock && !(aboveBoxCell.isFree() && abovePlayerCell.isFree())) {
        return;
    }
    if (heldBlock && block === heldBlock) {
        player.raiseEvent(__WEBPACK_IMPORTED_MODULE_2__util_enum__["GameAction"].Drop, args);
    }
    else if (!heldBlock && targetCell.getAdjacentCell(validBlockLiftCell).containsInstance(player)) {
        heldBlock = block;
        animate(player, lastDirection);
    }
});
// Drop
Player.onEvent(__WEBPACK_IMPORTED_MODULE_2__util_enum__["GameAction"].Drop, function (player, args) {
    var block = args.block;
    var targetCell = args.targetCell;
    var offsetX = lastDirection === __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Enum"].Direction.Left ? -__WEBPACK_IMPORTED_MODULE_1__util_constants__["GridCellSize"] : __WEBPACK_IMPORTED_MODULE_1__util_constants__["GridCellSize"];
    // prevent dropping if there's something in the way of the box
    if (targetCell.getAdjacentCell(lastDirection).isFree()) {
        args.targetCell = args.targetCell.getAdjacentCell(lastDirection);
        heldBlock = null;
        block.setPositionRelative(offsetX, 0);
        block.raiseEvent(__WEBPACK_IMPORTED_MODULE_2__util_enum__["GameAction"].Fall, args);
        animate(player, lastDirection);
    }
});
// Helpers
// enums values correspond to sprite sheet frames
var StackmoFrame;
(function (StackmoFrame) {
    StackmoFrame[StackmoFrame["StandLeft"] = 0] = "StandLeft";
    StackmoFrame[StackmoFrame["MoveLeft1"] = 1] = "MoveLeft1";
    StackmoFrame[StackmoFrame["MoveLeft2"] = 2] = "MoveLeft2";
    StackmoFrame[StackmoFrame["StandRight"] = 3] = "StandRight";
    StackmoFrame[StackmoFrame["MoveRight1"] = 4] = "MoveRight1";
    StackmoFrame[StackmoFrame["MoveRight2"] = 5] = "MoveRight2";
    StackmoFrame[StackmoFrame["StandHoldLeft"] = 6] = "StandHoldLeft";
    StackmoFrame[StackmoFrame["MoveHoldLeft1"] = 7] = "MoveHoldLeft1";
    StackmoFrame[StackmoFrame["MoveHoldLeft2"] = 8] = "MoveHoldLeft2";
    StackmoFrame[StackmoFrame["StandHoldRight"] = 9] = "StandHoldRight";
    StackmoFrame[StackmoFrame["MoveHoldRight1"] = 10] = "MoveHoldRight1";
    StackmoFrame[StackmoFrame["MoveHolddRight2"] = 11] = "MoveHolddRight2";
})(StackmoFrame || (StackmoFrame = {}));
function animate(player, direction, isMoving) {
    if (isMoving === void 0) { isMoving = false; }
    var animationSpeed = 100;
    var startFrame = StackmoFrame.StandRight;
    if (!!heldBlock) {
        startFrame = direction === __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Enum"].Direction.Right ? StackmoFrame.StandHoldRight : StackmoFrame.StandHoldLeft;
    }
    else {
        startFrame = direction === __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Enum"].Direction.Right ? StackmoFrame.StandRight : StackmoFrame.StandLeft;
    }
    if (isMoving) {
        player.spriteAnimation.start(startFrame + 1, startFrame + 2, animationSpeed);
    }
    else {
        player.spriteAnimation.set(startFrame);
    }
}


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_constants__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_enum__ = __webpack_require__(2);



var Stone = __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Sprite"].define(__WEBPACK_IMPORTED_MODULE_2__util_enum__["SpriteID"].Wall, {
    imageSource: '../resources/wall_sheet_teal.png',
    height: __WEBPACK_IMPORTED_MODULE_1__util_constants__["GridCellSize"],
    width: __WEBPACK_IMPORTED_MODULE_1__util_constants__["GridCellSize"],
    frameBorder: 1,
});
var Wall = __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Actor"].define(__WEBPACK_IMPORTED_MODULE_2__util_enum__["ActorID"].Wall, {
    boundary: __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Boundary"].fromSprite(Stone, true),
    sprite: Stone,
});


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_constants__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_enum__ = __webpack_require__(2);



var DoorSprite = __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Sprite"].define(__WEBPACK_IMPORTED_MODULE_2__util_enum__["SpriteID"].DoorSheet, {
    imageSource: '../resources/door_sheet.png',
    height: __WEBPACK_IMPORTED_MODULE_1__util_constants__["GridCellSize"],
    width: 32,
    frameBorder: 1,
});
var WinActor = __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Actor"].define(__WEBPACK_IMPORTED_MODULE_2__util_enum__["ActorID"].Win, {
    boundary: __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Boundary"].fromSprite(DoorSprite, true),
    sprite: DoorSprite,
});
var opening = false;
var closing = false;
var doorAnimationOffsetX = 0;
WinActor.onCreate(function (win) {
    // hide and draw sprite "manually" during onDraw
    win.animation.depth = -10;
    win.visible = false;
});
WinActor.onStep(function (win) {
    if (opening) {
        doorAnimationOffsetX++;
    }
    else if (closing) {
        doorAnimationOffsetX--;
    }
});
// animate the door panels when winning
WinActor.onDraw(function (self, context) {
    var playerView = __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Room"].current.view;
    context.drawSprite(DoorSprite, self.x - doorAnimationOffsetX, self.y, 0, playerView);
    context.drawSprite(DoorSprite, self.x + 32 + doorAnimationOffsetX, self.y, 1, playerView);
});
WinActor.onEvent(__WEBPACK_IMPORTED_MODULE_2__util_enum__["GameAction"].Win, function (win, args) {
    win.raiseEvent('open');
});
WinActor.onEvent('open', function (win, args) {
    opening = true;
    setTimeout(function () {
        win.raiseEvent('close');
    }, 500);
});
WinActor.onEvent('close', function (win, args) {
    opening = false;
    win.animation.depth = -100;
    setTimeout(function () {
        closing = true;
        setTimeout(function () {
            win.raiseEvent('home');
        }, 500);
    }, 500);
});
WinActor.onEvent('home', function (win, args) {
    doorAnimationOffsetX = 0;
    closing = false;
    setTimeout(function () {
        __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Vastgame"].setRoom(__WEBPACK_IMPORTED_MODULE_2__util_enum__["RoomID"].LevelSelect, { win: true });
    }, 500);
});


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_constants__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_enum__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_registry__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_sprite_fader__ = __webpack_require__(12);





var LevelRoom = __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Room"].define(__WEBPACK_IMPORTED_MODULE_2__util_enum__["RoomID"].Level);
LevelRoom.onStart(function () {
    var BlockActor = __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Actor"].get(__WEBPACK_IMPORTED_MODULE_2__util_enum__["ActorID"].Block);
    var ExitButtonActor = __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Actor"].get(__WEBPACK_IMPORTED_MODULE_2__util_enum__["ActorID"].ExitButton);
    var PlayerActor = __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Actor"].get(__WEBPACK_IMPORTED_MODULE_2__util_enum__["ActorID"].Player);
    var WallActor = __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Actor"].get(__WEBPACK_IMPORTED_MODULE_2__util_enum__["ActorID"].Wall);
    var WinActor = __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Actor"].get(__WEBPACK_IMPORTED_MODULE_2__util_enum__["ActorID"].Win);
    var DoorSprite = __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Sprite"].get(__WEBPACK_IMPORTED_MODULE_2__util_enum__["SpriteID"].DoorSheet);
    __WEBPACK_IMPORTED_MODULE_4__util_sprite_fader__["SpriteFader"].fadeIn([ExitButtonActor.sprite, BlockActor.sprite, PlayerActor.sprite, WallActor.sprite, DoorSprite]);
    // assumes the level has already been populated before starting
    var player = LevelRoom.getInstances().find(function (actorInstance) { return actorInstance.parent === PlayerActor; });
    // define a view that follows the player and has the "X" button attached
    var canvasWidth = __WEBPACK_IMPORTED_MODULE_3__util_registry__["Registry"].get(__WEBPACK_IMPORTED_MODULE_2__util_enum__["Settings"].CanvasWidth);
    var canvasHeight = __WEBPACK_IMPORTED_MODULE_3__util_registry__["Registry"].get(__WEBPACK_IMPORTED_MODULE_2__util_enum__["Settings"].CanvasHeight);
    var viewHUDBuffer = __WEBPACK_IMPORTED_MODULE_1__util_constants__["GridCellSize"] / 4;
    var playerView = LevelRoom.defineView(0, 0, canvasWidth, canvasHeight);
    playerView.follow(player, true);
    playerView.attach(LevelRoom.createActor(ExitButtonActor), canvasWidth - __WEBPACK_IMPORTED_MODULE_1__util_constants__["GridCellSize"] - viewHUDBuffer, viewHUDBuffer);
    // define the movement grid and player behavior
    var grid = LevelRoom.defineGrid(__WEBPACK_IMPORTED_MODULE_1__util_constants__["GridCellSize"]);
    grid.onClick(function (gridClickEvent) {
        var clickedCell = gridClickEvent.getCell();
        // do nothing if the player is moving or if a wall was clicked on
        if (player.speed || clickedCell.getContents().some(function (instance) { return instance.parent === WallActor; })) {
            return;
        }
        var leftCell = clickedCell.getAdjacentCell(__WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Enum"].Direction.Left);
        var rightCell = clickedCell.getAdjacentCell(__WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Enum"].Direction.Right);
        var downCell = clickedCell.getAdjacentCell(__WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Enum"].Direction.Down);
        var downLeftCell = leftCell.getAdjacentCell(__WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Enum"].Direction.Down);
        var downRightCell = rightCell.getAdjacentCell(__WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Enum"].Direction.Down);
        if (clickedCell.containsInstanceOf(BlockActor)) {
            player.raiseEvent(__WEBPACK_IMPORTED_MODULE_2__util_enum__["GameAction"].Lift, { block: clickedCell.getContents()[0], targetCell: clickedCell });
        }
        else if (rightCell.containsInstance(player)) {
            player.raiseEvent(__WEBPACK_IMPORTED_MODULE_2__util_enum__["GameAction"].Move, { direction: __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Enum"].Direction.Left, targetCell: clickedCell });
        }
        else if (leftCell.containsInstance(player)) {
            player.raiseEvent(__WEBPACK_IMPORTED_MODULE_2__util_enum__["GameAction"].Move, { direction: __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Enum"].Direction.Right, targetCell: clickedCell });
        }
        else if (downLeftCell.containsInstance(player) && (downCell.containsInstanceOf(BlockActor) || downCell.containsInstanceOf(WallActor))) {
            player.raiseEvent(__WEBPACK_IMPORTED_MODULE_2__util_enum__["GameAction"].Jump, { direction: __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Enum"].Direction.Right, targetCell: clickedCell });
        }
        else if (downRightCell.containsInstance(player) && (downCell.containsInstanceOf(BlockActor) || downCell.containsInstanceOf(WallActor))) {
            player.raiseEvent(__WEBPACK_IMPORTED_MODULE_2__util_enum__["GameAction"].Jump, { direction: __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Enum"].Direction.Left, targetCell: clickedCell });
        }
    });
    // Keyboard input
    LevelRoom.onKey(__WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Enum"].Key.Left, function () {
        var playerCell = grid.getCellAtPosition(player.x, player.y);
        var leftCell = playerCell.getAdjacentCell(__WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Enum"].Direction.Left);
        var topLeftCell = leftCell.getAdjacentCell(__WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Enum"].Direction.Up);
        if (topLeftCell.isFree() && (leftCell.containsInstanceOf(WallActor) || leftCell.containsInstanceOf(BlockActor))) {
            grid.raiseClickEvent(player.x - __WEBPACK_IMPORTED_MODULE_1__util_constants__["GridCellSize"], player.y - __WEBPACK_IMPORTED_MODULE_1__util_constants__["GridCellSize"]);
        }
        else if (leftCell.isFree()) {
            grid.raiseClickEvent(player.x - __WEBPACK_IMPORTED_MODULE_1__util_constants__["GridCellSize"], player.y);
        }
    });
    LevelRoom.onKey(__WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Enum"].Key.Right, function () {
        var playerCell = grid.getCellAtPosition(player.x, player.y);
        var rightCell = playerCell.getAdjacentCell(__WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Enum"].Direction.Right);
        var topRightCell = rightCell.getAdjacentCell(__WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Enum"].Direction.Up);
        if (topRightCell.isFree() && (rightCell.containsInstanceOf(WallActor) || rightCell.containsInstanceOf(BlockActor))) {
            grid.raiseClickEvent(player.x + __WEBPACK_IMPORTED_MODULE_1__util_constants__["GridCellSize"], player.y - __WEBPACK_IMPORTED_MODULE_1__util_constants__["GridCellSize"]);
        }
        else if (rightCell.isFree()) {
            grid.raiseClickEvent(player.x + __WEBPACK_IMPORTED_MODULE_1__util_constants__["GridCellSize"], player.y);
        }
    });
    LevelRoom.onKey(__WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Enum"].Key.Down, function () {
        var playerCell = grid.getCellAtPosition(player.x, player.y);
        var leftCell = playerCell.getAdjacentCell(__WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Enum"].Direction.Left);
        var rightCell = playerCell.getAdjacentCell(__WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Enum"].Direction.Right);
        var topCell = playerCell.getAdjacentCell(__WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Enum"].Direction.Up);
        var topLeftCell = topCell.getAdjacentCell(__WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Enum"].Direction.Left);
        var topRightCell = topCell.getAdjacentCell(__WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Enum"].Direction.Right);
        if (topCell.containsInstanceOf(BlockActor)) {
            // drop
            grid.raiseClickEvent(player.x, player.y - __WEBPACK_IMPORTED_MODULE_1__util_constants__["GridCellSize"]);
        }
        else {
            // lift
            if (leftCell.containsInstanceOf(BlockActor) && topLeftCell.isFree()) {
                grid.raiseClickEvent(player.x - __WEBPACK_IMPORTED_MODULE_1__util_constants__["GridCellSize"], player.y);
            }
            if (rightCell.containsInstanceOf(BlockActor) && topRightCell.isFree()) {
                grid.raiseClickEvent(player.x + __WEBPACK_IMPORTED_MODULE_1__util_constants__["GridCellSize"], player.y);
            }
        }
    });
});


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_constants__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_enum__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_level_builder__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_sprite_fader__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_registry__ = __webpack_require__(7);






var scrollView;
var canvasHeight;
var canvasWidth;
var startX;
var startY;
var overflowedRows;
var iconPadding = 8;
var iconSizeWithPadding = __WEBPACK_IMPORTED_MODULE_1__util_constants__["GridCellSize"] + (iconPadding * 2);
var LevelSelectRoom = __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Room"].define(__WEBPACK_IMPORTED_MODULE_2__util_enum__["RoomID"].LevelSelect);
var _lastLevelNumber = 1;
LevelSelectRoom.onStart(function (args) {
    canvasWidth = __WEBPACK_IMPORTED_MODULE_5__util_registry__["Registry"].get(__WEBPACK_IMPORTED_MODULE_2__util_enum__["Settings"].CanvasWidth);
    canvasHeight = __WEBPACK_IMPORTED_MODULE_5__util_registry__["Registry"].get(__WEBPACK_IMPORTED_MODULE_2__util_enum__["Settings"].CanvasHeight);
    console.log(_lastLevelNumber);
    LevelSelectRoom.setBackground(__WEBPACK_IMPORTED_MODULE_1__util_constants__["Black"], canvasWidth, canvasHeight);
    scrollView = LevelSelectRoom.defineView(0, 0, canvasWidth, canvasHeight);
    var iconsPerRow = Math.floor(canvasWidth / iconSizeWithPadding);
    startX = Math.floor((canvasWidth - (iconsPerRow * iconSizeWithPadding)) / 2);
    startY = Math.floor(canvasHeight / 6);
    // adjust icons per row for scroll bar if rows overflow the canvas
    var showScrollbars = false;
    var rowCount = Math.ceil(__WEBPACK_IMPORTED_MODULE_3__util_level_builder__["Levels"].count / iconsPerRow);
    if (startY + (rowCount * iconSizeWithPadding) > canvasHeight) {
        iconsPerRow--;
        rowCount = Math.ceil(__WEBPACK_IMPORTED_MODULE_3__util_level_builder__["Levels"].count / iconsPerRow);
        overflowedRows = Math.ceil(((rowCount * iconSizeWithPadding) - canvasHeight) / iconSizeWithPadding);
        showScrollbars = true;
    }
    var unlockedLevelCount = Number(__WEBPACK_IMPORTED_MODULE_5__util_registry__["Registry"].get(__WEBPACK_IMPORTED_MODULE_2__util_enum__["Settings"].StackmoProgress));
    if (args && args.win && _lastLevelNumber === unlockedLevelCount) {
        __WEBPACK_IMPORTED_MODULE_5__util_registry__["Registry"].set(__WEBPACK_IMPORTED_MODULE_2__util_enum__["Settings"].StackmoProgress, unlockedLevelCount + 1, true);
    }
    // create level icons
    var currentRow = 0;
    var currentPosition = 0;
    for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_3__util_level_builder__["Levels"].count; i++) {
        var icon = LevelSelectRoom.createActor(LevelIcon, startX + currentPosition * iconSizeWithPadding, startY + currentRow * iconSizeWithPadding);
        icon.levelNumber = i + 1;
        icon.enabled = i < unlockedLevelCount;
        currentPosition++;
        if (currentPosition === iconsPerRow) {
            currentPosition = 0;
            currentRow++;
        }
    }
    // create scroll icons if needed
    if (showScrollbars) {
        var upArrow = LevelSelectRoom.createActor(ScrollArrow);
        upArrow.spriteAnimation.set(1);
        upArrow.x = canvasWidth - iconPadding - ScrollArrow.sprite.width;
        upArrow.direction = __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Enum"].Direction.Up;
        var downArrow = LevelSelectRoom.createActor(ScrollArrow);
        downArrow.x = upArrow.x;
        downArrow.direction = __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Enum"].Direction.Down;
    }
    __WEBPACK_IMPORTED_MODULE_4__util_sprite_fader__["SpriteFader"].fadeIn([TextSprite, DigitsSprite, LevelIconSprite, ArrowSprite]);
});
// draw the banner text
var TextSprite = __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Sprite"].define(__WEBPACK_IMPORTED_MODULE_2__util_enum__["SpriteID"].TextSheet, {
    imageSource: '../resources/text_sheet.png',
    height: 32,
    width: 320,
});
LevelSelectRoom.onDraw(function (context) {
    context.drawSprite(TextSprite, startX, Math.floor(startY / 2 - TextSprite.height), 0, scrollView);
});
// Level icons
var DigitsSprite = __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Sprite"].define(__WEBPACK_IMPORTED_MODULE_2__util_enum__["SpriteID"].Digits, {
    imageSource: '../resources/digits_32px.png',
    height: __WEBPACK_IMPORTED_MODULE_1__util_constants__["GridCellSize"] / 2,
    width: __WEBPACK_IMPORTED_MODULE_1__util_constants__["GridCellSize"] / 2,
});
var LevelIconSprite = __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Sprite"].define(__WEBPACK_IMPORTED_MODULE_2__util_enum__["SpriteID"].LevelIcon, {
    imageSource: '../resources/level_icon.png',
    width: __WEBPACK_IMPORTED_MODULE_1__util_constants__["GridCellSize"],
    height: __WEBPACK_IMPORTED_MODULE_1__util_constants__["GridCellSize"],
});
var LevelIcon = __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Actor"].define(__WEBPACK_IMPORTED_MODULE_2__util_enum__["ActorID"].LevelIcon, {
    boundary: __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Boundary"].fromSprite(LevelIconSprite),
    sprite: LevelIconSprite,
});
LevelIcon.onClick(function (self) {
    if (self.enabled) {
        __WEBPACK_IMPORTED_MODULE_4__util_sprite_fader__["SpriteFader"].fadeOut([TextSprite, DigitsSprite, LevelIconSprite, ArrowSprite], function () {
            var levelNumber = self.levelNumber;
            var level = __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Room"].get(__WEBPACK_IMPORTED_MODULE_2__util_enum__["RoomID"].Level);
            __WEBPACK_IMPORTED_MODULE_3__util_level_builder__["LevelBuilder"].populateRoom(level, levelNumber);
            _lastLevelNumber = levelNumber;
            __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Vastgame"].setRoom(__WEBPACK_IMPORTED_MODULE_2__util_enum__["RoomID"].Level);
        });
    }
});
LevelIcon.onDraw(function (self, context) {
    if (self.enabled) {
        var levelNumber = self.levelNumber;
        var singleDigitMargin = Math.floor((LevelIconSprite.width - DigitsSprite.width) / 2);
        if (levelNumber < 10) {
            var frame = levelNumber;
            context.drawSprite(DigitsSprite, self.x + singleDigitMargin, self.y + singleDigitMargin, frame, scrollView);
        }
        else {
            var tensFrame = Math.floor(levelNumber / 10);
            var tensMargin = Math.floor(singleDigitMargin / 2) - 3;
            context.drawSprite(DigitsSprite, self.x + tensMargin, self.y + singleDigitMargin, tensFrame, scrollView);
            var onesFrame = levelNumber % 10;
            var onesMargin = Math.floor(singleDigitMargin * 2) - 3;
            context.drawSprite(DigitsSprite, self.x + onesMargin, self.y + singleDigitMargin, onesFrame, scrollView);
        }
    }
});
// Scroll arrows
var ArrowSprite = __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Sprite"].define(__WEBPACK_IMPORTED_MODULE_2__util_enum__["SpriteID"].Arrows, {
    imageSource: '../resources/arrows.png',
    height: __WEBPACK_IMPORTED_MODULE_1__util_constants__["GridCellSize"],
    width: __WEBPACK_IMPORTED_MODULE_1__util_constants__["GridCellSize"],
});
var ScrollArrow = __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Actor"].define(__WEBPACK_IMPORTED_MODULE_2__util_enum__["ActorID"].ScrollArrow, {
    boundary: __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Boundary"].fromSprite(ArrowSprite),
    sprite: ArrowSprite,
});
ScrollArrow.onClick(function (self, event) {
    if (self.enabled) {
        var direction = self.direction;
        scrollView.y += direction === __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Enum"].Direction.Down ? 64 : -64;
        if (scrollView.y < 0) {
            scrollView.y = 0;
        }
    }
});
ScrollArrow.onStep(function (self) {
    // update vertical position to match scrolling
    var isUpArrow = (self.direction === __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Enum"].Direction.Up);
    self.y = isUpArrow ? startY + scrollView.y : canvasHeight - 82 + scrollView.y;
    // enable/disable if there's no more scrolling to do
    self.enabled = isUpArrow ? scrollView.y > 0 : scrollView.y < (overflowedRows + 2) * iconSizeWithPadding;
});


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_enum__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_sprite_fader__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_registry__ = __webpack_require__(7);




var TitleWidth = 360;
var TitleHeight = 150;
var titleX = 0;
var titleY = 0;
var TitleSprite = __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Sprite"].define(__WEBPACK_IMPORTED_MODULE_1__util_enum__["SpriteID"].Title, {
    imageSource: '../resources/title.png',
    width: TitleWidth,
    height: TitleHeight,
});
var TitleRoom = __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Room"].define(__WEBPACK_IMPORTED_MODULE_1__util_enum__["RoomID"].Title);
TitleRoom.onStart(function () {
    var canvasWidth = __WEBPACK_IMPORTED_MODULE_3__util_registry__["Registry"].get(__WEBPACK_IMPORTED_MODULE_1__util_enum__["Settings"].CanvasWidth);
    var canvasHeight = __WEBPACK_IMPORTED_MODULE_3__util_registry__["Registry"].get(__WEBPACK_IMPORTED_MODULE_1__util_enum__["Settings"].CanvasHeight);
    titleX = Math.floor((canvasWidth - TitleWidth) / 2);
    titleY = Math.floor((canvasHeight - TitleHeight) / 4);
    __WEBPACK_IMPORTED_MODULE_2__util_sprite_fader__["SpriteFader"].fadeIn([TitleSprite]);
});
TitleRoom.onDraw(function (context) {
    context.drawSprite(TitleSprite, titleX, titleY);
});
TitleRoom.onClick(goToLevelSelect);
TitleRoom.onKey(__WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Enum"].Key.Any, goToLevelSelect);
function goToLevelSelect() {
    __WEBPACK_IMPORTED_MODULE_2__util_sprite_fader__["SpriteFader"].fadeOut([TitleSprite], function () {
        __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Vastgame"].setRoom(__WEBPACK_IMPORTED_MODULE_1__util_enum__["RoomID"].LevelSelect);
    });
}


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./actors/block": 21,
	"./actors/block.ts": 21,
	"./actors/hud": 22,
	"./actors/hud.ts": 22,
	"./actors/player": 23,
	"./actors/player.ts": 23,
	"./actors/wall": 24,
	"./actors/wall.ts": 24,
	"./actors/win": 25,
	"./actors/win.ts": 25,
	"./game": 18,
	"./game.ts": 18,
	"./rooms/level": 26,
	"./rooms/level-select": 27,
	"./rooms/level-select.ts": 27,
	"./rooms/level.ts": 26,
	"./rooms/title": 28,
	"./rooms/title.ts": 28,
	"./util/constants": 4,
	"./util/constants.ts": 4,
	"./util/enum": 2,
	"./util/enum.ts": 2,
	"./util/level-builder": 20,
	"./util/level-builder.ts": 20,
	"./util/registry": 7,
	"./util/registry.ts": 7,
	"./util/sprite-fader": 12,
	"./util/sprite-fader.ts": 12,
	"./util/util": 19,
	"./util/util.ts": 19
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 29;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzBjODM4NWU2MTZmNTJmOTZkNjEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS92YXN0Z2FtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2dhbWUtY29udGV4dC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS91dGlsL2VudW0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9lbnVtLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL3V0aWwvY29uc3RhbnRzLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvaW5wdXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9zcHJpdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvdXRpbC9yZWdpc3RyeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL3Jvb20udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9hY3Rvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2dyaWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS92aWV3LnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL3V0aWwvc3ByaXRlLWZhZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvY2FudmFzLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvZ2FtZS1ydW5uZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9ldmVudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS91dGlsLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvYm91bmRhcnkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvZ2FtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS91dGlsL3V0aWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvdXRpbC9sZXZlbC1idWlsZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL2FjdG9ycy9ibG9jay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9hY3RvcnMvaHVkLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL2FjdG9ycy9wbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvYWN0b3JzL3dhbGwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvYWN0b3JzL3dpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9yb29tcy9sZXZlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9yb29tcy9sZXZlbC1zZWxlY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvcm9vbXMvdGl0bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUgXlxcLlxcLy4qJCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0R1RTtBQUN4QztBQUNDO0FBQ2E7QUFDRjtBQUNiO0FBRTlCLHdCQUF3QjtBQUN1QjtBQUNUO0FBQ3ZCO0FBQ2lCO0FBQ1E7QUFDVjtBQUMwQjtBQUMxQjtBQVc5QjtJQUFBO0lBaUNBLENBQUM7SUE5QkcsNkJBQUksR0FBSixVQUFLLGVBQWUsRUFBRSxPQUF5QjtRQUF6QixzQ0FBeUI7UUFDM0MscURBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUViLElBQUksT0FBTyxHQUFz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QUFNLEdBQUcsQ0FBQyxDQUFDO1FBRS9CLElBQUksT0FBTyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQzNFLElBQUksV0FBVyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ25HLElBQUksWUFBWSxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ3ZHLElBQUksVUFBVSxHQUFHLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ2pGLElBQUksY0FBYyxHQUFHLENBQUMsR0FBRyxHQUFHLElBQUksSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ3pHLElBQUksZUFBZSxHQUFHLENBQUMsR0FBRyxHQUFHLElBQUksSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEs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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCIiwiZmlsZSI6ImdhbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxOCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYzBjODM4NWU2MTZmNTJmOTZkNjEiLCJpbXBvcnQgeyBHYW1lQ2FudmFzSFRNTDJELCBDYW52YXNPcHRpb25zLCBHYW1lQ2FudmFzIH0gZnJvbSAnLi9jYW52YXMnO1xyXG5pbXBvcnQgKiBhcyBFbnVtIGZyb20gJy4vZW51bSc7XHJcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnLi9pbnB1dCc7XHJcbmltcG9ydCB7IEdhbWVDb250ZXh0IH0gZnJvbSAnLi9nYW1lLWNvbnRleHQnO1xyXG5pbXBvcnQgeyBHYW1lUnVubmVyIH0gZnJvbSAnLi9nYW1lLXJ1bm5lcic7XHJcbmltcG9ydCB7IFJvb20gfSBmcm9tICcuL3Jvb20nO1xyXG5cclxuLy8gZXhwb3J0IHB1YmxpYyBtb2R1bGVzXHJcbmV4cG9ydCB7IEFjdG9yLCBBY3Rvckluc3RhbmNlIH0gZnJvbSAnLi9hY3Rvcic7XHJcbmV4cG9ydCB7IEJvdW5kYXJ5IH0gZnJvbSAnLi9ib3VuZGFyeSc7XHJcbmV4cG9ydCB7IEVudW0gfVxyXG5leHBvcnQgeyBJbnB1dCB9IGZyb20gJy4vaW5wdXQnO1xyXG5leHBvcnQgeyBHcmlkLCBHcmlkQ2VsbCB9IGZyb20gJy4vZ3JpZCc7XHJcbmV4cG9ydCB7IFJvb20gfSBmcm9tICcuL3Jvb20nO1xyXG5leHBvcnQgeyBTcHJpdGUsIFNwcml0ZVRyYW5zZm9ybWF0aW9uIH0gZnJvbSAnLi9zcHJpdGUnO1xyXG5leHBvcnQgeyBWaWV3IH0gZnJvbSAnLi92aWV3JztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgR2FtZUxpZmVjeWNsZUNhbGxiYWNrIHtcclxuICAgIChhcmdzOiBhbnkpOiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEdhbWVPcHRpb25zIHtcclxuICAgIGNhbnZhcz86IENhbnZhc09wdGlvbnM7XHJcbiAgICB0YXJnZXRGUFM/OiBudW1iZXI7XHJcbn1cclxuXHJcbmNsYXNzIFZhc3RnYW1lSFRNTDJEIHtcclxuICAgIHByaXZhdGUgcnVubmVyOiBHYW1lUnVubmVyO1xyXG5cclxuICAgIGluaXQoY2FudmFzRWxlbWVudElELCBvcHRpb25zOiBHYW1lT3B0aW9ucyA9IHt9KTogdm9pZCB7XHJcbiAgICAgICAgSW5wdXQuaW5pdCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBlbGVtZW50ID0gPEhUTUxDYW52YXNFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNhbnZhc0VsZW1lbnRJRCk7XHJcbiAgICAgICAgbGV0IGNhbnZhcyA9IG5ldyBHYW1lQ2FudmFzSFRNTDJEKGVsZW1lbnQpO1xyXG4gICAgICAgIGNhbnZhcy5pbml0KG9wdGlvbnMuY2FudmFzKTtcclxuXHJcbiAgICAgICAgR2FtZUNvbnRleHQuc2V0Q2FudmFzKGNhbnZhcyk7XHJcbiAgICAgICAgdGhpcy5ydW5uZXIgPSBuZXcgR2FtZVJ1bm5lcihjYW52YXMsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KHJvb21JRDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5zZXRSb29tKHJvb21JRCk7XHJcbiAgICAgICAgdGhpcy5ydW5uZXIuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRSb29tKHJvb21JRDogc3RyaW5nLCBzdGFydEFyZ3M/OiBhbnkpIHtcclxuICAgICAgICBsZXQgcm9vbSA9IFJvb20uZ2V0KHJvb21JRCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHByZXZpb3VzUm9vbSA9IEdhbWVDb250ZXh0LmdldEN1cnJlbnRSb29tKCk7XHJcbiAgICAgICAgaWYgKHByZXZpb3VzUm9vbSkge1xyXG4gICAgICAgICAgICBwcmV2aW91c1Jvb20uZW5kKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBHYW1lQ29udGV4dC5zZXRDdXJyZW50Um9vbShyb29tKTtcclxuXHJcbiAgICAgICAgaWYgKHJvb20uaGFzU3RhcnQpIHtcclxuICAgICAgICAgICAgcm9vbS5jYWxsU3RhcnQoc3RhcnRBcmdzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBWYXN0Z2FtZSB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBnYW1lID0gbmV3IFZhc3RnYW1lSFRNTDJEKCk7XHJcblxyXG4gICAgc3RhdGljIHN0YXJ0KGNhbnZhc0VsZW1lbnRJRDogc3RyaW5nLCBpbml0aWFsUm9vbUlEOiBzdHJpbmcsIG9wdGlvbnM/OiBHYW1lT3B0aW9ucyk6IFZhc3RnYW1lSFRNTDJEIHtcclxuICAgICAgICB0aGlzLmdhbWUuaW5pdChjYW52YXNFbGVtZW50SUQsIG9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMuZ2FtZS5zdGFydChpbml0aWFsUm9vbUlEKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2FtZTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2V0Um9vbShyb29tSUQ6IHN0cmluZywgc3RhcnRBcmdzPzogYW55KSB7XHJcbiAgICAgICAgdGhpcy5nYW1lLnNldFJvb20ocm9vbUlELCBzdGFydEFyZ3MpO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvdmFzdGdhbWUudHMiLCJpbXBvcnQgeyBBY3RvciB9IGZyb20gJy4vYWN0b3InO1xyXG5pbXBvcnQgeyBHYW1lQ2FudmFzSFRNTDJEIH0gZnJvbSAnLi9jYW52YXMnO1xyXG5pbXBvcnQgeyBEZWZlcnJlZEV2ZW50IH0gZnJvbSAnLi9ldmVudHMnO1xyXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJy4vaW5wdXQnO1xyXG5pbXBvcnQgeyBSb29tIH0gZnJvbSAnLi9yb29tJztcclxuaW1wb3J0IHsgU3ByaXRlIH0gZnJvbSAnLi9zcHJpdGUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWVDb250ZXh0IHtcclxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogR2FtZUNvbnRleHQgPSBuZXcgR2FtZUNvbnRleHQoKTtcclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGFjdG9yczogeyBbaW5kZXg6IHN0cmluZ106IEFjdG9yIH0gPSB7fTtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgZXZlbnRzOiB7IFtpbmRleDogbnVtYmVyXTogRGVmZXJyZWRFdmVudCB9ID0ge307XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHJvb21zOiB7IFtpbmRleDogc3RyaW5nXTogUm9vbSB9ID0ge307XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHNwcml0ZXM6IHsgW2luZGV4OiBzdHJpbmddOiBTcHJpdGV9ID0ge307XHJcblxyXG4gICAgcHJpdmF0ZSBjYW52YXM6IEdhbWVDYW52YXNIVE1MMkQ7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRSb29tOiBSb29tO1xyXG5cclxuICAgIHN0YXRpYyBzZXRDYW52YXMoY2FudmFzOiBHYW1lQ2FudmFzSFRNTDJEKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5faW5zdGFuY2UuY2FudmFzID0gY2FudmFzO1xyXG5cclxuICAgICAgICBJbnB1dC5yZWdpc3RlckNsaWNrSGFuZGxlcihldiA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9pbnN0YW5jZS5jdXJyZW50Um9vbSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UuY3VycmVudFJvb20uaGFuZGxlQ2xpY2soZXYpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBhY3RvcnNcclxuICAgIHN0YXRpYyBkZWZpbmVBY3RvcihuYW1lOiBzdHJpbmcsIGFjdG9yOiBBY3Rvcik6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLl9pbnN0YW5jZS5hY3RvcnNbbmFtZV0pIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBY3RvciAke25hbWV9IGhhcyBhbHJlYWR5IGJlZW4gZGVmaW5lZC5gKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2luc3RhbmNlLmFjdG9yc1tuYW1lXSA9IGFjdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRBY3RvcihuYW1lOiBzdHJpbmcpOiBBY3RvciB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pbnN0YW5jZS5hY3RvcnNbbmFtZV0pIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBY3RvciAke25hbWV9IGhhcyBub3QgYmVlbiBkZWZpbmVkLmApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlLmFjdG9yc1tuYW1lXTtcclxuICAgIH1cclxuXHJcbiAgICAvLyByb29tc1xyXG4gICAgc3RhdGljIGRlZmluZVJvb20obmFtZTogc3RyaW5nLCByb29tOiBSb29tKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2luc3RhbmNlLnJvb21zW25hbWVdKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgUm9vbSAke25hbWV9IGhhcyBhbHJlYWR5IGJlZW4gZGVmaW5lZC5gKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2luc3RhbmNlLnJvb21zW25hbWVdID0gcm9vbTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0Um9vbShuYW1lOiBzdHJpbmcpOiBSb29tIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2luc3RhbmNlLnJvb21zW25hbWVdKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgUm9vbSAke25hbWV9IGhhcyBub3QgYmVlbiBkZWZpbmVkLmApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlLnJvb21zW25hbWVdO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRDdXJyZW50Um9vbSgpOiBSb29tIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2UuY3VycmVudFJvb207XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNldEN1cnJlbnRSb29tKHJvb206IFJvb20pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9pbnN0YW5jZS5jdXJyZW50Um9vbSA9IHJvb207XHJcbiAgICB9XHJcblxyXG4gICAgLy8gc3ByaXRlc1xyXG4gICAgc3RhdGljIGRlZmluZVNwcml0ZShuYW1lOiBzdHJpbmcsIHNwcml0ZTogU3ByaXRlKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2luc3RhbmNlLnNwcml0ZXNbbmFtZV0pIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBTcHJpdGUgJHtuYW1lfSBoYXMgYWxyZWFkeSBiZWVuIGRlZmluZWQuYCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9pbnN0YW5jZS5zcHJpdGVzW25hbWVdID0gc3ByaXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRTcHJpdGUobmFtZTogc3RyaW5nKTogU3ByaXRlIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2luc3RhbmNlLnNwcml0ZXNbbmFtZV0pIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yIChgU3ByaXRlICR7bmFtZX0gaGFzIG5vdCBiZWVuIGRlZmluZWQuYCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2Uuc3ByaXRlc1tuYW1lXTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBldmVudHNcclxuICAgIHN0YXRpYyByZWdpc3RlckV2ZW50KGV2ZW50OiBEZWZlcnJlZEV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5faW5zdGFuY2UuZXZlbnRzW3RoaXMuX2luc3RhbmNlLm5leHRFdmVudElEKCldID0gZXZlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNoZWNrQW5kRmlyZUV2ZW50cygpOiB2b2lkIHtcclxuICAgICAgICBcclxuICAgICAgICBmb3IgKGxldCBldmVudElEIGluIHRoaXMuX2luc3RhbmNlLmV2ZW50cykge1xyXG4gICAgICAgICAgICBsZXQgZXZlbnQgPSB0aGlzLl9pbnN0YW5jZS5ldmVudHNbZXZlbnRJRF07XHJcblxyXG4gICAgICAgICAgICBpZiAoZXZlbnQuY29uZGl0aW9uQ2FsbGJhY2soKSkge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQuYWN0aW9uQ2FsbGJhY2soKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQuZmlyZU9uY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5faW5zdGFuY2UuZXZlbnRzW2V2ZW50SURdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbmV4dEV2ZW50SUQgPSAoKCkgPT4ge1xyXG4gICAgICAgIGxldCBjdXJyZW50SUQgPSAwO1xyXG4gICAgICAgIHJldHVybiAoKCkgPT4gKytjdXJyZW50SUQpO1xyXG4gICAgfSkoKTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL2dhbWUtY29udGV4dC50cyIsImV4cG9ydCBlbnVtIFNldHRpbmdzIHtcclxuICAgIENhbnZhc1dpZHRoID0gJ0NhbnZhc1dpZHRoJyxcclxuICAgIENhbnZhc0hlaWdodCA9ICdDYW52YXNIZWlnaHQnLFxyXG4gICAgU3RhY2ttb1Byb2dyZXNzID0gJ1N0YWNrbW9Qcm9ncmVzcycsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEFjdG9ySUQge1xyXG4gICAgRXhpdEJ1dHRvbiA9ICdCYWNrQnV0dG9uJyxcclxuICAgIEJsb2NrID0gJ0Jsb2NrJyxcclxuICAgIExldmVsSWNvbiA9ICdMZXZlbEljb24nLFxyXG4gICAgUGxheWVyID0gJ1BsYXllcicsXHJcbiAgICBTY3JvbGxBcnJvdyA9ICdTY3JvbGxBcnJvdycsXHJcbiAgICBUaXRsZSA9ICdUaXRsZScsXHJcbiAgICBXYWxsID0gJ1dhbGwnLFxyXG4gICAgV2luID0gJ1dpbicsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFJvb21JRCB7XHJcbiAgICBUaXRsZSA9ICdUaXRsZScsXHJcbiAgICBMZXZlbFNlbGVjdCA9ICdMZXZlbFNlbGVjdCcsXHJcbiAgICBMZXZlbCA9ICdMZXZlbCcsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFNwcml0ZUlEIHtcclxuICAgIEFycm93cyA9ICdBcnJvd3MnLFxyXG4gICAgRGlnaXRzID0gJ0RpZ2l0cycsXHJcbiAgICBEb29yU2hlZXQgPSAnRG9vclNoZWV0JyxcclxuICAgIEJveCA9ICdCb3gnLFxyXG4gICAgTGV2ZWxJY29uID0gJ0xldmVsSWNvbicsXHJcbiAgICBTdGFja21vU2hlZXQgPSAnU3RhY2ttb1NoZWV0JyxcclxuICAgIFRleHRTaGVldCA9ICdUZXh0U2hlZXQnLFxyXG4gICAgVGl0bGUgPSAnVGl0bGUnLFxyXG4gICAgV2FsbCA9ICdXYWxsJyxcclxuICAgIFggPSAnWCcsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEdhbWVBY3Rpb24ge1xyXG4gICAgRHJvcCA9ICdEcm9wJyxcclxuICAgIEZhbGwgPSAnRmFsbCcsXHJcbiAgICBKdW1wID0gJ0p1bXAnLFxyXG4gICAgTGlmdCA9ICdMaWZ0JyxcclxuICAgIE1vdmUgPSAnTW92ZScsXHJcbiAgICBDaGVja1N0b3BNb3ZpbmcgPSAnQ2hlY2tTdG9wTW92aW5nJyxcclxuICAgIFN0b3AgPSAnU3RvcCcsXHJcbiAgICBXaW4gPSAnV2luJyxcclxufVxyXG5cclxuLy8gZnJvbSB0b3Agcm93IG9mIE5FUyBjb2xvciBwYWxldHRlIChUT0RPOiByZXN0IG9mIHRoZW0pXHJcbmV4cG9ydCBlbnVtIExldmVsQmdDb2xvciB7XHJcbiAgICBEYXJrVGVhbCA9ICcjMDAxODIwJyxcclxuICAgIFRlYWwgPSAnIzAwNjA3MCcsXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZ2FtZS91dGlsL2VudW0udHMiLCJleHBvcnQgZW51bSBBY3RvclN0YXRlIHtcclxuICAgIEFjdGl2ZSA9IDEsXHJcbiAgICBEZXN0cm95ZWQgPSAyLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBEaXJlY3Rpb24ge1xyXG4gICAgUmlnaHQgPSAwLFxyXG4gICAgRG93biA9IDkwLFxyXG4gICAgTGVmdCA9IDE4MCxcclxuICAgIFVwID0gMjcwLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBHYW1lU3RhdGUge1xyXG4gICAgUnVubmluZyA9IDEsXHJcbiAgICBQYXVzZWQgPSAyLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBLZXkge1xyXG4gICAgQW55ID0gLTEsXHJcbiAgICBTcGFjZSA9IDMyLFxyXG4gICAgTGVmdCA9IDM3LFxyXG4gICAgVXAgPSAzOCxcclxuICAgIFJpZ2h0ID0gMzksXHJcbiAgICBEb3duID0gNDAsXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9lbnVtLnRzIiwiZXhwb3J0IGNvbnN0IEJsYWNrID0gJyMwMDAnO1xyXG5leHBvcnQgY29uc3QgQ2FudmFzTWF4V2lkdGggPSAxMDI0O1xyXG5leHBvcnQgY29uc3QgQ2FudmFzTWF4SGVpZ2h0ID03Njg7XHJcbmV4cG9ydCBjb25zdCBHcmlkQ2VsbFNpemUgPSA2NDtcclxuZXhwb3J0IGNvbnN0IEJsb2NrRmFsbFNwZWVkID0gODtcclxuZXhwb3J0IGNvbnN0IFBsYXllck1vdmVTcGVlZCA9IDQ7XHJcbmV4cG9ydCBjb25zdCBQbGF5ZXJKdW1wU3BlZWQgPSA4O1xyXG5leHBvcnQgY29uc3QgUGxheWVyRmFsbFNwZWVkID0gODtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZ2FtZS91dGlsL2NvbnN0YW50cy50cyIsImltcG9ydCB7IEtleSB9IGZyb20gJy4vZW51bSc7XHJcblxyXG5leHBvcnQgY2xhc3MgSW5wdXQge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgY2xpY2tIYW5kbGVyczogQ29uY3JldGVFdmVudEhhbmRsZXI8UG9pbnRlcklucHV0RXZlbnQ+W10gPSBbXTtcclxuICAgIHByaXZhdGUgc3RhdGljIGtleWJvYXJkSGFuZGxlcnM6IHsgW2NvZGU6IG51bWJlcl06IENvbmNyZXRlRXZlbnRIYW5kbGVyPEtleWJvYXJkRXZlbnQ+IH0gPSB7fTtcclxuICAgIHByaXZhdGUgc3RhdGljIGtleWJvYXJkQWN0aXZpdHk6IHsgW2NvZGU6IG51bWJlcl06IGJvb2xlYW4gfSA9IHt9O1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9hY3RpdmVQb2ludGVyRXZlbnQ6IFBvaW50ZXJJbnB1dEV2ZW50ID0gbnVsbDtcclxuICAgIHN0YXRpYyBnZXQgY2xpY2tBY3RpdmUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuICEhSW5wdXQuX2FjdGl2ZVBvaW50ZXJFdmVudDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgaW5pdCgpIHtcclxuXHJcbiAgICAgICAgbGV0IHJhaXNlUG9pbnRlckV2ZW50ID0gKGV2OiBQb2ludGVySW5wdXRFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoSW5wdXQuX2FjdGl2ZVBvaW50ZXJFdmVudCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBJbnB1dC5fYWN0aXZlUG9pbnRlckV2ZW50ID0gZXY7XHJcblxyXG4gICAgICAgICAgICBpZiAoSW5wdXQuY2xpY2tIYW5kbGVycy5sZW5ndGgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBJbnB1dC5jbGlja0hhbmRsZXJzLmZvckVhY2goKGhhbmRsZXI6IENvbmNyZXRlRXZlbnRIYW5kbGVyPFBvaW50ZXJJbnB1dEV2ZW50PikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChoYW5kbGVyLmlzQWxpdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlci5jYWxsYmFjayhldik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBsZXQgZW5kUG9pbnRlckV2ZW50ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBJbnB1dC5fYWN0aXZlUG9pbnRlckV2ZW50ID0gbnVsbDtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyByZWdpc3RlciBtb3VzZS90b3VjaCBpbnB1dCBcclxuICAgICAgICBkb2N1bWVudC5ib2R5Lm9ubW91c2Vkb3duID0gZnVuY3Rpb24odGhpczogYW55LCBldjogTW91c2VFdmVudCkge1xyXG4gICAgICAgICAgICByYWlzZVBvaW50ZXJFdmVudChQb2ludGVySW5wdXRFdmVudC5mcm9tTW91c2VFdmVudChldikpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5vbnRvdWNoc3RhcnQgPSBmdW5jdGlvbiAoZXY6IFRvdWNoRXZlbnQpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5vbm1vdXNlZG93biA9IG51bGw7XHJcbiAgICAgICAgICAgIHJhaXNlUG9pbnRlckV2ZW50KFBvaW50ZXJJbnB1dEV2ZW50LmZyb21Ub3VjaEV2ZW50KGV2KSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5Lm9ubW91c2V1cCA9IGVuZFBvaW50ZXJFdmVudDtcclxuICAgICAgICBkb2N1bWVudC5ib2R5Lm9udG91Y2hlbmQgPSBlbmRQb2ludGVyRXZlbnQ7XHJcblxyXG4gICAgICAgIC8vIHJlZ2lzdGVyIGtleWJvYXJkIGlucHV0XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5vbmtleWRvd24gPSAoZXY6IEtleWJvYXJkRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgbGV0IGtleUNvZGUgPSBldi5rZXlDb2RlIHx8IGV2LmNvZGVcclxuICAgICAgICAgICAgbGV0IGhhbmRsZXI6IENvbmNyZXRlRXZlbnRIYW5kbGVyPEtleWJvYXJkRXZlbnQ+ID0gdGhpcy5rZXlib2FyZEhhbmRsZXJzW2tleUNvZGVdO1xyXG5cclxuICAgICAgICAgICAgaWYgKGhhbmRsZXIgJiYgaGFuZGxlci5pc0FsaXZlICYmICF0aGlzLmtleWJvYXJkQWN0aXZpdHlba2V5Q29kZV0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMua2V5Ym9hcmRBY3Rpdml0eVtrZXlDb2RlXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVyLmNhbGxiYWNrKGV2KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IGdsb2JhbEhhbmRsZXIgPSB0aGlzLmtleWJvYXJkSGFuZGxlcnNbS2V5LkFueV07XHJcbiAgICAgICAgICAgIGlmIChnbG9iYWxIYW5kbGVyICYmIGdsb2JhbEhhbmRsZXIuaXNBbGl2ZSAmJiAhdGhpcy5rZXlib2FyZEFjdGl2aXR5W0tleS5BbnldKSAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5rZXlib2FyZEFjdGl2aXR5W0tleS5BbnldID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGdsb2JhbEhhbmRsZXIuY2FsbGJhY2soZXYpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5Lm9ua2V5dXAgPSAoZXY6IEtleWJvYXJkRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgbGV0IGtleUNvZGUgPSBldi5rZXlDb2RlIHx8IGV2LmNvZGVcclxuICAgICAgICAgICAgbGV0IGhhbmRsZXI6IENvbmNyZXRlRXZlbnRIYW5kbGVyPEtleWJvYXJkRXZlbnQ+ID0gdGhpcy5rZXlib2FyZEhhbmRsZXJzW2tleUNvZGVdO1xyXG4gICAgICAgICAgICB0aGlzLmtleWJvYXJkQWN0aXZpdHlbS2V5LkFueV0gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIGlmIChoYW5kbGVyICYmIGhhbmRsZXIuaXNBbGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5rZXlib2FyZEFjdGl2aXR5W2tleUNvZGVdID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyByZWdpc3RlckNsaWNrSGFuZGxlcihjYWxsYmFjazogKGV2ZW50OiBQb2ludGVySW5wdXRFdmVudCkgPT4gdm9pZCk6IENvbmNyZXRlRXZlbnRIYW5kbGVyPFBvaW50ZXJJbnB1dEV2ZW50PiB7XHJcbiAgICAgICAgbGV0IGNsaWNrSGFuZGxlciA9IG5ldyBDb25jcmV0ZUV2ZW50SGFuZGxlcjxQb2ludGVySW5wdXRFdmVudD4oY2FsbGJhY2spOztcclxuICAgICAgICBJbnB1dC5jbGlja0hhbmRsZXJzLnB1c2goY2xpY2tIYW5kbGVyKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNsaWNrSGFuZGxlcjtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcmVnaXN0ZXJLZXlIYW5kbGVyKGtleTogS2V5LCBjYWxsYmFjazogKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiB2b2lkKTogQ29uY3JldGVFdmVudEhhbmRsZXI8S2V5Ym9hcmRFdmVudD4ge1xyXG4gICAgICAgIGxldCBrZXlIYW5kbGVyID0gbmV3IENvbmNyZXRlRXZlbnRIYW5kbGVyPEtleWJvYXJkRXZlbnQ+KGNhbGxiYWNrKTtcclxuICAgICAgICBJbnB1dC5rZXlib2FyZEhhbmRsZXJzW2tleV0gPSBrZXlIYW5kbGVyXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGtleUhhbmRsZXI7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGtleURvd24oa2V5OiBLZXkpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gISF0aGlzLmtleWJvYXJkQWN0aXZpdHlba2V5XTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBFdmVudEhhbmRsZXIge1xyXG4gICAgY2FsbGJhY2s6IChldmVudDogYW55KSA9PiB2b2lkO1xyXG4gICAgZGlzcG9zZTogKCkgPT4gdm9pZDtcclxufVxyXG5cclxuY2xhc3MgQ29uY3JldGVFdmVudEhhbmRsZXI8VD4gaW1wbGVtZW50cyBFdmVudEhhbmRsZXIge1xyXG4gICAgaXNBbGl2ZTogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIGNhbGxiYWNrOiAoZXZlbnQ6IFQpID0+IHZvaWQpIHtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZGlzcG9zZSgpIHtcclxuICAgICAgICB0aGlzLmlzQWxpdmUgPSBmYWxzZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBvaW50ZXJJbnB1dEV2ZW50IHtcclxuICAgIHg6IG51bWJlcjtcclxuICAgIHk6IG51bWJlcjtcclxuXHJcbiAgICBzdGF0aWMgZnJvbU1vdXNlRXZlbnQoZXY6IE1vdXNlRXZlbnQpOiBQb2ludGVySW5wdXRFdmVudCB7XHJcbiAgICAgICAgcmV0dXJuIHsgeDogZXYub2Zmc2V0WCwgeTogZXYub2Zmc2V0WSB9O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBmcm9tVG91Y2hFdmVudChldjogVG91Y2hFdmVudCk6IFBvaW50ZXJJbnB1dEV2ZW50IHtcclxuICAgICAgICBsZXQgdG91Y2ggPSBldi50b3VjaGVzWzBdO1xyXG4gICAgICAgIHJldHVybiB7IHg6IHRvdWNoID8gdG91Y2guY2xpZW50WCA6IDAsIHk6IHRvdWNoID8gdG91Y2guY2xpZW50WSA6IDAgfTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvaW5wdXQudHMiLCJpbXBvcnQgeyBBY3RvciB9IGZyb20gJy4vYWN0b3InO1xyXG5pbXBvcnQgeyBHYW1lQ29udGV4dCB9IGZyb20gJy4vZ2FtZS1jb250ZXh0JztcclxuXHJcbmV4cG9ydCBlbnVtIFNwcml0ZVRyYW5zZm9ybWF0aW9uIHtcclxuICAgIE9wYWNpdHkgPSAwLFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU3ByaXRlIHtcclxuICAgIHByaXZhdGUgdHJhbnNmb3JtYXRvbnM6IHsgW2luZGV4OiBudW1iZXJdOiBudW1iZXIgfSA9IHt9O1xyXG5cclxuICAgIHN0YXRpYyBkZWZpbmUobmFtZTogc3RyaW5nLCBvcHRpb25zOiBTcHJpdGVPcHRpb25zKTogU3ByaXRlIHtcclxuICAgICAgICBsZXQgc3ByaXRlID0gbmV3IFNwcml0ZShvcHRpb25zKTtcclxuICAgICAgICBHYW1lQ29udGV4dC5kZWZpbmVTcHJpdGUobmFtZSwgc3ByaXRlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHNwcml0ZTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0KG5hbWU6IHN0cmluZyk6IFNwcml0ZSB7XHJcbiAgICAgICAgcmV0dXJuIEdhbWVDb250ZXh0LmdldFNwcml0ZShuYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICByZWFkb25seSBpbWFnZTogSFRNTEltYWdlRWxlbWVudDtcclxuICAgIHJlYWRvbmx5IGhlaWdodDogbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgd2lkdGg6IG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGZyYW1lQm9yZGVyOiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3Iob3B0aW9uczogU3ByaXRlT3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMuaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICB0aGlzLmltYWdlLnNyYyA9IG9wdGlvbnMuaW1hZ2VTb3VyY2U7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBvcHRpb25zLmhlaWdodDtcclxuICAgICAgICB0aGlzLndpZHRoID0gb3B0aW9ucy53aWR0aDtcclxuICAgICAgICB0aGlzLmZyYW1lQm9yZGVyID0gb3B0aW9ucy5mcmFtZUJvcmRlcjtcclxuXHJcbiAgICAgICAgdGhpcy5zZXREZWZhdWx0VHJhbnNmb3JtcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0RGVmYXVsdFRyYW5zZm9ybXMoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy50cmFuc2Zvcm1hdG9uc1tTcHJpdGVUcmFuc2Zvcm1hdGlvbi5PcGFjaXR5XSA9IDE7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VHJhbnNmb3JtKHRyYW5zZm9ybWF0aW9uOiBTcHJpdGVUcmFuc2Zvcm1hdGlvbik6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtYXRvbnNbdHJhbnNmb3JtYXRpb25dO1xyXG4gICAgfVxyXG5cclxuICAgIHRyYW5zZm9ybSh0cmFuc2Zvcm1hdGlvbjogU3ByaXRlVHJhbnNmb3JtYXRpb24sIGRlbHRhOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnRyYW5zZm9ybWF0b25zW3RyYW5zZm9ybWF0aW9uXSArPSBkZWx0YTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRUcmFuc2Zvcm0odHJhbnNmb3JtYXRpb246IFNwcml0ZVRyYW5zZm9ybWF0aW9uLCB2YWx1ZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy50cmFuc2Zvcm1hdG9uc1t0cmFuc2Zvcm1hdGlvbl0gPSB2YWx1ZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTcHJpdGVPcHRpb25zIHtcclxuICAgIGltYWdlU291cmNlOiBzdHJpbmc7XHJcbiAgICBoZWlnaHQ6IG51bWJlcjtcclxuICAgIHdpZHRoOiBudW1iZXI7XHJcbiAgICBmcmFtZUJvcmRlcj86IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNwcml0ZUFuaW1hdGlvbiB7XHJcbiAgICBwcml2YXRlIGN1cnJlbnQ6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIHRpbWVyOiBhbnk7XHJcblxyXG4gICAgZGVwdGg6IG51bWJlciA9IDA7XHJcblxyXG4gICAgY29uc3RydWN0b3IocmVhZG9ubHkgc3ByaXRlOiBTcHJpdGUpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnQgPSAwO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXQgZnJhbWUoKTogbnVtYmVyIHsgXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc291cmNlKCk6IFNwcml0ZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3ByaXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyLCBkZWxheT86IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudCA9IHN0YXJ0O1xyXG5cclxuICAgICAgICB0aGlzLnRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLmN1cnJlbnQgPT09IGVuZCA/IHN0YXJ0IDogdGhpcy5jdXJyZW50ICsgMTtcclxuICAgICAgICB9LCBkZWxheSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RvcCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy50aW1lcikge1xyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXQoZnJhbWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudCA9IGZyYW1lO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvc3ByaXRlLnRzIiwiZXhwb3J0IGNsYXNzIFJlZ2lzdHJ5IHtcclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IHZhbHVlczogeyBbaWQ6IHN0cmluZ106IGFueSB9ID0ge307XHJcblxyXG4gICAgc3RhdGljIGdldChpZDogc3RyaW5nKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXNbaWRdO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBsb2FkKGlkOiBzdHJpbmcpOiBhbnkge1xyXG4gICAgICAgIHRoaXMudmFsdWVzW2lkXSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGlkKTtcclxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZXNbaWRdO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzZXQoaWQ6IHN0cmluZywgdmFsOiBhbnksIHBlcnNpc3QgPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudmFsdWVzW2lkXSA9IHZhbDtcclxuICAgICAgICBpZiAocGVyc2lzdCkge1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShpZCwgdmFsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZ2FtZS91dGlsL3JlZ2lzdHJ5LnRzIiwiaW1wb3J0IHsgQWN0b3IsIEFjdG9ySW5zdGFuY2UsIENvbGxpc2lvbkNhbGxiYWNrIH0gZnJvbSAnLi9hY3Rvcic7XHJcbmltcG9ydCB7IEdhbWVDYW52YXNDb250ZXh0LCBSb29tRHJhd0V2ZW50IH0gZnJvbSAnLi9jYW52YXMnO1xyXG5pbXBvcnQgeyBLZXkgfSBmcm9tICcuL2VudW0nO1xyXG5pbXBvcnQgeyBFdmVudEhhbmRsZXIsIElucHV0LCBQb2ludGVySW5wdXRFdmVudCB9IGZyb20gJy4vaW5wdXQnO1xyXG5pbXBvcnQgeyBHYW1lQ29udGV4dCB9IGZyb20gJy4vZ2FtZS1jb250ZXh0JztcclxuaW1wb3J0IHsgR3JpZCB9IGZyb20gJy4vZ3JpZCc7XHJcbmltcG9ydCB7IEdhbWVMaWZlY3ljbGVDYWxsYmFjayB9IGZyb20gJy4vdmFzdGdhbWUnO1xyXG5pbXBvcnQgeyBWaWV3IH0gZnJvbSAnLi92aWV3JztcclxuXHJcbmV4cG9ydCBjbGFzcyBCYWNrZ3JvdW5kIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICByZWFkb25seSBjb2xvcjogc3RyaW5nLFxyXG4gICAgICAgIHJlYWRvbmx5IHBhZ2VDb2xvcjogc3RyaW5nID0gJyMwMDAnLCBcclxuICAgICAgICByZWFkb25seSB3aWR0aDogbnVtYmVyLCBcclxuICAgICAgICByZWFkb25seSBoZWlnaHQ6IG51bWJlcikge1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUm9vbSB7XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgbmV4dEFjdG9ySW5zdGFuY2VJRCA9ICgoKSA9PiB7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRJRCA9IDA7XHJcbiAgICAgICAgcmV0dXJuICgoKSA9PiArK2N1cnJlbnRJRCk7XHJcbiAgICB9KSgpO1xyXG5cclxuICAgIHN0YXRpYyBkZWZpbmUobmFtZTogc3RyaW5nKTogUm9vbSB7XHJcbiAgICAgICAgbGV0IHJvb20gPSBuZXcgUm9vbSgpO1xyXG4gICAgICAgIEdhbWVDb250ZXh0LmRlZmluZVJvb20obmFtZSwgcm9vbSk7XHJcbiAgICAgICAgcmV0dXJuIHJvb207XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldChuYW1lOiBzdHJpbmcpOiBSb29tIHtcclxuICAgICAgICByZXR1cm4gR2FtZUNvbnRleHQuZ2V0Um9vbShuYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IGN1cnJlbnQoKTogUm9vbSB7XHJcbiAgICAgICAgcmV0dXJuIEdhbWVDb250ZXh0LmdldEN1cnJlbnRSb29tKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhY3Rvckluc3RhbmNlTWFwOiB7IFtpbmRleDogbnVtYmVyXTogQWN0b3JJbnN0YW5jZSB9ID0ge307XHJcblxyXG4gICAgcHJpdmF0ZSBldmVudEhhbmRsZXJzOiBFdmVudEhhbmRsZXJbXSA9IFtdO1xyXG4gICAgLy8gVE9ETzogY29uc2lkZXIgbW92aW5nIEdyaWQgdG8gZXh0ZW5kZWQgY2xhc3Mgb3IgZGVjb3JhdG9yXHJcbiAgICBwcml2YXRlIGdyaWQ6IEdyaWQ7XHJcbiAgICB2aWV3OiBWaWV3O1xyXG5cclxuICAgIHByaXZhdGUgb25TdGFydENhbGxiYWNrOiBHYW1lTGlmZWN5Y2xlQ2FsbGJhY2s7XHJcbiAgICBwcml2YXRlIG9uRHJhd0NhbGxiYWNrOiBSb29tRHJhd0V2ZW50O1xyXG4gICAgXHJcbiAgICBiYWNrZ3JvdW5kOiBCYWNrZ3JvdW5kO1xyXG5cclxuICAgIGdldCBoYXNTdGFydCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gISF0aGlzLm9uU3RhcnRDYWxsYmFjaztcclxuICAgIH1cclxuXHJcbiAgICBvblN0YXJ0KGNhbGxiYWNrOiBHYW1lTGlmZWN5Y2xlQ2FsbGJhY2spOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9uU3RhcnRDYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbGxTdGFydChhcmdzPzogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vblN0YXJ0Q2FsbGJhY2soYXJncyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGhhc0RyYXcoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuICEhdGhpcy5vbkRyYXdDYWxsYmFjaztcclxuICAgIH1cclxuXHJcbiAgICBvbkRyYXcoY2FsbGJhY2s6IFJvb21EcmF3RXZlbnQpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9uRHJhd0NhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgY2FsbERyYXcoZ2FtZUNhbnZhc0NvbnRleHQ6IEdhbWVDYW52YXNDb250ZXh0KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vbkRyYXdDYWxsYmFjayhnYW1lQ2FudmFzQ29udGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljayhjYWxsYmFjazogKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB2b2lkKSB7XHJcbiAgICAgICAgbGV0IGNsaWNrSGFuZGxlciA9IElucHV0LnJlZ2lzdGVyQ2xpY2tIYW5kbGVyKGNhbGxiYWNrKTtcclxuICAgICAgICB0aGlzLmV2ZW50SGFuZGxlcnMucHVzaChjbGlja0hhbmRsZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uS2V5KGtleTogS2V5LCBjYWxsYmFjazogKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiB2b2lkKSB7XHJcbiAgICAgICAgbGV0IGtleUhhbmRsZXIgPSBJbnB1dC5yZWdpc3RlcktleUhhbmRsZXIoa2V5LCBjYWxsYmFjayk7XHJcbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXJzLnB1c2goa2V5SGFuZGxlcik7XHJcbiAgICB9XHJcblxyXG4gICAgZGVmaW5lR3JpZCh0aWxlU2l6ZTogbnVtYmVyKTogR3JpZCB7XHJcbiAgICAgICAgdGhpcy5ncmlkID0gbmV3IEdyaWQodGlsZVNpemUsIHRoaXMpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5ncmlkO1xyXG4gICAgfVxyXG5cclxuICAgIGRlZmluZVZpZXcoeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKTogVmlldyB7XHJcbiAgICAgICAgdGhpcy52aWV3ID0gbmV3IFZpZXcoeCwgeSwgd2lkdGgsIGhlaWdodCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnZpZXc7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QmFja2dyb3VuZChjb2xvcjogc3RyaW5nLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgcGFnZUNvbG9yPzogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kID0gbmV3IEJhY2tncm91bmQoY29sb3IsIHBhZ2VDb2xvciwgd2lkdGgsIGhlaWdodCk7XHJcblxyXG4gICAgICAgIGlmIChwYWdlQ29sb3IpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBwYWdlQ29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0ZXAoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIHRoaXMuZ2V0SW5zdGFuY2VzKCkuZm9yRWFjaChpbnN0YW5jZSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBwYXJlbnQgPSBpbnN0YW5jZS5wYXJlbnQ7XHJcblxyXG4gICAgICAgICAgICBpZiAoaW5zdGFuY2UuaXNBY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgIC8vIGFwcGx5IGFjdG9yIGluc3RhbmNlIG1vdmVtZW50XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5zdGFuY2Uuc3BlZWQgIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcGx5SW5zdGFuY2VNb3ZlbWVudChpbnN0YW5jZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja0NvbGxpc2lvbnMoaW5zdGFuY2UpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGNhbGwgYWN0b3IgJ3N0ZXAnIGNhbGxiYWNrc1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudC5oYXNTdGVwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50LmNhbGxTdGVwKGluc3RhbmNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBpbnRlcm5hbCAncG9zdC1zdGVwJ1xyXG4gICAgICAgICAgICAgICAgaW5zdGFuY2UuZG9Qb3N0U3RlcCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZXN0cm95QWN0b3JJbnN0YW5jZShpbnN0YW5jZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMudmlldykge1xyXG4gICAgICAgICAgICB0aGlzLnZpZXcudXBkYXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXBwbHlJbnN0YW5jZU1vdmVtZW50KGluc3RhbmNlOiBBY3Rvckluc3RhbmNlKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IG9mZnNldFggPSBNYXRoLnJvdW5kKGluc3RhbmNlLmdldE1vdmVtZW50T2Zmc2V0WCgpKTtcclxuICAgICAgICBsZXQgb2Zmc2V0WSA9IE1hdGgucm91bmQoaW5zdGFuY2UuZ2V0TW92ZW1lbnRPZmZzZXRZKCkpO1xyXG5cclxuICAgICAgICBpZiAob2Zmc2V0WCAhPT0gMCB8fCBvZmZzZXRZICE9PSAwKSB7XHJcbiAgICAgICAgICAgIGluc3RhbmNlLnNldFBvc2l0aW9uUmVsYXRpdmUob2Zmc2V0WCwgb2Zmc2V0WSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2hlY2tDb2xsaXNpb25zKHNlbGZJbnN0YW5jZTogQWN0b3JJbnN0YW5jZSk6IHZvaWQge1xyXG4gICAgICAgIGxldCBwYXJlbnQgPSBzZWxmSW5zdGFuY2UucGFyZW50OztcclxuICAgICAgICBcclxuICAgICAgICBmb3IgKGxldCBhY3Rvck5hbWUgaW4gcGFyZW50LmNvbGxpc2lvbkhhbmRsZXJzKSB7XHJcbiAgICAgICAgICAgIGxldCBjYWxsYmFjayA9IHBhcmVudC5jb2xsaXNpb25IYW5kbGVyc1thY3Rvck5hbWVdO1xyXG4gICAgICAgICAgICBsZXQgb3RoZXJBY3RvciA9IEFjdG9yLmdldChhY3Rvck5hbWUpO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgb3RoZXJJRCBpbiB0aGlzLmFjdG9ySW5zdGFuY2VNYXApIHtcclxuICAgICAgICAgICAgICAgIGxldCBvdGhlciA9IHRoaXMuYWN0b3JJbnN0YW5jZU1hcFtvdGhlcklEXTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAob3RoZXIucGFyZW50ID09PSBvdGhlckFjdG9yKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmSW5zdGFuY2UgIT09IG90aGVyICYmIHNlbGZJbnN0YW5jZS5jb2xsaWRlc1dpdGgob3RoZXIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHNlbGZJbnN0YW5jZSwgb3RoZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUFjdG9yKHBhcmVudEFjdG9yOiBBY3RvciwgeD86IG51bWJlciwgeT86IG51bWJlcik6IEFjdG9ySW5zdGFuY2Uge1xyXG4gICAgICAgIGxldCBuZXdBY3Rvckluc3RhbmNlSUQgPSBSb29tLm5leHRBY3Rvckluc3RhbmNlSUQoKTtcclxuICAgICAgICBsZXQgbmV3SW5zdGFuY2UgPSBuZXcgQWN0b3JJbnN0YW5jZShwYXJlbnRBY3RvciwgbmV3QWN0b3JJbnN0YW5jZUlELCB4LCB5KTtcclxuXHJcbiAgICAgICAgdGhpcy5hY3Rvckluc3RhbmNlTWFwW25ld0FjdG9ySW5zdGFuY2VJRF0gPSBuZXdJbnN0YW5jZTtcclxuXHJcbiAgICAgICAgaWYgKHBhcmVudEFjdG9yLmhhc0NyZWF0ZSkge1xyXG4gICAgICAgICAgICBwYXJlbnRBY3Rvci5jYWxsQ3JlYXRlKG5ld0luc3RhbmNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBuZXdJbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGRlc3Ryb3lBY3Rvckluc3RhbmNlKGluc3RhbmNlOiBBY3Rvckluc3RhbmNlKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHBhcmVudCA9IGluc3RhbmNlLnBhcmVudDtcclxuXHJcbiAgICAgICAgaWYgKHBhcmVudC5oYXNEZXN0cm95KSB7XHJcbiAgICAgICAgICAgIHBhcmVudC5jYWxsRGVzdHJveShpbnN0YW5jZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkZWxldGUgdGhpcy5hY3Rvckluc3RhbmNlTWFwW2luc3RhbmNlLmlkXTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJbnN0YW5jZXMoKTogQWN0b3JJbnN0YW5jZVtdIHtcclxuICAgICAgICBsZXQgaW5zdGFuY2VzID0gW107XHJcblxyXG4gICAgICAgIGZvciAobGV0IGluc3RhbmNlIGluIHRoaXMuYWN0b3JJbnN0YW5jZU1hcCkge1xyXG4gICAgICAgICAgICBpbnN0YW5jZXMucHVzaCh0aGlzLmFjdG9ySW5zdGFuY2VNYXBbaW5zdGFuY2VdKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBpbnN0YW5jZXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SW5zdGFuY2VzQXRQb3NpdGlvbih4OiBudW1iZXIsIHk6IG51bWJlcik6IEFjdG9ySW5zdGFuY2VbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SW5zdGFuY2VzKCkuZmlsdGVyKGluc3RhbmNlID0+IGluc3RhbmNlLm9jY3VwaWVzUG9zaXRpb24oeCwgeSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzUG9zaXRpb25GcmVlKHg6IG51bWJlciwgeTogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuICF0aGlzLmdldEluc3RhbmNlc0F0UG9zaXRpb24oeCwgeSkubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFZpZXcoKTogVmlldyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmlldztcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVDbGljayhldmVudDogUG9pbnRlcklucHV0RXZlbnQpOiB2b2lkIHtcclxuICAgICAgICBsZXQgY2xpY2tYID0gZXZlbnQueDtcclxuICAgICAgICBsZXQgY2xpY2tZID0gZXZlbnQueTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMudmlldykge1xyXG4gICAgICAgICAgICBjbGlja1ggKz0gdGhpcy52aWV3Lng7XHJcbiAgICAgICAgICAgIGNsaWNrWSArPSB0aGlzLnZpZXcueTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmdyaWQpIHtcclxuICAgICAgICAgICAgdGhpcy5ncmlkLnJhaXNlQ2xpY2tFdmVudChjbGlja1gsIGNsaWNrWSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmdldEluc3RhbmNlc0F0UG9zaXRpb24oY2xpY2tYLCBjbGlja1kpLmZvckVhY2goaW5zdGFuY2UgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcGFyZW50ID0gaW5zdGFuY2UucGFyZW50O1xyXG5cclxuICAgICAgICAgICAgaWYgKHBhcmVudC5oYXNDbGljayAmJiBpbnN0YW5jZS5vY2N1cGllc1Bvc2l0aW9uKGNsaWNrWCwgY2xpY2tZKSkge1xyXG4gICAgICAgICAgICAgICAgcGFyZW50LmNhbGxDbGljayhpbnN0YW5jZSwgZXZlbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZW5kKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYWN0b3JJbnN0YW5jZU1hcCA9IHt9O1xyXG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVycy5mb3JFYWNoKGV2ZW50SGFuZGxlciA9PiBldmVudEhhbmRsZXIuZGlzcG9zZSgpKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL3Jvb20udHMiLCJpbXBvcnQgeyBCb3VuZGFyeSB9IGZyb20gJy4vYm91bmRhcnknO1xyXG5pbXBvcnQgeyBBY3Rvckluc3RhbmNlRHJhd0V2ZW50LCBHYW1lQ2FudmFzQ29udGV4dCB9IGZyb20gJy4vY2FudmFzJztcclxuaW1wb3J0IHsgQWN0b3JTdGF0ZSwgRGlyZWN0aW9uIH0gZnJvbSAnLi9lbnVtJztcclxuaW1wb3J0IHsgRGVmZXJyZWRFdmVudCB9IGZyb20gJy4vZXZlbnRzJztcclxuaW1wb3J0IHsgR2FtZUNvbnRleHQgfSBmcm9tICcuL2dhbWUtY29udGV4dCc7XHJcbmltcG9ydCB7IFBvaW50ZXJJbnB1dEV2ZW50IH0gZnJvbSAnLi9pbnB1dCc7XHJcbmltcG9ydCB7IFNwcml0ZSwgU3ByaXRlQW5pbWF0aW9uIH0gZnJvbSAnLi9zcHJpdGUnO1xyXG5pbXBvcnQgeyBNYXRoVXRpbCB9IGZyb20gJy4vdXRpbCc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFjdG9yTGlmZWN5Y2xlIHtcclxuICAgIG9uQ3JlYXRlOiBMaWZlY3ljbGVDYWxsYmFjaztcclxuICAgIG9uU3RlcDogTGlmZWN5Y2xlQ2FsbGJhY2s7XHJcbiAgICBvbkRlc3Ryb3k6IExpZmVjeWNsZUNhbGxiYWNrO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExpZmVjeWNsZUNhbGxiYWNrIHtcclxuICAgIChzZWxmOiBBY3Rvckluc3RhbmNlKTogdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBY3RvckV2ZW50IHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGNhbGxiYWNrOiBBY3RvckV2ZW50Q2FsbGJhY2s7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQWN0b3JFdmVudENhbGxiYWNrIHtcclxuICAgIChzZWxmPzogQWN0b3JJbnN0YW5jZSwgZXZlbnRBcmdzPzogYW55KTogdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBY3Rvck9wdGlvbnMge1xyXG4gICAgYm91bmRhcnk/OiBCb3VuZGFyeTtcclxuICAgIHNwcml0ZT86IFNwcml0ZTtcclxufVxyXG5cclxuaW50ZXJmYWNlIENsaWNrRXZlbnRDYWxsYmFjayB7XHJcbiAgICAoc2VsZjogQWN0b3JJbnN0YW5jZSwgZXZlbnQ6IFBvaW50ZXJJbnB1dEV2ZW50KTogdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb2xsaXNpb25DYWxsYmFjayB7XHJcbiAgICAoc2VsZjogQWN0b3JJbnN0YW5jZSwgb3RoZXI6IEFjdG9ySW5zdGFuY2UpOiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQWN0b3Ige1xyXG5cclxuICAgIHN0YXRpYyBkZWZpbmUobmFtZTogc3RyaW5nLCBvcHRpb25zPzogQWN0b3JPcHRpb25zKTogQWN0b3Ige1xyXG4gICAgICAgIGxldCBhY3RvciA9IG5ldyBBY3RvcihuYW1lLCBvcHRpb25zKTtcclxuICAgICAgICBHYW1lQ29udGV4dC5kZWZpbmVBY3RvcihuYW1lLCBhY3Rvcik7XHJcblxyXG4gICAgICAgIHJldHVybiBhY3RvcjtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0KG5hbWU6IHN0cmluZyk6IEFjdG9yIHtcclxuICAgICAgICByZXR1cm4gR2FtZUNvbnRleHQuZ2V0QWN0b3IobmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gbGlmZWN5Y2xlIGNhbGxiYWNrc1xyXG4gICAgcHJpdmF0ZSBvbkNyZWF0ZUNhbGxiYWNrOiBMaWZlY3ljbGVDYWxsYmFjaztcclxuICAgIHByaXZhdGUgb25TdGVwQ2FsbGJhY2s6IExpZmVjeWNsZUNhbGxiYWNrO1xyXG4gICAgcHJpdmF0ZSBvbkRlc3Ryb3lDYWxsYmFjazogTGlmZWN5Y2xlQ2FsbGJhY2s7XHJcbiAgICBwcml2YXRlIG9uRHJhd0NhbGxiYWNrOiBBY3Rvckluc3RhbmNlRHJhd0V2ZW50O1xyXG5cclxuICAgIC8vIGlucHV0IGNhbGxiYWNrc1xyXG4gICAgcHJpdmF0ZSBvbkNsaWNrQ2FsbGJhY2s6IENsaWNrRXZlbnRDYWxsYmFjaztcclxuXHJcbiAgICAvLyBnYW1lIGV2ZW50IGhhbmRsZXJzXHJcbiAgICByZWFkb25seSBjb2xsaXNpb25IYW5kbGVyczogeyBbaW5kZXg6IHN0cmluZ106IENvbGxpc2lvbkNhbGxiYWNrIH0gPSB7fTtcclxuICAgIHJlYWRvbmx5IGFjdG9yRXZlbnRIYW5kbGVyczogeyBbaW5kZXg6IHN0cmluZ10gOiBBY3RvckV2ZW50Q2FsbGJhY2sgfSA9IHt9O1xyXG5cclxuICAgIHJlYWRvbmx5IGJvdW5kYXJ5OiBCb3VuZGFyeTtcclxuICAgIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IHNwcml0ZTogU3ByaXRlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgb3B0aW9uczogQWN0b3JPcHRpb25zID0ge30pIHtcclxuICAgICAgICB0aGlzLmJvdW5kYXJ5ID0gb3B0aW9ucy5ib3VuZGFyeTtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuc3ByaXRlID0gb3B0aW9ucy5zcHJpdGU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGhhc0NyZWF0ZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gISF0aGlzLm9uQ3JlYXRlQ2FsbGJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgb25DcmVhdGUoY2FsbGJhY2s6IExpZmVjeWNsZUNhbGxiYWNrKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vbkNyZWF0ZUNhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgY2FsbENyZWF0ZShzZWxmSW5zdGFuY2U6IEFjdG9ySW5zdGFuY2UpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9uQ3JlYXRlQ2FsbGJhY2soc2VsZkluc3RhbmNlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaGFzU3RlcCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gISF0aGlzLm9uU3RlcENhbGxiYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU3RlcChjYWxsYmFjazogTGlmZWN5Y2xlQ2FsbGJhY2spOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9uU3RlcENhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgY2FsbFN0ZXAoc2VsZkluc3RhbmNlOiBBY3Rvckluc3RhbmNlKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vblN0ZXBDYWxsYmFjayhzZWxmSW5zdGFuY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBoYXNEZXN0cm95KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAhIXRoaXMub25EZXN0cm95Q2FsbGJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KGNhbGxiYWNrOiBMaWZlY3ljbGVDYWxsYmFjayk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMub25EZXN0cm95Q2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgIH1cclxuXHJcbiAgICBjYWxsRGVzdHJveShzZWxmSW5zdGFuY2U6IEFjdG9ySW5zdGFuY2UpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9uRGVzdHJveUNhbGxiYWNrKHNlbGZJbnN0YW5jZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGhhc0NsaWNrKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAhIXRoaXMub25DbGlja0NhbGxiYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soY2FsbGJhY2s6IENsaWNrRXZlbnRDYWxsYmFjayk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMub25DbGlja0NhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgY2FsbENsaWNrKHNlbGZJbnN0YW5jZTogQWN0b3JJbnN0YW5jZSwgZXZlbnQ6IFBvaW50ZXJJbnB1dEV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vbkNsaWNrQ2FsbGJhY2soc2VsZkluc3RhbmNlLCBldmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGhhc0RyYXcoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuICEhdGhpcy5vbkRyYXdDYWxsYmFjaztcclxuICAgIH1cclxuXHJcbiAgICBvbkRyYXcoY2FsbGJhY2s6IEFjdG9ySW5zdGFuY2VEcmF3RXZlbnQpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9uRHJhd0NhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgY2FsbERyYXcoc2VsZkluc3RhbmNlOiBBY3Rvckluc3RhbmNlLCBnYW1lQ2FudmFzQ29udGV4dDogR2FtZUNhbnZhc0NvbnRleHQpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9uRHJhd0NhbGxiYWNrKHNlbGZJbnN0YW5jZSwgZ2FtZUNhbnZhc0NvbnRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ29sbGlkZShhY3Rvck5hbWU6IHN0cmluZywgY2FsbGJhY2s6IENvbGxpc2lvbkNhbGxiYWNrKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jb2xsaXNpb25IYW5kbGVyc1thY3Rvck5hbWVdID0gY2FsbGJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgb25FdmVudChldmVudE5hbWU6IHN0cmluZywgY2FsbGJhY2s6IEFjdG9yRXZlbnRDYWxsYmFjayk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYWN0b3JFdmVudEhhbmRsZXJzW2V2ZW50TmFtZV0gPSBjYWxsYmFjaztcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFjdG9ySW5zdGFuY2Uge1xyXG4gICAgcHJpdmF0ZSBzdGF0ZTogQWN0b3JTdGF0ZTtcclxuXHJcbiAgICBwcmV2aW91c1g6IG51bWJlcjtcclxuICAgIHByZXZpb3VzWTogbnVtYmVyO1xyXG4gICAgc3BlZWQ6IG51bWJlciA9IDA7XHJcbiAgICBkaXJlY3Rpb246IG51bWJlciA9IERpcmVjdGlvbi5SaWdodDtcclxuICAgIHZpc2libGU6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIHJlYWRvbmx5IHNwcml0ZUFuaW1hdGlvbjogU3ByaXRlQW5pbWF0aW9uO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXJlbnQ6IEFjdG9yLCBwdWJsaWMgaWQ6IG51bWJlciwgcHVibGljIHg6IG51bWJlciA9IDAsIHB1YmxpYyB5OiBudW1iZXIgPSAwKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IEFjdG9yU3RhdGUuQWN0aXZlO1xyXG4gICAgICAgIHRoaXMucHJldmlvdXNYID0gdGhpcy54O1xyXG4gICAgICAgIHRoaXMucHJldmlvdXNZID0gdGhpcy55O1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wYXJlbnQuc3ByaXRlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlQW5pbWF0aW9uID0gbmV3IFNwcml0ZUFuaW1hdGlvbih0aGlzLnBhcmVudC5zcHJpdGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXQgaGFzTW92ZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLnggIT09IHRoaXMucHJldmlvdXNYIHx8IHRoaXMueSAhPT0gdGhpcy5wcmV2aW91c1kpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBpc0FjdGl2ZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMuc3RhdGUgPT09IEFjdG9yU3RhdGUuQWN0aXZlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgYm91bmRhcnkoKTogQm91bmRhcnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBhcmVudC5ib3VuZGFyeTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgYW5pbWF0aW9uKCk6IFNwcml0ZUFuaW1hdGlvbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3ByaXRlQW5pbWF0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHJhaXNlRXZlbnQoZXZlbnROYW1lOiBzdHJpbmcsIGV2ZW50QXJncz86IGFueSk6IHZvaWQge1xyXG4gICAgICAgIC8vIHJlZ2lzdGVyIGFuIGV2ZW50IHRvIGZpcmUgaW1tZWRpYXRlbHlcclxuICAgICAgICB0aGlzLnJhaXNlRXZlbnRXaGVuKGV2ZW50TmFtZSwgKCkgPT4gdHJ1ZSwgZXZlbnRBcmdzKTtcclxuICAgIH1cclxuXHJcbiAgICByYWlzZUV2ZW50V2hlbihldmVudE5hbWU6IHN0cmluZywgY29uZGl0aW9uQ2FsbGJhY2s6ICgpID0+IGJvb2xlYW4sIGV2ZW50QXJnczogYW55ID0ge30pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNldEdhbWVDb250ZXh0RXZlbnRBcmdzKGV2ZW50QXJncyk7XHJcblxyXG4gICAgICAgIGxldCBjYWxsYmFjazogQWN0b3JFdmVudENhbGxiYWNrID0gdGhpcy5wYXJlbnQuYWN0b3JFdmVudEhhbmRsZXJzW2V2ZW50TmFtZV07XHJcblxyXG4gICAgICAgIGlmICghY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBdHRlbXB0aW5nIHRvIHJhaXNlIHVuZGVmaW5lZCBFdmVudDogJHtldmVudE5hbWV9YCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBEZWZlcnJlZEV2ZW50LnJlZ2lzdGVyKG5ldyBEZWZlcnJlZEV2ZW50KGNvbmRpdGlvbkNhbGxiYWNrLCBjYWxsYmFjay5iaW5kKG51bGwsIHRoaXMsIGV2ZW50QXJncykpKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldEdhbWVDb250ZXh0RXZlbnRBcmdzKGV2ZW50QXJnczogYW55KTogdm9pZCB7XHJcbiAgICAgICAgZXZlbnRBcmdzLmdhbWUgPSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRSb29tOiBHYW1lQ29udGV4dC5nZXRDdXJyZW50Um9vbSgpLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgZGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnN0YXRlID0gQWN0b3JTdGF0ZS5EZXN0cm95ZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgZG9Qb3N0U3RlcCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnByZXZpb3VzWCA9IHRoaXMueDtcclxuICAgICAgICB0aGlzLnByZXZpb3VzWSA9IHRoaXMueTtcclxuICAgIH1cclxuXHJcbiAgICBjb2xsaWRlc1dpdGgob3RoZXI6IEFjdG9ySW5zdGFuY2UpOiBib29sZWFuIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaGFzTW92ZWQgJiYgdGhpcy5ib3VuZGFyeSAmJiBvdGhlci5ib3VuZGFyeSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ib3VuZGFyeS5hdFBvc2l0aW9uKHRoaXMueCwgdGhpcy55KS5jb2xsaWRlc1dpdGgob3RoZXIuYm91bmRhcnkuYXRQb3NpdGlvbihvdGhlci54LCBvdGhlci55KSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TW92ZW1lbnRPZmZzZXRYKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGhVdGlsLmdldExlbmd0aERpcmVjdGlvblgodGhpcy5zcGVlZCAqIDEwMCwgdGhpcy5kaXJlY3Rpb24pIC8gMTAwO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE1vdmVtZW50T2Zmc2V0WSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBNYXRoVXRpbC5nZXRMZW5ndGhEaXJlY3Rpb25ZKHRoaXMuc3BlZWQgKiAxMDAsIHRoaXMuZGlyZWN0aW9uKSAvIDEwMDtcclxuICAgIH1cclxuXHJcbiAgICBzZXRQb3NpdGlvblJlbGF0aXZlKHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZXRQb3NpdGlvbih0aGlzLnggKyB4LCB0aGlzLnkgKyB5KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRQb3NpdGlvbih4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucHJldmlvdXNYID0gdGhpcy54O1xyXG4gICAgICAgIHRoaXMucHJldmlvdXNZID0gdGhpcy55O1xyXG5cclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZShzcGVlZDogbnVtYmVyLCBkaXJlY3Rpb24/OiBEaXJlY3Rpb24pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNwZWVkID0gc3BlZWQ7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XHJcbiAgICB9XHJcblxyXG4gICAgb2NjdXBpZXNQb3NpdGlvbih4OiBudW1iZXIsIHk6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJvdW5kYXJ5ID8gdGhpcy5ib3VuZGFyeS5hdFBvc2l0aW9uKHRoaXMueCwgdGhpcy55KS5jb250YWluc1Bvc2l0aW9uKHgsIHkpIDogZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9hY3Rvci50cyIsImltcG9ydCB7IEFjdG9yLCBBY3Rvckluc3RhbmNlIH0gZnJvbSAnLi9hY3Rvcic7XHJcbmltcG9ydCB7IERpcmVjdGlvbiB9IGZyb20gJy4vZW51bSc7XHJcbmltcG9ydCB7IFJvb20gfSBmcm9tICcuL3Jvb20nO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBHcmlkQ2xpY2tDYWxsYmFjayB7XHJcbiAgICAoZ3JpZENsaWNrRXZlbnQ6IEdyaWRDbGlja0V2ZW50KTogdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdyaWRDbGlja0V2ZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGdyaWQ6IEdyaWQsXHJcbiAgICAgICAgcHJpdmF0ZSB4OiBudW1iZXIsIFxyXG4gICAgICAgIHByaXZhdGUgeTogbnVtYmVyKSB7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2VsbCgpOiBHcmlkQ2VsbCB7XHJcbiAgICAgICAgbGV0IGNlbGxYID0gdGhpcy54IC0gdGhpcy54ICUgdGhpcy5ncmlkLnRpbGVTaXplO1xyXG4gICAgICAgIGxldCBjZWxsWSA9IHRoaXMueSAtIHRoaXMueSAlIHRoaXMuZ3JpZC50aWxlU2l6ZTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gbmV3IEdyaWRDZWxsKHRoaXMuZ3JpZCwgY2VsbFgsIGNlbGxZKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdyaWRDZWxsIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGdyaWQ6IEdyaWQsIHB1YmxpYyB4OiBudW1iZXIsIHB1YmxpYyB5OiBudW1iZXIpIHtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBZGphY2VudENlbGwoZGlyZWN0aW9uOiBEaXJlY3Rpb24pOiBHcmlkQ2VsbCB7XHJcbiAgICAgICAgbGV0IG9mZnNldFggPSAwO1xyXG4gICAgICAgIGxldCBvZmZzZXRZID0gMDtcclxuXHJcbiAgICAgICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcclxuICAgICAgICAgICAgY2FzZSBEaXJlY3Rpb24uRG93bjpcclxuICAgICAgICAgICAgICAgIG9mZnNldFkgPSB0aGlzLmdyaWQudGlsZVNpemU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBEaXJlY3Rpb24uTGVmdDpcclxuICAgICAgICAgICAgICAgIG9mZnNldFggPSAtdGhpcy5ncmlkLnRpbGVTaXplO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRGlyZWN0aW9uLlJpZ2h0OlxyXG4gICAgICAgICAgICAgICAgb2Zmc2V0WCA9IHRoaXMuZ3JpZC50aWxlU2l6ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIERpcmVjdGlvbi5VcDpcclxuICAgICAgICAgICAgICAgIG9mZnNldFkgPSAtdGhpcy5ncmlkLnRpbGVTaXplO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbmV3IEdyaWRDZWxsKHRoaXMuZ3JpZCwgdGhpcy54ICsgb2Zmc2V0WCwgdGhpcy55ICsgb2Zmc2V0WSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q29udGVudHMoKTogQWN0b3JJbnN0YW5jZVtdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ncmlkLnJvb20uZ2V0SW5zdGFuY2VzQXRQb3NpdGlvbih0aGlzLnggKyB0aGlzLmdyaWQudGlsZVNpemUgLyAyLCB0aGlzLnkgKyB0aGlzLmdyaWQudGlsZVNpemUgLyAyKTtcclxuICAgIH1cclxuXHJcbiAgICBjb250YWluc0luc3RhbmNlKGluc3RhbmNlOiBBY3Rvckluc3RhbmNlKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q29udGVudHMoKS5zb21lKGNvbnRlbnRzID0+IGNvbnRlbnRzID09PSBpbnN0YW5jZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29udGFpbnNJbnN0YW5jZU9mKGFjdG9yOiBBY3Rvcik6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldENvbnRlbnRzKCkuc29tZShjb250ZW50cyA9PiBjb250ZW50cy5wYXJlbnQgPT09IGFjdG9yKTtcclxuICAgIH1cclxuXHJcbiAgICBpc0ZyZWUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuICF0aGlzLmdldENvbnRlbnRzKCkubGVuZ3RoO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR3JpZCB7XHJcbiAgICBwcml2YXRlIF9vbkNsaWNrOiBHcmlkQ2xpY2tDYWxsYmFjaztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICByZWFkb25seSB0aWxlU2l6ZTogbnVtYmVyLFxyXG4gICAgICAgIHJlYWRvbmx5IHJvb206IFJvb20pIHtcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKGNhbGxiYWNrOiBHcmlkQ2xpY2tDYWxsYmFjayk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX29uQ2xpY2sgPSBjYWxsYmFjaztcclxuICAgIH1cclxuXHJcbiAgICByYWlzZUNsaWNrRXZlbnQoeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBsZXQgaW5zdGFuY2VzID0gdGhpcy5yb29tLmdldEluc3RhbmNlc0F0UG9zaXRpb24oeCwgeSk7XHJcbiAgICAgICAgbGV0IGV2ZW50ID0gbmV3IEdyaWRDbGlja0V2ZW50KHRoaXMsIHgsIHkpO1xyXG5cclxuICAgICAgICB0aGlzLl9vbkNsaWNrKGV2ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDZWxsQXRQb3NpdGlvbih4OiBudW1iZXIsIHk6IG51bWJlcik6IEdyaWRDZWxsIHtcclxuICAgICAgICByZXR1cm4gbmV3IEdyaWRDZWxsKHRoaXMsIHgsIHkpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9ncmlkLnRzIiwiaW1wb3J0IHsgQWN0b3JJbnN0YW5jZSB9IGZyb20gJy4vYWN0b3InO1xyXG5pbXBvcnQgeyBCb3VuZGFyeSB9IGZyb20gJy4vYm91bmRhcnknO1xyXG5pbXBvcnQgeyBHYW1lQ2FudmFzSFRNTDJEIH0gZnJvbSAnLi9jYW52YXMnO1xyXG5cclxuZW51bSBWaWV3TW9kZSB7XHJcbiAgICBTYW1lUG9zaXRpb24gPSAxLFxyXG4gICAgQ2VudGVyID0gMixcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFZpZXcge1xyXG5cclxuICAgIHByaXZhdGUgdmlld01vZGU6IFZpZXdNb2RlO1xyXG4gICAgcHJpdmF0ZSBmb2xsb3dJbnN0YW5jZTogQWN0b3JJbnN0YW5jZTtcclxuICAgIHByaXZhdGUgYXR0YWNobWVudHM6IEFjdG9ySW5zdGFuY2VBdHRhY2hlbWVudFtdID0gW107XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyB4OiBudW1iZXIsIFxyXG4gICAgICAgIHB1YmxpYyB5OiBudW1iZXIsIFxyXG4gICAgICAgIHB1YmxpYyByZWFkb25seSB3aWR0aDogbnVtYmVyLCBcclxuICAgICAgICBwdWJsaWMgcmVhZG9ubHkgaGVpZ2h0OiBudW1iZXIpIHtcclxuICAgIH1cclxuXHJcbiAgICBmb2xsb3coYWN0b3JJbnN0YW5jZTogQWN0b3JJbnN0YW5jZSwgY2VudGVyOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICB0aGlzLnZpZXdNb2RlID0gY2VudGVyID8gVmlld01vZGUuQ2VudGVyIDogVmlld01vZGUuU2FtZVBvc2l0aW9uO1xyXG4gICAgICAgIHRoaXMuZm9sbG93SW5zdGFuY2UgPSBhY3Rvckluc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIGF0dGFjaChhY3Rvckluc3RhbmNlOiBBY3Rvckluc3RhbmNlLCBvZmZzZXRYOiBudW1iZXIsIG9mZnNldFk6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuYXR0YWNobWVudHMucHVzaChuZXcgQWN0b3JJbnN0YW5jZUF0dGFjaGVtZW50KHRoaXMsIGFjdG9ySW5zdGFuY2UsIG9mZnNldFgsIG9mZnNldFkpKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5mb2xsb3dJbnN0YW5jZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy52aWV3TW9kZSA9PT0gVmlld01vZGUuQ2VudGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2VudGVyQXJvdW5kQm91bmRhcnkodGhpcy5mb2xsb3dJbnN0YW5jZS5ib3VuZGFyeSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnggPSB0aGlzLmZvbGxvd0luc3RhbmNlLnggfHwgMDtcclxuICAgICAgICAgICAgdGhpcy55ID0gdGhpcy5mb2xsb3dJbnN0YW5jZS55IHx8IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmF0dGFjaG1lbnRzLmZvckVhY2goYXR0ID0+IGF0dC51cGRhdGUoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjZW50ZXJBcm91bmRCb3VuZGFyeShib3VuZGFyeTogQm91bmRhcnkpIHtcclxuXHJcbiAgICAgICAgaWYgKCFib3VuZGFyeSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGJvdW5kYXJ5IGlzICR7Ym91bmRhcnl9YCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnggPSB0aGlzLmZvbGxvd0luc3RhbmNlLnggKyAoYm91bmRhcnkud2lkdGggLyAyKSAtICh0aGlzLndpZHRoIC8gMik7XHJcbiAgICAgICAgdGhpcy55ID0gdGhpcy5mb2xsb3dJbnN0YW5jZS55ICsgKGJvdW5kYXJ5LmhlaWdodCAvIDIpIC0gKHRoaXMuaGVpZ2h0IC8gMik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIEFjdG9ySW5zdGFuY2VBdHRhY2hlbWVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IgKHByaXZhdGUgcGFyZW50OiBWaWV3LFxyXG4gICAgICAgIHByaXZhdGUgaW5zdGFuY2U6IEFjdG9ySW5zdGFuY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBvZmZzZXRYOiBudW1iZXIsXHJcbiAgICAgICAgcHJpdmF0ZSBvZmZzZXRZOiBudW1iZXIpIHtcclxuICAgICAgICB9XHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIHRoaXMuaW5zdGFuY2UueCA9IHRoaXMucGFyZW50LnggKyB0aGlzLm9mZnNldFg7XHJcbiAgICAgICAgdGhpcy5pbnN0YW5jZS55ID0gdGhpcy5wYXJlbnQueSArIHRoaXMub2Zmc2V0WTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvdmlldy50cyIsImltcG9ydCB7IFNwcml0ZSwgU3ByaXRlVHJhbnNmb3JtYXRpb24gfSBmcm9tICcuLy4uLy4uL2VuZ2luZS92YXN0Z2FtZSc7XHJcblxyXG5jb25zdCBEZWxheUludGVydmFsID0gMTAwO1xyXG5jb25zdCBPcGFjaXR5RGVsdGEgPSAwLjI1O1xyXG5cclxuZXhwb3J0IGNsYXNzIFNwcml0ZUZhZGVyIHtcclxuICAgIFxyXG4gICAgLy8gVE9ETyAoZm9ydGlmaWNhdGlvbik6IGFsdGVybmF0aXZlcyB0aGF0IGFjY2VwdCBSb29tIG9iamVjdHMsIGR5bmFtaWNhbGx5IGdldHRpbmcgYSB1bmlxdWUgY29sbGVjdGlvbiBvZiBTcHJpdGVzXHJcblxyXG4gICAgc3RhdGljIGZhZGVPdXQoc3ByaXRlczogU3ByaXRlW10sIGNhbGxiYWNrOiAoKSA9PiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBsZXQgZmFkZSA9IDE7XHJcbiAgICBcclxuICAgICAgICBsZXQgdGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGZhZGUgLT0gT3BhY2l0eURlbHRhO1xyXG4gICAgICAgICAgICBzcHJpdGVzLmZvckVhY2goc3ByaXRlID0+IHNwcml0ZS50cmFuc2Zvcm0oU3ByaXRlVHJhbnNmb3JtYXRpb24uT3BhY2l0eSwgLU9wYWNpdHlEZWx0YSkpO1xyXG4gICAgXHJcbiAgICAgICAgICAgIGlmIChmYWRlIDw9IDApIHtcclxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChjYWxsYmFjaywgRGVsYXlJbnRlcnZhbCAqIDIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgRGVsYXlJbnRlcnZhbCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGZhZGVJbihzcHJpdGVzOiBTcHJpdGVbXSwgY2FsbGJhY2s/OiAoKSA9PiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBsZXQgZmFkZSA9IDA7XHJcbiAgICAgICAgc3ByaXRlcy5mb3JFYWNoKHNwcml0ZSA9PiBzcHJpdGUuc2V0VHJhbnNmb3JtKFNwcml0ZVRyYW5zZm9ybWF0aW9uLk9wYWNpdHksIDApKTtcclxuXHJcbiAgICAgICAgbGV0IHRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICBmYWRlICs9IE9wYWNpdHlEZWx0YTtcclxuICAgICAgICAgICAgc3ByaXRlcy5mb3JFYWNoKHNwcml0ZSA9PiBzcHJpdGUudHJhbnNmb3JtKFNwcml0ZVRyYW5zZm9ybWF0aW9uLk9wYWNpdHksIE9wYWNpdHlEZWx0YSkpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGZhZGUgPj0gMSkge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcik7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SW50ZXJ2YWwoY2FsbGJhY2ssIERlbGF5SW50ZXJ2YWwgKiAyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIERlbGF5SW50ZXJ2YWwpO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2dhbWUvdXRpbC9zcHJpdGUtZmFkZXIudHMiLCJpbXBvcnQgeyBBY3Rvckluc3RhbmNlIH0gZnJvbSAnLi9hY3Rvcic7XHJcbmltcG9ydCB7IEJhY2tncm91bmQsIFJvb20gfSBmcm9tICcuL3Jvb20nO1xyXG5pbXBvcnQgeyBTcHJpdGUsIFNwcml0ZUFuaW1hdGlvbiwgU3ByaXRlVHJhbnNmb3JtYXRpb24gfSBmcm9tICcuL3Nwcml0ZSc7XHJcbmltcG9ydCB7IFZpZXcgfSBmcm9tICcuL3ZpZXcnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDYW52YXNPcHRpb25zIHtcclxuICAgIGhlaWdodD86IG51bWJlcjtcclxuICAgIHdpZHRoPzogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFjdG9ySW5zdGFuY2VEcmF3RXZlbnQge1xyXG4gICAgKHNlbGY6IEFjdG9ySW5zdGFuY2UsIGNvbnRleHQ6IEdhbWVDYW52YXNDb250ZXh0KTogdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSb29tRHJhd0V2ZW50IHtcclxuICAgIChjb250ZXh0OiBHYW1lQ2FudmFzQ29udGV4dCk6IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgR2FtZUNhbnZhcyB7XHJcbiAgICBkcmF3Um9vbShyb29tOiBSb29tKTtcclxuICAgIGRyYXdTcHJpdGUoc3ByaXRlOiBTcHJpdGUsIHg6IG51bWJlciwgeTogbnVtYmVyLCBmcmFtZTogbnVtYmVyKTogdm9pZDtcclxufVxyXG5cclxuY29uc3QgRGVmYXVsdEhlaWdodCA9IDQ4MDtcclxuY29uc3QgRGVmYXVsdFdpZHRoID0gNjQwO1xyXG5jb25zdCBEZWZhdWx0T3BhY2l0eSA9IDE7XHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZUNhbnZhc0hUTUwyRCBpbXBsZW1lbnRzIEdhbWVDYW52YXMge1xyXG4gICAgcHJpdmF0ZSBnYW1lQ2FudmFzQ29udGV4dDogR2FtZUNhbnZhc0NvbnRleHQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIHJlYWRvbmx5IGNhbnZhc0VsZW1lbnQ6IEhUTUxDYW52YXNFbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy5nYW1lQ2FudmFzQ29udGV4dCA9IG5ldyBHYW1lQ2FudmFzQ29udGV4dCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldCBjb250ZXh0KCk6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FudmFzRWxlbWVudC5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBoZWlnaHQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jYW52YXNFbGVtZW50LmhlaWdodDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgd2lkdGgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jYW52YXNFbGVtZW50LndpZHRoO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQob3B0aW9uczogQ2FudmFzT3B0aW9ucyA9IHt9KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jYW52YXNFbGVtZW50LmhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0IHx8IERlZmF1bHRIZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5jYW52YXNFbGVtZW50LndpZHRoID0gb3B0aW9ucy53aWR0aCB8fCBEZWZhdWx0V2lkdGg7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVE9ETzogc2VwYXJhdGUgY2FudmFzIGludGVyYWN0aW9ucyBmcm9tIHJvb20vaW5zdGFuY2UgbG9naWNcclxuICAgIGRyYXdSb29tKHJvb206IFJvb20pIHtcclxuICAgICAgICAvLyBjbGVhciB0aGUgY2FudmFzXHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhc0VsZW1lbnQud2lkdGgsIHRoaXMuY2FudmFzRWxlbWVudC5oZWlnaHQpO1xyXG5cclxuICAgICAgICAvLyBnZXQgdmlldyBvZmZzZXRcclxuICAgICAgICBsZXQgW29mZnNldFgsIG9mZnNldFldID0gdGhpcy5nZXRWaWV3T2Zmc2V0KHJvb20uZ2V0VmlldygpKTtcclxuXHJcbiAgICAgICAgLy8gZHJhdyByb29tIGJhY2tncm91bmRcclxuICAgICAgICBpZiAocm9vbS5iYWNrZ3JvdW5kKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LnJlY3QoLW9mZnNldFgsIC1vZmZzZXRZLCByb29tLmJhY2tncm91bmQud2lkdGgsIHJvb20uYmFja2dyb3VuZC5oZWlnaHQpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gcm9vbS5iYWNrZ3JvdW5kLmNvbG9yO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuZmlsbCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gY2FsbCByb29tIGRyYXcgZXZlbnQgY2FsbGJhY2tcclxuICAgICAgICBpZiAocm9vbS5oYXNEcmF3KSB7XHJcbiAgICAgICAgICAgIHJvb20uY2FsbERyYXcodGhpcy5nYW1lQ2FudmFzQ29udGV4dCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgb3JkZXJlZEluc3RhbmNlcyA9IHJvb20uZ2V0SW5zdGFuY2VzKCkuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKGIuc3ByaXRlQW5pbWF0aW9uID8gYi5zcHJpdGVBbmltYXRpb24uZGVwdGggOiAwKSAtIChhLnNwcml0ZUFuaW1hdGlvbiA/IGEuYW5pbWF0aW9uLmRlcHRoIDogMCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIG9yZGVyZWRJbnN0YW5jZXMuZm9yRWFjaChpbnN0YW5jZSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNhbGwgYWN0b3IgZHJhdyBldmVudCBjYWxsYmFja3NcclxuICAgICAgICAgICAgaWYgKGluc3RhbmNlLnBhcmVudC5oYXNEcmF3KSB7XHJcbiAgICAgICAgICAgICAgICBpbnN0YW5jZS5wYXJlbnQuY2FsbERyYXcoaW5zdGFuY2UsIHRoaXMuZ2FtZUNhbnZhc0NvbnRleHQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBkcmF3IHNwcml0ZXNcclxuICAgICAgICAgICAgaWYgKGluc3RhbmNlLmFuaW1hdGlvbiAmJiBpbnN0YW5jZS52aXNpYmxlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdTcHJpdGUoaW5zdGFuY2UuYW5pbWF0aW9uLnNvdXJjZSwgaW5zdGFuY2UueCAtIG9mZnNldFgsIGluc3RhbmNlLnkgLSBvZmZzZXRZLCBpbnN0YW5jZS5zcHJpdGVBbmltYXRpb24uZnJhbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRWaWV3T2Zmc2V0KHZpZXc6IFZpZXcpOiBbbnVtYmVyLCBudW1iZXJdIHtcclxuICAgICAgICBsZXQgb2Zmc2V0WCA9IHZpZXcgPyB2aWV3LnggOiAwO1xyXG4gICAgICAgIGxldCBvZmZzZXRZID0gdmlldyA/IHZpZXcueSA6IDA7XHJcblxyXG4gICAgICAgIHJldHVybiBbb2Zmc2V0WCwgb2Zmc2V0WV07XHJcbiAgICB9XHJcblxyXG4gICAgZHJhd1Nwcml0ZShzcHJpdGU6IFNwcml0ZSwgeDogbnVtYmVyLCB5OiBudW1iZXIsIGZyYW1lOiBudW1iZXIgPSAwKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGltYWdlID0gc3ByaXRlLmltYWdlO1xyXG4gICAgICAgIGxldCBmcmFtZUJvcmRlciA9IHNwcml0ZS5mcmFtZUJvcmRlciB8fCAwO1xyXG4gICAgICAgIGxldCB3aWR0aCA9IHNwcml0ZS53aWR0aDtcclxuICAgICAgICBsZXQgaGVpZ2h0ID0gc3ByaXRlLmhlaWdodDtcclxuXHJcbiAgICAgICAgbGV0IGZyYW1lT2Zmc2V0ID0gZnJhbWUgKiBmcmFtZUJvcmRlcjtcclxuXHJcbiAgICAgICAgbGV0IG9wYWNpdHkgPSBzcHJpdGUuZ2V0VHJhbnNmb3JtKFNwcml0ZVRyYW5zZm9ybWF0aW9uLk9wYWNpdHkpO1xyXG4gICAgICAgIGxldCBwcmV2aW91c09wYWNpdHk6IG51bWJlciA9IG51bGw7XHJcblxyXG4gICAgICAgIGlmIChvcGFjaXR5ICE9PSBEZWZhdWx0T3BhY2l0eSAmJiBvcGFjaXR5ICE9PSBudWxsICYmIG9wYWNpdHkgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBwcmV2aW91c09wYWNpdHkgPSB0aGlzLmNvbnRleHQuZ2xvYmFsQWxwaGE7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5nbG9iYWxBbHBoYSA9IG9wYWNpdHk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKGltYWdlLCBmcmFtZSAqIHdpZHRoICsgZnJhbWVPZmZzZXQsIDAsIHdpZHRoLCBoZWlnaHQsIE1hdGguZmxvb3IoeCksIE1hdGguZmxvb3IoeSksIHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuICAgICAgICAvLyByZXNldCBvcGFjaXR5XHJcbiAgICAgICAgaWYgKHByZXZpb3VzT3BhY2l0eSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuZ2xvYmFsQWxwaGEgPSBwcmV2aW91c09wYWNpdHk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRyYXdTcHJpdGVWaWV3UmVsYXRpdmUoc3ByaXRlOiBTcHJpdGUsIHg6IG51bWJlciwgeTogbnVtYmVyLCBmcmFtZTogbnVtYmVyLCB2aWV3OiBWaWV3KTogdm9pZCB7XHJcbiAgICAgICAgbGV0IFtvZmZzZXRYLCBvZmZzZXRZXSA9IHRoaXMuZ2V0Vmlld09mZnNldCh2aWV3KTtcclxuICAgICAgICB0aGlzLmRyYXdTcHJpdGUoc3ByaXRlLCB4IC0gb2Zmc2V0WCwgeSAtIG9mZnNldFksIGZyYW1lKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWVDYW52YXNDb250ZXh0IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGdhbWVDYW52YXM6IEdhbWVDYW52YXNIVE1MMkQpIHtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3U3ByaXRlKHNwcml0ZTogU3ByaXRlLCB4OiBudW1iZXIsIHk6IG51bWJlciwgZnJhbWU6IG51bWJlciA9IDAsIHZpZXc/OiBWaWV3KSB7XHJcbiAgICAgICAgdGhpcy5nYW1lQ2FudmFzLmRyYXdTcHJpdGVWaWV3UmVsYXRpdmUoc3ByaXRlLCB4LCB5LCBmcmFtZSwgdmlldyk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL2NhbnZhcy50cyIsImltcG9ydCB7IENhbnZhc09wdGlvbnMsIEdhbWVDYW52YXMgfSBmcm9tICcuL2NhbnZhcyc7XHJcbmltcG9ydCB7IEdhbWVTdGF0ZSB9IGZyb20gJy4vZW51bSc7XHJcbmltcG9ydCB7IEdhbWVDb250ZXh0IH0gZnJvbSAnLi9nYW1lLWNvbnRleHQnO1xyXG5pbXBvcnQgeyBHYW1lT3B0aW9ucyB9IGZyb20gJy4vdmFzdGdhbWUnO1xyXG5cclxuY29uc3QgRGVmYXVsdEZQUyA9IDYwO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWVSdW5uZXIge1xyXG4gICAgcHJpdmF0ZSBzdGF0ZTogR2FtZVN0YXRlID0gR2FtZVN0YXRlLlBhdXNlZDtcclxuICAgIHJlYWRvbmx5IHRhcmdldEZQUzogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY2FudmFzOiBHYW1lQ2FudmFzLCBwcml2YXRlIG9wdGlvbnM6IEdhbWVPcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy50YXJnZXRGUFMgPSBvcHRpb25zLnRhcmdldEZQUyB8fCBEZWZhdWx0RlBTO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBpc1J1bm5pbmcoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUgPT09IEdhbWVTdGF0ZS5SdW5uaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIHBhdXNlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBHYW1lU3RhdGUuUGF1c2VkO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBzdGVwU2l6ZTogbnVtYmVyID0gMSAvIHRoaXMudGFyZ2V0RlBTO1xyXG4gICAgICAgIGxldCBvZmZzZXQ6IG51bWJlciA9IDA7XHJcbiAgICAgICAgbGV0IHByZXZpb3VzOiBudW1iZXIgPSB3aW5kb3cucGVyZm9ybWFuY2Uubm93KCk7XHJcblxyXG4gICAgICAgIGxldCBnYW1lTG9vcDogRnJhbWVSZXF1ZXN0Q2FsbGJhY2sgPSAoKTogdm9pZCA9PiB7XHJcbiAgICAgICAgICAgIGxldCByb29tID0gR2FtZUNvbnRleHQuZ2V0Q3VycmVudFJvb20oKTtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnQ6IG51bWJlciA9IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIG9mZnNldCArPSAoTWF0aC5taW4oMSwgKGN1cnJlbnQgLSBwcmV2aW91cykgLyAxMDAwKSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB3aGlsZSAob2Zmc2V0ID4gc3RlcFNpemUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1J1bm5pbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICBHYW1lQ29udGV4dC5jaGVja0FuZEZpcmVFdmVudHMoKTtcclxuICAgICAgICAgICAgICAgICAgICByb29tLnN0ZXAoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBvZmZzZXQgLT0gc3RlcFNpemU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzUnVubmluZykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW52YXMuZHJhd1Jvb20ocm9vbSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHByZXZpb3VzID0gY3VycmVudDtcclxuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBzdGFydCB0aGUgZ2FtZSBsb29wXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IEdhbWVTdGF0ZS5SdW5uaW5nO1xyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9nYW1lLXJ1bm5lci50cyIsImltcG9ydCB7IEdhbWVDb250ZXh0IH0gZnJvbSAnLi9nYW1lLWNvbnRleHQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIERlZmVycmVkRXZlbnQge1xyXG5cclxuICAgIHN0YXRpYyByZWdpc3RlcihldmVudDogRGVmZXJyZWRFdmVudCk6IHZvaWQge1xyXG4gICAgICAgIEdhbWVDb250ZXh0LnJlZ2lzdGVyRXZlbnQoZXZlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyByZWFkb25seSBjb25kaXRpb25DYWxsYmFjazogKCkgPT4gYm9vbGVhbixcclxuICAgICAgICBwdWJsaWMgcmVhZG9ubHkgYWN0aW9uQ2FsbGJhY2s6ICgpID0+IGFueSxcclxuICAgICAgICBwdWJsaWMgcmVhZG9ubHkgZmlyZU9uY2U6IGJvb2xlYW4gPSB0cnVlKSB7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL2V2ZW50cy50cyIsImV4cG9ydCBjbGFzcyBNYXRoVXRpbCB7XHJcblxyXG4gICAgc3RhdGljIGdldExlbmd0aERpcmVjdGlvblgobGVuZ3RoOiBudW1iZXIsIGRpcmVjdGlvbjogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gbGVuZ3RoICogTWF0aC5jb3MoZGlyZWN0aW9uICogKE1hdGguUEkgLyAxODApKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0TGVuZ3RoRGlyZWN0aW9uWShsZW5ndGg6IG51bWJlciwgZGlyZWN0aW9uOiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gbGVuZ3RoICogTWF0aC5zaW4oZGlyZWN0aW9uICogKE1hdGguUEkgLyAxODApKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL3V0aWwudHMiLCJpbXBvcnQgeyBTcHJpdGUgfSBmcm9tICcuL3Nwcml0ZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgUG9zaXRpb25lZEJvdW5kYXJ5IHtcclxuICAgIHByaXZhdGUgaGVpZ2h0OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHdpZHRoOiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIHg6IG51bWJlciwgcHVibGljIHk6IG51bWJlciwgYm91bmRhcnk6IEJvdW5kYXJ5KSB7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBib3VuZGFyeS5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IGJvdW5kYXJ5LndpZHRoO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbGxpZGVzV2l0aChvdGhlcjogUG9zaXRpb25lZEJvdW5kYXJ5KTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMueCA+IG90aGVyLnggKyBvdGhlci53aWR0aCB8fCBvdGhlci54ID49IHRoaXMueCArIHRoaXMud2lkdGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMueSA+IG90aGVyLnkgKyBvdGhlci5oZWlnaHQgfHwgb3RoZXIueSA+PSB0aGlzLnkgKyB0aGlzLmhlaWdodCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBjb250YWluc1Bvc2l0aW9uKHg6IG51bWJlciwgeTogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMueCA+IHggfHwgeCA+IHRoaXMueCArIHRoaXMud2lkdGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMueSA+IHkgfHwgeSA+IHRoaXMueSArIHRoaXMuaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQm91bmRhcnkge1xyXG5cclxuICAgIHN0YXRpYyBmcm9tU3ByaXRlKHNwcml0ZTogU3ByaXRlLCBzb2xpZDogYm9vbGVhbiA9IGZhbHNlKTogQm91bmRhcnkge1xyXG4gICAgICAgIHJldHVybiBuZXcgQm91bmRhcnkoc3ByaXRlLmhlaWdodCwgc3ByaXRlLndpZHRoLCBzb2xpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIGhlaWdodDogbnVtYmVyLCBwdWJsaWMgd2lkdGg6IG51bWJlciwgcHVibGljIHNvbGlkOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICBpZiAoaGVpZ2h0IDw9IDAgfHwgd2lkdGggPD0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0hlaWdodCBhbmQgd2lkdGggbXVzdCBib3RoIGJlIGdyZWF0ZXIgdGhhbiB6ZXJvLicpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhdFBvc2l0aW9uKHg6IG51bWJlciwgeTogbnVtYmVyKTogUG9zaXRpb25lZEJvdW5kYXJ5IHtcclxuICAgICAgICByZXR1cm4gbmV3IFBvc2l0aW9uZWRCb3VuZGFyeSh4LCB5LCB0aGlzKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL2JvdW5kYXJ5LnRzIiwiaW1wb3J0IHsgUm9vbSwgVmFzdGdhbWUgfSBmcm9tICcuLy4uL2VuZ2luZS92YXN0Z2FtZSc7XHJcbmltcG9ydCAqIGFzIENvbnN0YW50cyBmcm9tICcuL3V0aWwvY29uc3RhbnRzJztcclxuaW1wb3J0IHsgU2V0dGluZ3MsIFJvb21JRCB9ZnJvbSAnLi91dGlsL2VudW0nO1xyXG5pbXBvcnQgeyBSZWdpc3RyeSwgcmVxdWlyZU1vZHVsZXMsIGJ1aWxkQ2FudmFzRGltZW5zaW9ucyB9IGZyb20gJy4vdXRpbC91dGlsJztcclxuXHJcbi8vIGxvYWQgZ2FtZSBtb2R1bGVzXHJcbnJlcXVpcmVNb2R1bGVzKCdhY3RvcnMnLCBbJ2Jsb2NrJywgJ2h1ZCcsICdwbGF5ZXInLCAnd2FsbCcsICd3aW4nXSk7XHJcbnJlcXVpcmVNb2R1bGVzKCdyb29tcycsIFsnbGV2ZWwnLCAnbGV2ZWwtc2VsZWN0JywgJ3RpdGxlJ10pO1xyXG5cclxuLy8gZGV0ZXJtaW5lIGNhbnZhcyBkaW1lbnNpb25zIGJhc2VkIG9uIHZpZXdwb3J0IHNpemVcclxubGV0IFtjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0XSA9IGJ1aWxkQ2FudmFzRGltZW5zaW9ucygpO1xyXG5cclxuUmVnaXN0cnkuc2V0KFNldHRpbmdzLkNhbnZhc1dpZHRoLCBjYW52YXNXaWR0aCk7XHJcblJlZ2lzdHJ5LnNldChTZXR0aW5ncy5DYW52YXNIZWlnaHQsIGNhbnZhc0hlaWdodCk7XHJcblxyXG4vLyBoYWNrczpcclxuUmVnaXN0cnkuc2V0KFNldHRpbmdzLlN0YWNrbW9Qcm9ncmVzcywgMSwgdHJ1ZSk7XHJcblxyXG5SZWdpc3RyeS5sb2FkKFNldHRpbmdzLlN0YWNrbW9Qcm9ncmVzcyk7XHJcblxyXG4vLyBzdGFydCB0aGUgZ2FtZSB3aXRoIHRoZSB0aXRsZSByb29tXHJcblZhc3RnYW1lLnN0YXJ0KCdnYW1lJywgUm9vbUlELlRpdGxlLCB7XHJcbiAgICBjYW52YXM6IHsgd2lkdGg6IGNhbnZhc1dpZHRoLCBoZWlnaHQ6IGNhbnZhc0hlaWdodCB9LFxyXG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZ2FtZS9nYW1lLnRzIiwiaW1wb3J0ICogYXMgQ29uc3RhbnRzIGZyb20gJy4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgUmVnaXN0cnl9IGZyb20gJy4vcmVnaXN0cnknO1xyXG5cclxuZXhwb3J0IHsgUmVnaXN0cnkgfTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZXF1aXJlTW9kdWxlcyhyb290RGlyOiBzdHJpbmcsIGZpbGVOYW1lczogc3RyaW5nW10pIHtcclxuICAgIGZpbGVOYW1lcy5mb3JFYWNoKG5hbWUgPT4gcmVxdWlyZSgnLi8uLi8nICsgcm9vdERpciArICcvJyArIG5hbWUpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkQ2FudmFzRGltZW5zaW9ucygpOiBbbnVtYmVyLCBudW1iZXJdIHtcclxuICAgIGxldCBmaWxsU2NyZWVuID0gd2luZG93LmlubmVyV2lkdGggPCBDb25zdGFudHMuQ2FudmFzTWF4V2lkdGg7XHJcblxyXG4gICAgbGV0IGNhbnZhc1dpZHRoID0gZmlsbFNjcmVlbiA/IHdpbmRvdy5pbm5lcldpZHRoIDogQ29uc3RhbnRzLkNhbnZhc01heFdpZHRoO1xyXG4gICAgY2FudmFzV2lkdGggKz0gKGNhbnZhc1dpZHRoICUgMiA9PT0gMCkgPyAwIDogMTtcclxuXHJcbiAgICBsZXQgY2FudmFzSGVpZ2h0ID0gZmlsbFNjcmVlbiA/IHdpbmRvdy5pbm5lckhlaWdodCA6IENvbnN0YW50cy5DYW52YXNNYXhIZWlnaHQ7XHJcbiAgICBjYW52YXNIZWlnaHQgKz0gKGNhbnZhc0hlaWdodCAlIDIgPT09IDApID8gMCA6IDE7XHJcblxyXG4gICAgcmV0dXJuIFtjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0XTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9nYW1lL3V0aWwvdXRpbC50cyIsImltcG9ydCB7IEFjdG9yLCBBY3Rvckluc3RhbmNlLCBSb29tLCBWYXN0Z2FtZSB9IGZyb20gJy4vLi4vLi4vZW5naW5lL3Zhc3RnYW1lJztcclxuaW1wb3J0IHsgTGV2ZWxCZ0NvbG9yIH0gZnJvbSAnLi9lbnVtJztcclxuaW1wb3J0ICogYXMgQ29uc3RhbnRzIGZyb20gJy4vY29uc3RhbnRzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBMZXZlbEJ1aWxkZXIge1xyXG5cclxuICAgIHN0YXRpYyBwb3B1bGF0ZVJvb20ocm9vbTogUm9vbSwgcm9vbUlEOiBudW1iZXIpOiBBY3Rvckluc3RhbmNlW10ge1xyXG4gICAgICAgIGxldCBjZWxsU2l6ZSA9IENvbnN0YW50cy5HcmlkQ2VsbFNpemU7XHJcblxyXG4gICAgICAgIGxldCBCbG9jayA9IEFjdG9yLmdldCgnQmxvY2snKTtcclxuICAgICAgICBsZXQgUGxheWVyID0gQWN0b3IuZ2V0KCdQbGF5ZXInKTtcclxuICAgICAgICBsZXQgV2FsbCA9IEFjdG9yLmdldCgnV2FsbCcpO1xyXG4gICAgICAgIGxldCBXaW4gPSBBY3Rvci5nZXQoJ1dpbicpO1xyXG5cclxuICAgICAgICBsZXQgaW5zdGFuY2VzOiBBY3Rvckluc3RhbmNlW10gPSBbXTtcclxuICAgICAgICBsZXQgbGV2ZWxNYXAgPSBMZXZlbHMuZ2V0KHJvb21JRCk7XHJcblxyXG4gICAgICAgIGxldCBjb2xvckVudW1NYXAgPSB7XHJcbiAgICAgICAgICAgIDA6IFsgTGV2ZWxCZ0NvbG9yLlRlYWwsIExldmVsQmdDb2xvci5EYXJrVGVhbCBdXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gVE9ETzogcmFuZG9taXplL2N5Y2xlIGNvbG9ycyAodGFrZSBhcyBwYXJhbWV0ZXI/KVxyXG4gICAgICAgIHJvb20uc2V0QmFja2dyb3VuZChjb2xvckVudW1NYXBbMF1bMF0sIGxldmVsTWFwWzBdLmxlbmd0aCAqIGNlbGxTaXplLCBsZXZlbE1hcC5sZW5ndGggKiBjZWxsU2l6ZSwgY29sb3JFbnVtTWFwWzBdWzFdKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZXZlbE1hcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgcm93ID0gbGV2ZWxNYXBbaV07XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHJvdy5sZW5ndGg7IGorKykge1xyXG5cclxuICAgICAgICAgICAgICAgIHN3aXRjaCAocm93LmNoYXJBdChqKSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdYJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2VzLnB1c2gocm9vbS5jcmVhdGVBY3RvcihCbG9jaywgaiAqIGNlbGxTaXplLCBpICogY2VsbFNpemUpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1AnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZXMucHVzaChyb29tLmNyZWF0ZUFjdG9yKFBsYXllciwgaiAqIGNlbGxTaXplLCBpICogY2VsbFNpemUpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1cnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZXMucHVzaChyb29tLmNyZWF0ZUFjdG9yKFdpbiwgaiAqIGNlbGxTaXplLCBpICogY2VsbFNpemUpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJyMnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgd2FsbCA9IHJvb20uY3JlYXRlQWN0b3IoV2FsbCwgaiAqIGNlbGxTaXplLCBpICogY2VsbFNpemUpOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZyYW1lID0gdGhpcy5nZXRXYWxsRnJhbWUobGV2ZWxNYXAsIGksIGopO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3YWxsLnNwcml0ZUFuaW1hdGlvbi5zZXQoZnJhbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZXMucHVzaCh3YWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBpbnN0YW5jZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0V2FsbEZyYW1lKGxldmVsTWFwOiBzdHJpbmdbXSwgcm93OiBudW1iZXIsIHBvc2l0aW9uOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGxldCB3YWxsQ2hhciA9ICcjJztcclxuICAgICAgICBsZXQgbWF4WCA9IGxldmVsTWFwWzBdLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgbGV0IG1heFkgPSBsZXZlbE1hcC5sZW5ndGggLSAxO1xyXG5cclxuICAgICAgICBsZXQgdG9wRnJlZSA9IChyb3cgPiAwKSA/IGxldmVsTWFwW3JvdyAtIDFdW3Bvc2l0aW9uXSAhPT0gd2FsbENoYXIgOiBmYWxzZTtcclxuICAgICAgICBsZXQgdG9wTGVmdEZyZWUgPSAocm93ID4gMCAmJiBwb3NpdGlvbiA+IDApID8gbGV2ZWxNYXBbcm93IC0gMV1bcG9zaXRpb24gLSAxXSAhPT0gd2FsbENoYXIgOiBmYWxzZTtcclxuICAgICAgICBsZXQgdG9wUmlnaHRGcmVlID0gKHJvdyA+IDAgJiYgcG9zaXRpb24gPCBtYXhYKSA/IGxldmVsTWFwW3JvdyAtIDFdW3Bvc2l0aW9uICsgMV0gIT09IHdhbGxDaGFyIDogZmFsc2U7XHJcbiAgICAgICAgbGV0IGJvdHRvbUZyZWUgPSAocm93IDwgbWF4WSkgPyBsZXZlbE1hcFtyb3cgKyAxXVtwb3NpdGlvbl0gIT09IHdhbGxDaGFyIDogZmFsc2U7XHJcbiAgICAgICAgbGV0IGJvdHRvbUxlZnRGcmVlID0gKHJvdyA8IG1heFkgJiYgcG9zaXRpb24gPiAwKSA/IGxldmVsTWFwW3JvdyArIDFdW3Bvc2l0aW9uIC0gMV0gIT09IHdhbGxDaGFyIDogZmFsc2U7XHJcbiAgICAgICAgbGV0IGJvdHRvbVJpZ2h0RnJlZSA9IChyb3cgPCBtYXhZICYmIHBvc2l0aW9uIDwgbWF4WCkgPyBsZXZlbE1hcFtyb3cgKyAxXVtwb3NpdGlvbiArIDFdICE9PSB3YWxsQ2hhciA6IGZhbHNlO1xyXG4gICAgICAgIGxldCBsZWZ0RnJlZSA9IChwb3NpdGlvbiA+IDApID8gbGV2ZWxNYXBbcm93XVtwb3NpdGlvbiAtIDFdICE9PSB3YWxsQ2hhciA6IGZhbHNlO1xyXG4gICAgICAgIGxldCByaWdodEZyZWUgPSAocG9zaXRpb24gPCBtYXhYKSA/IGxldmVsTWFwW3Jvd11bcG9zaXRpb24gKyAxXSAhPT0gd2FsbENoYXIgOiBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKCF0b3BGcmVlKSB7XHJcbiAgICAgICAgICAgIGlmICghbGVmdEZyZWUpIHtcclxuICAgICAgICAgICAgICAgIGlmICghcmlnaHRGcmVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFib3R0b21GcmVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdG9wTGVmdEZyZWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdG9wUmlnaHRGcmVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFib3R0b21MZWZ0RnJlZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gIWJvdHRvbVJpZ2h0RnJlZSA/IFdhbGxTdHlsZS5Jbm5lciA6IFdhbGxTdHlsZS5Jbm5lckNvcm5lclRvcExlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhYm90dG9tUmlnaHRGcmVlID8gV2FsbFN0eWxlLklubmVyQ29ybmVyVG9wUmlnaHQgOiBXYWxsU3R5bGUuVGhyZWV3YXlCb3R0b207XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWJvdHRvbUxlZnRGcmVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICFib3R0b21SaWdodEZyZWUgPyBXYWxsU3R5bGUuSW5uZXJDb3JuZXJCb3R0b21MZWZ0IDogV2FsbFN0eWxlLlRocmVld2F5UmlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0b3BSaWdodEZyZWUgJiYgIWJvdHRvbVJpZ2h0RnJlZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICFib3R0b21MZWZ0RnJlZSA/IFdhbGxTdHlsZS5Jbm5lckNvcm5lckJvdHRvbVJpZ2h0IDogV2FsbFN0eWxlLlRocmVld2F5TGVmdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gIWJvdHRvbUxlZnRGcmVlICYmICFib3R0b21SaWdodEZyZWUgPyBXYWxsU3R5bGUuVGhyZWV3YXlUb3AgOiBXYWxsU3R5bGUuRm91cndheTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICF0b3BMZWZ0RnJlZSAmJiAhdG9wUmlnaHRGcmVlID8gV2FsbFN0eWxlLkZsYXRUb3AgOiBXYWxsU3R5bGUuVGhyZWV3YXlOYXJyb3dUb3A7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoIWJvdHRvbUZyZWUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gIXRvcExlZnRGcmVlICYmICFib3R0b21MZWZ0RnJlZSA/IFdhbGxTdHlsZS5GbGF0TGVmdCA6IFdhbGxTdHlsZS5UaHJlZXdheU5hcnJvd0xlZnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRvcExlZnRGcmVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFdhbGxTdHlsZS5PdXRlckNvcm5lckJvdHRvbVJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghcmlnaHRGcmVlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWJvdHRvbUZyZWUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gIXRvcFJpZ2h0RnJlZSAmJiAhYm90dG9tUmlnaHRGcmVlID8gV2FsbFN0eWxlLkZsYXRSaWdodCA6IFdhbGxTdHlsZS5UaHJlZXdheU5hcnJvd1JpZ2h0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCF0b3BSaWdodEZyZWUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gV2FsbFN0eWxlLk91dGVyQ29ybmVyQm90dG9tTGVmdDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gIWJvdHRvbUZyZWUgPyBXYWxsU3R5bGUuTmFycm93VmVydGljYWwgOiBXYWxsU3R5bGUuQ2FwcGVkQm90dG9tO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWxlZnRGcmVlKSB7XHJcbiAgICAgICAgICAgIGlmICghcmlnaHRGcmVlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWJvdHRvbUZyZWUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gIWJvdHRvbUxlZnRGcmVlICYmICFib3R0b21SaWdodEZyZWUgPyBXYWxsU3R5bGUuRmxhdEJvdHRvbSA6IFdhbGxTdHlsZS5UaHJlZXdheU5hcnJvd0JvdHRvbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBXYWxsU3R5bGUuTmFycm93SG9yaXpvbnRhbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gIWJvdHRvbUxlZnRGcmVlICYmICFib3R0b21GcmVlID8gV2FsbFN0eWxlLk91dGVyQ29ybmVyVG9wUmlnaHQgOiBXYWxsU3R5bGUuQ2FwcGVkUmlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghcmlnaHRGcmVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAhYm90dG9tUmlnaHRGcmVlICYmICFib3R0b21GcmVlID8gV2FsbFN0eWxlLk91dGVyQ29ybmVyVG9wTGVmdCA6IFdhbGxTdHlsZS5DYXBwZWRMZWZ0O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gIWJvdHRvbUZyZWUgPyBXYWxsU3R5bGUuQ2FwcGVkVG9wIDogV2FsbFN0eWxlLlNvbG87XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBMZXZlbHMge1xyXG5cclxuICAgIHN0YXRpYyBnZXQgY291bnQoKTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgYyA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgcCBpbiB0aGlzLmxldmVscykge1xyXG4gICAgICAgICAgICBjKys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBsZXZlbHM6IHsgW2lkOiBudW1iZXJdOiBzdHJpbmdbXSB9ID0ge1xyXG4gICAgICAgIDE6IFtcclxuICAgICAgICAgICAgJyMjIyMjIyMjIyMjIyMjIyMjIycsXHJcbiAgICAgICAgICAgICcjICAgICAgICAgICAgICAgICMnLFxyXG4gICAgICAgICAgICAnIyAgICAgICAjIyAgICAgICAjJyxcclxuICAgICAgICAgICAgJyMgICAgICAgIyMgICAgICAgIycsXHJcbiAgICAgICAgICAgICcjWFcgICAgICAgICAgICAgICMnLFxyXG4gICAgICAgICAgICAnIyMjIyMgICAgICAgICAgIFgjJyxcclxuICAgICAgICAgICAgJyMjIyMjIyMgICAgICAgUCMjIycsXHJcbiAgICAgICAgICAgICcjIyMjIyMjIyMjICAgICMjIyMnLFxyXG4gICAgICAgICAgICAnIyMjIyMjIyMjIyAgIyMjIyMjJyxcclxuICAgICAgICAgICAgJyMjIyMjIyMjIyMjIyMjIyMjIycsXHJcbiAgICAgICAgXSxcclxuICAgICAgICAyOiBbXHJcbiAgICAgICAgICAgICcjIyMjIyMjIyMjIyMjIyMjIyMnLFxyXG4gICAgICAgICAgICAnIyAgICAjICAgICAgIyAgICAjJyxcclxuICAgICAgICAgICAgJyMgICAjIyAgICMgICMjICAgIycsXHJcbiAgICAgICAgICAgICcjUCAgICMgICAgICAjICAgICMnLFxyXG4gICAgICAgICAgICAnIyMgICAgICAgIyAgICAgICAjJyxcclxuICAgICAgICAgICAgJyNXICAgICAgIyMjICAjIyMjIycsXHJcbiAgICAgICAgICAgICcjIyMjICAgICAjICAgICAgICMnLFxyXG4gICAgICAgICAgICAnIyAgICAgICAgICAgICAgICAjJyxcclxuICAgICAgICAgICAgJyMgWFggWCAgIyAgICBYWFdYIycsXHJcbiAgICAgICAgICAgICcjIyMjIyMjIyMjIyMjIyMjIyMnLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgMzogW1xyXG4gICAgICAgICAgICAnIyMjIyMjIyMjIyMjIyMjIyMjJyxcclxuICAgICAgICAgICAgJyMgICAgICAgICAgICAgICAgIycsXHJcbiAgICAgICAgICAgICcjICAgICAgICAgICAgICAgICMnLFxyXG4gICAgICAgICAgICAnIyAgICAgICAgICAgICAgICAjJyxcclxuICAgICAgICAgICAgJyMgICAgICAgICAgICAgICAgIycsXHJcbiAgICAgICAgICAgICcjICAgICAgICAgICAgICAgICMnLFxyXG4gICAgICAgICAgICAnIyBXICAgICAgICMgICAgICAjJyxcclxuICAgICAgICAgICAgJyMgWFhYICAgICAgIyAgICAgIycsXHJcbiAgICAgICAgICAgICcjIFhYWFggIFAgIyAjICBYWCMnLFxyXG4gICAgICAgICAgICAnIyMjIyMjIyMjIyMjIyMjIyMjJyxcclxuICAgICAgICBdLFxyXG4gICAgICAgIDQ6IFtcclxuICAgICAgICAgICAgJyMjIyMjIyMjIyMjIyMjIyMjIycsXHJcbiAgICAgICAgICAgICcjICAgICAgICAgICAgICAgICMnLFxyXG4gICAgICAgICAgICAnIyAgICMgICAgICAgICAgICAjJyxcclxuICAgICAgICAgICAgJyMgICAgICAgICAjICAgICAgIycsXHJcbiAgICAgICAgICAgICcjICAgICMgICAgICAgICAgICMnLFxyXG4gICAgICAgICAgICAnIyAgIyAgICAgICAgIFhYICAjJyxcclxuICAgICAgICAgICAgJyMgICAgICAgICAgIFhYWFhYIycsXHJcbiAgICAgICAgICAgICcjICAgICAgICAgIFhYWFhYWCMnLFxyXG4gICAgICAgICAgICAnIyAgUCAgICBYWFhYWFhYWFgjJyxcclxuICAgICAgICAgICAgJyMjIyMjIyMjIyMjIyMjIyMjIycsXHJcbiAgICAgICAgXSwgNTogW10sIDY6IFtdLCA3OiBbXSwgODogW10sIDk6IFtdLCAxMDogW10sIDExOiBbXSwgMTI6IFtdLCAxMzogW10sIDE0OiBbXSwgMTU6IFtdLCAxNjogW10sIDE3OiBbXSwgMTg6IFtdLCBcclxuICAgICAgICAxOTogW10sIDIwOiBbXSwgMjE6IFtdLCAyMjogW10sIDIzOiBbXSwgMjQ6IFtdLCAyNTogW10sIDI2OiBbXSwgMjc6IFtdLCAyODogW10sIDI5OiBbXSwgMzA6IFtdLCAzMTogW10sMzI6IFtdLCAgXHJcbiAgICB9O1xyXG5cclxuICAgIHN0YXRpYyBnZXQobGV2ZWxOdW1iZXI6IG51bWJlcik6IHN0cmluZ1tdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5sZXZlbHNbbGV2ZWxOdW1iZXJdO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBlbnVtIHZhbHVlcyBjb3JyZXNwb25kIHRvIHNwcml0ZSBzaGVldCBmcmFtZXNcclxuZW51bSBXYWxsU3R5bGUge1xyXG4gICAgSW5uZXJDb3JuZXJUb3BMZWZ0ID0gMCxcclxuICAgIEZsYXRUb3AgPSAxLFxyXG4gICAgSW5uZXJDb3JuZXJUb3BSaWdodCA9IDIsXHJcbiAgICBPdXRlckNvcm5lclRvcExlZnQgPSAzLFxyXG4gICAgT3V0ZXJDb3JuZXJCb3R0b21MZWZ0ID0gNCxcclxuICAgIEZsYXRMZWZ0ID0gNSxcclxuICAgIElubmVyID0gNixcclxuICAgIEZsYXRSaWdodCA9IDcsXHJcbiAgICBPdXRlckNvcm5lclRvcFJpZ2h0ID0gOCxcclxuICAgIElubmVyQ29ybmVyQm90dG9tTGVmdCA9IDksXHJcbiAgICBGbGF0Qm90dG9tID0gMTAsXHJcbiAgICBJbm5lckNvcm5lckJvdHRvbVJpZ2h0ID0gMTEsXHJcbiAgICBPdXRlckNvcm5lckJvdHRvbVJpZ2h0ID0gMTIsXHJcbiAgICBOYXJyb3dIb3Jpem9udGFsID0gMTMsXHJcbiAgICBOYXJyb3dWZXJ0aWNhbCA9IDE0LFxyXG4gICAgQ2FwcGVkTGVmdCA9IDE1LFxyXG4gICAgQ2FwcGVkVG9wID0gMTYsXHJcbiAgICBDYXBwZWRSaWdodCA9IDE3LFxyXG4gICAgQ2FwcGVkQm90dG9tID0gMTgsXHJcbiAgICBUaHJlZXdheU5hcnJvd1RvcCA9IDE5LFxyXG4gICAgVGhyZWV3YXlOYXJyb3dSaWdodCA9IDIwLFxyXG4gICAgVGhyZWV3YXlOYXJyb3dCb3R0b20gPSAyMSxcclxuICAgIFRocmVld2F5TmFycm93TGVmdCA9IDIyLFxyXG4gICAgRm91cndheSA9IDIzLFxyXG4gICAgU29sbyA9IDI0LFxyXG4gICAgVGhyZWV3YXlUb3AgPSAyNSxcclxuICAgIFRocmVld2F5UmlnaHQgPSAyNixcclxuICAgIFRocmVld2F5Qm90dG9tID0gMjcsXHJcbiAgICBUaHJlZXdheUxlZnQgPSAyOCxcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9nYW1lL3V0aWwvbGV2ZWwtYnVpbGRlci50cyIsImltcG9ydCB7IEFjdG9yLCBCb3VuZGFyeSwgRW51bSwgR3JpZENlbGwsIFJvb20sIFNwcml0ZSB9IGZyb20gJy4vLi4vLi4vZW5naW5lL3Zhc3RnYW1lJztcclxuaW1wb3J0ICogYXMgQ29uc3RhbnRzIGZyb20gJy4vLi4vdXRpbC9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBBY3RvcklELCBHYW1lQWN0aW9uLCBTcHJpdGVJRCB9IGZyb20gJy4vLi4vdXRpbC9lbnVtJztcclxuXHJcbmxldCBCbG9ja1Nwcml0ZSA9IFNwcml0ZS5kZWZpbmUoU3ByaXRlSUQuQm94LCB7XHJcbiAgICBpbWFnZVNvdXJjZTogJy4uL3Jlc291cmNlcy9ib3gucG5nJyxcclxuICAgIGhlaWdodDogQ29uc3RhbnRzLkdyaWRDZWxsU2l6ZSxcclxuICAgIHdpZHRoOiBDb25zdGFudHMuR3JpZENlbGxTaXplLFxyXG59KTtcclxuXHJcbmxldCBCbG9jayA9IEFjdG9yLmRlZmluZShBY3RvcklELkJsb2NrLCB7XHJcbiAgICBib3VuZGFyeTogQm91bmRhcnkuZnJvbVNwcml0ZShCbG9ja1Nwcml0ZSksXHJcbiAgICBzcHJpdGU6IEJsb2NrU3ByaXRlLFxyXG59KTtcclxuXHJcbi8vIEZhbGxpbmdcclxuQmxvY2sub25FdmVudChHYW1lQWN0aW9uLkZhbGwsIChibG9jaywgYXJncykgPT4ge1xyXG4gICAgbGV0IHJvb206IFJvb20gPSBhcmdzLmdhbWUuY3VycmVudFJvb207XHJcblxyXG4gICAgaWYgKCFyb29tLmlzUG9zaXRpb25GcmVlKGJsb2NrLnggKyAxLCBibG9jay55ICsgQ29uc3RhbnRzLkdyaWRDZWxsU2l6ZSArIDEpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBzdGFydFkgPSBibG9jay55O1xyXG4gICAgbGV0IHN0b3BDb25kaXRpb24gPSAoKTogYm9vbGVhbiA9PiAgTWF0aC5hYnMoc3RhcnRZIC0gYmxvY2sueSkgPj0gQ29uc3RhbnRzLkdyaWRDZWxsU2l6ZTtcclxuXHJcbiAgICAvLyBtb3ZlIHRoZSB0YXJnZXQgY2VsbCB0byB0aGUgb25lIGJlbG93IHRoZSBwcmV2aW91cyB0YXJnZXQgY2VsbFxyXG4gICAgYXJncy50YXJnZXRDZWxsID0gYXJncy50YXJnZXRDZWxsLmdldEFkamFjZW50Q2VsbChFbnVtLkRpcmVjdGlvbi5Eb3duKTtcclxuXHJcbiAgICBibG9jay5tb3ZlKENvbnN0YW50cy5CbG9ja0ZhbGxTcGVlZCwgRW51bS5EaXJlY3Rpb24uRG93bik7XHJcbiAgICBibG9jay5yYWlzZUV2ZW50V2hlbihHYW1lQWN0aW9uLlN0b3AsIHN0b3BDb25kaXRpb24sIGFyZ3MpO1xyXG59KVxyXG5cclxuLy8gU3RvcHBpbmdcclxuQmxvY2sub25FdmVudChHYW1lQWN0aW9uLlN0b3AsIChibG9jaywgYXJncykgPT4ge1xyXG4gICAgbGV0IHJvb206IFJvb20gPSBhcmdzLmdhbWUuY3VycmVudFJvb207XHJcbiAgICBsZXQgdGFyZ2V0Q2VsbDogR3JpZENlbGwgPSBhcmdzLnRhcmdldENlbGw7XHJcblxyXG4gICAgLy8gc25hcCB0byB0aGUgZ3JpZFxyXG4gICAgYmxvY2subW92ZSgwKTtcclxuICAgIGJsb2NrLnNldFBvc2l0aW9uKHRhcmdldENlbGwueCwgdGFyZ2V0Q2VsbC55KTtcclxuXHJcbiAgICAvLyBjaGVjayBpZiBmYWxsaW5nXHJcbiAgICBpZiAocm9vbS5pc1Bvc2l0aW9uRnJlZShibG9jay54ICsgMSwgYmxvY2sueSArIENvbnN0YW50cy5HcmlkQ2VsbFNpemUgKyAxKSkge1xyXG4gICAgICAgIGJsb2NrLnJhaXNlRXZlbnQoR2FtZUFjdGlvbi5GYWxsLCBhcmdzKTtcclxuICAgIH1cclxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2dhbWUvYWN0b3JzL2Jsb2NrLnRzIiwiaW1wb3J0IHsgQWN0b3IsIEJvdW5kYXJ5LCBHcmlkQ2VsbCwgUm9vbSwgU3ByaXRlLCBWYXN0Z2FtZSB9IGZyb20gJy4vLi4vLi4vZW5naW5lL3Zhc3RnYW1lJztcclxuaW1wb3J0ICogYXMgQ29uc3RhbnRzIGZyb20gJy4vLi4vdXRpbC9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBBY3RvcklELCBTcHJpdGVJRCwgUm9vbUlEIH0gZnJvbSAnLi8uLi91dGlsL2VudW0nO1xyXG5cclxubGV0IFhTcHJpdGUgPSBTcHJpdGUuZGVmaW5lKFNwcml0ZUlELlgsIHtcclxuICAgIGltYWdlU291cmNlOiAnLi4vcmVzb3VyY2VzL3gucG5nJyxcclxuICAgIGhlaWdodDogQ29uc3RhbnRzLkdyaWRDZWxsU2l6ZSxcclxuICAgIHdpZHRoOiBDb25zdGFudHMuR3JpZENlbGxTaXplLFxyXG59KTtcclxuXHJcbmxldCBFeGl0QnV0dG9uID0gQWN0b3IuZGVmaW5lKEFjdG9ySUQuRXhpdEJ1dHRvbiwge1xyXG4gICAgYm91bmRhcnk6IEJvdW5kYXJ5LmZyb21TcHJpdGUoWFNwcml0ZSksXHJcbiAgICBzcHJpdGU6IFhTcHJpdGUsXHJcbn0pO1xyXG5cclxuRXhpdEJ1dHRvbi5vbkNsaWNrKCgpID0+IFZhc3RnYW1lLnNldFJvb20oUm9vbUlELkxldmVsU2VsZWN0KSk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9nYW1lL2FjdG9ycy9odWQudHMiLCJpbXBvcnQgeyBBY3RvciwgQWN0b3JJbnN0YW5jZSwgQm91bmRhcnksIEVudW0sIElucHV0LCBHcmlkQ2VsbCwgUm9vbSwgU3ByaXRlIH0gZnJvbSAnLi8uLi8uLi9lbmdpbmUvdmFzdGdhbWUnO1xyXG5pbXBvcnQgKiBhcyBDb25zdGFudHMgZnJvbSAnLi8uLi91dGlsL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IEFjdG9ySUQsIEdhbWVBY3Rpb24sIFNwcml0ZUlEIH0gZnJvbSAnLi8uLi91dGlsL2VudW0nO1xyXG5cclxubGV0IEJvdFNwcml0ZSA9IFNwcml0ZS5kZWZpbmUoU3ByaXRlSUQuU3RhY2ttb1NoZWV0LCB7XHJcbiAgICBpbWFnZVNvdXJjZTogJy4uL3Jlc291cmNlcy9zdGFja21vX3NoZWV0LnBuZycsXHJcbiAgICBoZWlnaHQ6IENvbnN0YW50cy5HcmlkQ2VsbFNpemUsXHJcbiAgICB3aWR0aDogQ29uc3RhbnRzLkdyaWRDZWxsU2l6ZSxcclxuICAgIGZyYW1lQm9yZGVyOiA0LFxyXG59KTtcclxuXHJcbmxldCBQbGF5ZXIgPSBBY3Rvci5kZWZpbmUoQWN0b3JJRC5QbGF5ZXIsIHtcclxuICAgIGJvdW5kYXJ5OiBCb3VuZGFyeS5mcm9tU3ByaXRlKEJvdFNwcml0ZSksXHJcbiAgICBzcHJpdGU6IEJvdFNwcml0ZSxcclxufSk7XHJcblxyXG5sZXQgaGVsZEJsb2NrOiBBY3Rvckluc3RhbmNlO1xyXG5sZXQgbGFzdERpcmVjdGlvbjogRW51bS5EaXJlY3Rpb24gPSBFbnVtLkRpcmVjdGlvbi5SaWdodDtcclxuXHJcblBsYXllci5vbkNyZWF0ZShzZWxmID0+IHtcclxuICAgIHNlbGYuYW5pbWF0aW9uLmRlcHRoID0gLTUwO1xyXG4gICAgaGVsZEJsb2NrID0gbnVsbDtcclxufSk7XHJcblxyXG5QbGF5ZXIub25TdGVwKHNlbGYgPT4ge1xyXG5cclxuICAgIGlmIChoZWxkQmxvY2spIHtcclxuICAgICAgICBoZWxkQmxvY2suc2V0UG9zaXRpb24oc2VsZi54LCBzZWxmLnkgLSBDb25zdGFudHMuR3JpZENlbGxTaXplKTtcclxuICAgIH1cclxufSk7XHJcblxyXG4vLyBNb3ZpbmdcclxuUGxheWVyLm9uRXZlbnQoR2FtZUFjdGlvbi5Nb3ZlLCAocGxheWVyLCBhcmdzKSA9PiB7XHJcbiAgICBsZXQgdGFyZ2V0Q2VsbDogR3JpZENlbGwgPSBhcmdzLnRhcmdldENlbGw7XHJcbiAgICBsZXQgZGlyZWN0aW9uOiBFbnVtLkRpcmVjdGlvbiA9IGFyZ3MuZGlyZWN0aW9uO1xyXG4gICAgbGV0IHN0YXJ0WCA9IHBsYXllci54O1xyXG5cclxuICAgIGxldCBzdG9wQ29uZGl0aW9uID0gKCk6IGJvb2xlYW4gPT4ge1xyXG4gICAgICAgIHJldHVybiBNYXRoLmFicyhzdGFydFggLSBwbGF5ZXIueCkgPj0gQ29uc3RhbnRzLkdyaWRDZWxsU2l6ZTtcclxuICAgIH07XHJcblxyXG4gICAgbGFzdERpcmVjdGlvbiA9IGRpcmVjdGlvbjtcclxuXHJcbiAgICAvLyBjbGVhcmFuY2UgY2hlY2tcclxuICAgIGlmICghaGVsZEJsb2NrIHx8IChoZWxkQmxvY2sgJiYgdGFyZ2V0Q2VsbC5nZXRBZGphY2VudENlbGwoRW51bS5EaXJlY3Rpb24uVXApLmlzRnJlZSgpKSkge1xyXG4gICAgICAgIHBsYXllci5tb3ZlKENvbnN0YW50cy5QbGF5ZXJNb3ZlU3BlZWQsIGRpcmVjdGlvbik7XHJcbiAgICAgICAgcGxheWVyLnJhaXNlRXZlbnRXaGVuKEdhbWVBY3Rpb24uQ2hlY2tTdG9wTW92aW5nLCBzdG9wQ29uZGl0aW9uLCBhcmdzKTtcclxuICAgIFxyXG4gICAgICAgIGFuaW1hdGUocGxheWVyLCBkaXJlY3Rpb24sIHRydWUpO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbi8vIFN0b3AgbW92aW5nIG9yIGNvbnRpbnVlXHJcblBsYXllci5vbkV2ZW50KEdhbWVBY3Rpb24uQ2hlY2tTdG9wTW92aW5nLCAocGxheWVyLCBhcmdzKSA9PiB7XHJcbiAgICBsZXQgdGFyZ2V0Q2VsbDogR3JpZENlbGwgPSBhcmdzLnRhcmdldENlbGw7XHJcbiAgICBsZXQgYWN0aW9uID0gR2FtZUFjdGlvbi5TdG9wO1xyXG5cclxuICAgIC8vIHNuYXAgdG8gdGhlIGdyaWRcclxuICAgIHBsYXllci5tb3ZlKDApO1xyXG4gICAgcGxheWVyLnNldFBvc2l0aW9uKHRhcmdldENlbGwueCwgdGFyZ2V0Q2VsbC55KTtcclxuXHJcbiAgICBpZiAoSW5wdXQuY2xpY2tBY3RpdmUgfHwgSW5wdXQua2V5RG93bihsYXN0RGlyZWN0aW9uID09PSBFbnVtLkRpcmVjdGlvbi5MZWZ0ID8gRW51bS5LZXkuTGVmdCA6IEVudW0uS2V5LlJpZ2h0KSkge1xyXG4gICAgICAgIGxldCBuZXh0Q2VsbCA9IHRhcmdldENlbGwuZ2V0QWRqYWNlbnRDZWxsKGxhc3REaXJlY3Rpb24pO1xyXG4gICAgICAgIGxldCBiZWxvd0NlbGwgPSB0YXJnZXRDZWxsLmdldEFkamFjZW50Q2VsbChFbnVtLkRpcmVjdGlvbi5Eb3duKTtcclxuXHJcbiAgICAgICAgaWYgKG5leHRDZWxsLmlzRnJlZSgpICYmICFiZWxvd0NlbGwuaXNGcmVlKCkpIHtcclxuICAgICAgICAgICAgYXJncy50YXJnZXRDZWxsID0gbmV4dENlbGw7XHJcbiAgICAgICAgICAgIGFjdGlvbiA9IEdhbWVBY3Rpb24uTW92ZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwbGF5ZXIucmFpc2VFdmVudChhY3Rpb24sIGFyZ3MpO1xyXG59KTtcclxuXHJcbi8vIEZhbGxpbmdcclxuUGxheWVyLm9uRXZlbnQoR2FtZUFjdGlvbi5GYWxsLCAocGxheWVyLCBhcmdzKSA9PiB7XHJcbiAgICBsZXQgc3RhcnRZID0gcGxheWVyLnk7XHJcbiAgICBsZXQgZGlyZWN0aW9uOiBFbnVtLkRpcmVjdGlvbiA9IGFyZ3MuZGlyZWN0aW9uO1xyXG4gICAgbGV0IHN0b3BDb25kaXRpb24gPSAoKTogYm9vbGVhbiA9PiAgTWF0aC5hYnMoc3RhcnRZIC0gcGxheWVyLnkpID49IENvbnN0YW50cy5HcmlkQ2VsbFNpemU7XHJcblxyXG4gICAgLy8gbW92ZSB0aGUgdGFyZ2V0IGNlbGwgdG8gdGhlIG9uZSBiZWxvdyB0aGUgcHJldmlvdXMgdGFyZ2V0IGNlbGxcclxuICAgIGFyZ3MudGFyZ2V0Q2VsbCA9IGFyZ3MudGFyZ2V0Q2VsbC5nZXRBZGphY2VudENlbGwoRW51bS5EaXJlY3Rpb24uRG93bik7XHJcblxyXG4gICAgcGxheWVyLm1vdmUoQ29uc3RhbnRzLlBsYXllckZhbGxTcGVlZCwgRW51bS5EaXJlY3Rpb24uRG93bik7XHJcbiAgICBwbGF5ZXIucmFpc2VFdmVudFdoZW4oR2FtZUFjdGlvbi5TdG9wLCBzdG9wQ29uZGl0aW9uLCBhcmdzKTtcclxuXHJcbiAgICBhbmltYXRlKHBsYXllciwgZGlyZWN0aW9uLCBmYWxzZSk7XHJcbn0pXHJcblxyXG4vLyBTdG9wcGluZ1xyXG5QbGF5ZXIub25FdmVudChHYW1lQWN0aW9uLlN0b3AsIChwbGF5ZXIsIGFyZ3MpID0+IHtcclxuICAgIGxldCByb29tOiBSb29tID0gYXJncy5nYW1lLmN1cnJlbnRSb29tO1xyXG4gICAgbGV0IHRhcmdldENlbGw6IEdyaWRDZWxsID0gYXJncy50YXJnZXRDZWxsO1xyXG5cclxuICAgIC8vIHNuYXAgdG8gdGhlIGdyaWRcclxuICAgIHBsYXllci5tb3ZlKDApO1xyXG4gICAgcGxheWVyLnNldFBvc2l0aW9uKHRhcmdldENlbGwueCwgdGFyZ2V0Q2VsbC55KTtcclxuXHJcbiAgICAvLyBjaGVjayBpZiBmYWxsaW5nXHJcbiAgICBpZiAocm9vbS5pc1Bvc2l0aW9uRnJlZShwbGF5ZXIueCArIDEsIHBsYXllci55ICsgQ29uc3RhbnRzLkdyaWRDZWxsU2l6ZSArIDEpKSB7XHJcbiAgICAgICAgcGxheWVyLnJhaXNlRXZlbnQoR2FtZUFjdGlvbi5GYWxsLCBhcmdzKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGFuaW1hdGUocGxheWVyLCBsYXN0RGlyZWN0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjaGVjayBmb3IgdmljdG9yeVxyXG4gICAgbGV0IFdpbkFjdG9yID0gQWN0b3IuZ2V0KEFjdG9ySUQuV2luKTtcclxuICAgIGlmICh0YXJnZXRDZWxsLmNvbnRhaW5zSW5zdGFuY2VPZihXaW5BY3RvcikpIHtcclxuICAgICAgICBsZXQgd2luID0gcm9vbS5nZXRJbnN0YW5jZXMoKS5maW5kKGFjdG9ySW5zdGFuY2UgPT4gYWN0b3JJbnN0YW5jZS5wYXJlbnQgPT09IFdpbkFjdG9yKTtcclxuICAgICAgICB3aW4ucmFpc2VFdmVudChHYW1lQWN0aW9uLldpbik7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuLy8gSnVtcGluZ1xyXG5QbGF5ZXIub25FdmVudChHYW1lQWN0aW9uLkp1bXAsIChwbGF5ZXIsIGFyZ3MpID0+IHtcclxuICAgIGxldCB0YXJnZXRDZWxsOiBHcmlkQ2VsbCA9IGFyZ3MudGFyZ2V0Q2VsbDtcclxuICAgIGxldCBkaXJlY3Rpb246IEVudW0uRGlyZWN0aW9uID0gYXJncy5kaXJlY3Rpb247XHJcbiAgICBsZXQgc3RhcnRZID0gcGxheWVyLnk7XHJcblxyXG4gICAgLy8gY2xlYXJhbmNlIGNoZWNrXHJcbiAgICBsZXQgY2VsbEFib3ZlUGxheWVyID0gdGFyZ2V0Q2VsbC5nZXRBZGphY2VudENlbGwoZGlyZWN0aW9uID09PSBFbnVtLkRpcmVjdGlvbi5SaWdodCA/IEVudW0uRGlyZWN0aW9uLkxlZnQgOiBFbnVtLkRpcmVjdGlvbi5SaWdodCk7XHJcbiAgICBsZXQgY2VsbEFib3ZlQm94ID0gISFoZWxkQmxvY2sgPyBjZWxsQWJvdmVQbGF5ZXIuZ2V0QWRqYWNlbnRDZWxsKEVudW0uRGlyZWN0aW9uLlVwKSA6IG51bGw7XHJcblxyXG4gICAgbGV0IGNhbkp1bXAgPSAhIWNlbGxBYm92ZUJveCBcclxuICAgICAgICA/IGNlbGxBYm92ZUJveC5pc0ZyZWUoKSAmJiBjZWxsQWJvdmVCb3guZ2V0QWRqYWNlbnRDZWxsKGRpcmVjdGlvbikuaXNGcmVlKClcclxuICAgICAgICA6IGNlbGxBYm92ZVBsYXllci5pc0ZyZWUoKSA7XHJcblxyXG4gICAgaWYgKGNhbkp1bXApIHtcclxuICAgICAgICAvLyBzdG9wIGFmdGVyIG1vdmluZyB1cCBvbmUgc3BhY2VcclxuICAgICAgICBsZXQgc3RvcENvbmRpdGlvbiA9ICgpOiBib29sZWFuID0+IE1hdGguYWJzKHN0YXJ0WSAtIHBsYXllci55KSA+PSBDb25zdGFudHMuR3JpZENlbGxTaXplO1xyXG4gICAgICAgIHBsYXllci5tb3ZlKENvbnN0YW50cy5QbGF5ZXJKdW1wU3BlZWQsIEVudW0uRGlyZWN0aW9uLlVwKTtcclxuICAgICAgICBwbGF5ZXIucmFpc2VFdmVudFdoZW4oR2FtZUFjdGlvbi5Nb3ZlLCBzdG9wQ29uZGl0aW9uLCBhcmdzKTtcclxuICAgIH1cclxufSk7XHJcblxyXG4vLyBMaWZ0aW5nXHJcblBsYXllci5vbkV2ZW50KEdhbWVBY3Rpb24uTGlmdCwgKHBsYXllciwgYXJncykgPT4ge1xyXG4gICAgbGV0IGJsb2NrOiBBY3Rvckluc3RhbmNlID0gYXJncy5ibG9jaztcclxuICAgIGxldCB0YXJnZXRDZWxsOiBHcmlkQ2VsbCA9IGFyZ3MudGFyZ2V0Q2VsbDtcclxuXHJcbiAgICBsZXQgdmFsaWRCbG9ja0xpZnRDZWxsID0gbGFzdERpcmVjdGlvbiA9PT0gRW51bS5EaXJlY3Rpb24uTGVmdCA/IEVudW0uRGlyZWN0aW9uLlJpZ2h0IDogRW51bS5EaXJlY3Rpb24uTGVmdDtcclxuXHJcbiAgICAvLyBwcmV2ZW50IGxpZnRpbmcgaWYgdGhlcmUncyBzb21ldGhpbmcgb24gdG9wIG9mIHRoZSBib3ggb3Igb24gdG9wIG9mIHRoZSBwbGF5ZXJcclxuICAgIGxldCBhYm92ZUJveENlbGwgPSB0YXJnZXRDZWxsLmdldEFkamFjZW50Q2VsbChFbnVtLkRpcmVjdGlvbi5VcCk7XHJcbiAgICBsZXQgYWJvdmVQbGF5ZXJDZWxsID0gYWJvdmVCb3hDZWxsLmdldEFkamFjZW50Q2VsbCh2YWxpZEJsb2NrTGlmdENlbGwpO1xyXG5cclxuICAgIGlmICghaGVsZEJsb2NrICYmICEoYWJvdmVCb3hDZWxsLmlzRnJlZSgpICYmIGFib3ZlUGxheWVyQ2VsbC5pc0ZyZWUoKSkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmIChoZWxkQmxvY2sgJiYgYmxvY2sgPT09IGhlbGRCbG9jaykge1xyXG4gICAgICAgIHBsYXllci5yYWlzZUV2ZW50KEdhbWVBY3Rpb24uRHJvcCwgYXJncyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICghaGVsZEJsb2NrICYmIHRhcmdldENlbGwuZ2V0QWRqYWNlbnRDZWxsKHZhbGlkQmxvY2tMaWZ0Q2VsbCkuY29udGFpbnNJbnN0YW5jZShwbGF5ZXIpKSB7XHJcbiAgICAgICAgaGVsZEJsb2NrID0gYmxvY2s7XHJcbiAgICAgICAgYW5pbWF0ZShwbGF5ZXIsIGxhc3REaXJlY3Rpb24pO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbi8vIERyb3BcclxuUGxheWVyLm9uRXZlbnQoR2FtZUFjdGlvbi5Ecm9wLCAocGxheWVyLCBhcmdzKSA9PiB7XHJcbiAgICBsZXQgYmxvY2s6IEFjdG9ySW5zdGFuY2UgPSBhcmdzLmJsb2NrO1xyXG4gICAgbGV0IHRhcmdldENlbGw6IEdyaWRDZWxsID0gYXJncy50YXJnZXRDZWxsO1xyXG4gICAgbGV0IG9mZnNldFggPSBsYXN0RGlyZWN0aW9uID09PSBFbnVtLkRpcmVjdGlvbi5MZWZ0ID8gLUNvbnN0YW50cy5HcmlkQ2VsbFNpemUgOiBDb25zdGFudHMuR3JpZENlbGxTaXplO1xyXG5cclxuICAgIC8vIHByZXZlbnQgZHJvcHBpbmcgaWYgdGhlcmUncyBzb21ldGhpbmcgaW4gdGhlIHdheSBvZiB0aGUgYm94XHJcbiAgICBpZiAodGFyZ2V0Q2VsbC5nZXRBZGphY2VudENlbGwobGFzdERpcmVjdGlvbikuaXNGcmVlKCkpIHtcclxuICAgICAgICBhcmdzLnRhcmdldENlbGwgPSBhcmdzLnRhcmdldENlbGwuZ2V0QWRqYWNlbnRDZWxsKGxhc3REaXJlY3Rpb24pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGhlbGRCbG9jayA9IG51bGw7XHJcbiAgICBcclxuICAgICAgICBibG9jay5zZXRQb3NpdGlvblJlbGF0aXZlKG9mZnNldFgsIDApO1xyXG4gICAgICAgIGJsb2NrLnJhaXNlRXZlbnQoR2FtZUFjdGlvbi5GYWxsLCBhcmdzKTtcclxuICAgIFxyXG4gICAgICAgIGFuaW1hdGUocGxheWVyLCBsYXN0RGlyZWN0aW9uKTtcclxuICAgIH1cclxufSk7XHJcblxyXG4vLyBIZWxwZXJzXHJcbi8vIGVudW1zIHZhbHVlcyBjb3JyZXNwb25kIHRvIHNwcml0ZSBzaGVldCBmcmFtZXNcclxuZW51bSBTdGFja21vRnJhbWUge1xyXG4gICAgU3RhbmRMZWZ0ID0gMCxcclxuICAgIE1vdmVMZWZ0MSA9IDEsXHJcbiAgICBNb3ZlTGVmdDIgPSAyLFxyXG4gICAgU3RhbmRSaWdodCA9IDMsXHJcbiAgICBNb3ZlUmlnaHQxID0gNCxcclxuICAgIE1vdmVSaWdodDIgPSA1LFxyXG4gICAgU3RhbmRIb2xkTGVmdCA9IDYsXHJcbiAgICBNb3ZlSG9sZExlZnQxID0gNyxcclxuICAgIE1vdmVIb2xkTGVmdDIgPSA4LFxyXG4gICAgU3RhbmRIb2xkUmlnaHQgPSA5LFxyXG4gICAgTW92ZUhvbGRSaWdodDEgPSAxMCxcclxuICAgIE1vdmVIb2xkZFJpZ2h0MiA9IDExLFxyXG59XHJcblxyXG5mdW5jdGlvbiBhbmltYXRlKHBsYXllcjogQWN0b3JJbnN0YW5jZSwgZGlyZWN0aW9uOiBFbnVtLkRpcmVjdGlvbiwgaXNNb3Zpbmc6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgY29uc3QgYW5pbWF0aW9uU3BlZWQgPSAxMDA7XHJcbiAgICBsZXQgc3RhcnRGcmFtZSA9IFN0YWNrbW9GcmFtZS5TdGFuZFJpZ2h0O1xyXG4gICAgXHJcbiAgICBpZiAoISFoZWxkQmxvY2spIHtcclxuICAgICAgICBzdGFydEZyYW1lID0gZGlyZWN0aW9uID09PSBFbnVtLkRpcmVjdGlvbi5SaWdodCA/IFN0YWNrbW9GcmFtZS5TdGFuZEhvbGRSaWdodCA6IFN0YWNrbW9GcmFtZS5TdGFuZEhvbGRMZWZ0O1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgc3RhcnRGcmFtZSA9IGRpcmVjdGlvbiA9PT0gRW51bS5EaXJlY3Rpb24uUmlnaHQgPyBTdGFja21vRnJhbWUuU3RhbmRSaWdodCA6IFN0YWNrbW9GcmFtZS5TdGFuZExlZnQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzTW92aW5nKSB7XHJcbiAgICAgICAgcGxheWVyLnNwcml0ZUFuaW1hdGlvbi5zdGFydChzdGFydEZyYW1lICsgMSwgc3RhcnRGcmFtZSArIDIsIGFuaW1hdGlvblNwZWVkKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHBsYXllci5zcHJpdGVBbmltYXRpb24uc2V0KHN0YXJ0RnJhbWUpO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9nYW1lL2FjdG9ycy9wbGF5ZXIudHMiLCJpbXBvcnQgeyBBY3RvciwgQm91bmRhcnksIFNwcml0ZSB9IGZyb20gJy4vLi4vLi4vZW5naW5lL3Zhc3RnYW1lJztcclxuaW1wb3J0ICogYXMgQ29uc3RhbnRzIGZyb20gJy4vLi4vdXRpbC9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBBY3RvcklELCBTcHJpdGVJRCB9IGZyb20gJy4vLi4vdXRpbC9lbnVtJztcclxuXHJcbmxldCBTdG9uZSA9IFNwcml0ZS5kZWZpbmUoU3ByaXRlSUQuV2FsbCwge1xyXG4gICAgaW1hZ2VTb3VyY2U6ICcuLi9yZXNvdXJjZXMvd2FsbF9zaGVldF90ZWFsLnBuZycsXHJcbiAgICBoZWlnaHQ6IENvbnN0YW50cy5HcmlkQ2VsbFNpemUsXHJcbiAgICB3aWR0aDogQ29uc3RhbnRzLkdyaWRDZWxsU2l6ZSxcclxuICAgIGZyYW1lQm9yZGVyOiAxLFxyXG59KTtcclxuXHJcbmxldCBXYWxsID0gQWN0b3IuZGVmaW5lKEFjdG9ySUQuV2FsbCwge1xyXG4gICAgYm91bmRhcnk6IEJvdW5kYXJ5LmZyb21TcHJpdGUoU3RvbmUsIHRydWUpLFxyXG4gICAgc3ByaXRlOiBTdG9uZSxcclxufSk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9nYW1lL2FjdG9ycy93YWxsLnRzIiwiaW1wb3J0IHsgQWN0b3IsIEJvdW5kYXJ5LCBSb29tLCBTcHJpdGUsIFZhc3RnYW1lIH0gZnJvbSAnLi8uLi8uLi9lbmdpbmUvdmFzdGdhbWUnO1xyXG5pbXBvcnQgKiBhcyBDb25zdGFudHMgZnJvbSAnLi8uLi91dGlsL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IEFjdG9ySUQsIEdhbWVBY3Rpb24sIFJvb21JRCwgU3ByaXRlSUQgfSBmcm9tICcuLy4uL3V0aWwvZW51bSc7XHJcblxyXG5sZXQgRG9vclNwcml0ZSA9IFNwcml0ZS5kZWZpbmUoU3ByaXRlSUQuRG9vclNoZWV0LCB7XHJcbiAgICBpbWFnZVNvdXJjZTogJy4uL3Jlc291cmNlcy9kb29yX3NoZWV0LnBuZycsXHJcbiAgICBoZWlnaHQ6IENvbnN0YW50cy5HcmlkQ2VsbFNpemUsXHJcbiAgICB3aWR0aDogMzIsXHJcbiAgICBmcmFtZUJvcmRlcjogMSxcclxufSk7XHJcblxyXG5sZXQgV2luQWN0b3IgPSBBY3Rvci5kZWZpbmUoQWN0b3JJRC5XaW4sIHtcclxuICAgIGJvdW5kYXJ5OiBCb3VuZGFyeS5mcm9tU3ByaXRlKERvb3JTcHJpdGUsIHRydWUpLFxyXG4gICAgc3ByaXRlOiBEb29yU3ByaXRlLFxyXG59KTtcclxuXHJcbmxldCBvcGVuaW5nID0gZmFsc2U7XHJcbmxldCBjbG9zaW5nID0gZmFsc2U7XHJcbmxldCBkb29yQW5pbWF0aW9uT2Zmc2V0WCA9IDA7XHJcblxyXG5XaW5BY3Rvci5vbkNyZWF0ZSh3aW4gPT4ge1xyXG4gICAgLy8gaGlkZSBhbmQgZHJhdyBzcHJpdGUgXCJtYW51YWxseVwiIGR1cmluZyBvbkRyYXdcclxuICAgIHdpbi5hbmltYXRpb24uZGVwdGggPSAtMTA7XHJcbiAgICB3aW4udmlzaWJsZSA9IGZhbHNlO1xyXG59KVxyXG5cclxuV2luQWN0b3Iub25TdGVwKHdpbiA9PiB7XHJcbiAgICBpZiAob3BlbmluZykge1xyXG4gICAgICAgIGRvb3JBbmltYXRpb25PZmZzZXRYKys7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChjbG9zaW5nKSB7XHJcbiAgICAgICAgZG9vckFuaW1hdGlvbk9mZnNldFgtLTtcclxuICAgIH1cclxufSk7XHJcblxyXG4vLyBhbmltYXRlIHRoZSBkb29yIHBhbmVscyB3aGVuIHdpbm5pbmdcclxuV2luQWN0b3Iub25EcmF3KChzZWxmLCBjb250ZXh0KSA9PiB7XHJcbiAgICBsZXQgcGxheWVyVmlldyA9IFJvb20uY3VycmVudC52aWV3O1xyXG4gICAgY29udGV4dC5kcmF3U3ByaXRlKERvb3JTcHJpdGUsIHNlbGYueCAtIGRvb3JBbmltYXRpb25PZmZzZXRYLCBzZWxmLnksIDAsIHBsYXllclZpZXcpO1xyXG4gICAgY29udGV4dC5kcmF3U3ByaXRlKERvb3JTcHJpdGUsIHNlbGYueCArIDMyICsgZG9vckFuaW1hdGlvbk9mZnNldFgsIHNlbGYueSwgMSwgcGxheWVyVmlldyk7XHJcbn0pO1xyXG5cclxuV2luQWN0b3Iub25FdmVudChHYW1lQWN0aW9uLldpbiwgKHdpbiwgYXJncykgPT4ge1xyXG4gICAgd2luLnJhaXNlRXZlbnQoJ29wZW4nKTtcclxufSk7XHJcblxyXG5XaW5BY3Rvci5vbkV2ZW50KCdvcGVuJywgKHdpbiwgYXJncykgPT4ge1xyXG4gICAgb3BlbmluZyA9IHRydWU7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB3aW4ucmFpc2VFdmVudCgnY2xvc2UnKTtcclxuICAgIH0sIDUwMCk7XHJcbn0pO1xyXG5cclxuV2luQWN0b3Iub25FdmVudCgnY2xvc2UnLCAod2luLCBhcmdzKSA9PiB7XHJcbiAgICBvcGVuaW5nID0gZmFsc2U7XHJcbiAgICB3aW4uYW5pbWF0aW9uLmRlcHRoID0gLTEwMDtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGNsb3NpbmcgPSB0cnVlO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB3aW4ucmFpc2VFdmVudCgnaG9tZScpO1xyXG4gICAgICAgIH0sIDUwMCk7XHJcbiAgICB9LCA1MDApO1xyXG59KTtcclxuXHJcbldpbkFjdG9yLm9uRXZlbnQoJ2hvbWUnLCAod2luLCBhcmdzKSA9PiB7XHJcbiAgICBkb29yQW5pbWF0aW9uT2Zmc2V0WCA9IDA7XHJcbiAgICBjbG9zaW5nID0gZmFsc2U7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBWYXN0Z2FtZS5zZXRSb29tKFJvb21JRC5MZXZlbFNlbGVjdCwgeyB3aW46IHRydWUgfSk7XHJcbiAgICB9LCA1MDApO1xyXG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZ2FtZS9hY3RvcnMvd2luLnRzIiwiaW1wb3J0IHsgQWN0b3IsIEFjdG9ySW5zdGFuY2UsIEVudW0sIEdyaWRDZWxsLCBJbnB1dCwgUm9vbSwgU3ByaXRlIH0gZnJvbSAnLi8uLi8uLi9lbmdpbmUvdmFzdGdhbWUnO1xyXG5pbXBvcnQgKiBhcyBDb25zdGFudHMgZnJvbSAnLi8uLi91dGlsL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IEFjdG9ySUQsIFJvb21JRCwgU3ByaXRlSUQsIEdhbWVBY3Rpb24sIFNldHRpbmdzIH0gZnJvbSAnLi8uLi91dGlsL2VudW0nO1xyXG5pbXBvcnQgeyBSZWdpc3RyeSB9IGZyb20gJy4vLi4vdXRpbC9yZWdpc3RyeSc7XHJcbmltcG9ydCB7IFNwcml0ZUZhZGVyIH0gZnJvbSAnLi8uLi91dGlsL3Nwcml0ZS1mYWRlcic7XHJcbmltcG9ydCB7IFZhc3RnYW1lIH0gZnJvbSAnLi8uLi8uLi9lbmdpbmUvdmFzdGdhbWUnO1xyXG5cclxubGV0IExldmVsUm9vbSA9IFJvb20uZGVmaW5lKFJvb21JRC5MZXZlbCk7XHJcblxyXG5MZXZlbFJvb20ub25TdGFydCgoKSA9PiB7XHJcbiAgICBsZXQgQmxvY2tBY3RvciA9IEFjdG9yLmdldChBY3RvcklELkJsb2NrKTtcclxuICAgIGxldCBFeGl0QnV0dG9uQWN0b3IgPSBBY3Rvci5nZXQoQWN0b3JJRC5FeGl0QnV0dG9uKTtcclxuICAgIGxldCBQbGF5ZXJBY3RvciA9IEFjdG9yLmdldChBY3RvcklELlBsYXllcik7XHJcbiAgICBsZXQgV2FsbEFjdG9yID0gQWN0b3IuZ2V0KEFjdG9ySUQuV2FsbCk7XHJcbiAgICBsZXQgV2luQWN0b3IgPSBBY3Rvci5nZXQoQWN0b3JJRC5XaW4pO1xyXG5cclxuICAgIGxldCBEb29yU3ByaXRlID0gU3ByaXRlLmdldChTcHJpdGVJRC5Eb29yU2hlZXQpO1xyXG5cclxuICAgIFNwcml0ZUZhZGVyLmZhZGVJbihbRXhpdEJ1dHRvbkFjdG9yLnNwcml0ZSwgQmxvY2tBY3Rvci5zcHJpdGUsIFBsYXllckFjdG9yLnNwcml0ZSwgV2FsbEFjdG9yLnNwcml0ZSwgRG9vclNwcml0ZV0pO1xyXG5cclxuICAgIC8vIGFzc3VtZXMgdGhlIGxldmVsIGhhcyBhbHJlYWR5IGJlZW4gcG9wdWxhdGVkIGJlZm9yZSBzdGFydGluZ1xyXG4gICAgbGV0IHBsYXllciA9IExldmVsUm9vbS5nZXRJbnN0YW5jZXMoKS5maW5kKGFjdG9ySW5zdGFuY2UgPT4gYWN0b3JJbnN0YW5jZS5wYXJlbnQgPT09IFBsYXllckFjdG9yKTtcclxuXHJcbiAgICAvLyBkZWZpbmUgYSB2aWV3IHRoYXQgZm9sbG93cyB0aGUgcGxheWVyIGFuZCBoYXMgdGhlIFwiWFwiIGJ1dHRvbiBhdHRhY2hlZFxyXG4gICAgY29uc3QgY2FudmFzV2lkdGggPSBSZWdpc3RyeS5nZXQoU2V0dGluZ3MuQ2FudmFzV2lkdGgpO1xyXG4gICAgY29uc3QgY2FudmFzSGVpZ2h0ID0gUmVnaXN0cnkuZ2V0KFNldHRpbmdzLkNhbnZhc0hlaWdodCk7XHJcbiAgICBjb25zdCB2aWV3SFVEQnVmZmVyID0gQ29uc3RhbnRzLkdyaWRDZWxsU2l6ZSAvIDQ7XHJcblxyXG4gICAgbGV0IHBsYXllclZpZXcgPSBMZXZlbFJvb20uZGVmaW5lVmlldygwLCAwLCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0KTtcclxuICAgIHBsYXllclZpZXcuZm9sbG93KHBsYXllciwgdHJ1ZSk7XHJcbiAgICBwbGF5ZXJWaWV3LmF0dGFjaChMZXZlbFJvb20uY3JlYXRlQWN0b3IoRXhpdEJ1dHRvbkFjdG9yKSwgY2FudmFzV2lkdGggLSBDb25zdGFudHMuR3JpZENlbGxTaXplIC0gdmlld0hVREJ1ZmZlciwgdmlld0hVREJ1ZmZlcik7XHJcblxyXG4gICAgLy8gZGVmaW5lIHRoZSBtb3ZlbWVudCBncmlkIGFuZCBwbGF5ZXIgYmVoYXZpb3JcclxuICAgIGxldCBncmlkID0gTGV2ZWxSb29tLmRlZmluZUdyaWQoQ29uc3RhbnRzLkdyaWRDZWxsU2l6ZSk7XHJcbiAgICBncmlkLm9uQ2xpY2soZ3JpZENsaWNrRXZlbnQgPT4ge1xyXG4gICAgICAgIGxldCBjbGlja2VkQ2VsbCA9IGdyaWRDbGlja0V2ZW50LmdldENlbGwoKTtcclxuXHJcbiAgICAgICAgLy8gZG8gbm90aGluZyBpZiB0aGUgcGxheWVyIGlzIG1vdmluZyBvciBpZiBhIHdhbGwgd2FzIGNsaWNrZWQgb25cclxuICAgICAgICBpZiAocGxheWVyLnNwZWVkIHx8IGNsaWNrZWRDZWxsLmdldENvbnRlbnRzKCkuc29tZShpbnN0YW5jZSA9PiBpbnN0YW5jZS5wYXJlbnQgPT09IFdhbGxBY3RvcikpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGxlZnRDZWxsID0gY2xpY2tlZENlbGwuZ2V0QWRqYWNlbnRDZWxsKEVudW0uRGlyZWN0aW9uLkxlZnQpO1xyXG4gICAgICAgIGxldCByaWdodENlbGwgPSBjbGlja2VkQ2VsbC5nZXRBZGphY2VudENlbGwoRW51bS5EaXJlY3Rpb24uUmlnaHQpO1xyXG4gICAgICAgIGxldCBkb3duQ2VsbCA9IGNsaWNrZWRDZWxsLmdldEFkamFjZW50Q2VsbChFbnVtLkRpcmVjdGlvbi5Eb3duKTtcclxuXHJcbiAgICAgICAgbGV0IGRvd25MZWZ0Q2VsbCA9IGxlZnRDZWxsLmdldEFkamFjZW50Q2VsbChFbnVtLkRpcmVjdGlvbi5Eb3duKTtcclxuICAgICAgICBsZXQgZG93blJpZ2h0Q2VsbCA9IHJpZ2h0Q2VsbC5nZXRBZGphY2VudENlbGwoRW51bS5EaXJlY3Rpb24uRG93bik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGNsaWNrZWRDZWxsLmNvbnRhaW5zSW5zdGFuY2VPZihCbG9ja0FjdG9yKSkge1xyXG4gICAgICAgICAgICBwbGF5ZXIucmFpc2VFdmVudChHYW1lQWN0aW9uLkxpZnQsIHsgYmxvY2s6IGNsaWNrZWRDZWxsLmdldENvbnRlbnRzKClbMF0sIHRhcmdldENlbGw6IGNsaWNrZWRDZWxsIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChyaWdodENlbGwuY29udGFpbnNJbnN0YW5jZShwbGF5ZXIpKSB7XHJcbiAgICAgICAgICAgIHBsYXllci5yYWlzZUV2ZW50KEdhbWVBY3Rpb24uTW92ZSwgeyBkaXJlY3Rpb246IEVudW0uRGlyZWN0aW9uLkxlZnQsIHRhcmdldENlbGw6IGNsaWNrZWRDZWxsIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChsZWZ0Q2VsbC5jb250YWluc0luc3RhbmNlKHBsYXllcikpIHtcclxuICAgICAgICAgICAgcGxheWVyLnJhaXNlRXZlbnQoR2FtZUFjdGlvbi5Nb3ZlLCB7IGRpcmVjdGlvbjogRW51bS5EaXJlY3Rpb24uUmlnaHQsIHRhcmdldENlbGw6IGNsaWNrZWRDZWxsIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChkb3duTGVmdENlbGwuY29udGFpbnNJbnN0YW5jZShwbGF5ZXIpICYmIChkb3duQ2VsbC5jb250YWluc0luc3RhbmNlT2YoQmxvY2tBY3RvcikgfHwgZG93bkNlbGwuY29udGFpbnNJbnN0YW5jZU9mKFdhbGxBY3RvcikpKSB7XHJcbiAgICAgICAgICAgIHBsYXllci5yYWlzZUV2ZW50KEdhbWVBY3Rpb24uSnVtcCwgeyBkaXJlY3Rpb246IEVudW0uRGlyZWN0aW9uLlJpZ2h0LCB0YXJnZXRDZWxsOiBjbGlja2VkQ2VsbCB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZG93blJpZ2h0Q2VsbC5jb250YWluc0luc3RhbmNlKHBsYXllcikgJiYgKGRvd25DZWxsLmNvbnRhaW5zSW5zdGFuY2VPZihCbG9ja0FjdG9yKSB8fCBkb3duQ2VsbC5jb250YWluc0luc3RhbmNlT2YoV2FsbEFjdG9yKSkpIHtcclxuICAgICAgICAgICAgcGxheWVyLnJhaXNlRXZlbnQoR2FtZUFjdGlvbi5KdW1wLCB7IGRpcmVjdGlvbjogRW51bS5EaXJlY3Rpb24uTGVmdCwgdGFyZ2V0Q2VsbDogY2xpY2tlZENlbGwgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gS2V5Ym9hcmQgaW5wdXRcclxuICAgIExldmVsUm9vbS5vbktleShFbnVtLktleS5MZWZ0LCAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHBsYXllckNlbGwgPSBncmlkLmdldENlbGxBdFBvc2l0aW9uKHBsYXllci54LCBwbGF5ZXIueSk7XHJcbiAgICAgICAgbGV0IGxlZnRDZWxsID0gcGxheWVyQ2VsbC5nZXRBZGphY2VudENlbGwoRW51bS5EaXJlY3Rpb24uTGVmdCk7XHJcbiAgICAgICAgbGV0IHRvcExlZnRDZWxsID0gbGVmdENlbGwuZ2V0QWRqYWNlbnRDZWxsKEVudW0uRGlyZWN0aW9uLlVwKTtcclxuXHJcbiAgICAgICAgaWYgKHRvcExlZnRDZWxsLmlzRnJlZSgpICYmIChsZWZ0Q2VsbC5jb250YWluc0luc3RhbmNlT2YoV2FsbEFjdG9yKSB8fCBsZWZ0Q2VsbC5jb250YWluc0luc3RhbmNlT2YoQmxvY2tBY3RvcikpKSB7XHJcbiAgICAgICAgICAgIGdyaWQucmFpc2VDbGlja0V2ZW50KHBsYXllci54IC0gQ29uc3RhbnRzLkdyaWRDZWxsU2l6ZSwgcGxheWVyLnkgLSBDb25zdGFudHMuR3JpZENlbGxTaXplKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAobGVmdENlbGwuaXNGcmVlKCkpIHtcclxuICAgICAgICAgICAgZ3JpZC5yYWlzZUNsaWNrRXZlbnQocGxheWVyLnggLSBDb25zdGFudHMuR3JpZENlbGxTaXplLCBwbGF5ZXIueSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgTGV2ZWxSb29tLm9uS2V5KEVudW0uS2V5LlJpZ2h0LCAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHBsYXllckNlbGwgPSBncmlkLmdldENlbGxBdFBvc2l0aW9uKHBsYXllci54LCBwbGF5ZXIueSk7XHJcbiAgICAgICAgbGV0IHJpZ2h0Q2VsbCA9IHBsYXllckNlbGwuZ2V0QWRqYWNlbnRDZWxsKEVudW0uRGlyZWN0aW9uLlJpZ2h0KTtcclxuICAgICAgICBsZXQgdG9wUmlnaHRDZWxsID0gcmlnaHRDZWxsLmdldEFkamFjZW50Q2VsbChFbnVtLkRpcmVjdGlvbi5VcCk7XHJcblxyXG4gICAgICAgIGlmICh0b3BSaWdodENlbGwuaXNGcmVlKCkgJiYgKHJpZ2h0Q2VsbC5jb250YWluc0luc3RhbmNlT2YoV2FsbEFjdG9yKSB8fCByaWdodENlbGwuY29udGFpbnNJbnN0YW5jZU9mKEJsb2NrQWN0b3IpKSkge1xyXG4gICAgICAgICAgICBncmlkLnJhaXNlQ2xpY2tFdmVudChwbGF5ZXIueCArIENvbnN0YW50cy5HcmlkQ2VsbFNpemUsIHBsYXllci55IC0gQ29uc3RhbnRzLkdyaWRDZWxsU2l6ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHJpZ2h0Q2VsbC5pc0ZyZWUoKSkge1xyXG4gICAgICAgICAgICBncmlkLnJhaXNlQ2xpY2tFdmVudChwbGF5ZXIueCArIENvbnN0YW50cy5HcmlkQ2VsbFNpemUsIHBsYXllci55KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBMZXZlbFJvb20ub25LZXkoRW51bS5LZXkuRG93biwgKCkgPT4ge1xyXG4gICAgICAgIGxldCBwbGF5ZXJDZWxsID0gZ3JpZC5nZXRDZWxsQXRQb3NpdGlvbihwbGF5ZXIueCwgcGxheWVyLnkpO1xyXG4gICAgICAgIGxldCBsZWZ0Q2VsbCA9IHBsYXllckNlbGwuZ2V0QWRqYWNlbnRDZWxsKEVudW0uRGlyZWN0aW9uLkxlZnQpO1xyXG4gICAgICAgIGxldCByaWdodENlbGwgPSBwbGF5ZXJDZWxsLmdldEFkamFjZW50Q2VsbChFbnVtLkRpcmVjdGlvbi5SaWdodCk7XHJcbiAgICAgICAgbGV0IHRvcENlbGwgPSBwbGF5ZXJDZWxsLmdldEFkamFjZW50Q2VsbChFbnVtLkRpcmVjdGlvbi5VcCk7XHJcbiAgICAgICAgbGV0IHRvcExlZnRDZWxsID0gdG9wQ2VsbC5nZXRBZGphY2VudENlbGwoRW51bS5EaXJlY3Rpb24uTGVmdCk7XHJcbiAgICAgICAgbGV0IHRvcFJpZ2h0Q2VsbCA9IHRvcENlbGwuZ2V0QWRqYWNlbnRDZWxsKEVudW0uRGlyZWN0aW9uLlJpZ2h0KTtcclxuXHJcbiAgICAgICAgaWYgKHRvcENlbGwuY29udGFpbnNJbnN0YW5jZU9mKEJsb2NrQWN0b3IpKSB7XHJcbiAgICAgICAgICAgIC8vIGRyb3BcclxuICAgICAgICAgICAgZ3JpZC5yYWlzZUNsaWNrRXZlbnQocGxheWVyLngsIHBsYXllci55IC0gQ29uc3RhbnRzLkdyaWRDZWxsU2l6ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBsaWZ0XHJcbiAgICAgICAgICAgIGlmIChsZWZ0Q2VsbC5jb250YWluc0luc3RhbmNlT2YoQmxvY2tBY3RvcikgJiYgdG9wTGVmdENlbGwuaXNGcmVlKCkpIHtcclxuICAgICAgICAgICAgICAgIGdyaWQucmFpc2VDbGlja0V2ZW50KHBsYXllci54IC0gQ29uc3RhbnRzLkdyaWRDZWxsU2l6ZSwgcGxheWVyLnkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAocmlnaHRDZWxsLmNvbnRhaW5zSW5zdGFuY2VPZihCbG9ja0FjdG9yKSAmJiB0b3BSaWdodENlbGwuaXNGcmVlKCkpIHtcclxuICAgICAgICAgICAgICAgIGdyaWQucmFpc2VDbGlja0V2ZW50KHBsYXllci54ICsgQ29uc3RhbnRzLkdyaWRDZWxsU2l6ZSwgcGxheWVyLnkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZ2FtZS9yb29tcy9sZXZlbC50cyIsImltcG9ydCB7IEFjdG9yLCBCb3VuZGFyeSwgRW51bSwgSW5wdXQsIFJvb20sIFNwcml0ZSwgVmFzdGdhbWUsIFZpZXcgfSBmcm9tICcuLy4uLy4uL2VuZ2luZS92YXN0Z2FtZSc7XHJcbmltcG9ydCAqIGFzIENvbnN0YW50cyBmcm9tICcuLy4uL3V0aWwvY29uc3RhbnRzJztcclxuaW1wb3J0IHsgQWN0b3JJRCwgTGV2ZWxCZ0NvbG9yLCBSb29tSUQsIFNldHRpbmdzLCBTcHJpdGVJRCB9IGZyb20gJy4vLi4vdXRpbC9lbnVtJztcclxuaW1wb3J0IHsgTGV2ZWxzLCBMZXZlbEJ1aWxkZXIgfSBmcm9tICcuLy4uL3V0aWwvbGV2ZWwtYnVpbGRlcic7XHJcbmltcG9ydCB7IFNwcml0ZUZhZGVyIH0gZnJvbSAnLi8uLi91dGlsL3Nwcml0ZS1mYWRlcic7XHJcbmltcG9ydCB7IFJlZ2lzdHJ5IH0gZnJvbSAnLi8uLi91dGlsL3JlZ2lzdHJ5JztcclxuXHJcbmxldCBzY3JvbGxWaWV3OiBWaWV3O1xyXG5sZXQgY2FudmFzSGVpZ2h0OiBudW1iZXI7XHJcbmxldCBjYW52YXNXaWR0aDogbnVtYmVyO1xyXG5sZXQgc3RhcnRYOiBudW1iZXI7XHJcbmxldCBzdGFydFk6IG51bWJlcjtcclxubGV0IG92ZXJmbG93ZWRSb3dzOiBudW1iZXI7XHJcblxyXG5jb25zdCBpY29uUGFkZGluZyA9IDg7XHJcbmNvbnN0IGljb25TaXplV2l0aFBhZGRpbmcgPSBDb25zdGFudHMuR3JpZENlbGxTaXplICsgKGljb25QYWRkaW5nICogMik7XHJcblxyXG5jb25zdCBMZXZlbFNlbGVjdFJvb20gPSBSb29tLmRlZmluZShSb29tSUQuTGV2ZWxTZWxlY3QpO1xyXG5cclxubGV0IF9sYXN0TGV2ZWxOdW1iZXIgPSAxO1xyXG5cclxuTGV2ZWxTZWxlY3RSb29tLm9uU3RhcnQoKGFyZ3MpID0+IHtcclxuICAgIGNhbnZhc1dpZHRoID0gUmVnaXN0cnkuZ2V0KFNldHRpbmdzLkNhbnZhc1dpZHRoKTtcclxuICAgIGNhbnZhc0hlaWdodCA9IFJlZ2lzdHJ5LmdldChTZXR0aW5ncy5DYW52YXNIZWlnaHQpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKF9sYXN0TGV2ZWxOdW1iZXIpO1xyXG4gICAgXHJcbiAgICBMZXZlbFNlbGVjdFJvb20uc2V0QmFja2dyb3VuZChDb25zdGFudHMuQmxhY2ssIGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQpO1xyXG4gICAgc2Nyb2xsVmlldyA9IExldmVsU2VsZWN0Um9vbS5kZWZpbmVWaWV3KDAsIDAsIGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQpO1xyXG5cclxuICAgIGxldCBpY29uc1BlclJvdyA9IE1hdGguZmxvb3IoY2FudmFzV2lkdGggLyBpY29uU2l6ZVdpdGhQYWRkaW5nKTtcclxuXHJcbiAgICBzdGFydFggPSBNYXRoLmZsb29yKChjYW52YXNXaWR0aCAtIChpY29uc1BlclJvdyAqIGljb25TaXplV2l0aFBhZGRpbmcpKSAvIDIpO1xyXG4gICAgc3RhcnRZID0gTWF0aC5mbG9vcihjYW52YXNIZWlnaHQgLyA2KTtcclxuXHJcbiAgICAvLyBhZGp1c3QgaWNvbnMgcGVyIHJvdyBmb3Igc2Nyb2xsIGJhciBpZiByb3dzIG92ZXJmbG93IHRoZSBjYW52YXNcclxuICAgIGxldCBzaG93U2Nyb2xsYmFycyA9IGZhbHNlO1xyXG4gICAgbGV0IHJvd0NvdW50ID0gTWF0aC5jZWlsKExldmVscy5jb3VudCAvIGljb25zUGVyUm93KTtcclxuICAgIGlmIChzdGFydFkgKyAocm93Q291bnQgKiBpY29uU2l6ZVdpdGhQYWRkaW5nKSA+IGNhbnZhc0hlaWdodCkge1xyXG4gICAgICAgIGljb25zUGVyUm93LS07XHJcbiAgICAgICAgcm93Q291bnQgPSBNYXRoLmNlaWwoTGV2ZWxzLmNvdW50IC8gaWNvbnNQZXJSb3cpO1xyXG4gICAgICAgIG92ZXJmbG93ZWRSb3dzID0gTWF0aC5jZWlsKCgocm93Q291bnQgKiBpY29uU2l6ZVdpdGhQYWRkaW5nKSAtIGNhbnZhc0hlaWdodCkgLyBpY29uU2l6ZVdpdGhQYWRkaW5nKTtcclxuICAgICAgICBzaG93U2Nyb2xsYmFycyA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHVubG9ja2VkTGV2ZWxDb3VudCA9IE51bWJlcihSZWdpc3RyeS5nZXQoU2V0dGluZ3MuU3RhY2ttb1Byb2dyZXNzKSk7XHJcbiAgICBpZiAoYXJncyAmJiBhcmdzLndpbiAmJiBfbGFzdExldmVsTnVtYmVyID09PSB1bmxvY2tlZExldmVsQ291bnQpIHtcclxuICAgICAgICBSZWdpc3RyeS5zZXQoU2V0dGluZ3MuU3RhY2ttb1Byb2dyZXNzLCB1bmxvY2tlZExldmVsQ291bnQgKyAxLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjcmVhdGUgbGV2ZWwgaWNvbnNcclxuICAgIGxldCBjdXJyZW50Um93ID0gMDtcclxuICAgIGxldCBjdXJyZW50UG9zaXRpb24gPSAwO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBMZXZlbHMuY291bnQ7IGkrKykge1xyXG4gICAgICAgIGxldCBpY29uID0gTGV2ZWxTZWxlY3RSb29tLmNyZWF0ZUFjdG9yKExldmVsSWNvbiwgc3RhcnRYICsgY3VycmVudFBvc2l0aW9uICogaWNvblNpemVXaXRoUGFkZGluZywgc3RhcnRZICsgY3VycmVudFJvdyAqIGljb25TaXplV2l0aFBhZGRpbmcpO1xyXG4gICAgICAgICg8YW55Pmljb24pLmxldmVsTnVtYmVyID0gaSArIDE7XHJcbiAgICAgICAgKDxhbnk+aWNvbikuZW5hYmxlZCA9IGkgPCB1bmxvY2tlZExldmVsQ291bnQ7XHJcblxyXG4gICAgICAgIGN1cnJlbnRQb3NpdGlvbisrO1xyXG5cclxuICAgICAgICBpZiAoY3VycmVudFBvc2l0aW9uID09PSBpY29uc1BlclJvdykge1xyXG4gICAgICAgICAgICBjdXJyZW50UG9zaXRpb24gPSAwO1xyXG4gICAgICAgICAgICBjdXJyZW50Um93Kys7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGNyZWF0ZSBzY3JvbGwgaWNvbnMgaWYgbmVlZGVkXHJcbiAgICBpZiAoc2hvd1Njcm9sbGJhcnMpIHtcclxuICAgICAgICBsZXQgdXBBcnJvdyA9IExldmVsU2VsZWN0Um9vbS5jcmVhdGVBY3RvcihTY3JvbGxBcnJvdyk7XHJcbiAgICAgICAgdXBBcnJvdy5zcHJpdGVBbmltYXRpb24uc2V0KDEpO1xyXG4gICAgICAgIHVwQXJyb3cueCA9IGNhbnZhc1dpZHRoIC0gaWNvblBhZGRpbmcgLSBTY3JvbGxBcnJvdy5zcHJpdGUud2lkdGg7XHJcbiAgICAgICAgKDxhbnk+dXBBcnJvdykuZGlyZWN0aW9uID0gRW51bS5EaXJlY3Rpb24uVXA7XHJcblxyXG4gICAgICAgIGxldCBkb3duQXJyb3cgPSBMZXZlbFNlbGVjdFJvb20uY3JlYXRlQWN0b3IoU2Nyb2xsQXJyb3cpO1xyXG4gICAgICAgIGRvd25BcnJvdy54ID0gdXBBcnJvdy54O1xyXG4gICAgICAgICg8YW55PmRvd25BcnJvdykuZGlyZWN0aW9uID0gRW51bS5EaXJlY3Rpb24uRG93bjtcclxuICAgIH1cclxuXHJcbiAgICBTcHJpdGVGYWRlci5mYWRlSW4oW1RleHRTcHJpdGUsIERpZ2l0c1Nwcml0ZSwgTGV2ZWxJY29uU3ByaXRlLCBBcnJvd1Nwcml0ZV0pO1xyXG59KTtcclxuXHJcbi8vIGRyYXcgdGhlIGJhbm5lciB0ZXh0XHJcbmNvbnN0IFRleHRTcHJpdGUgPSBTcHJpdGUuZGVmaW5lKFNwcml0ZUlELlRleHRTaGVldCwge1xyXG4gICAgaW1hZ2VTb3VyY2U6Jy4uL3Jlc291cmNlcy90ZXh0X3NoZWV0LnBuZycsXHJcbiAgICBoZWlnaHQ6IDMyLFxyXG4gICAgd2lkdGg6IDMyMCxcclxufSk7XHJcblxyXG5MZXZlbFNlbGVjdFJvb20ub25EcmF3KGNvbnRleHQgPT4ge1xyXG4gICAgY29udGV4dC5kcmF3U3ByaXRlKFRleHRTcHJpdGUsIHN0YXJ0WCwgTWF0aC5mbG9vcihzdGFydFkgLyAyIC0gVGV4dFNwcml0ZS5oZWlnaHQpLCAwLCBzY3JvbGxWaWV3KTtcclxufSlcclxuXHJcbi8vIExldmVsIGljb25zXHJcbmNvbnN0IERpZ2l0c1Nwcml0ZSA9IFNwcml0ZS5kZWZpbmUoU3ByaXRlSUQuRGlnaXRzLCB7XHJcbiAgICBpbWFnZVNvdXJjZTogJy4uL3Jlc291cmNlcy9kaWdpdHNfMzJweC5wbmcnLFxyXG4gICAgaGVpZ2h0OiBDb25zdGFudHMuR3JpZENlbGxTaXplIC8gMixcclxuICAgIHdpZHRoOiBDb25zdGFudHMuR3JpZENlbGxTaXplIC8gMixcclxufSk7XHJcblxyXG5jb25zdCBMZXZlbEljb25TcHJpdGUgPSBTcHJpdGUuZGVmaW5lKFNwcml0ZUlELkxldmVsSWNvbiwge1xyXG4gICAgaW1hZ2VTb3VyY2U6ICcuLi9yZXNvdXJjZXMvbGV2ZWxfaWNvbi5wbmcnLFxyXG4gICAgd2lkdGg6IENvbnN0YW50cy5HcmlkQ2VsbFNpemUsXHJcbiAgICBoZWlnaHQ6IENvbnN0YW50cy5HcmlkQ2VsbFNpemUsXHJcbn0pO1xyXG5cclxuY29uc3QgTGV2ZWxJY29uID0gQWN0b3IuZGVmaW5lKEFjdG9ySUQuTGV2ZWxJY29uLCB7XHJcbiAgICBib3VuZGFyeTogQm91bmRhcnkuZnJvbVNwcml0ZShMZXZlbEljb25TcHJpdGUpLFxyXG4gICAgc3ByaXRlOiBMZXZlbEljb25TcHJpdGUsXHJcbn0pO1xyXG5cclxuTGV2ZWxJY29uLm9uQ2xpY2soc2VsZiA9PiB7XHJcbiAgICBpZiAoKDxhbnk+c2VsZikuZW5hYmxlZCkge1xyXG5cclxuICAgICAgICBTcHJpdGVGYWRlci5mYWRlT3V0KFtUZXh0U3ByaXRlLCBEaWdpdHNTcHJpdGUsIExldmVsSWNvblNwcml0ZSwgQXJyb3dTcHJpdGVdLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBsZXZlbE51bWJlcjogbnVtYmVyID0gKDxhbnk+c2VsZikubGV2ZWxOdW1iZXI7XHJcbiAgICAgICAgICAgIGxldCBsZXZlbCA9IFJvb20uZ2V0KFJvb21JRC5MZXZlbCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBMZXZlbEJ1aWxkZXIucG9wdWxhdGVSb29tKGxldmVsLCBsZXZlbE51bWJlcik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBfbGFzdExldmVsTnVtYmVyID0gbGV2ZWxOdW1iZXI7XHJcbiAgICAgICAgICAgIFZhc3RnYW1lLnNldFJvb20oUm9vbUlELkxldmVsKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gXHJcbn0pO1xyXG5cclxuTGV2ZWxJY29uLm9uRHJhdygoc2VsZiwgY29udGV4dCkgPT4ge1xyXG4gICAgaWYgKCg8YW55PnNlbGYpLmVuYWJsZWQpIHtcclxuICAgICAgICBsZXQgbGV2ZWxOdW1iZXI6IG51bWJlciA9ICg8YW55PnNlbGYpLmxldmVsTnVtYmVyO1xyXG4gICAgICAgIGxldCBzaW5nbGVEaWdpdE1hcmdpbiA9IE1hdGguZmxvb3IoKExldmVsSWNvblNwcml0ZS53aWR0aCAtIERpZ2l0c1Nwcml0ZS53aWR0aCkgLyAyKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAobGV2ZWxOdW1iZXIgPCAxMCkge1xyXG4gICAgICAgICAgICBsZXQgZnJhbWUgPSBsZXZlbE51bWJlcjtcclxuICAgICAgICAgICAgY29udGV4dC5kcmF3U3ByaXRlKERpZ2l0c1Nwcml0ZSwgc2VsZi54ICsgc2luZ2xlRGlnaXRNYXJnaW4sIHNlbGYueSArIHNpbmdsZURpZ2l0TWFyZ2luLCBmcmFtZSwgc2Nyb2xsVmlldyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgdGVuc0ZyYW1lID0gTWF0aC5mbG9vcihsZXZlbE51bWJlciAvIDEwKTtcclxuICAgICAgICAgICAgbGV0IHRlbnNNYXJnaW4gPSBNYXRoLmZsb29yKHNpbmdsZURpZ2l0TWFyZ2luIC8gMikgLSAzO1xyXG4gICAgICAgICAgICBjb250ZXh0LmRyYXdTcHJpdGUoRGlnaXRzU3ByaXRlLCBzZWxmLnggKyB0ZW5zTWFyZ2luLCBzZWxmLnkgKyBzaW5nbGVEaWdpdE1hcmdpbiwgdGVuc0ZyYW1lLCBzY3JvbGxWaWV3KTtcclxuICAgIFxyXG4gICAgICAgICAgICBsZXQgb25lc0ZyYW1lID0gbGV2ZWxOdW1iZXIgJSAxMDtcclxuICAgICAgICAgICAgbGV0IG9uZXNNYXJnaW4gPSBNYXRoLmZsb29yKHNpbmdsZURpZ2l0TWFyZ2luICogMikgLSAzO1xyXG4gICAgICAgICAgICBjb250ZXh0LmRyYXdTcHJpdGUoRGlnaXRzU3ByaXRlLCBzZWxmLnggKyBvbmVzTWFyZ2luLCBzZWxmLnkgKyBzaW5nbGVEaWdpdE1hcmdpbiwgb25lc0ZyYW1lLCBzY3JvbGxWaWV3KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuLy8gU2Nyb2xsIGFycm93c1xyXG5jb25zdCBBcnJvd1Nwcml0ZSA9IFNwcml0ZS5kZWZpbmUoU3ByaXRlSUQuQXJyb3dzLCB7XHJcbiAgICBpbWFnZVNvdXJjZTogJy4uL3Jlc291cmNlcy9hcnJvd3MucG5nJyxcclxuICAgIGhlaWdodDogQ29uc3RhbnRzLkdyaWRDZWxsU2l6ZSxcclxuICAgIHdpZHRoOiBDb25zdGFudHMuR3JpZENlbGxTaXplLFxyXG59KTtcclxuXHJcbmNvbnN0IFNjcm9sbEFycm93ID0gQWN0b3IuZGVmaW5lKEFjdG9ySUQuU2Nyb2xsQXJyb3csIHtcclxuICAgIGJvdW5kYXJ5OiBCb3VuZGFyeS5mcm9tU3ByaXRlKEFycm93U3ByaXRlKSxcclxuICAgIHNwcml0ZTogQXJyb3dTcHJpdGUsXHJcbn0pO1xyXG5cclxuU2Nyb2xsQXJyb3cub25DbGljaygoc2VsZiwgZXZlbnQpID0+IHtcclxuICAgIGlmICgoPGFueT5zZWxmKS5lbmFibGVkKSB7XHJcbiAgICAgICAgbGV0IGRpcmVjdGlvbjogRW51bS5EaXJlY3Rpb24gPSAoPGFueT5zZWxmKS5kaXJlY3Rpb247XHJcbiAgICAgICAgc2Nyb2xsVmlldy55ICs9IGRpcmVjdGlvbiA9PT0gRW51bS5EaXJlY3Rpb24uRG93biA/IDY0IDogLTY0O1xyXG5cclxuICAgICAgICBpZiAoc2Nyb2xsVmlldy55IDwgMCkge1xyXG4gICAgICAgICAgICBzY3JvbGxWaWV3LnkgPSAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcblxyXG5TY3JvbGxBcnJvdy5vblN0ZXAoc2VsZiA9PiB7XHJcbiAgICAvLyB1cGRhdGUgdmVydGljYWwgcG9zaXRpb24gdG8gbWF0Y2ggc2Nyb2xsaW5nXHJcbiAgICBsZXQgaXNVcEFycm93ID0gKCg8YW55PnNlbGYpLmRpcmVjdGlvbiA9PT0gRW51bS5EaXJlY3Rpb24uVXApO1xyXG4gICAgc2VsZi55ID0gaXNVcEFycm93ID8gc3RhcnRZICsgc2Nyb2xsVmlldy55IDogY2FudmFzSGVpZ2h0IC0gODIgKyBzY3JvbGxWaWV3Lnk7IFxyXG5cclxuICAgIC8vIGVuYWJsZS9kaXNhYmxlIGlmIHRoZXJlJ3Mgbm8gbW9yZSBzY3JvbGxpbmcgdG8gZG9cclxuICAgICg8YW55PnNlbGYpLmVuYWJsZWQgPSBpc1VwQXJyb3cgPyBzY3JvbGxWaWV3LnkgPiAwIDogc2Nyb2xsVmlldy55IDwgKG92ZXJmbG93ZWRSb3dzICsgMikgKiBpY29uU2l6ZVdpdGhQYWRkaW5nO1xyXG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZ2FtZS9yb29tcy9sZXZlbC1zZWxlY3QudHMiLCJpbXBvcnQgeyBFbnVtLCBSb29tLCBTcHJpdGUsIFZhc3RnYW1lIH0gZnJvbSAnLi8uLi8uLi9lbmdpbmUvdmFzdGdhbWUnO1xyXG5pbXBvcnQgeyBSb29tSUQsIFNldHRpbmdzLCBTcHJpdGVJRCB9IGZyb20gJy4vLi4vdXRpbC9lbnVtJztcclxuaW1wb3J0IHsgU3ByaXRlRmFkZXIgfSBmcm9tICcuLy4uL3V0aWwvc3ByaXRlLWZhZGVyJztcclxuaW1wb3J0IHsgUmVnaXN0cnkgfSBmcm9tICcuLy4uL3V0aWwvcmVnaXN0cnknO1xyXG5cclxuY29uc3QgVGl0bGVXaWR0aCA9IDM2MDtcclxuY29uc3QgVGl0bGVIZWlnaHQgPSAxNTA7XHJcblxyXG5sZXQgdGl0bGVYOiBudW1iZXIgPSAwO1xyXG5sZXQgdGl0bGVZOiBudW1iZXIgPSAwO1xyXG5cclxubGV0IFRpdGxlU3ByaXRlID0gU3ByaXRlLmRlZmluZShTcHJpdGVJRC5UaXRsZSwge1xyXG4gICAgaW1hZ2VTb3VyY2U6ICcuLi9yZXNvdXJjZXMvdGl0bGUucG5nJyxcclxuICAgIHdpZHRoOiBUaXRsZVdpZHRoLFxyXG4gICAgaGVpZ2h0OiBUaXRsZUhlaWdodCxcclxufSk7XHJcblxyXG5sZXQgVGl0bGVSb29tID0gUm9vbS5kZWZpbmUoUm9vbUlELlRpdGxlKTtcclxuXHJcblRpdGxlUm9vbS5vblN0YXJ0KCgpID0+IHtcclxuICAgIGxldCBjYW52YXNXaWR0aCA9IFJlZ2lzdHJ5LmdldChTZXR0aW5ncy5DYW52YXNXaWR0aCk7XHJcbiAgICBsZXQgY2FudmFzSGVpZ2h0ID0gUmVnaXN0cnkuZ2V0KFNldHRpbmdzLkNhbnZhc0hlaWdodCk7XHJcblxyXG4gICAgdGl0bGVYID0gTWF0aC5mbG9vcigoY2FudmFzV2lkdGggLSBUaXRsZVdpZHRoKSAvIDIpO1xyXG4gICAgdGl0bGVZID0gTWF0aC5mbG9vcigoY2FudmFzSGVpZ2h0IC0gVGl0bGVIZWlnaHQpIC8gNCk7XHJcblxyXG4gICAgU3ByaXRlRmFkZXIuZmFkZUluKFtUaXRsZVNwcml0ZV0pO1xyXG59KTtcclxuXHJcblRpdGxlUm9vbS5vbkRyYXcoY29udGV4dCA9PiB7XHJcbiAgICBjb250ZXh0LmRyYXdTcHJpdGUoVGl0bGVTcHJpdGUsIHRpdGxlWCwgdGl0bGVZKTtcclxufSk7XHJcblxyXG5UaXRsZVJvb20ub25DbGljayhnb1RvTGV2ZWxTZWxlY3QpO1xyXG5UaXRsZVJvb20ub25LZXkoRW51bS5LZXkuQW55LCBnb1RvTGV2ZWxTZWxlY3QpO1xyXG5cclxuZnVuY3Rpb24gZ29Ub0xldmVsU2VsZWN0KCkge1xyXG5cclxuICAgIFNwcml0ZUZhZGVyLmZhZGVPdXQoW1RpdGxlU3ByaXRlXSwgKCkgPT4ge1xyXG4gICAgICAgIFZhc3RnYW1lLnNldFJvb20oUm9vbUlELkxldmVsU2VsZWN0KTtcclxuICAgIH0pO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2dhbWUvcm9vbXMvdGl0bGUudHMiLCJ2YXIgbWFwID0ge1xuXHRcIi4vYWN0b3JzL2Jsb2NrXCI6IDIxLFxuXHRcIi4vYWN0b3JzL2Jsb2NrLnRzXCI6IDIxLFxuXHRcIi4vYWN0b3JzL2h1ZFwiOiAyMixcblx0XCIuL2FjdG9ycy9odWQudHNcIjogMjIsXG5cdFwiLi9hY3RvcnMvcGxheWVyXCI6IDIzLFxuXHRcIi4vYWN0b3JzL3BsYXllci50c1wiOiAyMyxcblx0XCIuL2FjdG9ycy93YWxsXCI6IDI0LFxuXHRcIi4vYWN0b3JzL3dhbGwudHNcIjogMjQsXG5cdFwiLi9hY3RvcnMvd2luXCI6IDI1LFxuXHRcIi4vYWN0b3JzL3dpbi50c1wiOiAyNSxcblx0XCIuL2dhbWVcIjogMTgsXG5cdFwiLi9nYW1lLnRzXCI6IDE4LFxuXHRcIi4vcm9vbXMvbGV2ZWxcIjogMjYsXG5cdFwiLi9yb29tcy9sZXZlbC1zZWxlY3RcIjogMjcsXG5cdFwiLi9yb29tcy9sZXZlbC1zZWxlY3QudHNcIjogMjcsXG5cdFwiLi9yb29tcy9sZXZlbC50c1wiOiAyNixcblx0XCIuL3Jvb21zL3RpdGxlXCI6IDI4LFxuXHRcIi4vcm9vbXMvdGl0bGUudHNcIjogMjgsXG5cdFwiLi91dGlsL2NvbnN0YW50c1wiOiA0LFxuXHRcIi4vdXRpbC9jb25zdGFudHMudHNcIjogNCxcblx0XCIuL3V0aWwvZW51bVwiOiAyLFxuXHRcIi4vdXRpbC9lbnVtLnRzXCI6IDIsXG5cdFwiLi91dGlsL2xldmVsLWJ1aWxkZXJcIjogMjAsXG5cdFwiLi91dGlsL2xldmVsLWJ1aWxkZXIudHNcIjogMjAsXG5cdFwiLi91dGlsL3JlZ2lzdHJ5XCI6IDcsXG5cdFwiLi91dGlsL3JlZ2lzdHJ5LnRzXCI6IDcsXG5cdFwiLi91dGlsL3Nwcml0ZS1mYWRlclwiOiAxMixcblx0XCIuL3V0aWwvc3ByaXRlLWZhZGVyLnRzXCI6IDEyLFxuXHRcIi4vdXRpbC91dGlsXCI6IDE5LFxuXHRcIi4vdXRpbC91dGlsLnRzXCI6IDE5XG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpKTtcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHZhciBpZCA9IG1hcFtyZXFdO1xuXHRpZighKGlkICsgMSkpIC8vIGNoZWNrIGZvciBudW1iZXIgb3Igc3RyaW5nXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJy5cIik7XG5cdHJldHVybiBpZDtcbn07XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gMjk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZ2FtZSBeXFwuXFwvLiokXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9