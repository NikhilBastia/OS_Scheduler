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
})({"2aKhF":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "c69fbbebad126498fca5896448460618";
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

},{}],"3K3IO":[function(require,module,exports) {
var _viewsDisplayProcessViewDProcessView = require("../views/displayProcessView/dProcessView");
var _viewsUtilsViewInstModal = require("../views/utilsView/instModal");
var _viewsFcfsViewFcfsView = require("../views/fcfsView/fcfsView");
var _viewsSjfViewSjfPreView = require("../views/sjfView/sjfPreView");
var _viewsSjfViewSjfNPreView = require("../views/sjfView/sjfNPreView");
var _viewsRoundRobinViewRrView = require("../views/roundRobinView/rrView");
var _viewsPriorityViewPrePriorityView = require("../views/priorityView/prePriorityView");
var _viewsPriorityViewNonPrePriorityView = require("../views/priorityView/nonPrePriorityView");
var _viewsSummaryViewSummaryView = require("../views/summaryView/summaryView");
var _modelsFcfsAlgo = require("../models/fcfsAlgo");
var _modelsSjfPreAlgo = require("../models/sjfPreAlgo");
var _modelsSjfNPreAlgo = require("../models/sjfNPreAlgo");
var _modelsRrAlgo = require("../models/rrAlgo");
var _modelsPrePriorityAlgo = require("../models/prePriorityAlgo");
var _modelsNonPrePriorityAlgo = require("../models/nonPrePriorityAlgo");
const displayProcessController = function (arrivalTime, priority, burstTime) {
  _viewsDisplayProcessViewDProcessView.displayProcesses(arrivalTime, priority, burstTime);
};
const fcfsSchedulingController = function (processId, arrivalTimes, burstTimes) {
  _modelsFcfsAlgo.FCFS(processId, arrivalTimes, burstTimes, _viewsFcfsViewFcfsView.displayFinalProcess);
};
const sjfPreSchedulingController = function (processId, burstTimes, arrivalTimes) {
  _modelsSjfPreAlgo.SjfPreemptive(processId, burstTimes, arrivalTimes, _viewsSjfViewSjfPreView.displaySjfPrProcess);
};
const sjfNonPreController = function (processId, burstTimes, arrivalTimes) {
  _modelsSjfNPreAlgo.SjfNonPreemptive(processId, burstTimes, arrivalTimes, _viewsSjfViewSjfNPreView.displaySjfNprprocess);
};
const roundRobinController = function (processId, burstTimes, quantum, arrivalTimes) {
  _modelsRrAlgo.roundRobin(processId, burstTimes, quantum, arrivalTimes, _viewsRoundRobinViewRrView.displayRRProcess);
};
const prePriorityController = function (processId, burstTimes, priorities, arrivalTimes) {
  _modelsPrePriorityAlgo.priorityPremptive(processId, burstTimes, priorities, arrivalTimes, _viewsPriorityViewPrePriorityView.displayPriorityPremptive);
};
const nonPrePriorityController = function (processId, burstTimes, priorities, arrivalTimes) {
  _modelsNonPrePriorityAlgo.priorityNonPreemptive(processId, burstTimes, priorities, arrivalTimes, _viewsPriorityViewNonPrePriorityView.displayNonPriorityPremptive);
};
const summaryController = function (processId, arrivalTimes, burstTimes, priorities, quantum) {
  _modelsFcfsAlgo.FCFS(processId, arrivalTimes, burstTimes, _viewsFcfsViewFcfsView.displayFinalProcess);
  _modelsPrePriorityAlgo.priorityPremptive(processId, burstTimes, priorities, arrivalTimes, _viewsPriorityViewPrePriorityView.displayPriorityPremptive);
  _modelsNonPrePriorityAlgo.priorityNonPreemptive(processId, burstTimes, priorities, arrivalTimes, _viewsPriorityViewNonPrePriorityView.displayNonPriorityPremptive);
  _modelsSjfPreAlgo.SjfPreemptive(processId, burstTimes, arrivalTimes, _viewsSjfViewSjfPreView.displaySjfPrProcess);
  _modelsSjfNPreAlgo.SjfNonPreemptive(processId, burstTimes, arrivalTimes, _viewsSjfViewSjfNPreView.displaySjfNprprocess);
  _modelsRrAlgo.roundRobin(processId, burstTimes, quantum, arrivalTimes, _viewsRoundRobinViewRrView.displayRRProcess);
};
const init = function () {
  _viewsDisplayProcessViewDProcessView.displayProcessesHandler(displayProcessController);
  _viewsUtilsViewInstModal.modalHandler();
  _viewsFcfsViewFcfsView.arrowHandler(fcfsSchedulingController);
  _viewsFcfsViewFcfsView.fcfsHandler(fcfsSchedulingController);
  _viewsSjfViewSjfPreView.sjfPreHandler(sjfPreSchedulingController);
  _viewsSjfViewSjfNPreView.sjfNonPreHandler(sjfNonPreController);
  _viewsRoundRobinViewRrView.roundRobinHandler(roundRobinController);
  _viewsPriorityViewPrePriorityView.prePriorityHandler(prePriorityController);
  _viewsPriorityViewNonPrePriorityView.nonPrePriorityHandler(nonPrePriorityController);
  _viewsSummaryViewSummaryView.summaryHandler(summaryController);
};
init();

},{"../views/displayProcessView/dProcessView":"fWIKj","../models/fcfsAlgo":"6q9nR","../views/fcfsView/fcfsView":"7pm9g","../models/sjfPreAlgo":"4FliK","../views/sjfView/sjfPreView":"7mTOt","../views/sjfView/sjfNPreView":"557yL","../models/sjfNPreAlgo":"77CQL","../models/rrAlgo":"2mloc","../views/roundRobinView/rrView":"7BmXL","../views/priorityView/prePriorityView":"5MMle","../models/prePriorityAlgo":"3o5Kr","../views/priorityView/nonPrePriorityView":"78wRd","../models/nonPrePriorityAlgo":"23QfT","../views/utilsView/instModal":"6EXbU","../views/summaryView/summaryView":"2kJdV"}],"fWIKj":[function(require,module,exports) {
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
    _configGlobalVar.globalVar.quantum = Number(inputQuantum.value);
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

},{"../../config/globalVar":"468k9","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"468k9":[function(require,module,exports) {
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

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"5gA8y":[function(require,module,exports) {
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
},{}],"6q9nR":[function(require,module,exports) {
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

},{"../config/globalVar":"468k9","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"7pm9g":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "displayFinalProcess", function () {
  return displayFinalProcess;
});
_parcelHelpers.export(exports, "arrowHandler", function () {
  return arrowHandler;
});
_parcelHelpers.export(exports, "fcfsHandler", function () {
  return fcfsHandler;
});
var _configGlobalVar = require("../../config/globalVar");
var _utilsViewTabUtils = require("../utilsView/tabUtils");
const fcfsScheduling = document.querySelector(".nav__menu-item__FCFS");
const processFCFSRows = document.querySelector(".process__info-fcfs-box");
const btnAlgo = document.querySelector(".process__btn");
_utilsViewTabUtils.tabfunctionality();
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
const arrowHandler = function (publisher) {
  btnAlgo.addEventListener("click", function () {
    _configGlobalVar.globalVar.btnAlgoClick++;
    let shouldCallAlgo = _configGlobalVar.globalVar.btnAlgoClick === 1 && _configGlobalVar.globalVar.btnfcfsClick === 0 && _configGlobalVar.globalVar.btnSummaryClick === 0;
    if (shouldCallAlgo) publisher(_configGlobalVar.globalVar.processId, _configGlobalVar.globalVar.arrivalTimes, _configGlobalVar.globalVar.burstTimes);
  });
};
const fcfsHandler = function (publisher) {
  fcfsScheduling.addEventListener("click", function () {
    _configGlobalVar.globalVar.btnfcfsClick++;
    let shouldCallAlgo = _configGlobalVar.globalVar.btnfcfsClick === 1 && _configGlobalVar.globalVar.btnAlgoClick === 0 && _configGlobalVar.globalVar.btnSummaryClick === 0;
    if (shouldCallAlgo) publisher(_configGlobalVar.globalVar.processId, _configGlobalVar.globalVar.arrivalTimes, _configGlobalVar.globalVar.burstTimes);
  });
};

},{"../../config/globalVar":"468k9","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y","../utilsView/tabUtils":"3t50s"}],"3t50s":[function(require,module,exports) {
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

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"4FliK":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "SjfPreemptive", function () {
  return SjfPreemptive;
});
var _configGlobalVar = require("../config/globalVar");
const SjfPreemptive = function (pid, burst_time, arrival_time, publisherView) {
  var start_time = [], completion_time = [], turnaround_time = [], waiting_time = [];
  var avg_turnaround_time;
  var avg_waiting_time;
  var total_turnaround_time = 0;
  var total_waiting_time = 0;
  var burst_remaining = [];
  var is_completed = [];
  var n = arrival_time.length;
  var updateUI;
  for (var i = 0; i < n; i++) {
    is_completed[i] = 0;
    burst_remaining[i] = burst_time[i];
  }
  var current_time = 0;
  var completed = 0;
  var prev = 0;
  while (completed != n) {
    var idx = -1;
    var mn = 10000000;
    for (var i = 0; i < n; i++) {
      if (arrival_time[i] <= current_time && is_completed[i] == 0) {
        if (burst_remaining[i] < mn) {
          mn = burst_remaining[i];
          idx = i;
        }
        if (burst_remaining[i] == mn) {
          if (arrival_time[i] < arrival_time[idx]) {
            mn = burst_remaining[i];
            idx = i;
          }
        }
      }
    }
    if (idx != -1) {
      if (burst_remaining[idx] == burst_time[idx]) {
        start_time[idx] = current_time;
      }
      burst_remaining[idx] -= 1;
      current_time++;
      prev = current_time;
      if (burst_remaining[idx] == 0) {
        completion_time[idx] = current_time;
        turnaround_time[idx] = completion_time[idx] - arrival_time[idx];
        waiting_time[idx] = turnaround_time[idx] - burst_time[idx];
        total_turnaround_time += turnaround_time[idx];
        total_waiting_time += waiting_time[idx];
        // display UI for SJF(PR) Sched.
        _configGlobalVar.globalVar.sjfPrUITrigger++;
        updateUI = _configGlobalVar.globalVar.sjfPrUITrigger <= n;
        if (updateUI) publisherView(pid[idx], arrival_time[idx], burst_time[idx], waiting_time[idx], turnaround_time[idx]);
        is_completed[idx] = 1;
        completed++;
      }
    } else {
      current_time++;
    }
  }
  var min_arrival_time = 10000000;
  var max_completion_time = -1;
  for (var i = 0; i < n; i++) {
    min_arrival_time = Math.min(min_arrival_time, arrival_time[i]);
    max_completion_time = Math.max(max_completion_time, completion_time[i]);
  }
  avg_turnaround_time = parseFloat(total_turnaround_time) / parseFloat(n);
  avg_waiting_time = parseFloat(total_waiting_time) / parseFloat(n);
  for (var i = 0; i < n; i++) {
    console.log(pid[i], arrival_time[i], burst_time[i], completion_time[i], turnaround_time[i], waiting_time[i]);
  }
  _configGlobalVar.globalVar.sjfPrTtPushed++;
  if (_configGlobalVar.globalVar.sjfPrTtPushed === 1) _configGlobalVar.globalVar.avgTurnaroundTimes.push({
    Process: "SJF (Preemptive)",
    Avgtt: avg_turnaround_time
  });
};

},{"../config/globalVar":"468k9","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"7mTOt":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "displaySjfPrProcess", function () {
  return displaySjfPrProcess;
});
_parcelHelpers.export(exports, "sjfPreHandler", function () {
  return sjfPreHandler;
});
var _configGlobalVar = require("../../config/globalVar");
var _utilsViewTabUtils = require("../utilsView/tabUtils");
const processSJFPrRows = document.querySelector(".process__info-sjfpr-box");
const sjfScheduling = document.querySelector(".nav__menu-item__Sjf-pr");
_utilsViewTabUtils.tabfunctionality();
const displaySjfPrProcess = function (pid, arrival, burst, waiting, turnaround) {
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
  processSJFPrRows.insertAdjacentHTML("beforeend", html);
};
const sjfPreHandler = function (publisher) {
  sjfScheduling.addEventListener("click", function () {
    _configGlobalVar.globalVar.btnSjfPremClick++;
    let shouldCallAlgo = _configGlobalVar.globalVar.btnSjfPremClick === 1 && _configGlobalVar.globalVar.btnSummaryClick === 0;
    if (shouldCallAlgo) publisher(_configGlobalVar.globalVar.processId, _configGlobalVar.globalVar.burstTimes, _configGlobalVar.globalVar.arrivalTimes);
  });
};

},{"../../config/globalVar":"468k9","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y","../utilsView/tabUtils":"3t50s"}],"557yL":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "displaySjfNprprocess", function () {
  return displaySjfNprprocess;
});
_parcelHelpers.export(exports, "sjfNonPreHandler", function () {
  return sjfNonPreHandler;
});
var _configGlobalVar = require("../../config/globalVar");
var _utilsViewTabUtils = require("../utilsView/tabUtils");
const processSJFNPrRows = document.querySelector(".process__info-sjfnpr-box");
const sjfNScheduling = document.querySelector(".nav__menu-item__sjf-npr");
_utilsViewTabUtils.tabfunctionality();
const displaySjfNprprocess = function (pid, arrival, burst, waiting, turnaround) {
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
  processSJFNPrRows.insertAdjacentHTML("beforeend", html);
};
const sjfNonPreHandler = function (publisher) {
  sjfNScheduling.addEventListener("click", function () {
    _configGlobalVar.globalVar.btnSjfNonPrClick++;
    let shouldCallAlgo = _configGlobalVar.globalVar.btnSjfNonPrClick === 1 && _configGlobalVar.globalVar.btnSummaryClick === 0;
    if (shouldCallAlgo) publisher(_configGlobalVar.globalVar.processId, _configGlobalVar.globalVar.burstTimes, _configGlobalVar.globalVar.arrivalTimes);
  });
};

},{"../../config/globalVar":"468k9","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y","../utilsView/tabUtils":"3t50s"}],"77CQL":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "SjfNonPreemptive", function () {
  return SjfNonPreemptive;
});
var _configGlobalVar = require("../config/globalVar");
const SjfNonPreemptive = function (pid, burst_time, arrival_time, publisherView) {
  var start_time = [], completion_time = [], turnaround_time = [], waiting_time = [];
  var avg_turnaround_time;
  var avg_waiting_time;
  var total_turnaround_time = 0;
  var total_waiting_time = 0;
  var is_completed = [];
  var n = arrival_time.length;
  var updateUI;
  for (var i = 0; i < n; i++) {
    is_completed[i] = 0;
  }
  var current_time = 0;
  var completed = 0;
  var prev = 0;
  while (completed != n) {
    var idx = -1;
    var mn = 10000000;
    for (var i = 0; i < n; i++) {
      if (arrival_time[i] <= current_time && is_completed[i] == 0) {
        if (burst_time[i] < mn) {
          mn = burst_time[i];
          idx = i;
        }
        if (burst_time[i] == mn) {
          if (arrival_time[i] < arrival_time[idx]) {
            mn = burst_time[i];
            idx = i;
          }
        }
      }
    }
    if (idx != -1) {
      start_time[idx] = current_time;
      completion_time[idx] = start_time[idx] + burst_time[idx];
      turnaround_time[idx] = completion_time[idx] - arrival_time[idx];
      waiting_time[idx] = turnaround_time[idx] - burst_time[idx];
      // display UI for SJF(PR) Sched.
      _configGlobalVar.globalVar.sjfNPrUITrigger++;
      updateUI = _configGlobalVar.globalVar.sjfNPrUITrigger <= n;
      if (updateUI) publisherView(pid[idx], arrival_time[idx], burst_time[idx], waiting_time[idx], turnaround_time[idx]);
      total_turnaround_time += turnaround_time[idx];
      total_waiting_time += waiting_time[idx];
      is_completed[idx] = 1;
      completed++;
      current_time = completion_time[idx];
      prev = current_time;
    } else {
      current_time++;
    }
  }
  var min_arrival_time = 10000000;
  var max_completion_time = -1;
  for (var i = 0; i < n; i++) {
    min_arrival_time = Math.min(min_arrival_time, arrival_time[i]);
    max_completion_time = Math.max(max_completion_time, completion_time[i]);
  }
  avg_turnaround_time = parseFloat(total_turnaround_time) / parseFloat(n);
  avg_waiting_time = parseFloat(total_waiting_time) / parseFloat(n);
  _configGlobalVar.globalVar.sjfNPrTtPushed++;
  if (_configGlobalVar.globalVar.sjfNPrTtPushed === 1) _configGlobalVar.globalVar.avgTurnaroundTimes.push({
    Process: "SJF (Non-Preemptive)",
    Avgtt: avg_turnaround_time
  });
};

},{"../config/globalVar":"468k9","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"2mloc":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "roundRobin", function () {
  return roundRobin;
});
var _configGlobalVar = require("../config/globalVar");
const roundRobin = function (pid, bt, quantum, at, publisherView) {
  var proc = [], temp;
  var n = at.length;
  var updateUI;
  for (var i = 0; i < n; i++) {
    temp = {
      pid: pid[i],
      arrival_time: at[i],
      burst_time: bt[i],
      start_time: 0,
      completion_time: 0,
      turnaround_time: 0,
      waiting_time: 0
    };
    proc.push(temp);
  }
  var avg_turnaround_time;
  var avg_waiting_time;
  var total_turnaround_time = 0;
  var total_waiting_time = 0;
  var burst_remaining = [];
  for (var i = 0; i < n; i++) {
    burst_remaining[i] = proc[i].burst_time;
  }
  var idx;
  proc.sort(function (a, b) {
    return a.arrival_time - b.arrival_time;
  });
  var q = [];
  var current_time = 0;
  q.push(0);
  var completed = 0;
  var mark = [];
  for (var i = 0; i < n; i++) {
    mark[i] = 0;
  }
  mark[0] = 1;
  while (completed != n) {
    idx = q.shift();
    if (burst_remaining[idx] === proc[idx].burst_time) {
      proc[idx].start_time = Math.max(current_time, proc[idx].arrival_time);
      current_time = proc[idx].start_time;
    }
    if (burst_remaining[idx] - quantum > 0) {
      burst_remaining[idx] -= quantum;
      current_time += quantum;
    } else {
      current_time += burst_remaining[idx];
      burst_remaining[idx] = 0;
      completed++;
      proc[idx].completion_time = current_time;
      proc[idx].turnaround_time = proc[idx].completion_time - proc[idx].arrival_time;
      proc[idx].waiting_time = proc[idx].turnaround_time - proc[idx].burst_time;
      // display UI for Round-Robin Sched.
      _configGlobalVar.globalVar.roundRobinUITrigger++;
      updateUI = _configGlobalVar.globalVar.roundRobinUITrigger <= n;
      if (updateUI) publisherView(proc[idx].pid, proc[idx].arrival_time, proc[idx].burst_time, proc[idx].waiting_time, proc[idx].turnaround_time);
      total_turnaround_time += proc[idx].turnaround_time;
      total_waiting_time += proc[idx].waiting_time;
    }
    for (var i = 1; i < n; i++) {
      if (burst_remaining[i] > 0 && proc[i].arrival_time <= current_time && mark[i] == 0) {
        q.push(i);
        mark[i] = 1;
      }
    }
    if (burst_remaining[idx] > 0) {
      q.push(idx);
    }
    if (q.length == 0) {
      for (var i = 1; i < n; i++) {
        if (burst_remaining[i] > 0) {
          q.push(i);
          mark[i] = 1;
          break;
        }
      }
    }
  }
  var avg_waiting_time = parseFloat(total_waiting_time) / parseFloat(n);
  var avg_turnaround_time = parseFloat(total_turnaround_time) / parseFloat(n);
  proc.sort(function (a, b) {
    return a.pid - b.pid;
  });
  _configGlobalVar.globalVar.rrTtPushed++;
  if (_configGlobalVar.globalVar.rrTtPushed === 1) _configGlobalVar.globalVar.avgTurnaroundTimes.push({
    Process: "Round Robin",
    Avgtt: avg_turnaround_time
  });
};

},{"../config/globalVar":"468k9","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"7BmXL":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "displayRRProcess", function () {
  return displayRRProcess;
});
_parcelHelpers.export(exports, "roundRobinHandler", function () {
  return roundRobinHandler;
});
var _configGlobalVar = require("../../config/globalVar");
var _utilsViewTabUtils = require("../utilsView/tabUtils");
const processRRRows = document.querySelector(".process__info-rr-box");
const rrScheduling = document.querySelector(".nav__menu-item__RR");
_utilsViewTabUtils.tabfunctionality();
const displayRRProcess = function (pid, arrival, burst, waiting, turnaround) {
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
  processRRRows.insertAdjacentHTML("beforeend", html);
};
const roundRobinHandler = function (publisher) {
  rrScheduling.addEventListener("click", function () {
    _configGlobalVar.globalVar.btnRRClick++;
    let shouldCallAlgo = _configGlobalVar.globalVar.btnRRClick === 1 && _configGlobalVar.globalVar.btnSummaryClick === 0;
    if (shouldCallAlgo) publisher(_configGlobalVar.globalVar.processId, _configGlobalVar.globalVar.burstTimes, _configGlobalVar.globalVar.quantum, _configGlobalVar.globalVar.arrivalTimes);
  });
};

},{"../../config/globalVar":"468k9","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y","../utilsView/tabUtils":"3t50s"}],"5MMle":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "displayPriorityPremptive", function () {
  return displayPriorityPremptive;
});
_parcelHelpers.export(exports, "prePriorityHandler", function () {
  return prePriorityHandler;
});
var _configGlobalVar = require("../../config/globalVar");
var _utilsViewTabUtils = require("../utilsView/tabUtils");
const processPriorityRows = document.getElementById("process__info-priority-box");
const priorityScheduling = document.querySelector(".nav__menu-item__prio-pr");
_utilsViewTabUtils.tabfunctionality();
const displayPriorityPremptive = function (pid, arrival, burst, priority, waiting, turnaround) {
  const html = `
      <div class="row process__row">
          <div class="col-md-2 process__desc">Process ${pid}</div>
          <div class="col-md-2 process__time">${arrival}</div>
          <div class="col-md-2 process__time">${burst}</div>
          <div class="col-md-2 process__time">${priority}</div>
          <div class="col-md-2 process__time">${waiting}</div>
          <div class="col-md-2 process__time">${turnaround}</div>
      </div>
      `;
  processPriorityRows.insertAdjacentHTML("beforeend", html);
};
const prePriorityHandler = function (publisher) {
  priorityScheduling.addEventListener("click", function () {
    _configGlobalVar.globalVar.btnpriorityPrempClick++;
    let shouldCallAlgo = _configGlobalVar.globalVar.btnpriorityPrempClick === 1 && _configGlobalVar.globalVar.btnSummaryClick === 0;
    if (shouldCallAlgo) publisher(_configGlobalVar.globalVar.processId, _configGlobalVar.globalVar.burstTimes, _configGlobalVar.globalVar.priorities, _configGlobalVar.globalVar.arrivalTimes);
  });
};

},{"../../config/globalVar":"468k9","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y","../utilsView/tabUtils":"3t50s"}],"3o5Kr":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "priorityPremptive", function () {
  return priorityPremptive;
});
var _configGlobalVar = require("../config/globalVar");
const priorityPremptive = function (pid, burst_time, priority, arrival_time, publisherView) {
  var avg_turnaround_time, avg_waiting_time;
  var total_turnaround_time = 0, total_waiting_time = 0;
  var burst_remaining = [], is_completed = [];
  var start_time = [], completion_time = [], turnaround_time = [], waiting_time = [];
  var current_time = 0, completed = 0, prev = 0;
  var n = arrival_time.length;
  var updateUI;
  for (var i = 0; i < n; i++) {
    is_completed[i] = 0;
    burst_remaining[i] = burst_time[i];
  }
  while (completed != n) {
    var idx = -1;
    var mx = -1;
    for (var i = 0; i < n; i++) {
      if (arrival_time[i] <= current_time && is_completed[i] == 0) {
        if (priority[i] > mx) {
          mx = priority[i];
          idx = i;
        }
        if (priority[i] == mx) {
          if (arrival_time[i] < arrival_time[idx]) {
            mx = priority[i];
            idx = i;
          }
        }
      }
    }
    if (idx != -1) {
      if (burst_remaining[idx] == burst_time[idx]) {
        start_time[idx] = current_time;
      }
      burst_remaining[idx] -= 1;
      current_time++;
      prev = current_time;
      if (burst_remaining[idx] == 0) {
        completion_time[idx] = current_time;
        turnaround_time[idx] = completion_time[idx] - arrival_time[idx];
        waiting_time[idx] = turnaround_time[idx] - burst_time[idx];
        // display UI for Priority(Pr) Sched.
        _configGlobalVar.globalVar.priorityPrUITrigger++;
        updateUI = _configGlobalVar.globalVar.priorityPrUITrigger <= n;
        if (updateUI) publisherView(pid[idx], arrival_time[idx], burst_time[idx], priority[idx], waiting_time[idx], turnaround_time[idx]);
        total_turnaround_time += turnaround_time[idx];
        total_waiting_time += waiting_time[idx];
        is_completed[idx] = 1;
        completed++;
      }
    } else {
      current_time++;
    }
  }
  var min_arrival_time = 10000000;
  var max_completion_time = -1;
  for (var i = 0; i < n; i++) {
    min_arrival_time = Math.min(min_arrival_time, arrival_time[i]);
    max_completion_time = Math.max(max_completion_time, completion_time[i]);
  }
  avg_turnaround_time = total_turnaround_time / n;
  avg_waiting_time = total_waiting_time / n;
  _configGlobalVar.globalVar.priorityPrTtPushed++;
  if (_configGlobalVar.globalVar.priorityPrTtPushed === 1) _configGlobalVar.globalVar.avgTurnaroundTimes.push({
    Process: "Priority (Preemptive)",
    Avgtt: avg_turnaround_time
  });
};

},{"../config/globalVar":"468k9","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"78wRd":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "displayNonPriorityPremptive", function () {
  return displayNonPriorityPremptive;
});
_parcelHelpers.export(exports, "nonPrePriorityHandler", function () {
  return nonPrePriorityHandler;
});
var _configGlobalVar = require("../../config/globalVar");
var _utilsViewTabUtils = require("../utilsView/tabUtils");
const processNonPriorityRows = document.getElementById("process__info-non-priority-box");
const priorityNScheduling = document.querySelector(".nav__menu-item__prio-npr");
_utilsViewTabUtils.tabfunctionality();
const displayNonPriorityPremptive = function (pid, arrival, burst, priority, waiting, turnaround) {
  const html = `
      <div class="row process__row">
          <div class="col-md-2 process__desc">Process ${pid}</div>
          <div class="col-md-2 process__time">${arrival}</div>
          <div class="col-md-2 process__time">${burst}</div>
          <div class="col-md-2 process__time">${priority}</div>
          <div class="col-md-2 process__time">${waiting}</div>
          <div class="col-md-2 process__time">${turnaround}</div>
      </div>
      `;
  processNonPriorityRows.insertAdjacentHTML("beforeend", html);
};
const nonPrePriorityHandler = function (publisher) {
  priorityNScheduling.addEventListener("click", function () {
    _configGlobalVar.globalVar.btnpriorityNonPrempClick++;
    let shouldCallAlgo = _configGlobalVar.globalVar.btnpriorityNonPrempClick === 1 && _configGlobalVar.globalVar.btnSummaryClick === 0;
    if (shouldCallAlgo) publisher(_configGlobalVar.globalVar.processId, _configGlobalVar.globalVar.burstTimes, _configGlobalVar.globalVar.priorities, _configGlobalVar.globalVar.arrivalTimes);
  });
};

},{"../../config/globalVar":"468k9","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y","../utilsView/tabUtils":"3t50s"}],"23QfT":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "priorityNonPreemptive", function () {
  return priorityNonPreemptive;
});
var _configGlobalVar = require("../config/globalVar");
const priorityNonPreemptive = function (pid, burst_time, priority, arrival_time, publisherView) {
  var start_time = [], completion_time = [], turnaround_time = [], waiting_time = [];
  var avg_turnaround_time, avg_waiting_time;
  var total_turnaround_time = 0, total_waiting_time = 0;
  var is_completed = [];
  var n = arrival_time.length;
  var updateUI;
  for (var i = 0; i < n; i++) {
    is_completed[i] = 0;
  }
  var current_time = 0;
  var completed = 0;
  var prev = 0;
  while (completed != n) {
    var idx = -1;
    var mx = -1;
    for (var i = 0; i < n; i++) {
      if (arrival_time[i] <= current_time && is_completed[i] == 0) {
        if (priority[i] > mx) {
          mx = priority[i];
          idx = i;
        }
        if (priority[i] == mx) {
          if (arrival_time[i] < arrival_time[idx]) {
            mx = priority[i];
            idx = i;
          }
        }
      }
    }
    if (idx != -1) {
      start_time[idx] = current_time;
      completion_time[idx] = start_time[idx] + burst_time[idx];
      turnaround_time[idx] = completion_time[idx] - arrival_time[idx];
      waiting_time[idx] = turnaround_time[idx] - burst_time[idx];
      total_turnaround_time += turnaround_time[idx];
      total_waiting_time += waiting_time[idx];
      // display UI for SJF(PR) Sched.
      _configGlobalVar.globalVar.priorityNPrUITrigger++;
      updateUI = _configGlobalVar.globalVar.priorityNPrUITrigger <= n;
      if (updateUI) publisherView(pid[idx], arrival_time[idx], burst_time[idx], priority[idx], waiting_time[idx], turnaround_time[idx]);
      is_completed[idx] = 1;
      completed++;
      current_time = completion_time[idx];
      prev = current_time;
    } else {
      current_time++;
    }
  }
  var min_arrival_time = 10000000;
  var max_completion_time = -1;
  for (var i = 0; i < n; i++) {
    min_arrival_time = Math.min(min_arrival_time, arrival_time[i]);
    max_completion_time = Math.max(max_completion_time, completion_time[i]);
  }
  avg_turnaround_time = parseFloat(total_turnaround_time) / parseFloat(n);
  avg_waiting_time = parseFloat(total_waiting_time) / parseFloat(n);
  for (var i = 0; i < n; i++) {
    console.log(pid[i], arrival_time[i], burst_time[i], priority[i], completion_time[i], turnaround_time[i], waiting_time[i]);
  }
  _configGlobalVar.globalVar.priorityNPrTtPushed++;
  if (_configGlobalVar.globalVar.priorityNPrTtPushed === 1) _configGlobalVar.globalVar.avgTurnaroundTimes.push({
    Process: "Priority (Non-Preemptive)",
    Avgtt: avg_turnaround_time
  });
};

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y","../config/globalVar":"468k9"}],"6EXbU":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "modalHandler", function () {
  return modalHandler;
});
const instruction = document.querySelector(".instruction");
const modal = document.querySelector(".modal-view");
const btnCloseModal = document.querySelector(".close-modal");
const btnGotIt = document.querySelector(".got__instr");
const modalHandler = function () {
  instruction.addEventListener("click", function (event) {
    event.preventDefault();
    modal.classList.remove("hidden");
  });
  btnCloseModal.addEventListener("click", function (event) {
    event.preventDefault();
    modal.classList.add("hidden");
  });
  btnGotIt.addEventListener("click", function (event) {
    event.preventDefault();
    modal.classList.add("hidden");
  });
};

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"2kJdV":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "displayAvgTt", function () {
  return displayAvgTt;
});
_parcelHelpers.export(exports, "summaryHandler", function () {
  return summaryHandler;
});
var _configGlobalVar = require("../../config/globalVar");
var _chartView = require("./chartView");
const processAvgTTRows = document.querySelector(".process__info-avg-tt-box");
const btnSummary = document.querySelector(".summary__btn");
const btnSort = document.querySelector(".sort__btn");
const displayAvgTt = function (sort = false) {
  processAvgTTRows.innerHTML = "";
  if (sort) {
    const sortedavgTtimes = _configGlobalVar.globalVar.avgTurnaroundTimes.slice().sort((a, b) => a.Avgtt - b.Avgtt);
    var minAvgtt = sortedavgTtimes[0].Avgtt;
    sortedavgTtimes.forEach(function (sortedavgTtime) {
      if (minAvgtt === sortedavgTtime.Avgtt) {
        var html = `
            <div class="row process__row process__row--effective">
              <div class="col-md-6 process__desc process__desc--color">${sortedavgTtime.Process} Scheduling</div>
              <div class="col-md-6 process__time">${+sortedavgTtime.Avgtt.toFixed(2)}s</div>
            </div>
            `;
      } else {
        var html = `
            <div class="row process__row">
              <div class="col-md-6 process__desc">${sortedavgTtime.Process} Scheduling</div>
              <div class="col-md-6 process__time">${+sortedavgTtime.Avgtt.toFixed(2)}s</div>
            </div>
            `;
      }
      processAvgTTRows.insertAdjacentHTML("beforeend", html);
    });
  }
  if (!sort) {
    _configGlobalVar.globalVar.avgTurnaroundTimes.forEach(function (avgTurnaroundTime) {
      var html = `
        <div class="row process__row">
        <div class="col-md-6 process__desc">${avgTurnaroundTime.Process} Scheduling</div>
              <div class="col-md-6 process__time">${+avgTurnaroundTime.Avgtt.toFixed(2)}s</div>
                </div>
                `;
      processAvgTTRows.insertAdjacentHTML("beforeend", html);
    });
  }
};
const summaryHandler = function (publisher) {
  btnSummary.addEventListener("click", function () {
    _configGlobalVar.globalVar.btnSummaryClick++;
    let shouldCallAlgos = _configGlobalVar.globalVar.btnSummaryClick === 1;
    if (shouldCallAlgos) {
      publisher(_configGlobalVar.globalVar.processId, _configGlobalVar.globalVar.arrivalTimes, _configGlobalVar.globalVar.burstTimes, _configGlobalVar.globalVar.priorities, _configGlobalVar.globalVar.quantum);
    }
    displayAvgTt();
    _chartView.displayChart();
  });
  btnSort.addEventListener("click", function (event) {
    event.preventDefault();
    displayAvgTt(!_configGlobalVar.globalVar.sorted);
    _configGlobalVar.globalVar.sorted = !_configGlobalVar.globalVar.sorted;
  });
};

},{"../../config/globalVar":"468k9","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y","./chartView":"7oHFb"}],"7oHFb":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "displayChart", function () {
  return displayChart;
});
var _configGlobalVar = require("../../config/globalVar");
const displayChart = function () {
  var ctx = document.getElementById("myChart").getContext("2d");
  var myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: [_configGlobalVar.globalVar.avgTurnaroundTimes[0].Process, _configGlobalVar.globalVar.avgTurnaroundTimes[1].Process, _configGlobalVar.globalVar.avgTurnaroundTimes[2].Process, _configGlobalVar.globalVar.avgTurnaroundTimes[3].Process, _configGlobalVar.globalVar.avgTurnaroundTimes[4].Process, _configGlobalVar.globalVar.avgTurnaroundTimes[5].Process],
      datasets: [{
        label: "Avg Turnaround Time",
        data: [_configGlobalVar.globalVar.avgTurnaroundTimes[0].Avgtt.toFixed(2), _configGlobalVar.globalVar.avgTurnaroundTimes[1].Avgtt.toFixed(2), _configGlobalVar.globalVar.avgTurnaroundTimes[2].Avgtt.toFixed(2), _configGlobalVar.globalVar.avgTurnaroundTimes[3].Avgtt.toFixed(2), _configGlobalVar.globalVar.avgTurnaroundTimes[4].Avgtt.toFixed(2), _configGlobalVar.globalVar.avgTurnaroundTimes[5].Avgtt.toFixed(2)],
        backgroundColor: ["rgba(255, 99, 132)", "rgba(54, 162, 235)", "rgba(255, 206, 86)", "rgba(75, 192, 192)", "rgba(153, 102, 255)", "rgba(255, 159, 64)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)", "rgba(75, 192, 192, 1)", "rgba(153, 102, 255, 1)", "rgba(255, 159, 64, 1)"],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
};

},{"../../config/globalVar":"468k9","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}]},["2aKhF","3K3IO"], "3K3IO", "parcelRequire575a")

//# sourceMappingURL=index.48460618.js.map
