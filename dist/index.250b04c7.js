// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"7BONy":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "6315ebf922a29661e8263da0250b04c7";
// @flow
/*global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE*/
/*::
import type {
HMRAsset,
HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
(string): mixed;
cache: {|[string]: ParcelModule|};
hotData: mixed;
Module: any;
parent: ?ParcelRequire;
isParcelRequire: true;
modules: {|[string]: [Function, {|[string]: string|}]|};
HMR_BUNDLE_ID: string;
root: ParcelRequire;
}
interface ParcelModule {
hot: {|
data: mixed,
accept(cb: (Function) => void): void,
dispose(cb: (mixed) => void): void,
// accept(deps: Array<string> | string, cb: (Function) => void): void,
// decline(): void,
_acceptCallbacks: Array<(Function) => void>,
_disposeCallbacks: Array<(mixed) => void>,
|};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || (function () {}));
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
  return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
  return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = getHostname();
  var port = getPort();
  var protocol = HMR_SECURE || location.protocol == 'https:' && !(/localhost|127.0.0.1|0.0.0.0/).test(hostname) ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
  // $FlowFixMe
  ws.onmessage = function (event) {
    checkedAssets = {
      /*: {|[string]: boolean|}*/
    };
    acceptedAssets = {
      /*: {|[string]: boolean|}*/
    };
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      // Remove error overlay if there is one
      removeErrorOverlay();
      let assets = data.assets.filter(asset => asset.envHash === HMR_ENV_HASH);
      // Handle HMR Update
      var handled = false;
      assets.forEach(asset => {
        var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        if (didAccept) {
          handled = true;
        }
      });
      if (handled) {
        console.clear();
        assets.forEach(function (asset) {
          hmrApply(module.bundle.root, asset);
        });
        for (var i = 0; i < assetsToAccept.length; i++) {
          var id = assetsToAccept[i][1];
          if (!acceptedAssets[id]) {
            hmrAcceptRun(assetsToAccept[i][0], id);
          }
        }
      } else {
        window.location.reload();
      }
    }
    if (data.type === 'error') {
      // Log parcel errors to console
      for (let ansiDiagnostic of data.diagnostics.ansi) {
        let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
        console.error('???? [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
      }
      // Render the fancy html overlay
      removeErrorOverlay();
      var overlay = createErrorOverlay(data.diagnostics.html);
      // $FlowFixMe
      document.body.appendChild(overlay);
    }
  };
  ws.onerror = function (e) {
    console.error(e.message);
  };
  ws.onclose = function (e) {
    if (undefined !== 'test') {
      console.warn('[parcel] ???? Connection to the HMR server was lost');
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
    console.log('[parcel] ??? Error resolved');
  }
}
function createErrorOverlay(diagnostics) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;
  let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
  for (let diagnostic of diagnostics) {
    let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
    errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          ???? ${diagnostic.message}
        </div>
        <pre>
          ${stack}
        </pre>
        <div>
          ${diagnostic.hints.map(hint => '<div>' + hint + '</div>').join('')}
        </div>
      </div>
    `;
  }
  errorHTML += '</div>';
  overlay.innerHTML = errorHTML;
  return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]>*/
{
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push([bundle, k]);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    if (link.parentNode !== null) {
      // $FlowFixMe
      link.parentNode.removeChild(link);
    }
  };
  newLink.setAttribute('href', // $FlowFixMe
  link.getAttribute('href').split('?')[0] + '?' + Date.now());
  // $FlowFixMe
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      // $FlowFixMe[incompatible-type]
      var href = links[i].getAttribute('href');
      var hostname = getHostname();
      var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
      var absolute = (/^https?:\/\//i).test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
      if (!absolute) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (asset.type === 'css') {
    reloadCSS();
    return;
  }
  let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
  if (deps) {
    var fn = new Function('require', 'module', 'exports', asset.output);
    modules[asset.id] = [fn, deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
    // If we reached the root bundle without finding where the asset should go,
    // there's nothing to do. Mark as "accepted" so we don't reload the page.
    if (!bundle.parent) {
      return true;
    }
    return hmrAcceptCheck(bundle.parent, id, depsByBundle);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(module.bundle.root, id).some(function (v) {
    return hmrAcceptCheck(v[0], v[1], null);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached && cached.hot) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      var assetsToAlsoAccept = cb(function () {
        return getParents(module.bundle.root, id);
      });
      if (assetsToAlsoAccept && assetsToAccept.length) {
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
      }
    });
  }
  acceptedAssets[id] = true;
}

},{}],"3miIZ":[function(require,module,exports) {
var _viewsDisplayProcessViewDProcessView = require("./views/displayProcessView/dProcessView");
var _viewsFcfsView = require("./views/fcfsView");
var _modelsFcfsAlgo = require("./models/fcfsAlgo");
const displayProcessController = function (arrivalTime, priority, burstTime) {
  _viewsDisplayProcessViewDProcessView.displayProcesses(arrivalTime, priority, burstTime);
};
const fcfsSchedulingController = function (processId, arrivalTimes, burstTimes) {
  _modelsFcfsAlgo.FCFS(processId, arrivalTimes, burstTimes, _viewsFcfsView.displayFinalProcess);
};
const init = function () {
  _viewsDisplayProcessViewDProcessView.displayProcessesHandler(displayProcessController);
  _viewsFcfsView.fcfsHandler(fcfsSchedulingController);
};
init();

},{"./views/displayProcessView/dProcessView":"fWIKj","./views/fcfsView":"7AX4n","./models/fcfsAlgo":"6q9nR"}],"fWIKj":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "displayProcesses", function () {
  return displayProcesses;
});
_parcelHelpers.export(exports, "displayProcessesHandler", function () {
  return displayProcessesHandler;
});
var _configGlobalVar = require("../../config/globalVar");
const processInfoRows = document.querySelector(".process__info-initial-box");
const btnForm = document.querySelector(".form__btn");
const errorElement = document.getElementById("error");
const exclamationMark = document.querySelector(".exclamation__img");
const inputArrival = document.querySelector(".form__input--arrival");
const inputPriority = document.querySelector(".form__input--priority");
const inputBurst = document.querySelector(".form__input--burst");
const inputQuantum = document.querySelector(".form__input--quantum");
const displayProcesses = function (arrival, priority, burst) {
  const html = `
          <div class="row process__row">
              <div class="col-md-3 process__desc">Process ${_configGlobalVar.globalVar.i}</div>
              <div class="col-md-3 process__time">${arrival}</div>
              <div class="col-md-3 process__time">${priority}</div>
              <div class="col-md-3 process__time">${burst}</div>
          </div>
      `;
  processInfoRows.insertAdjacentHTML("beforeend", html);
  _configGlobalVar.globalVar.i += 1;
};
const displayProcessesHandler = function (publisher) {
  btnForm.addEventListener("click", function (event) {
    let errorMsgs = [];
    errorElement.innerText = "";
    exclamationMark.classList.add("hidden");
    const arrivalTime = Number(inputArrival.value);
    const priority = Number(inputPriority.value);
    const burstTime = Number(inputBurst.value);
    const quantum = Number(inputQuantum.value);
    const pushError = inputArrival.value === "" || inputBurst.value === "" || inputQuantum.value === "";
    if (pushError) {
      errorMsgs.push("Please fill all the inputs");
      errorElement.innerText = errorMsgs[0];
      exclamationMark.classList.remove("hidden");
    } else {
      console.log("in else part");
      _configGlobalVar.globalVar.arrivalTimes.push(arrivalTime);
      _configGlobalVar.globalVar.priorities.push(priority);
      _configGlobalVar.globalVar.burstTimes.push(burstTime);
      _configGlobalVar.globalVar.processId.push(_configGlobalVar.globalVar.pid);
      _configGlobalVar.globalVar.pid += 1;
      publisher(arrivalTime, priority, burstTime);
      inputArrival.value = inputBurst.value = inputPriority.value = "";
    }
    event.preventDefault();
  });
};

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y","../../config/globalVar":"468k9"}],"5gA8y":[function(require,module,exports) {
"use strict";

exports.interopDefault = function (a) {
  return a && a.__esModule ? a : {
    default: a
  };
};

exports.defineInteropFlag = function (a) {
  Object.defineProperty(a, '__esModule', {
    value: true
  });
};

exports.exportAll = function (source, dest) {
  Object.keys(source).forEach(function (key) {
    if (key === 'default' || key === '__esModule') {
      return;
    } // Skip duplicate re-exports when they have the same value.


    if (key in dest && dest[key] === source[key]) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function () {
        return source[key];
      }
    });
  });
  return dest;
};

exports.export = function (dest, destName, get) {
  Object.defineProperty(dest, destName, {
    enumerable: true,
    get: get
  });
};
},{}],"468k9":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "globalVar", function () {
  return globalVar;
});
let globalVar = {
  i: 1,
  pid: 1,
  // For displayFinalProcess Function
  quantum: 0,
  processes: [],
  processId: [],
  priorities: [],
  burstTimes: [],
  arrivalTimes: [],
  avgTurnaroundTimes: [],
  fcfsUITrigger: 0,
  sjfPrUITrigger: 0,
  sjfNPrUITrigger: 0,
  roundRobinUITrigger: 0,
  priorityPrUITrigger: 0,
  priorityNPrUITrigger: 0,
  sorted: false,
  // for sorting purpose in btnSort eventListener
  btnRRClick: 0,
  btnAlgoClick: 0,
  btnSummaryClick: 0,
  btnfcfsClick: 0,
  btnSjfPremClick: 0,
  btnSjfNonPrClick: 0,
  btnpriorityPrempClick: 0,
  btnpriorityNonPrempClick: 0,
  fcfsTtPushed: 0,
  sjfPrTtPushed: 0,
  sjfNPrTtPushed: 0,
  rrTtPushed: 0,
  priorityPrTtPushed: 0,
  priorityNPrTtPushed: 0
};

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"7AX4n":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "displayFinalProcess", function () {
  return displayFinalProcess;
});
_parcelHelpers.export(exports, "fcfsHandler", function () {
  return fcfsHandler;
});
var _configGlobalVar = require("../config/globalVar");
var _tabUtils = require("./tabUtils");
const fcfsScheduling = document.querySelector(".nav__menu-item__FCFS");
const processFCFSRows = document.querySelector(".process__info-fcfs-box");
_tabUtils.tabfunctionality();
const displayFinalProcess = function (pid, arrival, burst, completion, waiting, turnaround) {
  console.log("in displayFinalProcess");
  const html = `
    <div class="row process__row">
                <div class="col-md-3 process__desc">Process ${pid}</div>
                <div class="col-md-9">
                    <div class="row">
                        <div class="col-md-3 process__time">${arrival}</div>
                        <div class="col-md-3 process__time">${burst}</div>
                        <div class="col-md-3 process__time">${waiting}</div>
                        <div class="col-md-3 process__time">${turnaround}</div>
                    </div>
                </div>
            </div>
    `;
  processFCFSRows.insertAdjacentHTML("beforeend", html);
};
const fcfsHandler = function (publisher) {
  fcfsScheduling.addEventListener("click", function () {
    _configGlobalVar.globalVar.btnfcfsClick++;
    let shouldCallAlgo = _configGlobalVar.globalVar.btnfcfsClick === 1 && _configGlobalVar.globalVar.btnAlgoClick === 0 && _configGlobalVar.globalVar.btnSummaryClick === 0;
    if (shouldCallAlgo) publisher(_configGlobalVar.globalVar.processId, _configGlobalVar.globalVar.arrivalTimes, _configGlobalVar.globalVar.burstTimes);
  });
};

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y","../config/globalVar":"468k9","./tabUtils":"2RHhe"}],"2RHhe":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "tabfunctionality", function () {
  return tabfunctionality;
});
const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content]");
const tabfunctionality = function () {
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const target = document.querySelector(tab.dataset.tabTarget);
      tabContents.forEach(tabContent => {
        tabContent.classList.remove("active-state");
      });
      tabs.forEach(tab => {
        tab.classList.remove("active-state");
      });
      tab.classList.add("active-state");
      target.classList.add("active-state");
    });
  });
};

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"6q9nR":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "FCFS", function () {
  return FCFS;
});
var _configGlobalVar = require("../config/globalVar");
const FCFS = function (processID, arrivalTime, burstTime, publisherView) {
  let objCollection = [], AT = [], BT = [], Pid = [], completion, turnaround, waiting, att = [], awt = [], avgTt, avgWt, updateUI;
  // Making an object to be sorted later.
  for (var x = 0; x < arrivalTime.length; x++) objCollection.push({
    PID: processID[x],
    A: arrivalTime[x],
    B: burstTime[x]
  });
  let objString = JSON.stringify(objCollection);
  console.log(`ObjColl before sort: ${objString}`);
  // Sorting begins with its corresponding Arrival Time and Burst Time
  // No interchanging of partner happens
  objCollection.sort(function (a, b) {
    return a.A - b.A;
  });
  objString = JSON.stringify(objCollection);
  console.log(`ObjColl after sort: ${objString}`);
  for (var x = 0; x < objCollection.length; x++) {
    // pushing to array AT and BT for later purposes.
    AT.push(objCollection[x].A);
    BT.push(objCollection[x].B);
    Pid.push(objCollection[x].PID);
    if (x === 0) {
      waiting = 0;
    } else {
      if (AT[x - 1] + BT[x - 1] + awt[x - 1] < AT[x]) waiting = 0; else waiting = AT[x - 1] + BT[x - 1] + awt[x - 1] - AT[x];
    }
    turnaround = BT[x] + waiting;
    // Display FCFS results in the UI
    _configGlobalVar.globalVar.fcfsUITrigger++;
    updateUI = _configGlobalVar.globalVar.fcfsUITrigger <= objCollection.length;
    if (updateUI) {
      console.log("before publisherView");
      publisherView(Pid[x], AT[x], BT[x], completion, waiting, turnaround);
    }
    // pushing to array att and awt for later purposes.
    att.push(turnaround);
    awt.push(waiting);
  }
  let totalTurnaround = 0;
  att.forEach(function (time) {
    totalTurnaround += time;
  });
  avgTt = totalTurnaround / objCollection.length;
  // avgWt = averageWT(awt, objCollection.length);
  _configGlobalVar.globalVar.fcfsTtPushed++;
  if (_configGlobalVar.globalVar.fcfsTtPushed === 1) _configGlobalVar.globalVar.avgTurnaroundTimes.push({
    Process: "FCFS",
    Avgtt: avgTt
  });
};

},{"../config/globalVar":"468k9","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}]},["7BONy","3miIZ"], "3miIZ", "parcelRequire575a")

//# sourceMappingURL=index.250b04c7.js.map
