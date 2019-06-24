(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("framer"));
	else if(typeof define === 'function' && define.amd)
		define(["framer"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("framer")) : factory(root["Framer"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE_framer__) {
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
	"./GistClient.tsx": "./code/GistClient.tsx",
	"./MockData.json": "./code/MockData.json",
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

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9BcHAudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQSxtQ0FBdUM7QUFFdkMsNkNBQXlDO0FBQ3pDLG1FQUFpRTtBQUVqRSxhQUFhO0FBQ2IsbURBQW1EO0FBRW5ELE1BQU0sYUFBYSxHQUFHLDBDQUEwQyxDQUFBO0FBRWhFLElBQUksVUFBVSxDQUFBO0FBQ2QsSUFBSSxTQUFTLENBQUE7QUFFYixRQUFRO0FBRVIsTUFBTSxRQUFRLEdBQUcsYUFBSSxDQUFDO0lBQ2xCLElBQUksRUFBRSxJQUFJO0lBQ1YsS0FBSyxFQUFFLG9CQUFTO0lBQ2hCLFdBQVcsRUFBRSxDQUFDO0lBQ2QsU0FBUyxFQUFFLE9BQU87SUFDbEIsVUFBVSxFQUFFLElBQVc7Q0FDMUIsQ0FBQyxDQUFBO0FBRUYsU0FBUztBQUVULE1BQU0sWUFBWSxHQUFHLEdBQVMsRUFBRTs7SUFDNUIsSUFBSSxTQUFTLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFBRTtRQUN6QyxTQUFTLEdBQUcsYUFBYSxDQUFBO1FBQ3pCLFVBQVUsR0FBRyx1QkFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBQ2xDLE1BQU0sS0FBSyxHQUFHLG9CQUFTLENBQUE7UUFDdkIsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFBO0tBQ25CO1NBQU07UUFDSCxNQUFNLGFBQWEsR0FBRyxJQUFJLGdDQUFhLENBQUMsRUFBRSxDQUFDLENBQUMsWUFBWSxDQUNwRCxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUNyQyxDQUFPLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRTs7WUFDaEIsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUE7WUFDdEIsVUFBVSxHQUFHLHVCQUFVLENBQUMsU0FBUyxDQUFDLENBQUE7WUFDbEMsTUFBTSxLQUFLLEdBQUcsTUFBTSxVQUFVLENBQUMs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

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const framer_1 = __webpack_require__(/*! framer */ "framer");
const GistClient_1 = __webpack_require__(/*! ./GistClient */ "./code/GistClient.tsx");
const netlify_auth_providers_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module 'netlify-auth-providers'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
// @ts-ignore
const MockData_json_1 = __webpack_require__(/*! ./MockData.json */ "./code/MockData.json");
const EXAMPLE_TOKEN = "eaa8fbe4e81f5f2193afbeb43a3943ff17ac2d68";
let gistClient;
let authToken;
// state
const appState = framer_1.Data({
    gist: null,
    gists: MockData_json_1.data,
    currentPage: 0,
    pageTitle: "Posts",
    backAction: null,
});
// Events
const authenticate = () => __awaiter(this, void 0, void 0, function* () {
    window["__checkBudget__"]();
    if (navigator.userAgent.includes("FramerX")) {
        authToken = EXAMPLE_TOKEN;
        gistClient = GistClient_1.GistClient(authToken);
        const gists = MockData_json_1.data;
        loadGists(gists);
    }
    else {
        const authenticator = new netlify_auth_providers_1.default({}).authenticate({ provider: "github", scope: "user" }, (err, data) => __awaiter(this, void 0, void 0, function* () {
            window["__checkBudget__"]();
            authToken = data.token;
            gistClient = GistClient_1.GistClient(authToken);
            const gists = yield gistClient.all();
            loadGists(gists);
        }));
    }
});
const loadGists = (data) => __awaiter(this, void 0, void 0, function* () {
    window["__checkBudget__"]();
    appState.gists = data;
    appState.currentPage = 1;
    if (data[0]) {
        appState.pageTitle = "Gists for " + data[0].owner.login;
    }
});
const loadGist = (gist) => __awaiter(this, void 0, void 0, function* () {
    window["__checkBudget__"]();
    const data = yield gistClient.get(gist.id);
    appState.gist = data;
    appState.currentPage = 2;
    appState.pageTitle = "Gist for " + data.owner.login;
    appState.backAction = () => {
        window["__checkBudget__"]();
        appState.pageTitle = "Gists for " + data.owner.login;
        appState.currentPage = 1;
    };
});
// authenticate
exports.Button = () => {
    window["__checkBudget__"]();
    return {
        onTap: authenticate,
    };
};
// Overrides
function UsingExampleFlag() {
    window["__checkBudget__"]();
    return {
        y: navigator.userAgent.includes("FramerX") ? 0 : 1000,
    };
}
exports.UsingExampleFlag = UsingExampleFlag;
// Top navigation for current tab / back
function Header() {
    window["__checkBudget__"]();
    return {
        title: appState.pageTitle,
        leftLink: appState.backAction ? "Back" : "",
        leftIcon: appState.backAction ? "chevron-left" : "none",
        onLeftTap: () => appState.backAction && appState.backAction(),
    };
}
exports.Header = Header;
function NavigationPage() {
    window["__checkBudget__"]();
    return {
        currentPage: appState.currentPage,
    };
}
exports.NavigationPage = NavigationPage;
exports.Gists = () => {
    window["__checkBudget__"]();
    return {
        items: appState.gists.map(gist => {
            window["__checkBudget__"]();
            return {
                text: gist.files[Object.keys(gist.files)[0]].filename,
                message: gist.description && gist.description.length > 24
                    ? gist.description.slice(0, 24) + "..."
                    : gist.description,
                component: "icon",
                onTap: () => loadGist(gist),
            };
        }),
    };
};
exports.GistTitle = () => {
    window["__checkBudget__"]();
    const { gist } = appState;
    if (!gist) {
        return {};
    }
    return {
        text: gist.description,
    };
};
exports.GistDate = () => {
    window["__checkBudget__"]();
    const { gist } = appState;
    if (!gist) {
        return {};
    }
    const createdDate = new Date(gist.created_at).toLocaleDateString("en-gb", {});
    const updatedDate = new Date(gist.updated_at).toLocaleDateString("en-gb", {});
    return {
        text: "Created: " + createdDate + " | Updated: " + updatedDate,
    };
};
exports.GistFiles = () => {
    window["__checkBudget__"]();
    const { gist } = appState;
    if (!gist) {
        return {};
    }
    const files = Object.keys(gist.files).map(key => gist.files[key]);
    return {
        cards: files.map(file => ({
            title: file.filename,
            body: "` " + file.content + " `",
            height: 480,
        })),
    };
};
exports.__info__ = [{ name: "Button", type: "override" }, { name: "UsingExampleFlag", type: "override" }, { name: "Header", type: "override" }, { name: "NavigationPage", type: "override" }, { name: "Gists", type: "override" }, { name: "GistTitle", type: "override" }, { name: "GistDate", type: "override" }, { name: "GistFiles", type: "override" }];


/***/ }),

/***/ "./code/GistClient.tsx":
/*!*****************************!*\
  !*** ./code/GistClient.tsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2lzdENsaWVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvR2lzdENsaWVudC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBYSxRQUFBLFVBQVUsR0FBRyxLQUFLLENBQUMsRUFBRTs7SUFDOUIsTUFBTSxPQUFPLEdBQUc7UUFDWixZQUFZLEVBQUUsVUFBVTtLQUMzQixDQUFBO0lBRUQsSUFBSSxLQUFLLElBQUksU0FBUztRQUFFLE9BQU8sQ0FBQyxlQUFlLENBQUMsR0FBRyxTQUFTLEtBQUssRUFBRSxDQUFBO0lBRW5FLE9BQU87UUFDSCxHQUFHLEVBQUUsR0FBRyxFQUFFOztZQUNOLE9BQU8sS0FBSyxDQUFDLDhCQUE4QixFQUFFO2dCQUN6QyxPQUFPO2FBQ1YsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTs7Z0JBQ1YsT0FBTyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUE7YUFDcEIsQ0FBQyxDQUFBO1NBQ0w7UUFDRCxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUU7O1lBQ04sT0FBTyxLQUFLLENBQUMsK0JBQStCLEdBQUcsRUFBRSxFQUFFO2dCQUMvQyxPQUFPO2FBQ1YsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTs7Z0JBQ1YsT0FBTyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUE7YUFDcEIsQ0FBQyxDQUFBO1NBQ0w7UUFDRCxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUU7O1lBQ1QsT0FBTyxLQUFLLENBQUMsK0JBQStCLEdBQUcsRUFBRSxFQUFFO2dCQUMvQyxPQUFPO2dCQUNQLE1BQU0sRUFBRSxRQUFRO2FBQ25CLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7O2dCQUNWLE9BQU8sR0FBRyxDQUFDLE1BQU0sSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFBO2FBQzFDLENBQUMsQ0FBQTtTQUNMO1FBQ0QsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFOztZQUNqQixPQUFPLEtBQUssQ0FBQywrQkFBK0IsR0FBRyxFQUFFLEVBQUU7Z0JBQy9DLE9BQU8sRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRTtvQkFDNUIsY0FBYyxFQUFFLGtCQUFrQjtpQkFDckMsQ0FBQztnQkFDRixNQUFNLEVBQUUsT0FBTztnQkFDZixJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7YUFDN0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTs7Z0JBQ1YsT0FBTyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUE7YUFDcEIsQ0FBQyxDQUFBO1NBQ0w7UUFDRCxNQUFNLEVBQUUsSUFBSSxDQUFDLEVBQUU7O1lBQ1gsT0FBTyxLQUFLLENBQUMsOEJBQThCLEVBQUU7Z0JBQ3pDLE9BQU8sRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRTtvQkFDNUIsY0FBYyxFQUFFLGtCQUFrQjtpQkFDckMsQ0FBQztnQkFDRixNQUFNLEVBQUUsTUFBTTtnQkFDZCxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7YUFDN0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTs7Z0JBQ1YsT0FBTyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUE7YUFDcEIsQ0FBQyxDQUFBO1NBQ0w7S0FDSixDQUFBO0NBQ0osQ0FBQTtBQUNEIn0=

Object.defineProperty(exports, "__esModule", { value: true });
exports.GistClient = token => {
    window["__checkBudget__"]();
    const headers = {
        "User-Agent": "nanogist",
    };
    if (token != undefined)
        headers["Authorization"] = `token ${token}`;
    return {
        all: () => {
            window["__checkBudget__"]();
            return fetch("https://api.github.com/gists", {
                headers,
            }).then(res => {
                window["__checkBudget__"]();
                return res.json();
            });
        },
        get: id => {
            window["__checkBudget__"]();
            return fetch("https://api.github.com/gists/" + id, {
                headers,
            }).then(res => {
                window["__checkBudget__"]();
                return res.json();
            });
        },
        delete: id => {
            window["__checkBudget__"]();
            return fetch("https://api.github.com/gists/" + id, {
                headers,
                method: "delete",
            }).then(res => {
                window["__checkBudget__"]();
                return res.status == 204 ? true : false;
            });
        },
        update: (id, body) => {
            window["__checkBudget__"]();
            return fetch("https://api.github.com/gists/" + id, {
                headers: Object.assign(headers, {
                    "Content-Type": "application/json",
                }),
                method: "patch",
                body: JSON.stringify(body),
            }).then(res => {
                window["__checkBudget__"]();
                return res.json();
            });
        },
        create: body => {
            window["__checkBudget__"]();
            return fetch("https://api.github.com/gists", {
                headers: Object.assign(headers, {
                    "Content-Type": "application/json",
                }),
                method: "post",
                body: JSON.stringify(body),
            }).then(res => {
                window["__checkBudget__"]();
                return res.json();
            });
        },
    };
};
exports.__info__ = [];


/***/ }),

/***/ "./code/MockData.json":
/*!****************************!*\
  !*** ./code/MockData.json ***!
  \****************************/
/*! exports provided: data, default */
/***/ (function(module) {


module.exports = {"data":[{"url":"https://api.github.com/gists/21d7c373417d0e812d4ba5fa7cea8891","forks_url":"https://api.github.com/gists/21d7c373417d0e812d4ba5fa7cea8891/forks","commits_url":"https://api.github.com/gists/21d7c373417d0e812d4ba5fa7cea8891/commits","id":"21d7c373417d0e812d4ba5fa7cea8891","node_id":"MDQ6R2lzdDIxZDdjMzczNDE3ZDBlODEyZDRiYTVmYTdjZWE4ODkx","git_pull_url":"https://gist.github.com/21d7c373417d0e812d4ba5fa7cea8891.git","git_push_url":"https://gist.github.com/21d7c373417d0e812d4ba5fa7cea8891.git","html_url":"https://gist.github.com/21d7c373417d0e812d4ba5fa7cea8891","files":{"Switch.tsx":{"filename":"Switch.tsx","type":"text/plain","language":"TSX","raw_url":"https://gist.githubusercontent.com/steveruizok/21d7c373417d0e812d4ba5fa7cea8891/raw/1cb3a920377ec0adb22d93ed15fb14e145201e5b/Switch.tsx","size":142}},"public":true,"created_at":"2019-06-22T19:45:04Z","updated_at":"2019-06-22T19:47:14Z","description":"Switch Tutorial, Part 2 (6)","comments":0,"user":null,"comments_url":"https://api.github.com/gists/21d7c373417d0e812d4ba5fa7cea8891/comments","owner":{"login":"steveruizok","id":23072548,"node_id":"MDQ6VXNlcjIzMDcyNTQ4","avatar_url":"https://avatars2.githubusercontent.com/u/23072548?v=4","gravatar_id":"","url":"https://api.github.com/users/steveruizok","html_url":"https://github.com/steveruizok","followers_url":"https://api.github.com/users/steveruizok/followers","following_url":"https://api.github.com/users/steveruizok/following{/other_user}","gists_url":"https://api.github.com/users/steveruizok/gists{/gist_id}","starred_url":"https://api.github.com/users/steveruizok/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/steveruizok/subscriptions","organizations_url":"https://api.github.com/users/steveruizok/orgs","repos_url":"https://api.github.com/users/steveruizok/repos","events_url":"https://api.github.com/users/steveruizok/events{/privacy}","received_events_url":"https://api.github.com/users/steveruizok/received_events","type":"User","site_admin":false},"truncated":false},{"url":"https://api.github.com/gists/9977e14490a7b428554290869e2afa73","forks_url":"https://api.github.com/gists/9977e14490a7b428554290869e2afa73/forks","commits_url":"https://api.github.com/gists/9977e14490a7b428554290869e2afa73/commits","id":"9977e14490a7b428554290869e2afa73","node_id":"MDQ6R2lzdDk5NzdlMTQ0OTBhN2I0Mjg1NTQyOTA4NjllMmFmYTcz","git_pull_url":"https://gist.github.com/9977e14490a7b428554290869e2afa73.git","git_push_url":"https://gist.github.com/9977e14490a7b428554290869e2afa73.git","html_url":"https://gist.github.com/9977e14490a7b428554290869e2afa73","files":{"Switch.tsx":{"filename":"Switch.tsx","type":"text/plain","language":"TSX","raw_url":"https://gist.githubusercontent.com/steveruizok/9977e14490a7b428554290869e2afa73/raw/61e3eb312e295200aa97c236eed1b6d9b5e833ef/Switch.tsx","size":39}},"public":true,"created_at":"2019-06-22T19:44:45Z","updated_at":"2019-06-22T19:44:45Z","description":"Switch Tutorial, Part 2 (5)","comments":0,"user":null,"comments_url":"https://api.github.com/gists/9977e14490a7b428554290869e2afa73/comments","owner":{"login":"steveruizok","id":23072548,"node_id":"MDQ6VXNlcjIzMDcyNTQ4","avatar_url":"https://avatars2.githubusercontent.com/u/23072548?v=4","gravatar_id":"","url":"https://api.github.com/users/steveruizok","html_url":"https://github.com/steveruizok","followers_url":"https://api.github.com/users/steveruizok/followers","following_url":"https://api.github.com/users/steveruizok/following{/other_user}","gists_url":"https://api.github.com/users/steveruizok/gists{/gist_id}","starred_url":"https://api.github.com/users/steveruizok/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/steveruizok/subscriptions","organizations_url":"https://api.github.com/users/steveruizok/orgs","repos_url":"https://api.github.com/users/steveruizok/repos","events_url":"https://api.github.com/users/steveruizok/events{/privacy}","received_events_url":"https://api.github.com/users/steveruizok/received_events","type":"User","site_admin":false},"truncated":false},{"url":"https://api.github.com/gists/79260ab018d78203307a343f83dfdb31","forks_url":"https://api.github.com/gists/79260ab018d78203307a343f83dfdb31/forks","commits_url":"https://api.github.com/gists/79260ab018d78203307a343f83dfdb31/commits","id":"79260ab018d78203307a343f83dfdb31","node_id":"MDQ6R2lzdDc5MjYwYWIwMThkNzgyMDMzMDdhMzQzZjgzZGZkYjMx","git_pull_url":"https://gist.github.com/79260ab018d78203307a343f83dfdb31.git","git_push_url":"https://gist.github.com/79260ab018d78203307a343f83dfdb31.git","html_url":"https://gist.github.com/79260ab018d78203307a343f83dfdb31","files":{"Switch.tsx":{"filename":"Switch.tsx","type":"text/plain","language":"TSX","raw_url":"https://gist.githubusercontent.com/steveruizok/79260ab018d78203307a343f83dfdb31/raw/9464a41dd77d73bb0e8ae13db1936e4f8cd8a705/Switch.tsx","size":98}},"public":true,"created_at":"2019-06-22T19:44:22Z","updated_at":"2019-06-22T19:44:22Z","description":"Switch Tutorial, Part 2 (4)","comments":0,"user":null,"comments_url":"https://api.github.com/gists/79260ab018d78203307a343f83dfdb31/comments","owner":{"login":"steveruizok","id":23072548,"node_id":"MDQ6VXNlcjIzMDcyNTQ4","avatar_url":"https://avatars2.githubusercontent.com/u/23072548?v=4","gravatar_id":"","url":"https://api.github.com/users/steveruizok","html_url":"https://github.com/steveruizok","followers_url":"https://api.github.com/users/steveruizok/followers","following_url":"https://api.github.com/users/steveruizok/following{/other_user}","gists_url":"https://api.github.com/users/steveruizok/gists{/gist_id}","starred_url":"https://api.github.com/users/steveruizok/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/steveruizok/subscriptions","organizations_url":"https://api.github.com/users/steveruizok/orgs","repos_url":"https://api.github.com/users/steveruizok/repos","events_url":"https://api.github.com/users/steveruizok/events{/privacy}","received_events_url":"https://api.github.com/users/steveruizok/received_events","type":"User","site_admin":false},"truncated":false},{"url":"https://api.github.com/gists/26dacfdf580628f03c9e28700d57ec41","forks_url":"https://api.github.com/gists/26dacfdf580628f03c9e28700d57ec41/forks","commits_url":"https://api.github.com/gists/26dacfdf580628f03c9e28700d57ec41/commits","id":"26dacfdf580628f03c9e28700d57ec41","node_id":"MDQ6R2lzdDI2ZGFjZmRmNTgwNjI4ZjAzYzllMjg3MDBkNTdlYzQx","git_pull_url":"https://gist.github.com/26dacfdf580628f03c9e28700d57ec41.git","git_push_url":"https://gist.github.com/26dacfdf580628f03c9e28700d57ec41.git","html_url":"https://gist.github.com/26dacfdf580628f03c9e28700d57ec41","files":{"Switch.tsx":{"filename":"Switch.tsx","type":"text/plain","language":"TSX","raw_url":"https://gist.githubusercontent.com/steveruizok/26dacfdf580628f03c9e28700d57ec41/raw/156f494b5e7d1e3758ae6e376bd3a46b5558bf78/Switch.tsx","size":321}},"public":true,"created_at":"2019-06-22T19:43:37Z","updated_at":"2019-06-22T19:43:37Z","description":"Switch Tutorial, Part 2 (3)","comments":0,"user":null,"comments_url":"https://api.github.com/gists/26dacfdf580628f03c9e28700d57ec41/comments","owner":{"login":"steveruizok","id":23072548,"node_id":"MDQ6VXNlcjIzMDcyNTQ4","avatar_url":"https://avatars2.githubusercontent.com/u/23072548?v=4","gravatar_id":"","url":"https://api.github.com/users/steveruizok","html_url":"https://github.com/steveruizok","followers_url":"https://api.github.com/users/steveruizok/followers","following_url":"https://api.github.com/users/steveruizok/following{/other_user}","gists_url":"https://api.github.com/users/steveruizok/gists{/gist_id}","starred_url":"https://api.github.com/users/steveruizok/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/steveruizok/subscriptions","organizations_url":"https://api.github.com/users/steveruizok/orgs","repos_url":"https://api.github.com/users/steveruizok/repos","events_url":"https://api.github.com/users/steveruizok/events{/privacy}","received_events_url":"https://api.github.com/users/steveruizok/received_events","type":"User","site_admin":false},"truncated":false},{"url":"https://api.github.com/gists/ab08be86f4dee7ff26f22631234fb1a2","forks_url":"https://api.github.com/gists/ab08be86f4dee7ff26f22631234fb1a2/forks","commits_url":"https://api.github.com/gists/ab08be86f4dee7ff26f22631234fb1a2/commits","id":"ab08be86f4dee7ff26f22631234fb1a2","node_id":"MDQ6R2lzdGFiMDhiZTg2ZjRkZWU3ZmYyNmYyMjYzMTIzNGZiMWEy","git_pull_url":"https://gist.github.com/ab08be86f4dee7ff26f22631234fb1a2.git","git_push_url":"https://gist.github.com/ab08be86f4dee7ff26f22631234fb1a2.git","html_url":"https://gist.github.com/ab08be86f4dee7ff26f22631234fb1a2","files":{"Switch.tsx":{"filename":"Switch.tsx","type":"text/plain","language":"TSX","raw_url":"https://gist.githubusercontent.com/steveruizok/ab08be86f4dee7ff26f22631234fb1a2/raw/179e2ad469751ac7f83d8a955238c301beab7c71/Switch.tsx","size":67}},"public":true,"created_at":"2019-06-22T19:42:33Z","updated_at":"2019-06-22T19:43:48Z","description":"Switch Tutorial, Part 2 (2)","comments":0,"user":null,"comments_url":"https://api.github.com/gists/ab08be86f4dee7ff26f22631234fb1a2/comments","owner":{"login":"steveruizok","id":23072548,"node_id":"MDQ6VXNlcjIzMDcyNTQ4","avatar_url":"https://avatars2.githubusercontent.com/u/23072548?v=4","gravatar_id":"","url":"https://api.github.com/users/steveruizok","html_url":"https://github.com/steveruizok","followers_url":"https://api.github.com/users/steveruizok/followers","following_url":"https://api.github.com/users/steveruizok/following{/other_user}","gists_url":"https://api.github.com/users/steveruizok/gists{/gist_id}","starred_url":"https://api.github.com/users/steveruizok/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/steveruizok/subscriptions","organizations_url":"https://api.github.com/users/steveruizok/orgs","repos_url":"https://api.github.com/users/steveruizok/repos","events_url":"https://api.github.com/users/steveruizok/events{/privacy}","received_events_url":"https://api.github.com/users/steveruizok/received_events","type":"User","site_admin":false},"truncated":false},{"url":"https://api.github.com/gists/d93ab2b3c36b763b641970d6500f44ca","forks_url":"https://api.github.com/gists/d93ab2b3c36b763b641970d6500f44ca/forks","commits_url":"https://api.github.com/gists/d93ab2b3c36b763b641970d6500f44ca/commits","id":"d93ab2b3c36b763b641970d6500f44ca","node_id":"MDQ6R2lzdGQ5M2FiMmIzYzM2Yjc2M2I2NDE5NzBkNjUwMGY0NGNh","git_pull_url":"https://gist.github.com/d93ab2b3c36b763b641970d6500f44ca.git","git_push_url":"https://gist.github.com/d93ab2b3c36b763b641970d6500f44ca.git","html_url":"https://gist.github.com/d93ab2b3c36b763b641970d6500f44ca","files":{"Switch.tsx":{"filename":"Switch.tsx","type":"text/plain","language":"TSX","raw_url":"https://gist.githubusercontent.com/steveruizok/d93ab2b3c36b763b641970d6500f44ca/raw/7b85c2bbb08ba1aeaba4edafa9ef66b2f317baf0/Switch.tsx","size":147}},"public":true,"created_at":"2019-06-22T19:41:11Z","updated_at":"2019-06-22T19:44:01Z","description":"Switch Tutorial, Part 2 (1)","comments":0,"user":null,"comments_url":"https://api.github.com/gists/d93ab2b3c36b763b641970d6500f44ca/comments","owner":{"login":"steveruizok","id":23072548,"node_id":"MDQ6VXNlcjIzMDcyNTQ4","avatar_url":"https://avatars2.githubusercontent.com/u/23072548?v=4","gravatar_id":"","url":"https://api.github.com/users/steveruizok","html_url":"https://github.com/steveruizok","followers_url":"https://api.github.com/users/steveruizok/followers","following_url":"https://api.github.com/users/steveruizok/following{/other_user}","gists_url":"https://api.github.com/users/steveruizok/gists{/gist_id}","starred_url":"https://api.github.com/users/steveruizok/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/steveruizok/subscriptions","organizations_url":"https://api.github.com/users/steveruizok/orgs","repos_url":"https://api.github.com/users/steveruizok/repos","events_url":"https://api.github.com/users/steveruizok/events{/privacy}","received_events_url":"https://api.github.com/users/steveruizok/received_events","type":"User","site_admin":false},"truncated":false},{"url":"https://api.github.com/gists/f285c4c2f103cbc36c7d6546f036b3cb","forks_url":"https://api.github.com/gists/f285c4c2f103cbc36c7d6546f036b3cb/forks","commits_url":"https://api.github.com/gists/f285c4c2f103cbc36c7d6546f036b3cb/commits","id":"f285c4c2f103cbc36c7d6546f036b3cb","node_id":"MDQ6R2lzdGYyODVjNGMyZjEwM2NiYzM2YzdkNjU0NmYwMzZiM2Ni","git_pull_url":"https://gist.github.com/f285c4c2f103cbc36c7d6546f036b3cb.git","git_push_url":"https://gist.github.com/f285c4c2f103cbc36c7d6546f036b3cb.git","html_url":"https://gist.github.com/f285c4c2f103cbc36c7d6546f036b3cb","files":{"UserCard.tsx":{"filename":"UserCard.tsx","type":"text/plain","language":"TSX","raw_url":"https://gist.githubusercontent.com/steveruizok/f285c4c2f103cbc36c7d6546f036b3cb/raw/92571d20e3729d6983b81ca5964e9ff62fbfacdc/UserCard.tsx","size":362}},"public":true,"created_at":"2019-06-21T11:17:52Z","updated_at":"2019-06-21T11:17:53Z","description":"An example Framer X code component showing how to type and de-structure props, so that the component's container can still accept its regular props.","comments":0,"user":null,"comments_url":"https://api.github.com/gists/f285c4c2f103cbc36c7d6546f036b3cb/comments","owner":{"login":"steveruizok","id":23072548,"node_id":"MDQ6VXNlcjIzMDcyNTQ4","avatar_url":"https://avatars2.githubusercontent.com/u/23072548?v=4","gravatar_id":"","url":"https://api.github.com/users/steveruizok","html_url":"https://github.com/steveruizok","followers_url":"https://api.github.com/users/steveruizok/followers","following_url":"https://api.github.com/users/steveruizok/following{/other_user}","gists_url":"https://api.github.com/users/steveruizok/gists{/gist_id}","starred_url":"https://api.github.com/users/steveruizok/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/steveruizok/subscriptions","organizations_url":"https://api.github.com/users/steveruizok/orgs","repos_url":"https://api.github.com/users/steveruizok/repos","events_url":"https://api.github.com/users/steveruizok/events{/privacy}","received_events_url":"https://api.github.com/users/steveruizok/received_events","type":"User","site_admin":false},"truncated":false},{"url":"https://api.github.com/gists/3b10b31e1d059d2981bb0436dd6d7c09","forks_url":"https://api.github.com/gists/3b10b31e1d059d2981bb0436dd6d7c09/forks","commits_url":"https://api.github.com/gists/3b10b31e1d059d2981bb0436dd6d7c09/commits","id":"3b10b31e1d059d2981bb0436dd6d7c09","node_id":"MDQ6R2lzdDNiMTBiMzFlMWQwNTlkMjk4MWJiMDQzNmRkNmQ3YzA5","git_pull_url":"https://gist.github.com/3b10b31e1d059d2981bb0436dd6d7c09.git","git_push_url":"https://gist.github.com/3b10b31e1d059d2981bb0436dd6d7c09.git","html_url":"https://gist.github.com/3b10b31e1d059d2981bb0436dd6d7c09","files":{"Example.tsx":{"filename":"Example.tsx","type":"text/plain","language":"TSX","raw_url":"https://gist.githubusercontent.com/steveruizok/3b10b31e1d059d2981bb0436dd6d7c09/raw/536854fb9523e4a4dc972aefbe2bc29b61e52186/Example.tsx","size":1471}},"public":true,"created_at":"2019-06-21T11:15:38Z","updated_at":"2019-06-21T11:16:48Z","description":"An example Framer X code component.","comments":0,"user":null,"comments_url":"https://api.github.com/gists/3b10b31e1d059d2981bb0436dd6d7c09/comments","owner":{"login":"steveruizok","id":23072548,"node_id":"MDQ6VXNlcjIzMDcyNTQ4","avatar_url":"https://avatars2.githubusercontent.com/u/23072548?v=4","gravatar_id":"","url":"https://api.github.com/users/steveruizok","html_url":"https://github.com/steveruizok","followers_url":"https://api.github.com/users/steveruizok/followers","following_url":"https://api.github.com/users/steveruizok/following{/other_user}","gists_url":"https://api.github.com/users/steveruizok/gists{/gist_id}","starred_url":"https://api.github.com/users/steveruizok/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/steveruizok/subscriptions","organizations_url":"https://api.github.com/users/steveruizok/orgs","repos_url":"https://api.github.com/users/steveruizok/repos","events_url":"https://api.github.com/users/steveruizok/events{/privacy}","received_events_url":"https://api.github.com/users/steveruizok/received_events","type":"User","site_admin":false},"truncated":false},{"url":"https://api.github.com/gists/c57908ab22bb36a11246b7e538fef469","forks_url":"https://api.github.com/gists/c57908ab22bb36a11246b7e538fef469/forks","commits_url":"https://api.github.com/gists/c57908ab22bb36a11246b7e538fef469/commits","id":"c57908ab22bb36a11246b7e538fef469","node_id":"MDQ6R2lzdGM1NzkwOGFiMjJiYjM2YTExMjQ2YjdlNTM4ZmVmNDY5","git_pull_url":"https://gist.github.com/c57908ab22bb36a11246b7e538fef469.git","git_push_url":"https://gist.github.com/c57908ab22bb36a11246b7e538fef469.git","html_url":"https://gist.github.com/c57908ab22bb36a11246b7e538fef469","files":{"Counter.tsx":{"filename":"Counter.tsx","type":"text/plain","language":"TSX","raw_url":"https://gist.githubusercontent.com/steveruizok/c57908ab22bb36a11246b7e538fef469/raw/006140433ef4835621a4815ca2034d203ec463e3/Counter.tsx","size":337}},"public":true,"created_at":"2019-06-21T11:14:54Z","updated_at":"2019-06-21T11:14:54Z","description":"A Framer X code component that returns a \"decorated\" code component.","comments":0,"user":null,"comments_url":"https://api.github.com/gists/c57908ab22bb36a11246b7e538fef469/comments","owner":{"login":"steveruizok","id":23072548,"node_id":"MDQ6VXNlcjIzMDcyNTQ4","avatar_url":"https://avatars2.githubusercontent.com/u/23072548?v=4","gravatar_id":"","url":"https://api.github.com/users/steveruizok","html_url":"https://github.com/steveruizok","followers_url":"https://api.github.com/users/steveruizok/followers","following_url":"https://api.github.com/users/steveruizok/following{/other_user}","gists_url":"https://api.github.com/users/steveruizok/gists{/gist_id}","starred_url":"https://api.github.com/users/steveruizok/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/steveruizok/subscriptions","organizations_url":"https://api.github.com/users/steveruizok/orgs","repos_url":"https://api.github.com/users/steveruizok/repos","events_url":"https://api.github.com/users/steveruizok/events{/privacy}","received_events_url":"https://api.github.com/users/steveruizok/received_events","type":"User","site_admin":false},"truncated":false},{"url":"https://api.github.com/gists/f0f1237c0cb04d1001bbdc0a3e1eb326","forks_url":"https://api.github.com/gists/f0f1237c0cb04d1001bbdc0a3e1eb326/forks","commits_url":"https://api.github.com/gists/f0f1237c0cb04d1001bbdc0a3e1eb326/commits","id":"f0f1237c0cb04d1001bbdc0a3e1eb326","node_id":"MDQ6R2lzdGYwZjEyMzdjMGNiMDRkMTAwMWJiZGMwYTNlMWViMzI2","git_pull_url":"https://gist.github.com/f0f1237c0cb04d1001bbdc0a3e1eb326.git","git_push_url":"https://gist.github.com/f0f1237c0cb04d1001bbdc0a3e1eb326.git","html_url":"https://gist.github.com/f0f1237c0cb04d1001bbdc0a3e1eb326","files":{"EventPropExample.tsx":{"filename":"EventPropExample.tsx","type":"text/plain","language":"TSX","raw_url":"https://gist.githubusercontent.com/steveruizok/f0f1237c0cb04d1001bbdc0a3e1eb326/raw/e7c2c94047f2622a9d4cc280085aa44c7fe705f8/EventPropExample.tsx","size":732}},"public":true,"created_at":"2019-06-21T11:12:45Z","updated_at":"2019-06-21T11:12:46Z","description":"Example Framer X code component that \"shares\" changes to its state through an event prop.","comments":0,"user":null,"comments_url":"https://api.github.com/gists/f0f1237c0cb04d1001bbdc0a3e1eb326/comments","owner":{"login":"steveruizok","id":23072548,"node_id":"MDQ6VXNlcjIzMDcyNTQ4","avatar_url":"https://avatars2.githubusercontent.com/u/23072548?v=4","gravatar_id":"","url":"https://api.github.com/users/steveruizok","html_url":"https://github.com/steveruizok","followers_url":"https://api.github.com/users/steveruizok/followers","following_url":"https://api.github.com/users/steveruizok/following{/other_user}","gists_url":"https://api.github.com/users/steveruizok/gists{/gist_id}","starred_url":"https://api.github.com/users/steveruizok/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/steveruizok/subscriptions","organizations_url":"https://api.github.com/users/steveruizok/orgs","repos_url":"https://api.github.com/users/steveruizok/repos","events_url":"https://api.github.com/users/steveruizok/events{/privacy}","received_events_url":"https://api.github.com/users/steveruizok/received_events","type":"User","site_admin":false},"truncated":false},{"url":"https://api.github.com/gists/530aef965eb9b6c493dd03b06b714d56","forks_url":"https://api.github.com/gists/530aef965eb9b6c493dd03b06b714d56/forks","commits_url":"https://api.github.com/gists/530aef965eb9b6c493dd03b06b714d56/commits","id":"530aef965eb9b6c493dd03b06b714d56","node_id":"MDQ6R2lzdDUzMGFlZjk2NWViOWI2YzQ5M2RkMDNiMDZiNzE0ZDU2","git_pull_url":"https://gist.github.com/530aef965eb9b6c493dd03b06b714d56.git","git_push_url":"https://gist.github.com/530aef965eb9b6c493dd03b06b714d56.git","html_url":"https://gist.github.com/530aef965eb9b6c493dd03b06b714d56","files":{"ValuePropExample.tsx":{"filename":"ValuePropExample.tsx","type":"text/plain","language":"TSX","raw_url":"https://gist.githubusercontent.com/steveruizok/530aef965eb9b6c493dd03b06b714d56/raw/22d67c49d1b5bb4975add333d14082d7df170103/ValuePropExample.tsx","size":870}},"public":true,"created_at":"2019-06-21T11:11:12Z","updated_at":"2019-06-21T11:11:12Z","description":"Example Framer X code component with that can be \"controlled\" through a value prop.","comments":0,"user":null,"comments_url":"https://api.github.com/gists/530aef965eb9b6c493dd03b06b714d56/comments","owner":{"login":"steveruizok","id":23072548,"node_id":"MDQ6VXNlcjIzMDcyNTQ4","avatar_url":"https://avatars2.githubusercontent.com/u/23072548?v=4","gravatar_id":"","url":"https://api.github.com/users/steveruizok","html_url":"https://github.com/steveruizok","followers_url":"https://api.github.com/users/steveruizok/followers","following_url":"https://api.github.com/users/steveruizok/following{/other_user}","gists_url":"https://api.github.com/users/steveruizok/gists{/gist_id}","starred_url":"https://api.github.com/users/steveruizok/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/steveruizok/subscriptions","organizations_url":"https://api.github.com/users/steveruizok/orgs","repos_url":"https://api.github.com/users/steveruizok/repos","events_url":"https://api.github.com/users/steveruizok/events{/privacy}","received_events_url":"https://api.github.com/users/steveruizok/received_events","type":"User","site_admin":false},"truncated":false},{"url":"https://api.github.com/gists/d6d08f80321fe14dc8c62590e3320c46","forks_url":"https://api.github.com/gists/d6d08f80321fe14dc8c62590e3320c46/forks","commits_url":"https://api.github.com/gists/d6d08f80321fe14dc8c62590e3320c46/commits","id":"d6d08f80321fe14dc8c62590e3320c46","node_id":"MDQ6R2lzdGQ2ZDA4ZjgwMzIxZmUxNGRjOGM2MjU5MGUzMzIwYzQ2","git_pull_url":"https://gist.github.com/d6d08f80321fe14dc8c62590e3320c46.git","git_push_url":"https://gist.github.com/d6d08f80321fe14dc8c62590e3320c46.git","html_url":"https://gist.github.com/d6d08f80321fe14dc8c62590e3320c46","files":{"dither.tsx":{"filename":"dither.tsx","type":"text/plain","language":"TSX","raw_url":"https://gist.githubusercontent.com/steveruizok/d6d08f80321fe14dc8c62590e3320c46/raw/629de907b62e4fdd1ef5efde7abdfd3330708a13/dither.tsx","size":8257}},"public":true,"created_at":"2019-06-19T12:38:14Z","updated_at":"2019-06-19T12:38:14Z","description":"Dither","comments":0,"user":null,"comments_url":"https://api.github.com/gists/d6d08f80321fe14dc8c62590e3320c46/comments","owner":{"login":"steveruizok","id":23072548,"node_id":"MDQ6VXNlcjIzMDcyNTQ4","avatar_url":"https://avatars2.githubusercontent.com/u/23072548?v=4","gravatar_id":"","url":"https://api.github.com/users/steveruizok","html_url":"https://github.com/steveruizok","followers_url":"https://api.github.com/users/steveruizok/followers","following_url":"https://api.github.com/users/steveruizok/following{/other_user}","gists_url":"https://api.github.com/users/steveruizok/gists{/gist_id}","starred_url":"https://api.github.com/users/steveruizok/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/steveruizok/subscriptions","organizations_url":"https://api.github.com/users/steveruizok/orgs","repos_url":"https://api.github.com/users/steveruizok/repos","events_url":"https://api.github.com/users/steveruizok/events{/privacy}","received_events_url":"https://api.github.com/users/steveruizok/received_events","type":"User","site_admin":false},"truncated":false},{"url":"https://api.github.com/gists/b9ff0a24a735f37c16794bc27da36164","forks_url":"https://api.github.com/gists/b9ff0a24a735f37c16794bc27da36164/forks","commits_url":"https://api.github.com/gists/b9ff0a24a735f37c16794bc27da36164/commits","id":"b9ff0a24a735f37c16794bc27da36164","node_id":"MDQ6R2lzdGI5ZmYwYTI0YTczNWYzN2MxNjc5NGJjMjdkYTM2MTY0","git_pull_url":"https://gist.github.com/b9ff0a24a735f37c16794bc27da36164.git","git_push_url":"https://gist.github.com/b9ff0a24a735f37c16794bc27da36164.git","html_url":"https://gist.github.com/b9ff0a24a735f37c16794bc27da36164","files":{"Resizer.tsx":{"filename":"Resizer.tsx","type":"text/plain","language":"TSX","raw_url":"https://gist.githubusercontent.com/steveruizok/b9ff0a24a735f37c16794bc27da36164/raw/dba6b4ee84dc654e35146e4f0bf38f561407bde8/Resizer.tsx","size":2638}},"public":true,"created_at":"2019-06-19T08:38:56Z","updated_at":"2019-06-19T08:38:56Z","description":"A Framer X Code Component that will resize to fit its text content.","comments":0,"user":null,"comments_url":"https://api.github.com/gists/b9ff0a24a735f37c16794bc27da36164/comments","owner":{"login":"steveruizok","id":23072548,"node_id":"MDQ6VXNlcjIzMDcyNTQ4","avatar_url":"https://avatars2.githubusercontent.com/u/23072548?v=4","gravatar_id":"","url":"https://api.github.com/users/steveruizok","html_url":"https://github.com/steveruizok","followers_url":"https://api.github.com/users/steveruizok/followers","following_url":"https://api.github.com/users/steveruizok/following{/other_user}","gists_url":"https://api.github.com/users/steveruizok/gists{/gist_id}","starred_url":"https://api.github.com/users/steveruizok/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/steveruizok/subscriptions","organizations_url":"https://api.github.com/users/steveruizok/orgs","repos_url":"https://api.github.com/users/steveruizok/repos","events_url":"https://api.github.com/users/steveruizok/events{/privacy}","received_events_url":"https://api.github.com/users/steveruizok/received_events","type":"User","site_admin":false},"truncated":false},{"url":"https://api.github.com/gists/5a1dadebd6a6b899d1a1b152ec7b5986","forks_url":"https://api.github.com/gists/5a1dadebd6a6b899d1a1b152ec7b5986/forks","commits_url":"https://api.github.com/gists/5a1dadebd6a6b899d1a1b152ec7b5986/commits","id":"5a1dadebd6a6b899d1a1b152ec7b5986","node_id":"MDQ6R2lzdDVhMWRhZGViZDZhNmI4OTlkMWExYjE1MmVjN2I1OTg2","git_pull_url":"https://gist.github.com/5a1dadebd6a6b899d1a1b152ec7b5986.git","git_push_url":"https://gist.github.com/5a1dadebd6a6b899d1a1b152ec7b5986.git","html_url":"https://gist.github.com/5a1dadebd6a6b899d1a1b152ec7b5986","files":{"App.tsx":{"filename":"App.tsx","type":"text/plain","language":"TSX","raw_url":"https://gist.githubusercontent.com/steveruizok/5a1dadebd6a6b899d1a1b152ec7b5986/raw/57082f269c0c820508d24ac799004de586538f42/App.tsx","size":597}},"public":true,"created_at":"2019-05-11T16:06:12Z","updated_at":"2019-05-11T16:06:12Z","description":"[Switch Tutorial, Part III (overrides)] Our finished overrides.","comments":0,"user":null,"comments_url":"https://api.github.com/gists/5a1dadebd6a6b899d1a1b152ec7b5986/comments","owner":{"login":"steveruizok","id":23072548,"node_id":"MDQ6VXNlcjIzMDcyNTQ4","avatar_url":"https://avatars2.githubusercontent.com/u/23072548?v=4","gravatar_id":"","url":"https://api.github.com/users/steveruizok","html_url":"https://github.com/steveruizok","followers_url":"https://api.github.com/users/steveruizok/followers","following_url":"https://api.github.com/users/steveruizok/following{/other_user}","gists_url":"https://api.github.com/users/steveruizok/gists{/gist_id}","starred_url":"https://api.github.com/users/steveruizok/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/steveruizok/subscriptions","organizations_url":"https://api.github.com/users/steveruizok/orgs","repos_url":"https://api.github.com/users/steveruizok/repos","events_url":"https://api.github.com/users/steveruizok/events{/privacy}","received_events_url":"https://api.github.com/users/steveruizok/received_events","type":"User","site_admin":false},"truncated":false},{"url":"https://api.github.com/gists/1da2e18f3f7a0ed5caa2e17365adbe31","forks_url":"https://api.github.com/gists/1da2e18f3f7a0ed5caa2e17365adbe31/forks","commits_url":"https://api.github.com/gists/1da2e18f3f7a0ed5caa2e17365adbe31/commits","id":"1da2e18f3f7a0ed5caa2e17365adbe31","node_id":"MDQ6R2lzdDFkYTJlMThmM2Y3YTBlZDVjYWEyZTE3MzY1YWRiZTMx","git_pull_url":"https://gist.github.com/1da2e18f3f7a0ed5caa2e17365adbe31.git","git_push_url":"https://gist.github.com/1da2e18f3f7a0ed5caa2e17365adbe31.git","html_url":"https://gist.github.com/1da2e18f3f7a0ed5caa2e17365adbe31","files":{"Switch.tsx":{"filename":"Switch.tsx","type":"text/plain","language":"TSX","raw_url":"https://gist.githubusercontent.com/steveruizok/1da2e18f3f7a0ed5caa2e17365adbe31/raw/d6e2a0fe5f01475c663c8e400030ea54cf239766/Switch.tsx","size":1679}},"public":true,"created_at":"2019-05-09T15:31:26Z","updated_at":"2019-05-11T16:02:43Z","description":"[Switch Tutorial, Part III] Finished component.","comments":0,"user":null,"comments_url":"https://api.github.com/gists/1da2e18f3f7a0ed5caa2e17365adbe31/comments","owner":{"login":"steveruizok","id":23072548,"node_id":"MDQ6VXNlcjIzMDcyNTQ4","avatar_url":"https://avatars2.githubusercontent.com/u/23072548?v=4","gravatar_id":"","url":"https://api.github.com/users/steveruizok","html_url":"https://github.com/steveruizok","followers_url":"https://api.github.com/users/steveruizok/followers","following_url":"https://api.github.com/users/steveruizok/following{/other_user}","gists_url":"https://api.github.com/users/steveruizok/gists{/gist_id}","starred_url":"https://api.github.com/users/steveruizok/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/steveruizok/subscriptions","organizations_url":"https://api.github.com/users/steveruizok/orgs","repos_url":"https://api.github.com/users/steveruizok/repos","events_url":"https://api.github.com/users/steveruizok/events{/privacy}","received_events_url":"https://api.github.com/users/steveruizok/received_events","type":"User","site_admin":false},"truncated":false},{"url":"https://api.github.com/gists/cf53859c583b102cabcccb400385b085","forks_url":"https://api.github.com/gists/cf53859c583b102cabcccb400385b085/forks","commits_url":"https://api.github.com/gists/cf53859c583b102cabcccb400385b085/commits","id":"cf53859c583b102cabcccb400385b085","node_id":"MDQ6R2lzdGNmNTM4NTljNTgzYjEwMmNhYmNjY2I0MDAzODViMDg1","git_pull_url":"https://gist.github.com/cf53859c583b102cabcccb400385b085.git","git_push_url":"https://gist.github.com/cf53859c583b102cabcccb400385b085.git","html_url":"https://gist.github.com/cf53859c583b102cabcccb400385b085","files":{"Switch.tsx":{"filename":"Switch.tsx","type":"text/plain","language":"TSX","raw_url":"https://gist.githubusercontent.com/steveruizok/cf53859c583b102cabcccb400385b085/raw/52755aac6919d2de03962d6b7b280f567ce5f04b/Switch.tsx","size":1389}},"public":true,"created_at":"2019-05-07T11:49:42Z","updated_at":"2019-05-07T16:29:35Z","description":"Finished Component, Part 1","comments":0,"user":null,"comments_url":"https://api.github.com/gists/cf53859c583b102cabcccb400385b085/comments","owner":{"login":"steveruizok","id":23072548,"node_id":"MDQ6VXNlcjIzMDcyNTQ4","avatar_url":"https://avatars2.githubusercontent.com/u/23072548?v=4","gravatar_id":"","url":"https://api.github.com/users/steveruizok","html_url":"https://github.com/steveruizok","followers_url":"https://api.github.com/users/steveruizok/followers","following_url":"https://api.github.com/users/steveruizok/following{/other_user}","gists_url":"https://api.github.com/users/steveruizok/gists{/gist_id}","starred_url":"https://api.github.com/users/steveruizok/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/steveruizok/subscriptions","organizations_url":"https://api.github.com/users/steveruizok/orgs","repos_url":"https://api.github.com/users/steveruizok/repos","events_url":"https://api.github.com/users/steveruizok/events{/privacy}","received_events_url":"https://api.github.com/users/steveruizok/received_events","type":"User","site_admin":false},"truncated":false},{"url":"https://api.github.com/gists/94d964bc60ebae68e896e207efabc4ad","forks_url":"https://api.github.com/gists/94d964bc60ebae68e896e207efabc4ad/forks","commits_url":"https://api.github.com/gists/94d964bc60ebae68e896e207efabc4ad/commits","id":"94d964bc60ebae68e896e207efabc4ad","node_id":"MDQ6R2lzdDk0ZDk2NGJjNjBlYmFlNjhlODk2ZTIwN2VmYWJjNGFk","git_pull_url":"https://gist.github.com/94d964bc60ebae68e896e207efabc4ad.git","git_push_url":"https://gist.github.com/94d964bc60ebae68e896e207efabc4ad.git","html_url":"https://gist.github.com/94d964bc60ebae68e896e207efabc4ad","files":{"Switch.tsx":{"filename":"Switch.tsx","type":"text/plain","language":"TSX","raw_url":"https://gist.githubusercontent.com/steveruizok/94d964bc60ebae68e896e207efabc4ad/raw/f9dc4fc633691fe0fe8bc0568a1a3d0975e47c8b/Switch.tsx","size":396}},"public":true,"created_at":"2019-05-07T09:33:10Z","updated_at":"2019-05-09T16:18:12Z","description":"Adds the state as a string to our component's JSX.","comments":0,"user":null,"comments_url":"https://api.github.com/gists/94d964bc60ebae68e896e207efabc4ad/comments","owner":{"login":"steveruizok","id":23072548,"node_id":"MDQ6VXNlcjIzMDcyNTQ4","avatar_url":"https://avatars2.githubusercontent.com/u/23072548?v=4","gravatar_id":"","url":"https://api.github.com/users/steveruizok","html_url":"https://github.com/steveruizok","followers_url":"https://api.github.com/users/steveruizok/followers","following_url":"https://api.github.com/users/steveruizok/following{/other_user}","gists_url":"https://api.github.com/users/steveruizok/gists{/gist_id}","starred_url":"https://api.github.com/users/steveruizok/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/steveruizok/subscriptions","organizations_url":"https://api.github.com/users/steveruizok/orgs","repos_url":"https://api.github.com/users/steveruizok/repos","events_url":"https://api.github.com/users/steveruizok/events{/privacy}","received_events_url":"https://api.github.com/users/steveruizok/received_events","type":"User","site_admin":false},"truncated":false},{"url":"https://api.github.com/gists/1ade1f4fd5c7364de3c696dd721bdb06","forks_url":"https://api.github.com/gists/1ade1f4fd5c7364de3c696dd721bdb06/forks","commits_url":"https://api.github.com/gists/1ade1f4fd5c7364de3c696dd721bdb06/commits","id":"1ade1f4fd5c7364de3c696dd721bdb06","node_id":"MDQ6R2lzdDFhZGUxZjRmZDVjNzM2NGRlM2M2OTZkZDcyMWJkYjA2","git_pull_url":"https://gist.github.com/1ade1f4fd5c7364de3c696dd721bdb06.git","git_push_url":"https://gist.github.com/1ade1f4fd5c7364de3c696dd721bdb06.git","html_url":"https://gist.github.com/1ade1f4fd5c7364de3c696dd721bdb06","files":{"Switch.tsx":{"filename":"Switch.tsx","type":"text/plain","language":"TSX","raw_url":"https://gist.githubusercontent.com/steveruizok/1ade1f4fd5c7364de3c696dd721bdb06/raw/7be1fea076568f1663dd6f6d736c10800d5c52ce/Switch.tsx","size":344}},"public":true,"created_at":"2019-05-07T09:12:07Z","updated_at":"2019-05-09T16:18:18Z","description":"Adds the tap handler to our Frame.","comments":0,"user":null,"comments_url":"https://api.github.com/gists/1ade1f4fd5c7364de3c696dd721bdb06/comments","owner":{"login":"steveruizok","id":23072548,"node_id":"MDQ6VXNlcjIzMDcyNTQ4","avatar_url":"https://avatars2.githubusercontent.com/u/23072548?v=4","gravatar_id":"","url":"https://api.github.com/users/steveruizok","html_url":"https://github.com/steveruizok","followers_url":"https://api.github.com/users/steveruizok/followers","following_url":"https://api.github.com/users/steveruizok/following{/other_user}","gists_url":"https://api.github.com/users/steveruizok/gists{/gist_id}","starred_url":"https://api.github.com/users/steveruizok/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/steveruizok/subscriptions","organizations_url":"https://api.github.com/users/steveruizok/orgs","repos_url":"https://api.github.com/users/steveruizok/repos","events_url":"https://api.github.com/users/steveruizok/events{/privacy}","received_events_url":"https://api.github.com/users/steveruizok/received_events","type":"User","site_admin":false},"truncated":false},{"url":"https://api.github.com/gists/15b1ac344ead28c6802638f1ed32937d","forks_url":"https://api.github.com/gists/15b1ac344ead28c6802638f1ed32937d/forks","commits_url":"https://api.github.com/gists/15b1ac344ead28c6802638f1ed32937d/commits","id":"15b1ac344ead28c6802638f1ed32937d","node_id":"MDQ6R2lzdDE1YjFhYzM0NGVhZDI4YzY4MDI2MzhmMWVkMzI5Mzdk","git_pull_url":"https://gist.github.com/15b1ac344ead28c6802638f1ed32937d.git","git_push_url":"https://gist.github.com/15b1ac344ead28c6802638f1ed32937d.git","html_url":"https://gist.github.com/15b1ac344ead28c6802638f1ed32937d","files":{"Switch.tsx":{"filename":"Switch.tsx","type":"text/plain","language":"TSX","raw_url":"https://gist.githubusercontent.com/steveruizok/15b1ac344ead28c6802638f1ed32937d/raw/712e196b7bc231bcc61542aba17828ddf7d8f74d/Switch.tsx","size":324}},"public":true,"created_at":"2019-05-07T09:07:31Z","updated_at":"2019-05-07T09:15:56Z","description":"Creates a tap handler to flip our Swich's state.","comments":0,"user":null,"comments_url":"https://api.github.com/gists/15b1ac344ead28c6802638f1ed32937d/comments","owner":{"login":"steveruizok","id":23072548,"node_id":"MDQ6VXNlcjIzMDcyNTQ4","avatar_url":"https://avatars2.githubusercontent.com/u/23072548?v=4","gravatar_id":"","url":"https://api.github.com/users/steveruizok","html_url":"https://github.com/steveruizok","followers_url":"https://api.github.com/users/steveruizok/followers","following_url":"https://api.github.com/users/steveruizok/following{/other_user}","gists_url":"https://api.github.com/users/steveruizok/gists{/gist_id}","starred_url":"https://api.github.com/users/steveruizok/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/steveruizok/subscriptions","organizations_url":"https://api.github.com/users/steveruizok/orgs","repos_url":"https://api.github.com/users/steveruizok/repos","events_url":"https://api.github.com/users/steveruizok/events{/privacy}","received_events_url":"https://api.github.com/users/steveruizok/received_events","type":"User","site_admin":false},"truncated":false},{"url":"https://api.github.com/gists/d2cf2c33e5c1a50aa880c88167eab253","forks_url":"https://api.github.com/gists/d2cf2c33e5c1a50aa880c88167eab253/forks","commits_url":"https://api.github.com/gists/d2cf2c33e5c1a50aa880c88167eab253/commits","id":"d2cf2c33e5c1a50aa880c88167eab253","node_id":"MDQ6R2lzdGQyY2YyYzMzZTVjMWE1MGFhODgwYzg4MTY3ZWFiMjUz","git_pull_url":"https://gist.github.com/d2cf2c33e5c1a50aa880c88167eab253.git","git_push_url":"https://gist.github.com/d2cf2c33e5c1a50aa880c88167eab253.git","html_url":"https://gist.github.com/d2cf2c33e5c1a50aa880c88167eab253","files":{"Switch.tsx":{"filename":"Switch.tsx","type":"text/plain","language":"TSX","raw_url":"https://gist.githubusercontent.com/steveruizok/d2cf2c33e5c1a50aa880c88167eab253/raw/bbdec582be9337f1ec40235f2d336cf13dba1ca6/Switch.tsx","size":221}},"public":true,"created_at":"2019-05-07T09:01:21Z","updated_at":"2019-05-09T16:18:28Z","description":"Switch Tutorial - State","comments":0,"user":null,"comments_url":"https://api.github.com/gists/d2cf2c33e5c1a50aa880c88167eab253/comments","owner":{"login":"steveruizok","id":23072548,"node_id":"MDQ6VXNlcjIzMDcyNTQ4","avatar_url":"https://avatars2.githubusercontent.com/u/23072548?v=4","gravatar_id":"","url":"https://api.github.com/users/steveruizok","html_url":"https://github.com/steveruizok","followers_url":"https://api.github.com/users/steveruizok/followers","following_url":"https://api.github.com/users/steveruizok/following{/other_user}","gists_url":"https://api.github.com/users/steveruizok/gists{/gist_id}","starred_url":"https://api.github.com/users/steveruizok/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/steveruizok/subscriptions","organizations_url":"https://api.github.com/users/steveruizok/orgs","repos_url":"https://api.github.com/users/steveruizok/repos","events_url":"https://api.github.com/users/steveruizok/events{/privacy}","received_events_url":"https://api.github.com/users/steveruizok/received_events","type":"User","site_admin":false},"truncated":false},{"url":"https://api.github.com/gists/b13e135c37c122c26c2a74768d36daa4","forks_url":"https://api.github.com/gists/b13e135c37c122c26c2a74768d36daa4/forks","commits_url":"https://api.github.com/gists/b13e135c37c122c26c2a74768d36daa4/commits","id":"b13e135c37c122c26c2a74768d36daa4","node_id":"MDQ6R2lzdGIxM2UxMzVjMzdjMTIyYzI2YzJhNzQ3NjhkMzZkYWE0","git_pull_url":"https://gist.github.com/b13e135c37c122c26c2a74768d36daa4.git","git_push_url":"https://gist.github.com/b13e135c37c122c26c2a74768d36daa4.git","html_url":"https://gist.github.com/b13e135c37c122c26c2a74768d36daa4","files":{"Switch.tsx":{"filename":"Switch.tsx","type":"text/plain","language":"TSX","raw_url":"https://gist.githubusercontent.com/steveruizok/b13e135c37c122c26c2a74768d36daa4/raw/8544df5bd6c06c70b7b1872065867c0f25db23a3/Switch.tsx","size":1803}},"public":true,"created_at":"2019-04-30T09:42:48Z","updated_at":"2019-04-30T11:34:05Z","description":"Switch Tutorial Finished Component","comments":0,"user":null,"comments_url":"https://api.github.com/gists/b13e135c37c122c26c2a74768d36daa4/comments","owner":{"login":"steveruizok","id":23072548,"node_id":"MDQ6VXNlcjIzMDcyNTQ4","avatar_url":"https://avatars2.githubusercontent.com/u/23072548?v=4","gravatar_id":"","url":"https://api.github.com/users/steveruizok","html_url":"https://github.com/steveruizok","followers_url":"https://api.github.com/users/steveruizok/followers","following_url":"https://api.github.com/users/steveruizok/following{/other_user}","gists_url":"https://api.github.com/users/steveruizok/gists{/gist_id}","starred_url":"https://api.github.com/users/steveruizok/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/steveruizok/subscriptions","organizations_url":"https://api.github.com/users/steveruizok/orgs","repos_url":"https://api.github.com/users/steveruizok/repos","events_url":"https://api.github.com/users/steveruizok/events{/privacy}","received_events_url":"https://api.github.com/users/steveruizok/received_events","type":"User","site_admin":false},"truncated":false},{"url":"https://api.github.com/gists/137909de2d579c98aac9586e00d4e76a","forks_url":"https://api.github.com/gists/137909de2d579c98aac9586e00d4e76a/forks","commits_url":"https://api.github.com/gists/137909de2d579c98aac9586e00d4e76a/commits","id":"137909de2d579c98aac9586e00d4e76a","node_id":"MDQ6R2lzdDEzNzkwOWRlMmQ1NzljOThhYWM5NTg2ZTAwZDRlNzZh","git_pull_url":"https://gist.github.com/137909de2d579c98aac9586e00d4e76a.git","git_push_url":"https://gist.github.com/137909de2d579c98aac9586e00d4e76a.git","html_url":"https://gist.github.com/137909de2d579c98aac9586e00d4e76a","files":{"SwitchParent.tsx":{"filename":"SwitchParent.tsx","type":"text/plain","language":"TSX","raw_url":"https://gist.githubusercontent.com/steveruizok/137909de2d579c98aac9586e00d4e76a/raw/98253f1a5ad1f1a88dd35d9feb232a477e8e405e/SwitchParent.tsx","size":326}},"public":true,"created_at":"2019-04-30T09:35:41Z","updated_at":"2019-04-30T09:35:41Z","description":"Switch Tutorial - In React","comments":0,"user":null,"comments_url":"https://api.github.com/gists/137909de2d579c98aac9586e00d4e76a/comments","owner":{"login":"steveruizok","id":23072548,"node_id":"MDQ6VXNlcjIzMDcyNTQ4","avatar_url":"https://avatars2.githubusercontent.com/u/23072548?v=4","gravatar_id":"","url":"https://api.github.com/users/steveruizok","html_url":"https://github.com/steveruizok","followers_url":"https://api.github.com/users/steveruizok/followers","following_url":"https://api.github.com/users/steveruizok/following{/other_user}","gists_url":"https://api.github.com/users/steveruizok/gists{/gist_id}","starred_url":"https://api.github.com/users/steveruizok/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/steveruizok/subscriptions","organizations_url":"https://api.github.com/users/steveruizok/orgs","repos_url":"https://api.github.com/users/steveruizok/repos","events_url":"https://api.github.com/users/steveruizok/events{/privacy}","received_events_url":"https://api.github.com/users/steveruizok/received_events","type":"User","site_admin":false},"truncated":false},{"url":"https://api.github.com/gists/bc606f02c03c07dc82fa1773ef341f75","forks_url":"https://api.github.com/gists/bc606f02c03c07dc82fa1773ef341f75/forks","commits_url":"https://api.github.com/gists/bc606f02c03c07dc82fa1773ef341f75/commits","id":"bc606f02c03c07dc82fa1773ef341f75","node_id":"MDQ6R2lzdGJjNjA2ZjAyYzAzYzA3ZGM4MmZhMTc3M2VmMzQxZjc1","git_pull_url":"https://gist.github.com/bc606f02c03c07dc82fa1773ef341f75.git","git_push_url":"https://gist.github.com/bc606f02c03c07dc82fa1773ef341f75.git","html_url":"https://gist.github.com/bc606f02c03c07dc82fa1773ef341f75","files":{"Switch.tsx":{"filename":"Switch.tsx","type":"text/plain","language":"XML","raw_url":"https://gist.githubusercontent.com/steveruizok/bc606f02c03c07dc82fa1773ef341f75/raw/cd7f8c8d44263bff01a40379e3acadedf8e2afa3/Switch.tsx","size":656}},"public":true,"created_at":"2019-04-30T09:12:36Z","updated_at":"2019-04-30T09:12:36Z","description":"Switch Tutorial transition","comments":0,"user":null,"comments_url":"https://api.github.com/gists/bc606f02c03c07dc82fa1773ef341f75/comments","owner":{"login":"steveruizok","id":23072548,"node_id":"MDQ6VXNlcjIzMDcyNTQ4","avatar_url":"https://avatars2.githubusercontent.com/u/23072548?v=4","gravatar_id":"","url":"https://api.github.com/users/steveruizok","html_url":"https://github.com/steveruizok","followers_url":"https://api.github.com/users/steveruizok/followers","following_url":"https://api.github.com/users/steveruizok/following{/other_user}","gists_url":"https://api.github.com/users/steveruizok/gists{/gist_id}","starred_url":"https://api.github.com/users/steveruizok/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/steveruizok/subscriptions","organizations_url":"https://api.github.com/users/steveruizok/orgs","repos_url":"https://api.github.com/users/steveruizok/repos","events_url":"https://api.github.com/users/steveruizok/events{/privacy}","received_events_url":"https://api.github.com/users/steveruizok/received_events","type":"User","site_admin":false},"truncated":false},{"url":"https://api.github.com/gists/77886d045e869e8da0f5b7af2aeb97e5","forks_url":"https://api.github.com/gists/77886d045e869e8da0f5b7af2aeb97e5/forks","commits_url":"https://api.github.com/gists/77886d045e869e8da0f5b7af2aeb97e5/commits","id":"77886d045e869e8da0f5b7af2aeb97e5","node_id":"MDQ6R2lzdDc3ODg2ZDA0NWU4NjllOGRhMGY1YjdhZjJhZWI5N2U1","git_pull_url":"https://gist.github.com/77886d045e869e8da0f5b7af2aeb97e5.git","git_push_url":"https://gist.github.com/77886d045e869e8da0f5b7af2aeb97e5.git","html_url":"https://gist.github.com/77886d045e869e8da0f5b7af2aeb97e5","files":{"Switch.tsx":{"filename":"Switch.tsx","type":"text/plain","language":"XML","raw_url":"https://gist.githubusercontent.com/steveruizok/77886d045e869e8da0f5b7af2aeb97e5/raw/0d6fa4cc0ab9aad62a0af077d42153afb44b898f/Switch.tsx","size":418}},"public":true,"created_at":"2019-04-30T09:04:22Z","updated_at":"2019-04-30T09:04:22Z","description":"Switch Tutorial Variants","comments":0,"user":null,"comments_url":"https://api.github.com/gists/77886d045e869e8da0f5b7af2aeb97e5/comments","owner":{"login":"steveruizok","id":23072548,"node_id":"MDQ6VXNlcjIzMDcyNTQ4","avatar_url":"https://avatars2.githubusercontent.com/u/23072548?v=4","gravatar_id":"","url":"https://api.github.com/users/steveruizok","html_url":"https://github.com/steveruizok","followers_url":"https://api.github.com/users/steveruizok/followers","following_url":"https://api.github.com/users/steveruizok/following{/other_user}","gists_url":"https://api.github.com/users/steveruizok/gists{/gist_id}","starred_url":"https://api.github.com/users/steveruizok/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/steveruizok/subscriptions","organizations_url":"https://api.github.com/users/steveruizok/orgs","repos_url":"https://api.github.com/users/steveruizok/repos","events_url":"https://api.github.com/users/steveruizok/events{/privacy}","received_events_url":"https://api.github.com/users/steveruizok/received_events","type":"User","site_admin":false},"truncated":false},{"url":"https://api.github.com/gists/08e199f1a6cc16435a460b2814c527b6","forks_url":"https://api.github.com/gists/08e199f1a6cc16435a460b2814c527b6/forks","commits_url":"https://api.github.com/gists/08e199f1a6cc16435a460b2814c527b6/commits","id":"08e199f1a6cc16435a460b2814c527b6","node_id":"MDQ6R2lzdDA4ZTE5OWYxYTZjYzE2NDM1YTQ2MGIyODE0YzUyN2I2","git_pull_url":"https://gist.github.com/08e199f1a6cc16435a460b2814c527b6.git","git_push_url":"https://gist.github.com/08e199f1a6cc16435a460b2814c527b6.git","html_url":"https://gist.github.com/08e199f1a6cc16435a460b2814c527b6","files":{"Switch.tsx":{"filename":"Switch.tsx","type":"text/plain","language":"XML","raw_url":"https://gist.githubusercontent.com/steveruizok/08e199f1a6cc16435a460b2814c527b6/raw/2331bd4ff595028863e44f6d628dbaa6d8333cb7/Switch.tsx","size":231}},"public":true,"created_at":"2019-04-30T09:02:12Z","updated_at":"2019-04-30T09:03:06Z","description":"Switch Tutorial Frames","comments":0,"user":null,"comments_url":"https://api.github.com/gists/08e199f1a6cc16435a460b2814c527b6/comments","owner":{"login":"steveruizok","id":23072548,"node_id":"MDQ6VXNlcjIzMDcyNTQ4","avatar_url":"https://avatars2.githubusercontent.com/u/23072548?v=4","gravatar_id":"","url":"https://api.github.com/users/steveruizok","html_url":"https://github.com/steveruizok","followers_url":"https://api.github.com/users/steveruizok/followers","following_url":"https://api.github.com/users/steveruizok/following{/other_user}","gists_url":"https://api.github.com/users/steveruizok/gists{/gist_id}","starred_url":"https://api.github.com/users/steveruizok/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/steveruizok/subscriptions","organizations_url":"https://api.github.com/users/steveruizok/orgs","repos_url":"https://api.github.com/users/steveruizok/repos","events_url":"https://api.github.com/users/steveruizok/events{/privacy}","received_events_url":"https://api.github.com/users/steveruizok/received_events","type":"User","site_admin":false},"truncated":false},{"url":"https://api.github.com/gists/dadf2dccac6d99ec418461588544f6cd","forks_url":"https://api.github.com/gists/dadf2dccac6d99ec418461588544f6cd/forks","commits_url":"https://api.github.com/gists/dadf2dccac6d99ec418461588544f6cd/commits","id":"dadf2dccac6d99ec418461588544f6cd","node_id":"MDQ6R2lzdGRhZGYyZGNjYWM2ZDk5ZWM0MTg0NjE1ODg1NDRmNmNk","git_pull_url":"https://gist.github.com/dadf2dccac6d99ec418461588544f6cd.git","git_push_url":"https://gist.github.com/dadf2dccac6d99ec418461588544f6cd.git","html_url":"https://gist.github.com/dadf2dccac6d99ec418461588544f6cd","files":{"Switch.tsx":{"filename":"Switch.tsx","type":"text/plain","language":"TSX","raw_url":"https://gist.githubusercontent.com/steveruizok/dadf2dccac6d99ec418461588544f6cd/raw/257b67b61abd95e940a18f424b8d2e144f2dade8/Switch.tsx","size":104}},"public":true,"created_at":"2019-04-30T09:01:19Z","updated_at":"2019-04-30T09:01:19Z","description":"Switch Tutorial Default Props","comments":0,"user":null,"comments_url":"https://api.github.com/gists/dadf2dccac6d99ec418461588544f6cd/comments","owner":{"login":"steveruizok","id":23072548,"node_id":"MDQ6VXNlcjIzMDcyNTQ4","avatar_url":"https://avatars2.githubusercontent.com/u/23072548?v=4","gravatar_id":"","url":"https://api.github.com/users/steveruizok","html_url":"https://github.com/steveruizok","followers_url":"https://api.github.com/users/steveruizok/followers","following_url":"https://api.github.com/users/steveruizok/following{/other_user}","gists_url":"https://api.github.com/users/steveruizok/gists{/gist_id}","starred_url":"https://api.github.com/users/steveruizok/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/steveruizok/subscriptions","organizations_url":"https://api.github.com/users/steveruizok/orgs","repos_url":"https://api.github.com/users/steveruizok/repos","events_url":"https://api.github.com/users/steveruizok/events{/privacy}","received_events_url":"https://api.github.com/users/steveruizok/received_events","type":"User","site_admin":false},"truncated":false},{"url":"https://api.github.com/gists/20c0dd7df129197cce0366ec5df7546e","forks_url":"https://api.github.com/gists/20c0dd7df129197cce0366ec5df7546e/forks","commits_url":"https://api.github.com/gists/20c0dd7df129197cce0366ec5df7546e/commits","id":"20c0dd7df129197cce0366ec5df7546e","node_id":"MDQ6R2lzdDIwYzBkZDdkZjEyOTE5N2NjZTAzNjZlYzVkZjc1NDZl","git_pull_url":"https://gist.github.com/20c0dd7df129197cce0366ec5df7546e.git","git_push_url":"https://gist.github.com/20c0dd7df129197cce0366ec5df7546e.git","html_url":"https://gist.github.com/20c0dd7df129197cce0366ec5df7546e","files":{"Switch.tsx":{"filename":"Switch.tsx","type":"text/plain","language":"TSX","raw_url":"https://gist.githubusercontent.com/steveruizok/20c0dd7df129197cce0366ec5df7546e/raw/b18e2daeb9017c5befea3f99be6905d8cbd5f7b9/Switch.tsx","size":115}},"public":true,"created_at":"2019-04-30T09:00:00Z","updated_at":"2019-04-30T09:00:00Z","description":"Switch tutorial Frames","comments":0,"user":null,"comments_url":"https://api.github.com/gists/20c0dd7df129197cce0366ec5df7546e/comments","owner":{"login":"steveruizok","id":23072548,"node_id":"MDQ6VXNlcjIzMDcyNTQ4","avatar_url":"https://avatars2.githubusercontent.com/u/23072548?v=4","gravatar_id":"","url":"https://api.github.com/users/steveruizok","html_url":"https://github.com/steveruizok","followers_url":"https://api.github.com/users/steveruizok/followers","following_url":"https://api.github.com/users/steveruizok/following{/other_user}","gists_url":"https://api.github.com/users/steveruizok/gists{/gist_id}","starred_url":"https://api.github.com/users/steveruizok/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/steveruizok/subscriptions","organizations_url":"https://api.github.com/users/steveruizok/orgs","repos_url":"https://api.github.com/users/steveruizok/repos","events_url":"https://api.github.com/users/steveruizok/events{/privacy}","received_events_url":"https://api.github.com/users/steveruizok/received_events","type":"User","site_admin":false},"truncated":false},{"url":"https://api.github.com/gists/554e31f7ca64e1dc0a9b29d009bf28ca","forks_url":"https://api.github.com/gists/554e31f7ca64e1dc0a9b29d009bf28ca/forks","commits_url":"https://api.github.com/gists/554e31f7ca64e1dc0a9b29d009bf28ca/commits","id":"554e31f7ca64e1dc0a9b29d009bf28ca","node_id":"MDQ6R2lzdDU1NGUzMWY3Y2E2NGUxZGMwYTliMjlkMDA5YmYyOGNh","git_pull_url":"https://gist.github.com/554e31f7ca64e1dc0a9b29d009bf28ca.git","git_push_url":"https://gist.github.com/554e31f7ca64e1dc0a9b29d009bf28ca.git","html_url":"https://gist.github.com/554e31f7ca64e1dc0a9b29d009bf28ca","files":{"Switch.tsx":{"filename":"Switch.tsx","type":"text/plain","language":"TSX","raw_url":"https://gist.githubusercontent.com/steveruizok/554e31f7ca64e1dc0a9b29d009bf28ca/raw/963a464101a26abc59a0eade5c93d47d1f8ee743/Switch.tsx","size":821}},"public":true,"created_at":"2019-04-26T16:34:00Z","updated_at":"2019-04-26T16:34:01Z","description":"Switch Tutorial Property Controls","comments":0,"user":null,"comments_url":"https://api.github.com/gists/554e31f7ca64e1dc0a9b29d009bf28ca/comments","owner":{"login":"steveruizok","id":23072548,"node_id":"MDQ6VXNlcjIzMDcyNTQ4","avatar_url":"https://avatars2.githubusercontent.com/u/23072548?v=4","gravatar_id":"","url":"https://api.github.com/users/steveruizok","html_url":"https://github.com/steveruizok","followers_url":"https://api.github.com/users/steveruizok/followers","following_url":"https://api.github.com/users/steveruizok/following{/other_user}","gists_url":"https://api.github.com/users/steveruizok/gists{/gist_id}","starred_url":"https://api.github.com/users/steveruizok/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/steveruizok/subscriptions","organizations_url":"https://api.github.com/users/steveruizok/orgs","repos_url":"https://api.github.com/users/steveruizok/repos","events_url":"https://api.github.com/users/steveruizok/events{/privacy}","received_events_url":"https://api.github.com/users/steveruizok/received_events","type":"User","site_admin":false},"truncated":false},{"url":"https://api.github.com/gists/7f5875b3916088502db90da106f6867e","forks_url":"https://api.github.com/gists/7f5875b3916088502db90da106f6867e/forks","commits_url":"https://api.github.com/gists/7f5875b3916088502db90da106f6867e/commits","id":"7f5875b3916088502db90da106f6867e","node_id":"MDQ6R2lzdDdmNTg3NWIzOTE2MDg4NTAyZGI5MGRhMTA2ZjY4Njdl","git_pull_url":"https://gist.github.com/7f5875b3916088502db90da106f6867e.git","git_push_url":"https://gist.github.com/7f5875b3916088502db90da106f6867e.git","html_url":"https://gist.github.com/7f5875b3916088502db90da106f6867e","files":{"Switch.tsx":{"filename":"Switch.tsx","type":"text/plain","language":"TSX","raw_url":"https://gist.githubusercontent.com/steveruizok/7f5875b3916088502db90da106f6867e/raw/19310b55f76bda1d83bef1717aacbed4590e18f5/Switch.tsx","size":675}},"public":true,"created_at":"2019-04-26T16:29:44Z","updated_at":"2019-04-26T16:29:44Z","description":"Switch Tutorial Controlling State From Props","comments":0,"user":null,"comments_url":"https://api.github.com/gists/7f5875b3916088502db90da106f6867e/comments","owner":{"login":"steveruizok","id":23072548,"node_id":"MDQ6VXNlcjIzMDcyNTQ4","avatar_url":"https://avatars2.githubusercontent.com/u/23072548?v=4","gravatar_id":"","url":"https://api.github.com/users/steveruizok","html_url":"https://github.com/steveruizok","followers_url":"https://api.github.com/users/steveruizok/followers","following_url":"https://api.github.com/users/steveruizok/following{/other_user}","gists_url":"https://api.github.com/users/steveruizok/gists{/gist_id}","starred_url":"https://api.github.com/users/steveruizok/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/steveruizok/subscriptions","organizations_url":"https://api.github.com/users/steveruizok/orgs","repos_url":"https://api.github.com/users/steveruizok/repos","events_url":"https://api.github.com/users/steveruizok/events{/privacy}","received_events_url":"https://api.github.com/users/steveruizok/received_events","type":"User","site_admin":false},"truncated":false},{"url":"https://api.github.com/gists/77a646a687a393215ab8a5f50b83c859","forks_url":"https://api.github.com/gists/77a646a687a393215ab8a5f50b83c859/forks","commits_url":"https://api.github.com/gists/77a646a687a393215ab8a5f50b83c859/commits","id":"77a646a687a393215ab8a5f50b83c859","node_id":"MDQ6R2lzdDc3YTY0NmE2ODdhMzkzMjE1YWI4YTVmNTBiODNjODU5","git_pull_url":"https://gist.github.com/77a646a687a393215ab8a5f50b83c859.git","git_push_url":"https://gist.github.com/77a646a687a393215ab8a5f50b83c859.git","html_url":"https://gist.github.com/77a646a687a393215ab8a5f50b83c859","files":{"Switch.tsx":{"filename":"Switch.tsx","type":"text/plain","language":"TSX","raw_url":"https://gist.githubusercontent.com/steveruizok/77a646a687a393215ab8a5f50b83c859/raw/1442ee34c4aa33aeffe2c787be2ab6edbe68800b/Switch.tsx","size":569}},"public":true,"created_at":"2019-04-26T16:24:21Z","updated_at":"2019-04-26T16:25:13Z","description":"Switch Tutorial Props","comments":0,"user":null,"comments_url":"https://api.github.com/gists/77a646a687a393215ab8a5f50b83c859/comments","owner":{"login":"steveruizok","id":23072548,"node_id":"MDQ6VXNlcjIzMDcyNTQ4","avatar_url":"https://avatars2.githubusercontent.com/u/23072548?v=4","gravatar_id":"","url":"https://api.github.com/users/steveruizok","html_url":"https://github.com/steveruizok","followers_url":"https://api.github.com/users/steveruizok/followers","following_url":"https://api.github.com/users/steveruizok/following{/other_user}","gists_url":"https://api.github.com/users/steveruizok/gists{/gist_id}","starred_url":"https://api.github.com/users/steveruizok/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/steveruizok/subscriptions","organizations_url":"https://api.github.com/users/steveruizok/orgs","repos_url":"https://api.github.com/users/steveruizok/repos","events_url":"https://api.github.com/users/steveruizok/events{/privacy}","received_events_url":"https://api.github.com/users/steveruizok/received_events","type":"User","site_admin":false},"truncated":false}]};

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
                    package.__framer__.packageJson = {"name":"framer","version":"1.0.11","main":"build/framer.js","author":"Framer","license":"MIT","scripts":{"coverage":"jest --coverage","test":"jest","watch":"jest --watch"},"devDependencies":{"@microsoft/api-extractor":"^7.1.5","@testing-library/react":"^8.0.1","@types/chalk":"^2.2.0","@types/draft-js":"0.10.19","@types/enzyme":"^3.1.10","@types/enzyme-adapter-react-16":"^1.0.3","@types/hsluv":"https://github.com/framer/typed_hsluv#bump","@types/jest":"^23.0.0","@types/jest-diff":"^20.0.0","@types/jest-matcher-utils":"^21.0.1","@types/node":"^10.12.9","@types/react":"16.8.4","@types/react-dom":"^16.8","cache-loader":"^1.2.2","chalk":"^2.4.1","convert-tsconfig-paths-to-webpack-aliases":"^0.9.2","css.escape":"^1.5.1","draft-js":"0.10.4","enzyme":"^3.9.0","enzyme-adapter-react-16":"^1.9.1","eventemitter3":"^3.1.0","fork-ts-checker-webpack-plugin":"^0.4.1","framer-motion":"^0.19.1","hoist-non-react-statics":"^2.5.0","hsluv":"^0.0.3","immutable":"^3.8.2","jest":"^23.1.0","jest-diff":"^23.6.0","jest-dom":"^3.1.3","jest-junit":"^5.2.0","modclean":"^3.0.0-beta.1","progress-bar-webpack-plugin":"^1.11.0","raf":"^3.4.0","react":"^16.8","react-dev-utils":"^5.0.1","react-dom":"^16.8","resize-observer-polyfill":"^1.5.1","semver":"^5.6.0","style-value-types":"^3.1.4","ts-jest":"^23.10.5","ts-loader":"^4.1.0","tslint":"^5.12.1","tslint-react-hooks":"^1.1.0","typescript":"3.3","watch":"^1.0.2","webpack":"^4.4.1","webpack-cli":"^3.1.2","webpack-dev-server":"^3.1.10","xcssmatrix":"^0.2.2"},"peerDependencies":{"react":"^16.8.2","react-dom":"^16.8.2"},"tsdoc":{"tsdocFlavor":"AEDoc"},"framer":{"components":[{"name":"Scroll","children":true,"properties":[{"key":"direction","title":"Direction","kind":"enum","options":["horizontal","vertical","both"]}]},{"name":"Page"},{"name":"Stack"},{"name":"FramerAppleWatch38","type":"device"},{"name":"FramerAppleWatch42","type":"device"},{"name":"FramerSonySmartWatch","type":"device"},{"name":"FramerAppleIPhoneSE","type":"device"},{"name":"FramerAppleIPhone8","type":"device"},{"name":"FramerAppleIPhone8Plus","type":"device"},{"name":"FramerAppleIPhoneXS","type":"device"},{"name":"FramerAppleIPhoneXR","type":"device"},{"name":"FramerAppleIPhoneXSMax","type":"device"},{"name":"FramerGooglePixel2","type":"device"},{"name":"FramerGooglePixel2XL","type":"device"},{"name":"FramerGooglePixel3","type":"device"},{"name":"FramerGooglePixel3XL","type":"device"},{"name":"FramerSamsungNote5","type":"device"},{"name":"FramerSamsungGalaxyS9","type":"device"},{"name":"FramerAppleIPadAir","type":"device"},{"name":"FramerAppleIPadMini","type":"device"},{"name":"FramerAppleIPadPro","type":"device"},{"name":"FramerGoogleNexusTablet","type":"device"},{"name":"FramerMicrosoftSurfacePro3","type":"device"},{"name":"FramerMicrosoftSurfacePro4","type":"device"},{"name":"FramerAppleIMac","type":"device"},{"name":"FramerAppleThunderboltDisplay","type":"device"},{"name":"FramerAppleMacBook","type":"device"},{"name":"FramerAppleMacBookAir","type":"device"},{"name":"FramerAppleMacBookPro","type":"device"},{"name":"FramerDellXPS","type":"device"},{"name":"FramerMicrosoftSurfaceBook","type":"device"},{"name":"FramerSonyW850C","type":"device"},{"name":"FramerStoreArtwork","type":"device"},{"name":"FramerStoreIcon","type":"device"}]}}
                    return package
                }

package.dependencies = packages

exports.__framer__ = package


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: main, license, devDependencies, peerDependencies, framer, author, dependencies, default */
/***/ (function(module) {

module.exports = {"main":"dist/index.js","license":"MIT","devDependencies":{"@framer/framer.device-skin-apple-iphone-xs-spacegrey":"^1.0.0","@types/react":"^16.8"},"peerDependencies":{"framer":"^1.0","react":"^16.8"},"framer":{"id":"77223c3e-fc31-46d2-99fa-28abc729130a"},"author":"Steve Ruiz","dependencies":{"@framer/steveruizok.education":"^1.167.0","gist-client":"^1.1.0","nanogist":"^1.0.0","netlify-auth-providers":"^1.0.0-alpha5"}};

/***/ }),

/***/ "framer":
/*!******************************************************************************************!*\
  !*** external {"root":"Framer","commonjs2":"framer","commonjs":"framer","amd":"framer"} ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_framer__;

/***/ })

/******/ });
});