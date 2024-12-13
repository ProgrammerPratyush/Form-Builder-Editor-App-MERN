"use strict";
(() => {
var exports = {};
exports.id = "bundle";
exports.ids = ["bundle"];
exports.modules = {

/***/ "./src/app.ts":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/app.css");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_nativescript__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-nativescript/dist/index.js");
/* harmony import */ var _components_MainStack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/components/MainStack.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__("./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__("./node_modules/react-refresh/runtime.js");

// Added by app-css-loader




// In NativeScript, the app.ts file is the entry point to your application. You
// can use this file to perform app-level initialization, but the primary
// purpose of the file is to pass control to the app’s first module.
// Controls react-nativescript log verbosity.
// - true: all logs;
// - false: only error logs.
Object.defineProperty(global, '__DEV__', {
  value: false
});
react_nativescript__WEBPACK_IMPORTED_MODULE_2__.start(react__WEBPACK_IMPORTED_MODULE_1__.createElement(_components_MainStack__WEBPACK_IMPORTED_MODULE_3__.MainStack, {}, null));
// Do not place any code after the application has been started as it will not
// be executed on iOS.

if (true) {
    let hash = __webpack_require__.h();
    let hmrBootEmittedSymbol = Symbol.for('HMRBootEmitted');
    let originalLiveSyncSymbol = Symbol.for('OriginalLiveSync');
    let hmrRuntimeLastLiveSyncSymbol = Symbol.for('HMRRuntimeLastLiveSync');
    const logVerbose = (title, ...info) => {
        if (false) {}
    };
    const setStatus = (hash, status, message, ...info) => {
        // format is important - CLI expects this exact format
        console.log(`[HMR][${hash}] ${status} | ${message}`);
        if (info === null || info === void 0 ? void 0 : info.length) {
            logVerbose('Additional Info', info);
        }
        // return true if operation was successful
        return status === 'success';
    };
    const applyOptions = {
        ignoreUnaccepted: false,
        ignoreDeclined: false,
        ignoreErrored: false,
        onDeclined(info) {
            setStatus(hash, 'failure', 'A module has been declined.', info);
        },
        onUnaccepted(info) {
            setStatus(hash, 'failure', 'A module has not been accepted.', info);
        },
        onAccepted(info) {
            // console.log('accepted', info)
            logVerbose('Module Accepted', info);
        },
        onDisposed(info) {
            // console.log('disposed', info)
            logVerbose('Module Disposed', info);
        },
        onErrored(info) {
            setStatus(hash, 'failure', 'A module has errored.', info);
        },
    };
    const checkAndApply = async () => {
        hash = __webpack_require__.h();
        const modules = await module.hot.check().catch((error) => {
            return setStatus(hash, 'failure', 'Failed to check.', error.message || error.stack);
        });
        if (!modules) {
            logVerbose('No modules to apply.');
            return false;
        }
        const appliedModules = await module.hot
            .apply(applyOptions)
            .catch((error) => {
            return setStatus(hash, 'failure', 'Failed to apply.', error.message || error.stack);
        });
        if (!appliedModules) {
            logVerbose('No modules applied.');
            return false;
        }
        return setStatus(hash, 'success', 'Successfully applied update.');
    };
    const requireExists = (path) => {
        try {
            global['require'](path);
            return true;
        }
        catch (err) {
            return false;
        }
    };
    const hasUpdate = () => {
        return [
            `~/bundle.${__webpack_require__.h()}.hot-update.json`,
            `~/runtime.${__webpack_require__.h()}.hot-update.json`,
        ].some((path) => requireExists(path));
    };
    if (global.__onLiveSync !== global[hmrRuntimeLastLiveSyncSymbol]) {
        // we store the original liveSync here in case this code runs again
        // which happens when you module.hot.accept() the main file
        global[originalLiveSyncSymbol] = global.__onLiveSync;
    }
    global[hmrRuntimeLastLiveSyncSymbol] = async function () {
        logVerbose('LiveSync');
        if (!hasUpdate()) {
            return false;
        }
        if (!(await checkAndApply())) {
            return false;
        }
        await global[originalLiveSyncSymbol]();
    };
    global.__onLiveSync = global[hmrRuntimeLastLiveSyncSymbol];
    if (!global[hmrBootEmittedSymbol]) {
        global[hmrBootEmittedSymbol] = true;
        setStatus(hash, 'boot', 'HMR Enabled - waiting for changes...');
    }
}


const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (true) {
			errorOverlay = false;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/app.css":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* CSS2JSON */

const ___CSS2JSON_LOADER_EXPORT___ = {"type":"stylesheet","stylesheet":{"rules":[{"type":"rule","selectors":["*","::before","::after"],"declarations":[{"type":"declaration","property":"--tw-border-spacing-x","value":"0"},{"type":"declaration","property":"--tw-border-spacing-y","value":"0"},{"type":"declaration","property":"--tw-translate-x","value":"0"},{"type":"declaration","property":"--tw-translate-y","value":"0"},{"type":"declaration","property":"--tw-rotate","value":"0"},{"type":"declaration","property":"--tw-skew-x","value":"0"},{"type":"declaration","property":"--tw-skew-y","value":"0"},{"type":"declaration","property":"--tw-scale-x","value":"1"},{"type":"declaration","property":"--tw-scale-y","value":"1"},{"type":"declaration","property":"--tw-pan-x","value":""},{"type":"declaration","property":"--tw-pan-y","value":""},{"type":"declaration","property":"--tw-pinch-zoom","value":""},{"type":"declaration","property":"--tw-scroll-snap-strictness","value":"proximity"},{"type":"declaration","property":"--tw-gradient-from-position","value":""},{"type":"declaration","property":"--tw-gradient-via-position","value":""},{"type":"declaration","property":"--tw-gradient-to-position","value":""},{"type":"declaration","property":"--tw-blur","value":""},{"type":"declaration","property":"--tw-brightness","value":""},{"type":"declaration","property":"--tw-contrast","value":""},{"type":"declaration","property":"--tw-grayscale","value":""},{"type":"declaration","property":"--tw-hue-rotate","value":""},{"type":"declaration","property":"--tw-invert","value":""},{"type":"declaration","property":"--tw-saturate","value":""},{"type":"declaration","property":"--tw-sepia","value":""},{"type":"declaration","property":"--tw-drop-shadow","value":""},{"type":"declaration","property":"--tw-backdrop-blur","value":""},{"type":"declaration","property":"--tw-backdrop-brightness","value":""},{"type":"declaration","property":"--tw-backdrop-contrast","value":""},{"type":"declaration","property":"--tw-backdrop-grayscale","value":""},{"type":"declaration","property":"--tw-backdrop-hue-rotate","value":""},{"type":"declaration","property":"--tw-backdrop-invert","value":""},{"type":"declaration","property":"--tw-backdrop-opacity","value":""},{"type":"declaration","property":"--tw-backdrop-saturate","value":""},{"type":"declaration","property":"--tw-backdrop-sepia","value":""},{"type":"declaration","property":"--tw-contain-size","value":""},{"type":"declaration","property":"--tw-contain-layout","value":""},{"type":"declaration","property":"--tw-contain-paint","value":""},{"type":"declaration","property":"--tw-contain-style","value":""}]},{"type":"rule","selectors":["::backdrop"],"declarations":[{"type":"declaration","property":"--tw-border-spacing-x","value":"0"},{"type":"declaration","property":"--tw-border-spacing-y","value":"0"},{"type":"declaration","property":"--tw-translate-x","value":"0"},{"type":"declaration","property":"--tw-translate-y","value":"0"},{"type":"declaration","property":"--tw-rotate","value":"0"},{"type":"declaration","property":"--tw-skew-x","value":"0"},{"type":"declaration","property":"--tw-skew-y","value":"0"},{"type":"declaration","property":"--tw-scale-x","value":"1"},{"type":"declaration","property":"--tw-scale-y","value":"1"},{"type":"declaration","property":"--tw-pan-x","value":""},{"type":"declaration","property":"--tw-pan-y","value":""},{"type":"declaration","property":"--tw-pinch-zoom","value":""},{"type":"declaration","property":"--tw-scroll-snap-strictness","value":"proximity"},{"type":"declaration","property":"--tw-gradient-from-position","value":""},{"type":"declaration","property":"--tw-gradient-via-position","value":""},{"type":"declaration","property":"--tw-gradient-to-position","value":""},{"type":"declaration","property":"--tw-blur","value":""},{"type":"declaration","property":"--tw-brightness","value":""},{"type":"declaration","property":"--tw-contrast","value":""},{"type":"declaration","property":"--tw-grayscale","value":""},{"type":"declaration","property":"--tw-hue-rotate","value":""},{"type":"declaration","property":"--tw-invert","value":""},{"type":"declaration","property":"--tw-saturate","value":""},{"type":"declaration","property":"--tw-sepia","value":""},{"type":"declaration","property":"--tw-drop-shadow","value":""},{"type":"declaration","property":"--tw-backdrop-blur","value":""},{"type":"declaration","property":"--tw-backdrop-brightness","value":""},{"type":"declaration","property":"--tw-backdrop-contrast","value":""},{"type":"declaration","property":"--tw-backdrop-grayscale","value":""},{"type":"declaration","property":"--tw-backdrop-hue-rotate","value":""},{"type":"declaration","property":"--tw-backdrop-invert","value":""},{"type":"declaration","property":"--tw-backdrop-opacity","value":""},{"type":"declaration","property":"--tw-backdrop-saturate","value":""},{"type":"declaration","property":"--tw-backdrop-sepia","value":""},{"type":"declaration","property":"--tw-contain-size","value":""},{"type":"declaration","property":"--tw-contain-layout","value":""},{"type":"declaration","property":"--tw-contain-paint","value":""},{"type":"declaration","property":"--tw-contain-style","value":""}]},{"type":"rule","selectors":[".container"],"declarations":[{"type":"declaration","property":"width","value":"100%"}]},{"type":"rule","selectors":[".mx-2"],"declarations":[{"type":"declaration","property":"margin-left","value":"8"},{"type":"declaration","property":"margin-right","value":"8"}]},{"type":"rule","selectors":[".mb-2"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"8"}]},{"type":"rule","selectors":[".mb-4"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"16"}]},{"type":"rule","selectors":[".mr-2"],"declarations":[{"type":"declaration","property":"margin-right","value":"8"}]},{"type":"rule","selectors":[".mt-2"],"declarations":[{"type":"declaration","property":"margin-top","value":"8"}]},{"type":"rule","selectors":[".mt-4"],"declarations":[{"type":"declaration","property":"margin-top","value":"16"}]},{"type":"rule","selectors":[".h-full"],"declarations":[{"type":"declaration","property":"height","value":"100%"}]},{"type":"rule","selectors":[".flex-grow"],"declarations":[{"type":"declaration","property":"flex-grow","value":"1"}]},{"type":"rule","selectors":[".rounded-lg"],"declarations":[{"type":"declaration","property":"border-radius","value":"8"}]},{"type":"rule","selectors":[".border-b"],"declarations":[{"type":"declaration","property":"border-bottom-width","value":"1px"}]},{"type":"rule","selectors":[".border-b-2"],"declarations":[{"type":"declaration","property":"border-bottom-width","value":"2px"}]},{"type":"rule","selectors":[".border-t"],"declarations":[{"type":"declaration","property":"border-top-width","value":"1px"}]},{"type":"rule","selectors":[".border-gray-200"],"declarations":[{"type":"declaration","property":"--tw-border-opacity","value":"1"},{"type":"declaration","property":"border-color","value":"rgb(229 231 235 / var(--tw-border-opacity, 1))"}]},{"type":"rule","selectors":[".border-gray-300"],"declarations":[{"type":"declaration","property":"--tw-border-opacity","value":"1"},{"type":"declaration","property":"border-color","value":"rgb(209 213 219 / var(--tw-border-opacity, 1))"}]},{"type":"rule","selectors":[".border-purple-600"],"declarations":[{"type":"declaration","property":"--tw-border-opacity","value":"1"},{"type":"declaration","property":"border-color","value":"rgb(147 51 234 / var(--tw-border-opacity, 1))"}]},{"type":"rule","selectors":[".bg-purple-600"],"declarations":[{"type":"declaration","property":"--tw-bg-opacity","value":"1"},{"type":"declaration","property":"background-color","value":"rgb(147 51 234 / var(--tw-bg-opacity, 1))"}]},{"type":"rule","selectors":[".bg-white"],"declarations":[{"type":"declaration","property":"--tw-bg-opacity","value":"1"},{"type":"declaration","property":"background-color","value":"rgb(255 255 255 / var(--tw-bg-opacity, 1))"}]},{"type":"rule","selectors":[".p-2"],"declarations":[{"type":"declaration","property":"padding","value":"8"}]},{"type":"rule","selectors":[".p-4"],"declarations":[{"type":"declaration","property":"padding","value":"16"}]},{"type":"rule","selectors":[".px-4"],"declarations":[{"type":"declaration","property":"padding-left","value":"16"},{"type":"declaration","property":"padding-right","value":"16"}]},{"type":"rule","selectors":[".py-2"],"declarations":[{"type":"declaration","property":"padding-top","value":"8"},{"type":"declaration","property":"padding-bottom","value":"8"}]},{"type":"rule","selectors":[".text-center"],"declarations":[{"type":"declaration","property":"text-align","value":"center"}]},{"type":"rule","selectors":[".text-2xl"],"declarations":[{"type":"declaration","property":"font-size","value":"24"},{"type":"declaration","property":"line-height","value":"32"}]},{"type":"rule","selectors":[".text-lg"],"declarations":[{"type":"declaration","property":"font-size","value":"18"},{"type":"declaration","property":"line-height","value":"28"}]},{"type":"rule","selectors":[".text-sm"],"declarations":[{"type":"declaration","property":"font-size","value":"14"},{"type":"declaration","property":"line-height","value":"20"}]},{"type":"rule","selectors":[".text-xl"],"declarations":[{"type":"declaration","property":"font-size","value":"20"},{"type":"declaration","property":"line-height","value":"28"}]},{"type":"rule","selectors":[".text-xs"],"declarations":[{"type":"declaration","property":"font-size","value":"12"},{"type":"declaration","property":"line-height","value":"16"}]},{"type":"rule","selectors":[".font-bold"],"declarations":[{"type":"declaration","property":"font-weight","value":"700"}]},{"type":"rule","selectors":[".text-gray-500"],"declarations":[{"type":"declaration","property":"--tw-text-opacity","value":"1"},{"type":"declaration","property":"color","value":"rgb(107 114 128 / var(--tw-text-opacity, 1))"}]},{"type":"rule","selectors":[".text-gray-600"],"declarations":[{"type":"declaration","property":"--tw-text-opacity","value":"1"},{"type":"declaration","property":"color","value":"rgb(75 85 99 / var(--tw-text-opacity, 1))"}]},{"type":"rule","selectors":[".text-purple-600"],"declarations":[{"type":"declaration","property":"--tw-text-opacity","value":"1"},{"type":"declaration","property":"color","value":"rgb(147 51 234 / var(--tw-text-opacity, 1))"}]},{"type":"rule","selectors":[".text-red-600"],"declarations":[{"type":"declaration","property":"--tw-text-opacity","value":"1"},{"type":"declaration","property":"color","value":"rgb(220 38 38 / var(--tw-text-opacity, 1))"}]},{"type":"rule","selectors":[".text-white"],"declarations":[{"type":"declaration","property":"--tw-text-opacity","value":"1"},{"type":"declaration","property":"color","value":"rgb(255 255 255 / var(--tw-text-opacity, 1))"}]},{"type":"rule","selectors":[".shadow-sm"],"declarations":[{"type":"declaration","property":"box-shadow","value":"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"}]},{"type":"rule","selectors":[".text-purple-600"],"declarations":[{"type":"declaration","property":"color","value":"#7c3aed"}]},{"type":"rule","selectors":[".bg-purple-600"],"declarations":[{"type":"declaration","property":"background-color","value":"#7c3aed"}]},{"type":"rule","selectors":[".border-purple-600"],"declarations":[{"type":"declaration","property":"border-color","value":"#7c3aed"}]},{"type":"rule","selectors":[".text-gray-600"],"declarations":[{"type":"declaration","property":"color","value":"#4b5563"}]},{"type":"rule","selectors":[".bg-white"],"declarations":[{"type":"declaration","property":"background-color","value":"#ffffff"}]},{"type":"rule","selectors":[".shadow-sm"],"declarations":[{"type":"declaration","property":"box-shadow","value":"0 1px 2px 0 rgba(0, 0, 0, 0.05)"}]},{"type":"rule","selectors":[".border-gray-200"],"declarations":[{"type":"declaration","property":"border-color","value":"#e5e7eb"}]},{"type":"rule","selectors":["button"],"declarations":[{"type":"declaration","property":"font-size","value":"16"},{"type":"declaration","property":"padding","value":"8"}]},{"type":"rule","selectors":["textField"],"declarations":[{"type":"declaration","property":"padding","value":"8"},{"type":"declaration","property":"font-size","value":"16"}]},{"type":"rule","selectors":["label"],"declarations":[{"type":"declaration","property":"font-size","value":"14"}]}],"parsingErrors":[]}}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS2JSON_LOADER_EXPORT___);
const { addTaggedAdditionalCSS } = __webpack_require__("./node_modules/@nativescript/core/ui/styling/style-scope.js");
addTaggedAdditionalCSS(___CSS2JSON_LOADER_EXPORT___, "P:\\My Projects\\Form Editor-React native app-with MongoDB-task-Final-App\\Form-Editor-App-Mobile\\src\\app.css")
if(true) {
	module.hot.accept()
	module.hot.dispose(() => {
		const { removeTaggedAdditionalCSS } = __webpack_require__("./node_modules/@nativescript/core/ui/styling/style-scope.js");
		removeTaggedAdditionalCSS("P:\\My Projects\\Form Editor-React native app-with MongoDB-task-Final-App\\Form-Editor-App-Mobile\\src\\app.css")
	})
}

/***/ }),

/***/ "./src/components/FormBuilder/BottomToolbar.tsx":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BottomToolbar: () => (/* binding */ BottomToolbar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__("./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__("./node_modules/react-refresh/runtime.js");


function BottomToolbar({
  onAddQuestion
}) {
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement("gridLayout", {
    rows: "auto",
    columns: "*,*,*,*,*",
    className: "p-4 bg-white border-t border-gray-200"
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("stackLayout", {
    col: "0",
    className: "text-center",
    onTap: () => onAddQuestion('text')
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    className: "text-2xl text-purple-600"
  }, "+"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    className: "text-xs text-gray-600"
  }, "Add")), react__WEBPACK_IMPORTED_MODULE_0__.createElement("stackLayout", {
    col: "1",
    className: "text-center",
    onTap: () => onAddQuestion('text')
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    className: "text-2xl text-purple-600"
  }, "Aa"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    className: "text-xs text-gray-600"
  }, "Text")), react__WEBPACK_IMPORTED_MODULE_0__.createElement("stackLayout", {
    col: "2",
    className: "text-center",
    onTap: () => onAddQuestion('grid')
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    className: "text-2xl text-purple-600"
  }, "\u25A1"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    className: "text-xs text-gray-600"
  }, "Grid")), react__WEBPACK_IMPORTED_MODULE_0__.createElement("stackLayout", {
    col: "3",
    className: "text-center",
    onTap: () => onAddQuestion('checkbox')
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    className: "text-2xl text-purple-600"
  }, "\u2610"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    className: "text-xs text-gray-600"
  }, "Check")), react__WEBPACK_IMPORTED_MODULE_0__.createElement("stackLayout", {
    col: "4",
    className: "text-center"
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    className: "text-2xl text-purple-600"
  }, "\u2014"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    className: "text-xs text-gray-600"
  }, "Line")));
}
_c = BottomToolbar;
var _c;
__webpack_require__.$Refresh$.register(_c, "BottomToolbar");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (true) {
			errorOverlay = false;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/components/FormBuilder/FormEditor.tsx":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormEditor: () => (/* binding */ FormEditor)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/@nativescript/core/ui/dialogs/index.android.js");
/* harmony import */ var _pages_QuestionsPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/FormBuilder/pages/QuestionsPage.tsx");
/* harmony import */ var _pages_ResponsesPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/FormBuilder/pages/ResponsesPage.tsx");
/* harmony import */ var _pages_SettingsPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/components/FormBuilder/pages/SettingsPage.tsx");
/* harmony import */ var _BottomToolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/components/FormBuilder/BottomToolbar.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__("./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__("./node_modules/react-refresh/runtime.js");

var _s = __webpack_require__.$Refresh$.signature();






function FormEditor() {
  _s();
  const [formState, setFormState] = react__WEBPACK_IMPORTED_MODULE_0__.useState({
    title: "Customer Satisfaction Survey",
    description: "No Description",
    questions: [],
    activeTab: 'questions'
  });
  const addQuestion = type => {
    const newQuestion = {
      id: Date.now().toString(),
      type,
      title: "",
      required: false,
      options: type === 'checkbox' ? ["Option 1"] : undefined,
      rows: type === 'grid' ? ["Row 1"] : undefined,
      columns: type === 'grid' ? ["Column 1"] : undefined
    };
    setFormState(prev => ({
      ...prev,
      questions: [...prev.questions, newQuestion]
    }));
  };
  const handleSend = async () => {
    const result = await _nativescript_core__WEBPACK_IMPORTED_MODULE_5__.Dialogs.confirm({
      title: "Send Form",
      message: "Are you ready to send this form?",
      okButtonText: "Yes",
      cancelButtonText: "No"
    });
    if (result) {
      // Generate a unique form URL
      const formUrl = `https://example.com/forms/${Date.now()}`;
      await _nativescript_core__WEBPACK_IMPORTED_MODULE_5__.Dialogs.alert({
        title: "Form Ready",
        message: `Your form is ready to share!\n\nURL: ${formUrl}`,
        okButtonText: "Copy URL"
      });
    }
  };
  const renderContent = () => {
    switch (formState.activeTab) {
      case 'questions':
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_QuestionsPage__WEBPACK_IMPORTED_MODULE_1__.QuestionsPage, {
          title: formState.title,
          description: formState.description,
          questions: formState.questions,
          onUpdateTitle: title => setFormState(prev => ({
            ...prev,
            title
          })),
          onUpdateDescription: description => setFormState(prev => ({
            ...prev,
            description
          })),
          onUpdateQuestion: (questionId, updatedQuestion) => {
            setFormState(prev => ({
              ...prev,
              questions: prev.questions.map(q => q.id === questionId ? updatedQuestion : q)
            }));
          }
        });
      case 'responses':
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_ResponsesPage__WEBPACK_IMPORTED_MODULE_2__.ResponsesPage, null);
      case 'settings':
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_SettingsPage__WEBPACK_IMPORTED_MODULE_3__.SettingsPage, null);
    }
  };
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement("stackLayout", {
    className: "bg-white h-full"
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("gridLayout", {
    rows: "auto",
    columns: "auto, *, auto",
    className: "p-4 border-b border-gray-200"
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    col: "0",
    className: "text-purple-600 text-lg",
    onTap: () => _nativescript_core__WEBPACK_IMPORTED_MODULE_5__.Dialogs.confirm("Exit form editor?")
  }, "\u2715"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("stackLayout", {
    col: "1",
    className: "text-center"
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "mx-2",
    onTap: () => console.log('Theme clicked')
  }, "Theme"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "mx-2",
    onTap: () => console.log('Preview clicked')
  }, "Preview")), react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    col: "2",
    className: "bg-purple-600 text-white px-4 py-2 rounded-lg",
    onTap: handleSend
  }, "Send")), react__WEBPACK_IMPORTED_MODULE_0__.createElement("gridLayout", {
    rows: "auto",
    columns: "*, *, *",
    className: "border-b border-gray-200"
  }, ['questions', 'responses', 'settings'].map((tab, index) => react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    col: index,
    className: `p-4 text-center ${formState.activeTab === tab ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-600'}`,
    text: tab.charAt(0).toUpperCase() + tab.slice(1),
    onTap: () => setFormState(prev => ({
      ...prev,
      activeTab: tab
    }))
  }))), renderContent(), formState.activeTab === 'questions' && react__WEBPACK_IMPORTED_MODULE_0__.createElement(_BottomToolbar__WEBPACK_IMPORTED_MODULE_4__.BottomToolbar, {
    onAddQuestion: addQuestion
  }));
}
_s(FormEditor, "vy+hDS8TO7YXiQaoh2iti+rW0bs=");
_c = FormEditor;
var _c;
__webpack_require__.$Refresh$.register(_c, "FormEditor");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (true) {
			errorOverlay = false;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/components/FormBuilder/QuestionTypes/CheckboxQuestion.tsx":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CheckboxQuestion: () => (/* binding */ CheckboxQuestion)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__("./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__("./node_modules/react-refresh/runtime.js");


function CheckboxQuestion({
  question,
  onUpdate
}) {
  const addOption = () => {
    const options = [...(question.options || []), `Option ${(question.options?.length || 0) + 1}`];
    onUpdate({
      ...question,
      options
    });
  };
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement("stackLayout", {
    className: "p-4"
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("textField", {
    text: question.title,
    hint: "Question title",
    className: "text-lg mb-2",
    onTextChange: args => {
      onUpdate({
        ...question,
        title: args.object.text
      });
    }
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("stackLayout", {
    className: "mb-4"
  }, question.options?.map((option, index) => react__WEBPACK_IMPORTED_MODULE_0__.createElement("gridLayout", {
    rows: "auto",
    columns: "auto, *",
    className: "mb-2"
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("checkbox", {
    col: "0",
    className: "mr-2"
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("textField", {
    col: "1",
    text: option,
    className: "border-b border-gray-300",
    onTextChange: args => {
      const newOptions = [...(question.options || [])];
      newOptions[index] = args.object.text;
      onUpdate({
        ...question,
        options: newOptions
      });
    }
  })))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "text-purple-600",
    onTap: addOption
  }, "+ Add Option"));
}
_c = CheckboxQuestion;
var _c;
__webpack_require__.$Refresh$.register(_c, "CheckboxQuestion");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (true) {
			errorOverlay = false;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/components/FormBuilder/QuestionTypes/GridQuestion.tsx":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GridQuestion: () => (/* binding */ GridQuestion)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__("./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__("./node_modules/react-refresh/runtime.js");


function GridQuestion({
  question,
  onUpdate
}) {
  const addRow = () => {
    const rows = [...(question.rows || []), `Row ${(question.rows?.length || 0) + 1}`];
    onUpdate({
      ...question,
      rows
    });
  };
  const addColumn = () => {
    const columns = [...(question.columns || []), `Column ${(question.columns?.length || 0) + 1}`];
    onUpdate({
      ...question,
      columns
    });
  };
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement("stackLayout", {
    className: "p-4"
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("textField", {
    text: question.title,
    hint: "Question title",
    className: "text-lg mb-2",
    onTextChange: args => {
      onUpdate({
        ...question,
        title: args.object.text
      });
    }
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("scrollView", {
    orientation: "horizontal",
    className: "mb-4"
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("gridLayout", {
    rows: "auto",
    columns: question.columns?.map(() => "auto").join(", ")
  }, question.columns?.map((col, colIndex) => react__WEBPACK_IMPORTED_MODULE_0__.createElement("textField", {
    col: colIndex,
    text: col,
    className: "p-2 border-b border-gray-300",
    onTextChange: args => {
      const newColumns = [...(question.columns || [])];
      newColumns[colIndex] = args.object.text;
      onUpdate({
        ...question,
        columns: newColumns
      });
    }
  })))), react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "text-purple-600",
    onTap: addColumn
  }, "+ Add Column"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "text-purple-600 mt-2",
    onTap: addRow
  }, "+ Add Row"));
}
_c = GridQuestion;
var _c;
__webpack_require__.$Refresh$.register(_c, "GridQuestion");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (true) {
			errorOverlay = false;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/components/FormBuilder/QuestionTypes/TextQuestion.tsx":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TextQuestion: () => (/* binding */ TextQuestion)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__("./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__("./node_modules/react-refresh/runtime.js");


function TextQuestion({
  question,
  onUpdate
}) {
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement("stackLayout", {
    className: "p-4"
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("textField", {
    text: question.title,
    hint: "Question title",
    className: "text-lg mb-2",
    onTextChange: args => {
      onUpdate({
        ...question,
        title: args.object.text
      });
    }
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("textField", {
    hint: "Type your answer",
    className: "text-gray-500 border-b border-gray-300 p-2",
    editable: false
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("switch", {
    checked: question.required,
    className: "mt-2",
    onCheckedChange: args => {
      onUpdate({
        ...question,
        required: args.object.checked
      });
    }
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    className: "text-sm text-gray-600"
  }, "Required"));
}
_c = TextQuestion;
var _c;
__webpack_require__.$Refresh$.register(_c, "TextQuestion");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (true) {
			errorOverlay = false;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/components/FormBuilder/pages/QuestionsPage.tsx":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QuestionsPage: () => (/* binding */ QuestionsPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _QuestionTypes_TextQuestion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/FormBuilder/QuestionTypes/TextQuestion.tsx");
/* harmony import */ var _QuestionTypes_GridQuestion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/FormBuilder/QuestionTypes/GridQuestion.tsx");
/* harmony import */ var _QuestionTypes_CheckboxQuestion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/components/FormBuilder/QuestionTypes/CheckboxQuestion.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__("./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__("./node_modules/react-refresh/runtime.js");





function QuestionsPage({
  title,
  description,
  questions,
  onUpdateTitle,
  onUpdateDescription,
  onUpdateQuestion
}) {
  const renderQuestion = question => {
    switch (question.type) {
      case 'text':
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_QuestionTypes_TextQuestion__WEBPACK_IMPORTED_MODULE_1__.TextQuestion, {
          question: question,
          onUpdate: q => onUpdateQuestion(question.id, q)
        });
      case 'grid':
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_QuestionTypes_GridQuestion__WEBPACK_IMPORTED_MODULE_2__.GridQuestion, {
          question: question,
          onUpdate: q => onUpdateQuestion(question.id, q)
        });
      case 'checkbox':
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_QuestionTypes_CheckboxQuestion__WEBPACK_IMPORTED_MODULE_3__.CheckboxQuestion, {
          question: question,
          onUpdate: q => onUpdateQuestion(question.id, q)
        });
    }
  };
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement("scrollView", {
    className: "flex-grow"
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("stackLayout", {
    className: "p-4"
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("stackLayout", {
    className: "bg-white rounded-lg p-4 mb-4 shadow-sm"
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("textField", {
    text: title,
    className: "text-2xl font-bold",
    onTextChange: args => onUpdateTitle(args.object.text)
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("textField", {
    text: description,
    className: "text-gray-600",
    onTextChange: args => onUpdateDescription(args.object.text)
  })), questions.map(question => react__WEBPACK_IMPORTED_MODULE_0__.createElement("stackLayout", {
    key: question.id,
    className: "bg-white rounded-lg mb-4 shadow-sm"
  }, renderQuestion(question)))));
}
_c = QuestionsPage;
var _c;
__webpack_require__.$Refresh$.register(_c, "QuestionsPage");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (true) {
			errorOverlay = false;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/components/FormBuilder/pages/ResponsesPage.tsx":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ResponsesPage: () => (/* binding */ ResponsesPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__("./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__("./node_modules/react-refresh/runtime.js");


function ResponsesPage() {
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement("scrollView", {
    className: "flex-grow"
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("stackLayout", {
    className: "p-4"
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    className: "text-xl font-bold mb-4"
  }, "Form Responses"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    className: "text-gray-600"
  }, "No responses yet"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "bg-purple-600 text-white p-4 rounded-lg mt-4"
  }, "Export Responses to CSV")));
}
_c = ResponsesPage;
var _c;
__webpack_require__.$Refresh$.register(_c, "ResponsesPage");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (true) {
			errorOverlay = false;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/components/FormBuilder/pages/SettingsPage.tsx":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsPage: () => (/* binding */ SettingsPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__("./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__("./node_modules/react-refresh/runtime.js");


function SettingsPage() {
  return react__WEBPACK_IMPORTED_MODULE_0__.createElement("scrollView", {
    className: "flex-grow"
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("stackLayout", {
    className: "p-4"
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    className: "text-xl font-bold mb-4"
  }, "Form Settings"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("stackLayout", {
    className: "bg-white rounded-lg p-4 mb-4 shadow-sm"
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    className: "font-bold mb-2"
  }, "Form Visibility"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("switch", {
    className: "mb-4",
    checked: true
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    className: "text-gray-600"
  }, "Allow public responses")), react__WEBPACK_IMPORTED_MODULE_0__.createElement("stackLayout", {
    className: "bg-white rounded-lg p-4 mb-4 shadow-sm"
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    className: "font-bold mb-2"
  }, "Response Settings"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("switch", {
    className: "mb-4",
    checked: true
  }), react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    className: "text-gray-600"
  }, "Collect email addresses")), react__WEBPACK_IMPORTED_MODULE_0__.createElement("stackLayout", {
    className: "bg-white rounded-lg p-4 mb-4 shadow-sm"
  }, react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
    className: "font-bold mb-2"
  }, "Form Controls"), react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "text-red-600 mt-2"
  }, "Delete Form"))));
}
_c = SettingsPage;
var _c;
__webpack_require__.$Refresh$.register(_c, "SettingsPage");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (true) {
			errorOverlay = false;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./src/components/MainStack.tsx":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainStack: () => (/* binding */ MainStack)
/* harmony export */ });
/* harmony import */ var _react_navigation_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@react-navigation/core/lib/module/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_nativescript_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/react-nativescript-navigation/dist/index.js");
/* harmony import */ var _FormBuilder_FormEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/components/FormBuilder/FormEditor.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__("./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__("./node_modules/react-refresh/runtime.js");





const StackNavigator = (0,react_nativescript_navigation__WEBPACK_IMPORTED_MODULE_2__.stackNavigatorFactory)();
const MainStack = () => react__WEBPACK_IMPORTED_MODULE_1__.createElement(_react_navigation_core__WEBPACK_IMPORTED_MODULE_0__.BaseNavigationContainer, null, react__WEBPACK_IMPORTED_MODULE_1__.createElement(StackNavigator.Navigator, {
  initialRouteName: "FormEditor",
  screenOptions: {
    headerShown: false
  }
}, react__WEBPACK_IMPORTED_MODULE_1__.createElement(StackNavigator.Screen, {
  name: "FormEditor",
  component: _FormBuilder_FormEditor__WEBPACK_IMPORTED_MODULE_3__.FormEditor
})));
_c = MainStack;
var _c;
__webpack_require__.$Refresh$.register(_c, "MainStack");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (true) {
			errorOverlay = false;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "~/package.json":
/***/ ((module) => {

module.exports = require("~/package.json");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("./runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor"], () => (__webpack_exec__("./node_modules/@pmmmwh/react-refresh-webpack-plugin/client/ReactRefreshEntry.js"), __webpack_exec__("./node_modules/@nativescript/core/globals/index.js"), __webpack_exec__("./node_modules/@nativescript/core/bundle-entry-points.js"), __webpack_exec__("./src/app.ts"), __webpack_exec__("./node_modules/@nativescript/core/ui/frame/index.android.js"), __webpack_exec__("./node_modules/@nativescript/core/ui/frame/activity.android.js")));
var __webpack_export_target__ = exports;
for(var __webpack_i__ in __webpack_exports__) __webpack_export_target__[__webpack_i__] = __webpack_exports__[__webpack_i__];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFFBQ3BCeEYsZ0RBQUEsQ0FBQzBGLGNBQWMsQ0FBQ0MsU0FBUztFQUNyQkMsZ0JBQWdCLEVBQUMsWUFBWTtFQUM3QkMsYUFBYSxFQUFFO0lBQ1hDLFdBQVcsRUFBRTs7QUFDaEIsR0FFRDlGLGdEQUFBLENBQUMwRixjQUFjLENBQUNLLE1BQU07RUFDbEJDLElBQUksRUFBQyxZQUFZO0VBQ2pCQyxTQUFTLEVBQUU3RSwrREFBVUE7QUFBQSxFQUN2QixDQUNxQixDQUVsQztBQUFDTixFQUFBLEdBZFdaLFNBQVM7QUFBQSxJQUFBWSxFQUFBO0FBQUFDLHNDQUFBLENBQUFELEVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHRCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtcmVhY3QvLi9zcmMvYXBwLnRzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXJlYWN0Ly4vc3JjL2FwcC5jc3MiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtcmVhY3QvLi9zcmMvY29tcG9uZW50cy9Gb3JtQnVpbGRlci9Cb3R0b21Ub29sYmFyLnRzeCIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC1yZWFjdC8uL3NyYy9jb21wb25lbnRzL0Zvcm1CdWlsZGVyL0Zvcm1FZGl0b3IudHN4Iiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXJlYWN0Ly4vc3JjL2NvbXBvbmVudHMvRm9ybUJ1aWxkZXIvUXVlc3Rpb25UeXBlcy9DaGVja2JveFF1ZXN0aW9uLnRzeCIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC1yZWFjdC8uL3NyYy9jb21wb25lbnRzL0Zvcm1CdWlsZGVyL1F1ZXN0aW9uVHlwZXMvR3JpZFF1ZXN0aW9uLnRzeCIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC1yZWFjdC8uL3NyYy9jb21wb25lbnRzL0Zvcm1CdWlsZGVyL1F1ZXN0aW9uVHlwZXMvVGV4dFF1ZXN0aW9uLnRzeCIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC1yZWFjdC8uL3NyYy9jb21wb25lbnRzL0Zvcm1CdWlsZGVyL3BhZ2VzL1F1ZXN0aW9uc1BhZ2UudHN4Iiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXJlYWN0Ly4vc3JjL2NvbXBvbmVudHMvRm9ybUJ1aWxkZXIvcGFnZXMvUmVzcG9uc2VzUGFnZS50c3giLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtcmVhY3QvLi9zcmMvY29tcG9uZW50cy9Gb3JtQnVpbGRlci9wYWdlcy9TZXR0aW5nc1BhZ2UudHN4Iiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXJlYWN0Ly4vc3JjL2NvbXBvbmVudHMvTWFpblN0YWNrLnRzeCIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC1yZWFjdC9leHRlcm5hbCBjb21tb25qcyBcIn4vcGFja2FnZS5qc29uXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgUmVhY3ROYXRpdmVTY3JpcHQgZnJvbSAncmVhY3QtbmF0aXZlc2NyaXB0JztcbmltcG9ydCB7IE1haW5TdGFjayB9IGZyb20gJy4vY29tcG9uZW50cy9NYWluU3RhY2snO1xuXG4vLyBJbiBOYXRpdmVTY3JpcHQsIHRoZSBhcHAudHMgZmlsZSBpcyB0aGUgZW50cnkgcG9pbnQgdG8geW91ciBhcHBsaWNhdGlvbi4gWW91XG4vLyBjYW4gdXNlIHRoaXMgZmlsZSB0byBwZXJmb3JtIGFwcC1sZXZlbCBpbml0aWFsaXphdGlvbiwgYnV0IHRoZSBwcmltYXJ5XG4vLyBwdXJwb3NlIG9mIHRoZSBmaWxlIGlzIHRvIHBhc3MgY29udHJvbCB0byB0aGUgYXBw4oCZcyBmaXJzdCBtb2R1bGUuXG5cbi8vIENvbnRyb2xzIHJlYWN0LW5hdGl2ZXNjcmlwdCBsb2cgdmVyYm9zaXR5LlxuLy8gLSB0cnVlOiBhbGwgbG9ncztcbi8vIC0gZmFsc2U6IG9ubHkgZXJyb3IgbG9ncy5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShnbG9iYWwsICdfX0RFVl9fJywgeyB2YWx1ZTogZmFsc2UgfSk7XG5cblJlYWN0TmF0aXZlU2NyaXB0LnN0YXJ0KFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWFpblN0YWNrLCB7fSwgbnVsbCkpO1xuXG4vLyBEbyBub3QgcGxhY2UgYW55IGNvZGUgYWZ0ZXIgdGhlIGFwcGxpY2F0aW9uIGhhcyBiZWVuIHN0YXJ0ZWQgYXMgaXQgd2lsbCBub3Rcbi8vIGJlIGV4ZWN1dGVkIG9uIGlPUy5cbiIsIi8qIENTUzJKU09OICovXG5cbmNvbnN0IF9fX0NTUzJKU09OX0xPQURFUl9FWFBPUlRfX18gPSB7XCJ0eXBlXCI6XCJzdHlsZXNoZWV0XCIsXCJzdHlsZXNoZWV0XCI6e1wicnVsZXNcIjpbe1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiKlwiLFwiOjpiZWZvcmVcIixcIjo6YWZ0ZXJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJvcmRlci1zcGFjaW5nLXhcIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1ib3JkZXItc3BhY2luZy15XCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctdHJhbnNsYXRlLXhcIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy10cmFuc2xhdGUteVwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXJvdGF0ZVwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXNrZXcteFwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXNrZXcteVwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXNjYWxlLXhcIixcInZhbHVlXCI6XCIxXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1zY2FsZS15XCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctcGFuLXhcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXBhbi15XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1waW5jaC16b29tXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1zY3JvbGwtc25hcC1zdHJpY3RuZXNzXCIsXCJ2YWx1ZVwiOlwicHJveGltaXR5XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1ncmFkaWVudC1mcm9tLXBvc2l0aW9uXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1ncmFkaWVudC12aWEtcG9zaXRpb25cIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWdyYWRpZW50LXRvLXBvc2l0aW9uXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1ibHVyXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1icmlnaHRuZXNzXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1jb250cmFzdFwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctZ3JheXNjYWxlXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1odWUtcm90YXRlXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1pbnZlcnRcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXNhdHVyYXRlXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1zZXBpYVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctZHJvcC1zaGFkb3dcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJhY2tkcm9wLWJsdXJcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJhY2tkcm9wLWJyaWdodG5lc3NcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJhY2tkcm9wLWNvbnRyYXN0XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iYWNrZHJvcC1ncmF5c2NhbGVcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJhY2tkcm9wLWh1ZS1yb3RhdGVcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJhY2tkcm9wLWludmVydFwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3Atb3BhY2l0eVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3Atc2F0dXJhdGVcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJhY2tkcm9wLXNlcGlhXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1jb250YWluLXNpemVcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWNvbnRhaW4tbGF5b3V0XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1jb250YWluLXBhaW50XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1jb250YWluLXN0eWxlXCIsXCJ2YWx1ZVwiOlwiXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiOjpiYWNrZHJvcFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYm9yZGVyLXNwYWNpbmcteFwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJvcmRlci1zcGFjaW5nLXlcIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy10cmFuc2xhdGUteFwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXRyYW5zbGF0ZS15XCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctcm90YXRlXCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctc2tldy14XCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctc2tldy15XCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctc2NhbGUteFwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXNjYWxlLXlcIixcInZhbHVlXCI6XCIxXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1wYW4teFwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctcGFuLXlcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXBpbmNoLXpvb21cIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXNjcm9sbC1zbmFwLXN0cmljdG5lc3NcIixcInZhbHVlXCI6XCJwcm94aW1pdHlcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWdyYWRpZW50LWZyb20tcG9zaXRpb25cIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWdyYWRpZW50LXZpYS1wb3NpdGlvblwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctZ3JhZGllbnQtdG8tcG9zaXRpb25cIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJsdXJcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJyaWdodG5lc3NcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWNvbnRyYXN0XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1ncmF5c2NhbGVcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWh1ZS1yb3RhdGVcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWludmVydFwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctc2F0dXJhdGVcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXNlcGlhXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1kcm9wLXNoYWRvd1wiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3AtYmx1clwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3AtYnJpZ2h0bmVzc1wiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3AtY29udHJhc3RcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJhY2tkcm9wLWdyYXlzY2FsZVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3AtaHVlLXJvdGF0ZVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3AtaW52ZXJ0XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iYWNrZHJvcC1vcGFjaXR5XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iYWNrZHJvcC1zYXR1cmF0ZVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3Atc2VwaWFcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWNvbnRhaW4tc2l6ZVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctY29udGFpbi1sYXlvdXRcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWNvbnRhaW4tcGFpbnRcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWNvbnRhaW4tc3R5bGVcIixcInZhbHVlXCI6XCJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuY29udGFpbmVyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwid2lkdGhcIixcInZhbHVlXCI6XCIxMDAlXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm14LTJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tbGVmdFwiLFwidmFsdWVcIjpcIjhcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tcmlnaHRcIixcInZhbHVlXCI6XCI4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm1iLTJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tYm90dG9tXCIsXCJ2YWx1ZVwiOlwiOFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tYi00XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWJvdHRvbVwiLFwidmFsdWVcIjpcIjE2XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm1yLTJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tcmlnaHRcIixcInZhbHVlXCI6XCI4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm10LTJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tdG9wXCIsXCJ2YWx1ZVwiOlwiOFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tdC00XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXRvcFwiLFwidmFsdWVcIjpcIjE2XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmgtZnVsbFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImhlaWdodFwiLFwidmFsdWVcIjpcIjEwMCVcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuZmxleC1ncm93XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZmxleC1ncm93XCIsXCJ2YWx1ZVwiOlwiMVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5yb3VuZGVkLWxnXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLXJhZGl1c1wiLFwidmFsdWVcIjpcIjhcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYm9yZGVyLWJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItYm90dG9tLXdpZHRoXCIsXCJ2YWx1ZVwiOlwiMXB4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJvcmRlci1iLTJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItYm90dG9tLXdpZHRoXCIsXCJ2YWx1ZVwiOlwiMnB4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJvcmRlci10XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLXRvcC13aWR0aFwiLFwidmFsdWVcIjpcIjFweFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ib3JkZXItZ3JheS0yMDBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJvcmRlci1vcGFjaXR5XCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1jb2xvclwiLFwidmFsdWVcIjpcInJnYigyMjkgMjMxIDIzNSAvIHZhcigtLXR3LWJvcmRlci1vcGFjaXR5LCAxKSlcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYm9yZGVyLWdyYXktMzAwXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1ib3JkZXItb3BhY2l0eVwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItY29sb3JcIixcInZhbHVlXCI6XCJyZ2IoMjA5IDIxMyAyMTkgLyB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSwgMSkpXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJvcmRlci1wdXJwbGUtNjAwXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1ib3JkZXItb3BhY2l0eVwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItY29sb3JcIixcInZhbHVlXCI6XCJyZ2IoMTQ3IDUxIDIzNCAvIHZhcigtLXR3LWJvcmRlci1vcGFjaXR5LCAxKSlcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYmctcHVycGxlLTYwMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmctb3BhY2l0eVwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwicmdiKDE0NyA1MSAyMzQgLyB2YXIoLS10dy1iZy1vcGFjaXR5LCAxKSlcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYmctd2hpdGVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJnLW9wYWNpdHlcIixcInZhbHVlXCI6XCIxXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcInJnYigyNTUgMjU1IDI1NSAvIHZhcigtLXR3LWJnLW9wYWNpdHksIDEpKVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLTJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nXCIsXCJ2YWx1ZVwiOlwiOFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5wLTRcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nXCIsXCJ2YWx1ZVwiOlwiMTZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucHgtNFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmctbGVmdFwiLFwidmFsdWVcIjpcIjE2XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZy1yaWdodFwiLFwidmFsdWVcIjpcIjE2XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnB5LTJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLXRvcFwiLFwidmFsdWVcIjpcIjhcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nLWJvdHRvbVwiLFwidmFsdWVcIjpcIjhcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIudGV4dC1jZW50ZXJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJ0ZXh0LWFsaWduXCIsXCJ2YWx1ZVwiOlwiY2VudGVyXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnRleHQtMnhsXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMjRcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJsaW5lLWhlaWdodFwiLFwidmFsdWVcIjpcIjMyXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnRleHQtbGdcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIxOFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImxpbmUtaGVpZ2h0XCIsXCJ2YWx1ZVwiOlwiMjhcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIudGV4dC1zbVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjE0XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibGluZS1oZWlnaHRcIixcInZhbHVlXCI6XCIyMFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi50ZXh0LXhsXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJsaW5lLWhlaWdodFwiLFwidmFsdWVcIjpcIjI4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnRleHQteHNcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIxMlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImxpbmUtaGVpZ2h0XCIsXCJ2YWx1ZVwiOlwiMTZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuZm9udC1ib2xkXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC13ZWlnaHRcIixcInZhbHVlXCI6XCI3MDBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIudGV4dC1ncmF5LTUwMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctdGV4dC1vcGFjaXR5XCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwicmdiKDEwNyAxMTQgMTI4IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5LCAxKSlcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIudGV4dC1ncmF5LTYwMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctdGV4dC1vcGFjaXR5XCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwicmdiKDc1IDg1IDk5IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5LCAxKSlcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIudGV4dC1wdXJwbGUtNjAwXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy10ZXh0LW9wYWNpdHlcIixcInZhbHVlXCI6XCIxXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiY29sb3JcIixcInZhbHVlXCI6XCJyZ2IoMTQ3IDUxIDIzNCAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSwgMSkpXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnRleHQtcmVkLTYwMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctdGV4dC1vcGFjaXR5XCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwicmdiKDIyMCAzOCAzOCAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSwgMSkpXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnRleHQtd2hpdGVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXRleHQtb3BhY2l0eVwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcInJnYigyNTUgMjU1IDI1NSAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSwgMSkpXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnNoYWRvdy1zbVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJveC1zaGFkb3dcIixcInZhbHVlXCI6XCJ2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXJpbmctc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1zaGFkb3cpXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnRleHQtcHVycGxlLTYwMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiIzdjM2FlZFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5iZy1wdXJwbGUtNjAwXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcIiM3YzNhZWRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYm9yZGVyLXB1cnBsZS02MDBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItY29sb3JcIixcInZhbHVlXCI6XCIjN2MzYWVkXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnRleHQtZ3JheS02MDBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcIiM0YjU1NjNcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYmctd2hpdGVcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiI2ZmZmZmZlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5zaGFkb3ctc21cIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3gtc2hhZG93XCIsXCJ2YWx1ZVwiOlwiMCAxcHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjA1KVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ib3JkZXItZ3JheS0yMDBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItY29sb3JcIixcInZhbHVlXCI6XCIjZTVlN2ViXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiYnV0dG9uXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMTZcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJwYWRkaW5nXCIsXCJ2YWx1ZVwiOlwiOFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcInRleHRGaWVsZFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmdcIixcInZhbHVlXCI6XCI4XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMTZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCJsYWJlbFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjE0XCJ9XX1dLFwicGFyc2luZ0Vycm9yc1wiOltdfX1cbmV4cG9ydCBkZWZhdWx0IF9fX0NTUzJKU09OX0xPQURFUl9FWFBPUlRfX19cbmNvbnN0IHsgYWRkVGFnZ2VkQWRkaXRpb25hbENTUyB9ID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpO1xuYWRkVGFnZ2VkQWRkaXRpb25hbENTUyhfX19DU1MySlNPTl9MT0FERVJfRVhQT1JUX19fLCBcIlA6XFxcXE15IFByb2plY3RzXFxcXEZvcm0gRWRpdG9yLVJlYWN0IG5hdGl2ZSBhcHAtd2l0aCBNb25nb0RCLXRhc2stRmluYWwtQXBwXFxcXEZvcm0tRWRpdG9yLUFwcC1Nb2JpbGVcXFxcc3JjXFxcXGFwcC5jc3NcIilcbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoKVxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuXHRcdGNvbnN0IHsgcmVtb3ZlVGFnZ2VkQWRkaXRpb25hbENTUyB9ID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9zdHlsaW5nL3N0eWxlLXNjb3BlXCIpO1xuXHRcdHJlbW92ZVRhZ2dlZEFkZGl0aW9uYWxDU1MoXCJQOlxcXFxNeSBQcm9qZWN0c1xcXFxGb3JtIEVkaXRvci1SZWFjdCBuYXRpdmUgYXBwLXdpdGggTW9uZ29EQi10YXNrLUZpbmFsLUFwcFxcXFxGb3JtLUVkaXRvci1BcHAtTW9iaWxlXFxcXHNyY1xcXFxhcHAuY3NzXCIpXG5cdH0pXG59IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBRdWVzdGlvblR5cGUgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5pbnRlcmZhY2UgQm90dG9tVG9vbGJhclByb3BzIHtcbiAgb25BZGRRdWVzdGlvbjogKHR5cGU6IFF1ZXN0aW9uVHlwZSkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEJvdHRvbVRvb2xiYXIoeyBvbkFkZFF1ZXN0aW9uIH06IEJvdHRvbVRvb2xiYXJQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxncmlkTGF5b3V0IHJvd3M9XCJhdXRvXCIgY29sdW1ucz1cIiosKiwqLCosKlwiIGNsYXNzTmFtZT1cInAtNCBiZy13aGl0ZSBib3JkZXItdCBib3JkZXItZ3JheS0yMDBcIj5cbiAgICAgIDxzdGFja0xheW91dCBjb2w9XCIwXCIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIiBvblRhcD17KCkgPT4gb25BZGRRdWVzdGlvbigndGV4dCcpfT5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtMnhsIHRleHQtcHVycGxlLTYwMFwiPis8L2xhYmVsPlxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNjAwXCI+QWRkPC9sYWJlbD5cbiAgICAgIDwvc3RhY2tMYXlvdXQ+XG4gICAgICA8c3RhY2tMYXlvdXQgY29sPVwiMVwiIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCIgb25UYXA9eygpID0+IG9uQWRkUXVlc3Rpb24oJ3RleHQnKX0+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCB0ZXh0LXB1cnBsZS02MDBcIj5BYTwvbGFiZWw+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS02MDBcIj5UZXh0PC9sYWJlbD5cbiAgICAgIDwvc3RhY2tMYXlvdXQ+XG4gICAgICA8c3RhY2tMYXlvdXQgY29sPVwiMlwiIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCIgb25UYXA9eygpID0+IG9uQWRkUXVlc3Rpb24oJ2dyaWQnKX0+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCB0ZXh0LXB1cnBsZS02MDBcIj7ilqE8L2xhYmVsPlxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNjAwXCI+R3JpZDwvbGFiZWw+XG4gICAgICA8L3N0YWNrTGF5b3V0PlxuICAgICAgPHN0YWNrTGF5b3V0IGNvbD1cIjNcIiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiIG9uVGFwPXsoKSA9PiBvbkFkZFF1ZXN0aW9uKCdjaGVja2JveCcpfT5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtMnhsIHRleHQtcHVycGxlLTYwMFwiPuKYkDwvbGFiZWw+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheS02MDBcIj5DaGVjazwvbGFiZWw+XG4gICAgICA8L3N0YWNrTGF5b3V0PlxuICAgICAgPHN0YWNrTGF5b3V0IGNvbD1cIjRcIiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC0yeGwgdGV4dC1wdXJwbGUtNjAwXCI+4oCUPC9sYWJlbD5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTYwMFwiPkxpbmU8L2xhYmVsPlxuICAgICAgPC9zdGFja0xheW91dD5cbiAgICA8L2dyaWRMYXlvdXQ+XG4gICk7XG59IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBEaWFsb2dzIH0gZnJvbSBcIkBuYXRpdmVzY3JpcHQvY29yZVwiO1xuaW1wb3J0IHsgUXVlc3Rpb24sIFF1ZXN0aW9uVHlwZSwgRm9ybVN0YXRlIH0gZnJvbSBcIi4vdHlwZXNcIjtcbmltcG9ydCB7IFF1ZXN0aW9uc1BhZ2UgfSBmcm9tIFwiLi9wYWdlcy9RdWVzdGlvbnNQYWdlXCI7XG5pbXBvcnQgeyBSZXNwb25zZXNQYWdlIH0gZnJvbSBcIi4vcGFnZXMvUmVzcG9uc2VzUGFnZVwiO1xuaW1wb3J0IHsgU2V0dGluZ3NQYWdlIH0gZnJvbSBcIi4vcGFnZXMvU2V0dGluZ3NQYWdlXCI7XG5pbXBvcnQgeyBCb3R0b21Ub29sYmFyIH0gZnJvbSBcIi4vQm90dG9tVG9vbGJhclwiO1xuXG5leHBvcnQgZnVuY3Rpb24gRm9ybUVkaXRvcigpIHtcbiAgY29uc3QgW2Zvcm1TdGF0ZSwgc2V0Rm9ybVN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlPEZvcm1TdGF0ZT4oe1xuICAgIHRpdGxlOiBcIkN1c3RvbWVyIFNhdGlzZmFjdGlvbiBTdXJ2ZXlcIixcbiAgICBkZXNjcmlwdGlvbjogXCJObyBEZXNjcmlwdGlvblwiLFxuICAgIHF1ZXN0aW9uczogW10sXG4gICAgYWN0aXZlVGFiOiAncXVlc3Rpb25zJ1xuICB9KTtcblxuICBjb25zdCBhZGRRdWVzdGlvbiA9ICh0eXBlOiBRdWVzdGlvblR5cGUpID0+IHtcbiAgICBjb25zdCBuZXdRdWVzdGlvbjogUXVlc3Rpb24gPSB7XG4gICAgICBpZDogRGF0ZS5ub3coKS50b1N0cmluZygpLFxuICAgICAgdHlwZSxcbiAgICAgIHRpdGxlOiBcIlwiLFxuICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgICAgb3B0aW9uczogdHlwZSA9PT0gJ2NoZWNrYm94JyA/IFtcIk9wdGlvbiAxXCJdIDogdW5kZWZpbmVkLFxuICAgICAgcm93czogdHlwZSA9PT0gJ2dyaWQnID8gW1wiUm93IDFcIl0gOiB1bmRlZmluZWQsXG4gICAgICBjb2x1bW5zOiB0eXBlID09PSAnZ3JpZCcgPyBbXCJDb2x1bW4gMVwiXSA6IHVuZGVmaW5lZFxuICAgIH07XG5cbiAgICBzZXRGb3JtU3RhdGUocHJldiA9PiAoe1xuICAgICAgLi4ucHJldixcbiAgICAgIHF1ZXN0aW9uczogWy4uLnByZXYucXVlc3Rpb25zLCBuZXdRdWVzdGlvbl1cbiAgICB9KSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU2VuZCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBEaWFsb2dzLmNvbmZpcm0oe1xuICAgICAgdGl0bGU6IFwiU2VuZCBGb3JtXCIsXG4gICAgICBtZXNzYWdlOiBcIkFyZSB5b3UgcmVhZHkgdG8gc2VuZCB0aGlzIGZvcm0/XCIsXG4gICAgICBva0J1dHRvblRleHQ6IFwiWWVzXCIsXG4gICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIk5vXCJcbiAgICB9KTtcblxuICAgIGlmIChyZXN1bHQpIHtcbiAgICAgIC8vIEdlbmVyYXRlIGEgdW5pcXVlIGZvcm0gVVJMXG4gICAgICBjb25zdCBmb3JtVXJsID0gYGh0dHBzOi8vZXhhbXBsZS5jb20vZm9ybXMvJHtEYXRlLm5vdygpfWA7XG4gICAgICBhd2FpdCBEaWFsb2dzLmFsZXJ0KHtcbiAgICAgICAgdGl0bGU6IFwiRm9ybSBSZWFkeVwiLFxuICAgICAgICBtZXNzYWdlOiBgWW91ciBmb3JtIGlzIHJlYWR5IHRvIHNoYXJlIVxcblxcblVSTDogJHtmb3JtVXJsfWAsXG4gICAgICAgIG9rQnV0dG9uVGV4dDogXCJDb3B5IFVSTFwiXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyQ29udGVudCA9ICgpID0+IHtcbiAgICBzd2l0Y2ggKGZvcm1TdGF0ZS5hY3RpdmVUYWIpIHtcbiAgICAgIGNhc2UgJ3F1ZXN0aW9ucyc6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFF1ZXN0aW9uc1BhZ2VcbiAgICAgICAgICAgIHRpdGxlPXtmb3JtU3RhdGUudGl0bGV9XG4gICAgICAgICAgICBkZXNjcmlwdGlvbj17Zm9ybVN0YXRlLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgcXVlc3Rpb25zPXtmb3JtU3RhdGUucXVlc3Rpb25zfVxuICAgICAgICAgICAgb25VcGRhdGVUaXRsZT17KHRpdGxlKSA9PiBzZXRGb3JtU3RhdGUocHJldiA9PiAoeyAuLi5wcmV2LCB0aXRsZSB9KSl9XG4gICAgICAgICAgICBvblVwZGF0ZURlc2NyaXB0aW9uPXsoZGVzY3JpcHRpb24pID0+IHNldEZvcm1TdGF0ZShwcmV2ID0+ICh7IC4uLnByZXYsIGRlc2NyaXB0aW9uIH0pKX1cbiAgICAgICAgICAgIG9uVXBkYXRlUXVlc3Rpb249eyhxdWVzdGlvbklkLCB1cGRhdGVkUXVlc3Rpb24pID0+IHtcbiAgICAgICAgICAgICAgc2V0Rm9ybVN0YXRlKHByZXYgPT4gKHtcbiAgICAgICAgICAgICAgICAuLi5wcmV2LFxuICAgICAgICAgICAgICAgIHF1ZXN0aW9uczogcHJldi5xdWVzdGlvbnMubWFwKHEgPT4gcS5pZCA9PT0gcXVlc3Rpb25JZCA/IHVwZGF0ZWRRdWVzdGlvbiA6IHEpXG4gICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgIGNhc2UgJ3Jlc3BvbnNlcyc6XG4gICAgICAgIHJldHVybiA8UmVzcG9uc2VzUGFnZSAvPjtcbiAgICAgIGNhc2UgJ3NldHRpbmdzJzpcbiAgICAgICAgcmV0dXJuIDxTZXR0aW5nc1BhZ2UgLz47XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPHN0YWNrTGF5b3V0IGNsYXNzTmFtZT1cImJnLXdoaXRlIGgtZnVsbFwiPlxuICAgICAgey8qIEhlYWRlciAqL31cbiAgICAgIDxncmlkTGF5b3V0IHJvd3M9XCJhdXRvXCIgY29sdW1ucz1cImF1dG8sICosIGF1dG9cIiBjbGFzc05hbWU9XCJwLTQgYm9yZGVyLWIgYm9yZGVyLWdyYXktMjAwXCI+XG4gICAgICAgIDxidXR0b24gY29sPVwiMFwiIGNsYXNzTmFtZT1cInRleHQtcHVycGxlLTYwMCB0ZXh0LWxnXCIgb25UYXA9eygpID0+IERpYWxvZ3MuY29uZmlybShcIkV4aXQgZm9ybSBlZGl0b3I/XCIpfT5cbiAgICAgICAgICDinJVcbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxzdGFja0xheW91dCBjb2w9XCIxXCIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm14LTJcIiBvblRhcD17KCkgPT4gY29uc29sZS5sb2coJ1RoZW1lIGNsaWNrZWQnKX0+VGhlbWU8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm14LTJcIiBvblRhcD17KCkgPT4gY29uc29sZS5sb2coJ1ByZXZpZXcgY2xpY2tlZCcpfT5QcmV2aWV3PC9idXR0b24+XG4gICAgICAgIDwvc3RhY2tMYXlvdXQ+XG4gICAgICAgIDxidXR0b24gY29sPVwiMlwiIGNsYXNzTmFtZT1cImJnLXB1cnBsZS02MDAgdGV4dC13aGl0ZSBweC00IHB5LTIgcm91bmRlZC1sZ1wiIG9uVGFwPXtoYW5kbGVTZW5kfT5cbiAgICAgICAgICBTZW5kXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9ncmlkTGF5b3V0PlxuXG4gICAgICB7LyogVGFicyAqL31cbiAgICAgIDxncmlkTGF5b3V0IHJvd3M9XCJhdXRvXCIgY29sdW1ucz1cIiosICosICpcIiBjbGFzc05hbWU9XCJib3JkZXItYiBib3JkZXItZ3JheS0yMDBcIj5cbiAgICAgICAge1sncXVlc3Rpb25zJywgJ3Jlc3BvbnNlcycsICdzZXR0aW5ncyddLm1hcCgodGFiLCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgY29sPXtpbmRleH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHAtNCB0ZXh0LWNlbnRlciAke2Zvcm1TdGF0ZS5hY3RpdmVUYWIgPT09IHRhYiA/ICd0ZXh0LXB1cnBsZS02MDAgYm9yZGVyLWItMiBib3JkZXItcHVycGxlLTYwMCcgOiAndGV4dC1ncmF5LTYwMCd9YH1cbiAgICAgICAgICAgIHRleHQ9e3RhYi5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHRhYi5zbGljZSgxKX1cbiAgICAgICAgICAgIG9uVGFwPXsoKSA9PiBzZXRGb3JtU3RhdGUocHJldiA9PiAoeyAuLi5wcmV2LCBhY3RpdmVUYWI6IHRhYiBhcyAncXVlc3Rpb25zJyB8ICdyZXNwb25zZXMnIHwgJ3NldHRpbmdzJyB9KSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2dyaWRMYXlvdXQ+XG5cbiAgICAgIHsvKiBDb250ZW50ICovfVxuICAgICAge3JlbmRlckNvbnRlbnQoKX1cblxuICAgICAgey8qIEJvdHRvbSBUb29sYmFyICovfVxuICAgICAge2Zvcm1TdGF0ZS5hY3RpdmVUYWIgPT09ICdxdWVzdGlvbnMnICYmIChcbiAgICAgICAgPEJvdHRvbVRvb2xiYXIgb25BZGRRdWVzdGlvbj17YWRkUXVlc3Rpb259IC8+XG4gICAgICApfVxuICAgIDwvc3RhY2tMYXlvdXQ+XG4gICk7XG59IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBRdWVzdGlvbiB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5pbnRlcmZhY2UgQ2hlY2tib3hRdWVzdGlvblByb3BzIHtcbiAgcXVlc3Rpb246IFF1ZXN0aW9uO1xuICBvblVwZGF0ZTogKHVwZGF0ZWRRdWVzdGlvbjogUXVlc3Rpb24pID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDaGVja2JveFF1ZXN0aW9uKHsgcXVlc3Rpb24sIG9uVXBkYXRlIH06IENoZWNrYm94UXVlc3Rpb25Qcm9wcykge1xuICBjb25zdCBhZGRPcHRpb24gPSAoKSA9PiB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IFsuLi4ocXVlc3Rpb24ub3B0aW9ucyB8fCBbXSksIGBPcHRpb24gJHsocXVlc3Rpb24ub3B0aW9ucz8ubGVuZ3RoIHx8IDApICsgMX1gXTtcbiAgICBvblVwZGF0ZSh7IC4uLnF1ZXN0aW9uLCBvcHRpb25zIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPHN0YWNrTGF5b3V0IGNsYXNzTmFtZT1cInAtNFwiPlxuICAgICAgPHRleHRGaWVsZFxuICAgICAgICB0ZXh0PXtxdWVzdGlvbi50aXRsZX1cbiAgICAgICAgaGludD1cIlF1ZXN0aW9uIHRpdGxlXCJcbiAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1sZyBtYi0yXCJcbiAgICAgICAgb25UZXh0Q2hhbmdlPXsoYXJncykgPT4ge1xuICAgICAgICAgIG9uVXBkYXRlKHtcbiAgICAgICAgICAgIC4uLnF1ZXN0aW9uLFxuICAgICAgICAgICAgdGl0bGU6IGFyZ3Mub2JqZWN0LnRleHRcbiAgICAgICAgICB9KTtcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgICBcbiAgICAgIDxzdGFja0xheW91dCBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgICAgIHtxdWVzdGlvbi5vcHRpb25zPy5tYXAoKG9wdGlvbiwgaW5kZXgpID0+IChcbiAgICAgICAgICA8Z3JpZExheW91dCByb3dzPVwiYXV0b1wiIGNvbHVtbnM9XCJhdXRvLCAqXCIgY2xhc3NOYW1lPVwibWItMlwiPlxuICAgICAgICAgICAgPGNoZWNrYm94IGNvbD1cIjBcIiBjbGFzc05hbWU9XCJtci0yXCIgLz5cbiAgICAgICAgICAgIDx0ZXh0RmllbGRcbiAgICAgICAgICAgICAgY29sPVwiMVwiXG4gICAgICAgICAgICAgIHRleHQ9e29wdGlvbn1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyLWIgYm9yZGVyLWdyYXktMzAwXCJcbiAgICAgICAgICAgICAgb25UZXh0Q2hhbmdlPXsoYXJncykgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld09wdGlvbnMgPSBbLi4uKHF1ZXN0aW9uLm9wdGlvbnMgfHwgW10pXTtcbiAgICAgICAgICAgICAgICBuZXdPcHRpb25zW2luZGV4XSA9IGFyZ3Mub2JqZWN0LnRleHQ7XG4gICAgICAgICAgICAgICAgb25VcGRhdGUoeyAuLi5xdWVzdGlvbiwgb3B0aW9uczogbmV3T3B0aW9ucyB9KTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9ncmlkTGF5b3V0PlxuICAgICAgICApKX1cbiAgICAgIDwvc3RhY2tMYXlvdXQ+XG5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidGV4dC1wdXJwbGUtNjAwXCIgb25UYXA9e2FkZE9wdGlvbn0+KyBBZGQgT3B0aW9uPC9idXR0b24+XG4gICAgPC9zdGFja0xheW91dD5cbiAgKTtcbn0iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFF1ZXN0aW9uIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmludGVyZmFjZSBHcmlkUXVlc3Rpb25Qcm9wcyB7XG4gIHF1ZXN0aW9uOiBRdWVzdGlvbjtcbiAgb25VcGRhdGU6ICh1cGRhdGVkUXVlc3Rpb246IFF1ZXN0aW9uKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gR3JpZFF1ZXN0aW9uKHsgcXVlc3Rpb24sIG9uVXBkYXRlIH06IEdyaWRRdWVzdGlvblByb3BzKSB7XG4gIGNvbnN0IGFkZFJvdyA9ICgpID0+IHtcbiAgICBjb25zdCByb3dzID0gWy4uLihxdWVzdGlvbi5yb3dzIHx8IFtdKSwgYFJvdyAkeyhxdWVzdGlvbi5yb3dzPy5sZW5ndGggfHwgMCkgKyAxfWBdO1xuICAgIG9uVXBkYXRlKHsgLi4ucXVlc3Rpb24sIHJvd3MgfSk7XG4gIH07XG5cbiAgY29uc3QgYWRkQ29sdW1uID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbHVtbnMgPSBbLi4uKHF1ZXN0aW9uLmNvbHVtbnMgfHwgW10pLCBgQ29sdW1uICR7KHF1ZXN0aW9uLmNvbHVtbnM/Lmxlbmd0aCB8fCAwKSArIDF9YF07XG4gICAgb25VcGRhdGUoeyAuLi5xdWVzdGlvbiwgY29sdW1ucyB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxzdGFja0xheW91dCBjbGFzc05hbWU9XCJwLTRcIj5cbiAgICAgIDx0ZXh0RmllbGRcbiAgICAgICAgdGV4dD17cXVlc3Rpb24udGl0bGV9XG4gICAgICAgIGhpbnQ9XCJRdWVzdGlvbiB0aXRsZVwiXG4gICAgICAgIGNsYXNzTmFtZT1cInRleHQtbGcgbWItMlwiXG4gICAgICAgIG9uVGV4dENoYW5nZT17KGFyZ3MpID0+IHtcbiAgICAgICAgICBvblVwZGF0ZSh7XG4gICAgICAgICAgICAuLi5xdWVzdGlvbixcbiAgICAgICAgICAgIHRpdGxlOiBhcmdzLm9iamVjdC50ZXh0XG4gICAgICAgICAgfSk7XG4gICAgICAgIH19XG4gICAgICAvPlxuICAgICAgXG4gICAgICA8c2Nyb2xsVmlldyBvcmllbnRhdGlvbj1cImhvcml6b250YWxcIiBjbGFzc05hbWU9XCJtYi00XCI+XG4gICAgICAgIDxncmlkTGF5b3V0IHJvd3M9XCJhdXRvXCIgY29sdW1ucz17cXVlc3Rpb24uY29sdW1ucz8ubWFwKCgpID0+IFwiYXV0b1wiKS5qb2luKFwiLCBcIil9PlxuICAgICAgICAgIHtxdWVzdGlvbi5jb2x1bW5zPy5tYXAoKGNvbCwgY29sSW5kZXgpID0+IChcbiAgICAgICAgICAgIDx0ZXh0RmllbGRcbiAgICAgICAgICAgICAgY29sPXtjb2xJbmRleH1cbiAgICAgICAgICAgICAgdGV4dD17Y29sfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTIgYm9yZGVyLWIgYm9yZGVyLWdyYXktMzAwXCJcbiAgICAgICAgICAgICAgb25UZXh0Q2hhbmdlPXsoYXJncykgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld0NvbHVtbnMgPSBbLi4uKHF1ZXN0aW9uLmNvbHVtbnMgfHwgW10pXTtcbiAgICAgICAgICAgICAgICBuZXdDb2x1bW5zW2NvbEluZGV4XSA9IGFyZ3Mub2JqZWN0LnRleHQ7XG4gICAgICAgICAgICAgICAgb25VcGRhdGUoeyAuLi5xdWVzdGlvbiwgY29sdW1uczogbmV3Q29sdW1ucyB9KTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZ3JpZExheW91dD5cbiAgICAgIDwvc2Nyb2xsVmlldz5cblxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ0ZXh0LXB1cnBsZS02MDBcIiBvblRhcD17YWRkQ29sdW1ufT4rIEFkZCBDb2x1bW48L2J1dHRvbj5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidGV4dC1wdXJwbGUtNjAwIG10LTJcIiBvblRhcD17YWRkUm93fT4rIEFkZCBSb3c8L2J1dHRvbj5cbiAgICA8L3N0YWNrTGF5b3V0PlxuICApO1xufSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUXVlc3Rpb24gfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuaW50ZXJmYWNlIFRleHRRdWVzdGlvblByb3BzIHtcbiAgcXVlc3Rpb246IFF1ZXN0aW9uO1xuICBvblVwZGF0ZTogKHVwZGF0ZWRRdWVzdGlvbjogUXVlc3Rpb24pID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBUZXh0UXVlc3Rpb24oeyBxdWVzdGlvbiwgb25VcGRhdGUgfTogVGV4dFF1ZXN0aW9uUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3RhY2tMYXlvdXQgY2xhc3NOYW1lPVwicC00XCI+XG4gICAgICA8dGV4dEZpZWxkXG4gICAgICAgIHRleHQ9e3F1ZXN0aW9uLnRpdGxlfVxuICAgICAgICBoaW50PVwiUXVlc3Rpb24gdGl0bGVcIlxuICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWxnIG1iLTJcIlxuICAgICAgICBvblRleHRDaGFuZ2U9eyhhcmdzKSA9PiB7XG4gICAgICAgICAgb25VcGRhdGUoe1xuICAgICAgICAgICAgLi4ucXVlc3Rpb24sXG4gICAgICAgICAgICB0aXRsZTogYXJncy5vYmplY3QudGV4dFxuICAgICAgICAgIH0pO1xuICAgICAgICB9fVxuICAgICAgLz5cbiAgICAgIDx0ZXh0RmllbGRcbiAgICAgICAgaGludD1cIlR5cGUgeW91ciBhbnN3ZXJcIlxuICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwIGJvcmRlci1iIGJvcmRlci1ncmF5LTMwMCBwLTJcIlxuICAgICAgICBlZGl0YWJsZT17ZmFsc2V9XG4gICAgICAvPlxuICAgICAgPHN3aXRjaFxuICAgICAgICBjaGVja2VkPXtxdWVzdGlvbi5yZXF1aXJlZH1cbiAgICAgICAgY2xhc3NOYW1lPVwibXQtMlwiXG4gICAgICAgIG9uQ2hlY2tlZENoYW5nZT17KGFyZ3MpID0+IHtcbiAgICAgICAgICBvblVwZGF0ZSh7XG4gICAgICAgICAgICAuLi5xdWVzdGlvbixcbiAgICAgICAgICAgIHJlcXVpcmVkOiBhcmdzLm9iamVjdC5jaGVja2VkXG4gICAgICAgICAgfSk7XG4gICAgICAgIH19XG4gICAgICAvPlxuICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTYwMFwiPlJlcXVpcmVkPC9sYWJlbD5cbiAgICA8L3N0YWNrTGF5b3V0PlxuICApO1xufSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUXVlc3Rpb24sIFF1ZXN0aW9uVHlwZSB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgVGV4dFF1ZXN0aW9uIH0gZnJvbSBcIi4uL1F1ZXN0aW9uVHlwZXMvVGV4dFF1ZXN0aW9uXCI7XG5pbXBvcnQgeyBHcmlkUXVlc3Rpb24gfSBmcm9tIFwiLi4vUXVlc3Rpb25UeXBlcy9HcmlkUXVlc3Rpb25cIjtcbmltcG9ydCB7IENoZWNrYm94UXVlc3Rpb24gfSBmcm9tIFwiLi4vUXVlc3Rpb25UeXBlcy9DaGVja2JveFF1ZXN0aW9uXCI7XG5cbmludGVyZmFjZSBRdWVzdGlvbnNQYWdlUHJvcHMge1xuICB0aXRsZTogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBxdWVzdGlvbnM6IFF1ZXN0aW9uW107XG4gIG9uVXBkYXRlVGl0bGU6ICh0aXRsZTogc3RyaW5nKSA9PiB2b2lkO1xuICBvblVwZGF0ZURlc2NyaXB0aW9uOiAoZGVzY3JpcHRpb246IHN0cmluZykgPT4gdm9pZDtcbiAgb25VcGRhdGVRdWVzdGlvbjogKHF1ZXN0aW9uSWQ6IHN0cmluZywgcXVlc3Rpb246IFF1ZXN0aW9uKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gUXVlc3Rpb25zUGFnZSh7XG4gIHRpdGxlLFxuICBkZXNjcmlwdGlvbixcbiAgcXVlc3Rpb25zLFxuICBvblVwZGF0ZVRpdGxlLFxuICBvblVwZGF0ZURlc2NyaXB0aW9uLFxuICBvblVwZGF0ZVF1ZXN0aW9uLFxufTogUXVlc3Rpb25zUGFnZVByb3BzKSB7XG4gIGNvbnN0IHJlbmRlclF1ZXN0aW9uID0gKHF1ZXN0aW9uOiBRdWVzdGlvbikgPT4ge1xuICAgIHN3aXRjaCAocXVlc3Rpb24udHlwZSkge1xuICAgICAgY2FzZSAndGV4dCc6XG4gICAgICAgIHJldHVybiA8VGV4dFF1ZXN0aW9uIHF1ZXN0aW9uPXtxdWVzdGlvbn0gb25VcGRhdGU9eyhxKSA9PiBvblVwZGF0ZVF1ZXN0aW9uKHF1ZXN0aW9uLmlkLCBxKX0gLz47XG4gICAgICBjYXNlICdncmlkJzpcbiAgICAgICAgcmV0dXJuIDxHcmlkUXVlc3Rpb24gcXVlc3Rpb249e3F1ZXN0aW9ufSBvblVwZGF0ZT17KHEpID0+IG9uVXBkYXRlUXVlc3Rpb24ocXVlc3Rpb24uaWQsIHEpfSAvPjtcbiAgICAgIGNhc2UgJ2NoZWNrYm94JzpcbiAgICAgICAgcmV0dXJuIDxDaGVja2JveFF1ZXN0aW9uIHF1ZXN0aW9uPXtxdWVzdGlvbn0gb25VcGRhdGU9eyhxKSA9PiBvblVwZGF0ZVF1ZXN0aW9uKHF1ZXN0aW9uLmlkLCBxKX0gLz47XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPHNjcm9sbFZpZXcgY2xhc3NOYW1lPVwiZmxleC1ncm93XCI+XG4gICAgICA8c3RhY2tMYXlvdXQgY2xhc3NOYW1lPVwicC00XCI+XG4gICAgICAgIDxzdGFja0xheW91dCBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLWxnIHAtNCBtYi00IHNoYWRvdy1zbVwiPlxuICAgICAgICAgIDx0ZXh0RmllbGRcbiAgICAgICAgICAgIHRleHQ9e3RpdGxlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkXCJcbiAgICAgICAgICAgIG9uVGV4dENoYW5nZT17KGFyZ3MpID0+IG9uVXBkYXRlVGl0bGUoYXJncy5vYmplY3QudGV4dCl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8dGV4dEZpZWxkXG4gICAgICAgICAgICB0ZXh0PXtkZXNjcmlwdGlvbn1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDBcIlxuICAgICAgICAgICAgb25UZXh0Q2hhbmdlPXsoYXJncykgPT4gb25VcGRhdGVEZXNjcmlwdGlvbihhcmdzLm9iamVjdC50ZXh0KX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L3N0YWNrTGF5b3V0PlxuXG4gICAgICAgIHtxdWVzdGlvbnMubWFwKHF1ZXN0aW9uID0+IChcbiAgICAgICAgICA8c3RhY2tMYXlvdXQga2V5PXtxdWVzdGlvbi5pZH0gY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC1sZyBtYi00IHNoYWRvdy1zbVwiPlxuICAgICAgICAgICAge3JlbmRlclF1ZXN0aW9uKHF1ZXN0aW9uKX1cbiAgICAgICAgICA8L3N0YWNrTGF5b3V0PlxuICAgICAgICApKX1cbiAgICAgIDwvc3RhY2tMYXlvdXQ+XG4gICAgPC9zY3JvbGxWaWV3PlxuICApO1xufSIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gUmVzcG9uc2VzUGFnZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8c2Nyb2xsVmlldyBjbGFzc05hbWU9XCJmbGV4LWdyb3dcIj5cbiAgICAgIDxzdGFja0xheW91dCBjbGFzc05hbWU9XCJwLTRcIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIG1iLTRcIj5Gb3JtIFJlc3BvbnNlczwvbGFiZWw+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwXCI+Tm8gcmVzcG9uc2VzIHlldDwvbGFiZWw+XG4gICAgICAgIFxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLXB1cnBsZS02MDAgdGV4dC13aGl0ZSBwLTQgcm91bmRlZC1sZyBtdC00XCI+XG4gICAgICAgICAgRXhwb3J0IFJlc3BvbnNlcyB0byBDU1ZcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L3N0YWNrTGF5b3V0PlxuICAgIDwvc2Nyb2xsVmlldz5cbiAgKTtcbn0iLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIFNldHRpbmdzUGFnZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8c2Nyb2xsVmlldyBjbGFzc05hbWU9XCJmbGV4LWdyb3dcIj5cbiAgICAgIDxzdGFja0xheW91dCBjbGFzc05hbWU9XCJwLTRcIj5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIG1iLTRcIj5Gb3JtIFNldHRpbmdzPC9sYWJlbD5cbiAgICAgICAgXG4gICAgICAgIDxzdGFja0xheW91dCBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLWxnIHAtNCBtYi00IHNoYWRvdy1zbVwiPlxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb250LWJvbGQgbWItMlwiPkZvcm0gVmlzaWJpbGl0eTwvbGFiZWw+XG4gICAgICAgICAgPHN3aXRjaCBjbGFzc05hbWU9XCJtYi00XCIgY2hlY2tlZD17dHJ1ZX0gLz5cbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMFwiPkFsbG93IHB1YmxpYyByZXNwb25zZXM8L2xhYmVsPlxuICAgICAgICA8L3N0YWNrTGF5b3V0PlxuXG4gICAgICAgIDxzdGFja0xheW91dCBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLWxnIHAtNCBtYi00IHNoYWRvdy1zbVwiPlxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb250LWJvbGQgbWItMlwiPlJlc3BvbnNlIFNldHRpbmdzPC9sYWJlbD5cbiAgICAgICAgICA8c3dpdGNoIGNsYXNzTmFtZT1cIm1iLTRcIiBjaGVja2VkPXt0cnVlfSAvPlxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwXCI+Q29sbGVjdCBlbWFpbCBhZGRyZXNzZXM8L2xhYmVsPlxuICAgICAgICA8L3N0YWNrTGF5b3V0PlxuXG4gICAgICAgIDxzdGFja0xheW91dCBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLWxnIHAtNCBtYi00IHNoYWRvdy1zbVwiPlxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb250LWJvbGQgbWItMlwiPkZvcm0gQ29udHJvbHM8L2xhYmVsPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwidGV4dC1yZWQtNjAwIG10LTJcIj5EZWxldGUgRm9ybTwvYnV0dG9uPlxuICAgICAgICA8L3N0YWNrTGF5b3V0PlxuICAgICAgPC9zdGFja0xheW91dD5cbiAgICA8L3Njcm9sbFZpZXc+XG4gICk7XG59IiwiaW1wb3J0IHsgQmFzZU5hdmlnYXRpb25Db250YWluZXIgfSBmcm9tICdAcmVhY3QtbmF2aWdhdGlvbi9jb3JlJztcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgc3RhY2tOYXZpZ2F0b3JGYWN0b3J5IH0gZnJvbSBcInJlYWN0LW5hdGl2ZXNjcmlwdC1uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgeyBGb3JtRWRpdG9yIH0gZnJvbSBcIi4vRm9ybUJ1aWxkZXIvRm9ybUVkaXRvclwiO1xuXG5jb25zdCBTdGFja05hdmlnYXRvciA9IHN0YWNrTmF2aWdhdG9yRmFjdG9yeSgpO1xuXG5leHBvcnQgY29uc3QgTWFpblN0YWNrID0gKCkgPT4gKFxuICAgIDxCYXNlTmF2aWdhdGlvbkNvbnRhaW5lcj5cbiAgICAgICAgPFN0YWNrTmF2aWdhdG9yLk5hdmlnYXRvclxuICAgICAgICAgICAgaW5pdGlhbFJvdXRlTmFtZT1cIkZvcm1FZGl0b3JcIlxuICAgICAgICAgICAgc2NyZWVuT3B0aW9ucz17e1xuICAgICAgICAgICAgICAgIGhlYWRlclNob3duOiBmYWxzZVxuICAgICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgICAgPFN0YWNrTmF2aWdhdG9yLlNjcmVlblxuICAgICAgICAgICAgICAgIG5hbWU9XCJGb3JtRWRpdG9yXCJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9e0Zvcm1FZGl0b3J9XG4gICAgICAgICAgICAvPlxuICAgICAgICA8L1N0YWNrTmF2aWdhdG9yLk5hdmlnYXRvcj5cbiAgICA8L0Jhc2VOYXZpZ2F0aW9uQ29udGFpbmVyPlxuKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ+L3BhY2thZ2UuanNvblwiKTsiXSwibmFtZXMiOlsiUmVhY3QiLCJSZWFjdE5hdGl2ZVNjcmlwdCIsIk1haW5TdGFjayIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJCb3R0b21Ub29sYmFyIiwib25BZGRRdWVzdGlvbiIsImNyZWF0ZUVsZW1lbnQiLCJyb3dzIiwiY29sdW1ucyIsImNsYXNzTmFtZSIsImNvbCIsIm9uVGFwIiwiX2MiLCIkUmVmcmVzaFJlZyQiLCJEaWFsb2dzIiwiUXVlc3Rpb25zUGFnZSIsIlJlc3BvbnNlc1BhZ2UiLCJTZXR0aW5nc1BhZ2UiLCJGb3JtRWRpdG9yIiwiX3MiLCJmb3JtU3RhdGUiLCJzZXRGb3JtU3RhdGUiLCJ1c2VTdGF0ZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJxdWVzdGlvbnMiLCJhY3RpdmVUYWIiLCJhZGRRdWVzdGlvbiIsInR5cGUiLCJuZXdRdWVzdGlvbiIsImlkIiwiRGF0ZSIsIm5vdyIsInRvU3RyaW5nIiwicmVxdWlyZWQiLCJvcHRpb25zIiwidW5kZWZpbmVkIiwicHJldiIsImhhbmRsZVNlbmQiLCJyZXN1bHQiLCJjb25maXJtIiwibWVzc2FnZSIsIm9rQnV0dG9uVGV4dCIsImNhbmNlbEJ1dHRvblRleHQiLCJmb3JtVXJsIiwiYWxlcnQiLCJyZW5kZXJDb250ZW50Iiwib25VcGRhdGVUaXRsZSIsIm9uVXBkYXRlRGVzY3JpcHRpb24iLCJvblVwZGF0ZVF1ZXN0aW9uIiwicXVlc3Rpb25JZCIsInVwZGF0ZWRRdWVzdGlvbiIsIm1hcCIsInEiLCJjb25zb2xlIiwibG9nIiwidGFiIiwiaW5kZXgiLCJ0ZXh0IiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsIkNoZWNrYm94UXVlc3Rpb24iLCJxdWVzdGlvbiIsIm9uVXBkYXRlIiwiYWRkT3B0aW9uIiwibGVuZ3RoIiwiaGludCIsIm9uVGV4dENoYW5nZSIsImFyZ3MiLCJvYmplY3QiLCJvcHRpb24iLCJuZXdPcHRpb25zIiwiR3JpZFF1ZXN0aW9uIiwiYWRkUm93IiwiYWRkQ29sdW1uIiwib3JpZW50YXRpb24iLCJqb2luIiwiY29sSW5kZXgiLCJuZXdDb2x1bW5zIiwiVGV4dFF1ZXN0aW9uIiwiZWRpdGFibGUiLCJjaGVja2VkIiwib25DaGVja2VkQ2hhbmdlIiwicmVuZGVyUXVlc3Rpb24iLCJrZXkiLCJCYXNlTmF2aWdhdGlvbkNvbnRhaW5lciIsInN0YWNrTmF2aWdhdG9yRmFjdG9yeSIsIlN0YWNrTmF2aWdhdG9yIiwiTmF2aWdhdG9yIiwiaW5pdGlhbFJvdXRlTmFtZSIsInNjcmVlbk9wdGlvbnMiLCJoZWFkZXJTaG93biIsIlNjcmVlbiIsIm5hbWUiLCJjb21wb25lbnQiXSwic291cmNlUm9vdCI6IiJ9