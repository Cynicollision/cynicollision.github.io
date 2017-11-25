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
/* 1 */,
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
/* 3 */,
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
/* 6 */,
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
/* 11 */,
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



/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDliODVjY2I4NWNkOGY3NTFmMTAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS92YXN0Z2FtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2VudW0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9pbnB1dC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL3Nwcml0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL3Jvb20udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9hY3Rvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2dyaWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS92aWV3LnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvY2FudmFzLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvZ2FtZS1jb250ZXh0LnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvZ2FtZS1ydW5uZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9ldmVudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS91dGlsLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvYm91bmRhcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFF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QUMsSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFDTCx5QkFBQztBQUFELENBQUM7O0FBRUQ7SUFNSSxrQkFBbUIsTUFBYyxFQUFTLEtBQWEsRUFBUyxLQUFzQjtRQUF0QixxQ0FBc0I7UUFBbkUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFTLFVBQUssR0FBTCxLQUFLLENBQVE7UUFBUyxVQUFLLEdBQUwsS0FBSyxDQUFpQjtRQUNsRixFQUFFLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVCLE1BQU0sSUFBSSxLQUFLLENBQUMsa0RBQWtELENBQUMsQ0FBQztRQUN4RSxDQUFDO0lBQ0wsQ0FBQztJQVJNLG1CQUFVLEdBQWpCLFVBQWtCLE1BQWMsRUFBRSxLQUFzQjtRQUF0QixxQ0FBc0I7UUFDcEQsTUFBTSxDQUFDLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBUUQsNkJBQVUsR0FBVixVQUFXLENBQVMsRUFBRSxDQUFTO1FBQzNCLE1BQU0sQ0FBQyxJQUFJLGtCQUFrQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUNMLGVBQUM7QUFBRCxDQUFDIiwiZmlsZSI6InZhc3RnYW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMDliODVjY2I4NWNkOGY3NTFmMTAiLCJpbXBvcnQgeyBHYW1lQ2FudmFzSFRNTDJELCBHYW1lQ2FudmFzT3B0aW9ucywgR2FtZUNhbnZhcyB9IGZyb20gJy4vY2FudmFzJztcclxuaW1wb3J0ICogYXMgRW51bSBmcm9tICcuL2VudW0nO1xyXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJy4vaW5wdXQnO1xyXG5pbXBvcnQgeyBHYW1lQ29udGV4dCB9IGZyb20gJy4vZ2FtZS1jb250ZXh0JztcclxuaW1wb3J0IHsgR2FtZVJ1bm5lciB9IGZyb20gJy4vZ2FtZS1ydW5uZXInO1xyXG5pbXBvcnQgeyBSb29tIH0gZnJvbSAnLi9yb29tJztcclxuXHJcbi8vIGV4cG9ydCBwdWJsaWMgbW9kdWxlc1xyXG5leHBvcnQgeyBBY3RvciwgQWN0b3JJbnN0YW5jZSB9IGZyb20gJy4vYWN0b3InO1xyXG5leHBvcnQgeyBCb3VuZGFyeSB9IGZyb20gJy4vYm91bmRhcnknO1xyXG5leHBvcnQgeyBFbnVtIH1cclxuZXhwb3J0IHsgSW5wdXQgfSBmcm9tICcuL2lucHV0JztcclxuZXhwb3J0IHsgR3JpZCwgR3JpZENlbGwgfSBmcm9tICcuL2dyaWQnO1xyXG5leHBvcnQgeyBSb29tIH0gZnJvbSAnLi9yb29tJztcclxuZXhwb3J0IHsgU3ByaXRlLCBTcHJpdGVUcmFuc2Zvcm1hdGlvbiB9IGZyb20gJy4vc3ByaXRlJztcclxuZXhwb3J0IHsgVmlldyB9IGZyb20gJy4vdmlldyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEdhbWVMaWZlY3ljbGVDYWxsYmFjayB7XHJcbiAgICAoYXJnczogYW55KTogdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBHYW1lT3B0aW9ucyB7XHJcbiAgICBjYW52YXM/OiBHYW1lQ2FudmFzT3B0aW9ucztcclxuICAgIHRhcmdldEZQUz86IG51bWJlcjtcclxufVxyXG5cclxuY2xhc3MgVmFzdGdhbWVIVE1MMkQge1xyXG4gICAgcHJpdmF0ZSBjb250ZXh0OiBHYW1lQ29udGV4dDtcclxuICAgIHByaXZhdGUgcnVubmVyOiBHYW1lUnVubmVyO1xyXG5cclxuICAgIGluaXQoY2FudmFzRWxlbWVudElELCBvcHRpb25zKSB7XHJcbiAgICAgICAgSW5wdXQuaW5pdCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBlbGVtZW50ID0gPEhUTUxDYW52YXNFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNhbnZhc0VsZW1lbnRJRCk7XHJcbiAgICAgICAgbGV0IGNhbnZhczogR2FtZUNhbnZhcyA9IG5ldyBHYW1lQ2FudmFzSFRNTDJEKGVsZW1lbnQpO1xyXG4gICAgICAgIGNhbnZhcy5pbml0KG9wdGlvbnMuY2FudmFzKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gbmV3IEdhbWVDb250ZXh0KGNhbnZhcyk7XHJcbiAgICAgICAgdGhpcy5ydW5uZXIgPSBuZXcgR2FtZVJ1bm5lcihvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb250ZXh0KCk6IEdhbWVDb250ZXh0IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KHJvb21JRDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5zZXRSb29tKHJvb21JRCk7XHJcbiAgICAgICAgdGhpcy5ydW5uZXIuc3RhcnQodGhpcy5jb250ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRSb29tKHJvb21JRDogc3RyaW5nLCBzdGFydEFyZ3M/OiBhbnkpIHtcclxuICAgICAgICBsZXQgcm9vbSA9IFJvb20uZ2V0KHJvb21JRCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHByZXZpb3VzUm9vbSA9IHRoaXMuY29udGV4dC5nZXRDdXJyZW50Um9vbSgpO1xyXG4gICAgICAgIGlmIChwcmV2aW91c1Jvb20pIHtcclxuICAgICAgICAgICAgcHJldmlvdXNSb29tLmVuZCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jb250ZXh0LnNldEN1cnJlbnRSb29tKHJvb20pO1xyXG5cclxuICAgICAgICBpZiAocm9vbS5oYXNTdGFydCkge1xyXG4gICAgICAgICAgICByb29tLmNhbGxTdGFydChzdGFydEFyZ3MpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFZhc3RnYW1lIHtcclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IGdhbWUgPSBuZXcgVmFzdGdhbWVIVE1MMkQoKTtcclxuXHJcbiAgICBzdGF0aWMgaW5pdChjYW52YXNFbGVtZW50SUQ6IHN0cmluZywgb3B0aW9uczogR2FtZU9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLmdhbWUuaW5pdChjYW52YXNFbGVtZW50SUQsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzdGFydChpbml0aWFsUm9vbUlEOiBzdHJpbmcsICk6IFZhc3RnYW1lSFRNTDJEIHtcclxuICAgICAgICB0aGlzLmdhbWUuc3RhcnQoaW5pdGlhbFJvb21JRCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmdhbWU7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldENvbnRleHQoKTogR2FtZUNvbnRleHQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdhbWUuZ2V0Q29udGV4dCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzZXRSb29tKHJvb21JRDogc3RyaW5nLCBzdGFydEFyZ3M/OiBhbnkpIHtcclxuICAgICAgICB0aGlzLmdhbWUuc2V0Um9vbShyb29tSUQsIHN0YXJ0QXJncyk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS92YXN0Z2FtZS50cyIsImV4cG9ydCBlbnVtIEFjdG9yU3RhdGUge1xyXG4gICAgQWN0aXZlID0gMSxcclxuICAgIERlc3Ryb3llZCA9IDIsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIERpcmVjdGlvbiB7XHJcbiAgICBSaWdodCA9IDAsXHJcbiAgICBEb3duID0gOTAsXHJcbiAgICBMZWZ0ID0gMTgwLFxyXG4gICAgVXAgPSAyNzAsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEdhbWVTdGF0ZSB7XHJcbiAgICBSdW5uaW5nID0gMSxcclxuICAgIFBhdXNlZCA9IDIsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEtleSB7XHJcbiAgICBBbnkgPSAtMSxcclxuICAgIFNwYWNlID0gMzIsXHJcbiAgICBMZWZ0ID0gMzcsXHJcbiAgICBVcCA9IDM4LFxyXG4gICAgUmlnaHQgPSAzOSxcclxuICAgIERvd24gPSA0MCxcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL2VudW0udHMiLCJpbXBvcnQgeyBLZXkgfSBmcm9tICcuL2VudW0nO1xyXG5cclxuZXhwb3J0IGNsYXNzIElucHV0IHtcclxuICAgIHByaXZhdGUgc3RhdGljIGNsaWNrSGFuZGxlcnM6IENvbmNyZXRlRXZlbnRIYW5kbGVyPFBvaW50ZXJJbnB1dEV2ZW50PltdID0gW107XHJcbiAgICBwcml2YXRlIHN0YXRpYyBrZXlib2FyZEhhbmRsZXJzOiB7IFtjb2RlOiBudW1iZXJdOiBDb25jcmV0ZUV2ZW50SGFuZGxlcjxLZXlib2FyZEV2ZW50PiB9ID0ge307XHJcbiAgICBwcml2YXRlIHN0YXRpYyBrZXlib2FyZEFjdGl2aXR5OiB7IFtjb2RlOiBudW1iZXJdOiBib29sZWFuIH0gPSB7fTtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfYWN0aXZlUG9pbnRlckV2ZW50OiBQb2ludGVySW5wdXRFdmVudCA9IG51bGw7XHJcbiAgICBzdGF0aWMgZ2V0IGNsaWNrQWN0aXZlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAhIUlucHV0Ll9hY3RpdmVQb2ludGVyRXZlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGluaXQoKSB7XHJcblxyXG4gICAgICAgIGxldCByYWlzZVBvaW50ZXJFdmVudCA9IChldjogUG9pbnRlcklucHV0RXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKElucHV0Ll9hY3RpdmVQb2ludGVyRXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgSW5wdXQuX2FjdGl2ZVBvaW50ZXJFdmVudCA9IGV2O1xyXG5cclxuICAgICAgICAgICAgaWYgKElucHV0LmNsaWNrSGFuZGxlcnMubGVuZ3RoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgSW5wdXQuY2xpY2tIYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyOiBDb25jcmV0ZUV2ZW50SGFuZGxlcjxQb2ludGVySW5wdXRFdmVudD4pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaGFuZGxlci5pc0FsaXZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXIuY2FsbGJhY2soZXYpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgbGV0IGVuZFBvaW50ZXJFdmVudCA9ICgpID0+IHtcclxuICAgICAgICAgICAgSW5wdXQuX2FjdGl2ZVBvaW50ZXJFdmVudCA9IG51bGw7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gcmVnaXN0ZXIgbW91c2UvdG91Y2ggaW5wdXQgXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5vbm1vdXNlZG93biA9IGZ1bmN0aW9uKHRoaXM6IGFueSwgZXY6IE1vdXNlRXZlbnQpIHtcclxuICAgICAgICAgICAgcmFpc2VQb2ludGVyRXZlbnQoUG9pbnRlcklucHV0RXZlbnQuZnJvbU1vdXNlRXZlbnQoZXYpKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkub250b3VjaHN0YXJ0ID0gZnVuY3Rpb24gKGV2OiBUb3VjaEV2ZW50KSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkub25tb3VzZWRvd24gPSBudWxsO1xyXG4gICAgICAgICAgICByYWlzZVBvaW50ZXJFdmVudChQb2ludGVySW5wdXRFdmVudC5mcm9tVG91Y2hFdmVudChldikpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5vbm1vdXNldXAgPSBlbmRQb2ludGVyRXZlbnQ7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5vbnRvdWNoZW5kID0gZW5kUG9pbnRlckV2ZW50O1xyXG5cclxuICAgICAgICAvLyByZWdpc3RlciBrZXlib2FyZCBpbnB1dFxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkub25rZXlkb3duID0gKGV2OiBLZXlib2FyZEV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBrZXlDb2RlID0gZXYua2V5Q29kZSB8fCBldi5jb2RlXHJcbiAgICAgICAgICAgIGxldCBoYW5kbGVyOiBDb25jcmV0ZUV2ZW50SGFuZGxlcjxLZXlib2FyZEV2ZW50PiA9IHRoaXMua2V5Ym9hcmRIYW5kbGVyc1trZXlDb2RlXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChoYW5kbGVyICYmIGhhbmRsZXIuaXNBbGl2ZSAmJiAhdGhpcy5rZXlib2FyZEFjdGl2aXR5W2tleUNvZGVdKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmtleWJvYXJkQWN0aXZpdHlba2V5Q29kZV0gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlci5jYWxsYmFjayhldik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBnbG9iYWxIYW5kbGVyID0gdGhpcy5rZXlib2FyZEhhbmRsZXJzW0tleS5BbnldO1xyXG4gICAgICAgICAgICBpZiAoZ2xvYmFsSGFuZGxlciAmJiBnbG9iYWxIYW5kbGVyLmlzQWxpdmUgJiYgIXRoaXMua2V5Ym9hcmRBY3Rpdml0eVtLZXkuQW55XSkgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMua2V5Ym9hcmRBY3Rpdml0eVtLZXkuQW55XSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBnbG9iYWxIYW5kbGVyLmNhbGxiYWNrKGV2KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5vbmtleXVwID0gKGV2OiBLZXlib2FyZEV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBrZXlDb2RlID0gZXYua2V5Q29kZSB8fCBldi5jb2RlXHJcbiAgICAgICAgICAgIGxldCBoYW5kbGVyOiBDb25jcmV0ZUV2ZW50SGFuZGxlcjxLZXlib2FyZEV2ZW50PiA9IHRoaXMua2V5Ym9hcmRIYW5kbGVyc1trZXlDb2RlXTtcclxuICAgICAgICAgICAgdGhpcy5rZXlib2FyZEFjdGl2aXR5W0tleS5BbnldID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICBpZiAoaGFuZGxlciAmJiBoYW5kbGVyLmlzQWxpdmUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMua2V5Ym9hcmRBY3Rpdml0eVtrZXlDb2RlXSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcmVnaXN0ZXJDbGlja0hhbmRsZXIoY2FsbGJhY2s6IChldmVudDogUG9pbnRlcklucHV0RXZlbnQpID0+IHZvaWQpOiBDb25jcmV0ZUV2ZW50SGFuZGxlcjxQb2ludGVySW5wdXRFdmVudD4ge1xyXG4gICAgICAgIGxldCBjbGlja0hhbmRsZXIgPSBuZXcgQ29uY3JldGVFdmVudEhhbmRsZXI8UG9pbnRlcklucHV0RXZlbnQ+KGNhbGxiYWNrKTs7XHJcbiAgICAgICAgSW5wdXQuY2xpY2tIYW5kbGVycy5wdXNoKGNsaWNrSGFuZGxlcik7XHJcblxyXG4gICAgICAgIHJldHVybiBjbGlja0hhbmRsZXI7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHJlZ2lzdGVyS2V5SGFuZGxlcihrZXk6IEtleSwgY2FsbGJhY2s6IChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4gdm9pZCk6IENvbmNyZXRlRXZlbnRIYW5kbGVyPEtleWJvYXJkRXZlbnQ+IHtcclxuICAgICAgICBsZXQga2V5SGFuZGxlciA9IG5ldyBDb25jcmV0ZUV2ZW50SGFuZGxlcjxLZXlib2FyZEV2ZW50PihjYWxsYmFjayk7XHJcbiAgICAgICAgSW5wdXQua2V5Ym9hcmRIYW5kbGVyc1trZXldID0ga2V5SGFuZGxlclxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBrZXlIYW5kbGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBrZXlEb3duKGtleTogS2V5KTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuICEhdGhpcy5rZXlib2FyZEFjdGl2aXR5W2tleV07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRXZlbnRIYW5kbGVyIHtcclxuICAgIGNhbGxiYWNrOiAoZXZlbnQ6IGFueSkgPT4gdm9pZDtcclxuICAgIGRpc3Bvc2U6ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmNsYXNzIENvbmNyZXRlRXZlbnRIYW5kbGVyPFQ+IGltcGxlbWVudHMgRXZlbnRIYW5kbGVyIHtcclxuICAgIGlzQWxpdmU6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBjYWxsYmFjazogKGV2ZW50OiBUKSA9PiB2b2lkKSB7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGRpc3Bvc2UoKSB7XHJcbiAgICAgICAgdGhpcy5pc0FsaXZlID0gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQb2ludGVySW5wdXRFdmVudCB7XHJcbiAgICB4OiBudW1iZXI7XHJcbiAgICB5OiBudW1iZXI7XHJcblxyXG4gICAgc3RhdGljIGZyb21Nb3VzZUV2ZW50KGV2OiBNb3VzZUV2ZW50KTogUG9pbnRlcklucHV0RXZlbnQge1xyXG4gICAgICAgIHJldHVybiB7IHg6IGV2Lm9mZnNldFgsIHk6IGV2Lm9mZnNldFkgfTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZnJvbVRvdWNoRXZlbnQoZXY6IFRvdWNoRXZlbnQpOiBQb2ludGVySW5wdXRFdmVudCB7XHJcbiAgICAgICAgbGV0IHRvdWNoID0gZXYudG91Y2hlc1swXTtcclxuICAgICAgICByZXR1cm4geyB4OiB0b3VjaCA/IHRvdWNoLmNsaWVudFggOiAwLCB5OiB0b3VjaCA/IHRvdWNoLmNsaWVudFkgOiAwIH07XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL2lucHV0LnRzIiwiaW1wb3J0IHsgQWN0b3IgfSBmcm9tICcuL2FjdG9yJztcclxuaW1wb3J0IHsgVmFzdGdhbWUgfSBmcm9tICcuL3Zhc3RnYW1lJztcclxuXHJcbmV4cG9ydCBlbnVtIFNwcml0ZVRyYW5zZm9ybWF0aW9uIHtcclxuICAgIE9wYWNpdHkgPSAwLFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU3ByaXRlIHtcclxuICAgIHByaXZhdGUgdHJhbnNmb3JtYXRvbnM6IHsgW2luZGV4OiBudW1iZXJdOiBudW1iZXIgfSA9IHt9O1xyXG5cclxuICAgIHN0YXRpYyBkZWZpbmUobmFtZTogc3RyaW5nLCBvcHRpb25zOiBTcHJpdGVPcHRpb25zKTogU3ByaXRlIHtcclxuICAgICAgICBsZXQgc3ByaXRlID0gbmV3IFNwcml0ZShvcHRpb25zKTtcclxuICAgICAgICBWYXN0Z2FtZS5nZXRDb250ZXh0KCkuZGVmaW5lU3ByaXRlKG5hbWUsIHNwcml0ZSk7XHJcblxyXG4gICAgICAgIHJldHVybiBzcHJpdGU7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldChuYW1lOiBzdHJpbmcpOiBTcHJpdGUge1xyXG4gICAgICAgIHJldHVybiBWYXN0Z2FtZS5nZXRDb250ZXh0KCkuZ2V0U3ByaXRlKG5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlYWRvbmx5IGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50O1xyXG4gICAgcmVhZG9ubHkgaGVpZ2h0OiBudW1iZXI7XHJcbiAgICByZWFkb25seSB3aWR0aDogbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgZnJhbWVCb3JkZXI6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zOiBTcHJpdGVPcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5pbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIHRoaXMuaW1hZ2Uuc3JjID0gb3B0aW9ucy5pbWFnZVNvdXJjZTtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMud2lkdGggPSBvcHRpb25zLndpZHRoO1xyXG4gICAgICAgIHRoaXMuZnJhbWVCb3JkZXIgPSBvcHRpb25zLmZyYW1lQm9yZGVyO1xyXG5cclxuICAgICAgICB0aGlzLnNldERlZmF1bHRUcmFuc2Zvcm1zKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXREZWZhdWx0VHJhbnNmb3JtcygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnRyYW5zZm9ybWF0b25zW1Nwcml0ZVRyYW5zZm9ybWF0aW9uLk9wYWNpdHldID0gMTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUcmFuc2Zvcm0odHJhbnNmb3JtYXRpb246IFNwcml0ZVRyYW5zZm9ybWF0aW9uKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50cmFuc2Zvcm1hdG9uc1t0cmFuc2Zvcm1hdGlvbl07XHJcbiAgICB9XHJcblxyXG4gICAgdHJhbnNmb3JtKHRyYW5zZm9ybWF0aW9uOiBTcHJpdGVUcmFuc2Zvcm1hdGlvbiwgZGVsdGE6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudHJhbnNmb3JtYXRvbnNbdHJhbnNmb3JtYXRpb25dICs9IGRlbHRhO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFRyYW5zZm9ybSh0cmFuc2Zvcm1hdGlvbjogU3ByaXRlVHJhbnNmb3JtYXRpb24sIHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnRyYW5zZm9ybWF0b25zW3RyYW5zZm9ybWF0aW9uXSA9IHZhbHVlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNwcml0ZU9wdGlvbnMge1xyXG4gICAgaW1hZ2VTb3VyY2U6IHN0cmluZztcclxuICAgIGhlaWdodDogbnVtYmVyO1xyXG4gICAgd2lkdGg6IG51bWJlcjtcclxuICAgIGZyYW1lQm9yZGVyPzogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU3ByaXRlQW5pbWF0aW9uIHtcclxuICAgIHByaXZhdGUgY3VycmVudDogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgdGltZXI6IGFueTtcclxuXHJcbiAgICBkZXB0aDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihyZWFkb25seSBzcHJpdGU6IFNwcml0ZSkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudCA9IDA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldCBmcmFtZSgpOiBudW1iZXIgeyBcclxuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzb3VyY2UoKTogU3ByaXRlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zcHJpdGU7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIsIGRlbGF5PzogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gc3RhcnQ7XHJcblxyXG4gICAgICAgIHRoaXMudGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudCA9IHRoaXMuY3VycmVudCA9PT0gZW5kID8gc3RhcnQgOiB0aGlzLmN1cnJlbnQgKyAxO1xyXG4gICAgICAgIH0sIGRlbGF5KTtcclxuICAgIH1cclxuXHJcbiAgICBzdG9wKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLnRpbWVyKSB7XHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldChmcmFtZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gZnJhbWU7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9zcHJpdGUudHMiLCJpbXBvcnQgeyBBY3RvciwgQWN0b3JJbnN0YW5jZSwgQ29sbGlzaW9uQ2FsbGJhY2sgfSBmcm9tICcuL2FjdG9yJztcclxuaW1wb3J0IHsgR2FtZUNhbnZhc0NvbnRleHQsIFJvb21EcmF3RXZlbnQgfSBmcm9tICcuL2NhbnZhcyc7XHJcbmltcG9ydCB7IEtleSB9IGZyb20gJy4vZW51bSc7XHJcbmltcG9ydCB7IEV2ZW50SGFuZGxlciwgSW5wdXQsIFBvaW50ZXJJbnB1dEV2ZW50IH0gZnJvbSAnLi9pbnB1dCc7XHJcbmltcG9ydCB7IEdyaWQgfSBmcm9tICcuL2dyaWQnO1xyXG5pbXBvcnQgeyBHYW1lTGlmZWN5Y2xlQ2FsbGJhY2sgfSBmcm9tICcuL3Zhc3RnYW1lJztcclxuaW1wb3J0IHsgU3ByaXRlIH0gZnJvbSAnLi9zcHJpdGUnO1xyXG5pbXBvcnQgeyBWaWV3IH0gZnJvbSAnLi92aWV3JztcclxuaW1wb3J0IHsgVmFzdGdhbWUgfSBmcm9tICcuL3Zhc3RnYW1lJztcclxuXHJcbmV4cG9ydCBjbGFzcyBCYWNrZ3JvdW5kIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICByZWFkb25seSBjb2xvcjogc3RyaW5nLFxyXG4gICAgICAgIHJlYWRvbmx5IHBhZ2VDb2xvcjogc3RyaW5nID0gJyMwMDAnLCBcclxuICAgICAgICByZWFkb25seSB3aWR0aDogbnVtYmVyLCBcclxuICAgICAgICByZWFkb25seSBoZWlnaHQ6IG51bWJlcikge1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUm9vbSB7XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgbmV4dEFjdG9ySW5zdGFuY2VJRCA9ICgoKSA9PiB7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRJRCA9IDA7XHJcbiAgICAgICAgcmV0dXJuICgoKSA9PiArK2N1cnJlbnRJRCk7XHJcbiAgICB9KSgpO1xyXG5cclxuICAgIHN0YXRpYyBkZWZpbmUobmFtZTogc3RyaW5nKTogUm9vbSB7XHJcbiAgICAgICAgbGV0IHJvb20gPSBuZXcgUm9vbSgpO1xyXG4gICAgICAgIFZhc3RnYW1lLmdldENvbnRleHQoKS5kZWZpbmVSb29tKG5hbWUsIHJvb20pO1xyXG4gICAgICAgIHJldHVybiByb29tO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQobmFtZTogc3RyaW5nKTogUm9vbSB7XHJcbiAgICAgICAgcmV0dXJuIFZhc3RnYW1lLmdldENvbnRleHQoKS5nZXRSb29tKG5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYWN0b3JJbnN0YW5jZU1hcDogeyBbaW5kZXg6IG51bWJlcl06IEFjdG9ySW5zdGFuY2UgfSA9IHt9O1xyXG5cclxuICAgIHByaXZhdGUgZXZlbnRIYW5kbGVyczogRXZlbnRIYW5kbGVyW10gPSBbXTtcclxuICAgIC8vIFRPRE86IGNvbnNpZGVyIG1vdmluZyBHcmlkIHRvIGV4dGVuZGVkIGNsYXNzIG9yIGRlY29yYXRvclxyXG4gICAgcHJpdmF0ZSBncmlkOiBHcmlkO1xyXG4gICAgdmlldzogVmlldztcclxuXHJcbiAgICBwcml2YXRlIG9uU3RhcnRDYWxsYmFjazogR2FtZUxpZmVjeWNsZUNhbGxiYWNrO1xyXG4gICAgcHJpdmF0ZSBvbkRyYXdDYWxsYmFjazogUm9vbURyYXdFdmVudDtcclxuICAgIFxyXG4gICAgYmFja2dyb3VuZDogQmFja2dyb3VuZDtcclxuXHJcbiAgICBnZXQgaGFzU3RhcnQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuICEhdGhpcy5vblN0YXJ0Q2FsbGJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgb25TdGFydChjYWxsYmFjazogR2FtZUxpZmVjeWNsZUNhbGxiYWNrKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vblN0YXJ0Q2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgIH1cclxuXHJcbiAgICBjYWxsU3RhcnQoYXJncz86IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMub25TdGFydENhbGxiYWNrKGFyZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBoYXNEcmF3KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAhIXRoaXMub25EcmF3Q2FsbGJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgb25EcmF3KGNhbGxiYWNrOiBSb29tRHJhd0V2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vbkRyYXdDYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbGxEcmF3KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMub25EcmF3Q2FsbGJhY2sodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljayhjYWxsYmFjazogKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB2b2lkKSB7XHJcbiAgICAgICAgbGV0IGNsaWNrSGFuZGxlciA9IElucHV0LnJlZ2lzdGVyQ2xpY2tIYW5kbGVyKGNhbGxiYWNrKTtcclxuICAgICAgICB0aGlzLmV2ZW50SGFuZGxlcnMucHVzaChjbGlja0hhbmRsZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uS2V5KGtleTogS2V5LCBjYWxsYmFjazogKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiB2b2lkKSB7XHJcbiAgICAgICAgbGV0IGtleUhhbmRsZXIgPSBJbnB1dC5yZWdpc3RlcktleUhhbmRsZXIoa2V5LCBjYWxsYmFjayk7XHJcbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXJzLnB1c2goa2V5SGFuZGxlcik7XHJcbiAgICB9XHJcblxyXG4gICAgZGVmaW5lR3JpZCh0aWxlU2l6ZTogbnVtYmVyKTogR3JpZCB7XHJcbiAgICAgICAgdGhpcy5ncmlkID0gbmV3IEdyaWQodGlsZVNpemUsIHRoaXMpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5ncmlkO1xyXG4gICAgfVxyXG5cclxuICAgIGRlZmluZVZpZXcoeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKTogVmlldyB7XHJcbiAgICAgICAgdGhpcy52aWV3ID0gbmV3IFZpZXcoeCwgeSwgd2lkdGgsIGhlaWdodCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnZpZXc7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QmFja2dyb3VuZChjb2xvcjogc3RyaW5nLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgcGFnZUNvbG9yPzogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kID0gbmV3IEJhY2tncm91bmQoY29sb3IsIHBhZ2VDb2xvciwgd2lkdGgsIGhlaWdodCk7XHJcblxyXG4gICAgICAgIGlmIChwYWdlQ29sb3IpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBwYWdlQ29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0ZXAoKTogdm9pZCB7XHJcblxyXG4gICAgICAgIHRoaXMuZ2V0SW5zdGFuY2VzKCkuZm9yRWFjaChpbnN0YW5jZSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBwYXJlbnQgPSBpbnN0YW5jZS5wYXJlbnQ7XHJcblxyXG4gICAgICAgICAgICBpZiAoaW5zdGFuY2UuaXNBY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgIC8vIGFwcGx5IGFjdG9yIGluc3RhbmNlIG1vdmVtZW50XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5zdGFuY2Uuc3BlZWQgIT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcGx5SW5zdGFuY2VNb3ZlbWVudChpbnN0YW5jZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja0NvbGxpc2lvbnMoaW5zdGFuY2UpO1xyXG5cclxuICAgICAgICAgICAgICAgIHBhcmVudC5zdGVwKGluc3RhbmNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVzdHJveUFjdG9ySW5zdGFuY2UoaW5zdGFuY2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnZpZXcpIHtcclxuICAgICAgICAgICAgdGhpcy52aWV3LnVwZGF0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFwcGx5SW5zdGFuY2VNb3ZlbWVudChpbnN0YW5jZTogQWN0b3JJbnN0YW5jZSk6IHZvaWQge1xyXG4gICAgICAgIGxldCBvZmZzZXRYID0gTWF0aC5yb3VuZChpbnN0YW5jZS5nZXRNb3ZlbWVudE9mZnNldFgoKSk7XHJcbiAgICAgICAgbGV0IG9mZnNldFkgPSBNYXRoLnJvdW5kKGluc3RhbmNlLmdldE1vdmVtZW50T2Zmc2V0WSgpKTtcclxuXHJcbiAgICAgICAgaWYgKG9mZnNldFggIT09IDAgfHwgb2Zmc2V0WSAhPT0gMCkge1xyXG4gICAgICAgICAgICBpbnN0YW5jZS5zZXRQb3NpdGlvblJlbGF0aXZlKG9mZnNldFgsIG9mZnNldFkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNoZWNrQ29sbGlzaW9ucyhzZWxmSW5zdGFuY2U6IEFjdG9ySW5zdGFuY2UpOiB2b2lkIHtcclxuICAgICAgICBsZXQgcGFyZW50ID0gc2VsZkluc3RhbmNlLnBhcmVudDs7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9yIChsZXQgYWN0b3JOYW1lIGluIHBhcmVudC5jb2xsaXNpb25IYW5kbGVycykge1xyXG4gICAgICAgICAgICBsZXQgY2FsbGJhY2sgPSBwYXJlbnQuY29sbGlzaW9uSGFuZGxlcnNbYWN0b3JOYW1lXTtcclxuICAgICAgICAgICAgbGV0IG90aGVyQWN0b3IgPSBBY3Rvci5nZXQoYWN0b3JOYW1lKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IG90aGVySUQgaW4gdGhpcy5hY3Rvckluc3RhbmNlTWFwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgb3RoZXIgPSB0aGlzLmFjdG9ySW5zdGFuY2VNYXBbb3RoZXJJRF07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKG90aGVyLnBhcmVudCA9PT0gb3RoZXJBY3Rvcikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZkluc3RhbmNlICE9PSBvdGhlciAmJiBzZWxmSW5zdGFuY2UuY29sbGlkZXNXaXRoKG90aGVyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhzZWxmSW5zdGFuY2UsIG90aGVyKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KGNhbnZhc0NvbnRleHQ6IEdhbWVDYW52YXNDb250ZXh0KTogdm9pZCB7XHJcbiAgICAgICAgLy8gZ2V0IHZpZXcgb2Zmc2V0XHJcbiAgICAgICAgbGV0IFtvZmZzZXRYLCBvZmZzZXRZXSA9IHRoaXMuZ2V0Vmlld09mZnNldCgpO1xyXG5cclxuICAgICAgICAvLyBkcmF3IHJvb20gYmFja2dyb3VuZFxyXG4gICAgICAgIGlmICh0aGlzLmJhY2tncm91bmQpIHtcclxuICAgICAgICAgICAgY2FudmFzQ29udGV4dC5maWxsKC1vZmZzZXRYLCAtb2Zmc2V0WSwgdGhpcy5iYWNrZ3JvdW5kLndpZHRoLCB0aGlzLmJhY2tncm91bmQuaGVpZ2h0LCB0aGlzLmJhY2tncm91bmQuY29sb3IpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gY2FsbCByb29tIGRyYXcgZXZlbnQgY2FsbGJhY2tcclxuICAgICAgICBpZiAodGhpcy5oYXNEcmF3KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FsbERyYXcoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBvcmRlcmVkSW5zdGFuY2VzID0gdGhpcy5nZXRJbnN0YW5jZXMoKS5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiAoYi5zcHJpdGVBbmltYXRpb24gPyBiLnNwcml0ZUFuaW1hdGlvbi5kZXB0aCA6IDApIC0gKGEuc3ByaXRlQW5pbWF0aW9uID8gYS5hbmltYXRpb24uZGVwdGggOiAwKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgb3JkZXJlZEluc3RhbmNlcy5mb3JFYWNoKGluc3RhbmNlID0+IHtcclxuICAgICAgICAgICAgLy8gY2FsbCBhY3RvciBkcmF3IGV2ZW50IGNhbGxiYWNrc1xyXG4gICAgICAgICAgICBpZiAoaW5zdGFuY2UucGFyZW50Lmhhc0RyYXcpIHtcclxuICAgICAgICAgICAgICAgIGluc3RhbmNlLnBhcmVudC5jYWxsRHJhdyhpbnN0YW5jZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGRyYXcgc3ByaXRlc1xyXG4gICAgICAgICAgICBpZiAoaW5zdGFuY2UuYW5pbWF0aW9uICYmIGluc3RhbmNlLnZpc2libGUpIHtcclxuICAgICAgICAgICAgICAgIGNhbnZhc0NvbnRleHQuZHJhd1Nwcml0ZShpbnN0YW5jZS5hbmltYXRpb24uc291cmNlLCBpbnN0YW5jZS54IC0gb2Zmc2V0WCwgaW5zdGFuY2UueSAtIG9mZnNldFksIGluc3RhbmNlLnNwcml0ZUFuaW1hdGlvbi5mcmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3U3ByaXRlKHNwcml0ZTogU3ByaXRlLCB4OiBudW1iZXIsIHk6IG51bWJlciwgZnJhbWU6IG51bWJlciA9IDApIHtcclxuICAgICAgICBsZXQgW29mZnNldFgsIG9mZnNldFldID0gdGhpcy5nZXRWaWV3T2Zmc2V0KCk7XHJcbiAgICAgICAgbGV0IGNhbnZhcyA9IFZhc3RnYW1lLmdldENvbnRleHQoKS5nZXRDYW52YXMoKTtcclxuICAgICAgICBjYW52YXMuZ2V0Q29udGV4dCgpLmRyYXdTcHJpdGUoc3ByaXRlLCB4IC0gb2Zmc2V0WCwgeSAtIG9mZnNldFksIGZyYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVBY3RvcihhY3RvcklEOiBzdHJpbmcsIHg/OiBudW1iZXIsIHk/OiBudW1iZXIpOiBBY3Rvckluc3RhbmNlIHtcclxuICAgICAgICBsZXQgcGFyZW50QWN0b3IgPSBBY3Rvci5nZXQoYWN0b3JJRCk7XHJcblxyXG4gICAgICAgIGxldCBuZXdBY3Rvckluc3RhbmNlSUQgPSBSb29tLm5leHRBY3Rvckluc3RhbmNlSUQoKTtcclxuICAgICAgICBsZXQgbmV3SW5zdGFuY2UgPSBuZXcgQWN0b3JJbnN0YW5jZSh0aGlzLCBwYXJlbnRBY3RvciwgbmV3QWN0b3JJbnN0YW5jZUlELCB4LCB5KTtcclxuXHJcbiAgICAgICAgdGhpcy5hY3Rvckluc3RhbmNlTWFwW25ld0FjdG9ySW5zdGFuY2VJRF0gPSBuZXdJbnN0YW5jZTtcclxuXHJcbiAgICAgICAgaWYgKHBhcmVudEFjdG9yLmhhc0NyZWF0ZSkge1xyXG4gICAgICAgICAgICBwYXJlbnRBY3Rvci5jYWxsQ3JlYXRlKG5ld0luc3RhbmNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBuZXdJbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGRlc3Ryb3lBY3Rvckluc3RhbmNlKGluc3RhbmNlOiBBY3Rvckluc3RhbmNlKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHBhcmVudCA9IGluc3RhbmNlLnBhcmVudDtcclxuXHJcbiAgICAgICAgaWYgKHBhcmVudC5oYXNEZXN0cm95KSB7XHJcbiAgICAgICAgICAgIHBhcmVudC5jYWxsRGVzdHJveShpbnN0YW5jZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkZWxldGUgdGhpcy5hY3Rvckluc3RhbmNlTWFwW2luc3RhbmNlLmlkXTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFZpZXdPZmZzZXQoKTogW251bWJlciwgbnVtYmVyXSB7XHJcbiAgICAgICAgbGV0IG9mZnNldFggPSB0aGlzLnZpZXcgPyB0aGlzLnZpZXcueCA6IDA7XHJcbiAgICAgICAgbGV0IG9mZnNldFkgPSB0aGlzLnZpZXcgPyB0aGlzLnZpZXcueSA6IDA7XHJcblxyXG4gICAgICAgIHJldHVybiBbb2Zmc2V0WCwgb2Zmc2V0WV07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SW5zdGFuY2VzKCk6IEFjdG9ySW5zdGFuY2VbXSB7XHJcbiAgICAgICAgbGV0IGluc3RhbmNlcyA9IFtdO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpbnN0YW5jZSBpbiB0aGlzLmFjdG9ySW5zdGFuY2VNYXApIHtcclxuICAgICAgICAgICAgaW5zdGFuY2VzLnB1c2godGhpcy5hY3Rvckluc3RhbmNlTWFwW2luc3RhbmNlXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gaW5zdGFuY2VzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEluc3RhbmNlc0F0UG9zaXRpb24oeDogbnVtYmVyLCB5OiBudW1iZXIpOiBBY3Rvckluc3RhbmNlW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEluc3RhbmNlcygpLmZpbHRlcihpbnN0YW5jZSA9PiBpbnN0YW5jZS5vY2N1cGllc1Bvc2l0aW9uKHgsIHkpKTtcclxuICAgIH1cclxuXHJcbiAgICBpc1Bvc2l0aW9uRnJlZSh4OiBudW1iZXIsIHk6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAhdGhpcy5nZXRJbnN0YW5jZXNBdFBvc2l0aW9uKHgsIHkpLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRWaWV3KCk6IFZpZXcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZpZXc7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ2xpY2soZXZlbnQ6IFBvaW50ZXJJbnB1dEV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGNsaWNrWCA9IGV2ZW50Lng7XHJcbiAgICAgICAgbGV0IGNsaWNrWSA9IGV2ZW50Lnk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnZpZXcpIHtcclxuICAgICAgICAgICAgY2xpY2tYICs9IHRoaXMudmlldy54O1xyXG4gICAgICAgICAgICBjbGlja1kgKz0gdGhpcy52aWV3Lnk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5ncmlkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ3JpZC5yYWlzZUNsaWNrRXZlbnQoY2xpY2tYLCBjbGlja1kpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5nZXRJbnN0YW5jZXNBdFBvc2l0aW9uKGNsaWNrWCwgY2xpY2tZKS5mb3JFYWNoKGluc3RhbmNlID0+IHtcclxuICAgICAgICAgICAgbGV0IHBhcmVudCA9IGluc3RhbmNlLnBhcmVudDtcclxuXHJcbiAgICAgICAgICAgIGlmIChwYXJlbnQuaGFzQ2xpY2sgJiYgaW5zdGFuY2Uub2NjdXBpZXNQb3NpdGlvbihjbGlja1gsIGNsaWNrWSkpIHtcclxuICAgICAgICAgICAgICAgIHBhcmVudC5jYWxsQ2xpY2soaW5zdGFuY2UsIGV2ZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGVuZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmFjdG9ySW5zdGFuY2VNYXAgPSB7fTtcclxuICAgICAgICB0aGlzLmV2ZW50SGFuZGxlcnMuZm9yRWFjaChldmVudEhhbmRsZXIgPT4gZXZlbnRIYW5kbGVyLmRpc3Bvc2UoKSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9yb29tLnRzIiwiaW1wb3J0IHsgQm91bmRhcnkgfSBmcm9tICcuL2JvdW5kYXJ5JztcclxuaW1wb3J0IHsgQWN0b3JJbnN0YW5jZURyYXdFdmVudCwgR2FtZUNhbnZhc0NvbnRleHQgfSBmcm9tICcuL2NhbnZhcyc7XHJcbmltcG9ydCB7IEFjdG9yU3RhdGUsIERpcmVjdGlvbiB9IGZyb20gJy4vZW51bSc7XHJcbmltcG9ydCB7IERlZmVycmVkRXZlbnQgfSBmcm9tICcuL2V2ZW50cyc7XHJcbmltcG9ydCB7IFBvaW50ZXJJbnB1dEV2ZW50IH0gZnJvbSAnLi9pbnB1dCc7XHJcbmltcG9ydCB7IFJvb20gfSBmcm9tICcuL3Jvb20nO1xyXG5pbXBvcnQgeyBTcHJpdGUsIFNwcml0ZUFuaW1hdGlvbiB9IGZyb20gJy4vc3ByaXRlJztcclxuaW1wb3J0IHsgTWF0aFV0aWwgfSBmcm9tICcuL3V0aWwnO1xyXG5pbXBvcnQgeyBWYXN0Z2FtZSB9IGZyb20gJy4vdmFzdGdhbWUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBY3RvckxpZmVjeWNsZSB7XHJcbiAgICBvbkNyZWF0ZTogTGlmZWN5Y2xlQ2FsbGJhY2s7XHJcbiAgICBvblN0ZXA6IExpZmVjeWNsZUNhbGxiYWNrO1xyXG4gICAgb25EZXN0cm95OiBMaWZlY3ljbGVDYWxsYmFjaztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMaWZlY3ljbGVDYWxsYmFjayB7XHJcbiAgICAoc2VsZjogQWN0b3JJbnN0YW5jZSk6IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQWN0b3JFdmVudCB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBjYWxsYmFjazogQWN0b3JFdmVudENhbGxiYWNrO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFjdG9yRXZlbnRDYWxsYmFjayB7XHJcbiAgICAoc2VsZj86IEFjdG9ySW5zdGFuY2UsIGV2ZW50QXJncz86IGFueSk6IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQWN0b3JPcHRpb25zIHtcclxuICAgIGJvdW5kYXJ5PzogQm91bmRhcnk7XHJcbiAgICBzcHJpdGU/OiBTcHJpdGU7XHJcbn1cclxuXHJcbmludGVyZmFjZSBDbGlja0V2ZW50Q2FsbGJhY2sge1xyXG4gICAgKHNlbGY6IEFjdG9ySW5zdGFuY2UsIGV2ZW50OiBQb2ludGVySW5wdXRFdmVudCk6IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29sbGlzaW9uQ2FsbGJhY2sge1xyXG4gICAgKHNlbGY6IEFjdG9ySW5zdGFuY2UsIG90aGVyOiBBY3Rvckluc3RhbmNlKTogdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFjdG9yIHtcclxuXHJcbiAgICBzdGF0aWMgZGVmaW5lKG5hbWU6IHN0cmluZywgb3B0aW9ucz86IEFjdG9yT3B0aW9ucyk6IEFjdG9yIHtcclxuICAgICAgICBsZXQgYWN0b3IgPSBuZXcgQWN0b3IobmFtZSwgb3B0aW9ucyk7XHJcbiAgICAgICAgVmFzdGdhbWUuZ2V0Q29udGV4dCgpLmRlZmluZUFjdG9yKG5hbWUsIGFjdG9yKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGFjdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQobmFtZTogc3RyaW5nKTogQWN0b3Ige1xyXG4gICAgICAgIHJldHVybiBWYXN0Z2FtZS5nZXRDb250ZXh0KCkuZ2V0QWN0b3IobmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gbGlmZWN5Y2xlIGNhbGxiYWNrc1xyXG4gICAgcHJpdmF0ZSBvbkNyZWF0ZUNhbGxiYWNrOiBMaWZlY3ljbGVDYWxsYmFjaztcclxuICAgIHByaXZhdGUgb25TdGVwQ2FsbGJhY2s6IExpZmVjeWNsZUNhbGxiYWNrO1xyXG4gICAgcHJpdmF0ZSBvbkRlc3Ryb3lDYWxsYmFjazogTGlmZWN5Y2xlQ2FsbGJhY2s7XHJcbiAgICBwcml2YXRlIG9uRHJhd0NhbGxiYWNrOiBBY3Rvckluc3RhbmNlRHJhd0V2ZW50O1xyXG5cclxuICAgIC8vIGlucHV0IGNhbGxiYWNrc1xyXG4gICAgcHJpdmF0ZSBvbkNsaWNrQ2FsbGJhY2s6IENsaWNrRXZlbnRDYWxsYmFjaztcclxuXHJcbiAgICAvLyBnYW1lIGV2ZW50IGhhbmRsZXJzXHJcbiAgICByZWFkb25seSBjb2xsaXNpb25IYW5kbGVyczogeyBbaW5kZXg6IHN0cmluZ106IENvbGxpc2lvbkNhbGxiYWNrIH0gPSB7fTtcclxuICAgIHJlYWRvbmx5IGFjdG9yRXZlbnRIYW5kbGVyczogeyBbaW5kZXg6IHN0cmluZ10gOiBBY3RvckV2ZW50Q2FsbGJhY2sgfSA9IHt9O1xyXG5cclxuICAgIHJlYWRvbmx5IGJvdW5kYXJ5OiBCb3VuZGFyeTtcclxuICAgIHJlYWRvbmx5IG5hbWU6IHN0cmluZztcclxuICAgIHJlYWRvbmx5IHNwcml0ZTogU3ByaXRlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgb3B0aW9uczogQWN0b3JPcHRpb25zID0ge30pIHtcclxuICAgICAgICB0aGlzLmJvdW5kYXJ5ID0gb3B0aW9ucy5ib3VuZGFyeTtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuc3ByaXRlID0gb3B0aW9ucy5zcHJpdGU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGhhc0NyZWF0ZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gISF0aGlzLm9uQ3JlYXRlQ2FsbGJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgb25DcmVhdGUoY2FsbGJhY2s6IExpZmVjeWNsZUNhbGxiYWNrKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vbkNyZWF0ZUNhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgY2FsbENyZWF0ZShzZWxmSW5zdGFuY2U6IEFjdG9ySW5zdGFuY2UpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9uQ3JlYXRlQ2FsbGJhY2soc2VsZkluc3RhbmNlKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGVwKHNlbGZJbnN0YW5jZTogQWN0b3JJbnN0YW5jZSkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh0aGlzLmhhc1N0ZXApIHtcclxuICAgICAgICAgICAgdGhpcy5jYWxsU3RlcChzZWxmSW5zdGFuY2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2VsZkluc3RhbmNlLnByZXZpb3VzWCA9IHNlbGZJbnN0YW5jZS54O1xyXG4gICAgICAgIHNlbGZJbnN0YW5jZS5wcmV2aW91c1kgPSBzZWxmSW5zdGFuY2UueTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaGFzU3RlcCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gISF0aGlzLm9uU3RlcENhbGxiYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU3RlcChjYWxsYmFjazogTGlmZWN5Y2xlQ2FsbGJhY2spOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9uU3RlcENhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgY2FsbFN0ZXAoc2VsZkluc3RhbmNlOiBBY3Rvckluc3RhbmNlKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vblN0ZXBDYWxsYmFjayhzZWxmSW5zdGFuY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBoYXNEcmF3KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAhIXRoaXMub25EcmF3Q2FsbGJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgb25EcmF3KGNhbGxiYWNrOiBBY3Rvckluc3RhbmNlRHJhd0V2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vbkRyYXdDYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbGxEcmF3KHNlbGZJbnN0YW5jZTogQWN0b3JJbnN0YW5jZSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMub25EcmF3Q2FsbGJhY2soc2VsZkluc3RhbmNlKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaGFzQ2xpY2soKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuICEhdGhpcy5vbkNsaWNrQ2FsbGJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljayhjYWxsYmFjazogQ2xpY2tFdmVudENhbGxiYWNrKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vbkNsaWNrQ2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgIH1cclxuXHJcbiAgICBjYWxsQ2xpY2soc2VsZkluc3RhbmNlOiBBY3Rvckluc3RhbmNlLCBldmVudDogUG9pbnRlcklucHV0RXZlbnQpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9uQ2xpY2tDYWxsYmFjayhzZWxmSW5zdGFuY2UsIGV2ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNvbGxpZGUoYWN0b3JOYW1lOiBzdHJpbmcsIGNhbGxiYWNrOiBDb2xsaXNpb25DYWxsYmFjayk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY29sbGlzaW9uSGFuZGxlcnNbYWN0b3JOYW1lXSA9IGNhbGxiYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRXZlbnQoZXZlbnROYW1lOiBzdHJpbmcsIGNhbGxiYWNrOiBBY3RvckV2ZW50Q2FsbGJhY2spOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmFjdG9yRXZlbnRIYW5kbGVyc1tldmVudE5hbWVdID0gY2FsbGJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGhhc0Rlc3Ryb3koKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuICEhdGhpcy5vbkRlc3Ryb3lDYWxsYmFjaztcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koY2FsbGJhY2s6IExpZmVjeWNsZUNhbGxiYWNrKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vbkRlc3Ryb3lDYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbGxEZXN0cm95KHNlbGZJbnN0YW5jZTogQWN0b3JJbnN0YW5jZSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMub25EZXN0cm95Q2FsbGJhY2soc2VsZkluc3RhbmNlKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFjdG9ySW5zdGFuY2Uge1xyXG4gICAgcHJpdmF0ZSBzdGF0ZTogQWN0b3JTdGF0ZTtcclxuXHJcbiAgICBwcmV2aW91c1g6IG51bWJlcjtcclxuICAgIHByZXZpb3VzWTogbnVtYmVyO1xyXG4gICAgc3BlZWQ6IG51bWJlciA9IDA7XHJcbiAgICBkaXJlY3Rpb246IG51bWJlciA9IERpcmVjdGlvbi5SaWdodDtcclxuICAgIHZpc2libGU6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIHJlYWRvbmx5IHNwcml0ZUFuaW1hdGlvbjogU3ByaXRlQW5pbWF0aW9uO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm9vbTogUm9vbSwgcHVibGljIHBhcmVudDogQWN0b3IsIHB1YmxpYyBpZDogbnVtYmVyLCBwdWJsaWMgeDogbnVtYmVyID0gMCwgcHVibGljIHk6IG51bWJlciA9IDApIHtcclxuICAgICAgICB0aGlzLnN0YXRlID0gQWN0b3JTdGF0ZS5BY3RpdmU7XHJcbiAgICAgICAgdGhpcy5wcmV2aW91c1ggPSB0aGlzLng7XHJcbiAgICAgICAgdGhpcy5wcmV2aW91c1kgPSB0aGlzLnk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnBhcmVudC5zcHJpdGUpIHtcclxuICAgICAgICAgICAgdGhpcy5zcHJpdGVBbmltYXRpb24gPSBuZXcgU3ByaXRlQW5pbWF0aW9uKHRoaXMucGFyZW50LnNwcml0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBoYXNNb3ZlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMueCAhPT0gdGhpcy5wcmV2aW91c1ggfHwgdGhpcy55ICE9PSB0aGlzLnByZXZpb3VzWSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGlzQWN0aXZlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5zdGF0ZSA9PT0gQWN0b3JTdGF0ZS5BY3RpdmUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBib3VuZGFyeSgpOiBCb3VuZGFyeSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50LmJvdW5kYXJ5O1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBhbmltYXRpb24oKTogU3ByaXRlQW5pbWF0aW9uIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zcHJpdGVBbmltYXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgZHJhd1Nwcml0ZShzcHJpdGU6IFNwcml0ZSwgeDogbnVtYmVyLCB5OiBudW1iZXIsIGZyYW1lOiBudW1iZXIgPSAwKSB7XHJcbiAgICAgICAgdGhpcy5yb29tLmRyYXdTcHJpdGUoc3ByaXRlLCB4LCB5LCBmcmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmFpc2VFdmVudChldmVudE5hbWU6IHN0cmluZywgZXZlbnRBcmdzPzogYW55KTogdm9pZCB7XHJcbiAgICAgICAgLy8gcmVnaXN0ZXIgYW4gZXZlbnQgdG8gZmlyZSBpbW1lZGlhdGVseVxyXG4gICAgICAgIHRoaXMucmFpc2VFdmVudFdoZW4oZXZlbnROYW1lLCAoKSA9PiB0cnVlLCBldmVudEFyZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIHJhaXNlRXZlbnRXaGVuKGV2ZW50TmFtZTogc3RyaW5nLCBjb25kaXRpb25DYWxsYmFjazogKCkgPT4gYm9vbGVhbiwgZXZlbnRBcmdzOiBhbnkgPSB7fSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2V0R2FtZUNvbnRleHRFdmVudEFyZ3MoZXZlbnRBcmdzKTtcclxuXHJcbiAgICAgICAgbGV0IGNhbGxiYWNrOiBBY3RvckV2ZW50Q2FsbGJhY2sgPSB0aGlzLnBhcmVudC5hY3RvckV2ZW50SGFuZGxlcnNbZXZlbnROYW1lXTtcclxuXHJcbiAgICAgICAgaWYgKCFjYWxsYmFjaykge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEF0dGVtcHRpbmcgdG8gcmFpc2UgdW5kZWZpbmVkIEV2ZW50OiAke2V2ZW50TmFtZX1gKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIERlZmVycmVkRXZlbnQucmVnaXN0ZXIobmV3IERlZmVycmVkRXZlbnQoY29uZGl0aW9uQ2FsbGJhY2ssIGNhbGxiYWNrLmJpbmQobnVsbCwgdGhpcywgZXZlbnRBcmdzKSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0R2FtZUNvbnRleHRFdmVudEFyZ3MoZXZlbnRBcmdzOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBldmVudEFyZ3MuZ2FtZSA9IHtcclxuICAgICAgICAgICAgY3VycmVudFJvb206IFZhc3RnYW1lLmdldENvbnRleHQoKS5nZXRDdXJyZW50Um9vbSgpLFxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgZGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnN0YXRlID0gQWN0b3JTdGF0ZS5EZXN0cm95ZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgY29sbGlkZXNXaXRoKG90aGVyOiBBY3Rvckluc3RhbmNlKTogYm9vbGVhbiB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmhhc01vdmVkICYmIHRoaXMuYm91bmRhcnkgJiYgb3RoZXIuYm91bmRhcnkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYm91bmRhcnkuYXRQb3NpdGlvbih0aGlzLngsIHRoaXMueSkuY29sbGlkZXNXaXRoKG90aGVyLmJvdW5kYXJ5LmF0UG9zaXRpb24ob3RoZXIueCwgb3RoZXIueSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE1vdmVtZW50T2Zmc2V0WCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBNYXRoVXRpbC5nZXRMZW5ndGhEaXJlY3Rpb25YKHRoaXMuc3BlZWQgKiAxMDAsIHRoaXMuZGlyZWN0aW9uKSAvIDEwMDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRNb3ZlbWVudE9mZnNldFkoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gTWF0aFV0aWwuZ2V0TGVuZ3RoRGlyZWN0aW9uWSh0aGlzLnNwZWVkICogMTAwLCB0aGlzLmRpcmVjdGlvbikgLyAxMDA7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UG9zaXRpb25SZWxhdGl2ZSh4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2V0UG9zaXRpb24odGhpcy54ICsgeCwgdGhpcy55ICsgeSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UG9zaXRpb24oeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnByZXZpb3VzWCA9IHRoaXMueDtcclxuICAgICAgICB0aGlzLnByZXZpb3VzWSA9IHRoaXMueTtcclxuXHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmUoc3BlZWQ6IG51bWJlciwgZGlyZWN0aW9uPzogRGlyZWN0aW9uKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IHNwZWVkO1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIG9jY3VwaWVzUG9zaXRpb24oeDogbnVtYmVyLCB5OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ib3VuZGFyeSA/IHRoaXMuYm91bmRhcnkuYXRQb3NpdGlvbih0aGlzLngsIHRoaXMueSkuY29udGFpbnNQb3NpdGlvbih4LCB5KSA6IGZhbHNlO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvYWN0b3IudHMiLCJpbXBvcnQgeyBBY3RvciwgQWN0b3JJbnN0YW5jZSB9IGZyb20gJy4vYWN0b3InO1xyXG5pbXBvcnQgeyBEaXJlY3Rpb24gfSBmcm9tICcuL2VudW0nO1xyXG5pbXBvcnQgeyBSb29tIH0gZnJvbSAnLi9yb29tJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgR3JpZENsaWNrQ2FsbGJhY2sge1xyXG4gICAgKGdyaWRDbGlja0V2ZW50OiBHcmlkQ2xpY2tFdmVudCk6IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHcmlkQ2xpY2tFdmVudCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBncmlkOiBHcmlkLFxyXG4gICAgICAgIHByaXZhdGUgeDogbnVtYmVyLCBcclxuICAgICAgICBwcml2YXRlIHk6IG51bWJlcikge1xyXG4gICAgfVxyXG5cclxuICAgIGdldENlbGwoKTogR3JpZENlbGwge1xyXG4gICAgICAgIGxldCBjZWxsWCA9IHRoaXMueCAtIHRoaXMueCAlIHRoaXMuZ3JpZC50aWxlU2l6ZTtcclxuICAgICAgICBsZXQgY2VsbFkgPSB0aGlzLnkgLSB0aGlzLnkgJSB0aGlzLmdyaWQudGlsZVNpemU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIG5ldyBHcmlkQ2VsbCh0aGlzLmdyaWQsIGNlbGxYLCBjZWxsWSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHcmlkQ2VsbCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBncmlkOiBHcmlkLCBwdWJsaWMgeDogbnVtYmVyLCBwdWJsaWMgeTogbnVtYmVyKSB7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWRqYWNlbnRDZWxsKGRpcmVjdGlvbjogRGlyZWN0aW9uKTogR3JpZENlbGwge1xyXG4gICAgICAgIGxldCBvZmZzZXRYID0gMDtcclxuICAgICAgICBsZXQgb2Zmc2V0WSA9IDA7XHJcblxyXG4gICAgICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGNhc2UgRGlyZWN0aW9uLkRvd246XHJcbiAgICAgICAgICAgICAgICBvZmZzZXRZID0gdGhpcy5ncmlkLnRpbGVTaXplO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRGlyZWN0aW9uLkxlZnQ6XHJcbiAgICAgICAgICAgICAgICBvZmZzZXRYID0gLXRoaXMuZ3JpZC50aWxlU2l6ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIERpcmVjdGlvbi5SaWdodDpcclxuICAgICAgICAgICAgICAgIG9mZnNldFggPSB0aGlzLmdyaWQudGlsZVNpemU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBEaXJlY3Rpb24uVXA6XHJcbiAgICAgICAgICAgICAgICBvZmZzZXRZID0gLXRoaXMuZ3JpZC50aWxlU2l6ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBHcmlkQ2VsbCh0aGlzLmdyaWQsIHRoaXMueCArIG9mZnNldFgsIHRoaXMueSArIG9mZnNldFkpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENvbnRlbnRzKCk6IEFjdG9ySW5zdGFuY2VbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZC5yb29tLmdldEluc3RhbmNlc0F0UG9zaXRpb24odGhpcy54ICsgdGhpcy5ncmlkLnRpbGVTaXplIC8gMiwgdGhpcy55ICsgdGhpcy5ncmlkLnRpbGVTaXplIC8gMik7XHJcbiAgICB9XHJcblxyXG4gICAgY29udGFpbnNJbnN0YW5jZShpbnN0YW5jZTogQWN0b3JJbnN0YW5jZSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldENvbnRlbnRzKCkuc29tZShjb250ZW50cyA9PiBjb250ZW50cyA9PT0gaW5zdGFuY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnRhaW5zSW5zdGFuY2VPZihhY3RvcjogQWN0b3IpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRDb250ZW50cygpLnNvbWUoY29udGVudHMgPT4gY29udGVudHMucGFyZW50ID09PSBhY3Rvcik7XHJcbiAgICB9XHJcblxyXG4gICAgaXNGcmVlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAhdGhpcy5nZXRDb250ZW50cygpLmxlbmd0aDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdyaWQge1xyXG4gICAgcHJpdmF0ZSBfb25DbGljazogR3JpZENsaWNrQ2FsbGJhY2s7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcmVhZG9ubHkgdGlsZVNpemU6IG51bWJlcixcclxuICAgICAgICByZWFkb25seSByb29tOiBSb29tKSB7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGljayhjYWxsYmFjazogR3JpZENsaWNrQ2FsbGJhY2spOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9vbkNsaWNrID0gY2FsbGJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgcmFpc2VDbGlja0V2ZW50KHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGluc3RhbmNlcyA9IHRoaXMucm9vbS5nZXRJbnN0YW5jZXNBdFBvc2l0aW9uKHgsIHkpO1xyXG4gICAgICAgIGxldCBldmVudCA9IG5ldyBHcmlkQ2xpY2tFdmVudCh0aGlzLCB4LCB5KTtcclxuXHJcbiAgICAgICAgdGhpcy5fb25DbGljayhldmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2VsbEF0UG9zaXRpb24oeDogbnVtYmVyLCB5OiBudW1iZXIpOiBHcmlkQ2VsbCB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBHcmlkQ2VsbCh0aGlzLCB4LCB5KTtcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvZ3JpZC50cyIsImltcG9ydCB7IEFjdG9ySW5zdGFuY2UgfSBmcm9tICcuL2FjdG9yJztcclxuaW1wb3J0IHsgQm91bmRhcnkgfSBmcm9tICcuL2JvdW5kYXJ5JztcclxuaW1wb3J0IHsgR2FtZUNhbnZhc0hUTUwyRCB9IGZyb20gJy4vY2FudmFzJztcclxuXHJcbmVudW0gVmlld01vZGUge1xyXG4gICAgU2FtZVBvc2l0aW9uID0gMSxcclxuICAgIENlbnRlciA9IDIsXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBWaWV3IHtcclxuXHJcbiAgICBwcml2YXRlIHZpZXdNb2RlOiBWaWV3TW9kZTtcclxuICAgIHByaXZhdGUgZm9sbG93SW5zdGFuY2U6IEFjdG9ySW5zdGFuY2U7XHJcbiAgICBwcml2YXRlIGF0dGFjaG1lbnRzOiBBY3Rvckluc3RhbmNlQXR0YWNoZW1lbnRbXSA9IFtdO1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgeDogbnVtYmVyLCBcclxuICAgICAgICBwdWJsaWMgeTogbnVtYmVyLCBcclxuICAgICAgICBwdWJsaWMgcmVhZG9ubHkgd2lkdGg6IG51bWJlciwgXHJcbiAgICAgICAgcHVibGljIHJlYWRvbmx5IGhlaWdodDogbnVtYmVyKSB7XHJcbiAgICB9XHJcblxyXG4gICAgZm9sbG93KGFjdG9ySW5zdGFuY2U6IEFjdG9ySW5zdGFuY2UsIGNlbnRlcjogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgdGhpcy52aWV3TW9kZSA9IGNlbnRlciA/IFZpZXdNb2RlLkNlbnRlciA6IFZpZXdNb2RlLlNhbWVQb3NpdGlvbjtcclxuICAgICAgICB0aGlzLmZvbGxvd0luc3RhbmNlID0gYWN0b3JJbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBhdHRhY2goYWN0b3JJbnN0YW5jZTogQWN0b3JJbnN0YW5jZSwgb2Zmc2V0WDogbnVtYmVyLCBvZmZzZXRZOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmF0dGFjaG1lbnRzLnB1c2gobmV3IEFjdG9ySW5zdGFuY2VBdHRhY2hlbWVudCh0aGlzLCBhY3Rvckluc3RhbmNlLCBvZmZzZXRYLCBvZmZzZXRZKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuZm9sbG93SW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMudmlld01vZGUgPT09IFZpZXdNb2RlLkNlbnRlcikge1xyXG4gICAgICAgICAgICB0aGlzLmNlbnRlckFyb3VuZEJvdW5kYXJ5KHRoaXMuZm9sbG93SW5zdGFuY2UuYm91bmRhcnkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy54ID0gdGhpcy5mb2xsb3dJbnN0YW5jZS54IHx8IDA7XHJcbiAgICAgICAgICAgIHRoaXMueSA9IHRoaXMuZm9sbG93SW5zdGFuY2UueSB8fCAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5hdHRhY2htZW50cy5mb3JFYWNoKGF0dCA9PiBhdHQudXBkYXRlKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2VudGVyQXJvdW5kQm91bmRhcnkoYm91bmRhcnk6IEJvdW5kYXJ5KSB7XHJcblxyXG4gICAgICAgIGlmICghYm91bmRhcnkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBib3VuZGFyeSBpcyAke2JvdW5kYXJ5fWApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy54ID0gdGhpcy5mb2xsb3dJbnN0YW5jZS54ICsgKGJvdW5kYXJ5LndpZHRoIC8gMikgLSAodGhpcy53aWR0aCAvIDIpO1xyXG4gICAgICAgIHRoaXMueSA9IHRoaXMuZm9sbG93SW5zdGFuY2UueSArIChib3VuZGFyeS5oZWlnaHQgLyAyKSAtICh0aGlzLmhlaWdodCAvIDIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBBY3Rvckluc3RhbmNlQXR0YWNoZW1lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIHBhcmVudDogVmlldyxcclxuICAgICAgICBwcml2YXRlIGluc3RhbmNlOiBBY3Rvckluc3RhbmNlLFxyXG4gICAgICAgIHByaXZhdGUgb2Zmc2V0WDogbnVtYmVyLFxyXG4gICAgICAgIHByaXZhdGUgb2Zmc2V0WTogbnVtYmVyKSB7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICB0aGlzLmluc3RhbmNlLnggPSB0aGlzLnBhcmVudC54ICsgdGhpcy5vZmZzZXRYO1xyXG4gICAgICAgIHRoaXMuaW5zdGFuY2UueSA9IHRoaXMucGFyZW50LnkgKyB0aGlzLm9mZnNldFk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL3ZpZXcudHMiLCJpbXBvcnQgeyBBY3Rvckluc3RhbmNlIH0gZnJvbSAnLi9hY3Rvcic7XHJcbmltcG9ydCB7IEJhY2tncm91bmQsIFJvb20gfSBmcm9tICcuL3Jvb20nO1xyXG5pbXBvcnQgeyBTcHJpdGUsIFNwcml0ZUFuaW1hdGlvbiwgU3ByaXRlVHJhbnNmb3JtYXRpb24gfSBmcm9tICcuL3Nwcml0ZSc7XHJcbmltcG9ydCB7IFZpZXcgfSBmcm9tICcuL3ZpZXcnO1xyXG5cclxuY29uc3QgRGVmYXVsdEhlaWdodCA9IDQ4MDtcclxuY29uc3QgRGVmYXVsdFdpZHRoID0gNjQwO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBHYW1lQ2FudmFzT3B0aW9ucyB7XHJcbiAgICBoZWlnaHQ6IG51bWJlcjtcclxuICAgIHdpZHRoOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQWN0b3JJbnN0YW5jZURyYXdFdmVudCB7XHJcbiAgICAoc2VsZjogQWN0b3JJbnN0YW5jZSk6IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUm9vbURyYXdFdmVudCB7XHJcbiAgICAoc2VsZjogUm9vbSk6IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgR2FtZUNhbnZhcyB7XHJcbiAgICBpbml0KG9wdGlvbnM6IEdhbWVDYW52YXNPcHRpb25zKTogdm9pZDtcclxuICAgIGdldENvbnRleHQoKTogR2FtZUNhbnZhc0NvbnRleHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lQ2FudmFzSFRNTDJEIGltcGxlbWVudHMgR2FtZUNhbnZhcyB7XHJcbiAgICByZWFkb25seSBnYW1lQ2FudmFzQ29udGV4dDogR2FtZUNhbnZhc0NvbnRleHQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIHJlYWRvbmx5IGNhbnZhc0VsZW1lbnQ6IEhUTUxDYW52YXNFbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy5nYW1lQ2FudmFzQ29udGV4dCA9IG5ldyBHYW1lQ2FudmFzQ29udGV4dDJEKHRoaXMuY2FudmFzRWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q29udGV4dCgpOiBHYW1lQ2FudmFzQ29udGV4dCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2FtZUNhbnZhc0NvbnRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdChvcHRpb25zOiBHYW1lQ2FudmFzT3B0aW9ucykge1xyXG4gICAgICAgIGlmICh0aGlzLmNhbnZhc0VsZW1lbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5jYW52YXNFbGVtZW50LmhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0O1xyXG4gICAgICAgICAgICB0aGlzLmNhbnZhc0VsZW1lbnQud2lkdGggPSBvcHRpb25zLndpZHRoO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBHYW1lQ2FudmFzQ29udGV4dCB7XHJcbiAgICBjbGVhcigpOiB2b2lkO1xyXG4gICAgZmlsbCh4OiBudW1iZXIsIHk6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIGNvbG9yOiBzdHJpbmcpOiB2b2lkO1xyXG4gICAgZHJhd1Nwcml0ZShzcHJpdGU6IFNwcml0ZSwgeDogbnVtYmVyLCB5OiBudW1iZXIsIGZyYW1lPzogbnVtYmVyKTogdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWVDYW52YXNDb250ZXh0MkQgaW1wbGVtZW50cyBHYW1lQ2FudmFzQ29udGV4dCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjYW52YXNFbGVtZW50OiBIVE1MQ2FudmFzRWxlbWVudCkge1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0IGNhbnZhc0NvbnRleHQyRCgpOiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNhbnZhc0VsZW1lbnQuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhcigpIHtcclxuICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQyRC5jbGVhclJlY3QoMCwgMCwgdGhpcy5jYW52YXNFbGVtZW50LndpZHRoLCB0aGlzLmNhbnZhc0VsZW1lbnQuaGVpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBmaWxsKHg6IG51bWJlciwgeTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgY29sb3I6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuY2FudmFzQ29udGV4dDJELmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuY2FudmFzQ29udGV4dDJELnJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0MkQuZmlsbFN0eWxlID0gY29sb3I7XHJcbiAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0MkQuZmlsbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXdTcHJpdGUoc3ByaXRlOiBTcHJpdGUsIHg6IG51bWJlciwgeTogbnVtYmVyLCBmcmFtZTogbnVtYmVyID0gMCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGRlZmF1bHRPcGFjaXR5ID0gMTtcclxuXHJcbiAgICAgICAgbGV0IGltYWdlID0gc3ByaXRlLmltYWdlO1xyXG4gICAgICAgIGxldCBmcmFtZUJvcmRlciA9IHNwcml0ZS5mcmFtZUJvcmRlciB8fCAwO1xyXG4gICAgICAgIGxldCB3aWR0aCA9IHNwcml0ZS53aWR0aDtcclxuICAgICAgICBsZXQgaGVpZ2h0ID0gc3ByaXRlLmhlaWdodDtcclxuXHJcbiAgICAgICAgbGV0IGZyYW1lT2Zmc2V0ID0gZnJhbWUgKiBmcmFtZUJvcmRlcjtcclxuXHJcbiAgICAgICAgLy8gc2V0IG9wYWNpdHlcclxuICAgICAgICBsZXQgb3BhY2l0eSA9IHNwcml0ZS5nZXRUcmFuc2Zvcm0oU3ByaXRlVHJhbnNmb3JtYXRpb24uT3BhY2l0eSk7XHJcbiAgICAgICAgbGV0IHByZXZpb3VzT3BhY2l0eTogbnVtYmVyID0gbnVsbDtcclxuXHJcbiAgICAgICAgaWYgKG9wYWNpdHkgIT09IGRlZmF1bHRPcGFjaXR5ICYmIG9wYWNpdHkgIT09IG51bGwgJiYgb3BhY2l0eSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHByZXZpb3VzT3BhY2l0eSA9IHRoaXMuY2FudmFzQ29udGV4dDJELmdsb2JhbEFscGhhO1xyXG4gICAgICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQyRC5nbG9iYWxBbHBoYSA9IG9wYWNpdHk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQyRC5kcmF3SW1hZ2UoaW1hZ2UsIGZyYW1lICogd2lkdGggKyBmcmFtZU9mZnNldCwgMCwgd2lkdGgsIGhlaWdodCwgTWF0aC5mbG9vcih4KSwgTWF0aC5mbG9vcih5KSwgd2lkdGgsIGhlaWdodCk7XHJcblxyXG4gICAgICAgIC8vIHJlc2V0IG9wYWNpdHlcclxuICAgICAgICBpZiAocHJldmlvdXNPcGFjaXR5ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FudmFzQ29udGV4dDJELmdsb2JhbEFscGhhID0gcHJldmlvdXNPcGFjaXR5O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL2NhbnZhcy50cyIsImltcG9ydCB7IEFjdG9yIH0gZnJvbSAnLi9hY3Rvcic7XHJcbmltcG9ydCB7IEdhbWVDYW52YXMgfSBmcm9tICcuL2NhbnZhcyc7XHJcbmltcG9ydCB7IERlZmVycmVkRXZlbnQgfSBmcm9tICcuL2V2ZW50cyc7XHJcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnLi9pbnB1dCc7XHJcbmltcG9ydCB7IFJvb20gfSBmcm9tICcuL3Jvb20nO1xyXG5pbXBvcnQgeyBTcHJpdGUgfSBmcm9tICcuL3Nwcml0ZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZUNvbnRleHQge1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBhY3RvcnM6IHsgW2luZGV4OiBzdHJpbmddOiBBY3RvciB9ID0ge307XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGV2ZW50czogeyBbaW5kZXg6IG51bWJlcl06IERlZmVycmVkRXZlbnQgfSA9IHt9O1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSByb29tczogeyBbaW5kZXg6IHN0cmluZ106IFJvb20gfSA9IHt9O1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBzcHJpdGVzOiB7IFtpbmRleDogc3RyaW5nXTogU3ByaXRlfSA9IHt9O1xyXG5cclxuICAgIHByaXZhdGUgY3VycmVudFJvb206IFJvb207XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjYW52YXM6IEdhbWVDYW52YXMpIHtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDYW52YXMoKTogR2FtZUNhbnZhcyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FudmFzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGFjdG9yc1xyXG4gICAgZGVmaW5lQWN0b3IobmFtZTogc3RyaW5nLCBhY3RvcjogQWN0b3IpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5hY3RvcnNbbmFtZV0pIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBY3RvciAke25hbWV9IGhhcyBhbHJlYWR5IGJlZW4gZGVmaW5lZC5gKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYWN0b3JzW25hbWVdID0gYWN0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWN0b3IobmFtZTogc3RyaW5nKTogQWN0b3Ige1xyXG4gICAgICAgIGlmICghdGhpcy5hY3RvcnNbbmFtZV0pIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBY3RvciAke25hbWV9IGhhcyBub3QgYmVlbiBkZWZpbmVkLmApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWN0b3JzW25hbWVdO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGV2ZW50c1xyXG4gICAgcHJpdmF0ZSBuZXh0RXZlbnRJRCA9ICgoKSA9PiB7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRJRCA9IDA7XHJcbiAgICAgICAgcmV0dXJuICgoKSA9PiArK2N1cnJlbnRJRCk7XHJcbiAgICB9KSgpO1xyXG5cclxuICAgIHJlZ2lzdGVyRXZlbnQoZXZlbnQ6IERlZmVycmVkRXZlbnQpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmV2ZW50c1t0aGlzLm5leHRFdmVudElEKCldID0gZXZlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tBbmRGaXJlRXZlbnRzKCk6IHZvaWQge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGZvciAobGV0IGV2ZW50SUQgaW4gdGhpcy5ldmVudHMpIHtcclxuICAgICAgICAgICAgbGV0IGV2ZW50ID0gdGhpcy5ldmVudHNbZXZlbnRJRF07XHJcblxyXG4gICAgICAgICAgICBpZiAoZXZlbnQuY29uZGl0aW9uQ2FsbGJhY2soKSkge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQuYWN0aW9uQ2FsbGJhY2soKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQuZmlyZU9uY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5ldmVudHNbZXZlbnRJRF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcm9vbXNcclxuICAgIGRlZmluZVJvb20obmFtZTogc3RyaW5nLCByb29tOiBSb29tKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMucm9vbXNbbmFtZV0pIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBSb29tICR7bmFtZX0gaGFzIGFscmVhZHkgYmVlbiBkZWZpbmVkLmApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5yb29tc1tuYW1lXSA9IHJvb207XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Um9vbShuYW1lOiBzdHJpbmcpOiBSb29tIHtcclxuICAgICAgICBpZiAoIXRoaXMucm9vbXNbbmFtZV0pIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBSb29tICR7bmFtZX0gaGFzIG5vdCBiZWVuIGRlZmluZWQuYCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5yb29tc1tuYW1lXTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDdXJyZW50Um9vbSgpOiBSb29tIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50Um9vbTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRDdXJyZW50Um9vbShyb29tOiBSb29tKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50Um9vbSA9IHJvb207XHJcblxyXG4gICAgICAgIElucHV0LnJlZ2lzdGVyQ2xpY2tIYW5kbGVyKGV2ID0+IHJvb20uaGFuZGxlQ2xpY2soZXYpKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBzcHJpdGVzXHJcbiAgICBkZWZpbmVTcHJpdGUobmFtZTogc3RyaW5nLCBzcHJpdGU6IFNwcml0ZSk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLnNwcml0ZXNbbmFtZV0pIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBTcHJpdGUgJHtuYW1lfSBoYXMgYWxyZWFkeSBiZWVuIGRlZmluZWQuYCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNwcml0ZXNbbmFtZV0gPSBzcHJpdGU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U3ByaXRlKG5hbWU6IHN0cmluZyk6IFNwcml0ZSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnNwcml0ZXNbbmFtZV0pIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yIChgU3ByaXRlICR7bmFtZX0gaGFzIG5vdCBiZWVuIGRlZmluZWQuYCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5zcHJpdGVzW25hbWVdO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvZ2FtZS1jb250ZXh0LnRzIiwiaW1wb3J0IHsgR2FtZUNhbnZhc09wdGlvbnMsIEdhbWVDYW52YXMgfSBmcm9tICcuL2NhbnZhcyc7XHJcbmltcG9ydCB7IEdhbWVTdGF0ZSB9IGZyb20gJy4vZW51bSc7XHJcbmltcG9ydCB7IEdhbWVDb250ZXh0IH0gZnJvbSAnLi9nYW1lLWNvbnRleHQnO1xyXG5pbXBvcnQgeyBHYW1lT3B0aW9ucyB9IGZyb20gJy4vdmFzdGdhbWUnO1xyXG5cclxuY29uc3QgRGVmYXVsdEZQUyA9IDYwO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWVSdW5uZXIge1xyXG4gICAgcHJpdmF0ZSBzdGF0ZTogR2FtZVN0YXRlID0gR2FtZVN0YXRlLlBhdXNlZDtcclxuICAgIHJlYWRvbmx5IHRhcmdldEZQUzogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgb3B0aW9uczogR2FtZU9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLnRhcmdldEZQUyA9IG9wdGlvbnMudGFyZ2V0RlBTIHx8IERlZmF1bHRGUFM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGlzUnVubmluZygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZSA9PT0gR2FtZVN0YXRlLlJ1bm5pbmc7XHJcbiAgICB9XHJcblxyXG4gICAgcGF1c2UoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IEdhbWVTdGF0ZS5QYXVzZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoZ2FtZUNvbnRleHQ6IEdhbWVDb250ZXh0KTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHN0ZXBTaXplOiBudW1iZXIgPSAxIC8gdGhpcy50YXJnZXRGUFM7XHJcbiAgICAgICAgbGV0IG9mZnNldDogbnVtYmVyID0gMDtcclxuICAgICAgICBsZXQgcHJldmlvdXM6IG51bWJlciA9IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKTtcclxuXHJcbiAgICAgICAgbGV0IGNhbnZhc0RyYXdpbmdDb250ZXh0ID0gZ2FtZUNvbnRleHQuZ2V0Q2FudmFzKCkuZ2V0Q29udGV4dCgpO1xyXG5cclxuICAgICAgICBsZXQgZ2FtZUxvb3A6IEZyYW1lUmVxdWVzdENhbGxiYWNrID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcm9vbSA9IGdhbWVDb250ZXh0LmdldEN1cnJlbnRSb29tKCk7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50OiBudW1iZXIgPSB3aW5kb3cucGVyZm9ybWFuY2Uubm93KCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBvZmZzZXQgKz0gKE1hdGgubWluKDEsIChjdXJyZW50IC0gcHJldmlvdXMpIC8gMTAwMCkpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgd2hpbGUgKG9mZnNldCA+IHN0ZXBTaXplKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNSdW5uaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2FtZUNvbnRleHQuY2hlY2tBbmRGaXJlRXZlbnRzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcm9vbS5zdGVwKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgb2Zmc2V0IC09IHN0ZXBTaXplO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1J1bm5pbmcpIHtcclxuICAgICAgICAgICAgICAgIGNhbnZhc0RyYXdpbmdDb250ZXh0LmNsZWFyKCk7XHJcbiAgICAgICAgICAgICAgICByb29tLmRyYXcoY2FudmFzRHJhd2luZ0NvbnRleHQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwcmV2aW91cyA9IGN1cnJlbnQ7XHJcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gc3RhcnQgdGhlIGdhbWUgbG9vcFxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBHYW1lU3RhdGUuUnVubmluZztcclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvZ2FtZS1ydW5uZXIudHMiLCJpbXBvcnQgeyBWYXN0Z2FtZSB9IGZyb20gJy4vdmFzdGdhbWUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIERlZmVycmVkRXZlbnQge1xyXG5cclxuICAgIHN0YXRpYyByZWdpc3RlcihldmVudDogRGVmZXJyZWRFdmVudCk6IHZvaWQge1xyXG4gICAgICAgIFZhc3RnYW1lLmdldENvbnRleHQoKS5yZWdpc3RlckV2ZW50KGV2ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgcmVhZG9ubHkgY29uZGl0aW9uQ2FsbGJhY2s6ICgpID0+IGJvb2xlYW4sXHJcbiAgICAgICAgcHVibGljIHJlYWRvbmx5IGFjdGlvbkNhbGxiYWNrOiAoKSA9PiBhbnksXHJcbiAgICAgICAgcHVibGljIHJlYWRvbmx5IGZpcmVPbmNlOiBib29sZWFuID0gdHJ1ZSkge1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9ldmVudHMudHMiLCJleHBvcnQgY2xhc3MgTWF0aFV0aWwge1xyXG5cclxuICAgIHN0YXRpYyBnZXRMZW5ndGhEaXJlY3Rpb25YKGxlbmd0aDogbnVtYmVyLCBkaXJlY3Rpb246IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIGxlbmd0aCAqIE1hdGguY29zKGRpcmVjdGlvbiAqIChNYXRoLlBJIC8gMTgwKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldExlbmd0aERpcmVjdGlvblkobGVuZ3RoOiBudW1iZXIsIGRpcmVjdGlvbjogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIGxlbmd0aCAqIE1hdGguc2luKGRpcmVjdGlvbiAqIChNYXRoLlBJIC8gMTgwKSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS91dGlsLnRzIiwiaW1wb3J0IHsgU3ByaXRlIH0gZnJvbSAnLi9zcHJpdGUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBvc2l0aW9uZWRCb3VuZGFyeSB7XHJcbiAgICBwcml2YXRlIGhlaWdodDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSB3aWR0aDogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyB4OiBudW1iZXIsIHB1YmxpYyB5OiBudW1iZXIsIGJvdW5kYXJ5OiBCb3VuZGFyeSkge1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gYm91bmRhcnkuaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMud2lkdGggPSBib3VuZGFyeS53aWR0aDtcclxuICAgIH1cclxuXHJcbiAgICBjb2xsaWRlc1dpdGgob3RoZXI6IFBvc2l0aW9uZWRCb3VuZGFyeSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0aGlzLnggPiBvdGhlci54ICsgb3RoZXIud2lkdGggfHwgb3RoZXIueCA+PSB0aGlzLnggKyB0aGlzLndpZHRoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnkgPiBvdGhlci55ICsgb3RoZXIuaGVpZ2h0IHx8IG90aGVyLnkgPj0gdGhpcy55ICsgdGhpcy5oZWlnaHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgY29udGFpbnNQb3NpdGlvbih4OiBudW1iZXIsIHk6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0aGlzLnggPiB4IHx8IHggPiB0aGlzLnggKyB0aGlzLndpZHRoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnkgPiB5IHx8IHkgPiB0aGlzLnkgKyB0aGlzLmhlaWdodCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEJvdW5kYXJ5IHtcclxuXHJcbiAgICBzdGF0aWMgZnJvbVNwcml0ZShzcHJpdGU6IFNwcml0ZSwgc29saWQ6IGJvb2xlYW4gPSBmYWxzZSk6IEJvdW5kYXJ5IHtcclxuICAgICAgICByZXR1cm4gbmV3IEJvdW5kYXJ5KHNwcml0ZS5oZWlnaHQsIHNwcml0ZS53aWR0aCwgc29saWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBoZWlnaHQ6IG51bWJlciwgcHVibGljIHdpZHRoOiBudW1iZXIsIHB1YmxpYyBzb2xpZDogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgaWYgKGhlaWdodCA8PSAwIHx8IHdpZHRoIDw9IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdIZWlnaHQgYW5kIHdpZHRoIG11c3QgYm90aCBiZSBncmVhdGVyIHRoYW4gemVyby4nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXRQb3NpdGlvbih4OiBudW1iZXIsIHk6IG51bWJlcik6IFBvc2l0aW9uZWRCb3VuZGFyeSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQb3NpdGlvbmVkQm91bmRhcnkoeCwgeSwgdGhpcyk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9ib3VuZGFyeS50cyJdLCJzb3VyY2VSb290IjoiIn0=