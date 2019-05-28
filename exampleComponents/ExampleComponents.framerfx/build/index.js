(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("framer"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["framer", "react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("framer"), require("react")) : factory(root["Framer"], root["React"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE_framer__, __WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 		try { modules[moduleId].call(module.exports, module, module.exports, __webpack_require__); } catch (error) { module.exports = { error } }
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// asset url
/******/ 	var __module_i = eval("typeof module !== 'undefined' ? module.i : ''");
/******/ 	var __framer_package = (/(node_modules[/].*)[/](build|dist).index.js/.exec(__module_i) || [])[1]
/******/ 	function __asset_url__(src) { return __WEBPACK_EXTERNAL_MODULE_framer__.serverURL(__framer_package, src) };
/******/ 	installedModules['framer/resource'] = { i: 'framer/resource', l: true, exports: { url: __asset_url__ } };
/******/
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./package.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./code sync recursive \\.(t|j)s(x?)|\\.css$":
/*!***************************************!*\
  !*** ./code sync \.(t|j)s(x?)|\.css$ ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./App.tsx": "./code/App.tsx",
	"./Button.tsx": "./code/Button.tsx",
	"./Checkbox.tsx": "./code/Checkbox.tsx",
	"./Examples.tsx": "./code/Examples.tsx",
	"./Radio.tsx": "./code/Radio.tsx",
	"./Segment.tsx": "./code/Segment.tsx",
	"./Select.tsx": "./code/Select.tsx",
	"./Slider.tsx": "./code/Slider.tsx",
	"./Stepper.tsx": "./code/Stepper.tsx",
	"./Switch.tsx": "./code/Switch.tsx",
	"./TextInput.tsx": "./code/TextInput.tsx",
	"./canvas.tsx": "./code/canvas.tsx"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./code sync recursive \\.(t|j)s(x?)|\\.css$";

/***/ }),

/***/ "./code/App.tsx":
/*!**********************!*\
  !*** ./code/App.tsx ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9BcHAudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbUNBQXVDO0FBRXZDLHFCQUFxQjtBQUNyQixlQUFlO0FBRWYsTUFBTSxJQUFJLEdBQUcsYUFBSSxDQUFDO0lBQ2QsSUFBSSxFQUFFLEVBQUU7SUFDUixTQUFTLEVBQUUsS0FBSztJQUNoQixLQUFLLEVBQUUsRUFBRTtJQUNULFVBQVUsRUFBRSxLQUFLO0lBQ2pCLEdBQUcsRUFBRSxFQUFFO0lBQ1AsUUFBUSxFQUFFLElBQUk7SUFDZCxTQUFTLEVBQUUsRUFBRTtJQUNiLFNBQVMsRUFBRSxFQUFFO0lBQ2IsYUFBYSxFQUFFLEtBQUs7SUFDcEIsU0FBUyxFQUFFLGVBQWU7SUFDMUIsY0FBYyxFQUFFLElBQUk7SUFDcEIsYUFBYSxFQUFFLE9BQU87SUFDdEIsa0JBQWtCLEVBQUUsSUFBSTtJQUN4QixPQUFPLEVBQUUsS0FBSztJQUNkLFlBQVksRUFBRSxJQUFJO0lBQ2xCLEtBQUssRUFBRSxDQUFDO0lBQ1IsVUFBVSxFQUFFLEtBQUs7Q0FDcEIsQ0FBQyxDQUFBO0FBRUYsU0FBZ0IsSUFBSTs7SUFDaEIsT0FBTztRQUNILEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSTtRQUNoQixVQUFVLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUM7UUFDckMsYUFBYSxFQUFFLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFOztZQUM1QixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQTtZQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQTtTQUN6QjtLQUNKLENBQUE7Q0FDSjtBQVRELG9CQVNDO0FBRUQsU0FBZ0IsS0FBSzs7SUFDakIsT0FBTztRQUNILEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztRQUNqQixVQUFVLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFL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

Object.defineProperty(exports, "__esModule", { value: true });
const framer_1 = __webpack_require__(/*! framer */ "framer");
// Example components
// @steveruizok
const data = framer_1.Data({
    name: "",
    nameValid: false,
    email: "",
    emailValid: false,
    age: 28,
    ageValid: true,
    password1: "",
    password2: "",
    passwordValid: false,
    continent: "South America",
    continentValid: true,
    favoriteColor: "Green",
    favoriteColorValid: true,
    contact: false,
    contactValid: true,
    items: 0,
    itemsValid: false,
});
function Name() {
    window["__checkBudget__"]();
    return {
        value: data.name,
        validation: value => value.length > 3,
        onValueChange: (value, valid) => {
            window["__checkBudget__"]();
            data.name = value;
            data.nameValid = valid;
        },
    };
}
exports.Name = Name;
function Email() {
    window["__checkBudget__"]();
    return {
        value: data.email,
        validation: value => value.includes(".com"),
        onValueChange: (value, valid) => {
            window["__checkBudget__"]();
            data.email = value;
            data.emailValid = valid;
        },
    };
}
exports.Email = Email;
function Password1() {
    window["__checkBudget__"]();
    return {
        value: data.password1,
        validation: value => value.length > 5 && value === data.password2,
        onValueChange: (value, valid) => {
            window["__checkBudget__"]();
            data.password1 = value;
            data.passwordValid = valid;
        },
    };
}
exports.Password1 = Password1;
function Password2() {
    window["__checkBudget__"]();
    return {
        value: data.password2,
        validation: value => value.length > 5 && value === data.password1,
        onValueChange: (value, valid) => {
            window["__checkBudget__"]();
            data.password2 = value;
            data.passwordValid = valid;
        },
    };
}
exports.Password2 = Password2;
function Age() {
    window["__checkBudget__"]();
    return {
        value: data.age,
        validation: value => value > 18,
        onValueChange: (value, normal, valid) => {
            window["__checkBudget__"]();
            data.age = value;
            data.ageValid = valid;
        },
    };
}
exports.Age = Age;
function Continent() {
    window["__checkBudget__"]();
    return {
        value: data.continent,
        validation: value => value !== "Antarctica",
        onValueChange: (value, selectedIndex, valid) => {
            window["__checkBudget__"]();
            data.continent = value;
            data.continentValid = valid;
        },
    };
}
exports.Continent = Continent;
function Color() {
    window["__checkBudget__"]();
    return {
        value: data.favoriteColor,
        validation: value => value !== "None",
        onValueChange: (value, selectedIndex, valid) => {
            window["__checkBudget__"]();
            data.favoriteColor = value;
            data.favoriteColorValid = valid;
        },
    };
}
exports.Color = Color;
function Contact() {
    window["__checkBudget__"]();
    return {
        value: data.contact,
        validation: value => true,
        onValueChange: (value, valid) => {
            window["__checkBudget__"]();
            data.contact = value;
            data.contactValid = valid;
        },
    };
}
exports.Contact = Contact;
function Items() {
    window["__checkBudget__"]();
    return {
        value: data.items,
        validation: value => value > 0,
        onValueChange: (value, valid) => {
            window["__checkBudget__"]();
            data.items = value;
            data.itemsValid = valid;
        },
    };
}
exports.Items = Items;
function ContinueButton() {
    window["__checkBudget__"]();
    const isReady = data.nameValid &&
        data.emailValid &&
        data.passwordValid &&
        data.ageValid &&
        data.continentValid &&
        data.favoriteColorValid &&
        data.contactValid &&
        data.itemsValid;
    console.table({
        name: data.nameValid,
        email: data.emailValid,
        password: data.passwordValid,
        age: data.ageValid,
        continent: data.continentValid,
        color: data.favoriteColorValid,
        contact: data.contactValid,
        items: data.itemsValid,
    });
    return {
        disabled: !isReady,
    };
}
exports.ContinueButton = ContinueButton;
exports.__info__ = [{ name: "Name", type: "override" }, { name: "Email", type: "override" }, { name: "Password1", type: "override" }, { name: "Password2", type: "override" }, { name: "Age", type: "override" }, { name: "Continent", type: "override" }, { name: "Color", type: "override" }, { name: "Contact", type: "override" }, { name: "Items", type: "override" }, { name: "ContinueButton", type: "override" }];


/***/ }),

/***/ "./code/Button.tsx":
/*!*************************!*\
  !*** ./code/Button.tsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnV0dG9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9CdXR0b24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQThCO0FBQzlCLG1DQUF1RTtBQWN2RTs7O0dBR0c7QUFDSCxTQUFnQixNQUFNLENBQUMsS0FBcUI7O0lBQ3hDLGlFQUFpRTtJQUNqRSxpRUFBaUU7SUFDakUsV0FBVztJQUNYLE1BQU0sRUFDRixNQUFNLEVBQ04sUUFBUSxFQUNSLE1BQU0sRUFDTixPQUFPLEVBQUUsY0FBYyxFQUN2QixLQUFLLEVBQ0wsSUFBSSxFQUNKLElBQUksRUFDSixNQUFNLEdBQ1QsR0FBRyxLQUFLLENBQUE7SUFFVCxnRkFBZ0Y7SUFFaEYscUNBQXFDO0lBQ3JDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQztRQUNyQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLElBQUk7UUFDdkMsT0FBTyxFQUFFLEtBQUs7UUFDZCxNQUFNLEVBQUUsS0FBSztLQUNoQixDQUFDLENBQUE7SUFFRix3REFBd0Q7SUFDeEQsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7O1FBQ2pCLFFBQVEsbUJBQ0QsS0FBSyxJQUNSLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUN6QyxDQUFBO0tBQ0wsRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUE7SUFFcEIsZ0ZBQWdGO0lBRWhGLGlFQUFpRTtJQUNqRSxNQUFNLFNBQVMsR0FBRyxHQUFHLEVBQUU7O1FBQ25CLElBQUksUUFBUTtZQUFFLE9BQU07UUFFcEIsTUFBTSxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFBO1FBRTNCLG9DQUFvQztRQUNwQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7UUFFWCxzREFBc0Q7UUFD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

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
/**
 * Button
 * @param props
 */
function Button(props) {
    window["__checkBudget__"]();
    // Grab the properties we want to use from props (note that we're
    // renaming toggled to avoid conflicting with the state's toggled
    // property
    const { height, disabled, toggle, toggled: initialToggled, onTap, text, tint, accent, } = props;
    /* ---------------------------------- State --------------------------------- */
    // Initialize state with props values
    const [state, setState] = React.useState({
        toggled: toggle ? initialToggled : null,
        hovered: false,
        active: false,
    });
    // When the hook receives new props, overwrite the state
    React.useEffect(() => {
        window["__checkBudget__"]();
        setState(Object.assign({}, state, { toggled: toggle ? initialToggled : null }));
    }, [initialToggled]);
    /* ----------------------------- Event Handlers ----------------------------- */
    // When the user taps on the button, run onTap and update toggled
    const handleTap = () => {
        window["__checkBudget__"]();
        if (disabled)
            return;
        const next = !state.toggled;
        // Call onTap with the toggled state
        onTap(next);
        // If this button should toggle, flip the toggle state
        if (toggle) {
            setState(Object.assign({}, state, { toggled: next, hovered: false, active: false }));
        }
    };
    // Set the hovered state when the user mouses in or out
    const setHover = (hovered) => setState(Object.assign({}, state, { hovered, active: hovered ? state.active : false }));
    // Set the active state when the user mouses down or up
    const setActive = (active) => setState(Object.assign({}, state, { active }));
    /* ------------------------------ Presentation ------------------------------ */
    // Grab the properties we want to use from state
    const { toggled, hovered, active } = state;
    let secondary = false;
    const tintColor = framer_1.Color(tint);
    const accentColor = framer_1.Color(accent);
    const variants = {
        initial: {
            background: tint,
        },
        hovered: {
            background: framer_1.Color.brighten(tintColor, 10),
        },
        active: {
            background: framer_1.Color.brighten(tintColor, 15),
        },
        toggled: {
            background: framer_1.Color.brighten(tintColor, 20),
        },
    };
    // Determine which variant to show
    const current = disabled
        ? toggled
            ? "toggled"
            : "initial"
        : toggled
            ? "toggled"
            : active
                ? "active"
                : hovered
                    ? "hovered"
                    : "initial";
    return (React.createElement(framer_1.Frame
    // Pass in container props when using this component in code
    , Object.assign({}, props, { 
        // Constant props
        size: "100%", borderRadius: height / 2, opacity: disabled ? 0.3 : 1, color: accent, style: {
            fontSize: 14,
            fontWeight: 600,
        }, 
        // Variant props
        variants: variants, initial: current, animate: current, 
        // Events
        onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false), onMouseDown: () => setActive(true), onMouseUp: () => setActive(false), onClick: handleTap }), text));
}
exports.Button = Button;
// Set the component's default properties
Button.defaultProps = {
    height: 50,
    width: 128,
    disabled: false,
    text: "Get Started!",
    tint: "#027aff",
    accent: "#FFFFFF",
    primary: true,
    onTap: () => null,
};
// Set the component's property controls
framer_1.addPropertyControls(Button, {
    text: {
        type: framer_1.ControlType.String,
        title: "Text",
        defaultValue: "Get Started!",
    },
    toggle: {
        type: framer_1.ControlType.Boolean,
        title: "Toggle",
        defaultValue: false,
    },
    toggled: {
        type: framer_1.ControlType.Boolean,
        title: "Toggled",
        defaultValue: false,
        hidden: ({ toggle }) => !toggle,
    },
    disabled: {
        type: framer_1.ControlType.Boolean,
        title: "Disabled",
        defaultValue: false,
    },
    tint: {
        type: framer_1.ControlType.Color,
        defaultValue: "#027aff",
        title: "Tint",
    },
    accent: {
        type: framer_1.ControlType.Color,
        defaultValue: "#FFFFFF",
        title: "Accent",
    },
});
exports.__info__ = [{ name: "Button", children: false, type: "component" }];


/***/ }),

/***/ "./code/Checkbox.tsx":
/*!***************************!*\
  !*** ./code/Checkbox.tsx ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hlY2tib3guanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL0NoZWNrYm94LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUE4QjtBQUM5QixtQ0FBdUU7QUFhdkU7OztHQUdHO0FBQ0gsU0FBZ0IsUUFBUSxDQUFDLEtBQXFCOztJQUMxQyxpRUFBaUU7SUFDakUsNkRBQTZEO0lBQzdELFdBQVc7SUFDWCxNQUFNLEVBQ0YsS0FBSyxFQUFFLFlBQVksRUFDbkIsUUFBUSxFQUNSLGFBQWEsRUFDYixVQUFVLEVBQ1YsTUFBTSxFQUNOLEtBQUssRUFDTCxJQUFJLEVBQ0osTUFBTSxHQUNULEdBQUcsS0FBSyxDQUFBO0lBRVQsZ0ZBQWdGO0lBRWhGLHFDQUFxQztJQUNyQyxNQUFNLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUM7UUFDckMsS0FBSyxFQUFFLFlBQVk7UUFDbkIsS0FBSyxFQUFFLFVBQVUsQ0FBQyxZQUFZLENBQUM7UUFDL0IsTUFBTSxFQUFFLEtBQUs7UUFDYixPQUFPLEVBQUUsS0FBSztLQUNqQixDQUFDLENBQUE7SUFFRiwrREFBK0Q7SUFDL0QsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7O1FBQ2pCLFFBQVEsbUJBQ0QsS0FBSyxJQUNSLEtBQUssRUFBRSxZQUFZLEVBQ25CLEtBQUssRUFBRSxVQUFVLENBQUMsWUFBWSxDQUFDLElBQ2pDLENBQUE7S0FDTCxFQUFFLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQTtJQUVsQixnRkFBZ0Y7SUFFaEYsdURBQXVEO0lBQ3ZELE1BQU0sUUFBUSxHQUFHLENBQUMsT0FBZ0IsRUFBRSxFQUFFLENBQ2xDLFFBQVEsbUJBQU0sS0FBSyxJQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUcsQ0FBQTtJQUUzRSx1REFBdUQ7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

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
/**
 * Switch
 * @param props
 */
function Checkbox(props) {
    window["__checkBudget__"]();
    // Grab the properties we want to use from props (note that we're
    // renaming value to avoid conflicting with the state's value
    // property
    const { value: initialValue, disabled, onValueChange, validation, height, width, tint, accent, } = props;
    /* ---------------------------------- State --------------------------------- */
    // Initialize state with props values
    const [state, setState] = React.useState({
        value: initialValue,
        valid: validation(initialValue),
        active: false,
        hovered: false,
    });
    // When the hook receives new props values, overwrite the state
    React.useEffect(() => {
        window["__checkBudget__"]();
        setState(Object.assign({}, state, { value: initialValue, valid: validation(initialValue) }));
    }, [initialValue]);
    /* ----------------------------- Event Handlers ----------------------------- */
    // Set the hovered state when the user mouses in or out
    const setHover = (hovered) => setState(Object.assign({}, state, { hovered, active: hovered ? state.active : false }));
    // Set the active state when the user mouses down or up
    const setActive = (active) => setState(Object.assign({}, state, { active }));
    // When the user taps on the switch, run onValueChange and flip the isOn state
    const handleTap = () => {
        window["__checkBudget__"]();
        if (disabled)
            return;
        setState(state => {
            window["__checkBudget__"]();
            const value = !state.value;
            const valid = validation(value);
            onValueChange(value, valid);
            return Object.assign({}, state, { value,
                valid });
        });
    };
    /* ------------------------------ Presentation ------------------------------ */
    // Grab the properties we want to use from state
    const { value, valid, hovered, active } = state;
    const tintColor = framer_1.Color(tint);
    const accentColor = framer_1.Color(accent);
    // Define a set of variants for our options
    const variants = {
        initial: {
            background: framer_1.Color.alpha(tintColor, 0),
            color: tintColor,
        },
        hovered: {
            background: framer_1.Color.alpha(tintColor, 0),
            color: accent,
        },
        active: {
            background: framer_1.Color.alpha(tintColor, 0.5),
            color: accent,
        },
        selected: {
            background: tintColor,
            color: accent,
        },
    };
    // Decide which variant to use
    const currentVariant = disabled
        ? value
            ? "selected"
            : "initial"
        : value
            ? "selected"
            : active
                ? "active"
                : hovered
                    ? "hovered"
                    : "initial";
    return (React.createElement(framer_1.Frame
    // Pass in container props when using this component in code
    , Object.assign({}, props, { 
        // Constants
        size: "100%", borderRadius: "25%", color: accent, opacity: disabled ? 0.3 : 1, border: `2px solid ${tint}`, shadow: valid ? "none" : "0 2px 0px 0px #8855ff", transition: {
            type: "tween",
            duration: 0.16,
        }, style: {
            fontSize: 14,
            fontWeight: 600,
        }, 
        // Variants
        variants: variants, initial: currentVariant, animate: currentVariant, 
        // Events
        onClick: handleTap, onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false), onMouseDown: () => setActive(true), onMouseUp: () => setActive(false) }),
        React.createElement(framer_1.Frame, { size: height - 10, borderRadius: "25%", background: accent, opacity: value ? 1 : 0, scale: value ? 1 : 0.8, center: true, transition: {
                type: "tween",
                duration: 0.15,
            } })));
}
exports.Checkbox = Checkbox;
// Set the component's default properties
Checkbox.defaultProps = {
    value: false,
    disabled: false,
    height: 32,
    width: 32,
    tint: "#027aff",
    accent: "#FFFFFF",
    validation: () => true,
    onValueChange: () => null,
};
// Set the component's property controls
framer_1.addPropertyControls(Checkbox, {
    value: {
        type: framer_1.ControlType.Boolean,
        title: "On",
    },
    disabled: {
        type: framer_1.ControlType.Boolean,
        title: "Disabled",
    },
    tint: {
        type: framer_1.ControlType.Color,
        defaultValue: "#027aff",
        title: "Tint",
    },
    accent: {
        type: framer_1.ControlType.Color,
        defaultValue: "#FFFFFF",
        title: "Accent",
    },
});
exports.__info__ = [{ name: "Checkbox", children: false, type: "component" }];


/***/ }),

/***/ "./code/Examples.tsx":
/*!***************************!*\
  !*** ./code/Examples.tsx ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXhhbXBsZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL0V4YW1wbGVzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1DQUF1QztBQUV2QyxNQUFNLElBQUksR0FBRyxhQUFJLENBQUM7SUFDZCxNQUFNLEVBQUUsQ0FBQztJQUNULE9BQU8sRUFBRSxDQUFDO0lBQ1YsT0FBTyxFQUFFLENBQUM7SUFDVixNQUFNLEVBQUUsSUFBSTtDQUNmLENBQUMsQ0FBQTtBQUVXLFFBQUEsS0FBSyxHQUFhLEdBQUcsRUFBRTs7SUFDaEMsT0FBTztRQUNILEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUU7UUFDckIsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRTtLQUN4QixDQUFBO0NBQ0osQ0FBQTtBQUVZLFFBQUEsTUFBTSxHQUFhLEtBQUssQ0FBQyxFQUFFOztJQUNwQyxPQUFPO1FBQ0gsT0FBTyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUU7UUFDaEMsS0FBSzs7WUFDRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFBO1NBQ2pDO0tBQ0osQ0FBQTtDQUNKLENBQUE7QUFFWSxRQUFBLElBQUksR0FBYSxLQUFLLENBQUMsRUFBRTs7SUFDbEMsT0FBTztRQUNILE9BQU8sRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFO1FBQ2xDLEtBQUs7O1lBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUE7U0FDbkI7S0FDSixDQUFBO0NBQ0osQ0FBQTtBQUVZLFFBQUEsVUFBVSxHQUFhLEdBQUcsRUFBRTs7SUFDckMsT0FBTztRQUNILE9BQU8sRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFO1FBQ2xDLFVBQVUsRUFBRTtZQUNSLElBQUksRUFBRSxRQUFRO1lBQ2QsU0FBUyxFQUFFLEdBQUc7WUFDZCxPQUFPLEVBQUUsQ0FBQztTQUNiO0tBQ0osQ0FBQTtDQUNKLENBQUE7QUFFWSxRQUFBLFNBQVMsR0FBYSxHQUFHLEVBQUU7O0lBQ3BDLE9BQU87UUFDSCxLQUFLOztZQUNELE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUE7WUFFMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQy9CLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUE7U0FDeEI7S0FDSixDQUFBO0NBQ0osQ0FBQTtBQUVZLFFBQUEsU0FBUyxHQUFhLEtBQUssQ0FBQyxFQUFFOztJQUN2QyxPQUFPO1FBQ0gsV0FBVyxFQUFFLElBQUk7S0FDcEIsQ0FBQTtDQUNKLENBQUE7QUFDRCJ9

Object.defineProperty(exports, "__esModule", { value: true });
const framer_1 = __webpack_require__(/*! framer */ "framer");
const data = framer_1.Data({
    rotate: 0,
    rotateY: 0,
    opacity: 1,
    toggle: true,
});
exports.Scale = () => {
    window["__checkBudget__"]();
    return {
        hover: { scale: 1.1 },
        press: { scale: 0.8 },
    };
};
exports.Rotate = props => {
    window["__checkBudget__"]();
    return {
        animate: { rotate: data.rotate },
        onTap() {
            window["__checkBudget__"]();
            data.rotate = data.rotate + 90;
        },
    };
};
exports.Fade = props => {
    window["__checkBudget__"]();
    return {
        animate: { opacity: data.opacity },
        onTap() {
            window["__checkBudget__"]();
            data.opacity = 0;
        },
    };
};
exports.FlipOutput = () => {
    window["__checkBudget__"]();
    return {
        animate: { rotateY: data.rotateY },
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 5,
        },
    };
};
exports.FlipInput = () => {
    window["__checkBudget__"]();
    return {
        onTap() {
            window["__checkBudget__"]();
            const toggle = data.toggle;
            data.rotateY = toggle ? 180 : 0;
            data.toggle = !toggle;
        },
    };
};
exports.Draggable = props => {
    window["__checkBudget__"]();
    return {
        dragEnabled: true,
    };
};
exports.__info__ = [{ name: "Scale", type: "override" }, { name: "Rotate", type: "override" }, { name: "Fade", type: "override" }, { name: "FlipOutput", type: "override" }, { name: "FlipInput", type: "override" }, { name: "Draggable", type: "override" }];


/***/ }),

/***/ "./code/Radio.tsx":
/*!************************!*\
  !*** ./code/Radio.tsx ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmFkaW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL1JhZGlvLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUE4QjtBQUM5QixtQ0FBdUU7QUFhdkU7OztHQUdHO0FBQ0gsU0FBZ0IsS0FBSyxDQUFDLEtBQXFCOztJQUN2QyxpRUFBaUU7SUFDakUsNkRBQTZEO0lBQzdELFdBQVc7SUFDWCxNQUFNLEVBQ0YsS0FBSyxFQUFFLFlBQVksRUFDbkIsUUFBUSxFQUNSLGFBQWEsRUFDYixVQUFVLEVBQ1YsTUFBTSxFQUNOLEtBQUssRUFDTCxJQUFJLEVBQ0osTUFBTSxHQUNULEdBQUcsS0FBSyxDQUFBO0lBRVQsZ0ZBQWdGO0lBRWhGLHFDQUFxQztJQUNyQyxNQUFNLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUM7UUFDckMsS0FBSyxFQUFFLFlBQVk7UUFDbkIsS0FBSyxFQUFFLFVBQVUsQ0FBQyxZQUFZLENBQUM7UUFDL0IsTUFBTSxFQUFFLEtBQUs7UUFDYixPQUFPLEVBQUUsS0FBSztLQUNqQixDQUFDLENBQUE7SUFFRiwrREFBK0Q7SUFDL0QsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7O1FBQ2pCLFFBQVEsbUJBQ0QsS0FBSyxJQUNSLEtBQUssRUFBRSxZQUFZLEVBQ25CLEtBQUssRUFBRSxVQUFVLENBQUMsWUFBWSxDQUFDLElBQ2pDLENBQUE7S0FDTCxFQUFFLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQTtJQUVsQixnRkFBZ0Y7SUFFaEYsdURBQXVEO0lBQ3ZELE1BQU0sUUFBUSxHQUFHLENBQUMsT0FBZ0IsRUFBRSxFQUFFLENBQ2xDLFFBQVEsbUJBQU0sS0FBSyxJQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUcsQ0FBQTtJQUUzRSx1REFBdUQ7SUFDdkQs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

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
/**
 * Switch
 * @param props
 */
function Radio(props) {
    window["__checkBudget__"]();
    // Grab the properties we want to use from props (note that we're
    // renaming value to avoid conflicting with the state's value
    // property
    const { value: initialValue, disabled, onValueChange, validation, height, width, tint, accent, } = props;
    /* ---------------------------------- State --------------------------------- */
    // Initialize state with props values
    const [state, setState] = React.useState({
        value: initialValue,
        valid: validation(initialValue),
        active: false,
        hovered: false,
    });
    // When the hook receives new props values, overwrite the state
    React.useEffect(() => {
        window["__checkBudget__"]();
        setState(Object.assign({}, state, { value: initialValue, valid: validation(initialValue) }));
    }, [initialValue]);
    /* ----------------------------- Event Handlers ----------------------------- */
    // Set the hovered state when the user mouses in or out
    const setHover = (hovered) => setState(Object.assign({}, state, { hovered, active: hovered ? state.active : false }));
    // Set the active state when the user mouses down or up
    const setActive = (active) => setState(Object.assign({}, state, { active }));
    // When the user taps on the switch, run onValueChange and flip the isOn state
    const handleTap = () => {
        window["__checkBudget__"]();
        if (disabled)
            return;
        setState(state => {
            window["__checkBudget__"]();
            const value = !state.value;
            const valid = validation(value);
            onValueChange(value, valid);
            return Object.assign({}, state, { value,
                valid });
        });
    };
    /* ------------------------------ Presentation ------------------------------ */
    // Grab the properties we want to use from state
    const { value, valid, hovered, active } = state;
    const tintColor = framer_1.Color(tint);
    const accentColor = framer_1.Color(accent);
    // Define a set of variants for our options
    const variants = {
        initial: {
            background: framer_1.Color.alpha(tintColor, 0),
            color: tintColor,
        },
        hovered: {
            background: framer_1.Color.alpha(tintColor, 0),
            color: accent,
        },
        active: {
            background: framer_1.Color.alpha(tintColor, 0.5),
            color: accent,
        },
        selected: {
            background: tintColor,
            color: accent,
        },
    };
    // Decide which variant to use
    const currentVariant = disabled
        ? value
            ? "selected"
            : "initial"
        : value
            ? "selected"
            : active
                ? "active"
                : hovered
                    ? "hovered"
                    : "initial";
    return (React.createElement(framer_1.Frame
    // Pass in container props when using this component in code
    , Object.assign({}, props, { 
        // Constants
        size: "100%", borderRadius: "100%", color: accent, opacity: disabled ? 0.3 : 1, border: `2px solid ${tint}`, shadow: valid ? "none" : "0 2px 0px 0px #8855ff", transition: {
            type: "tween",
            duration: 0.16,
        }, style: {
            fontSize: 14,
            fontWeight: 600,
        }, 
        // Variants
        variants: variants, initial: currentVariant, animate: currentVariant, 
        // Events
        onClick: handleTap, onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false), onMouseDown: () => setActive(true), onMouseUp: () => setActive(false) }),
        React.createElement(framer_1.Frame, { size: height - 10, borderRadius: "100%", background: accent, opacity: value ? 1 : 0, scale: value ? 1 : 0.8, center: true, transition: {
                type: "tween",
                duration: 0.15,
            } })));
}
exports.Radio = Radio;
// Set the component's default properties
Radio.defaultProps = {
    value: false,
    disabled: false,
    height: 32,
    width: 32,
    tint: "#027aff",
    accent: "#FFFFFF",
    validation: () => true,
    onValueChange: () => null,
};
// Set the component's property controls
framer_1.addPropertyControls(Radio, {
    value: {
        type: framer_1.ControlType.Boolean,
        title: "On",
    },
    disabled: {
        type: framer_1.ControlType.Boolean,
        title: "Disabled",
    },
    tint: {
        type: framer_1.ControlType.Color,
        defaultValue: "#027aff",
        title: "Tint",
    },
    accent: {
        type: framer_1.ControlType.Color,
        defaultValue: "#FFFFFF",
        title: "Accent",
    },
});
exports.__info__ = [{ name: "Radio", children: false, type: "component" }];


/***/ }),

/***/ "./code/Segment.tsx":
/*!**************************!*\
  !*** ./code/Segment.tsx ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VnbWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvU2VnbWVudC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBOEI7QUFDOUIsbUNBQXVFO0FBZ0J2RTs7O0dBR0c7QUFDSCxTQUFnQixPQUFPLENBQUMsS0FBcUI7O0lBQ3pDLGlFQUFpRTtJQUNqRSxzRUFBc0U7SUFDdEUsa0RBQWtEO0lBQ2xELE1BQU0sRUFDRixLQUFLLEVBQUUsT0FBTyxFQUNkLGFBQWEsRUFBRSxZQUFZLEVBQzNCLE9BQU8sRUFDUCxLQUFLLEVBQ0wsUUFBUSxFQUNSLFVBQVUsRUFDVixhQUFhLEVBQ2IsSUFBSSxFQUNKLE1BQU0sR0FDVCxHQUFHLEtBQUssQ0FBQTtJQUVULGdGQUFnRjtJQUVoRix3QkFBd0I7SUFDeEIsTUFBTSxZQUFZLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQTtJQUU5RCxxQ0FBcUM7SUFDckMsTUFBTSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDO1FBQ3JDLEtBQUssRUFBRSxZQUFZLElBQUksSUFBSTtRQUMzQixhQUFhLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUM7UUFDNUMsWUFBWSxFQUFFLElBQUk7UUFDbEIsV0FBVyxFQUFFLElBQUk7UUFDakIsS0FBSyxFQUFFLFVBQVUsQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDO1FBQ3ZDLE9BQU8sRUFBRSxLQUFLO1FBQ2QsTUFBTSxFQUFFLEtBQUs7S0FDaEIsQ0FBQyxDQUFBO0lBRUYsK0RBQStEO0lBQy9ELEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFOztRQUNqQixNQUFNLGFBQWEsR0FBRyxZQUFZO1lBQzlCLENBQUMsQ0FBQyxZQUFZO1lBQ2QsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQTtR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

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
/**
 * Segment
 * @param props
 */
function Segment(props) {
    window["__checkBudget__"]();
    // Grab the properties we want to use from props (note that we're
    // renaming the value and selectedIndex, to avoid conflicting with the
    // state's `value` and `selectedIndex` properties.
    const { value: initial, selectedIndex: initialIndex, options, width, disabled, validation, onValueChange, tint, accent, } = props;
    /* ---------------------------------- State --------------------------------- */
    // Set the initial value
    const initialValue = initial ? initial : options[initialIndex];
    // Initialize state with props values
    const [state, setState] = React.useState({
        value: initialValue || null,
        selectedIndex: options.indexOf(initialValue),
        hoveredIndex: null,
        activeIndex: null,
        valid: validation(initialValue || null),
        hovered: false,
        active: false,
    });
    // When the hook receives new props values, overwrite the state
    React.useEffect(() => {
        window["__checkBudget__"]();
        const selectedValue = initialValue
            ? initialValue
            : options[initialIndex];
        setState(Object.assign({}, state, { value: selectedValue || null, selectedIndex: options.indexOf(selectedValue), hoveredIndex: null, activeIndex: null, valid: validation(selectedValue || null) }));
    }, [initialIndex, initialValue, options]);
    /* ----------------------------- Event Handlers ----------------------------- */
    // Set the hovered state when the user mouses in or out
    const setHover = (hovered) => {
        window["__checkBudget__"]();
        setState(state => (Object.assign({}, state, { hovered, active: hovered ? state.active : false, hoveredIndex: hovered ? state.hoveredIndex : null, activeIndex: hovered ? state.activeIndex : null })));
    };
    // Set the active state when the user mouses down or up
    const setActive = (active) => {
        window["__checkBudget__"]();
        setState(state => (Object.assign({}, state, { active })));
    };
    // Set the hovered state of an option when the user mouses in or out
    const setOptionHover = (index) => {
        window["__checkBudget__"]();
        setState(state => (Object.assign({}, state, { hoveredIndex: index })));
    };
    // Set the active state of an option when the user mouses down or up
    const setOptionActive = (index) => {
        window["__checkBudget__"]();
        setState(state => (Object.assign({}, state, { activeIndex: index })));
    };
    // When the user selects an option, updatet state and run onValueChange
    const setSelectedIndex = (selectedIndex) => {
        window["__checkBudget__"]();
        if (disabled)
            return;
        const selectedValue = options[selectedIndex];
        const value = selectedValue || null;
        const valid = validation(value);
        onValueChange(value, selectedIndex, valid);
        setState(Object.assign({}, state, { value,
            selectedIndex,
            valid }));
    };
    /* ------------------------------- Presntation ------------------------------ */
    // Get the properties we want from state
    const { value, selectedIndex, hoveredIndex, activeIndex, hovered, active, valid, } = state;
    const tintColor = framer_1.Color(tint);
    const accentColor = framer_1.Color(accent);
    // Define some variants
    const variants = {
        initial: {
            border: `2px solid ${tint}`,
        },
        hovered: {
            border: `2px solid ${framer_1.Color.brighten(tintColor, 10).toValue()}`,
        },
        active: {
            border: `2px solid ${framer_1.Color.brighten(tintColor, 15).toValue()}`,
        },
        focused: {
            border: `2px solid ${framer_1.Color.brighten(tintColor, 20).toValue()}`,
        },
    };
    // Decide which variant to use
    const currentVariant = disabled
        ? "initial"
        : active
            ? "active"
            : hovered
                ? "hovered"
                : "initial";
    // Define a set of variants for our options
    const optionVariants = {
        initial: {
            background: framer_1.Color.alpha(tintColor, 0),
            color: tintColor,
        },
        hovered: {
            background: framer_1.Color.alpha(tintColor, 0),
            color: accent,
        },
        active: {
            background: framer_1.Color.alpha(tintColor, 0.5),
            color: accent,
        },
        selected: {
            background: tintColor,
            color: accent,
        },
    };
    // Calculate a width to use for each segment
    const segmentWidth = (width - (options.length - 1)) / options.length;
    return (React.createElement(framer_1.Frame
    // Pass in container props when using this component in code
    , Object.assign({}, props, { 
        // Constants
        size: "100%", borderRadius: 4, overflow: "hidden", background: "none", opacity: disabled ? 0.3 : 1, shadow: valid ? "none" : "0 2px 0px 0px #8855ff", transition: {
            type: "tween",
            duration: 0.16,
        }, 
        // Variants
        variants: variants, initial: currentVariant, animate: currentVariant, 
        // Events
        onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false), onMouseDown: () => setActive(true), onMouseUp: () => setActive(false) }), options.map((option, index) => {
        window["__checkBudget__"]();
        // An option is hovered if its index matches the state's hoveredIndex
        const hovered = index === hoveredIndex;
        // An option is active if its index matches the state's activeIndex
        const active = index === activeIndex;
        // An option is selected if its index matches the state's selectedIndex
        const selected = index === selectedIndex;
        // Decide which variant to show
        const currentVariant = disabled
            ? selected
                ? "selected"
                : "initial"
            : active
                ? "active"
                : selected
                    ? "selected"
                    : hovered
                        ? "hovered"
                        : "initial";
        return (React.createElement(framer_1.Frame
        // Constant props
        , { 
            // Constant props
            key: `${props.id}_option_${index}`, width: segmentWidth, height: "100%", left: segmentWidth * index, style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 14,
                fontWeight: 600,
                borderLeft: index > 0 && `2px solid ${tint}`,
            }, transition: {
                type: "tween",
                duration: 0.16,
            }, 
            // Variant props
            variants: optionVariants, initial: currentVariant, animate: currentVariant, 
            // Events
            onMouseEnter: () => setOptionHover(index), onMouseDown: () => setOptionActive(index), onMouseUp: () => setOptionActive(null), onClick: () => setSelectedIndex(index) }, option));
    })));
}
exports.Segment = Segment;
// Set the component's default properties
Segment.defaultProps = {
    selectedIndex: 0,
    options: ["Red", "Blue", "Green"],
    height: 50,
    width: 200,
    disabled: false,
    tint: "#027aff",
    textTint: "#FFFFFF",
    onValueChange: () => null,
    validation: () => true,
};
// Set the component's property controls
framer_1.addPropertyControls(Segment, {
    selectedIndex: {
        type: framer_1.ControlType.Number,
        step: 1,
        min: -1,
        max: 10,
        displayStepper: true,
        defaultValue: 0,
    },
    options: {
        type: framer_1.ControlType.Array,
        propertyControl: {
            type: framer_1.ControlType.String,
        },
        defaultValue: ["Red", "Green", "Blue"],
    },
    disabled: {
        type: framer_1.ControlType.Boolean,
        defaultValue: false,
        title: "Disabled",
    },
    tint: {
        type: framer_1.ControlType.Color,
        defaultValue: "#027aff",
        title: "Tint",
    },
    accent: {
        type: framer_1.ControlType.Color,
        defaultValue: "#FFFFFF",
        title: "Accent",
    },
});
exports.__info__ = [{ name: "Segment", children: false, type: "component" }];


/***/ }),

/***/ "./code/Select.tsx":
/*!*************************!*\
  !*** ./code/Select.tsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VsZWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9TZWxlY3QudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQThCO0FBQzlCLG1DQUF1RTtBQWdCdkU7OztHQUdHO0FBQ0gsU0FBZ0IsTUFBTSxDQUFDLEtBQXFCOztJQUN4QyxnREFBZ0Q7SUFDaEQsTUFBTSxFQUNGLEVBQUUsRUFDRixLQUFLLEVBQUUsT0FBTyxFQUNkLGFBQWEsRUFBRSxZQUFZLEVBQzNCLE9BQU8sRUFDUCxRQUFRLEVBQ1IsTUFBTSxFQUNOLElBQUksRUFDSixNQUFNLEVBQ04sVUFBVSxFQUNWLGFBQWEsR0FDaEIsR0FBRyxLQUFLLENBQUE7SUFFVCxnRkFBZ0Y7SUFFaEYsd0JBQXdCO0lBQ3hCLE1BQU0sWUFBWSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUE7SUFFOUQscUNBQXFDO0lBQ3JDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQztRQUNyQyxLQUFLLEVBQUUsWUFBWSxJQUFJLElBQUk7UUFDM0IsYUFBYSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDO1FBQzVDLEtBQUssRUFBRSxVQUFVLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQztRQUN2QyxPQUFPLEVBQUUsS0FBSztRQUNkLE9BQU8sRUFBRSxLQUFLO1FBQ2QsTUFBTSxFQUFFLEtBQUs7UUFDYixZQUFZLEVBQUUsSUFBSTtRQUNsQixXQUFXLEVBQUUsSUFBSTtLQUNwQixDQUFDLENBQUE7SUFFRiwrREFBK0Q7SUFDL0QsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7O1FBQ2pCLE1BQU0sYUFBYSxHQUFHLFlBQVk7WUFDOUIsQ0FBQyxDQUFDLFlBQVk7WUFDZCxDQUFDLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFB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

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
/**
 * Select
 * @param props
 */
function Select(props) {
    window["__checkBudget__"]();
    // Grab the properties we want to use from props
    const { id, value: initial, selectedIndex: initialIndex, options, disabled, height, tint, accent, validation, onValueChange, } = props;
    /* ---------------------------------- State --------------------------------- */
    // Set the initial value
    const initialValue = initial ? initial : options[initialIndex];
    // Initialize state with props values
    const [state, setState] = React.useState({
        value: initialValue || null,
        selectedIndex: options.indexOf(initialValue),
        valid: validation(initialValue || null),
        focused: false,
        hovered: false,
        active: false,
        hoveredIndex: null,
        activeIndex: null,
    });
    // When the hook receives new props values, overwrite the state
    React.useEffect(() => {
        window["__checkBudget__"]();
        const selectedValue = initialValue
            ? initialValue
            : options[initialIndex];
        setState(Object.assign({}, state, { value: selectedValue || null, selectedIndex: options.indexOf(selectedValue), valid: validation(selectedValue || null), focused: false }));
    }, [initialIndex, initialValue, options]);
    /* ----------------------------- Event Handlers ----------------------------- */
    // Set the focused state when the user clicks in or out
    const setFocus = (focused) => {
        window["__checkBudget__"]();
        if (disabled)
            return;
        setState(state => (Object.assign({}, state, { focused, hoveredIndex: null, activeIndex: null })));
    };
    // Set the hovered state when the user mouses over or out
    const setHover = (hovered) => {
        window["__checkBudget__"]();
        setState(state => (Object.assign({}, state, { hovered, active: hovered ? state.active : false, hoveredIndex: hovered ? state.hoveredIndex : null, activeIndex: hovered ? state.activeIndex : null })));
    };
    // Set the active state when the user clicks
    const setActive = (active) => {
        window["__checkBudget__"]();
        setState(state => (Object.assign({}, state, { active })));
    };
    // Set the option's hovered state when the user mouses over or out
    const setOptionHover = (index) => {
        window["__checkBudget__"]();
        setState(state => (Object.assign({}, state, { hoveredIndex: index })));
    };
    // Set the option's active state when the user clicks
    const setOptionActive = (index) => {
        window["__checkBudget__"]();
        setState(state => (Object.assign({}, state, { activeIndex: index })));
    };
    // When the user selects an option, updatet state and run onValueChange
    const setSelectedIndex = (selectedIndex) => {
        window["__checkBudget__"]();
        if (disabled)
            return;
        const selectedValue = options[selectedIndex];
        const value = selectedValue || null;
        const valid = validation(value);
        onValueChange(value, selectedIndex, valid);
        setState(Object.assign({}, state, { value,
            valid,
            selectedIndex, hoveredIndex: null, activeIndex: null, hovered: false, active: false, focused: false }));
    };
    /* ------------------------------ Presentation ------------------------------ */
    // Get the properties we want from state
    const { value, selectedIndex, hoveredIndex, activeIndex, focused, hovered, active, valid, } = state;
    const tintColor = framer_1.Color(tint);
    const accentColor = framer_1.Color(accent);
    // Define a set of variants for our options
    const variants = {
        initial: {
            border: `2px solid ${tint}`,
        },
        hovered: {
            border: `2px solid ${framer_1.Color.brighten(tintColor, 10).toValue()}`,
        },
        active: {
            border: `2px solid ${framer_1.Color.brighten(tintColor, 15).toValue()}`,
        },
    };
    // Define a set of variants for our options
    const optionVariants = {
        initial: {
            background: tint,
        },
        hovered: {
            background: framer_1.Color.brighten(tintColor, 15),
        },
        active: {
            background: framer_1.Color.brighten(tintColor, 15),
        },
        selected: {
            background: framer_1.Color.brighten(tintColor, 20),
            color: accent,
        },
    };
    // Decide which variant to show
    const currentVariant = disabled
        ? "initial"
        : focused
            ? "focused"
            : active
                ? "active"
                : hovered
                    ? "hovered"
                    : "initial";
    // When the select has no value, we want to shift things down by one
    const nullOffset = value ? 0 : 1;
    return (React.createElement(framer_1.Frame
    // Pass in container props when using this component in code
    , Object.assign({}, props, { 
        // Constants
        width: "100%", height: focused ? (options.length + nullOffset) * height : height, overflow: "hidden", borderRadius: 4, color: accent, background: tint, opacity: disabled ? 0.3 : 1, shadow: valid ? "none" : "0 2px 0px 0px #8855ff", style: {
            fontSize: 14,
            fontWeight: 600,
            display: "flex",
            alignItems: "center",
            padding: focused ? "0px 0px" : "0px 12px",
            justifyContent: "flex-start",
            border: `2px solid ${tint}`,
        }, transition: {
            type: "tween",
            duration: 0.16,
        }, 
        // Variants
        variants: variants, initial: currentVariant, animate: currentVariant, 
        // Events
        onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false), onMouseDown: () => setActive(true), onMouseUp: () => setActive(false), onClick: () => focused || setFocus(true) }), focused // if the select is focused, show the options...
        ? options.map((option, index) => {
            window["__checkBudget__"]();
            // An option is hovered if its index matches the state's hoveredIndex
            const hovered = index === hoveredIndex;
            // An option is active if its index matches the state's activeIndex
            const active = index === activeIndex;
            // An option is selected if its index matches the state's selectedIndex
            const selected = index === selectedIndex;
            // Decide which variant to show
            const currentVariant = disabled
                ? selected
                    ? "selected"
                    : "initial"
                : active
                    ? "active"
                    : selected
                        ? "selected"
                        : hovered
                            ? "hovered"
                            : "initial";
            return (React.createElement(framer_1.Frame, { key: `${id}_option_${index}`, width: "100%", height: height, top: height * (index + nullOffset), color: "#FFFFFF", style: {
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    padding: "0px 12px",
                    borderTop: index > 0 && `2px solid ${tint}`,
                }, transition: {
                    type: "tween",
                    duration: 0.05,
                }, 
                // Variants
                variants: optionVariants, initial: currentVariant, animate: currentVariant, 
                // Events
                onMouseEnter: () => setOptionHover(index), onMouseDown: () => setOptionActive(index), onMouseUp: () => setOptionActive(null), onClick: () => setSelectedIndex(index) }, option));
        }) // otherwise, just show the value
        : state.value));
}
exports.Select = Select;
// Set the component's default properties
Select.defaultProps = {
    value: "Red",
    selectedIndex: 0,
    options: ["Red", "Blue", "Green"],
    height: 50,
    width: 200,
    disabled: false,
    onValueChange: () => null,
    validation: () => true,
};
// Set the component's property controls
framer_1.addPropertyControls(Select, {
    selectedIndex: {
        type: framer_1.ControlType.Number,
        step: 1,
        min: -1,
        max: 10,
        displayStepper: true,
        defaultValue: 0,
    },
    options: {
        type: framer_1.ControlType.Array,
        propertyControl: {
            type: framer_1.ControlType.String,
        },
        defaultValue: ["Red", "Green", "Blue"],
    },
    disabled: {
        type: framer_1.ControlType.Boolean,
        defaultValue: false,
        title: "Disabled",
    },
    tint: {
        type: framer_1.ControlType.Color,
        defaultValue: "#027aff",
        title: "Tint",
    },
    accent: {
        type: framer_1.ControlType.Color,
        defaultValue: "#FFFFFF",
        title: "Accent",
    },
});
exports.__info__ = [{ name: "Select", children: false, type: "component" }];


/***/ }),

/***/ "./code/Slider.tsx":
/*!*************************!*\
  !*** ./code/Slider.tsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2xpZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9TbGlkZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQThCO0FBQzlCLG1DQUF1RTtBQWlCdkU7OztHQUdHO0FBQ0gsU0FBZ0IsTUFBTSxDQUFDLEtBQXFCOztJQUN4QyxnREFBZ0Q7SUFDaEQsTUFBTSxFQUNGLEtBQUssRUFBRSxZQUFZLEVBQ25CLEdBQUcsRUFDSCxHQUFHLEVBQ0gsUUFBUSxFQUNSLElBQUksRUFDSixLQUFLLEVBQ0wsUUFBUSxFQUNSLFVBQVUsRUFDVixVQUFVLEVBQ1YsYUFBYSxFQUNiLElBQUksRUFDSixNQUFNLEdBQ1QsR0FBRyxLQUFLLENBQUE7SUFFVCxnRkFBZ0Y7SUFFaEYsMEJBQTBCO0lBQzFCLE1BQU0sWUFBWSxHQUFHLE1BQU0sQ0FBQyxZQUFZLEdBQUcsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQ3JELE1BQU0sZUFBZSxHQUFHLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFBO0lBRTFELHFDQUFxQztJQUNyQyxNQUFNLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUM7UUFDckMsS0FBSyxFQUFFLFlBQVk7UUFDbkIsUUFBUSxFQUFFLGVBQWU7UUFDekIsS0FBSyxFQUFFLFVBQVUsQ0FBQyxZQUFZLEVBQUUsZUFBZSxDQUFDO1FBQ2hELFFBQVEsRUFBRSxLQUFLO1FBQ2YsT0FBTyxFQUFFLEtBQUs7S0FDakIsQ0FBQyxDQUFBO0lBRUYsK0RBQStEO0lBQy9ELEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFOztRQUNqQixNQUFNLFlBQVksR0FBRyxNQUFNLENBQUMsWUFBWSxHQUFHLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUNyRCxNQUFNLGVBQWUsR0FBRyxDQUFDLFlBQVksR0FBRyxHQUFHLENBQUMs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

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
/**
 * Slider
 * @param props
 */
function Slider(props) {
    window["__checkBudget__"]();
    // Grab the properties we want to use from props
    const { value: initialValue, min, max, disabled, step, width, knobSize, railHeight, validation, onValueChange, tint, accent, } = props;
    /* ---------------------------------- State --------------------------------- */
    // Step the incoming value
    const steppedValue = toStep(initialValue - min, step);
    const steppedProgress = (steppedValue - min) / (max - min);
    // Initialize state with props values
    const [state, setState] = React.useState({
        value: steppedValue,
        progress: steppedProgress,
        valid: validation(steppedValue, steppedProgress),
        dragging: false,
        hovered: false,
    });
    // When the hook receives new props values, overwrite the state
    React.useEffect(() => {
        window["__checkBudget__"]();
        const steppedValue = toStep(initialValue - min, step);
        const steppedProgress = (steppedValue - min) / (max - min);
        setState(Object.assign({}, state, { value: steppedValue, progress: steppedProgress, valid: validation(steppedValue, steppedProgress) }));
    }, [initialValue, min, max]);
    /* ----------------------------- Event Handlers ----------------------------- */
    // Set the hovered state when the user mouses in or out
    const setHover = (hovered) => setState(Object.assign({}, state, { hovered }));
    // Set the dragging state when the user begins and end a drag
    const setDragging = (dragging) => setState(Object.assign({}, state, { dragging }));
    const handleRailTap = (_, event, c) => console.log(_, event);
    // When the user drags the knob, run onValueChange and update state
    const handleDrag = (event, detail) => {
        window["__checkBudget__"]();
        if (disabled)
            return;
        let normal = detail.point.x / (width - knobSize);
        const value = min + (max - min) * normal;
        const steppedValue = toStep(min + (max - min) * normal, step);
        const steppedProgress = (steppedValue - min) / (max - min);
        const valid = validation(steppedValue, steppedProgress);
        onValueChange(value, steppedProgress, valid);
        setState(state => {
            window["__checkBudget__"]();
            return Object.assign({}, state, { dragging: true, value: steppedValue, progress: steppedProgress });
        });
    };
    /* ------------------------------ Presentation ------------------------------ */
    // Get the properties we want from state
    const { value, valid, progress, dragging, hovered } = state;
    // Determine the widths of our rail and fill
    const railWidth = width - knobSize;
    const fillWidth = railWidth * progress;
    const tintColor = framer_1.Color(tint);
    const accentColor = framer_1.Color(accent);
    return (React.createElement(framer_1.Frame
    // Pass in container props when using this component in code
    , Object.assign({}, props, { 
        // Constants
        center: true, height: railHeight, width: width - knobSize, borderRadius: railHeight / 2, opacity: disabled ? 0.3 : 1, background: framer_1.Color.alpha(tintColor, 0.5), shadow: valid ? "none" : "0 2px 0px 0px #8855ff", onTap: handleRailTap }),
        React.createElement(framer_1.Frame, { center: "y", height: railHeight, width: fillWidth, background: tint, borderRadius: railHeight / 2 }),
        React.createElement(framer_1.Frame, { size: knobSize, top: -knobSize / 2 + railHeight / 2, left: -knobSize / 2, x: dragging ? undefined : fillWidth, borderRadius: "100%", background: accent, drag: disabled ? false : "x", dragMomentum: false, dragElastic: false, dragConstraints: {
                left: 0,
                right: width - knobSize,
            }, 
            // Events
            onDrag: handleDrag, onMouseDown: () => setDragging(true), onMouseUp: () => setDragging(false), onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false) })));
}
exports.Slider = Slider;
// Set the component's default properties
Slider.defaultProps = {
    height: 50,
    width: 200,
    knobSize: 40,
    railHeight: 8,
    step: 0.01,
    value: 62,
    min: 0,
    max: 100,
    tint: "#027aff",
    accent: "#FFFFFF",
    validation: () => true,
    onValueChange: () => null,
};
// Set the component's property controls
framer_1.addPropertyControls(Slider, {
    value: {
        type: framer_1.ControlType.Number,
        min: 0,
        max: 100,
        defaultValue: 62,
        title: "Value",
    },
    min: {
        type: framer_1.ControlType.Number,
        min: 0,
        max: 100,
        defaultValue: 0,
        title: "Min",
    },
    max: {
        type: framer_1.ControlType.Number,
        min: 0,
        max: 100,
        defaultValue: 100,
        title: "Max",
    },
    step: {
        type: framer_1.ControlType.Number,
        min: 0.01,
        max: 100,
        step: 0.01,
        defaultValue: 0.01,
        title: "Step",
    },
    knobSize: {
        type: framer_1.ControlType.Number,
        min: 0,
        max: 100,
        defaultValue: 40,
        title: "Knob Size",
    },
    railHeight: {
        type: framer_1.ControlType.Number,
        min: 0,
        max: 32,
        defaultValue: 8,
        title: "Rail Height",
    },
    disabled: {
        type: framer_1.ControlType.Boolean,
        defaultValue: false,
        title: "Disabled",
    },
    tint: {
        type: framer_1.ControlType.Color,
        defaultValue: "#027aff",
        title: "Tint",
    },
    accent: {
        type: framer_1.ControlType.Color,
        defaultValue: "#FFFFFF",
        title: "Accent",
    },
});
// helpers
function toStep(number, increment, offset = 0) {
    window["__checkBudget__"]();
    return Math.floor((number - offset) / increment) * increment + offset;
}
exports.__info__ = [{ name: "Slider", children: false, type: "component" }];


/***/ }),

/***/ "./code/Stepper.tsx":
/*!**************************!*\
  !*** ./code/Stepper.tsx ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RlcHBlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvU3RlcHBlci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBOEI7QUFDOUIsbUNBQXVFO0FBZXZFOzs7R0FHRztBQUNILFNBQWdCLE9BQU8sQ0FBQyxLQUFxQjs7SUFDekMsaUVBQWlFO0lBQ2pFLDZEQUE2RDtJQUM3RCxXQUFXO0lBQ1gsTUFBTSxFQUNGLEtBQUssRUFBRSxZQUFZLEVBQ25CLElBQUksRUFDSixRQUFRLEVBQ1IsVUFBVSxFQUNWLGFBQWEsRUFDYixFQUFFLEVBQ0YsS0FBSyxFQUNMLElBQUksRUFDSixNQUFNLEdBQ1QsR0FBRyxLQUFLLENBQUE7SUFFVCxnRkFBZ0Y7SUFFaEYscUNBQXFDO0lBQ3JDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQztRQUNyQyxLQUFLLEVBQUUsWUFBWTtRQUNuQixLQUFLLEVBQUUsVUFBVSxDQUFDLFlBQVksQ0FBQztRQUMvQixPQUFPLEVBQUUsS0FBSztRQUNkLE1BQU0sRUFBRSxLQUFLO1FBQ2IsYUFBYSxFQUFFLElBQUk7UUFDbkIsWUFBWSxFQUFFLElBQUk7S0FDckIsQ0FBQyxDQUFBO0lBRUYsK0RBQStEO0lBQy9ELEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFOztRQUNqQixRQUFRLG1CQUNELEtBQUssSUFDUixLQUFLLEVBQUUsWUFBWSxFQUNuQixLQUFLLEVBQUUsVUFBVSxDQUFDLFlBQVksQ0FBQyxJQUNqQyxDQUFBO0tBQ0wsRUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUE7SUFFbEIsZ0ZBQWdGO0lBRWhGLHVEQUF1RDtJQUN2RCxNQUFNLFFBQVEsR0FBRyxDQUFDLE9BQWdCLEVBQUUsRUFBRTs7UUFDbEMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsbUJBQ1gsS0FBSyxJQUNSLE9BQU8sRUFDUCxNQUFNLEVBQUUsT0FB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

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
/**
 * Stepper
 * @param props
 */
function Stepper(props) {
    window["__checkBudget__"]();
    // Grab the properties we want to use from props (note that we're
    // renaming value to avoid conflicting with the state's value
    // property
    const { value: initialValue, step, disabled, validation, onValueChange, id, width, tint, accent, } = props;
    /* ---------------------------------- State --------------------------------- */
    // Initialize state with props values
    const [state, setState] = React.useState({
        value: initialValue,
        valid: validation(initialValue),
        hovered: false,
        active: false,
        hoveredButton: null,
        activeButton: null,
    });
    // When the hook receives new props values, overwrite the state
    React.useEffect(() => {
        window["__checkBudget__"]();
        setState(Object.assign({}, state, { value: initialValue, valid: validation(initialValue) }));
    }, [initialValue]);
    /* ----------------------------- Event Handlers ----------------------------- */
    // Set the hovered state when the user mouses in or out
    const setHover = (hovered) => {
        window["__checkBudget__"]();
        setState(state => (Object.assign({}, state, { hovered, active: hovered ? state.active : false, hoveredButton: hovered ? state.hoveredButton : null, activeButton: hovered ? state.activeButton : null })));
    };
    // Set the active state when the user mouses down or up
    const setActive = (active) => {
        window["__checkBudget__"]();
        setState(state => (Object.assign({}, state, { active })));
    };
    // Set the hovered state of an option when the user mouses in or out
    const setHoveredButton = (button) => {
        window["__checkBudget__"]();
        setState(state => (Object.assign({}, state, { hoveredButton: button })));
    };
    // Set the active state of an option when the user mouses down or up
    const setActiveButton = (button) => {
        window["__checkBudget__"]();
        setState(state => (Object.assign({}, state, { activeButton: button })));
    };
    // When the user selects an option, updatet state and run onValueChange
    const handleTap = (delta) => {
        window["__checkBudget__"]();
        if (disabled)
            return;
        setState(state => {
            window["__checkBudget__"]();
            const value = (state.value += delta * step);
            const valid = validation(value);
            onValueChange(value, valid);
            return Object.assign({}, state, { value,
                valid });
        });
    };
    /* ------------------------------ Presentation ------------------------------ */
    // Grab the properties we want to use from state
    const { value, hovered, active, valid, hoveredButton, activeButton } = state;
    const tintColor = framer_1.Color(tint);
    const accentColor = framer_1.Color(accent);
    // Define some variants
    const variants = {
        initial: {
            border: `2px solid ${tint}`,
        },
        hovered: {
            border: `2px solid ${framer_1.Color.brighten(tintColor, 10).toValue()}`,
        },
        active: {
            border: `2px solid ${framer_1.Color.brighten(tintColor, 15).toValue()}`,
        },
    };
    // Decide which variant to use
    const currentVariant = disabled
        ? "initial"
        : active
            ? "active"
            : hovered
                ? "hovered"
                : "initial";
    // Define a set of variants for our options
    const buttonVariants = {
        initial: {
            background: framer_1.Color.alpha(tintColor, 0),
            color: tintColor,
        },
        hovered: {
            background: framer_1.Color.alpha(tintColor, 0),
            color: accent,
        },
        active: {
            background: framer_1.Color.alpha(tintColor, 0.5),
            color: accent,
        },
    };
    // A helper to get each button's current variant
    const getButtonVariant = (button) => {
        window["__checkBudget__"]();
        const hovered = button === hoveredButton;
        const active = button === activeButton;
        return disabled
            ? "initial"
            : active
                ? "active"
                : hovered
                    ? "hovered"
                    : "initial";
    };
    // Get each button's current variant
    const incrementCurrent = getButtonVariant("increment");
    const decrementCurrent = getButtonVariant("decrement");
    return (React.createElement(framer_1.Frame
    // Pass in container props when using this component in code
    , Object.assign({}, props, { 
        // Constants
        size: "100%", borderRadius: 4, overflow: "hidden", background: "none", color: accent, opacity: disabled ? 0.3 : 1, shadow: valid ? "none" : "0 2px 0px 0px #8855ff", style: {
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 14,
            fontWeight: 600,
        }, 
        // Variants
        variants: variants, initial: currentVariant, animate: currentVariant, 
        // Events
        onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false), onMouseDown: () => setActive(true), onMouseUp: () => setActive(false) }),
        React.createElement(framer_1.Frame, { key: `${id}_option_decrement`, width: width / 3, height: "100%", left: 0, top: 0, color: accent, style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRight: `2px solid ${tint}`,
                paddingLeft: 4,
                paddingBottom: 4,
                fontSize: 24,
            }, 
            // Variants
            variants: buttonVariants, initial: decrementCurrent, animate: decrementCurrent, 
            // Events
            onMouseEnter: () => setHoveredButton("decrement"), onMouseDown: () => setActiveButton("decrement"), onMouseUp: () => setActiveButton(null), onClick: () => handleTap(-1) }, "-"),
        value.toString(),
        React.createElement(framer_1.Frame, { key: `${id}_option_increment`, width: width / 3, height: "100%", left: (width / 3) * 2, top: 0, color: accent, transition: {
                type: "tween",
                duration: 0.16,
            }, style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderLeft: `2px solid ${tint}`,
                paddingRight: 4,
                paddingBottom: 4,
                fontSize: 24,
            }, 
            // Variants
            variants: buttonVariants, initial: incrementCurrent, animate: incrementCurrent, 
            // Events
            onMouseEnter: () => setHoveredButton("increment"), onMouseDown: () => setActiveButton("increment"), onMouseUp: () => setActiveButton(null), onClick: () => handleTap(1) }, "+")));
}
exports.Stepper = Stepper;
// Set the component's default properties
Stepper.defaultProps = {
    value: 0,
    step: 1,
    width: 200,
    height: 50,
    disabled: false,
    tint: "#027aff",
    accent: "#FFFFFF",
    onValueChange: () => null,
    validation: () => true,
};
// Set the component's property controls
framer_1.addPropertyControls(Stepper, {
    value: {
        type: framer_1.ControlType.Number,
        step: 1,
        min: 0,
        max: 100,
        displayStepper: true,
        defaultValue: 0,
        title: "Value",
    },
    step: {
        type: framer_1.ControlType.Number,
        step: 1,
        min: 0,
        max: 50,
        displayStepper: true,
        defaultValue: 1,
        title: "Step",
    },
    disabled: {
        type: framer_1.ControlType.Boolean,
        defaultValue: false,
        title: "Disabled",
    },
    tint: {
        type: framer_1.ControlType.Color,
        defaultValue: "#027aff",
        title: "Tint",
    },
    accent: {
        type: framer_1.ControlType.Color,
        defaultValue: "#FFFFFF",
        title: "Accent",
    },
});
exports.__info__ = [{ name: "Stepper", children: false, type: "component" }];


/***/ }),

/***/ "./code/Switch.tsx":
/*!*************************!*\
  !*** ./code/Switch.tsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3dpdGNoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9Td2l0Y2gudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQThCO0FBQzlCLG1DQUF1RTtBQWF2RTs7O0dBR0c7QUFDSCxTQUFnQixNQUFNLENBQUMsS0FBcUI7O0lBQ3hDLGlFQUFpRTtJQUNqRSw2REFBNkQ7SUFDN0QsV0FBVztJQUNYLE1BQU0sRUFDRixLQUFLLEVBQUUsWUFBWSxFQUNuQixRQUFRLEVBQ1IsYUFBYSxFQUNiLFVBQVUsRUFDVixNQUFNLEVBQ04sS0FBSyxFQUNMLElBQUksRUFDSixNQUFNLEdBQ1QsR0FBRyxLQUFLLENBQUE7SUFFVCxnRkFBZ0Y7SUFFaEYscUNBQXFDO0lBQ3JDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQztRQUNyQyxLQUFLLEVBQUUsWUFBWTtRQUNuQixLQUFLLEVBQUUsVUFBVSxDQUFDLFlBQVksQ0FBQztRQUMvQixNQUFNLEVBQUUsS0FBSztRQUNiLE9BQU8sRUFBRSxLQUFLO0tBQ2pCLENBQUMsQ0FBQTtJQUVGLCtEQUErRDtJQUMvRCxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTs7UUFDakIsUUFBUSxtQkFDRCxLQUFLLElBQ1IsS0FBSyxFQUFFLFlBQVksRUFDbkIsS0FBSyxFQUFFLFVBQVUsQ0FBQyxZQUFZLENBQUMsSUFDakMsQ0FBQTtLQUNMLEVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFBO0lBRWxCLGdGQUFnRjtJQUVoRix1REFBdUQ7SUFDdkQsTUFBTSxRQUFRLEdBQUcsQ0FBQyxPQUFnQixFQUFFLEVBQUUsQ0FDbEMsUUFBUSxtQkFBTSxLQUFLLElBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBRyxDQUFBO0lBRTNFLHVEQUF1RDtJQUN2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

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
/**
 * Switch
 * @param props
 */
function Switch(props) {
    window["__checkBudget__"]();
    // Grab the properties we want to use from props (note that we're
    // renaming value to avoid conflicting with the state's value
    // property
    const { value: initialValue, disabled, onValueChange, validation, height, width, tint, accent, } = props;
    /* ---------------------------------- State --------------------------------- */
    // Initialize state with props values
    const [state, setState] = React.useState({
        value: initialValue,
        valid: validation(initialValue),
        active: false,
        hovered: false,
    });
    // When the hook receives new props values, overwrite the state
    React.useEffect(() => {
        window["__checkBudget__"]();
        setState(Object.assign({}, state, { value: initialValue, valid: validation(initialValue) }));
    }, [initialValue]);
    /* ----------------------------- Event Handlers ----------------------------- */
    // Set the hovered state when the user mouses in or out
    const setHover = (hovered) => setState(Object.assign({}, state, { hovered, active: hovered ? state.active : false }));
    // Set the active state when the user mouses down or up
    const setActive = (active) => setState(Object.assign({}, state, { active }));
    // When the user taps on the switch, run onValueChange and flip the isOn state
    const handleTap = () => {
        window["__checkBudget__"]();
        if (disabled)
            return;
        setState(state => {
            window["__checkBudget__"]();
            const value = !state.value;
            const valid = validation(value);
            onValueChange(value, valid);
            return Object.assign({}, state, { value,
                valid });
        });
    };
    /* ------------------------------ Presentation ------------------------------ */
    // Grab the properties we want to use from state
    const { value, valid, hovered, active } = state;
    const tintColor = framer_1.Color(tint);
    const accentColor = framer_1.Color(accent);
    // Define a set of variants for our options
    const variants = {
        initial: {
            background: framer_1.Color.alpha(tintColor, 0),
            color: tintColor,
        },
        hovered: {
            background: framer_1.Color.alpha(tintColor, 0),
            color: accent,
        },
        active: {
            background: framer_1.Color.alpha(tintColor, 0.5),
            color: accent,
        },
        selected: {
            background: tintColor,
            color: accent,
        },
    };
    // Decide which variant to use
    const currentVariant = disabled
        ? value
            ? "selected"
            : "initial"
        : value
            ? "selected"
            : active
                ? "active"
                : hovered
                    ? "hovered"
                    : "initial";
    return (React.createElement(framer_1.Frame
    // Pass in container props when using this component in code
    , Object.assign({}, props, { 
        // Constants
        size: "100%", borderRadius: height / 2, color: accent, opacity: disabled ? 0.3 : 1, border: `2px solid ${tint}`, shadow: valid ? "none" : "0 2px 0px 0px #8855ff", transition: {
            type: "tween",
            duration: 0.16,
        }, style: {
            fontSize: 14,
            fontWeight: 600,
        }, 
        // Variants
        variants: variants, initial: currentVariant, animate: currentVariant, 
        // Events
        onClick: handleTap, onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false), onMouseDown: () => setActive(true), onMouseUp: () => setActive(false) }),
        React.createElement(framer_1.Frame, { size: height - 10, borderRadius: "100%", background: accent, top: 3, left: 2, initial: { x: value ? width - height : 2 }, animate: { x: value ? width - height : 2 }, transition: {
                duration: 0.15,
            } })));
}
exports.Switch = Switch;
// Set the component's default properties
Switch.defaultProps = {
    value: false,
    disabled: false,
    height: 50,
    width: 80,
    tint: "#027aff",
    accent: "#FFFFFF",
    validation: () => true,
    onValueChange: () => null,
};
// Set the component's property controls
framer_1.addPropertyControls(Switch, {
    value: {
        type: framer_1.ControlType.Boolean,
        title: "On",
    },
    disabled: {
        type: framer_1.ControlType.Boolean,
        title: "Disabled",
    },
    tint: {
        type: framer_1.ControlType.Color,
        defaultValue: "#027aff",
        title: "Tint",
    },
    accent: {
        type: framer_1.ControlType.Color,
        defaultValue: "#FFFFFF",
        title: "Accent",
    },
});
exports.__info__ = [{ name: "Switch", children: false, type: "component" }];


/***/ }),

/***/ "./code/TextInput.tsx":
/*!****************************!*\
  !*** ./code/TextInput.tsx ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGV4dElucHV0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9UZXh0SW5wdXQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQThCO0FBQzlCLG1DQUF1RTtBQWN2RTs7O0dBR0c7QUFDSCxTQUFnQixTQUFTLENBQUMsS0FBcUI7O0lBQzNDLGlFQUFpRTtJQUNqRSxtRUFBbUU7SUFDbkUsV0FBVztJQUNYLE1BQU0sRUFDRixLQUFLLEVBQUUsWUFBWSxFQUNuQixXQUFXLEVBQ1gsUUFBUSxFQUNSLFFBQVEsRUFDUixRQUFRLEVBQ1IsSUFBSSxFQUNKLE1BQU0sRUFDTixVQUFVLEVBQ1YsYUFBYSxHQUNoQixHQUFHLEtBQUssQ0FBQTtJQUVULGdGQUFnRjtJQUVoRixxQ0FBcUM7SUFDckMsTUFBTSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDO1FBQ3JDLEtBQUssRUFBRSxZQUFZO1FBQ25CLEtBQUssRUFBRSxVQUFVLENBQUMsWUFBWSxDQUFDO1FBQy9CLE9BQU8sRUFBRSxLQUFLO1FBQ2QsT0FBTyxFQUFFLEtBQUs7UUFDZCxNQUFNLEVBQUUsS0FBSztLQUNoQixDQUFDLENBQUE7SUFFRiwrREFBK0Q7SUFDL0QsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7O1FBQ2pCLFFBQVEsbUJBQ0QsS0FBSyxJQUNSLEtBQUssRUFBRSxZQUFZLEVBQ25CLEtBQUssRUFBRSxVQUFVLENBQUMsWUFBWSxDQUFDLElBQ2pDLENBQUE7S0FDTCxFQUFFLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQTtJQUVsQixnRkFBZ0Y7SUFFaEYsa0VBQWtFO0lBQ2xFLE1BQU0sUUFBUSxHQUFHLENBQUMsT0FBZ0IsRUFBRSxFQUFFLENBQUMsUUFBUSxtQkFBTSxLQUFLLElBQUUsT0FBTyxJQUFHLENBQUE7SUFFdEUsdURBQXVEO0lBQ3ZELE1BQU0sUUFBUSxHQUFHLENBQUMsT0FBZ0IsRUFBRSxF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

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
/**
 * TextInput
 * @param props
 */
function TextInput(props) {
    window["__checkBudget__"]();
    // Grab the properties we want to use from props (note that we're
    // renaming the value to avoid conflicting with the state's `value`
    // property
    const { value: initialValue, placeholder, disabled, readOnly, password, tint, accent, validation, onValueChange, } = props;
    /* ---------------------------------- State --------------------------------- */
    // Initialize state with props values
    const [state, setState] = React.useState({
        value: initialValue,
        valid: validation(initialValue),
        focused: false,
        hovered: false,
        active: false,
    });
    // When the hook receives new props values, overwrite the state
    React.useEffect(() => {
        window["__checkBudget__"]();
        setState(Object.assign({}, state, { value: initialValue, valid: validation(initialValue) }));
    }, [initialValue]);
    /* ----------------------------- Event Handlers ----------------------------- */
    // Set the focus state when the user clicks in or out of the input
    const setFocus = (focused) => setState(Object.assign({}, state, { focused }));
    // Set the hovered state when the user mouses in or out
    const setHover = (hovered) => setState(Object.assign({}, state, { hovered, active: hovered ? state.active : false }));
    // Set the active state when the user mouses down or up
    const setActive = (active) => setState(Object.assign({}, state, { active }));
    // When the content of the input changes, run onValueChange and update state
    const handleInput = event => {
        window["__checkBudget__"]();
        if (disabled)
            return;
        const { value } = event.target;
        const valid = validation(value);
        onValueChange(value, valid);
        setState(Object.assign({}, state, { value, valid }));
    };
    /* ------------------------------ Presentation ------------------------------ */
    // Grab the properties we want to use from state
    const { value, valid, focused, hovered, active } = state;
    const tintColor = framer_1.Color(tint);
    const accentColor = framer_1.Color(accent);
    // Define some variants
    const variants = {
        initial: {
            border: `2px solid ${tintColor.toValue()}`,
        },
        hovered: {
            border: `2px solid ${framer_1.Color.brighten(tintColor, 10).toValue()}`,
        },
        active: {
            border: `2px solid ${framer_1.Color.brighten(tintColor, 15).toValue()}`,
        },
        focused: {
            border: `2px solid ${framer_1.Color.brighten(tintColor, 20).toValue()}`,
        },
    };
    // Decide which variant to use
    const currentVariant = disabled
        ? "initial"
        : active
            ? "active"
            : focused
                ? "focused"
                : hovered
                    ? "hovered"
                    : "initial";
    return (React.createElement(framer_1.Frame
    // Pass in container props when using this component in code
    , Object.assign({}, props, { 
        // Constants
        size: "100%", background: value ? tint : "none", borderRadius: 4, color: accent, opacity: disabled ? 0.3 : 1, shadow: valid ? "none" : "0 2px 0px 0px #8855ff", 
        // Variants
        variants: variants, initial: currentVariant, animate: currentVariant }),
        React.createElement("input", { type: password ? "password" : "text", value: value, placeholder: placeholder, disabled: disabled, readOnly: readOnly, style: {
                padding: "0px 12px",
                fontSize: 14,
                fontWeight: 600,
                width: "100%",
                height: "100%",
                background: "none",
                borderRadius: 4,
                outline: "none",
                border: "none",
                color: accent,
            }, 
            // Events
            onFocus: () => setFocus(true), onBlur: () => setFocus(false), onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false), onMouseDown: () => setActive(true), onMouseUp: () => setActive(false), onChange: handleInput })));
}
exports.TextInput = TextInput;
// Set the component's default properties
TextInput.defaultProps = {
    value: "",
    placeholder: "",
    disabled: false,
    readOnly: false,
    validation: () => true,
    onValueChange: () => null,
    height: 50,
    width: 200,
};
// Set the component's property controls
framer_1.addPropertyControls(TextInput, {
    value: {
        type: framer_1.ControlType.String,
        defaultValue: "",
        title: "Value",
    },
    placeholder: {
        type: framer_1.ControlType.String,
        defaultValue: "",
        title: "Placeholder",
    },
    readOnly: {
        type: framer_1.ControlType.Boolean,
        defaultValue: false,
        title: "Read Only",
    },
    password: {
        type: framer_1.ControlType.Boolean,
        defaultValue: false,
        title: "Password",
    },
    disabled: {
        type: framer_1.ControlType.Boolean,
        defaultValue: false,
        title: "Disabled",
    },
    tint: {
        type: framer_1.ControlType.Color,
        defaultValue: "#027aff",
        title: "Tint",
    },
    accent: {
        type: framer_1.ControlType.Color,
        defaultValue: "#FFFFFF",
        title: "Accent",
    },
});
exports.__info__ = [{ name: "TextInput", children: false, type: "component" }];


/***/ }),

/***/ "./code/canvas.tsx":
/*!*************************!*\
  !*** ./code/canvas.tsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// WARNING: this file is auto generated, any changes will be lost
const framer_1 = __webpack_require__(/*! framer */ "framer");
const canvas = framer_1.CanvasStore.shared({"children":[]});


/***/ }),

/***/ "./package.js":
/*!********************!*\
  !*** ./package.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// The template for the dynamic webpack entry. Be aware of the variables

const packageJson = __webpack_require__(/*! ./package.json */ "./package.json")

const package = {
    packageJson,
    sourceModules: {},
    dependencies: {},
}

// This is a special webpack thing that watches the whole directory
// https://github.com/webpack/docs/wiki/context
const ctx = __webpack_require__("./code sync recursive \\.(t|j)s(x?)|\\.css$")

ctx.keys().forEach(key => {
    package.sourceModules[key] = () => ctx(key)
})

// The packages are passed in through a template
const packages = {}

                packages["framer"] = () => {
                    var package = {}
                    try {
                        package = __webpack_require__(/*! framer */ "framer")
                    } catch (e) {
                        console.log(e)
                    }
                    package.__framer__ = package.__framer__ || {}
                    package.__framer__.packageJson = {"name":"framer","version":"1.0.0-beta.8","main":"build/framer.js","author":"Framer","license":"MIT","scripts":{"coverage":"jest --coverage","test":"jest","watch":"jest --watch"},"devDependencies":{"@microsoft/api-documenter":"^1.5.47","@microsoft/api-extractor":"7.0.13","@types/chalk":"^2.2.0","@types/draft-js":"0.10.19","@types/enzyme":"^3.1.10","@types/enzyme-adapter-react-16":"^1.0.3","@types/hsluv":"https://github.com/framer/typed_hsluv#bump","@types/jest":"^23.0.0","@types/jest-diff":"^20.0.0","@types/jest-matcher-utils":"^21.0.1","@types/node":"^10.12.9","@types/react":"16.8.4","@types/react-dom":"^16.8","cache-loader":"^1.2.2","chalk":"^2.4.1","convert-tsconfig-paths-to-webpack-aliases":"^0.9.2","css.escape":"^1.5.1","draft-js":"0.10.4","enzyme":"^3.9.0","enzyme-adapter-react-16":"^1.9.1","eventemitter3":"^3.1.0","fork-ts-checker-webpack-plugin":"^0.4.1","framer-motion":"^0.14.2","hoist-non-react-statics":"^2.5.0","hsluv":"^0.0.3","immutable":"^3.8.2","jest":"^23.1.0","jest-diff":"^23.6.0","jest-dom":"^3.1.3","jest-junit":"^5.2.0","modclean":"^3.0.0-beta.1","progress-bar-webpack-plugin":"^1.11.0","raf":"^3.4.0","react":"^16.8","react-dev-utils":"^5.0.1","react-dom":"^16.8","react-testing-library":"^6.0.0","resize-observer-polyfill":"^1.5.1","semver":"^5.6.0","ts-jest":"^23.10.5","ts-loader":"^4.1.0","tslint":"^5.12.1","tslint-react-hooks":"^1.1.0","typescript":"3.3","watch":"^1.0.2","webpack":"^4.4.1","webpack-cli":"^3.1.2","webpack-dev-server":"^3.1.10","xcssmatrix":"^0.2.2"},"peerDependencies":{"react":"^16.8.2","react-dom":"^16.8.2"},"tsdoc":{"tsdocFlavor":"AEDoc"},"framer":{"components":[{"name":"Scroll","children":true,"properties":[{"key":"direction","title":"Direction","kind":"enum","options":["horizontal","vertical","both"]}]},{"name":"Page"},{"name":"Stack"},{"name":"FramerAppleWatch38","type":"device"},{"name":"FramerAppleWatch42","type":"device"},{"name":"FramerSonySmartWatch","type":"device"},{"name":"FramerAppleIPhoneSE","type":"device"},{"name":"FramerAppleIPhone8","type":"device"},{"name":"FramerAppleIPhone8Plus","type":"device"},{"name":"FramerAppleIPhoneXS","type":"device"},{"name":"FramerAppleIPhoneXR","type":"device"},{"name":"FramerAppleIPhoneXSMax","type":"device"},{"name":"FramerGooglePixel2","type":"device"},{"name":"FramerGooglePixel2XL","type":"device"},{"name":"FramerGooglePixel3","type":"device"},{"name":"FramerGooglePixel3XL","type":"device"},{"name":"FramerSamsungNote5","type":"device"},{"name":"FramerSamsungGalaxyS9","type":"device"},{"name":"FramerAppleIPadAir","type":"device"},{"name":"FramerAppleIPadMini","type":"device"},{"name":"FramerAppleIPadPro","type":"device"},{"name":"FramerGoogleNexusTablet","type":"device"},{"name":"FramerMicrosoftSurfacePro3","type":"device"},{"name":"FramerMicrosoftSurfacePro4","type":"device"},{"name":"FramerAppleIMac","type":"device"},{"name":"FramerAppleThunderboltDisplay","type":"device"},{"name":"FramerAppleMacBook","type":"device"},{"name":"FramerAppleMacBookAir","type":"device"},{"name":"FramerAppleMacBookPro","type":"device"},{"name":"FramerDellXPS","type":"device"},{"name":"FramerMicrosoftSurfaceBook","type":"device"},{"name":"FramerSonyW850C","type":"device"},{"name":"FramerStoreArtwork","type":"device"},{"name":"FramerStoreIcon","type":"device"}]},"dependencies":{"style-value-types":"^3.1.0"}}
                    return package
                }

package.dependencies = packages

exports.__framer__ = package


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: main, license, devDependencies, peerDependencies, framer, author, default */
/***/ (function(module) {

module.exports = {"main":"dist/index.js","license":"MIT","devDependencies":{"@types/react":"^16.8"},"peerDependencies":{"framer":"^1.0 || ^1.0.0-beta","react":"^16.8"},"framer":{"id":"6b83fb15-5b05-4979-a5ce-6b01dbae3c60"},"author":"Steve Ruiz"};

/***/ }),

/***/ "framer":
/*!******************************************************************************************!*\
  !*** external {"root":"Framer","commonjs2":"framer","commonjs":"framer","amd":"framer"} ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_framer__;

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ });
});