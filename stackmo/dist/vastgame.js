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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
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
/* 2 */,
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
/* 4 */,
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
/* 7 */,
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
/* 12 */,
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



/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNjE1ZDAyOGQyMzFlODU5NGEyMWEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS92YXN0Z2FtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2dhbWUtY29udGV4dC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2VudW0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9pbnB1dC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL3Nwcml0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL3Jvb20udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9hY3Rvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2dyaWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS92aWV3LnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvY2FudmFzLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvZ2FtZS1ydW5uZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9ldmVudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS91dGlsLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvYm91bmRhcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFF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LENBQVE7UUFBUyxVQUFLLEdBQUwsS0FBSyxDQUFpQjtRQUNsRixFQUFFLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVCLE1BQU0sSUFBSSxLQUFLLENBQUMsa0RBQWtELENBQUMsQ0FBQztRQUN4RSxDQUFDO0lBQ0wsQ0FBQztJQVJNLG1CQUFVLEdBQWpCLFVBQWtCLE1BQWMsRUFBRSxLQUFzQjtRQUF0QixxQ0FBc0I7UUFDcEQsTUFBTSxDQUFDLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBUUQsNkJBQVUsR0FBVixVQUFXLENBQVMsRUFBRSxDQUFTO1FBQzNCLE1BQU0sQ0FBQyxJQUFJLGtCQUFrQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUNMLGVBQUM7QUFBRCxDQUFDIiwiZmlsZSI6InZhc3RnYW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNjE1ZDAyOGQyMzFlODU5NGEyMWEiLCJpbXBvcnQgeyBHYW1lQ2FudmFzSFRNTDJELCBDYW52YXNPcHRpb25zLCBHYW1lQ2FudmFzIH0gZnJvbSAnLi9jYW52YXMnO1xyXG5pbXBvcnQgKiBhcyBFbnVtIGZyb20gJy4vZW51bSc7XHJcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnLi9pbnB1dCc7XHJcbmltcG9ydCB7IEdhbWVDb250ZXh0IH0gZnJvbSAnLi9nYW1lLWNvbnRleHQnO1xyXG5pbXBvcnQgeyBHYW1lUnVubmVyIH0gZnJvbSAnLi9nYW1lLXJ1bm5lcic7XHJcbmltcG9ydCB7IFJvb20gfSBmcm9tICcuL3Jvb20nO1xyXG5cclxuLy8gZXhwb3J0IHB1YmxpYyBtb2R1bGVzXHJcbmV4cG9ydCB7IEFjdG9yLCBBY3Rvckluc3RhbmNlIH0gZnJvbSAnLi9hY3Rvcic7XHJcbmV4cG9ydCB7IEJvdW5kYXJ5IH0gZnJvbSAnLi9ib3VuZGFyeSc7XHJcbmV4cG9ydCB7IEVudW0gfVxyXG5leHBvcnQgeyBJbnB1dCB9IGZyb20gJy4vaW5wdXQnO1xyXG5leHBvcnQgeyBHcmlkLCBHcmlkQ2VsbCB9IGZyb20gJy4vZ3JpZCc7XHJcbmV4cG9ydCB7IFJvb20gfSBmcm9tICcuL3Jvb20nO1xyXG5leHBvcnQgeyBTcHJpdGUsIFNwcml0ZVRyYW5zZm9ybWF0aW9uIH0gZnJvbSAnLi9zcHJpdGUnO1xyXG5leHBvcnQgeyBWaWV3IH0gZnJvbSAnLi92aWV3JztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgR2FtZUxpZmVjeWNsZUNhbGxiYWNrIHtcclxuICAgIChhcmdzOiBhbnkpOiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEdhbWVPcHRpb25zIHtcclxuICAgIGNhbnZhcz86IENhbnZhc09wdGlvbnM7XHJcbiAgICB0YXJnZXRGUFM/OiBudW1iZXI7XHJcbn1cclxuXHJcbmNsYXNzIFZhc3RnYW1lSFRNTDJEIHtcclxuICAgIHByaXZhdGUgcnVubmVyOiBHYW1lUnVubmVyO1xyXG5cclxuICAgIGluaXQoY2FudmFzRWxlbWVudElELCBvcHRpb25zOiBHYW1lT3B0aW9ucyA9IHt9KTogdm9pZCB7XHJcbiAgICAgICAgSW5wdXQuaW5pdCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBlbGVtZW50ID0gPEhUTUxDYW52YXNFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNhbnZhc0VsZW1lbnRJRCk7XHJcbiAgICAgICAgbGV0IGNhbnZhcyA9IG5ldyBHYW1lQ2FudmFzSFRNTDJEKGVsZW1lbnQpO1xyXG4gICAgICAgIGNhbnZhcy5pbml0KG9wdGlvbnMuY2FudmFzKTtcclxuXHJcbiAgICAgICAgR2FtZUNvbnRleHQuc2V0Q2FudmFzKGNhbnZhcyk7XHJcbiAgICAgICAgdGhpcy5ydW5uZXIgPSBuZXcgR2FtZVJ1bm5lcihjYW52YXMsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KHJvb21JRDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5zZXRSb29tKHJvb21JRCk7XHJcbiAgICAgICAgdGhpcy5ydW5uZXIuc3RhcnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRSb29tKHJvb21JRDogc3RyaW5nLCBzdGFydEFyZ3M/OiBhbnkpIHtcclxuICAgICAgICBsZXQgcm9vbSA9IFJvb20uZ2V0KHJvb21JRCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHByZXZpb3VzUm9vbSA9IEdhbWVDb250ZXh0LmdldEN1cnJlbnRSb29tKCk7XHJcbiAgICAgICAgaWYgKHByZXZpb3VzUm9vbSkge1xyXG4gICAgICAgICAgICBwcmV2aW91c1Jvb20uZW5kKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBHYW1lQ29udGV4dC5zZXRDdXJyZW50Um9vbShyb29tKTtcclxuXHJcbiAgICAgICAgaWYgKHJvb20uaGFzU3RhcnQpIHtcclxuICAgICAgICAgICAgcm9vbS5jYWxsU3RhcnQoc3RhcnRBcmdzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBWYXN0Z2FtZSB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBnYW1lID0gbmV3IFZhc3RnYW1lSFRNTDJEKCk7XHJcblxyXG4gICAgc3RhdGljIHN0YXJ0KGNhbnZhc0VsZW1lbnRJRDogc3RyaW5nLCBpbml0aWFsUm9vbUlEOiBzdHJpbmcsIG9wdGlvbnM/OiBHYW1lT3B0aW9ucyk6IFZhc3RnYW1lSFRNTDJEIHtcclxuICAgICAgICB0aGlzLmdhbWUuaW5pdChjYW52YXNFbGVtZW50SUQsIG9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMuZ2FtZS5zdGFydChpbml0aWFsUm9vbUlEKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2FtZTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgc2V0Um9vbShyb29tSUQ6IHN0cmluZywgc3RhcnRBcmdzPzogYW55KSB7XHJcbiAgICAgICAgdGhpcy5nYW1lLnNldFJvb20ocm9vbUlELCBzdGFydEFyZ3MpO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvdmFzdGdhbWUudHMiLCJpbXBvcnQgeyBBY3RvciB9IGZyb20gJy4vYWN0b3InO1xyXG5pbXBvcnQgeyBHYW1lQ2FudmFzSFRNTDJEIH0gZnJvbSAnLi9jYW52YXMnO1xyXG5pbXBvcnQgeyBEZWZlcnJlZEV2ZW50IH0gZnJvbSAnLi9ldmVudHMnO1xyXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJy4vaW5wdXQnO1xyXG5pbXBvcnQgeyBSb29tIH0gZnJvbSAnLi9yb29tJztcclxuaW1wb3J0IHsgU3ByaXRlIH0gZnJvbSAnLi9zcHJpdGUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWVDb250ZXh0IHtcclxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogR2FtZUNvbnRleHQgPSBuZXcgR2FtZUNvbnRleHQoKTtcclxuXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGFjdG9yczogeyBbaW5kZXg6IHN0cmluZ106IEFjdG9yIH0gPSB7fTtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgZXZlbnRzOiB7IFtpbmRleDogbnVtYmVyXTogRGVmZXJyZWRFdmVudCB9ID0ge307XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHJvb21zOiB7IFtpbmRleDogc3RyaW5nXTogUm9vbSB9ID0ge307XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHNwcml0ZXM6IHsgW2luZGV4OiBzdHJpbmddOiBTcHJpdGV9ID0ge307XHJcblxyXG4gICAgcHJpdmF0ZSBjYW52YXM6IEdhbWVDYW52YXNIVE1MMkQ7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRSb29tOiBSb29tO1xyXG5cclxuICAgIHN0YXRpYyBzZXRDYW52YXMoY2FudmFzOiBHYW1lQ2FudmFzSFRNTDJEKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5faW5zdGFuY2UuY2FudmFzID0gY2FudmFzO1xyXG5cclxuICAgICAgICBJbnB1dC5yZWdpc3RlckNsaWNrSGFuZGxlcihldiA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9pbnN0YW5jZS5jdXJyZW50Um9vbSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UuY3VycmVudFJvb20uaGFuZGxlQ2xpY2soZXYpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvLyBhY3RvcnNcclxuICAgIHN0YXRpYyBkZWZpbmVBY3RvcihuYW1lOiBzdHJpbmcsIGFjdG9yOiBBY3Rvcik6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLl9pbnN0YW5jZS5hY3RvcnNbbmFtZV0pIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBY3RvciAke25hbWV9IGhhcyBhbHJlYWR5IGJlZW4gZGVmaW5lZC5gKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2luc3RhbmNlLmFjdG9yc1tuYW1lXSA9IGFjdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRBY3RvcihuYW1lOiBzdHJpbmcpOiBBY3RvciB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pbnN0YW5jZS5hY3RvcnNbbmFtZV0pIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBY3RvciAke25hbWV9IGhhcyBub3QgYmVlbiBkZWZpbmVkLmApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlLmFjdG9yc1tuYW1lXTtcclxuICAgIH1cclxuXHJcbiAgICAvLyByb29tc1xyXG4gICAgc3RhdGljIGRlZmluZVJvb20obmFtZTogc3RyaW5nLCByb29tOiBSb29tKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2luc3RhbmNlLnJvb21zW25hbWVdKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgUm9vbSAke25hbWV9IGhhcyBhbHJlYWR5IGJlZW4gZGVmaW5lZC5gKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2luc3RhbmNlLnJvb21zW25hbWVdID0gcm9vbTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0Um9vbShuYW1lOiBzdHJpbmcpOiBSb29tIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2luc3RhbmNlLnJvb21zW25hbWVdKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgUm9vbSAke25hbWV9IGhhcyBub3QgYmVlbiBkZWZpbmVkLmApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlLnJvb21zW25hbWVdO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRDdXJyZW50Um9vbSgpOiBSb29tIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2UuY3VycmVudFJvb207XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNldEN1cnJlbnRSb29tKHJvb206IFJvb20pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9pbnN0YW5jZS5jdXJyZW50Um9vbSA9IHJvb207XHJcbiAgICB9XHJcblxyXG4gICAgLy8gc3ByaXRlc1xyXG4gICAgc3RhdGljIGRlZmluZVNwcml0ZShuYW1lOiBzdHJpbmcsIHNwcml0ZTogU3ByaXRlKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2luc3RhbmNlLnNwcml0ZXNbbmFtZV0pIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBTcHJpdGUgJHtuYW1lfSBoYXMgYWxyZWFkeSBiZWVuIGRlZmluZWQuYCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9pbnN0YW5jZS5zcHJpdGVzW25hbWVdID0gc3ByaXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRTcHJpdGUobmFtZTogc3RyaW5nKTogU3ByaXRlIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2luc3RhbmNlLnNwcml0ZXNbbmFtZV0pIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yIChgU3ByaXRlICR7bmFtZX0gaGFzIG5vdCBiZWVuIGRlZmluZWQuYCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2Uuc3ByaXRlc1tuYW1lXTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBldmVudHNcclxuICAgIHN0YXRpYyByZWdpc3RlckV2ZW50KGV2ZW50OiBEZWZlcnJlZEV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5faW5zdGFuY2UuZXZlbnRzW3RoaXMuX2luc3RhbmNlLm5leHRFdmVudElEKCldID0gZXZlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNoZWNrQW5kRmlyZUV2ZW50cygpOiB2b2lkIHtcclxuICAgICAgICBcclxuICAgICAgICBmb3IgKGxldCBldmVudElEIGluIHRoaXMuX2luc3RhbmNlLmV2ZW50cykge1xyXG4gICAgICAgICAgICBsZXQgZXZlbnQgPSB0aGlzLl9pbnN0YW5jZS5ldmVudHNbZXZlbnRJRF07XHJcblxyXG4gICAgICAgICAgICBpZiAoZXZlbnQuY29uZGl0aW9uQ2FsbGJhY2soKSkge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQuYWN0aW9uQ2FsbGJhY2soKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQuZmlyZU9uY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5faW5zdGFuY2UuZXZlbnRzW2V2ZW50SURdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbmV4dEV2ZW50SUQgPSAoKCkgPT4ge1xyXG4gICAgICAgIGxldCBjdXJyZW50SUQgPSAwO1xyXG4gICAgICAgIHJldHVybiAoKCkgPT4gKytjdXJyZW50SUQpO1xyXG4gICAgfSkoKTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL2dhbWUtY29udGV4dC50cyIsImV4cG9ydCBlbnVtIEFjdG9yU3RhdGUge1xyXG4gICAgQWN0aXZlID0gMSxcclxuICAgIERlc3Ryb3llZCA9IDIsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIERpcmVjdGlvbiB7XHJcbiAgICBSaWdodCA9IDAsXHJcbiAgICBEb3duID0gOTAsXHJcbiAgICBMZWZ0ID0gMTgwLFxyXG4gICAgVXAgPSAyNzAsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEdhbWVTdGF0ZSB7XHJcbiAgICBSdW5uaW5nID0gMSxcclxuICAgIFBhdXNlZCA9IDIsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEtleSB7XHJcbiAgICBBbnkgPSAtMSxcclxuICAgIFNwYWNlID0gMzIsXHJcbiAgICBMZWZ0ID0gMzcsXHJcbiAgICBVcCA9IDM4LFxyXG4gICAgUmlnaHQgPSAzOSxcclxuICAgIERvd24gPSA0MCxcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL2VudW0udHMiLCJpbXBvcnQgeyBLZXkgfSBmcm9tICcuL2VudW0nO1xyXG5cclxuZXhwb3J0IGNsYXNzIElucHV0IHtcclxuICAgIHByaXZhdGUgc3RhdGljIGNsaWNrSGFuZGxlcnM6IENvbmNyZXRlRXZlbnRIYW5kbGVyPFBvaW50ZXJJbnB1dEV2ZW50PltdID0gW107XHJcbiAgICBwcml2YXRlIHN0YXRpYyBrZXlib2FyZEhhbmRsZXJzOiB7IFtjb2RlOiBudW1iZXJdOiBDb25jcmV0ZUV2ZW50SGFuZGxlcjxLZXlib2FyZEV2ZW50PiB9ID0ge307XHJcbiAgICBwcml2YXRlIHN0YXRpYyBrZXlib2FyZEFjdGl2aXR5OiB7IFtjb2RlOiBudW1iZXJdOiBib29sZWFuIH0gPSB7fTtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfYWN0aXZlUG9pbnRlckV2ZW50OiBQb2ludGVySW5wdXRFdmVudCA9IG51bGw7XHJcbiAgICBzdGF0aWMgZ2V0IGNsaWNrQWN0aXZlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAhIUlucHV0Ll9hY3RpdmVQb2ludGVyRXZlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGluaXQoKSB7XHJcblxyXG4gICAgICAgIGxldCByYWlzZVBvaW50ZXJFdmVudCA9IChldjogUG9pbnRlcklucHV0RXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKElucHV0Ll9hY3RpdmVQb2ludGVyRXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgSW5wdXQuX2FjdGl2ZVBvaW50ZXJFdmVudCA9IGV2O1xyXG5cclxuICAgICAgICAgICAgaWYgKElucHV0LmNsaWNrSGFuZGxlcnMubGVuZ3RoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgSW5wdXQuY2xpY2tIYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyOiBDb25jcmV0ZUV2ZW50SGFuZGxlcjxQb2ludGVySW5wdXRFdmVudD4pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaGFuZGxlci5pc0FsaXZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXIuY2FsbGJhY2soZXYpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgbGV0IGVuZFBvaW50ZXJFdmVudCA9ICgpID0+IHtcclxuICAgICAgICAgICAgSW5wdXQuX2FjdGl2ZVBvaW50ZXJFdmVudCA9IG51bGw7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gcmVnaXN0ZXIgbW91c2UvdG91Y2ggaW5wdXQgXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5vbm1vdXNlZG93biA9IGZ1bmN0aW9uKHRoaXM6IGFueSwgZXY6IE1vdXNlRXZlbnQpIHtcclxuICAgICAgICAgICAgcmFpc2VQb2ludGVyRXZlbnQoUG9pbnRlcklucHV0RXZlbnQuZnJvbU1vdXNlRXZlbnQoZXYpKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkub250b3VjaHN0YXJ0ID0gZnVuY3Rpb24gKGV2OiBUb3VjaEV2ZW50KSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkub25tb3VzZWRvd24gPSBudWxsO1xyXG4gICAgICAgICAgICByYWlzZVBvaW50ZXJFdmVudChQb2ludGVySW5wdXRFdmVudC5mcm9tVG91Y2hFdmVudChldikpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5vbm1vdXNldXAgPSBlbmRQb2ludGVyRXZlbnQ7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5vbnRvdWNoZW5kID0gZW5kUG9pbnRlckV2ZW50O1xyXG5cclxuICAgICAgICAvLyByZWdpc3RlciBrZXlib2FyZCBpbnB1dFxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkub25rZXlkb3duID0gKGV2OiBLZXlib2FyZEV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBrZXlDb2RlID0gZXYua2V5Q29kZSB8fCBldi5jb2RlXHJcbiAgICAgICAgICAgIGxldCBoYW5kbGVyOiBDb25jcmV0ZUV2ZW50SGFuZGxlcjxLZXlib2FyZEV2ZW50PiA9IHRoaXMua2V5Ym9hcmRIYW5kbGVyc1trZXlDb2RlXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChoYW5kbGVyICYmIGhhbmRsZXIuaXNBbGl2ZSAmJiAhdGhpcy5rZXlib2FyZEFjdGl2aXR5W2tleUNvZGVdKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmtleWJvYXJkQWN0aXZpdHlba2V5Q29kZV0gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlci5jYWxsYmFjayhldik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBnbG9iYWxIYW5kbGVyID0gdGhpcy5rZXlib2FyZEhhbmRsZXJzW0tleS5BbnldO1xyXG4gICAgICAgICAgICBpZiAoZ2xvYmFsSGFuZGxlciAmJiBnbG9iYWxIYW5kbGVyLmlzQWxpdmUgJiYgIXRoaXMua2V5Ym9hcmRBY3Rpdml0eVtLZXkuQW55XSkgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMua2V5Ym9hcmRBY3Rpdml0eVtLZXkuQW55XSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBnbG9iYWxIYW5kbGVyLmNhbGxiYWNrKGV2KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5vbmtleXVwID0gKGV2OiBLZXlib2FyZEV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBrZXlDb2RlID0gZXYua2V5Q29kZSB8fCBldi5jb2RlXHJcbiAgICAgICAgICAgIGxldCBoYW5kbGVyOiBDb25jcmV0ZUV2ZW50SGFuZGxlcjxLZXlib2FyZEV2ZW50PiA9IHRoaXMua2V5Ym9hcmRIYW5kbGVyc1trZXlDb2RlXTtcclxuICAgICAgICAgICAgdGhpcy5rZXlib2FyZEFjdGl2aXR5W0tleS5BbnldID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICBpZiAoaGFuZGxlciAmJiBoYW5kbGVyLmlzQWxpdmUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMua2V5Ym9hcmRBY3Rpdml0eVtrZXlDb2RlXSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcmVnaXN0ZXJDbGlja0hhbmRsZXIoY2FsbGJhY2s6IChldmVudDogUG9pbnRlcklucHV0RXZlbnQpID0+IHZvaWQpOiBDb25jcmV0ZUV2ZW50SGFuZGxlcjxQb2ludGVySW5wdXRFdmVudD4ge1xyXG4gICAgICAgIGxldCBjbGlja0hhbmRsZXIgPSBuZXcgQ29uY3JldGVFdmVudEhhbmRsZXI8UG9pbnRlcklucHV0RXZlbnQ+KGNhbGxiYWNrKTs7XHJcbiAgICAgICAgSW5wdXQuY2xpY2tIYW5kbGVycy5wdXNoKGNsaWNrSGFuZGxlcik7XHJcblxyXG4gICAgICAgIHJldHVybiBjbGlja0hhbmRsZXI7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHJlZ2lzdGVyS2V5SGFuZGxlcihrZXk6IEtleSwgY2FsbGJhY2s6IChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4gdm9pZCk6IENvbmNyZXRlRXZlbnRIYW5kbGVyPEtleWJvYXJkRXZlbnQ+IHtcclxuICAgICAgICBsZXQga2V5SGFuZGxlciA9IG5ldyBDb25jcmV0ZUV2ZW50SGFuZGxlcjxLZXlib2FyZEV2ZW50PihjYWxsYmFjayk7XHJcbiAgICAgICAgSW5wdXQua2V5Ym9hcmRIYW5kbGVyc1trZXldID0ga2V5SGFuZGxlclxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBrZXlIYW5kbGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBrZXlEb3duKGtleTogS2V5KTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuICEhdGhpcy5rZXlib2FyZEFjdGl2aXR5W2tleV07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRXZlbnRIYW5kbGVyIHtcclxuICAgIGNhbGxiYWNrOiAoZXZlbnQ6IGFueSkgPT4gdm9pZDtcclxuICAgIGRpc3Bvc2U6ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmNsYXNzIENvbmNyZXRlRXZlbnRIYW5kbGVyPFQ+IGltcGxlbWVudHMgRXZlbnRIYW5kbGVyIHtcclxuICAgIGlzQWxpdmU6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBjYWxsYmFjazogKGV2ZW50OiBUKSA9PiB2b2lkKSB7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGRpc3Bvc2UoKSB7XHJcbiAgICAgICAgdGhpcy5pc0FsaXZlID0gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQb2ludGVySW5wdXRFdmVudCB7XHJcbiAgICB4OiBudW1iZXI7XHJcbiAgICB5OiBudW1iZXI7XHJcblxyXG4gICAgc3RhdGljIGZyb21Nb3VzZUV2ZW50KGV2OiBNb3VzZUV2ZW50KTogUG9pbnRlcklucHV0RXZlbnQge1xyXG4gICAgICAgIHJldHVybiB7IHg6IGV2Lm9mZnNldFgsIHk6IGV2Lm9mZnNldFkgfTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZnJvbVRvdWNoRXZlbnQoZXY6IFRvdWNoRXZlbnQpOiBQb2ludGVySW5wdXRFdmVudCB7XHJcbiAgICAgICAgbGV0IHRvdWNoID0gZXYudG91Y2hlc1swXTtcclxuICAgICAgICByZXR1cm4geyB4OiB0b3VjaCA/IHRvdWNoLmNsaWVudFggOiAwLCB5OiB0b3VjaCA/IHRvdWNoLmNsaWVudFkgOiAwIH07XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL2lucHV0LnRzIiwiaW1wb3J0IHsgQWN0b3IgfSBmcm9tICcuL2FjdG9yJztcclxuaW1wb3J0IHsgR2FtZUNvbnRleHQgfSBmcm9tICcuL2dhbWUtY29udGV4dCc7XHJcblxyXG5leHBvcnQgZW51bSBTcHJpdGVUcmFuc2Zvcm1hdGlvbiB7XHJcbiAgICBPcGFjaXR5ID0gMCxcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNwcml0ZSB7XHJcbiAgICBwcml2YXRlIHRyYW5zZm9ybWF0b25zOiB7IFtpbmRleDogbnVtYmVyXTogbnVtYmVyIH0gPSB7fTtcclxuXHJcbiAgICBzdGF0aWMgZGVmaW5lKG5hbWU6IHN0cmluZywgb3B0aW9uczogU3ByaXRlT3B0aW9ucyk6IFNwcml0ZSB7XHJcbiAgICAgICAgbGV0IHNwcml0ZSA9IG5ldyBTcHJpdGUob3B0aW9ucyk7XHJcbiAgICAgICAgR2FtZUNvbnRleHQuZGVmaW5lU3ByaXRlKG5hbWUsIHNwcml0ZSk7XHJcblxyXG4gICAgICAgIHJldHVybiBzcHJpdGU7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldChuYW1lOiBzdHJpbmcpOiBTcHJpdGUge1xyXG4gICAgICAgIHJldHVybiBHYW1lQ29udGV4dC5nZXRTcHJpdGUobmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVhZG9ubHkgaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQ7XHJcbiAgICByZWFkb25seSBoZWlnaHQ6IG51bWJlcjtcclxuICAgIHJlYWRvbmx5IHdpZHRoOiBudW1iZXI7XHJcbiAgICByZWFkb25seSBmcmFtZUJvcmRlcjogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM6IFNwcml0ZU9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLmltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgdGhpcy5pbWFnZS5zcmMgPSBvcHRpb25zLmltYWdlU291cmNlO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IG9wdGlvbnMud2lkdGg7XHJcbiAgICAgICAgdGhpcy5mcmFtZUJvcmRlciA9IG9wdGlvbnMuZnJhbWVCb3JkZXI7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0RGVmYXVsdFRyYW5zZm9ybXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldERlZmF1bHRUcmFuc2Zvcm1zKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudHJhbnNmb3JtYXRvbnNbU3ByaXRlVHJhbnNmb3JtYXRpb24uT3BhY2l0eV0gPSAxO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRyYW5zZm9ybSh0cmFuc2Zvcm1hdGlvbjogU3ByaXRlVHJhbnNmb3JtYXRpb24pOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRyYW5zZm9ybWF0b25zW3RyYW5zZm9ybWF0aW9uXTtcclxuICAgIH1cclxuXHJcbiAgICB0cmFuc2Zvcm0odHJhbnNmb3JtYXRpb246IFNwcml0ZVRyYW5zZm9ybWF0aW9uLCBkZWx0YTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy50cmFuc2Zvcm1hdG9uc1t0cmFuc2Zvcm1hdGlvbl0gKz0gZGVsdGE7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VHJhbnNmb3JtKHRyYW5zZm9ybWF0aW9uOiBTcHJpdGVUcmFuc2Zvcm1hdGlvbiwgdmFsdWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudHJhbnNmb3JtYXRvbnNbdHJhbnNmb3JtYXRpb25dID0gdmFsdWU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3ByaXRlT3B0aW9ucyB7XHJcbiAgICBpbWFnZVNvdXJjZTogc3RyaW5nO1xyXG4gICAgaGVpZ2h0OiBudW1iZXI7XHJcbiAgICB3aWR0aDogbnVtYmVyO1xyXG4gICAgZnJhbWVCb3JkZXI/OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTcHJpdGVBbmltYXRpb24ge1xyXG4gICAgcHJpdmF0ZSBjdXJyZW50OiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSB0aW1lcjogYW55O1xyXG5cclxuICAgIGRlcHRoOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHJlYWRvbmx5IHNwcml0ZTogU3ByaXRlKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gMDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0IGZyYW1lKCk6IG51bWJlciB7IFxyXG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNvdXJjZSgpOiBTcHJpdGUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNwcml0ZTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydChzdGFydDogbnVtYmVyLCBlbmQ6IG51bWJlciwgZGVsYXk/OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnN0b3AoKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnQgPSBzdGFydDtcclxuXHJcbiAgICAgICAgdGhpcy50aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50ID0gdGhpcy5jdXJyZW50ID09PSBlbmQgPyBzdGFydCA6IHRoaXMuY3VycmVudCArIDE7XHJcbiAgICAgICAgfSwgZGVsYXkpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0b3AoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMudGltZXIpIHtcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0KGZyYW1lOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnN0b3AoKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnQgPSBmcmFtZTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL3Nwcml0ZS50cyIsImltcG9ydCB7IEFjdG9yLCBBY3Rvckluc3RhbmNlLCBDb2xsaXNpb25DYWxsYmFjayB9IGZyb20gJy4vYWN0b3InO1xyXG5pbXBvcnQgeyBHYW1lQ2FudmFzQ29udGV4dCwgUm9vbURyYXdFdmVudCB9IGZyb20gJy4vY2FudmFzJztcclxuaW1wb3J0IHsgS2V5IH0gZnJvbSAnLi9lbnVtJztcclxuaW1wb3J0IHsgRXZlbnRIYW5kbGVyLCBJbnB1dCwgUG9pbnRlcklucHV0RXZlbnQgfSBmcm9tICcuL2lucHV0JztcclxuaW1wb3J0IHsgR2FtZUNvbnRleHQgfSBmcm9tICcuL2dhbWUtY29udGV4dCc7XHJcbmltcG9ydCB7IEdyaWQgfSBmcm9tICcuL2dyaWQnO1xyXG5pbXBvcnQgeyBHYW1lTGlmZWN5Y2xlQ2FsbGJhY2sgfSBmcm9tICcuL3Zhc3RnYW1lJztcclxuaW1wb3J0IHsgVmlldyB9IGZyb20gJy4vdmlldyc7XHJcblxyXG5leHBvcnQgY2xhc3MgQmFja2dyb3VuZCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcmVhZG9ubHkgY29sb3I6IHN0cmluZyxcclxuICAgICAgICByZWFkb25seSBwYWdlQ29sb3I6IHN0cmluZyA9ICcjMDAwJywgXHJcbiAgICAgICAgcmVhZG9ubHkgd2lkdGg6IG51bWJlciwgXHJcbiAgICAgICAgcmVhZG9ubHkgaGVpZ2h0OiBudW1iZXIpIHtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFJvb20ge1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIG5leHRBY3Rvckluc3RhbmNlSUQgPSAoKCkgPT4ge1xyXG4gICAgICAgIGxldCBjdXJyZW50SUQgPSAwO1xyXG4gICAgICAgIHJldHVybiAoKCkgPT4gKytjdXJyZW50SUQpO1xyXG4gICAgfSkoKTtcclxuXHJcbiAgICBzdGF0aWMgZGVmaW5lKG5hbWU6IHN0cmluZyk6IFJvb20ge1xyXG4gICAgICAgIGxldCByb29tID0gbmV3IFJvb20oKTtcclxuICAgICAgICBHYW1lQ29udGV4dC5kZWZpbmVSb29tKG5hbWUsIHJvb20pO1xyXG4gICAgICAgIHJldHVybiByb29tO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQobmFtZTogc3RyaW5nKTogUm9vbSB7XHJcbiAgICAgICAgcmV0dXJuIEdhbWVDb250ZXh0LmdldFJvb20obmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBjdXJyZW50KCk6IFJvb20ge1xyXG4gICAgICAgIHJldHVybiBHYW1lQ29udGV4dC5nZXRDdXJyZW50Um9vbSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYWN0b3JJbnN0YW5jZU1hcDogeyBbaW5kZXg6IG51bWJlcl06IEFjdG9ySW5zdGFuY2UgfSA9IHt9O1xyXG5cclxuICAgIHByaXZhdGUgZXZlbnRIYW5kbGVyczogRXZlbnRIYW5kbGVyW10gPSBbXTtcclxuICAgIC8vIFRPRE86IGNvbnNpZGVyIG1vdmluZyBHcmlkIHRvIGV4dGVuZGVkIGNsYXNzIG9yIGRlY29yYXRvclxyXG4gICAgcHJpdmF0ZSBncmlkOiBHcmlkO1xyXG4gICAgdmlldzogVmlldztcclxuXHJcbiAgICBwcml2YXRlIG9uU3RhcnRDYWxsYmFjazogR2FtZUxpZmVjeWNsZUNhbGxiYWNrO1xyXG4gICAgcHJpdmF0ZSBvbkRyYXdDYWxsYmFjazogUm9vbURyYXdFdmVudDtcclxuICAgIFxyXG4gICAgYmFja2dyb3VuZDogQmFja2dyb3VuZDtcclxuXHJcbiAgICBnZXQgaGFzU3RhcnQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuICEhdGhpcy5vblN0YXJ0Q2FsbGJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgb25TdGFydChjYWxsYmFjazogR2FtZUxpZmVjeWNsZUNhbGxiYWNrKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vblN0YXJ0Q2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgIH1cclxuXHJcbiAgICBjYWxsU3RhcnQoYXJncz86IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMub25TdGFydENhbGxiYWNrKGFyZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBoYXNEcmF3KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAhIXRoaXMub25EcmF3Q2FsbGJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgb25EcmF3KGNhbGxiYWNrOiBSb29tRHJhd0V2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vbkRyYXdDYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbGxEcmF3KGdhbWVDYW52YXNDb250ZXh0OiBHYW1lQ2FudmFzQ29udGV4dCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMub25EcmF3Q2FsbGJhY2soZ2FtZUNhbnZhc0NvbnRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2xpY2soY2FsbGJhY2s6IChldmVudDogTW91c2VFdmVudCkgPT4gdm9pZCkge1xyXG4gICAgICAgIGxldCBjbGlja0hhbmRsZXIgPSBJbnB1dC5yZWdpc3RlckNsaWNrSGFuZGxlcihjYWxsYmFjayk7XHJcbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXJzLnB1c2goY2xpY2tIYW5kbGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBvbktleShrZXk6IEtleSwgY2FsbGJhY2s6IChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4gdm9pZCkge1xyXG4gICAgICAgIGxldCBrZXlIYW5kbGVyID0gSW5wdXQucmVnaXN0ZXJLZXlIYW5kbGVyKGtleSwgY2FsbGJhY2spO1xyXG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVycy5wdXNoKGtleUhhbmRsZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlZmluZUdyaWQodGlsZVNpemU6IG51bWJlcik6IEdyaWQge1xyXG4gICAgICAgIHRoaXMuZ3JpZCA9IG5ldyBHcmlkKHRpbGVTaXplLCB0aGlzKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZDtcclxuICAgIH1cclxuXHJcbiAgICBkZWZpbmVWaWV3KHg6IG51bWJlciwgeTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcik6IFZpZXcge1xyXG4gICAgICAgIHRoaXMudmlldyA9IG5ldyBWaWV3KHgsIHksIHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy52aWV3O1xyXG4gICAgfVxyXG5cclxuICAgIHNldEJhY2tncm91bmQoY29sb3I6IHN0cmluZywgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIHBhZ2VDb2xvcj86IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZCA9IG5ldyBCYWNrZ3JvdW5kKGNvbG9yLCBwYWdlQ29sb3IsIHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuICAgICAgICBpZiAocGFnZUNvbG9yKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gcGFnZUNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGVwKCk6IHZvaWQge1xyXG5cclxuICAgICAgICB0aGlzLmdldEluc3RhbmNlcygpLmZvckVhY2goaW5zdGFuY2UgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcGFyZW50ID0gaW5zdGFuY2UucGFyZW50O1xyXG5cclxuICAgICAgICAgICAgaWYgKGluc3RhbmNlLmlzQWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBhcHBseSBhY3RvciBpbnN0YW5jZSBtb3ZlbWVudFxyXG4gICAgICAgICAgICAgICAgaWYgKGluc3RhbmNlLnNwZWVkICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBseUluc3RhbmNlTW92ZW1lbnQoaW5zdGFuY2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tDb2xsaXNpb25zKGluc3RhbmNlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBjYWxsIGFjdG9yICdzdGVwJyBjYWxsYmFja3NcclxuICAgICAgICAgICAgICAgIGlmIChwYXJlbnQuaGFzU3RlcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudC5jYWxsU3RlcChpbnN0YW5jZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gaW50ZXJuYWwgJ3Bvc3Qtc3RlcCdcclxuICAgICAgICAgICAgICAgIGluc3RhbmNlLmRvUG9zdFN0ZXAoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVzdHJveUFjdG9ySW5zdGFuY2UoaW5zdGFuY2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnZpZXcpIHtcclxuICAgICAgICAgICAgdGhpcy52aWV3LnVwZGF0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFwcGx5SW5zdGFuY2VNb3ZlbWVudChpbnN0YW5jZTogQWN0b3JJbnN0YW5jZSk6IHZvaWQge1xyXG4gICAgICAgIGxldCBvZmZzZXRYID0gTWF0aC5yb3VuZChpbnN0YW5jZS5nZXRNb3ZlbWVudE9mZnNldFgoKSk7XHJcbiAgICAgICAgbGV0IG9mZnNldFkgPSBNYXRoLnJvdW5kKGluc3RhbmNlLmdldE1vdmVtZW50T2Zmc2V0WSgpKTtcclxuXHJcbiAgICAgICAgaWYgKG9mZnNldFggIT09IDAgfHwgb2Zmc2V0WSAhPT0gMCkge1xyXG4gICAgICAgICAgICBpbnN0YW5jZS5zZXRQb3NpdGlvblJlbGF0aXZlKG9mZnNldFgsIG9mZnNldFkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNoZWNrQ29sbGlzaW9ucyhzZWxmSW5zdGFuY2U6IEFjdG9ySW5zdGFuY2UpOiB2b2lkIHtcclxuICAgICAgICBsZXQgcGFyZW50ID0gc2VsZkluc3RhbmNlLnBhcmVudDs7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9yIChsZXQgYWN0b3JOYW1lIGluIHBhcmVudC5jb2xsaXNpb25IYW5kbGVycykge1xyXG4gICAgICAgICAgICBsZXQgY2FsbGJhY2sgPSBwYXJlbnQuY29sbGlzaW9uSGFuZGxlcnNbYWN0b3JOYW1lXTtcclxuICAgICAgICAgICAgbGV0IG90aGVyQWN0b3IgPSBBY3Rvci5nZXQoYWN0b3JOYW1lKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IG90aGVySUQgaW4gdGhpcy5hY3Rvckluc3RhbmNlTWFwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgb3RoZXIgPSB0aGlzLmFjdG9ySW5zdGFuY2VNYXBbb3RoZXJJRF07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKG90aGVyLnBhcmVudCA9PT0gb3RoZXJBY3Rvcikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZkluc3RhbmNlICE9PSBvdGhlciAmJiBzZWxmSW5zdGFuY2UuY29sbGlkZXNXaXRoKG90aGVyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhzZWxmSW5zdGFuY2UsIG90aGVyKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVBY3RvcihwYXJlbnRBY3RvcjogQWN0b3IsIHg/OiBudW1iZXIsIHk/OiBudW1iZXIpOiBBY3Rvckluc3RhbmNlIHtcclxuICAgICAgICBsZXQgbmV3QWN0b3JJbnN0YW5jZUlEID0gUm9vbS5uZXh0QWN0b3JJbnN0YW5jZUlEKCk7XHJcbiAgICAgICAgbGV0IG5ld0luc3RhbmNlID0gbmV3IEFjdG9ySW5zdGFuY2UocGFyZW50QWN0b3IsIG5ld0FjdG9ySW5zdGFuY2VJRCwgeCwgeSk7XHJcblxyXG4gICAgICAgIHRoaXMuYWN0b3JJbnN0YW5jZU1hcFtuZXdBY3Rvckluc3RhbmNlSURdID0gbmV3SW5zdGFuY2U7XHJcblxyXG4gICAgICAgIGlmIChwYXJlbnRBY3Rvci5oYXNDcmVhdGUpIHtcclxuICAgICAgICAgICAgcGFyZW50QWN0b3IuY2FsbENyZWF0ZShuZXdJbnN0YW5jZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbmV3SW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBkZXN0cm95QWN0b3JJbnN0YW5jZShpbnN0YW5jZTogQWN0b3JJbnN0YW5jZSk6IHZvaWQge1xyXG4gICAgICAgIGxldCBwYXJlbnQgPSBpbnN0YW5jZS5wYXJlbnQ7XHJcblxyXG4gICAgICAgIGlmIChwYXJlbnQuaGFzRGVzdHJveSkge1xyXG4gICAgICAgICAgICBwYXJlbnQuY2FsbERlc3Ryb3koaW5zdGFuY2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGVsZXRlIHRoaXMuYWN0b3JJbnN0YW5jZU1hcFtpbnN0YW5jZS5pZF07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SW5zdGFuY2VzKCk6IEFjdG9ySW5zdGFuY2VbXSB7XHJcbiAgICAgICAgbGV0IGluc3RhbmNlcyA9IFtdO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpbnN0YW5jZSBpbiB0aGlzLmFjdG9ySW5zdGFuY2VNYXApIHtcclxuICAgICAgICAgICAgaW5zdGFuY2VzLnB1c2godGhpcy5hY3Rvckluc3RhbmNlTWFwW2luc3RhbmNlXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gaW5zdGFuY2VzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEluc3RhbmNlc0F0UG9zaXRpb24oeDogbnVtYmVyLCB5OiBudW1iZXIpOiBBY3Rvckluc3RhbmNlW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEluc3RhbmNlcygpLmZpbHRlcihpbnN0YW5jZSA9PiBpbnN0YW5jZS5vY2N1cGllc1Bvc2l0aW9uKHgsIHkpKTtcclxuICAgIH1cclxuXHJcbiAgICBpc1Bvc2l0aW9uRnJlZSh4OiBudW1iZXIsIHk6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAhdGhpcy5nZXRJbnN0YW5jZXNBdFBvc2l0aW9uKHgsIHkpLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRWaWV3KCk6IFZpZXcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZpZXc7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ2xpY2soZXZlbnQ6IFBvaW50ZXJJbnB1dEV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGNsaWNrWCA9IGV2ZW50Lng7XHJcbiAgICAgICAgbGV0IGNsaWNrWSA9IGV2ZW50Lnk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnZpZXcpIHtcclxuICAgICAgICAgICAgY2xpY2tYICs9IHRoaXMudmlldy54O1xyXG4gICAgICAgICAgICBjbGlja1kgKz0gdGhpcy52aWV3Lnk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5ncmlkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ3JpZC5yYWlzZUNsaWNrRXZlbnQoY2xpY2tYLCBjbGlja1kpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5nZXRJbnN0YW5jZXNBdFBvc2l0aW9uKGNsaWNrWCwgY2xpY2tZKS5mb3JFYWNoKGluc3RhbmNlID0+IHtcclxuICAgICAgICAgICAgbGV0IHBhcmVudCA9IGluc3RhbmNlLnBhcmVudDtcclxuXHJcbiAgICAgICAgICAgIGlmIChwYXJlbnQuaGFzQ2xpY2sgJiYgaW5zdGFuY2Uub2NjdXBpZXNQb3NpdGlvbihjbGlja1gsIGNsaWNrWSkpIHtcclxuICAgICAgICAgICAgICAgIHBhcmVudC5jYWxsQ2xpY2soaW5zdGFuY2UsIGV2ZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGVuZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmFjdG9ySW5zdGFuY2VNYXAgPSB7fTtcclxuICAgICAgICB0aGlzLmV2ZW50SGFuZGxlcnMuZm9yRWFjaChldmVudEhhbmRsZXIgPT4gZXZlbnRIYW5kbGVyLmRpc3Bvc2UoKSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9yb29tLnRzIiwiaW1wb3J0IHsgQm91bmRhcnkgfSBmcm9tICcuL2JvdW5kYXJ5JztcclxuaW1wb3J0IHsgQWN0b3JJbnN0YW5jZURyYXdFdmVudCwgR2FtZUNhbnZhc0NvbnRleHQgfSBmcm9tICcuL2NhbnZhcyc7XHJcbmltcG9ydCB7IEFjdG9yU3RhdGUsIERpcmVjdGlvbiB9IGZyb20gJy4vZW51bSc7XHJcbmltcG9ydCB7IERlZmVycmVkRXZlbnQgfSBmcm9tICcuL2V2ZW50cyc7XHJcbmltcG9ydCB7IEdhbWVDb250ZXh0IH0gZnJvbSAnLi9nYW1lLWNvbnRleHQnO1xyXG5pbXBvcnQgeyBQb2ludGVySW5wdXRFdmVudCB9IGZyb20gJy4vaW5wdXQnO1xyXG5pbXBvcnQgeyBTcHJpdGUsIFNwcml0ZUFuaW1hdGlvbiB9IGZyb20gJy4vc3ByaXRlJztcclxuaW1wb3J0IHsgTWF0aFV0aWwgfSBmcm9tICcuL3V0aWwnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBY3RvckxpZmVjeWNsZSB7XHJcbiAgICBvbkNyZWF0ZTogTGlmZWN5Y2xlQ2FsbGJhY2s7XHJcbiAgICBvblN0ZXA6IExpZmVjeWNsZUNhbGxiYWNrO1xyXG4gICAgb25EZXN0cm95OiBMaWZlY3ljbGVDYWxsYmFjaztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMaWZlY3ljbGVDYWxsYmFjayB7XHJcbiAgICAoc2VsZjogQWN0b3JJbnN0YW5jZSk6IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQWN0b3JFdmVudCB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBjYWxsYmFjazogQWN0b3JFdmVudENhbGxiYWNrO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFjdG9yRXZlbnRDYWxsYmFjayB7XHJcbiAgICAoc2VsZj86IEFjdG9ySW5zdGFuY2UsIGV2ZW50QXJncz86IGFueSk6IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQWN0b3JPcHRpb25zIHtcclxuICAgIGJvdW5kYXJ5PzogQm91bmRhcnk7XHJcbiAgICBzcHJpdGU/OiBTcHJpdGU7XHJcbn1cclxuXHJcbmludGVyZmFjZSBDbGlja0V2ZW50Q2FsbGJhY2sge1xyXG4gICAgKHNlbGY6IEFjdG9ySW5zdGFuY2UsIGV2ZW50OiBQb2ludGVySW5wdXRFdmVudCk6IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29sbGlzaW9uQ2FsbGJhY2sge1xyXG4gICAgKHNlbGY6IEFjdG9ySW5zdGFuY2UsIG90aGVyOiBBY3Rvckluc3RhbmNlKTogdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFjdG9yIHtcclxuXHJcbiAgICBzdGF0aWMgZGVmaW5lKG5hbWU6IHN0cmluZywgb3B0aW9ucz86IEFjdG9yT3B0aW9ucyk6IEFjdG9yIHtcclxuICAgICAgICBsZXQgYWN0b3IgPSBuZXcgQWN0b3IobmFtZSwgb3B0aW9ucyk7XHJcbiAgICAgICAgR2FtZUNvbnRleHQuZGVmaW5lQWN0b3IobmFtZSwgYWN0b3IpO1xyXG5cclxuICAgICAgICByZXR1cm4gYWN0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldChuYW1lOiBzdHJpbmcpOiBBY3RvciB7XHJcbiAgICAgICAgcmV0dXJuIEdhbWVDb250ZXh0LmdldEFjdG9yKG5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGxpZmVjeWNsZSBjYWxsYmFja3NcclxuICAgIHByaXZhdGUgb25DcmVhdGVDYWxsYmFjazogTGlmZWN5Y2xlQ2FsbGJhY2s7XHJcbiAgICBwcml2YXRlIG9uU3RlcENhbGxiYWNrOiBMaWZlY3ljbGVDYWxsYmFjaztcclxuICAgIHByaXZhdGUgb25EZXN0cm95Q2FsbGJhY2s6IExpZmVjeWNsZUNhbGxiYWNrO1xyXG4gICAgcHJpdmF0ZSBvbkRyYXdDYWxsYmFjazogQWN0b3JJbnN0YW5jZURyYXdFdmVudDtcclxuXHJcbiAgICAvLyBpbnB1dCBjYWxsYmFja3NcclxuICAgIHByaXZhdGUgb25DbGlja0NhbGxiYWNrOiBDbGlja0V2ZW50Q2FsbGJhY2s7XHJcblxyXG4gICAgLy8gZ2FtZSBldmVudCBoYW5kbGVyc1xyXG4gICAgcmVhZG9ubHkgY29sbGlzaW9uSGFuZGxlcnM6IHsgW2luZGV4OiBzdHJpbmddOiBDb2xsaXNpb25DYWxsYmFjayB9ID0ge307XHJcbiAgICByZWFkb25seSBhY3RvckV2ZW50SGFuZGxlcnM6IHsgW2luZGV4OiBzdHJpbmddIDogQWN0b3JFdmVudENhbGxiYWNrIH0gPSB7fTtcclxuXHJcbiAgICByZWFkb25seSBib3VuZGFyeTogQm91bmRhcnk7XHJcbiAgICByZWFkb25seSBuYW1lOiBzdHJpbmc7XHJcbiAgICByZWFkb25seSBzcHJpdGU6IFNwcml0ZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIG9wdGlvbnM6IEFjdG9yT3B0aW9ucyA9IHt9KSB7XHJcbiAgICAgICAgdGhpcy5ib3VuZGFyeSA9IG9wdGlvbnMuYm91bmRhcnk7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLnNwcml0ZSA9IG9wdGlvbnMuc3ByaXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBoYXNDcmVhdGUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuICEhdGhpcy5vbkNyZWF0ZUNhbGxiYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ3JlYXRlKGNhbGxiYWNrOiBMaWZlY3ljbGVDYWxsYmFjayk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMub25DcmVhdGVDYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbGxDcmVhdGUoc2VsZkluc3RhbmNlOiBBY3Rvckluc3RhbmNlKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vbkNyZWF0ZUNhbGxiYWNrKHNlbGZJbnN0YW5jZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGhhc1N0ZXAoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuICEhdGhpcy5vblN0ZXBDYWxsYmFjaztcclxuICAgIH1cclxuXHJcbiAgICBvblN0ZXAoY2FsbGJhY2s6IExpZmVjeWNsZUNhbGxiYWNrKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vblN0ZXBDYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbGxTdGVwKHNlbGZJbnN0YW5jZTogQWN0b3JJbnN0YW5jZSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMub25TdGVwQ2FsbGJhY2soc2VsZkluc3RhbmNlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaGFzRGVzdHJveSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gISF0aGlzLm9uRGVzdHJveUNhbGxiYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveShjYWxsYmFjazogTGlmZWN5Y2xlQ2FsbGJhY2spOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9uRGVzdHJveUNhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgY2FsbERlc3Ryb3koc2VsZkluc3RhbmNlOiBBY3Rvckluc3RhbmNlKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vbkRlc3Ryb3lDYWxsYmFjayhzZWxmSW5zdGFuY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBoYXNDbGljaygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gISF0aGlzLm9uQ2xpY2tDYWxsYmFjaztcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrKGNhbGxiYWNrOiBDbGlja0V2ZW50Q2FsbGJhY2spOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9uQ2xpY2tDYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbGxDbGljayhzZWxmSW5zdGFuY2U6IEFjdG9ySW5zdGFuY2UsIGV2ZW50OiBQb2ludGVySW5wdXRFdmVudCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMub25DbGlja0NhbGxiYWNrKHNlbGZJbnN0YW5jZSwgZXZlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBoYXNEcmF3KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAhIXRoaXMub25EcmF3Q2FsbGJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgb25EcmF3KGNhbGxiYWNrOiBBY3Rvckluc3RhbmNlRHJhd0V2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vbkRyYXdDYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbGxEcmF3KHNlbGZJbnN0YW5jZTogQWN0b3JJbnN0YW5jZSwgZ2FtZUNhbnZhc0NvbnRleHQ6IEdhbWVDYW52YXNDb250ZXh0KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vbkRyYXdDYWxsYmFjayhzZWxmSW5zdGFuY2UsIGdhbWVDYW52YXNDb250ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNvbGxpZGUoYWN0b3JOYW1lOiBzdHJpbmcsIGNhbGxiYWNrOiBDb2xsaXNpb25DYWxsYmFjayk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY29sbGlzaW9uSGFuZGxlcnNbYWN0b3JOYW1lXSA9IGNhbGxiYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRXZlbnQoZXZlbnROYW1lOiBzdHJpbmcsIGNhbGxiYWNrOiBBY3RvckV2ZW50Q2FsbGJhY2spOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmFjdG9yRXZlbnRIYW5kbGVyc1tldmVudE5hbWVdID0gY2FsbGJhY2s7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBY3Rvckluc3RhbmNlIHtcclxuICAgIHByaXZhdGUgc3RhdGU6IEFjdG9yU3RhdGU7XHJcblxyXG4gICAgcHJldmlvdXNYOiBudW1iZXI7XHJcbiAgICBwcmV2aW91c1k6IG51bWJlcjtcclxuICAgIHNwZWVkOiBudW1iZXIgPSAwO1xyXG4gICAgZGlyZWN0aW9uOiBudW1iZXIgPSBEaXJlY3Rpb24uUmlnaHQ7XHJcbiAgICB2aXNpYmxlOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICByZWFkb25seSBzcHJpdGVBbmltYXRpb246IFNwcml0ZUFuaW1hdGlvbjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcGFyZW50OiBBY3RvciwgcHVibGljIGlkOiBudW1iZXIsIHB1YmxpYyB4OiBudW1iZXIgPSAwLCBwdWJsaWMgeTogbnVtYmVyID0gMCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBBY3RvclN0YXRlLkFjdGl2ZTtcclxuICAgICAgICB0aGlzLnByZXZpb3VzWCA9IHRoaXMueDtcclxuICAgICAgICB0aGlzLnByZXZpb3VzWSA9IHRoaXMueTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucGFyZW50LnNwcml0ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNwcml0ZUFuaW1hdGlvbiA9IG5ldyBTcHJpdGVBbmltYXRpb24odGhpcy5wYXJlbnQuc3ByaXRlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGhhc01vdmVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAodGhpcy54ICE9PSB0aGlzLnByZXZpb3VzWCB8fCB0aGlzLnkgIT09IHRoaXMucHJldmlvdXNZKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaXNBY3RpdmUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLnN0YXRlID09PSBBY3RvclN0YXRlLkFjdGl2ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGJvdW5kYXJ5KCk6IEJvdW5kYXJ5IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnQuYm91bmRhcnk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGFuaW1hdGlvbigpOiBTcHJpdGVBbmltYXRpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNwcml0ZUFuaW1hdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICByYWlzZUV2ZW50KGV2ZW50TmFtZTogc3RyaW5nLCBldmVudEFyZ3M/OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICAvLyByZWdpc3RlciBhbiBldmVudCB0byBmaXJlIGltbWVkaWF0ZWx5XHJcbiAgICAgICAgdGhpcy5yYWlzZUV2ZW50V2hlbihldmVudE5hbWUsICgpID0+IHRydWUsIGV2ZW50QXJncyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmFpc2VFdmVudFdoZW4oZXZlbnROYW1lOiBzdHJpbmcsIGNvbmRpdGlvbkNhbGxiYWNrOiAoKSA9PiBib29sZWFuLCBldmVudEFyZ3M6IGFueSA9IHt9KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZXRHYW1lQ29udGV4dEV2ZW50QXJncyhldmVudEFyZ3MpO1xyXG5cclxuICAgICAgICBsZXQgY2FsbGJhY2s6IEFjdG9yRXZlbnRDYWxsYmFjayA9IHRoaXMucGFyZW50LmFjdG9yRXZlbnRIYW5kbGVyc1tldmVudE5hbWVdO1xyXG5cclxuICAgICAgICBpZiAoIWNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQXR0ZW1wdGluZyB0byByYWlzZSB1bmRlZmluZWQgRXZlbnQ6ICR7ZXZlbnROYW1lfWApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgRGVmZXJyZWRFdmVudC5yZWdpc3RlcihuZXcgRGVmZXJyZWRFdmVudChjb25kaXRpb25DYWxsYmFjaywgY2FsbGJhY2suYmluZChudWxsLCB0aGlzLCBldmVudEFyZ3MpKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRHYW1lQ29udGV4dEV2ZW50QXJncyhldmVudEFyZ3M6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGV2ZW50QXJncy5nYW1lID0ge1xyXG4gICAgICAgICAgICBjdXJyZW50Um9vbTogR2FtZUNvbnRleHQuZ2V0Q3VycmVudFJvb20oKSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IEFjdG9yU3RhdGUuRGVzdHJveWVkO1xyXG4gICAgfVxyXG5cclxuICAgIGRvUG9zdFN0ZXAoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5wcmV2aW91c1ggPSB0aGlzLng7XHJcbiAgICAgICAgdGhpcy5wcmV2aW91c1kgPSB0aGlzLnk7XHJcbiAgICB9XHJcblxyXG4gICAgY29sbGlkZXNXaXRoKG90aGVyOiBBY3Rvckluc3RhbmNlKTogYm9vbGVhbiB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmhhc01vdmVkICYmIHRoaXMuYm91bmRhcnkgJiYgb3RoZXIuYm91bmRhcnkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYm91bmRhcnkuYXRQb3NpdGlvbih0aGlzLngsIHRoaXMueSkuY29sbGlkZXNXaXRoKG90aGVyLmJvdW5kYXJ5LmF0UG9zaXRpb24ob3RoZXIueCwgb3RoZXIueSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE1vdmVtZW50T2Zmc2V0WCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBNYXRoVXRpbC5nZXRMZW5ndGhEaXJlY3Rpb25YKHRoaXMuc3BlZWQgKiAxMDAsIHRoaXMuZGlyZWN0aW9uKSAvIDEwMDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRNb3ZlbWVudE9mZnNldFkoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gTWF0aFV0aWwuZ2V0TGVuZ3RoRGlyZWN0aW9uWSh0aGlzLnNwZWVkICogMTAwLCB0aGlzLmRpcmVjdGlvbikgLyAxMDA7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UG9zaXRpb25SZWxhdGl2ZSh4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2V0UG9zaXRpb24odGhpcy54ICsgeCwgdGhpcy55ICsgeSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UG9zaXRpb24oeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnByZXZpb3VzWCA9IHRoaXMueDtcclxuICAgICAgICB0aGlzLnByZXZpb3VzWSA9IHRoaXMueTtcclxuXHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmUoc3BlZWQ6IG51bWJlciwgZGlyZWN0aW9uPzogRGlyZWN0aW9uKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IHNwZWVkO1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIG9jY3VwaWVzUG9zaXRpb24oeDogbnVtYmVyLCB5OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ib3VuZGFyeSA/IHRoaXMuYm91bmRhcnkuYXRQb3NpdGlvbih0aGlzLngsIHRoaXMueSkuY29udGFpbnNQb3NpdGlvbih4LCB5KSA6IGZhbHNlO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvYWN0b3IudHMiLCJpbXBvcnQgeyBBY3RvciwgQWN0b3JJbnN0YW5jZSB9IGZyb20gJy4vYWN0b3InO1xyXG5pbXBvcnQgeyBEaXJlY3Rpb24gfSBmcm9tICcuL2VudW0nO1xyXG5pbXBvcnQgeyBSb29tIH0gZnJvbSAnLi9yb29tJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgR3JpZENsaWNrQ2FsbGJhY2sge1xyXG4gICAgKGdyaWRDbGlja0V2ZW50OiBHcmlkQ2xpY2tFdmVudCk6IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHcmlkQ2xpY2tFdmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBncmlkOiBHcmlkLFxyXG4gICAgICAgIHByaXZhdGUgeDogbnVtYmVyLCBcclxuICAgICAgICBwcml2YXRlIHk6IG51bWJlcikge1xyXG4gICAgfVxyXG5cclxuICAgIGdldENlbGwoKTogR3JpZENlbGwge1xyXG4gICAgICAgIGxldCBjZWxsWCA9IHRoaXMueCAtIHRoaXMueCAlIHRoaXMuZ3JpZC50aWxlU2l6ZTtcclxuICAgICAgICBsZXQgY2VsbFkgPSB0aGlzLnkgLSB0aGlzLnkgJSB0aGlzLmdyaWQudGlsZVNpemU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIG5ldyBHcmlkQ2VsbCh0aGlzLmdyaWQsIGNlbGxYLCBjZWxsWSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHcmlkQ2VsbCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBncmlkOiBHcmlkLCBwdWJsaWMgeDogbnVtYmVyLCBwdWJsaWMgeTogbnVtYmVyKSB7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWRqYWNlbnRDZWxsKGRpcmVjdGlvbjogRGlyZWN0aW9uKTogR3JpZENlbGwge1xyXG4gICAgICAgIGxldCBvZmZzZXRYID0gMDtcclxuICAgICAgICBsZXQgb2Zmc2V0WSA9IDA7XHJcblxyXG4gICAgICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGNhc2UgRGlyZWN0aW9uLkRvd246XHJcbiAgICAgICAgICAgICAgICBvZmZzZXRZID0gdGhpcy5ncmlkLnRpbGVTaXplO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRGlyZWN0aW9uLkxlZnQ6XHJcbiAgICAgICAgICAgICAgICBvZmZzZXRYID0gLXRoaXMuZ3JpZC50aWxlU2l6ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIERpcmVjdGlvbi5SaWdodDpcclxuICAgICAgICAgICAgICAgIG9mZnNldFggPSB0aGlzLmdyaWQudGlsZVNpemU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBEaXJlY3Rpb24uVXA6XHJcbiAgICAgICAgICAgICAgICBvZmZzZXRZID0gLXRoaXMuZ3JpZC50aWxlU2l6ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBHcmlkQ2VsbCh0aGlzLmdyaWQsIHRoaXMueCArIG9mZnNldFgsIHRoaXMueSArIG9mZnNldFkpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENvbnRlbnRzKCk6IEFjdG9ySW5zdGFuY2VbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZC5yb29tLmdldEluc3RhbmNlc0F0UG9zaXRpb24odGhpcy54ICsgdGhpcy5ncmlkLnRpbGVTaXplIC8gMiwgdGhpcy55ICsgdGhpcy5ncmlkLnRpbGVTaXplIC8gMik7XHJcbiAgICB9XHJcblxyXG4gICAgY29udGFpbnNJbnN0YW5jZShpbnN0YW5jZTogQWN0b3JJbnN0YW5jZSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldENvbnRlbnRzKCkuc29tZShjb250ZW50cyA9PiBjb250ZW50cyA9PT0gaW5zdGFuY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnRhaW5zSW5zdGFuY2VPZihhY3RvcjogQWN0b3IpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRDb250ZW50cygpLnNvbWUoY29udGVudHMgPT4gY29udGVudHMucGFyZW50ID09PSBhY3Rvcik7XHJcbiAgICB9XHJcblxyXG4gICAgaXNGcmVlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAhdGhpcy5nZXRDb250ZW50cygpLmxlbmd0aDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdyaWQge1xyXG4gICAgcHJpdmF0ZSBfb25DbGljazogR3JpZENsaWNrQ2FsbGJhY2s7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcmVhZG9ubHkgdGlsZVNpemU6IG51bWJlcixcclxuICAgICAgICByZWFkb25seSByb29tOiBSb29tKSB7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljayhjYWxsYmFjazogR3JpZENsaWNrQ2FsbGJhY2spOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9vbkNsaWNrID0gY2FsbGJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgcmFpc2VDbGlja0V2ZW50KHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGluc3RhbmNlcyA9IHRoaXMucm9vbS5nZXRJbnN0YW5jZXNBdFBvc2l0aW9uKHgsIHkpO1xyXG4gICAgICAgIGxldCBldmVudCA9IG5ldyBHcmlkQ2xpY2tFdmVudCh0aGlzLCB4LCB5KTtcclxuXHJcbiAgICAgICAgdGhpcy5fb25DbGljayhldmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2VsbEF0UG9zaXRpb24oeDogbnVtYmVyLCB5OiBudW1iZXIpOiBHcmlkQ2VsbCB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBHcmlkQ2VsbCh0aGlzLCB4LCB5KTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvZ3JpZC50cyIsImltcG9ydCB7IEFjdG9ySW5zdGFuY2UgfSBmcm9tICcuL2FjdG9yJztcclxuaW1wb3J0IHsgQm91bmRhcnkgfSBmcm9tICcuL2JvdW5kYXJ5JztcclxuaW1wb3J0IHsgR2FtZUNhbnZhc0hUTUwyRCB9IGZyb20gJy4vY2FudmFzJztcclxuXHJcbmVudW0gVmlld01vZGUge1xyXG4gICAgU2FtZVBvc2l0aW9uID0gMSxcclxuICAgIENlbnRlciA9IDIsXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBWaWV3IHtcclxuXHJcbiAgICBwcml2YXRlIHZpZXdNb2RlOiBWaWV3TW9kZTtcclxuICAgIHByaXZhdGUgZm9sbG93SW5zdGFuY2U6IEFjdG9ySW5zdGFuY2U7XHJcbiAgICBwcml2YXRlIGF0dGFjaG1lbnRzOiBBY3Rvckluc3RhbmNlQXR0YWNoZW1lbnRbXSA9IFtdO1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgeDogbnVtYmVyLCBcclxuICAgICAgICBwdWJsaWMgeTogbnVtYmVyLCBcclxuICAgICAgICBwdWJsaWMgcmVhZG9ubHkgd2lkdGg6IG51bWJlciwgXHJcbiAgICAgICAgcHVibGljIHJlYWRvbmx5IGhlaWdodDogbnVtYmVyKSB7XHJcbiAgICB9XHJcblxyXG4gICAgZm9sbG93KGFjdG9ySW5zdGFuY2U6IEFjdG9ySW5zdGFuY2UsIGNlbnRlcjogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgdGhpcy52aWV3TW9kZSA9IGNlbnRlciA/IFZpZXdNb2RlLkNlbnRlciA6IFZpZXdNb2RlLlNhbWVQb3NpdGlvbjtcclxuICAgICAgICB0aGlzLmZvbGxvd0luc3RhbmNlID0gYWN0b3JJbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBhdHRhY2goYWN0b3JJbnN0YW5jZTogQWN0b3JJbnN0YW5jZSwgb2Zmc2V0WDogbnVtYmVyLCBvZmZzZXRZOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmF0dGFjaG1lbnRzLnB1c2gobmV3IEFjdG9ySW5zdGFuY2VBdHRhY2hlbWVudCh0aGlzLCBhY3Rvckluc3RhbmNlLCBvZmZzZXRYLCBvZmZzZXRZKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuZm9sbG93SW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMudmlld01vZGUgPT09IFZpZXdNb2RlLkNlbnRlcikge1xyXG4gICAgICAgICAgICB0aGlzLmNlbnRlckFyb3VuZEJvdW5kYXJ5KHRoaXMuZm9sbG93SW5zdGFuY2UuYm91bmRhcnkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy54ID0gdGhpcy5mb2xsb3dJbnN0YW5jZS54IHx8IDA7XHJcbiAgICAgICAgICAgIHRoaXMueSA9IHRoaXMuZm9sbG93SW5zdGFuY2UueSB8fCAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5hdHRhY2htZW50cy5mb3JFYWNoKGF0dCA9PiBhdHQudXBkYXRlKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2VudGVyQXJvdW5kQm91bmRhcnkoYm91bmRhcnk6IEJvdW5kYXJ5KSB7XHJcblxyXG4gICAgICAgIGlmICghYm91bmRhcnkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBib3VuZGFyeSBpcyAke2JvdW5kYXJ5fWApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy54ID0gdGhpcy5mb2xsb3dJbnN0YW5jZS54ICsgKGJvdW5kYXJ5LndpZHRoIC8gMikgLSAodGhpcy53aWR0aCAvIDIpO1xyXG4gICAgICAgIHRoaXMueSA9IHRoaXMuZm9sbG93SW5zdGFuY2UueSArIChib3VuZGFyeS5oZWlnaHQgLyAyKSAtICh0aGlzLmhlaWdodCAvIDIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBBY3Rvckluc3RhbmNlQXR0YWNoZW1lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIHBhcmVudDogVmlldyxcclxuICAgICAgICBwcml2YXRlIGluc3RhbmNlOiBBY3Rvckluc3RhbmNlLFxyXG4gICAgICAgIHByaXZhdGUgb2Zmc2V0WDogbnVtYmVyLFxyXG4gICAgICAgIHByaXZhdGUgb2Zmc2V0WTogbnVtYmVyKSB7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICB0aGlzLmluc3RhbmNlLnggPSB0aGlzLnBhcmVudC54ICsgdGhpcy5vZmZzZXRYO1xyXG4gICAgICAgIHRoaXMuaW5zdGFuY2UueSA9IHRoaXMucGFyZW50LnkgKyB0aGlzLm9mZnNldFk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL3ZpZXcudHMiLCJpbXBvcnQgeyBBY3Rvckluc3RhbmNlIH0gZnJvbSAnLi9hY3Rvcic7XHJcbmltcG9ydCB7IEJhY2tncm91bmQsIFJvb20gfSBmcm9tICcuL3Jvb20nO1xyXG5pbXBvcnQgeyBTcHJpdGUsIFNwcml0ZUFuaW1hdGlvbiwgU3ByaXRlVHJhbnNmb3JtYXRpb24gfSBmcm9tICcuL3Nwcml0ZSc7XHJcbmltcG9ydCB7IFZpZXcgfSBmcm9tICcuL3ZpZXcnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDYW52YXNPcHRpb25zIHtcclxuICAgIGhlaWdodD86IG51bWJlcjtcclxuICAgIHdpZHRoPzogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFjdG9ySW5zdGFuY2VEcmF3RXZlbnQge1xyXG4gICAgKHNlbGY6IEFjdG9ySW5zdGFuY2UsIGNvbnRleHQ6IEdhbWVDYW52YXNDb250ZXh0KTogdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSb29tRHJhd0V2ZW50IHtcclxuICAgIChjb250ZXh0OiBHYW1lQ2FudmFzQ29udGV4dCk6IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgR2FtZUNhbnZhcyB7XHJcbiAgICBkcmF3Um9vbShyb29tOiBSb29tKTtcclxuICAgIGRyYXdTcHJpdGUoc3ByaXRlOiBTcHJpdGUsIHg6IG51bWJlciwgeTogbnVtYmVyLCBmcmFtZTogbnVtYmVyKTogdm9pZDtcclxufVxyXG5cclxuY29uc3QgRGVmYXVsdEhlaWdodCA9IDQ4MDtcclxuY29uc3QgRGVmYXVsdFdpZHRoID0gNjQwO1xyXG5jb25zdCBEZWZhdWx0T3BhY2l0eSA9IDE7XHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZUNhbnZhc0hUTUwyRCBpbXBsZW1lbnRzIEdhbWVDYW52YXMge1xyXG4gICAgcHJpdmF0ZSBnYW1lQ2FudmFzQ29udGV4dDogR2FtZUNhbnZhc0NvbnRleHQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIHJlYWRvbmx5IGNhbnZhc0VsZW1lbnQ6IEhUTUxDYW52YXNFbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy5nYW1lQ2FudmFzQ29udGV4dCA9IG5ldyBHYW1lQ2FudmFzQ29udGV4dCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldCBjb250ZXh0KCk6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FudmFzRWxlbWVudC5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBoZWlnaHQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jYW52YXNFbGVtZW50LmhlaWdodDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgd2lkdGgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jYW52YXNFbGVtZW50LndpZHRoO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQob3B0aW9uczogQ2FudmFzT3B0aW9ucyA9IHt9KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jYW52YXNFbGVtZW50LmhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0IHx8IERlZmF1bHRIZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5jYW52YXNFbGVtZW50LndpZHRoID0gb3B0aW9ucy53aWR0aCB8fCBEZWZhdWx0V2lkdGg7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVE9ETzogc2VwYXJhdGUgY2FudmFzIGludGVyYWN0aW9ucyBmcm9tIHJvb20vaW5zdGFuY2UgbG9naWNcclxuICAgIGRyYXdSb29tKHJvb206IFJvb20pIHtcclxuICAgICAgICAvLyBjbGVhciB0aGUgY2FudmFzXHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhc0VsZW1lbnQud2lkdGgsIHRoaXMuY2FudmFzRWxlbWVudC5oZWlnaHQpO1xyXG5cclxuICAgICAgICAvLyBnZXQgdmlldyBvZmZzZXRcclxuICAgICAgICBsZXQgW29mZnNldFgsIG9mZnNldFldID0gdGhpcy5nZXRWaWV3T2Zmc2V0KHJvb20uZ2V0VmlldygpKTtcclxuXHJcbiAgICAgICAgLy8gZHJhdyByb29tIGJhY2tncm91bmRcclxuICAgICAgICBpZiAocm9vbS5iYWNrZ3JvdW5kKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LnJlY3QoLW9mZnNldFgsIC1vZmZzZXRZLCByb29tLmJhY2tncm91bmQud2lkdGgsIHJvb20uYmFja2dyb3VuZC5oZWlnaHQpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gcm9vbS5iYWNrZ3JvdW5kLmNvbG9yO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuZmlsbCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gY2FsbCByb29tIGRyYXcgZXZlbnQgY2FsbGJhY2tcclxuICAgICAgICBpZiAocm9vbS5oYXNEcmF3KSB7XHJcbiAgICAgICAgICAgIHJvb20uY2FsbERyYXcodGhpcy5nYW1lQ2FudmFzQ29udGV4dCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgb3JkZXJlZEluc3RhbmNlcyA9IHJvb20uZ2V0SW5zdGFuY2VzKCkuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKGIuc3ByaXRlQW5pbWF0aW9uID8gYi5zcHJpdGVBbmltYXRpb24uZGVwdGggOiAwKSAtIChhLnNwcml0ZUFuaW1hdGlvbiA/IGEuYW5pbWF0aW9uLmRlcHRoIDogMCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIG9yZGVyZWRJbnN0YW5jZXMuZm9yRWFjaChpbnN0YW5jZSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNhbGwgYWN0b3IgZHJhdyBldmVudCBjYWxsYmFja3NcclxuICAgICAgICAgICAgaWYgKGluc3RhbmNlLnBhcmVudC5oYXNEcmF3KSB7XHJcbiAgICAgICAgICAgICAgICBpbnN0YW5jZS5wYXJlbnQuY2FsbERyYXcoaW5zdGFuY2UsIHRoaXMuZ2FtZUNhbnZhc0NvbnRleHQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBkcmF3IHNwcml0ZXNcclxuICAgICAgICAgICAgaWYgKGluc3RhbmNlLmFuaW1hdGlvbiAmJiBpbnN0YW5jZS52aXNpYmxlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdTcHJpdGUoaW5zdGFuY2UuYW5pbWF0aW9uLnNvdXJjZSwgaW5zdGFuY2UueCAtIG9mZnNldFgsIGluc3RhbmNlLnkgLSBvZmZzZXRZLCBpbnN0YW5jZS5zcHJpdGVBbmltYXRpb24uZnJhbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRWaWV3T2Zmc2V0KHZpZXc6IFZpZXcpOiBbbnVtYmVyLCBudW1iZXJdIHtcclxuICAgICAgICBsZXQgb2Zmc2V0WCA9IHZpZXcgPyB2aWV3LnggOiAwO1xyXG4gICAgICAgIGxldCBvZmZzZXRZID0gdmlldyA/IHZpZXcueSA6IDA7XHJcblxyXG4gICAgICAgIHJldHVybiBbb2Zmc2V0WCwgb2Zmc2V0WV07XHJcbiAgICB9XHJcblxyXG4gICAgZHJhd1Nwcml0ZShzcHJpdGU6IFNwcml0ZSwgeDogbnVtYmVyLCB5OiBudW1iZXIsIGZyYW1lOiBudW1iZXIgPSAwKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGltYWdlID0gc3ByaXRlLmltYWdlO1xyXG4gICAgICAgIGxldCBmcmFtZUJvcmRlciA9IHNwcml0ZS5mcmFtZUJvcmRlciB8fCAwO1xyXG4gICAgICAgIGxldCB3aWR0aCA9IHNwcml0ZS53aWR0aDtcclxuICAgICAgICBsZXQgaGVpZ2h0ID0gc3ByaXRlLmhlaWdodDtcclxuXHJcbiAgICAgICAgbGV0IGZyYW1lT2Zmc2V0ID0gZnJhbWUgKiBmcmFtZUJvcmRlcjtcclxuXHJcbiAgICAgICAgbGV0IG9wYWNpdHkgPSBzcHJpdGUuZ2V0VHJhbnNmb3JtKFNwcml0ZVRyYW5zZm9ybWF0aW9uLk9wYWNpdHkpO1xyXG4gICAgICAgIGxldCBwcmV2aW91c09wYWNpdHk6IG51bWJlciA9IG51bGw7XHJcblxyXG4gICAgICAgIGlmIChvcGFjaXR5ICE9PSBEZWZhdWx0T3BhY2l0eSAmJiBvcGFjaXR5ICE9PSBudWxsICYmIG9wYWNpdHkgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBwcmV2aW91c09wYWNpdHkgPSB0aGlzLmNvbnRleHQuZ2xvYmFsQWxwaGE7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5nbG9iYWxBbHBoYSA9IG9wYWNpdHk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKGltYWdlLCBmcmFtZSAqIHdpZHRoICsgZnJhbWVPZmZzZXQsIDAsIHdpZHRoLCBoZWlnaHQsIE1hdGguZmxvb3IoeCksIE1hdGguZmxvb3IoeSksIHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuICAgICAgICAvLyByZXNldCBvcGFjaXR5XHJcbiAgICAgICAgaWYgKHByZXZpb3VzT3BhY2l0eSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuZ2xvYmFsQWxwaGEgPSBwcmV2aW91c09wYWNpdHk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRyYXdTcHJpdGVWaWV3UmVsYXRpdmUoc3ByaXRlOiBTcHJpdGUsIHg6IG51bWJlciwgeTogbnVtYmVyLCBmcmFtZTogbnVtYmVyLCB2aWV3OiBWaWV3KTogdm9pZCB7XHJcbiAgICAgICAgbGV0IFtvZmZzZXRYLCBvZmZzZXRZXSA9IHRoaXMuZ2V0Vmlld09mZnNldCh2aWV3KTtcclxuICAgICAgICB0aGlzLmRyYXdTcHJpdGUoc3ByaXRlLCB4IC0gb2Zmc2V0WCwgeSAtIG9mZnNldFksIGZyYW1lKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWVDYW52YXNDb250ZXh0IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGdhbWVDYW52YXM6IEdhbWVDYW52YXNIVE1MMkQpIHtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3U3ByaXRlKHNwcml0ZTogU3ByaXRlLCB4OiBudW1iZXIsIHk6IG51bWJlciwgZnJhbWU6IG51bWJlciA9IDAsIHZpZXc/OiBWaWV3KSB7XHJcbiAgICAgICAgdGhpcy5nYW1lQ2FudmFzLmRyYXdTcHJpdGVWaWV3UmVsYXRpdmUoc3ByaXRlLCB4LCB5LCBmcmFtZSwgdmlldyk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL2NhbnZhcy50cyIsImltcG9ydCB7IENhbnZhc09wdGlvbnMsIEdhbWVDYW52YXMgfSBmcm9tICcuL2NhbnZhcyc7XHJcbmltcG9ydCB7IEdhbWVTdGF0ZSB9IGZyb20gJy4vZW51bSc7XHJcbmltcG9ydCB7IEdhbWVDb250ZXh0IH0gZnJvbSAnLi9nYW1lLWNvbnRleHQnO1xyXG5pbXBvcnQgeyBHYW1lT3B0aW9ucyB9IGZyb20gJy4vdmFzdGdhbWUnO1xyXG5cclxuY29uc3QgRGVmYXVsdEZQUyA9IDYwO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWVSdW5uZXIge1xyXG4gICAgcHJpdmF0ZSBzdGF0ZTogR2FtZVN0YXRlID0gR2FtZVN0YXRlLlBhdXNlZDtcclxuICAgIHJlYWRvbmx5IHRhcmdldEZQUzogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY2FudmFzOiBHYW1lQ2FudmFzLCBwcml2YXRlIG9wdGlvbnM6IEdhbWVPcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy50YXJnZXRGUFMgPSBvcHRpb25zLnRhcmdldEZQUyB8fCBEZWZhdWx0RlBTO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBpc1J1bm5pbmcoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUgPT09IEdhbWVTdGF0ZS5SdW5uaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIHBhdXNlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBHYW1lU3RhdGUuUGF1c2VkO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCk6IHZvaWQge1xyXG4gICAgICAgIGxldCBzdGVwU2l6ZTogbnVtYmVyID0gMSAvIHRoaXMudGFyZ2V0RlBTO1xyXG4gICAgICAgIGxldCBvZmZzZXQ6IG51bWJlciA9IDA7XHJcbiAgICAgICAgbGV0IHByZXZpb3VzOiBudW1iZXIgPSB3aW5kb3cucGVyZm9ybWFuY2Uubm93KCk7XHJcblxyXG4gICAgICAgIGxldCBnYW1lTG9vcDogRnJhbWVSZXF1ZXN0Q2FsbGJhY2sgPSAoKTogdm9pZCA9PiB7XHJcbiAgICAgICAgICAgIGxldCByb29tID0gR2FtZUNvbnRleHQuZ2V0Q3VycmVudFJvb20oKTtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnQ6IG51bWJlciA9IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIG9mZnNldCArPSAoTWF0aC5taW4oMSwgKGN1cnJlbnQgLSBwcmV2aW91cykgLyAxMDAwKSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB3aGlsZSAob2Zmc2V0ID4gc3RlcFNpemUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1J1bm5pbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICBHYW1lQ29udGV4dC5jaGVja0FuZEZpcmVFdmVudHMoKTtcclxuICAgICAgICAgICAgICAgICAgICByb29tLnN0ZXAoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBvZmZzZXQgLT0gc3RlcFNpemU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzUnVubmluZykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW52YXMuZHJhd1Jvb20ocm9vbSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHByZXZpb3VzID0gY3VycmVudDtcclxuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBzdGFydCB0aGUgZ2FtZSBsb29wXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IEdhbWVTdGF0ZS5SdW5uaW5nO1xyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9nYW1lLXJ1bm5lci50cyIsImltcG9ydCB7IEdhbWVDb250ZXh0IH0gZnJvbSAnLi9nYW1lLWNvbnRleHQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIERlZmVycmVkRXZlbnQge1xyXG5cclxuICAgIHN0YXRpYyByZWdpc3RlcihldmVudDogRGVmZXJyZWRFdmVudCk6IHZvaWQge1xyXG4gICAgICAgIEdhbWVDb250ZXh0LnJlZ2lzdGVyRXZlbnQoZXZlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyByZWFkb25seSBjb25kaXRpb25DYWxsYmFjazogKCkgPT4gYm9vbGVhbixcclxuICAgICAgICBwdWJsaWMgcmVhZG9ubHkgYWN0aW9uQ2FsbGJhY2s6ICgpID0+IGFueSxcclxuICAgICAgICBwdWJsaWMgcmVhZG9ubHkgZmlyZU9uY2U6IGJvb2xlYW4gPSB0cnVlKSB7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL2V2ZW50cy50cyIsImV4cG9ydCBjbGFzcyBNYXRoVXRpbCB7XHJcblxyXG4gICAgc3RhdGljIGdldExlbmd0aERpcmVjdGlvblgobGVuZ3RoOiBudW1iZXIsIGRpcmVjdGlvbjogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gbGVuZ3RoICogTWF0aC5jb3MoZGlyZWN0aW9uICogKE1hdGguUEkgLyAxODApKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0TGVuZ3RoRGlyZWN0aW9uWShsZW5ndGg6IG51bWJlciwgZGlyZWN0aW9uOiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gbGVuZ3RoICogTWF0aC5zaW4oZGlyZWN0aW9uICogKE1hdGguUEkgLyAxODApKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL3V0aWwudHMiLCJpbXBvcnQgeyBTcHJpdGUgfSBmcm9tICcuL3Nwcml0ZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgUG9zaXRpb25lZEJvdW5kYXJ5IHtcclxuICAgIHByaXZhdGUgaGVpZ2h0OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHdpZHRoOiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIHg6IG51bWJlciwgcHVibGljIHk6IG51bWJlciwgYm91bmRhcnk6IEJvdW5kYXJ5KSB7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBib3VuZGFyeS5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IGJvdW5kYXJ5LndpZHRoO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbGxpZGVzV2l0aChvdGhlcjogUG9zaXRpb25lZEJvdW5kYXJ5KTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMueCA+IG90aGVyLnggKyBvdGhlci53aWR0aCB8fCBvdGhlci54ID49IHRoaXMueCArIHRoaXMud2lkdGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMueSA+IG90aGVyLnkgKyBvdGhlci5oZWlnaHQgfHwgb3RoZXIueSA+PSB0aGlzLnkgKyB0aGlzLmhlaWdodCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBjb250YWluc1Bvc2l0aW9uKHg6IG51bWJlciwgeTogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMueCA+IHggfHwgeCA+IHRoaXMueCArIHRoaXMud2lkdGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMueSA+IHkgfHwgeSA+IHRoaXMueSArIHRoaXMuaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQm91bmRhcnkge1xyXG5cclxuICAgIHN0YXRpYyBmcm9tU3ByaXRlKHNwcml0ZTogU3ByaXRlLCBzb2xpZDogYm9vbGVhbiA9IGZhbHNlKTogQm91bmRhcnkge1xyXG4gICAgICAgIHJldHVybiBuZXcgQm91bmRhcnkoc3ByaXRlLmhlaWdodCwgc3ByaXRlLndpZHRoLCBzb2xpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIGhlaWdodDogbnVtYmVyLCBwdWJsaWMgd2lkdGg6IG51bWJlciwgcHVibGljIHNvbGlkOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICBpZiAoaGVpZ2h0IDw9IDAgfHwgd2lkdGggPD0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0hlaWdodCBhbmQgd2lkdGggbXVzdCBib3RoIGJlIGdyZWF0ZXIgdGhhbiB6ZXJvLicpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhdFBvc2l0aW9uKHg6IG51bWJlciwgeTogbnVtYmVyKTogUG9zaXRpb25lZEJvdW5kYXJ5IHtcclxuICAgICAgICByZXR1cm4gbmV3IFBvc2l0aW9uZWRCb3VuZGFyeSh4LCB5LCB0aGlzKTtcclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL2JvdW5kYXJ5LnRzIl0sInNvdXJjZVJvb3QiOiIifQ==