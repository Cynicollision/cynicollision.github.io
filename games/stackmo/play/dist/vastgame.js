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
/* 2 */,
/* 3 */,
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
/* 6 */,
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
/* 13 */,
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
/* 15 */,
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



/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjlmM2U0MzkwMmUzNDJmZWFlOGIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS92YXN0Z2FtZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2VudW0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9pbnB1dC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL3Nwcml0ZS1hbmltYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9yb29tLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvYWN0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9ib3VuZGFyeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2FjdG9yLWluc3RhbmNlLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvZ3JpZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL3ZpZXcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9yb29tLWV4dC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2NhbnZhcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2dhbWUtY29udGV4dC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2dhbWUtcnVubmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvZXZlbnRzLnRzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvdXRpbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL3Nwcml0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUMsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQWlCRCwwQ0FBeUIsR0FBekIsVUFBMEIsS0FBYTtRQUNuQyxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsQ0FBQztRQUN4QyxJQUFJLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFFakIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ25CLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzdELE9BQU8sSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDckQsS0FBSyxJQUFJLFlBQVksQ0FBQztnQkFDdEIsUUFBUSxFQUFFLENBQUM7WUFDZixDQUFDO1FBQ0wsQ0FBQztRQUVELElBQUksWUFBWSxHQUFHLEtBQUssR0FBRyxXQUFXLENBQUM7UUFDdkMsSUFBSSxZQUFZLEdBQUcsUUFBUSxHQUFHLFdBQVcsQ0FBQztRQUMxQyxJQUFJLElBQUksR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUM7UUFDN0MsSUFBSSxJQUFJLEdBQUcsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDO1FBRWpELE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBQ0wsYUFBQztBQUFELENBQUMiLCJmaWxlIjoidmFzdGdhbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAyOWYzZTQzOTAyZTM0MmZlYWU4YiIsImltcG9ydCB7IEdhbWVDYW52YXNIVE1MMkQsIEdhbWVDYW52YXNDb250ZXh0LCBHYW1lQ2FudmFzT3B0aW9ucywgR2FtZUNhbnZhcyB9IGZyb20gJy4vY2FudmFzJztcclxuaW1wb3J0IHsgRGlyZWN0aW9uLCBLZXkgfSBmcm9tICcuL2VudW0nO1xyXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJy4vaW5wdXQnO1xyXG5pbXBvcnQgeyBHYW1lQ29udGV4dCB9IGZyb20gJy4vZ2FtZS1jb250ZXh0JztcclxuaW1wb3J0IHsgR2FtZVJ1bm5lciB9IGZyb20gJy4vZ2FtZS1ydW5uZXInO1xyXG5pbXBvcnQgeyBSb29tIH0gZnJvbSAnLi9yb29tJztcclxuXHJcbi8vIGV4cG9ydCBwdWJsaWMgbW9kdWxlc1xyXG5leHBvcnQgeyBBY3RvciB9IGZyb20gJy4vYWN0b3InO1xyXG5leHBvcnQgeyBBY3Rvckluc3RhbmNlIH0gZnJvbSAnLi9hY3Rvci1pbnN0YW5jZSc7XHJcbmV4cG9ydCB7IEJvdW5kYXJ5IH0gZnJvbSAnLi9ib3VuZGFyeSc7XHJcbmV4cG9ydCB7IERpcmVjdGlvbiwgS2V5IH1cclxuZXhwb3J0IHsgSW5wdXQgfSBmcm9tICcuL2lucHV0JztcclxuZXhwb3J0IHsgR3JpZCwgR3JpZENlbGwgfSBmcm9tICcuL2dyaWQnO1xyXG5leHBvcnQgeyBSb29tIH0gZnJvbSAnLi9yb29tJztcclxuZXhwb3J0IHsgR3JpZFJvb21CZWhhdmlvciwgVmlld2VkUm9vbUJlaGF2aW9yIH0gZnJvbSAnLi9yb29tLWV4dCc7XHJcbmV4cG9ydCB7IFNwcml0ZSB9IGZyb20gJy4vc3ByaXRlJztcclxuZXhwb3J0IHsgU3ByaXRlQW5pbWF0aW9uLCBTcHJpdGVUcmFuc2Zvcm1hdGlvbiB9IGZyb20gJy4vc3ByaXRlLWFuaW1hdGlvbic7XHJcbmV4cG9ydCB7IFZpZXcgfSBmcm9tICcuL3ZpZXcnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBHYW1lT3B0aW9ucyB7XHJcbiAgICBjYW52YXM/OiBHYW1lQ2FudmFzT3B0aW9ucztcclxuICAgIHRhcmdldEZQUz86IG51bWJlcjtcclxufVxyXG5cclxuY2xhc3MgVmFzdGdhbWVIVE1MMkQge1xyXG4gICAgcHJpdmF0ZSBjb250ZXh0OiBHYW1lQ29udGV4dDtcclxuICAgIHByaXZhdGUgcnVubmVyOiBHYW1lUnVubmVyO1xyXG5cclxuICAgIGluaXQoY2FudmFzRWxlbWVudElELCBvcHRpb25zKSB7XHJcbiAgICAgICAgSW5wdXQuaW5pdCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBlbGVtZW50ID0gPEhUTUxDYW52YXNFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNhbnZhc0VsZW1lbnRJRCk7XHJcbiAgICAgICAgbGV0IGNhbnZhczogR2FtZUNhbnZhcyA9IG5ldyBHYW1lQ2FudmFzSFRNTDJEKGVsZW1lbnQpO1xyXG4gICAgICAgIGNhbnZhcy5pbml0KG9wdGlvbnMuY2FudmFzKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gbmV3IEdhbWVDb250ZXh0KGNhbnZhcyk7XHJcbiAgICAgICAgdGhpcy5ydW5uZXIgPSBuZXcgR2FtZVJ1bm5lcihvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb250ZXh0KCk6IEdhbWVDb250ZXh0IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KHJvb21JRDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5zZXRSb29tKHJvb21JRCk7XHJcbiAgICAgICAgdGhpcy5ydW5uZXIuc3RhcnQodGhpcy5jb250ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRSb29tKHJvb21JRDogc3RyaW5nLCBzdGFydEFyZ3M/OiBhbnkpIHtcclxuICAgICAgICBsZXQgcm9vbSA9IFJvb20uZ2V0KHJvb21JRCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHByZXZpb3VzUm9vbSA9IHRoaXMuY29udGV4dC5nZXRDdXJyZW50Um9vbSgpO1xyXG4gICAgICAgIGlmIChwcmV2aW91c1Jvb20pIHtcclxuICAgICAgICAgICAgcHJldmlvdXNSb29tLmVuZCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jb250ZXh0LnNldEN1cnJlbnRSb29tKHJvb20pO1xyXG5cclxuICAgICAgICByb29tLl9jYWxsU3RhcnQoc3RhcnRBcmdzKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFZhc3RnYW1lIHtcclxuICAgIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IGdhbWUgPSBuZXcgVmFzdGdhbWVIVE1MMkQoKTtcclxuXHJcbiAgICBzdGF0aWMgaW5pdChjYW52YXNFbGVtZW50SUQ6IHN0cmluZywgb3B0aW9uczogR2FtZU9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLmdhbWUuaW5pdChjYW52YXNFbGVtZW50SUQsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzdGFydChpbml0aWFsUm9vbUlEOiBzdHJpbmcsICk6IFZhc3RnYW1lSFRNTDJEIHtcclxuICAgICAgICB0aGlzLmdhbWUuc3RhcnQoaW5pdGlhbFJvb21JRCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmdhbWU7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHNldFJvb20ocm9vbUlEOiBzdHJpbmcsIHN0YXJ0QXJncz86IGFueSkge1xyXG4gICAgICAgIHRoaXMuZ2FtZS5zZXRSb29tKHJvb21JRCwgc3RhcnRBcmdzKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgX2dldENvbnRleHQoKTogR2FtZUNvbnRleHQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdhbWUuZ2V0Q29udGV4dCgpO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvdmFzdGdhbWUudHMiLCJleHBvcnQgZW51bSBBY3RvclN0YXRlIHtcclxuICAgIEFjdGl2ZSA9IDEsXHJcbiAgICBEZXN0cm95ZWQgPSAyLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBEaXJlY3Rpb24ge1xyXG4gICAgUmlnaHQgPSAwLFxyXG4gICAgRG93biA9IDkwLFxyXG4gICAgTGVmdCA9IDE4MCxcclxuICAgIFVwID0gMjcwLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBHYW1lU3RhdGUge1xyXG4gICAgUnVubmluZyA9IDEsXHJcbiAgICBQYXVzZWQgPSAyLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBLZXkge1xyXG4gICAgQW55ID0gLTEsXHJcbiAgICBTcGFjZSA9IDMyLFxyXG4gICAgTGVmdCA9IDM3LFxyXG4gICAgVXAgPSAzOCxcclxuICAgIFJpZ2h0ID0gMzksXHJcbiAgICBEb3duID0gNDAsXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9lbnVtLnRzIiwiaW1wb3J0IHsgS2V5IH0gZnJvbSAnLi9lbnVtJztcclxuXHJcbmV4cG9ydCBjbGFzcyBJbnB1dCB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBjbGlja0hhbmRsZXJzOiBDb25jcmV0ZUV2ZW50SGFuZGxlcjxQb2ludGVySW5wdXRFdmVudD5bXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMga2V5Ym9hcmRIYW5kbGVyczogeyBbY29kZTogbnVtYmVyXTogQ29uY3JldGVFdmVudEhhbmRsZXI8S2V5Ym9hcmRFdmVudD4gfSA9IHt9O1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMga2V5Ym9hcmRBY3Rpdml0eTogeyBbY29kZTogbnVtYmVyXTogYm9vbGVhbiB9ID0ge307XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgX2FjdGl2ZVBvaW50ZXJFdmVudDogUG9pbnRlcklucHV0RXZlbnQgPSBudWxsO1xyXG4gICAgc3RhdGljIGdldCBjbGlja0FjdGl2ZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gISFJbnB1dC5fYWN0aXZlUG9pbnRlckV2ZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgYWN0aXZlUG9pbnRlckV2ZW50KCk6IFBvaW50ZXJJbnB1dEV2ZW50IHtcclxuICAgICAgICByZXR1cm4gSW5wdXQuX2FjdGl2ZVBvaW50ZXJFdmVudDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc3RhdGljIGluaXQoKSB7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHRyYWNrQWN0aXZlTW91c2VQb3NpdGlvbih0aGlzOiBhbnksIGV2OiBNb3VzZUV2ZW50KSB7XHJcbiAgICAgICAgICAgIElucHV0Ll9hY3RpdmVQb2ludGVyRXZlbnQuY3VycmVudFggPSBnZXRNb3VzZUV2ZW50WChldik7XHJcbiAgICAgICAgICAgIElucHV0Ll9hY3RpdmVQb2ludGVyRXZlbnQuY3VycmVudFkgPSBnZXRNb3VzZUV2ZW50WShldik7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gdHJhY2tBY3RpdmVUb3VjaFBvc2l0aW9uKGV2OiBUb3VjaEV2ZW50KSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkub25tb3VzZW1vdmUgPSBudWxsO1xyXG4gICAgICAgICAgICBJbnB1dC5fYWN0aXZlUG9pbnRlckV2ZW50LmN1cnJlbnRYID0gZ2V0VG91Y2hFdmVudFgoZXYpO1xyXG4gICAgICAgICAgICBJbnB1dC5fYWN0aXZlUG9pbnRlckV2ZW50LmN1cnJlbnRZID0gZ2V0VG91Y2hFdmVudFkoZXYpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGxldCByYWlzZVBvaW50ZXJFdmVudCA9IChldjogUG9pbnRlcklucHV0RXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKElucHV0Ll9hY3RpdmVQb2ludGVyRXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgSW5wdXQuX2FjdGl2ZVBvaW50ZXJFdmVudCA9IGV2O1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5Lm9ubW91c2Vtb3ZlID0gIHRyYWNrQWN0aXZlTW91c2VQb3NpdGlvbjtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5vbnRvdWNobW92ZSA9IHRyYWNrQWN0aXZlVG91Y2hQb3NpdGlvbjtcclxuXHJcbiAgICAgICAgICAgIGlmIChJbnB1dC5jbGlja0hhbmRsZXJzLmxlbmd0aCkge1xyXG5cclxuICAgICAgICAgICAgICAgIElucHV0LmNsaWNrSGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcjogQ29uY3JldGVFdmVudEhhbmRsZXI8UG9pbnRlcklucHV0RXZlbnQ+KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhhbmRsZXIuaXNBY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlci5jYWxsYmFjayhldik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBsZXQgZW5kUG9pbnRlckV2ZW50ID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBJbnB1dC5fYWN0aXZlUG9pbnRlckV2ZW50ID0gbnVsbDtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5vbm1vdXNlbW92ZSA9IG51bGw7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkub250b3VjaG1vdmUgPSBudWxsO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vIHJlZ2lzdGVyIG1vdXNlL3RvdWNoIGlucHV0IFxyXG4gICAgICAgIGRvY3VtZW50LmJvZHkub25tb3VzZWRvd24gPSBmdW5jdGlvbih0aGlzOiBhbnksIGV2OiBNb3VzZUV2ZW50KSB7XHJcbiAgICAgICAgICAgIHJhaXNlUG9pbnRlckV2ZW50KFBvaW50ZXJJbnB1dEV2ZW50LmZyb21Nb3VzZUV2ZW50KGV2KSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5Lm9udG91Y2hzdGFydCA9IGZ1bmN0aW9uIChldjogVG91Y2hFdmVudCkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5Lm9ubW91c2Vkb3duID0gbnVsbDtcclxuICAgICAgICAgICAgcmFpc2VQb2ludGVyRXZlbnQoUG9pbnRlcklucHV0RXZlbnQuZnJvbVRvdWNoRXZlbnQoZXYpKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkub25tb3VzZXVwID0gZW5kUG9pbnRlckV2ZW50O1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkub250b3VjaGVuZCA9IGVuZFBvaW50ZXJFdmVudDtcclxuXHJcbiAgICAgICAgLy8gcmVnaXN0ZXIga2V5Ym9hcmQgaW5wdXRcclxuICAgICAgICBkb2N1bWVudC5ib2R5Lm9ua2V5ZG93biA9IChldjogS2V5Ym9hcmRFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQga2V5Q29kZSA9IGV2LmtleUNvZGUgfHwgZXYuY29kZVxyXG4gICAgICAgICAgICBsZXQgaGFuZGxlcjogQ29uY3JldGVFdmVudEhhbmRsZXI8S2V5Ym9hcmRFdmVudD4gPSB0aGlzLmtleWJvYXJkSGFuZGxlcnNba2V5Q29kZV07XHJcblxyXG4gICAgICAgICAgICBpZiAoaGFuZGxlciAmJiBoYW5kbGVyLmlzQWN0aXZlICYmICF0aGlzLmtleWJvYXJkQWN0aXZpdHlba2V5Q29kZV0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMua2V5Ym9hcmRBY3Rpdml0eVtrZXlDb2RlXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVyLmNhbGxiYWNrKGV2KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IGdsb2JhbEhhbmRsZXIgPSB0aGlzLmtleWJvYXJkSGFuZGxlcnNbS2V5LkFueV07XHJcbiAgICAgICAgICAgIGlmIChnbG9iYWxIYW5kbGVyICYmIGdsb2JhbEhhbmRsZXIuaXNBY3RpdmUgJiYgIXRoaXMua2V5Ym9hcmRBY3Rpdml0eVtLZXkuQW55XSkgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMua2V5Ym9hcmRBY3Rpdml0eVtLZXkuQW55XSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBnbG9iYWxIYW5kbGVyLmNhbGxiYWNrKGV2KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5vbmtleXVwID0gKGV2OiBLZXlib2FyZEV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBrZXlDb2RlID0gZXYua2V5Q29kZSB8fCBldi5jb2RlXHJcbiAgICAgICAgICAgIGxldCBoYW5kbGVyOiBDb25jcmV0ZUV2ZW50SGFuZGxlcjxLZXlib2FyZEV2ZW50PiA9IHRoaXMua2V5Ym9hcmRIYW5kbGVyc1trZXlDb2RlXTtcclxuICAgICAgICAgICAgdGhpcy5rZXlib2FyZEFjdGl2aXR5W0tleS5BbnldID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICBpZiAoaGFuZGxlciAmJiBoYW5kbGVyLmlzQWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmtleWJvYXJkQWN0aXZpdHlba2V5Q29kZV0gPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHJlZ2lzdGVyQ2xpY2tIYW5kbGVyKGNhbGxiYWNrOiAoZXZlbnQ6IFBvaW50ZXJJbnB1dEV2ZW50KSA9PiB2b2lkKTogQ29uY3JldGVFdmVudEhhbmRsZXI8UG9pbnRlcklucHV0RXZlbnQ+IHtcclxuICAgICAgICBsZXQgY2xpY2tIYW5kbGVyID0gbmV3IENvbmNyZXRlRXZlbnRIYW5kbGVyPFBvaW50ZXJJbnB1dEV2ZW50PihjYWxsYmFjayk7O1xyXG4gICAgICAgIElucHV0LmNsaWNrSGFuZGxlcnMucHVzaChjbGlja0hhbmRsZXIpO1xyXG5cclxuICAgICAgICByZXR1cm4gY2xpY2tIYW5kbGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyByZWdpc3RlcktleUhhbmRsZXIoa2V5OiBLZXksIGNhbGxiYWNrOiAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IHZvaWQpOiBDb25jcmV0ZUV2ZW50SGFuZGxlcjxLZXlib2FyZEV2ZW50PiB7XHJcbiAgICAgICAgbGV0IGtleUhhbmRsZXIgPSBuZXcgQ29uY3JldGVFdmVudEhhbmRsZXI8S2V5Ym9hcmRFdmVudD4oY2FsbGJhY2spO1xyXG4gICAgICAgIElucHV0LmtleWJvYXJkSGFuZGxlcnNba2V5XSA9IGtleUhhbmRsZXJcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4ga2V5SGFuZGxlcjtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMga2V5RG93bihrZXk6IEtleSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAhIXRoaXMua2V5Ym9hcmRBY3Rpdml0eVtrZXldO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEV2ZW50SGFuZGxlciB7XHJcbiAgICBjYWxsYmFjazogKGV2ZW50OiBhbnkpID0+IHZvaWQ7XHJcbiAgICBkaXNwb3NlOiAoKSA9PiB2b2lkO1xyXG4gICAgc2xlZXA6ICgpID0+IHZvaWQ7XHJcbiAgICB3YWtlOiAoKSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ29uY3JldGVFdmVudEhhbmRsZXI8VD4gaW1wbGVtZW50cyBFdmVudEhhbmRsZXIge1xyXG4gICAgaXNBbGl2ZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBpc0F3YWtlOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgY2FsbGJhY2s6IChldmVudDogVCkgPT4gdm9pZCkge1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBpc0FjdGl2ZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pc0FsaXZlICYmIHRoaXMuaXNBd2FrZTtcclxuICAgIH1cclxuICAgIGRpc3Bvc2UoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pc0FsaXZlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBzbGVlcCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmlzQXdha2UgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIHdha2UoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pc0F3YWtlID0gdHJ1ZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBvaW50ZXJJbnB1dEV2ZW50IHtcclxuICAgIHg6IG51bWJlcjtcclxuICAgIHk6IG51bWJlcjtcclxuXHJcbiAgICBjdXJyZW50WDogbnVtYmVyO1xyXG4gICAgY3VycmVudFk6IG51bWJlcjtcclxuXHJcbiAgICBzdGF0aWMgZnJvbU1vdXNlRXZlbnQoZXY6IE1vdXNlRXZlbnQpOiBQb2ludGVySW5wdXRFdmVudCB7XHJcbiAgICAgICAgbGV0IHggPSBnZXRNb3VzZUV2ZW50WChldik7XHJcbiAgICAgICAgbGV0IHkgPSBnZXRNb3VzZUV2ZW50WShldik7XHJcbiAgICAgICAgcmV0dXJuIHsgeDogeCwgeTogeSwgY3VycmVudFg6IHgsIGN1cnJlbnRZOiB5IH07XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGZyb21Ub3VjaEV2ZW50KGV2OiBUb3VjaEV2ZW50KTogUG9pbnRlcklucHV0RXZlbnQge1xyXG4gICAgICAgIGxldCB4ID0gZ2V0VG91Y2hFdmVudFgoZXYpO1xyXG4gICAgICAgIGxldCB5ID0gZ2V0VG91Y2hFdmVudFkoZXYpO1xyXG4gICAgICAgIHJldHVybiB7IHg6IHgsIHk6IHksIGN1cnJlbnRYOiB4LCBjdXJyZW50WTogeSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRNb3VzZUV2ZW50WChldjogTW91c2VFdmVudCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gZXYub2Zmc2V0WDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0TW91c2VFdmVudFkoZXY6IE1vdXNlRXZlbnQpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIGV2Lm9mZnNldFk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFRvdWNoRXZlbnRYKGV2OiBUb3VjaEV2ZW50KTogbnVtYmVyIHtcclxuICAgIGxldCB0b3VjaCA9IGV2LnRvdWNoZXNbMF07XHJcbiAgICByZXR1cm4gdG91Y2ggPyB0b3VjaC5jbGllbnRYIDogMFxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRUb3VjaEV2ZW50WShldjogVG91Y2hFdmVudCk6IG51bWJlciB7XHJcbiAgICBsZXQgdG91Y2ggPSBldi50b3VjaGVzWzBdO1xyXG4gICAgcmV0dXJuIHRvdWNoID8gdG91Y2guY2xpZW50WSA6IDBcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvaW5wdXQudHMiLCJpbXBvcnQgeyBHYW1lQ2FudmFzQ29udGV4dCB9IGZyb20gJy4vY2FudmFzJztcclxuaW1wb3J0IHsgU3ByaXRlLCBEcmF3U3ByaXRlT3B0aW9ucyB9IGZyb20gJy4vc3ByaXRlJztcclxuXHJcbmV4cG9ydCBlbnVtIFNwcml0ZVRyYW5zZm9ybWF0aW9uIHtcclxuICAgIE9wYWNpdHkgPSAwLFxyXG4gICAgRnJhbWUgPSAxLFxyXG4gICAgVGlsZVggPSAyLFxyXG4gICAgVGlsZVkgPSAzLFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU3ByaXRlQW5pbWF0aW9uIHtcclxuICAgIHByaXZhdGUgdHJhbnNmb3JtYXRpb25zOiB7IFtpbmRleDogbnVtYmVyXTogU3ByaXRlVHJhbnNmb3JtYXRpb24gfSA9IHt9O1xyXG4gICAgcHJpdmF0ZSB0aW1lcjogYW55O1xyXG5cclxuICAgIGRlcHRoOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHByaXZhdGUgX3BhdXNlZDogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBnZXQgcGF1c2VkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wYXVzZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IocmVhZG9ubHkgc3ByaXRlOiBTcHJpdGUpIHtcclxuICAgICAgICB0aGlzLnNldFRyYW5zZm9ybShTcHJpdGVUcmFuc2Zvcm1hdGlvbi5GcmFtZSwgMCk7XHJcbiAgICAgICAgdGhpcy5zZXRUcmFuc2Zvcm0oU3ByaXRlVHJhbnNmb3JtYXRpb24uT3BhY2l0eSwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIsIGRlbGF5PzogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5zZXRUcmFuc2Zvcm0oU3ByaXRlVHJhbnNmb3JtYXRpb24uRnJhbWUsIHN0YXJ0KTtcclxuXHJcbiAgICAgICAgdGhpcy5fcGF1c2VkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0VHJhbnNmb3JtKFNwcml0ZVRyYW5zZm9ybWF0aW9uLkZyYW1lKSA9PT0gZW5kKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFRyYW5zZm9ybShTcHJpdGVUcmFuc2Zvcm1hdGlvbi5GcmFtZSwgc3RhcnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc2Zvcm0oU3ByaXRlVHJhbnNmb3JtYXRpb24uRnJhbWUsIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgZGVsYXkpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0b3AoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5fcGF1c2VkID0gdHJ1ZTtcclxuICAgICAgICBpZiAodGhpcy50aW1lcikge1xyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRGcmFtZShmcmFtZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zdG9wKCk7XHJcbiAgICAgICAgdGhpcy5zZXRUcmFuc2Zvcm0oU3ByaXRlVHJhbnNmb3JtYXRpb24uRnJhbWUsIGZyYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KGNhbnZhc0NvbnRleHQ6IEdhbWVDYW52YXNDb250ZXh0LCB4OiBudW1iZXIsIHk6IG51bWJlciwgb3B0aW9uczogRHJhd1Nwcml0ZU9wdGlvbnMgPSB7fSk6IHZvaWQge1xyXG4gICAgICAgIC8vIGZyYW1lXHJcbiAgICAgICAgbGV0IGZyYW1lID0gdGhpcy5nZXRUcmFuc2Zvcm0oU3ByaXRlVHJhbnNmb3JtYXRpb24uRnJhbWUpO1xyXG4gICAgICAgIGlmIChvcHRpb25zLmZyYW1lICE9PSBudWxsICYmIG9wdGlvbnMuZnJhbWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFRyYW5zZm9ybShTcHJpdGVUcmFuc2Zvcm1hdGlvbi5GcmFtZSwgb3B0aW9ucy5mcmFtZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBvcGFjaXR5XHJcbiAgICAgICAgbGV0IG9wYWNpdHkgPSB0aGlzLmdldFRyYW5zZm9ybShTcHJpdGVUcmFuc2Zvcm1hdGlvbi5PcGFjaXR5KTtcclxuICAgICAgICBpZiAob3B0aW9ucy5mcmFtZSAhPT0gbnVsbCAmJiBvcHRpb25zLmZyYW1lICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRUcmFuc2Zvcm0oU3ByaXRlVHJhbnNmb3JtYXRpb24uT3BhY2l0eSwgb3B0aW9ucy5vcGFjaXR5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBbc3JjWCwgc3JjWV0gPSB0aGlzLnNwcml0ZS5nZXRGcmFtZUltYWdlU291cmNlQ29vcmRzKGZyYW1lKTtcclxuICAgICAgICBcclxuICAgICAgICBjYW52YXNDb250ZXh0LmRyYXdJbWFnZSh0aGlzLnNwcml0ZS5pbWFnZSwgc3JjWCwgc3JjWSwgeCwgeSwgdGhpcy5zcHJpdGUud2lkdGgsIHRoaXMuc3ByaXRlLmhlaWdodCwgb3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdHJhbnNmb3JtYXRpb25zXHJcbiAgICBnZXRUcmFuc2Zvcm0odHJhbnNmb3JtYXRpb246IFNwcml0ZVRyYW5zZm9ybWF0aW9uKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50cmFuc2Zvcm1hdGlvbnNbdHJhbnNmb3JtYXRpb25dO1xyXG4gICAgfVxyXG5cclxuICAgIHRyYW5zZm9ybSh0cmFuc2Zvcm1hdGlvbjogU3ByaXRlVHJhbnNmb3JtYXRpb24sIGRlbHRhOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnRyYW5zZm9ybWF0aW9uc1t0cmFuc2Zvcm1hdGlvbl0gKz0gZGVsdGE7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VHJhbnNmb3JtKHRyYW5zZm9ybWF0aW9uOiBTcHJpdGVUcmFuc2Zvcm1hdGlvbiwgdmFsdWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudHJhbnNmb3JtYXRpb25zW3RyYW5zZm9ybWF0aW9uXSA9IHZhbHVlO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvc3ByaXRlLWFuaW1hdGlvbi50cyIsImltcG9ydCB7IEFjdG9yIH0gZnJvbSAnLi9hY3Rvcic7XHJcbmltcG9ydCB7IEFjdG9ySW5zdGFuY2UgfSBmcm9tICcuL2FjdG9yLWluc3RhbmNlJztcclxuaW1wb3J0IHsgR2FtZUNhbnZhc0NvbnRleHQgfSBmcm9tICcuL2NhbnZhcyc7XHJcbmltcG9ydCB7IEtleSB9IGZyb20gJy4vZW51bSc7XHJcbmltcG9ydCB7IEV2ZW50SGFuZGxlciwgSW5wdXQsIFBvaW50ZXJJbnB1dEV2ZW50IH0gZnJvbSAnLi9pbnB1dCc7XHJcbmltcG9ydCB7IERyYXdTcHJpdGVPcHRpb25zLCBTcHJpdGUgfSBmcm9tICcuL3Nwcml0ZSc7XHJcbmltcG9ydCB7IFZhc3RnYW1lIH0gZnJvbSAnLi92YXN0Z2FtZSc7XHJcbmltcG9ydCB7IEFjdG9ySUQgfSBmcm9tICcuLi9nYW1lL3V0aWwvZW51bSc7XHJcblxyXG5pbnRlcmZhY2UgUm9vbUxpZmVjeWNsZUNhbGxiYWNrIHtcclxuICAgIChzZWxmSW5zdGFuY2U6IFJvb20sIGFyZ3M/OiBhbnkpOiB2b2lkO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgUm9vbUxpZmVjeWNsZURyYXdDYWxsYmFjayB7XHJcbiAgICAoc2VsZkluc3RhbmNlOiBSb29tLCBjb250ZXh0OiBHYW1lQ2FudmFzQ29udGV4dCwgYXJncz86IGFueSk6IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBCYWNrZ3JvdW5kIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICByZWFkb25seSBjb2xvcjogc3RyaW5nLFxyXG4gICAgICAgIHJlYWRvbmx5IGNhbnZhc0NvbG9yOiBzdHJpbmcgPSAnIzAwMCcsIFxyXG4gICAgICAgIHJlYWRvbmx5IHdpZHRoOiBudW1iZXIsIFxyXG4gICAgICAgIHJlYWRvbmx5IGhlaWdodDogbnVtYmVyKSB7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUm9vbUJlaGF2aW9yIHtcclxuICAgIHByZUhhbmRsZUNsaWNrOiAoZXZlbnQ6IFBvaW50ZXJJbnB1dEV2ZW50KSA9PiB2b2lkO1xyXG4gICAgcG9zdEhhbmRsZUNsaWNrOiAoZXZlbnQ6IFBvaW50ZXJJbnB1dEV2ZW50KSA9PiB2b2lkO1xyXG4gICAgcG9zdFN0ZXA6IFJvb21MaWZlY3ljbGVDYWxsYmFjaztcclxuICAgIHByZURyYXc6IFJvb21MaWZlY3ljbGVEcmF3Q2FsbGJhY2s7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBSb29tIHtcclxuICAgIFxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgbmV4dEFjdG9ySW5zdGFuY2VJRCA9ICgoKSA9PiB7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRJRCA9IDA7XHJcbiAgICAgICAgcmV0dXJuICgoKSA9PiArK2N1cnJlbnRJRCk7XHJcbiAgICB9KSgpO1xyXG5cclxuICAgIHN0YXRpYyBkZWZpbmUobmFtZTogc3RyaW5nKTogUm9vbSB7XHJcbiAgICAgICAgbGV0IHJvb20gPSBuZXcgUm9vbShuYW1lKTtcclxuICAgICAgICBWYXN0Z2FtZS5fZ2V0Q29udGV4dCgpLmRlZmluZVJvb20obmFtZSwgcm9vbSk7XHJcbiAgICAgICAgcmV0dXJuIHJvb207XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldChuYW1lOiBzdHJpbmcpOiBSb29tIHtcclxuICAgICAgICByZXR1cm4gVmFzdGdhbWUuX2dldENvbnRleHQoKS5nZXRSb29tKG5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYWN0b3JJbnN0YW5jZU1hcDogeyBbaW5kZXg6IG51bWJlcl06IEFjdG9ySW5zdGFuY2UgfSA9IHt9O1xyXG4gICAgcHJpdmF0ZSBwcm9wZXJ0eU1hcDogeyBbaW5kZXg6IHN0cmluZ106IGFueSB9ID0ge307XHJcbiAgICBwcml2YXRlIGJlaGF2aW9yczogUm9vbUJlaGF2aW9yW10gPSBbXTtcclxuICAgIHByaXZhdGUgZXZlbnRIYW5kbGVyczogRXZlbnRIYW5kbGVyW10gPSBbXTtcclxuICAgIHByaXZhdGUgb25TdGFydENhbGxiYWNrOiBSb29tTGlmZWN5Y2xlQ2FsbGJhY2s7XHJcbiAgICBwcml2YXRlIG9uRHJhd0NhbGxiYWNrOiBSb29tTGlmZWN5Y2xlRHJhd0NhbGxiYWNrO1xyXG4gICAgXHJcbiAgICBiYWNrZ3JvdW5kOiBCYWNrZ3JvdW5kO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgbmFtZTogc3RyaW5nKSB7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0KHByb3BlcnR5TmFtZTogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5wcm9wZXJ0eU1hcFtwcm9wZXJ0eU5hbWVdID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0KHByb3BlcnR5TmFtZTogc3RyaW5nKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9wZXJ0eU1hcFtwcm9wZXJ0eU5hbWVdO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEJhY2tncm91bmQoY29sb3I6IHN0cmluZywgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIHBhZ2VDb2xvcj86IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZCA9IG5ldyBCYWNrZ3JvdW5kKGNvbG9yLCBwYWdlQ29sb3IsIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIGVuZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmFjdG9ySW5zdGFuY2VNYXAgPSB7fTtcclxuICAgICAgICB0aGlzLmJlaGF2aW9ycyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVycy5mb3JFYWNoKGV2ZW50SGFuZGxlciA9PiBldmVudEhhbmRsZXIuc2xlZXAoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gbWl4LWluIGJlaGF2aW9yc1xyXG4gICAgdXNlKGJlaGF2aW9yOiBSb29tQmVoYXZpb3IpOiBSb29tQmVoYXZpb3Ige1xyXG4gICAgICAgIHRoaXMuYmVoYXZpb3JzLnB1c2goYmVoYXZpb3IpO1xyXG4gICAgICAgIHJldHVybiBiZWhhdmlvcjtcclxuICAgIH1cclxuXHJcbiAgICAvLyBsaWZlY3ljbGUgY2FsbGJhY2tzXHJcbiAgICBvblN0YXJ0KGNhbGxiYWNrOiBSb29tTGlmZWN5Y2xlQ2FsbGJhY2spOiBSb29tIHtcclxuICAgICAgICB0aGlzLm9uU3RhcnRDYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIF9jYWxsU3RhcnQoYXJncz86IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVycy5mb3JFYWNoKGV2ZW50SGFuZGxlciA9PiBldmVudEhhbmRsZXIud2FrZSgpKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAodGhpcy5vblN0YXJ0Q2FsbGJhY2spIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25TdGFydENhbGxiYWNrKHRoaXMsIGFyZ3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIHtcclxuICAgICAgICAgICAgICAgIHRocm93IGBSb29tOiAke3RoaXMubmFtZX0uc3RhcnRgO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uRHJhdyhjYWxsYmFjazogUm9vbUxpZmVjeWNsZUNhbGxiYWNrKTogUm9vbSB7XHJcbiAgICAgICAgdGhpcy5vbkRyYXdDYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIF9jYWxsRHJhdyhhcmdzPzogYW55KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMub25EcmF3Q2FsbGJhY2spIHtcclxuICAgICAgICAgICAgbGV0IGNhbnZhc0NvbnRleHQgPSBWYXN0Z2FtZS5fZ2V0Q29udGV4dCgpLmdldENhbnZhc0NvbnRleHQoKTtcclxuXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uRHJhd0NhbGxiYWNrKHRoaXMsIGNhbnZhc0NvbnRleHQsIGFyZ3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIHtcclxuICAgICAgICAgICAgICAgIHRocm93IGBSb29tOiAke3RoaXMubmFtZX0uZHJhd2A7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZXZlbnQgY2FsbGJhY2tzXHJcbiAgICBvbkNsaWNrKGNhbGxiYWNrOiAoc2VsZjogUm9vbSwgZXZlbnQ6IFBvaW50ZXJJbnB1dEV2ZW50KSA9PiB2b2lkKTogUm9vbSB7XHJcbiAgICAgICAgbGV0IHJvb20gPSB0aGlzO1xyXG4gICAgICAgIGxldCBjbGlja0hhbmRsZXIgPSBJbnB1dC5yZWdpc3RlckNsaWNrSGFuZGxlcihmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgaWYgKFZhc3RnYW1lLl9nZXRDb250ZXh0KCkuZ2V0Q3VycmVudFJvb20oKSA9PT0gcm9vbSkge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2socm9vbSwgZXZlbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXJzLnB1c2goY2xpY2tIYW5kbGVyKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBvbktleShrZXk6IEtleSwgY2FsbGJhY2s6IChzZWxmOiBSb29tLCBldmVudDogS2V5Ym9hcmRFdmVudCkgPT4gdm9pZCk6IFJvb20ge1xyXG4gICAgICAgIGxldCByb29tID0gdGhpcztcclxuICAgICAgICBsZXQga2V5SGFuZGxlciA9IElucHV0LnJlZ2lzdGVyS2V5SGFuZGxlcihrZXksIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICBpZiAoVmFzdGdhbWUuX2dldENvbnRleHQoKS5nZXRDdXJyZW50Um9vbSgpID09PSByb29tKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhyb29tLCBldmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmV2ZW50SGFuZGxlcnMucHVzaChrZXlIYW5kbGVyKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICAvLyBzdGVwIGJlaGF2aW9yXHJcbiAgICBzdGVwKCk6IHZvaWQge1xyXG5cclxuICAgICAgICB0aGlzLmdldEluc3RhbmNlcygpLmZvckVhY2goaW5zdGFuY2UgPT4ge1xyXG4gICAgICAgICAgICBsZXQgcGFyZW50ID0gaW5zdGFuY2UucGFyZW50O1xyXG5cclxuICAgICAgICAgICAgaWYgKGluc3RhbmNlLmlzQWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICBpbnN0YW5jZS5fYXBwbHlNb3ZlbWVudCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tDb2xsaXNpb25zKGluc3RhbmNlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBwYXJlbnQuX2NhbGxTdGVwKGluc3RhbmNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGluc3RhbmNlLnBhcmVudC5fY2FsbERlc3Ryb3koaW5zdGFuY2UpO1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuYWN0b3JJbnN0YW5jZU1hcFtpbnN0YW5jZS5pZF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5iZWhhdmlvcnMuZm9yRWFjaChiZWhhdmlvciA9PiBiZWhhdmlvci5wb3N0U3RlcCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjaGVja0NvbGxpc2lvbnMoc2VsZkluc3RhbmNlOiBBY3Rvckluc3RhbmNlKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHBhcmVudCA9IHNlbGZJbnN0YW5jZS5wYXJlbnQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9yIChsZXQgYWN0b3JOYW1lIGluIHBhcmVudC5jb2xsaXNpb25IYW5kbGVycykge1xyXG5cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGxldCBjYWxsYmFjayA9IHBhcmVudC5jb2xsaXNpb25IYW5kbGVyc1thY3Rvck5hbWVdO1xyXG4gICAgICAgICAgICAgICAgbGV0IG90aGVyQWN0b3IgPSBBY3Rvci5nZXQoYWN0b3JOYW1lKTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgb3RoZXJJRCBpbiB0aGlzLmFjdG9ySW5zdGFuY2VNYXApIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgb3RoZXIgPSB0aGlzLmFjdG9ySW5zdGFuY2VNYXBbb3RoZXJJRF07XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICBpZiAob3RoZXIucGFyZW50ID09PSBvdGhlckFjdG9yKSB7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGZJbnN0YW5jZSAhPT0gb3RoZXIgJiYgc2VsZkluc3RhbmNlLmNvbGxpZGVzV2l0aChvdGhlcikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHNlbGZJbnN0YW5jZSwgb3RoZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIHtcclxuICAgICAgICAgICAgICAgIHRocm93IGBBY3RvcjogJHt0aGlzLm5hbWV9WyR7c2VsZkluc3RhbmNlLmlkfV0uY29sbGlzaW9uKCR7YWN0b3JOYW1lfSlgO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBkcmF3IGJlaGF2aW9yXHJcbiAgICBkcmF3KGNhbnZhc0NvbnRleHQ6IEdhbWVDYW52YXNDb250ZXh0KTogdm9pZCB7XHJcbiAgICAgICAgLy8gY2FsbCBwcmUtZHJhdyBiZWhhdmlvcnNcclxuICAgICAgICB0aGlzLmJlaGF2aW9ycy5mb3JFYWNoKGJlaGF2aW9yID0+IGJlaGF2aW9yLnByZURyYXcodGhpcywgY2FudmFzQ29udGV4dCkpO1xyXG5cclxuICAgICAgICAvLyBkcmF3IHJvb20gYmFja2dyb3VuZFxyXG4gICAgICAgIGlmICh0aGlzLmJhY2tncm91bmQpIHtcclxuICAgICAgICAgICAgY2FudmFzQ29udGV4dC5maWxsQXJlYSgtdGhpcy5iYWNrZ3JvdW5kLndpZHRoLCAtdGhpcy5iYWNrZ3JvdW5kLmhlaWdodCwgdGhpcy5iYWNrZ3JvdW5kLndpZHRoICogMywgdGhpcy5iYWNrZ3JvdW5kLmhlaWdodCAqIDMsIHRoaXMuYmFja2dyb3VuZC5jYW52YXNDb2xvcik7XHJcbiAgICAgICAgICAgIGNhbnZhc0NvbnRleHQuZmlsbCh0aGlzLmJhY2tncm91bmQud2lkdGgsIHRoaXMuYmFja2dyb3VuZC5oZWlnaHQsIHRoaXMuYmFja2dyb3VuZC5jb2xvcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgb3JkZXJlZEluc3RhbmNlcyA9IHRoaXMuZ2V0SW5zdGFuY2VzKCkuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKGIuYW5pbWF0aW9uID8gYi5hbmltYXRpb24uZGVwdGggOiAwKSAtIChhLmFuaW1hdGlvbiA/IGEuYW5pbWF0aW9uLmRlcHRoIDogMCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIG9yZGVyZWRJbnN0YW5jZXMuZm9yRWFjaChpbnN0YW5jZSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGRyYXcgc3ByaXRlc1xyXG4gICAgICAgICAgICBpZiAoaW5zdGFuY2UuYW5pbWF0aW9uICYmIGluc3RhbmNlLnZpc2libGUpIHtcclxuICAgICAgICAgICAgICAgIGluc3RhbmNlLmFuaW1hdGlvbi5kcmF3KGNhbnZhc0NvbnRleHQsIGluc3RhbmNlLngsIGluc3RhbmNlLnkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBjYWxsIGFjdG9yIGRyYXcgZXZlbnQgY2FsbGJhY2tzXHJcbiAgICAgICAgICAgIGluc3RhbmNlLnBhcmVudC5fY2FsbERyYXcoaW5zdGFuY2UpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBjYWxsIHJvb20gZHJhdyBldmVudCBjYWxsYmFja1xyXG4gICAgICAgIHRoaXMuX2NhbGxEcmF3KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ2xpY2soZXZlbnQ6IFBvaW50ZXJJbnB1dEV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgLy8gY2FsbCBwcmUtY2xpY2sgYmVoYXZpb3JzXHJcbiAgICAgICAgdGhpcy5iZWhhdmlvcnMuZm9yRWFjaChiZWhhdmlvciA9PiBiZWhhdmlvci5wcmVIYW5kbGVDbGljayhldmVudCkpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIHBhc3MgY2xpY2sgZXZlbnQgdG8gYWN0b3IgaW5zdGFuY2VzXHJcbiAgICAgICAgbGV0IGNsaWNrWCA9IGV2ZW50Lng7XHJcbiAgICAgICAgbGV0IGNsaWNrWSA9IGV2ZW50Lnk7XHJcblxyXG4gICAgICAgIHRoaXMuZ2V0SW5zdGFuY2VzQXRQb3NpdGlvbihjbGlja1gsIGNsaWNrWSkuZm9yRWFjaChpbnN0YW5jZSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBwYXJlbnQgPSBpbnN0YW5jZS5wYXJlbnQ7XHJcblxyXG4gICAgICAgICAgICBpZiAoaW5zdGFuY2Uub2NjdXBpZXNQb3NpdGlvbihjbGlja1gsIGNsaWNrWSkpIHtcclxuICAgICAgICAgICAgICAgIHBhcmVudC5fY2FsbENsaWNrKGluc3RhbmNlLCBldmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gY2FsbCBwb3N0LWNsaWNrIGJlaGF2aW9yc1xyXG4gICAgICAgIHRoaXMuYmVoYXZpb3JzLmZvckVhY2goYmVoYXZpb3IgPT4gYmVoYXZpb3IucG9zdEhhbmRsZUNsaWNrKGV2ZW50KSk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlQWN0b3IoYWN0b3JJRDogc3RyaW5nLCB4PzogbnVtYmVyLCB5PzogbnVtYmVyKTogQWN0b3JJbnN0YW5jZSB7XHJcbiAgICAgICAgbGV0IHBhcmVudEFjdG9yID0gQWN0b3IuZ2V0KGFjdG9ySUQpO1xyXG5cclxuICAgICAgICBsZXQgbmV3QWN0b3JJbnN0YW5jZUlEID0gUm9vbS5uZXh0QWN0b3JJbnN0YW5jZUlEKCk7XHJcbiAgICAgICAgbGV0IG5ld0luc3RhbmNlID0gbmV3IEFjdG9ySW5zdGFuY2UodGhpcywgcGFyZW50QWN0b3IsIG5ld0FjdG9ySW5zdGFuY2VJRCwgeCwgeSk7XHJcblxyXG4gICAgICAgIHRoaXMuYWN0b3JJbnN0YW5jZU1hcFtuZXdBY3Rvckluc3RhbmNlSURdID0gbmV3SW5zdGFuY2U7XHJcblxyXG4gICAgICAgIHBhcmVudEFjdG9yLl9jYWxsQ3JlYXRlKG5ld0luc3RhbmNlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ld0luc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEluc3RhbmNlKGFjdG9yVHlwZTogQWN0b3IpOiBBY3Rvckluc3RhbmNlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRJbnN0YW5jZXMoW2FjdG9yVHlwZV0pWzBdO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEluc3RhbmNlcyhhY3RvclR5cGVzOiBBY3RvcltdID0gW10pOiBBY3Rvckluc3RhbmNlW10ge1xyXG4gICAgICAgIGxldCBpbnN0YW5jZXMgPSBbXTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaW5zdGFuY2VJRCBpbiB0aGlzLmFjdG9ySW5zdGFuY2VNYXApIHtcclxuICAgICAgICAgICAgbGV0IGluc3RhbmNlID0gdGhpcy5hY3Rvckluc3RhbmNlTWFwW2luc3RhbmNlSURdXHJcblxyXG4gICAgICAgICAgICBpZiAoIWFjdG9yVHlwZXMubGVuZ3RoIHx8IChhY3RvclR5cGVzICYmIGFjdG9yVHlwZXMuaW5kZXhPZihpbnN0YW5jZS5wYXJlbnQpID4gLTEpKSB7XHJcbiAgICAgICAgICAgICAgICBpbnN0YW5jZXMucHVzaCh0aGlzLmFjdG9ySW5zdGFuY2VNYXBbaW5zdGFuY2VJRF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gaW5zdGFuY2VzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEluc3RhbmNlc0F0UG9zaXRpb24oeDogbnVtYmVyLCB5OiBudW1iZXIpOiBBY3Rvckluc3RhbmNlW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEluc3RhbmNlcygpLmZpbHRlcihpbnN0YW5jZSA9PiBpbnN0YW5jZS5vY2N1cGllc1Bvc2l0aW9uKHgsIHkpKTtcclxuICAgIH1cclxuXHJcbiAgICBpc1Bvc2l0aW9uRnJlZSh4OiBudW1iZXIsIHk6IG51bWJlciwgYWN0b3JUeXBlcz86IEFjdG9yW10pOiBib29sZWFuIHtcclxuXHJcbiAgICAgICAgaWYgKCFhY3RvclR5cGVzIHx8ICFhY3RvclR5cGVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gIXRoaXMuZ2V0SW5zdGFuY2VzQXRQb3NpdGlvbih4LCB5KS5sZW5ndGg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gIXRoaXMuZ2V0SW5zdGFuY2VzQXRQb3NpdGlvbih4LCB5KVxyXG4gICAgICAgICAgICAuZmlsdGVyKGFjdG9ySW5zdGFuY2UgPT4gYWN0b3JUeXBlcy5pbmRleE9mKGFjdG9ySW5zdGFuY2UucGFyZW50KSAhPT0gLTEpXHJcbiAgICAgICAgICAgIC5sZW5ndGg7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9yb29tLnRzIiwiaW1wb3J0IHsgQWN0b3JJbnN0YW5jZSwgQWN0b3JMaWZlY3ljbGVEcmF3Q2FsbGJhY2sgfSBmcm9tICcuL2FjdG9yLWluc3RhbmNlJztcclxuaW1wb3J0IHsgQm91bmRhcnkgfSBmcm9tICcuL2JvdW5kYXJ5JztcclxuaW1wb3J0IHsgUG9pbnRlcklucHV0RXZlbnQgfSBmcm9tICcuL2lucHV0JztcclxuaW1wb3J0IHsgU3ByaXRlIH0gZnJvbSAnLi9zcHJpdGUnO1xyXG5pbXBvcnQgeyBWYXN0Z2FtZSB9IGZyb20gJy4vdmFzdGdhbWUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBY3RvckxpZmVjeWNsZSB7XHJcbiAgICBvbkNyZWF0ZTogQWN0b3JMaWZlY3ljbGVDYWxsYmFjaztcclxuICAgIG9uU3RlcDogQWN0b3JMaWZlY3ljbGVDYWxsYmFjaztcclxuICAgIG9uRGVzdHJveTogQWN0b3JMaWZlY3ljbGVDYWxsYmFjaztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBY3RvckxpZmVjeWNsZUNhbGxiYWNrIHtcclxuICAgIChzZWxmOiBBY3Rvckluc3RhbmNlKTogdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBY3RvckV2ZW50Q2FsbGJhY2sge1xyXG4gICAgKHNlbGY/OiBBY3Rvckluc3RhbmNlLCBldmVudEFyZ3M/OiBhbnkpOiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFjdG9yT3B0aW9ucyB7XHJcbiAgICBib3VuZGFyeT86IEJvdW5kYXJ5O1xyXG4gICAgc3ByaXRlPzogU3ByaXRlO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQ2xpY2tFdmVudENhbGxiYWNrIHtcclxuICAgIChzZWxmOiBBY3Rvckluc3RhbmNlLCBldmVudDogUG9pbnRlcklucHV0RXZlbnQpOiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbGxpc2lvbkNhbGxiYWNrIHtcclxuICAgIChzZWxmOiBBY3Rvckluc3RhbmNlLCBvdGhlcjogQWN0b3JJbnN0YW5jZSk6IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBY3RvciB7XHJcblxyXG4gICAgc3RhdGljIGRlZmluZShuYW1lOiBzdHJpbmcsIG9wdGlvbnM/OiBBY3Rvck9wdGlvbnMpOiBBY3RvciB7XHJcbiAgICAgICAgbGV0IGFjdG9yID0gbmV3IEFjdG9yKG5hbWUsIG9wdGlvbnMpO1xyXG4gICAgICAgIFZhc3RnYW1lLl9nZXRDb250ZXh0KCkuZGVmaW5lQWN0b3IobmFtZSwgYWN0b3IpO1xyXG5cclxuICAgICAgICByZXR1cm4gYWN0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldChuYW1lOiBzdHJpbmcpOiBBY3RvciB7XHJcbiAgICAgICAgcmV0dXJuIFZhc3RnYW1lLl9nZXRDb250ZXh0KCkuZ2V0QWN0b3IobmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gbGlmZWN5Y2xlIGNhbGxiYWNrc1xyXG4gICAgcHJpdmF0ZSBvbkNyZWF0ZUNhbGxiYWNrOiBBY3RvckxpZmVjeWNsZUNhbGxiYWNrO1xyXG4gICAgcHJpdmF0ZSBvblN0ZXBDYWxsYmFjazogQWN0b3JMaWZlY3ljbGVDYWxsYmFjaztcclxuICAgIHByaXZhdGUgb25EZXN0cm95Q2FsbGJhY2s6IEFjdG9yTGlmZWN5Y2xlQ2FsbGJhY2s7XHJcbiAgICBwcml2YXRlIG9uRHJhd0NhbGxiYWNrOiBBY3RvckxpZmVjeWNsZURyYXdDYWxsYmFjaztcclxuXHJcbiAgICAvLyBpbnB1dCBjYWxsYmFja3NcclxuICAgIHByaXZhdGUgb25DbGlja0NhbGxiYWNrOiBDbGlja0V2ZW50Q2FsbGJhY2s7XHJcblxyXG4gICAgLy8gZ2FtZSBldmVudCBoYW5kbGVyc1xyXG4gICAgcmVhZG9ubHkgY29sbGlzaW9uSGFuZGxlcnM6IHsgW2luZGV4OiBzdHJpbmddOiBDb2xsaXNpb25DYWxsYmFjayB9ID0ge307XHJcbiAgICByZWFkb25seSBhY3RvckV2ZW50SGFuZGxlcnM6IHsgW2luZGV4OiBzdHJpbmddIDogQWN0b3JFdmVudENhbGxiYWNrIH0gPSB7fTtcclxuXHJcbiAgICByZWFkb25seSBuYW1lOiBzdHJpbmc7XHJcbiAgICBzcHJpdGU6IFNwcml0ZTtcclxuICAgIGJvdW5kYXJ5OiBCb3VuZGFyeTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIG9wdGlvbnM6IEFjdG9yT3B0aW9ucyA9IHt9KSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLnNwcml0ZSA9IG9wdGlvbnMuc3ByaXRlO1xyXG5cclxuICAgICAgICBpZiAob3B0aW9ucy5ib3VuZGFyeSkge1xyXG4gICAgICAgICAgICB0aGlzLmJvdW5kYXJ5ID0gb3B0aW9ucy5ib3VuZGFyeVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChvcHRpb25zLnNwcml0ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmJvdW5kYXJ5ID0gQm91bmRhcnkuZnJvbVNwcml0ZShvcHRpb25zLnNwcml0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldEdhbWVDb250ZXh0RXZlbnRBcmdzKGV2ZW50QXJnczogYW55KTogdm9pZCB7XHJcbiAgICAgICAgZXZlbnRBcmdzLmdhbWUgPSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRSb29tOiBWYXN0Z2FtZS5fZ2V0Q29udGV4dCgpLmdldEN1cnJlbnRSb29tKCksXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjcmVhdGVcclxuICAgIG9uQ3JlYXRlKGNhbGxiYWNrOiBBY3RvckxpZmVjeWNsZUNhbGxiYWNrKTogQWN0b3Ige1xyXG4gICAgICAgIHRoaXMub25DcmVhdGVDYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIF9jYWxsQ3JlYXRlKHNlbGZJbnN0YW5jZTogQWN0b3JJbnN0YW5jZSk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLm9uQ3JlYXRlQ2FsbGJhY2spIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25DcmVhdGVDYWxsYmFjayhzZWxmSW5zdGFuY2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIHtcclxuICAgICAgICAgICAgICAgIHRocm93IGBBY3RvcjogJHtzZWxmSW5zdGFuY2UucGFyZW50Lm5hbWV9WyR7c2VsZkluc3RhbmNlLmlkfV0uY3JlYXRlYDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBzdGVwXHJcbiAgICBvblN0ZXAoY2FsbGJhY2s6IEFjdG9yTGlmZWN5Y2xlQ2FsbGJhY2spOiBBY3RvciB7XHJcbiAgICAgICAgdGhpcy5vblN0ZXBDYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIF9jYWxsU3RlcChzZWxmSW5zdGFuY2U6IEFjdG9ySW5zdGFuY2UpIHtcclxuICAgICAgICBpZiAodGhpcy5vblN0ZXBDYWxsYmFjaykge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vblN0ZXBDYWxsYmFjayhzZWxmSW5zdGFuY2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIHtcclxuICAgICAgICAgICAgICAgIHRocm93IGBBY3RvcjogJHtzZWxmSW5zdGFuY2UucGFyZW50Lm5hbWV9WyR7c2VsZkluc3RhbmNlLmlkfV0uc3RlcGA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNlbGZJbnN0YW5jZS5wcmV2aW91c1ggPSBzZWxmSW5zdGFuY2UueDtcclxuICAgICAgICBzZWxmSW5zdGFuY2UucHJldmlvdXNZID0gc2VsZkluc3RhbmNlLnk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZHJhd1xyXG4gICAgb25EcmF3KGNhbGxiYWNrOiBBY3RvckxpZmVjeWNsZURyYXdDYWxsYmFjayk6IEFjdG9yIHtcclxuICAgICAgICB0aGlzLm9uRHJhd0NhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgX2NhbGxEcmF3KHNlbGZJbnN0YW5jZTogQWN0b3JJbnN0YW5jZSk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLm9uRHJhd0NhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIGxldCBjYW52YXNDb250ZXh0ID0gVmFzdGdhbWUuX2dldENvbnRleHQoKS5nZXRDYW52YXNDb250ZXh0KCk7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uRHJhd0NhbGxiYWNrKHNlbGZJbnN0YW5jZSwgY2FudmFzQ29udGV4dCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2gge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgYEFjdG9yOiAke3NlbGZJbnN0YW5jZS5wYXJlbnQubmFtZX1bJHtzZWxmSW5zdGFuY2UuaWR9XS5kcmF3YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBjbGljay90YXBcclxuICAgIG9uQ2xpY2soY2FsbGJhY2s6IENsaWNrRXZlbnRDYWxsYmFjayk6IEFjdG9yIHtcclxuICAgICAgICB0aGlzLm9uQ2xpY2tDYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIF9jYWxsQ2xpY2soc2VsZkluc3RhbmNlOiBBY3Rvckluc3RhbmNlLCBldmVudDogUG9pbnRlcklucHV0RXZlbnQpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5vbkNsaWNrQ2FsbGJhY2spIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25DbGlja0NhbGxiYWNrKHNlbGZJbnN0YW5jZSwgZXZlbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIHtcclxuICAgICAgICAgICAgICAgIHRocm93IGBBY3RvcjogJHtzZWxmSW5zdGFuY2UucGFyZW50Lm5hbWV9WyR7c2VsZkluc3RhbmNlLmlkfV0uY2xpY2tgO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGRlc3Ryb3lcclxuICAgIG9uRGVzdHJveShjYWxsYmFjazogQWN0b3JMaWZlY3ljbGVDYWxsYmFjayk6IEFjdG9yIHtcclxuICAgICAgICB0aGlzLm9uRGVzdHJveUNhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgX2NhbGxEZXN0cm95KHNlbGZJbnN0YW5jZTogQWN0b3JJbnN0YW5jZSk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLm9uRGVzdHJveUNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uRGVzdHJveUNhbGxiYWNrKHNlbGZJbnN0YW5jZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2gge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgYEFjdG9yOiAke3NlbGZJbnN0YW5jZS5wYXJlbnQubmFtZX1bJHtzZWxmSW5zdGFuY2UuaWR9XS5kZXN0cm95YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBjb2xsaXNpb25zIGFuZCBvdGhlciBldmVudHNcclxuICAgIG9uQ29sbGlkZShhY3Rvck5hbWU6IHN0cmluZywgY2FsbGJhY2s6IENvbGxpc2lvbkNhbGxiYWNrKTogQWN0b3Ige1xyXG4gICAgICAgIHRoaXMuY29sbGlzaW9uSGFuZGxlcnNbYWN0b3JOYW1lXSA9IGNhbGxiYWNrO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRXZlbnQoZXZlbnROYW1lOiBzdHJpbmcsIGNhbGxiYWNrOiBBY3RvckV2ZW50Q2FsbGJhY2spOiBBY3RvciB7XHJcbiAgICAgICAgdGhpcy5hY3RvckV2ZW50SGFuZGxlcnNbZXZlbnROYW1lXSA9IGNhbGxiYWNrO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9hY3Rvci50cyIsImltcG9ydCB7IFNwcml0ZSB9IGZyb20gJy4vc3ByaXRlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBQb3NpdGlvbmVkQm91bmRhcnkge1xyXG4gICAgcHJpdmF0ZSBoZWlnaHQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgd2lkdGg6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgeDogbnVtYmVyLCBwdWJsaWMgeTogbnVtYmVyLCBib3VuZGFyeTogQm91bmRhcnkpIHtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGJvdW5kYXJ5LmhlaWdodDtcclxuICAgICAgICB0aGlzLndpZHRoID0gYm91bmRhcnkud2lkdGg7XHJcbiAgICB9XHJcblxyXG4gICAgY29sbGlkZXNXaXRoKG90aGVyOiBQb3NpdGlvbmVkQm91bmRhcnkpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodGhpcy54ID4gb3RoZXIueCArIG90aGVyLndpZHRoIHx8IG90aGVyLnggPj0gdGhpcy54ICsgdGhpcy53aWR0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy55ID4gb3RoZXIueSArIG90aGVyLmhlaWdodCB8fCBvdGhlci55ID49IHRoaXMueSArIHRoaXMuaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnRhaW5zUG9zaXRpb24oeDogbnVtYmVyLCB5OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodGhpcy54ID4geCB8fCB4ID4gdGhpcy54ICsgdGhpcy53aWR0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy55ID4geSB8fCB5ID4gdGhpcy55ICsgdGhpcy5oZWlnaHQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBCb3VuZGFyeSB7XHJcblxyXG4gICAgc3RhdGljIGZyb21TcHJpdGUoc3ByaXRlOiBTcHJpdGUsIHNvbGlkOiBib29sZWFuID0gZmFsc2UpOiBCb3VuZGFyeSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBCb3VuZGFyeShzcHJpdGUuaGVpZ2h0LCBzcHJpdGUud2lkdGgsIHNvbGlkKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgaGVpZ2h0OiBudW1iZXIsIHB1YmxpYyB3aWR0aDogbnVtYmVyLCBwdWJsaWMgc29saWQ6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIGlmIChoZWlnaHQgPD0gMCB8fCB3aWR0aCA8PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSGVpZ2h0IGFuZCB3aWR0aCBtdXN0IGJvdGggYmUgZ3JlYXRlciB0aGFuIHplcm8uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGF0UG9zaXRpb24oeDogbnVtYmVyLCB5OiBudW1iZXIpOiBQb3NpdGlvbmVkQm91bmRhcnkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUG9zaXRpb25lZEJvdW5kYXJ5KHgsIHksIHRoaXMpO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvYm91bmRhcnkudHMiLCJpbXBvcnQgeyBBY3RvciwgQWN0b3JFdmVudENhbGxiYWNrIH0gZnJvbSAnLi9hY3Rvcic7XHJcbmltcG9ydCB7IEJvdW5kYXJ5IH0gZnJvbSAnLi9ib3VuZGFyeSc7XHJcbmltcG9ydCB7IEFjdG9yU3RhdGUgfSBmcm9tICcuL2VudW0nO1xyXG5pbXBvcnQgeyBEZWZlcnJlZEV2ZW50IH0gZnJvbSAnLi9ldmVudHMnO1xyXG5pbXBvcnQgeyBSb29tIH0gZnJvbSAnLi9yb29tJztcclxuaW1wb3J0IHsgU3ByaXRlLCBEcmF3U3ByaXRlT3B0aW9ucyB9IGZyb20gJy4vc3ByaXRlJztcclxuaW1wb3J0IHsgU3ByaXRlQW5pbWF0aW9uIH0gZnJvbSAnLi9zcHJpdGUtYW5pbWF0aW9uJztcclxuaW1wb3J0IHsgTWF0aFV0aWwgfSBmcm9tICcuL3V0aWwnO1xyXG5pbXBvcnQgeyBHYW1lQ2FudmFzQ29udGV4dCB9IGZyb20gJy4vY2FudmFzJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQWN0b3JMaWZlY3ljbGVEcmF3Q2FsbGJhY2sge1xyXG4gICAgKHNlbGY6IEFjdG9ySW5zdGFuY2UsIGNhbnZhc0NvbnRleHQ6IEdhbWVDYW52YXNDb250ZXh0KTogdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFjdG9ySW5zdGFuY2Uge1xyXG4gICAgcHJpdmF0ZSBzdGF0ZTogQWN0b3JTdGF0ZTtcclxuICAgIHByaXZhdGUgc3ByaXRlQW5pbWF0aW9uOiBTcHJpdGVBbmltYXRpb247XHJcblxyXG4gICAgcHJldmlvdXNYOiBudW1iZXI7XHJcbiAgICBwcmV2aW91c1k6IG51bWJlcjtcclxuICAgIHNwZWVkOiBudW1iZXIgPSAwO1xyXG4gICAgZGlyZWN0aW9uOiBudW1iZXIgPSAwO1xyXG4gICAgdmlzaWJsZTogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb29tOiBSb29tLCBwdWJsaWMgcGFyZW50OiBBY3RvciwgcHVibGljIGlkOiBudW1iZXIsIHB1YmxpYyB4OiBudW1iZXIgPSAwLCBwdWJsaWMgeTogbnVtYmVyID0gMCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBBY3RvclN0YXRlLkFjdGl2ZTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucGFyZW50LnNwcml0ZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNwcml0ZUFuaW1hdGlvbiA9IG5ldyBTcHJpdGVBbmltYXRpb24odGhpcy5wYXJlbnQuc3ByaXRlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGhhc01vdmVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAodGhpcy54ICE9PSB0aGlzLnByZXZpb3VzWCB8fCB0aGlzLnkgIT09IHRoaXMucHJldmlvdXNZKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaXNBY3RpdmUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLnN0YXRlID09PSBBY3RvclN0YXRlLkFjdGl2ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGJvdW5kYXJ5KCk6IEJvdW5kYXJ5IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnQuYm91bmRhcnk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGFuaW1hdGlvbigpOiBTcHJpdGVBbmltYXRpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNwcml0ZUFuaW1hdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICByYWlzZUV2ZW50KGV2ZW50TmFtZTogc3RyaW5nLCBldmVudEFyZ3M/OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICAvLyByZWdpc3RlciBhbiBldmVudCB0byBmaXJlIGltbWVkaWF0ZWx5XHJcbiAgICAgICAgdGhpcy5yYWlzZUV2ZW50V2hlbihldmVudE5hbWUsICgpID0+IHRydWUsIGV2ZW50QXJncyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmFpc2VFdmVudEluKGV2ZW50TmFtZTogc3RyaW5nLCBkZWxheTogbnVtYmVyLCBldmVudEFyZ3M/OiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5yYWlzZUV2ZW50KGV2ZW50TmFtZSwgZXZlbnRBcmdzKTtcclxuICAgICAgICB9LCBkZWxheSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmFpc2VFdmVudFdoZW4oZXZlbnROYW1lOiBzdHJpbmcsIGNvbmRpdGlvbkNhbGxiYWNrOiAoKSA9PiBib29sZWFuLCBldmVudEFyZ3M6IGFueSA9IHt9KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5wYXJlbnQuc2V0R2FtZUNvbnRleHRFdmVudEFyZ3MoZXZlbnRBcmdzKTtcclxuXHJcbiAgICAgICAgbGV0IGNhbGxiYWNrOiBBY3RvckV2ZW50Q2FsbGJhY2sgPSB0aGlzLnBhcmVudC5hY3RvckV2ZW50SGFuZGxlcnNbZXZlbnROYW1lXTtcclxuXHJcbiAgICAgICAgaWYgKCFjYWxsYmFjaykge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEF0dGVtcHRpbmcgdG8gcmFpc2UgdW5kZWZpbmVkIEV2ZW50OiAke2V2ZW50TmFtZX1gKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIERlZmVycmVkRXZlbnQucmVnaXN0ZXIobmV3IERlZmVycmVkRXZlbnQoY29uZGl0aW9uQ2FsbGJhY2ssIGNhbGxiYWNrLmJpbmQobnVsbCwgdGhpcywgZXZlbnRBcmdzKSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbGxpZGVzV2l0aChvdGhlcjogQWN0b3JJbnN0YW5jZSk6IGJvb2xlYW4ge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5oYXNNb3ZlZCAmJiB0aGlzLmJvdW5kYXJ5ICYmIG90aGVyLmJvdW5kYXJ5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJvdW5kYXJ5LmF0UG9zaXRpb24odGhpcy54LCB0aGlzLnkpLmNvbGxpZGVzV2l0aChvdGhlci5ib3VuZGFyeS5hdFBvc2l0aW9uKG90aGVyLngsIG90aGVyLnkpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRQb3NpdGlvblJlbGF0aXZlKHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZXRQb3NpdGlvbih0aGlzLnggKyB4LCB0aGlzLnkgKyB5KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRQb3NpdGlvbih4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucHJldmlvdXNYID0gdGhpcy54O1xyXG4gICAgICAgIHRoaXMucHJldmlvdXNZID0gdGhpcy55O1xyXG5cclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZShzcGVlZDogbnVtYmVyLCBkaXJlY3Rpb24/OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNwZWVkID0gc3BlZWQ7XHJcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XHJcbiAgICB9XHJcblxyXG4gICAgX2FwcGx5TW92ZW1lbnQoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3BlZWQgIT09IDApIHtcclxuICAgICAgICAgICAgbGV0IG9mZnNldFggPSBNYXRoLnJvdW5kKE1hdGhVdGlsLmdldExlbmd0aERpcmVjdGlvblgodGhpcy5zcGVlZCAqIDEwMCwgdGhpcy5kaXJlY3Rpb24pIC8gMTAwKTtcclxuICAgICAgICAgICAgbGV0IG9mZnNldFkgPSBNYXRoLnJvdW5kKE1hdGhVdGlsLmdldExlbmd0aERpcmVjdGlvblkodGhpcy5zcGVlZCAqIDEwMCwgdGhpcy5kaXJlY3Rpb24pIC8gMTAwKTtcclxuICAgIFxyXG4gICAgICAgICAgICBpZiAob2Zmc2V0WCAhPT0gMCB8fCBvZmZzZXRZICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFBvc2l0aW9uUmVsYXRpdmUob2Zmc2V0WCwgb2Zmc2V0WSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb2NjdXBpZXNQb3NpdGlvbih4OiBudW1iZXIsIHk6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJvdW5kYXJ5ID8gdGhpcy5ib3VuZGFyeS5hdFBvc2l0aW9uKHRoaXMueCwgdGhpcy55KS5jb250YWluc1Bvc2l0aW9uKHgsIHkpIDogZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnN0YXRlID0gQWN0b3JTdGF0ZS5EZXN0cm95ZWQ7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL2FjdG9yLWluc3RhbmNlLnRzIiwiaW1wb3J0IHsgQWN0b3IgfSBmcm9tICcuL2FjdG9yJztcclxuaW1wb3J0IHsgQWN0b3JJbnN0YW5jZSB9IGZyb20gJy4vYWN0b3ItaW5zdGFuY2UnO1xyXG5pbXBvcnQgeyBEaXJlY3Rpb24gfSBmcm9tICcuL2VudW0nO1xyXG5pbXBvcnQgeyBSb29tIH0gZnJvbSAnLi9yb29tJztcclxuaW1wb3J0IHsgQXJyYXkgfSBmcm9tICdlczYtc2hpbSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEdyaWRDbGlja0NhbGxiYWNrIHtcclxuICAgIChncmlkQ2xpY2tFdmVudDogR3JpZENsaWNrRXZlbnQpOiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR3JpZENsaWNrRXZlbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgZ3JpZDogR3JpZCxcclxuICAgICAgICBwcml2YXRlIHg6IG51bWJlciwgXHJcbiAgICAgICAgcHJpdmF0ZSB5OiBudW1iZXIpIHtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDZWxsKCk6IEdyaWRDZWxsIHtcclxuICAgICAgICBsZXQgY2VsbFggPSB0aGlzLnggLSB0aGlzLnggJSB0aGlzLmdyaWQudGlsZVNpemU7XHJcbiAgICAgICAgbGV0IGNlbGxZID0gdGhpcy55IC0gdGhpcy55ICUgdGhpcy5ncmlkLnRpbGVTaXplO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBuZXcgR3JpZENlbGwodGhpcy5ncmlkLCBjZWxsWCwgY2VsbFkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR3JpZENlbGwge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZ3JpZDogR3JpZCwgcmVhZG9ubHkgeDogbnVtYmVyLCByZWFkb25seSB5OiBudW1iZXIpIHtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc2l6ZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdyaWQudGlsZVNpemU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QWRqYWNlbnRDZWxsKGRpcmVjdGlvbjogRGlyZWN0aW9uKTogR3JpZENlbGwge1xyXG4gICAgICAgIGxldCBvZmZzZXRYID0gMDtcclxuICAgICAgICBsZXQgb2Zmc2V0WSA9IDA7XHJcblxyXG4gICAgICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICAgIGNhc2UgRGlyZWN0aW9uLkRvd246XHJcbiAgICAgICAgICAgICAgICBvZmZzZXRZID0gdGhpcy5ncmlkLnRpbGVTaXplO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRGlyZWN0aW9uLkxlZnQ6XHJcbiAgICAgICAgICAgICAgICBvZmZzZXRYID0gLXRoaXMuZ3JpZC50aWxlU2l6ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIERpcmVjdGlvbi5SaWdodDpcclxuICAgICAgICAgICAgICAgIG9mZnNldFggPSB0aGlzLmdyaWQudGlsZVNpemU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBEaXJlY3Rpb24uVXA6XHJcbiAgICAgICAgICAgICAgICBvZmZzZXRZID0gLXRoaXMuZ3JpZC50aWxlU2l6ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBHcmlkQ2VsbCh0aGlzLmdyaWQsIHRoaXMueCArIG9mZnNldFgsIHRoaXMueSArIG9mZnNldFkpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENvbnRlbnRzKCk6IEFjdG9ySW5zdGFuY2VbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZC5yb29tLmdldEluc3RhbmNlc0F0UG9zaXRpb24odGhpcy54ICsgdGhpcy5ncmlkLnRpbGVTaXplIC8gMiwgdGhpcy55ICsgdGhpcy5ncmlkLnRpbGVTaXplIC8gMik7XHJcbiAgICB9XHJcblxyXG4gICAgY29udGFpbnNJbnN0YW5jZShpbnN0YW5jZTogQWN0b3JJbnN0YW5jZSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldENvbnRlbnRzKCkuc29tZShjb250ZW50cyA9PiBjb250ZW50cyA9PT0gaW5zdGFuY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnRhaW5zSW5zdGFuY2VPZihhY3RvcjogQWN0b3IgfCBBY3RvcltdKTogYm9vbGVhbiB7XHJcblxyXG4gICAgICAgIGlmICgoPGFueT5hY3RvcikubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldENvbnRlbnRzKCkuc29tZShjb250ZW50cyA9PiAoPEFjdG9yW10+YWN0b3IpLmluZGV4T2YoY29udGVudHMucGFyZW50KSA+IC0xKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmdldENvbnRlbnRzKCkuc29tZShjb250ZW50cyA9PiBjb250ZW50cy5wYXJlbnQgPT09IGFjdG9yKTtcclxuICAgIH1cclxuXHJcbiAgICBpc0ZyZWUoYWN0b3JUeXBlcz86IEFjdG9yW10pOiBib29sZWFuIHtcclxuXHJcbiAgICAgICAgaWYgKCFhY3RvclR5cGVzIHx8ICFhY3RvclR5cGVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gIXRoaXMuZ2V0Q29udGVudHMoKS5sZW5ndGg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gIXRoaXMuZ2V0Q29udGVudHMoKVxyXG4gICAgICAgICAgICAuZmlsdGVyKGFjdG9ySW5zdGFuY2UgPT4gYWN0b3JUeXBlcy5pbmRleE9mKGFjdG9ySW5zdGFuY2UucGFyZW50KSAhPT0gLTEpXHJcbiAgICAgICAgICAgIC5sZW5ndGg7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHcmlkIHtcclxuICAgIHByaXZhdGUgX29uQ2xpY2s6IEdyaWRDbGlja0NhbGxiYWNrO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHJlYWRvbmx5IHRpbGVTaXplOiBudW1iZXIsXHJcbiAgICAgICAgcmVhZG9ubHkgcm9vbTogUm9vbSkge1xyXG4gICAgfVxyXG5cclxuICAgIGdldENlbGxBdFBvc2l0aW9uKHg6IG51bWJlciwgeTogbnVtYmVyKTogR3JpZENlbGwge1xyXG4gICAgICAgIHJldHVybiBuZXcgR3JpZENlbGwodGhpcywgeCwgeSk7XHJcbiAgICB9XHJcblxyXG4gICAgZmluZChhY3RvclR5cGU6IEFjdG9yKTogR3JpZENlbGwge1xyXG4gICAgICAgIGxldCBhY3Rvckluc3RhbmNlcyA9IHRoaXMucm9vbS5nZXRJbnN0YW5jZXMoKTtcclxuXHJcbiAgICAgICAgaWYgKGFjdG9ySW5zdGFuY2VzICYmIGFjdG9ySW5zdGFuY2VzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAvLyBhc3N1bWVzIHRoZSBtYXRjaCBpcyBhbGlnbmVkIHRvIHRoZSBncmlkLlxyXG4gICAgICAgICAgICBsZXQgbWF0Y2ggPSBhY3Rvckluc3RhbmNlcy5maW5kKGEgPT4gYS5wYXJlbnQgPT09IGFjdG9yVHlwZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgR3JpZENlbGwodGhpcywgbWF0Y2gueCwgbWF0Y2gueSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBjbGljayBldmVudCBoYW5kbGluZ1xyXG4gICAgb25DbGljayhjYWxsYmFjazogR3JpZENsaWNrQ2FsbGJhY2spOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl9vbkNsaWNrID0gY2FsbGJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgcmFpc2VDbGlja0V2ZW50KHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGV2ZW50ID0gbmV3IEdyaWRDbGlja0V2ZW50KHRoaXMsIHgsIHkpO1xyXG5cclxuICAgICAgICB0aGlzLl9vbkNsaWNrKGV2ZW50KTtcclxuICAgIH0gICAgXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL2dyaWQudHMiLCJpbXBvcnQgeyBBY3Rvckluc3RhbmNlIH0gZnJvbSAnLi9hY3Rvci1pbnN0YW5jZSc7XHJcbmltcG9ydCB7IEJvdW5kYXJ5IH0gZnJvbSAnLi9ib3VuZGFyeSc7XHJcbmltcG9ydCB7IEdhbWVDYW52YXNIVE1MMkQgfSBmcm9tICcuL2NhbnZhcyc7XHJcblxyXG5lbnVtIFZpZXdNb2RlIHtcclxuICAgIFNhbWVQb3NpdGlvbiA9IDEsXHJcbiAgICBDZW50ZXIgPSAyLFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVmlldyB7XHJcblxyXG4gICAgcHJpdmF0ZSB2aWV3TW9kZTogVmlld01vZGU7XHJcbiAgICBwcml2YXRlIGZvbGxvd0luc3RhbmNlOiBBY3Rvckluc3RhbmNlO1xyXG4gICAgcHJpdmF0ZSBhdHRhY2htZW50czogQWN0b3JJbnN0YW5jZUF0dGFjaGVtZW50W10gPSBbXTtcclxuXHJcbiAgICBwcml2YXRlIG9mZnNldFg6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIG9mZnNldFk6IG51bWJlciA9IDA7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyB4OiBudW1iZXIsIFxyXG4gICAgICAgIHB1YmxpYyB5OiBudW1iZXIsIFxyXG4gICAgICAgIHB1YmxpYyByZWFkb25seSB3aWR0aDogbnVtYmVyLCBcclxuICAgICAgICBwdWJsaWMgcmVhZG9ubHkgaGVpZ2h0OiBudW1iZXIpIHtcclxuICAgIH1cclxuXHJcbiAgICBmb2xsb3coYWN0b3JJbnN0YW5jZTogQWN0b3JJbnN0YW5jZSwgY2VudGVyOiBib29sZWFuID0gZmFsc2UsIG9mZnNldFg6IG51bWJlciA9IDAsIG9mZnNldFk6IG51bWJlciA9IDApIHtcclxuICAgICAgICB0aGlzLnZpZXdNb2RlID0gY2VudGVyID8gVmlld01vZGUuQ2VudGVyIDogVmlld01vZGUuU2FtZVBvc2l0aW9uO1xyXG4gICAgICAgIHRoaXMuZm9sbG93SW5zdGFuY2UgPSBhY3Rvckluc3RhbmNlO1xyXG4gICAgICAgIHRoaXMub2Zmc2V0WCA9IG9mZnNldFg7XHJcbiAgICAgICAgdGhpcy5vZmZzZXRZID0gb2Zmc2V0WTtcclxuICAgIH1cclxuXHJcbiAgICBhdHRhY2goYWN0b3JJbnN0YW5jZTogQWN0b3JJbnN0YW5jZSwgb2Zmc2V0WDogbnVtYmVyID0gMCwgb2Zmc2V0WTogbnVtYmVyID0gMCkge1xyXG4gICAgICAgIHRoaXMuYXR0YWNobWVudHMucHVzaChuZXcgQWN0b3JJbnN0YW5jZUF0dGFjaGVtZW50KHRoaXMsIGFjdG9ySW5zdGFuY2UsIG9mZnNldFgsIG9mZnNldFkpKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5mb2xsb3dJbnN0YW5jZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy52aWV3TW9kZSA9PT0gVmlld01vZGUuQ2VudGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2VudGVyQXJvdW5kQm91bmRhcnkodGhpcy5mb2xsb3dJbnN0YW5jZS5ib3VuZGFyeSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnggPSB0aGlzLm9mZnNldFggKyB0aGlzLmZvbGxvd0luc3RhbmNlLnggfHwgMDtcclxuICAgICAgICAgICAgdGhpcy55ID0gdGhpcy5vZmZzZXRZICsgdGhpcy5mb2xsb3dJbnN0YW5jZS55IHx8IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmF0dGFjaG1lbnRzLmZvckVhY2goYXR0ID0+IGF0dC51cGRhdGUoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjZW50ZXJBcm91bmRCb3VuZGFyeShib3VuZGFyeTogQm91bmRhcnkpIHtcclxuXHJcbiAgICAgICAgaWYgKCFib3VuZGFyeSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYGJvdW5kYXJ5IGlzICR7Ym91bmRhcnl9YCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnggPSB0aGlzLm9mZnNldFggKyAodGhpcy5mb2xsb3dJbnN0YW5jZS54ICsgKGJvdW5kYXJ5LndpZHRoIC8gMikgLSAodGhpcy53aWR0aCAvIDIpKTtcclxuICAgICAgICB0aGlzLnkgPSB0aGlzLm9mZnNldFkgKyAodGhpcy5mb2xsb3dJbnN0YW5jZS55ICsgKGJvdW5kYXJ5LmhlaWdodCAvIDIpIC0gKHRoaXMuaGVpZ2h0IC8gMikpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBBY3Rvckluc3RhbmNlQXR0YWNoZW1lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yIChwcml2YXRlIHBhcmVudDogVmlldyxcclxuICAgICAgICBwcml2YXRlIGluc3RhbmNlOiBBY3Rvckluc3RhbmNlLFxyXG4gICAgICAgIHByaXZhdGUgb2Zmc2V0WDogbnVtYmVyLFxyXG4gICAgICAgIHByaXZhdGUgb2Zmc2V0WTogbnVtYmVyKSB7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICB0aGlzLmluc3RhbmNlLnggPSB0aGlzLnBhcmVudC54ICsgdGhpcy5vZmZzZXRYO1xyXG4gICAgICAgIHRoaXMuaW5zdGFuY2UueSA9IHRoaXMucGFyZW50LnkgKyB0aGlzLm9mZnNldFk7XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZW5naW5lL3ZpZXcudHMiLCJpbXBvcnQgeyBHYW1lQ2FudmFzQ29udGV4dCB9IGZyb20gJy4vY2FudmFzJztcclxuaW1wb3J0IHsgUG9pbnRlcklucHV0RXZlbnQgfSBmcm9tICcuL2lucHV0JztcclxuaW1wb3J0IHsgR3JpZCB9IGZyb20gJy4vZ3JpZCc7XHJcbmltcG9ydCB7IFJvb20sIFJvb21CZWhhdmlvciB9IGZyb20gJy4vcm9vbSc7XHJcbmltcG9ydCB7IFZpZXcgfSBmcm9tICcuL3ZpZXcnO1xyXG5pbXBvcnQgeyBWYXN0Z2FtZSB9IGZyb20gJy4vdmFzdGdhbWUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFZpZXdlZFJvb21CZWhhdmlvciBpbXBsZW1lbnRzIFJvb21CZWhhdmlvciB7XHJcbiAgICB2aWV3OiBWaWV3O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMudmlldyA9IG5ldyBWaWV3KHgsIHksIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFZpZXcoKTogVmlldyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmlldztcclxuICAgIH1cclxuXHJcbiAgICAvLyBSb29tQmVoYXZpb3IgaW1wbGVtZW50YXRpb25cclxuICAgIHByZUhhbmRsZUNsaWNrKGV2ZW50OiBQb2ludGVySW5wdXRFdmVudCkge1xyXG4gICAgICAgIGxldCBbb2Zmc2V0WCwgb2Zmc2V0WV0gPSB0aGlzLmdldE9mZnNldCgpO1xyXG4gICAgICAgIGV2ZW50LnggKz0gb2Zmc2V0WDtcclxuICAgICAgICBldmVudC55ICs9IG9mZnNldFk7XHJcbiAgICB9XHJcblxyXG4gICAgcG9zdFN0ZXAoc2VsZjogUm9vbSkgeyBcclxuICAgICAgICB0aGlzLnZpZXcudXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJlRHJhdyhzZWxmOiBSb29tLCBjYW52YXNDb250ZXh0OiBHYW1lQ2FudmFzQ29udGV4dCkgeyBcclxuICAgICAgICBsZXQgW29mZnNldFgsIG9mZnNldFldID0gdGhpcy5nZXRPZmZzZXQoKTtcclxuICAgICAgICBjYW52YXNDb250ZXh0Lm9yaWdpbiA9IFstb2Zmc2V0WCwgLW9mZnNldFldO1xyXG4gICAgfVxyXG5cclxuICAgIHBvc3RIYW5kbGVDbGljayhldmVudDogUG9pbnRlcklucHV0RXZlbnQpIHtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldE9mZnNldCgpOiBbbnVtYmVyLCBudW1iZXJdIHtcclxuICAgICAgICBsZXQgb2Zmc2V0WCA9IHRoaXMudmlldyA/IHRoaXMudmlldy54IDogMDtcclxuICAgICAgICBsZXQgb2Zmc2V0WSA9IHRoaXMudmlldyA/IHRoaXMudmlldy55IDogMDtcclxuXHJcbiAgICAgICAgcmV0dXJuIFtvZmZzZXRYLCBvZmZzZXRZXTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdyaWRSb29tQmVoYXZpb3IgaW1wbGVtZW50cyBSb29tQmVoYXZpb3Ige1xyXG4gICAgcHJpdmF0ZSBncmlkOiBHcmlkO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHRpbGVTaXplOiBudW1iZXIsIHBhcmVudFJvb206IFJvb20pIHtcclxuICAgICAgICB0aGlzLmdyaWQgPSBuZXcgR3JpZCh0aWxlU2l6ZSwgcGFyZW50Um9vbSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0R3JpZCgpOiBHcmlkIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ncmlkO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJvb21CZWhhdmlvciBpbXBsZW1lbnRhdGlvblxyXG4gICAgcG9zdEhhbmRsZUNsaWNrKGV2ZW50OiBQb2ludGVySW5wdXRFdmVudCkge1xyXG4gICAgICAgIHRoaXMuZ3JpZC5yYWlzZUNsaWNrRXZlbnQoZXZlbnQueCwgZXZlbnQueSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJlSGFuZGxlQ2xpY2soZXZlbnQ6IFBvaW50ZXJJbnB1dEV2ZW50KSB7XHJcbiAgICB9XHJcbiAgICBwb3N0U3RlcChzZWxmOiBSb29tKSB7IFxyXG4gICAgfVxyXG4gICAgcHJlRHJhdyhzZWxmOiBSb29tLCBjYW52YXNDb250ZXh0OiBHYW1lQ2FudmFzQ29udGV4dCkgeyBcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvcm9vbS1leHQudHMiLCJjb25zdCBEZWZhdWx0SGVpZ2h0ID0gNDgwO1xyXG5jb25zdCBEZWZhdWx0V2lkdGggPSA2NDA7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEdhbWVDYW52YXNPcHRpb25zIHtcclxuICAgIGhlaWdodDogbnVtYmVyO1xyXG4gICAgd2lkdGg6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBHYW1lQ2FudmFzIHtcclxuICAgIGluaXQob3B0aW9uczogR2FtZUNhbnZhc09wdGlvbnMpOiB2b2lkO1xyXG4gICAgZ2V0Q29udGV4dCgpOiBHYW1lQ2FudmFzQ29udGV4dDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWVDYW52YXNIVE1MMkQgaW1wbGVtZW50cyBHYW1lQ2FudmFzIHtcclxuICAgIHJlYWRvbmx5IGdhbWVDYW52YXNDb250ZXh0OiBHYW1lQ2FudmFzQ29udGV4dDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcmVhZG9ubHkgY2FudmFzRWxlbWVudDogSFRNTENhbnZhc0VsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLmdhbWVDYW52YXNDb250ZXh0ID0gbmV3IEdhbWVDYW52YXNDb250ZXh0MkQodGhpcy5jYW52YXNFbGVtZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb250ZXh0KCk6IEdhbWVDYW52YXNDb250ZXh0IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nYW1lQ2FudmFzQ29udGV4dDtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KG9wdGlvbnM6IEdhbWVDYW52YXNPcHRpb25zKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2FudmFzRWxlbWVudCkge1xyXG4gICAgICAgICAgICB0aGlzLmNhbnZhc0VsZW1lbnQuaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQ7XHJcbiAgICAgICAgICAgIHRoaXMuY2FudmFzRWxlbWVudC53aWR0aCA9IG9wdGlvbnMud2lkdGg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENhbnZhc0RyYXdPcHRpb25zIHtcclxuICAgIG9wYWNpdHk/OiBudW1iZXI7XHJcbiAgICB0aWxlWD86IGJvb2xlYW47XHJcbiAgICB0aWxlWT86IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgR2FtZUNhbnZhc0NvbnRleHQge1xyXG4gICAgb3JpZ2luOiBbbnVtYmVyLCBudW1iZXJdO1xyXG4gICAgY2xlYXIoKTogdm9pZDtcclxuICAgIGZpbGwod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIGNvbG9yOiBzdHJpbmcpOiB2b2lkO1xyXG4gICAgZmlsbEFyZWEoeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBjb2xvcjogc3RyaW5nKTogdm9pZDtcclxuICAgIGRyYXdJbWFnZShpbWFnZTogSFRNTEltYWdlRWxlbWVudCwgc3JjWDogbnVtYmVyLCBzcmNZOiBudW1iZXIsIGRlc3RYOiBudW1iZXIsIGRlc3RZOiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBvcHRpb25zPzogQ2FudmFzRHJhd09wdGlvbnMpOiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZUNhbnZhc0NvbnRleHQyRCBpbXBsZW1lbnRzIEdhbWVDYW52YXNDb250ZXh0IHtcclxuICAgIG9yaWdpbjogW251bWJlciwgbnVtYmVyXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNhbnZhc0VsZW1lbnQ6IEhUTUxDYW52YXNFbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy5vcmlnaW4gPSBbMCwgMF07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXQgY2FudmFzQ29udGV4dDJEKCk6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FudmFzRWxlbWVudC5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyKCkge1xyXG4gICAgICAgIHRoaXMuY2FudmFzQ29udGV4dDJELmNsZWFyUmVjdCgwLCAwLCB0aGlzLmNhbnZhc0VsZW1lbnQud2lkdGgsIHRoaXMuY2FudmFzRWxlbWVudC5oZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbGwod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIGNvbG9yOiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgW3gsIHldID0gdGhpcy5vcmlnaW47XHJcbiAgICAgICAgdGhpcy5maWxsQXJlYSh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBjb2xvcik7XHJcbiAgICB9XHJcblxyXG4gICAgZmlsbEFyZWEoeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBjb2xvcjogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0MkQuYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0MkQucmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQyRC5maWxsU3R5bGUgPSBjb2xvcjtcclxuICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQyRC5maWxsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhd0ltYWdlKGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50LCBzcmNYOiBudW1iZXIsIHNyY1k6IG51bWJlciwgZGVzdFg6IG51bWJlciwgZGVzdFk6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIG9wdGlvbnM6IENhbnZhc0RyYXdPcHRpb25zID0ge30pOiB2b2lkIHtcclxuICAgICAgICAvLyBzZXQgb3BhY2l0eVxyXG4gICAgICAgIGNvbnN0IGRlZmF1bHRPcGFjaXR5ID0gMTtcclxuICAgICAgICBsZXQgcHJldmlvdXNPcGFjaXR5OiBudW1iZXIgPSBudWxsO1xyXG5cclxuICAgICAgICBpZiAob3B0aW9ucy5vcGFjaXR5ICE9PSBkZWZhdWx0T3BhY2l0eSAmJiBvcHRpb25zLm9wYWNpdHkgIT09IG51bGwgJiYgb3B0aW9ucy5vcGFjaXR5ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcHJldmlvdXNPcGFjaXR5ID0gdGhpcy5jYW52YXNDb250ZXh0MkQuZ2xvYmFsQWxwaGE7XHJcbiAgICAgICAgICAgIHRoaXMuY2FudmFzQ29udGV4dDJELmdsb2JhbEFscGhhID0gb3B0aW9ucy5vcGFjaXR5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZHJhdyB0aGUgaW1hZ2UgcmVsYXRpdmUgdG8gdGhlIG9yaWdpblxyXG4gICAgICAgIGxldCBbb3JpZ2luWCwgb3JpZ2luWV0gPSB0aGlzLm9yaWdpbjtcclxuXHJcbiAgICAgICAgaWYgKG9wdGlvbnMudGlsZVggfHwgb3B0aW9ucy50aWxlWSkge1xyXG4gICAgICAgICAgICBsZXQgcmVwZXRpdGlvbiA9IG9wdGlvbnMudGlsZVggJiYgb3B0aW9ucy50aWxlWSA/ICdyZXBlYXQnIDogb3B0aW9ucy50aWxlWCA/ICdyZXBlYXQteCcgOiAncmVwZWF0LXknO1xyXG4gICAgICAgICAgICBsZXQgcGF0dGVybiA9IHRoaXMuY2FudmFzQ29udGV4dDJELmNyZWF0ZVBhdHRlcm4oaW1hZ2UsIHJlcGV0aXRpb24pO1xyXG4gICAgICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQyRC5maWxsU3R5bGUgPSBwYXR0ZXJuO1xyXG4gICAgICAgICAgICB0aGlzLmNhbnZhc0NvbnRleHQyRC5maWxsUmVjdChvcmlnaW5YICsgZGVzdFgsIG9yaWdpblkgKyBkZXN0WSwgdGhpcy5jYW52YXNDb250ZXh0MkQuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhc0NvbnRleHQyRC5jYW52YXMuaGVpZ2h0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FudmFzQ29udGV4dDJELmRyYXdJbWFnZShpbWFnZSwgc3JjWCwgc3JjWSwgd2lkdGgsIGhlaWdodCwgTWF0aC5mbG9vcihvcmlnaW5YICsgZGVzdFgpLCBNYXRoLmZsb29yKG9yaWdpblkgKyBkZXN0WSksIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gcmVzZXQgb3BhY2l0eVxyXG4gICAgICAgIGlmIChwcmV2aW91c09wYWNpdHkgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5jYW52YXNDb250ZXh0MkQuZ2xvYmFsQWxwaGEgPSBwcmV2aW91c09wYWNpdHk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvY2FudmFzLnRzIiwiaW1wb3J0IHsgQWN0b3IgfSBmcm9tICcuL2FjdG9yJztcclxuaW1wb3J0IHsgR2FtZUNhbnZhcywgR2FtZUNhbnZhc0NvbnRleHQgfSBmcm9tICcuL2NhbnZhcyc7XHJcbmltcG9ydCB7IERlZmVycmVkRXZlbnQgfSBmcm9tICcuL2V2ZW50cyc7XHJcbmltcG9ydCB7IElucHV0LCBDb25jcmV0ZUV2ZW50SGFuZGxlciwgUG9pbnRlcklucHV0RXZlbnQgfSBmcm9tICcuL2lucHV0JztcclxuaW1wb3J0IHsgUm9vbSB9IGZyb20gJy4vcm9vbSc7XHJcbmltcG9ydCB7IFNwcml0ZSB9IGZyb20gJy4vc3ByaXRlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lQ29udGV4dCB7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IGFjdG9yczogeyBbaW5kZXg6IHN0cmluZ106IEFjdG9yIH0gPSB7fTtcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgZXZlbnRzOiB7IFtpbmRleDogbnVtYmVyXTogRGVmZXJyZWRFdmVudCB9ID0ge307XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHJvb21zOiB7IFtpbmRleDogc3RyaW5nXTogUm9vbSB9ID0ge307XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IHNwcml0ZXM6IHsgW2luZGV4OiBzdHJpbmddOiBTcHJpdGV9ID0ge307XHJcblxyXG4gICAgcHJpdmF0ZSBjdXJyZW50Um9vbTogUm9vbTtcclxuICAgIHByaXZhdGUgY3VycmVudFJvb21DbGlja0hhbmRsZXI6IENvbmNyZXRlRXZlbnRIYW5kbGVyPFBvaW50ZXJJbnB1dEV2ZW50PjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNhbnZhczogR2FtZUNhbnZhcykge1xyXG4gICAgfVxyXG5cclxuICAgIGdldENhbnZhc0NvbnRleHQoKTogR2FtZUNhbnZhc0NvbnRleHQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gYWN0b3JzXHJcbiAgICBkZWZpbmVBY3RvcihuYW1lOiBzdHJpbmcsIGFjdG9yOiBBY3Rvcik6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmFjdG9yc1tuYW1lXSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEFjdG9yICR7bmFtZX0gaGFzIGFscmVhZHkgYmVlbiBkZWZpbmVkLmApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5hY3RvcnNbbmFtZV0gPSBhY3RvcjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBY3RvcihuYW1lOiBzdHJpbmcpOiBBY3RvciB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmFjdG9yc1tuYW1lXSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEFjdG9yICR7bmFtZX0gaGFzIG5vdCBiZWVuIGRlZmluZWQuYCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5hY3RvcnNbbmFtZV07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZXZlbnRzXHJcbiAgICBwcml2YXRlIG5leHRFdmVudElEID0gKCgpID0+IHtcclxuICAgICAgICBsZXQgY3VycmVudElEID0gMDtcclxuICAgICAgICByZXR1cm4gKCgpID0+ICsrY3VycmVudElEKTtcclxuICAgIH0pKCk7XHJcblxyXG4gICAgcmVnaXN0ZXJFdmVudChldmVudDogRGVmZXJyZWRFdmVudCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZXZlbnRzW3RoaXMubmV4dEV2ZW50SUQoKV0gPSBldmVudDtcclxuICAgIH1cclxuXHJcbiAgICBjaGVja0FuZEZpcmVFdmVudHMoKTogdm9pZCB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9yIChsZXQgZXZlbnRJRCBpbiB0aGlzLmV2ZW50cykge1xyXG4gICAgICAgICAgICBsZXQgZXZlbnQgPSB0aGlzLmV2ZW50c1tldmVudElEXTtcclxuXHJcbiAgICAgICAgICAgIGlmIChldmVudC5jb25kaXRpb25DYWxsYmFjaygpKSB7XHJcbiAgICAgICAgICAgICAgICBldmVudC5hY3Rpb25DYWxsYmFjaygpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChldmVudC5maXJlT25jZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmV2ZW50c1tldmVudElEXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyByb29tc1xyXG4gICAgZGVmaW5lUm9vbShuYW1lOiBzdHJpbmcsIHJvb206IFJvb20pOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5yb29tc1tuYW1lXSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFJvb20gJHtuYW1lfSBoYXMgYWxyZWFkeSBiZWVuIGRlZmluZWQuYCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnJvb21zW25hbWVdID0gcm9vbTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRSb29tKG5hbWU6IHN0cmluZyk6IFJvb20ge1xyXG4gICAgICAgIGlmICghdGhpcy5yb29tc1tuYW1lXSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFJvb20gJHtuYW1lfSBoYXMgbm90IGJlZW4gZGVmaW5lZC5gKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnJvb21zW25hbWVdO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEN1cnJlbnRSb29tKCk6IFJvb20ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRSb29tO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEN1cnJlbnRSb29tKHJvb206IFJvb20pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRSb29tID0gcm9vbTtcclxuXHJcbiAgICAgICAgLy8gZGlwb3NlIHByZXZpb3VzIHJvb20ncyBjbGljayBoYW5kbGVyXHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFJvb21DbGlja0hhbmRsZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50Um9vbUNsaWNrSGFuZGxlci5kaXNwb3NlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmN1cnJlbnRSb29tQ2xpY2tIYW5kbGVyID0gSW5wdXQucmVnaXN0ZXJDbGlja0hhbmRsZXIoZXYgPT4gcm9vbS5oYW5kbGVDbGljayhldikpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHNwcml0ZXNcclxuICAgIGRlZmluZVNwcml0ZShuYW1lOiBzdHJpbmcsIHNwcml0ZTogU3ByaXRlKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3ByaXRlc1tuYW1lXSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFNwcml0ZSAke25hbWV9IGhhcyBhbHJlYWR5IGJlZW4gZGVmaW5lZC5gKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc3ByaXRlc1tuYW1lXSA9IHNwcml0ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTcHJpdGUobmFtZTogc3RyaW5nKTogU3ByaXRlIHtcclxuICAgICAgICBpZiAoIXRoaXMuc3ByaXRlc1tuYW1lXSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IgKGBTcHJpdGUgJHtuYW1lfSBoYXMgbm90IGJlZW4gZGVmaW5lZC5gKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnNwcml0ZXNbbmFtZV07XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9nYW1lLWNvbnRleHQudHMiLCJpbXBvcnQgeyBHYW1lQ2FudmFzT3B0aW9ucywgR2FtZUNhbnZhcyB9IGZyb20gJy4vY2FudmFzJztcclxuaW1wb3J0IHsgR2FtZVN0YXRlIH0gZnJvbSAnLi9lbnVtJztcclxuaW1wb3J0IHsgR2FtZUNvbnRleHQgfSBmcm9tICcuL2dhbWUtY29udGV4dCc7XHJcbmltcG9ydCB7IEdhbWVPcHRpb25zIH0gZnJvbSAnLi92YXN0Z2FtZSc7XHJcblxyXG5jb25zdCBEZWZhdWx0RlBTID0gNjA7XHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZVJ1bm5lciB7XHJcbiAgICBwcml2YXRlIHN0YXRlOiBHYW1lU3RhdGUgPSBHYW1lU3RhdGUuUGF1c2VkO1xyXG4gICAgcmVhZG9ubHkgdGFyZ2V0RlBTOiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBvcHRpb25zOiBHYW1lT3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMudGFyZ2V0RlBTID0gb3B0aW9ucy50YXJnZXRGUFMgfHwgRGVmYXVsdEZQUztcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaXNSdW5uaW5nKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlID09PSBHYW1lU3RhdGUuUnVubmluZztcclxuICAgIH1cclxuXHJcbiAgICBwYXVzZSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnN0YXRlID0gR2FtZVN0YXRlLlBhdXNlZDtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydChnYW1lQ29udGV4dDogR2FtZUNvbnRleHQpOiB2b2lkIHtcclxuICAgICAgICBsZXQgc3RlcFNpemU6IG51bWJlciA9IDEgLyB0aGlzLnRhcmdldEZQUztcclxuICAgICAgICBsZXQgb2Zmc2V0OiBudW1iZXIgPSAwO1xyXG4gICAgICAgIGxldCBwcmV2aW91czogbnVtYmVyID0gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpO1xyXG5cclxuICAgICAgICBsZXQgY2FudmFzRHJhd2luZ0NvbnRleHQgPSBnYW1lQ29udGV4dC5nZXRDYW52YXNDb250ZXh0KCk7XHJcblxyXG4gICAgICAgIGxldCBnYW1lTG9vcDogRnJhbWVSZXF1ZXN0Q2FsbGJhY2sgPSAoKTogdm9pZCA9PiB7XHJcbiAgICAgICAgICAgIGxldCByb29tID0gZ2FtZUNvbnRleHQuZ2V0Q3VycmVudFJvb20oKTtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnQ6IG51bWJlciA9IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIG9mZnNldCArPSAoTWF0aC5taW4oMSwgKGN1cnJlbnQgLSBwcmV2aW91cykgLyAxMDAwKSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB3aGlsZSAob2Zmc2V0ID4gc3RlcFNpemUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1J1bm5pbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICBnYW1lQ29udGV4dC5jaGVja0FuZEZpcmVFdmVudHMoKTtcclxuICAgICAgICAgICAgICAgICAgICByb29tLnN0ZXAoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBvZmZzZXQgLT0gc3RlcFNpemU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzUnVubmluZykge1xyXG4gICAgICAgICAgICAgICAgY2FudmFzRHJhd2luZ0NvbnRleHQuY2xlYXIoKTtcclxuICAgICAgICAgICAgICAgIHJvb20uZHJhdyhjYW52YXNEcmF3aW5nQ29udGV4dCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHByZXZpb3VzID0gY3VycmVudDtcclxuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBzdGFydCB0aGUgZ2FtZSBsb29wXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IEdhbWVTdGF0ZS5SdW5uaW5nO1xyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9nYW1lLXJ1bm5lci50cyIsImltcG9ydCB7IFZhc3RnYW1lIH0gZnJvbSAnLi92YXN0Z2FtZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgRGVmZXJyZWRFdmVudCB7XHJcblxyXG4gICAgc3RhdGljIHJlZ2lzdGVyKGV2ZW50OiBEZWZlcnJlZEV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgVmFzdGdhbWUuX2dldENvbnRleHQoKS5yZWdpc3RlckV2ZW50KGV2ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgcmVhZG9ubHkgY29uZGl0aW9uQ2FsbGJhY2s6ICgpID0+IGJvb2xlYW4sXHJcbiAgICAgICAgcHVibGljIHJlYWRvbmx5IGFjdGlvbkNhbGxiYWNrOiAoKSA9PiBhbnksXHJcbiAgICAgICAgcHVibGljIHJlYWRvbmx5IGZpcmVPbmNlOiBib29sZWFuID0gdHJ1ZSkge1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS9ldmVudHMudHMiLCJleHBvcnQgY2xhc3MgTWF0aFV0aWwge1xyXG5cclxuICAgIHN0YXRpYyBnZXRMZW5ndGhEaXJlY3Rpb25YKGxlbmd0aDogbnVtYmVyLCBkaXJlY3Rpb246IG51bWJlcik6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIGxlbmd0aCAqIE1hdGguY29zKGRpcmVjdGlvbiAqIChNYXRoLlBJIC8gMTgwKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldExlbmd0aERpcmVjdGlvblkobGVuZ3RoOiBudW1iZXIsIGRpcmVjdGlvbjogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIGxlbmd0aCAqIE1hdGguc2luKGRpcmVjdGlvbiAqIChNYXRoLlBJIC8gMTgwKSk7XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2VuZ2luZS91dGlsLnRzIiwiaW1wb3J0IHsgU3ByaXRlQW5pbWF0aW9uIH0gZnJvbSAnLi9zcHJpdGUtYW5pbWF0aW9uJztcclxuaW1wb3J0IHsgVmFzdGdhbWUgfSBmcm9tICcuL3Zhc3RnYW1lJztcclxuaW1wb3J0IHsgR2FtZUNhbnZhc0NvbnRleHQgfSBmcm9tICcuL2NhbnZhcyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNwcml0ZU9wdGlvbnMge1xyXG4gICAgaW1hZ2VTb3VyY2U6IHN0cmluZztcclxuICAgIGhlaWdodDogbnVtYmVyO1xyXG4gICAgd2lkdGg6IG51bWJlcjtcclxuICAgIGZyYW1lQm9yZGVyPzogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERyYXdTcHJpdGVPcHRpb25zIHtcclxuICAgIGZyYW1lPzogbnVtYmVyO1xyXG4gICAgb3BhY2l0eT86IG51bWJlcjtcclxuICAgIHRpbGVYPzogYm9vbGVhbjtcclxuICAgIHRpbGVZPzogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNwcml0ZSB7XHJcbiAgICBcclxuICAgIHN0YXRpYyBkZWZpbmUobmFtZTogc3RyaW5nLCBvcHRpb25zOiBTcHJpdGVPcHRpb25zKTogU3ByaXRlIHtcclxuICAgICAgICBsZXQgc3ByaXRlID0gbmV3IFNwcml0ZShvcHRpb25zKTtcclxuICAgICAgICBWYXN0Z2FtZS5fZ2V0Q29udGV4dCgpLmRlZmluZVNwcml0ZShuYW1lLCBzcHJpdGUpO1xyXG5cclxuICAgICAgICByZXR1cm4gc3ByaXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQobmFtZTogc3RyaW5nKTogU3ByaXRlIHtcclxuICAgICAgICByZXR1cm4gVmFzdGdhbWUuX2dldENvbnRleHQoKS5nZXRTcHJpdGUobmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdyhjYW52YXNDb250ZXh0OiBHYW1lQ2FudmFzQ29udGV4dCwgeDogbnVtYmVyLCB5OiBudW1iZXIsIG9wdGlvbnM6IERyYXdTcHJpdGVPcHRpb25zID0ge30pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRlZmF1bHRBbmltYXRpb24uc2V0RnJhbWUob3B0aW9ucy5mcmFtZSB8fCAwKTtcclxuICAgICAgICB0aGlzLmRlZmF1bHRBbmltYXRpb24uZHJhdyhjYW52YXNDb250ZXh0LCB4LCB5LCBvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICByZWFkb25seSBpbWFnZTogSFRNTEltYWdlRWxlbWVudDtcclxuICAgIHJlYWRvbmx5IGhlaWdodDogbnVtYmVyO1xyXG4gICAgcmVhZG9ubHkgd2lkdGg6IG51bWJlcjtcclxuICAgIHJlYWRvbmx5IGZyYW1lQm9yZGVyOiBudW1iZXI7XHJcbiAgICByZWFkb25seSBkZWZhdWx0QW5pbWF0aW9uOiBTcHJpdGVBbmltYXRpb247XHJcblxyXG4gICAgY29uc3RydWN0b3Iob3B0aW9uczogU3ByaXRlT3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMuaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICB0aGlzLmltYWdlLnNyYyA9IG9wdGlvbnMuaW1hZ2VTb3VyY2U7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBvcHRpb25zLmhlaWdodDtcclxuICAgICAgICB0aGlzLndpZHRoID0gb3B0aW9ucy53aWR0aDtcclxuICAgICAgICB0aGlzLmZyYW1lQm9yZGVyID0gb3B0aW9ucy5mcmFtZUJvcmRlcjtcclxuICAgICAgICB0aGlzLmRlZmF1bHRBbmltYXRpb24gPSBuZXcgU3ByaXRlQW5pbWF0aW9uKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEZyYW1lSW1hZ2VTb3VyY2VDb29yZHMoZnJhbWU6IG51bWJlcik6IFtudW1iZXIsIG51bWJlcl0ge1xyXG4gICAgICAgIGxldCBmcmFtZUJvcmRlciA9IHRoaXMuZnJhbWVCb3JkZXIgfHwgMDtcclxuICAgICAgICBsZXQgZnJhbWVSb3cgPSAwO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5pbWFnZS53aWR0aCkge1xyXG4gICAgICAgICAgICBsZXQgZnJhbWVzUGVyUm93ID0gTWF0aC5mbG9vcih0aGlzLmltYWdlLndpZHRoIC8gdGhpcy53aWR0aCk7XHJcbiAgICAgICAgICAgIHdoaWxlICh0aGlzLndpZHRoICogZnJhbWUgPj0gZnJhbWVzUGVyUm93ICogdGhpcy53aWR0aCkge1xyXG4gICAgICAgICAgICAgICAgZnJhbWUgLT0gZnJhbWVzUGVyUm93O1xyXG4gICAgICAgICAgICAgICAgZnJhbWVSb3crKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGZyYW1lWE9mZnNldCA9IGZyYW1lICogZnJhbWVCb3JkZXI7XHJcbiAgICAgICAgbGV0IGZyYW1lWU9mZnNldCA9IGZyYW1lUm93ICogZnJhbWVCb3JkZXI7XHJcbiAgICAgICAgbGV0IHNyY1ggPSBmcmFtZSAqIHRoaXMud2lkdGggKyBmcmFtZVhPZmZzZXQ7XHJcbiAgICAgICAgbGV0IHNyY1kgPSBmcmFtZVJvdyAqIHRoaXMuaGVpZ2h0ICsgZnJhbWVZT2Zmc2V0O1xyXG5cclxuICAgICAgICByZXR1cm4gW3NyY1gsIHNyY1ldO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9lbmdpbmUvc3ByaXRlLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==