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
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vastgame", function() { return Vastgame; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__canvas__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__enum__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__input__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__game_context__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__game_runner__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__room__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actor__ = __webpack_require__(8);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Actor", function() { return __WEBPACK_IMPORTED_MODULE_6__actor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actor_instance__ = __webpack_require__(10);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ActorInstance", function() { return __WEBPACK_IMPORTED_MODULE_7__actor_instance__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__boundary__ = __webpack_require__(9);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Boundary", function() { return __WEBPACK_IMPORTED_MODULE_8__boundary__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Direction", function() { return __WEBPACK_IMPORTED_MODULE_1__enum__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Key", function() { return __WEBPACK_IMPORTED_MODULE_1__enum__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return __WEBPACK_IMPORTED_MODULE_2__input__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__grid__ = __webpack_require__(11);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Grid", function() { return __WEBPACK_IMPORTED_MODULE_9__grid__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "GridCell", function() { return __WEBPACK_IMPORTED_MODULE_9__grid__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Room", function() { return __WEBPACK_IMPORTED_MODULE_5__room__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__room_ext__ = __webpack_require__(14);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "GridRoomBehavior", function() { return __WEBPACK_IMPORTED_MODULE_10__room_ext__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ViewedRoomBehavior", function() { return __WEBPACK_IMPORTED_MODULE_10__room_ext__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__sprite__ = __webpack_require__(21);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Sprite", function() { return __WEBPACK_IMPORTED_MODULE_11__sprite__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__sprite_animation__ = __webpack_require__(5);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SpriteAnimation", function() { return __WEBPACK_IMPORTED_MODULE_12__sprite_animation__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SpriteTransformation", function() { return __WEBPACK_IMPORTED_MODULE_12__sprite_animation__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__view__ = __webpack_require__(12);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "View", function() { return __WEBPACK_IMPORTED_MODULE_13__view__["a"]; });






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
        room._callStart(startArgs);
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
    Vastgame.setRoom = function (roomID, startArgs) {
        this.game.setRoom(roomID, startArgs);
    };
    Vastgame._getContext = function () {
        return this.game.getContext();
    };
    Vastgame.game = new VastgameHTML2D();
    return Vastgame;
}());



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActorState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Direction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GameState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Key; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StackmoFrame", function() { return StackmoFrame; });
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
    SpriteID["ArrowSheet"] = "Arrows";
    SpriteID["Digits"] = "Digits";
    SpriteID["DoorSheet"] = "DoorSheet";
    SpriteID["Box"] = "Box";
    SpriteID["HUD"] = "HUD";
    SpriteID["LevelIcon"] = "LevelIcon";
    SpriteID["StackmoSheet"] = "StackmoSheet";
    SpriteID["TextSheet"] = "TextSheet";
    SpriteID["Title"] = "Title";
    SpriteID["Wall"] = "Wall";
    SpriteID["ExitButton"] = "X";
})(SpriteID || (SpriteID = {}));
var GameAction;
(function (GameAction) {
    GameAction["Drop"] = "Drop";
    GameAction["Fall"] = "Fall";
    GameAction["StopFalling"] = "StopFalling";
    GameAction["Jump"] = "Jump";
    GameAction["Lift"] = "Lift";
    GameAction["Move"] = "Move";
    GameAction["CheckStopMoving"] = "CheckStopMoving";
    GameAction["Stop"] = "Stop";
    GameAction["Turn"] = "Turn";
    GameAction["Win"] = "Win";
})(GameAction || (GameAction = {}));
// from top row of NES color palette (TODO: rest of them)
var LevelBgColor;
(function (LevelBgColor) {
    LevelBgColor["DarkTeal"] = "#001820";
    LevelBgColor["Teal"] = "#006070";
    LevelBgColor["DarkGreen"] = "#001800";
    LevelBgColor["Green"] = "#085800";
    LevelBgColor["DarkRed"] = "#580000";
    LevelBgColor["Red"] = "#d01000";
    LevelBgColor["DarkPurple"] = "#380050";
    LevelBgColor["Purple"] = "#a008a8";
})(LevelBgColor || (LevelBgColor = {}));
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleWidth", function() { return TitleWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleHeight", function() { return TitleHeight; });
var Black = '#000';
var CanvasMaxWidth = 1024;
var CanvasMaxHeight = 768;
var GridCellSize = 64;
var BlockFallSpeed = 8;
var PlayerMoveSpeed = 4;
var PlayerJumpSpeed = 8;
var PlayerFallSpeed = 8;
var TitleWidth = 360;
var TitleHeight = 150;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Input; });
/* unused harmony export ConcreteEventHandler */
/* unused harmony export PointerInputEvent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__enum__ = __webpack_require__(1);

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
    Object.defineProperty(Input, "activePointerEvent", {
        get: function () {
            return Input._activePointerEvent;
        },
        enumerable: true,
        configurable: true
    });
    Input.init = function () {
        var _this = this;
        function trackActiveMousePosition(ev) {
            Input._activePointerEvent.currentX = getMouseEventX(ev);
            Input._activePointerEvent.currentY = getMouseEventY(ev);
        }
        ;
        function trackActiveTouchPosition(ev) {
            document.body.onmousemove = null;
            Input._activePointerEvent.currentX = getTouchEventX(ev);
            Input._activePointerEvent.currentY = getTouchEventY(ev);
        }
        ;
        var raisePointerEvent = function (ev) {
            if (Input._activePointerEvent) {
                return;
            }
            Input._activePointerEvent = ev;
            document.body.onmousemove = trackActiveMousePosition;
            document.body.ontouchmove = trackActiveTouchPosition;
            if (Input.clickHandlers.length) {
                Input.clickHandlers.forEach(function (handler) {
                    if (handler.isActive) {
                        handler.callback(ev);
                    }
                });
            }
        };
        var endPointerEvent = function () {
            Input._activePointerEvent = null;
            document.body.onmousemove = null;
            document.body.ontouchmove = null;
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
            if (handler && handler.isActive && !_this.keyboardActivity[keyCode]) {
                _this.keyboardActivity[keyCode] = true;
                handler.callback(ev);
            }
            var globalHandler = _this.keyboardHandlers[__WEBPACK_IMPORTED_MODULE_0__enum__["d" /* Key */].Any];
            if (globalHandler && globalHandler.isActive && !_this.keyboardActivity[__WEBPACK_IMPORTED_MODULE_0__enum__["d" /* Key */].Any]) {
                _this.keyboardActivity[__WEBPACK_IMPORTED_MODULE_0__enum__["d" /* Key */].Any] = true;
                globalHandler.callback(ev);
            }
        };
        document.body.onkeyup = function (ev) {
            var keyCode = ev.keyCode || ev.code;
            var handler = _this.keyboardHandlers[keyCode];
            _this.keyboardActivity[__WEBPACK_IMPORTED_MODULE_0__enum__["d" /* Key */].Any] = false;
            if (handler && handler.isActive) {
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
        this.isAwake = true;
    }
    Object.defineProperty(ConcreteEventHandler.prototype, "isActive", {
        get: function () {
            return this.isAlive && this.isAwake;
        },
        enumerable: true,
        configurable: true
    });
    ConcreteEventHandler.prototype.dispose = function () {
        this.isAlive = false;
    };
    ConcreteEventHandler.prototype.sleep = function () {
        this.isAwake = false;
    };
    ConcreteEventHandler.prototype.wake = function () {
        this.isAwake = true;
    };
    return ConcreteEventHandler;
}());

var PointerInputEvent = /** @class */ (function () {
    function PointerInputEvent() {
    }
    PointerInputEvent.fromMouseEvent = function (ev) {
        var x = getMouseEventX(ev);
        var y = getMouseEventY(ev);
        return { x: x, y: y, currentX: x, currentY: y };
    };
    PointerInputEvent.fromTouchEvent = function (ev) {
        var x = getTouchEventX(ev);
        var y = getTouchEventY(ev);
        return { x: x, y: y, currentX: x, currentY: y };
    };
    return PointerInputEvent;
}());

function getMouseEventX(ev) {
    return ev.offsetX;
}
function getMouseEventY(ev) {
    return ev.offsetY;
}
function getTouchEventX(ev) {
    var touch = ev.touches[0];
    return touch ? touch.clientX : 0;
}
function getTouchEventY(ev) {
    var touch = ev.touches[0];
    return touch ? touch.clientY : 0;
}


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SpriteTransformation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpriteAnimation; });
var SpriteTransformation;
(function (SpriteTransformation) {
    SpriteTransformation[SpriteTransformation["Opacity"] = 0] = "Opacity";
    SpriteTransformation[SpriteTransformation["Frame"] = 1] = "Frame";
    SpriteTransformation[SpriteTransformation["TileX"] = 2] = "TileX";
    SpriteTransformation[SpriteTransformation["TileY"] = 3] = "TileY";
})(SpriteTransformation || (SpriteTransformation = {}));
var SpriteAnimation = /** @class */ (function () {
    function SpriteAnimation(sprite) {
        this.sprite = sprite;
        this.transformations = {};
        this.depth = 0;
        this._paused = true;
        this.setTransform(SpriteTransformation.Frame, 0);
        this.setTransform(SpriteTransformation.Opacity, 1);
    }
    Object.defineProperty(SpriteAnimation.prototype, "paused", {
        get: function () {
            return this._paused;
        },
        enumerable: true,
        configurable: true
    });
    SpriteAnimation.prototype.start = function (start, end, delay) {
        var _this = this;
        this.stop();
        this.setTransform(SpriteTransformation.Frame, start);
        this._paused = false;
        this.timer = setInterval(function () {
            if (_this.getTransform(SpriteTransformation.Frame) === end) {
                _this.setTransform(SpriteTransformation.Frame, start);
            }
            else {
                _this.transform(SpriteTransformation.Frame, 1);
            }
        }, delay);
    };
    SpriteAnimation.prototype.stop = function () {
        this._paused = true;
        if (this.timer) {
            clearInterval(this.timer);
        }
    };
    SpriteAnimation.prototype.setFrame = function (frame) {
        this.stop();
        this.setTransform(SpriteTransformation.Frame, frame);
    };
    SpriteAnimation.prototype.draw = function (canvasContext, x, y, options) {
        if (options === void 0) { options = {}; }
        // frame
        var frame = this.getTransform(SpriteTransformation.Frame);
        if (options.frame !== null && options.frame !== undefined) {
            this.setTransform(SpriteTransformation.Frame, options.frame);
        }
        // opacity
        var opacity = this.getTransform(SpriteTransformation.Opacity);
        if (options.frame !== null && options.frame !== undefined) {
            this.setTransform(SpriteTransformation.Opacity, options.opacity);
        }
        var _a = this.sprite.getFrameImageSourceCoords(frame), srcX = _a[0], srcY = _a[1];
        canvasContext.drawImage(this.sprite.image, srcX, srcY, x, y, this.sprite.width, this.sprite.height, options);
    };
    // transformations
    SpriteAnimation.prototype.getTransform = function (transformation) {
        return this.transformations[transformation];
    };
    SpriteAnimation.prototype.transform = function (transformation, delta) {
        this.transformations[transformation] += delta;
    };
    SpriteAnimation.prototype.setTransform = function (transformation, value) {
        this.transformations[transformation] = value;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actor_instance__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__input__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__vastgame__ = __webpack_require__(0);




var Background = /** @class */ (function () {
    function Background(color, canvasColor, width, height) {
        if (canvasColor === void 0) { canvasColor = '#000'; }
        this.color = color;
        this.canvasColor = canvasColor;
        this.width = width;
        this.height = height;
    }
    return Background;
}());

var Room = /** @class */ (function () {
    function Room(name) {
        this.name = name;
        this.actorInstanceMap = {};
        this.propertyMap = {};
        this.behaviors = [];
        this.eventHandlers = [];
    }
    Room.define = function (name) {
        var room = new Room(name);
        __WEBPACK_IMPORTED_MODULE_3__vastgame__["Vastgame"]._getContext().defineRoom(name, room);
        return room;
    };
    Room.get = function (name) {
        return __WEBPACK_IMPORTED_MODULE_3__vastgame__["Vastgame"]._getContext().getRoom(name);
    };
    Room.prototype.set = function (propertyName, value) {
        this.propertyMap[propertyName] = value;
    };
    Room.prototype.get = function (propertyName) {
        return this.propertyMap[propertyName];
    };
    Room.prototype.setBackground = function (color, width, height, pageColor) {
        this.background = new Background(color, pageColor, width, height);
    };
    Room.prototype.end = function () {
        this.actorInstanceMap = {};
        this.behaviors = [];
        this.eventHandlers.forEach(function (eventHandler) { return eventHandler.sleep(); });
    };
    // mix-in behaviors
    Room.prototype.use = function (behavior) {
        this.behaviors.push(behavior);
        return behavior;
    };
    // lifecycle callbacks
    Room.prototype.onStart = function (callback) {
        this.onStartCallback = callback;
        return this;
    };
    Room.prototype._callStart = function (args) {
        this.eventHandlers.forEach(function (eventHandler) { return eventHandler.wake(); });
        if (this.onStartCallback) {
            try {
                this.onStartCallback(this, args);
            }
            catch (_a) {
                throw "Room: " + this.name + ".start";
            }
        }
    };
    Room.prototype.onDraw = function (callback) {
        this.onDrawCallback = callback;
        return this;
    };
    Room.prototype._callDraw = function (args) {
        if (this.onDrawCallback) {
            var canvasContext = __WEBPACK_IMPORTED_MODULE_3__vastgame__["Vastgame"]._getContext().getCanvasContext();
            try {
                this.onDrawCallback(this, canvasContext, args);
            }
            catch (_a) {
                throw "Room: " + this.name + ".draw";
            }
        }
    };
    // event callbacks
    Room.prototype.onClick = function (callback) {
        var room = this;
        var clickHandler = __WEBPACK_IMPORTED_MODULE_2__input__["a" /* Input */].registerClickHandler(function (event) {
            if (__WEBPACK_IMPORTED_MODULE_3__vastgame__["Vastgame"]._getContext().getCurrentRoom() === room) {
                callback(room, event);
            }
        });
        this.eventHandlers.push(clickHandler);
        return this;
    };
    Room.prototype.onKey = function (key, callback) {
        var room = this;
        var keyHandler = __WEBPACK_IMPORTED_MODULE_2__input__["a" /* Input */].registerKeyHandler(key, function (event) {
            if (__WEBPACK_IMPORTED_MODULE_3__vastgame__["Vastgame"]._getContext().getCurrentRoom() === room) {
                callback(room, event);
            }
        });
        this.eventHandlers.push(keyHandler);
        return this;
    };
    // step behavior
    Room.prototype.step = function () {
        var _this = this;
        this.getInstances().forEach(function (instance) {
            var parent = instance.parent;
            if (instance.isActive) {
                instance._applyMovement();
                _this.checkCollisions(instance);
                parent._callStep(instance);
            }
            else {
                instance.parent._callDestroy(instance);
                delete _this.actorInstanceMap[instance.id];
            }
        });
        this.behaviors.forEach(function (behavior) { return behavior.postStep(_this); });
    };
    Room.prototype.checkCollisions = function (selfInstance) {
        var parent = selfInstance.parent;
        for (var actorName in parent.collisionHandlers) {
            try {
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
            }
            catch (_a) {
                throw "Actor: " + this.name + "[" + selfInstance.id + "].collision(" + actorName + ")";
            }
        }
        ;
    };
    // draw behavior
    Room.prototype.draw = function (canvasContext) {
        var _this = this;
        // call pre-draw behaviors
        this.behaviors.forEach(function (behavior) { return behavior.preDraw(_this, canvasContext); });
        // draw room background
        if (this.background) {
            canvasContext.fillArea(-this.background.width, -this.background.height, this.background.width * 3, this.background.height * 3, this.background.canvasColor);
            canvasContext.fill(this.background.width, this.background.height, this.background.color);
        }
        var orderedInstances = this.getInstances().sort(function (a, b) {
            return (b.animation ? b.animation.depth : 0) - (a.animation ? a.animation.depth : 0);
        });
        orderedInstances.forEach(function (instance) {
            // draw sprites
            if (instance.animation && instance.visible) {
                instance.animation.draw(canvasContext, instance.x, instance.y);
            }
            // call actor draw event callbacks
            instance.parent._callDraw(instance);
        });
        // call room draw event callback
        this._callDraw();
    };
    Room.prototype.handleClick = function (event) {
        // call pre-click behaviors
        this.behaviors.forEach(function (behavior) { return behavior.preHandleClick(event); });
        // pass click event to actor instances
        var clickX = event.x;
        var clickY = event.y;
        this.getInstancesAtPosition(clickX, clickY).forEach(function (instance) {
            var parent = instance.parent;
            if (instance.occupiesPosition(clickX, clickY)) {
                parent._callClick(instance, event);
            }
        });
        // call post-click behaviors
        this.behaviors.forEach(function (behavior) { return behavior.postHandleClick(event); });
    };
    Room.prototype.createActor = function (actorID, x, y) {
        var parentActor = __WEBPACK_IMPORTED_MODULE_0__actor__["a" /* Actor */].get(actorID);
        var newActorInstanceID = Room.nextActorInstanceID();
        var newInstance = new __WEBPACK_IMPORTED_MODULE_1__actor_instance__["a" /* ActorInstance */](this, parentActor, newActorInstanceID, x, y);
        this.actorInstanceMap[newActorInstanceID] = newInstance;
        parentActor._callCreate(newInstance);
        return newInstance;
    };
    Room.prototype.getInstance = function (actorType) {
        return this.getInstances([actorType])[0];
    };
    Room.prototype.getInstances = function (actorTypes) {
        if (actorTypes === void 0) { actorTypes = []; }
        var instances = [];
        for (var instanceID in this.actorInstanceMap) {
            var instance = this.actorInstanceMap[instanceID];
            if (!actorTypes.length || (actorTypes && actorTypes.indexOf(instance.parent) > -1)) {
                instances.push(this.actorInstanceMap[instanceID]);
            }
        }
        return instances;
    };
    Room.prototype.getInstancesAtPosition = function (x, y) {
        return this.getInstances().filter(function (instance) { return instance.occupiesPosition(x, y); });
    };
    Room.prototype.isPositionFree = function (x, y, actorTypes) {
        if (!actorTypes || !actorTypes.length) {
            return !this.getInstancesAtPosition(x, y).length;
        }
        return !this.getInstancesAtPosition(x, y)
            .filter(function (actorInstance) { return actorTypes.indexOf(actorInstance.parent) !== -1; })
            .length;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__boundary__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vastgame__ = __webpack_require__(0);


var Actor = /** @class */ (function () {
    function Actor(name, options) {
        if (options === void 0) { options = {}; }
        // game event handlers
        this.collisionHandlers = {};
        this.actorEventHandlers = {};
        this.name = name;
        this.sprite = options.sprite;
        if (options.boundary) {
            this.boundary = options.boundary;
        }
        else if (options.sprite) {
            this.boundary = __WEBPACK_IMPORTED_MODULE_0__boundary__["a" /* Boundary */].fromSprite(options.sprite);
        }
    }
    Actor.define = function (name, options) {
        var actor = new Actor(name, options);
        __WEBPACK_IMPORTED_MODULE_1__vastgame__["Vastgame"]._getContext().defineActor(name, actor);
        return actor;
    };
    Actor.get = function (name) {
        return __WEBPACK_IMPORTED_MODULE_1__vastgame__["Vastgame"]._getContext().getActor(name);
    };
    Actor.prototype.setGameContextEventArgs = function (eventArgs) {
        eventArgs.game = {
            currentRoom: __WEBPACK_IMPORTED_MODULE_1__vastgame__["Vastgame"]._getContext().getCurrentRoom(),
        };
    };
    // create
    Actor.prototype.onCreate = function (callback) {
        this.onCreateCallback = callback;
        return this;
    };
    Actor.prototype._callCreate = function (selfInstance) {
        if (this.onCreateCallback) {
            try {
                this.onCreateCallback(selfInstance);
            }
            catch (_a) {
                throw "Actor: " + selfInstance.parent.name + "[" + selfInstance.id + "].create";
            }
        }
    };
    // step
    Actor.prototype.onStep = function (callback) {
        this.onStepCallback = callback;
        return this;
    };
    Actor.prototype._callStep = function (selfInstance) {
        if (this.onStepCallback) {
            try {
                this.onStepCallback(selfInstance);
            }
            catch (_a) {
                throw "Actor: " + selfInstance.parent.name + "[" + selfInstance.id + "].step";
            }
        }
        selfInstance.previousX = selfInstance.x;
        selfInstance.previousY = selfInstance.y;
    };
    // draw
    Actor.prototype.onDraw = function (callback) {
        this.onDrawCallback = callback;
        return this;
    };
    Actor.prototype._callDraw = function (selfInstance) {
        if (this.onDrawCallback) {
            var canvasContext = __WEBPACK_IMPORTED_MODULE_1__vastgame__["Vastgame"]._getContext().getCanvasContext();
            try {
                this.onDrawCallback(selfInstance, canvasContext);
            }
            catch (_a) {
                throw "Actor: " + selfInstance.parent.name + "[" + selfInstance.id + "].draw";
            }
        }
    };
    // click/tap
    Actor.prototype.onClick = function (callback) {
        this.onClickCallback = callback;
        return this;
    };
    Actor.prototype._callClick = function (selfInstance, event) {
        if (this.onClickCallback) {
            try {
                this.onClickCallback(selfInstance, event);
            }
            catch (_a) {
                throw "Actor: " + selfInstance.parent.name + "[" + selfInstance.id + "].click";
            }
        }
    };
    // destroy
    Actor.prototype.onDestroy = function (callback) {
        this.onDestroyCallback = callback;
        return this;
    };
    Actor.prototype._callDestroy = function (selfInstance) {
        if (this.onDestroyCallback) {
            try {
                this.onDestroyCallback(selfInstance);
            }
            catch (_a) {
                throw "Actor: " + selfInstance.parent.name + "[" + selfInstance.id + "].destroy";
            }
        }
    };
    // collisions and other events
    Actor.prototype.onCollide = function (actorName, callback) {
        this.collisionHandlers[actorName] = callback;
        return this;
    };
    Actor.prototype.onEvent = function (eventName, callback) {
        this.actorEventHandlers[eventName] = callback;
        return this;
    };
    return Actor;
}());



/***/ }),
/* 9 */
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
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActorInstance; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__enum__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__events__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sprite_animation__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util__ = __webpack_require__(20);




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
        this.direction = 0;
        this.visible = true;
        this.state = __WEBPACK_IMPORTED_MODULE_0__enum__["a" /* ActorState */].Active;
        if (this.parent.sprite) {
            this.spriteAnimation = new __WEBPACK_IMPORTED_MODULE_2__sprite_animation__["a" /* SpriteAnimation */](this.parent.sprite);
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
            return (this.state === __WEBPACK_IMPORTED_MODULE_0__enum__["a" /* ActorState */].Active);
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
    ActorInstance.prototype.raiseEventIn = function (eventName, delay, eventArgs) {
        var _this = this;
        setTimeout(function () {
            _this.raiseEvent(eventName, eventArgs);
        }, delay);
    };
    ActorInstance.prototype.raiseEventWhen = function (eventName, conditionCallback, eventArgs) {
        if (eventArgs === void 0) { eventArgs = {}; }
        this.parent.setGameContextEventArgs(eventArgs);
        var callback = this.parent.actorEventHandlers[eventName];
        if (!callback) {
            throw new Error("Attempting to raise undefined Event: " + eventName);
        }
        __WEBPACK_IMPORTED_MODULE_1__events__["a" /* DeferredEvent */].register(new __WEBPACK_IMPORTED_MODULE_1__events__["a" /* DeferredEvent */](conditionCallback, callback.bind(null, this, eventArgs)));
    };
    ActorInstance.prototype.collidesWith = function (other) {
        if (this.hasMoved && this.boundary && other.boundary) {
            return this.boundary.atPosition(this.x, this.y).collidesWith(other.boundary.atPosition(other.x, other.y));
        }
        return false;
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
    ActorInstance.prototype._applyMovement = function () {
        if (this.speed !== 0) {
            var offsetX = Math.round(__WEBPACK_IMPORTED_MODULE_3__util__["a" /* MathUtil */].getLengthDirectionX(this.speed * 100, this.direction) / 100);
            var offsetY = Math.round(__WEBPACK_IMPORTED_MODULE_3__util__["a" /* MathUtil */].getLengthDirectionY(this.speed * 100, this.direction) / 100);
            if (offsetX !== 0 || offsetY !== 0) {
                this.setPositionRelative(offsetX, offsetY);
            }
        }
    };
    ActorInstance.prototype.occupiesPosition = function (x, y) {
        return this.boundary ? this.boundary.atPosition(this.x, this.y).containsPosition(x, y) : false;
    };
    ActorInstance.prototype.destroy = function () {
        this.state = __WEBPACK_IMPORTED_MODULE_0__enum__["a" /* ActorState */].Destroyed;
    };
    return ActorInstance;
}());



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export GridClickEvent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GridCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Grid; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__enum__ = __webpack_require__(1);

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
    Object.defineProperty(GridCell.prototype, "size", {
        get: function () {
            return this.grid.tileSize;
        },
        enumerable: true,
        configurable: true
    });
    GridCell.prototype.getAdjacentCell = function (direction) {
        var offsetX = 0;
        var offsetY = 0;
        switch (direction) {
            case __WEBPACK_IMPORTED_MODULE_0__enum__["b" /* Direction */].Down:
                offsetY = this.grid.tileSize;
                break;
            case __WEBPACK_IMPORTED_MODULE_0__enum__["b" /* Direction */].Left:
                offsetX = -this.grid.tileSize;
                break;
            case __WEBPACK_IMPORTED_MODULE_0__enum__["b" /* Direction */].Right:
                offsetX = this.grid.tileSize;
                break;
            case __WEBPACK_IMPORTED_MODULE_0__enum__["b" /* Direction */].Up:
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
        if (actor.length) {
            return this.getContents().some(function (contents) { return actor.indexOf(contents.parent) > -1; });
        }
        return this.getContents().some(function (contents) { return contents.parent === actor; });
    };
    GridCell.prototype.isFree = function (actorTypes) {
        if (!actorTypes || !actorTypes.length) {
            return !this.getContents().length;
        }
        return !this.getContents()
            .filter(function (actorInstance) { return actorTypes.indexOf(actorInstance.parent) !== -1; })
            .length;
    };
    return GridCell;
}());

var Grid = /** @class */ (function () {
    function Grid(tileSize, room) {
        this.tileSize = tileSize;
        this.room = room;
    }
    Grid.prototype.getCellAtPosition = function (x, y) {
        return new GridCell(this, x, y);
    };
    Grid.prototype.find = function (actorType) {
        var actorInstances = this.room.getInstances();
        if (actorInstances && actorInstances.length) {
            // assumes the match is aligned to the grid.
            var match = actorInstances.find(function (a) { return a.parent === actorType; });
            return new GridCell(this, match.x, match.y);
        }
        return null;
    };
    // click event handling
    Grid.prototype.onClick = function (callback) {
        this._onClick = callback;
    };
    Grid.prototype.raiseClickEvent = function (x, y) {
        var event = new GridClickEvent(this, x, y);
        this._onClick(event);
    };
    return Grid;
}());



/***/ }),
/* 12 */
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
        this.offsetX = 0;
        this.offsetY = 0;
    }
    View.prototype.follow = function (actorInstance, center, offsetX, offsetY) {
        if (center === void 0) { center = false; }
        if (offsetX === void 0) { offsetX = 0; }
        if (offsetY === void 0) { offsetY = 0; }
        this.viewMode = center ? ViewMode.Center : ViewMode.SamePosition;
        this.followInstance = actorInstance;
        this.offsetX = offsetX;
        this.offsetY = offsetY;
    };
    View.prototype.attach = function (actorInstance, offsetX, offsetY) {
        if (offsetX === void 0) { offsetX = 0; }
        if (offsetY === void 0) { offsetY = 0; }
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
            this.x = this.offsetX + this.followInstance.x || 0;
            this.y = this.offsetY + this.followInstance.y || 0;
        }
        this.attachments.forEach(function (att) { return att.update(); });
    };
    View.prototype.centerAroundBoundary = function (boundary) {
        if (!boundary) {
            throw new Error("boundary is " + boundary);
        }
        this.x = this.offsetX + (this.followInstance.x + (boundary.width / 2) - (this.width / 2));
        this.y = this.offsetY + (this.followInstance.y + (boundary.height / 2) - (this.height / 2));
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
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["requireModules"] = requireModules;
/* harmony export (immutable) */ __webpack_exports__["buildCanvasDimensions"] = buildCanvasDimensions;
/* harmony export (immutable) */ __webpack_exports__["getDigitDrawInstances"] = getDigitDrawInstances;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__registry__ = __webpack_require__(6);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Registry", function() { return __WEBPACK_IMPORTED_MODULE_1__registry__["Registry"]; });



function requireModules(rootDir, fileNames) {
    fileNames.forEach(function (name) { return __webpack_require__(31)("./" + rootDir + '/' + name); });
}
function buildCanvasDimensions() {
    var fillScreen = window.innerWidth < __WEBPACK_IMPORTED_MODULE_0__constants__["CanvasMaxWidth"];
    var canvasWidth = fillScreen ? window.innerWidth : __WEBPACK_IMPORTED_MODULE_0__constants__["CanvasMaxWidth"];
    canvasWidth += (canvasWidth % 2 === 0) ? 0 : 1;
    var canvasHeight = fillScreen ? window.innerHeight : __WEBPACK_IMPORTED_MODULE_0__constants__["CanvasMaxHeight"];
    canvasHeight += (canvasHeight % 2 === 0) ? 0 : 1;
    return [canvasWidth, canvasHeight];
}
function getDigitDrawInstances(number, useAltColor) {
    if (useAltColor === void 0) { useAltColor = false; }
    var singleDigitMargin = Math.floor(__WEBPACK_IMPORTED_MODULE_0__constants__["GridCellSize"] / 4);
    var tensMargin = Math.floor(singleDigitMargin / 2) - 3;
    var onesMargin = Math.floor(singleDigitMargin * 2) - 3;
    var frameOffset = useAltColor ? 10 : 0;
    var frames = [];
    if (number < 10) {
        frames.push({ x: singleDigitMargin, y: singleDigitMargin, frame: frameOffset + number });
    }
    else {
        frames.push({ x: tensMargin, y: singleDigitMargin, frame: frameOffset + Math.floor(number / 10) });
        frames.push({ x: onesMargin, y: singleDigitMargin, frame: frameOffset + (number % 10) });
    }
    return frames;
}


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ViewedRoomBehavior; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridRoomBehavior; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__grid__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__view__ = __webpack_require__(12);


var ViewedRoomBehavior = /** @class */ (function () {
    function ViewedRoomBehavior(x, y, width, height) {
        this.view = new __WEBPACK_IMPORTED_MODULE_1__view__["a" /* View */](x, y, width, height);
    }
    ViewedRoomBehavior.prototype.getView = function () {
        return this.view;
    };
    // RoomBehavior implementation
    ViewedRoomBehavior.prototype.preHandleClick = function (event) {
        var _a = this.getOffset(), offsetX = _a[0], offsetY = _a[1];
        event.x += offsetX;
        event.y += offsetY;
    };
    ViewedRoomBehavior.prototype.postStep = function (self) {
        this.view.update();
    };
    ViewedRoomBehavior.prototype.preDraw = function (self, canvasContext) {
        var _a = this.getOffset(), offsetX = _a[0], offsetY = _a[1];
        canvasContext.origin = [-offsetX, -offsetY];
    };
    ViewedRoomBehavior.prototype.postHandleClick = function (event) {
    };
    ViewedRoomBehavior.prototype.getOffset = function () {
        var offsetX = this.view ? this.view.x : 0;
        var offsetY = this.view ? this.view.y : 0;
        return [offsetX, offsetY];
    };
    return ViewedRoomBehavior;
}());

var GridRoomBehavior = /** @class */ (function () {
    function GridRoomBehavior(tileSize, parentRoom) {
        this.grid = new __WEBPACK_IMPORTED_MODULE_0__grid__["a" /* Grid */](tileSize, parentRoom);
    }
    GridRoomBehavior.prototype.getGrid = function () {
        return this.grid;
    };
    // RoomBehavior implementation
    GridRoomBehavior.prototype.postHandleClick = function (event) {
        this.grid.raiseClickEvent(event.x, event.y);
    };
    GridRoomBehavior.prototype.preHandleClick = function (event) {
    };
    GridRoomBehavior.prototype.postStep = function (self) {
    };
    GridRoomBehavior.prototype.preDraw = function (self, canvasContext) {
    };
    return GridRoomBehavior;
}());



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Levels", function() { return Levels; });
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
            '################',
            '#              #',
            '#              #',
            '#              #',
            '#X        #    #',
            '### P  #  #  W #',
            '################',
        ],
        2: [
            '#################',
            '#               #',
            '#               #',
            '#          #    #',
            '#XX        #    #',
            '#### P   # #  W #',
            '#################',
        ],
        3: [
            '################',
            '#              #',
            '#              #',
            '#         #    #',
            '#XX       #    #',
            '###X  P   #  W #',
            '################',
        ],
        4: [
            '################',
            '#              #',
            '#              #',
            '#X        #  W #',
            '#XX       #  ###',
            '###X  P   #  ###',
            '################',
        ],
        5: [
            '################',
            '#       #      #',
            '#       #    W #',
            '#            ###',
            '#X      #      #',
            '#XX P   #X   XX#',
            '################',
        ],
        6: [
            '##################',
            '#                #',
            '#              W #',
            '#              ###',
            '#        X     ###',
            '#X       #    X###',
            '#XX P #      XX###',
            '##################',
        ],
        7: [
            '##################',
            '#               W#',
            '#               ##',
            '#       ######  ##',
            '#XX          #####',
            '#######          #',
            '#          #    X#',
            '#XX P      #   XX#',
            '##################',
        ],
        8: [
            '##############',
            '#W           #',
            '##           #',
            '##P          #',
            '### X      XX#',
            '#####    #####',
            '#####        #',
            '#####      XX#',
            '##############',
        ],
        9: [
            '###################',
            '#                 #',
            '#     X         W #',
            '#    # #    X #####',
            '# P ## ##  #  #####',
            '###### ############',
            '###################',
        ],
        10: [
            '#####################',
            '###############    ##',
            '##############   # ##',
            '###              # ##',
            '##      X   P   ## ##',
            '#     ############ ##',
            '#        ######### ##',
            '#X    XXX######### ##',
            '################## ##',
            '##############     ##',
            '#########    # ######',
            '######### #      ####',
            '######### #         #',
            '######### ######    #',
            '######### ##       ##',
            '######### ##XXX  ####',
            '######### ###########',
            '#########         W##',
            '#####################',
        ],
    };
    return Levels;
}());



/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameCanvasHTML2D; });
/* unused harmony export GameCanvasContext2D */
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
        this.origin = [0, 0];
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
    GameCanvasContext2D.prototype.fill = function (width, height, color) {
        var _a = this.origin, x = _a[0], y = _a[1];
        this.fillArea(x, y, width, height, color);
    };
    GameCanvasContext2D.prototype.fillArea = function (x, y, width, height, color) {
        this.canvasContext2D.beginPath();
        this.canvasContext2D.rect(x, y, width, height);
        this.canvasContext2D.fillStyle = color;
        this.canvasContext2D.fill();
    };
    GameCanvasContext2D.prototype.drawImage = function (image, srcX, srcY, destX, destY, width, height, options) {
        if (options === void 0) { options = {}; }
        // set opacity
        var defaultOpacity = 1;
        var previousOpacity = null;
        if (options.opacity !== defaultOpacity && options.opacity !== null && options.opacity !== undefined) {
            previousOpacity = this.canvasContext2D.globalAlpha;
            this.canvasContext2D.globalAlpha = options.opacity;
        }
        // draw the image relative to the origin
        var _a = this.origin, originX = _a[0], originY = _a[1];
        if (options.tileX || options.tileY) {
            var repetition = options.tileX && options.tileY ? 'repeat' : options.tileX ? 'repeat-x' : 'repeat-y';
            var pattern = this.canvasContext2D.createPattern(image, repetition);
            this.canvasContext2D.fillStyle = pattern;
            this.canvasContext2D.fillRect(originX + destX, originY + destY, this.canvasContext2D.canvas.width, this.canvasContext2D.canvas.height);
        }
        else {
            this.canvasContext2D.drawImage(image, srcX, srcY, width, height, Math.floor(originX + destX), Math.floor(originY + destY), width, height);
        }
        // reset opacity
        if (previousOpacity !== null) {
            this.canvasContext2D.globalAlpha = previousOpacity;
        }
    };
    return GameCanvasContext2D;
}());



/***/ }),
/* 17 */
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
    GameContext.prototype.getCanvasContext = function () {
        return this.canvas.getContext();
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
        // dipose previous room's click handler
        if (this.currentRoomClickHandler) {
            this.currentRoomClickHandler.dispose();
        }
        this.currentRoomClickHandler = __WEBPACK_IMPORTED_MODULE_0__input__["a" /* Input */].registerClickHandler(function (ev) { return room.handleClick(ev); });
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
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameRunner; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__enum__ = __webpack_require__(1);

var DefaultFPS = 60;
var GameRunner = /** @class */ (function () {
    function GameRunner(options) {
        this.options = options;
        this.state = __WEBPACK_IMPORTED_MODULE_0__enum__["c" /* GameState */].Paused;
        this.targetFPS = options.targetFPS || DefaultFPS;
    }
    Object.defineProperty(GameRunner.prototype, "isRunning", {
        get: function () {
            return this.state === __WEBPACK_IMPORTED_MODULE_0__enum__["c" /* GameState */].Running;
        },
        enumerable: true,
        configurable: true
    });
    GameRunner.prototype.pause = function () {
        this.state = __WEBPACK_IMPORTED_MODULE_0__enum__["c" /* GameState */].Paused;
    };
    GameRunner.prototype.start = function (gameContext) {
        var _this = this;
        var stepSize = 1 / this.targetFPS;
        var offset = 0;
        var previous = window.performance.now();
        var canvasDrawingContext = gameContext.getCanvasContext();
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
        this.state = __WEBPACK_IMPORTED_MODULE_0__enum__["c" /* GameState */].Running;
        requestAnimationFrame(gameLoop);
    };
    return GameRunner;
}());



/***/ }),
/* 19 */
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
        __WEBPACK_IMPORTED_MODULE_0__vastgame__["Vastgame"]._getContext().registerEvent(event);
    };
    return DeferredEvent;
}());



/***/ }),
/* 20 */
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
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sprite; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sprite_animation__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vastgame__ = __webpack_require__(0);


var Sprite = /** @class */ (function () {
    function Sprite(options) {
        this.image = new Image();
        this.image.src = options.imageSource;
        this.height = options.height;
        this.width = options.width;
        this.frameBorder = options.frameBorder;
        this.defaultAnimation = new __WEBPACK_IMPORTED_MODULE_0__sprite_animation__["a" /* SpriteAnimation */](this);
    }
    Sprite.define = function (name, options) {
        var sprite = new Sprite(options);
        __WEBPACK_IMPORTED_MODULE_1__vastgame__["Vastgame"]._getContext().defineSprite(name, sprite);
        return sprite;
    };
    Sprite.get = function (name) {
        return __WEBPACK_IMPORTED_MODULE_1__vastgame__["Vastgame"]._getContext().getSprite(name);
    };
    Sprite.prototype.draw = function (canvasContext, x, y, options) {
        if (options === void 0) { options = {}; }
        this.defaultAnimation.setFrame(options.frame || 0);
        this.defaultAnimation.draw(canvasContext, x, y, options);
    };
    Sprite.prototype.getFrameImageSourceCoords = function (frame) {
        var frameBorder = this.frameBorder || 0;
        var frameRow = 0;
        if (this.image.width) {
            var framesPerRow = Math.floor(this.image.width / this.width);
            while (this.width * frame >= framesPerRow * this.width) {
                frame -= framesPerRow;
                frameRow++;
            }
        }
        var frameXOffset = frame * frameBorder;
        var frameYOffset = frameRow * frameBorder;
        var srcX = frame * this.width + frameXOffset;
        var srcY = frameRow * this.height + frameYOffset;
        return [srcX, srcY];
    };
    return Sprite;
}());



/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_enum__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_util__ = __webpack_require__(13);



// determine canvas dimensions based on viewport size
var _a = Object(__WEBPACK_IMPORTED_MODULE_2__util_util__["buildCanvasDimensions"])(), canvasWidth = _a[0], canvasHeight = _a[1];
__WEBPACK_IMPORTED_MODULE_2__util_util__["Registry"].set(__WEBPACK_IMPORTED_MODULE_1__util_enum__["Settings"].CanvasWidth, canvasWidth);
__WEBPACK_IMPORTED_MODULE_2__util_util__["Registry"].set(__WEBPACK_IMPORTED_MODULE_1__util_enum__["Settings"].CanvasHeight, canvasHeight);
// initialize the game canvas
__WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Vastgame"].init('game', {
    canvas: { width: canvasWidth, height: canvasHeight },
});
// load game modules
__webpack_require__(24);
Object(__WEBPACK_IMPORTED_MODULE_2__util_util__["requireModules"])('actors', ['block', 'player', 'win']);
Object(__WEBPACK_IMPORTED_MODULE_2__util_util__["requireModules"])('rooms', ['level', 'level-select', 'title']);
// load game progress
__WEBPACK_IMPORTED_MODULE_2__util_util__["Registry"].load(__WEBPACK_IMPORTED_MODULE_1__util_enum__["Settings"].StackmoProgress);
// debug: hacks...
__WEBPACK_IMPORTED_MODULE_2__util_util__["Registry"].set(__WEBPACK_IMPORTED_MODULE_1__util_enum__["Settings"].StackmoProgress, 99, true);
// start the game with the title room
__WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Vastgame"].start(__WEBPACK_IMPORTED_MODULE_1__util_enum__["RoomID"].Title);


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LevelBuilder", function() { return LevelBuilder; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__enum__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data__ = __webpack_require__(15);




var FramePerWallSheetRow = 45;
var MaxLevelVariations = 4;
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
        var levelMap = __WEBPACK_IMPORTED_MODULE_3__data__["Levels"].get(roomID);
        var colorEnumMap = {
            0: [__WEBPACK_IMPORTED_MODULE_1__enum__["LevelBgColor"].Teal, __WEBPACK_IMPORTED_MODULE_1__enum__["LevelBgColor"].DarkTeal],
            1: [__WEBPACK_IMPORTED_MODULE_1__enum__["LevelBgColor"].Green, __WEBPACK_IMPORTED_MODULE_1__enum__["LevelBgColor"].DarkGreen],
            2: [__WEBPACK_IMPORTED_MODULE_1__enum__["LevelBgColor"].Red, __WEBPACK_IMPORTED_MODULE_1__enum__["LevelBgColor"].DarkRed],
            3: [__WEBPACK_IMPORTED_MODULE_1__enum__["LevelBgColor"].Purple, __WEBPACK_IMPORTED_MODULE_1__enum__["LevelBgColor"].DarkPurple],
        };
        var levelVariation = (roomID - 1) % MaxLevelVariations;
        room.setBackground(colorEnumMap[levelVariation][0], levelMap[0].length * cellSize, levelMap.length * cellSize, colorEnumMap[levelVariation][1]);
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
                        var frame = this.getWallFrame(levelMap, roomID, i, j);
                        frame = this.getWallFrameRowOffeset(levelVariation, frame);
                        wall.animation.setFrame(frame);
                        instances.push(wall);
                        break;
                }
            }
        }
        return instances;
    };
    LevelBuilder.getWallFrameRowOffeset = function (levelVariation, wallFrame) {
        return wallFrame + (FramePerWallSheetRow * levelVariation);
    };
    LevelBuilder.getWallFrame = function (levelMap, levelNumber, row, position) {
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
        if (!topFree && !topLeftFree && !topRightFree && !leftFree && !rightFree && !bottomLeftFree && !bottomFree && !bottomRightFree) {
            return WallStyle.Inner;
        }
        if (!topFree && !topLeftFree && !topRightFree && !leftFree && !rightFree && !bottomLeftFree && !bottomFree) {
            return WallStyle.InnerCornerTopLeft;
        }
        if (!topFree && !topLeftFree && !topRightFree && !leftFree && !rightFree && !bottomFree && !bottomRightFree) {
            return WallStyle.InnerCornerTopRight;
        }
        if (!topFree && !topLeftFree && !leftFree && !rightFree && !bottomLeftFree && !bottomFree && !bottomRightFree) {
            return WallStyle.InnerCornerBottomLeft;
        }
        if (!topFree && !topRightFree && !leftFree && !rightFree && !bottomLeftFree && !bottomFree && !bottomRightFree) {
            return WallStyle.InnerCornerBottomRight;
        }
        if (!topFree && !topLeftFree && !leftFree && !bottomLeftFree && !bottomFree && !rightFree) {
            return WallStyle.ThreewayRight;
        }
        if (!topFree && !topRightFree && !rightFree && !bottomRightFree && !bottomFree && !leftFree) {
            return WallStyle.ThreewayLeft;
        }
        if (!leftFree && !bottomLeftFree && !bottomFree && !bottomRightFree && !rightFree && !topFree) {
            return WallStyle.ThreewayTop;
        }
        if (!leftFree && !topLeftFree && !topFree && !topRightFree && !rightFree && !bottomFree) {
            return WallStyle.ThreewayBottom;
        }
        if (!topFree && !topLeftFree && !leftFree && !bottomLeftFree && !bottomFree) {
            return WallStyle.FlatLeft;
        }
        if (!topFree && !topRightFree && !rightFree && !bottomRightFree && !bottomFree) {
            return WallStyle.FlatRight;
        }
        if (!leftFree && !bottomLeftFree && !bottomFree && !bottomRightFree && !rightFree) {
            return WallStyle.FlatBottom;
        }
        if (!leftFree && !topLeftFree && !topFree && !topRightFree && !rightFree) {
            return WallStyle.FlatTop;
        }
        if (!topFree && !leftFree && !bottomFree && !rightFree && !bottomRightFree) {
            return WallStyle.TwoWayTopLeft;
        }
        if (!topFree && !leftFree && !bottomFree && !rightFree && !bottomLeftFree) {
            return WallStyle.TwoWayTopRight;
        }
        if (!topFree && !leftFree && !bottomFree && !rightFree && !topRightFree) {
            return WallStyle.TwoWayBottomLeft;
        }
        if (!topFree && !leftFree && !bottomFree && !rightFree && !topLeftFree) {
            return WallStyle.TwoWayBottomRight;
        }
        if (!topFree && !leftFree && !bottomFree && !rightFree) {
            return WallStyle.Fourway;
        }
        if (!leftFree && !rightFree && !bottomRightFree && !bottomFree) {
            return WallStyle.FlatTopNarrowLeft;
        }
        if (!leftFree && !rightFree && !bottomLeftFree && !bottomFree) {
            return WallStyle.FlatTopNarrowRight;
        }
        if (!leftFree && !rightFree && !topRightFree && !topFree) {
            return WallStyle.FlatBottomNarrowLeft;
        }
        if (!leftFree && !rightFree && !topLeftFree && !topFree) {
            return WallStyle.FlatBottomNarrowRight;
        }
        if (!topFree && !rightFree && !bottomRightFree && !bottomFree) {
            return WallStyle.FlatLeftNarrowTop;
        }
        if (!topFree && !leftFree && !bottomLeftFree && !bottomFree) {
            return WallStyle.FlatRightNarrowTop;
        }
        if (!bottomFree && !rightFree && !topRightFree && !topFree) {
            return WallStyle.FlatLeftNarrowBottom;
        }
        if (!bottomFree && !leftFree && !topLeftFree && !topFree) {
            return WallStyle.FlatRightNarrowBottom;
        }
        if (!rightFree && !bottomRightFree && !bottomFree) {
            return WallStyle.OuterCornerTopLeft;
        }
        if (!leftFree && !bottomLeftFree && !bottomFree) {
            return WallStyle.OuterCornerTopRight;
        }
        if (!rightFree && !topRightFree && !topFree) {
            return WallStyle.OuterCornerBottomLeft;
        }
        if (!leftFree && !topLeftFree && !topFree) {
            return WallStyle.OuterCornerBottomRight;
        }
        if (!topFree && !bottomFree && !leftFree) {
            return WallStyle.ThreewayNarrowLeft;
        }
        if (!topFree && !bottomFree && !rightFree) {
            return WallStyle.ThreewayNarrowRight;
        }
        if (!topFree && !leftFree && !rightFree) {
            return WallStyle.ThreewayNarrowTop;
        }
        if (!leftFree && !rightFree && !bottomFree) {
            return WallStyle.ThreewayNarrowBottom;
        }
        if (!leftFree && !rightFree) {
            return WallStyle.NarrowHorizontal;
        }
        if (!topFree && !bottomFree) {
            return WallStyle.NarrowVertical;
        }
        if (!topFree && !leftFree) {
            return WallStyle.OuterElbowBottomRight;
        }
        if (!topFree && !rightFree) {
            return WallStyle.OuterElbowBottomLeft;
        }
        if (!bottomFree && !leftFree) {
            return WallStyle.OuterElbowTopRight;
        }
        if (!bottomFree && !rightFree) {
            return WallStyle.OuterElbowTopLeft;
        }
        if (!topFree) {
            return WallStyle.CappedBottom;
        }
        if (!leftFree) {
            return WallStyle.CappedRight;
        }
        if (!bottomFree) {
            return WallStyle.CappedTop;
        }
        if (!rightFree) {
            return WallStyle.CappedLeft;
        }
        return WallStyle.Solo;
    };
    return LevelBuilder;
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
    WallStyle[WallStyle["FlatTopNarrowLeft"] = 29] = "FlatTopNarrowLeft";
    WallStyle[WallStyle["FlatTopNarrowRight"] = 30] = "FlatTopNarrowRight";
    WallStyle[WallStyle["FlatBottomNarrowLeft"] = 31] = "FlatBottomNarrowLeft";
    WallStyle[WallStyle["FlatBottomNarrowRight"] = 32] = "FlatBottomNarrowRight";
    WallStyle[WallStyle["FlatLeftNarrowTop"] = 33] = "FlatLeftNarrowTop";
    WallStyle[WallStyle["FlatRightNarrowTop"] = 34] = "FlatRightNarrowTop";
    WallStyle[WallStyle["FlatLeftNarrowBottom"] = 35] = "FlatLeftNarrowBottom";
    WallStyle[WallStyle["FlatRightNarrowBottom"] = 36] = "FlatRightNarrowBottom";
    WallStyle[WallStyle["TwoWayTopLeft"] = 37] = "TwoWayTopLeft";
    WallStyle[WallStyle["TwoWayTopRight"] = 38] = "TwoWayTopRight";
    WallStyle[WallStyle["TwoWayBottomLeft"] = 39] = "TwoWayBottomLeft";
    WallStyle[WallStyle["TwoWayBottomRight"] = 40] = "TwoWayBottomRight";
    WallStyle[WallStyle["OuterElbowBottomLeft"] = 41] = "OuterElbowBottomLeft";
    WallStyle[WallStyle["OuterElbowBottomRight"] = 42] = "OuterElbowBottomRight";
    WallStyle[WallStyle["OuterElbowTopLeft"] = 43] = "OuterElbowTopLeft";
    WallStyle[WallStyle["OuterElbowTopRight"] = 44] = "OuterElbowTopRight";
})(WallStyle || (WallStyle = {}));


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_constants__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_enum__ = __webpack_require__(2);



__WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Sprite"].define(__WEBPACK_IMPORTED_MODULE_2__util_enum__["SpriteID"].ArrowSheet, {
    imageSource: '../resources/arrows.png',
    height: __WEBPACK_IMPORTED_MODULE_1__util_constants__["GridCellSize"],
    width: __WEBPACK_IMPORTED_MODULE_1__util_constants__["GridCellSize"],
});
__WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Sprite"].define(__WEBPACK_IMPORTED_MODULE_2__util_enum__["SpriteID"].Box, {
    imageSource: '../resources/box.png',
    height: __WEBPACK_IMPORTED_MODULE_1__util_constants__["GridCellSize"],
    width: __WEBPACK_IMPORTED_MODULE_1__util_constants__["GridCellSize"],
});
__WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Sprite"].define(__WEBPACK_IMPORTED_MODULE_2__util_enum__["SpriteID"].Digits, {
    imageSource: '../resources/digits_sheet.png',
    height: __WEBPACK_IMPORTED_MODULE_1__util_constants__["GridCellSize"] / 2,
    width: __WEBPACK_IMPORTED_MODULE_1__util_constants__["GridCellSize"] / 2,
});
__WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Sprite"].define(__WEBPACK_IMPORTED_MODULE_2__util_enum__["SpriteID"].DoorSheet, {
    imageSource: '../resources/door_sheet.png',
    height: __WEBPACK_IMPORTED_MODULE_1__util_constants__["GridCellSize"],
    width: 32,
    frameBorder: 1,
});
__WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Sprite"].define(__WEBPACK_IMPORTED_MODULE_2__util_enum__["SpriteID"].ExitButton, {
    imageSource: '../resources/exit_button.png',
    height: __WEBPACK_IMPORTED_MODULE_1__util_constants__["GridCellSize"],
    width: __WEBPACK_IMPORTED_MODULE_1__util_constants__["GridCellSize"],
});
__WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Sprite"].define(__WEBPACK_IMPORTED_MODULE_2__util_enum__["SpriteID"].LevelIcon, {
    imageSource: '../resources/level_icon.png',
    width: __WEBPACK_IMPORTED_MODULE_1__util_constants__["GridCellSize"],
    height: __WEBPACK_IMPORTED_MODULE_1__util_constants__["GridCellSize"],
});
__WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Sprite"].define(__WEBPACK_IMPORTED_MODULE_2__util_enum__["SpriteID"].HUD, {
    imageSource: '../resources/hud.png',
    height: __WEBPACK_IMPORTED_MODULE_1__util_constants__["GridCellSize"],
    width: __WEBPACK_IMPORTED_MODULE_1__util_constants__["GridCellSize"],
});
__WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Sprite"].define(__WEBPACK_IMPORTED_MODULE_2__util_enum__["SpriteID"].StackmoSheet, {
    imageSource: '../resources/stackmo_sheet.png',
    height: __WEBPACK_IMPORTED_MODULE_1__util_constants__["GridCellSize"],
    width: __WEBPACK_IMPORTED_MODULE_1__util_constants__["GridCellSize"],
    frameBorder: 4,
});
__WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Sprite"].define(__WEBPACK_IMPORTED_MODULE_2__util_enum__["SpriteID"].Title, {
    imageSource: '../resources/title.png',
    width: __WEBPACK_IMPORTED_MODULE_1__util_constants__["TitleWidth"],
    height: __WEBPACK_IMPORTED_MODULE_1__util_constants__["TitleHeight"],
});
__WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Sprite"].define(__WEBPACK_IMPORTED_MODULE_2__util_enum__["SpriteID"].Wall, {
    imageSource: '../resources/wall_sheet.png',
    height: __WEBPACK_IMPORTED_MODULE_1__util_constants__["GridCellSize"],
    width: __WEBPACK_IMPORTED_MODULE_1__util_constants__["GridCellSize"],
    frameBorder: 1,
});


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_constants__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_enum__ = __webpack_require__(2);



__WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Actor"]
    .define(__WEBPACK_IMPORTED_MODULE_2__util_enum__["ActorID"].Block, {
    sprite: __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Sprite"].get(__WEBPACK_IMPORTED_MODULE_2__util_enum__["SpriteID"].Box),
})
    .onEvent(__WEBPACK_IMPORTED_MODULE_2__util_enum__["GameAction"].Fall, function (block, args) {
    var room = args.game.currentRoom;
    if (!room.isPositionFree(block.x + 1, block.y + __WEBPACK_IMPORTED_MODULE_1__util_constants__["GridCellSize"] + 1)) {
        return;
    }
    var startY = block.y;
    var stopCondition = function () { return Math.abs(startY - block.y) >= __WEBPACK_IMPORTED_MODULE_1__util_constants__["GridCellSize"]; };
    // move the target cell to the one below the previous target cell
    args.targetCell = args.targetCell.getAdjacentCell(__WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Direction"].Down);
    block.move(__WEBPACK_IMPORTED_MODULE_1__util_constants__["BlockFallSpeed"], __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Direction"].Down);
    block.raiseEventWhen(__WEBPACK_IMPORTED_MODULE_2__util_enum__["GameAction"].Stop, stopCondition, args);
})
    .onEvent(__WEBPACK_IMPORTED_MODULE_2__util_enum__["GameAction"].Stop, function (block, args) {
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
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_constants__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_enum__ = __webpack_require__(2);



var heldBlock;
var lastDirection;
var solidActors;
var Win;
__WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Actor"]
    .define(__WEBPACK_IMPORTED_MODULE_2__util_enum__["ActorID"].Player, {
    sprite: __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Sprite"].get(__WEBPACK_IMPORTED_MODULE_2__util_enum__["SpriteID"].StackmoSheet),
})
    .onCreate(function (self) {
    self.animation.depth = -50;
    lastDirection = __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Direction"].Right;
    heldBlock = null;
    solidActors = [
        __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Actor"].get(__WEBPACK_IMPORTED_MODULE_2__util_enum__["ActorID"].Block),
        __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Actor"].get(__WEBPACK_IMPORTED_MODULE_2__util_enum__["ActorID"].Wall),
    ];
    Win = __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Actor"].get(__WEBPACK_IMPORTED_MODULE_2__util_enum__["ActorID"].Win);
})
    .onStep(function (self) {
    if (heldBlock) {
        heldBlock.setPosition(self.x, self.y - __WEBPACK_IMPORTED_MODULE_1__util_constants__["GridCellSize"]);
    }
})
    .onEvent(__WEBPACK_IMPORTED_MODULE_2__util_enum__["GameAction"].Move, function (player, args) {
    var targetCell = args.targetCell;
    var direction = args.direction;
    var startX = player.x;
    var stopCondition = function () {
        return Math.abs(startX - player.x) >= __WEBPACK_IMPORTED_MODULE_1__util_constants__["GridCellSize"];
    };
    lastDirection = direction;
    // clearance check
    if (!heldBlock || (heldBlock && targetCell.getAdjacentCell(__WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Direction"].Up).isFree())) {
        player.move(__WEBPACK_IMPORTED_MODULE_1__util_constants__["PlayerMoveSpeed"], direction);
        player.raiseEventWhen(__WEBPACK_IMPORTED_MODULE_2__util_enum__["GameAction"].CheckStopMoving, stopCondition, args);
        animate(player, direction, true);
    }
})
    .onEvent(__WEBPACK_IMPORTED_MODULE_2__util_enum__["GameAction"].CheckStopMoving, function (player, args) {
    var targetCell = args.targetCell;
    var action = __WEBPACK_IMPORTED_MODULE_2__util_enum__["GameAction"].Stop;
    // snap to the grid
    player.move(0);
    player.setPosition(targetCell.x, targetCell.y);
    // continue movement if input is held and we're not about to win
    if (inputActive() && !targetCell.containsInstanceOf(Win)) {
        var belowCell = targetCell.getAdjacentCell(__WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Direction"].Down);
        if (!belowCell.isFree(solidActors)) {
            // determine the next cell based on where the current touch/click is (it may have moved)
            if (__WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Input"].clickActive) {
                var clickAdjustedX = getClickAdjustedX(args.game.currentRoom);
                args.direction = clickAdjustedX <= player.x + (targetCell.size / 2) ? __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Direction"].Left : __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Direction"].Right;
            }
            var nextCell = targetCell.getAdjacentCell(args.direction);
            if (nextCell.isFree(solidActors)) {
                args.targetCell = nextCell;
                action = __WEBPACK_IMPORTED_MODULE_2__util_enum__["GameAction"].Move;
            }
            else if (nextCell.getAdjacentCell(__WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Direction"].Up).isFree(solidActors)) {
                args.targetCell = nextCell.getAdjacentCell(__WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Direction"].Up);
                action = __WEBPACK_IMPORTED_MODULE_2__util_enum__["GameAction"].Jump;
            }
        }
    }
    player.raiseEvent(action, args);
})
    .onEvent(__WEBPACK_IMPORTED_MODULE_2__util_enum__["GameAction"].Fall, function (player, args) {
    var startY = player.y;
    var direction = args.direction;
    var stopCondition = function () { return Math.abs(startY - player.y) >= __WEBPACK_IMPORTED_MODULE_1__util_constants__["GridCellSize"]; };
    // move the target cell to the one below the previous target cell
    args.targetCell = args.targetCell.getAdjacentCell(__WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Direction"].Down);
    player.move(__WEBPACK_IMPORTED_MODULE_1__util_constants__["PlayerFallSpeed"], __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Direction"].Down);
    player.raiseEventWhen(__WEBPACK_IMPORTED_MODULE_2__util_enum__["GameAction"].StopFalling, stopCondition, args);
    animate(player, direction, false);
})
    .onEvent(__WEBPACK_IMPORTED_MODULE_2__util_enum__["GameAction"].StopFalling, function (player, args) {
    var targetCell = args.targetCell;
    // snap to the grid
    player.move(0);
    player.setPosition(args.targetCell.x, args.targetCell.y);
    if (inputActive() && !targetCell.getAdjacentCell(__WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Direction"].Down).isFree(solidActors)) {
        args.targetCell = targetCell.getAdjacentCell(args.direction);
        if (args.targetCell.isFree(solidActors)) {
            player.raiseEvent(__WEBPACK_IMPORTED_MODULE_2__util_enum__["GameAction"].Move, args);
        }
    }
    else {
        player.raiseEvent(__WEBPACK_IMPORTED_MODULE_2__util_enum__["GameAction"].Stop, args);
    }
})
    .onEvent(__WEBPACK_IMPORTED_MODULE_2__util_enum__["GameAction"].Stop, function (player, args) {
    var room = args.game.currentRoom;
    var targetCell = args.targetCell;
    // snap to the grid
    player.move(0);
    player.setPosition(targetCell.x, targetCell.y);
    // stop animation
    animate(player, lastDirection, false);
    // check if falling
    if (room.isPositionFree(player.x + 1, player.y + __WEBPACK_IMPORTED_MODULE_1__util_constants__["GridCellSize"] + 1, solidActors)) {
        player.raiseEvent(__WEBPACK_IMPORTED_MODULE_2__util_enum__["GameAction"].Fall, args);
        return;
    }
    // check for victory
    var Win = __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Actor"].get(__WEBPACK_IMPORTED_MODULE_2__util_enum__["ActorID"].Win);
    if (targetCell.containsInstanceOf(Win)) {
        room.getInstance(Win).raiseEvent(__WEBPACK_IMPORTED_MODULE_2__util_enum__["GameAction"].Win);
    }
})
    .onEvent(__WEBPACK_IMPORTED_MODULE_2__util_enum__["GameAction"].Jump, function (player, args) {
    var targetCell = args.targetCell;
    var direction = args.direction;
    var startY = player.y;
    // clearance check
    var cellAbovePlayer = targetCell.getAdjacentCell(direction === __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Direction"].Right ? __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Direction"].Left : __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Direction"].Right);
    var cellAboveBox = !!heldBlock ? cellAbovePlayer.getAdjacentCell(__WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Direction"].Up) : null;
    var canJump = !!cellAboveBox
        ? cellAboveBox.isFree() && cellAboveBox.getAdjacentCell(direction).isFree()
        : cellAbovePlayer.isFree();
    if (canJump) {
        // stop after moving up one space
        var stopCondition = function () { return Math.abs(startY - player.y) >= __WEBPACK_IMPORTED_MODULE_1__util_constants__["GridCellSize"]; };
        player.move(__WEBPACK_IMPORTED_MODULE_1__util_constants__["PlayerJumpSpeed"], __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Direction"].Up);
        player.raiseEventWhen(__WEBPACK_IMPORTED_MODULE_2__util_enum__["GameAction"].Move, stopCondition, args);
    }
})
    .onEvent(__WEBPACK_IMPORTED_MODULE_2__util_enum__["GameAction"].Lift, function (player, args) {
    var block = args.block;
    var targetCell = args.targetCell;
    // let validBlockLiftCellDirection = lastDirection === Direction.Left ? Direction.Right : Direction.Left;
    var liftDirection = targetCell.x < player.x ? __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Direction"].Left : __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Direction"].Right;
    // prevent lifting if the box is too far away
    var tooFarAway = targetCell.y !== player.y || Math.abs(targetCell.x - player.x) > 70;
    // prevent lifting if there's something on top of the box or on top of the player
    var aboveBoxCell = targetCell.getAdjacentCell(__WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Direction"].Up);
    var abovePlayerCell = aboveBoxCell.getAdjacentCell(liftDirection === __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Direction"].Left ? __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Direction"].Right : __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Direction"].Left);
    var blocked = !(aboveBoxCell.isFree() && abovePlayerCell.isFree());
    if (heldBlock && block === heldBlock) {
        player.raiseEvent(__WEBPACK_IMPORTED_MODULE_2__util_enum__["GameAction"].Drop, args);
    }
    else if (!heldBlock && !blocked && !tooFarAway) {
        heldBlock = block;
        animate(player, lastDirection, false);
        player.raiseEvent(__WEBPACK_IMPORTED_MODULE_2__util_enum__["GameAction"].Turn, { direction: liftDirection });
    }
})
    .onEvent(__WEBPACK_IMPORTED_MODULE_2__util_enum__["GameAction"].Drop, function (player, args) {
    var block = args.block;
    var targetCell = args.targetCell;
    var offsetX = lastDirection === __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Direction"].Left ? -__WEBPACK_IMPORTED_MODULE_1__util_constants__["GridCellSize"] : __WEBPACK_IMPORTED_MODULE_1__util_constants__["GridCellSize"];
    // prevent dropping if there's something in the way of the box
    if (targetCell.getAdjacentCell(lastDirection).isFree()) {
        args.targetCell = args.targetCell.getAdjacentCell(lastDirection);
        heldBlock = null;
        block.setPositionRelative(offsetX, 0);
        block.raiseEvent(__WEBPACK_IMPORTED_MODULE_2__util_enum__["GameAction"].Fall, args);
        animate(player, lastDirection, false);
    }
})
    .onEvent(__WEBPACK_IMPORTED_MODULE_2__util_enum__["GameAction"].Turn, function (player, args) {
    var direction = args.direction;
    lastDirection = direction;
    animate(player, lastDirection, false);
});
// Helpers
function animate(player, direction, isMoving) {
    if (isMoving === void 0) { isMoving = false; }
    var animationSpeed = 100;
    var startFrame = __WEBPACK_IMPORTED_MODULE_2__util_enum__["StackmoFrame"].StandRight;
    if (!!heldBlock) {
        startFrame = direction === __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Direction"].Right ? __WEBPACK_IMPORTED_MODULE_2__util_enum__["StackmoFrame"].StandHoldRight : __WEBPACK_IMPORTED_MODULE_2__util_enum__["StackmoFrame"].StandHoldLeft;
    }
    else {
        startFrame = direction === __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Direction"].Right ? __WEBPACK_IMPORTED_MODULE_2__util_enum__["StackmoFrame"].StandRight : __WEBPACK_IMPORTED_MODULE_2__util_enum__["StackmoFrame"].StandLeft;
    }
    if (isMoving) {
        player.animation.start(startFrame + 1, startFrame + 2, animationSpeed);
    }
    else {
        player.animation.setFrame(startFrame);
    }
}
function inputActive() {
    return (__WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Input"].clickActive || __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Input"].keyDown(lastDirection === __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Direction"].Left ? __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Key"].Left : __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Key"].Right));
}
function getClickAdjustedX(room) {
    var inputOffsetX = __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Input"].clickActive ? __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Input"].activePointerEvent.currentX || 0 : 0;
    // wicked hack to get the room's current view.
    var view = room.behaviors.find(function (b) { return !!b.view; }).view;
    return inputOffsetX + (view.x || 0);
}


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_enum__ = __webpack_require__(2);


var animationDelay = 500;
var opening = false;
var closing = false;
var doorAnimationOffsetX = 0;
__WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Actor"]
    .define(__WEBPACK_IMPORTED_MODULE_1__util_enum__["ActorID"].Win, {
    sprite: __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Sprite"].get(__WEBPACK_IMPORTED_MODULE_1__util_enum__["SpriteID"].DoorSheet),
})
    .onCreate(function (self) {
    // hide and draw sprite "manually" during onDraw
    self.animation.depth = -10;
    self.visible = false;
})
    .onDraw(function (self, context) {
    // animate the door panels when winning
    var doorSprite = __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Sprite"].get(__WEBPACK_IMPORTED_MODULE_1__util_enum__["SpriteID"].DoorSheet);
    doorSprite.draw(context, self.x - doorAnimationOffsetX, self.y, { frame: 0 });
    doorSprite.draw(context, self.x + 32 + doorAnimationOffsetX, self.y, { frame: 1 });
})
    .onStep(function (self) {
    if (opening) {
        doorAnimationOffsetX++;
    }
    else if (closing) {
        doorAnimationOffsetX--;
    }
})
    .onEvent(__WEBPACK_IMPORTED_MODULE_1__util_enum__["GameAction"].Win, function (self, args) {
    var currentRoom = args.game.currentRoom;
    currentRoom.set('complete', true);
    self.raiseEvent('open');
})
    .onEvent('open', function (self, args) {
    opening = true;
    self.raiseEventIn('stopOpening', animationDelay, args);
})
    .onEvent('stopOpening', function (self, args) {
    opening = false;
    self.animation.depth = -100;
    self.raiseEventIn('startClosing', animationDelay, args);
})
    .onEvent('startClosing', function (self, args) {
    closing = true;
    self.raiseEventIn('stopClosing', animationDelay, args);
})
    .onEvent('stopClosing', function (self, args) {
    doorAnimationOffsetX = 0;
    closing = false;
    self.raiseEventIn('exitLevel', animationDelay, args);
})
    .onEvent('exitLevel', function (self, args) {
    __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Vastgame"].setRoom(__WEBPACK_IMPORTED_MODULE_1__util_enum__["RoomID"].LevelSelect, { win: true });
});


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_constants__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_enum__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_registry__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__engine_room_ext__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_util__ = __webpack_require__(13);






__WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Actor"]
    .define(__WEBPACK_IMPORTED_MODULE_2__util_enum__["ActorID"].ExitButton, {
    boundary: new __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Boundary"](__WEBPACK_IMPORTED_MODULE_1__util_constants__["GridCellSize"], __WEBPACK_IMPORTED_MODULE_1__util_constants__["GridCellSize"]),
})
    .onClick(function () {
    __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Vastgame"].setRoom(__WEBPACK_IMPORTED_MODULE_2__util_enum__["RoomID"].LevelSelect);
});
__WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Actor"].define(__WEBPACK_IMPORTED_MODULE_2__util_enum__["ActorID"].Wall, {
    sprite: __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Sprite"].get(__WEBPACK_IMPORTED_MODULE_2__util_enum__["SpriteID"].Wall),
});
var levelNumber;
var grid;
var playerView;
var BlockActor;
var PlayerActor = __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Actor"].get(__WEBPACK_IMPORTED_MODULE_2__util_enum__["ActorID"].Player);
var WallActor = __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Actor"].get(__WEBPACK_IMPORTED_MODULE_2__util_enum__["ActorID"].Wall);
var canvasWidth = __WEBPACK_IMPORTED_MODULE_3__util_registry__["Registry"].get(__WEBPACK_IMPORTED_MODULE_2__util_enum__["Settings"].CanvasWidth);
var canvasHeight = __WEBPACK_IMPORTED_MODULE_3__util_registry__["Registry"].get(__WEBPACK_IMPORTED_MODULE_2__util_enum__["Settings"].CanvasHeight);
__WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Room"]
    .define(__WEBPACK_IMPORTED_MODULE_2__util_enum__["RoomID"].Level)
    .onStart(function (room, args) {
    levelNumber = args.levelNumber;
    room.set('complete', false);
    BlockActor = __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Actor"].get(__WEBPACK_IMPORTED_MODULE_2__util_enum__["ActorID"].Block);
    PlayerActor = __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Actor"].get(__WEBPACK_IMPORTED_MODULE_2__util_enum__["ActorID"].Player);
    WallActor = __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Actor"].get(__WEBPACK_IMPORTED_MODULE_2__util_enum__["ActorID"].Wall);
    // define the movement grid and player behavior
    var gridBehavior = new __WEBPACK_IMPORTED_MODULE_4__engine_room_ext__["a" /* GridRoomBehavior */](__WEBPACK_IMPORTED_MODULE_1__util_constants__["GridCellSize"], room);
    grid = gridBehavior.getGrid();
    room.use(gridBehavior);
    // assumes the level has already been populated before starting
    var player = room.getInstances().find(function (actorInstance) { return actorInstance.parent === PlayerActor; });
    // define a view that follows the player
    var viewBehavior = new __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["ViewedRoomBehavior"](0, 0, canvasWidth, canvasHeight);
    room.use(viewBehavior);
    playerView = viewBehavior.getView();
    playerView.follow(player, true, 0, -(__WEBPACK_IMPORTED_MODULE_1__util_constants__["GridCellSize"] / 2)); // compensate for HUD height
    playerView.attach(room.createActor(__WEBPACK_IMPORTED_MODULE_2__util_enum__["ActorID"].ExitButton));
    // Init HUD
    var HUD = __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Sprite"].get(__WEBPACK_IMPORTED_MODULE_2__util_enum__["SpriteID"].HUD);
    var ExitButton = __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Sprite"].get(__WEBPACK_IMPORTED_MODULE_2__util_enum__["SpriteID"].ExitButton);
    var Digits = __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Sprite"].get(__WEBPACK_IMPORTED_MODULE_2__util_enum__["SpriteID"].Digits);
    // Mouse/Touch input
    grid.onClick(function (gridClickEvent) {
        // cancel input if the level has been won or if the player is moving
        if (grid.room.get('complete') || player.speed) {
            return;
        }
        var clickedCell = gridClickEvent.getCell();
        var playerCell = grid.find(PlayerActor);
        if (clickedCell.containsInstanceOf(BlockActor)) {
            player.raiseEvent(__WEBPACK_IMPORTED_MODULE_2__util_enum__["GameAction"].Lift, { block: clickedCell.getContents()[0], targetCell: clickedCell });
            return;
        }
        if (clickedCell.x < playerCell.x) {
            // move or jump left
            var leftCell = playerCell.getAdjacentCell(__WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Direction"].Left);
            var upLeftCell = leftCell.getAdjacentCell(__WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Direction"].Up);
            if (leftCell.isFree([BlockActor, WallActor])) {
                player.raiseEvent(__WEBPACK_IMPORTED_MODULE_2__util_enum__["GameAction"].Move, { direction: __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Direction"].Left, targetCell: leftCell });
            }
            else if (leftCell.containsInstanceOf([BlockActor, WallActor]) && upLeftCell.isFree()) {
                player.raiseEvent(__WEBPACK_IMPORTED_MODULE_2__util_enum__["GameAction"].Jump, { direction: __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Direction"].Left, targetCell: upLeftCell });
            }
            else {
                player.raiseEvent(__WEBPACK_IMPORTED_MODULE_2__util_enum__["GameAction"].Turn, { direction: __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Direction"].Left });
            }
        }
        else if (clickedCell.x > playerCell.x) {
            // move or jump right
            var rightCell = playerCell.getAdjacentCell(__WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Direction"].Right);
            var upRightCell = rightCell.getAdjacentCell(__WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Direction"].Up);
            if (rightCell.isFree([BlockActor, WallActor])) {
                player.raiseEvent(__WEBPACK_IMPORTED_MODULE_2__util_enum__["GameAction"].Move, { direction: __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Direction"].Right, targetCell: rightCell });
            }
            else if (rightCell.containsInstanceOf([BlockActor, WallActor]) && upRightCell.isFree()) {
                player.raiseEvent(__WEBPACK_IMPORTED_MODULE_2__util_enum__["GameAction"].Jump, { direction: __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Direction"].Right, targetCell: upRightCell });
            }
            else {
                player.raiseEvent(__WEBPACK_IMPORTED_MODULE_2__util_enum__["GameAction"].Turn, { direction: __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Direction"].Right });
            }
        }
    });
})
    .onDraw(function (room, context) {
    var hudX = playerView.x;
    var hudY = playerView.y;
    __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Sprite"].get(__WEBPACK_IMPORTED_MODULE_2__util_enum__["SpriteID"].HUD).draw(context, hudX, hudY, { tileX: true });
    __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Sprite"].get(__WEBPACK_IMPORTED_MODULE_2__util_enum__["SpriteID"].ExitButton).draw(context, hudX, hudY);
    var drawInstances = Object(__WEBPACK_IMPORTED_MODULE_5__util_util__["getDigitDrawInstances"])(levelNumber, true);
    drawInstances.forEach(function (draw) { return __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Sprite"].get(__WEBPACK_IMPORTED_MODULE_2__util_enum__["SpriteID"].Digits).draw(context, hudX + (canvasWidth / 2) - 32 + draw.x, hudY + 12, { frame: draw.frame }); });
})
    .onKey(__WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Key"].Left, function (room, ev) {
    var player = room.getInstances().find(function (actorInstance) { return actorInstance.parent === PlayerActor; });
    var playerCell = grid.getCellAtPosition(player.x, player.y);
    var leftCell = playerCell.getAdjacentCell(__WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Direction"].Left);
    var topLeftCell = leftCell.getAdjacentCell(__WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Direction"].Up);
    var isLeftBlocked = leftCell.containsInstanceOf(WallActor) || leftCell.containsInstanceOf(BlockActor);
    if (topLeftCell.isFree() && isLeftBlocked) {
        grid.raiseClickEvent(player.x - __WEBPACK_IMPORTED_MODULE_1__util_constants__["GridCellSize"], player.y - __WEBPACK_IMPORTED_MODULE_1__util_constants__["GridCellSize"]);
    }
    else if (!isLeftBlocked) {
        grid.raiseClickEvent(player.x - __WEBPACK_IMPORTED_MODULE_1__util_constants__["GridCellSize"], player.y);
    }
})
    .onKey(__WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Key"].Right, function (room, ev) {
    var player = room.getInstances().find(function (actorInstance) { return actorInstance.parent === PlayerActor; });
    var playerCell = grid.getCellAtPosition(player.x, player.y);
    var rightCell = playerCell.getAdjacentCell(__WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Direction"].Right);
    var topRightCell = rightCell.getAdjacentCell(__WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Direction"].Up);
    var isRightBlocked = rightCell.containsInstanceOf(WallActor) || rightCell.containsInstanceOf(BlockActor);
    if (topRightCell.isFree() && isRightBlocked) {
        grid.raiseClickEvent(player.x + __WEBPACK_IMPORTED_MODULE_1__util_constants__["GridCellSize"], player.y - __WEBPACK_IMPORTED_MODULE_1__util_constants__["GridCellSize"]);
    }
    else if (!isRightBlocked) {
        grid.raiseClickEvent(player.x + __WEBPACK_IMPORTED_MODULE_1__util_constants__["GridCellSize"], player.y);
    }
})
    .onKey(__WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Key"].Down, function (room, ev) {
    var player = room.getInstances().find(function (actorInstance) { return actorInstance.parent === PlayerActor; });
    var playerCell = grid.getCellAtPosition(player.x, player.y);
    var leftCell = playerCell.getAdjacentCell(__WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Direction"].Left);
    var rightCell = playerCell.getAdjacentCell(__WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Direction"].Right);
    var topCell = playerCell.getAdjacentCell(__WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Direction"].Up);
    var topLeftCell = topCell.getAdjacentCell(__WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Direction"].Left);
    var topRightCell = topCell.getAdjacentCell(__WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Direction"].Right);
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


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_constants__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_data__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_enum__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util_level_builder__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__util_registry__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__util_util__ = __webpack_require__(13);







var scrollView;
var canvasHeight;
var canvasWidth;
var startX;
var startY;
var overflowedRows;
var iconPadding = 8;
var iconSizeWithPadding = __WEBPACK_IMPORTED_MODULE_1__util_constants__["GridCellSize"] + (iconPadding * 2);
var _lastLevelNumber = 1;
var levelSelectLock = false;
__WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Room"].define(__WEBPACK_IMPORTED_MODULE_3__util_enum__["RoomID"].LevelSelect)
    .onStart(function (room, args) {
    canvasWidth = __WEBPACK_IMPORTED_MODULE_5__util_registry__["Registry"].get(__WEBPACK_IMPORTED_MODULE_3__util_enum__["Settings"].CanvasWidth);
    canvasHeight = __WEBPACK_IMPORTED_MODULE_5__util_registry__["Registry"].get(__WEBPACK_IMPORTED_MODULE_3__util_enum__["Settings"].CanvasHeight);
    room.setBackground(__WEBPACK_IMPORTED_MODULE_1__util_constants__["Black"], canvasWidth, canvasHeight, __WEBPACK_IMPORTED_MODULE_1__util_constants__["Black"]);
    var viewBehavior = new __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["ViewedRoomBehavior"](0, 0, canvasWidth, canvasHeight);
    room.use(viewBehavior);
    scrollView = viewBehavior.getView();
    // determine/update level-unlock progress
    var unlockedLevelCount = Number(__WEBPACK_IMPORTED_MODULE_5__util_registry__["Registry"].get(__WEBPACK_IMPORTED_MODULE_3__util_enum__["Settings"].StackmoProgress));
    if (args && args.win && _lastLevelNumber === unlockedLevelCount) {
        unlockedLevelCount++;
        __WEBPACK_IMPORTED_MODULE_5__util_registry__["Registry"].set(__WEBPACK_IMPORTED_MODULE_3__util_enum__["Settings"].StackmoProgress, unlockedLevelCount, true);
    }
    if (!unlockedLevelCount) {
        unlockedLevelCount = 0;
    }
    // adjust icons per row for scroll bar if rows overflow the canvas
    var iconsPerRow = Math.floor(canvasWidth / iconSizeWithPadding);
    var rowCount = Math.ceil(__WEBPACK_IMPORTED_MODULE_2__util_data__["Levels"].count / iconsPerRow);
    var startX = startY = Math.floor((canvasWidth - (iconsPerRow * iconSizeWithPadding)) / 2);
    var showScrollbars = false;
    if (startY + (rowCount * iconSizeWithPadding) > canvasHeight) {
        iconsPerRow--;
        rowCount = Math.ceil(__WEBPACK_IMPORTED_MODULE_2__util_data__["Levels"].count / iconsPerRow);
        overflowedRows = Math.ceil(((rowCount * iconSizeWithPadding) - canvasHeight) / iconSizeWithPadding);
        showScrollbars = true;
    }
    // create level icons
    var currentRow = 0;
    var currentPosition = 0;
    for (var i = 0; i < __WEBPACK_IMPORTED_MODULE_2__util_data__["Levels"].count; i++) {
        var icon = room.createActor(__WEBPACK_IMPORTED_MODULE_3__util_enum__["ActorID"].LevelIcon, startX + currentPosition * iconSizeWithPadding, startY + currentRow * iconSizeWithPadding);
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
        var upArrow = room.createActor(__WEBPACK_IMPORTED_MODULE_3__util_enum__["ActorID"].ScrollArrow);
        upArrow.animation.setFrame(1);
        upArrow.x = canvasWidth - iconPadding - __WEBPACK_IMPORTED_MODULE_1__util_constants__["GridCellSize"];
        upArrow.direction = __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Direction"].Up;
        var downArrow = room.createActor(__WEBPACK_IMPORTED_MODULE_3__util_enum__["ActorID"].ScrollArrow);
        downArrow.x = upArrow.x;
        downArrow.direction = __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Direction"].Down;
    }
});
// Level icons
__WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Actor"]
    .define(__WEBPACK_IMPORTED_MODULE_3__util_enum__["ActorID"].LevelIcon, {
    sprite: __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Sprite"].get(__WEBPACK_IMPORTED_MODULE_3__util_enum__["SpriteID"].LevelIcon),
})
    .onClick(function (self) {
    if (self.enabled && !levelSelectLock) {
        levelSelectLock = true;
        var levelNumber = self.levelNumber;
        var level = __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Room"].get(__WEBPACK_IMPORTED_MODULE_3__util_enum__["RoomID"].Level);
        __WEBPACK_IMPORTED_MODULE_4__util_level_builder__["LevelBuilder"].populateRoom(level, levelNumber);
        _lastLevelNumber = levelNumber;
        __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Vastgame"].setRoom(__WEBPACK_IMPORTED_MODULE_3__util_enum__["RoomID"].Level, { levelNumber: levelNumber });
        levelSelectLock = false;
    }
})
    .onDraw(function (self, context) {
    if (self.enabled) {
        var levelNumber = self.levelNumber;
        var drawInstances = Object(__WEBPACK_IMPORTED_MODULE_6__util_util__["getDigitDrawInstances"])(levelNumber);
        drawInstances.forEach(function (draw) { return __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Sprite"].get(__WEBPACK_IMPORTED_MODULE_3__util_enum__["SpriteID"].Digits).draw(context, self.x + draw.x, self.y + draw.y, { frame: draw.frame }); });
    }
});
// Scroll arrows
__WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Actor"]
    .define(__WEBPACK_IMPORTED_MODULE_3__util_enum__["ActorID"].ScrollArrow, {
    sprite: __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Sprite"].get(__WEBPACK_IMPORTED_MODULE_3__util_enum__["SpriteID"].ArrowSheet),
})
    .onClick(function (self, event) {
    if (self.enabled) {
        var direction = self.direction;
        scrollView.y += direction === __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Direction"].Down ? 64 : -64;
        if (scrollView.y < 0) {
            scrollView.y = 0;
        }
    }
})
    .onStep(function (self) {
    // update vertical position to match scrolling
    var isUpArrow = (self.direction === __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Direction"].Up);
    self.y = isUpArrow ? startY + scrollView.y : canvasHeight - 82 + scrollView.y;
    // enable/disable if there's no more scrolling to do
    self.enabled = isUpArrow ? scrollView.y > 0 : scrollView.y < (overflowedRows + 2) * iconSizeWithPadding;
});


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_constants__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__util_enum__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__util_registry__ = __webpack_require__(6);




var titleX = 0;
var titleY = 0;
__WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Room"]
    .define(__WEBPACK_IMPORTED_MODULE_2__util_enum__["RoomID"].Title)
    .onStart(function (room, args) {
    var canvasWidth = __WEBPACK_IMPORTED_MODULE_3__util_registry__["Registry"].get(__WEBPACK_IMPORTED_MODULE_2__util_enum__["Settings"].CanvasWidth);
    var canvasHeight = __WEBPACK_IMPORTED_MODULE_3__util_registry__["Registry"].get(__WEBPACK_IMPORTED_MODULE_2__util_enum__["Settings"].CanvasHeight);
    titleX = Math.floor((canvasWidth - __WEBPACK_IMPORTED_MODULE_1__util_constants__["TitleWidth"]) / 2);
    titleY = Math.floor((canvasHeight - __WEBPACK_IMPORTED_MODULE_1__util_constants__["TitleHeight"]) / 4);
    room.setBackground(__WEBPACK_IMPORTED_MODULE_1__util_constants__["Black"], canvasWidth, canvasHeight, __WEBPACK_IMPORTED_MODULE_1__util_constants__["Black"]);
})
    .onClick(function () {
    __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Vastgame"].setRoom(__WEBPACK_IMPORTED_MODULE_2__util_enum__["RoomID"].LevelSelect);
})
    .onKey(__WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Key"].Any, function () {
    __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Vastgame"].setRoom(__WEBPACK_IMPORTED_MODULE_2__util_enum__["RoomID"].LevelSelect);
})
    .onDraw(function (room, context) {
    __WEBPACK_IMPORTED_MODULE_0__engine_vastgame__["Sprite"].get(__WEBPACK_IMPORTED_MODULE_2__util_enum__["SpriteID"].Title).draw(context, titleX, titleY);
});


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./actors/block": 25,
	"./actors/block.ts": 25,
	"./actors/player": 26,
	"./actors/player.ts": 26,
	"./actors/win": 27,
	"./actors/win.ts": 27,
	"./game": 22,
	"./game.ts": 22,
	"./rooms/level": 28,
	"./rooms/level-select": 29,
	"./rooms/level-select.ts": 29,
	"./rooms/level.ts": 28,
	"./rooms/title": 30,
	"./rooms/title.ts": 30,
	"./sprites": 24,
	"./sprites.ts": 24,
	"./util/constants": 3,
	"./util/constants.ts": 3,
	"./util/data": 15,
	"./util/data.ts": 15,
	"./util/enum": 2,
	"./util/enum.ts": 2,
	"./util/level-builder": 23,
	"./util/level-builder.ts": 23,
	"./util/registry": 6,
	"./util/registry.ts": 6,
	"./util/util": 13,
	"./util/util.ts": 13
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
webpackContext.id = 31;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjlmM2U0MzkwMmUzNDJmZWFlOGIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS92YXN0Z2FtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2VudW0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvdXRpbC9lbnVtLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL3V0aWwvY29uc3RhbnRzLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvaW5wdXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9zcHJpdGUtYW5pbWF0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL3V0aWwvcmVnaXN0cnkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9yb29tLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvYWN0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9ib3VuZGFyeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2FjdG9yLWluc3RhbmNlLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvZ3JpZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL3ZpZXcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvdXRpbC91dGlsLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvcm9vbS1leHQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvdXRpbC9kYXRhLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvY2FudmFzLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvZ2FtZS1jb250ZXh0LnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvZ2FtZS1ydW5uZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9ldmVudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS91dGlsLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvc3ByaXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL2dhbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvdXRpbC9sZXZlbC1idWlsZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL3Nwcml0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvYWN0b3JzL2Jsb2NrLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL2FjdG9ycy9wbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvYWN0b3JzL3dpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9yb29tcy9sZXZlbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9yb29tcy9sZXZlbC1zZWxlY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvcm9vbXMvdGl0bGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUgXlxcLlxcLy4qJCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdEOEY7QUFDdEQ7QUFDUjtBQUNhO0FBQ0Y7QUFDYjtBQUU5Qix3QkFBd0I7QUFDUTtBQUNpQjtBQUNYO0FBQ2I7QUFDTztBQUNRO0FBQ1Y7QUFDb0M7QUFDaEM7QUFDeUM7QUFDN0M7QUFPOUI7SUFBQTtJQW9DQSxDQUFDO0lB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TUFBTSxHQUFHLENBQUMsQ0FBQztRQUNsQyxJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUUvQixJQUFJLE9BQU8sR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUMzRSxJQUFJLFdBQVcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNuRyxJQUFJLFlBQVksR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUN2RyxJQUFJLFVBQVUsR0FBRyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNqRixJQUFJLGNBQWMsR0FBRyxDQUFDLEdBQUcsR0FBRyxJQUFJLElBQUksUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUN6RyxJQUFJLGVBQWUsR0FBRyxDQUFDLEdBQUcsR0FBRyxJQUFJLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUM3RyxJQUFJLFFBQVEsR0FBRyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNqRixJQUFJLFNBQVMsR0FBRyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUVyRixFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLGNBQWMsSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7WUFDN0gsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7UUFDM0IsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsY0FBYyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUN6RyxNQUFNLENBQUMsU0FBUyxDQUFDLGtCQUFrQjtRQUN2QyxDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1lBQzFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsbUJBQW1CLENBQUM7UUFDekMsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsY0FBYyxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztZQUM1RyxNQUFNLENBQUMsU0FBUyxDQUFDLHFCQUFxQixDQUFDO1FBQzNDLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBRyxDQUFDLFlBQVksSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLGNBQWMsSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7WUFDNUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsQ0FBQztRQUM1QyxDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxjQUFjLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ3hGLE1BQU0sQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDO1FBQ25DLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLGVBQWUsSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDMUYsTUFBTSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUM7UUFDbEMsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxJQUFJLENBQUMsY0FBYyxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsZUFBZSxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUM1RixNQUFNLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQztRQUNqQyxDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ3RGLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDO1FBQ3BDLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLGNBQWMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDMUUsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUM7UUFDOUIsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsZUFBZSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUM3RSxNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQztRQUMvQixDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLElBQUksQ0FBQyxjQUFjLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxlQUFlLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ2hGLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDO1FBQ2hDLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDdkUsTUFBTSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUM7UUFDN0IsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztZQUN6RSxNQUFNLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQztRQUNuQyxDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1lBQ3hFLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDO1FBQ3BDLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDdEUsTUFBTSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQztRQUN0QyxDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ3JFLE1BQU0sQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUM7UUFDdkMsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNyRCxNQUFNLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQztRQUM3QixDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxlQUFlLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQzdELE1BQU0sQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUM7UUFDdkMsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsY0FBYyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUM1RCxNQUFNLENBQUMsU0FBUyxDQUFDLGtCQUFrQixDQUFDO1FBQ3hDLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDdkQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxvQkFBb0IsQ0FBQztRQUMxQyxDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ3RELE1BQU0sQ0FBQyxTQUFTLENBQUMscUJBQXFCLENBQUM7UUFDM0MsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsZUFBZSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUM1RCxNQUFNLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDO1FBQ3ZDLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLGNBQWMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDMUQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQztRQUN4QyxDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ3pELE1BQU0sQ0FBQyxTQUFTLENBQUMsb0JBQW9CLENBQUM7UUFDMUMsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLENBQUMsVUFBVSxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN2RCxNQUFNLENBQUMsU0FBUyxDQUFDLHFCQUFxQixDQUFDO1FBQzNDLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsSUFBSSxDQUFDLGVBQWUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDaEQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQztRQUN4QyxDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLElBQUksQ0FBQyxjQUFjLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQzlDLE1BQU0sQ0FBQyxTQUFTLENBQUMsbUJBQW1CLENBQUM7UUFDekMsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxJQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUMxQyxNQUFNLENBQUMsU0FBUyxDQUFDLHFCQUFxQixDQUFDO1FBQzNDLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDeEMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsQ0FBQztRQUM1QyxDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLE1BQU0sQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQUM7UUFDeEMsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUN4QyxNQUFNLENBQUMsU0FBUyxDQUFDLG1CQUFtQixDQUFDO1FBQ3pDLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDdEMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQztRQUN2QyxDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ3pDLE1BQU0sQ0FBQyxTQUFTLENBQUMsb0JBQW9CLENBQUM7UUFDMUMsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUMxQixNQUFNLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDO1FBQ3RDLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDMUIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUM7UUFDcEMsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUN4QixNQUFNLENBQUMsU0FBUyxDQUFDLHFCQUFxQixDQUFDO1FBQzNDLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDekIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxvQkFBb0IsQ0FBQztRQUMxQyxDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQzNCLE1BQU0sQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQUM7UUFDeEMsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLENBQUMsVUFBVSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUM1QixNQUFNLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDO1FBQ3ZDLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDWCxNQUFNLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQztRQUNsQyxDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ1osTUFBTSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUM7UUFDakMsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUNkLE1BQU0sQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDO1FBQy9CLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFDYixNQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQztRQUNoQyxDQUFDO1FBRUQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7SUFDMUIsQ0FBQztJQUNMLG1CQUFDO0FBQUQsQ0FBQzs7QUFFRCxnREFBZ0Q7QUFDaEQsSUFBSyxTQThDSjtBQTlDRCxXQUFLLFNBQVM7SUFDVixxRUFBc0I7SUFDdEIsK0NBQVc7SUFDWCx1RUFBdUI7SUFDdkIscUVBQXNCO0lBQ3RCLDJFQUF5QjtJQUN6QixpREFBWTtJQUNaLDJDQUFTO0lBQ1QsbURBQWE7SUFDYix1RUFBdUI7SUFDdkIsMkVBQXlCO0lBQ3pCLHNEQUFlO0lBQ2YsOEVBQTJCO0lBQzNCLDhFQUEyQjtJQUMzQixrRUFBcUI7SUFDckIsOERBQW1CO0lBQ25CLHNEQUFlO0lBQ2Ysb0RBQWM7SUFDZCx3REFBZ0I7SUFDaEIsMERBQWlCO0lBQ2pCLG9FQUFzQjtJQUN0Qix3RUFBd0I7SUFDeEIsMEVBQXlCO0lBQ3pCLHNFQUF1QjtJQUN2QixnREFBWTtJQUNaLDBDQUFTO0lBQ1Qsd0RBQWdCO0lBQ2hCLDREQUFrQjtJQUNsQiw4REFBbUI7SUFDbkIsMERBQWlCO0lBQ2pCLG9FQUFzQjtJQUN0QixzRUFBdUI7SUFDdkIsMEVBQXlCO0lBQ3pCLDRFQUEwQjtJQUMxQixvRUFBc0I7SUFDdEIsc0VBQXVCO0lBQ3ZCLDBFQUF5QjtJQUN6Qiw0RUFBMEI7SUFDMUIsNERBQWtCO0lBQ2xCLDhEQUFtQjtJQUNuQixrRUFBcUI7SUFDckIsb0VBQXNCO0lBQ3RCLDBFQUF5QjtJQUN6Qiw0RUFBMEI7SUFDMUIsb0VBQXNCO0lBQ3RCLHNFQUF1QjtBQUMzQixDQUFDLEVBOUNJLFNBQVMsS0FBVCxTQUFTLFFBOENiOzs7Ozs7Ozs7Ozs7QUN0VDZDO0FBQ0E7QUFDUDtBQUV2Qyx3REFBTSxDQUFDLE1BQU0sQ0FBQyxvREFBUSxDQUFDLFVBQVUsRUFBRTtJQUMvQixXQUFXLEVBQUUseUJBQXlCO0lBQ3RDLE1BQU0sRUFBRSw2REFBc0I7SUFDOUIsS0FBSyxFQUFFLDZEQUFzQjtDQUNoQyxDQUFDLENBQUM7QUFFSCx3REFBTSxDQUFDLE1BQU0sQ0FBQyxvREFBUSxDQUFDLEdBQUcsRUFBRTtJQUN4QixXQUFXLEVBQUUsc0JBQXNCO0lBQ25DLE1BQU0sRUFBRSw2REFBc0I7SUFDOUIsS0FBSyxFQUFFLDZEQUFzQjtDQUNoQyxDQUFDLENBQUM7QUFFSCx3REFBTSxDQUFDLE1BQU0sQ0FBQyxvREFBUSxDQUFDLE1BQU0sRUFBRTtJQUMzQixXQUFXLEVBQUUsK0JBQStCO0lBQzVDLE1BQU0sRUFBRSw2REFBc0IsR0FBRyxDQUFDO0lBQ2xDLEtBQUssRUFBRSw2REFBc0IsR0FBRyxDQUFDO0NBQ3BDLENBQUMsQ0FBQztBQUVILHdEQUFNLENBQUMsTUFBTSxDQUFDLG9EQUFRLENBQUMsU0FBUyxFQUFFO0lBQzlCLFdBQVcsRUFBRSw2QkFBNkI7SUFDMUMsTUFBTSxFQUFFLDZEQUFzQjtJQUM5QixLQUFLLEVBQUUsRUFBRTtJQUNULFdBQVcsRUFBRSxDQUFDO0NBQ2pCLENBQUMsQ0FBQztBQUVILHdEQUFNLENBQUMsTUFBTSxDQUFDLG9EQUFRLENBQUMsVUFBVSxFQUFFO0lBQy9CLFdBQVcsRUFBRSw4QkFBOEI7SUFDM0MsTUFBTSxFQUFFLDZEQUFzQjtJQUM5QixLQUFLLEVBQUUsNkRBQXNCO0NBQ2hDLENBQUMsQ0FBQztBQUVILHdEQUFNLENBQUMsTUFBTSxDQUFDLG9EQUFRLENBQUMsU0FBUyxFQUFFO0lBQzlCLFdBQVcsRUFBRSw2QkFBNkI7SUFDMUMsS0FBSyxFQUFFLDZEQUFzQjtJQUM3QixNQUFNLEVBQUUsNkRBQXNCO0NBQ2pDLENBQUMsQ0FBQztBQUVILHdEQUFNLENBQUMsTUFBTSxDQUFDLG9EQUFRLENBQUMsR0FBRyxFQUFFO0lBQ3hCLFdBQVcsRUFBRSxzQkFBc0I7SUFDbkMsTUFBTSxFQUFFLDZEQUFzQjtJQUM5QixLQUFLLEVBQUUsNkRBQXNCO0NBQ2hDLENBQUMsQ0FBQztBQUVILHdEQUFNLENBQUMsTUFBTSxDQUFDLG9EQUFRLENBQUMsWUFBWSxFQUFFO0lBQ2pDLFdBQVcsRUFBRSxnQ0FBZ0M7SUFDN0MsTUFBTSxFQUFFLDZEQUFzQjtJQUM5QixLQUFLLEVBQUUsNkRBQXNCO0lBQzdCLFdBQVcsRUFBRSxDQUFDO0NBQ2pCLENBQUMsQ0FBQztBQUVILHdEQUFNLENBQUMsTUFBTSxDQUFDLG9EQUFRLENBQUMsS0FBSyxFQUFFO0lBQzFCLFdBQVcsRUFBRSx3QkFBd0I7SUFDckMsS0FBSyxFQUFFLDJEQUFvQjtJQUMzQixNQUFNLEVBQUUsNERBQXFCO0NBQ2hDLENBQUMsQ0FBQztBQUVILHdEQUFNLENBQUMsTUFBTSxDQUFDLG9EQUFRLENBQUMsSUFBSSxFQUFFO0lBQ3pCLFdBQVcsRUFBRSw2QkFBNkI7SUFDMUMsTUFBTSxFQUFFLDZEQUFzQjtJQUM5QixLQUFLLEVBQUUsNkRBQXNCO0lBQzdCLFdBQVcsRUFBRSxDQUFDO0NBQ2pCLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7O0FDakUwRjtBQUM1QztBQUNjO0FBRS9ELHVEQUFLO0tBQ0EsTUFBTSxDQUFDLG1EQUFPLENBQUMsS0FBSyxFQUFFO0lBQ25CLE1BQU0sRUFBRSx3REFBTSxDQUFDLEdBQUcsQ0FBQyxvREFBUSxDQUFDLEdBQUcsQ0FBQztDQUNuQyxDQUFDO0tBRUQsT0FBTyxDQUFDLHNEQUFVLENBQUMsSUFBSSxFQUFFLFVBQUMsS0FBSyxFQUFFLElBQUk7SUFDbEMsSUFBSSxJQUFJLEdBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7SUFFdkMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLEdBQUcsNkRBQXNCLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFFLE1BQU0sQ0FBQztJQUNYLENBQUM7SUFFRCxJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3JCLElBQUksYUFBYSxHQUFHLGNBQWdCLFdBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSw2REFBc0IsRUFBcEQsQ0FBb0QsQ0FBQztJQUV6RixpRUFBaUU7SUFDakUsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQywyREFBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRWxFLEtBQUssQ0FBQyxJQUFJLENBQUMsK0RBQXdCLEVBQUUsMkRBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyRCxLQUFLLENBQUMsY0FBYyxDQUFDLHNEQUFVLENBQUMsSUFBSSxFQUFFLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUMvRCxDQUFDLENBQUM7S0FFRCxPQUFPLENBQUMsc0RBQVUsQ0FBQyxJQUFJLEVBQUUsVUFBQyxLQUFLLEVBQUUsSUFBSTtJQUNsQyxJQUFJLElBQUksR0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN2QyxJQUFJLFVBQVUsR0FBYSxJQUFJLENBQUMsVUFBVSxDQUFDO0lBRTNDLG1CQUFtQjtJQUNuQixLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2QsS0FBSyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUU5QyxtQkFBbUI7SUFDbkIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxHQUFHLDZEQUFzQixHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6RSxLQUFLLENBQUMsVUFBVSxDQUFDLHNEQUFVLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7O0FDdENpSDtBQUN2RTtBQUM0QjtBQUU3RSxJQUFJLFNBQXdCLENBQUM7QUFDN0IsSUFBSSxhQUF3QixDQUFDO0FBRTdCLElBQUksV0FBb0IsQ0FBQztBQUN6QixJQUFJLEdBQVUsQ0FBQztBQUVmLHVEQUFLO0tBQ0EsTUFBTSxDQUFDLG1EQUFPLENBQUMsTUFBTSxFQUFFO0lBQ3BCLE1BQU0sRUFBRSx3REFBTSxDQUFDLEdBQUcsQ0FBQyxvREFBUSxDQUFDLFlBQVksQ0FBQztDQUM1QyxDQUFDO0tBQ0QsUUFBUSxDQUFDLGNBQUk7SUFDVixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsQ0FBQztJQUMzQixhQUFhLEdBQUcsMkRBQVMsQ0FBQyxLQUFLLENBQUM7SUFDaEMsU0FBUyxHQUFHLElBQUksQ0FBQztJQUVqQixXQUFXLEdBQUc7UUFDVix1REFBSyxDQUFDLEdBQUcsQ0FBQyxtREFBTyxDQUFDLEtBQUssQ0FBQztRQUN4Qix1REFBSyxDQUFDLEdBQUcsQ0FBQyxtREFBTyxDQUFDLElBQUksQ0FBQztLQUMxQixDQUFDO0lBRUYsR0FBRyxHQUFHLHVEQUFLLENBQUMsR0FBRyxDQUFDLG1EQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDakMsQ0FBQyxDQUFDO0tBQ0QsTUFBTSxDQUFDLGNBQUk7SUFFUixFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ1osU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsNkRBQXNCLENBQUMsQ0FBQztJQUNuRSxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0tBRUQsT0FBTyxDQUFDLHNEQUFVLENBQUMsSUFBSSxFQUFFLFVBQUMsTUFBTSxFQUFFLElBQUk7SUFDbkMsSUFBSSxVQUFVLEdBQWEsSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUMzQyxJQUFJLFNBQVMsR0FBYyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFDLElBQUksTUFBTSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFFdEIsSUFBSSxhQUFhLEdBQUc7UUFDaEIsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSw2REFBc0IsQ0FBQztJQUNqRSxDQUFDLENBQUM7SUFFRixhQUFhLEdBQUcsU0FBUyxDQUFDO0lBRTFCLGtCQUFrQjtJQUNsQixFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsSUFBSSxDQUFDLFNBQVMsSUFBSSxVQUFVLENBQUMsZUFBZSxDQUFDLDJEQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakYsTUFBTSxDQUFDLElBQUksQ0FBQyxnRUFBeUIsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUNsRCxNQUFNLENBQUMsY0FBYyxDQUFDLHNEQUFVLENBQUMsZUFBZSxFQUFFLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUV2RSxPQUFPLENBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNyQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0tBRUQsT0FBTyxDQUFDLHNEQUFVLENBQUMsZUFBZSxFQUFFLFVBQUMsTUFBTSxFQUFFLElBQUk7SUFDOUMsSUFBSSxVQUFVLEdBQWEsSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUMzQyxJQUFJLE1BQU0sR0FBRyxzREFBVSxDQUFDLElBQUksQ0FBQztJQUU3QixtQkFBbUI7SUFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNmLE1BQU0sQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFL0MsZ0VBQWdFO0lBQ2hFLEVBQUUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2RCxJQUFJLFNBQVMsR0FBRyxVQUFVLENBQUMsZUFBZSxDQUFDLDJEQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFM0QsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqQyx3RkFBd0Y7WUFDeEYsRUFBRSxDQUFDLENBQUMsdURBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO2dCQUNwQixJQUFJLGNBQWMsR0FBRyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUM5RCxJQUFJLENBQUMsU0FBUyxHQUFHLGNBQWMsSUFBSSxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsMkRBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLDJEQUFTLENBQUMsS0FBSyxDQUFDO1lBQzNHLENBQUM7WUFDRCxJQUFJLFFBQVEsR0FBRyxVQUFVLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUUxRCxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDL0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUM7Z0JBQzNCLE1BQU0sR0FBRyxzREFBVSxDQUFDLElBQUksQ0FBQztZQUM3QixDQUFDO1lBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsMkRBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNsRSxJQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUMsMkRBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDekQsTUFBTSxHQUFHLHNEQUFVLENBQUMsSUFBSSxDQUFDO1lBQzdCLENBQUM7UUFDTCxDQUFDO0lBQ0wsQ0FBQztJQUVELE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3BDLENBQUMsQ0FBQztLQUVELE9BQU8sQ0FBQyxzREFBVSxDQUFDLElBQUksRUFBRSxVQUFDLE1BQU0sRUFBRSxJQUFJO0lBQ25DLElBQUksTUFBTSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDdEIsSUFBSSxTQUFTLEdBQWMsSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQyxJQUFJLGFBQWEsR0FBRyxjQUFnQixXQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksNkRBQXNCLEVBQXJELENBQXFELENBQUM7SUFFMUYsaUVBQWlFO0lBQ2pFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsMkRBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUVsRSxNQUFNLENBQUMsSUFBSSxDQUFDLGdFQUF5QixFQUFFLDJEQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkQsTUFBTSxDQUFDLGNBQWMsQ0FBQyxzREFBVSxDQUFDLFdBQVcsRUFBRSxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFFbkUsT0FBTyxDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDdEMsQ0FBQyxDQUFDO0tBRUQsT0FBTyxDQUFDLHNEQUFVLENBQUMsV0FBVyxFQUFFLFVBQUMsTUFBTSxFQUFFLElBQUk7SUFDMUMsSUFBSSxVQUFVLEdBQWEsSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUUzQyxtQkFBbUI7SUFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNmLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUV6RCxFQUFFLENBQUMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsMkRBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25GLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFN0QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLE1BQU0sQ0FBQyxVQUFVLENBQUMsc0RBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDN0MsQ0FBQztJQUNMLENBQUM7SUFDRCxJQUFJLENBQUMsQ0FBQztRQUNGLE1BQU0sQ0FBQyxVQUFVLENBQUMsc0RBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDN0MsQ0FBQztBQUNMLENBQUMsQ0FBQztLQUVELE9BQU8sQ0FBQyxzREFBVSxDQUFDLElBQUksRUFBRSxVQUFDLE1BQU0sRUFBRSxJQUFJO0lBQ25DLElBQUksSUFBSSxHQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3ZDLElBQUksVUFBVSxHQUFhLElBQUksQ0FBQyxVQUFVLENBQUM7SUFFM0MsbUJBQW1CO0lBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDZixNQUFNLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRS9DLGlCQUFpQjtJQUNqQixPQUFPLENBQUMsTUFBTSxFQUFFLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUV0QyxtQkFBbUI7SUFDbkIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLDZEQUFzQixHQUFHLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEYsTUFBTSxDQUFDLFVBQVUsQ0FBQyxzREFBVSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN6QyxNQUFNLENBQUM7SUFDWCxDQUFDO0lBRUQsb0JBQW9CO0lBQ3BCLElBQUksR0FBRyxHQUFHLHVEQUFLLENBQUMsR0FBRyxDQUFDLG1EQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDakMsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxzREFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3JELENBQUM7QUFDTCxDQUFDLENBQUM7S0FFRCxPQUFPLENBQUMsc0RBQVUsQ0FBQyxJQUFJLEVBQUUsVUFBQyxNQUFNLEVBQUUsSUFBSTtJQUNuQyxJQUFJLFVBQVUsR0FBYSxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQzNDLElBQUksU0FBUyxHQUFjLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUMsSUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUV0QixrQkFBa0I7SUFDbEIsSUFBSSxlQUFlLEdBQUcsVUFBVSxDQUFDLGVBQWUsQ0FBQyxTQUFTLEtBQUssMkRBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLDJEQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQywyREFBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25ILElBQUksWUFBWSxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxlQUFlLENBQUMsMkRBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBRXRGLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQyxZQUFZO1FBQ3hCLENBQUMsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLElBQUksWUFBWSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEVBQUU7UUFDM0UsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUUsQ0FBRTtJQUVoQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ1YsaUNBQWlDO1FBQ2pDLElBQUksYUFBYSxHQUFHLGNBQWUsV0FBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLDZEQUFzQixFQUFyRCxDQUFxRCxDQUFDO1FBQ3pGLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0VBQXlCLEVBQUUsMkRBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNyRCxNQUFNLENBQUMsY0FBYyxDQUFDLHNEQUFVLENBQUMsSUFBSSxFQUFFLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNoRSxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0tBRUQsT0FBTyxDQUFDLHNEQUFVLENBQUMsSUFBSSxFQUFFLFVBQUMsTUFBTSxFQUFFLElBQUk7SUFDbkMsSUFBSSxLQUFLLEdBQWtCLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDdEMsSUFBSSxVQUFVLEdBQWEsSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUUzQyx5R0FBeUc7SUFDekcsSUFBSSxhQUFhLEdBQUcsVUFBVSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQywyREFBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsMkRBQVMsQ0FBQyxLQUFLLENBQUM7SUFFL0UsNkNBQTZDO0lBQzdDLElBQUksVUFBVSxHQUFHLFVBQVUsQ0FBQyxDQUFDLEtBQUssTUFBTSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUVyRixpRkFBaUY7SUFDakYsSUFBSSxZQUFZLEdBQUcsVUFBVSxDQUFDLGVBQWUsQ0FBQywyREFBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzVELElBQUksZUFBZSxHQUFHLFlBQVksQ0FBQyxlQUFlLENBQUMsYUFBYSxLQUFLLDJEQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQywyREFBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsMkRBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4SCxJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxJQUFJLGVBQWUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBRW5FLEVBQUUsQ0FBQyxDQUFDLFNBQVMsSUFBSSxLQUFLLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztRQUNuQyxNQUFNLENBQUMsVUFBVSxDQUFDLHNEQUFVLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFDRCxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQzdDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsT0FBTyxDQUFDLE1BQU0sRUFBRSxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDdEMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxzREFBVSxDQUFDLElBQUksRUFBRSxFQUFFLFNBQVMsRUFBRSxhQUFhLEVBQUUsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7QUFDTCxDQUFDLENBQUM7S0FFRCxPQUFPLENBQUMsc0RBQVUsQ0FBQyxJQUFJLEVBQUUsVUFBQyxNQUFNLEVBQUUsSUFBSTtJQUNuQyxJQUFJLEtBQUssR0FBa0IsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QyxJQUFJLFVBQVUsR0FBYSxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQzNDLElBQUksT0FBTyxHQUFHLGFBQWEsS0FBSywyREFBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyw2REFBc0IsQ0FBQyxDQUFDLENBQUMsNkRBQXNCLENBQUM7SUFFbEcsOERBQThEO0lBQzlELEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFakUsU0FBUyxHQUFHLElBQUksQ0FBQztRQUVqQixLQUFLLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLEtBQUssQ0FBQyxVQUFVLENBQUMsc0RBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFeEMsT0FBTyxDQUFDLE1BQU0sRUFBRSxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDMUMsQ0FBQztBQUNMLENBQUMsQ0FBQztLQUNELE9BQU8sQ0FBQyxzREFBVSxDQUFDLElBQUksRUFBRSxVQUFDLE1BQU0sRUFBRSxJQUFJO0lBQ25DLElBQUksU0FBUyxHQUFjLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztJQUMxQixPQUFPLENBQUMsTUFBTSxFQUFFLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUMxQyxDQUFDLENBQUMsQ0FBQztBQUVQLFVBQVU7QUFDVixpQkFBaUIsTUFBcUIsRUFBRSxTQUFvQixFQUFFLFFBQXlCO0lBQXpCLDJDQUF5QjtJQUNuRixJQUFNLGNBQWMsR0FBRyxHQUFHLENBQUM7SUFDM0IsSUFBSSxVQUFVLEdBQUcsd0RBQVksQ0FBQyxVQUFVLENBQUM7SUFFekMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDZCxVQUFVLEdBQUcsU0FBUyxLQUFLLDJEQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyx3REFBWSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsd0RBQVksQ0FBQyxhQUFhLENBQUM7SUFDMUcsQ0FBQztJQUNELElBQUksQ0FBQyxDQUFDO1FBQ0YsVUFBVSxHQUFHLFNBQVMsS0FBSywyREFBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsd0RBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLHdEQUFZLENBQUMsU0FBUyxDQUFDO0lBQ2xHLENBQUM7SUFFRCxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ1gsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLENBQUMsRUFBRSxVQUFVLEdBQUcsQ0FBQyxFQUFFLGNBQWMsQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFDRCxJQUFJLENBQUMsQ0FBQztRQUNGLE1BQU0sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzFDLENBQUM7QUFDTCxDQUFDO0FBRUQ7SUFDSSxNQUFNLENBQUMsQ0FBQyx1REFBSyxDQUFDLFdBQVcsSUFBSSx1REFBSyxDQUFDLE9BQU8sQ0FBQyxhQUFhLEtBQUssMkRBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLHFEQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxxREFBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDekcsQ0FBQztBQUVELDJCQUEyQixJQUFVO0lBQ2pDLElBQUksWUFBWSxHQUFHLHVEQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyx1REFBSyxDQUFDLGtCQUFrQixDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsRiw4Q0FBOEM7SUFDOUMsSUFBSSxJQUFJLEdBQVMsSUFBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBQyxJQUFJLFFBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFSLENBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUMxRCxNQUFNLENBQUMsWUFBWSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUN4QyxDQUFDOzs7Ozs7Ozs7OztBQ2xQaUY7QUFFWDtBQUV2RSxJQUFNLGNBQWMsR0FBRyxHQUFHLENBQUM7QUFFM0IsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDO0FBQ3BCLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQztBQUNwQixJQUFJLG9CQUFvQixHQUFHLENBQUMsQ0FBQztBQUU3Qix1REFBSztLQUNBLE1BQU0sQ0FBQyxtREFBTyxDQUFDLEdBQUcsRUFBRTtJQUNqQixNQUFNLEVBQUUsd0RBQU0sQ0FBQyxHQUFHLENBQUMsb0RBQVEsQ0FBQyxTQUFTLENBQUM7Q0FDekMsQ0FBQztLQUNELFFBQVEsQ0FBQyxjQUFJO0lBQ1YsZ0RBQWdEO0lBQ2hELElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxDQUFDO0lBQzNCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0FBQ3pCLENBQUMsQ0FBQztLQUNELE1BQU0sQ0FBQyxVQUFDLElBQUksRUFBRSxPQUFPO0lBQ2xCLHVDQUF1QztJQUN2QyxJQUFJLFVBQVUsR0FBRyx3REFBTSxDQUFDLEdBQUcsQ0FBQyxvREFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2hELFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzlFLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLG9CQUFvQixFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUN2RixDQUFDLENBQUM7S0FDRCxNQUFNLENBQUMsY0FBSTtJQUNSLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDVixvQkFBb0IsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFDRCxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNmLG9CQUFvQixFQUFFLENBQUM7SUFDM0IsQ0FBQztBQUNMLENBQUMsQ0FBQztLQUVELE9BQU8sQ0FBQyxzREFBVSxDQUFDLEdBQUcsRUFBRSxVQUFDLElBQUksRUFBRSxJQUFJO0lBQ2hDLElBQUksV0FBVyxHQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzlDLFdBQVcsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2xDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDNUIsQ0FBQyxDQUFDO0tBQ0QsT0FBTyxDQUFDLE1BQU0sRUFBRSxVQUFDLElBQUksRUFBRSxJQUFJO0lBQ3hCLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDZixJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDM0QsQ0FBQyxDQUFDO0tBQ0QsT0FBTyxDQUFDLGFBQWEsRUFBRSxVQUFDLElBQUksRUFBRSxJQUFJO0lBQy9CLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDaEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLENBQUM7SUFDNUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLEVBQUUsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzVELENBQUMsQ0FBQztLQUNELE9BQU8sQ0FBQyxjQUFjLEVBQUUsVUFBQyxJQUFJLEVBQUUsSUFBSTtJQUNoQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ2YsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsY0FBYyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzNELENBQUMsQ0FBQztLQUNELE9BQU8sQ0FBQyxhQUFhLEVBQUUsVUFBQyxJQUFJLEVBQUUsSUFBSTtJQUMvQixvQkFBb0IsR0FBRyxDQUFDLENBQUM7SUFDekIsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUNoQixJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDekQsQ0FBQyxDQUFDO0tBQ0QsT0FBTyxDQUFDLFdBQVcsRUFBRSxVQUFDLElBQUksRUFBRSxJQUFJO0lBQzdCLDBEQUFRLENBQUMsT0FBTyxDQUFDLGtEQUFNLENBQUMsV0FBVyxFQUFFLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDeEQsQ0FBQyxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzNEMko7QUFDakg7QUFDZ0M7QUFDbkM7QUFDVztBQUNGO0FBRXZELHVEQUFLO0tBQ0EsTUFBTSxDQUFDLG1EQUFPLENBQUMsVUFBVSxFQUFFO0lBQ3hCLFFBQVEsRUFBRSxJQUFJLDBEQUFRLENBQUMsNkRBQXNCLEVBQUUsNkRBQXNCLENBQUM7Q0FDekUsQ0FBQztLQUNELE9BQU8sQ0FBQztJQUNMLDBEQUFRLENBQUMsT0FBTyxDQUFDLGtEQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDekMsQ0FBQyxDQUFDLENBQUM7QUFFUCx1REFBSyxDQUFDLE1BQU0sQ0FBQyxtREFBTyxDQUFDLElBQUksRUFBRTtJQUN2QixNQUFNLEVBQUUsd0RBQU0sQ0FBQyxHQUFHLENBQUMsb0RBQVEsQ0FBQyxJQUFJLENBQUM7Q0FDcEMsQ0FBQyxDQUFDO0FBRUgsSUFBSSxXQUFtQixDQUFDO0FBQ3hCLElBQUksSUFBVSxDQUFDO0FBQ2YsSUFBSSxVQUFnQixDQUFDO0FBRXJCLElBQUksVUFBaUIsQ0FBQztBQUN0QixJQUFJLFdBQVcsR0FBRyx1REFBSyxDQUFDLEdBQUcsQ0FBQyxtREFBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzVDLElBQUksU0FBUyxHQUFHLHVEQUFLLENBQUMsR0FBRyxDQUFDLG1EQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFeEMsSUFBSSxXQUFXLEdBQUcsd0RBQVEsQ0FBQyxHQUFHLENBQUMsb0RBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUNyRCxJQUFJLFlBQVksR0FBRyx3REFBUSxDQUFDLEdBQUcsQ0FBQyxvREFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBRXZELHNEQUFJO0tBQ0MsTUFBTSxDQUFDLGtEQUFNLENBQUMsS0FBSyxDQUFDO0tBQ3BCLE9BQU8sQ0FBQyxVQUFDLElBQUksRUFBRSxJQUFJO0lBQ2hCLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQy9CLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBRTVCLFVBQVUsR0FBRyx1REFBSyxDQUFDLEdBQUcsQ0FBQyxtREFBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RDLFdBQVcsR0FBRyx1REFBSyxDQUFDLEdBQUcsQ0FBQyxtREFBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3hDLFNBQVMsR0FBRyx1REFBSyxDQUFDLEdBQUcsQ0FBQyxtREFBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRXBDLCtDQUErQztJQUMvQyxJQUFJLFlBQVksR0FBRyxJQUFJLDBFQUFnQixDQUFDLDZEQUFzQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3RFLElBQUksR0FBRyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDOUIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUV2QiwrREFBK0Q7SUFDL0QsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQyx1QkFBYSxJQUFJLG9CQUFhLENBQUMsTUFBTSxLQUFLLFdBQVcsRUFBcEMsQ0FBb0MsQ0FBQyxDQUFDO0lBRTdGLHdDQUF3QztJQUN4QyxJQUFJLFlBQVksR0FBRyxJQUFJLG9FQUFrQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsV0FBVyxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQzNFLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7SUFFdkIsVUFBVSxHQUFHLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNwQyxVQUFVLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyw2REFBc0IsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsNEJBQTRCO0lBQy9GLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxtREFBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFFeEQsV0FBVztJQUNYLElBQUksR0FBRyxHQUFHLHdEQUFNLENBQUMsR0FBRyxDQUFDLG9EQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbkMsSUFBSSxVQUFVLEdBQUcsd0RBQU0sQ0FBQyxHQUFHLENBQUMsb0RBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNqRCxJQUFJLE1BQU0sR0FBRyx3REFBTSxDQUFDLEdBQUcsQ0FBQyxvREFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRXpDLG9CQUFvQjtJQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLHdCQUFjO1FBRXZCLG9FQUFvRTtRQUNwRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUM1QyxNQUFNLENBQUM7UUFDWCxDQUFDO1FBRUQsSUFBSSxXQUFXLEdBQUcsY0FBYyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzNDLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFeEMsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3QyxNQUFNLENBQUMsVUFBVSxDQUFDLHNEQUFVLENBQUMsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQztZQUNyRyxNQUFNLENBQUM7UUFDWCxDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvQixvQkFBb0I7WUFDcEIsSUFBSSxRQUFRLEdBQUcsVUFBVSxDQUFDLGVBQWUsQ0FBQywyREFBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFELElBQUksVUFBVSxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUMsMkRBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUV4RCxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsVUFBVSxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMzQyxNQUFNLENBQUMsVUFBVSxDQUFDLHNEQUFVLENBQUMsSUFBSSxFQUFFLEVBQUUsU0FBUyxFQUFFLDJEQUFTLENBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO1lBQzVGLENBQUM7WUFDRCxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLENBQUMsVUFBVSxFQUFFLFNBQVMsQ0FBQyxDQUFDLElBQUksVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDbkYsTUFBTSxDQUFDLFVBQVUsQ0FBQyxzREFBVSxDQUFDLElBQUksRUFBRSxFQUFFLFNBQVMsRUFBRSwyREFBUyxDQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQztZQUM5RixDQUFDO1lBQ0QsSUFBSSxDQUFDLENBQUM7Z0JBQ0YsTUFBTSxDQUFDLFVBQVUsQ0FBQyxzREFBVSxDQUFDLElBQUksRUFBRSxFQUFFLFNBQVMsRUFBRSwyREFBUyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7WUFDdEUsQ0FBQztRQUNMLENBQUM7UUFDRCxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwQyxxQkFBcUI7WUFDckIsSUFBSSxTQUFTLEdBQUcsVUFBVSxDQUFDLGVBQWUsQ0FBQywyREFBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzVELElBQUksV0FBVyxHQUFHLFNBQVMsQ0FBQyxlQUFlLENBQUMsMkRBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUUxRCxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsVUFBVSxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM1QyxNQUFNLENBQUMsVUFBVSxDQUFDLHNEQUFVLENBQUMsSUFBSSxFQUFFLEVBQUUsU0FBUyxFQUFFLDJEQUFTLENBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO1lBQzlGLENBQUM7WUFDRCxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLGtCQUFrQixDQUFDLENBQUMsVUFBVSxFQUFFLFNBQVMsQ0FBQyxDQUFDLElBQUksV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDckYsTUFBTSxDQUFDLFVBQVUsQ0FBQyxzREFBVSxDQUFDLElBQUksRUFBRSxFQUFFLFNBQVMsRUFBRSwyREFBUyxDQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQztZQUNoRyxDQUFDO1lBQ0QsSUFBSSxDQUFDLENBQUM7Z0JBQ0YsTUFBTSxDQUFDLFVBQVUsQ0FBQyxzREFBVSxDQUFDLElBQUksRUFBRSxFQUFFLFNBQVMsRUFBRSwyREFBUyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7WUFDdkUsQ0FBQztRQUNMLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQztLQUNELE1BQU0sQ0FBQyxVQUFDLElBQUksRUFBRSxPQUFPO0lBQ2xCLElBQUksSUFBSSxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDeEIsSUFBSSxJQUFJLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUV4Qix3REFBTSxDQUFDLEdBQUcsQ0FBQyxvREFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3BFLHdEQUFNLENBQUMsR0FBRyxDQUFDLG9EQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFFMUQsSUFBSSxhQUFhLEdBQUcseUVBQXFCLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzdELGFBQWEsQ0FBQyxPQUFPLENBQUMsY0FBSSxJQUFJLCtEQUFNLENBQUMsR0FBRyxDQUFDLG9EQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLEdBQUcsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxHQUFHLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBbkgsQ0FBbUgsQ0FBQyxDQUFDO0FBQ3ZKLENBQUMsQ0FBQztLQUNELEtBQUssQ0FBQyxxREFBRyxDQUFDLElBQUksRUFBRSxVQUFDLElBQUksRUFBRSxFQUFFO0lBQ3RCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsdUJBQWEsSUFBSSxvQkFBYSxDQUFDLE1BQU0sS0FBSyxXQUFXLEVBQXBDLENBQW9DLENBQUMsQ0FBQztJQUU3RixJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUQsSUFBSSxRQUFRLEdBQUcsVUFBVSxDQUFDLGVBQWUsQ0FBQywyREFBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFELElBQUksV0FBVyxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUMsMkRBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUV6RCxJQUFJLGFBQWEsR0FBRyxRQUFRLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLElBQUksUUFBUSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBRXRHLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyw2REFBc0IsRUFBRSxNQUFNLENBQUMsQ0FBQyxHQUFHLDZEQUFzQixDQUFDLENBQUM7SUFDL0YsQ0FBQztJQUNELElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLDZEQUFzQixFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0RSxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0tBQ0QsS0FBSyxDQUFDLHFEQUFHLENBQUMsS0FBSyxFQUFFLFVBQUMsSUFBSSxFQUFFLEVBQUU7SUFDdkIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQyx1QkFBYSxJQUFJLG9CQUFhLENBQUMsTUFBTSxLQUFLLFdBQVcsRUFBcEMsQ0FBb0MsQ0FBQyxDQUFDO0lBRTdGLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1RCxJQUFJLFNBQVMsR0FBRyxVQUFVLENBQUMsZUFBZSxDQUFDLDJEQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUQsSUFBSSxZQUFZLEdBQUcsU0FBUyxDQUFDLGVBQWUsQ0FBQywyREFBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRTNELElBQUksY0FBYyxHQUFHLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsSUFBSSxTQUFTLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLENBQUM7SUFFekcsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxJQUFJLGNBQWMsQ0FBQyxDQUFDLENBQUM7UUFDMUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLDZEQUFzQixFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsNkRBQXNCLENBQUMsQ0FBQztJQUMvRixDQUFDO0lBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsNkRBQXNCLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7QUFDTCxDQUFDLENBQUM7S0FDRCxLQUFLLENBQUMscURBQUcsQ0FBQyxJQUFJLEVBQUUsVUFBQyxJQUFJLEVBQUUsRUFBRTtJQUN0QixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLHVCQUFhLElBQUksb0JBQWEsQ0FBQyxNQUFNLEtBQUssV0FBVyxFQUFwQyxDQUFvQyxDQUFDLENBQUM7SUFFN0YsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVELElBQUksUUFBUSxHQUFHLFVBQVUsQ0FBQyxlQUFlLENBQUMsMkRBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxRCxJQUFJLFNBQVMsR0FBRyxVQUFVLENBQUMsZUFBZSxDQUFDLDJEQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUQsSUFBSSxPQUFPLEdBQUcsVUFBVSxDQUFDLGVBQWUsQ0FBQywyREFBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZELElBQUksV0FBVyxHQUFHLE9BQU8sQ0FBQyxlQUFlLENBQUMsMkRBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxRCxJQUFJLFlBQVksR0FBRyxPQUFPLENBQUMsZUFBZSxDQUFDLDJEQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFNUQsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6QyxPQUFPO1FBQ1AsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsNkRBQXNCLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBQ0QsSUFBSSxDQUFDLENBQUM7UUFDRixPQUFPO1FBQ1AsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDbEUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLDZEQUFzQixFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0RSxDQUFDO1FBRUQsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxJQUFJLFlBQVksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDcEUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLDZEQUFzQixFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0RSxDQUFDO0lBQ0wsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDL0t1SDtBQUM3RTtBQUNWO0FBQzRDO0FBQzVCO0FBQ1Q7QUFDUztBQUV2RCxJQUFJLFVBQWdCLENBQUM7QUFDckIsSUFBSSxZQUFvQixDQUFDO0FBQ3pCLElBQUksV0FBbUIsQ0FBQztBQUN4QixJQUFJLE1BQWMsQ0FBQztBQUNuQixJQUFJLE1BQWMsQ0FBQztBQUNuQixJQUFJLGNBQXNCLENBQUM7QUFFM0IsSUFBTSxXQUFXLEdBQUcsQ0FBQyxDQUFDO0FBQ3RCLElBQU0sbUJBQW1CLEdBQUcsNkRBQXNCLEdBQUcsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFFdkUsSUFBSSxnQkFBZ0IsR0FBRyxDQUFDLENBQUM7QUFDekIsSUFBSSxlQUFlLEdBQUcsS0FBSyxDQUFDO0FBRTVCLHNEQUFJLENBQUMsTUFBTSxDQUFDLGtEQUFNLENBQUMsV0FBVyxDQUFDO0tBQzFCLE9BQU8sQ0FBQyxVQUFDLElBQUksRUFBRSxJQUFJO0lBQ2hCLFdBQVcsR0FBRyx3REFBUSxDQUFDLEdBQUcsQ0FBQyxvREFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2pELFlBQVksR0FBRyx3REFBUSxDQUFDLEdBQUcsQ0FBQyxvREFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBRW5ELElBQUksQ0FBQyxhQUFhLENBQUMsc0RBQWUsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLHNEQUFlLENBQUMsQ0FBQztJQUVoRixJQUFJLFlBQVksR0FBRyxJQUFJLG9FQUFrQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsV0FBVyxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQzNFLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDdkIsVUFBVSxHQUFHLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUVwQyx5Q0FBeUM7SUFDekMsSUFBSSxrQkFBa0IsR0FBRyxNQUFNLENBQUMsd0RBQVEsQ0FBQyxHQUFHLENBQUMsb0RBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBQ3hFLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLGdCQUFnQixLQUFLLGtCQUFrQixDQUFDLENBQUMsQ0FBQztRQUM5RCxrQkFBa0IsRUFBRSxDQUFDO1FBQ3JCLHdEQUFRLENBQUMsR0FBRyxDQUFDLG9EQUFRLENBQUMsZUFBZSxFQUFFLGtCQUFrQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztRQUN0QixrQkFBa0IsR0FBRyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELGtFQUFrRTtJQUNsRSxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ2hFLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsa0RBQVcsQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDLENBQUM7SUFDMUQsSUFBSSxNQUFNLEdBQUcsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxXQUFXLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzFGLElBQUksY0FBYyxHQUFHLEtBQUssQ0FBQztJQUUzQixFQUFFLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxRQUFRLEdBQUcsbUJBQW1CLENBQUMsR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBQzNELFdBQVcsRUFBRSxDQUFDO1FBQ2QsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsa0RBQVcsQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDLENBQUM7UUFDdEQsY0FBYyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxtQkFBbUIsQ0FBQyxHQUFHLFlBQVksQ0FBQyxHQUFHLG1CQUFtQixDQUFDLENBQUM7UUFDcEcsY0FBYyxHQUFHLElBQUksQ0FBQztJQUMxQixDQUFDO0lBRUQscUJBQXFCO0lBQ3JCLElBQUksVUFBVSxHQUFHLENBQUMsQ0FBQztJQUNuQixJQUFJLGVBQWUsR0FBRyxDQUFDLENBQUM7SUFDeEIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxrREFBVyxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQ3pDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsbURBQU8sQ0FBQyxTQUFTLEVBQUUsTUFBTSxHQUFHLGVBQWUsR0FBRyxtQkFBbUIsRUFBRSxNQUFNLEdBQUcsVUFBVSxHQUFHLG1CQUFtQixDQUFDLENBQUM7UUFDcEksSUFBSyxDQUFDLFdBQVcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLElBQUssQ0FBQyxPQUFPLEdBQUcsQ0FBQyxHQUFHLGtCQUFrQixDQUFDO1FBRTdDLGVBQWUsRUFBRSxDQUFDO1FBRWxCLEVBQUUsQ0FBQyxDQUFDLGVBQWUsS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLGVBQWUsR0FBRyxDQUFDLENBQUM7WUFDcEIsVUFBVSxFQUFFLENBQUM7UUFDakIsQ0FBQztJQUNMLENBQUM7SUFFRCxnQ0FBZ0M7SUFDaEMsRUFBRSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztRQUNqQixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLG1EQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDcEQsT0FBTyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUIsT0FBTyxDQUFDLENBQUMsR0FBRyxXQUFXLEdBQUcsV0FBVyxHQUFHLDZEQUFzQixDQUFDO1FBQ3pELE9BQVEsQ0FBQyxTQUFTLEdBQUcsMkRBQVMsQ0FBQyxFQUFFLENBQUM7UUFFeEMsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxtREFBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3RELFNBQVMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNsQixTQUFVLENBQUMsU0FBUyxHQUFHLDJEQUFTLENBQUMsSUFBSSxDQUFDO0lBQ2hELENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQztBQUVQLGNBQWM7QUFDZCx1REFBSztLQUNBLE1BQU0sQ0FBQyxtREFBTyxDQUFDLFNBQVMsRUFBRTtJQUN2QixNQUFNLEVBQUUsd0RBQU0sQ0FBQyxHQUFHLENBQUMsb0RBQVEsQ0FBQyxTQUFTLENBQUM7Q0FDekMsQ0FBQztLQUNELE9BQU8sQ0FBQyxjQUFJO0lBRVQsRUFBRSxDQUFDLENBQU8sSUFBSyxDQUFDLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7UUFDMUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUV2QixJQUFJLFdBQVcsR0FBaUIsSUFBSyxDQUFDLFdBQVcsQ0FBQztRQUNsRCxJQUFJLEtBQUssR0FBRyxzREFBSSxDQUFDLEdBQUcsQ0FBQyxrREFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRW5DLGlFQUFZLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxXQUFXLENBQUMsQ0FBQztRQUU5QyxnQkFBZ0IsR0FBRyxXQUFXLENBQUM7UUFDL0IsMERBQVEsQ0FBQyxPQUFPLENBQUMsa0RBQU0sQ0FBQyxLQUFLLEVBQUUsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUU3RCxlQUFlLEdBQUcsS0FBSyxDQUFDO0lBQzVCLENBQUM7QUFDTCxDQUFDLENBQUM7S0FDRCxNQUFNLENBQUMsVUFBQyxJQUFJLEVBQUUsT0FBTztJQUNsQixFQUFFLENBQUMsQ0FBTyxJQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUV0QixJQUFJLFdBQVcsR0FBaUIsSUFBSyxDQUFDLFdBQVcsQ0FBQztRQUNsRCxJQUFJLGFBQWEsR0FBRyx5RUFBcUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUV2RCxhQUFhLENBQUMsT0FBTyxDQUFDLGNBQUksSUFBSSwrREFBTSxDQUFDLEdBQUcsQ0FBQyxvREFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBbEcsQ0FBa0csQ0FBQyxDQUFDO0lBQ3RJLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQztBQUVQLGdCQUFnQjtBQUNoQix1REFBSztLQUNBLE1BQU0sQ0FBQyxtREFBTyxDQUFDLFdBQVcsRUFBRTtJQUN6QixNQUFNLEVBQUUsd0RBQU0sQ0FBQyxHQUFHLENBQUMsb0RBQVEsQ0FBQyxVQUFVLENBQUM7Q0FDMUMsQ0FBQztLQUNELE9BQU8sQ0FBQyxVQUFDLElBQUksRUFBRSxLQUFLO0lBQ2pCLEVBQUUsQ0FBQyxDQUFPLElBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ3RCLElBQUksU0FBUyxHQUFvQixJQUFLLENBQUMsU0FBUyxDQUFDO1FBQ2pELFVBQVUsQ0FBQyxDQUFDLElBQUksU0FBUyxLQUFLLDJEQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBRXhELEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQixVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyQixDQUFDO0lBQ0wsQ0FBQztBQUNMLENBQUMsQ0FBQztLQUNELE1BQU0sQ0FBQyxjQUFJO0lBQ1IsOENBQThDO0lBQzlDLElBQUksU0FBUyxHQUFHLENBQU8sSUFBSyxDQUFDLFNBQVMsS0FBSywyREFBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3pELElBQUksQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxHQUFHLEVBQUUsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBRTlFLG9EQUFvRDtJQUM5QyxJQUFLLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDLEdBQUcsbUJBQW1CLENBQUM7QUFDbkgsQ0FBQyxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7QUMxSStEO0FBQ3JCO0FBQ1c7QUFDZDtBQUU5QyxJQUFJLE1BQU0sR0FBVyxDQUFDLENBQUM7QUFDdkIsSUFBSSxNQUFNLEdBQVcsQ0FBQyxDQUFDO0FBRXZCLHNEQUFJO0tBQ0MsTUFBTSxDQUFDLGtEQUFNLENBQUMsS0FBSyxDQUFDO0tBQ3BCLE9BQU8sQ0FBQyxVQUFDLElBQUksRUFBRSxJQUFJO0lBQ2hCLElBQUksV0FBVyxHQUFHLHdEQUFRLENBQUMsR0FBRyxDQUFDLG9EQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDckQsSUFBSSxZQUFZLEdBQUcsd0RBQVEsQ0FBQyxHQUFHLENBQUMsb0RBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUV2RCxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsR0FBRywyREFBb0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzlELE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxHQUFHLDREQUFxQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFFaEUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxzREFBZSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsc0RBQWUsQ0FBQyxDQUFDO0FBQ3BGLENBQUMsQ0FBQztLQUNELE9BQU8sQ0FBQztJQUNMLDBEQUFRLENBQUMsT0FBTyxDQUFDLGtEQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDekMsQ0FBQyxDQUFDO0tBQ0QsS0FBSyxDQUFDLHFEQUFHLENBQUMsR0FBRyxFQUFFO0lBQ1osMERBQVEsQ0FBQyxPQUFPLENBQUMsa0RBQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUN6QyxDQUFDLENBQUM7S0FDRCxNQUFNLENBQUMsVUFBQyxJQUFJLEVBQUUsT0FBTztJQUNsQix3REFBTSxDQUFDLEdBQUcsQ0FBQyxvREFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQzdELENBQUMsQ0FBQyxDQUFDOzs7Ozs7O0FDM0JQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QiIsImZpbGUiOiJnYW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMjIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDI5ZjNlNDM5MDJlMzQyZmVhZThiIiwiaW1wb3J0IHsgR2FtZUNhbnZhc0hUTUwyRCwgR2FtZUNhbnZhc0NvbnRleHQsIEdhbWVDYW52YXNPcHRpb25zLCBHYW1lQ2FudmFzIH0gZnJvbSAnLi9jYW52YXMnO1xyXG5pbXBvcnQgeyBEaXJlY3Rpb24sIEtleSB9IGZyb20gJy4vZW51bSc7XHJcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnLi9pbnB1dCc7XHJcbmltcG9ydCB7IEdhbWVDb250ZXh0IH0gZnJvbSAnLi9nYW1lLWNvbnRleHQnO1xyXG5pbXBvcnQgeyBHYW1lUnVubmVyIH0gZnJvbSAnLi9nYW1lLXJ1bm5lcic7XHJcbmltcG9ydCB7IFJvb20gfSBmcm9tICcuL3Jvb20nO1xyXG5cclxuLy8gZXhwb3J0IHB1YmxpYyBtb2R1bGVzXHJcbmV4cG9ydCB7IEFjdG9yIH0gZnJvbSAnLi9hY3Rvcic7XHJcbmV4cG9ydCB7IEFjdG9ySW5zdGFuY2UgfSBmcm9tICcuL2FjdG9yLWluc3RhbmNlJztcclxuZXhwb3J0IHsgQm91bmRhcnkgfSBmcm9tICcuL2JvdW5kYXJ5JztcclxuZXhwb3J0IHsgRGlyZWN0aW9uLCBLZXkgfVxyXG5leHBvcnQgeyBJbnB1dCB9IGZyb20gJy4vaW5wdXQnO1xyXG5leHBvcnQgeyBHcmlkLCBHcmlkQ2VsbCB9IGZyb20gJy4vZ3JpZCc7XHJcbmV4cG9ydCB7IFJvb20gfSBmcm9tICcuL3Jvb20nO1xyXG5leHBvcnQgeyBHcmlkUm9vbUJlaGF2aW9yLCBWaWV3ZWRSb29tQmVoYXZpb3IgfSBmcm9tICcuL3Jvb20tZXh0JztcclxuZXhwb3J0IHsgU3ByaXRlIH0gZnJvbSAnLi9zcHJpdGUnO1xyXG5leHBvcnQgeyBTcHJpdGVBbmltYXRpb24sIFNwcml0ZVRyYW5zZm9ybWF0aW9uIH0gZnJvbSAnLi9zcHJpdGUtYW5pbWF0aW9uJztcclxuZXhwb3J0IHsgVmlldyB9IGZyb20gJy4vdmlldyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEdhbWVPcHRpb25zIHtcclxuICAgIGNhbnZhcz86IEdhbWVDYW52YXNPcHRpb25zO1xyXG4gICAgdGFyZ2V0RlBTPzogbnVtYmVyO1xyXG59XHJcblxyXG5jbGFzcyBWYXN0Z2FtZUhUTUwyRCB7XHJcbiAgICBwcml2YXRlIGNvbnRleHQ6IEdhbWVDb250ZXh0O1xyXG4gICAgcHJpdmF0ZSBydW5uZXI6IEdhbWVSdW5uZXI7XHJcblxyXG4gICAgaW5pdChjYW52YXNFbGVtZW50SUQsIG9wdGlvbnMpIHtcclxuICAgICAgICBJbnB1dC5pbml0KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGVsZW1lbnQgPSA8SFRNTENhbnZhc0VsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2FudmFzRWxlbWVudElEKTtcclxuICAgICAgICBsZXQgY2FudmFzOiBHYW1lQ2FudmFzID0gbmV3IEdhbWVDYW52YXNIVE1MMkQoZWxlbWVudCk7XHJcbiAgICAgICAgY2FudmFzLmluaXQob3B0aW9ucy5jYW52YXMpO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRleHQgPSBuZXcgR2FtZUNvbnRleHQoY2FudmFzKTtcclxuICAgICAgICB0aGlzLnJ1bm5lciA9IG5ldyBHYW1lUnVubmVyKG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENvbnRleHQoKTogR2FtZUNvbnRleHQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQocm9vbUlEOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLnNldFJvb20ocm9vbUlEKTtcclxuICAgICAgICB0aGlzLnJ1bm5lci5zdGFydCh0aGlzLmNvbnRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFJvb20ocm9vbUlEOiBzdHJpbmcsIHN0YXJ0QXJncz86IGFueSkge1xyXG4gICAgICAgIGxldCByb29tID0gUm9vbS5nZXQocm9vbUlEKTtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgcHJldmlvdXNSb29tID0gdGhpcy5jb250ZXh0LmdldEN1cnJlbnRSb29tKCk7XHJcbiAgICAgICAgaWYgKHByZXZpb3VzUm9vbSkge1xyXG4gICAgICAgICAgICBwcmV2aW91c1Jvb20uZW5kKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNvbnRleHQuc2V0Q3VycmVudFJvb20ocm9vbSk7XHJcblxyXG4gICAgICAgIHJvb20uX2NhbGxTdGFydChzdGFydEFyZ3MpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVmFzdGdhbWUge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgZ2FtZSA9IG5ldyBWYXN0Z2FtZUhUTUwyRCgpO1xyXG5cclxuICAgIHN0YXRpYyBpbml0KGNhbnZhc0VsZW1lbnRJRDogc3RyaW5nLCBvcHRpb25zOiBHYW1lT3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMuZ2FtZS5pbml0KGNhbnZhc0VsZW1lbnRJRCwgb3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHN0YXJ0KGluaXRpYWxSb29tSUQ6IHN0cmluZywgKTogVmFzdGdhbWVIVE1MMkQge1xyXG4gICAgICAgIHRoaXMuZ2FtZS5zdGFydChpbml0aWFsUm9vbUlEKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2FtZTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2V0Um9vbShyb29tSUQ6IHN0cmluZywgc3RhcnRBcmdzPzogYW55KSB7XHJcbiAgICAgICAgdGhpcy5nYW1lLnNldFJvb20ocm9vbUlELCBzdGFydEFyZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBfZ2V0Q29udGV4dCgpOiBHYW1lQ29udGV4dCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2FtZS5nZXRDb250ZXh0KCk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS92YXN0Z2FtZS50cyIsImV4cG9ydCBlbnVtIEFjdG9yU3RhdGUge1xyXG4gICAgQWN0aXZlID0gMSxcclxuICAgIERlc3Ryb3llZCA9IDIsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIERpcmVjdGlvbiB7XHJcbiAgICBSaWdodCA9IDAsXHJcbiAgICBEb3duID0gOTAsXHJcbiAgICBMZWZ0ID0gMTgwLFxyXG4gICAgVXAgPSAyNzAsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEdhbWVTdGF0ZSB7XHJcbiAgICBSdW5uaW5nID0gMSxcclxuICAgIFBhdXNlZCA9IDIsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEtleSB7XHJcbiAgICBBbnkgPSAtMSxcclxuICAgIFNwYWNlID0gMzIsXHJcbiAgICBMZWZ0ID0gMzcsXHJcbiAgICBVcCA9IDM4LFxyXG4gICAgUmlnaHQgPSAzOSxcclxuICAgIERvd24gPSA0MCxcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL2VudW0udHMiLCJleHBvcnQgZW51bSBTZXR0aW5ncyB7XHJcbiAgICBDYW52YXNXaWR0aCA9ICdDYW52YXNXaWR0aCcsXHJcbiAgICBDYW52YXNIZWlnaHQgPSAnQ2FudmFzSGVpZ2h0JyxcclxuICAgIFN0YWNrbW9Qcm9ncmVzcyA9ICdTdGFja21vUHJvZ3Jlc3MnLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBBY3RvcklEIHtcclxuICAgIEV4aXRCdXR0b24gPSAnQmFja0J1dHRvbicsXHJcbiAgICBCbG9jayA9ICdCbG9jaycsXHJcbiAgICBMZXZlbEljb24gPSAnTGV2ZWxJY29uJyxcclxuICAgIFBsYXllciA9ICdQbGF5ZXInLFxyXG4gICAgU2Nyb2xsQXJyb3cgPSAnU2Nyb2xsQXJyb3cnLFxyXG4gICAgVGl0bGUgPSAnVGl0bGUnLFxyXG4gICAgV2FsbCA9ICdXYWxsJyxcclxuICAgIFdpbiA9ICdXaW4nLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBSb29tSUQge1xyXG4gICAgVGl0bGUgPSAnVGl0bGUnLFxyXG4gICAgTGV2ZWxTZWxlY3QgPSAnTGV2ZWxTZWxlY3QnLFxyXG4gICAgTGV2ZWwgPSAnTGV2ZWwnLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBTcHJpdGVJRCB7XHJcbiAgICBBcnJvd1NoZWV0ID0gJ0Fycm93cycsXHJcbiAgICBEaWdpdHMgPSAnRGlnaXRzJyxcclxuICAgIERvb3JTaGVldCA9ICdEb29yU2hlZXQnLFxyXG4gICAgQm94ID0gJ0JveCcsXHJcbiAgICBIVUQgPSAnSFVEJyxcclxuICAgIExldmVsSWNvbiA9ICdMZXZlbEljb24nLFxyXG4gICAgU3RhY2ttb1NoZWV0ID0gJ1N0YWNrbW9TaGVldCcsXHJcbiAgICBUZXh0U2hlZXQgPSAnVGV4dFNoZWV0JyxcclxuICAgIFRpdGxlID0gJ1RpdGxlJyxcclxuICAgIFdhbGwgPSAnV2FsbCcsXHJcbiAgICBFeGl0QnV0dG9uID0gJ1gnLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBHYW1lQWN0aW9uIHtcclxuICAgIERyb3AgPSAnRHJvcCcsXHJcbiAgICBGYWxsID0gJ0ZhbGwnLFxyXG4gICAgU3RvcEZhbGxpbmcgPSAnU3RvcEZhbGxpbmcnLFxyXG4gICAgSnVtcCA9ICdKdW1wJyxcclxuICAgIExpZnQgPSAnTGlmdCcsXHJcbiAgICBNb3ZlID0gJ01vdmUnLFxyXG4gICAgQ2hlY2tTdG9wTW92aW5nID0gJ0NoZWNrU3RvcE1vdmluZycsXHJcbiAgICBTdG9wID0gJ1N0b3AnLFxyXG4gICAgVHVybiA9ICdUdXJuJyxcclxuICAgIFdpbiA9ICdXaW4nLFxyXG59XHJcblxyXG4vLyBmcm9tIHRvcCByb3cgb2YgTkVTIGNvbG9yIHBhbGV0dGUgKFRPRE86IHJlc3Qgb2YgdGhlbSlcclxuZXhwb3J0IGVudW0gTGV2ZWxCZ0NvbG9yIHtcclxuICAgIERhcmtUZWFsID0gJyMwMDE4MjAnLFxyXG4gICAgVGVhbCA9ICcjMDA2MDcwJyxcclxuICAgIERhcmtHcmVlbiA9ICcjMDAxODAwJyxcclxuICAgIEdyZWVuID0gJyMwODU4MDAnLFxyXG4gICAgRGFya1JlZCA9ICcjNTgwMDAwJyxcclxuICAgIFJlZCA9ICcjZDAxMDAwJyxcclxuICAgIERhcmtQdXJwbGUgPSAnIzM4MDA1MCcsXHJcbiAgICBQdXJwbGUgPSAnI2EwMDhhOCcsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFN0YWNrbW9GcmFtZSB7XHJcbiAgICBTdGFuZExlZnQgPSAwLFxyXG4gICAgTW92ZUxlZnQxID0gMSxcclxuICAgIE1vdmVMZWZ0MiA9IDIsXHJcbiAgICBTdGFuZFJpZ2h0ID0gMyxcclxuICAgIE1vdmVSaWdodDEgPSA0LFxyXG4gICAgTW92ZVJpZ2h0MiA9IDUsXHJcbiAgICBTdGFuZEhvbGRMZWZ0ID0gNixcclxuICAgIE1vdmVIb2xkTGVmdDEgPSA3LFxyXG4gICAgTW92ZUhvbGRMZWZ0MiA9IDgsXHJcbiAgICBTdGFuZEhvbGRSaWdodCA9IDksXHJcbiAgICBNb3ZlSG9sZFJpZ2h0MSA9IDEwLFxyXG4gICAgTW92ZUhvbGRkUmlnaHQyID0gMTEsXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2dhbWUvdXRpbC9lbnVtLnRzIiwiZXhwb3J0IGNvbnN0IEJsYWNrID0gJyMwMDAnO1xyXG5leHBvcnQgY29uc3QgQ2FudmFzTWF4V2lkdGggPSAxMDI0O1xyXG5leHBvcnQgY29uc3QgQ2FudmFzTWF4SGVpZ2h0ID03Njg7XHJcbmV4cG9ydCBjb25zdCBHcmlkQ2VsbFNpemUgPSA2NDtcclxuZXhwb3J0IGNvbnN0IEJsb2NrRmFsbFNwZWVkID0gODtcclxuZXhwb3J0IGNvbnN0IFBsYXllck1vdmVTcGVlZCA9IDQ7XHJcbmV4cG9ydCBjb25zdCBQbGF5ZXJKdW1wU3BlZWQgPSA4O1xyXG5leHBvcnQgY29uc3QgUGxheWVyRmFsbFNwZWVkID0gODtcclxuZXhwb3J0IGNvbnN0IFRpdGxlV2lkdGggPSAzNjA7XHJcbmV4cG9ydCBjb25zdCBUaXRsZUhlaWdodCA9IDE1MDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZ2FtZS91dGlsL2NvbnN0YW50cy50cyIsImltcG9ydCB7IEtleSB9IGZyb20gJy4vZW51bSc7XHJcblxyXG5leHBvcnQgY2xhc3MgSW5wdXQge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgY2xpY2tIYW5kbGVyczogQ29uY3JldGVFdmVudEhhbmRsZXI8UG9pbnRlcklucHV0RXZlbnQ+W10gPSBbXTtcclxuICAgIHByaXZhdGUgc3RhdGljIGtleWJvYXJkSGFuZGxlcnM6IHsgW2NvZGU6IG51bWJlcl06IENvbmNyZXRlRXZlbnRIYW5kbGVyPEtleWJvYXJkRXZlbnQ+IH0gPSB7fTtcclxuICAgIHByaXZhdGUgc3RhdGljIGtleWJvYXJkQWN0aXZpdHk6IHsgW2NvZGU6IG51bWJlcl06IGJvb2xlYW4gfSA9IHt9O1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIF9hY3RpdmVQb2ludGVyRXZlbnQ6IFBvaW50ZXJJbnB1dEV2ZW50ID0gbnVsbDtcclxuICAgIHN0YXRpYyBnZXQgY2xpY2tBY3RpdmUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuICEhSW5wdXQuX2FjdGl2ZVBvaW50ZXJFdmVudDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IGFjdGl2ZVBvaW50ZXJFdmVudCgpOiBQb2ludGVySW5wdXRFdmVudCB7XHJcbiAgICAgICAgcmV0dXJuIElucHV0Ll9hY3RpdmVQb2ludGVyRXZlbnQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHN0YXRpYyBpbml0KCkge1xyXG5cclxuICAgICAgICBmdW5jdGlvbiB0cmFja0FjdGl2ZU1vdXNlUG9zaXRpb24odGhpczogYW55LCBldjogTW91c2VFdmVudCkge1xyXG4gICAgICAgICAgICBJbnB1dC5fYWN0aXZlUG9pbnRlckV2ZW50LmN1cnJlbnRYID0gZ2V0TW91c2VFdmVudFgoZXYpO1xyXG4gICAgICAgICAgICBJbnB1dC5fYWN0aXZlUG9pbnRlckV2ZW50LmN1cnJlbnRZID0gZ2V0TW91c2VFdmVudFkoZXYpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHRyYWNrQWN0aXZlVG91Y2hQb3NpdGlvbihldjogVG91Y2hFdmVudCkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5Lm9ubW91c2Vtb3ZlID0gbnVsbDtcclxuICAgICAgICAgICAgSW5wdXQuX2FjdGl2ZVBvaW50ZXJFdmVudC5jdXJyZW50WCA9IGdldFRvdWNoRXZlbnRYKGV2KTtcclxuICAgICAgICAgICAgSW5wdXQuX2FjdGl2ZVBvaW50ZXJFdmVudC5jdXJyZW50WSA9IGdldFRvdWNoRXZlbnRZKGV2KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBsZXQgcmFpc2VQb2ludGVyRXZlbnQgPSAoZXY6IFBvaW50ZXJJbnB1dEV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChJbnB1dC5fYWN0aXZlUG9pbnRlckV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIElucHV0Ll9hY3RpdmVQb2ludGVyRXZlbnQgPSBldjtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5vbm1vdXNlbW92ZSA9ICB0cmFja0FjdGl2ZU1vdXNlUG9zaXRpb247XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkub250b3VjaG1vdmUgPSB0cmFja0FjdGl2ZVRvdWNoUG9zaXRpb247XHJcblxyXG4gICAgICAgICAgICBpZiAoSW5wdXQuY2xpY2tIYW5kbGVycy5sZW5ndGgpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBJbnB1dC5jbGlja0hhbmRsZXJzLmZvckVhY2goKGhhbmRsZXI6IENvbmNyZXRlRXZlbnRIYW5kbGVyPFBvaW50ZXJJbnB1dEV2ZW50PikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChoYW5kbGVyLmlzQWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXIuY2FsbGJhY2soZXYpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgbGV0IGVuZFBvaW50ZXJFdmVudCA9ICgpID0+IHtcclxuICAgICAgICAgICAgSW5wdXQuX2FjdGl2ZVBvaW50ZXJFdmVudCA9IG51bGw7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkub25tb3VzZW1vdmUgPSBudWxsO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5Lm9udG91Y2htb3ZlID0gbnVsbDtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyByZWdpc3RlciBtb3VzZS90b3VjaCBpbnB1dCBcclxuICAgICAgICBkb2N1bWVudC5ib2R5Lm9ubW91c2Vkb3duID0gZnVuY3Rpb24odGhpczogYW55LCBldjogTW91c2VFdmVudCkge1xyXG4gICAgICAgICAgICByYWlzZVBvaW50ZXJFdmVudChQb2ludGVySW5wdXRFdmVudC5mcm9tTW91c2VFdmVudChldikpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5vbnRvdWNoc3RhcnQgPSBmdW5jdGlvbiAoZXY6IFRvdWNoRXZlbnQpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5vbm1vdXNlZG93biA9IG51bGw7XHJcbiAgICAgICAgICAgIHJhaXNlUG9pbnRlckV2ZW50KFBvaW50ZXJJbnB1dEV2ZW50LmZyb21Ub3VjaEV2ZW50KGV2KSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5Lm9ubW91c2V1cCA9IGVuZFBvaW50ZXJFdmVudDtcclxuICAgICAgICBkb2N1bWVudC5ib2R5Lm9udG91Y2hlbmQgPSBlbmRQb2ludGVyRXZlbnQ7XHJcblxyXG4gICAgICAgIC8vIHJlZ2lzdGVyIGtleWJvYXJkIGlucHV0XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5vbmtleWRvd24gPSAoZXY6IEtleWJvYXJkRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgbGV0IGtleUNvZGUgPSBldi5rZXlDb2RlIHx8IGV2LmNvZGVcclxuICAgICAgICAgICAgbGV0IGhhbmRsZXI6IENvbmNyZXRlRXZlbnRIYW5kbGVyPEtleWJvYXJkRXZlbnQ+ID0gdGhpcy5rZXlib2FyZEhhbmRsZXJzW2tleUNvZGVdO1xyXG5cclxuICAgICAgICAgICAgaWYgKGhhbmRsZXIgJiYgaGFuZGxlci5pc0FjdGl2ZSAmJiAhdGhpcy5rZXlib2FyZEFjdGl2aXR5W2tleUNvZGVdKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmtleWJvYXJkQWN0aXZpdHlba2V5Q29kZV0gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlci5jYWxsYmFjayhldik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBnbG9iYWxIYW5kbGVyID0gdGhpcy5rZXlib2FyZEhhbmRsZXJzW0tleS5BbnldO1xyXG4gICAgICAgICAgICBpZiAoZ2xvYmFsSGFuZGxlciAmJiBnbG9iYWxIYW5kbGVyLmlzQWN0aXZlICYmICF0aGlzLmtleWJvYXJkQWN0aXZpdHlbS2V5LkFueV0pICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmtleWJvYXJkQWN0aXZpdHlbS2V5LkFueV0gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZ2xvYmFsSGFuZGxlci5jYWxsYmFjayhldik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkub25rZXl1cCA9IChldjogS2V5Ym9hcmRFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQga2V5Q29kZSA9IGV2LmtleUNvZGUgfHwgZXYuY29kZVxyXG4gICAgICAgICAgICBsZXQgaGFuZGxlcjogQ29uY3JldGVFdmVudEhhbmRsZXI8S2V5Ym9hcmRFdmVudD4gPSB0aGlzLmtleWJvYXJkSGFuZGxlcnNba2V5Q29kZV07XHJcbiAgICAgICAgICAgIHRoaXMua2V5Ym9hcmRBY3Rpdml0eVtLZXkuQW55XSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgaWYgKGhhbmRsZXIgJiYgaGFuZGxlci5pc0FjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5rZXlib2FyZEFjdGl2aXR5W2tleUNvZGVdID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyByZWdpc3RlckNsaWNrSGFuZGxlcihjYWxsYmFjazogKGV2ZW50OiBQb2ludGVySW5wdXRFdmVudCkgPT4gdm9pZCk6IENvbmNyZXRlRXZlbnRIYW5kbGVyPFBvaW50ZXJJbnB1dEV2ZW50PiB7XHJcbiAgICAgICAgbGV0IGNsaWNrSGFuZGxlciA9IG5ldyBDb25jcmV0ZUV2ZW50SGFuZGxlcjxQb2ludGVySW5wdXRFdmVudD4oY2FsbGJhY2spOztcclxuICAgICAgICBJbnB1dC5jbGlja0hhbmRsZXJzLnB1c2goY2xpY2tIYW5kbGVyKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNsaWNrSGFuZGxlcjtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcmVnaXN0ZXJLZXlIYW5kbGVyKGtleTogS2V5LCBjYWxsYmFjazogKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiB2b2lkKTogQ29uY3JldGVFdmVudEhhbmRsZXI8S2V5Ym9hcmRFdmVudD4ge1xyXG4gICAgICAgIGxldCBrZXlIYW5kbGVyID0gbmV3IENvbmNyZXRlRXZlbnRIYW5kbGVyPEtleWJvYXJkRXZlbnQ+KGNhbGxiYWNrKTtcclxuICAgICAgICBJbnB1dC5rZXlib2FyZEhhbmRsZXJzW2tleV0gPSBrZXlIYW5kbGVyXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGtleUhhbmRsZXI7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGtleURvd24oa2V5OiBLZXkpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gISF0aGlzLmtleWJvYXJkQWN0aXZpdHlba2V5XTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBFdmVudEhhbmRsZXIge1xyXG4gICAgY2FsbGJhY2s6IChldmVudDogYW55KSA9PiB2b2lkO1xyXG4gICAgZGlzcG9zZTogKCkgPT4gdm9pZDtcclxuICAgIHNsZWVwOiAoKSA9PiB2b2lkO1xyXG4gICAgd2FrZTogKCkgPT4gdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbmNyZXRlRXZlbnRIYW5kbGVyPFQ+IGltcGxlbWVudHMgRXZlbnRIYW5kbGVyIHtcclxuICAgIGlzQWxpdmU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgaXNBd2FrZTogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIGNhbGxiYWNrOiAoZXZlbnQ6IFQpID0+IHZvaWQpIHtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaXNBY3RpdmUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNBbGl2ZSAmJiB0aGlzLmlzQXdha2U7XHJcbiAgICB9XHJcbiAgICBkaXNwb3NlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaXNBbGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgc2xlZXAoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pc0F3YWtlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICB3YWtlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaXNBd2FrZSA9IHRydWU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQb2ludGVySW5wdXRFdmVudCB7XHJcbiAgICB4OiBudW1iZXI7XHJcbiAgICB5OiBudW1iZXI7XHJcblxyXG4gICAgY3VycmVudFg6IG51bWJlcjtcclxuICAgIGN1cnJlbnRZOiBudW1iZXI7XHJcblxyXG4gICAgc3RhdGljIGZyb21Nb3VzZUV2ZW50KGV2OiBNb3VzZUV2ZW50KTogUG9pbnRlcklucHV0RXZlbnQge1xyXG4gICAgICAgIGxldCB4ID0gZ2V0TW91c2VFdmVudFgoZXYpO1xyXG4gICAgICAgIGxldCB5ID0gZ2V0TW91c2VFdmVudFkoZXYpO1xyXG4gICAgICAgIHJldHVybiB7IHg6IHgsIHk6IHksIGN1cnJlbnRYOiB4LCBjdXJyZW50WTogeSB9O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBmcm9tVG91Y2hFdmVudChldjogVG91Y2hFdmVudCk6IFBvaW50ZXJJbnB1dEV2ZW50IHtcclxuICAgICAgICBsZXQgeCA9IGdldFRvdWNoRXZlbnRYKGV2KTtcclxuICAgICAgICBsZXQgeSA9IGdldFRvdWNoRXZlbnRZKGV2KTtcclxuICAgICAgICByZXR1cm4geyB4OiB4LCB5OiB5LCBjdXJyZW50WDogeCwgY3VycmVudFk6IHkgfTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0TW91c2VFdmVudFgoZXY6IE1vdXNlRXZlbnQpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIGV2Lm9mZnNldFg7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldE1vdXNlRXZlbnRZKGV2OiBNb3VzZUV2ZW50KTogbnVtYmVyIHtcclxuICAgIHJldHVybiBldi5vZmZzZXRZO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRUb3VjaEV2ZW50WChldjogVG91Y2hFdmVudCk6IG51bWJlciB7XHJcbiAgICBsZXQgdG91Y2ggPSBldi50b3VjaGVzWzBdO1xyXG4gICAgcmV0dXJuIHRvdWNoID8gdG91Y2guY2xpZW50WCA6IDBcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VG91Y2hFdmVudFkoZXY6IFRvdWNoRXZlbnQpOiBudW1iZXIge1xyXG4gICAgbGV0IHRvdWNoID0gZXYudG91Y2hlc1swXTtcclxuICAgIHJldHVybiB0b3VjaCA/IHRvdWNoLmNsaWVudFkgOiAwXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL2lucHV0LnRzIiwiaW1wb3J0IHsgR2FtZUNhbnZhc0NvbnRleHQgfSBmcm9tICcuL2NhbnZhcyc7XHJcbmltcG9ydCB7IFNwcml0ZSwgRHJhd1Nwcml0ZU9wdGlvbnMgfSBmcm9tICcuL3Nwcml0ZSc7XHJcblxyXG5leHBvcnQgZW51bSBTcHJpdGVUcmFuc2Zvcm1hdGlvbiB7XHJcbiAgICBPcGFjaXR5ID0gMCxcclxuICAgIEZyYW1lID0gMSxcclxuICAgIFRpbGVYID0gMixcclxuICAgIFRpbGVZID0gMyxcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNwcml0ZUFuaW1hdGlvbiB7XHJcbiAgICBwcml2YXRlIHRyYW5zZm9ybWF0aW9uczogeyBbaW5kZXg6IG51bWJlcl06IFNwcml0ZVRyYW5zZm9ybWF0aW9uIH0gPSB7fTtcclxuICAgIHByaXZhdGUgdGltZXI6IGFueTtcclxuXHJcbiAgICBkZXB0aDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBwcml2YXRlIF9wYXVzZWQ6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgZ2V0IHBhdXNlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcGF1c2VkO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHJlYWRvbmx5IHNwcml0ZTogU3ByaXRlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRUcmFuc2Zvcm0oU3ByaXRlVHJhbnNmb3JtYXRpb24uRnJhbWUsIDApO1xyXG4gICAgICAgIHRoaXMuc2V0VHJhbnNmb3JtKFNwcml0ZVRyYW5zZm9ybWF0aW9uLk9wYWNpdHksIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyLCBkZWxheT86IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMuc2V0VHJhbnNmb3JtKFNwcml0ZVRyYW5zZm9ybWF0aW9uLkZyYW1lLCBzdGFydCk7XHJcblxyXG4gICAgICAgIHRoaXMuX3BhdXNlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmdldFRyYW5zZm9ybShTcHJpdGVUcmFuc2Zvcm1hdGlvbi5GcmFtZSkgPT09IGVuZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRUcmFuc2Zvcm0oU3ByaXRlVHJhbnNmb3JtYXRpb24uRnJhbWUsIHN0YXJ0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudHJhbnNmb3JtKFNwcml0ZVRyYW5zZm9ybWF0aW9uLkZyYW1lLCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIGRlbGF5KTtcclxuICAgIH1cclxuXHJcbiAgICBzdG9wKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3BhdXNlZCA9IHRydWU7XHJcbiAgICAgICAgaWYgKHRoaXMudGltZXIpIHtcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RnJhbWUoZnJhbWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc3RvcCgpO1xyXG4gICAgICAgIHRoaXMuc2V0VHJhbnNmb3JtKFNwcml0ZVRyYW5zZm9ybWF0aW9uLkZyYW1lLCBmcmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdyhjYW52YXNDb250ZXh0OiBHYW1lQ2FudmFzQ29udGV4dCwgeDogbnVtYmVyLCB5OiBudW1iZXIsIG9wdGlvbnM6IERyYXdTcHJpdGVPcHRpb25zID0ge30pOiB2b2lkIHtcclxuICAgICAgICAvLyBmcmFtZVxyXG4gICAgICAgIGxldCBmcmFtZSA9IHRoaXMuZ2V0VHJhbnNmb3JtKFNwcml0ZVRyYW5zZm9ybWF0aW9uLkZyYW1lKTtcclxuICAgICAgICBpZiAob3B0aW9ucy5mcmFtZSAhPT0gbnVsbCAmJiBvcHRpb25zLmZyYW1lICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRUcmFuc2Zvcm0oU3ByaXRlVHJhbnNmb3JtYXRpb24uRnJhbWUsIG9wdGlvbnMuZnJhbWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gb3BhY2l0eVxyXG4gICAgICAgIGxldCBvcGFjaXR5ID0gdGhpcy5nZXRUcmFuc2Zvcm0oU3ByaXRlVHJhbnNmb3JtYXRpb24uT3BhY2l0eSk7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMuZnJhbWUgIT09IG51bGwgJiYgb3B0aW9ucy5mcmFtZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VHJhbnNmb3JtKFNwcml0ZVRyYW5zZm9ybWF0aW9uLk9wYWNpdHksIG9wdGlvbnMub3BhY2l0eSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgW3NyY1gsIHNyY1ldID0gdGhpcy5zcHJpdGUuZ2V0RnJhbWVJbWFnZVNvdXJjZUNvb3JkcyhmcmFtZSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY2FudmFzQ29udGV4dC5kcmF3SW1hZ2UodGhpcy5zcHJpdGUuaW1hZ2UsIHNyY1gsIHNyY1ksIHgsIHksIHRoaXMuc3ByaXRlLndpZHRoLCB0aGlzLnNwcml0ZS5oZWlnaHQsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHRyYW5zZm9ybWF0aW9uc1xyXG4gICAgZ2V0VHJhbnNmb3JtKHRyYW5zZm9ybWF0aW9uOiBTcHJpdGVUcmFuc2Zvcm1hdGlvbik6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHJhbnNmb3JtYXRpb25zW3RyYW5zZm9ybWF0aW9uXTtcclxuICAgIH1cclxuXHJcbiAgICB0cmFuc2Zvcm0odHJhbnNmb3JtYXRpb246IFNwcml0ZVRyYW5zZm9ybWF0aW9uLCBkZWx0YTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy50cmFuc2Zvcm1hdGlvbnNbdHJhbnNmb3JtYXRpb25dICs9IGRlbHRhO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFRyYW5zZm9ybSh0cmFuc2Zvcm1hdGlvbjogU3ByaXRlVHJhbnNmb3JtYXRpb24sIHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnRyYW5zZm9ybWF0aW9uc1t0cmFuc2Zvcm1hdGlvbl0gPSB2YWx1ZTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL3Nwcml0ZS1hbmltYXRpb24udHMiLCJleHBvcnQgY2xhc3MgUmVnaXN0cnkge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgdmFsdWVzOiB7IFtpZDogc3RyaW5nXTogYW55IH0gPSB7fTtcclxuXHJcbiAgICBzdGF0aWMgZ2V0KGlkOiBzdHJpbmcpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlc1tpZF07XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGxvYWQoaWQ6IHN0cmluZyk6IGFueSB7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbaWRdID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oaWQpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlc1tpZF07XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNldChpZDogc3RyaW5nLCB2YWw6IGFueSwgcGVyc2lzdCA9IGZhbHNlKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy52YWx1ZXNbaWRdID0gdmFsO1xyXG4gICAgICAgIGlmIChwZXJzaXN0KSB7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGlkLCB2YWwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9nYW1lL3V0aWwvcmVnaXN0cnkudHMiLCJpbXBvcnQgeyBBY3RvciB9IGZyb20gJy4vYWN0b3InO1xyXG5pbXBvcnQgeyBBY3Rvckluc3RhbmNlIH0gZnJvbSAnLi9hY3Rvci1pbnN0YW5jZSc7XHJcbmltcG9ydCB7IEdhbWVDYW52YXNDb250ZXh0IH0gZnJvbSAnLi9jYW52YXMnO1xyXG5pbXBvcnQgeyBLZXkgfSBmcm9tICcuL2VudW0nO1xyXG5pbXBvcnQgeyBFdmVudEhhbmRsZXIsIElucHV0LCBQb2ludGVySW5wdXRFdmVudCB9IGZyb20gJy4vaW5wdXQnO1xyXG5pbXBvcnQgeyBEcmF3U3ByaXRlT3B0aW9ucywgU3ByaXRlIH0gZnJvbSAnLi9zcHJpdGUnO1xyXG5pbXBvcnQgeyBWYXN0Z2FtZSB9IGZyb20gJy4vdmFzdGdhbWUnO1xyXG5pbXBvcnQgeyBBY3RvcklEIH0gZnJvbSAnLi4vZ2FtZS91dGlsL2VudW0nO1xyXG5cclxuaW50ZXJmYWNlIFJvb21MaWZlY3ljbGVDYWxsYmFjayB7XHJcbiAgICAoc2VsZkluc3RhbmNlOiBSb29tLCBhcmdzPzogYW55KTogdm9pZDtcclxufVxyXG5cclxuaW50ZXJmYWNlIFJvb21MaWZlY3ljbGVEcmF3Q2FsbGJhY2sge1xyXG4gICAgKHNlbGZJbnN0YW5jZTogUm9vbSwgY29udGV4dDogR2FtZUNhbnZhc0NvbnRleHQsIGFyZ3M/OiBhbnkpOiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQmFja2dyb3VuZCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcmVhZG9ubHkgY29sb3I6IHN0cmluZyxcclxuICAgICAgICByZWFkb25seSBjYW52YXNDb2xvcjogc3RyaW5nID0gJyMwMDAnLCBcclxuICAgICAgICByZWFkb25seSB3aWR0aDogbnVtYmVyLCBcclxuICAgICAgICByZWFkb25seSBoZWlnaHQ6IG51bWJlcikge1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFJvb21CZWhhdmlvciB7XHJcbiAgICBwcmVIYW5kbGVDbGljazogKGV2ZW50OiBQb2ludGVySW5wdXRFdmVudCkgPT4gdm9pZDtcclxuICAgIHBvc3RIYW5kbGVDbGljazogKGV2ZW50OiBQb2ludGVySW5wdXRFdmVudCkgPT4gdm9pZDtcclxuICAgIHBvc3RTdGVwOiBSb29tTGlmZWN5Y2xlQ2FsbGJhY2s7XHJcbiAgICBwcmVEcmF3OiBSb29tTGlmZWN5Y2xlRHJhd0NhbGxiYWNrO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUm9vbSB7XHJcbiAgICBcclxuICAgIHByaXZhdGUgc3RhdGljIG5leHRBY3Rvckluc3RhbmNlSUQgPSAoKCkgPT4ge1xyXG4gICAgICAgIGxldCBjdXJyZW50SUQgPSAwO1xyXG4gICAgICAgIHJldHVybiAoKCkgPT4gKytjdXJyZW50SUQpO1xyXG4gICAgfSkoKTtcclxuXHJcbiAgICBzdGF0aWMgZGVmaW5lKG5hbWU6IHN0cmluZyk6IFJvb20ge1xyXG4gICAgICAgIGxldCByb29tID0gbmV3IFJvb20obmFtZSk7XHJcbiAgICAgICAgVmFzdGdhbWUuX2dldENvbnRleHQoKS5kZWZpbmVSb29tKG5hbWUsIHJvb20pO1xyXG4gICAgICAgIHJldHVybiByb29tO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQobmFtZTogc3RyaW5nKTogUm9vbSB7XHJcbiAgICAgICAgcmV0dXJuIFZhc3RnYW1lLl9nZXRDb250ZXh0KCkuZ2V0Um9vbShuYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFjdG9ySW5zdGFuY2VNYXA6IHsgW2luZGV4OiBudW1iZXJdOiBBY3Rvckluc3RhbmNlIH0gPSB7fTtcclxuICAgIHByaXZhdGUgcHJvcGVydHlNYXA6IHsgW2luZGV4OiBzdHJpbmddOiBhbnkgfSA9IHt9O1xyXG4gICAgcHJpdmF0ZSBiZWhhdmlvcnM6IFJvb21CZWhhdmlvcltdID0gW107XHJcbiAgICBwcml2YXRlIGV2ZW50SGFuZGxlcnM6IEV2ZW50SGFuZGxlcltdID0gW107XHJcbiAgICBwcml2YXRlIG9uU3RhcnRDYWxsYmFjazogUm9vbUxpZmVjeWNsZUNhbGxiYWNrO1xyXG4gICAgcHJpdmF0ZSBvbkRyYXdDYWxsYmFjazogUm9vbUxpZmVjeWNsZURyYXdDYWxsYmFjaztcclxuICAgIFxyXG4gICAgYmFja2dyb3VuZDogQmFja2dyb3VuZDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5hbWU6IHN0cmluZykge1xyXG4gICAgfVxyXG5cclxuICAgIHNldChwcm9wZXJ0eU5hbWU6IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucHJvcGVydHlNYXBbcHJvcGVydHlOYW1lXSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldChwcm9wZXJ0eU5hbWU6IHN0cmluZyk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcGVydHlNYXBbcHJvcGVydHlOYW1lXTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRCYWNrZ3JvdW5kKGNvbG9yOiBzdHJpbmcsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBwYWdlQ29sb3I/OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmJhY2tncm91bmQgPSBuZXcgQmFja2dyb3VuZChjb2xvciwgcGFnZUNvbG9yLCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBlbmQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5hY3Rvckluc3RhbmNlTWFwID0ge307XHJcbiAgICAgICAgdGhpcy5iZWhhdmlvcnMgPSBbXTtcclxuICAgICAgICB0aGlzLmV2ZW50SGFuZGxlcnMuZm9yRWFjaChldmVudEhhbmRsZXIgPT4gZXZlbnRIYW5kbGVyLnNsZWVwKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIG1peC1pbiBiZWhhdmlvcnNcclxuICAgIHVzZShiZWhhdmlvcjogUm9vbUJlaGF2aW9yKTogUm9vbUJlaGF2aW9yIHtcclxuICAgICAgICB0aGlzLmJlaGF2aW9ycy5wdXNoKGJlaGF2aW9yKTtcclxuICAgICAgICByZXR1cm4gYmVoYXZpb3I7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gbGlmZWN5Y2xlIGNhbGxiYWNrc1xyXG4gICAgb25TdGFydChjYWxsYmFjazogUm9vbUxpZmVjeWNsZUNhbGxiYWNrKTogUm9vbSB7XHJcbiAgICAgICAgdGhpcy5vblN0YXJ0Q2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBfY2FsbFN0YXJ0KGFyZ3M/OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmV2ZW50SGFuZGxlcnMuZm9yRWFjaChldmVudEhhbmRsZXIgPT4gZXZlbnRIYW5kbGVyLndha2UoKSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHRoaXMub25TdGFydENhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uU3RhcnRDYWxsYmFjayh0aGlzLCBhcmdzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBgUm9vbTogJHt0aGlzLm5hbWV9LnN0YXJ0YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkRyYXcoY2FsbGJhY2s6IFJvb21MaWZlY3ljbGVDYWxsYmFjayk6IFJvb20ge1xyXG4gICAgICAgIHRoaXMub25EcmF3Q2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBfY2FsbERyYXcoYXJncz86IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLm9uRHJhd0NhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIGxldCBjYW52YXNDb250ZXh0ID0gVmFzdGdhbWUuX2dldENvbnRleHQoKS5nZXRDYW52YXNDb250ZXh0KCk7XHJcblxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkRyYXdDYWxsYmFjayh0aGlzLCBjYW52YXNDb250ZXh0LCBhcmdzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBgUm9vbTogJHt0aGlzLm5hbWV9LmRyYXdgO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGV2ZW50IGNhbGxiYWNrc1xyXG4gICAgb25DbGljayhjYWxsYmFjazogKHNlbGY6IFJvb20sIGV2ZW50OiBQb2ludGVySW5wdXRFdmVudCkgPT4gdm9pZCk6IFJvb20ge1xyXG4gICAgICAgIGxldCByb29tID0gdGhpcztcclxuICAgICAgICBsZXQgY2xpY2tIYW5kbGVyID0gSW5wdXQucmVnaXN0ZXJDbGlja0hhbmRsZXIoZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGlmIChWYXN0Z2FtZS5fZ2V0Q29udGV4dCgpLmdldEN1cnJlbnRSb29tKCkgPT09IHJvb20pIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHJvb20sIGV2ZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVycy5wdXNoKGNsaWNrSGFuZGxlcik7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgb25LZXkoa2V5OiBLZXksIGNhbGxiYWNrOiAoc2VsZjogUm9vbSwgZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IHZvaWQpOiBSb29tIHtcclxuICAgICAgICBsZXQgcm9vbSA9IHRoaXM7XHJcbiAgICAgICAgbGV0IGtleUhhbmRsZXIgPSBJbnB1dC5yZWdpc3RlcktleUhhbmRsZXIoa2V5LCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgaWYgKFZhc3RnYW1lLl9nZXRDb250ZXh0KCkuZ2V0Q3VycmVudFJvb20oKSA9PT0gcm9vbSkge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2socm9vbSwgZXZlbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXJzLnB1c2goa2V5SGFuZGxlcik7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gc3RlcCBiZWhhdmlvclxyXG4gICAgc3RlcCgpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgdGhpcy5nZXRJbnN0YW5jZXMoKS5mb3JFYWNoKGluc3RhbmNlID0+IHtcclxuICAgICAgICAgICAgbGV0IHBhcmVudCA9IGluc3RhbmNlLnBhcmVudDtcclxuXHJcbiAgICAgICAgICAgIGlmIChpbnN0YW5jZS5pc0FjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgaW5zdGFuY2UuX2FwcGx5TW92ZW1lbnQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrQ29sbGlzaW9ucyhpbnN0YW5jZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcGFyZW50Ll9jYWxsU3RlcChpbnN0YW5jZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpbnN0YW5jZS5wYXJlbnQuX2NhbGxEZXN0cm95KGluc3RhbmNlKTtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmFjdG9ySW5zdGFuY2VNYXBbaW5zdGFuY2UuaWRdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuYmVoYXZpb3JzLmZvckVhY2goYmVoYXZpb3IgPT4gYmVoYXZpb3IucG9zdFN0ZXAodGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2hlY2tDb2xsaXNpb25zKHNlbGZJbnN0YW5jZTogQWN0b3JJbnN0YW5jZSk6IHZvaWQge1xyXG4gICAgICAgIGxldCBwYXJlbnQgPSBzZWxmSW5zdGFuY2UucGFyZW50O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGZvciAobGV0IGFjdG9yTmFtZSBpbiBwYXJlbnQuY29sbGlzaW9uSGFuZGxlcnMpIHtcclxuXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2FsbGJhY2sgPSBwYXJlbnQuY29sbGlzaW9uSGFuZGxlcnNbYWN0b3JOYW1lXTtcclxuICAgICAgICAgICAgICAgIGxldCBvdGhlckFjdG9yID0gQWN0b3IuZ2V0KGFjdG9yTmFtZSk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IG90aGVySUQgaW4gdGhpcy5hY3Rvckluc3RhbmNlTWFwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG90aGVyID0gdGhpcy5hY3Rvckluc3RhbmNlTWFwW290aGVySURdO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG90aGVyLnBhcmVudCA9PT0gb3RoZXJBY3Rvcikge1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxmSW5zdGFuY2UgIT09IG90aGVyICYmIHNlbGZJbnN0YW5jZS5jb2xsaWRlc1dpdGgob3RoZXIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhzZWxmSW5zdGFuY2UsIG90aGVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBgQWN0b3I6ICR7dGhpcy5uYW1lfVske3NlbGZJbnN0YW5jZS5pZH1dLmNvbGxpc2lvbigke2FjdG9yTmFtZX0pYDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZHJhdyBiZWhhdmlvclxyXG4gICAgZHJhdyhjYW52YXNDb250ZXh0OiBHYW1lQ2FudmFzQ29udGV4dCk6IHZvaWQge1xyXG4gICAgICAgIC8vIGNhbGwgcHJlLWRyYXcgYmVoYXZpb3JzXHJcbiAgICAgICAgdGhpcy5iZWhhdmlvcnMuZm9yRWFjaChiZWhhdmlvciA9PiBiZWhhdmlvci5wcmVEcmF3KHRoaXMsIGNhbnZhc0NvbnRleHQpKTtcclxuXHJcbiAgICAgICAgLy8gZHJhdyByb29tIGJhY2tncm91bmRcclxuICAgICAgICBpZiAodGhpcy5iYWNrZ3JvdW5kKSB7XHJcbiAgICAgICAgICAgIGNhbnZhc0NvbnRleHQuZmlsbEFyZWEoLXRoaXMuYmFja2dyb3VuZC53aWR0aCwgLXRoaXMuYmFja2dyb3VuZC5oZWlnaHQsIHRoaXMuYmFja2dyb3VuZC53aWR0aCAqIDMsIHRoaXMuYmFja2dyb3VuZC5oZWlnaHQgKiAzLCB0aGlzLmJhY2tncm91bmQuY2FudmFzQ29sb3IpO1xyXG4gICAgICAgICAgICBjYW52YXNDb250ZXh0LmZpbGwodGhpcy5iYWNrZ3JvdW5kLndpZHRoLCB0aGlzLmJhY2tncm91bmQuaGVpZ2h0LCB0aGlzLmJhY2tncm91bmQuY29sb3IpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IG9yZGVyZWRJbnN0YW5jZXMgPSB0aGlzLmdldEluc3RhbmNlcygpLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChiLmFuaW1hdGlvbiA/IGIuYW5pbWF0aW9uLmRlcHRoIDogMCkgLSAoYS5hbmltYXRpb24gPyBhLmFuaW1hdGlvbi5kZXB0aCA6IDApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBvcmRlcmVkSW5zdGFuY2VzLmZvckVhY2goaW5zdGFuY2UgPT4ge1xyXG4gICAgICAgICAgICAvLyBkcmF3IHNwcml0ZXNcclxuICAgICAgICAgICAgaWYgKGluc3RhbmNlLmFuaW1hdGlvbiAmJiBpbnN0YW5jZS52aXNpYmxlKSB7XHJcbiAgICAgICAgICAgICAgICBpbnN0YW5jZS5hbmltYXRpb24uZHJhdyhjYW52YXNDb250ZXh0LCBpbnN0YW5jZS54LCBpbnN0YW5jZS55KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gY2FsbCBhY3RvciBkcmF3IGV2ZW50IGNhbGxiYWNrc1xyXG4gICAgICAgICAgICBpbnN0YW5jZS5wYXJlbnQuX2NhbGxEcmF3KGluc3RhbmNlKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gY2FsbCByb29tIGRyYXcgZXZlbnQgY2FsbGJhY2tcclxuICAgICAgICB0aGlzLl9jYWxsRHJhdygpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNsaWNrKGV2ZW50OiBQb2ludGVySW5wdXRFdmVudCk6IHZvaWQge1xyXG4gICAgICAgIC8vIGNhbGwgcHJlLWNsaWNrIGJlaGF2aW9yc1xyXG4gICAgICAgIHRoaXMuYmVoYXZpb3JzLmZvckVhY2goYmVoYXZpb3IgPT4gYmVoYXZpb3IucHJlSGFuZGxlQ2xpY2soZXZlbnQpKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBwYXNzIGNsaWNrIGV2ZW50IHRvIGFjdG9yIGluc3RhbmNlc1xyXG4gICAgICAgIGxldCBjbGlja1ggPSBldmVudC54O1xyXG4gICAgICAgIGxldCBjbGlja1kgPSBldmVudC55O1xyXG5cclxuICAgICAgICB0aGlzLmdldEluc3RhbmNlc0F0UG9zaXRpb24oY2xpY2tYLCBjbGlja1kpLmZvckVhY2goaW5zdGFuY2UgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcGFyZW50ID0gaW5zdGFuY2UucGFyZW50O1xyXG5cclxuICAgICAgICAgICAgaWYgKGluc3RhbmNlLm9jY3VwaWVzUG9zaXRpb24oY2xpY2tYLCBjbGlja1kpKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJlbnQuX2NhbGxDbGljayhpbnN0YW5jZSwgZXZlbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIGNhbGwgcG9zdC1jbGljayBiZWhhdmlvcnNcclxuICAgICAgICB0aGlzLmJlaGF2aW9ycy5mb3JFYWNoKGJlaGF2aW9yID0+IGJlaGF2aW9yLnBvc3RIYW5kbGVDbGljayhldmVudCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUFjdG9yKGFjdG9ySUQ6IHN0cmluZywgeD86IG51bWJlciwgeT86IG51bWJlcik6IEFjdG9ySW5zdGFuY2Uge1xyXG4gICAgICAgIGxldCBwYXJlbnRBY3RvciA9IEFjdG9yLmdldChhY3RvcklEKTtcclxuXHJcbiAgICAgICAgbGV0IG5ld0FjdG9ySW5zdGFuY2VJRCA9IFJvb20ubmV4dEFjdG9ySW5zdGFuY2VJRCgpO1xyXG4gICAgICAgIGxldCBuZXdJbnN0YW5jZSA9IG5ldyBBY3Rvckluc3RhbmNlKHRoaXMsIHBhcmVudEFjdG9yLCBuZXdBY3Rvckluc3RhbmNlSUQsIHgsIHkpO1xyXG5cclxuICAgICAgICB0aGlzLmFjdG9ySW5zdGFuY2VNYXBbbmV3QWN0b3JJbnN0YW5jZUlEXSA9IG5ld0luc3RhbmNlO1xyXG5cclxuICAgICAgICBwYXJlbnRBY3Rvci5fY2FsbENyZWF0ZShuZXdJbnN0YW5jZSk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXdJbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJbnN0YW5jZShhY3RvclR5cGU6IEFjdG9yKTogQWN0b3JJbnN0YW5jZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0SW5zdGFuY2VzKFthY3RvclR5cGVdKVswXTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJbnN0YW5jZXMoYWN0b3JUeXBlczogQWN0b3JbXSA9IFtdKTogQWN0b3JJbnN0YW5jZVtdIHtcclxuICAgICAgICBsZXQgaW5zdGFuY2VzID0gW107XHJcblxyXG4gICAgICAgIGZvciAobGV0IGluc3RhbmNlSUQgaW4gdGhpcy5hY3Rvckluc3RhbmNlTWFwKSB7XHJcbiAgICAgICAgICAgIGxldCBpbnN0YW5jZSA9IHRoaXMuYWN0b3JJbnN0YW5jZU1hcFtpbnN0YW5jZUlEXVxyXG5cclxuICAgICAgICAgICAgaWYgKCFhY3RvclR5cGVzLmxlbmd0aCB8fCAoYWN0b3JUeXBlcyAmJiBhY3RvclR5cGVzLmluZGV4T2YoaW5zdGFuY2UucGFyZW50KSA+IC0xKSkge1xyXG4gICAgICAgICAgICAgICAgaW5zdGFuY2VzLnB1c2godGhpcy5hY3Rvckluc3RhbmNlTWFwW2luc3RhbmNlSURdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlcztcclxuICAgIH1cclxuXHJcbiAgICBnZXRJbnN0YW5jZXNBdFBvc2l0aW9uKHg6IG51bWJlciwgeTogbnVtYmVyKTogQWN0b3JJbnN0YW5jZVtdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRJbnN0YW5jZXMoKS5maWx0ZXIoaW5zdGFuY2UgPT4gaW5zdGFuY2Uub2NjdXBpZXNQb3NpdGlvbih4LCB5KSk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNQb3NpdGlvbkZyZWUoeDogbnVtYmVyLCB5OiBudW1iZXIsIGFjdG9yVHlwZXM/OiBBY3RvcltdKTogYm9vbGVhbiB7XHJcblxyXG4gICAgICAgIGlmICghYWN0b3JUeXBlcyB8fCAhYWN0b3JUeXBlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuICF0aGlzLmdldEluc3RhbmNlc0F0UG9zaXRpb24oeCwgeSkubGVuZ3RoO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuICF0aGlzLmdldEluc3RhbmNlc0F0UG9zaXRpb24oeCwgeSlcclxuICAgICAgICAgICAgLmZpbHRlcihhY3Rvckluc3RhbmNlID0+IGFjdG9yVHlwZXMuaW5kZXhPZihhY3Rvckluc3RhbmNlLnBhcmVudCkgIT09IC0xKVxyXG4gICAgICAgICAgICAubGVuZ3RoO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvcm9vbS50cyIsImltcG9ydCB7IEFjdG9ySW5zdGFuY2UsIEFjdG9yTGlmZWN5Y2xlRHJhd0NhbGxiYWNrIH0gZnJvbSAnLi9hY3Rvci1pbnN0YW5jZSc7XHJcbmltcG9ydCB7IEJvdW5kYXJ5IH0gZnJvbSAnLi9ib3VuZGFyeSc7XHJcbmltcG9ydCB7IFBvaW50ZXJJbnB1dEV2ZW50IH0gZnJvbSAnLi9pbnB1dCc7XHJcbmltcG9ydCB7IFNwcml0ZSB9IGZyb20gJy4vc3ByaXRlJztcclxuaW1wb3J0IHsgVmFzdGdhbWUgfSBmcm9tICcuL3Zhc3RnYW1lJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQWN0b3JMaWZlY3ljbGUge1xyXG4gICAgb25DcmVhdGU6IEFjdG9yTGlmZWN5Y2xlQ2FsbGJhY2s7XHJcbiAgICBvblN0ZXA6IEFjdG9yTGlmZWN5Y2xlQ2FsbGJhY2s7XHJcbiAgICBvbkRlc3Ryb3k6IEFjdG9yTGlmZWN5Y2xlQ2FsbGJhY2s7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQWN0b3JMaWZlY3ljbGVDYWxsYmFjayB7XHJcbiAgICAoc2VsZjogQWN0b3JJbnN0YW5jZSk6IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQWN0b3JFdmVudENhbGxiYWNrIHtcclxuICAgIChzZWxmPzogQWN0b3JJbnN0YW5jZSwgZXZlbnRBcmdzPzogYW55KTogdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBY3Rvck9wdGlvbnMge1xyXG4gICAgYm91bmRhcnk/OiBCb3VuZGFyeTtcclxuICAgIHNwcml0ZT86IFNwcml0ZTtcclxufVxyXG5cclxuaW50ZXJmYWNlIENsaWNrRXZlbnRDYWxsYmFjayB7XHJcbiAgICAoc2VsZjogQWN0b3JJbnN0YW5jZSwgZXZlbnQ6IFBvaW50ZXJJbnB1dEV2ZW50KTogdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb2xsaXNpb25DYWxsYmFjayB7XHJcbiAgICAoc2VsZjogQWN0b3JJbnN0YW5jZSwgb3RoZXI6IEFjdG9ySW5zdGFuY2UpOiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQWN0b3Ige1xyXG5cclxuICAgIHN0YXRpYyBkZWZpbmUobmFtZTogc3RyaW5nLCBvcHRpb25zPzogQWN0b3JPcHRpb25zKTogQWN0b3Ige1xyXG4gICAgICAgIGxldCBhY3RvciA9IG5ldyBBY3RvcihuYW1lLCBvcHRpb25zKTtcclxuICAgICAgICBWYXN0Z2FtZS5fZ2V0Q29udGV4dCgpLmRlZmluZUFjdG9yKG5hbWUsIGFjdG9yKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGFjdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQobmFtZTogc3RyaW5nKTogQWN0b3Ige1xyXG4gICAgICAgIHJldHVybiBWYXN0Z2FtZS5fZ2V0Q29udGV4dCgpLmdldEFjdG9yKG5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGxpZmVjeWNsZSBjYWxsYmFja3NcclxuICAgIHByaXZhdGUgb25DcmVhdGVDYWxsYmFjazogQWN0b3JMaWZlY3ljbGVDYWxsYmFjaztcclxuICAgIHByaXZhdGUgb25TdGVwQ2FsbGJhY2s6IEFjdG9yTGlmZWN5Y2xlQ2FsbGJhY2s7XHJcbiAgICBwcml2YXRlIG9uRGVzdHJveUNhbGxiYWNrOiBBY3RvckxpZmVjeWNsZUNhbGxiYWNrO1xyXG4gICAgcHJpdmF0ZSBvbkRyYXdDYWxsYmFjazogQWN0b3JMaWZlY3ljbGVEcmF3Q2FsbGJhY2s7XHJcblxyXG4gICAgLy8gaW5wdXQgY2FsbGJhY2tzXHJcbiAgICBwcml2YXRlIG9uQ2xpY2tDYWxsYmFjazogQ2xpY2tFdmVudENhbGxiYWNrO1xyXG5cclxuICAgIC8vIGdhbWUgZXZlbnQgaGFuZGxlcnNcclxuICAgIHJlYWRvbmx5IGNvbGxpc2lvbkhhbmRsZXJzOiB7IFtpbmRleDogc3RyaW5nXTogQ29sbGlzaW9uQ2FsbGJhY2sgfSA9IHt9O1xyXG4gICAgcmVhZG9ubHkgYWN0b3JFdmVudEhhbmRsZXJzOiB7IFtpbmRleDogc3RyaW5nXSA6IEFjdG9yRXZlbnRDYWxsYmFjayB9ID0ge307XHJcblxyXG4gICAgcmVhZG9ubHkgbmFtZTogc3RyaW5nO1xyXG4gICAgc3ByaXRlOiBTcHJpdGU7XHJcbiAgICBib3VuZGFyeTogQm91bmRhcnk7XHJcblxyXG4gICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBvcHRpb25zOiBBY3Rvck9wdGlvbnMgPSB7fSkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5zcHJpdGUgPSBvcHRpb25zLnNwcml0ZTtcclxuXHJcbiAgICAgICAgaWYgKG9wdGlvbnMuYm91bmRhcnkpIHtcclxuICAgICAgICAgICAgdGhpcy5ib3VuZGFyeSA9IG9wdGlvbnMuYm91bmRhcnlcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAob3B0aW9ucy5zcHJpdGUpIHtcclxuICAgICAgICAgICAgdGhpcy5ib3VuZGFyeSA9IEJvdW5kYXJ5LmZyb21TcHJpdGUob3B0aW9ucy5zcHJpdGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRHYW1lQ29udGV4dEV2ZW50QXJncyhldmVudEFyZ3M6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGV2ZW50QXJncy5nYW1lID0ge1xyXG4gICAgICAgICAgICBjdXJyZW50Um9vbTogVmFzdGdhbWUuX2dldENvbnRleHQoKS5nZXRDdXJyZW50Um9vbSgpLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY3JlYXRlXHJcbiAgICBvbkNyZWF0ZShjYWxsYmFjazogQWN0b3JMaWZlY3ljbGVDYWxsYmFjayk6IEFjdG9yIHtcclxuICAgICAgICB0aGlzLm9uQ3JlYXRlQ2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBfY2FsbENyZWF0ZShzZWxmSW5zdGFuY2U6IEFjdG9ySW5zdGFuY2UpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5vbkNyZWF0ZUNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uQ3JlYXRlQ2FsbGJhY2soc2VsZkluc3RhbmNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBgQWN0b3I6ICR7c2VsZkluc3RhbmNlLnBhcmVudC5uYW1lfVske3NlbGZJbnN0YW5jZS5pZH1dLmNyZWF0ZWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gc3RlcFxyXG4gICAgb25TdGVwKGNhbGxiYWNrOiBBY3RvckxpZmVjeWNsZUNhbGxiYWNrKTogQWN0b3Ige1xyXG4gICAgICAgIHRoaXMub25TdGVwQ2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBfY2FsbFN0ZXAoc2VsZkluc3RhbmNlOiBBY3Rvckluc3RhbmNlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMub25TdGVwQ2FsbGJhY2spIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25TdGVwQ2FsbGJhY2soc2VsZkluc3RhbmNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBgQWN0b3I6ICR7c2VsZkluc3RhbmNlLnBhcmVudC5uYW1lfVske3NlbGZJbnN0YW5jZS5pZH1dLnN0ZXBgO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZWxmSW5zdGFuY2UucHJldmlvdXNYID0gc2VsZkluc3RhbmNlLng7XHJcbiAgICAgICAgc2VsZkluc3RhbmNlLnByZXZpb3VzWSA9IHNlbGZJbnN0YW5jZS55O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGRyYXdcclxuICAgIG9uRHJhdyhjYWxsYmFjazogQWN0b3JMaWZlY3ljbGVEcmF3Q2FsbGJhY2spOiBBY3RvciB7XHJcbiAgICAgICAgdGhpcy5vbkRyYXdDYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIF9jYWxsRHJhdyhzZWxmSW5zdGFuY2U6IEFjdG9ySW5zdGFuY2UpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5vbkRyYXdDYWxsYmFjaykge1xyXG4gICAgICAgICAgICBsZXQgY2FudmFzQ29udGV4dCA9IFZhc3RnYW1lLl9nZXRDb250ZXh0KCkuZ2V0Q2FudmFzQ29udGV4dCgpO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkRyYXdDYWxsYmFjayhzZWxmSW5zdGFuY2UsIGNhbnZhc0NvbnRleHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIHtcclxuICAgICAgICAgICAgICAgIHRocm93IGBBY3RvcjogJHtzZWxmSW5zdGFuY2UucGFyZW50Lm5hbWV9WyR7c2VsZkluc3RhbmNlLmlkfV0uZHJhd2A7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY2xpY2svdGFwXHJcbiAgICBvbkNsaWNrKGNhbGxiYWNrOiBDbGlja0V2ZW50Q2FsbGJhY2spOiBBY3RvciB7XHJcbiAgICAgICAgdGhpcy5vbkNsaWNrQ2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBfY2FsbENsaWNrKHNlbGZJbnN0YW5jZTogQWN0b3JJbnN0YW5jZSwgZXZlbnQ6IFBvaW50ZXJJbnB1dEV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMub25DbGlja0NhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uQ2xpY2tDYWxsYmFjayhzZWxmSW5zdGFuY2UsIGV2ZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBgQWN0b3I6ICR7c2VsZkluc3RhbmNlLnBhcmVudC5uYW1lfVske3NlbGZJbnN0YW5jZS5pZH1dLmNsaWNrYDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBkZXN0cm95XHJcbiAgICBvbkRlc3Ryb3koY2FsbGJhY2s6IEFjdG9yTGlmZWN5Y2xlQ2FsbGJhY2spOiBBY3RvciB7XHJcbiAgICAgICAgdGhpcy5vbkRlc3Ryb3lDYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIF9jYWxsRGVzdHJveShzZWxmSW5zdGFuY2U6IEFjdG9ySW5zdGFuY2UpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5vbkRlc3Ryb3lDYWxsYmFjaykge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkRlc3Ryb3lDYWxsYmFjayhzZWxmSW5zdGFuY2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIHtcclxuICAgICAgICAgICAgICAgIHRocm93IGBBY3RvcjogJHtzZWxmSW5zdGFuY2UucGFyZW50Lm5hbWV9WyR7c2VsZkluc3RhbmNlLmlkfV0uZGVzdHJveWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY29sbGlzaW9ucyBhbmQgb3RoZXIgZXZlbnRzXHJcbiAgICBvbkNvbGxpZGUoYWN0b3JOYW1lOiBzdHJpbmcsIGNhbGxiYWNrOiBDb2xsaXNpb25DYWxsYmFjayk6IEFjdG9yIHtcclxuICAgICAgICB0aGlzLmNvbGxpc2lvbkhhbmRsZXJzW2FjdG9yTmFtZV0gPSBjYWxsYmFjaztcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBvbkV2ZW50KGV2ZW50TmFtZTogc3RyaW5nLCBjYWxsYmFjazogQWN0b3JFdmVudENhbGxiYWNrKTogQWN0b3Ige1xyXG4gICAgICAgIHRoaXMuYWN0b3JFdmVudEhhbmRsZXJzW2V2ZW50TmFtZV0gPSBjYWxsYmFjaztcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvYWN0b3IudHMiLCJpbXBvcnQgeyBTcHJpdGUgfSBmcm9tICcuL3Nwcml0ZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgUG9zaXRpb25lZEJvdW5kYXJ5IHtcclxuICAgIHByaXZhdGUgaGVpZ2h0OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHdpZHRoOiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIHg6IG51bWJlciwgcHVibGljIHk6IG51bWJlciwgYm91bmRhcnk6IEJvdW5kYXJ5KSB7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBib3VuZGFyeS5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IGJvdW5kYXJ5LndpZHRoO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbGxpZGVzV2l0aChvdGhlcjogUG9zaXRpb25lZEJvdW5kYXJ5KTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMueCA+IG90aGVyLnggKyBvdGhlci53aWR0aCB8fCBvdGhlci54ID49IHRoaXMueCArIHRoaXMud2lkdGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMueSA+IG90aGVyLnkgKyBvdGhlci5oZWlnaHQgfHwgb3RoZXIueSA+PSB0aGlzLnkgKyB0aGlzLmhlaWdodCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBjb250YWluc1Bvc2l0aW9uKHg6IG51bWJlciwgeTogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMueCA+IHggfHwgeCA+IHRoaXMueCArIHRoaXMud2lkdGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMueSA+IHkgfHwgeSA+IHRoaXMueSArIHRoaXMuaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQm91bmRhcnkge1xyXG5cclxuICAgIHN0YXRpYyBmcm9tU3ByaXRlKHNwcml0ZTogU3ByaXRlLCBzb2xpZDogYm9vbGVhbiA9IGZhbHNlKTogQm91bmRhcnkge1xyXG4gICAgICAgIHJldHVybiBuZXcgQm91bmRhcnkoc3ByaXRlLmhlaWdodCwgc3ByaXRlLndpZHRoLCBzb2xpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIGhlaWdodDogbnVtYmVyLCBwdWJsaWMgd2lkdGg6IG51bWJlciwgcHVibGljIHNvbGlkOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICBpZiAoaGVpZ2h0IDw9IDAgfHwgd2lkdGggPD0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0hlaWdodCBhbmQgd2lkdGggbXVzdCBib3RoIGJlIGdyZWF0ZXIgdGhhbiB6ZXJvLicpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhdFBvc2l0aW9uKHg6IG51bWJlciwgeTogbnVtYmVyKTogUG9zaXRpb25lZEJvdW5kYXJ5IHtcclxuICAgICAgICByZXR1cm4gbmV3IFBvc2l0aW9uZWRCb3VuZGFyeSh4LCB5LCB0aGlzKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL2JvdW5kYXJ5LnRzIiwiaW1wb3J0IHsgQWN0b3IsIEFjdG9yRXZlbnRDYWxsYmFjayB9IGZyb20gJy4vYWN0b3InO1xyXG5pbXBvcnQgeyBCb3VuZGFyeSB9IGZyb20gJy4vYm91bmRhcnknO1xyXG5pbXBvcnQgeyBBY3RvclN0YXRlIH0gZnJvbSAnLi9lbnVtJztcclxuaW1wb3J0IHsgRGVmZXJyZWRFdmVudCB9IGZyb20gJy4vZXZlbnRzJztcclxuaW1wb3J0IHsgUm9vbSB9IGZyb20gJy4vcm9vbSc7XHJcbmltcG9ydCB7IFNwcml0ZSwgRHJhd1Nwcml0ZU9wdGlvbnMgfSBmcm9tICcuL3Nwcml0ZSc7XHJcbmltcG9ydCB7IFNwcml0ZUFuaW1hdGlvbiB9IGZyb20gJy4vc3ByaXRlLWFuaW1hdGlvbic7XHJcbmltcG9ydCB7IE1hdGhVdGlsIH0gZnJvbSAnLi91dGlsJztcclxuaW1wb3J0IHsgR2FtZUNhbnZhc0NvbnRleHQgfSBmcm9tICcuL2NhbnZhcyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFjdG9yTGlmZWN5Y2xlRHJhd0NhbGxiYWNrIHtcclxuICAgIChzZWxmOiBBY3Rvckluc3RhbmNlLCBjYW52YXNDb250ZXh0OiBHYW1lQ2FudmFzQ29udGV4dCk6IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBY3Rvckluc3RhbmNlIHtcclxuICAgIHByaXZhdGUgc3RhdGU6IEFjdG9yU3RhdGU7XHJcbiAgICBwcml2YXRlIHNwcml0ZUFuaW1hdGlvbjogU3ByaXRlQW5pbWF0aW9uO1xyXG5cclxuICAgIHByZXZpb3VzWDogbnVtYmVyO1xyXG4gICAgcHJldmlvdXNZOiBudW1iZXI7XHJcbiAgICBzcGVlZDogbnVtYmVyID0gMDtcclxuICAgIGRpcmVjdGlvbjogbnVtYmVyID0gMDtcclxuICAgIHZpc2libGU6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm9vbTogUm9vbSwgcHVibGljIHBhcmVudDogQWN0b3IsIHB1YmxpYyBpZDogbnVtYmVyLCBwdWJsaWMgeDogbnVtYmVyID0gMCwgcHVibGljIHk6IG51bWJlciA9IDApIHtcclxuICAgICAgICB0aGlzLnN0YXRlID0gQWN0b3JTdGF0ZS5BY3RpdmU7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnBhcmVudC5zcHJpdGUpIHtcclxuICAgICAgICAgICAgdGhpcy5zcHJpdGVBbmltYXRpb24gPSBuZXcgU3ByaXRlQW5pbWF0aW9uKHRoaXMucGFyZW50LnNwcml0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBoYXNNb3ZlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMueCAhPT0gdGhpcy5wcmV2aW91c1ggfHwgdGhpcy55ICE9PSB0aGlzLnByZXZpb3VzWSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGlzQWN0aXZlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5zdGF0ZSA9PT0gQWN0b3JTdGF0ZS5BY3RpdmUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBib3VuZGFyeSgpOiBCb3VuZGFyeSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50LmJvdW5kYXJ5O1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBhbmltYXRpb24oKTogU3ByaXRlQW5pbWF0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zcHJpdGVBbmltYXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgcmFpc2VFdmVudChldmVudE5hbWU6IHN0cmluZywgZXZlbnRBcmdzPzogYW55KTogdm9pZCB7XHJcbiAgICAgICAgLy8gcmVnaXN0ZXIgYW4gZXZlbnQgdG8gZmlyZSBpbW1lZGlhdGVseVxyXG4gICAgICAgIHRoaXMucmFpc2VFdmVudFdoZW4oZXZlbnROYW1lLCAoKSA9PiB0cnVlLCBldmVudEFyZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIHJhaXNlRXZlbnRJbihldmVudE5hbWU6IHN0cmluZywgZGVsYXk6IG51bWJlciwgZXZlbnRBcmdzPzogYW55KTogdm9pZCB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucmFpc2VFdmVudChldmVudE5hbWUsIGV2ZW50QXJncyk7XHJcbiAgICAgICAgfSwgZGVsYXkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJhaXNlRXZlbnRXaGVuKGV2ZW50TmFtZTogc3RyaW5nLCBjb25kaXRpb25DYWxsYmFjazogKCkgPT4gYm9vbGVhbiwgZXZlbnRBcmdzOiBhbnkgPSB7fSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucGFyZW50LnNldEdhbWVDb250ZXh0RXZlbnRBcmdzKGV2ZW50QXJncyk7XHJcblxyXG4gICAgICAgIGxldCBjYWxsYmFjazogQWN0b3JFdmVudENhbGxiYWNrID0gdGhpcy5wYXJlbnQuYWN0b3JFdmVudEhhbmRsZXJzW2V2ZW50TmFtZV07XHJcblxyXG4gICAgICAgIGlmICghY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBdHRlbXB0aW5nIHRvIHJhaXNlIHVuZGVmaW5lZCBFdmVudDogJHtldmVudE5hbWV9YCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBEZWZlcnJlZEV2ZW50LnJlZ2lzdGVyKG5ldyBEZWZlcnJlZEV2ZW50KGNvbmRpdGlvbkNhbGxiYWNrLCBjYWxsYmFjay5iaW5kKG51bGwsIHRoaXMsIGV2ZW50QXJncykpKTtcclxuICAgIH1cclxuXHJcbiAgICBjb2xsaWRlc1dpdGgob3RoZXI6IEFjdG9ySW5zdGFuY2UpOiBib29sZWFuIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaGFzTW92ZWQgJiYgdGhpcy5ib3VuZGFyeSAmJiBvdGhlci5ib3VuZGFyeSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ib3VuZGFyeS5hdFBvc2l0aW9uKHRoaXMueCwgdGhpcy55KS5jb2xsaWRlc1dpdGgob3RoZXIuYm91bmRhcnkuYXRQb3NpdGlvbihvdGhlci54LCBvdGhlci55KSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UG9zaXRpb25SZWxhdGl2ZSh4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2V0UG9zaXRpb24odGhpcy54ICsgeCwgdGhpcy55ICsgeSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UG9zaXRpb24oeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnByZXZpb3VzWCA9IHRoaXMueDtcclxuICAgICAgICB0aGlzLnByZXZpb3VzWSA9IHRoaXMueTtcclxuXHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmUoc3BlZWQ6IG51bWJlciwgZGlyZWN0aW9uPzogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IHNwZWVkO1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIF9hcHBseU1vdmVtZW50KCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLnNwZWVkICE9PSAwKSB7XHJcbiAgICAgICAgICAgIGxldCBvZmZzZXRYID0gTWF0aC5yb3VuZChNYXRoVXRpbC5nZXRMZW5ndGhEaXJlY3Rpb25YKHRoaXMuc3BlZWQgKiAxMDAsIHRoaXMuZGlyZWN0aW9uKSAvIDEwMCk7XHJcbiAgICAgICAgICAgIGxldCBvZmZzZXRZID0gTWF0aC5yb3VuZChNYXRoVXRpbC5nZXRMZW5ndGhEaXJlY3Rpb25ZKHRoaXMuc3BlZWQgKiAxMDAsIHRoaXMuZGlyZWN0aW9uKSAvIDEwMCk7XHJcbiAgICBcclxuICAgICAgICAgICAgaWYgKG9mZnNldFggIT09IDAgfHwgb2Zmc2V0WSAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRQb3NpdGlvblJlbGF0aXZlKG9mZnNldFgsIG9mZnNldFkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9jY3VwaWVzUG9zaXRpb24oeDogbnVtYmVyLCB5OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ib3VuZGFyeSA/IHRoaXMuYm91bmRhcnkuYXRQb3NpdGlvbih0aGlzLngsIHRoaXMueSkuY29udGFpbnNQb3NpdGlvbih4LCB5KSA6IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IEFjdG9yU3RhdGUuRGVzdHJveWVkO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9hY3Rvci1pbnN0YW5jZS50cyIsImltcG9ydCB7IEFjdG9yIH0gZnJvbSAnLi9hY3Rvcic7XHJcbmltcG9ydCB7IEFjdG9ySW5zdGFuY2UgfSBmcm9tICcuL2FjdG9yLWluc3RhbmNlJztcclxuaW1wb3J0IHsgRGlyZWN0aW9uIH0gZnJvbSAnLi9lbnVtJztcclxuaW1wb3J0IHsgUm9vbSB9IGZyb20gJy4vcm9vbSc7XHJcbmltcG9ydCB7IEFycmF5IH0gZnJvbSAnZXM2LXNoaW0nO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBHcmlkQ2xpY2tDYWxsYmFjayB7XHJcbiAgICAoZ3JpZENsaWNrRXZlbnQ6IEdyaWRDbGlja0V2ZW50KTogdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdyaWRDbGlja0V2ZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGdyaWQ6IEdyaWQsXHJcbiAgICAgICAgcHJpdmF0ZSB4OiBudW1iZXIsIFxyXG4gICAgICAgIHByaXZhdGUgeTogbnVtYmVyKSB7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2VsbCgpOiBHcmlkQ2VsbCB7XHJcbiAgICAgICAgbGV0IGNlbGxYID0gdGhpcy54IC0gdGhpcy54ICUgdGhpcy5ncmlkLnRpbGVTaXplO1xyXG4gICAgICAgIGxldCBjZWxsWSA9IHRoaXMueSAtIHRoaXMueSAlIHRoaXMuZ3JpZC50aWxlU2l6ZTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gbmV3IEdyaWRDZWxsKHRoaXMuZ3JpZCwgY2VsbFgsIGNlbGxZKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdyaWRDZWxsIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGdyaWQ6IEdyaWQsIHJlYWRvbmx5IHg6IG51bWJlciwgcmVhZG9ubHkgeTogbnVtYmVyKSB7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNpemUoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ncmlkLnRpbGVTaXplO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFkamFjZW50Q2VsbChkaXJlY3Rpb246IERpcmVjdGlvbik6IEdyaWRDZWxsIHtcclxuICAgICAgICBsZXQgb2Zmc2V0WCA9IDA7XHJcbiAgICAgICAgbGV0IG9mZnNldFkgPSAwO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xyXG4gICAgICAgICAgICBjYXNlIERpcmVjdGlvbi5Eb3duOlxyXG4gICAgICAgICAgICAgICAgb2Zmc2V0WSA9IHRoaXMuZ3JpZC50aWxlU2l6ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIERpcmVjdGlvbi5MZWZ0OlxyXG4gICAgICAgICAgICAgICAgb2Zmc2V0WCA9IC10aGlzLmdyaWQudGlsZVNpemU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBEaXJlY3Rpb24uUmlnaHQ6XHJcbiAgICAgICAgICAgICAgICBvZmZzZXRYID0gdGhpcy5ncmlkLnRpbGVTaXplO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRGlyZWN0aW9uLlVwOlxyXG4gICAgICAgICAgICAgICAgb2Zmc2V0WSA9IC10aGlzLmdyaWQudGlsZVNpemU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgR3JpZENlbGwodGhpcy5ncmlkLCB0aGlzLnggKyBvZmZzZXRYLCB0aGlzLnkgKyBvZmZzZXRZKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb250ZW50cygpOiBBY3Rvckluc3RhbmNlW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdyaWQucm9vbS5nZXRJbnN0YW5jZXNBdFBvc2l0aW9uKHRoaXMueCArIHRoaXMuZ3JpZC50aWxlU2l6ZSAvIDIsIHRoaXMueSArIHRoaXMuZ3JpZC50aWxlU2l6ZSAvIDIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnRhaW5zSW5zdGFuY2UoaW5zdGFuY2U6IEFjdG9ySW5zdGFuY2UpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRDb250ZW50cygpLnNvbWUoY29udGVudHMgPT4gY29udGVudHMgPT09IGluc3RhbmNlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb250YWluc0luc3RhbmNlT2YoYWN0b3I6IEFjdG9yIHwgQWN0b3JbXSk6IGJvb2xlYW4ge1xyXG5cclxuICAgICAgICBpZiAoKDxhbnk+YWN0b3IpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRDb250ZW50cygpLnNvbWUoY29udGVudHMgPT4gKDxBY3RvcltdPmFjdG9yKS5pbmRleE9mKGNvbnRlbnRzLnBhcmVudCkgPiAtMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRDb250ZW50cygpLnNvbWUoY29udGVudHMgPT4gY29udGVudHMucGFyZW50ID09PSBhY3Rvcik7XHJcbiAgICB9XHJcblxyXG4gICAgaXNGcmVlKGFjdG9yVHlwZXM/OiBBY3RvcltdKTogYm9vbGVhbiB7XHJcblxyXG4gICAgICAgIGlmICghYWN0b3JUeXBlcyB8fCAhYWN0b3JUeXBlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuICF0aGlzLmdldENvbnRlbnRzKCkubGVuZ3RoO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuICF0aGlzLmdldENvbnRlbnRzKClcclxuICAgICAgICAgICAgLmZpbHRlcihhY3Rvckluc3RhbmNlID0+IGFjdG9yVHlwZXMuaW5kZXhPZihhY3Rvckluc3RhbmNlLnBhcmVudCkgIT09IC0xKVxyXG4gICAgICAgICAgICAubGVuZ3RoO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR3JpZCB7XHJcbiAgICBwcml2YXRlIF9vbkNsaWNrOiBHcmlkQ2xpY2tDYWxsYmFjaztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICByZWFkb25seSB0aWxlU2l6ZTogbnVtYmVyLFxyXG4gICAgICAgIHJlYWRvbmx5IHJvb206IFJvb20pIHtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDZWxsQXRQb3NpdGlvbih4OiBudW1iZXIsIHk6IG51bWJlcik6IEdyaWRDZWxsIHtcclxuICAgICAgICByZXR1cm4gbmV3IEdyaWRDZWxsKHRoaXMsIHgsIHkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbmQoYWN0b3JUeXBlOiBBY3Rvcik6IEdyaWRDZWxsIHtcclxuICAgICAgICBsZXQgYWN0b3JJbnN0YW5jZXMgPSB0aGlzLnJvb20uZ2V0SW5zdGFuY2VzKCk7XHJcblxyXG4gICAgICAgIGlmIChhY3Rvckluc3RhbmNlcyAmJiBhY3Rvckluc3RhbmNlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgLy8gYXNzdW1lcyB0aGUgbWF0Y2ggaXMgYWxpZ25lZCB0byB0aGUgZ3JpZC5cclxuICAgICAgICAgICAgbGV0IG1hdGNoID0gYWN0b3JJbnN0YW5jZXMuZmluZChhID0+IGEucGFyZW50ID09PSBhY3RvclR5cGUpO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEdyaWRDZWxsKHRoaXMsIG1hdGNoLngsIG1hdGNoLnkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY2xpY2sgZXZlbnQgaGFuZGxpbmdcclxuICAgIG9uQ2xpY2soY2FsbGJhY2s6IEdyaWRDbGlja0NhbGxiYWNrKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fb25DbGljayA9IGNhbGxiYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIHJhaXNlQ2xpY2tFdmVudCh4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGxldCBldmVudCA9IG5ldyBHcmlkQ2xpY2tFdmVudCh0aGlzLCB4LCB5KTtcclxuXHJcbiAgICAgICAgdGhpcy5fb25DbGljayhldmVudCk7XHJcbiAgICB9ICAgIFxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9ncmlkLnRzIiwiaW1wb3J0IHsgQWN0b3JJbnN0YW5jZSB9IGZyb20gJy4vYWN0b3ItaW5zdGFuY2UnO1xyXG5pbXBvcnQgeyBCb3VuZGFyeSB9IGZyb20gJy4vYm91bmRhcnknO1xyXG5pbXBvcnQgeyBHYW1lQ2FudmFzSFRNTDJEIH0gZnJvbSAnLi9jYW52YXMnO1xyXG5cclxuZW51bSBWaWV3TW9kZSB7XHJcbiAgICBTYW1lUG9zaXRpb24gPSAxLFxyXG4gICAgQ2VudGVyID0gMixcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFZpZXcge1xyXG5cclxuICAgIHByaXZhdGUgdmlld01vZGU6IFZpZXdNb2RlO1xyXG4gICAgcHJpdmF0ZSBmb2xsb3dJbnN0YW5jZTogQWN0b3JJbnN0YW5jZTtcclxuICAgIHByaXZhdGUgYXR0YWNobWVudHM6IEFjdG9ySW5zdGFuY2VBdHRhY2hlbWVudFtdID0gW107XHJcblxyXG4gICAgcHJpdmF0ZSBvZmZzZXRYOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBvZmZzZXRZOiBudW1iZXIgPSAwO1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgeDogbnVtYmVyLCBcclxuICAgICAgICBwdWJsaWMgeTogbnVtYmVyLCBcclxuICAgICAgICBwdWJsaWMgcmVhZG9ubHkgd2lkdGg6IG51bWJlciwgXHJcbiAgICAgICAgcHVibGljIHJlYWRvbmx5IGhlaWdodDogbnVtYmVyKSB7XHJcbiAgICB9XHJcblxyXG4gICAgZm9sbG93KGFjdG9ySW5zdGFuY2U6IEFjdG9ySW5zdGFuY2UsIGNlbnRlcjogYm9vbGVhbiA9IGZhbHNlLCBvZmZzZXRYOiBudW1iZXIgPSAwLCBvZmZzZXRZOiBudW1iZXIgPSAwKSB7XHJcbiAgICAgICAgdGhpcy52aWV3TW9kZSA9IGNlbnRlciA/IFZpZXdNb2RlLkNlbnRlciA6IFZpZXdNb2RlLlNhbWVQb3NpdGlvbjtcclxuICAgICAgICB0aGlzLmZvbGxvd0luc3RhbmNlID0gYWN0b3JJbnN0YW5jZTtcclxuICAgICAgICB0aGlzLm9mZnNldFggPSBvZmZzZXRYO1xyXG4gICAgICAgIHRoaXMub2Zmc2V0WSA9IG9mZnNldFk7XHJcbiAgICB9XHJcblxyXG4gICAgYXR0YWNoKGFjdG9ySW5zdGFuY2U6IEFjdG9ySW5zdGFuY2UsIG9mZnNldFg6IG51bWJlciA9IDAsIG9mZnNldFk6IG51bWJlciA9IDApIHtcclxuICAgICAgICB0aGlzLmF0dGFjaG1lbnRzLnB1c2gobmV3IEFjdG9ySW5zdGFuY2VBdHRhY2hlbWVudCh0aGlzLCBhY3Rvckluc3RhbmNlLCBvZmZzZXRYLCBvZmZzZXRZKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuZm9sbG93SW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMudmlld01vZGUgPT09IFZpZXdNb2RlLkNlbnRlcikge1xyXG4gICAgICAgICAgICB0aGlzLmNlbnRlckFyb3VuZEJvdW5kYXJ5KHRoaXMuZm9sbG93SW5zdGFuY2UuYm91bmRhcnkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy54ID0gdGhpcy5vZmZzZXRYICsgdGhpcy5mb2xsb3dJbnN0YW5jZS54IHx8IDA7XHJcbiAgICAgICAgICAgIHRoaXMueSA9IHRoaXMub2Zmc2V0WSArIHRoaXMuZm9sbG93SW5zdGFuY2UueSB8fCAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5hdHRhY2htZW50cy5mb3JFYWNoKGF0dCA9PiBhdHQudXBkYXRlKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2VudGVyQXJvdW5kQm91bmRhcnkoYm91bmRhcnk6IEJvdW5kYXJ5KSB7XHJcblxyXG4gICAgICAgIGlmICghYm91bmRhcnkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBib3VuZGFyeSBpcyAke2JvdW5kYXJ5fWApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy54ID0gdGhpcy5vZmZzZXRYICsgKHRoaXMuZm9sbG93SW5zdGFuY2UueCArIChib3VuZGFyeS53aWR0aCAvIDIpIC0gKHRoaXMud2lkdGggLyAyKSk7XHJcbiAgICAgICAgdGhpcy55ID0gdGhpcy5vZmZzZXRZICsgKHRoaXMuZm9sbG93SW5zdGFuY2UueSArIChib3VuZGFyeS5oZWlnaHQgLyAyKSAtICh0aGlzLmhlaWdodCAvIDIpKTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgQWN0b3JJbnN0YW5jZUF0dGFjaGVtZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciAocHJpdmF0ZSBwYXJlbnQ6IFZpZXcsXHJcbiAgICAgICAgcHJpdmF0ZSBpbnN0YW5jZTogQWN0b3JJbnN0YW5jZSxcclxuICAgICAgICBwcml2YXRlIG9mZnNldFg6IG51bWJlcixcclxuICAgICAgICBwcml2YXRlIG9mZnNldFk6IG51bWJlcikge1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5pbnN0YW5jZS54ID0gdGhpcy5wYXJlbnQueCArIHRoaXMub2Zmc2V0WDtcclxuICAgICAgICB0aGlzLmluc3RhbmNlLnkgPSB0aGlzLnBhcmVudC55ICsgdGhpcy5vZmZzZXRZO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS92aWV3LnRzIiwiaW1wb3J0ICogYXMgQ29uc3RhbnRzIGZyb20gJy4vY29uc3RhbnRzJztcclxuaW1wb3J0IHsgUmVnaXN0cnl9IGZyb20gJy4vcmVnaXN0cnknO1xyXG5cclxuZXhwb3J0IHsgUmVnaXN0cnkgfTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZXF1aXJlTW9kdWxlcyhyb290RGlyOiBzdHJpbmcsIGZpbGVOYW1lczogc3RyaW5nW10pIHtcclxuICAgIGZpbGVOYW1lcy5mb3JFYWNoKG5hbWUgPT4gcmVxdWlyZSgnLi8uLi8nICsgcm9vdERpciArICcvJyArIG5hbWUpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkQ2FudmFzRGltZW5zaW9ucygpOiBbbnVtYmVyLCBudW1iZXJdIHtcclxuICAgIGxldCBmaWxsU2NyZWVuID0gd2luZG93LmlubmVyV2lkdGggPCBDb25zdGFudHMuQ2FudmFzTWF4V2lkdGg7XHJcblxyXG4gICAgbGV0IGNhbnZhc1dpZHRoID0gZmlsbFNjcmVlbiA/IHdpbmRvdy5pbm5lcldpZHRoIDogQ29uc3RhbnRzLkNhbnZhc01heFdpZHRoO1xyXG4gICAgY2FudmFzV2lkdGggKz0gKGNhbnZhc1dpZHRoICUgMiA9PT0gMCkgPyAwIDogMTtcclxuXHJcbiAgICBsZXQgY2FudmFzSGVpZ2h0ID0gZmlsbFNjcmVlbiA/IHdpbmRvdy5pbm5lckhlaWdodCA6IENvbnN0YW50cy5DYW52YXNNYXhIZWlnaHQ7XHJcbiAgICBjYW52YXNIZWlnaHQgKz0gKGNhbnZhc0hlaWdodCAlIDIgPT09IDApID8gMCA6IDE7XHJcblxyXG4gICAgcmV0dXJuIFtjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0XTtcclxufVxyXG5cclxuLy8gcmV0dXJucyAoeCwgeSkgY29vcmRpbmF0ZXMgYW5kIGZyYW1lIG51bWJlcihzKSBmb3IgMSBvciAyIGRpZ2l0IGZyYW1lcyBiYXNlZCBvbiB0aGUgZ2l2ZW4gbnVtYmVyLlxyXG5pbnRlcmZhY2UgTnVtYmVyRnJhbWUge1xyXG4gICAgeDogbnVtYmVyO1xyXG4gICAgeTogbnVtYmVyO1xyXG4gICAgZnJhbWU6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldERpZ2l0RHJhd0luc3RhbmNlcyhudW1iZXI6IG51bWJlciwgdXNlQWx0Q29sb3I6IGJvb2xlYW4gPSBmYWxzZSk6IE51bWJlckZyYW1lW10ge1xyXG4gICAgbGV0IHNpbmdsZURpZ2l0TWFyZ2luID0gTWF0aC5mbG9vcihDb25zdGFudHMuR3JpZENlbGxTaXplIC8gNCk7XHJcbiAgICBsZXQgdGVuc01hcmdpbiA9IE1hdGguZmxvb3Ioc2luZ2xlRGlnaXRNYXJnaW4gLyAyKSAtIDM7XHJcbiAgICBsZXQgb25lc01hcmdpbiA9IE1hdGguZmxvb3Ioc2luZ2xlRGlnaXRNYXJnaW4gKiAyKSAtIDM7XHJcblxyXG4gICAgbGV0IGZyYW1lT2Zmc2V0ID0gdXNlQWx0Q29sb3IgPyAxMCA6IDA7XHJcbiAgICBsZXQgZnJhbWVzOiBOdW1iZXJGcmFtZVtdID0gW107XHJcblxyXG4gICAgaWYgKG51bWJlciA8IDEwKSB7XHJcbiAgICAgICAgZnJhbWVzLnB1c2goeyB4OiBzaW5nbGVEaWdpdE1hcmdpbiwgeTogc2luZ2xlRGlnaXRNYXJnaW4sIGZyYW1lOiBmcmFtZU9mZnNldCArIG51bWJlciB9KTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGZyYW1lcy5wdXNoKHsgeDogdGVuc01hcmdpbiwgeTogc2luZ2xlRGlnaXRNYXJnaW4sIGZyYW1lOiBmcmFtZU9mZnNldCArIE1hdGguZmxvb3IobnVtYmVyIC8gMTApIH0pO1xyXG4gICAgICAgIGZyYW1lcy5wdXNoKHsgeDogb25lc01hcmdpbiwgeTogc2luZ2xlRGlnaXRNYXJnaW4sIGZyYW1lOiBmcmFtZU9mZnNldCArIChudW1iZXIgJSAxMCkgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZyYW1lcztcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9nYW1lL3V0aWwvdXRpbC50cyIsImltcG9ydCB7IEdhbWVDYW52YXNDb250ZXh0IH0gZnJvbSAnLi9jYW52YXMnO1xyXG5pbXBvcnQgeyBQb2ludGVySW5wdXRFdmVudCB9IGZyb20gJy4vaW5wdXQnO1xyXG5pbXBvcnQgeyBHcmlkIH0gZnJvbSAnLi9ncmlkJztcclxuaW1wb3J0IHsgUm9vbSwgUm9vbUJlaGF2aW9yIH0gZnJvbSAnLi9yb29tJztcclxuaW1wb3J0IHsgVmlldyB9IGZyb20gJy4vdmlldyc7XHJcbmltcG9ydCB7IFZhc3RnYW1lIH0gZnJvbSAnLi92YXN0Z2FtZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgVmlld2VkUm9vbUJlaGF2aW9yIGltcGxlbWVudHMgUm9vbUJlaGF2aW9yIHtcclxuICAgIHZpZXc6IFZpZXc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy52aWV3ID0gbmV3IFZpZXcoeCwgeSwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VmlldygpOiBWaWV3IHtcclxuICAgICAgICByZXR1cm4gdGhpcy52aWV3O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJvb21CZWhhdmlvciBpbXBsZW1lbnRhdGlvblxyXG4gICAgcHJlSGFuZGxlQ2xpY2soZXZlbnQ6IFBvaW50ZXJJbnB1dEV2ZW50KSB7XHJcbiAgICAgICAgbGV0IFtvZmZzZXRYLCBvZmZzZXRZXSA9IHRoaXMuZ2V0T2Zmc2V0KCk7XHJcbiAgICAgICAgZXZlbnQueCArPSBvZmZzZXRYO1xyXG4gICAgICAgIGV2ZW50LnkgKz0gb2Zmc2V0WTtcclxuICAgIH1cclxuXHJcbiAgICBwb3N0U3RlcChzZWxmOiBSb29tKSB7IFxyXG4gICAgICAgIHRoaXMudmlldy51cGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcmVEcmF3KHNlbGY6IFJvb20sIGNhbnZhc0NvbnRleHQ6IEdhbWVDYW52YXNDb250ZXh0KSB7IFxyXG4gICAgICAgIGxldCBbb2Zmc2V0WCwgb2Zmc2V0WV0gPSB0aGlzLmdldE9mZnNldCgpO1xyXG4gICAgICAgIGNhbnZhc0NvbnRleHQub3JpZ2luID0gWy1vZmZzZXRYLCAtb2Zmc2V0WV07XHJcbiAgICB9XHJcblxyXG4gICAgcG9zdEhhbmRsZUNsaWNrKGV2ZW50OiBQb2ludGVySW5wdXRFdmVudCkge1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0T2Zmc2V0KCk6IFtudW1iZXIsIG51bWJlcl0ge1xyXG4gICAgICAgIGxldCBvZmZzZXRYID0gdGhpcy52aWV3ID8gdGhpcy52aWV3LnggOiAwO1xyXG4gICAgICAgIGxldCBvZmZzZXRZID0gdGhpcy52aWV3ID8gdGhpcy52aWV3LnkgOiAwO1xyXG5cclxuICAgICAgICByZXR1cm4gW29mZnNldFgsIG9mZnNldFldO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR3JpZFJvb21CZWhhdmlvciBpbXBsZW1lbnRzIFJvb21CZWhhdmlvciB7XHJcbiAgICBwcml2YXRlIGdyaWQ6IEdyaWQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IodGlsZVNpemU6IG51bWJlciwgcGFyZW50Um9vbTogUm9vbSkge1xyXG4gICAgICAgIHRoaXMuZ3JpZCA9IG5ldyBHcmlkKHRpbGVTaXplLCBwYXJlbnRSb29tKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRHcmlkKCk6IEdyaWQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdyaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gUm9vbUJlaGF2aW9yIGltcGxlbWVudGF0aW9uXHJcbiAgICBwb3N0SGFuZGxlQ2xpY2soZXZlbnQ6IFBvaW50ZXJJbnB1dEV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5ncmlkLnJhaXNlQ2xpY2tFdmVudChldmVudC54LCBldmVudC55KTtcclxuICAgIH1cclxuXHJcbiAgICBwcmVIYW5kbGVDbGljayhldmVudDogUG9pbnRlcklucHV0RXZlbnQpIHtcclxuICAgIH1cclxuICAgIHBvc3RTdGVwKHNlbGY6IFJvb20pIHsgXHJcbiAgICB9XHJcbiAgICBwcmVEcmF3KHNlbGY6IFJvb20sIGNhbnZhc0NvbnRleHQ6IEdhbWVDYW52YXNDb250ZXh0KSB7IFxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9yb29tLWV4dC50cyIsIlxyXG5cclxuZXhwb3J0IGNsYXNzIExldmVscyB7XHJcblxyXG4gICAgc3RhdGljIGdldCBjb3VudCgpOiBudW1iZXIge1xyXG4gICAgICAgIGxldCBjID0gMDtcclxuICAgICAgICBmb3IgKGxldCBwIGluIHRoaXMubGV2ZWxzKSB7XHJcbiAgICAgICAgICAgIGMrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGM7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGxldmVsczogeyBbaWQ6IG51bWJlcl06IHN0cmluZ1tdIH0gPSB7XHJcbiAgICAgICAgMTogW1xyXG4gICAgICAgICAgICAnIyMjIyMjIyMjIyMjIyMjIycsXHJcbiAgICAgICAgICAgICcjICAgICAgICAgICAgICAjJyxcclxuICAgICAgICAgICAgJyMgICAgICAgICAgICAgICMnLFxyXG4gICAgICAgICAgICAnIyAgICAgICAgICAgICAgIycsXHJcbiAgICAgICAgICAgICcjWCAgICAgICAgIyAgICAjJyxcclxuICAgICAgICAgICAgJyMjIyBQICAjICAjICBXICMnLFxyXG4gICAgICAgICAgICAnIyMjIyMjIyMjIyMjIyMjIycsXHJcbiAgICAgICAgXSxcclxuICAgICAgICAyOiBbXHJcbiAgICAgICAgICAgICcjIyMjIyMjIyMjIyMjIyMjIycsXHJcbiAgICAgICAgICAgICcjICAgICAgICAgICAgICAgIycsXHJcbiAgICAgICAgICAgICcjICAgICAgICAgICAgICAgIycsXHJcbiAgICAgICAgICAgICcjICAgICAgICAgICMgICAgIycsXHJcbiAgICAgICAgICAgICcjWFggICAgICAgICMgICAgIycsXHJcbiAgICAgICAgICAgICcjIyMjIFAgICAjICMgIFcgIycsXHJcbiAgICAgICAgICAgICcjIyMjIyMjIyMjIyMjIyMjIycsXHJcbiAgICAgICAgXSxcclxuICAgICAgICAzOiBbXHJcbiAgICAgICAgICAgICcjIyMjIyMjIyMjIyMjIyMjJyxcclxuICAgICAgICAgICAgJyMgICAgICAgICAgICAgICMnLFxyXG4gICAgICAgICAgICAnIyAgICAgICAgICAgICAgIycsXHJcbiAgICAgICAgICAgICcjICAgICAgICAgIyAgICAjJyxcclxuICAgICAgICAgICAgJyNYWCAgICAgICAjICAgICMnLFxyXG4gICAgICAgICAgICAnIyMjWCAgUCAgICMgIFcgIycsXHJcbiAgICAgICAgICAgICcjIyMjIyMjIyMjIyMjIyMjJyxcclxuICAgICAgICBdLFxyXG4gICAgICAgIDQ6IFtcclxuICAgICAgICAgICAgJyMjIyMjIyMjIyMjIyMjIyMnLFxyXG4gICAgICAgICAgICAnIyAgICAgICAgICAgICAgIycsXHJcbiAgICAgICAgICAgICcjICAgICAgICAgICAgICAjJyxcclxuICAgICAgICAgICAgJyNYICAgICAgICAjICBXICMnLFxyXG4gICAgICAgICAgICAnI1hYICAgICAgICMgICMjIycsXHJcbiAgICAgICAgICAgICcjIyNYICBQICAgIyAgIyMjJyxcclxuICAgICAgICAgICAgJyMjIyMjIyMjIyMjIyMjIyMnLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgNTogW1xyXG4gICAgICAgICAgICAnIyMjIyMjIyMjIyMjIyMjIycsXHJcbiAgICAgICAgICAgICcjICAgICAgICMgICAgICAjJyxcclxuICAgICAgICAgICAgJyMgICAgICAgIyAgICBXICMnLFxyXG4gICAgICAgICAgICAnIyAgICAgICAgICAgICMjIycsXHJcbiAgICAgICAgICAgICcjWCAgICAgICMgICAgICAjJyxcclxuICAgICAgICAgICAgJyNYWCBQICAgI1ggICBYWCMnLFxyXG4gICAgICAgICAgICAnIyMjIyMjIyMjIyMjIyMjIycsXHJcbiAgICAgICAgXSxcclxuICAgICAgICA2OiBbXHJcbiAgICAgICAgICAgICcjIyMjIyMjIyMjIyMjIyMjIyMnLFxyXG4gICAgICAgICAgICAnIyAgICAgICAgICAgICAgICAjJyxcclxuICAgICAgICAgICAgJyMgICAgICAgICAgICAgIFcgIycsXHJcbiAgICAgICAgICAgICcjICAgICAgICAgICAgICAjIyMnLFxyXG4gICAgICAgICAgICAnIyAgICAgICAgWCAgICAgIyMjJyxcclxuICAgICAgICAgICAgJyNYICAgICAgICMgICAgWCMjIycsXHJcbiAgICAgICAgICAgICcjWFggUCAjICAgICAgWFgjIyMnLFxyXG4gICAgICAgICAgICAnIyMjIyMjIyMjIyMjIyMjIyMjJyxcclxuICAgICAgICBdLFxyXG4gICAgICAgIDc6IFtcclxuICAgICAgICAgICAgJyMjIyMjIyMjIyMjIyMjIyMjIycsXHJcbiAgICAgICAgICAgICcjICAgICAgICAgICAgICAgVyMnLFxyXG4gICAgICAgICAgICAnIyAgICAgICAgICAgICAgICMjJyxcclxuICAgICAgICAgICAgJyMgICAgICAgIyMjIyMjICAjIycsXHJcbiAgICAgICAgICAgICcjWFggICAgICAgICAgIyMjIyMnLFxyXG4gICAgICAgICAgICAnIyMjIyMjIyAgICAgICAgICAjJyxcclxuICAgICAgICAgICAgJyMgICAgICAgICAgIyAgICBYIycsXHJcbiAgICAgICAgICAgICcjWFggUCAgICAgICMgICBYWCMnLFxyXG4gICAgICAgICAgICAnIyMjIyMjIyMjIyMjIyMjIyMjJyxcclxuICAgICAgICBdLFxyXG4gICAgICAgIDg6IFtcclxuICAgICAgICAgICAgJyMjIyMjIyMjIyMjIyMjJyxcclxuICAgICAgICAgICAgJyNXICAgICAgICAgICAjJyxcclxuICAgICAgICAgICAgJyMjICAgICAgICAgICAjJyxcclxuICAgICAgICAgICAgJyMjUCAgICAgICAgICAjJyxcclxuICAgICAgICAgICAgJyMjIyBYICAgICAgWFgjJyxcclxuICAgICAgICAgICAgJyMjIyMjICAgICMjIyMjJyxcclxuICAgICAgICAgICAgJyMjIyMjICAgICAgICAjJyxcclxuICAgICAgICAgICAgJyMjIyMjICAgICAgWFgjJyxcclxuICAgICAgICAgICAgJyMjIyMjIyMjIyMjIyMjJyxcclxuICAgICAgICBdLFxyXG4gICAgICAgIDk6IFtcclxuICAgICAgICAgICAgJyMjIyMjIyMjIyMjIyMjIyMjIyMnLFxyXG4gICAgICAgICAgICAnIyAgICAgICAgICAgICAgICAgIycsXHJcbiAgICAgICAgICAgICcjICAgICBYICAgICAgICAgVyAjJyxcclxuICAgICAgICAgICAgJyMgICAgIyAjICAgIFggIyMjIyMnLFxyXG4gICAgICAgICAgICAnIyBQICMjICMjICAjICAjIyMjIycsXHJcbiAgICAgICAgICAgICcjIyMjIyMgIyMjIyMjIyMjIyMjJyxcclxuICAgICAgICAgICAgJyMjIyMjIyMjIyMjIyMjIyMjIyMnLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgMTA6IFtcclxuICAgICAgICAgICAgJyMjIyMjIyMjIyMjIyMjIyMjIyMjIycsXHJcbiAgICAgICAgICAgICcjIyMjIyMjIyMjIyMjIyMgICAgIyMnLFxyXG4gICAgICAgICAgICAnIyMjIyMjIyMjIyMjIyMgICAjICMjJyxcclxuICAgICAgICAgICAgJyMjIyAgICAgICAgICAgICAgIyAjIycsXHJcbiAgICAgICAgICAgICcjIyAgICAgIFggICBQICAgIyMgIyMnLFxyXG4gICAgICAgICAgICAnIyAgICAgIyMjIyMjIyMjIyMjICMjJyxcclxuICAgICAgICAgICAgJyMgICAgICAgICMjIyMjIyMjIyAjIycsXHJcbiAgICAgICAgICAgICcjWCAgICBYWFgjIyMjIyMjIyMgIyMnLFxyXG4gICAgICAgICAgICAnIyMjIyMjIyMjIyMjIyMjIyMjICMjJyxcclxuICAgICAgICAgICAgJyMjIyMjIyMjIyMjIyMjICAgICAjIycsXHJcbiAgICAgICAgICAgICcjIyMjIyMjIyMgICAgIyAjIyMjIyMnLFxyXG4gICAgICAgICAgICAnIyMjIyMjIyMjICMgICAgICAjIyMjJyxcclxuICAgICAgICAgICAgJyMjIyMjIyMjIyAjICAgICAgICAgIycsXHJcbiAgICAgICAgICAgICcjIyMjIyMjIyMgIyMjIyMjICAgICMnLFxyXG4gICAgICAgICAgICAnIyMjIyMjIyMjICMjICAgICAgICMjJyxcclxuICAgICAgICAgICAgJyMjIyMjIyMjIyAjI1hYWCAgIyMjIycsXHJcbiAgICAgICAgICAgICcjIyMjIyMjIyMgIyMjIyMjIyMjIyMnLFxyXG4gICAgICAgICAgICAnIyMjIyMjIyMjICAgICAgICAgVyMjJyxcclxuICAgICAgICAgICAgJyMjIyMjIyMjIyMjIyMjIyMjIyMjIycsXHJcbiAgICAgICAgXSxcclxuICAgICAgICAvLyBCbG9ja0R1ZGUgbGV2ZWxzXHJcbiAgICAgICAgLy8gNTogW1xyXG4gICAgICAgIC8vICAgICAnIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjJyxcclxuICAgICAgICAvLyAgICAgJyMjIyMjICAgICAgICAgICAgICAgICAgIycsXHJcbiAgICAgICAgLy8gICAgICcjIyMgICAgICAgICAgICAgICAgICAgICMnLFxyXG4gICAgICAgIC8vICAgICAnIyMgICAgICAgICAgICAgICAgICAgVyAjJyxcclxuICAgICAgICAvLyAgICAgJyMgICAgICAgICAgICAgICAgICAgIyMjIycsXHJcbiAgICAgICAgLy8gICAgICcjICAgIFggICMgICAgICAgICAgICMjIyMnLFxyXG4gICAgICAgIC8vICAgICAnIyAgUFhYIFgjICAgICAgICAgICAjIyMjJyxcclxuICAgICAgICAvLyAgICAgJyMjIyMjIyMjIyMjIyMgICAjIyMjIyMjIycsXHJcbiAgICAgICAgLy8gICAgICcjIyMjIyMjIyMjIyMjICBYIyMjIyMjIyMnLFxyXG4gICAgICAgIC8vICAgICAnIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjJyxcclxuICAgICAgICAvLyBdLFxyXG4gICAgICAgIC8vIDEwOiBbXHJcbiAgICAgICAgLy8gICAgICcjIyMjIyMjIyMjIyMjIyMjIyMjJyxcclxuICAgICAgICAvLyAgICAgJyMgIyMjICAgICAgICAgICAgICMnLFxyXG4gICAgICAgIC8vICAgICAnIyAgIyAgICAgICAgICAgICAgIycsXHJcbiAgICAgICAgLy8gICAgICcjICAgICAgICAgICAgICAgWCMnLFxyXG4gICAgICAgIC8vICAgICAnIyAgICAgICAgICAgICAgIFhYIycsXHJcbiAgICAgICAgLy8gICAgICcjICMjIyAgICBQICAgI1ggIyMjJyxcclxuICAgICAgICAvLyAgICAgJyMgIyMjICAgICMgICMjIyMjIyMnLFxyXG4gICAgICAgIC8vICAgICAnIyAjIyNYWCAjIyAgIyMjIyMjIycsXHJcbiAgICAgICAgLy8gICAgICcjVyMjIyMjIyMjICMjIyMjIyMjJyxcclxuICAgICAgICAvLyAgICAgJyMjIyMjIyMjIyMjIyMjIyMjIyMnLFxyXG4gICAgICAgIC8vIF0sXHJcbiAgICAgICAgLy8gMTM6IFtcclxuICAgICAgICAvLyAgICAgJyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIycsXHJcbiAgICAgICAgLy8gICAgICcjICAgICAgICAgICAgICAgICAgICAgICMnLFxyXG4gICAgICAgIC8vICAgICAnI1ggICAgICAgICAgICAgICAgICAgICAjJyxcclxuICAgICAgICAvLyAgICAgJyNYWCAgICAgICAgICAgICAgICAgICAgIycsXHJcbiAgICAgICAgLy8gICAgICcjIyMjICAgUCAgICAgICAgICAgICAgICMnLFxyXG4gICAgICAgIC8vICAgICAnIyMjIyAgICMgICAgICAgICAgIyAgICAjJyxcclxuICAgICAgICAvLyAgICAgJyMjIyMjIyMjICAgICAgICBYICMgIFcgIycsXHJcbiAgICAgICAgLy8gICAgICcjIyMjIyMjIyMjICBYICAgWCAjICMjIyMnLFxyXG4gICAgICAgIC8vICAgICAnIyMjIyMjIyMjIyBYIyAjIFggIyAjIyMjJyxcclxuICAgICAgICAvLyAgICAgJyMjIyMjIyMjIyMjIyMjIyMjIyMgIyMjIycsXHJcbiAgICAgICAgLy8gICAgICcjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMnLFxyXG4gICAgICAgIC8vIF0sXHJcbiAgICAgICAgLy8gMTQ6IFtcclxuICAgICAgICAvLyAgICAgJyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIycsXHJcbiAgICAgICAgLy8gICAgICcjICAgICAgICAgICAgICAgICAgICAgICMnLFxyXG4gICAgICAgIC8vICAgICAnIyAgICAgICAgICAgICAgICAgICAgICAjJyxcclxuICAgICAgICAvLyAgICAgJyMgICAgICAgICAgICAgICAgICAgICAgIycsXHJcbiAgICAgICAgLy8gICAgICcjICAgICAgICAgICAgICAjICAgICAgICMnLFxyXG4gICAgICAgIC8vICAgICAnIyAgICAgICAgICAgICAgIyAgICAgICAjJyxcclxuICAgICAgICAvLyAgICAgJyMgICAgICAgICAgWFhYWCMgICAgICAgIycsXHJcbiAgICAgICAgLy8gICAgICcjICAgICAgICBQIyMjIyMjIyAgICBXICMnLFxyXG4gICAgICAgIC8vICAgICAnI1ggICAgICMgIyMjIyMjIyMjIyAjIyMjJyxcclxuICAgICAgICAvLyAgICAgJyNYWCAgICMjICMjIyMjIyMjIyMgIyMjIycsXHJcbiAgICAgICAgLy8gICAgICcjWFhYICAjIyAjIyMjIyMjIyMjICMjIyMnLFxyXG4gICAgICAgIC8vICAgICAnIyMjIyMjIyMgIyMjIyMjIyMjIyMjIyMjJyxcclxuICAgICAgICAvLyAgICAgJyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIycsXHJcbiAgICAgICAgLy8gXSxcclxuICAgICAgICAvLyAxNTogW1xyXG4gICAgICAgIC8vICAgICAnIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMnLFxyXG4gICAgICAgIC8vICAgICAnIyMjICAjIyMgICAgICMjIyAgIyMjICAgIyMnLFxyXG4gICAgICAgIC8vICAgICAnIyMgICAgIyMgICAgICAjIyAgICMjICAgICMnLFxyXG4gICAgICAgIC8vICAgICAnIyAgICAgICMgICAgICAgIyAgICAjICAgICMnLFxyXG4gICAgICAgIC8vICAgICAnIyAgICAgICAgICAgICAgICAgICAgICAgWCMnLFxyXG4gICAgICAgIC8vICAgICAnIyAgICAgICAgICAgICAgICAgICAgICAgWCMnLFxyXG4gICAgICAgIC8vICAgICAnIyAgICAgICAgICAgICAgICAgICAgICBYWCMnLFxyXG4gICAgICAgIC8vICAgICAnIyBXICAgIFggICAgICAgICAgICAgICAjIyMnLFxyXG4gICAgICAgIC8vICAgICAnIyMjIyAgICMgWCAgICAgIyAgICAjIyAjIyMnLFxyXG4gICAgICAgIC8vICAgICAnIyMjIyAgICMgWCAgICAjIyBYIFAjIyMjIyMnLFxyXG4gICAgICAgIC8vICAgICAnIyMjIyMgICMgWFhYICAjIyBYWFgjIyMjIyMnLFxyXG4gICAgICAgIC8vICAgICAnIyMjIyMgICMjIyMjIyAjIyMjIyMjIyMjIyMnLFxyXG4gICAgICAgIC8vICAgICAnIyMjIyMjICMjIyMjIyMjIyMjIyMjIyMjIyMnLFxyXG4gICAgICAgIC8vICAgICAnIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMnLFxyXG4gICAgICAgIC8vIF0sXHJcbiAgICAgICAgLy8gMTc6IFtcclxuICAgICAgICAvLyAgICAgJyMjIyMjIyMjIyMjIyMjIyMjIycsXHJcbiAgICAgICAgLy8gICAgICcjICAgICAgICAgICAgICAgICMnLFxyXG4gICAgICAgIC8vICAgICAnIyAgICAgICAgICAgICAgICAjJyxcclxuICAgICAgICAvLyAgICAgJyMgICAgICAgICAgICAgICAgIycsXHJcbiAgICAgICAgLy8gICAgICcjICAgICAgICAgICAgICAgICMnLFxyXG4gICAgICAgIC8vICAgICAnIyAgICAgICAgICAgICAgICAjJyxcclxuICAgICAgICAvLyAgICAgJyMgICAgICAgICAgICAgICAgIycsXHJcbiAgICAgICAgLy8gICAgICcjIFAgICAgICAgICAgICAgICMnLFxyXG4gICAgICAgIC8vICAgICAnIyMjIyMjIyMjIyMjIyMjIyMjJyxcclxuICAgICAgICAvLyBdLFxyXG4gICAgICAgIC8vIDE4OiBbXHJcbiAgICAgICAgLy8gICAgICcjIyMjIyMjIyMjIyMjIyMjIyMnLFxyXG4gICAgICAgIC8vICAgICAnIyAgICAgICAgICAgICAgICAjJyxcclxuICAgICAgICAvLyAgICAgJyMgICAgICAgICAgICAgICAgIycsXHJcbiAgICAgICAgLy8gICAgICcjICAgICAgICAgICAgICAgICMnLFxyXG4gICAgICAgIC8vICAgICAnIyAgICAgICAgICAgICAgICAjJyxcclxuICAgICAgICAvLyAgICAgJyMgICAgICAgICAgICAgICAgIycsXHJcbiAgICAgICAgLy8gICAgICcjICAgICAgICAgICAgICAgICMnLFxyXG4gICAgICAgIC8vICAgICAnIyBQICAgICAgICAgICAgICAjJyxcclxuICAgICAgICAvLyAgICAgJyMjIyMjIyMjIyMjIyMjIyMjIycsXHJcbiAgICAgICAgLy8gXSxcclxuICAgICAgICAvLyAxOTogW1xyXG4gICAgICAgIC8vICAgICAnIyMjIyMjIyMjIyMjIyMjIyMjJyxcclxuICAgICAgICAvLyAgICAgJyMgICAgICAgICAgICAgICAgIycsXHJcbiAgICAgICAgLy8gICAgICcjICAgICAgICAgICAgICAgICMnLFxyXG4gICAgICAgIC8vICAgICAnIyAgICAgICAgICAgICAgICAjJyxcclxuICAgICAgICAvLyAgICAgJyMgICAgICAgICAgICAgICAgIycsXHJcbiAgICAgICAgLy8gICAgICcjICAgICAgICAgICAgICAgICMnLFxyXG4gICAgICAgIC8vICAgICAnIyAgICAgICAgICAgICAgICAjJyxcclxuICAgICAgICAvLyAgICAgJyMgUCAgICAgICAgICAgICAgIycsXHJcbiAgICAgICAgLy8gICAgICcjIyMjIyMjIyMjIyMjIyMjIyMnLFxyXG4gICAgICAgIC8vIF0sXHJcbiAgICAgICAgLy8gLy9cclxuICAgICAgICAvLyAyMDogW1xyXG4gICAgICAgIC8vICAgICAnIyMjIyMjIyMjIyMjIyMjIyMjJyxcclxuICAgICAgICAvLyAgICAgJyMgICAgICAgICAgICAgICAgIycsXHJcbiAgICAgICAgLy8gICAgICcjICAgICAgICAgICAgICAgICMnLFxyXG4gICAgICAgIC8vICAgICAnIyAgICAgICAgICAgICAgICAjJyxcclxuICAgICAgICAvLyAgICAgJyMgICAgICAgICAgICAgICAgIycsXHJcbiAgICAgICAgLy8gICAgICcjICAgICAgICAgICAgICAgICMnLFxyXG4gICAgICAgIC8vICAgICAnIyAgICAgICAgICAgICAgICAjJyxcclxuICAgICAgICAvLyAgICAgJyMgUCAgICAgICAgICAgICAgIycsXHJcbiAgICAgICAgLy8gICAgICcjIyMjIyMjIyMjIyMjIyMjIyMnLFxyXG4gICAgICAgIC8vIF0sXHJcbiAgICAgICAgLy8gMjE6IFtcclxuICAgICAgICAvLyAgICAgJyMjIyMjIyMjIyMjIyMjIyMjIycsXHJcbiAgICAgICAgLy8gICAgICcjICAgICAgICAgICAgICAgICMnLFxyXG4gICAgICAgIC8vICAgICAnIyAgICAgICAgICAgICAgICAjJyxcclxuICAgICAgICAvLyAgICAgJyMgICAgICAgICAgICAgICAgIycsXHJcbiAgICAgICAgLy8gICAgICcjICAgICAgICAgICAgICAgICMnLFxyXG4gICAgICAgIC8vICAgICAnIyAgICAgICAgICAgICAgICAjJyxcclxuICAgICAgICAvLyAgICAgJyMgICAgICAgICAgICAgICAgIycsXHJcbiAgICAgICAgLy8gICAgICcjIFAgICAgICAgICAgICAgICMnLFxyXG4gICAgICAgIC8vICAgICAnIyMjIyMjIyMjIyMjIyMjIyMjJyxcclxuICAgICAgICAvLyBdLFxyXG4gICAgICAgIC8vIDIyOiBbXHJcbiAgICAgICAgLy8gICAgICcjIyMjIyMjIyMjIyMjIyMjIyMnLFxyXG4gICAgICAgIC8vICAgICAnIyAgICAgICAgICAgICAgICAjJyxcclxuICAgICAgICAvLyAgICAgJyMgICAgICAgICAgICAgICAgIycsXHJcbiAgICAgICAgLy8gICAgICcjICAgICAgICAgICAgICAgICMnLFxyXG4gICAgICAgIC8vICAgICAnIyAgICAgICAgICAgICAgICAjJyxcclxuICAgICAgICAvLyAgICAgJyMgICAgICAgICAgICAgICAgIycsXHJcbiAgICAgICAgLy8gICAgICcjICAgICAgICAgICAgICAgICMnLFxyXG4gICAgICAgIC8vICAgICAnIyBQICAgICAgICAgICAgICAjJyxcclxuICAgICAgICAvLyAgICAgJyMjIyMjIyMjIyMjIyMjIyMjIycsXHJcbiAgICAgICAgLy8gXSxcclxuICAgICAgICAvLyAyMzogW1xyXG4gICAgICAgIC8vICAgICAnIyMjIyMjIyMjIyMjIyMjIyMjJyxcclxuICAgICAgICAvLyAgICAgJyMgICAgICAgICAgICAgICAgIycsXHJcbiAgICAgICAgLy8gICAgICcjICAgICAgICAgICAgICAgICMnLFxyXG4gICAgICAgIC8vICAgICAnIyAgICAgICAgICAgICAgICAjJyxcclxuICAgICAgICAvLyAgICAgJyMgICAgICAgICAgICAgICAgIycsXHJcbiAgICAgICAgLy8gICAgICcjICAgICAgICAgICAgICAgICMnLFxyXG4gICAgICAgIC8vICAgICAnIyAgICAgICAgICAgICAgICAjJyxcclxuICAgICAgICAvLyAgICAgJyMgUCAgICAgICAgICAgICAgIycsXHJcbiAgICAgICAgLy8gICAgICcjIyMjIyMjIyMjIyMjIyMjIyMnLFxyXG4gICAgICAgIC8vIF0sXHJcbiAgICAgICAgLy8gMjQ6IFtcclxuICAgICAgICAvLyAgICAgJyMjIyMjIyMjIyMjIyMjIyMjIycsXHJcbiAgICAgICAgLy8gICAgICcjICAgICAgICAgICAgICAgICMnLFxyXG4gICAgICAgIC8vICAgICAnIyAgICAgICAgICAgICAgICAjJyxcclxuICAgICAgICAvLyAgICAgJyMgICAgICAgICAgICAgICAgIycsXHJcbiAgICAgICAgLy8gICAgICcjICAgICAgICAgICAgICAgICMnLFxyXG4gICAgICAgIC8vICAgICAnIyAgICAgICAgICAgICAgICAjJyxcclxuICAgICAgICAvLyAgICAgJyMgICAgICAgICAgICAgICAgIycsXHJcbiAgICAgICAgLy8gICAgICcjIFAgICAgICAgICAgICAgICMnLFxyXG4gICAgICAgIC8vICAgICAnIyMjIyMjIyMjIyMjIyMjIyMjJyxcclxuICAgICAgICAvLyBdLFxyXG4gICAgICAgIC8vIDI1OiBbXHJcbiAgICAgICAgLy8gICAgICcjIyMjIyMjIyMjIyMjIyMjIyMnLFxyXG4gICAgICAgIC8vICAgICAnIyAgICAgICAgICAgICAgICAjJyxcclxuICAgICAgICAvLyAgICAgJyMgICAgICAgICAgICAgICAgIycsXHJcbiAgICAgICAgLy8gICAgICcjICAgICAgICAgICAgICAgICMnLFxyXG4gICAgICAgIC8vICAgICAnIyAgICAgICAgICAgICAgICAjJyxcclxuICAgICAgICAvLyAgICAgJyMgICAgICAgICAgICAgICAgIycsXHJcbiAgICAgICAgLy8gICAgICcjICAgICAgICAgICAgICAgICMnLFxyXG4gICAgICAgIC8vICAgICAnIyBQICAgICAgICAgICAgICAjJyxcclxuICAgICAgICAvLyAgICAgJyMjIyMjIyMjIyMjIyMjIyMjIycsXHJcbiAgICAgICAgLy8gXSxcclxuICAgICAgICAvLyAyNjogW1xyXG4gICAgICAgIC8vICAgICAnIyMjIyMjIyMjIyMjIyMjIyMjJyxcclxuICAgICAgICAvLyAgICAgJyMgICAgICAgICAgICAgICAgIycsXHJcbiAgICAgICAgLy8gICAgICcjICAgICAgICAgICAgICAgICMnLFxyXG4gICAgICAgIC8vICAgICAnIyAgICAgICAgICAgICAgICAjJyxcclxuICAgICAgICAvLyAgICAgJyMgICAgICAgICAgICAgICAgIycsXHJcbiAgICAgICAgLy8gICAgICcjICAgICAgICAgICAgICAgICMnLFxyXG4gICAgICAgIC8vICAgICAnIyAgICAgICAgICAgICAgICAjJyxcclxuICAgICAgICAvLyAgICAgJyMgUCAgICAgICAgICAgICAgIycsXHJcbiAgICAgICAgLy8gICAgICcjIyMjIyMjIyMjIyMjIyMjIyMnLFxyXG4gICAgICAgIC8vIF0sXHJcbiAgICAgICAgLy8gMjc6IFtcclxuICAgICAgICAvLyAgICAgJyMjIyMjIyMjIyMjIyMjIyMjIycsXHJcbiAgICAgICAgLy8gICAgICcjICAgICAgICAgICAgICAgICMnLFxyXG4gICAgICAgIC8vICAgICAnIyAgICAgICAgICAgICAgICAjJyxcclxuICAgICAgICAvLyAgICAgJyMgICAgICAgICAgICAgICAgIycsXHJcbiAgICAgICAgLy8gICAgICcjICAgICAgICAgICAgICAgICMnLFxyXG4gICAgICAgIC8vICAgICAnIyAgICAgICAgICAgICAgICAjJyxcclxuICAgICAgICAvLyAgICAgJyMgICAgICAgICAgICAgICAgIycsXHJcbiAgICAgICAgLy8gICAgICcjIFAgICAgICAgICAgICAgICMnLFxyXG4gICAgICAgIC8vICAgICAnIyMjIyMjIyMjIyMjIyMjIyMjJyxcclxuICAgICAgICAvLyBdLFxyXG4gICAgICAgIC8vIDI4OiBbXHJcbiAgICAgICAgLy8gICAgICcjIyMjIyMjIyMjIyMjIyMjIyMnLFxyXG4gICAgICAgIC8vICAgICAnIyAgICAgICAgICAgICAgICAjJyxcclxuICAgICAgICAvLyAgICAgJyMgICAgICAgICAgICAgICAgIycsXHJcbiAgICAgICAgLy8gICAgICcjICAgICAgICAgICAgICAgICMnLFxyXG4gICAgICAgIC8vICAgICAnIyAgICAgICAgICAgICAgICAjJyxcclxuICAgICAgICAvLyAgICAgJyMgICAgICAgICAgICAgICAgIycsXHJcbiAgICAgICAgLy8gICAgICcjICAgICAgICAgICAgICAgICMnLFxyXG4gICAgICAgIC8vICAgICAnIyBQICAgICAgICAgICAgICAjJyxcclxuICAgICAgICAvLyAgICAgJyMjIyMjIyMjIyMjIyMjIyMjIycsXHJcbiAgICAgICAgLy8gXSxcclxuICAgICAgICAvLyAyOTogW1xyXG4gICAgICAgIC8vICAgICAnIyMjIyMjIyMjIyMjIyMjIyMjJyxcclxuICAgICAgICAvLyAgICAgJyMgICAgICAgICAgICAgICAgIycsXHJcbiAgICAgICAgLy8gICAgICcjICAgICAgICAgICAgICAgICMnLFxyXG4gICAgICAgIC8vICAgICAnIyAgICAgICAgICAgICAgICAjJyxcclxuICAgICAgICAvLyAgICAgJyMgICAgICAgICAgICAgICAgIycsXHJcbiAgICAgICAgLy8gICAgICcjICAgICAgICAgICAgICAgICMnLFxyXG4gICAgICAgIC8vICAgICAnIyAgICAgICAgICAgICAgICAjJyxcclxuICAgICAgICAvLyAgICAgJyMgUCAgICAgICAgICAgICAgIycsXHJcbiAgICAgICAgLy8gICAgICcjIyMjIyMjIyMjIyMjIyMjIyMnLFxyXG4gICAgICAgIC8vIF0sXHJcbiAgICAgICAgLy8gMzA6IFtcclxuICAgICAgICAvLyAgICAgJyMjIyMjIyMjIyMjIyMjIyMjIycsXHJcbiAgICAgICAgLy8gICAgICcjICAgICAgICAgICAgICAgICMnLFxyXG4gICAgICAgIC8vICAgICAnIyAgICAgICAgICAgICAgICAjJyxcclxuICAgICAgICAvLyAgICAgJyMgICAgICAgICAgICAgICAgIycsXHJcbiAgICAgICAgLy8gICAgICcjICAgICAgICAgICAgICAgICMnLFxyXG4gICAgICAgIC8vICAgICAnIyAgICAgICAgICAgICAgICAjJyxcclxuICAgICAgICAvLyAgICAgJyMgICAgICAgICAgICAgICAgIycsXHJcbiAgICAgICAgLy8gICAgICcjIFAgICAgICAgICAgICAgICMnLFxyXG4gICAgICAgIC8vICAgICAnIyMjIyMjIyMjIyMjIyMjIyMjJyxcclxuICAgICAgICAvLyBdLFxyXG4gICAgICAgIC8vIDMxOiBbXHJcbiAgICAgICAgLy8gICAgICcjIyMjIyMjIyMjIyMjIyMjIyMnLFxyXG4gICAgICAgIC8vICAgICAnIyAgICAgICAgICAgICAgICAjJyxcclxuICAgICAgICAvLyAgICAgJyMgICAgICAgICAgICAgICAgIycsXHJcbiAgICAgICAgLy8gICAgICcjICAgICAgICAgICAgICAgICMnLFxyXG4gICAgICAgIC8vICAgICAnIyAgICAgICAgICAgICAgICAjJyxcclxuICAgICAgICAvLyAgICAgJyMgICAgICAgICAgICAgICAgIycsXHJcbiAgICAgICAgLy8gICAgICcjICAgICAgICAgICAgICAgICMnLFxyXG4gICAgICAgIC8vICAgICAnIyBQICAgICAgICAgICAgICAjJyxcclxuICAgICAgICAvLyAgICAgJyMjIyMjIyMjIyMjIyMjIyMjIycsXHJcbiAgICAgICAgLy8gXSxcclxuICAgICAgICAvLyAzMjogW1xyXG4gICAgICAgIC8vICAgICAnIyMjIyMjIyMjIyMjIyMjIyMjJyxcclxuICAgICAgICAvLyAgICAgJyMgICAgICAgICAgICAgICAgIycsXHJcbiAgICAgICAgLy8gICAgICcjICAgICAgICAgICAgICAgICMnLFxyXG4gICAgICAgIC8vICAgICAnIyAgICAgICAgICAgICAgICAjJyxcclxuICAgICAgICAvLyAgICAgJyMgICAgICAgICAgICAgICAgIycsXHJcbiAgICAgICAgLy8gICAgICcjICAgICAgICAgICAgICAgICMnLFxyXG4gICAgICAgIC8vICAgICAnIyAgICAgICAgICAgICAgICAjJyxcclxuICAgICAgICAvLyAgICAgJyMgUCAgICAgICAgICAgICAgIycsXHJcbiAgICAgICAgLy8gICAgICcjIyMjIyMjIyMjIyMjIyMjIyMnLFxyXG4gICAgICAgIC8vIF0sXHJcbiAgICAgICAgLy8gMzM6IFtcclxuICAgICAgICAvLyAgICAgJyMjIyMjIyMjIyMjIyMjIyMjIycsXHJcbiAgICAgICAgLy8gICAgICcjICAgICAgICAgICAgICAgICMnLFxyXG4gICAgICAgIC8vICAgICAnIyAgICAgICAgICAgICAgICAjJyxcclxuICAgICAgICAvLyAgICAgJyMgICAgICAgICAgICAgICAgIycsXHJcbiAgICAgICAgLy8gICAgICcjICAgICAgICAgICAgICAgICMnLFxyXG4gICAgICAgIC8vICAgICAnIyAgICAgICAgICAgICAgICAjJyxcclxuICAgICAgICAvLyAgICAgJyMgICAgICAgICAgICAgICAgIycsXHJcbiAgICAgICAgLy8gICAgICcjIFAgICAgICAgICAgICAgICMnLFxyXG4gICAgICAgIC8vICAgICAnIyMjIyMjIyMjIyMjIyMjIyMjJyxcclxuICAgICAgICAvLyBdLFxyXG4gICAgICAgIC8vIDM0OiBbXHJcbiAgICAgICAgLy8gICAgICcjIyMjIyMjIyMjIyMjIyMjIyMnLFxyXG4gICAgICAgIC8vICAgICAnIyAgICAgICAgICAgICAgICAjJyxcclxuICAgICAgICAvLyAgICAgJyMgICAgICAgICAgICAgICAgIycsXHJcbiAgICAgICAgLy8gICAgICcjICAgICAgICAgICAgICAgICMnLFxyXG4gICAgICAgIC8vICAgICAnIyAgICAgICAgICAgICAgICAjJyxcclxuICAgICAgICAvLyAgICAgJyMgICAgICAgICAgICAgICAgIycsXHJcbiAgICAgICAgLy8gICAgICcjICAgICAgICAgICAgICAgICMnLFxyXG4gICAgICAgIC8vICAgICAnIyBQICAgICAgICAgICAgICAjJyxcclxuICAgICAgICAvLyAgICAgJyMjIyMjIyMjIyMjIyMjIyMjIycsXHJcbiAgICAgICAgLy8gXSxcclxuICAgICAgICAvLyAzNTogW1xyXG4gICAgICAgIC8vICAgICAnIyMjIyMjIyMjIyMjIyMjIyMjJyxcclxuICAgICAgICAvLyAgICAgJyMgICAgICAgICAgICAgICAgIycsXHJcbiAgICAgICAgLy8gICAgICcjICAgICAgICAgICAgICAgICMnLFxyXG4gICAgICAgIC8vICAgICAnIyAgICAgICAgICAgICAgICAjJyxcclxuICAgICAgICAvLyAgICAgJyMgICAgICAgICAgICAgICAgIycsXHJcbiAgICAgICAgLy8gICAgICcjICAgICAgICAgICAgICAgICMnLFxyXG4gICAgICAgIC8vICAgICAnIyAgICAgICAgICAgICAgICAjJyxcclxuICAgICAgICAvLyAgICAgJyMgUCAgICAgICAgICAgICAgIycsXHJcbiAgICAgICAgLy8gICAgICcjIyMjIyMjIyMjIyMjIyMjIyMnLFxyXG4gICAgICAgIC8vIF0sXHJcbiAgICB9O1xyXG5cclxuICAgIHN0YXRpYyBnZXQobGV2ZWxOdW1iZXI6IG51bWJlcik6IHN0cmluZ1tdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5sZXZlbHNbbGV2ZWxOdW1iZXJdO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2dhbWUvdXRpbC9kYXRhLnRzIiwiY29uc3QgRGVmYXVsdEhlaWdodCA9IDQ4MDtcclxuY29uc3QgRGVmYXVsdFdpZHRoID0gNjQwO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBHYW1lQ2FudmFzT3B0aW9ucyB7XHJcbiAgICBoZWlnaHQ6IG51bWJlcjtcclxuICAgIHdpZHRoOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgR2FtZUNhbnZhcyB7XHJcbiAgICBpbml0KG9wdGlvbnM6IEdhbWVDYW52YXNPcHRpb25zKTogdm9pZDtcclxuICAgIGdldENvbnRleHQoKTogR2FtZUNhbnZhc0NvbnRleHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lQ2FudmFzSFRNTDJEIGltcGxlbWVudHMgR2FtZUNhbnZhcyB7XHJcbiAgICByZWFkb25seSBnYW1lQ2FudmFzQ29udGV4dDogR2FtZUNhbnZhc0NvbnRleHQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIHJlYWRvbmx5IGNhbnZhc0VsZW1lbnQ6IEhUTUxDYW52YXNFbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy5nYW1lQ2FudmFzQ29udGV4dCA9IG5ldyBHYW1lQ2FudmFzQ29udGV4dDJEKHRoaXMuY2FudmFzRWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q29udGV4dCgpOiBHYW1lQ2FudmFzQ29udGV4dCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2FtZUNhbnZhc0NvbnRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdChvcHRpb25zOiBHYW1lQ2FudmFzT3B0aW9ucykge1xyXG4gICAgICAgIGlmICh0aGlzLmNhbnZhc0VsZW1lbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5jYW52YXNFbGVtZW50LmhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0O1xyXG4gICAgICAgICAgICB0aGlzLmNhbnZhc0VsZW1lbnQud2lkdGggPSBvcHRpb25zLndpZHRoO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDYW52YXNEcmF3T3B0aW9ucyB7XHJcbiAgICBvcGFjaXR5PzogbnVtYmVyO1xyXG4gICAgdGlsZVg/OiBib29sZWFuO1xyXG4gICAgdGlsZVk/OiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEdhbWVDYW52YXNDb250ZXh0IHtcclxuICAgIG9yaWdpbjogW251bWJlciwgbnVtYmVyXTtcclxuICAgIGNsZWFyKCk6IHZvaWQ7XHJcbiAgICBmaWxsKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBjb2xvcjogc3RyaW5nKTogdm9pZDtcclxuICAgIGZpbGxBcmVhKHg6IG51bWJlciwgeTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgY29sb3I6IHN0cmluZyk6IHZvaWQ7XHJcbiAgICBkcmF3SW1hZ2UoaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQsIHNyY1g6IG51bWJlciwgc3JjWTogbnVtYmVyLCBkZXN0WDogbnVtYmVyLCBkZXN0WTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgb3B0aW9ucz86IENhbnZhc0RyYXdPcHRpb25zKTogdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWVDYW52YXNDb250ZXh0MkQgaW1wbGVtZW50cyBHYW1lQ2FudmFzQ29udGV4dCB7XHJcbiAgICBvcmlnaW46IFtudW1iZXIsIG51bWJlcl07XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjYW52YXNFbGVtZW50OiBIVE1MQ2FudmFzRWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMub3JpZ2luID0gWzAsIDBdO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0IGNhbnZhc0NvbnRleHQyRCgpOiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNhbnZhc0VsZW1lbnQuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhcigpIHtcclxuICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQyRC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXNFbGVtZW50LndpZHRoLCB0aGlzLmNhbnZhc0VsZW1lbnQuaGVpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBmaWxsKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBjb2xvcjogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IFt4LCB5XSA9IHRoaXMub3JpZ2luO1xyXG4gICAgICAgIHRoaXMuZmlsbEFyZWEoeCwgeSwgd2lkdGgsIGhlaWdodCwgY29sb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbGxBcmVhKHg6IG51bWJlciwgeTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgY29sb3I6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuY2FudmFzQ29udGV4dDJELmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuY2FudmFzQ29udGV4dDJELnJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0MkQuZmlsbFN0eWxlID0gY29sb3I7XHJcbiAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0MkQuZmlsbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXdJbWFnZShpbWFnZTogSFRNTEltYWdlRWxlbWVudCwgc3JjWDogbnVtYmVyLCBzcmNZOiBudW1iZXIsIGRlc3RYOiBudW1iZXIsIGRlc3RZOiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBvcHRpb25zOiBDYW52YXNEcmF3T3B0aW9ucyA9IHt9KTogdm9pZCB7XHJcbiAgICAgICAgLy8gc2V0IG9wYWNpdHlcclxuICAgICAgICBjb25zdCBkZWZhdWx0T3BhY2l0eSA9IDE7XHJcbiAgICAgICAgbGV0IHByZXZpb3VzT3BhY2l0eTogbnVtYmVyID0gbnVsbDtcclxuXHJcbiAgICAgICAgaWYgKG9wdGlvbnMub3BhY2l0eSAhPT0gZGVmYXVsdE9wYWNpdHkgJiYgb3B0aW9ucy5vcGFjaXR5ICE9PSBudWxsICYmIG9wdGlvbnMub3BhY2l0eSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHByZXZpb3VzT3BhY2l0eSA9IHRoaXMuY2FudmFzQ29udGV4dDJELmdsb2JhbEFscGhhO1xyXG4gICAgICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQyRC5nbG9iYWxBbHBoYSA9IG9wdGlvbnMub3BhY2l0eTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGRyYXcgdGhlIGltYWdlIHJlbGF0aXZlIHRvIHRoZSBvcmlnaW5cclxuICAgICAgICBsZXQgW29yaWdpblgsIG9yaWdpblldID0gdGhpcy5vcmlnaW47XHJcblxyXG4gICAgICAgIGlmIChvcHRpb25zLnRpbGVYIHx8IG9wdGlvbnMudGlsZVkpIHtcclxuICAgICAgICAgICAgbGV0IHJlcGV0aXRpb24gPSBvcHRpb25zLnRpbGVYICYmIG9wdGlvbnMudGlsZVkgPyAncmVwZWF0JyA6IG9wdGlvbnMudGlsZVggPyAncmVwZWF0LXgnIDogJ3JlcGVhdC15JztcclxuICAgICAgICAgICAgbGV0IHBhdHRlcm4gPSB0aGlzLmNhbnZhc0NvbnRleHQyRC5jcmVhdGVQYXR0ZXJuKGltYWdlLCByZXBldGl0aW9uKTtcclxuICAgICAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0MkQuZmlsbFN0eWxlID0gcGF0dGVybjtcclxuICAgICAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0MkQuZmlsbFJlY3Qob3JpZ2luWCArIGRlc3RYLCBvcmlnaW5ZICsgZGVzdFksIHRoaXMuY2FudmFzQ29udGV4dDJELmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXNDb250ZXh0MkQuY2FudmFzLmhlaWdodCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQyRC5kcmF3SW1hZ2UoaW1hZ2UsIHNyY1gsIHNyY1ksIHdpZHRoLCBoZWlnaHQsIE1hdGguZmxvb3Iob3JpZ2luWCArIGRlc3RYKSwgTWF0aC5mbG9vcihvcmlnaW5ZICsgZGVzdFkpLCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHJlc2V0IG9wYWNpdHlcclxuICAgICAgICBpZiAocHJldmlvdXNPcGFjaXR5ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FudmFzQ29udGV4dDJELmdsb2JhbEFscGhhID0gcHJldmlvdXNPcGFjaXR5O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL2NhbnZhcy50cyIsImltcG9ydCB7IEFjdG9yIH0gZnJvbSAnLi9hY3Rvcic7XHJcbmltcG9ydCB7IEdhbWVDYW52YXMsIEdhbWVDYW52YXNDb250ZXh0IH0gZnJvbSAnLi9jYW52YXMnO1xyXG5pbXBvcnQgeyBEZWZlcnJlZEV2ZW50IH0gZnJvbSAnLi9ldmVudHMnO1xyXG5pbXBvcnQgeyBJbnB1dCwgQ29uY3JldGVFdmVudEhhbmRsZXIsIFBvaW50ZXJJbnB1dEV2ZW50IH0gZnJvbSAnLi9pbnB1dCc7XHJcbmltcG9ydCB7IFJvb20gfSBmcm9tICcuL3Jvb20nO1xyXG5pbXBvcnQgeyBTcHJpdGUgfSBmcm9tICcuL3Nwcml0ZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZUNvbnRleHQge1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBhY3RvcnM6IHsgW2luZGV4OiBzdHJpbmddOiBBY3RvciB9ID0ge307XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGV2ZW50czogeyBbaW5kZXg6IG51bWJlcl06IERlZmVycmVkRXZlbnQgfSA9IHt9O1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSByb29tczogeyBbaW5kZXg6IHN0cmluZ106IFJvb20gfSA9IHt9O1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBzcHJpdGVzOiB7IFtpbmRleDogc3RyaW5nXTogU3ByaXRlfSA9IHt9O1xyXG5cclxuICAgIHByaXZhdGUgY3VycmVudFJvb206IFJvb207XHJcbiAgICBwcml2YXRlIGN1cnJlbnRSb29tQ2xpY2tIYW5kbGVyOiBDb25jcmV0ZUV2ZW50SGFuZGxlcjxQb2ludGVySW5wdXRFdmVudD47XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjYW52YXM6IEdhbWVDYW52YXMpIHtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDYW52YXNDb250ZXh0KCk6IEdhbWVDYW52YXNDb250ZXh0IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGFjdG9yc1xyXG4gICAgZGVmaW5lQWN0b3IobmFtZTogc3RyaW5nLCBhY3RvcjogQWN0b3IpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5hY3RvcnNbbmFtZV0pIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBY3RvciAke25hbWV9IGhhcyBhbHJlYWR5IGJlZW4gZGVmaW5lZC5gKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYWN0b3JzW25hbWVdID0gYWN0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWN0b3IobmFtZTogc3RyaW5nKTogQWN0b3Ige1xyXG4gICAgICAgIGlmICghdGhpcy5hY3RvcnNbbmFtZV0pIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBY3RvciAke25hbWV9IGhhcyBub3QgYmVlbiBkZWZpbmVkLmApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWN0b3JzW25hbWVdO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGV2ZW50c1xyXG4gICAgcHJpdmF0ZSBuZXh0RXZlbnRJRCA9ICgoKSA9PiB7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRJRCA9IDA7XHJcbiAgICAgICAgcmV0dXJuICgoKSA9PiArK2N1cnJlbnRJRCk7XHJcbiAgICB9KSgpO1xyXG5cclxuICAgIHJlZ2lzdGVyRXZlbnQoZXZlbnQ6IERlZmVycmVkRXZlbnQpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmV2ZW50c1t0aGlzLm5leHRFdmVudElEKCldID0gZXZlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tBbmRGaXJlRXZlbnRzKCk6IHZvaWQge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGZvciAobGV0IGV2ZW50SUQgaW4gdGhpcy5ldmVudHMpIHtcclxuICAgICAgICAgICAgbGV0IGV2ZW50ID0gdGhpcy5ldmVudHNbZXZlbnRJRF07XHJcblxyXG4gICAgICAgICAgICBpZiAoZXZlbnQuY29uZGl0aW9uQ2FsbGJhY2soKSkge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQuYWN0aW9uQ2FsbGJhY2soKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQuZmlyZU9uY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5ldmVudHNbZXZlbnRJRF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcm9vbXNcclxuICAgIGRlZmluZVJvb20obmFtZTogc3RyaW5nLCByb29tOiBSb29tKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMucm9vbXNbbmFtZV0pIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBSb29tICR7bmFtZX0gaGFzIGFscmVhZHkgYmVlbiBkZWZpbmVkLmApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5yb29tc1tuYW1lXSA9IHJvb207XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Um9vbShuYW1lOiBzdHJpbmcpOiBSb29tIHtcclxuICAgICAgICBpZiAoIXRoaXMucm9vbXNbbmFtZV0pIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBSb29tICR7bmFtZX0gaGFzIG5vdCBiZWVuIGRlZmluZWQuYCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5yb29tc1tuYW1lXTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDdXJyZW50Um9vbSgpOiBSb29tIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50Um9vbTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRDdXJyZW50Um9vbShyb29tOiBSb29tKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50Um9vbSA9IHJvb207XHJcblxyXG4gICAgICAgIC8vIGRpcG9zZSBwcmV2aW91cyByb29tJ3MgY2xpY2sgaGFuZGxlclxyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRSb29tQ2xpY2tIYW5kbGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFJvb21DbGlja0hhbmRsZXIuZGlzcG9zZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jdXJyZW50Um9vbUNsaWNrSGFuZGxlciA9IElucHV0LnJlZ2lzdGVyQ2xpY2tIYW5kbGVyKGV2ID0+IHJvb20uaGFuZGxlQ2xpY2soZXYpKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBzcHJpdGVzXHJcbiAgICBkZWZpbmVTcHJpdGUobmFtZTogc3RyaW5nLCBzcHJpdGU6IFNwcml0ZSk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLnNwcml0ZXNbbmFtZV0pIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBTcHJpdGUgJHtuYW1lfSBoYXMgYWxyZWFkeSBiZWVuIGRlZmluZWQuYCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNwcml0ZXNbbmFtZV0gPSBzcHJpdGU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U3ByaXRlKG5hbWU6IHN0cmluZyk6IFNwcml0ZSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNwcml0ZXNbbmFtZV0pIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yIChgU3ByaXRlICR7bmFtZX0gaGFzIG5vdCBiZWVuIGRlZmluZWQuYCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5zcHJpdGVzW25hbWVdO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvZ2FtZS1jb250ZXh0LnRzIiwiaW1wb3J0IHsgR2FtZUNhbnZhc09wdGlvbnMsIEdhbWVDYW52YXMgfSBmcm9tICcuL2NhbnZhcyc7XHJcbmltcG9ydCB7IEdhbWVTdGF0ZSB9IGZyb20gJy4vZW51bSc7XHJcbmltcG9ydCB7IEdhbWVDb250ZXh0IH0gZnJvbSAnLi9nYW1lLWNvbnRleHQnO1xyXG5pbXBvcnQgeyBHYW1lT3B0aW9ucyB9IGZyb20gJy4vdmFzdGdhbWUnO1xyXG5cclxuY29uc3QgRGVmYXVsdEZQUyA9IDYwO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWVSdW5uZXIge1xyXG4gICAgcHJpdmF0ZSBzdGF0ZTogR2FtZVN0YXRlID0gR2FtZVN0YXRlLlBhdXNlZDtcclxuICAgIHJlYWRvbmx5IHRhcmdldEZQUzogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgb3B0aW9uczogR2FtZU9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLnRhcmdldEZQUyA9IG9wdGlvbnMudGFyZ2V0RlBTIHx8IERlZmF1bHRGUFM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGlzUnVubmluZygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZSA9PT0gR2FtZVN0YXRlLlJ1bm5pbmc7XHJcbiAgICB9XHJcblxyXG4gICAgcGF1c2UoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IEdhbWVTdGF0ZS5QYXVzZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoZ2FtZUNvbnRleHQ6IEdhbWVDb250ZXh0KTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHN0ZXBTaXplOiBudW1iZXIgPSAxIC8gdGhpcy50YXJnZXRGUFM7XHJcbiAgICAgICAgbGV0IG9mZnNldDogbnVtYmVyID0gMDtcclxuICAgICAgICBsZXQgcHJldmlvdXM6IG51bWJlciA9IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKTtcclxuXHJcbiAgICAgICAgbGV0IGNhbnZhc0RyYXdpbmdDb250ZXh0ID0gZ2FtZUNvbnRleHQuZ2V0Q2FudmFzQ29udGV4dCgpO1xyXG5cclxuICAgICAgICBsZXQgZ2FtZUxvb3A6IEZyYW1lUmVxdWVzdENhbGxiYWNrID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcm9vbSA9IGdhbWVDb250ZXh0LmdldEN1cnJlbnRSb29tKCk7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50OiBudW1iZXIgPSB3aW5kb3cucGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBvZmZzZXQgKz0gKE1hdGgubWluKDEsIChjdXJyZW50IC0gcHJldmlvdXMpIC8gMTAwMCkpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgd2hpbGUgKG9mZnNldCA+IHN0ZXBTaXplKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNSdW5uaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FtZUNvbnRleHQuY2hlY2tBbmRGaXJlRXZlbnRzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcm9vbS5zdGVwKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgb2Zmc2V0IC09IHN0ZXBTaXplO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1J1bm5pbmcpIHtcclxuICAgICAgICAgICAgICAgIGNhbnZhc0RyYXdpbmdDb250ZXh0LmNsZWFyKCk7XHJcbiAgICAgICAgICAgICAgICByb29tLmRyYXcoY2FudmFzRHJhd2luZ0NvbnRleHQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwcmV2aW91cyA9IGN1cnJlbnQ7XHJcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gc3RhcnQgdGhlIGdhbWUgbG9vcFxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBHYW1lU3RhdGUuUnVubmluZztcclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvZ2FtZS1ydW5uZXIudHMiLCJpbXBvcnQgeyBWYXN0Z2FtZSB9IGZyb20gJy4vdmFzdGdhbWUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIERlZmVycmVkRXZlbnQge1xyXG5cclxuICAgIHN0YXRpYyByZWdpc3RlcihldmVudDogRGVmZXJyZWRFdmVudCk6IHZvaWQge1xyXG4gICAgICAgIFZhc3RnYW1lLl9nZXRDb250ZXh0KCkucmVnaXN0ZXJFdmVudChldmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIHJlYWRvbmx5IGNvbmRpdGlvbkNhbGxiYWNrOiAoKSA9PiBib29sZWFuLFxyXG4gICAgICAgIHB1YmxpYyByZWFkb25seSBhY3Rpb25DYWxsYmFjazogKCkgPT4gYW55LFxyXG4gICAgICAgIHB1YmxpYyByZWFkb25seSBmaXJlT25jZTogYm9vbGVhbiA9IHRydWUpIHtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvZXZlbnRzLnRzIiwiZXhwb3J0IGNsYXNzIE1hdGhVdGlsIHtcclxuXHJcbiAgICBzdGF0aWMgZ2V0TGVuZ3RoRGlyZWN0aW9uWChsZW5ndGg6IG51bWJlciwgZGlyZWN0aW9uOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBsZW5ndGggKiBNYXRoLmNvcyhkaXJlY3Rpb24gKiAoTWF0aC5QSSAvIDE4MCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRMZW5ndGhEaXJlY3Rpb25ZKGxlbmd0aDogbnVtYmVyLCBkaXJlY3Rpb246IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiBsZW5ndGggKiBNYXRoLnNpbihkaXJlY3Rpb24gKiAoTWF0aC5QSSAvIDE4MCkpO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvdXRpbC50cyIsImltcG9ydCB7IFNwcml0ZUFuaW1hdGlvbiB9IGZyb20gJy4vc3ByaXRlLWFuaW1hdGlvbic7XHJcbmltcG9ydCB7IFZhc3RnYW1lIH0gZnJvbSAnLi92YXN0Z2FtZSc7XHJcbmltcG9ydCB7IEdhbWVDYW52YXNDb250ZXh0IH0gZnJvbSAnLi9jYW52YXMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTcHJpdGVPcHRpb25zIHtcclxuICAgIGltYWdlU291cmNlOiBzdHJpbmc7XHJcbiAgICBoZWlnaHQ6IG51bWJlcjtcclxuICAgIHdpZHRoOiBudW1iZXI7XHJcbiAgICBmcmFtZUJvcmRlcj86IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEcmF3U3ByaXRlT3B0aW9ucyB7XHJcbiAgICBmcmFtZT86IG51bWJlcjtcclxuICAgIG9wYWNpdHk/OiBudW1iZXI7XHJcbiAgICB0aWxlWD86IGJvb2xlYW47XHJcbiAgICB0aWxlWT86IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTcHJpdGUge1xyXG4gICAgXHJcbiAgICBzdGF0aWMgZGVmaW5lKG5hbWU6IHN0cmluZywgb3B0aW9uczogU3ByaXRlT3B0aW9ucyk6IFNwcml0ZSB7XHJcbiAgICAgICAgbGV0IHNwcml0ZSA9IG5ldyBTcHJpdGUob3B0aW9ucyk7XHJcbiAgICAgICAgVmFzdGdhbWUuX2dldENvbnRleHQoKS5kZWZpbmVTcHJpdGUobmFtZSwgc3ByaXRlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHNwcml0ZTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0KG5hbWU6IHN0cmluZyk6IFNwcml0ZSB7XHJcbiAgICAgICAgcmV0dXJuIFZhc3RnYW1lLl9nZXRDb250ZXh0KCkuZ2V0U3ByaXRlKG5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXcoY2FudmFzQ29udGV4dDogR2FtZUNhbnZhc0NvbnRleHQsIHg6IG51bWJlciwgeTogbnVtYmVyLCBvcHRpb25zOiBEcmF3U3ByaXRlT3B0aW9ucyA9IHt9KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kZWZhdWx0QW5pbWF0aW9uLnNldEZyYW1lKG9wdGlvbnMuZnJhbWUgfHwgMCk7XHJcbiAgICAgICAgdGhpcy5kZWZhdWx0QW5pbWF0aW9uLmRyYXcoY2FudmFzQ29udGV4dCwgeCwgeSwgb3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVhZG9ubHkgaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQ7XHJcbiAgICByZWFkb25seSBoZWlnaHQ6IG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHdpZHRoOiBudW1iZXI7XHJcbiAgICByZWFkb25seSBmcmFtZUJvcmRlcjogbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZGVmYXVsdEFuaW1hdGlvbjogU3ByaXRlQW5pbWF0aW9uO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM6IFNwcml0ZU9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLmltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgdGhpcy5pbWFnZS5zcmMgPSBvcHRpb25zLmltYWdlU291cmNlO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IG9wdGlvbnMud2lkdGg7XHJcbiAgICAgICAgdGhpcy5mcmFtZUJvcmRlciA9IG9wdGlvbnMuZnJhbWVCb3JkZXI7XHJcbiAgICAgICAgdGhpcy5kZWZhdWx0QW5pbWF0aW9uID0gbmV3IFNwcml0ZUFuaW1hdGlvbih0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRGcmFtZUltYWdlU291cmNlQ29vcmRzKGZyYW1lOiBudW1iZXIpOiBbbnVtYmVyLCBudW1iZXJdIHtcclxuICAgICAgICBsZXQgZnJhbWVCb3JkZXIgPSB0aGlzLmZyYW1lQm9yZGVyIHx8IDA7XHJcbiAgICAgICAgbGV0IGZyYW1lUm93ID0gMDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaW1hZ2Uud2lkdGgpIHtcclxuICAgICAgICAgICAgbGV0IGZyYW1lc1BlclJvdyA9IE1hdGguZmxvb3IodGhpcy5pbWFnZS53aWR0aCAvIHRoaXMud2lkdGgpO1xyXG4gICAgICAgICAgICB3aGlsZSAodGhpcy53aWR0aCAqIGZyYW1lID49IGZyYW1lc1BlclJvdyAqIHRoaXMud2lkdGgpIHtcclxuICAgICAgICAgICAgICAgIGZyYW1lIC09IGZyYW1lc1BlclJvdztcclxuICAgICAgICAgICAgICAgIGZyYW1lUm93Kys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBmcmFtZVhPZmZzZXQgPSBmcmFtZSAqIGZyYW1lQm9yZGVyO1xyXG4gICAgICAgIGxldCBmcmFtZVlPZmZzZXQgPSBmcmFtZVJvdyAqIGZyYW1lQm9yZGVyO1xyXG4gICAgICAgIGxldCBzcmNYID0gZnJhbWUgKiB0aGlzLndpZHRoICsgZnJhbWVYT2Zmc2V0O1xyXG4gICAgICAgIGxldCBzcmNZID0gZnJhbWVSb3cgKiB0aGlzLmhlaWdodCArIGZyYW1lWU9mZnNldDtcclxuXHJcbiAgICAgICAgcmV0dXJuIFtzcmNYLCBzcmNZXTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL3Nwcml0ZS50cyIsImltcG9ydCB7IFZhc3RnYW1lIH0gZnJvbSAnLi8uLi9lbmdpbmUvdmFzdGdhbWUnO1xyXG5pbXBvcnQgeyBTZXR0aW5ncywgUm9vbUlEIH1mcm9tICcuL3V0aWwvZW51bSc7XHJcbmltcG9ydCB7IFJlZ2lzdHJ5LCByZXF1aXJlTW9kdWxlcywgYnVpbGRDYW52YXNEaW1lbnNpb25zIH0gZnJvbSAnLi91dGlsL3V0aWwnO1xyXG5cclxuLy8gZGV0ZXJtaW5lIGNhbnZhcyBkaW1lbnNpb25zIGJhc2VkIG9uIHZpZXdwb3J0IHNpemVcclxubGV0IFtjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0XSA9IGJ1aWxkQ2FudmFzRGltZW5zaW9ucygpO1xyXG5cclxuUmVnaXN0cnkuc2V0KFNldHRpbmdzLkNhbnZhc1dpZHRoLCBjYW52YXNXaWR0aCk7XHJcblJlZ2lzdHJ5LnNldChTZXR0aW5ncy5DYW52YXNIZWlnaHQsIGNhbnZhc0hlaWdodCk7XHJcblxyXG4vLyBpbml0aWFsaXplIHRoZSBnYW1lIGNhbnZhc1xyXG5WYXN0Z2FtZS5pbml0KCdnYW1lJywge1xyXG4gICAgY2FudmFzOiB7IHdpZHRoOiBjYW52YXNXaWR0aCwgaGVpZ2h0OiBjYW52YXNIZWlnaHQgfSxcclxufSk7XHJcblxyXG4vLyBsb2FkIGdhbWUgbW9kdWxlc1xyXG5yZXF1aXJlKCcuL3Nwcml0ZXMnKTtcclxucmVxdWlyZU1vZHVsZXMoJ2FjdG9ycycsIFsnYmxvY2snLCAncGxheWVyJywgJ3dpbiddKTtcclxucmVxdWlyZU1vZHVsZXMoJ3Jvb21zJywgWydsZXZlbCcsICdsZXZlbC1zZWxlY3QnLCAndGl0bGUnXSk7XHJcblxyXG4vLyBsb2FkIGdhbWUgcHJvZ3Jlc3NcclxuUmVnaXN0cnkubG9hZChTZXR0aW5ncy5TdGFja21vUHJvZ3Jlc3MpO1xyXG4vLyBkZWJ1ZzogaGFja3MuLi5cclxuUmVnaXN0cnkuc2V0KFNldHRpbmdzLlN0YWNrbW9Qcm9ncmVzcywgOTksIHRydWUpO1xyXG5cclxuLy8gc3RhcnQgdGhlIGdhbWUgd2l0aCB0aGUgdGl0bGUgcm9vbVxyXG5WYXN0Z2FtZS5zdGFydChSb29tSUQuVGl0bGUpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9nYW1lL2dhbWUudHMiLCJpbXBvcnQgeyBBY3RvciwgQWN0b3JJbnN0YW5jZSwgUm9vbSwgVmFzdGdhbWUgfSBmcm9tICcuLy4uLy4uL2VuZ2luZS92YXN0Z2FtZSc7XHJcbmltcG9ydCB7IEFjdG9ySUQsIExldmVsQmdDb2xvciB9IGZyb20gJy4vZW51bSc7XHJcbmltcG9ydCAqIGFzIENvbnN0YW50cyBmcm9tICcuL2NvbnN0YW50cyc7XHJcbmltcG9ydCAqIGFzIERhdGEgZnJvbSAnLi9kYXRhJztcclxuXHJcbmNvbnN0IEZyYW1lUGVyV2FsbFNoZWV0Um93ID0gNDU7XHJcbmNvbnN0IE1heExldmVsVmFyaWF0aW9ucyA9IDQ7XHJcblxyXG5leHBvcnQgY2xhc3MgTGV2ZWxCdWlsZGVyIHtcclxuXHJcbiAgICBzdGF0aWMgcG9wdWxhdGVSb29tKHJvb206IFJvb20sIHJvb21JRDogbnVtYmVyKTogQWN0b3JJbnN0YW5jZVtdIHtcclxuICAgICAgICBsZXQgY2VsbFNpemUgPSBDb25zdGFudHMuR3JpZENlbGxTaXplO1xyXG5cclxuICAgICAgICBsZXQgQmxvY2sgPSBBY3Rvci5nZXQoJ0Jsb2NrJyk7XHJcbiAgICAgICAgbGV0IFBsYXllciA9IEFjdG9yLmdldCgnUGxheWVyJyk7XHJcbiAgICAgICAgbGV0IFdhbGwgPSBBY3Rvci5nZXQoJ1dhbGwnKTtcclxuICAgICAgICBsZXQgV2luID0gQWN0b3IuZ2V0KCdXaW4nKTtcclxuXHJcbiAgICAgICAgbGV0IGluc3RhbmNlczogQWN0b3JJbnN0YW5jZVtdID0gW107XHJcbiAgICAgICAgbGV0IGxldmVsTWFwID0gRGF0YS5MZXZlbHMuZ2V0KHJvb21JRCk7XHJcblxyXG4gICAgICAgIGxldCBjb2xvckVudW1NYXAgPSB7XHJcbiAgICAgICAgICAgIDA6IFsgTGV2ZWxCZ0NvbG9yLlRlYWwsIExldmVsQmdDb2xvci5EYXJrVGVhbCBdLFxyXG4gICAgICAgICAgICAxOiBbIExldmVsQmdDb2xvci5HcmVlbiwgTGV2ZWxCZ0NvbG9yLkRhcmtHcmVlbiBdLFxyXG4gICAgICAgICAgICAyOiBbIExldmVsQmdDb2xvci5SZWQsIExldmVsQmdDb2xvci5EYXJrUmVkIF0sXHJcbiAgICAgICAgICAgIDM6IFsgTGV2ZWxCZ0NvbG9yLlB1cnBsZSwgTGV2ZWxCZ0NvbG9yLkRhcmtQdXJwbGUgXSxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBsZXQgbGV2ZWxWYXJpYXRpb24gPSAocm9vbUlEIC0gMSkgJSBNYXhMZXZlbFZhcmlhdGlvbnM7XHJcbiAgICAgICAgcm9vbS5zZXRCYWNrZ3JvdW5kKGNvbG9yRW51bU1hcFtsZXZlbFZhcmlhdGlvbl1bMF0sIGxldmVsTWFwWzBdLmxlbmd0aCAqIGNlbGxTaXplLCBsZXZlbE1hcC5sZW5ndGggKiBjZWxsU2l6ZSwgY29sb3JFbnVtTWFwW2xldmVsVmFyaWF0aW9uXVsxXSk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGV2ZWxNYXAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHJvdyA9IGxldmVsTWFwW2ldO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCByb3cubGVuZ3RoOyBqKyspIHtcclxuXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHJvdy5jaGFyQXQoaikpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnWCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlcy5wdXNoKHJvb20uY3JlYXRlQWN0b3IoQWN0b3JJRC5CbG9jaywgaiAqIGNlbGxTaXplLCBpICogY2VsbFNpemUpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1AnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZXMucHVzaChyb29tLmNyZWF0ZUFjdG9yKEFjdG9ySUQuUGxheWVyLCBqICogY2VsbFNpemUsIGkgKiBjZWxsU2l6ZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnVyc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlcy5wdXNoKHJvb20uY3JlYXRlQWN0b3IoQWN0b3JJRC5XaW4sIGogKiBjZWxsU2l6ZSwgaSAqIGNlbGxTaXplKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYXNlICcjJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHdhbGwgPSByb29tLmNyZWF0ZUFjdG9yKEFjdG9ySUQuV2FsbCwgaiAqIGNlbGxTaXplLCBpICogY2VsbFNpemUpOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZyYW1lID0gdGhpcy5nZXRXYWxsRnJhbWUobGV2ZWxNYXAsIHJvb21JRCwgaSwgaik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyYW1lID0gdGhpcy5nZXRXYWxsRnJhbWVSb3dPZmZlc2V0KGxldmVsVmFyaWF0aW9uLCBmcmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdhbGwuYW5pbWF0aW9uLnNldEZyYW1lKGZyYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2VzLnB1c2god2FsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gaW5zdGFuY2VzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGdldFdhbGxGcmFtZVJvd09mZmVzZXQobGV2ZWxWYXJpYXRpb246IG51bWJlciwgd2FsbEZyYW1lOiBXYWxsU3R5bGUpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB3YWxsRnJhbWUgKyAoRnJhbWVQZXJXYWxsU2hlZXRSb3cgKiBsZXZlbFZhcmlhdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2V0V2FsbEZyYW1lKGxldmVsTWFwOiBzdHJpbmdbXSwgbGV2ZWxOdW1iZXI6IG51bWJlciwgcm93OiBudW1iZXIsIHBvc2l0aW9uOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGNvbnN0IHdhbGxDaGFyID0gJyMnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBtYXhYID0gbGV2ZWxNYXBbMF0ubGVuZ3RoIC0gMTtcclxuICAgICAgICBsZXQgbWF4WSA9IGxldmVsTWFwLmxlbmd0aCAtIDE7XHJcblxyXG4gICAgICAgIGxldCB0b3BGcmVlID0gKHJvdyA+IDApID8gbGV2ZWxNYXBbcm93IC0gMV1bcG9zaXRpb25dICE9PSB3YWxsQ2hhciA6IGZhbHNlO1xyXG4gICAgICAgIGxldCB0b3BMZWZ0RnJlZSA9IChyb3cgPiAwICYmIHBvc2l0aW9uID4gMCkgPyBsZXZlbE1hcFtyb3cgLSAxXVtwb3NpdGlvbiAtIDFdICE9PSB3YWxsQ2hhciA6IGZhbHNlO1xyXG4gICAgICAgIGxldCB0b3BSaWdodEZyZWUgPSAocm93ID4gMCAmJiBwb3NpdGlvbiA8IG1heFgpID8gbGV2ZWxNYXBbcm93IC0gMV1bcG9zaXRpb24gKyAxXSAhPT0gd2FsbENoYXIgOiBmYWxzZTtcclxuICAgICAgICBsZXQgYm90dG9tRnJlZSA9IChyb3cgPCBtYXhZKSA/IGxldmVsTWFwW3JvdyArIDFdW3Bvc2l0aW9uXSAhPT0gd2FsbENoYXIgOiBmYWxzZTtcclxuICAgICAgICBsZXQgYm90dG9tTGVmdEZyZWUgPSAocm93IDwgbWF4WSAmJiBwb3NpdGlvbiA+IDApID8gbGV2ZWxNYXBbcm93ICsgMV1bcG9zaXRpb24gLSAxXSAhPT0gd2FsbENoYXIgOiBmYWxzZTtcclxuICAgICAgICBsZXQgYm90dG9tUmlnaHRGcmVlID0gKHJvdyA8IG1heFkgJiYgcG9zaXRpb24gPCBtYXhYKSA/IGxldmVsTWFwW3JvdyArIDFdW3Bvc2l0aW9uICsgMV0gIT09IHdhbGxDaGFyIDogZmFsc2U7XHJcbiAgICAgICAgbGV0IGxlZnRGcmVlID0gKHBvc2l0aW9uID4gMCkgPyBsZXZlbE1hcFtyb3ddW3Bvc2l0aW9uIC0gMV0gIT09IHdhbGxDaGFyIDogZmFsc2U7XHJcbiAgICAgICAgbGV0IHJpZ2h0RnJlZSA9IChwb3NpdGlvbiA8IG1heFgpID8gbGV2ZWxNYXBbcm93XVtwb3NpdGlvbiArIDFdICE9PSB3YWxsQ2hhciA6IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAoIXRvcEZyZWUgJiYgIXRvcExlZnRGcmVlICYmICF0b3BSaWdodEZyZWUgJiYgIWxlZnRGcmVlICYmICFyaWdodEZyZWUgJiYgIWJvdHRvbUxlZnRGcmVlICYmICFib3R0b21GcmVlICYmICFib3R0b21SaWdodEZyZWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFdhbGxTdHlsZS5Jbm5lcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKCF0b3BGcmVlICYmICF0b3BMZWZ0RnJlZSAmJiAhdG9wUmlnaHRGcmVlICYmICFsZWZ0RnJlZSAmJiAhcmlnaHRGcmVlICYmICFib3R0b21MZWZ0RnJlZSAmJiAhYm90dG9tRnJlZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gV2FsbFN0eWxlLklubmVyQ29ybmVyVG9wTGVmdFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0b3BGcmVlICYmICF0b3BMZWZ0RnJlZSAmJiAhdG9wUmlnaHRGcmVlICYmICFsZWZ0RnJlZSAmJiAhcmlnaHRGcmVlICYmICFib3R0b21GcmVlICYmICFib3R0b21SaWdodEZyZWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFdhbGxTdHlsZS5Jbm5lckNvcm5lclRvcFJpZ2h0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0b3BGcmVlICYmICF0b3BMZWZ0RnJlZSAmJiAhbGVmdEZyZWUgJiYgIXJpZ2h0RnJlZSAmJiAhYm90dG9tTGVmdEZyZWUgJiYgIWJvdHRvbUZyZWUgJiYgIWJvdHRvbVJpZ2h0RnJlZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gV2FsbFN0eWxlLklubmVyQ29ybmVyQm90dG9tTGVmdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdG9wRnJlZSYmICF0b3BSaWdodEZyZWUgJiYgIWxlZnRGcmVlICYmICFyaWdodEZyZWUgJiYgIWJvdHRvbUxlZnRGcmVlICYmICFib3R0b21GcmVlICYmICFib3R0b21SaWdodEZyZWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFdhbGxTdHlsZS5Jbm5lckNvcm5lckJvdHRvbVJpZ2h0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0b3BGcmVlICYmICF0b3BMZWZ0RnJlZSAmJiAhbGVmdEZyZWUgJiYgIWJvdHRvbUxlZnRGcmVlICYmICFib3R0b21GcmVlICYmICFyaWdodEZyZWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFdhbGxTdHlsZS5UaHJlZXdheVJpZ2h0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0b3BGcmVlICYmICF0b3BSaWdodEZyZWUgJiYgIXJpZ2h0RnJlZSAmJiAhYm90dG9tUmlnaHRGcmVlICYmICFib3R0b21GcmVlICYmICFsZWZ0RnJlZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gV2FsbFN0eWxlLlRocmVld2F5TGVmdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghbGVmdEZyZWUgJiYgIWJvdHRvbUxlZnRGcmVlICYmICFib3R0b21GcmVlICYmICFib3R0b21SaWdodEZyZWUgJiYgIXJpZ2h0RnJlZSAmJiAhdG9wRnJlZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gV2FsbFN0eWxlLlRocmVld2F5VG9wO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFsZWZ0RnJlZSAmJiAhdG9wTGVmdEZyZWUgJiYgIXRvcEZyZWUgJiYgIXRvcFJpZ2h0RnJlZSAmJiAhcmlnaHRGcmVlICYmICFib3R0b21GcmVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBXYWxsU3R5bGUuVGhyZWV3YXlCb3R0b207XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRvcEZyZWUgJiYgIXRvcExlZnRGcmVlICYmICFsZWZ0RnJlZSAmJiAhYm90dG9tTGVmdEZyZWUgJiYgIWJvdHRvbUZyZWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFdhbGxTdHlsZS5GbGF0TGVmdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdG9wRnJlZSAmJiAhdG9wUmlnaHRGcmVlICYmICFyaWdodEZyZWUgJiYgIWJvdHRvbVJpZ2h0RnJlZSAmJiAhYm90dG9tRnJlZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gV2FsbFN0eWxlLkZsYXRSaWdodDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghbGVmdEZyZWUgJiYgIWJvdHRvbUxlZnRGcmVlICYmICFib3R0b21GcmVlICYmICFib3R0b21SaWdodEZyZWUgJiYgIXJpZ2h0RnJlZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gV2FsbFN0eWxlLkZsYXRCb3R0b207XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWxlZnRGcmVlICYmICF0b3BMZWZ0RnJlZSAmJiAhdG9wRnJlZSAmJiAhdG9wUmlnaHRGcmVlICYmICFyaWdodEZyZWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFdhbGxTdHlsZS5GbGF0VG9wO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0b3BGcmVlICYmICFsZWZ0RnJlZSAmJiAhYm90dG9tRnJlZSAmJiAhcmlnaHRGcmVlICYmICFib3R0b21SaWdodEZyZWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFdhbGxTdHlsZS5Ud29XYXlUb3BMZWZ0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0b3BGcmVlICYmICFsZWZ0RnJlZSAmJiAhYm90dG9tRnJlZSAmJiAhcmlnaHRGcmVlICYmICFib3R0b21MZWZ0RnJlZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gV2FsbFN0eWxlLlR3b1dheVRvcFJpZ2h0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0b3BGcmVlICYmICFsZWZ0RnJlZSAmJiAhYm90dG9tRnJlZSAmJiAhcmlnaHRGcmVlICYmICF0b3BSaWdodEZyZWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFdhbGxTdHlsZS5Ud29XYXlCb3R0b21MZWZ0OyBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdG9wRnJlZSAmJiAhbGVmdEZyZWUgJiYgIWJvdHRvbUZyZWUgJiYgIXJpZ2h0RnJlZSAmJiAhdG9wTGVmdEZyZWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFdhbGxTdHlsZS5Ud29XYXlCb3R0b21SaWdodDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdG9wRnJlZSAmJiAhbGVmdEZyZWUgJiYgIWJvdHRvbUZyZWUgJiYgIXJpZ2h0RnJlZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gV2FsbFN0eWxlLkZvdXJ3YXk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWxlZnRGcmVlICYmICFyaWdodEZyZWUgJiYgIWJvdHRvbVJpZ2h0RnJlZSAmJiAhYm90dG9tRnJlZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gV2FsbFN0eWxlLkZsYXRUb3BOYXJyb3dMZWZ0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFsZWZ0RnJlZSAmJiAhcmlnaHRGcmVlICYmICFib3R0b21MZWZ0RnJlZSAmJiAhYm90dG9tRnJlZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gV2FsbFN0eWxlLkZsYXRUb3BOYXJyb3dSaWdodDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghbGVmdEZyZWUgJiYgIXJpZ2h0RnJlZSAmJiAhdG9wUmlnaHRGcmVlICYmICF0b3BGcmVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBXYWxsU3R5bGUuRmxhdEJvdHRvbU5hcnJvd0xlZnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWxlZnRGcmVlICYmICFyaWdodEZyZWUgJiYgIXRvcExlZnRGcmVlICYmICF0b3BGcmVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBXYWxsU3R5bGUuRmxhdEJvdHRvbU5hcnJvd1JpZ2h0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0b3BGcmVlICYmICFyaWdodEZyZWUgJiYgIWJvdHRvbVJpZ2h0RnJlZSAmJiAhYm90dG9tRnJlZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gV2FsbFN0eWxlLkZsYXRMZWZ0TmFycm93VG9wO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0b3BGcmVlICYmICFsZWZ0RnJlZSAmJiAhYm90dG9tTGVmdEZyZWUgJiYgIWJvdHRvbUZyZWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFdhbGxTdHlsZS5GbGF0UmlnaHROYXJyb3dUb3A7IFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFib3R0b21GcmVlICYmICFyaWdodEZyZWUgJiYgIXRvcFJpZ2h0RnJlZSAmJiAhdG9wRnJlZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gV2FsbFN0eWxlLkZsYXRMZWZ0TmFycm93Qm90dG9tO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFib3R0b21GcmVlICYmICFsZWZ0RnJlZSAmJiAhdG9wTGVmdEZyZWUgJiYgIXRvcEZyZWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFdhbGxTdHlsZS5GbGF0UmlnaHROYXJyb3dCb3R0b207XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXJpZ2h0RnJlZSAmJiAhYm90dG9tUmlnaHRGcmVlICYmICFib3R0b21GcmVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBXYWxsU3R5bGUuT3V0ZXJDb3JuZXJUb3BMZWZ0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFsZWZ0RnJlZSAmJiAhYm90dG9tTGVmdEZyZWUgJiYgIWJvdHRvbUZyZWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFdhbGxTdHlsZS5PdXRlckNvcm5lclRvcFJpZ2h0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFyaWdodEZyZWUgJiYgIXRvcFJpZ2h0RnJlZSAmJiAhdG9wRnJlZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gV2FsbFN0eWxlLk91dGVyQ29ybmVyQm90dG9tTGVmdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghbGVmdEZyZWUgJiYgIXRvcExlZnRGcmVlICYmICF0b3BGcmVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBXYWxsU3R5bGUuT3V0ZXJDb3JuZXJCb3R0b21SaWdodDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdG9wRnJlZSAmJiAhYm90dG9tRnJlZSAmJiAhbGVmdEZyZWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFdhbGxTdHlsZS5UaHJlZXdheU5hcnJvd0xlZnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRvcEZyZWUgJiYgIWJvdHRvbUZyZWUgJiYgIXJpZ2h0RnJlZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gV2FsbFN0eWxlLlRocmVld2F5TmFycm93UmlnaHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRvcEZyZWUgJiYgIWxlZnRGcmVlICYmICFyaWdodEZyZWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFdhbGxTdHlsZS5UaHJlZXdheU5hcnJvd1RvcDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghbGVmdEZyZWUgJiYgIXJpZ2h0RnJlZSAmJiAhYm90dG9tRnJlZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gV2FsbFN0eWxlLlRocmVld2F5TmFycm93Qm90dG9tO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFsZWZ0RnJlZSAmJiAhcmlnaHRGcmVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBXYWxsU3R5bGUuTmFycm93SG9yaXpvbnRhbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdG9wRnJlZSAmJiAhYm90dG9tRnJlZSkgeyBcclxuICAgICAgICAgICAgcmV0dXJuIFdhbGxTdHlsZS5OYXJyb3dWZXJ0aWNhbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdG9wRnJlZSAmJiAhbGVmdEZyZWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFdhbGxTdHlsZS5PdXRlckVsYm93Qm90dG9tUmlnaHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRvcEZyZWUgJiYgIXJpZ2h0RnJlZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gV2FsbFN0eWxlLk91dGVyRWxib3dCb3R0b21MZWZ0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFib3R0b21GcmVlICYmICFsZWZ0RnJlZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gV2FsbFN0eWxlLk91dGVyRWxib3dUb3BSaWdodDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghYm90dG9tRnJlZSAmJiAhcmlnaHRGcmVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBXYWxsU3R5bGUuT3V0ZXJFbGJvd1RvcExlZnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRvcEZyZWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFdhbGxTdHlsZS5DYXBwZWRCb3R0b207XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWxlZnRGcmVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBXYWxsU3R5bGUuQ2FwcGVkUmlnaHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWJvdHRvbUZyZWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFdhbGxTdHlsZS5DYXBwZWRUb3A7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXJpZ2h0RnJlZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gV2FsbFN0eWxlLkNhcHBlZExlZnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gV2FsbFN0eWxlLlNvbG87XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIGVudW0gdmFsdWVzIGNvcnJlc3BvbmQgdG8gc3ByaXRlIHNoZWV0IGZyYW1lc1xyXG5lbnVtIFdhbGxTdHlsZSB7XHJcbiAgICBJbm5lckNvcm5lclRvcExlZnQgPSAwLFxyXG4gICAgRmxhdFRvcCA9IDEsXHJcbiAgICBJbm5lckNvcm5lclRvcFJpZ2h0ID0gMixcclxuICAgIE91dGVyQ29ybmVyVG9wTGVmdCA9IDMsXHJcbiAgICBPdXRlckNvcm5lckJvdHRvbUxlZnQgPSA0LFxyXG4gICAgRmxhdExlZnQgPSA1LFxyXG4gICAgSW5uZXIgPSA2LFxyXG4gICAgRmxhdFJpZ2h0ID0gNyxcclxuICAgIE91dGVyQ29ybmVyVG9wUmlnaHQgPSA4LFxyXG4gICAgSW5uZXJDb3JuZXJCb3R0b21MZWZ0ID0gOSxcclxuICAgIEZsYXRCb3R0b20gPSAxMCxcclxuICAgIElubmVyQ29ybmVyQm90dG9tUmlnaHQgPSAxMSxcclxuICAgIE91dGVyQ29ybmVyQm90dG9tUmlnaHQgPSAxMixcclxuICAgIE5hcnJvd0hvcml6b250YWwgPSAxMyxcclxuICAgIE5hcnJvd1ZlcnRpY2FsID0gMTQsXHJcbiAgICBDYXBwZWRMZWZ0ID0gMTUsXHJcbiAgICBDYXBwZWRUb3AgPSAxNixcclxuICAgIENhcHBlZFJpZ2h0ID0gMTcsXHJcbiAgICBDYXBwZWRCb3R0b20gPSAxOCxcclxuICAgIFRocmVld2F5TmFycm93VG9wID0gMTksXHJcbiAgICBUaHJlZXdheU5hcnJvd1JpZ2h0ID0gMjAsXHJcbiAgICBUaHJlZXdheU5hcnJvd0JvdHRvbSA9IDIxLFxyXG4gICAgVGhyZWV3YXlOYXJyb3dMZWZ0ID0gMjIsXHJcbiAgICBGb3Vyd2F5ID0gMjMsXHJcbiAgICBTb2xvID0gMjQsXHJcbiAgICBUaHJlZXdheVRvcCA9IDI1LFxyXG4gICAgVGhyZWV3YXlSaWdodCA9IDI2LFxyXG4gICAgVGhyZWV3YXlCb3R0b20gPSAyNyxcclxuICAgIFRocmVld2F5TGVmdCA9IDI4LFxyXG4gICAgRmxhdFRvcE5hcnJvd0xlZnQgPSAyOSxcclxuICAgIEZsYXRUb3BOYXJyb3dSaWdodCA9IDMwLFxyXG4gICAgRmxhdEJvdHRvbU5hcnJvd0xlZnQgPSAzMSxcclxuICAgIEZsYXRCb3R0b21OYXJyb3dSaWdodCA9IDMyLFxyXG4gICAgRmxhdExlZnROYXJyb3dUb3AgPSAzMyxcclxuICAgIEZsYXRSaWdodE5hcnJvd1RvcCA9IDM0LFxyXG4gICAgRmxhdExlZnROYXJyb3dCb3R0b20gPSAzNSxcclxuICAgIEZsYXRSaWdodE5hcnJvd0JvdHRvbSA9IDM2LFxyXG4gICAgVHdvV2F5VG9wTGVmdCA9IDM3LFxyXG4gICAgVHdvV2F5VG9wUmlnaHQgPSAzOCxcclxuICAgIFR3b1dheUJvdHRvbUxlZnQgPSAzOSxcclxuICAgIFR3b1dheUJvdHRvbVJpZ2h0ID0gNDAsXHJcbiAgICBPdXRlckVsYm93Qm90dG9tTGVmdCA9IDQxLFxyXG4gICAgT3V0ZXJFbGJvd0JvdHRvbVJpZ2h0ID0gNDIsXHJcbiAgICBPdXRlckVsYm93VG9wTGVmdCA9IDQzLFxyXG4gICAgT3V0ZXJFbGJvd1RvcFJpZ2h0ID0gNDQsXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZ2FtZS91dGlsL2xldmVsLWJ1aWxkZXIudHMiLCJpbXBvcnQgeyBTcHJpdGUgfSBmcm9tICcuLy4uL2VuZ2luZS92YXN0Z2FtZSc7XHJcbmltcG9ydCAqIGFzIENvbnN0YW50cyBmcm9tICcuL3V0aWwvY29uc3RhbnRzJztcclxuaW1wb3J0IHsgU3ByaXRlSUQgfSBmcm9tICcuL3V0aWwvZW51bSc7XHJcblxyXG5TcHJpdGUuZGVmaW5lKFNwcml0ZUlELkFycm93U2hlZXQsIHtcclxuICAgIGltYWdlU291cmNlOiAnLi4vcmVzb3VyY2VzL2Fycm93cy5wbmcnLFxyXG4gICAgaGVpZ2h0OiBDb25zdGFudHMuR3JpZENlbGxTaXplLFxyXG4gICAgd2lkdGg6IENvbnN0YW50cy5HcmlkQ2VsbFNpemUsXHJcbn0pO1xyXG5cclxuU3ByaXRlLmRlZmluZShTcHJpdGVJRC5Cb3gsIHtcclxuICAgIGltYWdlU291cmNlOiAnLi4vcmVzb3VyY2VzL2JveC5wbmcnLFxyXG4gICAgaGVpZ2h0OiBDb25zdGFudHMuR3JpZENlbGxTaXplLFxyXG4gICAgd2lkdGg6IENvbnN0YW50cy5HcmlkQ2VsbFNpemUsXHJcbn0pO1xyXG5cclxuU3ByaXRlLmRlZmluZShTcHJpdGVJRC5EaWdpdHMsIHtcclxuICAgIGltYWdlU291cmNlOiAnLi4vcmVzb3VyY2VzL2RpZ2l0c19zaGVldC5wbmcnLFxyXG4gICAgaGVpZ2h0OiBDb25zdGFudHMuR3JpZENlbGxTaXplIC8gMixcclxuICAgIHdpZHRoOiBDb25zdGFudHMuR3JpZENlbGxTaXplIC8gMixcclxufSk7XHJcblxyXG5TcHJpdGUuZGVmaW5lKFNwcml0ZUlELkRvb3JTaGVldCwge1xyXG4gICAgaW1hZ2VTb3VyY2U6ICcuLi9yZXNvdXJjZXMvZG9vcl9zaGVldC5wbmcnLFxyXG4gICAgaGVpZ2h0OiBDb25zdGFudHMuR3JpZENlbGxTaXplLFxyXG4gICAgd2lkdGg6IDMyLFxyXG4gICAgZnJhbWVCb3JkZXI6IDEsXHJcbn0pO1xyXG5cclxuU3ByaXRlLmRlZmluZShTcHJpdGVJRC5FeGl0QnV0dG9uLCB7XHJcbiAgICBpbWFnZVNvdXJjZTogJy4uL3Jlc291cmNlcy9leGl0X2J1dHRvbi5wbmcnLFxyXG4gICAgaGVpZ2h0OiBDb25zdGFudHMuR3JpZENlbGxTaXplLFxyXG4gICAgd2lkdGg6IENvbnN0YW50cy5HcmlkQ2VsbFNpemUsXHJcbn0pO1xyXG5cclxuU3ByaXRlLmRlZmluZShTcHJpdGVJRC5MZXZlbEljb24sIHtcclxuICAgIGltYWdlU291cmNlOiAnLi4vcmVzb3VyY2VzL2xldmVsX2ljb24ucG5nJyxcclxuICAgIHdpZHRoOiBDb25zdGFudHMuR3JpZENlbGxTaXplLFxyXG4gICAgaGVpZ2h0OiBDb25zdGFudHMuR3JpZENlbGxTaXplLFxyXG59KTtcclxuXHJcblNwcml0ZS5kZWZpbmUoU3ByaXRlSUQuSFVELCB7XHJcbiAgICBpbWFnZVNvdXJjZTogJy4uL3Jlc291cmNlcy9odWQucG5nJyxcclxuICAgIGhlaWdodDogQ29uc3RhbnRzLkdyaWRDZWxsU2l6ZSxcclxuICAgIHdpZHRoOiBDb25zdGFudHMuR3JpZENlbGxTaXplLFxyXG59KTtcclxuXHJcblNwcml0ZS5kZWZpbmUoU3ByaXRlSUQuU3RhY2ttb1NoZWV0LCB7XHJcbiAgICBpbWFnZVNvdXJjZTogJy4uL3Jlc291cmNlcy9zdGFja21vX3NoZWV0LnBuZycsXHJcbiAgICBoZWlnaHQ6IENvbnN0YW50cy5HcmlkQ2VsbFNpemUsXHJcbiAgICB3aWR0aDogQ29uc3RhbnRzLkdyaWRDZWxsU2l6ZSxcclxuICAgIGZyYW1lQm9yZGVyOiA0LFxyXG59KTtcclxuXHJcblNwcml0ZS5kZWZpbmUoU3ByaXRlSUQuVGl0bGUsIHtcclxuICAgIGltYWdlU291cmNlOiAnLi4vcmVzb3VyY2VzL3RpdGxlLnBuZycsXHJcbiAgICB3aWR0aDogQ29uc3RhbnRzLlRpdGxlV2lkdGgsXHJcbiAgICBoZWlnaHQ6IENvbnN0YW50cy5UaXRsZUhlaWdodCxcclxufSk7XHJcblxyXG5TcHJpdGUuZGVmaW5lKFNwcml0ZUlELldhbGwsIHtcclxuICAgIGltYWdlU291cmNlOiAnLi4vcmVzb3VyY2VzL3dhbGxfc2hlZXQucG5nJyxcclxuICAgIGhlaWdodDogQ29uc3RhbnRzLkdyaWRDZWxsU2l6ZSxcclxuICAgIHdpZHRoOiBDb25zdGFudHMuR3JpZENlbGxTaXplLFxyXG4gICAgZnJhbWVCb3JkZXI6IDEsXHJcbn0pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZ2FtZS9zcHJpdGVzLnRzIiwiaW1wb3J0IHsgQWN0b3IsIEJvdW5kYXJ5LCBEaXJlY3Rpb24sIEdyaWRDZWxsLCBSb29tLCBTcHJpdGUgfSBmcm9tICcuLy4uLy4uL2VuZ2luZS92YXN0Z2FtZSc7XHJcbmltcG9ydCAqIGFzIENvbnN0YW50cyBmcm9tICcuLy4uL3V0aWwvY29uc3RhbnRzJztcclxuaW1wb3J0IHsgQWN0b3JJRCwgR2FtZUFjdGlvbiwgU3ByaXRlSUQgfSBmcm9tICcuLy4uL3V0aWwvZW51bSc7XHJcblxyXG5BY3RvclxyXG4gICAgLmRlZmluZShBY3RvcklELkJsb2NrLCB7XHJcbiAgICAgICAgc3ByaXRlOiBTcHJpdGUuZ2V0KFNwcml0ZUlELkJveCksXHJcbiAgICB9KVxyXG4gICAgLy8gRmFsbGluZ1xyXG4gICAgLm9uRXZlbnQoR2FtZUFjdGlvbi5GYWxsLCAoYmxvY2ssIGFyZ3MpID0+IHtcclxuICAgICAgICBsZXQgcm9vbTogUm9vbSA9IGFyZ3MuZ2FtZS5jdXJyZW50Um9vbTtcclxuXHJcbiAgICAgICAgaWYgKCFyb29tLmlzUG9zaXRpb25GcmVlKGJsb2NrLnggKyAxLCBibG9jay55ICsgQ29uc3RhbnRzLkdyaWRDZWxsU2l6ZSArIDEpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBzdGFydFkgPSBibG9jay55O1xyXG4gICAgICAgIGxldCBzdG9wQ29uZGl0aW9uID0gKCk6IGJvb2xlYW4gPT4gIE1hdGguYWJzKHN0YXJ0WSAtIGJsb2NrLnkpID49IENvbnN0YW50cy5HcmlkQ2VsbFNpemU7XHJcblxyXG4gICAgICAgIC8vIG1vdmUgdGhlIHRhcmdldCBjZWxsIHRvIHRoZSBvbmUgYmVsb3cgdGhlIHByZXZpb3VzIHRhcmdldCBjZWxsXHJcbiAgICAgICAgYXJncy50YXJnZXRDZWxsID0gYXJncy50YXJnZXRDZWxsLmdldEFkamFjZW50Q2VsbChEaXJlY3Rpb24uRG93bik7XHJcblxyXG4gICAgICAgIGJsb2NrLm1vdmUoQ29uc3RhbnRzLkJsb2NrRmFsbFNwZWVkLCBEaXJlY3Rpb24uRG93bik7XHJcbiAgICAgICAgYmxvY2sucmFpc2VFdmVudFdoZW4oR2FtZUFjdGlvbi5TdG9wLCBzdG9wQ29uZGl0aW9uLCBhcmdzKTtcclxuICAgIH0pXHJcbiAgICAvLyBTdG9wcGluZ1xyXG4gICAgLm9uRXZlbnQoR2FtZUFjdGlvbi5TdG9wLCAoYmxvY2ssIGFyZ3MpID0+IHtcclxuICAgICAgICBsZXQgcm9vbTogUm9vbSA9IGFyZ3MuZ2FtZS5jdXJyZW50Um9vbTtcclxuICAgICAgICBsZXQgdGFyZ2V0Q2VsbDogR3JpZENlbGwgPSBhcmdzLnRhcmdldENlbGw7XHJcblxyXG4gICAgICAgIC8vIHNuYXAgdG8gdGhlIGdyaWRcclxuICAgICAgICBibG9jay5tb3ZlKDApO1xyXG4gICAgICAgIGJsb2NrLnNldFBvc2l0aW9uKHRhcmdldENlbGwueCwgdGFyZ2V0Q2VsbC55KTtcclxuXHJcbiAgICAgICAgLy8gY2hlY2sgaWYgZmFsbGluZ1xyXG4gICAgICAgIGlmIChyb29tLmlzUG9zaXRpb25GcmVlKGJsb2NrLnggKyAxLCBibG9jay55ICsgQ29uc3RhbnRzLkdyaWRDZWxsU2l6ZSArIDEpKSB7XHJcbiAgICAgICAgICAgIGJsb2NrLnJhaXNlRXZlbnQoR2FtZUFjdGlvbi5GYWxsLCBhcmdzKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZ2FtZS9hY3RvcnMvYmxvY2sudHMiLCJpbXBvcnQgeyBBY3RvciwgQWN0b3JJbnN0YW5jZSwgQm91bmRhcnksIERpcmVjdGlvbiwgS2V5LCBJbnB1dCwgR3JpZENlbGwsIFJvb20sIFNwcml0ZSB9IGZyb20gJy4vLi4vLi4vZW5naW5lL3Zhc3RnYW1lJztcclxuaW1wb3J0ICogYXMgQ29uc3RhbnRzIGZyb20gJy4vLi4vdXRpbC9jb25zdGFudHMnO1xyXG5pbXBvcnQgeyBBY3RvcklELCBHYW1lQWN0aW9uLCBTcHJpdGVJRCwgU3RhY2ttb0ZyYW1lIH0gZnJvbSAnLi8uLi91dGlsL2VudW0nO1xyXG5cclxubGV0IGhlbGRCbG9jazogQWN0b3JJbnN0YW5jZTtcclxubGV0IGxhc3REaXJlY3Rpb246IERpcmVjdGlvbjtcclxuXHJcbmxldCBzb2xpZEFjdG9yczogQWN0b3JbXTtcclxubGV0IFdpbjogQWN0b3I7XHJcblxyXG5BY3RvclxyXG4gICAgLmRlZmluZShBY3RvcklELlBsYXllciwge1xyXG4gICAgICAgIHNwcml0ZTogU3ByaXRlLmdldChTcHJpdGVJRC5TdGFja21vU2hlZXQpLFxyXG4gICAgfSlcclxuICAgIC5vbkNyZWF0ZShzZWxmID0+IHtcclxuICAgICAgICBzZWxmLmFuaW1hdGlvbi5kZXB0aCA9IC01MDtcclxuICAgICAgICBsYXN0RGlyZWN0aW9uID0gRGlyZWN0aW9uLlJpZ2h0O1xyXG4gICAgICAgIGhlbGRCbG9jayA9IG51bGw7XHJcblxyXG4gICAgICAgIHNvbGlkQWN0b3JzID0gW1xyXG4gICAgICAgICAgICBBY3Rvci5nZXQoQWN0b3JJRC5CbG9jayksXHJcbiAgICAgICAgICAgIEFjdG9yLmdldChBY3RvcklELldhbGwpLFxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIFdpbiA9IEFjdG9yLmdldChBY3RvcklELldpbik7XHJcbiAgICB9KVxyXG4gICAgLm9uU3RlcChzZWxmID0+IHtcclxuXHJcbiAgICAgICAgaWYgKGhlbGRCbG9jaykge1xyXG4gICAgICAgICAgICBoZWxkQmxvY2suc2V0UG9zaXRpb24oc2VsZi54LCBzZWxmLnkgLSBDb25zdGFudHMuR3JpZENlbGxTaXplKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgLy8gTW92aW5nXHJcbiAgICAub25FdmVudChHYW1lQWN0aW9uLk1vdmUsIChwbGF5ZXIsIGFyZ3MpID0+IHtcclxuICAgICAgICBsZXQgdGFyZ2V0Q2VsbDogR3JpZENlbGwgPSBhcmdzLnRhcmdldENlbGw7XHJcbiAgICAgICAgbGV0IGRpcmVjdGlvbjogRGlyZWN0aW9uID0gYXJncy5kaXJlY3Rpb247XHJcbiAgICAgICAgbGV0IHN0YXJ0WCA9IHBsYXllci54O1xyXG5cclxuICAgICAgICBsZXQgc3RvcENvbmRpdGlvbiA9ICgpOiBib29sZWFuID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIE1hdGguYWJzKHN0YXJ0WCAtIHBsYXllci54KSA+PSBDb25zdGFudHMuR3JpZENlbGxTaXplO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGxhc3REaXJlY3Rpb24gPSBkaXJlY3Rpb247XHJcblxyXG4gICAgICAgIC8vIGNsZWFyYW5jZSBjaGVja1xyXG4gICAgICAgIGlmICghaGVsZEJsb2NrIHx8IChoZWxkQmxvY2sgJiYgdGFyZ2V0Q2VsbC5nZXRBZGphY2VudENlbGwoRGlyZWN0aW9uLlVwKS5pc0ZyZWUoKSkpIHtcclxuICAgICAgICAgICAgcGxheWVyLm1vdmUoQ29uc3RhbnRzLlBsYXllck1vdmVTcGVlZCwgZGlyZWN0aW9uKTtcclxuICAgICAgICAgICAgcGxheWVyLnJhaXNlRXZlbnRXaGVuKEdhbWVBY3Rpb24uQ2hlY2tTdG9wTW92aW5nLCBzdG9wQ29uZGl0aW9uLCBhcmdzKTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgYW5pbWF0ZShwbGF5ZXIsIGRpcmVjdGlvbiwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIC8vIFN0b3AgbW92aW5nIG9yIGNvbnRpbnVlXHJcbiAgICAub25FdmVudChHYW1lQWN0aW9uLkNoZWNrU3RvcE1vdmluZywgKHBsYXllciwgYXJncykgPT4ge1xyXG4gICAgICAgIGxldCB0YXJnZXRDZWxsOiBHcmlkQ2VsbCA9IGFyZ3MudGFyZ2V0Q2VsbDtcclxuICAgICAgICBsZXQgYWN0aW9uID0gR2FtZUFjdGlvbi5TdG9wO1xyXG5cclxuICAgICAgICAvLyBzbmFwIHRvIHRoZSBncmlkXHJcbiAgICAgICAgcGxheWVyLm1vdmUoMCk7XHJcbiAgICAgICAgcGxheWVyLnNldFBvc2l0aW9uKHRhcmdldENlbGwueCwgdGFyZ2V0Q2VsbC55KTtcclxuXHJcbiAgICAgICAgLy8gY29udGludWUgbW92ZW1lbnQgaWYgaW5wdXQgaXMgaGVsZCBhbmQgd2UncmUgbm90IGFib3V0IHRvIHdpblxyXG4gICAgICAgIGlmIChpbnB1dEFjdGl2ZSgpICYmICF0YXJnZXRDZWxsLmNvbnRhaW5zSW5zdGFuY2VPZihXaW4pKSB7XHJcbiAgICAgICAgICAgIGxldCBiZWxvd0NlbGwgPSB0YXJnZXRDZWxsLmdldEFkamFjZW50Q2VsbChEaXJlY3Rpb24uRG93bik7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWJlbG93Q2VsbC5pc0ZyZWUoc29saWRBY3RvcnMpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBkZXRlcm1pbmUgdGhlIG5leHQgY2VsbCBiYXNlZCBvbiB3aGVyZSB0aGUgY3VycmVudCB0b3VjaC9jbGljayBpcyAoaXQgbWF5IGhhdmUgbW92ZWQpXHJcbiAgICAgICAgICAgICAgICBpZiAoSW5wdXQuY2xpY2tBY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY2xpY2tBZGp1c3RlZFggPSBnZXRDbGlja0FkanVzdGVkWChhcmdzLmdhbWUuY3VycmVudFJvb20pO1xyXG4gICAgICAgICAgICAgICAgICAgIGFyZ3MuZGlyZWN0aW9uID0gY2xpY2tBZGp1c3RlZFggPD0gcGxheWVyLnggKyAodGFyZ2V0Q2VsbC5zaXplIC8gMikgPyBEaXJlY3Rpb24uTGVmdCA6IERpcmVjdGlvbi5SaWdodDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxldCBuZXh0Q2VsbCA9IHRhcmdldENlbGwuZ2V0QWRqYWNlbnRDZWxsKGFyZ3MuZGlyZWN0aW9uKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobmV4dENlbGwuaXNGcmVlKHNvbGlkQWN0b3JzKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFyZ3MudGFyZ2V0Q2VsbCA9IG5leHRDZWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbiA9IEdhbWVBY3Rpb24uTW92ZTsgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChuZXh0Q2VsbC5nZXRBZGphY2VudENlbGwoRGlyZWN0aW9uLlVwKS5pc0ZyZWUoc29saWRBY3RvcnMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJncy50YXJnZXRDZWxsID0gbmV4dENlbGwuZ2V0QWRqYWNlbnRDZWxsKERpcmVjdGlvbi5VcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uID0gR2FtZUFjdGlvbi5KdW1wO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwbGF5ZXIucmFpc2VFdmVudChhY3Rpb24sIGFyZ3MpO1xyXG4gICAgfSlcclxuICAgIC8vIEZhbGxpbmdcclxuICAgIC5vbkV2ZW50KEdhbWVBY3Rpb24uRmFsbCwgKHBsYXllciwgYXJncykgPT4ge1xyXG4gICAgICAgIGxldCBzdGFydFkgPSBwbGF5ZXIueTtcclxuICAgICAgICBsZXQgZGlyZWN0aW9uOiBEaXJlY3Rpb24gPSBhcmdzLmRpcmVjdGlvbjtcclxuICAgICAgICBsZXQgc3RvcENvbmRpdGlvbiA9ICgpOiBib29sZWFuID0+ICBNYXRoLmFicyhzdGFydFkgLSBwbGF5ZXIueSkgPj0gQ29uc3RhbnRzLkdyaWRDZWxsU2l6ZTtcclxuXHJcbiAgICAgICAgLy8gbW92ZSB0aGUgdGFyZ2V0IGNlbGwgdG8gdGhlIG9uZSBiZWxvdyB0aGUgcHJldmlvdXMgdGFyZ2V0IGNlbGxcclxuICAgICAgICBhcmdzLnRhcmdldENlbGwgPSBhcmdzLnRhcmdldENlbGwuZ2V0QWRqYWNlbnRDZWxsKERpcmVjdGlvbi5Eb3duKTtcclxuXHJcbiAgICAgICAgcGxheWVyLm1vdmUoQ29uc3RhbnRzLlBsYXllckZhbGxTcGVlZCwgRGlyZWN0aW9uLkRvd24pO1xyXG4gICAgICAgIHBsYXllci5yYWlzZUV2ZW50V2hlbihHYW1lQWN0aW9uLlN0b3BGYWxsaW5nLCBzdG9wQ29uZGl0aW9uLCBhcmdzKTtcclxuXHJcbiAgICAgICAgYW5pbWF0ZShwbGF5ZXIsIGRpcmVjdGlvbiwgZmFsc2UpO1xyXG4gICAgfSlcclxuICAgIC8vIFN0b3AgZmFsbGluZyBvciBjb250aW51ZSBtb3ZpbmdcclxuICAgIC5vbkV2ZW50KEdhbWVBY3Rpb24uU3RvcEZhbGxpbmcsIChwbGF5ZXIsIGFyZ3MpID0+IHtcclxuICAgICAgICBsZXQgdGFyZ2V0Q2VsbDogR3JpZENlbGwgPSBhcmdzLnRhcmdldENlbGw7XHJcblxyXG4gICAgICAgIC8vIHNuYXAgdG8gdGhlIGdyaWRcclxuICAgICAgICBwbGF5ZXIubW92ZSgwKTtcclxuICAgICAgICBwbGF5ZXIuc2V0UG9zaXRpb24oYXJncy50YXJnZXRDZWxsLngsIGFyZ3MudGFyZ2V0Q2VsbC55KTtcclxuXHJcbiAgICAgICAgaWYgKGlucHV0QWN0aXZlKCkgJiYgIXRhcmdldENlbGwuZ2V0QWRqYWNlbnRDZWxsKERpcmVjdGlvbi5Eb3duKS5pc0ZyZWUoc29saWRBY3RvcnMpKSB7XHJcbiAgICAgICAgICAgIGFyZ3MudGFyZ2V0Q2VsbCA9IHRhcmdldENlbGwuZ2V0QWRqYWNlbnRDZWxsKGFyZ3MuZGlyZWN0aW9uKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChhcmdzLnRhcmdldENlbGwuaXNGcmVlKHNvbGlkQWN0b3JzKSkge1xyXG4gICAgICAgICAgICAgICAgcGxheWVyLnJhaXNlRXZlbnQoR2FtZUFjdGlvbi5Nb3ZlLCBhcmdzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcGxheWVyLnJhaXNlRXZlbnQoR2FtZUFjdGlvbi5TdG9wLCBhcmdzKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgLy8gU3RvcHBpbmdcclxuICAgIC5vbkV2ZW50KEdhbWVBY3Rpb24uU3RvcCwgKHBsYXllciwgYXJncykgPT4ge1xyXG4gICAgICAgIGxldCByb29tOiBSb29tID0gYXJncy5nYW1lLmN1cnJlbnRSb29tO1xyXG4gICAgICAgIGxldCB0YXJnZXRDZWxsOiBHcmlkQ2VsbCA9IGFyZ3MudGFyZ2V0Q2VsbDtcclxuXHJcbiAgICAgICAgLy8gc25hcCB0byB0aGUgZ3JpZFxyXG4gICAgICAgIHBsYXllci5tb3ZlKDApO1xyXG4gICAgICAgIHBsYXllci5zZXRQb3NpdGlvbih0YXJnZXRDZWxsLngsIHRhcmdldENlbGwueSk7XHJcblxyXG4gICAgICAgIC8vIHN0b3AgYW5pbWF0aW9uXHJcbiAgICAgICAgYW5pbWF0ZShwbGF5ZXIsIGxhc3REaXJlY3Rpb24sIGZhbHNlKTtcclxuXHJcbiAgICAgICAgLy8gY2hlY2sgaWYgZmFsbGluZ1xyXG4gICAgICAgIGlmIChyb29tLmlzUG9zaXRpb25GcmVlKHBsYXllci54ICsgMSwgcGxheWVyLnkgKyBDb25zdGFudHMuR3JpZENlbGxTaXplICsgMSwgc29saWRBY3RvcnMpKSB7XHJcbiAgICAgICAgICAgIHBsYXllci5yYWlzZUV2ZW50KEdhbWVBY3Rpb24uRmFsbCwgYXJncyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGNoZWNrIGZvciB2aWN0b3J5XHJcbiAgICAgICAgbGV0IFdpbiA9IEFjdG9yLmdldChBY3RvcklELldpbik7XHJcbiAgICAgICAgaWYgKHRhcmdldENlbGwuY29udGFpbnNJbnN0YW5jZU9mKFdpbikpIHtcclxuICAgICAgICAgICAgcm9vbS5nZXRJbnN0YW5jZShXaW4pLnJhaXNlRXZlbnQoR2FtZUFjdGlvbi5XaW4pO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAvLyBKdW1waW5nXHJcbiAgICAub25FdmVudChHYW1lQWN0aW9uLkp1bXAsIChwbGF5ZXIsIGFyZ3MpID0+IHtcclxuICAgICAgICBsZXQgdGFyZ2V0Q2VsbDogR3JpZENlbGwgPSBhcmdzLnRhcmdldENlbGw7XHJcbiAgICAgICAgbGV0IGRpcmVjdGlvbjogRGlyZWN0aW9uID0gYXJncy5kaXJlY3Rpb247XHJcbiAgICAgICAgbGV0IHN0YXJ0WSA9IHBsYXllci55O1xyXG5cclxuICAgICAgICAvLyBjbGVhcmFuY2UgY2hlY2tcclxuICAgICAgICBsZXQgY2VsbEFib3ZlUGxheWVyID0gdGFyZ2V0Q2VsbC5nZXRBZGphY2VudENlbGwoZGlyZWN0aW9uID09PSBEaXJlY3Rpb24uUmlnaHQgPyBEaXJlY3Rpb24uTGVmdCA6IERpcmVjdGlvbi5SaWdodCk7XHJcbiAgICAgICAgbGV0IGNlbGxBYm92ZUJveCA9ICEhaGVsZEJsb2NrID8gY2VsbEFib3ZlUGxheWVyLmdldEFkamFjZW50Q2VsbChEaXJlY3Rpb24uVXApIDogbnVsbDtcclxuXHJcbiAgICAgICAgbGV0IGNhbkp1bXAgPSAhIWNlbGxBYm92ZUJveCBcclxuICAgICAgICAgICAgPyBjZWxsQWJvdmVCb3guaXNGcmVlKCkgJiYgY2VsbEFib3ZlQm94LmdldEFkamFjZW50Q2VsbChkaXJlY3Rpb24pLmlzRnJlZSgpXHJcbiAgICAgICAgICAgIDogY2VsbEFib3ZlUGxheWVyLmlzRnJlZSgpIDtcclxuXHJcbiAgICAgICAgaWYgKGNhbkp1bXApIHtcclxuICAgICAgICAgICAgLy8gc3RvcCBhZnRlciBtb3ZpbmcgdXAgb25lIHNwYWNlXHJcbiAgICAgICAgICAgIGxldCBzdG9wQ29uZGl0aW9uID0gKCk6IGJvb2xlYW4gPT4gTWF0aC5hYnMoc3RhcnRZIC0gcGxheWVyLnkpID49IENvbnN0YW50cy5HcmlkQ2VsbFNpemU7XHJcbiAgICAgICAgICAgIHBsYXllci5tb3ZlKENvbnN0YW50cy5QbGF5ZXJKdW1wU3BlZWQsIERpcmVjdGlvbi5VcCk7XHJcbiAgICAgICAgICAgIHBsYXllci5yYWlzZUV2ZW50V2hlbihHYW1lQWN0aW9uLk1vdmUsIHN0b3BDb25kaXRpb24sIGFyZ3MpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAvLyBMaWZ0aW5nXHJcbiAgICAub25FdmVudChHYW1lQWN0aW9uLkxpZnQsIChwbGF5ZXIsIGFyZ3MpID0+IHtcclxuICAgICAgICBsZXQgYmxvY2s6IEFjdG9ySW5zdGFuY2UgPSBhcmdzLmJsb2NrO1xyXG4gICAgICAgIGxldCB0YXJnZXRDZWxsOiBHcmlkQ2VsbCA9IGFyZ3MudGFyZ2V0Q2VsbDtcclxuXHJcbiAgICAgICAgLy8gbGV0IHZhbGlkQmxvY2tMaWZ0Q2VsbERpcmVjdGlvbiA9IGxhc3REaXJlY3Rpb24gPT09IERpcmVjdGlvbi5MZWZ0ID8gRGlyZWN0aW9uLlJpZ2h0IDogRGlyZWN0aW9uLkxlZnQ7XHJcbiAgICAgICAgbGV0IGxpZnREaXJlY3Rpb24gPSB0YXJnZXRDZWxsLnggPCBwbGF5ZXIueCA/IERpcmVjdGlvbi5MZWZ0IDogRGlyZWN0aW9uLlJpZ2h0O1xyXG5cclxuICAgICAgICAvLyBwcmV2ZW50IGxpZnRpbmcgaWYgdGhlIGJveCBpcyB0b28gZmFyIGF3YXlcclxuICAgICAgICBsZXQgdG9vRmFyQXdheSA9IHRhcmdldENlbGwueSAhPT0gcGxheWVyLnkgfHwgTWF0aC5hYnModGFyZ2V0Q2VsbC54IC0gcGxheWVyLngpID4gNzA7XHJcblxyXG4gICAgICAgIC8vIHByZXZlbnQgbGlmdGluZyBpZiB0aGVyZSdzIHNvbWV0aGluZyBvbiB0b3Agb2YgdGhlIGJveCBvciBvbiB0b3Agb2YgdGhlIHBsYXllclxyXG4gICAgICAgIGxldCBhYm92ZUJveENlbGwgPSB0YXJnZXRDZWxsLmdldEFkamFjZW50Q2VsbChEaXJlY3Rpb24uVXApO1xyXG4gICAgICAgIGxldCBhYm92ZVBsYXllckNlbGwgPSBhYm92ZUJveENlbGwuZ2V0QWRqYWNlbnRDZWxsKGxpZnREaXJlY3Rpb24gPT09IERpcmVjdGlvbi5MZWZ0ID8gRGlyZWN0aW9uLlJpZ2h0IDogRGlyZWN0aW9uLkxlZnQpO1xyXG4gICAgICAgIGxldCBibG9ja2VkID0gIShhYm92ZUJveENlbGwuaXNGcmVlKCkgJiYgYWJvdmVQbGF5ZXJDZWxsLmlzRnJlZSgpKTtcclxuXHJcbiAgICAgICAgaWYgKGhlbGRCbG9jayAmJiBibG9jayA9PT0gaGVsZEJsb2NrKSB7XHJcbiAgICAgICAgICAgIHBsYXllci5yYWlzZUV2ZW50KEdhbWVBY3Rpb24uRHJvcCwgYXJncyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKCFoZWxkQmxvY2sgJiYgIWJsb2NrZWQgJiYgIXRvb0ZhckF3YXkpIHtcclxuICAgICAgICAgICAgaGVsZEJsb2NrID0gYmxvY2s7XHJcbiAgICAgICAgICAgIGFuaW1hdGUocGxheWVyLCBsYXN0RGlyZWN0aW9uLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIHBsYXllci5yYWlzZUV2ZW50KEdhbWVBY3Rpb24uVHVybiwgeyBkaXJlY3Rpb246IGxpZnREaXJlY3Rpb24gfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIC8vIERyb3BcclxuICAgIC5vbkV2ZW50KEdhbWVBY3Rpb24uRHJvcCwgKHBsYXllciwgYXJncykgPT4ge1xyXG4gICAgICAgIGxldCBibG9jazogQWN0b3JJbnN0YW5jZSA9IGFyZ3MuYmxvY2s7XHJcbiAgICAgICAgbGV0IHRhcmdldENlbGw6IEdyaWRDZWxsID0gYXJncy50YXJnZXRDZWxsO1xyXG4gICAgICAgIGxldCBvZmZzZXRYID0gbGFzdERpcmVjdGlvbiA9PT0gRGlyZWN0aW9uLkxlZnQgPyAtQ29uc3RhbnRzLkdyaWRDZWxsU2l6ZSA6IENvbnN0YW50cy5HcmlkQ2VsbFNpemU7XHJcblxyXG4gICAgICAgIC8vIHByZXZlbnQgZHJvcHBpbmcgaWYgdGhlcmUncyBzb21ldGhpbmcgaW4gdGhlIHdheSBvZiB0aGUgYm94XHJcbiAgICAgICAgaWYgKHRhcmdldENlbGwuZ2V0QWRqYWNlbnRDZWxsKGxhc3REaXJlY3Rpb24pLmlzRnJlZSgpKSB7XHJcbiAgICAgICAgICAgIGFyZ3MudGFyZ2V0Q2VsbCA9IGFyZ3MudGFyZ2V0Q2VsbC5nZXRBZGphY2VudENlbGwobGFzdERpcmVjdGlvbik7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBoZWxkQmxvY2sgPSBudWxsO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBibG9jay5zZXRQb3NpdGlvblJlbGF0aXZlKG9mZnNldFgsIDApO1xyXG4gICAgICAgICAgICBibG9jay5yYWlzZUV2ZW50KEdhbWVBY3Rpb24uRmFsbCwgYXJncyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGFuaW1hdGUocGxheWVyLCBsYXN0RGlyZWN0aW9uLCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIC5vbkV2ZW50KEdhbWVBY3Rpb24uVHVybiwgKHBsYXllciwgYXJncykgPT4ge1xyXG4gICAgICAgIGxldCBkaXJlY3Rpb246IERpcmVjdGlvbiA9IGFyZ3MuZGlyZWN0aW9uO1xyXG4gICAgICAgIGxhc3REaXJlY3Rpb24gPSBkaXJlY3Rpb247XHJcbiAgICAgICAgYW5pbWF0ZShwbGF5ZXIsIGxhc3REaXJlY3Rpb24sIGZhbHNlKTtcclxuICAgIH0pO1xyXG5cclxuLy8gSGVscGVyc1xyXG5mdW5jdGlvbiBhbmltYXRlKHBsYXllcjogQWN0b3JJbnN0YW5jZSwgZGlyZWN0aW9uOiBEaXJlY3Rpb24sIGlzTW92aW5nOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcclxuICAgIGNvbnN0IGFuaW1hdGlvblNwZWVkID0gMTAwO1xyXG4gICAgbGV0IHN0YXJ0RnJhbWUgPSBTdGFja21vRnJhbWUuU3RhbmRSaWdodDtcclxuICAgIFxyXG4gICAgaWYgKCEhaGVsZEJsb2NrKSB7XHJcbiAgICAgICAgc3RhcnRGcmFtZSA9IGRpcmVjdGlvbiA9PT0gRGlyZWN0aW9uLlJpZ2h0ID8gU3RhY2ttb0ZyYW1lLlN0YW5kSG9sZFJpZ2h0IDogU3RhY2ttb0ZyYW1lLlN0YW5kSG9sZExlZnQ7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBzdGFydEZyYW1lID0gZGlyZWN0aW9uID09PSBEaXJlY3Rpb24uUmlnaHQgPyBTdGFja21vRnJhbWUuU3RhbmRSaWdodCA6IFN0YWNrbW9GcmFtZS5TdGFuZExlZnQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzTW92aW5nKSB7XHJcbiAgICAgICAgcGxheWVyLmFuaW1hdGlvbi5zdGFydChzdGFydEZyYW1lICsgMSwgc3RhcnRGcmFtZSArIDIsIGFuaW1hdGlvblNwZWVkKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHBsYXllci5hbmltYXRpb24uc2V0RnJhbWUoc3RhcnRGcmFtZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlucHV0QWN0aXZlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIChJbnB1dC5jbGlja0FjdGl2ZSB8fCBJbnB1dC5rZXlEb3duKGxhc3REaXJlY3Rpb24gPT09IERpcmVjdGlvbi5MZWZ0ID8gS2V5LkxlZnQgOiBLZXkuUmlnaHQpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Q2xpY2tBZGp1c3RlZFgocm9vbTogUm9vbSk6IG51bWJlciB7XHJcbiAgICBsZXQgaW5wdXRPZmZzZXRYID0gSW5wdXQuY2xpY2tBY3RpdmUgPyBJbnB1dC5hY3RpdmVQb2ludGVyRXZlbnQuY3VycmVudFggfHwgMCA6IDA7XHJcbiAgICAvLyB3aWNrZWQgaGFjayB0byBnZXQgdGhlIHJvb20ncyBjdXJyZW50IHZpZXcuXHJcbiAgICBsZXQgdmlldyA9ICg8YW55PnJvb20pLmJlaGF2aW9ycy5maW5kKGIgPT4gISFiLnZpZXcpLnZpZXc7XHJcbiAgICByZXR1cm4gaW5wdXRPZmZzZXRYICsgKHZpZXcueCB8fCAwKTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9nYW1lL2FjdG9ycy9wbGF5ZXIudHMiLCJpbXBvcnQgeyBBY3RvciwgQm91bmRhcnksIFJvb20sIFNwcml0ZSwgVmFzdGdhbWUgfSBmcm9tICcuLy4uLy4uL2VuZ2luZS92YXN0Z2FtZSc7XHJcbmltcG9ydCAqIGFzIENvbnN0YW50cyBmcm9tICcuLy4uL3V0aWwvY29uc3RhbnRzJztcclxuaW1wb3J0IHsgQWN0b3JJRCwgR2FtZUFjdGlvbiwgUm9vbUlELCBTcHJpdGVJRCB9IGZyb20gJy4vLi4vdXRpbC9lbnVtJztcclxuXHJcbmNvbnN0IGFuaW1hdGlvbkRlbGF5ID0gNTAwO1xyXG5cclxubGV0IG9wZW5pbmcgPSBmYWxzZTtcclxubGV0IGNsb3NpbmcgPSBmYWxzZTtcclxubGV0IGRvb3JBbmltYXRpb25PZmZzZXRYID0gMDtcclxuXHJcbkFjdG9yXHJcbiAgICAuZGVmaW5lKEFjdG9ySUQuV2luLCB7XHJcbiAgICAgICAgc3ByaXRlOiBTcHJpdGUuZ2V0KFNwcml0ZUlELkRvb3JTaGVldCksXHJcbiAgICB9KVxyXG4gICAgLm9uQ3JlYXRlKHNlbGYgPT4ge1xyXG4gICAgICAgIC8vIGhpZGUgYW5kIGRyYXcgc3ByaXRlIFwibWFudWFsbHlcIiBkdXJpbmcgb25EcmF3XHJcbiAgICAgICAgc2VsZi5hbmltYXRpb24uZGVwdGggPSAtMTA7XHJcbiAgICAgICAgc2VsZi52aXNpYmxlID0gZmFsc2U7XHJcbiAgICB9KVxyXG4gICAgLm9uRHJhdygoc2VsZiwgY29udGV4dCkgPT4ge1xyXG4gICAgICAgIC8vIGFuaW1hdGUgdGhlIGRvb3IgcGFuZWxzIHdoZW4gd2lubmluZ1xyXG4gICAgICAgIGxldCBkb29yU3ByaXRlID0gU3ByaXRlLmdldChTcHJpdGVJRC5Eb29yU2hlZXQpO1xyXG4gICAgICAgIGRvb3JTcHJpdGUuZHJhdyhjb250ZXh0LCBzZWxmLnggLSBkb29yQW5pbWF0aW9uT2Zmc2V0WCwgc2VsZi55LCB7IGZyYW1lOiAwIH0pO1xyXG4gICAgICAgIGRvb3JTcHJpdGUuZHJhdyhjb250ZXh0LCBzZWxmLnggKyAzMiArIGRvb3JBbmltYXRpb25PZmZzZXRYLCBzZWxmLnksIHsgZnJhbWU6IDEgfSk7XHJcbiAgICB9KVxyXG4gICAgLm9uU3RlcChzZWxmID0+IHtcclxuICAgICAgICBpZiAob3BlbmluZykge1xyXG4gICAgICAgICAgICBkb29yQW5pbWF0aW9uT2Zmc2V0WCsrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjbG9zaW5nKSB7XHJcbiAgICAgICAgICAgIGRvb3JBbmltYXRpb25PZmZzZXRYLS07XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIC8vIExldmVsLWNvbXBsZXRlIGFuaW1hdGlvbiBldmVudHNcclxuICAgIC5vbkV2ZW50KEdhbWVBY3Rpb24uV2luLCAoc2VsZiwgYXJncykgPT4ge1xyXG4gICAgICAgIGxldCBjdXJyZW50Um9vbTogUm9vbSA9IGFyZ3MuZ2FtZS5jdXJyZW50Um9vbTtcclxuICAgICAgICBjdXJyZW50Um9vbS5zZXQoJ2NvbXBsZXRlJywgdHJ1ZSk7XHJcbiAgICAgICAgc2VsZi5yYWlzZUV2ZW50KCdvcGVuJyk7XHJcbiAgICB9KVxyXG4gICAgLm9uRXZlbnQoJ29wZW4nLCAoc2VsZiwgYXJncykgPT4ge1xyXG4gICAgICAgIG9wZW5pbmcgPSB0cnVlO1xyXG4gICAgICAgIHNlbGYucmFpc2VFdmVudEluKCdzdG9wT3BlbmluZycsIGFuaW1hdGlvbkRlbGF5LCBhcmdzKTtcclxuICAgIH0pXHJcbiAgICAub25FdmVudCgnc3RvcE9wZW5pbmcnLCAoc2VsZiwgYXJncykgPT4ge1xyXG4gICAgICAgIG9wZW5pbmcgPSBmYWxzZTtcclxuICAgICAgICBzZWxmLmFuaW1hdGlvbi5kZXB0aCA9IC0xMDA7XHJcbiAgICAgICAgc2VsZi5yYWlzZUV2ZW50SW4oJ3N0YXJ0Q2xvc2luZycsIGFuaW1hdGlvbkRlbGF5LCBhcmdzKTtcclxuICAgIH0pXHJcbiAgICAub25FdmVudCgnc3RhcnRDbG9zaW5nJywgKHNlbGYsIGFyZ3MpID0+IHtcclxuICAgICAgICBjbG9zaW5nID0gdHJ1ZTtcclxuICAgICAgICBzZWxmLnJhaXNlRXZlbnRJbignc3RvcENsb3NpbmcnLCBhbmltYXRpb25EZWxheSwgYXJncyk7XHJcbiAgICB9KVxyXG4gICAgLm9uRXZlbnQoJ3N0b3BDbG9zaW5nJywgKHNlbGYsIGFyZ3MpID0+IHtcclxuICAgICAgICBkb29yQW5pbWF0aW9uT2Zmc2V0WCA9IDA7XHJcbiAgICAgICAgY2xvc2luZyA9IGZhbHNlO1xyXG4gICAgICAgIHNlbGYucmFpc2VFdmVudEluKCdleGl0TGV2ZWwnLCBhbmltYXRpb25EZWxheSwgYXJncyk7XHJcbiAgICB9KVxyXG4gICAgLm9uRXZlbnQoJ2V4aXRMZXZlbCcsIChzZWxmLCBhcmdzKSA9PiB7XHJcbiAgICAgICAgVmFzdGdhbWUuc2V0Um9vbShSb29tSUQuTGV2ZWxTZWxlY3QsIHsgd2luOiB0cnVlIH0pO1xyXG4gICAgfSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2dhbWUvYWN0b3JzL3dpbi50cyIsImltcG9ydCB7IEFjdG9yLCBBY3Rvckluc3RhbmNlLCBCb3VuZGFyeSwgRGlyZWN0aW9uLCBHcmlkLCBHcmlkQ2VsbCwgSW5wdXQsIEtleSwgUm9vbSwgVmlld2VkUm9vbUJlaGF2aW9yLCBTcHJpdGUsIFZhc3RnYW1lLCBWaWV3IH0gZnJvbSAnLi8uLi8uLi9lbmdpbmUvdmFzdGdhbWUnO1xyXG5pbXBvcnQgKiBhcyBDb25zdGFudHMgZnJvbSAnLi8uLi91dGlsL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IEFjdG9ySUQsIFJvb21JRCwgU3ByaXRlSUQsIEdhbWVBY3Rpb24sIFNldHRpbmdzIH0gZnJvbSAnLi8uLi91dGlsL2VudW0nO1xyXG5pbXBvcnQgeyBSZWdpc3RyeSB9IGZyb20gJy4vLi4vdXRpbC9yZWdpc3RyeSc7XHJcbmltcG9ydCB7IEdyaWRSb29tQmVoYXZpb3IgfSBmcm9tICcuLi8uLi9lbmdpbmUvcm9vbS1leHQnO1xyXG5pbXBvcnQgeyBnZXREaWdpdERyYXdJbnN0YW5jZXMgfSBmcm9tICcuLy4uL3V0aWwvdXRpbCc7XHJcblxyXG5BY3RvclxyXG4gICAgLmRlZmluZShBY3RvcklELkV4aXRCdXR0b24sIHtcclxuICAgICAgICBib3VuZGFyeTogbmV3IEJvdW5kYXJ5KENvbnN0YW50cy5HcmlkQ2VsbFNpemUsIENvbnN0YW50cy5HcmlkQ2VsbFNpemUpLFxyXG4gICAgfSlcclxuICAgIC5vbkNsaWNrKCgpID0+IHtcclxuICAgICAgICBWYXN0Z2FtZS5zZXRSb29tKFJvb21JRC5MZXZlbFNlbGVjdCk7XHJcbiAgICB9KTtcclxuXHJcbkFjdG9yLmRlZmluZShBY3RvcklELldhbGwsIHtcclxuICAgIHNwcml0ZTogU3ByaXRlLmdldChTcHJpdGVJRC5XYWxsKSxcclxufSk7XHJcblxyXG5sZXQgbGV2ZWxOdW1iZXI6IG51bWJlcjtcclxubGV0IGdyaWQ6IEdyaWQ7XHJcbmxldCBwbGF5ZXJWaWV3OiBWaWV3O1xyXG5cclxubGV0IEJsb2NrQWN0b3I6IEFjdG9yO1xyXG5sZXQgUGxheWVyQWN0b3IgPSBBY3Rvci5nZXQoQWN0b3JJRC5QbGF5ZXIpO1xyXG5sZXQgV2FsbEFjdG9yID0gQWN0b3IuZ2V0KEFjdG9ySUQuV2FsbCk7XHJcblxyXG5sZXQgY2FudmFzV2lkdGggPSBSZWdpc3RyeS5nZXQoU2V0dGluZ3MuQ2FudmFzV2lkdGgpO1xyXG5sZXQgY2FudmFzSGVpZ2h0ID0gUmVnaXN0cnkuZ2V0KFNldHRpbmdzLkNhbnZhc0hlaWdodCk7XHJcblxyXG5Sb29tXHJcbiAgICAuZGVmaW5lKFJvb21JRC5MZXZlbClcclxuICAgIC5vblN0YXJ0KChyb29tLCBhcmdzKSA9PiB7XHJcbiAgICAgICAgbGV2ZWxOdW1iZXIgPSBhcmdzLmxldmVsTnVtYmVyO1xyXG4gICAgICAgIHJvb20uc2V0KCdjb21wbGV0ZScsIGZhbHNlKTtcclxuXHJcbiAgICAgICAgQmxvY2tBY3RvciA9IEFjdG9yLmdldChBY3RvcklELkJsb2NrKTtcclxuICAgICAgICBQbGF5ZXJBY3RvciA9IEFjdG9yLmdldChBY3RvcklELlBsYXllcik7XHJcbiAgICAgICAgV2FsbEFjdG9yID0gQWN0b3IuZ2V0KEFjdG9ySUQuV2FsbCk7XHJcblxyXG4gICAgICAgIC8vIGRlZmluZSB0aGUgbW92ZW1lbnQgZ3JpZCBhbmQgcGxheWVyIGJlaGF2aW9yXHJcbiAgICAgICAgbGV0IGdyaWRCZWhhdmlvciA9IG5ldyBHcmlkUm9vbUJlaGF2aW9yKENvbnN0YW50cy5HcmlkQ2VsbFNpemUsIHJvb20pO1xyXG4gICAgICAgIGdyaWQgPSBncmlkQmVoYXZpb3IuZ2V0R3JpZCgpO1xyXG4gICAgICAgIHJvb20udXNlKGdyaWRCZWhhdmlvcik7XHJcblxyXG4gICAgICAgIC8vIGFzc3VtZXMgdGhlIGxldmVsIGhhcyBhbHJlYWR5IGJlZW4gcG9wdWxhdGVkIGJlZm9yZSBzdGFydGluZ1xyXG4gICAgICAgIGxldCBwbGF5ZXIgPSByb29tLmdldEluc3RhbmNlcygpLmZpbmQoYWN0b3JJbnN0YW5jZSA9PiBhY3Rvckluc3RhbmNlLnBhcmVudCA9PT0gUGxheWVyQWN0b3IpO1xyXG5cclxuICAgICAgICAvLyBkZWZpbmUgYSB2aWV3IHRoYXQgZm9sbG93cyB0aGUgcGxheWVyXHJcbiAgICAgICAgbGV0IHZpZXdCZWhhdmlvciA9IG5ldyBWaWV3ZWRSb29tQmVoYXZpb3IoMCwgMCwgY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCk7XHJcbiAgICAgICAgcm9vbS51c2Uodmlld0JlaGF2aW9yKTtcclxuXHJcbiAgICAgICAgcGxheWVyVmlldyA9IHZpZXdCZWhhdmlvci5nZXRWaWV3KCk7XHJcbiAgICAgICAgcGxheWVyVmlldy5mb2xsb3cocGxheWVyLCB0cnVlLCAwLCAtKENvbnN0YW50cy5HcmlkQ2VsbFNpemUgLyAyKSk7IC8vIGNvbXBlbnNhdGUgZm9yIEhVRCBoZWlnaHRcclxuICAgICAgICBwbGF5ZXJWaWV3LmF0dGFjaChyb29tLmNyZWF0ZUFjdG9yKEFjdG9ySUQuRXhpdEJ1dHRvbikpO1xyXG5cclxuICAgICAgICAvLyBJbml0IEhVRFxyXG4gICAgICAgIGxldCBIVUQgPSBTcHJpdGUuZ2V0KFNwcml0ZUlELkhVRCk7XHJcbiAgICAgICAgbGV0IEV4aXRCdXR0b24gPSBTcHJpdGUuZ2V0KFNwcml0ZUlELkV4aXRCdXR0b24pO1xyXG4gICAgICAgIGxldCBEaWdpdHMgPSBTcHJpdGUuZ2V0KFNwcml0ZUlELkRpZ2l0cyk7XHJcblxyXG4gICAgICAgIC8vIE1vdXNlL1RvdWNoIGlucHV0XHJcbiAgICAgICAgZ3JpZC5vbkNsaWNrKGdyaWRDbGlja0V2ZW50ID0+IHtcclxuXHJcbiAgICAgICAgICAgIC8vIGNhbmNlbCBpbnB1dCBpZiB0aGUgbGV2ZWwgaGFzIGJlZW4gd29uIG9yIGlmIHRoZSBwbGF5ZXIgaXMgbW92aW5nXHJcbiAgICAgICAgICAgIGlmIChncmlkLnJvb20uZ2V0KCdjb21wbGV0ZScpIHx8IHBsYXllci5zcGVlZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgY2xpY2tlZENlbGwgPSBncmlkQ2xpY2tFdmVudC5nZXRDZWxsKCk7XHJcbiAgICAgICAgICAgIGxldCBwbGF5ZXJDZWxsID0gZ3JpZC5maW5kKFBsYXllckFjdG9yKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjbGlja2VkQ2VsbC5jb250YWluc0luc3RhbmNlT2YoQmxvY2tBY3RvcikpIHtcclxuICAgICAgICAgICAgICAgIHBsYXllci5yYWlzZUV2ZW50KEdhbWVBY3Rpb24uTGlmdCwgeyBibG9jazogY2xpY2tlZENlbGwuZ2V0Q29udGVudHMoKVswXSwgdGFyZ2V0Q2VsbDogY2xpY2tlZENlbGwgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChjbGlja2VkQ2VsbC54IDwgcGxheWVyQ2VsbC54KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBtb3ZlIG9yIGp1bXAgbGVmdFxyXG4gICAgICAgICAgICAgICAgbGV0IGxlZnRDZWxsID0gcGxheWVyQ2VsbC5nZXRBZGphY2VudENlbGwoRGlyZWN0aW9uLkxlZnQpO1xyXG4gICAgICAgICAgICAgICAgbGV0IHVwTGVmdENlbGwgPSBsZWZ0Q2VsbC5nZXRBZGphY2VudENlbGwoRGlyZWN0aW9uLlVwKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAobGVmdENlbGwuaXNGcmVlKFtCbG9ja0FjdG9yLCBXYWxsQWN0b3JdKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYXllci5yYWlzZUV2ZW50KEdhbWVBY3Rpb24uTW92ZSwgeyBkaXJlY3Rpb246IERpcmVjdGlvbi5MZWZ0LCB0YXJnZXRDZWxsOiBsZWZ0Q2VsbCB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGxlZnRDZWxsLmNvbnRhaW5zSW5zdGFuY2VPZihbQmxvY2tBY3RvciwgV2FsbEFjdG9yXSkgJiYgdXBMZWZ0Q2VsbC5pc0ZyZWUoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYXllci5yYWlzZUV2ZW50KEdhbWVBY3Rpb24uSnVtcCwgeyBkaXJlY3Rpb246IERpcmVjdGlvbi5MZWZ0LCB0YXJnZXRDZWxsOiB1cExlZnRDZWxsIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyLnJhaXNlRXZlbnQoR2FtZUFjdGlvbi5UdXJuLCB7IGRpcmVjdGlvbjogRGlyZWN0aW9uLkxlZnQgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoY2xpY2tlZENlbGwueCA+IHBsYXllckNlbGwueCkge1xyXG4gICAgICAgICAgICAgICAgLy8gbW92ZSBvciBqdW1wIHJpZ2h0XHJcbiAgICAgICAgICAgICAgICBsZXQgcmlnaHRDZWxsID0gcGxheWVyQ2VsbC5nZXRBZGphY2VudENlbGwoRGlyZWN0aW9uLlJpZ2h0KTtcclxuICAgICAgICAgICAgICAgIGxldCB1cFJpZ2h0Q2VsbCA9IHJpZ2h0Q2VsbC5nZXRBZGphY2VudENlbGwoRGlyZWN0aW9uLlVwKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocmlnaHRDZWxsLmlzRnJlZShbQmxvY2tBY3RvciwgV2FsbEFjdG9yXSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXIucmFpc2VFdmVudChHYW1lQWN0aW9uLk1vdmUsIHsgZGlyZWN0aW9uOiBEaXJlY3Rpb24uUmlnaHQsIHRhcmdldENlbGw6IHJpZ2h0Q2VsbCB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHJpZ2h0Q2VsbC5jb250YWluc0luc3RhbmNlT2YoW0Jsb2NrQWN0b3IsIFdhbGxBY3Rvcl0pICYmIHVwUmlnaHRDZWxsLmlzRnJlZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyLnJhaXNlRXZlbnQoR2FtZUFjdGlvbi5KdW1wLCB7IGRpcmVjdGlvbjogRGlyZWN0aW9uLlJpZ2h0LCB0YXJnZXRDZWxsOiB1cFJpZ2h0Q2VsbCB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYXllci5yYWlzZUV2ZW50KEdhbWVBY3Rpb24uVHVybiwgeyBkaXJlY3Rpb246IERpcmVjdGlvbi5SaWdodCB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSlcclxuICAgIC5vbkRyYXcoKHJvb20sIGNvbnRleHQpID0+IHtcclxuICAgICAgICBsZXQgaHVkWCA9IHBsYXllclZpZXcueDtcclxuICAgICAgICBsZXQgaHVkWSA9IHBsYXllclZpZXcueTtcclxuXHJcbiAgICAgICAgU3ByaXRlLmdldChTcHJpdGVJRC5IVUQpLmRyYXcoY29udGV4dCwgaHVkWCwgaHVkWSwgeyB0aWxlWDogdHJ1ZSB9KTtcclxuICAgICAgICBTcHJpdGUuZ2V0KFNwcml0ZUlELkV4aXRCdXR0b24pLmRyYXcoY29udGV4dCwgaHVkWCwgaHVkWSk7XHJcblxyXG4gICAgICAgIGxldCBkcmF3SW5zdGFuY2VzID0gZ2V0RGlnaXREcmF3SW5zdGFuY2VzKGxldmVsTnVtYmVyLCB0cnVlKTtcclxuICAgICAgICBkcmF3SW5zdGFuY2VzLmZvckVhY2goZHJhdyA9PiBTcHJpdGUuZ2V0KFNwcml0ZUlELkRpZ2l0cykuZHJhdyhjb250ZXh0LCBodWRYICsgKGNhbnZhc1dpZHRoIC8gMikgLSAzMiArIGRyYXcueCwgaHVkWSArIDEyLCB7IGZyYW1lOiBkcmF3LmZyYW1lIH0pKTtcclxuICAgIH0pXHJcbiAgICAub25LZXkoS2V5LkxlZnQsIChyb29tLCBldikgPT4ge1xyXG4gICAgICAgIGxldCBwbGF5ZXIgPSByb29tLmdldEluc3RhbmNlcygpLmZpbmQoYWN0b3JJbnN0YW5jZSA9PiBhY3Rvckluc3RhbmNlLnBhcmVudCA9PT0gUGxheWVyQWN0b3IpO1xyXG5cclxuICAgICAgICBsZXQgcGxheWVyQ2VsbCA9IGdyaWQuZ2V0Q2VsbEF0UG9zaXRpb24ocGxheWVyLngsIHBsYXllci55KTtcclxuICAgICAgICBsZXQgbGVmdENlbGwgPSBwbGF5ZXJDZWxsLmdldEFkamFjZW50Q2VsbChEaXJlY3Rpb24uTGVmdCk7XHJcbiAgICAgICAgbGV0IHRvcExlZnRDZWxsID0gbGVmdENlbGwuZ2V0QWRqYWNlbnRDZWxsKERpcmVjdGlvbi5VcCk7XHJcblxyXG4gICAgICAgIGxldCBpc0xlZnRCbG9ja2VkID0gbGVmdENlbGwuY29udGFpbnNJbnN0YW5jZU9mKFdhbGxBY3RvcikgfHwgbGVmdENlbGwuY29udGFpbnNJbnN0YW5jZU9mKEJsb2NrQWN0b3IpO1xyXG5cclxuICAgICAgICBpZiAodG9wTGVmdENlbGwuaXNGcmVlKCkgJiYgaXNMZWZ0QmxvY2tlZCkge1xyXG4gICAgICAgICAgICBncmlkLnJhaXNlQ2xpY2tFdmVudChwbGF5ZXIueCAtIENvbnN0YW50cy5HcmlkQ2VsbFNpemUsIHBsYXllci55IC0gQ29uc3RhbnRzLkdyaWRDZWxsU2l6ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKCFpc0xlZnRCbG9ja2VkKSB7XHJcbiAgICAgICAgICAgIGdyaWQucmFpc2VDbGlja0V2ZW50KHBsYXllci54IC0gQ29uc3RhbnRzLkdyaWRDZWxsU2l6ZSwgcGxheWVyLnkpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAub25LZXkoS2V5LlJpZ2h0LCAocm9vbSwgZXYpID0+IHtcclxuICAgICAgICBsZXQgcGxheWVyID0gcm9vbS5nZXRJbnN0YW5jZXMoKS5maW5kKGFjdG9ySW5zdGFuY2UgPT4gYWN0b3JJbnN0YW5jZS5wYXJlbnQgPT09IFBsYXllckFjdG9yKTtcclxuXHJcbiAgICAgICAgbGV0IHBsYXllckNlbGwgPSBncmlkLmdldENlbGxBdFBvc2l0aW9uKHBsYXllci54LCBwbGF5ZXIueSk7XHJcbiAgICAgICAgbGV0IHJpZ2h0Q2VsbCA9IHBsYXllckNlbGwuZ2V0QWRqYWNlbnRDZWxsKERpcmVjdGlvbi5SaWdodCk7XHJcbiAgICAgICAgbGV0IHRvcFJpZ2h0Q2VsbCA9IHJpZ2h0Q2VsbC5nZXRBZGphY2VudENlbGwoRGlyZWN0aW9uLlVwKTtcclxuXHJcbiAgICAgICAgbGV0IGlzUmlnaHRCbG9ja2VkID0gcmlnaHRDZWxsLmNvbnRhaW5zSW5zdGFuY2VPZihXYWxsQWN0b3IpIHx8IHJpZ2h0Q2VsbC5jb250YWluc0luc3RhbmNlT2YoQmxvY2tBY3Rvcik7XHJcblxyXG4gICAgICAgIGlmICh0b3BSaWdodENlbGwuaXNGcmVlKCkgJiYgaXNSaWdodEJsb2NrZWQpIHtcclxuICAgICAgICAgICAgZ3JpZC5yYWlzZUNsaWNrRXZlbnQocGxheWVyLnggKyBDb25zdGFudHMuR3JpZENlbGxTaXplLCBwbGF5ZXIueSAtIENvbnN0YW50cy5HcmlkQ2VsbFNpemUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICghaXNSaWdodEJsb2NrZWQpIHtcclxuICAgICAgICAgICAgZ3JpZC5yYWlzZUNsaWNrRXZlbnQocGxheWVyLnggKyBDb25zdGFudHMuR3JpZENlbGxTaXplLCBwbGF5ZXIueSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIC5vbktleShLZXkuRG93biwgKHJvb20sIGV2KSA9PiB7XHJcbiAgICAgICAgbGV0IHBsYXllciA9IHJvb20uZ2V0SW5zdGFuY2VzKCkuZmluZChhY3Rvckluc3RhbmNlID0+IGFjdG9ySW5zdGFuY2UucGFyZW50ID09PSBQbGF5ZXJBY3Rvcik7XHJcblxyXG4gICAgICAgIGxldCBwbGF5ZXJDZWxsID0gZ3JpZC5nZXRDZWxsQXRQb3NpdGlvbihwbGF5ZXIueCwgcGxheWVyLnkpO1xyXG4gICAgICAgIGxldCBsZWZ0Q2VsbCA9IHBsYXllckNlbGwuZ2V0QWRqYWNlbnRDZWxsKERpcmVjdGlvbi5MZWZ0KTtcclxuICAgICAgICBsZXQgcmlnaHRDZWxsID0gcGxheWVyQ2VsbC5nZXRBZGphY2VudENlbGwoRGlyZWN0aW9uLlJpZ2h0KTtcclxuICAgICAgICBsZXQgdG9wQ2VsbCA9IHBsYXllckNlbGwuZ2V0QWRqYWNlbnRDZWxsKERpcmVjdGlvbi5VcCk7XHJcbiAgICAgICAgbGV0IHRvcExlZnRDZWxsID0gdG9wQ2VsbC5nZXRBZGphY2VudENlbGwoRGlyZWN0aW9uLkxlZnQpO1xyXG4gICAgICAgIGxldCB0b3BSaWdodENlbGwgPSB0b3BDZWxsLmdldEFkamFjZW50Q2VsbChEaXJlY3Rpb24uUmlnaHQpO1xyXG5cclxuICAgICAgICBpZiAodG9wQ2VsbC5jb250YWluc0luc3RhbmNlT2YoQmxvY2tBY3RvcikpIHtcclxuICAgICAgICAgICAgLy8gZHJvcFxyXG4gICAgICAgICAgICBncmlkLnJhaXNlQ2xpY2tFdmVudChwbGF5ZXIueCwgcGxheWVyLnkgLSBDb25zdGFudHMuR3JpZENlbGxTaXplKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGxpZnRcclxuICAgICAgICAgICAgaWYgKGxlZnRDZWxsLmNvbnRhaW5zSW5zdGFuY2VPZihCbG9ja0FjdG9yKSAmJiB0b3BMZWZ0Q2VsbC5pc0ZyZWUoKSkge1xyXG4gICAgICAgICAgICAgICAgZ3JpZC5yYWlzZUNsaWNrRXZlbnQocGxheWVyLnggLSBDb25zdGFudHMuR3JpZENlbGxTaXplLCBwbGF5ZXIueSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChyaWdodENlbGwuY29udGFpbnNJbnN0YW5jZU9mKEJsb2NrQWN0b3IpICYmIHRvcFJpZ2h0Q2VsbC5pc0ZyZWUoKSkge1xyXG4gICAgICAgICAgICAgICAgZ3JpZC5yYWlzZUNsaWNrRXZlbnQocGxheWVyLnggKyBDb25zdGFudHMuR3JpZENlbGxTaXplLCBwbGF5ZXIueSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2dhbWUvcm9vbXMvbGV2ZWwudHMiLCJpbXBvcnQgeyBBY3RvciwgQm91bmRhcnksIERpcmVjdGlvbiwgSW5wdXQsIFJvb20sIFZpZXdlZFJvb21CZWhhdmlvciwgU3ByaXRlLCBWYXN0Z2FtZSwgVmlldyB9IGZyb20gJy4vLi4vLi4vZW5naW5lL3Zhc3RnYW1lJztcclxuaW1wb3J0ICogYXMgQ29uc3RhbnRzIGZyb20gJy4vLi4vdXRpbC9jb25zdGFudHMnO1xyXG5pbXBvcnQgKiBhcyBEYXRhIGZyb20gJy4vLi4vdXRpbC9kYXRhJztcclxuaW1wb3J0IHsgQWN0b3JJRCwgTGV2ZWxCZ0NvbG9yLCBSb29tSUQsIFNldHRpbmdzLCBTcHJpdGVJRCB9IGZyb20gJy4vLi4vdXRpbC9lbnVtJztcclxuaW1wb3J0IHsgTGV2ZWxCdWlsZGVyIH0gZnJvbSAnLi8uLi91dGlsL2xldmVsLWJ1aWxkZXInO1xyXG5pbXBvcnQgeyBSZWdpc3RyeSB9IGZyb20gJy4vLi4vdXRpbC9yZWdpc3RyeSc7XHJcbmltcG9ydCB7IGdldERpZ2l0RHJhd0luc3RhbmNlcyB9IGZyb20gJy4vLi4vdXRpbC91dGlsJztcclxuXHJcbmxldCBzY3JvbGxWaWV3OiBWaWV3O1xyXG5sZXQgY2FudmFzSGVpZ2h0OiBudW1iZXI7XHJcbmxldCBjYW52YXNXaWR0aDogbnVtYmVyO1xyXG5sZXQgc3RhcnRYOiBudW1iZXI7XHJcbmxldCBzdGFydFk6IG51bWJlcjtcclxubGV0IG92ZXJmbG93ZWRSb3dzOiBudW1iZXI7XHJcblxyXG5jb25zdCBpY29uUGFkZGluZyA9IDg7XHJcbmNvbnN0IGljb25TaXplV2l0aFBhZGRpbmcgPSBDb25zdGFudHMuR3JpZENlbGxTaXplICsgKGljb25QYWRkaW5nICogMik7XHJcblxyXG5sZXQgX2xhc3RMZXZlbE51bWJlciA9IDE7XHJcbmxldCBsZXZlbFNlbGVjdExvY2sgPSBmYWxzZTtcclxuXHJcblJvb20uZGVmaW5lKFJvb21JRC5MZXZlbFNlbGVjdClcclxuICAgIC5vblN0YXJ0KChyb29tLCBhcmdzKSA9PiB7XHJcbiAgICAgICAgY2FudmFzV2lkdGggPSBSZWdpc3RyeS5nZXQoU2V0dGluZ3MuQ2FudmFzV2lkdGgpO1xyXG4gICAgICAgIGNhbnZhc0hlaWdodCA9IFJlZ2lzdHJ5LmdldChTZXR0aW5ncy5DYW52YXNIZWlnaHQpO1xyXG5cclxuICAgICAgICByb29tLnNldEJhY2tncm91bmQoQ29uc3RhbnRzLkJsYWNrLCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0LCBDb25zdGFudHMuQmxhY2spO1xyXG5cclxuICAgICAgICBsZXQgdmlld0JlaGF2aW9yID0gbmV3IFZpZXdlZFJvb21CZWhhdmlvcigwLCAwLCBjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0KTtcclxuICAgICAgICByb29tLnVzZSh2aWV3QmVoYXZpb3IpO1xyXG4gICAgICAgIHNjcm9sbFZpZXcgPSB2aWV3QmVoYXZpb3IuZ2V0VmlldygpO1xyXG5cclxuICAgICAgICAvLyBkZXRlcm1pbmUvdXBkYXRlIGxldmVsLXVubG9jayBwcm9ncmVzc1xyXG4gICAgICAgIGxldCB1bmxvY2tlZExldmVsQ291bnQgPSBOdW1iZXIoUmVnaXN0cnkuZ2V0KFNldHRpbmdzLlN0YWNrbW9Qcm9ncmVzcykpO1xyXG4gICAgICAgIGlmIChhcmdzICYmIGFyZ3Mud2luICYmIF9sYXN0TGV2ZWxOdW1iZXIgPT09IHVubG9ja2VkTGV2ZWxDb3VudCkge1xyXG4gICAgICAgICAgICB1bmxvY2tlZExldmVsQ291bnQrKztcclxuICAgICAgICAgICAgUmVnaXN0cnkuc2V0KFNldHRpbmdzLlN0YWNrbW9Qcm9ncmVzcywgdW5sb2NrZWRMZXZlbENvdW50LCB0cnVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdW5sb2NrZWRMZXZlbENvdW50KSB7XHJcbiAgICAgICAgICAgIHVubG9ja2VkTGV2ZWxDb3VudCA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBhZGp1c3QgaWNvbnMgcGVyIHJvdyBmb3Igc2Nyb2xsIGJhciBpZiByb3dzIG92ZXJmbG93IHRoZSBjYW52YXNcclxuICAgICAgICBsZXQgaWNvbnNQZXJSb3cgPSBNYXRoLmZsb29yKGNhbnZhc1dpZHRoIC8gaWNvblNpemVXaXRoUGFkZGluZyk7XHJcbiAgICAgICAgbGV0IHJvd0NvdW50ID0gTWF0aC5jZWlsKERhdGEuTGV2ZWxzLmNvdW50IC8gaWNvbnNQZXJSb3cpO1xyXG4gICAgICAgIGxldCBzdGFydFggPSBzdGFydFkgPSBNYXRoLmZsb29yKChjYW52YXNXaWR0aCAtIChpY29uc1BlclJvdyAqIGljb25TaXplV2l0aFBhZGRpbmcpKSAvIDIpO1xyXG4gICAgICAgIGxldCBzaG93U2Nyb2xsYmFycyA9IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAoc3RhcnRZICsgKHJvd0NvdW50ICogaWNvblNpemVXaXRoUGFkZGluZykgPiBjYW52YXNIZWlnaHQpIHtcclxuICAgICAgICAgICAgaWNvbnNQZXJSb3ctLTtcclxuICAgICAgICAgICAgcm93Q291bnQgPSBNYXRoLmNlaWwoRGF0YS5MZXZlbHMuY291bnQgLyBpY29uc1BlclJvdyk7XHJcbiAgICAgICAgICAgIG92ZXJmbG93ZWRSb3dzID0gTWF0aC5jZWlsKCgocm93Q291bnQgKiBpY29uU2l6ZVdpdGhQYWRkaW5nKSAtIGNhbnZhc0hlaWdodCkgLyBpY29uU2l6ZVdpdGhQYWRkaW5nKTtcclxuICAgICAgICAgICAgc2hvd1Njcm9sbGJhcnMgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gY3JlYXRlIGxldmVsIGljb25zXHJcbiAgICAgICAgbGV0IGN1cnJlbnRSb3cgPSAwO1xyXG4gICAgICAgIGxldCBjdXJyZW50UG9zaXRpb24gPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgRGF0YS5MZXZlbHMuY291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgaWNvbiA9IHJvb20uY3JlYXRlQWN0b3IoQWN0b3JJRC5MZXZlbEljb24sIHN0YXJ0WCArIGN1cnJlbnRQb3NpdGlvbiAqIGljb25TaXplV2l0aFBhZGRpbmcsIHN0YXJ0WSArIGN1cnJlbnRSb3cgKiBpY29uU2l6ZVdpdGhQYWRkaW5nKTtcclxuICAgICAgICAgICAgKDxhbnk+aWNvbikubGV2ZWxOdW1iZXIgPSBpICsgMTtcclxuICAgICAgICAgICAgKDxhbnk+aWNvbikuZW5hYmxlZCA9IGkgPCB1bmxvY2tlZExldmVsQ291bnQ7XHJcblxyXG4gICAgICAgICAgICBjdXJyZW50UG9zaXRpb24rKztcclxuXHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50UG9zaXRpb24gPT09IGljb25zUGVyUm93KSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50UG9zaXRpb24gPSAwO1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFJvdysrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBjcmVhdGUgc2Nyb2xsIGljb25zIGlmIG5lZWRlZFxyXG4gICAgICAgIGlmIChzaG93U2Nyb2xsYmFycykge1xyXG4gICAgICAgICAgICBsZXQgdXBBcnJvdyA9IHJvb20uY3JlYXRlQWN0b3IoQWN0b3JJRC5TY3JvbGxBcnJvdyk7XHJcbiAgICAgICAgICAgIHVwQXJyb3cuYW5pbWF0aW9uLnNldEZyYW1lKDEpO1xyXG4gICAgICAgICAgICB1cEFycm93LnggPSBjYW52YXNXaWR0aCAtIGljb25QYWRkaW5nIC0gQ29uc3RhbnRzLkdyaWRDZWxsU2l6ZTtcclxuICAgICAgICAgICAgKDxhbnk+dXBBcnJvdykuZGlyZWN0aW9uID0gRGlyZWN0aW9uLlVwO1xyXG5cclxuICAgICAgICAgICAgbGV0IGRvd25BcnJvdyA9IHJvb20uY3JlYXRlQWN0b3IoQWN0b3JJRC5TY3JvbGxBcnJvdyk7XHJcbiAgICAgICAgICAgIGRvd25BcnJvdy54ID0gdXBBcnJvdy54O1xyXG4gICAgICAgICAgICAoPGFueT5kb3duQXJyb3cpLmRpcmVjdGlvbiA9IERpcmVjdGlvbi5Eb3duO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuLy8gTGV2ZWwgaWNvbnNcclxuQWN0b3JcclxuICAgIC5kZWZpbmUoQWN0b3JJRC5MZXZlbEljb24sIHtcclxuICAgICAgICBzcHJpdGU6IFNwcml0ZS5nZXQoU3ByaXRlSUQuTGV2ZWxJY29uKSxcclxuICAgIH0pXHJcbiAgICAub25DbGljayhzZWxmID0+IHtcclxuXHJcbiAgICAgICAgaWYgKCg8YW55PnNlbGYpLmVuYWJsZWQgJiYgIWxldmVsU2VsZWN0TG9jaykge1xyXG4gICAgICAgICAgICBsZXZlbFNlbGVjdExvY2sgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgbGV0IGxldmVsTnVtYmVyOiBudW1iZXIgPSAoPGFueT5zZWxmKS5sZXZlbE51bWJlcjtcclxuICAgICAgICAgICAgbGV0IGxldmVsID0gUm9vbS5nZXQoUm9vbUlELkxldmVsKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIExldmVsQnVpbGRlci5wb3B1bGF0ZVJvb20obGV2ZWwsIGxldmVsTnVtYmVyKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIF9sYXN0TGV2ZWxOdW1iZXIgPSBsZXZlbE51bWJlcjtcclxuICAgICAgICAgICAgVmFzdGdhbWUuc2V0Um9vbShSb29tSUQuTGV2ZWwsIHsgbGV2ZWxOdW1iZXI6IGxldmVsTnVtYmVyIH0pO1xyXG5cclxuICAgICAgICAgICAgbGV2ZWxTZWxlY3RMb2NrID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIC5vbkRyYXcoKHNlbGYsIGNvbnRleHQpID0+IHtcclxuICAgICAgICBpZiAoKDxhbnk+c2VsZikuZW5hYmxlZCkge1xyXG5cclxuICAgICAgICAgICAgbGV0IGxldmVsTnVtYmVyOiBudW1iZXIgPSAoPGFueT5zZWxmKS5sZXZlbE51bWJlcjtcclxuICAgICAgICAgICAgbGV0IGRyYXdJbnN0YW5jZXMgPSBnZXREaWdpdERyYXdJbnN0YW5jZXMobGV2ZWxOdW1iZXIpO1xyXG5cclxuICAgICAgICAgICAgZHJhd0luc3RhbmNlcy5mb3JFYWNoKGRyYXcgPT4gU3ByaXRlLmdldChTcHJpdGVJRC5EaWdpdHMpLmRyYXcoY29udGV4dCwgc2VsZi54ICsgZHJhdy54LCBzZWxmLnkgKyBkcmF3LnksIHsgZnJhbWU6IGRyYXcuZnJhbWUgfSkpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuLy8gU2Nyb2xsIGFycm93c1xyXG5BY3RvclxyXG4gICAgLmRlZmluZShBY3RvcklELlNjcm9sbEFycm93LCB7XHJcbiAgICAgICAgc3ByaXRlOiBTcHJpdGUuZ2V0KFNwcml0ZUlELkFycm93U2hlZXQpLFxyXG4gICAgfSlcclxuICAgIC5vbkNsaWNrKChzZWxmLCBldmVudCkgPT4ge1xyXG4gICAgICAgIGlmICgoPGFueT5zZWxmKS5lbmFibGVkKSB7XHJcbiAgICAgICAgICAgIGxldCBkaXJlY3Rpb246IERpcmVjdGlvbiA9ICg8YW55PnNlbGYpLmRpcmVjdGlvbjtcclxuICAgICAgICAgICAgc2Nyb2xsVmlldy55ICs9IGRpcmVjdGlvbiA9PT0gRGlyZWN0aW9uLkRvd24gPyA2NCA6IC02NDtcclxuXHJcbiAgICAgICAgICAgIGlmIChzY3JvbGxWaWV3LnkgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGxWaWV3LnkgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIC5vblN0ZXAoc2VsZiA9PiB7XHJcbiAgICAgICAgLy8gdXBkYXRlIHZlcnRpY2FsIHBvc2l0aW9uIHRvIG1hdGNoIHNjcm9sbGluZ1xyXG4gICAgICAgIGxldCBpc1VwQXJyb3cgPSAoKDxhbnk+c2VsZikuZGlyZWN0aW9uID09PSBEaXJlY3Rpb24uVXApO1xyXG4gICAgICAgIHNlbGYueSA9IGlzVXBBcnJvdyA/IHN0YXJ0WSArIHNjcm9sbFZpZXcueSA6IGNhbnZhc0hlaWdodCAtIDgyICsgc2Nyb2xsVmlldy55OyBcclxuXHJcbiAgICAgICAgLy8gZW5hYmxlL2Rpc2FibGUgaWYgdGhlcmUncyBubyBtb3JlIHNjcm9sbGluZyB0byBkb1xyXG4gICAgICAgICg8YW55PnNlbGYpLmVuYWJsZWQgPSBpc1VwQXJyb3cgPyBzY3JvbGxWaWV3LnkgPiAwIDogc2Nyb2xsVmlldy55IDwgKG92ZXJmbG93ZWRSb3dzICsgMikgKiBpY29uU2l6ZVdpdGhQYWRkaW5nO1xyXG4gICAgfSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2dhbWUvcm9vbXMvbGV2ZWwtc2VsZWN0LnRzIiwiaW1wb3J0IHsgS2V5LCBSb29tLCBTcHJpdGUsIFZhc3RnYW1lIH0gZnJvbSAnLi8uLi8uLi9lbmdpbmUvdmFzdGdhbWUnO1xyXG5pbXBvcnQgKiBhcyBDb25zdGFudHMgZnJvbSAnLi8uLi91dGlsL2NvbnN0YW50cyc7XHJcbmltcG9ydCB7IFJvb21JRCwgU2V0dGluZ3MsIFNwcml0ZUlEIH0gZnJvbSAnLi8uLi91dGlsL2VudW0nO1xyXG5pbXBvcnQgeyBSZWdpc3RyeSB9IGZyb20gJy4vLi4vdXRpbC9yZWdpc3RyeSc7XHJcblxyXG5sZXQgdGl0bGVYOiBudW1iZXIgPSAwO1xyXG5sZXQgdGl0bGVZOiBudW1iZXIgPSAwO1xyXG5cclxuUm9vbVxyXG4gICAgLmRlZmluZShSb29tSUQuVGl0bGUpXHJcbiAgICAub25TdGFydCgocm9vbSwgYXJncykgPT4ge1xyXG4gICAgICAgIGxldCBjYW52YXNXaWR0aCA9IFJlZ2lzdHJ5LmdldChTZXR0aW5ncy5DYW52YXNXaWR0aCk7XHJcbiAgICAgICAgbGV0IGNhbnZhc0hlaWdodCA9IFJlZ2lzdHJ5LmdldChTZXR0aW5ncy5DYW52YXNIZWlnaHQpO1xyXG5cclxuICAgICAgICB0aXRsZVggPSBNYXRoLmZsb29yKChjYW52YXNXaWR0aCAtIENvbnN0YW50cy5UaXRsZVdpZHRoKSAvIDIpO1xyXG4gICAgICAgIHRpdGxlWSA9IE1hdGguZmxvb3IoKGNhbnZhc0hlaWdodCAtIENvbnN0YW50cy5UaXRsZUhlaWdodCkgLyA0KTtcclxuXHJcbiAgICAgICAgcm9vbS5zZXRCYWNrZ3JvdW5kKENvbnN0YW50cy5CbGFjaywgY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCwgQ29uc3RhbnRzLkJsYWNrKTtcclxuICAgIH0pXHJcbiAgICAub25DbGljaygoKSA9PiB7XHJcbiAgICAgICAgVmFzdGdhbWUuc2V0Um9vbShSb29tSUQuTGV2ZWxTZWxlY3QpO1xyXG4gICAgfSlcclxuICAgIC5vbktleShLZXkuQW55LCAoKSA9PiB7XHJcbiAgICAgICAgVmFzdGdhbWUuc2V0Um9vbShSb29tSUQuTGV2ZWxTZWxlY3QpO1xyXG4gICAgfSlcclxuICAgIC5vbkRyYXcoKHJvb20sIGNvbnRleHQpID0+IHtcclxuICAgICAgICBTcHJpdGUuZ2V0KFNwcml0ZUlELlRpdGxlKS5kcmF3KGNvbnRleHQsIHRpdGxlWCwgdGl0bGVZKTtcclxuICAgIH0pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZ2FtZS9yb29tcy90aXRsZS50cyIsInZhciBtYXAgPSB7XG5cdFwiLi9hY3RvcnMvYmxvY2tcIjogMjUsXG5cdFwiLi9hY3RvcnMvYmxvY2sudHNcIjogMjUsXG5cdFwiLi9hY3RvcnMvcGxheWVyXCI6IDI2LFxuXHRcIi4vYWN0b3JzL3BsYXllci50c1wiOiAyNixcblx0XCIuL2FjdG9ycy93aW5cIjogMjcsXG5cdFwiLi9hY3RvcnMvd2luLnRzXCI6IDI3LFxuXHRcIi4vZ2FtZVwiOiAyMixcblx0XCIuL2dhbWUudHNcIjogMjIsXG5cdFwiLi9yb29tcy9sZXZlbFwiOiAyOCxcblx0XCIuL3Jvb21zL2xldmVsLXNlbGVjdFwiOiAyOSxcblx0XCIuL3Jvb21zL2xldmVsLXNlbGVjdC50c1wiOiAyOSxcblx0XCIuL3Jvb21zL2xldmVsLnRzXCI6IDI4LFxuXHRcIi4vcm9vbXMvdGl0bGVcIjogMzAsXG5cdFwiLi9yb29tcy90aXRsZS50c1wiOiAzMCxcblx0XCIuL3Nwcml0ZXNcIjogMjQsXG5cdFwiLi9zcHJpdGVzLnRzXCI6IDI0LFxuXHRcIi4vdXRpbC9jb25zdGFudHNcIjogMyxcblx0XCIuL3V0aWwvY29uc3RhbnRzLnRzXCI6IDMsXG5cdFwiLi91dGlsL2RhdGFcIjogMTUsXG5cdFwiLi91dGlsL2RhdGEudHNcIjogMTUsXG5cdFwiLi91dGlsL2VudW1cIjogMixcblx0XCIuL3V0aWwvZW51bS50c1wiOiAyLFxuXHRcIi4vdXRpbC9sZXZlbC1idWlsZGVyXCI6IDIzLFxuXHRcIi4vdXRpbC9sZXZlbC1idWlsZGVyLnRzXCI6IDIzLFxuXHRcIi4vdXRpbC9yZWdpc3RyeVwiOiA2LFxuXHRcIi4vdXRpbC9yZWdpc3RyeS50c1wiOiA2LFxuXHRcIi4vdXRpbC91dGlsXCI6IDEzLFxuXHRcIi4vdXRpbC91dGlsLnRzXCI6IDEzXG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpKTtcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHZhciBpZCA9IG1hcFtyZXFdO1xuXHRpZighKGlkICsgMSkpIC8vIGNoZWNrIGZvciBudW1iZXIgb3Igc3RyaW5nXG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJy5cIik7XG5cdHJldHVybiBpZDtcbn07XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gMzE7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvZ2FtZSBeXFwuXFwvLiokXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9