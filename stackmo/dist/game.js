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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__canvas__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__enum__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__input__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__game_context__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__game_runner__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__room__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actor__ = __webpack_require__(8);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Actor", function() { return __WEBPACK_IMPORTED_MODULE_6__actor__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ActorInstance", function() { return __WEBPACK_IMPORTED_MODULE_6__actor__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__boundary__ = __webpack_require__(17);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Boundary", function() { return __WEBPACK_IMPORTED_MODULE_7__boundary__["a"]; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "Enum", function() { return __WEBPACK_IMPORTED_MODULE_1__enum__; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return __WEBPACK_IMPORTED_MODULE_2__input__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__grid__ = __webpack_require__(9);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Grid", function() { return __WEBPACK_IMPORTED_MODULE_8__grid__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "GridCell", function() { return __WEBPACK_IMPORTED_MODULE_8__grid__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Room", function() { return __WEBPACK_IMPORTED_MODULE_5__room__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__sprite__ = __webpack_require__(5);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Sprite", function() { return __WEBPACK_IMPORTED_MODULE_9__sprite__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SpriteTransformation", function() { return __WEBPACK_IMPORTED_MODULE_9__sprite__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__view__ = __webpack_require__(10);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "View", function() { return __WEBPACK_IMPORTED_MODULE_10__view__["a"]; });






// export public modules








var VastgameHTML2D = /** @class */ (function () {
    function VastgameHTML2D() {
    }
    VastgameHTML2D.prototype.init = function (canvasElementID, options) {
        __WEBPACK_IMPORTED_MODULE_2__input__["a" /* Input */].init();
        var element = document.getElementById(canvasElementID);
        var canvas = new __WEBPACK_IMPORTED_MODULE_0__canvas__["a" /* GameCanvasHTML2D */](element);
        canvas.init(options.canvas);
        this.context = new __WEBPACK_IMPORTED_MODULE_3__game_context__["a" /* GameContext */](canvas);
        this.runner = new __WEBPACK_IMPORTED_MODULE_4__game_runner__["a" /* GameRunner */](options);
    };
    VastgameHTML2D.prototype.getContext = function () {
        return this.context;
    };
    VastgameHTML2D.prototype.start = function (roomID) {
        this.setRoom(roomID);
        this.runner.start(this.context);
    };
    VastgameHTML2D.prototype.setRoom = function (roomID, startArgs) {
        var room = __WEBPACK_IMPORTED_MODULE_5__room__["a" /* Room */].get(roomID);
        var previousRoom = this.context.getCurrentRoom();
        if (previousRoom) {
            previousRoom.end();
        }
        this.context.setCurrentRoom(room);
        if (room.hasStart) {
            room.callStart(startArgs);
        }
    };
    return VastgameHTML2D;
}());
var Vastgame = /** @class */ (function () {
    function Vastgame() {
    }
    Vastgame.init = function (canvasElementID, options) {
        this.game.init(canvasElementID, options);
    };
    Vastgame.start = function (initialRoomID) {
        this.game.start(initialRoomID);
        return this.game;
    };
    Vastgame.getContext = function () {
        return this.game.getContext();
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
/* 2 */
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
/* 3 */
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
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Input; });
/* unused harmony export PointerInputEvent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__enum__ = __webpack_require__(2);

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
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SpriteTransformation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sprite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SpriteAnimation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vastgame__ = __webpack_require__(0);

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
        __WEBPACK_IMPORTED_MODULE_0__vastgame__["Vastgame"].getContext().defineSprite(name, sprite);
        return sprite;
    };
    Sprite.get = function (name) {
        return __WEBPACK_IMPORTED_MODULE_0__vastgame__["Vastgame"].getContext().getSprite(name);
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
/* 6 */
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
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Background */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Room; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actor__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__input__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__grid__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__view__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vastgame__ = __webpack_require__(0);





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
        __WEBPACK_IMPORTED_MODULE_4__vastgame__["Vastgame"].getContext().defineRoom(name, room);
        return room;
    };
    Room.get = function (name) {
        return __WEBPACK_IMPORTED_MODULE_4__vastgame__["Vastgame"].getContext().getRoom(name);
    };
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
    Room.prototype.callDraw = function () {
        this.onDrawCallback(this);
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
        this.grid = new __WEBPACK_IMPORTED_MODULE_2__grid__["a" /* Grid */](tileSize, this);
        return this.grid;
    };
    Room.prototype.defineView = function (x, y, width, height) {
        this.view = new __WEBPACK_IMPORTED_MODULE_3__view__["a" /* View */](x, y, width, height);
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
                parent.step(instance);
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
    Room.prototype.draw = function (canvasContext) {
        // get view offset
        var _a = this.getViewOffset(), offsetX = _a[0], offsetY = _a[1];
        // draw room background
        if (this.background) {
            canvasContext.fill(-offsetX, -offsetY, this.background.width, this.background.height, this.background.color);
        }
        // call room draw event callback
        if (this.hasDraw) {
            this.callDraw();
        }
        var orderedInstances = this.getInstances().sort(function (a, b) {
            return (b.spriteAnimation ? b.spriteAnimation.depth : 0) - (a.spriteAnimation ? a.animation.depth : 0);
        });
        orderedInstances.forEach(function (instance) {
            // call actor draw event callbacks
            if (instance.parent.hasDraw) {
                instance.parent.callDraw(instance);
            }
            // draw sprites
            if (instance.animation && instance.visible) {
                canvasContext.drawSprite(instance.animation.source, instance.x - offsetX, instance.y - offsetY, instance.spriteAnimation.frame);
            }
        });
    };
    Room.prototype.drawSprite = function (sprite, x, y, frame) {
        if (frame === void 0) { frame = 0; }
        var _a = this.getViewOffset(), offsetX = _a[0], offsetY = _a[1];
        var canvas = __WEBPACK_IMPORTED_MODULE_4__vastgame__["Vastgame"].getContext().getCanvas();
        canvas.getContext().drawSprite(sprite, x - offsetX, y - offsetY, frame);
    };
    Room.prototype.createActor = function (actorID, x, y) {
        var parentActor = __WEBPACK_IMPORTED_MODULE_0__actor__["a" /* Actor */].get(actorID);
        var newActorInstanceID = Room.nextActorInstanceID();
        var newInstance = new __WEBPACK_IMPORTED_MODULE_0__actor__["b" /* ActorInstance */](this, parentActor, newActorInstanceID, x, y);
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
    Room.prototype.getViewOffset = function () {
        var offsetX = this.view ? this.view.x : 0;
        var offsetY = this.view ? this.view.y : 0;
        return [offsetX, offsetY];
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
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Actor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ActorInstance; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__enum__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__events__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sprite__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vastgame__ = __webpack_require__(0);





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
        __WEBPACK_IMPORTED_MODULE_4__vastgame__["Vastgame"].getContext().defineActor(name, actor);
        return actor;
    };
    Actor.get = function (name) {
        return __WEBPACK_IMPORTED_MODULE_4__vastgame__["Vastgame"].getContext().getActor(name);
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
    Actor.prototype.step = function (selfInstance) {
        if (this.hasStep) {
            this.callStep(selfInstance);
        }
        selfInstance.previousX = selfInstance.x;
        selfInstance.previousY = selfInstance.y;
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
    Actor.prototype.callDraw = function (selfInstance) {
        this.onDrawCallback(selfInstance);
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
    Actor.prototype.onCollide = function (actorName, callback) {
        this.collisionHandlers[actorName] = callback;
    };
    Actor.prototype.onEvent = function (eventName, callback) {
        this.actorEventHandlers[eventName] = callback;
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
    return Actor;
}());

var ActorInstance = /** @class */ (function () {
    function ActorInstance(room, parent, id, x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.room = room;
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
            this.spriteAnimation = new __WEBPACK_IMPORTED_MODULE_2__sprite__["b" /* SpriteAnimation */](this.parent.sprite);
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
    ActorInstance.prototype.drawSprite = function (sprite, x, y, frame) {
        if (frame === void 0) { frame = 0; }
        this.room.drawSprite(sprite, x, y, frame);
    };
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
            currentRoom: __WEBPACK_IMPORTED_MODULE_4__vastgame__["Vastgame"].getContext().getCurrentRoom(),
        };
    };
    ActorInstance.prototype.destroy = function () {
        this.state = __WEBPACK_IMPORTED_MODULE_0__enum__["ActorState"].Destroyed;
    };
    ActorInstance.prototype.collidesWith = function (other) {
        if (this.hasMoved && this.boundary && other.boundary) {
            return this.boundary.atPosition(this.x, this.y).collidesWith(other.boundary.atPosition(other.x, other.y));
        }
        return false;
    };
    ActorInstance.prototype.getMovementOffsetX = function () {
        return __WEBPACK_IMPORTED_MODULE_3__util__["a" /* MathUtil */].getLengthDirectionX(this.speed * 100, this.direction) / 100;
    };
    ActorInstance.prototype.getMovementOffsetY = function () {
        return __WEBPACK_IMPORTED_MODULE_3__util__["a" /* MathUtil */].getLengthDirectionY(this.speed * 100, this.direction) / 100;
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
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export GridClickEvent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GridCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Grid; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__enum__ = __webpack_require__(2);

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
/* 10 */
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
/* 11 */
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
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameCanvasHTML2D; });
/* unused harmony export GameCanvasContext2D */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sprite__ = __webpack_require__(5);

var DefaultHeight = 480;
var DefaultWidth = 640;
var GameCanvasHTML2D = /** @class */ (function () {
    function GameCanvasHTML2D(canvasElement) {
        this.canvasElement = canvasElement;
        this.gameCanvasContext = new GameCanvasContext2D(this.canvasElement);
    }
    GameCanvasHTML2D.prototype.getContext = function () {
        return this.gameCanvasContext;
    };
    GameCanvasHTML2D.prototype.init = function (options) {
        if (this.canvasElement) {
            this.canvasElement.height = options.height;
            this.canvasElement.width = options.width;
        }
    };
    return GameCanvasHTML2D;
}());

var GameCanvasContext2D = /** @class */ (function () {
    function GameCanvasContext2D(canvasElement) {
        this.canvasElement = canvasElement;
    }
    Object.defineProperty(GameCanvasContext2D.prototype, "canvasContext2D", {
        get: function () {
            return this.canvasElement.getContext('2d');
        },
        enumerable: true,
        configurable: true
    });
    GameCanvasContext2D.prototype.clear = function () {
        this.canvasContext2D.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height);
    };
    GameCanvasContext2D.prototype.fill = function (x, y, width, height, color) {
        this.canvasContext2D.beginPath();
        this.canvasContext2D.rect(x, y, width, height);
        this.canvasContext2D.fillStyle = color;
        this.canvasContext2D.fill();
    };
    GameCanvasContext2D.prototype.drawSprite = function (sprite, x, y, frame) {
        if (frame === void 0) { frame = 0; }
        var defaultOpacity = 1;
        var image = sprite.image;
        var frameBorder = sprite.frameBorder || 0;
        var width = sprite.width;
        var height = sprite.height;
        var frameOffset = frame * frameBorder;
        // set opacity
        var opacity = sprite.getTransform(__WEBPACK_IMPORTED_MODULE_0__sprite__["c" /* SpriteTransformation */].Opacity);
        var previousOpacity = null;
        if (opacity !== defaultOpacity && opacity !== null && opacity !== undefined) {
            previousOpacity = this.canvasContext2D.globalAlpha;
            this.canvasContext2D.globalAlpha = opacity;
        }
        this.canvasContext2D.drawImage(image, frame * width + frameOffset, 0, width, height, Math.floor(x), Math.floor(y), width, height);
        // reset opacity
        if (previousOpacity !== null) {
            this.canvasContext2D.globalAlpha = previousOpacity;
        }
    };
    return GameCanvasContext2D;
}());



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameContext; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__input__ = __webpack_require__(4);

var GameContext = /** @class */ (function () {
    function GameContext(canvas) {
        this.canvas = canvas;
        this.actors = {};
        this.events = {};
        this.rooms = {};
        this.sprites = {};
        // events
        this.nextEventID = (function () {
            var currentID = 0;
            return (function () { return ++currentID; });
        })();
    }
    GameContext.prototype.getCanvas = function () {
        return this.canvas;
    };
    // actors
    GameContext.prototype.defineActor = function (name, actor) {
        if (this.actors[name]) {
            throw new Error("Actor " + name + " has already been defined.");
        }
        this.actors[name] = actor;
    };
    GameContext.prototype.getActor = function (name) {
        if (!this.actors[name]) {
            throw new Error("Actor " + name + " has not been defined.");
        }
        return this.actors[name];
    };
    GameContext.prototype.registerEvent = function (event) {
        this.events[this.nextEventID()] = event;
    };
    GameContext.prototype.checkAndFireEvents = function () {
        for (var eventID in this.events) {
            var event_1 = this.events[eventID];
            if (event_1.conditionCallback()) {
                event_1.actionCallback();
                if (event_1.fireOnce) {
                    delete this.events[eventID];
                }
            }
        }
    };
    // rooms
    GameContext.prototype.defineRoom = function (name, room) {
        if (this.rooms[name]) {
            throw new Error("Room " + name + " has already been defined.");
        }
        this.rooms[name] = room;
    };
    GameContext.prototype.getRoom = function (name) {
        if (!this.rooms[name]) {
            throw new Error("Room " + name + " has not been defined.");
        }
        return this.rooms[name];
    };
    GameContext.prototype.getCurrentRoom = function () {
        return this.currentRoom;
    };
    GameContext.prototype.setCurrentRoom = function (room) {
        this.currentRoom = room;
        __WEBPACK_IMPORTED_MODULE_0__input__["a" /* Input */].registerClickHandler(function (ev) { return room.handleClick(ev); });
    };
    // sprites
    GameContext.prototype.defineSprite = function (name, sprite) {
        if (this.sprites[name]) {
            throw new Error("Sprite " + name + " has already been defined.");
        }
        this.sprites[name] = sprite;
    };
    GameContext.prototype.getSprite = function (name) {
        if (!this.sprites[name]) {
            throw new Error("Sprite " + name + " has not been defined.");
        }
        return this.sprites[name];
    };
    return GameContext;
}());



/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameRunner; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__enum__ = __webpack_require__(2);

var DefaultFPS = 60;
var GameRunner = /** @class */ (function () {
    function GameRunner(options) {
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
    GameRunner.prototype.start = function (gameContext) {
        var _this = this;
        var stepSize = 1 / this.targetFPS;
        var offset = 0;
        var previous = window.performance.now();
        var canvasDrawingContext = gameContext.getCanvas().getContext();
        var gameLoop = function () {
            var room = gameContext.getCurrentRoom();
            var current = window.performance.now();
            offset += (Math.min(1, (current - previous) / 1000));
            while (offset > stepSize) {
                if (_this.isRunning) {
                    gameContext.checkAndFireEvents();
                    room.step();
                }
                else {
                    return;
                }
                offset -= stepSize;
            }
            if (_this.isRunning) {
                canvasDrawingContext.clear();
                room.draw(canvasDrawingContext);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vastgame__ = __webpack_require__(0);

var DeferredEvent = /** @class */ (function () {
    function DeferredEvent(conditionCallback, actionCallback, fireOnce) {
        if (fireOnce === void 0) { fireOnce = true; }
        this.conditionCallback = conditionCallback;
        this.actionCallback = actionCallback;
        this.fireOnce = fireOnce;
    }
    DeferredEvent.register = function (event) {
        __WEBPACK_IMPORTED_MODULE_0__vastgame__["Vastgame"].getContext().registerEvent(event);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_enum__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_util__ = __webpack_require__(19);



// determine canvas dimensions based on viewport size
var _a = Object(__WEBPACK_IMPORTED_MODULE_2__util_util__["buildCanvasDimensions"])(), canvasWidth = _a[0], canvasHeight = _a[1];
__WEBPACK_IMPORTED_MODULE_2__util_util__["Registry"].set(__WEBPACK_IMPORTED_MODULE_1__util_enum__["Settings"].CanvasWidth, canvasWidth);
__WEBPACK_IMPORTED_MODULE_2__util_util__["Registry"].set(__WEBPACK_IMPORTED_MODULE_1__util_enum__["Settings"].CanvasHeight, canvasHeight);
// initialize the game canvas
__WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Vastgame"].init('game', {
    canvas: { width: canvasWidth, height: canvasHeight },
});
// load game modules
Object(__WEBPACK_IMPORTED_MODULE_2__util_util__["requireModules"])('actors', ['block', 'hud', 'player', 'wall', 'win']);
Object(__WEBPACK_IMPORTED_MODULE_2__util_util__["requireModules"])('rooms', ['level', 'level-select', 'title']);
// TODO: hacks to reset from the beginning...
__WEBPACK_IMPORTED_MODULE_2__util_util__["Registry"].set(__WEBPACK_IMPORTED_MODULE_1__util_enum__["Settings"].StackmoProgress, 1, true);
__WEBPACK_IMPORTED_MODULE_2__util_util__["Registry"].load(__WEBPACK_IMPORTED_MODULE_1__util_enum__["Settings"].StackmoProgress);
// start the game with the title room
__WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Vastgame"].start(__WEBPACK_IMPORTED_MODULE_1__util_enum__["RoomID"].Title);


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["requireModules"] = requireModules;
/* harmony export (immutable) */ __webpack_exports__["buildCanvasDimensions"] = buildCanvasDimensions;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__registry__ = __webpack_require__(6);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__enum__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(3);



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
                        instances.push(room.createActor(__WEBPACK_IMPORTED_MODULE_1__enum__["ActorID"].Block, j * cellSize, i * cellSize));
                        break;
                    case 'P':
                        instances.push(room.createActor(__WEBPACK_IMPORTED_MODULE_1__enum__["ActorID"].Player, j * cellSize, i * cellSize));
                        break;
                    case 'W':
                        instances.push(room.createActor(__WEBPACK_IMPORTED_MODULE_1__enum__["ActorID"].Win, j * cellSize, i * cellSize));
                        break;
                    case '#':
                        var wall = room.createActor(__WEBPACK_IMPORTED_MODULE_1__enum__["ActorID"].Wall, j * cellSize, i * cellSize);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_constants__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_enum__ = __webpack_require__(1);



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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_constants__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_enum__ = __webpack_require__(1);



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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_constants__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_enum__ = __webpack_require__(1);



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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_constants__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_enum__ = __webpack_require__(1);



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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_constants__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_enum__ = __webpack_require__(1);



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
WinActor.onDraw(function (self) {
    self.drawSprite(DoorSprite, self.x - doorAnimationOffsetX, self.y, 0);
    self.drawSprite(DoorSprite, self.x + 32 + doorAnimationOffsetX, self.y, 1);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_constants__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_enum__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_registry__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_sprite_fader__ = __webpack_require__(11);





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
    playerView.attach(LevelRoom.createActor(__WEBPACK_IMPORTED_MODULE_2__util_enum__["ActorID"].ExitButton), canvasWidth - __WEBPACK_IMPORTED_MODULE_1__util_constants__["GridCellSize"] - viewHUDBuffer, viewHUDBuffer);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_constants__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_enum__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_level_builder__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_sprite_fader__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_registry__ = __webpack_require__(6);






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
var levelSelectLock = false;
LevelSelectRoom.onStart(function (args) {
    canvasWidth = __WEBPACK_IMPORTED_MODULE_5__util_registry__["Registry"].get(__WEBPACK_IMPORTED_MODULE_2__util_enum__["Settings"].CanvasWidth);
    canvasHeight = __WEBPACK_IMPORTED_MODULE_5__util_registry__["Registry"].get(__WEBPACK_IMPORTED_MODULE_2__util_enum__["Settings"].CanvasHeight);
    console.log(_lastLevelNumber);
    LevelSelectRoom.setBackground(__WEBPACK_IMPORTED_MODULE_1__util_constants__["Black"], canvasWidth, canvasHeight, __WEBPACK_IMPORTED_MODULE_1__util_constants__["Black"]);
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
        unlockedLevelCount++;
        __WEBPACK_IMPORTED_MODULE_5__util_registry__["Registry"].set(__WEBPACK_IMPORTED_MODULE_2__util_enum__["Settings"].StackmoProgress, unlockedLevelCount, true);
    }
    // create level icons
    var currentRow = 0;
    var currentPosition = 0;
    for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_3__util_level_builder__["Levels"].count; i++) {
        var icon = LevelSelectRoom.createActor(__WEBPACK_IMPORTED_MODULE_2__util_enum__["ActorID"].LevelIcon, startX + currentPosition * iconSizeWithPadding, startY + currentRow * iconSizeWithPadding);
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
        var upArrow = LevelSelectRoom.createActor(__WEBPACK_IMPORTED_MODULE_2__util_enum__["ActorID"].ScrollArrow);
        upArrow.spriteAnimation.set(1);
        upArrow.x = canvasWidth - iconPadding - ScrollArrow.sprite.width;
        upArrow.direction = __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Enum"].Direction.Up;
        var downArrow = LevelSelectRoom.createActor(__WEBPACK_IMPORTED_MODULE_2__util_enum__["ActorID"].ScrollArrow);
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
LevelSelectRoom.onDraw(function (self) {
    self.drawSprite(TextSprite, startX, Math.floor(startY / 2 - TextSprite.height), 0);
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
    if (self.enabled && !levelSelectLock) {
        levelSelectLock = true;
        __WEBPACK_IMPORTED_MODULE_4__util_sprite_fader__["SpriteFader"].fadeOut([TextSprite, DigitsSprite, LevelIconSprite, ArrowSprite], function () {
            var levelNumber = self.levelNumber;
            var level = __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Room"].get(__WEBPACK_IMPORTED_MODULE_2__util_enum__["RoomID"].Level);
            __WEBPACK_IMPORTED_MODULE_3__util_level_builder__["LevelBuilder"].populateRoom(level, levelNumber);
            _lastLevelNumber = levelNumber;
            __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Vastgame"].setRoom(__WEBPACK_IMPORTED_MODULE_2__util_enum__["RoomID"].Level);
            levelSelectLock = false;
        });
    }
});
LevelIcon.onDraw(function (self) {
    if (self.enabled) {
        var levelNumber = self.levelNumber;
        var singleDigitMargin = Math.floor((LevelIconSprite.width - DigitsSprite.width) / 2);
        if (levelNumber < 10) {
            var frame = levelNumber;
            self.drawSprite(DigitsSprite, self.x + singleDigitMargin, self.y + singleDigitMargin, frame);
        }
        else {
            var tensFrame = Math.floor(levelNumber / 10);
            var tensMargin = Math.floor(singleDigitMargin / 2) - 3;
            self.drawSprite(DigitsSprite, self.x + tensMargin, self.y + singleDigitMargin, tensFrame);
            var onesFrame = levelNumber % 10;
            var onesMargin = Math.floor(singleDigitMargin * 2) - 3;
            self.drawSprite(DigitsSprite, self.x + onesMargin, self.y + singleDigitMargin, onesFrame);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_enum__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_sprite_fader__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_registry__ = __webpack_require__(6);




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
var canStart = true;
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
    if (canStart) {
        canStart = false;
        __WEBPACK_IMPORTED_MODULE_2__util_sprite_fader__["SpriteFader"].fadeOut([TitleSprite], function () {
            __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Vastgame"].setRoom(__WEBPACK_IMPORTED_MODULE_1__util_enum__["RoomID"].LevelSelect);
        });
    }
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
	"./util/constants": 3,
	"./util/constants.ts": 3,
	"./util/enum": 1,
	"./util/enum.ts": 1,
	"./util/level-builder": 20,
	"./util/level-builder.ts": 20,
	"./util/registry": 6,
	"./util/registry.ts": 6,
	"./util/sprite-fader": 11,
	"./util/sprite-fader.ts": 11,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDliODVjY2I4NWNkOGY3NTFmMTAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS92YXN0Z2FtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS91dGlsL2VudW0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9lbnVtLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL3V0aWwvY29uc3RhbnRzLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvaW5wdXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9zcHJpdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvdXRpbC9yZWdpc3RyeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL3Jvb20udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9hY3Rvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2dyaWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS92aWV3LnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL3V0aWwvc3ByaXRlLWZhZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvY2FudmFzLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvZ2FtZS1jb250ZXh0LnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvZ2FtZS1ydW5uZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9ldmVudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS91dGlsLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvYm91bmRhcnkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvZ2FtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS91dGlsL3V0aWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvdXRpbC9sZXZlbC1idWlsZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL2FjdG9ycy9ibG9jay50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9hY3RvcnMvaHVkLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL2FjdG9ycy9wbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvYWN0b3JzL3dhbGwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvYWN0b3JzL3dpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9yb29tcy9sZXZlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9yb29tcy9sZXZlbC1zZWxlY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvcm9vbXMvdGl0bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUgXlxcLlxcLy4qJCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0QyRTtBQUM1QztBQUNDO0FBQ2E7QUFDRjtBQUNiO0FBRTlCLHdCQUF3QjtBQUN1QjtBQUNUO0FBQ3ZCO0FBQ2lCO0FBQ1E7QUFDVjtBQUMwQjtBQUMxQjtBQVc5QjtJQUFBO0lBc0NBLENBQUM7SUFsQ0csNkJBQUksR0FBSixVQUFLLGVBQWUsRUFBRSxPQUFPO1FBQ3pCLHFEQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFYixJQUFJLE9BQU8sR0FBc0IsUUFBUSxDQUFDLGNB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cEIsb0JBQW9CO1lBQ3BCLG9CQUFvQjtZQUNwQixvQkFBb0I7WUFDcEIsb0JBQW9CO1lBQ3BCLG9CQUFvQjtZQUNwQixvQkFBb0I7WUFDcEIsb0JBQW9CO1lBQ3BCLG9CQUFvQjtZQUNwQixvQkFBb0I7U0FDdkI7UUFDRCxDQUFDLEVBQUU7WUFDQyxvQkFBb0I7WUFDcEIsb0JBQW9CO1lBQ3BCLG9CQUFvQjtZQUNwQixvQkFBb0I7WUFDcEIsb0JBQW9CO1lBQ3BCLG9CQUFvQjtZQUNwQixvQkFBb0I7WUFDcEIsb0JBQW9CO1lBQ3BCLG9CQUFvQjtZQUNwQixvQkFBb0I7U0FDdkI7UUFDRCxDQUFDLEVBQUU7WUFDQyxvQkFBb0I7WUFDcEIsb0JBQW9CO1lBQ3BCLG9CQUFvQjtZQUNwQixvQkFBb0I7WUFDcEIsb0JBQW9CO1lBQ3BCLG9CQUFvQjtZQUNwQixvQkFBb0I7WUFDcEIsb0JBQW9CO1lBQ3BCLG9CQUFvQjtZQUNwQixvQkFBb0I7U0FDdkIsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFO1FBQzVHLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFF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LFNBQVMsQ0FBQyxLQUFLLENBQUMsc0RBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLGVBQWUsQ0FBQyxDQUFDO0FBRS9DO0lBQ0ksRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNYLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFFakIsK0RBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUMvQiwwREFBUSxDQUFDLE9BQU8sQ0FBQyxrREFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3pDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztBQUNMLENBQUM7Ozs7Ozs7QUM3Q0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QiIsImZpbGUiOiJnYW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDA5Yjg1Y2NiODVjZDhmNzUxZjEwIiwiaW1wb3J0IHsgR2FtZUNhbnZhc0hUTUwyRCwgR2FtZUNhbnZhc09wdGlvbnMsIEdhbWVDYW52YXMgfSBmcm9tICcuL2NhbnZhcyc7XHJcbmltcG9ydCAqIGFzIEVudW0gZnJvbSAnLi9lbnVtJztcclxuaW1wb3J0IHsgSW5wdXQgfSBmcm9tICcuL2lucHV0JztcclxuaW1wb3J0IHsgR2FtZUNvbnRleHQgfSBmcm9tICcuL2dhbWUtY29udGV4dCc7XHJcbmltcG9ydCB7IEdhbWVSdW5uZXIgfSBmcm9tICcuL2dhbWUtcnVubmVyJztcclxuaW1wb3J0IHsgUm9vbSB9IGZyb20gJy4vcm9vbSc7XHJcblxyXG4vLyBleHBvcnQgcHVibGljIG1vZHVsZXNcclxuZXhwb3J0IHsgQWN0b3IsIEFjdG9ySW5zdGFuY2UgfSBmcm9tICcuL2FjdG9yJztcclxuZXhwb3J0IHsgQm91bmRhcnkgfSBmcm9tICcuL2JvdW5kYXJ5JztcclxuZXhwb3J0IHsgRW51bSB9XHJcbmV4cG9ydCB7IElucHV0IH0gZnJvbSAnLi9pbnB1dCc7XHJcbmV4cG9ydCB7IEdyaWQsIEdyaWRDZWxsIH0gZnJvbSAnLi9ncmlkJztcclxuZXhwb3J0IHsgUm9vbSB9IGZyb20gJy4vcm9vbSc7XHJcbmV4cG9ydCB7IFNwcml0ZSwgU3ByaXRlVHJhbnNmb3JtYXRpb24gfSBmcm9tICcuL3Nwcml0ZSc7XHJcbmV4cG9ydCB7IFZpZXcgfSBmcm9tICcuL3ZpZXcnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBHYW1lTGlmZWN5Y2xlQ2FsbGJhY2sge1xyXG4gICAgKGFyZ3M6IGFueSk6IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgR2FtZU9wdGlvbnMge1xyXG4gICAgY2FudmFzPzogR2FtZUNhbnZhc09wdGlvbnM7XHJcbiAgICB0YXJnZXRGUFM/OiBudW1iZXI7XHJcbn1cclxuXHJcbmNsYXNzIFZhc3RnYW1lSFRNTDJEIHtcclxuICAgIHByaXZhdGUgY29udGV4dDogR2FtZUNvbnRleHQ7XHJcbiAgICBwcml2YXRlIHJ1bm5lcjogR2FtZVJ1bm5lcjtcclxuXHJcbiAgICBpbml0KGNhbnZhc0VsZW1lbnRJRCwgb3B0aW9ucykge1xyXG4gICAgICAgIElucHV0LmluaXQoKTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgZWxlbWVudCA9IDxIVE1MQ2FudmFzRWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChjYW52YXNFbGVtZW50SUQpO1xyXG4gICAgICAgIGxldCBjYW52YXM6IEdhbWVDYW52YXMgPSBuZXcgR2FtZUNhbnZhc0hUTUwyRChlbGVtZW50KTtcclxuICAgICAgICBjYW52YXMuaW5pdChvcHRpb25zLmNhbnZhcyk7XHJcblxyXG4gICAgICAgIHRoaXMuY29udGV4dCA9IG5ldyBHYW1lQ29udGV4dChjYW52YXMpO1xyXG4gICAgICAgIHRoaXMucnVubmVyID0gbmV3IEdhbWVSdW5uZXIob3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q29udGV4dCgpOiBHYW1lQ29udGV4dCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dDtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydChyb29tSUQ6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuc2V0Um9vbShyb29tSUQpO1xyXG4gICAgICAgIHRoaXMucnVubmVyLnN0YXJ0KHRoaXMuY29udGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Um9vbShyb29tSUQ6IHN0cmluZywgc3RhcnRBcmdzPzogYW55KSB7XHJcbiAgICAgICAgbGV0IHJvb20gPSBSb29tLmdldChyb29tSUQpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBwcmV2aW91c1Jvb20gPSB0aGlzLmNvbnRleHQuZ2V0Q3VycmVudFJvb20oKTtcclxuICAgICAgICBpZiAocHJldmlvdXNSb29tKSB7XHJcbiAgICAgICAgICAgIHByZXZpb3VzUm9vbS5lbmQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY29udGV4dC5zZXRDdXJyZW50Um9vbShyb29tKTtcclxuXHJcbiAgICAgICAgaWYgKHJvb20uaGFzU3RhcnQpIHtcclxuICAgICAgICAgICAgcm9vbS5jYWxsU3RhcnQoc3RhcnRBcmdzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBWYXN0Z2FtZSB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBnYW1lID0gbmV3IFZhc3RnYW1lSFRNTDJEKCk7XHJcblxyXG4gICAgc3RhdGljIGluaXQoY2FudmFzRWxlbWVudElEOiBzdHJpbmcsIG9wdGlvbnM6IEdhbWVPcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lLmluaXQoY2FudmFzRWxlbWVudElELCBvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc3RhcnQoaW5pdGlhbFJvb21JRDogc3RyaW5nLCApOiBWYXN0Z2FtZUhUTUwyRCB7XHJcbiAgICAgICAgdGhpcy5nYW1lLnN0YXJ0KGluaXRpYWxSb29tSUQpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5nYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRDb250ZXh0KCk6IEdhbWVDb250ZXh0IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nYW1lLmdldENvbnRleHQoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2V0Um9vbShyb29tSUQ6IHN0cmluZywgc3RhcnRBcmdzPzogYW55KSB7XHJcbiAgICAgICAgdGhpcy5nYW1lLnNldFJvb20ocm9vbUlELCBzdGFydEFyZ3MpO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvdmFzdGdhbWUudHMiLCJleHBvcnQgZW51bSBTZXR0aW5ncyB7XHJcbiAgICBDYW52YXNXaWR0aCA9ICdDYW52YXNXaWR0aCcsXHJcbiAgICBDYW52YXNIZWlnaHQgPSAnQ2FudmFzSGVpZ2h0JyxcclxuICAgIFN0YWNrbW9Qcm9ncmVzcyA9ICdTdGFja21vUHJvZ3Jlc3MnLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBBY3RvcklEIHtcclxuICAgIEV4aXRCdXR0b24gPSAnQmFja0J1dHRvbicsXHJcbiAgICBCbG9jayA9ICdCbG9jaycsXHJcbiAgICBMZXZlbEljb24gPSAnTGV2ZWxJY29uJyxcclxuICAgIFBsYXllciA9ICdQbGF5ZXInLFxyXG4gICAgU2Nyb2xsQXJyb3cgPSAnU2Nyb2xsQXJyb3cnLFxyXG4gICAgVGl0bGUgPSAnVGl0bGUnLFxyXG4gICAgV2FsbCA9ICdXYWxsJyxcclxuICAgIFdpbiA9ICdXaW4nLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBSb29tSUQge1xyXG4gICAgVGl0bGUgPSAnVGl0bGUnLFxyXG4gICAgTGV2ZWxTZWxlY3QgPSAnTGV2ZWxTZWxlY3QnLFxyXG4gICAgTGV2ZWwgPSAnTGV2ZWwnLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBTcHJpdGVJRCB7XHJcbiAgICBBcnJvd3MgPSAnQXJyb3dzJyxcclxuICAgIERpZ2l0cyA9ICdEaWdpdHMnLFxyXG4gICAgRG9vclNoZWV0ID0gJ0Rvb3JTaGVldCcsXHJcbiAgICBCb3ggPSAnQm94JyxcclxuICAgIExldmVsSWNvbiA9ICdMZXZlbEljb24nLFxyXG4gICAgU3RhY2ttb1NoZWV0ID0gJ1N0YWNrbW9TaGVldCcsXHJcbiAgICBUZXh0U2hlZXQgPSAnVGV4dFNoZWV0JyxcclxuICAgIFRpdGxlID0gJ1RpdGxlJyxcclxuICAgIFdhbGwgPSAnV2FsbCcsXHJcbiAgICBYID0gJ1gnLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBHYW1lQWN0aW9uIHtcclxuICAgIERyb3AgPSAnRHJvcCcsXHJcbiAgICBGYWxsID0gJ0ZhbGwnLFxyXG4gICAgSnVtcCA9ICdKdW1wJyxcclxuICAgIExpZnQgPSAnTGlmdCcsXHJcbiAgICBNb3ZlID0gJ01vdmUnLFxyXG4gICAgQ2hlY2tTdG9wTW92aW5nID0gJ0NoZWNrU3RvcE1vdmluZycsXHJcbiAgICBTdG9wID0gJ1N0b3AnLFxyXG4gICAgV2luID0gJ1dpbicsXHJcbn1cclxuXHJcbi8vIGZyb20gdG9wIHJvdyBvZiBORVMgY29sb3IgcGFsZXR0ZSAoVE9ETzogcmVzdCBvZiB0aGVtKVxyXG5leHBvcnQgZW51bSBMZXZlbEJnQ29sb3Ige1xyXG4gICAgRGFya1RlYWwgPSAnIzAwMTgyMCcsXHJcbiAgICBUZWFsID0gJyMwMDYwNzAnLFxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2dhbWUvdXRpbC9lbnVtLnRzIiwiZXhwb3J0IGVudW0gQWN0b3JTdGF0ZSB7XHJcbiAgICBBY3RpdmUgPSAxLFxyXG4gICAgRGVzdHJveWVkID0gMixcclxufVxyXG5cclxuZXhwb3J0IGVudW0gRGlyZWN0aW9uIHtcclxuICAgIFJpZ2h0ID0gMCxcclxuICAgIERvd24gPSA5MCxcclxuICAgIExlZnQgPSAxODAsXHJcbiAgICBVcCA9IDI3MCxcclxufVxyXG5cclxuZXhwb3J0IGVudW0gR2FtZVN0YXRlIHtcclxuICAgIFJ1bm5pbmcgPSAxLFxyXG4gICAgUGF1c2VkID0gMixcclxufVxyXG5cclxuZXhwb3J0IGVudW0gS2V5IHtcclxuICAgIEFueSA9IC0xLFxyXG4gICAgU3BhY2UgPSAzMixcclxuICAgIExlZnQgPSAzNyxcclxuICAgIFVwID0gMzgsXHJcbiAgICBSaWdodCA9IDM5LFxyXG4gICAgRG93biA9IDQwLFxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvZW51bS50cyIsImV4cG9ydCBjb25zdCBCbGFjayA9ICcjMDAwJztcclxuZXhwb3J0IGNvbnN0IENhbnZhc01heFdpZHRoID0gMTAyNDtcclxuZXhwb3J0IGNvbnN0IENhbnZhc01heEhlaWdodCA9NzY4O1xyXG5leHBvcnQgY29uc3QgR3JpZENlbGxTaXplID0gNjQ7XHJcbmV4cG9ydCBjb25zdCBCbG9ja0ZhbGxTcGVlZCA9IDg7XHJcbmV4cG9ydCBjb25zdCBQbGF5ZXJNb3ZlU3BlZWQgPSA0O1xyXG5leHBvcnQgY29uc3QgUGxheWVySnVtcFNwZWVkID0gODtcclxuZXhwb3J0IGNvbnN0IFBsYXllckZhbGxTcGVlZCA9IDg7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2dhbWUvdXRpbC9jb25zdGFudHMudHMiLCJpbXBvcnQgeyBLZXkgfSBmcm9tICcuL2VudW0nO1xyXG5cclxuZXhwb3J0IGNsYXNzIElucHV0IHtcclxuICAgIHByaXZhdGUgc3RhdGljIGNsaWNrSGFuZGxlcnM6IENvbmNyZXRlRXZlbnRIYW5kbGVyPFBvaW50ZXJJbnB1dEV2ZW50PltdID0gW107XHJcbiAgICBwcml2YXRlIHN0YXRpYyBrZXlib2FyZEhhbmRsZXJzOiB7IFtjb2RlOiBudW1iZXJdOiBDb25jcmV0ZUV2ZW50SGFuZGxlcjxLZXlib2FyZEV2ZW50PiB9ID0ge307XHJcbiAgICBwcml2YXRlIHN0YXRpYyBrZXlib2FyZEFjdGl2aXR5OiB7IFtjb2RlOiBudW1iZXJdOiBib29sZWFuIH0gPSB7fTtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfYWN0aXZlUG9pbnRlckV2ZW50OiBQb2ludGVySW5wdXRFdmVudCA9IG51bGw7XHJcbiAgICBzdGF0aWMgZ2V0IGNsaWNrQWN0aXZlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAhIUlucHV0Ll9hY3RpdmVQb2ludGVyRXZlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGluaXQoKSB7XHJcblxyXG4gICAgICAgIGxldCByYWlzZVBvaW50ZXJFdmVudCA9IChldjogUG9pbnRlcklucHV0RXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKElucHV0Ll9hY3RpdmVQb2ludGVyRXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgSW5wdXQuX2FjdGl2ZVBvaW50ZXJFdmVudCA9IGV2O1xyXG5cclxuICAgICAgICAgICAgaWYgKElucHV0LmNsaWNrSGFuZGxlcnMubGVuZ3RoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgSW5wdXQuY2xpY2tIYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyOiBDb25jcmV0ZUV2ZW50SGFuZGxlcjxQb2ludGVySW5wdXRFdmVudD4pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaGFuZGxlci5pc0FsaXZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXIuY2FsbGJhY2soZXYpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgbGV0IGVuZFBvaW50ZXJFdmVudCA9ICgpID0+IHtcclxuICAgICAgICAgICAgSW5wdXQuX2FjdGl2ZVBvaW50ZXJFdmVudCA9IG51bGw7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gcmVnaXN0ZXIgbW91c2UvdG91Y2ggaW5wdXQgXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5vbm1vdXNlZG93biA9IGZ1bmN0aW9uKHRoaXM6IGFueSwgZXY6IE1vdXNlRXZlbnQpIHtcclxuICAgICAgICAgICAgcmFpc2VQb2ludGVyRXZlbnQoUG9pbnRlcklucHV0RXZlbnQuZnJvbU1vdXNlRXZlbnQoZXYpKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkub250b3VjaHN0YXJ0ID0gZnVuY3Rpb24gKGV2OiBUb3VjaEV2ZW50KSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkub25tb3VzZWRvd24gPSBudWxsO1xyXG4gICAgICAgICAgICByYWlzZVBvaW50ZXJFdmVudChQb2ludGVySW5wdXRFdmVudC5mcm9tVG91Y2hFdmVudChldikpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5vbm1vdXNldXAgPSBlbmRQb2ludGVyRXZlbnQ7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5vbnRvdWNoZW5kID0gZW5kUG9pbnRlckV2ZW50O1xyXG5cclxuICAgICAgICAvLyByZWdpc3RlciBrZXlib2FyZCBpbnB1dFxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkub25rZXlkb3duID0gKGV2OiBLZXlib2FyZEV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBrZXlDb2RlID0gZXYua2V5Q29kZSB8fCBldi5jb2RlXHJcbiAgICAgICAgICAgIGxldCBoYW5kbGVyOiBDb25jcmV0ZUV2ZW50SGFuZGxlcjxLZXlib2FyZEV2ZW50PiA9IHRoaXMua2V5Ym9hcmRIYW5kbGVyc1trZXlDb2RlXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChoYW5kbGVyICYmIGhhbmRsZXIuaXNBbGl2ZSAmJiAhdGhpcy5rZXlib2FyZEFjdGl2aXR5W2tleUNvZGVdKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmtleWJvYXJkQWN0aXZpdHlba2V5Q29kZV0gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlci5jYWxsYmFjayhldik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBnbG9iYWxIYW5kbGVyID0gdGhpcy5rZXlib2FyZEhhbmRsZXJzW0tleS5BbnldO1xyXG4gICAgICAgICAgICBpZiAoZ2xvYmFsSGFuZGxlciAmJiBnbG9iYWxIYW5kbGVyLmlzQWxpdmUgJiYgIXRoaXMua2V5Ym9hcmRBY3Rpdml0eVtLZXkuQW55XSkgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMua2V5Ym9hcmRBY3Rpdml0eVtLZXkuQW55XSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBnbG9iYWxIYW5kbGVyLmNhbGxiYWNrKGV2KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5vbmtleXVwID0gKGV2OiBLZXlib2FyZEV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBrZXlDb2RlID0gZXYua2V5Q29kZSB8fCBldi5jb2RlXHJcbiAgICAgICAgICAgIGxldCBoYW5kbGVyOiBDb25jcmV0ZUV2ZW50SGFuZGxlcjxLZXlib2FyZEV2ZW50PiA9IHRoaXMua2V5Ym9hcmRIYW5kbGVyc1trZXlDb2RlXTtcclxuICAgICAgICAgICAgdGhpcy5rZXlib2FyZEFjdGl2aXR5W0tleS5BbnldID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICBpZiAoaGFuZGxlciAmJiBoYW5kbGVyLmlzQWxpdmUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMua2V5Ym9hcmRBY3Rpdml0eVtrZXlDb2RlXSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcmVnaXN0ZXJDbGlja0hhbmRsZXIoY2FsbGJhY2s6IChldmVudDogUG9pbnRlcklucHV0RXZlbnQpID0+IHZvaWQpOiBDb25jcmV0ZUV2ZW50SGFuZGxlcjxQb2ludGVySW5wdXRFdmVudD4ge1xyXG4gICAgICAgIGxldCBjbGlja0hhbmRsZXIgPSBuZXcgQ29uY3JldGVFdmVudEhhbmRsZXI8UG9pbnRlcklucHV0RXZlbnQ+KGNhbGxiYWNrKTs7XHJcbiAgICAgICAgSW5wdXQuY2xpY2tIYW5kbGVycy5wdXNoKGNsaWNrSGFuZGxlcik7XHJcblxyXG4gICAgICAgIHJldHVybiBjbGlja0hhbmRsZXI7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHJlZ2lzdGVyS2V5SGFuZGxlcihrZXk6IEtleSwgY2FsbGJhY2s6IChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4gdm9pZCk6IENvbmNyZXRlRXZlbnRIYW5kbGVyPEtleWJvYXJkRXZlbnQ+IHtcclxuICAgICAgICBsZXQga2V5SGFuZGxlciA9IG5ldyBDb25jcmV0ZUV2ZW50SGFuZGxlcjxLZXlib2FyZEV2ZW50PihjYWxsYmFjayk7XHJcbiAgICAgICAgSW5wdXQua2V5Ym9hcmRIYW5kbGVyc1trZXldID0ga2V5SGFuZGxlclxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBrZXlIYW5kbGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBrZXlEb3duKGtleTogS2V5KTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuICEhdGhpcy5rZXlib2FyZEFjdGl2aXR5W2tleV07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRXZlbnRIYW5kbGVyIHtcclxuICAgIGNhbGxiYWNrOiAoZXZlbnQ6IGFueSkgPT4gdm9pZDtcclxuICAgIGRpc3Bvc2U6ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmNsYXNzIENvbmNyZXRlRXZlbnRIYW5kbGVyPFQ+IGltcGxlbWVudHMgRXZlbnRIYW5kbGVyIHtcclxuICAgIGlzQWxpdmU6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBjYWxsYmFjazogKGV2ZW50OiBUKSA9PiB2b2lkKSB7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGRpc3Bvc2UoKSB7XHJcbiAgICAgICAgdGhpcy5pc0FsaXZlID0gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQb2ludGVySW5wdXRFdmVudCB7XHJcbiAgICB4OiBudW1iZXI7XHJcbiAgICB5OiBudW1iZXI7XHJcblxyXG4gICAgc3RhdGljIGZyb21Nb3VzZUV2ZW50KGV2OiBNb3VzZUV2ZW50KTogUG9pbnRlcklucHV0RXZlbnQge1xyXG4gICAgICAgIHJldHVybiB7IHg6IGV2Lm9mZnNldFgsIHk6IGV2Lm9mZnNldFkgfTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZnJvbVRvdWNoRXZlbnQoZXY6IFRvdWNoRXZlbnQpOiBQb2ludGVySW5wdXRFdmVudCB7XHJcbiAgICAgICAgbGV0IHRvdWNoID0gZXYudG91Y2hlc1swXTtcclxuICAgICAgICByZXR1cm4geyB4OiB0b3VjaCA/IHRvdWNoLmNsaWVudFggOiAwLCB5OiB0b3VjaCA/IHRvdWNoLmNsaWVudFkgOiAwIH07XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL2lucHV0LnRzIiwiaW1wb3J0IHsgQWN0b3IgfSBmcm9tICcuL2FjdG9yJztcclxuaW1wb3J0IHsgVmFzdGdhbWUgfSBmcm9tICcuL3Zhc3RnYW1lJztcclxuXHJcbmV4cG9ydCBlbnVtIFNwcml0ZVRyYW5zZm9ybWF0aW9uIHtcclxuICAgIE9wYWNpdHkgPSAwLFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU3ByaXRlIHtcclxuICAgIHByaXZhdGUgdHJhbnNmb3JtYXRvbnM6IHsgW2luZGV4OiBudW1iZXJdOiBudW1iZXIgfSA9IHt9O1xyXG5cclxuICAgIHN0YXRpYyBkZWZpbmUobmFtZTogc3RyaW5nLCBvcHRpb25zOiBTcHJpdGVPcHRpb25zKTogU3ByaXRlIHtcclxuICAgICAgICBsZXQgc3ByaXRlID0gbmV3IFNwcml0ZShvcHRpb25zKTtcclxuICAgICAgICBWYXN0Z2FtZS5nZXRDb250ZXh0KCkuZGVmaW5lU3ByaXRlKG5hbWUsIHNwcml0ZSk7XHJcblxyXG4gICAgICAgIHJldHVybiBzcHJpdGU7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldChuYW1lOiBzdHJpbmcpOiBTcHJpdGUge1xyXG4gICAgICAgIHJldHVybiBWYXN0Z2FtZS5nZXRDb250ZXh0KCkuZ2V0U3ByaXRlKG5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlYWRvbmx5IGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50O1xyXG4gICAgcmVhZG9ubHkgaGVpZ2h0OiBudW1iZXI7XHJcbiAgICByZWFkb25seSB3aWR0aDogbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZnJhbWVCb3JkZXI6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zOiBTcHJpdGVPcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5pbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIHRoaXMuaW1hZ2Uuc3JjID0gb3B0aW9ucy5pbWFnZVNvdXJjZTtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMud2lkdGggPSBvcHRpb25zLndpZHRoO1xyXG4gICAgICAgIHRoaXMuZnJhbWVCb3JkZXIgPSBvcHRpb25zLmZyYW1lQm9yZGVyO1xyXG5cclxuICAgICAgICB0aGlzLnNldERlZmF1bHRUcmFuc2Zvcm1zKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXREZWZhdWx0VHJhbnNmb3JtcygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnRyYW5zZm9ybWF0b25zW1Nwcml0ZVRyYW5zZm9ybWF0aW9uLk9wYWNpdHldID0gMTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUcmFuc2Zvcm0odHJhbnNmb3JtYXRpb246IFNwcml0ZVRyYW5zZm9ybWF0aW9uKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50cmFuc2Zvcm1hdG9uc1t0cmFuc2Zvcm1hdGlvbl07XHJcbiAgICB9XHJcblxyXG4gICAgdHJhbnNmb3JtKHRyYW5zZm9ybWF0aW9uOiBTcHJpdGVUcmFuc2Zvcm1hdGlvbiwgZGVsdGE6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudHJhbnNmb3JtYXRvbnNbdHJhbnNmb3JtYXRpb25dICs9IGRlbHRhO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFRyYW5zZm9ybSh0cmFuc2Zvcm1hdGlvbjogU3ByaXRlVHJhbnNmb3JtYXRpb24sIHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnRyYW5zZm9ybWF0b25zW3RyYW5zZm9ybWF0aW9uXSA9IHZhbHVlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNwcml0ZU9wdGlvbnMge1xyXG4gICAgaW1hZ2VTb3VyY2U6IHN0cmluZztcclxuICAgIGhlaWdodDogbnVtYmVyO1xyXG4gICAgd2lkdGg6IG51bWJlcjtcclxuICAgIGZyYW1lQm9yZGVyPzogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU3ByaXRlQW5pbWF0aW9uIHtcclxuICAgIHByaXZhdGUgY3VycmVudDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgdGltZXI6IGFueTtcclxuXHJcbiAgICBkZXB0aDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihyZWFkb25seSBzcHJpdGU6IFNwcml0ZSkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudCA9IDA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldCBmcmFtZSgpOiBudW1iZXIgeyBcclxuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzb3VyY2UoKTogU3ByaXRlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zcHJpdGU7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIsIGRlbGF5PzogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gc3RhcnQ7XHJcblxyXG4gICAgICAgIHRoaXMudGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudCA9IHRoaXMuY3VycmVudCA9PT0gZW5kID8gc3RhcnQgOiB0aGlzLmN1cnJlbnQgKyAxO1xyXG4gICAgICAgIH0sIGRlbGF5KTtcclxuICAgIH1cclxuXHJcbiAgICBzdG9wKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLnRpbWVyKSB7XHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldChmcmFtZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gZnJhbWU7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9zcHJpdGUudHMiLCJleHBvcnQgY2xhc3MgUmVnaXN0cnkge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgdmFsdWVzOiB7IFtpZDogc3RyaW5nXTogYW55IH0gPSB7fTtcclxuXHJcbiAgICBzdGF0aWMgZ2V0KGlkOiBzdHJpbmcpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlc1tpZF07XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGxvYWQoaWQ6IHN0cmluZyk6IGFueSB7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbaWRdID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oaWQpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlc1tpZF07XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNldChpZDogc3RyaW5nLCB2YWw6IGFueSwgcGVyc2lzdCA9IGZhbHNlKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbaWRdID0gdmFsO1xyXG4gICAgICAgIGlmIChwZXJzaXN0KSB7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGlkLCB2YWwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9nYW1lL3V0aWwvcmVnaXN0cnkudHMiLCJpbXBvcnQgeyBBY3RvciwgQWN0b3JJbnN0YW5jZSwgQ29sbGlzaW9uQ2FsbGJhY2sgfSBmcm9tICcuL2FjdG9yJztcclxuaW1wb3J0IHsgR2FtZUNhbnZhc0NvbnRleHQsIFJvb21EcmF3RXZlbnQgfSBmcm9tICcuL2NhbnZhcyc7XHJcbmltcG9ydCB7IEtleSB9IGZyb20gJy4vZW51bSc7XHJcbmltcG9ydCB7IEV2ZW50SGFuZGxlciwgSW5wdXQsIFBvaW50ZXJJbnB1dEV2ZW50IH0gZnJvbSAnLi9pbnB1dCc7XHJcbmltcG9ydCB7IEdyaWQgfSBmcm9tICcuL2dyaWQnO1xyXG5pbXBvcnQgeyBHYW1lTGlmZWN5Y2xlQ2FsbGJhY2sgfSBmcm9tICcuL3Zhc3RnYW1lJztcclxuaW1wb3J0IHsgU3ByaXRlIH0gZnJvbSAnLi9zcHJpdGUnO1xyXG5pbXBvcnQgeyBWaWV3IH0gZnJvbSAnLi92aWV3JztcclxuaW1wb3J0IHsgVmFzdGdhbWUgfSBmcm9tICcuL3Zhc3RnYW1lJztcclxuXHJcbmV4cG9ydCBjbGFzcyBCYWNrZ3JvdW5kIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICByZWFkb25seSBjb2xvcjogc3RyaW5nLFxyXG4gICAgICAgIHJlYWRvbmx5IHBhZ2VDb2xvcjogc3RyaW5nID0gJyMwMDAnLCBcclxuICAgICAgICByZWFkb25seSB3aWR0aDogbnVtYmVyLCBcclxuICAgICAgICByZWFkb25seSBoZWlnaHQ6IG51bWJlcikge1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUm9vbSB7XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgbmV4dEFjdG9ySW5zdGFuY2VJRCA9ICgoKSA9PiB7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRJRCA9IDA7XHJcbiAgICAgICAgcmV0dXJuICgoKSA9PiArK2N1cnJlbnRJRCk7XHJcbiAgICB9KSgpO1xyXG5cclxuICAgIHN0YXRpYyBkZWZpbmUobmFtZTogc3RyaW5nKTogUm9vbSB7XHJcbiAgICAgICAgbGV0IHJvb20gPSBuZXcgUm9vbSgpO1xyXG4gICAgICAgIFZhc3RnYW1lLmdldENvbnRleHQoKS5kZWZpbmVSb29tKG5hbWUsIHJvb20pO1xyXG4gICAgICAgIHJldHVybiByb29tO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQobmFtZTogc3RyaW5nKTogUm9vbSB7XHJcbiAgICAgICAgcmV0dXJuIFZhc3RnYW1lLmdldENvbnRleHQoKS5nZXRSb29tKG5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYWN0b3JJbnN0YW5jZU1hcDogeyBbaW5kZXg6IG51bWJlcl06IEFjdG9ySW5zdGFuY2UgfSA9IHt9O1xyXG5cclxuICAgIHByaXZhdGUgZXZlbnRIYW5kbGVyczogRXZlbnRIYW5kbGVyW10gPSBbXTtcclxuICAgIC8vIFRPRE86IGNvbnNpZGVyIG1vdmluZyBHcmlkIHRvIGV4dGVuZGVkIGNsYXNzIG9yIGRlY29yYXRvclxyXG4gICAgcHJpdmF0ZSBncmlkOiBHcmlkO1xyXG4gICAgdmlldzogVmlldztcclxuXHJcbiAgICBwcml2YXRlIG9uU3RhcnRDYWxsYmFjazogR2FtZUxpZmVjeWNsZUNhbGxiYWNrO1xyXG4gICAgcHJpdmF0ZSBvbkRyYXdDYWxsYmFjazogUm9vbURyYXdFdmVudDtcclxuICAgIFxyXG4gICAgYmFja2dyb3VuZDogQmFja2dyb3VuZDtcclxuXHJcbiAgICBnZXQgaGFzU3RhcnQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuICEhdGhpcy5vblN0YXJ0Q2FsbGJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgb25TdGFydChjYWxsYmFjazogR2FtZUxpZmVjeWNsZUNhbGxiYWNrKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vblN0YXJ0Q2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgIH1cclxuXHJcbiAgICBjYWxsU3RhcnQoYXJncz86IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMub25TdGFydENhbGxiYWNrKGFyZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBoYXNEcmF3KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAhIXRoaXMub25EcmF3Q2FsbGJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgb25EcmF3KGNhbGxiYWNrOiBSb29tRHJhd0V2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vbkRyYXdDYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbGxEcmF3KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMub25EcmF3Q2FsbGJhY2sodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljayhjYWxsYmFjazogKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB2b2lkKSB7XHJcbiAgICAgICAgbGV0IGNsaWNrSGFuZGxlciA9IElucHV0LnJlZ2lzdGVyQ2xpY2tIYW5kbGVyKGNhbGxiYWNrKTtcclxuICAgICAgICB0aGlzLmV2ZW50SGFuZGxlcnMucHVzaChjbGlja0hhbmRsZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uS2V5KGtleTogS2V5LCBjYWxsYmFjazogKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiB2b2lkKSB7XHJcbiAgICAgICAgbGV0IGtleUhhbmRsZXIgPSBJbnB1dC5yZWdpc3RlcktleUhhbmRsZXIoa2V5LCBjYWxsYmFjayk7XHJcbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXJzLnB1c2goa2V5SGFuZGxlcik7XHJcbiAgICB9XHJcblxyXG4gICAgZGVmaW5lR3JpZCh0aWxlU2l6ZTogbnVtYmVyKTogR3JpZCB7XHJcbiAgICAgICAgdGhpcy5ncmlkID0gbmV3IEdyaWQodGlsZVNpemUsIHRoaXMpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5ncmlkO1xyXG4gICAgfVxyXG5cclxuICAgIGRlZmluZVZpZXcoeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKTogVmlldyB7XHJcbiAgICAgICAgdGhpcy52aWV3ID0gbmV3IFZpZXcoeCwgeSwgd2lkdGgsIGhlaWdodCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnZpZXc7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QmFja2dyb3VuZChjb2xvcjogc3RyaW5nLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgcGFnZUNvbG9yPzogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kID0gbmV3IEJhY2tncm91bmQoY29sb3IsIHBhZ2VDb2xvciwgd2lkdGgsIGhlaWdodCk7XHJcblxyXG4gICAgICAgIGlmIChwYWdlQ29sb3IpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBwYWdlQ29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0ZXAoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIHRoaXMuZ2V0SW5zdGFuY2VzKCkuZm9yRWFjaChpbnN0YW5jZSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBwYXJlbnQgPSBpbnN0YW5jZS5wYXJlbnQ7XHJcblxyXG4gICAgICAgICAgICBpZiAoaW5zdGFuY2UuaXNBY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgIC8vIGFwcGx5IGFjdG9yIGluc3RhbmNlIG1vdmVtZW50XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5zdGFuY2Uuc3BlZWQgIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcGx5SW5zdGFuY2VNb3ZlbWVudChpbnN0YW5jZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja0NvbGxpc2lvbnMoaW5zdGFuY2UpO1xyXG5cclxuICAgICAgICAgICAgICAgIHBhcmVudC5zdGVwKGluc3RhbmNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVzdHJveUFjdG9ySW5zdGFuY2UoaW5zdGFuY2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnZpZXcpIHtcclxuICAgICAgICAgICAgdGhpcy52aWV3LnVwZGF0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFwcGx5SW5zdGFuY2VNb3ZlbWVudChpbnN0YW5jZTogQWN0b3JJbnN0YW5jZSk6IHZvaWQge1xyXG4gICAgICAgIGxldCBvZmZzZXRYID0gTWF0aC5yb3VuZChpbnN0YW5jZS5nZXRNb3ZlbWVudE9mZnNldFgoKSk7XHJcbiAgICAgICAgbGV0IG9mZnNldFkgPSBNYXRoLnJvdW5kKGluc3RhbmNlLmdldE1vdmVtZW50T2Zmc2V0WSgpKTtcclxuXHJcbiAgICAgICAgaWYgKG9mZnNldFggIT09IDAgfHwgb2Zmc2V0WSAhPT0gMCkge1xyXG4gICAgICAgICAgICBpbnN0YW5jZS5zZXRQb3NpdGlvblJlbGF0aXZlKG9mZnNldFgsIG9mZnNldFkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNoZWNrQ29sbGlzaW9ucyhzZWxmSW5zdGFuY2U6IEFjdG9ySW5zdGFuY2UpOiB2b2lkIHtcclxuICAgICAgICBsZXQgcGFyZW50ID0gc2VsZkluc3RhbmNlLnBhcmVudDs7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9yIChsZXQgYWN0b3JOYW1lIGluIHBhcmVudC5jb2xsaXNpb25IYW5kbGVycykge1xyXG4gICAgICAgICAgICBsZXQgY2FsbGJhY2sgPSBwYXJlbnQuY29sbGlzaW9uSGFuZGxlcnNbYWN0b3JOYW1lXTtcclxuICAgICAgICAgICAgbGV0IG90aGVyQWN0b3IgPSBBY3Rvci5nZXQoYWN0b3JOYW1lKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IG90aGVySUQgaW4gdGhpcy5hY3Rvckluc3RhbmNlTWFwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgb3RoZXIgPSB0aGlzLmFjdG9ySW5zdGFuY2VNYXBbb3RoZXJJRF07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKG90aGVyLnBhcmVudCA9PT0gb3RoZXJBY3Rvcikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZkluc3RhbmNlICE9PSBvdGhlciAmJiBzZWxmSW5zdGFuY2UuY29sbGlkZXNXaXRoKG90aGVyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhzZWxmSW5zdGFuY2UsIG90aGVyKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KGNhbnZhc0NvbnRleHQ6IEdhbWVDYW52YXNDb250ZXh0KTogdm9pZCB7XHJcbiAgICAgICAgLy8gZ2V0IHZpZXcgb2Zmc2V0XHJcbiAgICAgICAgbGV0IFtvZmZzZXRYLCBvZmZzZXRZXSA9IHRoaXMuZ2V0Vmlld09mZnNldCgpO1xyXG5cclxuICAgICAgICAvLyBkcmF3IHJvb20gYmFja2dyb3VuZFxyXG4gICAgICAgIGlmICh0aGlzLmJhY2tncm91bmQpIHtcclxuICAgICAgICAgICAgY2FudmFzQ29udGV4dC5maWxsKC1vZmZzZXRYLCAtb2Zmc2V0WSwgdGhpcy5iYWNrZ3JvdW5kLndpZHRoLCB0aGlzLmJhY2tncm91bmQuaGVpZ2h0LCB0aGlzLmJhY2tncm91bmQuY29sb3IpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gY2FsbCByb29tIGRyYXcgZXZlbnQgY2FsbGJhY2tcclxuICAgICAgICBpZiAodGhpcy5oYXNEcmF3KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FsbERyYXcoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBvcmRlcmVkSW5zdGFuY2VzID0gdGhpcy5nZXRJbnN0YW5jZXMoKS5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoYi5zcHJpdGVBbmltYXRpb24gPyBiLnNwcml0ZUFuaW1hdGlvbi5kZXB0aCA6IDApIC0gKGEuc3ByaXRlQW5pbWF0aW9uID8gYS5hbmltYXRpb24uZGVwdGggOiAwKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgb3JkZXJlZEluc3RhbmNlcy5mb3JFYWNoKGluc3RhbmNlID0+IHtcclxuICAgICAgICAgICAgLy8gY2FsbCBhY3RvciBkcmF3IGV2ZW50IGNhbGxiYWNrc1xyXG4gICAgICAgICAgICBpZiAoaW5zdGFuY2UucGFyZW50Lmhhc0RyYXcpIHtcclxuICAgICAgICAgICAgICAgIGluc3RhbmNlLnBhcmVudC5jYWxsRHJhdyhpbnN0YW5jZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGRyYXcgc3ByaXRlc1xyXG4gICAgICAgICAgICBpZiAoaW5zdGFuY2UuYW5pbWF0aW9uICYmIGluc3RhbmNlLnZpc2libGUpIHtcclxuICAgICAgICAgICAgICAgIGNhbnZhc0NvbnRleHQuZHJhd1Nwcml0ZShpbnN0YW5jZS5hbmltYXRpb24uc291cmNlLCBpbnN0YW5jZS54IC0gb2Zmc2V0WCwgaW5zdGFuY2UueSAtIG9mZnNldFksIGluc3RhbmNlLnNwcml0ZUFuaW1hdGlvbi5mcmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3U3ByaXRlKHNwcml0ZTogU3ByaXRlLCB4OiBudW1iZXIsIHk6IG51bWJlciwgZnJhbWU6IG51bWJlciA9IDApIHtcclxuICAgICAgICBsZXQgW29mZnNldFgsIG9mZnNldFldID0gdGhpcy5nZXRWaWV3T2Zmc2V0KCk7XHJcbiAgICAgICAgbGV0IGNhbnZhcyA9IFZhc3RnYW1lLmdldENvbnRleHQoKS5nZXRDYW52YXMoKTtcclxuICAgICAgICBjYW52YXMuZ2V0Q29udGV4dCgpLmRyYXdTcHJpdGUoc3ByaXRlLCB4IC0gb2Zmc2V0WCwgeSAtIG9mZnNldFksIGZyYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVBY3RvcihhY3RvcklEOiBzdHJpbmcsIHg/OiBudW1iZXIsIHk/OiBudW1iZXIpOiBBY3Rvckluc3RhbmNlIHtcclxuICAgICAgICBsZXQgcGFyZW50QWN0b3IgPSBBY3Rvci5nZXQoYWN0b3JJRCk7XHJcblxyXG4gICAgICAgIGxldCBuZXdBY3Rvckluc3RhbmNlSUQgPSBSb29tLm5leHRBY3Rvckluc3RhbmNlSUQoKTtcclxuICAgICAgICBsZXQgbmV3SW5zdGFuY2UgPSBuZXcgQWN0b3JJbnN0YW5jZSh0aGlzLCBwYXJlbnRBY3RvciwgbmV3QWN0b3JJbnN0YW5jZUlELCB4LCB5KTtcclxuXHJcbiAgICAgICAgdGhpcy5hY3Rvckluc3RhbmNlTWFwW25ld0FjdG9ySW5zdGFuY2VJRF0gPSBuZXdJbnN0YW5jZTtcclxuXHJcbiAgICAgICAgaWYgKHBhcmVudEFjdG9yLmhhc0NyZWF0ZSkge1xyXG4gICAgICAgICAgICBwYXJlbnRBY3Rvci5jYWxsQ3JlYXRlKG5ld0luc3RhbmNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBuZXdJbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGRlc3Ryb3lBY3Rvckluc3RhbmNlKGluc3RhbmNlOiBBY3Rvckluc3RhbmNlKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHBhcmVudCA9IGluc3RhbmNlLnBhcmVudDtcclxuXHJcbiAgICAgICAgaWYgKHBhcmVudC5oYXNEZXN0cm95KSB7XHJcbiAgICAgICAgICAgIHBhcmVudC5jYWxsRGVzdHJveShpbnN0YW5jZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkZWxldGUgdGhpcy5hY3Rvckluc3RhbmNlTWFwW2luc3RhbmNlLmlkXTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFZpZXdPZmZzZXQoKTogW251bWJlciwgbnVtYmVyXSB7XHJcbiAgICAgICAgbGV0IG9mZnNldFggPSB0aGlzLnZpZXcgPyB0aGlzLnZpZXcueCA6IDA7XHJcbiAgICAgICAgbGV0IG9mZnNldFkgPSB0aGlzLnZpZXcgPyB0aGlzLnZpZXcueSA6IDA7XHJcblxyXG4gICAgICAgIHJldHVybiBbb2Zmc2V0WCwgb2Zmc2V0WV07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SW5zdGFuY2VzKCk6IEFjdG9ySW5zdGFuY2VbXSB7XHJcbiAgICAgICAgbGV0IGluc3RhbmNlcyA9IFtdO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpbnN0YW5jZSBpbiB0aGlzLmFjdG9ySW5zdGFuY2VNYXApIHtcclxuICAgICAgICAgICAgaW5zdGFuY2VzLnB1c2godGhpcy5hY3Rvckluc3RhbmNlTWFwW2luc3RhbmNlXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gaW5zdGFuY2VzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEluc3RhbmNlc0F0UG9zaXRpb24oeDogbnVtYmVyLCB5OiBudW1iZXIpOiBBY3Rvckluc3RhbmNlW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEluc3RhbmNlcygpLmZpbHRlcihpbnN0YW5jZSA9PiBpbnN0YW5jZS5vY2N1cGllc1Bvc2l0aW9uKHgsIHkpKTtcclxuICAgIH1cclxuXHJcbiAgICBpc1Bvc2l0aW9uRnJlZSh4OiBudW1iZXIsIHk6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAhdGhpcy5nZXRJbnN0YW5jZXNBdFBvc2l0aW9uKHgsIHkpLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRWaWV3KCk6IFZpZXcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZpZXc7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ2xpY2soZXZlbnQ6IFBvaW50ZXJJbnB1dEV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGNsaWNrWCA9IGV2ZW50Lng7XHJcbiAgICAgICAgbGV0IGNsaWNrWSA9IGV2ZW50Lnk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnZpZXcpIHtcclxuICAgICAgICAgICAgY2xpY2tYICs9IHRoaXMudmlldy54O1xyXG4gICAgICAgICAgICBjbGlja1kgKz0gdGhpcy52aWV3Lnk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5ncmlkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ3JpZC5yYWlzZUNsaWNrRXZlbnQoY2xpY2tYLCBjbGlja1kpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5nZXRJbnN0YW5jZXNBdFBvc2l0aW9uKGNsaWNrWCwgY2xpY2tZKS5mb3JFYWNoKGluc3RhbmNlID0+IHtcclxuICAgICAgICAgICAgbGV0IHBhcmVudCA9IGluc3RhbmNlLnBhcmVudDtcclxuXHJcbiAgICAgICAgICAgIGlmIChwYXJlbnQuaGFzQ2xpY2sgJiYgaW5zdGFuY2Uub2NjdXBpZXNQb3NpdGlvbihjbGlja1gsIGNsaWNrWSkpIHtcclxuICAgICAgICAgICAgICAgIHBhcmVudC5jYWxsQ2xpY2soaW5zdGFuY2UsIGV2ZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGVuZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmFjdG9ySW5zdGFuY2VNYXAgPSB7fTtcclxuICAgICAgICB0aGlzLmV2ZW50SGFuZGxlcnMuZm9yRWFjaChldmVudEhhbmRsZXIgPT4gZXZlbnRIYW5kbGVyLmRpc3Bvc2UoKSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9yb29tLnRzIiwiaW1wb3J0IHsgQm91bmRhcnkgfSBmcm9tICcuL2JvdW5kYXJ5JztcclxuaW1wb3J0IHsgQWN0b3JJbnN0YW5jZURyYXdFdmVudCwgR2FtZUNhbnZhc0NvbnRleHQgfSBmcm9tICcuL2NhbnZhcyc7XHJcbmltcG9ydCB7IEFjdG9yU3RhdGUsIERpcmVjdGlvbiB9IGZyb20gJy4vZW51bSc7XHJcbmltcG9ydCB7IERlZmVycmVkRXZlbnQgfSBmcm9tICcuL2V2ZW50cyc7XHJcbmltcG9ydCB7IFBvaW50ZXJJbnB1dEV2ZW50IH0gZnJvbSAnLi9pbnB1dCc7XHJcbmltcG9ydCB7IFJvb20gfSBmcm9tICcuL3Jvb20nO1xyXG5pbXBvcnQgeyBTcHJpdGUsIFNwcml0ZUFuaW1hdGlvbiB9IGZyb20gJy4vc3ByaXRlJztcclxuaW1wb3J0IHsgTWF0aFV0aWwgfSBmcm9tICcuL3V0aWwnO1xyXG5pbXBvcnQgeyBWYXN0Z2FtZSB9IGZyb20gJy4vdmFzdGdhbWUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBY3RvckxpZmVjeWNsZSB7XHJcbiAgICBvbkNyZWF0ZTogTGlmZWN5Y2xlQ2FsbGJhY2s7XHJcbiAgICBvblN0ZXA6IExpZmVjeWNsZUNhbGxiYWNrO1xyXG4gICAgb25EZXN0cm95OiBMaWZlY3ljbGVDYWxsYmFjaztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMaWZlY3ljbGVDYWxsYmFjayB7XHJcbiAgICAoc2VsZjogQWN0b3JJbnN0YW5jZSk6IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQWN0b3JFdmVudCB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBjYWxsYmFjazogQWN0b3JFdmVudENhbGxiYWNrO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFjdG9yRXZlbnRDYWxsYmFjayB7XHJcbiAgICAoc2VsZj86IEFjdG9ySW5zdGFuY2UsIGV2ZW50QXJncz86IGFueSk6IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQWN0b3JPcHRpb25zIHtcclxuICAgIGJvdW5kYXJ5PzogQm91bmRhcnk7XHJcbiAgICBzcHJpdGU/OiBTcHJpdGU7XHJcbn1cclxuXHJcbmludGVyZmFjZSBDbGlja0V2ZW50Q2FsbGJhY2sge1xyXG4gICAgKHNlbGY6IEFjdG9ySW5zdGFuY2UsIGV2ZW50OiBQb2ludGVySW5wdXRFdmVudCk6IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29sbGlzaW9uQ2FsbGJhY2sge1xyXG4gICAgKHNlbGY6IEFjdG9ySW5zdGFuY2UsIG90aGVyOiBBY3Rvckluc3RhbmNlKTogdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFjdG9yIHtcclxuXHJcbiAgICBzdGF0aWMgZGVmaW5lKG5hbWU6IHN0cmluZywgb3B0aW9ucz86IEFjdG9yT3B0aW9ucyk6IEFjdG9yIHtcclxuICAgICAgICBsZXQgYWN0b3IgPSBuZXcgQWN0b3IobmFtZSwgb3B0aW9ucyk7XHJcbiAgICAgICAgVmFzdGdhbWUuZ2V0Q29udGV4dCgpLmRlZmluZUFjdG9yKG5hbWUsIGFjdG9yKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGFjdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQobmFtZTogc3RyaW5nKTogQWN0b3Ige1xyXG4gICAgICAgIHJldHVybiBWYXN0Z2FtZS5nZXRDb250ZXh0KCkuZ2V0QWN0b3IobmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gbGlmZWN5Y2xlIGNhbGxiYWNrc1xyXG4gICAgcHJpdmF0ZSBvbkNyZWF0ZUNhbGxiYWNrOiBMaWZlY3ljbGVDYWxsYmFjaztcclxuICAgIHByaXZhdGUgb25TdGVwQ2FsbGJhY2s6IExpZmVjeWNsZUNhbGxiYWNrO1xyXG4gICAgcHJpdmF0ZSBvbkRlc3Ryb3lDYWxsYmFjazogTGlmZWN5Y2xlQ2FsbGJhY2s7XHJcbiAgICBwcml2YXRlIG9uRHJhd0NhbGxiYWNrOiBBY3Rvckluc3RhbmNlRHJhd0V2ZW50O1xyXG5cclxuICAgIC8vIGlucHV0IGNhbGxiYWNrc1xyXG4gICAgcHJpdmF0ZSBvbkNsaWNrQ2FsbGJhY2s6IENsaWNrRXZlbnRDYWxsYmFjaztcclxuXHJcbiAgICAvLyBnYW1lIGV2ZW50IGhhbmRsZXJzXHJcbiAgICByZWFkb25seSBjb2xsaXNpb25IYW5kbGVyczogeyBbaW5kZXg6IHN0cmluZ106IENvbGxpc2lvbkNhbGxiYWNrIH0gPSB7fTtcclxuICAgIHJlYWRvbmx5IGFjdG9yRXZlbnRIYW5kbGVyczogeyBbaW5kZXg6IHN0cmluZ10gOiBBY3RvckV2ZW50Q2FsbGJhY2sgfSA9IHt9O1xyXG5cclxuICAgIHJlYWRvbmx5IGJvdW5kYXJ5OiBCb3VuZGFyeTtcclxuICAgIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IHNwcml0ZTogU3ByaXRlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgb3B0aW9uczogQWN0b3JPcHRpb25zID0ge30pIHtcclxuICAgICAgICB0aGlzLmJvdW5kYXJ5ID0gb3B0aW9ucy5ib3VuZGFyeTtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuc3ByaXRlID0gb3B0aW9ucy5zcHJpdGU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGhhc0NyZWF0ZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gISF0aGlzLm9uQ3JlYXRlQ2FsbGJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgb25DcmVhdGUoY2FsbGJhY2s6IExpZmVjeWNsZUNhbGxiYWNrKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vbkNyZWF0ZUNhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgY2FsbENyZWF0ZShzZWxmSW5zdGFuY2U6IEFjdG9ySW5zdGFuY2UpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9uQ3JlYXRlQ2FsbGJhY2soc2VsZkluc3RhbmNlKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGVwKHNlbGZJbnN0YW5jZTogQWN0b3JJbnN0YW5jZSkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh0aGlzLmhhc1N0ZXApIHtcclxuICAgICAgICAgICAgdGhpcy5jYWxsU3RlcChzZWxmSW5zdGFuY2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2VsZkluc3RhbmNlLnByZXZpb3VzWCA9IHNlbGZJbnN0YW5jZS54O1xyXG4gICAgICAgIHNlbGZJbnN0YW5jZS5wcmV2aW91c1kgPSBzZWxmSW5zdGFuY2UueTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaGFzU3RlcCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gISF0aGlzLm9uU3RlcENhbGxiYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU3RlcChjYWxsYmFjazogTGlmZWN5Y2xlQ2FsbGJhY2spOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9uU3RlcENhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgY2FsbFN0ZXAoc2VsZkluc3RhbmNlOiBBY3Rvckluc3RhbmNlKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vblN0ZXBDYWxsYmFjayhzZWxmSW5zdGFuY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBoYXNEcmF3KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAhIXRoaXMub25EcmF3Q2FsbGJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgb25EcmF3KGNhbGxiYWNrOiBBY3Rvckluc3RhbmNlRHJhd0V2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vbkRyYXdDYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbGxEcmF3KHNlbGZJbnN0YW5jZTogQWN0b3JJbnN0YW5jZSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMub25EcmF3Q2FsbGJhY2soc2VsZkluc3RhbmNlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaGFzQ2xpY2soKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuICEhdGhpcy5vbkNsaWNrQ2FsbGJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljayhjYWxsYmFjazogQ2xpY2tFdmVudENhbGxiYWNrKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vbkNsaWNrQ2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgIH1cclxuXHJcbiAgICBjYWxsQ2xpY2soc2VsZkluc3RhbmNlOiBBY3Rvckluc3RhbmNlLCBldmVudDogUG9pbnRlcklucHV0RXZlbnQpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9uQ2xpY2tDYWxsYmFjayhzZWxmSW5zdGFuY2UsIGV2ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNvbGxpZGUoYWN0b3JOYW1lOiBzdHJpbmcsIGNhbGxiYWNrOiBDb2xsaXNpb25DYWxsYmFjayk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY29sbGlzaW9uSGFuZGxlcnNbYWN0b3JOYW1lXSA9IGNhbGxiYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRXZlbnQoZXZlbnROYW1lOiBzdHJpbmcsIGNhbGxiYWNrOiBBY3RvckV2ZW50Q2FsbGJhY2spOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmFjdG9yRXZlbnRIYW5kbGVyc1tldmVudE5hbWVdID0gY2FsbGJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGhhc0Rlc3Ryb3koKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuICEhdGhpcy5vbkRlc3Ryb3lDYWxsYmFjaztcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koY2FsbGJhY2s6IExpZmVjeWNsZUNhbGxiYWNrKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vbkRlc3Ryb3lDYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbGxEZXN0cm95KHNlbGZJbnN0YW5jZTogQWN0b3JJbnN0YW5jZSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMub25EZXN0cm95Q2FsbGJhY2soc2VsZkluc3RhbmNlKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFjdG9ySW5zdGFuY2Uge1xyXG4gICAgcHJpdmF0ZSBzdGF0ZTogQWN0b3JTdGF0ZTtcclxuXHJcbiAgICBwcmV2aW91c1g6IG51bWJlcjtcclxuICAgIHByZXZpb3VzWTogbnVtYmVyO1xyXG4gICAgc3BlZWQ6IG51bWJlciA9IDA7XHJcbiAgICBkaXJlY3Rpb246IG51bWJlciA9IERpcmVjdGlvbi5SaWdodDtcclxuICAgIHZpc2libGU6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIHJlYWRvbmx5IHNwcml0ZUFuaW1hdGlvbjogU3ByaXRlQW5pbWF0aW9uO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm9vbTogUm9vbSwgcHVibGljIHBhcmVudDogQWN0b3IsIHB1YmxpYyBpZDogbnVtYmVyLCBwdWJsaWMgeDogbnVtYmVyID0gMCwgcHVibGljIHk6IG51bWJlciA9IDApIHtcclxuICAgICAgICB0aGlzLnN0YXRlID0gQWN0b3JTdGF0ZS5BY3RpdmU7XHJcbiAgICAgICAgdGhpcy5wcmV2aW91c1ggPSB0aGlzLng7XHJcbiAgICAgICAgdGhpcy5wcmV2aW91c1kgPSB0aGlzLnk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnBhcmVudC5zcHJpdGUpIHtcclxuICAgICAgICAgICAgdGhpcy5zcHJpdGVBbmltYXRpb24gPSBuZXcgU3ByaXRlQW5pbWF0aW9uKHRoaXMucGFyZW50LnNwcml0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBoYXNNb3ZlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMueCAhPT0gdGhpcy5wcmV2aW91c1ggfHwgdGhpcy55ICE9PSB0aGlzLnByZXZpb3VzWSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGlzQWN0aXZlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5zdGF0ZSA9PT0gQWN0b3JTdGF0ZS5BY3RpdmUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBib3VuZGFyeSgpOiBCb3VuZGFyeSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50LmJvdW5kYXJ5O1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBhbmltYXRpb24oKTogU3ByaXRlQW5pbWF0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zcHJpdGVBbmltYXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgZHJhd1Nwcml0ZShzcHJpdGU6IFNwcml0ZSwgeDogbnVtYmVyLCB5OiBudW1iZXIsIGZyYW1lOiBudW1iZXIgPSAwKSB7XHJcbiAgICAgICAgdGhpcy5yb29tLmRyYXdTcHJpdGUoc3ByaXRlLCB4LCB5LCBmcmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmFpc2VFdmVudChldmVudE5hbWU6IHN0cmluZywgZXZlbnRBcmdzPzogYW55KTogdm9pZCB7XHJcbiAgICAgICAgLy8gcmVnaXN0ZXIgYW4gZXZlbnQgdG8gZmlyZSBpbW1lZGlhdGVseVxyXG4gICAgICAgIHRoaXMucmFpc2VFdmVudFdoZW4oZXZlbnROYW1lLCAoKSA9PiB0cnVlLCBldmVudEFyZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIHJhaXNlRXZlbnRXaGVuKGV2ZW50TmFtZTogc3RyaW5nLCBjb25kaXRpb25DYWxsYmFjazogKCkgPT4gYm9vbGVhbiwgZXZlbnRBcmdzOiBhbnkgPSB7fSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2V0R2FtZUNvbnRleHRFdmVudEFyZ3MoZXZlbnRBcmdzKTtcclxuXHJcbiAgICAgICAgbGV0IGNhbGxiYWNrOiBBY3RvckV2ZW50Q2FsbGJhY2sgPSB0aGlzLnBhcmVudC5hY3RvckV2ZW50SGFuZGxlcnNbZXZlbnROYW1lXTtcclxuXHJcbiAgICAgICAgaWYgKCFjYWxsYmFjaykge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEF0dGVtcHRpbmcgdG8gcmFpc2UgdW5kZWZpbmVkIEV2ZW50OiAke2V2ZW50TmFtZX1gKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIERlZmVycmVkRXZlbnQucmVnaXN0ZXIobmV3IERlZmVycmVkRXZlbnQoY29uZGl0aW9uQ2FsbGJhY2ssIGNhbGxiYWNrLmJpbmQobnVsbCwgdGhpcywgZXZlbnRBcmdzKSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0R2FtZUNvbnRleHRFdmVudEFyZ3MoZXZlbnRBcmdzOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBldmVudEFyZ3MuZ2FtZSA9IHtcclxuICAgICAgICAgICAgY3VycmVudFJvb206IFZhc3RnYW1lLmdldENvbnRleHQoKS5nZXRDdXJyZW50Um9vbSgpLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgZGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnN0YXRlID0gQWN0b3JTdGF0ZS5EZXN0cm95ZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgY29sbGlkZXNXaXRoKG90aGVyOiBBY3Rvckluc3RhbmNlKTogYm9vbGVhbiB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmhhc01vdmVkICYmIHRoaXMuYm91bmRhcnkgJiYgb3RoZXIuYm91bmRhcnkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYm91bmRhcnkuYXRQb3NpdGlvbih0aGlzLngsIHRoaXMueSkuY29sbGlkZXNXaXRoKG90aGVyLmJvdW5kYXJ5LmF0UG9zaXRpb24ob3RoZXIueCwgb3RoZXIueSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE1vdmVtZW50T2Zmc2V0WCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBNYXRoVXRpbC5nZXRMZW5ndGhEaXJlY3Rpb25YKHRoaXMuc3BlZWQgKiAxMDAsIHRoaXMuZGlyZWN0aW9uKSAvIDEwMDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRNb3ZlbWVudE9mZnNldFkoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gTWF0aFV0aWwuZ2V0TGVuZ3RoRGlyZWN0aW9uWSh0aGlzLnNwZWVkICogMTAwLCB0aGlzLmRpcmVjdGlvbikgLyAxMDA7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UG9zaXRpb25SZWxhdGl2ZSh4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2V0UG9zaXRpb24odGhpcy54ICsgeCwgdGhpcy55ICsgeSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UG9zaXRpb24oeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnByZXZpb3VzWCA9IHRoaXMueDtcclxuICAgICAgICB0aGlzLnByZXZpb3VzWSA9IHRoaXMueTtcclxuXHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmUoc3BlZWQ6IG51bWJlciwgZGlyZWN0aW9uPzogRGlyZWN0aW9uKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IHNwZWVkO1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIG9jY3VwaWVzUG9zaXRpb24oeDogbnVtYmVyLCB5OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ib3VuZGFyeSA/IHRoaXMuYm91bmRhcnkuYXRQb3NpdGlvbih0aGlzLngsIHRoaXMueSkuY29udGFpbnNQb3NpdGlvbih4LCB5KSA6IGZhbHNlO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvYWN0b3IudHMiLCJpbXBvcnQgeyBBY3RvciwgQWN0b3JJbnN0YW5jZSB9IGZyb20gJy4vYWN0b3InO1xyXG5pbXBvcnQgeyBEaXJlY3Rpb24gfSBmcm9tICcuL2VudW0nO1xyXG5pbXBvcnQgeyBSb29tIH0gZnJvbSAnLi9yb29tJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgR3JpZENsaWNrQ2FsbGJhY2sge1xyXG4gICAgKGdyaWRDbGlja0V2ZW50OiBHcmlkQ2xpY2tFdmVudCk6IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHcmlkQ2xpY2tFdmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBncmlkOiBHcmlkLFxyXG4gICAgICAgIHByaXZhdGUgeDogbnVtYmVyLCBcclxuICAgICAgICBwcml2YXRlIHk6IG51bWJlcikge1xyXG4gICAgfVxyXG5cclxuICAgIGdldENlbGwoKTogR3JpZENlbGwge1xyXG4gICAgICAgIGxldCBjZWxsWCA9IHRoaXMueCAtIHRoaXMueCAlIHRoaXMuZ3JpZC50aWxlU2l6ZTtcclxuICAgICAgICBsZXQgY2VsbFkgPSB0aGlzLnkgLSB0aGlzLnkgJSB0aGlzLmdyaWQudGlsZVNpemU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIG5ldyBHcmlkQ2VsbCh0aGlzLmdyaWQsIGNlbGxYLCBjZWxsWSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHcmlkQ2VsbCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBncmlkOiBHcmlkLCBwdWJsaWMgeDogbnVtYmVyLCBwdWJsaWMgeTogbnVtYmVyKSB7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWRqYWNlbnRDZWxsKGRpcmVjdGlvbjogRGlyZWN0aW9uKTogR3JpZENlbGwge1xyXG4gICAgICAgIGxldCBvZmZzZXRYID0gMDtcclxuICAgICAgICBsZXQgb2Zmc2V0WSA9IDA7XHJcblxyXG4gICAgICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGNhc2UgRGlyZWN0aW9uLkRvd246XHJcbiAgICAgICAgICAgICAgICBvZmZzZXRZID0gdGhpcy5ncmlkLnRpbGVTaXplO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRGlyZWN0aW9uLkxlZnQ6XHJcbiAgICAgICAgICAgICAgICBvZmZzZXRYID0gLXRoaXMuZ3JpZC50aWxlU2l6ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIERpcmVjdGlvbi5SaWdodDpcclxuICAgICAgICAgICAgICAgIG9mZnNldFggPSB0aGlzLmdyaWQudGlsZVNpemU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBEaXJlY3Rpb24uVXA6XHJcbiAgICAgICAgICAgICAgICBvZmZzZXRZID0gLXRoaXMuZ3JpZC50aWxlU2l6ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBHcmlkQ2VsbCh0aGlzLmdyaWQsIHRoaXMueCArIG9mZnNldFgsIHRoaXMueSArIG9mZnNldFkpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENvbnRlbnRzKCk6IEFjdG9ySW5zdGFuY2VbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZC5yb29tLmdldEluc3RhbmNlc0F0UG9zaXRpb24odGhpcy54ICsgdGhpcy5ncmlkLnRpbGVTaXplIC8gMiwgdGhpcy55ICsgdGhpcy5ncmlkLnRpbGVTaXplIC8gMik7XHJcbiAgICB9XHJcblxyXG4gICAgY29udGFpbnNJbnN0YW5jZShpbnN0YW5jZTogQWN0b3JJbnN0YW5jZSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldENvbnRlbnRzKCkuc29tZShjb250ZW50cyA9PiBjb250ZW50cyA9PT0gaW5zdGFuY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnRhaW5zSW5zdGFuY2VPZihhY3RvcjogQWN0b3IpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRDb250ZW50cygpLnNvbWUoY29udGVudHMgPT4gY29udGVudHMucGFyZW50ID09PSBhY3Rvcik7XHJcbiAgICB9XHJcblxyXG4gICAgaXNGcmVlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAhdGhpcy5nZXRDb250ZW50cygpLmxlbmd0aDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdyaWQge1xyXG4gICAgcHJpdmF0ZSBfb25DbGljazogR3JpZENsaWNrQ2FsbGJhY2s7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcmVhZG9ubHkgdGlsZVNpemU6IG51bWJlcixcclxuICAgICAgICByZWFkb25seSByb29tOiBSb29tKSB7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljayhjYWxsYmFjazogR3JpZENsaWNrQ2FsbGJhY2spOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9vbkNsaWNrID0gY2FsbGJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgcmFpc2VDbGlja0V2ZW50KHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGluc3RhbmNlcyA9IHRoaXMucm9vbS5nZXRJbnN0YW5jZXNBdFBvc2l0aW9uKHgsIHkpO1xyXG4gICAgICAgIGxldCBldmVudCA9IG5ldyBHcmlkQ2xpY2tFdmVudCh0aGlzLCB4LCB5KTtcclxuXHJcbiAgICAgICAgdGhpcy5fb25DbGljayhldmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2VsbEF0UG9zaXRpb24oeDogbnVtYmVyLCB5OiBudW1iZXIpOiBHcmlkQ2VsbCB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBHcmlkQ2VsbCh0aGlzLCB4LCB5KTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvZ3JpZC50cyIsImltcG9ydCB7IEFjdG9ySW5zdGFuY2UgfSBmcm9tICcuL2FjdG9yJztcclxuaW1wb3J0IHsgQm91bmRhcnkgfSBmcm9tICcuL2JvdW5kYXJ5JztcclxuaW1wb3J0IHsgR2FtZUNhbnZhc0hUTUwyRCB9IGZyb20gJy4vY2FudmFzJztcclxuXHJcbmVudW0gVmlld01vZGUge1xyXG4gICAgU2FtZVBvc2l0aW9uID0gMSxcclxuICAgIENlbnRlciA9IDIsXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBWaWV3IHtcclxuXHJcbiAgICBwcml2YXRlIHZpZXdNb2RlOiBWaWV3TW9kZTtcclxuICAgIHByaXZhdGUgZm9sbG93SW5zdGFuY2U6IEFjdG9ySW5zdGFuY2U7XHJcbiAgICBwcml2YXRlIGF0dGFjaG1lbnRzOiBBY3Rvckluc3RhbmNlQXR0YWNoZW1lbnRbXSA9IFtdO1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgeDogbnVtYmVyLCBcclxuICAgICAgICBwdWJsaWMgeTogbnVtYmVyLCBcclxuICAgICAgICBwdWJsaWMgcmVhZG9ubHkgd2lkdGg6IG51bWJlciwgXHJcbiAgICAgICAgcHVibGljIHJlYWRvbmx5IGhlaWdodDogbnVtYmVyKSB7XHJcbiAgICB9XHJcblxyXG4gICAgZm9sbG93KGFjdG9ySW5zdGFuY2U6IEFjdG9ySW5zdGFuY2UsIGNlbnRlcjogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgdGhpcy52aWV3TW9kZSA9IGNlbnRlciA/IFZpZXdNb2RlLkNlbnRlciA6IFZpZXdNb2RlLlNhbWVQb3NpdGlvbjtcclxuICAgICAgICB0aGlzLmZvbGxvd0luc3RhbmNlID0gYWN0b3JJbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBhdHRhY2goYWN0b3JJbnN0YW5jZTogQWN0b3JJbnN0YW5jZSwgb2Zmc2V0WDogbnVtYmVyLCBvZmZzZXRZOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmF0dGFjaG1lbnRzLnB1c2gobmV3IEFjdG9ySW5zdGFuY2VBdHRhY2hlbWVudCh0aGlzLCBhY3Rvckluc3RhbmNlLCBvZmZzZXRYLCBvZmZzZXRZKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuZm9sbG93SW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMudmlld01vZGUgPT09IFZpZXdNb2RlLkNlbnRlcikge1xyXG4gICAgICAgICAgICB0aGlzLmNlbnRlckFyb3VuZEJvdW5kYXJ5KHRoaXMuZm9sbG93SW5zdGFuY2UuYm91bmRhcnkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy54ID0gdGhpcy5mb2xsb3dJbnN0YW5jZS54IHx8IDA7XHJcbiAgICAgICAgICAgIHRoaXMueSA9IHRoaXMuZm9sbG93SW5zdGFuY2UueSB8fCAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5hdHRhY2htZW50cy5mb3JFYWNoKGF0dCA9PiBhdHQudXBkYXRlKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2VudGVyQXJvdW5kQm91bmRhcnkoYm91bmRhcnk6IEJvdW5kYXJ5KSB7XHJcblxyXG4gICAgICAgIGlmICghYm91bmRhcnkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBib3VuZGFyeSBpcyAke2JvdW5kYXJ5fWApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy54ID0gdGhpcy5mb2xsb3dJbnN0YW5jZS54ICsgKGJvdW5kYXJ5LndpZHRoIC8gMikgLSAodGhpcy53aWR0aCAvIDIpO1xyXG4gICAgICAgIHRoaXMueSA9IHRoaXMuZm9sbG93SW5zdGFuY2UueSArIChib3VuZGFyeS5oZWlnaHQgLyAyKSAtICh0aGlzLmhlaWdodCAvIDIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBBY3Rvckluc3RhbmNlQXR0YWNoZW1lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIHBhcmVudDogVmlldyxcclxuICAgICAgICBwcml2YXRlIGluc3RhbmNlOiBBY3Rvckluc3RhbmNlLFxyXG4gICAgICAgIHByaXZhdGUgb2Zmc2V0WDogbnVtYmVyLFxyXG4gICAgICAgIHByaXZhdGUgb2Zmc2V0WTogbnVtYmVyKSB7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICB0aGlzLmluc3RhbmNlLnggPSB0aGlzLnBhcmVudC54ICsgdGhpcy5vZmZzZXRYO1xyXG4gICAgICAgIHRoaXMuaW5zdGFuY2UueSA9IHRoaXMucGFyZW50LnkgKyB0aGlzLm9mZnNldFk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL3ZpZXcudHMiLCJpbXBvcnQgeyBTcHJpdGUsIFNwcml0ZVRyYW5zZm9ybWF0aW9uIH0gZnJvbSAnLi8uLi8uLi9lbmdpbmUvdmFzdGdhbWUnO1xyXG5cclxuY29uc3QgRGVsYXlJbnRlcnZhbCA9IDEwMDtcclxuY29uc3QgT3BhY2l0eURlbHRhID0gMC4yNTtcclxuXHJcbmV4cG9ydCBjbGFzcyBTcHJpdGVGYWRlciB7XHJcbiAgICBcclxuICAgIC8vIFRPRE8gKGZvcnRpZmljYXRpb24pOiBhbHRlcm5hdGl2ZXMgdGhhdCBhY2NlcHQgUm9vbSBvYmplY3RzLCBkeW5hbWljYWxseSBnZXR0aW5nIGEgdW5pcXVlIGNvbGxlY3Rpb24gb2YgU3ByaXRlc1xyXG5cclxuICAgIHN0YXRpYyBmYWRlT3V0KHNwcml0ZXM6IFNwcml0ZVtdLCBjYWxsYmFjazogKCkgPT4gYW55KTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGZhZGUgPSAxO1xyXG4gICAgXHJcbiAgICAgICAgbGV0IHRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICBmYWRlIC09IE9wYWNpdHlEZWx0YTtcclxuICAgICAgICAgICAgc3ByaXRlcy5mb3JFYWNoKHNwcml0ZSA9PiBzcHJpdGUudHJhbnNmb3JtKFNwcml0ZVRyYW5zZm9ybWF0aW9uLk9wYWNpdHksIC1PcGFjaXR5RGVsdGEpKTtcclxuICAgIFxyXG4gICAgICAgICAgICBpZiAoZmFkZSA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVyKTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoY2FsbGJhY2ssIERlbGF5SW50ZXJ2YWwgKiAyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIERlbGF5SW50ZXJ2YWwpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBmYWRlSW4oc3ByaXRlczogU3ByaXRlW10sIGNhbGxiYWNrPzogKCkgPT4gYW55KTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGZhZGUgPSAwO1xyXG4gICAgICAgIHNwcml0ZXMuZm9yRWFjaChzcHJpdGUgPT4gc3ByaXRlLnNldFRyYW5zZm9ybShTcHJpdGVUcmFuc2Zvcm1hdGlvbi5PcGFjaXR5LCAwKSk7XHJcblxyXG4gICAgICAgIGxldCB0aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgZmFkZSArPSBPcGFjaXR5RGVsdGE7XHJcbiAgICAgICAgICAgIHNwcml0ZXMuZm9yRWFjaChzcHJpdGUgPT4gc3ByaXRlLnRyYW5zZm9ybShTcHJpdGVUcmFuc2Zvcm1hdGlvbi5PcGFjaXR5LCBPcGFjaXR5RGVsdGEpKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChmYWRlID49IDEpIHtcclxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEludGVydmFsKGNhbGxiYWNrLCBEZWxheUludGVydmFsICogMik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBEZWxheUludGVydmFsKTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9nYW1lL3V0aWwvc3ByaXRlLWZhZGVyLnRzIiwiaW1wb3J0IHsgQWN0b3JJbnN0YW5jZSB9IGZyb20gJy4vYWN0b3InO1xyXG5pbXBvcnQgeyBCYWNrZ3JvdW5kLCBSb29tIH0gZnJvbSAnLi9yb29tJztcclxuaW1wb3J0IHsgU3ByaXRlLCBTcHJpdGVBbmltYXRpb24sIFNwcml0ZVRyYW5zZm9ybWF0aW9uIH0gZnJvbSAnLi9zcHJpdGUnO1xyXG5pbXBvcnQgeyBWaWV3IH0gZnJvbSAnLi92aWV3JztcclxuXHJcbmNvbnN0IERlZmF1bHRIZWlnaHQgPSA0ODA7XHJcbmNvbnN0IERlZmF1bHRXaWR0aCA9IDY0MDtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgR2FtZUNhbnZhc09wdGlvbnMge1xyXG4gICAgaGVpZ2h0OiBudW1iZXI7XHJcbiAgICB3aWR0aDogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFjdG9ySW5zdGFuY2VEcmF3RXZlbnQge1xyXG4gICAgKHNlbGY6IEFjdG9ySW5zdGFuY2UpOiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFJvb21EcmF3RXZlbnQge1xyXG4gICAgKHNlbGY6IFJvb20pOiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEdhbWVDYW52YXMge1xyXG4gICAgaW5pdChvcHRpb25zOiBHYW1lQ2FudmFzT3B0aW9ucyk6IHZvaWQ7XHJcbiAgICBnZXRDb250ZXh0KCk6IEdhbWVDYW52YXNDb250ZXh0O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZUNhbnZhc0hUTUwyRCBpbXBsZW1lbnRzIEdhbWVDYW52YXMge1xyXG4gICAgcmVhZG9ubHkgZ2FtZUNhbnZhc0NvbnRleHQ6IEdhbWVDYW52YXNDb250ZXh0O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyByZWFkb25seSBjYW52YXNFbGVtZW50OiBIVE1MQ2FudmFzRWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMuZ2FtZUNhbnZhc0NvbnRleHQgPSBuZXcgR2FtZUNhbnZhc0NvbnRleHQyRCh0aGlzLmNhbnZhc0VsZW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENvbnRleHQoKTogR2FtZUNhbnZhc0NvbnRleHQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdhbWVDYW52YXNDb250ZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQob3B0aW9uczogR2FtZUNhbnZhc09wdGlvbnMpIHtcclxuICAgICAgICBpZiAodGhpcy5jYW52YXNFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FudmFzRWxlbWVudC5oZWlnaHQgPSBvcHRpb25zLmhlaWdodDtcclxuICAgICAgICAgICAgdGhpcy5jYW52YXNFbGVtZW50LndpZHRoID0gb3B0aW9ucy53aWR0aDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgR2FtZUNhbnZhc0NvbnRleHQge1xyXG4gICAgY2xlYXIoKTogdm9pZDtcclxuICAgIGZpbGwoeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBjb2xvcjogc3RyaW5nKTogdm9pZDtcclxuICAgIGRyYXdTcHJpdGUoc3ByaXRlOiBTcHJpdGUsIHg6IG51bWJlciwgeTogbnVtYmVyLCBmcmFtZT86IG51bWJlcik6IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lQ2FudmFzQ29udGV4dDJEIGltcGxlbWVudHMgR2FtZUNhbnZhc0NvbnRleHQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY2FudmFzRWxlbWVudDogSFRNTENhbnZhc0VsZW1lbnQpIHtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldCBjYW52YXNDb250ZXh0MkQoKTogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jYW52YXNFbGVtZW50LmdldENvbnRleHQoJzJkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXIoKSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0MkQuY2xlYXJSZWN0KDAsIDAsIHRoaXMuY2FudmFzRWxlbWVudC53aWR0aCwgdGhpcy5jYW52YXNFbGVtZW50LmhlaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgZmlsbCh4OiBudW1iZXIsIHk6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIGNvbG9yOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQyRC5iZWdpblBhdGgoKTtcclxuICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQyRC5yZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuY2FudmFzQ29udGV4dDJELmZpbGxTdHlsZSA9IGNvbG9yO1xyXG4gICAgICAgIHRoaXMuY2FudmFzQ29udGV4dDJELmZpbGwoKTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3U3ByaXRlKHNwcml0ZTogU3ByaXRlLCB4OiBudW1iZXIsIHk6IG51bWJlciwgZnJhbWU6IG51bWJlciA9IDApOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBkZWZhdWx0T3BhY2l0eSA9IDE7XHJcblxyXG4gICAgICAgIGxldCBpbWFnZSA9IHNwcml0ZS5pbWFnZTtcclxuICAgICAgICBsZXQgZnJhbWVCb3JkZXIgPSBzcHJpdGUuZnJhbWVCb3JkZXIgfHwgMDtcclxuICAgICAgICBsZXQgd2lkdGggPSBzcHJpdGUud2lkdGg7XHJcbiAgICAgICAgbGV0IGhlaWdodCA9IHNwcml0ZS5oZWlnaHQ7XHJcblxyXG4gICAgICAgIGxldCBmcmFtZU9mZnNldCA9IGZyYW1lICogZnJhbWVCb3JkZXI7XHJcblxyXG4gICAgICAgIC8vIHNldCBvcGFjaXR5XHJcbiAgICAgICAgbGV0IG9wYWNpdHkgPSBzcHJpdGUuZ2V0VHJhbnNmb3JtKFNwcml0ZVRyYW5zZm9ybWF0aW9uLk9wYWNpdHkpO1xyXG4gICAgICAgIGxldCBwcmV2aW91c09wYWNpdHk6IG51bWJlciA9IG51bGw7XHJcblxyXG4gICAgICAgIGlmIChvcGFjaXR5ICE9PSBkZWZhdWx0T3BhY2l0eSAmJiBvcGFjaXR5ICE9PSBudWxsICYmIG9wYWNpdHkgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBwcmV2aW91c09wYWNpdHkgPSB0aGlzLmNhbnZhc0NvbnRleHQyRC5nbG9iYWxBbHBoYTtcclxuICAgICAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0MkQuZ2xvYmFsQWxwaGEgPSBvcGFjaXR5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0MkQuZHJhd0ltYWdlKGltYWdlLCBmcmFtZSAqIHdpZHRoICsgZnJhbWVPZmZzZXQsIDAsIHdpZHRoLCBoZWlnaHQsIE1hdGguZmxvb3IoeCksIE1hdGguZmxvb3IoeSksIHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuICAgICAgICAvLyByZXNldCBvcGFjaXR5XHJcbiAgICAgICAgaWYgKHByZXZpb3VzT3BhY2l0eSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQyRC5nbG9iYWxBbHBoYSA9IHByZXZpb3VzT3BhY2l0eTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9jYW52YXMudHMiLCJpbXBvcnQgeyBBY3RvciB9IGZyb20gJy4vYWN0b3InO1xyXG5pbXBvcnQgeyBHYW1lQ2FudmFzIH0gZnJvbSAnLi9jYW52YXMnO1xyXG5pbXBvcnQgeyBEZWZlcnJlZEV2ZW50IH0gZnJvbSAnLi9ldmVudHMnO1xyXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJy4vaW5wdXQnO1xyXG5pbXBvcnQgeyBSb29tIH0gZnJvbSAnLi9yb29tJztcclxuaW1wb3J0IHsgU3ByaXRlIH0gZnJvbSAnLi9zcHJpdGUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWVDb250ZXh0IHtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgYWN0b3JzOiB7IFtpbmRleDogc3RyaW5nXTogQWN0b3IgfSA9IHt9O1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBldmVudHM6IHsgW2luZGV4OiBudW1iZXJdOiBEZWZlcnJlZEV2ZW50IH0gPSB7fTtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgcm9vbXM6IHsgW2luZGV4OiBzdHJpbmddOiBSb29tIH0gPSB7fTtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgc3ByaXRlczogeyBbaW5kZXg6IHN0cmluZ106IFNwcml0ZX0gPSB7fTtcclxuXHJcbiAgICBwcml2YXRlIGN1cnJlbnRSb29tOiBSb29tO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY2FudmFzOiBHYW1lQ2FudmFzKSB7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2FudmFzKCk6IEdhbWVDYW52YXMge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNhbnZhcztcclxuICAgIH1cclxuXHJcbiAgICAvLyBhY3RvcnNcclxuICAgIGRlZmluZUFjdG9yKG5hbWU6IHN0cmluZywgYWN0b3I6IEFjdG9yKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuYWN0b3JzW25hbWVdKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQWN0b3IgJHtuYW1lfSBoYXMgYWxyZWFkeSBiZWVuIGRlZmluZWQuYCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmFjdG9yc1tuYW1lXSA9IGFjdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFjdG9yKG5hbWU6IHN0cmluZyk6IEFjdG9yIHtcclxuICAgICAgICBpZiAoIXRoaXMuYWN0b3JzW25hbWVdKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQWN0b3IgJHtuYW1lfSBoYXMgbm90IGJlZW4gZGVmaW5lZC5gKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmFjdG9yc1tuYW1lXTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBldmVudHNcclxuICAgIHByaXZhdGUgbmV4dEV2ZW50SUQgPSAoKCkgPT4ge1xyXG4gICAgICAgIGxldCBjdXJyZW50SUQgPSAwO1xyXG4gICAgICAgIHJldHVybiAoKCkgPT4gKytjdXJyZW50SUQpO1xyXG4gICAgfSkoKTtcclxuXHJcbiAgICByZWdpc3RlckV2ZW50KGV2ZW50OiBEZWZlcnJlZEV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5ldmVudHNbdGhpcy5uZXh0RXZlbnRJRCgpXSA9IGV2ZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrQW5kRmlyZUV2ZW50cygpOiB2b2lkIHtcclxuICAgICAgICBcclxuICAgICAgICBmb3IgKGxldCBldmVudElEIGluIHRoaXMuZXZlbnRzKSB7XHJcbiAgICAgICAgICAgIGxldCBldmVudCA9IHRoaXMuZXZlbnRzW2V2ZW50SURdO1xyXG5cclxuICAgICAgICAgICAgaWYgKGV2ZW50LmNvbmRpdGlvbkNhbGxiYWNrKCkpIHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LmFjdGlvbkNhbGxiYWNrKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LmZpcmVPbmNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuZXZlbnRzW2V2ZW50SURdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHJvb21zXHJcbiAgICBkZWZpbmVSb29tKG5hbWU6IHN0cmluZywgcm9vbTogUm9vbSk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLnJvb21zW25hbWVdKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgUm9vbSAke25hbWV9IGhhcyBhbHJlYWR5IGJlZW4gZGVmaW5lZC5gKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucm9vbXNbbmFtZV0gPSByb29tO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFJvb20obmFtZTogc3RyaW5nKTogUm9vbSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnJvb21zW25hbWVdKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgUm9vbSAke25hbWV9IGhhcyBub3QgYmVlbiBkZWZpbmVkLmApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMucm9vbXNbbmFtZV07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q3VycmVudFJvb20oKTogUm9vbSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFJvb207XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q3VycmVudFJvb20ocm9vbTogUm9vbSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFJvb20gPSByb29tO1xyXG5cclxuICAgICAgICBJbnB1dC5yZWdpc3RlckNsaWNrSGFuZGxlcihldiA9PiByb29tLmhhbmRsZUNsaWNrKGV2KSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gc3ByaXRlc1xyXG4gICAgZGVmaW5lU3ByaXRlKG5hbWU6IHN0cmluZywgc3ByaXRlOiBTcHJpdGUpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5zcHJpdGVzW25hbWVdKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgU3ByaXRlICR7bmFtZX0gaGFzIGFscmVhZHkgYmVlbiBkZWZpbmVkLmApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zcHJpdGVzW25hbWVdID0gc3ByaXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNwcml0ZShuYW1lOiBzdHJpbmcpOiBTcHJpdGUge1xyXG4gICAgICAgIGlmICghdGhpcy5zcHJpdGVzW25hbWVdKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvciAoYFNwcml0ZSAke25hbWV9IGhhcyBub3QgYmVlbiBkZWZpbmVkLmApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3ByaXRlc1tuYW1lXTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL2dhbWUtY29udGV4dC50cyIsImltcG9ydCB7IEdhbWVDYW52YXNPcHRpb25zLCBHYW1lQ2FudmFzIH0gZnJvbSAnLi9jYW52YXMnO1xyXG5pbXBvcnQgeyBHYW1lU3RhdGUgfSBmcm9tICcuL2VudW0nO1xyXG5pbXBvcnQgeyBHYW1lQ29udGV4dCB9IGZyb20gJy4vZ2FtZS1jb250ZXh0JztcclxuaW1wb3J0IHsgR2FtZU9wdGlvbnMgfSBmcm9tICcuL3Zhc3RnYW1lJztcclxuXHJcbmNvbnN0IERlZmF1bHRGUFMgPSA2MDtcclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lUnVubmVyIHtcclxuICAgIHByaXZhdGUgc3RhdGU6IEdhbWVTdGF0ZSA9IEdhbWVTdGF0ZS5QYXVzZWQ7XHJcbiAgICByZWFkb25seSB0YXJnZXRGUFM6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG9wdGlvbnM6IEdhbWVPcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy50YXJnZXRGUFMgPSBvcHRpb25zLnRhcmdldEZQUyB8fCBEZWZhdWx0RlBTO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBpc1J1bm5pbmcoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUgPT09IEdhbWVTdGF0ZS5SdW5uaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIHBhdXNlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBHYW1lU3RhdGUuUGF1c2VkO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KGdhbWVDb250ZXh0OiBHYW1lQ29udGV4dCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBzdGVwU2l6ZTogbnVtYmVyID0gMSAvIHRoaXMudGFyZ2V0RlBTO1xyXG4gICAgICAgIGxldCBvZmZzZXQ6IG51bWJlciA9IDA7XHJcbiAgICAgICAgbGV0IHByZXZpb3VzOiBudW1iZXIgPSB3aW5kb3cucGVyZm9ybWFuY2Uubm93KCk7XHJcblxyXG4gICAgICAgIGxldCBjYW52YXNEcmF3aW5nQ29udGV4dCA9IGdhbWVDb250ZXh0LmdldENhbnZhcygpLmdldENvbnRleHQoKTtcclxuXHJcbiAgICAgICAgbGV0IGdhbWVMb29wOiBGcmFtZVJlcXVlc3RDYWxsYmFjayA9ICgpOiB2b2lkID0+IHtcclxuICAgICAgICAgICAgbGV0IHJvb20gPSBnYW1lQ29udGV4dC5nZXRDdXJyZW50Um9vbSgpO1xyXG4gICAgICAgICAgICBsZXQgY3VycmVudDogbnVtYmVyID0gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgb2Zmc2V0ICs9IChNYXRoLm1pbigxLCAoY3VycmVudCAtIHByZXZpb3VzKSAvIDEwMDApKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHdoaWxlIChvZmZzZXQgPiBzdGVwU2l6ZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzUnVubmluZykge1xyXG4gICAgICAgICAgICAgICAgICAgIGdhbWVDb250ZXh0LmNoZWNrQW5kRmlyZUV2ZW50cygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJvb20uc3RlcCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIG9mZnNldCAtPSBzdGVwU2l6ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNSdW5uaW5nKSB7XHJcbiAgICAgICAgICAgICAgICBjYW52YXNEcmF3aW5nQ29udGV4dC5jbGVhcigpO1xyXG4gICAgICAgICAgICAgICAgcm9vbS5kcmF3KGNhbnZhc0RyYXdpbmdDb250ZXh0KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcHJldmlvdXMgPSBjdXJyZW50O1xyXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIHN0YXJ0IHRoZSBnYW1lIGxvb3BcclxuICAgICAgICB0aGlzLnN0YXRlID0gR2FtZVN0YXRlLlJ1bm5pbmc7XHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL2dhbWUtcnVubmVyLnRzIiwiaW1wb3J0IHsgVmFzdGdhbWUgfSBmcm9tICcuL3Zhc3RnYW1lJztcclxuXHJcbmV4cG9ydCBjbGFzcyBEZWZlcnJlZEV2ZW50IHtcclxuXHJcbiAgICBzdGF0aWMgcmVnaXN0ZXIoZXZlbnQ6IERlZmVycmVkRXZlbnQpOiB2b2lkIHtcclxuICAgICAgICBWYXN0Z2FtZS5nZXRDb250ZXh0KCkucmVnaXN0ZXJFdmVudChldmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIHJlYWRvbmx5IGNvbmRpdGlvbkNhbGxiYWNrOiAoKSA9PiBib29sZWFuLFxyXG4gICAgICAgIHB1YmxpYyByZWFkb25seSBhY3Rpb25DYWxsYmFjazogKCkgPT4gYW55LFxyXG4gICAgICAgIHB1YmxpYyByZWFkb25seSBmaXJlT25jZTogYm9vbGVhbiA9IHRydWUpIHtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvZXZlbnRzLnRzIiwiZXhwb3J0IGNsYXNzIE1hdGhVdGlsIHtcclxuXHJcbiAgICBzdGF0aWMgZ2V0TGVuZ3RoRGlyZWN0aW9uWChsZW5ndGg6IG51bWJlciwgZGlyZWN0aW9uOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBsZW5ndGggKiBNYXRoLmNvcyhkaXJlY3Rpb24gKiAoTWF0aC5QSSAvIDE4MCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRMZW5ndGhEaXJlY3Rpb25ZKGxlbmd0aDogbnVtYmVyLCBkaXJlY3Rpb246IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiBsZW5ndGggKiBNYXRoLnNpbihkaXJlY3Rpb24gKiAoTWF0aC5QSSAvIDE4MCkpO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvdXRpbC50cyIsImltcG9ydCB7IFNwcml0ZSB9IGZyb20gJy4vc3ByaXRlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBQb3NpdGlvbmVkQm91bmRhcnkge1xyXG4gICAgcHJpdmF0ZSBoZWlnaHQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgd2lkdGg6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgeDogbnVtYmVyLCBwdWJsaWMgeTogbnVtYmVyLCBib3VuZGFyeTogQm91bmRhcnkpIHtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGJvdW5kYXJ5LmhlaWdodDtcclxuICAgICAgICB0aGlzLndpZHRoID0gYm91bmRhcnkud2lkdGg7XHJcbiAgICB9XHJcblxyXG4gICAgY29sbGlkZXNXaXRoKG90aGVyOiBQb3NpdGlvbmVkQm91bmRhcnkpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodGhpcy54ID4gb3RoZXIueCArIG90aGVyLndpZHRoIHx8IG90aGVyLnggPj0gdGhpcy54ICsgdGhpcy53aWR0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy55ID4gb3RoZXIueSArIG90aGVyLmhlaWdodCB8fCBvdGhlci55ID49IHRoaXMueSArIHRoaXMuaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnRhaW5zUG9zaXRpb24oeDogbnVtYmVyLCB5OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodGhpcy54ID4geCB8fCB4ID4gdGhpcy54ICsgdGhpcy53aWR0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy55ID4geSB8fCB5ID4gdGhpcy55ICsgdGhpcy5oZWlnaHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBCb3VuZGFyeSB7XHJcblxyXG4gICAgc3RhdGljIGZyb21TcHJpdGUoc3ByaXRlOiBTcHJpdGUsIHNvbGlkOiBib29sZWFuID0gZmFsc2UpOiBCb3VuZGFyeSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBCb3VuZGFyeShzcHJpdGUuaGVpZ2h0LCBzcHJpdGUud2lkdGgsIHNvbGlkKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgaGVpZ2h0OiBudW1iZXIsIHB1YmxpYyB3aWR0aDogbnVtYmVyLCBwdWJsaWMgc29saWQ6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIGlmIChoZWlnaHQgPD0gMCB8fCB3aWR0aCA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSGVpZ2h0IGFuZCB3aWR0aCBtdXN0IGJvdGggYmUgZ3JlYXRlciB0aGFuIHplcm8uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGF0UG9zaXRpb24oeDogbnVtYmVyLCB5OiBudW1iZXIpOiBQb3NpdGlvbmVkQm91bmRhcnkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUG9zaXRpb25lZEJvdW5kYXJ5KHgsIHksIHRoaXMpO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvYm91bmRhcnkudHMiLCJpbXBvcnQgeyBSb29tLCBWYXN0Z2FtZSB9IGZyb20gJy4vLi4vZW5naW5lL3Zhc3RnYW1lJztcclxuaW1wb3J0ICogYXMgQ29uc3RhbnRzIGZyb20gJy4vdXRpbC9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBTZXR0aW5ncywgUm9vbUlEIH1mcm9tICcuL3V0aWwvZW51bSc7XHJcbmltcG9ydCB7IFJlZ2lzdHJ5LCByZXF1aXJlTW9kdWxlcywgYnVpbGRDYW52YXNEaW1lbnNpb25zIH0gZnJvbSAnLi91dGlsL3V0aWwnO1xyXG5cclxuLy8gZGV0ZXJtaW5lIGNhbnZhcyBkaW1lbnNpb25zIGJhc2VkIG9uIHZpZXdwb3J0IHNpemVcclxubGV0IFtjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0XSA9IGJ1aWxkQ2FudmFzRGltZW5zaW9ucygpO1xyXG5cclxuUmVnaXN0cnkuc2V0KFNldHRpbmdzLkNhbnZhc1dpZHRoLCBjYW52YXNXaWR0aCk7XHJcblJlZ2lzdHJ5LnNldChTZXR0aW5ncy5DYW52YXNIZWlnaHQsIGNhbnZhc0hlaWdodCk7XHJcblxyXG4vLyBpbml0aWFsaXplIHRoZSBnYW1lIGNhbnZhc1xyXG5WYXN0Z2FtZS5pbml0KCdnYW1lJywge1xyXG4gICAgY2FudmFzOiB7IHdpZHRoOiBjYW52YXNXaWR0aCwgaGVpZ2h0OiBjYW52YXNIZWlnaHQgfSxcclxufSlcclxuXHJcbi8vIGxvYWQgZ2FtZSBtb2R1bGVzXHJcbnJlcXVpcmVNb2R1bGVzKCdhY3RvcnMnLCBbJ2Jsb2NrJywgJ2h1ZCcsICdwbGF5ZXInLCAnd2FsbCcsICd3aW4nXSk7XHJcbnJlcXVpcmVNb2R1bGVzKCdyb29tcycsIFsnbGV2ZWwnLCAnbGV2ZWwtc2VsZWN0JywgJ3RpdGxlJ10pO1xyXG5cclxuLy8gVE9ETzogaGFja3MgdG8gcmVzZXQgZnJvbSB0aGUgYmVnaW5uaW5nLi4uXHJcblJlZ2lzdHJ5LnNldChTZXR0aW5ncy5TdGFja21vUHJvZ3Jlc3MsIDEsIHRydWUpO1xyXG5cclxuUmVnaXN0cnkubG9hZChTZXR0aW5ncy5TdGFja21vUHJvZ3Jlc3MpO1xyXG5cclxuLy8gc3RhcnQgdGhlIGdhbWUgd2l0aCB0aGUgdGl0bGUgcm9vbVxyXG5WYXN0Z2FtZS5zdGFydChSb29tSUQuVGl0bGUpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9nYW1lL2dhbWUudHMiLCJpbXBvcnQgKiBhcyBDb25zdGFudHMgZnJvbSAnLi9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBSZWdpc3RyeX0gZnJvbSAnLi9yZWdpc3RyeSc7XHJcblxyXG5leHBvcnQgeyBSZWdpc3RyeSB9O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlcXVpcmVNb2R1bGVzKHJvb3REaXI6IHN0cmluZywgZmlsZU5hbWVzOiBzdHJpbmdbXSkge1xyXG4gICAgZmlsZU5hbWVzLmZvckVhY2gobmFtZSA9PiByZXF1aXJlKCcuLy4uLycgKyByb290RGlyICsgJy8nICsgbmFtZSkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYnVpbGRDYW52YXNEaW1lbnNpb25zKCk6IFtudW1iZXIsIG51bWJlcl0ge1xyXG4gICAgbGV0IGZpbGxTY3JlZW4gPSB3aW5kb3cuaW5uZXJXaWR0aCA8IENvbnN0YW50cy5DYW52YXNNYXhXaWR0aDtcclxuXHJcbiAgICBsZXQgY2FudmFzV2lkdGggPSBmaWxsU2NyZWVuID8gd2luZG93LmlubmVyV2lkdGggOiBDb25zdGFudHMuQ2FudmFzTWF4V2lkdGg7XHJcbiAgICBjYW52YXNXaWR0aCArPSAoY2FudmFzV2lkdGggJSAyID09PSAwKSA/IDAgOiAxO1xyXG5cclxuICAgIGxldCBjYW52YXNIZWlnaHQgPSBmaWxsU2NyZWVuID8gd2luZG93LmlubmVySGVpZ2h0IDogQ29uc3RhbnRzLkNhbnZhc01heEhlaWdodDtcclxuICAgIGNhbnZhc0hlaWdodCArPSAoY2FudmFzSGVpZ2h0ICUgMiA9PT0gMCkgPyAwIDogMTtcclxuXHJcbiAgICByZXR1cm4gW2NhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHRdO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2dhbWUvdXRpbC91dGlsLnRzIiwiaW1wb3J0IHsgQWN0b3IsIEFjdG9ySW5zdGFuY2UsIFJvb20sIFZhc3RnYW1lIH0gZnJvbSAnLi8uLi8uLi9lbmdpbmUvdmFzdGdhbWUnO1xyXG5pbXBvcnQgeyBBY3RvcklELCBMZXZlbEJnQ29sb3IgfSBmcm9tICcuL2VudW0nO1xyXG5pbXBvcnQgKiBhcyBDb25zdGFudHMgZnJvbSAnLi9jb25zdGFudHMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIExldmVsQnVpbGRlciB7XHJcblxyXG4gICAgc3RhdGljIHBvcHVsYXRlUm9vbShyb29tOiBSb29tLCByb29tSUQ6IG51bWJlcik6IEFjdG9ySW5zdGFuY2VbXSB7XHJcbiAgICAgICAgbGV0IGNlbGxTaXplID0gQ29uc3RhbnRzLkdyaWRDZWxsU2l6ZTtcclxuXHJcbiAgICAgICAgbGV0IEJsb2NrID0gQWN0b3IuZ2V0KCdCbG9jaycpO1xyXG4gICAgICAgIGxldCBQbGF5ZXIgPSBBY3Rvci5nZXQoJ1BsYXllcicpO1xyXG4gICAgICAgIGxldCBXYWxsID0gQWN0b3IuZ2V0KCdXYWxsJyk7XHJcbiAgICAgICAgbGV0IFdpbiA9IEFjdG9yLmdldCgnV2luJyk7XHJcblxyXG4gICAgICAgIGxldCBpbnN0YW5jZXM6IEFjdG9ySW5zdGFuY2VbXSA9IFtdO1xyXG4gICAgICAgIGxldCBsZXZlbE1hcCA9IExldmVscy5nZXQocm9vbUlEKTtcclxuXHJcbiAgICAgICAgbGV0IGNvbG9yRW51bU1hcCA9IHtcclxuICAgICAgICAgICAgMDogWyBMZXZlbEJnQ29sb3IuVGVhbCwgTGV2ZWxCZ0NvbG9yLkRhcmtUZWFsIF1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBUT0RPOiByYW5kb21pemUvY3ljbGUgY29sb3JzICh0YWtlIGFzIHBhcmFtZXRlcj8pXHJcbiAgICAgICAgcm9vbS5zZXRCYWNrZ3JvdW5kKGNvbG9yRW51bU1hcFswXVswXSwgbGV2ZWxNYXBbMF0ubGVuZ3RoICogY2VsbFNpemUsIGxldmVsTWFwLmxlbmd0aCAqIGNlbGxTaXplLCBjb2xvckVudW1NYXBbMF1bMV0pO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxldmVsTWFwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCByb3cgPSBsZXZlbE1hcFtpXTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcm93Lmxlbmd0aDsgaisrKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChyb3cuY2hhckF0KGopKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1gnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZXMucHVzaChyb29tLmNyZWF0ZUFjdG9yKEFjdG9ySUQuQmxvY2ssIGogKiBjZWxsU2l6ZSwgaSAqIGNlbGxTaXplKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdQJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2VzLnB1c2gocm9vbS5jcmVhdGVBY3RvcihBY3RvcklELlBsYXllciwgaiAqIGNlbGxTaXplLCBpICogY2VsbFNpemUpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1cnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZXMucHVzaChyb29tLmNyZWF0ZUFjdG9yKEFjdG9ySUQuV2luLCBqICogY2VsbFNpemUsIGkgKiBjZWxsU2l6ZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnIyc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB3YWxsID0gcm9vbS5jcmVhdGVBY3RvcihBY3RvcklELldhbGwsIGogKiBjZWxsU2l6ZSwgaSAqIGNlbGxTaXplKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmcmFtZSA9IHRoaXMuZ2V0V2FsbEZyYW1lKGxldmVsTWFwLCBpLCBqKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2FsbC5zcHJpdGVBbmltYXRpb24uc2V0KGZyYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2VzLnB1c2god2FsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gaW5zdGFuY2VzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGdldFdhbGxGcmFtZShsZXZlbE1hcDogc3RyaW5nW10sIHJvdzogbnVtYmVyLCBwb3NpdGlvbjogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgd2FsbENoYXIgPSAnIyc7XHJcbiAgICAgICAgbGV0IG1heFggPSBsZXZlbE1hcFswXS5sZW5ndGggLSAxO1xyXG4gICAgICAgIGxldCBtYXhZID0gbGV2ZWxNYXAubGVuZ3RoIC0gMTtcclxuXHJcbiAgICAgICAgbGV0IHRvcEZyZWUgPSAocm93ID4gMCkgPyBsZXZlbE1hcFtyb3cgLSAxXVtwb3NpdGlvbl0gIT09IHdhbGxDaGFyIDogZmFsc2U7XHJcbiAgICAgICAgbGV0IHRvcExlZnRGcmVlID0gKHJvdyA+IDAgJiYgcG9zaXRpb24gPiAwKSA/IGxldmVsTWFwW3JvdyAtIDFdW3Bvc2l0aW9uIC0gMV0gIT09IHdhbGxDaGFyIDogZmFsc2U7XHJcbiAgICAgICAgbGV0IHRvcFJpZ2h0RnJlZSA9IChyb3cgPiAwICYmIHBvc2l0aW9uIDwgbWF4WCkgPyBsZXZlbE1hcFtyb3cgLSAxXVtwb3NpdGlvbiArIDFdICE9PSB3YWxsQ2hhciA6IGZhbHNlO1xyXG4gICAgICAgIGxldCBib3R0b21GcmVlID0gKHJvdyA8IG1heFkpID8gbGV2ZWxNYXBbcm93ICsgMV1bcG9zaXRpb25dICE9PSB3YWxsQ2hhciA6IGZhbHNlO1xyXG4gICAgICAgIGxldCBib3R0b21MZWZ0RnJlZSA9IChyb3cgPCBtYXhZICYmIHBvc2l0aW9uID4gMCkgPyBsZXZlbE1hcFtyb3cgKyAxXVtwb3NpdGlvbiAtIDFdICE9PSB3YWxsQ2hhciA6IGZhbHNlO1xyXG4gICAgICAgIGxldCBib3R0b21SaWdodEZyZWUgPSAocm93IDwgbWF4WSAmJiBwb3NpdGlvbiA8IG1heFgpID8gbGV2ZWxNYXBbcm93ICsgMV1bcG9zaXRpb24gKyAxXSAhPT0gd2FsbENoYXIgOiBmYWxzZTtcclxuICAgICAgICBsZXQgbGVmdEZyZWUgPSAocG9zaXRpb24gPiAwKSA/IGxldmVsTWFwW3Jvd11bcG9zaXRpb24gLSAxXSAhPT0gd2FsbENoYXIgOiBmYWxzZTtcclxuICAgICAgICBsZXQgcmlnaHRGcmVlID0gKHBvc2l0aW9uIDwgbWF4WCkgPyBsZXZlbE1hcFtyb3ddW3Bvc2l0aW9uICsgMV0gIT09IHdhbGxDaGFyIDogZmFsc2U7XHJcblxyXG4gICAgICAgIGlmICghdG9wRnJlZSkge1xyXG4gICAgICAgICAgICBpZiAoIWxlZnRGcmVlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXJpZ2h0RnJlZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghYm90dG9tRnJlZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRvcExlZnRGcmVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRvcFJpZ2h0RnJlZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghYm90dG9tTGVmdEZyZWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICFib3R0b21SaWdodEZyZWUgPyBXYWxsU3R5bGUuSW5uZXIgOiBXYWxsU3R5bGUuSW5uZXJDb3JuZXJUb3BMZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gIWJvdHRvbVJpZ2h0RnJlZSA/IFdhbGxTdHlsZS5Jbm5lckNvcm5lclRvcFJpZ2h0IDogV2FsbFN0eWxlLlRocmVld2F5Qm90dG9tO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFib3R0b21MZWZ0RnJlZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhYm90dG9tUmlnaHRGcmVlID8gV2FsbFN0eWxlLklubmVyQ29ybmVyQm90dG9tTGVmdCA6IFdhbGxTdHlsZS5UaHJlZXdheVJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdG9wUmlnaHRGcmVlICYmICFib3R0b21SaWdodEZyZWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhYm90dG9tTGVmdEZyZWUgPyBXYWxsU3R5bGUuSW5uZXJDb3JuZXJCb3R0b21SaWdodCA6IFdhbGxTdHlsZS5UaHJlZXdheUxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICFib3R0b21MZWZ0RnJlZSAmJiAhYm90dG9tUmlnaHRGcmVlID8gV2FsbFN0eWxlLlRocmVld2F5VG9wIDogV2FsbFN0eWxlLkZvdXJ3YXk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhdG9wTGVmdEZyZWUgJiYgIXRvcFJpZ2h0RnJlZSA/IFdhbGxTdHlsZS5GbGF0VG9wIDogV2FsbFN0eWxlLlRocmVld2F5TmFycm93VG9wO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCFib3R0b21GcmVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICF0b3BMZWZ0RnJlZSAmJiAhYm90dG9tTGVmdEZyZWUgPyBXYWxsU3R5bGUuRmxhdExlZnQgOiBXYWxsU3R5bGUuVGhyZWV3YXlOYXJyb3dMZWZ0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCF0b3BMZWZ0RnJlZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBXYWxsU3R5bGUuT3V0ZXJDb3JuZXJCb3R0b21SaWdodDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXJpZ2h0RnJlZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFib3R0b21GcmVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICF0b3BSaWdodEZyZWUgJiYgIWJvdHRvbVJpZ2h0RnJlZSA/IFdhbGxTdHlsZS5GbGF0UmlnaHQgOiBXYWxsU3R5bGUuVGhyZWV3YXlOYXJyb3dSaWdodDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICghdG9wUmlnaHRGcmVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFdhbGxTdHlsZS5PdXRlckNvcm5lckJvdHRvbUxlZnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuICFib3R0b21GcmVlID8gV2FsbFN0eWxlLk5hcnJvd1ZlcnRpY2FsIDogV2FsbFN0eWxlLkNhcHBlZEJvdHRvbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFsZWZ0RnJlZSkge1xyXG4gICAgICAgICAgICBpZiAoIXJpZ2h0RnJlZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFib3R0b21GcmVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICFib3R0b21MZWZ0RnJlZSAmJiAhYm90dG9tUmlnaHRGcmVlID8gV2FsbFN0eWxlLkZsYXRCb3R0b20gOiBXYWxsU3R5bGUuVGhyZWV3YXlOYXJyb3dCb3R0b207XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gV2FsbFN0eWxlLk5hcnJvd0hvcml6b250YWw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuICFib3R0b21MZWZ0RnJlZSAmJiAhYm90dG9tRnJlZSA/IFdhbGxTdHlsZS5PdXRlckNvcm5lclRvcFJpZ2h0IDogV2FsbFN0eWxlLkNhcHBlZFJpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXJpZ2h0RnJlZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gIWJvdHRvbVJpZ2h0RnJlZSAmJiAhYm90dG9tRnJlZSA/IFdhbGxTdHlsZS5PdXRlckNvcm5lclRvcExlZnQgOiBXYWxsU3R5bGUuQ2FwcGVkTGVmdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICFib3R0b21GcmVlID8gV2FsbFN0eWxlLkNhcHBlZFRvcCA6IFdhbGxTdHlsZS5Tb2xvO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTGV2ZWxzIHtcclxuXHJcbiAgICBzdGF0aWMgZ2V0IGNvdW50KCk6IG51bWJlciB7XHJcbiAgICAgICAgbGV0IGMgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IHAgaW4gdGhpcy5sZXZlbHMpIHtcclxuICAgICAgICAgICAgYysrO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYztcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgbGV2ZWxzOiB7IFtpZDogbnVtYmVyXTogc3RyaW5nW10gfSA9IHtcclxuICAgICAgICAxOiBbXHJcbiAgICAgICAgICAgICcjIyMjIyMjIyMjIyMjIyMjIyMnLFxyXG4gICAgICAgICAgICAnIyAgICAgICAgICAgICAgICAjJyxcclxuICAgICAgICAgICAgJyMgICAgICAgIyMgICAgICAgIycsXHJcbiAgICAgICAgICAgICcjICAgICAgICMjICAgICAgICMnLFxyXG4gICAgICAgICAgICAnI1hXICAgICAgICAgICAgICAjJyxcclxuICAgICAgICAgICAgJyMjIyMjICAgICAgICAgICBYIycsXHJcbiAgICAgICAgICAgICcjIyMjIyMjICAgICAgIFAjIyMnLFxyXG4gICAgICAgICAgICAnIyMjIyMjIyMjIyAgICAjIyMjJyxcclxuICAgICAgICAgICAgJyMjIyMjIyMjIyMgICMjIyMjIycsXHJcbiAgICAgICAgICAgICcjIyMjIyMjIyMjIyMjIyMjIyMnLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgMjogW1xyXG4gICAgICAgICAgICAnIyMjIyMjIyMjIyMjIyMjIyMjJyxcclxuICAgICAgICAgICAgJyMgICAgIyAgICAgICMgICAgIycsXHJcbiAgICAgICAgICAgICcjICAgIyMgICAjICAjIyAgICMnLFxyXG4gICAgICAgICAgICAnI1AgICAjICAgICAgIyAgICAjJyxcclxuICAgICAgICAgICAgJyMjICAgICAgICMgICAgICAgIycsXHJcbiAgICAgICAgICAgICcjVyAgICAgICMjIyAgIyMjIyMnLFxyXG4gICAgICAgICAgICAnIyMjIyAgICAgIyAgICAgICAjJyxcclxuICAgICAgICAgICAgJyMgICAgICAgICAgICAgICAgIycsXHJcbiAgICAgICAgICAgICcjIFhYIFggICMgICAgWFhXWCMnLFxyXG4gICAgICAgICAgICAnIyMjIyMjIyMjIyMjIyMjIyMjJyxcclxuICAgICAgICBdLFxyXG4gICAgICAgIDM6IFtcclxuICAgICAgICAgICAgJyMjIyMjIyMjIyMjIyMjIyMjIycsXHJcbiAgICAgICAgICAgICcjICAgICAgICAgICAgICAgICMnLFxyXG4gICAgICAgICAgICAnIyAgICAgICAgICAgICAgICAjJyxcclxuICAgICAgICAgICAgJyMgICAgICAgICAgICAgICAgIycsXHJcbiAgICAgICAgICAgICcjICAgICAgICAgICAgICAgICMnLFxyXG4gICAgICAgICAgICAnIyAgICAgICAgICAgICAgICAjJyxcclxuICAgICAgICAgICAgJyMgVyAgICAgICAjICAgICAgIycsXHJcbiAgICAgICAgICAgICcjIFhYWCAgICAgICMgICAgICMnLFxyXG4gICAgICAgICAgICAnIyBYWFhYICBQICMgIyAgWFgjJyxcclxuICAgICAgICAgICAgJyMjIyMjIyMjIyMjIyMjIyMjIycsXHJcbiAgICAgICAgXSxcclxuICAgICAgICA0OiBbXHJcbiAgICAgICAgICAgICcjIyMjIyMjIyMjIyMjIyMjIyMnLFxyXG4gICAgICAgICAgICAnIyAgICAgICAgICAgICAgICAjJyxcclxuICAgICAgICAgICAgJyMgICAjICAgICAgICAgICAgIycsXHJcbiAgICAgICAgICAgICcjICAgICAgICAgIyAgICAgICMnLFxyXG4gICAgICAgICAgICAnIyAgICAjICAgICAgICAgICAjJyxcclxuICAgICAgICAgICAgJyMgICMgICAgICAgICBYWCAgIycsXHJcbiAgICAgICAgICAgICcjICAgICAgICAgICBYWFhYWCMnLFxyXG4gICAgICAgICAgICAnIyAgICAgICAgICBYWFhYWFgjJyxcclxuICAgICAgICAgICAgJyMgIFAgICAgWFhYWFhYWFhYIycsXHJcbiAgICAgICAgICAgICcjIyMjIyMjIyMjIyMjIyMjIyMnLFxyXG4gICAgICAgIF0sIDU6IFtdLCA2OiBbXSwgNzogW10sIDg6IFtdLCA5OiBbXSwgMTA6IFtdLCAxMTogW10sIDEyOiBbXSwgMTM6IFtdLCAxNDogW10sIDE1OiBbXSwgMTY6IFtdLCAxNzogW10sIDE4OiBbXSwgXHJcbiAgICAgICAgMTk6IFtdLCAyMDogW10sIDIxOiBbXSwgMjI6IFtdLCAyMzogW10sIDI0OiBbXSwgMjU6IFtdLCAyNjogW10sIDI3OiBbXSwgMjg6IFtdLCAyOTogW10sIDMwOiBbXSwgMzE6IFtdLDMyOiBbXSwgIFxyXG4gICAgfTtcclxuXHJcbiAgICBzdGF0aWMgZ2V0KGxldmVsTnVtYmVyOiBudW1iZXIpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubGV2ZWxzW2xldmVsTnVtYmVyXTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gZW51bSB2YWx1ZXMgY29ycmVzcG9uZCB0byBzcHJpdGUgc2hlZXQgZnJhbWVzXHJcbmVudW0gV2FsbFN0eWxlIHtcclxuICAgIElubmVyQ29ybmVyVG9wTGVmdCA9IDAsXHJcbiAgICBGbGF0VG9wID0gMSxcclxuICAgIElubmVyQ29ybmVyVG9wUmlnaHQgPSAyLFxyXG4gICAgT3V0ZXJDb3JuZXJUb3BMZWZ0ID0gMyxcclxuICAgIE91dGVyQ29ybmVyQm90dG9tTGVmdCA9IDQsXHJcbiAgICBGbGF0TGVmdCA9IDUsXHJcbiAgICBJbm5lciA9IDYsXHJcbiAgICBGbGF0UmlnaHQgPSA3LFxyXG4gICAgT3V0ZXJDb3JuZXJUb3BSaWdodCA9IDgsXHJcbiAgICBJbm5lckNvcm5lckJvdHRvbUxlZnQgPSA5LFxyXG4gICAgRmxhdEJvdHRvbSA9IDEwLFxyXG4gICAgSW5uZXJDb3JuZXJCb3R0b21SaWdodCA9IDExLFxyXG4gICAgT3V0ZXJDb3JuZXJCb3R0b21SaWdodCA9IDEyLFxyXG4gICAgTmFycm93SG9yaXpvbnRhbCA9IDEzLFxyXG4gICAgTmFycm93VmVydGljYWwgPSAxNCxcclxuICAgIENhcHBlZExlZnQgPSAxNSxcclxuICAgIENhcHBlZFRvcCA9IDE2LFxyXG4gICAgQ2FwcGVkUmlnaHQgPSAxNyxcclxuICAgIENhcHBlZEJvdHRvbSA9IDE4LFxyXG4gICAgVGhyZWV3YXlOYXJyb3dUb3AgPSAxOSxcclxuICAgIFRocmVld2F5TmFycm93UmlnaHQgPSAyMCxcclxuICAgIFRocmVld2F5TmFycm93Qm90dG9tID0gMjEsXHJcbiAgICBUaHJlZXdheU5hcnJvd0xlZnQgPSAyMixcclxuICAgIEZvdXJ3YXkgPSAyMyxcclxuICAgIFNvbG8gPSAyNCxcclxuICAgIFRocmVld2F5VG9wID0gMjUsXHJcbiAgICBUaHJlZXdheVJpZ2h0ID0gMjYsXHJcbiAgICBUaHJlZXdheUJvdHRvbSA9IDI3LFxyXG4gICAgVGhyZWV3YXlMZWZ0ID0gMjgsXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZ2FtZS91dGlsL2xldmVsLWJ1aWxkZXIudHMiLCJpbXBvcnQgeyBBY3RvciwgQm91bmRhcnksIEVudW0sIEdyaWRDZWxsLCBSb29tLCBTcHJpdGUgfSBmcm9tICcuLy4uLy4uL2VuZ2luZS92YXN0Z2FtZSc7XHJcbmltcG9ydCAqIGFzIENvbnN0YW50cyBmcm9tICcuLy4uL3V0aWwvY29uc3RhbnRzJztcclxuaW1wb3J0IHsgQWN0b3JJRCwgR2FtZUFjdGlvbiwgU3ByaXRlSUQgfSBmcm9tICcuLy4uL3V0aWwvZW51bSc7XHJcblxyXG5sZXQgQmxvY2tTcHJpdGUgPSBTcHJpdGUuZGVmaW5lKFNwcml0ZUlELkJveCwge1xyXG4gICAgaW1hZ2VTb3VyY2U6ICcuLi9yZXNvdXJjZXMvYm94LnBuZycsXHJcbiAgICBoZWlnaHQ6IENvbnN0YW50cy5HcmlkQ2VsbFNpemUsXHJcbiAgICB3aWR0aDogQ29uc3RhbnRzLkdyaWRDZWxsU2l6ZSxcclxufSk7XHJcblxyXG5sZXQgQmxvY2sgPSBBY3Rvci5kZWZpbmUoQWN0b3JJRC5CbG9jaywge1xyXG4gICAgYm91bmRhcnk6IEJvdW5kYXJ5LmZyb21TcHJpdGUoQmxvY2tTcHJpdGUpLFxyXG4gICAgc3ByaXRlOiBCbG9ja1Nwcml0ZSxcclxufSk7XHJcblxyXG4vLyBGYWxsaW5nXHJcbkJsb2NrLm9uRXZlbnQoR2FtZUFjdGlvbi5GYWxsLCAoYmxvY2ssIGFyZ3MpID0+IHtcclxuICAgIGxldCByb29tOiBSb29tID0gYXJncy5nYW1lLmN1cnJlbnRSb29tO1xyXG5cclxuICAgIGlmICghcm9vbS5pc1Bvc2l0aW9uRnJlZShibG9jay54ICsgMSwgYmxvY2sueSArIENvbnN0YW50cy5HcmlkQ2VsbFNpemUgKyAxKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgc3RhcnRZID0gYmxvY2sueTtcclxuICAgIGxldCBzdG9wQ29uZGl0aW9uID0gKCk6IGJvb2xlYW4gPT4gIE1hdGguYWJzKHN0YXJ0WSAtIGJsb2NrLnkpID49IENvbnN0YW50cy5HcmlkQ2VsbFNpemU7XHJcblxyXG4gICAgLy8gbW92ZSB0aGUgdGFyZ2V0IGNlbGwgdG8gdGhlIG9uZSBiZWxvdyB0aGUgcHJldmlvdXMgdGFyZ2V0IGNlbGxcclxuICAgIGFyZ3MudGFyZ2V0Q2VsbCA9IGFyZ3MudGFyZ2V0Q2VsbC5nZXRBZGphY2VudENlbGwoRW51bS5EaXJlY3Rpb24uRG93bik7XHJcblxyXG4gICAgYmxvY2subW92ZShDb25zdGFudHMuQmxvY2tGYWxsU3BlZWQsIEVudW0uRGlyZWN0aW9uLkRvd24pO1xyXG4gICAgYmxvY2sucmFpc2VFdmVudFdoZW4oR2FtZUFjdGlvbi5TdG9wLCBzdG9wQ29uZGl0aW9uLCBhcmdzKTtcclxufSlcclxuXHJcbi8vIFN0b3BwaW5nXHJcbkJsb2NrLm9uRXZlbnQoR2FtZUFjdGlvbi5TdG9wLCAoYmxvY2ssIGFyZ3MpID0+IHtcclxuICAgIGxldCByb29tOiBSb29tID0gYXJncy5nYW1lLmN1cnJlbnRSb29tO1xyXG4gICAgbGV0IHRhcmdldENlbGw6IEdyaWRDZWxsID0gYXJncy50YXJnZXRDZWxsO1xyXG5cclxuICAgIC8vIHNuYXAgdG8gdGhlIGdyaWRcclxuICAgIGJsb2NrLm1vdmUoMCk7XHJcbiAgICBibG9jay5zZXRQb3NpdGlvbih0YXJnZXRDZWxsLngsIHRhcmdldENlbGwueSk7XHJcblxyXG4gICAgLy8gY2hlY2sgaWYgZmFsbGluZ1xyXG4gICAgaWYgKHJvb20uaXNQb3NpdGlvbkZyZWUoYmxvY2sueCArIDEsIGJsb2NrLnkgKyBDb25zdGFudHMuR3JpZENlbGxTaXplICsgMSkpIHtcclxuICAgICAgICBibG9jay5yYWlzZUV2ZW50KEdhbWVBY3Rpb24uRmFsbCwgYXJncyk7XHJcbiAgICB9XHJcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9nYW1lL2FjdG9ycy9ibG9jay50cyIsImltcG9ydCB7IEFjdG9yLCBCb3VuZGFyeSwgR3JpZENlbGwsIFJvb20sIFNwcml0ZSwgVmFzdGdhbWUgfSBmcm9tICcuLy4uLy4uL2VuZ2luZS92YXN0Z2FtZSc7XHJcbmltcG9ydCAqIGFzIENvbnN0YW50cyBmcm9tICcuLy4uL3V0aWwvY29uc3RhbnRzJztcclxuaW1wb3J0IHsgQWN0b3JJRCwgU3ByaXRlSUQsIFJvb21JRCB9IGZyb20gJy4vLi4vdXRpbC9lbnVtJztcclxuXHJcbmxldCBYU3ByaXRlID0gU3ByaXRlLmRlZmluZShTcHJpdGVJRC5YLCB7XHJcbiAgICBpbWFnZVNvdXJjZTogJy4uL3Jlc291cmNlcy94LnBuZycsXHJcbiAgICBoZWlnaHQ6IENvbnN0YW50cy5HcmlkQ2VsbFNpemUsXHJcbiAgICB3aWR0aDogQ29uc3RhbnRzLkdyaWRDZWxsU2l6ZSxcclxufSk7XHJcblxyXG5sZXQgRXhpdEJ1dHRvbiA9IEFjdG9yLmRlZmluZShBY3RvcklELkV4aXRCdXR0b24sIHtcclxuICAgIGJvdW5kYXJ5OiBCb3VuZGFyeS5mcm9tU3ByaXRlKFhTcHJpdGUpLFxyXG4gICAgc3ByaXRlOiBYU3ByaXRlLFxyXG59KTtcclxuXHJcbkV4aXRCdXR0b24ub25DbGljaygoKSA9PiBWYXN0Z2FtZS5zZXRSb29tKFJvb21JRC5MZXZlbFNlbGVjdCkpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZ2FtZS9hY3RvcnMvaHVkLnRzIiwiaW1wb3J0IHsgQWN0b3IsIEFjdG9ySW5zdGFuY2UsIEJvdW5kYXJ5LCBFbnVtLCBJbnB1dCwgR3JpZENlbGwsIFJvb20sIFNwcml0ZSB9IGZyb20gJy4vLi4vLi4vZW5naW5lL3Zhc3RnYW1lJztcclxuaW1wb3J0ICogYXMgQ29uc3RhbnRzIGZyb20gJy4vLi4vdXRpbC9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBBY3RvcklELCBHYW1lQWN0aW9uLCBTcHJpdGVJRCB9IGZyb20gJy4vLi4vdXRpbC9lbnVtJztcclxuXHJcbmxldCBCb3RTcHJpdGUgPSBTcHJpdGUuZGVmaW5lKFNwcml0ZUlELlN0YWNrbW9TaGVldCwge1xyXG4gICAgaW1hZ2VTb3VyY2U6ICcuLi9yZXNvdXJjZXMvc3RhY2ttb19zaGVldC5wbmcnLFxyXG4gICAgaGVpZ2h0OiBDb25zdGFudHMuR3JpZENlbGxTaXplLFxyXG4gICAgd2lkdGg6IENvbnN0YW50cy5HcmlkQ2VsbFNpemUsXHJcbiAgICBmcmFtZUJvcmRlcjogNCxcclxufSk7XHJcblxyXG5sZXQgUGxheWVyID0gQWN0b3IuZGVmaW5lKEFjdG9ySUQuUGxheWVyLCB7XHJcbiAgICBib3VuZGFyeTogQm91bmRhcnkuZnJvbVNwcml0ZShCb3RTcHJpdGUpLFxyXG4gICAgc3ByaXRlOiBCb3RTcHJpdGUsXHJcbn0pO1xyXG5cclxubGV0IGhlbGRCbG9jazogQWN0b3JJbnN0YW5jZTtcclxubGV0IGxhc3REaXJlY3Rpb246IEVudW0uRGlyZWN0aW9uID0gRW51bS5EaXJlY3Rpb24uUmlnaHQ7XHJcblxyXG5QbGF5ZXIub25DcmVhdGUoc2VsZiA9PiB7XHJcbiAgICBzZWxmLmFuaW1hdGlvbi5kZXB0aCA9IC01MDtcclxuICAgIGhlbGRCbG9jayA9IG51bGw7XHJcbn0pO1xyXG5cclxuUGxheWVyLm9uU3RlcChzZWxmID0+IHtcclxuXHJcbiAgICBpZiAoaGVsZEJsb2NrKSB7XHJcbiAgICAgICAgaGVsZEJsb2NrLnNldFBvc2l0aW9uKHNlbGYueCwgc2VsZi55IC0gQ29uc3RhbnRzLkdyaWRDZWxsU2l6ZSk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuLy8gTW92aW5nXHJcblBsYXllci5vbkV2ZW50KEdhbWVBY3Rpb24uTW92ZSwgKHBsYXllciwgYXJncykgPT4ge1xyXG4gICAgbGV0IHRhcmdldENlbGw6IEdyaWRDZWxsID0gYXJncy50YXJnZXRDZWxsO1xyXG4gICAgbGV0IGRpcmVjdGlvbjogRW51bS5EaXJlY3Rpb24gPSBhcmdzLmRpcmVjdGlvbjtcclxuICAgIGxldCBzdGFydFggPSBwbGF5ZXIueDtcclxuXHJcbiAgICBsZXQgc3RvcENvbmRpdGlvbiA9ICgpOiBib29sZWFuID0+IHtcclxuICAgICAgICByZXR1cm4gTWF0aC5hYnMoc3RhcnRYIC0gcGxheWVyLngpID49IENvbnN0YW50cy5HcmlkQ2VsbFNpemU7XHJcbiAgICB9O1xyXG5cclxuICAgIGxhc3REaXJlY3Rpb24gPSBkaXJlY3Rpb247XHJcblxyXG4gICAgLy8gY2xlYXJhbmNlIGNoZWNrXHJcbiAgICBpZiAoIWhlbGRCbG9jayB8fCAoaGVsZEJsb2NrICYmIHRhcmdldENlbGwuZ2V0QWRqYWNlbnRDZWxsKEVudW0uRGlyZWN0aW9uLlVwKS5pc0ZyZWUoKSkpIHtcclxuICAgICAgICBwbGF5ZXIubW92ZShDb25zdGFudHMuUGxheWVyTW92ZVNwZWVkLCBkaXJlY3Rpb24pO1xyXG4gICAgICAgIHBsYXllci5yYWlzZUV2ZW50V2hlbihHYW1lQWN0aW9uLkNoZWNrU3RvcE1vdmluZywgc3RvcENvbmRpdGlvbiwgYXJncyk7XHJcbiAgICBcclxuICAgICAgICBhbmltYXRlKHBsYXllciwgZGlyZWN0aW9uLCB0cnVlKTtcclxuICAgIH1cclxufSk7XHJcblxyXG4vLyBTdG9wIG1vdmluZyBvciBjb250aW51ZVxyXG5QbGF5ZXIub25FdmVudChHYW1lQWN0aW9uLkNoZWNrU3RvcE1vdmluZywgKHBsYXllciwgYXJncykgPT4ge1xyXG4gICAgbGV0IHRhcmdldENlbGw6IEdyaWRDZWxsID0gYXJncy50YXJnZXRDZWxsO1xyXG4gICAgbGV0IGFjdGlvbiA9IEdhbWVBY3Rpb24uU3RvcDtcclxuXHJcbiAgICAvLyBzbmFwIHRvIHRoZSBncmlkXHJcbiAgICBwbGF5ZXIubW92ZSgwKTtcclxuICAgIHBsYXllci5zZXRQb3NpdGlvbih0YXJnZXRDZWxsLngsIHRhcmdldENlbGwueSk7XHJcblxyXG4gICAgaWYgKElucHV0LmNsaWNrQWN0aXZlIHx8IElucHV0LmtleURvd24obGFzdERpcmVjdGlvbiA9PT0gRW51bS5EaXJlY3Rpb24uTGVmdCA/IEVudW0uS2V5LkxlZnQgOiBFbnVtLktleS5SaWdodCkpIHtcclxuICAgICAgICBsZXQgbmV4dENlbGwgPSB0YXJnZXRDZWxsLmdldEFkamFjZW50Q2VsbChsYXN0RGlyZWN0aW9uKTtcclxuICAgICAgICBsZXQgYmVsb3dDZWxsID0gdGFyZ2V0Q2VsbC5nZXRBZGphY2VudENlbGwoRW51bS5EaXJlY3Rpb24uRG93bik7XHJcblxyXG4gICAgICAgIGlmIChuZXh0Q2VsbC5pc0ZyZWUoKSAmJiAhYmVsb3dDZWxsLmlzRnJlZSgpKSB7XHJcbiAgICAgICAgICAgIGFyZ3MudGFyZ2V0Q2VsbCA9IG5leHRDZWxsO1xyXG4gICAgICAgICAgICBhY3Rpb24gPSBHYW1lQWN0aW9uLk1vdmVcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcGxheWVyLnJhaXNlRXZlbnQoYWN0aW9uLCBhcmdzKTtcclxufSk7XHJcblxyXG4vLyBGYWxsaW5nXHJcblBsYXllci5vbkV2ZW50KEdhbWVBY3Rpb24uRmFsbCwgKHBsYXllciwgYXJncykgPT4ge1xyXG4gICAgbGV0IHN0YXJ0WSA9IHBsYXllci55O1xyXG4gICAgbGV0IGRpcmVjdGlvbjogRW51bS5EaXJlY3Rpb24gPSBhcmdzLmRpcmVjdGlvbjtcclxuICAgIGxldCBzdG9wQ29uZGl0aW9uID0gKCk6IGJvb2xlYW4gPT4gIE1hdGguYWJzKHN0YXJ0WSAtIHBsYXllci55KSA+PSBDb25zdGFudHMuR3JpZENlbGxTaXplO1xyXG5cclxuICAgIC8vIG1vdmUgdGhlIHRhcmdldCBjZWxsIHRvIHRoZSBvbmUgYmVsb3cgdGhlIHByZXZpb3VzIHRhcmdldCBjZWxsXHJcbiAgICBhcmdzLnRhcmdldENlbGwgPSBhcmdzLnRhcmdldENlbGwuZ2V0QWRqYWNlbnRDZWxsKEVudW0uRGlyZWN0aW9uLkRvd24pO1xyXG5cclxuICAgIHBsYXllci5tb3ZlKENvbnN0YW50cy5QbGF5ZXJGYWxsU3BlZWQsIEVudW0uRGlyZWN0aW9uLkRvd24pO1xyXG4gICAgcGxheWVyLnJhaXNlRXZlbnRXaGVuKEdhbWVBY3Rpb24uU3RvcCwgc3RvcENvbmRpdGlvbiwgYXJncyk7XHJcblxyXG4gICAgYW5pbWF0ZShwbGF5ZXIsIGRpcmVjdGlvbiwgZmFsc2UpO1xyXG59KVxyXG5cclxuLy8gU3RvcHBpbmdcclxuUGxheWVyLm9uRXZlbnQoR2FtZUFjdGlvbi5TdG9wLCAocGxheWVyLCBhcmdzKSA9PiB7XHJcbiAgICBsZXQgcm9vbTogUm9vbSA9IGFyZ3MuZ2FtZS5jdXJyZW50Um9vbTtcclxuICAgIGxldCB0YXJnZXRDZWxsOiBHcmlkQ2VsbCA9IGFyZ3MudGFyZ2V0Q2VsbDtcclxuXHJcbiAgICAvLyBzbmFwIHRvIHRoZSBncmlkXHJcbiAgICBwbGF5ZXIubW92ZSgwKTtcclxuICAgIHBsYXllci5zZXRQb3NpdGlvbih0YXJnZXRDZWxsLngsIHRhcmdldENlbGwueSk7XHJcblxyXG4gICAgLy8gY2hlY2sgaWYgZmFsbGluZ1xyXG4gICAgaWYgKHJvb20uaXNQb3NpdGlvbkZyZWUocGxheWVyLnggKyAxLCBwbGF5ZXIueSArIENvbnN0YW50cy5HcmlkQ2VsbFNpemUgKyAxKSkge1xyXG4gICAgICAgIHBsYXllci5yYWlzZUV2ZW50KEdhbWVBY3Rpb24uRmFsbCwgYXJncyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBhbmltYXRlKHBsYXllciwgbGFzdERpcmVjdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY2hlY2sgZm9yIHZpY3RvcnlcclxuICAgIGxldCBXaW5BY3RvciA9IEFjdG9yLmdldChBY3RvcklELldpbik7XHJcbiAgICBpZiAodGFyZ2V0Q2VsbC5jb250YWluc0luc3RhbmNlT2YoV2luQWN0b3IpKSB7XHJcbiAgICAgICAgbGV0IHdpbiA9IHJvb20uZ2V0SW5zdGFuY2VzKCkuZmluZChhY3Rvckluc3RhbmNlID0+IGFjdG9ySW5zdGFuY2UucGFyZW50ID09PSBXaW5BY3Rvcik7XHJcbiAgICAgICAgd2luLnJhaXNlRXZlbnQoR2FtZUFjdGlvbi5XaW4pO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbi8vIEp1bXBpbmdcclxuUGxheWVyLm9uRXZlbnQoR2FtZUFjdGlvbi5KdW1wLCAocGxheWVyLCBhcmdzKSA9PiB7XHJcbiAgICBsZXQgdGFyZ2V0Q2VsbDogR3JpZENlbGwgPSBhcmdzLnRhcmdldENlbGw7XHJcbiAgICBsZXQgZGlyZWN0aW9uOiBFbnVtLkRpcmVjdGlvbiA9IGFyZ3MuZGlyZWN0aW9uO1xyXG4gICAgbGV0IHN0YXJ0WSA9IHBsYXllci55O1xyXG5cclxuICAgIC8vIGNsZWFyYW5jZSBjaGVja1xyXG4gICAgbGV0IGNlbGxBYm92ZVBsYXllciA9IHRhcmdldENlbGwuZ2V0QWRqYWNlbnRDZWxsKGRpcmVjdGlvbiA9PT0gRW51bS5EaXJlY3Rpb24uUmlnaHQgPyBFbnVtLkRpcmVjdGlvbi5MZWZ0IDogRW51bS5EaXJlY3Rpb24uUmlnaHQpO1xyXG4gICAgbGV0IGNlbGxBYm92ZUJveCA9ICEhaGVsZEJsb2NrID8gY2VsbEFib3ZlUGxheWVyLmdldEFkamFjZW50Q2VsbChFbnVtLkRpcmVjdGlvbi5VcCkgOiBudWxsO1xyXG5cclxuICAgIGxldCBjYW5KdW1wID0gISFjZWxsQWJvdmVCb3ggXHJcbiAgICAgICAgPyBjZWxsQWJvdmVCb3guaXNGcmVlKCkgJiYgY2VsbEFib3ZlQm94LmdldEFkamFjZW50Q2VsbChkaXJlY3Rpb24pLmlzRnJlZSgpXHJcbiAgICAgICAgOiBjZWxsQWJvdmVQbGF5ZXIuaXNGcmVlKCkgO1xyXG5cclxuICAgIGlmIChjYW5KdW1wKSB7XHJcbiAgICAgICAgLy8gc3RvcCBhZnRlciBtb3ZpbmcgdXAgb25lIHNwYWNlXHJcbiAgICAgICAgbGV0IHN0b3BDb25kaXRpb24gPSAoKTogYm9vbGVhbiA9PiBNYXRoLmFicyhzdGFydFkgLSBwbGF5ZXIueSkgPj0gQ29uc3RhbnRzLkdyaWRDZWxsU2l6ZTtcclxuICAgICAgICBwbGF5ZXIubW92ZShDb25zdGFudHMuUGxheWVySnVtcFNwZWVkLCBFbnVtLkRpcmVjdGlvbi5VcCk7XHJcbiAgICAgICAgcGxheWVyLnJhaXNlRXZlbnRXaGVuKEdhbWVBY3Rpb24uTW92ZSwgc3RvcENvbmRpdGlvbiwgYXJncyk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuLy8gTGlmdGluZ1xyXG5QbGF5ZXIub25FdmVudChHYW1lQWN0aW9uLkxpZnQsIChwbGF5ZXIsIGFyZ3MpID0+IHtcclxuICAgIGxldCBibG9jazogQWN0b3JJbnN0YW5jZSA9IGFyZ3MuYmxvY2s7XHJcbiAgICBsZXQgdGFyZ2V0Q2VsbDogR3JpZENlbGwgPSBhcmdzLnRhcmdldENlbGw7XHJcblxyXG4gICAgbGV0IHZhbGlkQmxvY2tMaWZ0Q2VsbCA9IGxhc3REaXJlY3Rpb24gPT09IEVudW0uRGlyZWN0aW9uLkxlZnQgPyBFbnVtLkRpcmVjdGlvbi5SaWdodCA6IEVudW0uRGlyZWN0aW9uLkxlZnQ7XHJcblxyXG4gICAgLy8gcHJldmVudCBsaWZ0aW5nIGlmIHRoZXJlJ3Mgc29tZXRoaW5nIG9uIHRvcCBvZiB0aGUgYm94IG9yIG9uIHRvcCBvZiB0aGUgcGxheWVyXHJcbiAgICBsZXQgYWJvdmVCb3hDZWxsID0gdGFyZ2V0Q2VsbC5nZXRBZGphY2VudENlbGwoRW51bS5EaXJlY3Rpb24uVXApO1xyXG4gICAgbGV0IGFib3ZlUGxheWVyQ2VsbCA9IGFib3ZlQm94Q2VsbC5nZXRBZGphY2VudENlbGwodmFsaWRCbG9ja0xpZnRDZWxsKTtcclxuXHJcbiAgICBpZiAoIWhlbGRCbG9jayAmJiAhKGFib3ZlQm94Q2VsbC5pc0ZyZWUoKSAmJiBhYm92ZVBsYXllckNlbGwuaXNGcmVlKCkpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZiAoaGVsZEJsb2NrICYmIGJsb2NrID09PSBoZWxkQmxvY2spIHtcclxuICAgICAgICBwbGF5ZXIucmFpc2VFdmVudChHYW1lQWN0aW9uLkRyb3AsIGFyZ3MpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoIWhlbGRCbG9jayAmJiB0YXJnZXRDZWxsLmdldEFkamFjZW50Q2VsbCh2YWxpZEJsb2NrTGlmdENlbGwpLmNvbnRhaW5zSW5zdGFuY2UocGxheWVyKSkge1xyXG4gICAgICAgIGhlbGRCbG9jayA9IGJsb2NrO1xyXG4gICAgICAgIGFuaW1hdGUocGxheWVyLCBsYXN0RGlyZWN0aW9uKTtcclxuICAgIH1cclxufSk7XHJcblxyXG4vLyBEcm9wXHJcblBsYXllci5vbkV2ZW50KEdhbWVBY3Rpb24uRHJvcCwgKHBsYXllciwgYXJncykgPT4ge1xyXG4gICAgbGV0IGJsb2NrOiBBY3Rvckluc3RhbmNlID0gYXJncy5ibG9jaztcclxuICAgIGxldCB0YXJnZXRDZWxsOiBHcmlkQ2VsbCA9IGFyZ3MudGFyZ2V0Q2VsbDtcclxuICAgIGxldCBvZmZzZXRYID0gbGFzdERpcmVjdGlvbiA9PT0gRW51bS5EaXJlY3Rpb24uTGVmdCA/IC1Db25zdGFudHMuR3JpZENlbGxTaXplIDogQ29uc3RhbnRzLkdyaWRDZWxsU2l6ZTtcclxuXHJcbiAgICAvLyBwcmV2ZW50IGRyb3BwaW5nIGlmIHRoZXJlJ3Mgc29tZXRoaW5nIGluIHRoZSB3YXkgb2YgdGhlIGJveFxyXG4gICAgaWYgKHRhcmdldENlbGwuZ2V0QWRqYWNlbnRDZWxsKGxhc3REaXJlY3Rpb24pLmlzRnJlZSgpKSB7XHJcbiAgICAgICAgYXJncy50YXJnZXRDZWxsID0gYXJncy50YXJnZXRDZWxsLmdldEFkamFjZW50Q2VsbChsYXN0RGlyZWN0aW9uKTtcclxuICAgICAgICBcclxuICAgICAgICBoZWxkQmxvY2sgPSBudWxsO1xyXG4gICAgXHJcbiAgICAgICAgYmxvY2suc2V0UG9zaXRpb25SZWxhdGl2ZShvZmZzZXRYLCAwKTtcclxuICAgICAgICBibG9jay5yYWlzZUV2ZW50KEdhbWVBY3Rpb24uRmFsbCwgYXJncyk7XHJcbiAgICBcclxuICAgICAgICBhbmltYXRlKHBsYXllciwgbGFzdERpcmVjdGlvbik7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuLy8gSGVscGVyc1xyXG4vLyBlbnVtcyB2YWx1ZXMgY29ycmVzcG9uZCB0byBzcHJpdGUgc2hlZXQgZnJhbWVzXHJcbmVudW0gU3RhY2ttb0ZyYW1lIHtcclxuICAgIFN0YW5kTGVmdCA9IDAsXHJcbiAgICBNb3ZlTGVmdDEgPSAxLFxyXG4gICAgTW92ZUxlZnQyID0gMixcclxuICAgIFN0YW5kUmlnaHQgPSAzLFxyXG4gICAgTW92ZVJpZ2h0MSA9IDQsXHJcbiAgICBNb3ZlUmlnaHQyID0gNSxcclxuICAgIFN0YW5kSG9sZExlZnQgPSA2LFxyXG4gICAgTW92ZUhvbGRMZWZ0MSA9IDcsXHJcbiAgICBNb3ZlSG9sZExlZnQyID0gOCxcclxuICAgIFN0YW5kSG9sZFJpZ2h0ID0gOSxcclxuICAgIE1vdmVIb2xkUmlnaHQxID0gMTAsXHJcbiAgICBNb3ZlSG9sZGRSaWdodDIgPSAxMSxcclxufVxyXG5cclxuZnVuY3Rpb24gYW5pbWF0ZShwbGF5ZXI6IEFjdG9ySW5zdGFuY2UsIGRpcmVjdGlvbjogRW51bS5EaXJlY3Rpb24sIGlzTW92aW5nOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcclxuICAgIGNvbnN0IGFuaW1hdGlvblNwZWVkID0gMTAwO1xyXG4gICAgbGV0IHN0YXJ0RnJhbWUgPSBTdGFja21vRnJhbWUuU3RhbmRSaWdodDtcclxuICAgIFxyXG4gICAgaWYgKCEhaGVsZEJsb2NrKSB7XHJcbiAgICAgICAgc3RhcnRGcmFtZSA9IGRpcmVjdGlvbiA9PT0gRW51bS5EaXJlY3Rpb24uUmlnaHQgPyBTdGFja21vRnJhbWUuU3RhbmRIb2xkUmlnaHQgOiBTdGFja21vRnJhbWUuU3RhbmRIb2xkTGVmdDtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHN0YXJ0RnJhbWUgPSBkaXJlY3Rpb24gPT09IEVudW0uRGlyZWN0aW9uLlJpZ2h0ID8gU3RhY2ttb0ZyYW1lLlN0YW5kUmlnaHQgOiBTdGFja21vRnJhbWUuU3RhbmRMZWZ0O1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc01vdmluZykge1xyXG4gICAgICAgIHBsYXllci5zcHJpdGVBbmltYXRpb24uc3RhcnQoc3RhcnRGcmFtZSArIDEsIHN0YXJ0RnJhbWUgKyAyLCBhbmltYXRpb25TcGVlZCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBwbGF5ZXIuc3ByaXRlQW5pbWF0aW9uLnNldChzdGFydEZyYW1lKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZ2FtZS9hY3RvcnMvcGxheWVyLnRzIiwiaW1wb3J0IHsgQWN0b3IsIEJvdW5kYXJ5LCBTcHJpdGUgfSBmcm9tICcuLy4uLy4uL2VuZ2luZS92YXN0Z2FtZSc7XHJcbmltcG9ydCAqIGFzIENvbnN0YW50cyBmcm9tICcuLy4uL3V0aWwvY29uc3RhbnRzJztcclxuaW1wb3J0IHsgQWN0b3JJRCwgU3ByaXRlSUQgfSBmcm9tICcuLy4uL3V0aWwvZW51bSc7XHJcblxyXG5sZXQgU3RvbmUgPSBTcHJpdGUuZGVmaW5lKFNwcml0ZUlELldhbGwsIHtcclxuICAgIGltYWdlU291cmNlOiAnLi4vcmVzb3VyY2VzL3dhbGxfc2hlZXRfdGVhbC5wbmcnLFxyXG4gICAgaGVpZ2h0OiBDb25zdGFudHMuR3JpZENlbGxTaXplLFxyXG4gICAgd2lkdGg6IENvbnN0YW50cy5HcmlkQ2VsbFNpemUsXHJcbiAgICBmcmFtZUJvcmRlcjogMSxcclxufSk7XHJcblxyXG5sZXQgV2FsbCA9IEFjdG9yLmRlZmluZShBY3RvcklELldhbGwsIHtcclxuICAgIGJvdW5kYXJ5OiBCb3VuZGFyeS5mcm9tU3ByaXRlKFN0b25lLCB0cnVlKSxcclxuICAgIHNwcml0ZTogU3RvbmUsXHJcbn0pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZ2FtZS9hY3RvcnMvd2FsbC50cyIsImltcG9ydCB7IEFjdG9yLCBCb3VuZGFyeSwgUm9vbSwgU3ByaXRlLCBWYXN0Z2FtZSB9IGZyb20gJy4vLi4vLi4vZW5naW5lL3Zhc3RnYW1lJztcclxuaW1wb3J0ICogYXMgQ29uc3RhbnRzIGZyb20gJy4vLi4vdXRpbC9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBBY3RvcklELCBHYW1lQWN0aW9uLCBSb29tSUQsIFNwcml0ZUlEIH0gZnJvbSAnLi8uLi91dGlsL2VudW0nO1xyXG5cclxubGV0IERvb3JTcHJpdGUgPSBTcHJpdGUuZGVmaW5lKFNwcml0ZUlELkRvb3JTaGVldCwge1xyXG4gICAgaW1hZ2VTb3VyY2U6ICcuLi9yZXNvdXJjZXMvZG9vcl9zaGVldC5wbmcnLFxyXG4gICAgaGVpZ2h0OiBDb25zdGFudHMuR3JpZENlbGxTaXplLFxyXG4gICAgd2lkdGg6IDMyLFxyXG4gICAgZnJhbWVCb3JkZXI6IDEsXHJcbn0pO1xyXG5cclxubGV0IFdpbkFjdG9yID0gQWN0b3IuZGVmaW5lKEFjdG9ySUQuV2luLCB7XHJcbiAgICBib3VuZGFyeTogQm91bmRhcnkuZnJvbVNwcml0ZShEb29yU3ByaXRlLCB0cnVlKSxcclxuICAgIHNwcml0ZTogRG9vclNwcml0ZSxcclxufSk7XHJcblxyXG5sZXQgb3BlbmluZyA9IGZhbHNlO1xyXG5sZXQgY2xvc2luZyA9IGZhbHNlO1xyXG5sZXQgZG9vckFuaW1hdGlvbk9mZnNldFggPSAwO1xyXG5cclxuV2luQWN0b3Iub25DcmVhdGUod2luID0+IHtcclxuICAgIC8vIGhpZGUgYW5kIGRyYXcgc3ByaXRlIFwibWFudWFsbHlcIiBkdXJpbmcgb25EcmF3XHJcbiAgICB3aW4uYW5pbWF0aW9uLmRlcHRoID0gLTEwO1xyXG4gICAgd2luLnZpc2libGUgPSBmYWxzZTtcclxufSlcclxuXHJcbldpbkFjdG9yLm9uU3RlcCh3aW4gPT4ge1xyXG4gICAgaWYgKG9wZW5pbmcpIHtcclxuICAgICAgICBkb29yQW5pbWF0aW9uT2Zmc2V0WCsrO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoY2xvc2luZykge1xyXG4gICAgICAgIGRvb3JBbmltYXRpb25PZmZzZXRYLS07XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuLy8gYW5pbWF0ZSB0aGUgZG9vciBwYW5lbHMgd2hlbiB3aW5uaW5nXHJcbldpbkFjdG9yLm9uRHJhdyhzZWxmID0+IHtcclxuICAgIHNlbGYuZHJhd1Nwcml0ZShEb29yU3ByaXRlLCBzZWxmLnggLSBkb29yQW5pbWF0aW9uT2Zmc2V0WCwgc2VsZi55LCAwKTtcclxuICAgIHNlbGYuZHJhd1Nwcml0ZShEb29yU3ByaXRlLCBzZWxmLnggKyAzMiArIGRvb3JBbmltYXRpb25PZmZzZXRYLCBzZWxmLnksIDEpO1xyXG59KTtcclxuXHJcbldpbkFjdG9yLm9uRXZlbnQoR2FtZUFjdGlvbi5XaW4sICh3aW4sIGFyZ3MpID0+IHtcclxuICAgIHdpbi5yYWlzZUV2ZW50KCdvcGVuJyk7XHJcbn0pO1xyXG5cclxuV2luQWN0b3Iub25FdmVudCgnb3BlbicsICh3aW4sIGFyZ3MpID0+IHtcclxuICAgIG9wZW5pbmcgPSB0cnVlO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgd2luLnJhaXNlRXZlbnQoJ2Nsb3NlJyk7XHJcbiAgICB9LCA1MDApO1xyXG59KTtcclxuXHJcbldpbkFjdG9yLm9uRXZlbnQoJ2Nsb3NlJywgKHdpbiwgYXJncykgPT4ge1xyXG4gICAgb3BlbmluZyA9IGZhbHNlO1xyXG4gICAgd2luLmFuaW1hdGlvbi5kZXB0aCA9IC0xMDA7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBjbG9zaW5nID0gdHJ1ZTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgd2luLnJhaXNlRXZlbnQoJ2hvbWUnKTtcclxuICAgICAgICB9LCA1MDApO1xyXG4gICAgfSwgNTAwKTtcclxufSk7XHJcblxyXG5XaW5BY3Rvci5vbkV2ZW50KCdob21lJywgKHdpbiwgYXJncykgPT4ge1xyXG4gICAgZG9vckFuaW1hdGlvbk9mZnNldFggPSAwO1xyXG4gICAgY2xvc2luZyA9IGZhbHNlO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgVmFzdGdhbWUuc2V0Um9vbShSb29tSUQuTGV2ZWxTZWxlY3QsIHsgd2luOiB0cnVlIH0pO1xyXG4gICAgfSwgNTAwKTtcclxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2dhbWUvYWN0b3JzL3dpbi50cyIsImltcG9ydCB7IEFjdG9yLCBBY3Rvckluc3RhbmNlLCBFbnVtLCBHcmlkQ2VsbCwgSW5wdXQsIFJvb20sIFNwcml0ZSB9IGZyb20gJy4vLi4vLi4vZW5naW5lL3Zhc3RnYW1lJztcclxuaW1wb3J0ICogYXMgQ29uc3RhbnRzIGZyb20gJy4vLi4vdXRpbC9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBBY3RvcklELCBSb29tSUQsIFNwcml0ZUlELCBHYW1lQWN0aW9uLCBTZXR0aW5ncyB9IGZyb20gJy4vLi4vdXRpbC9lbnVtJztcclxuaW1wb3J0IHsgUmVnaXN0cnkgfSBmcm9tICcuLy4uL3V0aWwvcmVnaXN0cnknO1xyXG5pbXBvcnQgeyBTcHJpdGVGYWRlciB9IGZyb20gJy4vLi4vdXRpbC9zcHJpdGUtZmFkZXInO1xyXG5pbXBvcnQgeyBWYXN0Z2FtZSB9IGZyb20gJy4vLi4vLi4vZW5naW5lL3Zhc3RnYW1lJztcclxuXHJcbmxldCBMZXZlbFJvb20gPSBSb29tLmRlZmluZShSb29tSUQuTGV2ZWwpO1xyXG5cclxuTGV2ZWxSb29tLm9uU3RhcnQoKCkgPT4ge1xyXG4gICAgbGV0IEJsb2NrQWN0b3IgPSBBY3Rvci5nZXQoQWN0b3JJRC5CbG9jayk7XHJcbiAgICBsZXQgRXhpdEJ1dHRvbkFjdG9yID0gQWN0b3IuZ2V0KEFjdG9ySUQuRXhpdEJ1dHRvbik7XHJcbiAgICBsZXQgUGxheWVyQWN0b3IgPSBBY3Rvci5nZXQoQWN0b3JJRC5QbGF5ZXIpO1xyXG4gICAgbGV0IFdhbGxBY3RvciA9IEFjdG9yLmdldChBY3RvcklELldhbGwpO1xyXG4gICAgbGV0IFdpbkFjdG9yID0gQWN0b3IuZ2V0KEFjdG9ySUQuV2luKTtcclxuXHJcbiAgICBsZXQgRG9vclNwcml0ZSA9IFNwcml0ZS5nZXQoU3ByaXRlSUQuRG9vclNoZWV0KTtcclxuXHJcbiAgICBTcHJpdGVGYWRlci5mYWRlSW4oW0V4aXRCdXR0b25BY3Rvci5zcHJpdGUsIEJsb2NrQWN0b3Iuc3ByaXRlLCBQbGF5ZXJBY3Rvci5zcHJpdGUsIFdhbGxBY3Rvci5zcHJpdGUsIERvb3JTcHJpdGVdKTtcclxuXHJcbiAgICAvLyBhc3N1bWVzIHRoZSBsZXZlbCBoYXMgYWxyZWFkeSBiZWVuIHBvcHVsYXRlZCBiZWZvcmUgc3RhcnRpbmdcclxuICAgIGxldCBwbGF5ZXIgPSBMZXZlbFJvb20uZ2V0SW5zdGFuY2VzKCkuZmluZChhY3Rvckluc3RhbmNlID0+IGFjdG9ySW5zdGFuY2UucGFyZW50ID09PSBQbGF5ZXJBY3Rvcik7XHJcblxyXG4gICAgLy8gZGVmaW5lIGEgdmlldyB0aGF0IGZvbGxvd3MgdGhlIHBsYXllciBhbmQgaGFzIHRoZSBcIlhcIiBidXR0b24gYXR0YWNoZWRcclxuICAgIGNvbnN0IGNhbnZhc1dpZHRoID0gUmVnaXN0cnkuZ2V0KFNldHRpbmdzLkNhbnZhc1dpZHRoKTtcclxuICAgIGNvbnN0IGNhbnZhc0hlaWdodCA9IFJlZ2lzdHJ5LmdldChTZXR0aW5ncy5DYW52YXNIZWlnaHQpO1xyXG4gICAgY29uc3Qgdmlld0hVREJ1ZmZlciA9IENvbnN0YW50cy5HcmlkQ2VsbFNpemUgLyA0O1xyXG5cclxuICAgIGxldCBwbGF5ZXJWaWV3ID0gTGV2ZWxSb29tLmRlZmluZVZpZXcoMCwgMCwgY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCk7XHJcbiAgICBwbGF5ZXJWaWV3LmZvbGxvdyhwbGF5ZXIsIHRydWUpO1xyXG4gICAgcGxheWVyVmlldy5hdHRhY2goTGV2ZWxSb29tLmNyZWF0ZUFjdG9yKEFjdG9ySUQuRXhpdEJ1dHRvbiksIGNhbnZhc1dpZHRoIC0gQ29uc3RhbnRzLkdyaWRDZWxsU2l6ZSAtIHZpZXdIVURCdWZmZXIsIHZpZXdIVURCdWZmZXIpO1xyXG5cclxuICAgIC8vIGRlZmluZSB0aGUgbW92ZW1lbnQgZ3JpZCBhbmQgcGxheWVyIGJlaGF2aW9yXHJcbiAgICBsZXQgZ3JpZCA9IExldmVsUm9vbS5kZWZpbmVHcmlkKENvbnN0YW50cy5HcmlkQ2VsbFNpemUpO1xyXG4gICAgZ3JpZC5vbkNsaWNrKGdyaWRDbGlja0V2ZW50ID0+IHtcclxuICAgICAgICBsZXQgY2xpY2tlZENlbGwgPSBncmlkQ2xpY2tFdmVudC5nZXRDZWxsKCk7XHJcblxyXG4gICAgICAgIC8vIGRvIG5vdGhpbmcgaWYgdGhlIHBsYXllciBpcyBtb3Zpbmcgb3IgaWYgYSB3YWxsIHdhcyBjbGlja2VkIG9uXHJcbiAgICAgICAgaWYgKHBsYXllci5zcGVlZCB8fCBjbGlja2VkQ2VsbC5nZXRDb250ZW50cygpLnNvbWUoaW5zdGFuY2UgPT4gaW5zdGFuY2UucGFyZW50ID09PSBXYWxsQWN0b3IpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBsZWZ0Q2VsbCA9IGNsaWNrZWRDZWxsLmdldEFkamFjZW50Q2VsbChFbnVtLkRpcmVjdGlvbi5MZWZ0KTtcclxuICAgICAgICBsZXQgcmlnaHRDZWxsID0gY2xpY2tlZENlbGwuZ2V0QWRqYWNlbnRDZWxsKEVudW0uRGlyZWN0aW9uLlJpZ2h0KTtcclxuICAgICAgICBsZXQgZG93bkNlbGwgPSBjbGlja2VkQ2VsbC5nZXRBZGphY2VudENlbGwoRW51bS5EaXJlY3Rpb24uRG93bik7XHJcblxyXG4gICAgICAgIGxldCBkb3duTGVmdENlbGwgPSBsZWZ0Q2VsbC5nZXRBZGphY2VudENlbGwoRW51bS5EaXJlY3Rpb24uRG93bik7XHJcbiAgICAgICAgbGV0IGRvd25SaWdodENlbGwgPSByaWdodENlbGwuZ2V0QWRqYWNlbnRDZWxsKEVudW0uRGlyZWN0aW9uLkRvd24pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChjbGlja2VkQ2VsbC5jb250YWluc0luc3RhbmNlT2YoQmxvY2tBY3RvcikpIHtcclxuICAgICAgICAgICAgcGxheWVyLnJhaXNlRXZlbnQoR2FtZUFjdGlvbi5MaWZ0LCB7IGJsb2NrOiBjbGlja2VkQ2VsbC5nZXRDb250ZW50cygpWzBdLCB0YXJnZXRDZWxsOiBjbGlja2VkQ2VsbCB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAocmlnaHRDZWxsLmNvbnRhaW5zSW5zdGFuY2UocGxheWVyKSkge1xyXG4gICAgICAgICAgICBwbGF5ZXIucmFpc2VFdmVudChHYW1lQWN0aW9uLk1vdmUsIHsgZGlyZWN0aW9uOiBFbnVtLkRpcmVjdGlvbi5MZWZ0LCB0YXJnZXRDZWxsOiBjbGlja2VkQ2VsbCB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAobGVmdENlbGwuY29udGFpbnNJbnN0YW5jZShwbGF5ZXIpKSB7XHJcbiAgICAgICAgICAgIHBsYXllci5yYWlzZUV2ZW50KEdhbWVBY3Rpb24uTW92ZSwgeyBkaXJlY3Rpb246IEVudW0uRGlyZWN0aW9uLlJpZ2h0LCB0YXJnZXRDZWxsOiBjbGlja2VkQ2VsbCB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZG93bkxlZnRDZWxsLmNvbnRhaW5zSW5zdGFuY2UocGxheWVyKSAmJiAoZG93bkNlbGwuY29udGFpbnNJbnN0YW5jZU9mKEJsb2NrQWN0b3IpIHx8IGRvd25DZWxsLmNvbnRhaW5zSW5zdGFuY2VPZihXYWxsQWN0b3IpKSkge1xyXG4gICAgICAgICAgICBwbGF5ZXIucmFpc2VFdmVudChHYW1lQWN0aW9uLkp1bXAsIHsgZGlyZWN0aW9uOiBFbnVtLkRpcmVjdGlvbi5SaWdodCwgdGFyZ2V0Q2VsbDogY2xpY2tlZENlbGwgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGRvd25SaWdodENlbGwuY29udGFpbnNJbnN0YW5jZShwbGF5ZXIpICYmIChkb3duQ2VsbC5jb250YWluc0luc3RhbmNlT2YoQmxvY2tBY3RvcikgfHwgZG93bkNlbGwuY29udGFpbnNJbnN0YW5jZU9mKFdhbGxBY3RvcikpKSB7XHJcbiAgICAgICAgICAgIHBsYXllci5yYWlzZUV2ZW50KEdhbWVBY3Rpb24uSnVtcCwgeyBkaXJlY3Rpb246IEVudW0uRGlyZWN0aW9uLkxlZnQsIHRhcmdldENlbGw6IGNsaWNrZWRDZWxsIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEtleWJvYXJkIGlucHV0XHJcbiAgICBMZXZlbFJvb20ub25LZXkoRW51bS5LZXkuTGVmdCwgKCkgPT4ge1xyXG4gICAgICAgIGxldCBwbGF5ZXJDZWxsID0gZ3JpZC5nZXRDZWxsQXRQb3NpdGlvbihwbGF5ZXIueCwgcGxheWVyLnkpO1xyXG4gICAgICAgIGxldCBsZWZ0Q2VsbCA9IHBsYXllckNlbGwuZ2V0QWRqYWNlbnRDZWxsKEVudW0uRGlyZWN0aW9uLkxlZnQpO1xyXG4gICAgICAgIGxldCB0b3BMZWZ0Q2VsbCA9IGxlZnRDZWxsLmdldEFkamFjZW50Q2VsbChFbnVtLkRpcmVjdGlvbi5VcCk7XHJcblxyXG4gICAgICAgIGlmICh0b3BMZWZ0Q2VsbC5pc0ZyZWUoKSAmJiAobGVmdENlbGwuY29udGFpbnNJbnN0YW5jZU9mKFdhbGxBY3RvcikgfHwgbGVmdENlbGwuY29udGFpbnNJbnN0YW5jZU9mKEJsb2NrQWN0b3IpKSkge1xyXG4gICAgICAgICAgICBncmlkLnJhaXNlQ2xpY2tFdmVudChwbGF5ZXIueCAtIENvbnN0YW50cy5HcmlkQ2VsbFNpemUsIHBsYXllci55IC0gQ29uc3RhbnRzLkdyaWRDZWxsU2l6ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGxlZnRDZWxsLmlzRnJlZSgpKSB7XHJcbiAgICAgICAgICAgIGdyaWQucmFpc2VDbGlja0V2ZW50KHBsYXllci54IC0gQ29uc3RhbnRzLkdyaWRDZWxsU2l6ZSwgcGxheWVyLnkpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIExldmVsUm9vbS5vbktleShFbnVtLktleS5SaWdodCwgKCkgPT4ge1xyXG4gICAgICAgIGxldCBwbGF5ZXJDZWxsID0gZ3JpZC5nZXRDZWxsQXRQb3NpdGlvbihwbGF5ZXIueCwgcGxheWVyLnkpO1xyXG4gICAgICAgIGxldCByaWdodENlbGwgPSBwbGF5ZXJDZWxsLmdldEFkamFjZW50Q2VsbChFbnVtLkRpcmVjdGlvbi5SaWdodCk7XHJcbiAgICAgICAgbGV0IHRvcFJpZ2h0Q2VsbCA9IHJpZ2h0Q2VsbC5nZXRBZGphY2VudENlbGwoRW51bS5EaXJlY3Rpb24uVXApO1xyXG5cclxuICAgICAgICBpZiAodG9wUmlnaHRDZWxsLmlzRnJlZSgpICYmIChyaWdodENlbGwuY29udGFpbnNJbnN0YW5jZU9mKFdhbGxBY3RvcikgfHwgcmlnaHRDZWxsLmNvbnRhaW5zSW5zdGFuY2VPZihCbG9ja0FjdG9yKSkpIHtcclxuICAgICAgICAgICAgZ3JpZC5yYWlzZUNsaWNrRXZlbnQocGxheWVyLnggKyBDb25zdGFudHMuR3JpZENlbGxTaXplLCBwbGF5ZXIueSAtIENvbnN0YW50cy5HcmlkQ2VsbFNpemUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChyaWdodENlbGwuaXNGcmVlKCkpIHtcclxuICAgICAgICAgICAgZ3JpZC5yYWlzZUNsaWNrRXZlbnQocGxheWVyLnggKyBDb25zdGFudHMuR3JpZENlbGxTaXplLCBwbGF5ZXIueSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgTGV2ZWxSb29tLm9uS2V5KEVudW0uS2V5LkRvd24sICgpID0+IHtcclxuICAgICAgICBsZXQgcGxheWVyQ2VsbCA9IGdyaWQuZ2V0Q2VsbEF0UG9zaXRpb24ocGxheWVyLngsIHBsYXllci55KTtcclxuICAgICAgICBsZXQgbGVmdENlbGwgPSBwbGF5ZXJDZWxsLmdldEFkamFjZW50Q2VsbChFbnVtLkRpcmVjdGlvbi5MZWZ0KTtcclxuICAgICAgICBsZXQgcmlnaHRDZWxsID0gcGxheWVyQ2VsbC5nZXRBZGphY2VudENlbGwoRW51bS5EaXJlY3Rpb24uUmlnaHQpO1xyXG4gICAgICAgIGxldCB0b3BDZWxsID0gcGxheWVyQ2VsbC5nZXRBZGphY2VudENlbGwoRW51bS5EaXJlY3Rpb24uVXApO1xyXG4gICAgICAgIGxldCB0b3BMZWZ0Q2VsbCA9IHRvcENlbGwuZ2V0QWRqYWNlbnRDZWxsKEVudW0uRGlyZWN0aW9uLkxlZnQpO1xyXG4gICAgICAgIGxldCB0b3BSaWdodENlbGwgPSB0b3BDZWxsLmdldEFkamFjZW50Q2VsbChFbnVtLkRpcmVjdGlvbi5SaWdodCk7XHJcblxyXG4gICAgICAgIGlmICh0b3BDZWxsLmNvbnRhaW5zSW5zdGFuY2VPZihCbG9ja0FjdG9yKSkge1xyXG4gICAgICAgICAgICAvLyBkcm9wXHJcbiAgICAgICAgICAgIGdyaWQucmFpc2VDbGlja0V2ZW50KHBsYXllci54LCBwbGF5ZXIueSAtIENvbnN0YW50cy5HcmlkQ2VsbFNpemUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy8gbGlmdFxyXG4gICAgICAgICAgICBpZiAobGVmdENlbGwuY29udGFpbnNJbnN0YW5jZU9mKEJsb2NrQWN0b3IpICYmIHRvcExlZnRDZWxsLmlzRnJlZSgpKSB7XHJcbiAgICAgICAgICAgICAgICBncmlkLnJhaXNlQ2xpY2tFdmVudChwbGF5ZXIueCAtIENvbnN0YW50cy5HcmlkQ2VsbFNpemUsIHBsYXllci55KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHJpZ2h0Q2VsbC5jb250YWluc0luc3RhbmNlT2YoQmxvY2tBY3RvcikgJiYgdG9wUmlnaHRDZWxsLmlzRnJlZSgpKSB7XHJcbiAgICAgICAgICAgICAgICBncmlkLnJhaXNlQ2xpY2tFdmVudChwbGF5ZXIueCArIENvbnN0YW50cy5HcmlkQ2VsbFNpemUsIHBsYXllci55KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2dhbWUvcm9vbXMvbGV2ZWwudHMiLCJpbXBvcnQgeyBBY3RvciwgQm91bmRhcnksIEVudW0sIElucHV0LCBSb29tLCBTcHJpdGUsIFZhc3RnYW1lLCBWaWV3IH0gZnJvbSAnLi8uLi8uLi9lbmdpbmUvdmFzdGdhbWUnO1xyXG5pbXBvcnQgKiBhcyBDb25zdGFudHMgZnJvbSAnLi8uLi91dGlsL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IEFjdG9ySUQsIExldmVsQmdDb2xvciwgUm9vbUlELCBTZXR0aW5ncywgU3ByaXRlSUQgfSBmcm9tICcuLy4uL3V0aWwvZW51bSc7XHJcbmltcG9ydCB7IExldmVscywgTGV2ZWxCdWlsZGVyIH0gZnJvbSAnLi8uLi91dGlsL2xldmVsLWJ1aWxkZXInO1xyXG5pbXBvcnQgeyBTcHJpdGVGYWRlciB9IGZyb20gJy4vLi4vdXRpbC9zcHJpdGUtZmFkZXInO1xyXG5pbXBvcnQgeyBSZWdpc3RyeSB9IGZyb20gJy4vLi4vdXRpbC9yZWdpc3RyeSc7XHJcblxyXG5sZXQgc2Nyb2xsVmlldzogVmlldztcclxubGV0IGNhbnZhc0hlaWdodDogbnVtYmVyO1xyXG5sZXQgY2FudmFzV2lkdGg6IG51bWJlcjtcclxubGV0IHN0YXJ0WDogbnVtYmVyO1xyXG5sZXQgc3RhcnRZOiBudW1iZXI7XHJcbmxldCBvdmVyZmxvd2VkUm93czogbnVtYmVyO1xyXG5cclxuY29uc3QgaWNvblBhZGRpbmcgPSA4O1xyXG5jb25zdCBpY29uU2l6ZVdpdGhQYWRkaW5nID0gQ29uc3RhbnRzLkdyaWRDZWxsU2l6ZSArIChpY29uUGFkZGluZyAqIDIpO1xyXG5cclxuY29uc3QgTGV2ZWxTZWxlY3RSb29tID0gUm9vbS5kZWZpbmUoUm9vbUlELkxldmVsU2VsZWN0KTtcclxuXHJcbmxldCBfbGFzdExldmVsTnVtYmVyID0gMTtcclxubGV0IGxldmVsU2VsZWN0TG9jayA9IGZhbHNlO1xyXG5cclxuTGV2ZWxTZWxlY3RSb29tLm9uU3RhcnQoKGFyZ3MpID0+IHtcclxuICAgIGNhbnZhc1dpZHRoID0gUmVnaXN0cnkuZ2V0KFNldHRpbmdzLkNhbnZhc1dpZHRoKTtcclxuICAgIGNhbnZhc0hlaWdodCA9IFJlZ2lzdHJ5LmdldChTZXR0aW5ncy5DYW52YXNIZWlnaHQpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKF9sYXN0TGV2ZWxOdW1iZXIpO1xyXG4gICAgXHJcbiAgICBMZXZlbFNlbGVjdFJvb20uc2V0QmFja2dyb3VuZChDb25zdGFudHMuQmxhY2ssIGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQsIENvbnN0YW50cy5CbGFjayk7XHJcbiAgICBzY3JvbGxWaWV3ID0gTGV2ZWxTZWxlY3RSb29tLmRlZmluZVZpZXcoMCwgMCwgY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCk7XHJcblxyXG4gICAgbGV0IGljb25zUGVyUm93ID0gTWF0aC5mbG9vcihjYW52YXNXaWR0aCAvIGljb25TaXplV2l0aFBhZGRpbmcpO1xyXG5cclxuICAgIHN0YXJ0WCA9IE1hdGguZmxvb3IoKGNhbnZhc1dpZHRoIC0gKGljb25zUGVyUm93ICogaWNvblNpemVXaXRoUGFkZGluZykpIC8gMik7XHJcbiAgICBzdGFydFkgPSBNYXRoLmZsb29yKGNhbnZhc0hlaWdodCAvIDYpO1xyXG5cclxuICAgIC8vIGFkanVzdCBpY29ucyBwZXIgcm93IGZvciBzY3JvbGwgYmFyIGlmIHJvd3Mgb3ZlcmZsb3cgdGhlIGNhbnZhc1xyXG4gICAgbGV0IHNob3dTY3JvbGxiYXJzID0gZmFsc2U7XHJcbiAgICBsZXQgcm93Q291bnQgPSBNYXRoLmNlaWwoTGV2ZWxzLmNvdW50IC8gaWNvbnNQZXJSb3cpO1xyXG4gICAgaWYgKHN0YXJ0WSArIChyb3dDb3VudCAqIGljb25TaXplV2l0aFBhZGRpbmcpID4gY2FudmFzSGVpZ2h0KSB7XHJcbiAgICAgICAgaWNvbnNQZXJSb3ctLTtcclxuICAgICAgICByb3dDb3VudCA9IE1hdGguY2VpbChMZXZlbHMuY291bnQgLyBpY29uc1BlclJvdyk7XHJcbiAgICAgICAgb3ZlcmZsb3dlZFJvd3MgPSBNYXRoLmNlaWwoKChyb3dDb3VudCAqIGljb25TaXplV2l0aFBhZGRpbmcpIC0gY2FudmFzSGVpZ2h0KSAvIGljb25TaXplV2l0aFBhZGRpbmcpO1xyXG4gICAgICAgIHNob3dTY3JvbGxiYXJzID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgdW5sb2NrZWRMZXZlbENvdW50ID0gTnVtYmVyKFJlZ2lzdHJ5LmdldChTZXR0aW5ncy5TdGFja21vUHJvZ3Jlc3MpKTtcclxuICAgIGlmIChhcmdzICYmIGFyZ3Mud2luICYmIF9sYXN0TGV2ZWxOdW1iZXIgPT09IHVubG9ja2VkTGV2ZWxDb3VudCkge1xyXG4gICAgICAgIHVubG9ja2VkTGV2ZWxDb3VudCsrO1xyXG4gICAgICAgIFJlZ2lzdHJ5LnNldChTZXR0aW5ncy5TdGFja21vUHJvZ3Jlc3MsIHVubG9ja2VkTGV2ZWxDb3VudCwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY3JlYXRlIGxldmVsIGljb25zXHJcbiAgICBsZXQgY3VycmVudFJvdyA9IDA7XHJcbiAgICBsZXQgY3VycmVudFBvc2l0aW9uID0gMDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTGV2ZWxzLmNvdW50OyBpKyspIHtcclxuICAgICAgICBsZXQgaWNvbiA9IExldmVsU2VsZWN0Um9vbS5jcmVhdGVBY3RvcihBY3RvcklELkxldmVsSWNvbiwgc3RhcnRYICsgY3VycmVudFBvc2l0aW9uICogaWNvblNpemVXaXRoUGFkZGluZywgc3RhcnRZICsgY3VycmVudFJvdyAqIGljb25TaXplV2l0aFBhZGRpbmcpO1xyXG4gICAgICAgICg8YW55Pmljb24pLmxldmVsTnVtYmVyID0gaSArIDE7XHJcbiAgICAgICAgKDxhbnk+aWNvbikuZW5hYmxlZCA9IGkgPCB1bmxvY2tlZExldmVsQ291bnQ7XHJcblxyXG4gICAgICAgIGN1cnJlbnRQb3NpdGlvbisrO1xyXG5cclxuICAgICAgICBpZiAoY3VycmVudFBvc2l0aW9uID09PSBpY29uc1BlclJvdykge1xyXG4gICAgICAgICAgICBjdXJyZW50UG9zaXRpb24gPSAwO1xyXG4gICAgICAgICAgICBjdXJyZW50Um93Kys7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGNyZWF0ZSBzY3JvbGwgaWNvbnMgaWYgbmVlZGVkXHJcbiAgICBpZiAoc2hvd1Njcm9sbGJhcnMpIHtcclxuICAgICAgICBsZXQgdXBBcnJvdyA9IExldmVsU2VsZWN0Um9vbS5jcmVhdGVBY3RvcihBY3RvcklELlNjcm9sbEFycm93KTtcclxuICAgICAgICB1cEFycm93LnNwcml0ZUFuaW1hdGlvbi5zZXQoMSk7XHJcbiAgICAgICAgdXBBcnJvdy54ID0gY2FudmFzV2lkdGggLSBpY29uUGFkZGluZyAtIFNjcm9sbEFycm93LnNwcml0ZS53aWR0aDtcclxuICAgICAgICAoPGFueT51cEFycm93KS5kaXJlY3Rpb24gPSBFbnVtLkRpcmVjdGlvbi5VcDtcclxuXHJcbiAgICAgICAgbGV0IGRvd25BcnJvdyA9IExldmVsU2VsZWN0Um9vbS5jcmVhdGVBY3RvcihBY3RvcklELlNjcm9sbEFycm93KTtcclxuICAgICAgICBkb3duQXJyb3cueCA9IHVwQXJyb3cueDtcclxuICAgICAgICAoPGFueT5kb3duQXJyb3cpLmRpcmVjdGlvbiA9IEVudW0uRGlyZWN0aW9uLkRvd247XHJcbiAgICB9XHJcblxyXG4gICAgU3ByaXRlRmFkZXIuZmFkZUluKFtUZXh0U3ByaXRlLCBEaWdpdHNTcHJpdGUsIExldmVsSWNvblNwcml0ZSwgQXJyb3dTcHJpdGVdKTtcclxufSk7XHJcblxyXG4vLyBkcmF3IHRoZSBiYW5uZXIgdGV4dFxyXG5jb25zdCBUZXh0U3ByaXRlID0gU3ByaXRlLmRlZmluZShTcHJpdGVJRC5UZXh0U2hlZXQsIHtcclxuICAgIGltYWdlU291cmNlOicuLi9yZXNvdXJjZXMvdGV4dF9zaGVldC5wbmcnLFxyXG4gICAgaGVpZ2h0OiAzMixcclxuICAgIHdpZHRoOiAzMjAsXHJcbn0pO1xyXG5cclxuTGV2ZWxTZWxlY3RSb29tLm9uRHJhdyhzZWxmID0+IHtcclxuICAgIHNlbGYuZHJhd1Nwcml0ZShUZXh0U3ByaXRlLCBzdGFydFgsIE1hdGguZmxvb3Ioc3RhcnRZIC8gMiAtIFRleHRTcHJpdGUuaGVpZ2h0KSwgMCk7XHJcbn0pO1xyXG5cclxuLy8gTGV2ZWwgaWNvbnNcclxuY29uc3QgRGlnaXRzU3ByaXRlID0gU3ByaXRlLmRlZmluZShTcHJpdGVJRC5EaWdpdHMsIHtcclxuICAgIGltYWdlU291cmNlOiAnLi4vcmVzb3VyY2VzL2RpZ2l0c18zMnB4LnBuZycsXHJcbiAgICBoZWlnaHQ6IENvbnN0YW50cy5HcmlkQ2VsbFNpemUgLyAyLFxyXG4gICAgd2lkdGg6IENvbnN0YW50cy5HcmlkQ2VsbFNpemUgLyAyLFxyXG59KTtcclxuXHJcbmNvbnN0IExldmVsSWNvblNwcml0ZSA9IFNwcml0ZS5kZWZpbmUoU3ByaXRlSUQuTGV2ZWxJY29uLCB7XHJcbiAgICBpbWFnZVNvdXJjZTogJy4uL3Jlc291cmNlcy9sZXZlbF9pY29uLnBuZycsXHJcbiAgICB3aWR0aDogQ29uc3RhbnRzLkdyaWRDZWxsU2l6ZSxcclxuICAgIGhlaWdodDogQ29uc3RhbnRzLkdyaWRDZWxsU2l6ZSxcclxufSk7XHJcblxyXG5jb25zdCBMZXZlbEljb24gPSBBY3Rvci5kZWZpbmUoQWN0b3JJRC5MZXZlbEljb24sIHtcclxuICAgIGJvdW5kYXJ5OiBCb3VuZGFyeS5mcm9tU3ByaXRlKExldmVsSWNvblNwcml0ZSksXHJcbiAgICBzcHJpdGU6IExldmVsSWNvblNwcml0ZSxcclxufSk7XHJcblxyXG5MZXZlbEljb24ub25DbGljayhzZWxmID0+IHtcclxuICAgIGlmICgoPGFueT5zZWxmKS5lbmFibGVkICYmICFsZXZlbFNlbGVjdExvY2spIHtcclxuICAgICAgICBsZXZlbFNlbGVjdExvY2sgPSB0cnVlO1xyXG5cclxuICAgICAgICBTcHJpdGVGYWRlci5mYWRlT3V0KFtUZXh0U3ByaXRlLCBEaWdpdHNTcHJpdGUsIExldmVsSWNvblNwcml0ZSwgQXJyb3dTcHJpdGVdLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBsZXZlbE51bWJlcjogbnVtYmVyID0gKDxhbnk+c2VsZikubGV2ZWxOdW1iZXI7XHJcbiAgICAgICAgICAgIGxldCBsZXZlbCA9IFJvb20uZ2V0KFJvb21JRC5MZXZlbCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBMZXZlbEJ1aWxkZXIucG9wdWxhdGVSb29tKGxldmVsLCBsZXZlbE51bWJlcik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBfbGFzdExldmVsTnVtYmVyID0gbGV2ZWxOdW1iZXI7XHJcbiAgICAgICAgICAgIFZhc3RnYW1lLnNldFJvb20oUm9vbUlELkxldmVsKTtcclxuXHJcbiAgICAgICAgICAgIGxldmVsU2VsZWN0TG9jayA9IGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBcclxufSk7XHJcblxyXG5MZXZlbEljb24ub25EcmF3KHNlbGYgPT4ge1xyXG4gICAgaWYgKCg8YW55PnNlbGYpLmVuYWJsZWQpIHtcclxuICAgICAgICBsZXQgbGV2ZWxOdW1iZXI6IG51bWJlciA9ICg8YW55PnNlbGYpLmxldmVsTnVtYmVyO1xyXG4gICAgICAgIGxldCBzaW5nbGVEaWdpdE1hcmdpbiA9IE1hdGguZmxvb3IoKExldmVsSWNvblNwcml0ZS53aWR0aCAtIERpZ2l0c1Nwcml0ZS53aWR0aCkgLyAyKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAobGV2ZWxOdW1iZXIgPCAxMCkge1xyXG4gICAgICAgICAgICBsZXQgZnJhbWUgPSBsZXZlbE51bWJlcjtcclxuICAgICAgICAgICAgc2VsZi5kcmF3U3ByaXRlKERpZ2l0c1Nwcml0ZSwgc2VsZi54ICsgc2luZ2xlRGlnaXRNYXJnaW4sIHNlbGYueSArIHNpbmdsZURpZ2l0TWFyZ2luLCBmcmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgdGVuc0ZyYW1lID0gTWF0aC5mbG9vcihsZXZlbE51bWJlciAvIDEwKTtcclxuICAgICAgICAgICAgbGV0IHRlbnNNYXJnaW4gPSBNYXRoLmZsb29yKHNpbmdsZURpZ2l0TWFyZ2luIC8gMikgLSAzO1xyXG4gICAgICAgICAgICBzZWxmLmRyYXdTcHJpdGUoRGlnaXRzU3ByaXRlLCBzZWxmLnggKyB0ZW5zTWFyZ2luLCBzZWxmLnkgKyBzaW5nbGVEaWdpdE1hcmdpbiwgdGVuc0ZyYW1lKTtcclxuICAgIFxyXG4gICAgICAgICAgICBsZXQgb25lc0ZyYW1lID0gbGV2ZWxOdW1iZXIgJSAxMDtcclxuICAgICAgICAgICAgbGV0IG9uZXNNYXJnaW4gPSBNYXRoLmZsb29yKHNpbmdsZURpZ2l0TWFyZ2luICogMikgLSAzO1xyXG4gICAgICAgICAgICBzZWxmLmRyYXdTcHJpdGUoRGlnaXRzU3ByaXRlLCBzZWxmLnggKyBvbmVzTWFyZ2luLCBzZWxmLnkgKyBzaW5nbGVEaWdpdE1hcmdpbiwgb25lc0ZyYW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuLy8gU2Nyb2xsIGFycm93c1xyXG5jb25zdCBBcnJvd1Nwcml0ZSA9IFNwcml0ZS5kZWZpbmUoU3ByaXRlSUQuQXJyb3dzLCB7XHJcbiAgICBpbWFnZVNvdXJjZTogJy4uL3Jlc291cmNlcy9hcnJvd3MucG5nJyxcclxuICAgIGhlaWdodDogQ29uc3RhbnRzLkdyaWRDZWxsU2l6ZSxcclxuICAgIHdpZHRoOiBDb25zdGFudHMuR3JpZENlbGxTaXplLFxyXG59KTtcclxuXHJcbmNvbnN0IFNjcm9sbEFycm93ID0gQWN0b3IuZGVmaW5lKEFjdG9ySUQuU2Nyb2xsQXJyb3csIHtcclxuICAgIGJvdW5kYXJ5OiBCb3VuZGFyeS5mcm9tU3ByaXRlKEFycm93U3ByaXRlKSxcclxuICAgIHNwcml0ZTogQXJyb3dTcHJpdGUsXHJcbn0pO1xyXG5cclxuU2Nyb2xsQXJyb3cub25DbGljaygoc2VsZiwgZXZlbnQpID0+IHtcclxuICAgIGlmICgoPGFueT5zZWxmKS5lbmFibGVkKSB7XHJcbiAgICAgICAgbGV0IGRpcmVjdGlvbjogRW51bS5EaXJlY3Rpb24gPSAoPGFueT5zZWxmKS5kaXJlY3Rpb247XHJcbiAgICAgICAgc2Nyb2xsVmlldy55ICs9IGRpcmVjdGlvbiA9PT0gRW51bS5EaXJlY3Rpb24uRG93biA/IDY0IDogLTY0O1xyXG5cclxuICAgICAgICBpZiAoc2Nyb2xsVmlldy55IDwgMCkge1xyXG4gICAgICAgICAgICBzY3JvbGxWaWV3LnkgPSAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcblxyXG5TY3JvbGxBcnJvdy5vblN0ZXAoc2VsZiA9PiB7XHJcbiAgICAvLyB1cGRhdGUgdmVydGljYWwgcG9zaXRpb24gdG8gbWF0Y2ggc2Nyb2xsaW5nXHJcbiAgICBsZXQgaXNVcEFycm93ID0gKCg8YW55PnNlbGYpLmRpcmVjdGlvbiA9PT0gRW51bS5EaXJlY3Rpb24uVXApO1xyXG4gICAgc2VsZi55ID0gaXNVcEFycm93ID8gc3RhcnRZICsgc2Nyb2xsVmlldy55IDogY2FudmFzSGVpZ2h0IC0gODIgKyBzY3JvbGxWaWV3Lnk7IFxyXG5cclxuICAgIC8vIGVuYWJsZS9kaXNhYmxlIGlmIHRoZXJlJ3Mgbm8gbW9yZSBzY3JvbGxpbmcgdG8gZG9cclxuICAgICg8YW55PnNlbGYpLmVuYWJsZWQgPSBpc1VwQXJyb3cgPyBzY3JvbGxWaWV3LnkgPiAwIDogc2Nyb2xsVmlldy55IDwgKG92ZXJmbG93ZWRSb3dzICsgMikgKiBpY29uU2l6ZVdpdGhQYWRkaW5nO1xyXG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZ2FtZS9yb29tcy9sZXZlbC1zZWxlY3QudHMiLCJpbXBvcnQgeyBFbnVtLCBSb29tLCBTcHJpdGUsIFZhc3RnYW1lIH0gZnJvbSAnLi8uLi8uLi9lbmdpbmUvdmFzdGdhbWUnO1xyXG5pbXBvcnQgeyBSb29tSUQsIFNldHRpbmdzLCBTcHJpdGVJRCB9IGZyb20gJy4vLi4vdXRpbC9lbnVtJztcclxuaW1wb3J0IHsgU3ByaXRlRmFkZXIgfSBmcm9tICcuLy4uL3V0aWwvc3ByaXRlLWZhZGVyJztcclxuaW1wb3J0IHsgUmVnaXN0cnkgfSBmcm9tICcuLy4uL3V0aWwvcmVnaXN0cnknO1xyXG5cclxuY29uc3QgVGl0bGVXaWR0aCA9IDM2MDtcclxuY29uc3QgVGl0bGVIZWlnaHQgPSAxNTA7XHJcblxyXG5sZXQgdGl0bGVYOiBudW1iZXIgPSAwO1xyXG5sZXQgdGl0bGVZOiBudW1iZXIgPSAwO1xyXG5cclxubGV0IFRpdGxlU3ByaXRlID0gU3ByaXRlLmRlZmluZShTcHJpdGVJRC5UaXRsZSwge1xyXG4gICAgaW1hZ2VTb3VyY2U6ICcuLi9yZXNvdXJjZXMvdGl0bGUucG5nJyxcclxuICAgIHdpZHRoOiBUaXRsZVdpZHRoLFxyXG4gICAgaGVpZ2h0OiBUaXRsZUhlaWdodCxcclxufSk7XHJcblxyXG5sZXQgVGl0bGVSb29tID0gUm9vbS5kZWZpbmUoUm9vbUlELlRpdGxlKTtcclxubGV0IGNhblN0YXJ0ID0gdHJ1ZTtcclxuXHJcblRpdGxlUm9vbS5vblN0YXJ0KCgpID0+IHtcclxuICAgIGxldCBjYW52YXNXaWR0aCA9IFJlZ2lzdHJ5LmdldChTZXR0aW5ncy5DYW52YXNXaWR0aCk7XHJcbiAgICBsZXQgY2FudmFzSGVpZ2h0ID0gUmVnaXN0cnkuZ2V0KFNldHRpbmdzLkNhbnZhc0hlaWdodCk7XHJcblxyXG4gICAgdGl0bGVYID0gTWF0aC5mbG9vcigoY2FudmFzV2lkdGggLSBUaXRsZVdpZHRoKSAvIDIpO1xyXG4gICAgdGl0bGVZID0gTWF0aC5mbG9vcigoY2FudmFzSGVpZ2h0IC0gVGl0bGVIZWlnaHQpIC8gNCk7XHJcblxyXG4gICAgU3ByaXRlRmFkZXIuZmFkZUluKFtUaXRsZVNwcml0ZV0pO1xyXG59KTtcclxuXHJcblRpdGxlUm9vbS5vbkRyYXcoY29udGV4dCA9PiB7XHJcbiAgICBjb250ZXh0LmRyYXdTcHJpdGUoVGl0bGVTcHJpdGUsIHRpdGxlWCwgdGl0bGVZKTtcclxufSk7XHJcblxyXG5UaXRsZVJvb20ub25DbGljayhnb1RvTGV2ZWxTZWxlY3QpO1xyXG5UaXRsZVJvb20ub25LZXkoRW51bS5LZXkuQW55LCBnb1RvTGV2ZWxTZWxlY3QpO1xyXG5cclxuZnVuY3Rpb24gZ29Ub0xldmVsU2VsZWN0KCkge1xyXG4gICAgaWYgKGNhblN0YXJ0KSB7XHJcbiAgICAgICAgY2FuU3RhcnQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgU3ByaXRlRmFkZXIuZmFkZU91dChbVGl0bGVTcHJpdGVdLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIFZhc3RnYW1lLnNldFJvb20oUm9vbUlELkxldmVsU2VsZWN0KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9nYW1lL3Jvb21zL3RpdGxlLnRzIiwidmFyIG1hcCA9IHtcblx0XCIuL2FjdG9ycy9ibG9ja1wiOiAyMSxcblx0XCIuL2FjdG9ycy9ibG9jay50c1wiOiAyMSxcblx0XCIuL2FjdG9ycy9odWRcIjogMjIsXG5cdFwiLi9hY3RvcnMvaHVkLnRzXCI6IDIyLFxuXHRcIi4vYWN0b3JzL3BsYXllclwiOiAyMyxcblx0XCIuL2FjdG9ycy9wbGF5ZXIudHNcIjogMjMsXG5cdFwiLi9hY3RvcnMvd2FsbFwiOiAyNCxcblx0XCIuL2FjdG9ycy93YWxsLnRzXCI6IDI0LFxuXHRcIi4vYWN0b3JzL3dpblwiOiAyNSxcblx0XCIuL2FjdG9ycy93aW4udHNcIjogMjUsXG5cdFwiLi9nYW1lXCI6IDE4LFxuXHRcIi4vZ2FtZS50c1wiOiAxOCxcblx0XCIuL3Jvb21zL2xldmVsXCI6IDI2LFxuXHRcIi4vcm9vbXMvbGV2ZWwtc2VsZWN0XCI6IDI3LFxuXHRcIi4vcm9vbXMvbGV2ZWwtc2VsZWN0LnRzXCI6IDI3LFxuXHRcIi4vcm9vbXMvbGV2ZWwudHNcIjogMjYsXG5cdFwiLi9yb29tcy90aXRsZVwiOiAyOCxcblx0XCIuL3Jvb21zL3RpdGxlLnRzXCI6IDI4LFxuXHRcIi4vdXRpbC9jb25zdGFudHNcIjogMyxcblx0XCIuL3V0aWwvY29uc3RhbnRzLnRzXCI6IDMsXG5cdFwiLi91dGlsL2VudW1cIjogMSxcblx0XCIuL3V0aWwvZW51bS50c1wiOiAxLFxuXHRcIi4vdXRpbC9sZXZlbC1idWlsZGVyXCI6IDIwLFxuXHRcIi4vdXRpbC9sZXZlbC1idWlsZGVyLnRzXCI6IDIwLFxuXHRcIi4vdXRpbC9yZWdpc3RyeVwiOiA2LFxuXHRcIi4vdXRpbC9yZWdpc3RyeS50c1wiOiA2LFxuXHRcIi4vdXRpbC9zcHJpdGUtZmFkZXJcIjogMTEsXG5cdFwiLi91dGlsL3Nwcml0ZS1mYWRlci50c1wiOiAxMSxcblx0XCIuL3V0aWwvdXRpbFwiOiAxOSxcblx0XCIuL3V0aWwvdXRpbC50c1wiOiAxOVxufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyh3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSk7XG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHR2YXIgaWQgPSBtYXBbcmVxXTtcblx0aWYoIShpZCArIDEpKSAvLyBjaGVjayBmb3IgbnVtYmVyIG9yIHN0cmluZ1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIicuXCIpO1xuXHRyZXR1cm4gaWQ7XG59O1xud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IDI5O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2dhbWUgXlxcLlxcLy4qJFxuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==