webpackJsonp(["manager"],{

/***/ "+DeM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_task_breadcrumb_vue__ = __webpack_require__("fxan");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_task_breadcrumb_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_task_breadcrumb_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_task_breadcrumb_vue__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_task_breadcrumb_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1e32ff74_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_task_breadcrumb_vue__ = __webpack_require__("qJ6A");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("XyMi");
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_task_breadcrumb_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1e32ff74_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_task_breadcrumb_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1e32ff74_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_task_breadcrumb_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "+MZZ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _format = __webpack_require__("Lfum");

var _format2 = _interopRequireDefault(_format);

var _wyHelper = __webpack_require__("XxLa");

var _wyHelper2 = _interopRequireDefault(_wyHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var spaceNotEnoughCode = {
    2002014: true,
    1053: true,
    22081: true,
    22111: true,
    22121: true,
    22131: true };

exports.default = {

    props: {
        task: Object
    },

    data: function data() {
        return {
            lastChangeStateTime: 0
        };
    },

    computed: {
        isVip: function isVip() {
            return this.$store.getters['userInfo/vip'];
        },
        isSuperVip: function isSuperVip() {
            return this.$store.getters['userInfo/superVip'];
        },
        isSafebox: function isSafebox() {
            return this.task.getType() === 'belong' && this.task.getBelongInfo().name === 'safebox';
        },
        isTeamMode: function isTeamMode() {
            return this.$store.state.control.diskMode === 'team';
        },
        isOffline: function isOffline() {
            return this.task.getType() === 'offline';
        },
        isFlowNotEnough: function isFlowNotEnough() {
            return this.$store.state.manager.flowNotEnough;
        },
        processColor: function processColor() {
            return this.isVip && !this.isFlowNotEnough || this.isTeamMode ? '#CFA16C' : '#00A4FF';
        },
        name: function name() {
            if (this.isSafebox) {
                return '保险箱';
            }
            return this.task.getFileNode().getName();
        },
        iconCls: function iconCls() {
            return 'icon-' + (this.isSafebox ? 'safebox' : this.task.getFileNode().getType()) + '-m';
        },
        type: function type() {
            if (this.task.getType() === 'offline') {
                return '离线下载';
            } else if (this.task.getType() === 'download') {
                return '下载';
            }
            return '上传';
        },
        size: function size() {
            var size = this.task.getSize();
            if (!size) {
                return '';
            }
            return _format2.default.size(this.task.getSize());
        },
        state: function state() {
            return this.task.getState();
        },
        stateCls: function stateCls() {
            var type = this.task.getType();
            var cls = '';

            switch (this.state) {
                case 'wait':
                    cls = 'waiting';
                    break;
                case 'readying':
                    cls = 'dealing';
                    break;
                case 'readydone':
                    cls = 'dealing';
                    break;
                case 'process':
                    if (type === 'offline') {
                        cls = 'dealing';
                    } else {
                        cls = 'dealing progressing';
                    }
                    break;
                case 'pause':
                    cls = 'cancel';
                    break;
                case 'error':
                    cls = 'fail';
                    break;
                case 'done':
                    cls = 'succ';
            }

            if (type === 'offline' || type === 'download') {
                cls += ' offline';
            }

            if (this.isSafebox || this.task.getType() === 'dir' && this.state === 'error') {
                cls += ' is-folder';
            }

            return cls;
        },
        stateText: function stateText() {
            var type = this.task.getType();
            var stateText = '';
            switch (this.state) {
                case 'wait':
                    stateText = '';
                    break;
                case 'readying':
                    if (this.task.getType() === 'download' || this.task.hasSubTask() || this.task.getType() === 'file' && this.task.getUploadMode() === 'form') {
                        stateText = '';
                    } else {
                        stateText = '扫描中...' + parseInt(this.task.getScanProcessedPercent() * 100) + '%';
                    }
                    break;
                case 'readydone':
                    if (type === 'offline' || type === 'download') {
                        stateText = '准备下载';
                    } else {
                        stateText = '准备上传';
                    }
                    break;
                case 'process':
                    if (type === 'offline' || type === 'download') {
                        stateText = '下载中';
                    } else {
                        stateText = this.taskSpeed || '上传中';
                    }
                    break;
                case 'pause':
                    stateText = '';
                    break;
                case 'error':
                    stateText = '';
                    break;
            }

            return stateText;
        },
        taskSpeed: function taskSpeed() {
            var speed = this.task.getSpeed();
            if (speed && _format2.default.size(speed) + '/s') {
                if (this.isSuperVip) {
                    return speed && _format2.default.size(speed * 2 / 3) + '/s';
                }
                return speed && _format2.default.size(speed) + '/s';
            }
            return '';
        },
        taskSvipSpeed: function taskSvipSpeed() {
            if (!this.isSuperVip) return '';

            var speed = this.task.getSpeed();
            if (speed && _format2.default.size(speed) + '/s') {
                return speed && _format2.default.size(speed * 1 / 3) + '/s';
            }
            return '';
        },
        processed: function processed() {
            var percent = this.task.getProcessedPercent();
            if (percent === 0) {
                return 1000;
            }
            percent = percent * 100;
            if (percent > 50) {
                percent += 5;
            }
            return Math.max(1000 - percent, 894);
        },
        errRet: function errRet() {
            return this.task.getErrorInfo().ret;
        },
        errMsg: function errMsg() {
            var ret = this.task.getErrorInfo().ret;
            if (ret === 2002021) {
                return '网络异常';
            }
            return this.task.getErrorInfo().msg;
        },
        shouldShowVipLink: function shouldShowVipLink() {
            var ret = this.task.getErrorInfo().ret;
            return !!spaceNotEnoughCode[ret] && this.task.getFileNode().getCategory() !== 'team';
        }
    },

    methods: {
        changeState: function changeState() {
            var now = +new Date();

            if (!this.lastChangeStateTime) {
                this.lastChangeStateTime = now;
            } else if (now - this.lastChangeStateTime < 1000) {
                return;
            }
            this.lastChangeStateTime = now;

            var state = this.state;
            var newState = void 0;
            switch (state) {
                case 'wait':
                    this.task.changeState('pause');
                    newState = 'pause';
                    break;
                case 'readying':
                    this.task.changeState('pause');
                    newState = 'pause';
                    break;
                case 'readydone':
                    this.task.changeState('pause');
                    newState = 'pause';
                    break;
                case 'process':
                    this.task.changeState('pause');
                    newState = 'pause';

                    break;
                case 'pause':
                    this.task.changeState('wait');
                    newState = 'wait';
                    break;
                case 'error':
                    this.task.changeState('wait');
                    newState = 'wait';
                    break;
                case 'done':
                    this.$store.dispatch('manager/location', this.task);
                    break;
            }

            console.log('user changeState oldState: ' + state + ' newState: ' + newState + ' taskName: ' + this.task.getName());
        },
        openMutiTask: function openMutiTask() {
            if (this.task.getType() === 'dir' && this.state === 'error' || this.task.getType() === 'belong' && this.task.getBelongInfo().name === 'safebox') {
                this.$store.commit('manager/openMutiTask', this.task);
            }
        },
        goVip: function goVip() {
            if (this.isSuperVip) {
                this.$store.commit('control/buySpace', 'wyweb_task_item');
            } else {
                this.$store.dispatch('control/popBuyVip', {
                    aid: 'wyweb_task_item',
                    type: 'svip'
                });
            }
        },
        feedback: function feedback() {
            _wyHelper2.default.show();
        }
    }
};

/***/ }),

/***/ "+WEU":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _defineProperty2 = __webpack_require__("bOdI");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _codeMap;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var codeMap = (_codeMap = {
    2002001: '可能修改了文件，请重试上传',

    2002004: '上传通道中断，没有上传的通道信息',
    2002005: '分片上传失败，请重试上传',
    2002006: '分片上传失败，请重试上传',
    2002007: '网络异常，请重试上传',
    2002008: '服务器异常，请重试上传',
    2002009: '网络超时，请重试上传',
    2002010: '文件扫描结果异常，请重试上传',
    2002011: '体验极速上传失败，请重试上传',
    2002012: '体验极速上传失败，请重试上传',
    2002013: '',
    2002014: '容量不足，上传失败',
    2002015: '流量不足，上传失败',

    2002016: '上传失败，请升级最新浏览器',
    2002017: '文件过大，无法上传',
    2002020: '服务器异常，请重试上传',
    2002021: '网络异常，请重试上传',
    2002022: '网络异常，请重试上传',
    2002023: '文件可能被移动或删除，请重新上传',
    2002024: '文件扫描结果异常，请重试上传',
    2002025: '网络异常，请重试上传',
    2002026: '网络断开，请重试上传',
    2002027: '文件可能被移动或删除，请重新上传',
    2002028: '浏览器环境异常，请使用最新Chrome浏览器',
    2002029: '当前网络环境可能阻止了上传文件，请重试',
    1029: '文件过大，无法上传，请升级最新浏览器',

    '-89016': '',
    '-89002': '',
    '-89004': '',
    '-89005': '',
    '-89006': '',
    '-89010': '',
    '-89011': '',
    '-89012': '',
    '-89013': '',
    '-89030': '' }, (0, _defineProperty3.default)(_codeMap, '-89016', ''), (0, _defineProperty3.default)(_codeMap, '-29100', ''), (0, _defineProperty3.default)(_codeMap, '-29107', ''), (0, _defineProperty3.default)(_codeMap, '-29101', ''), (0, _defineProperty3.default)(_codeMap, '-89101', ''), (0, _defineProperty3.default)(_codeMap, '-89102', ''), (0, _defineProperty3.default)(_codeMap, '-89103', ''), (0, _defineProperty3.default)(_codeMap, '-89104', ''), (0, _defineProperty3.default)(_codeMap, '-89105', ''), (0, _defineProperty3.default)(_codeMap, '-89106', ''), (0, _defineProperty3.default)(_codeMap, '-89025', ''), _codeMap);

var NO_RETRY = {
    '-3000': 1,
    1024: 1,
    10000: 1,

    25700: 1,
    25701: 1,
    25702: 1,

    190050: 1,
    190051: 1,
    4000: 1,
    190011: 1,
    190061: 1,
    190062: 1,
    190063: 1,
    190065: 1,

    2002023: 1,
    2002027: 1
};
exports.default = {

    codeMap: codeMap,

    get: function get(ret, msg) {
        if (ret >= 400 && ret < 600) {
            return '(' + ret + ')\u7F51\u7EDC\u5F02\u5E38\uFF0C\u8BF7\u91CD\u8BD5\u4E0A\u4F20';
        }
        return codeMap[ret] && '(' + ret + ')' + codeMap[ret] || msg || '(' + (ret || '0000') + ')\u4E0A\u4F20\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5';
    },
    canRetry: function canRetry(ret) {
        return !NO_RETRY[ret];
    }
};

/***/ }),

/***/ "/cOS":
/***/ (function(module, exports) {

/**
 * cssfilter
 *
 * @author 老雷<leizongmin@gmail.com>
 */

function getDefaultWhiteList () {
  // 白名单值说明：
  // true: 允许该属性
  // Function: function (val) { } 返回true表示允许该属性，其他值均表示不允许
  // RegExp: regexp.test(val) 返回true表示允许该属性，其他值均表示不允许
  // 除上面列出的值外均表示不允许
  var whiteList = {};

  whiteList['align-content'] = false; // default: auto
  whiteList['align-items'] = false; // default: auto
  whiteList['align-self'] = false; // default: auto
  whiteList['alignment-adjust'] = false; // default: auto
  whiteList['alignment-baseline'] = false; // default: baseline
  whiteList['all'] = false; // default: depending on individual properties
  whiteList['anchor-point'] = false; // default: none
  whiteList['animation'] = false; // default: depending on individual properties
  whiteList['animation-delay'] = false; // default: 0
  whiteList['animation-direction'] = false; // default: normal
  whiteList['animation-duration'] = false; // default: 0
  whiteList['animation-fill-mode'] = false; // default: none
  whiteList['animation-iteration-count'] = false; // default: 1
  whiteList['animation-name'] = false; // default: none
  whiteList['animation-play-state'] = false; // default: running
  whiteList['animation-timing-function'] = false; // default: ease
  whiteList['azimuth'] = false; // default: center
  whiteList['backface-visibility'] = false; // default: visible
  whiteList['background'] = true; // default: depending on individual properties
  whiteList['background-attachment'] = true; // default: scroll
  whiteList['background-clip'] = true; // default: border-box
  whiteList['background-color'] = true; // default: transparent
  whiteList['background-image'] = true; // default: none
  whiteList['background-origin'] = true; // default: padding-box
  whiteList['background-position'] = true; // default: 0% 0%
  whiteList['background-repeat'] = true; // default: repeat
  whiteList['background-size'] = true; // default: auto
  whiteList['baseline-shift'] = false; // default: baseline
  whiteList['binding'] = false; // default: none
  whiteList['bleed'] = false; // default: 6pt
  whiteList['bookmark-label'] = false; // default: content()
  whiteList['bookmark-level'] = false; // default: none
  whiteList['bookmark-state'] = false; // default: open
  whiteList['border'] = true; // default: depending on individual properties
  whiteList['border-bottom'] = true; // default: depending on individual properties
  whiteList['border-bottom-color'] = true; // default: current color
  whiteList['border-bottom-left-radius'] = true; // default: 0
  whiteList['border-bottom-right-radius'] = true; // default: 0
  whiteList['border-bottom-style'] = true; // default: none
  whiteList['border-bottom-width'] = true; // default: medium
  whiteList['border-collapse'] = true; // default: separate
  whiteList['border-color'] = true; // default: depending on individual properties
  whiteList['border-image'] = true; // default: none
  whiteList['border-image-outset'] = true; // default: 0
  whiteList['border-image-repeat'] = true; // default: stretch
  whiteList['border-image-slice'] = true; // default: 100%
  whiteList['border-image-source'] = true; // default: none
  whiteList['border-image-width'] = true; // default: 1
  whiteList['border-left'] = true; // default: depending on individual properties
  whiteList['border-left-color'] = true; // default: current color
  whiteList['border-left-style'] = true; // default: none
  whiteList['border-left-width'] = true; // default: medium
  whiteList['border-radius'] = true; // default: 0
  whiteList['border-right'] = true; // default: depending on individual properties
  whiteList['border-right-color'] = true; // default: current color
  whiteList['border-right-style'] = true; // default: none
  whiteList['border-right-width'] = true; // default: medium
  whiteList['border-spacing'] = true; // default: 0
  whiteList['border-style'] = true; // default: depending on individual properties
  whiteList['border-top'] = true; // default: depending on individual properties
  whiteList['border-top-color'] = true; // default: current color
  whiteList['border-top-left-radius'] = true; // default: 0
  whiteList['border-top-right-radius'] = true; // default: 0
  whiteList['border-top-style'] = true; // default: none
  whiteList['border-top-width'] = true; // default: medium
  whiteList['border-width'] = true; // default: depending on individual properties
  whiteList['bottom'] = false; // default: auto
  whiteList['box-decoration-break'] = true; // default: slice
  whiteList['box-shadow'] = true; // default: none
  whiteList['box-sizing'] = true; // default: content-box
  whiteList['box-snap'] = true; // default: none
  whiteList['box-suppress'] = true; // default: show
  whiteList['break-after'] = true; // default: auto
  whiteList['break-before'] = true; // default: auto
  whiteList['break-inside'] = true; // default: auto
  whiteList['caption-side'] = false; // default: top
  whiteList['chains'] = false; // default: none
  whiteList['clear'] = true; // default: none
  whiteList['clip'] = false; // default: auto
  whiteList['clip-path'] = false; // default: none
  whiteList['clip-rule'] = false; // default: nonzero
  whiteList['color'] = true; // default: implementation dependent
  whiteList['color-interpolation-filters'] = true; // default: auto
  whiteList['column-count'] = false; // default: auto
  whiteList['column-fill'] = false; // default: balance
  whiteList['column-gap'] = false; // default: normal
  whiteList['column-rule'] = false; // default: depending on individual properties
  whiteList['column-rule-color'] = false; // default: current color
  whiteList['column-rule-style'] = false; // default: medium
  whiteList['column-rule-width'] = false; // default: medium
  whiteList['column-span'] = false; // default: none
  whiteList['column-width'] = false; // default: auto
  whiteList['columns'] = false; // default: depending on individual properties
  whiteList['contain'] = false; // default: none
  whiteList['content'] = false; // default: normal
  whiteList['counter-increment'] = false; // default: none
  whiteList['counter-reset'] = false; // default: none
  whiteList['counter-set'] = false; // default: none
  whiteList['crop'] = false; // default: auto
  whiteList['cue'] = false; // default: depending on individual properties
  whiteList['cue-after'] = false; // default: none
  whiteList['cue-before'] = false; // default: none
  whiteList['cursor'] = false; // default: auto
  whiteList['direction'] = false; // default: ltr
  whiteList['display'] = true; // default: depending on individual properties
  whiteList['display-inside'] = true; // default: auto
  whiteList['display-list'] = true; // default: none
  whiteList['display-outside'] = true; // default: inline-level
  whiteList['dominant-baseline'] = false; // default: auto
  whiteList['elevation'] = false; // default: level
  whiteList['empty-cells'] = false; // default: show
  whiteList['filter'] = false; // default: none
  whiteList['flex'] = false; // default: depending on individual properties
  whiteList['flex-basis'] = false; // default: auto
  whiteList['flex-direction'] = false; // default: row
  whiteList['flex-flow'] = false; // default: depending on individual properties
  whiteList['flex-grow'] = false; // default: 0
  whiteList['flex-shrink'] = false; // default: 1
  whiteList['flex-wrap'] = false; // default: nowrap
  whiteList['float'] = false; // default: none
  whiteList['float-offset'] = false; // default: 0 0
  whiteList['flood-color'] = false; // default: black
  whiteList['flood-opacity'] = false; // default: 1
  whiteList['flow-from'] = false; // default: none
  whiteList['flow-into'] = false; // default: none
  whiteList['font'] = true; // default: depending on individual properties
  whiteList['font-family'] = true; // default: implementation dependent
  whiteList['font-feature-settings'] = true; // default: normal
  whiteList['font-kerning'] = true; // default: auto
  whiteList['font-language-override'] = true; // default: normal
  whiteList['font-size'] = true; // default: medium
  whiteList['font-size-adjust'] = true; // default: none
  whiteList['font-stretch'] = true; // default: normal
  whiteList['font-style'] = true; // default: normal
  whiteList['font-synthesis'] = true; // default: weight style
  whiteList['font-variant'] = true; // default: normal
  whiteList['font-variant-alternates'] = true; // default: normal
  whiteList['font-variant-caps'] = true; // default: normal
  whiteList['font-variant-east-asian'] = true; // default: normal
  whiteList['font-variant-ligatures'] = true; // default: normal
  whiteList['font-variant-numeric'] = true; // default: normal
  whiteList['font-variant-position'] = true; // default: normal
  whiteList['font-weight'] = true; // default: normal
  whiteList['grid'] = false; // default: depending on individual properties
  whiteList['grid-area'] = false; // default: depending on individual properties
  whiteList['grid-auto-columns'] = false; // default: auto
  whiteList['grid-auto-flow'] = false; // default: none
  whiteList['grid-auto-rows'] = false; // default: auto
  whiteList['grid-column'] = false; // default: depending on individual properties
  whiteList['grid-column-end'] = false; // default: auto
  whiteList['grid-column-start'] = false; // default: auto
  whiteList['grid-row'] = false; // default: depending on individual properties
  whiteList['grid-row-end'] = false; // default: auto
  whiteList['grid-row-start'] = false; // default: auto
  whiteList['grid-template'] = false; // default: depending on individual properties
  whiteList['grid-template-areas'] = false; // default: none
  whiteList['grid-template-columns'] = false; // default: none
  whiteList['grid-template-rows'] = false; // default: none
  whiteList['hanging-punctuation'] = false; // default: none
  whiteList['height'] = true; // default: auto
  whiteList['hyphens'] = false; // default: manual
  whiteList['icon'] = false; // default: auto
  whiteList['image-orientation'] = false; // default: auto
  whiteList['image-resolution'] = false; // default: normal
  whiteList['ime-mode'] = false; // default: auto
  whiteList['initial-letters'] = false; // default: normal
  whiteList['inline-box-align'] = false; // default: last
  whiteList['justify-content'] = false; // default: auto
  whiteList['justify-items'] = false; // default: auto
  whiteList['justify-self'] = false; // default: auto
  whiteList['left'] = false; // default: auto
  whiteList['letter-spacing'] = true; // default: normal
  whiteList['lighting-color'] = true; // default: white
  whiteList['line-box-contain'] = false; // default: block inline replaced
  whiteList['line-break'] = false; // default: auto
  whiteList['line-grid'] = false; // default: match-parent
  whiteList['line-height'] = false; // default: normal
  whiteList['line-snap'] = false; // default: none
  whiteList['line-stacking'] = false; // default: depending on individual properties
  whiteList['line-stacking-ruby'] = false; // default: exclude-ruby
  whiteList['line-stacking-shift'] = false; // default: consider-shifts
  whiteList['line-stacking-strategy'] = false; // default: inline-line-height
  whiteList['list-style'] = true; // default: depending on individual properties
  whiteList['list-style-image'] = true; // default: none
  whiteList['list-style-position'] = true; // default: outside
  whiteList['list-style-type'] = true; // default: disc
  whiteList['margin'] = true; // default: depending on individual properties
  whiteList['margin-bottom'] = true; // default: 0
  whiteList['margin-left'] = true; // default: 0
  whiteList['margin-right'] = true; // default: 0
  whiteList['margin-top'] = true; // default: 0
  whiteList['marker-offset'] = false; // default: auto
  whiteList['marker-side'] = false; // default: list-item
  whiteList['marks'] = false; // default: none
  whiteList['mask'] = false; // default: border-box
  whiteList['mask-box'] = false; // default: see individual properties
  whiteList['mask-box-outset'] = false; // default: 0
  whiteList['mask-box-repeat'] = false; // default: stretch
  whiteList['mask-box-slice'] = false; // default: 0 fill
  whiteList['mask-box-source'] = false; // default: none
  whiteList['mask-box-width'] = false; // default: auto
  whiteList['mask-clip'] = false; // default: border-box
  whiteList['mask-image'] = false; // default: none
  whiteList['mask-origin'] = false; // default: border-box
  whiteList['mask-position'] = false; // default: center
  whiteList['mask-repeat'] = false; // default: no-repeat
  whiteList['mask-size'] = false; // default: border-box
  whiteList['mask-source-type'] = false; // default: auto
  whiteList['mask-type'] = false; // default: luminance
  whiteList['max-height'] = true; // default: none
  whiteList['max-lines'] = false; // default: none
  whiteList['max-width'] = true; // default: none
  whiteList['min-height'] = true; // default: 0
  whiteList['min-width'] = true; // default: 0
  whiteList['move-to'] = false; // default: normal
  whiteList['nav-down'] = false; // default: auto
  whiteList['nav-index'] = false; // default: auto
  whiteList['nav-left'] = false; // default: auto
  whiteList['nav-right'] = false; // default: auto
  whiteList['nav-up'] = false; // default: auto
  whiteList['object-fit'] = false; // default: fill
  whiteList['object-position'] = false; // default: 50% 50%
  whiteList['opacity'] = false; // default: 1
  whiteList['order'] = false; // default: 0
  whiteList['orphans'] = false; // default: 2
  whiteList['outline'] = false; // default: depending on individual properties
  whiteList['outline-color'] = false; // default: invert
  whiteList['outline-offset'] = false; // default: 0
  whiteList['outline-style'] = false; // default: none
  whiteList['outline-width'] = false; // default: medium
  whiteList['overflow'] = false; // default: depending on individual properties
  whiteList['overflow-wrap'] = false; // default: normal
  whiteList['overflow-x'] = false; // default: visible
  whiteList['overflow-y'] = false; // default: visible
  whiteList['padding'] = true; // default: depending on individual properties
  whiteList['padding-bottom'] = true; // default: 0
  whiteList['padding-left'] = true; // default: 0
  whiteList['padding-right'] = true; // default: 0
  whiteList['padding-top'] = true; // default: 0
  whiteList['page'] = false; // default: auto
  whiteList['page-break-after'] = false; // default: auto
  whiteList['page-break-before'] = false; // default: auto
  whiteList['page-break-inside'] = false; // default: auto
  whiteList['page-policy'] = false; // default: start
  whiteList['pause'] = false; // default: implementation dependent
  whiteList['pause-after'] = false; // default: implementation dependent
  whiteList['pause-before'] = false; // default: implementation dependent
  whiteList['perspective'] = false; // default: none
  whiteList['perspective-origin'] = false; // default: 50% 50%
  whiteList['pitch'] = false; // default: medium
  whiteList['pitch-range'] = false; // default: 50
  whiteList['play-during'] = false; // default: auto
  whiteList['position'] = false; // default: static
  whiteList['presentation-level'] = false; // default: 0
  whiteList['quotes'] = false; // default: text
  whiteList['region-fragment'] = false; // default: auto
  whiteList['resize'] = false; // default: none
  whiteList['rest'] = false; // default: depending on individual properties
  whiteList['rest-after'] = false; // default: none
  whiteList['rest-before'] = false; // default: none
  whiteList['richness'] = false; // default: 50
  whiteList['right'] = false; // default: auto
  whiteList['rotation'] = false; // default: 0
  whiteList['rotation-point'] = false; // default: 50% 50%
  whiteList['ruby-align'] = false; // default: auto
  whiteList['ruby-merge'] = false; // default: separate
  whiteList['ruby-position'] = false; // default: before
  whiteList['shape-image-threshold'] = false; // default: 0.0
  whiteList['shape-outside'] = false; // default: none
  whiteList['shape-margin'] = false; // default: 0
  whiteList['size'] = false; // default: auto
  whiteList['speak'] = false; // default: auto
  whiteList['speak-as'] = false; // default: normal
  whiteList['speak-header'] = false; // default: once
  whiteList['speak-numeral'] = false; // default: continuous
  whiteList['speak-punctuation'] = false; // default: none
  whiteList['speech-rate'] = false; // default: medium
  whiteList['stress'] = false; // default: 50
  whiteList['string-set'] = false; // default: none
  whiteList['tab-size'] = false; // default: 8
  whiteList['table-layout'] = false; // default: auto
  whiteList['text-align'] = true; // default: start
  whiteList['text-align-last'] = true; // default: auto
  whiteList['text-combine-upright'] = true; // default: none
  whiteList['text-decoration'] = true; // default: none
  whiteList['text-decoration-color'] = true; // default: currentColor
  whiteList['text-decoration-line'] = true; // default: none
  whiteList['text-decoration-skip'] = true; // default: objects
  whiteList['text-decoration-style'] = true; // default: solid
  whiteList['text-emphasis'] = true; // default: depending on individual properties
  whiteList['text-emphasis-color'] = true; // default: currentColor
  whiteList['text-emphasis-position'] = true; // default: over right
  whiteList['text-emphasis-style'] = true; // default: none
  whiteList['text-height'] = true; // default: auto
  whiteList['text-indent'] = true; // default: 0
  whiteList['text-justify'] = true; // default: auto
  whiteList['text-orientation'] = true; // default: mixed
  whiteList['text-overflow'] = true; // default: clip
  whiteList['text-shadow'] = true; // default: none
  whiteList['text-space-collapse'] = true; // default: collapse
  whiteList['text-transform'] = true; // default: none
  whiteList['text-underline-position'] = true; // default: auto
  whiteList['text-wrap'] = true; // default: normal
  whiteList['top'] = false; // default: auto
  whiteList['transform'] = false; // default: none
  whiteList['transform-origin'] = false; // default: 50% 50% 0
  whiteList['transform-style'] = false; // default: flat
  whiteList['transition'] = false; // default: depending on individual properties
  whiteList['transition-delay'] = false; // default: 0s
  whiteList['transition-duration'] = false; // default: 0s
  whiteList['transition-property'] = false; // default: all
  whiteList['transition-timing-function'] = false; // default: ease
  whiteList['unicode-bidi'] = false; // default: normal
  whiteList['vertical-align'] = false; // default: baseline
  whiteList['visibility'] = false; // default: visible
  whiteList['voice-balance'] = false; // default: center
  whiteList['voice-duration'] = false; // default: auto
  whiteList['voice-family'] = false; // default: implementation dependent
  whiteList['voice-pitch'] = false; // default: medium
  whiteList['voice-range'] = false; // default: medium
  whiteList['voice-rate'] = false; // default: normal
  whiteList['voice-stress'] = false; // default: normal
  whiteList['voice-volume'] = false; // default: medium
  whiteList['volume'] = false; // default: medium
  whiteList['white-space'] = false; // default: normal
  whiteList['widows'] = false; // default: 2
  whiteList['width'] = true; // default: auto
  whiteList['will-change'] = false; // default: auto
  whiteList['word-break'] = true; // default: normal
  whiteList['word-spacing'] = true; // default: normal
  whiteList['word-wrap'] = true; // default: normal
  whiteList['wrap-flow'] = false; // default: auto
  whiteList['wrap-through'] = false; // default: wrap
  whiteList['writing-mode'] = false; // default: horizontal-tb
  whiteList['z-index'] = false; // default: auto

  return whiteList;
}


/**
 * 匹配到白名单上的一个属性时
 *
 * @param {String} name
 * @param {String} value
 * @param {Object} options
 * @return {String}
 */
function onAttr (name, value, options) {
  // do nothing
}

/**
 * 匹配到不在白名单上的一个属性时
 *
 * @param {String} name
 * @param {String} value
 * @param {Object} options
 * @return {String}
 */
function onIgnoreAttr (name, value, options) {
  // do nothing
}

var REGEXP_URL_JAVASCRIPT = /javascript\s*\:/img;

/**
 * 过滤属性值
 *
 * @param {String} name
 * @param {String} value
 * @return {String}
 */
function safeAttrValue(name, value) {
  if (REGEXP_URL_JAVASCRIPT.test(value)) return '';
  return value;
}


exports.whiteList = getDefaultWhiteList();
exports.getDefaultWhiteList = getDefaultWhiteList;
exports.onAttr = onAttr;
exports.onIgnoreAttr = onIgnoreAttr;
exports.safeAttrValue = safeAttrValue;


/***/ }),

/***/ "/deD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _report = __webpack_require__("5bB2");

var _report2 = _interopRequireDefault(_report);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var linkTextAid = _report2.default.transAID({
    position: "transferlist",
    function: "space",
    action: "linktext_upload"
});

exports.default = {
    watch: {
        hasTask: function hasTask(newValue) {
            if (newValue === true) {
                _report2.default.tdwReport("weiyun-vip_linktext-show", {
                    common_ext: {
                        position: "transferlist",
                        function: "space",
                        aid: linkTextAid
                    }
                });
            }
        }
    },

    computed: {
        isVip: function isVip() {
            return this.$store.getters['userInfo/vip'];
        },
        isSuperVip: function isSuperVip() {
            return this.$store.getters['userInfo/superVip'];
        },
        taskRootNode: function taskRootNode() {
            return this.$store.state.manager.taskRootNode;
        },
        hasTask: function hasTask() {
            return this.taskRootNode.getAllTasks().length > 0;
        },
        remainHighSpeedFlow: function remainHighSpeedFlow() {
            return this.$store.getters['userInfo/remainHighSpeedFlow'];
        },
        textTips: function textTips() {
            if (this.isSuperVip) {
                if (this.remainHighSpeedFlow > 0) return '超级会员尊享极速上传中';
                return '极速上传流量已用完，恢复至普通速度';
            }
            return '超级会员尊享极速上传';
        }
    },
    methods: {
        goVipPage: function goVipPage() {
            _report2.default.tdwReport("weiyun-vip_linktext-click", {
                common_ext: {
                    position: "transferlist",
                    function: "space",
                    aid: linkTextAid
                }
            });
            this.$store.dispatch('control/buyVip', linkTextAid);
        }
    }
};

/***/ }),

/***/ "08hg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});


function getLongTimeByFile(file, callback) {
    if (!window.URL) {
        callback();
        return;
    }

    var video = document.createElement('video');
    video.preload = 'metadata';
    video.onloadedmetadata = function () {
        window.URL.revokeObjectURL(video.src);
        callback(parseInt(video.duration * 1000));
    };

    video.src = URL.createObjectURL(file);;
}

exports.default = {
    getLongTimeByFile: getLongTimeByFile
};

/***/ }),

/***/ "0Zbq":
/***/ (function(module, exports, __webpack_require__) {

/**
 * cssfilter
 *
 * @author 老雷<leizongmin@gmail.com>
 */

var DEFAULT = __webpack_require__("/cOS");
var FilterCSS = __webpack_require__("huvo");


/**
 * XSS过滤
 *
 * @param {String} css 要过滤的CSS代码
 * @param {Object} options 选项：whiteList, onAttr, onIgnoreAttr
 * @return {String}
 */
function filterCSS (html, options) {
  var xss = new FilterCSS(options);
  return xss.process(html);
}


// 输出
exports = module.exports = filterCSS;
exports.FilterCSS = FilterCSS;
for (var i in DEFAULT) exports[i] = DEFAULT[i];

// 在浏览器端使用
if (typeof window !== 'undefined') {
  window.filterCSS = module.exports;
}


/***/ }),

/***/ "0noh":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var B = 1;
var KB = 1024 * B;
var MB = 1024 * KB;
var GB = 1024 * MB;
var TB = 1024 * GB;

var spaceInfo = {
    FREE_MAX_SPACE: 5 * GB,
    FREE_MAX_SPACE_TEXT: '5GB'
};

module.exports = {
    spaceInfo: spaceInfo,
    spaceUints: {
        B: B,
        KB: KB,
        MB: MB,
        GB: GB,
        TB: TB
    }
};

/***/ }),

/***/ "14s7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__("Zx67");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("Zrlr");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("wxAW");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("zwoO");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("Pf15");

var _inherits3 = _interopRequireDefault(_inherits2);

var _FileNode2 = __webpack_require__("/eiI");

var _FileNode3 = _interopRequireDefault(_FileNode2);

var _extend = __webpack_require__("x2SO");

var _extend2 = _interopRequireDefault(_extend);

var _fileExif = __webpack_require__("1nNM");

var _fileExif2 = _interopRequireDefault(_fileExif);

var _longTime = __webpack_require__("08hg");

var _longTime2 = _interopRequireDefault(_longTime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UploadFileNode = function (_FileNode) {
    (0, _inherits3.default)(UploadFileNode, _FileNode);

    function UploadFileNode(opts) {
        (0, _classCallCheck3.default)(this, UploadFileNode);

        var _this = (0, _possibleConstructorReturn3.default)(this, (UploadFileNode.__proto__ || (0, _getPrototypeOf2.default)(UploadFileNode)).call(this, opts));

        _this._relative_path = opts.relative_path;

        _this._total_size = opts.total_size;

        _this._max_level = opts.max_level;

        _this._error_info = null;

        _this._long_time = 0;

        _this._extra_info = opts.extra_info || {};

        _this._is_sub_file = opts.is_sub_file || false;

        _this._category = opts.category || 'normal';return _this;
    }

    (0, _createClass3.default)(UploadFileNode, [{
        key: 'isSubFile',
        value: function isSubFile() {
            return this._is_sub_file;
        }
    }, {
        key: 'getRelativePath',
        value: function getRelativePath() {
            return this._relative_path;
        }
    }, {
        key: 'getCategory',
        value: function getCategory() {
            return this._category;
        }
    }, {
        key: 'setCategory',
        value: function setCategory(cate) {
            this._category = cate;
        }
    }, {
        key: 'setRawFile',
        value: function setRawFile(file) {
            this._raw_file = file;
        }
    }, {
        key: 'getRawFile',
        value: function getRawFile() {
            return this._raw_file;
        }
    }, {
        key: 'setRawForm',
        value: function setRawForm(form) {
            this._raw_form = form;
        }
    }, {
        key: 'getRawForm',
        value: function getRawForm() {
            return this._raw_form;
        }
    }, {
        key: 'setTotalSize',
        value: function setTotalSize(size) {
            this._total_size = size;
        }
    }, {
        key: 'getTotalSize',
        value: function getTotalSize() {
            return this._total_size;
        }
    }, {
        key: 'setMaxLevel',
        value: function setMaxLevel(level) {
            this._max_level = level;
        }
    }, {
        key: 'getMaxLevel',
        value: function getMaxLevel() {
            return this._max_level;
        }
    }, {
        key: 'setPPdirKey',
        value: function setPPdirKey(key) {
            this._ppdir_key = key;
        }
    }, {
        key: 'setPdirKey',
        value: function setPdirKey(key) {
            this._pdir_key = key;
        }
    }, {
        key: 'setErrorInfo',
        value: function setErrorInfo(info) {
            this._error_info = info;
        }
    }, {
        key: 'getErrorInfo',
        value: function getErrorInfo() {
            return this._error_info;
        }
    }, {
        key: 'extractExtInfo',
        value: function extractExtInfo(callback) {
            var _this2 = this;

            var hasCallback = false;
            if (this._ext_info && this._has_extract_done) {
                callback(this._ext_info);
                hasCallback = true;
                return;
            } else if (this.isImage()) {
                _fileExif2.default.getExifByFile(this._raw_file, function (info) {
                    if (hasCallback) {
                        return;
                    }
                    _this2._ext_info = info;

                    clearTimeout(time);
                    callback(_this2._ext_info);
                    hasCallback = true;
                    _this2._has_extract_done = true;
                });
            } else if (this.isVideo()) {
                _longTime2.default.getLongTimeByFile(this._raw_file, function (longTime) {
                    if (hasCallback) {
                        return;
                    }
                    if (longTime) {
                        _this2._ext_info = _this2._ext_info || {};
                        _this2._ext_info.long_time = longTime;
                        _this2._long_time = longTime;
                    }

                    clearTimeout(time);
                    callback(_this2._ext_info);
                    hasCallback = true;
                    _this2._has_extract_done = true;
                });
            }

            var time = setTimeout(function () {
                !hasCallback && callback();
                hasCallback = true;
            }, 1000);
        }
    }, {
        key: 'setExtraInfo',
        value: function setExtraInfo(info) {
            (0, _extend2.default)(this._extra_info, info);
        }
    }, {
        key: 'getExtraInfo',
        value: function getExtraInfo() {
            return this._extra_info;
        }
    }]);
    return UploadFileNode;
}(_FileNode3.default);

exports.default = UploadFileNode;

/***/ }),

/***/ "1nNM":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _exif = __webpack_require__("S6Y5");

var _exif2 = _interopRequireDefault(_exif);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {

    take_time: 0,

    getExifByFile: function getExifByFile(file, callback) {
        this.take_time = file['lastModified'];
        var me = this;
        _exif2.default.fileExif(file, function (exif_obj) {
            var exif_info;
            if (exif_obj) {
                exif_info = me.getExif(exif_obj);
                if (!exif_info.take_time) {
                    exif_info.take_time = me.take_time;
                }
            } else {
                exif_info = me.getDefaultExif();
            }
            callback(exif_info);
        });
    },
    getDefaultExif: function getDefaultExif() {
        var default_exif = {
            'take_time': this.take_time
        };
        return default_exif;
    },
    getExif: function getExif(obj) {
        var exif_info = {},
            gps_ref = this.getGpsRef(obj);
        exif_info.take_time = this.getTakeTime(obj);
        if (obj.GPSLongitude && !!this.getGps(obj.GPSLongitude[0], obj.GPSLongitude[1], obj.GPSLongitude[2])) {
            exif_info.longitude = this.getGps(obj.GPSLongitude[0], obj.GPSLongitude[1], obj.GPSLongitude[2]);
            if (!gps_ref.GPSLongitude) {
                exif_info.longitude = -exif_info.longitude;
            }
        }
        if (obj.GPSLatitude && !!this.getGps(obj.GPSLatitude[0], obj.GPSLatitude[1], obj.GPSLatitude[2])) {
            exif_info.latitude = this.getGps(obj.GPSLatitude[0], obj.GPSLatitude[1], obj.GPSLatitude[2]);
            if (!gps_ref.GPSLatitude) {
                exif_info.latitude = -exif_info.latitude;
            }
        }
        exif_info.width = obj.PixelXDimension;
        exif_info.height = obj.PixelYDimension;
        return exif_info;
    },

    getTakeTime: function getTakeTime(obj) {
        var time = obj.DateTimeOriginal || obj.DateTime,
            time_str,
            take_time;
        if (!time) {
            return this.take_time;
        } else {
            time_str = time.replace(':', '/').replace(':', '/');
            take_time = new Date(time_str).getTime();
        }
        return take_time;
    },
    getGpsRef: function getGpsRef(obj) {
        var ref = {};
        if (obj.GPSLongitudeRef && obj.GPSLongitudeRef.toLowerCase() == 'e') {
            ref.GPSLongitude = true;
        } else {
            ref.GPSLongitude = false;
        }
        if (obj.GPSLatitudeRef && obj.GPSLatitudeRef.toLowerCase() == 'n') {
            ref.GPSLatitude = true;
        } else {
            ref.GPSLatitude = false;
        }
        return ref;
    },
    getGps: function getGps(degree, min, second) {
        var gps;
        if (Math.abs(degree) > 180.0 || Math.abs(min) > 60.0 || Math.abs(second) > 60.0) {
            return;
        }
        gps = degree;
        gps += min / 60;
        gps += second / 3600;
        return gps;
    }
};

/***/ }),

/***/ "1p47":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _promise = __webpack_require__("//Fk");

var _promise2 = _interopRequireDefault(_promise);

var _defineProperty2 = __webpack_require__("bOdI");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _vue = __webpack_require__("7+uW");

var _vue2 = _interopRequireDefault(_vue);

var _constants = __webpack_require__("4Uv1");

var _constants2 = _interopRequireDefault(_constants);

var _request = __webpack_require__("yS1T");

var _request2 = _interopRequireDefault(_request);

var _support = __webpack_require__("Im35");

var _support2 = _interopRequireDefault(_support);

var _FileNode = __webpack_require__("/eiI");

var _FileNode2 = _interopRequireDefault(_FileNode);

var _retMsgs = __webpack_require__("T5wh");

var _retMsgs2 = _interopRequireDefault(_retMsgs);

var _console = __webpack_require__("vK/W");

var _console2 = _interopRequireDefault(_console);

var _storage = __webpack_require__("4R99");

var _storage2 = _interopRequireDefault(_storage);

var _report = __webpack_require__("Vyex");

var _report2 = _interopRequireDefault(_report);

var _wyUploader = __webpack_require__("uOK7");

var _wyUploader2 = _interopRequireDefault(_wyUploader);

var _wyProgress = __webpack_require__("w9vE");

var _wyProgress2 = _interopRequireDefault(_wyProgress);

var _wyToast = __webpack_require__("cYh5");

var _wyToast2 = _interopRequireDefault(_wyToast);

var _wyVipGuide = __webpack_require__("dvKX");

var _wyVipGuide2 = _interopRequireDefault(_wyVipGuide);

var _store = __webpack_require__("+zu9");

var _store2 = _interopRequireDefault(_store);

var _emitter = __webpack_require__("bg3o");

var _emitter2 = _interopRequireDefault(_emitter);

var _wyUploadBox = __webpack_require__("DVMa");

var _wyUploadBox2 = _interopRequireDefault(_wyUploadBox);

var _stat = __webpack_require__("WBZC");

var _stat2 = _interopRequireDefault(_stat);

var _disk = __webpack_require__("eBVp");

var _disk2 = _interopRequireDefault(_disk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UPLOAD_CONSTANTS = {
    CREATE_DIR_THREAD: 6,
    UPLOAD_THREAD: 3,
    RETRY_COUNT: 3,
    FORM_INPUT_CT: 'formFileInputCt',
    FILE_SIZE_100M: 100 * 1024 * 1024,
    FILE_SIZE_200M: 200 * 1024 * 1024,
    BATCH_COUNT_THRESHOLD: 20,
    GUIDE_INTERVAL: 24 * 60 * 60 * 1000 };

var MODULE_TYPES = {
    DISK: 'disk',
    SAFEBOX: 'safebox',
    SHAREDIR: 'sharedir',
    TEAM_FILE: 'teamFile',
    WY_NOTE: 'wyNote'
};

var UPLOAD_SCENES = {
    DISK: 0,
    SHAREDIR: 2,
    SAFEBOX: 3,
    TEAM: 0,
    WY_NOTE: 6
};

var CREATE_TYPES = {
    TOP_LEVEL: 2,
    SUB_DIR: 3 };

var FILE_EXIST_OPTION = 6;

var SPACE_NOT_ENOUGH_CODES = {
    2002014: true,
    1053: true,
    22081: true,
    22111: true,
    22121: true,
    22131: true };

var UPLOAD_TYPES = {
    SECOND: 'second',
    NORMAL: 'normal' };

var VIP_TYPES = {
    NORMAL: 'normal',
    VIP: 'vip',
    SVIP: 'svip'
};

var diskService = void 0;
var console = void 0;
var WyUploadBoxCtor = void 0;
var scanThread = void 0;
var formUploadTipsShowed = false;
var startUploadTime = '';

function initDiskService() {
    var platform = "web";
    var biz = "person";

    if (platform === 'qidian' && biz === 'team') {
        diskService = _disk2.default.namespace('QIDIAN_TEAM');
    } else if (biz === 'team') {
        diskService = _disk2.default.namespace('QCLOUD_TEAM');
    } else {
        diskService = _disk2.default.namespace('WEIYUN_TEAM');
    }
}

function initGlobalVariables() {
    console = _console2.default.namespace('manager');
    WyUploadBoxCtor = _vue2.default.extend(_wyUploadBox2.default);

    scanThread = _support2.default.sliceUpload() && _support2.default.blobWorker() ? Math.ceil((navigator.hardwareConcurrency || 3) / 2) : 1;
}

initDiskService();
initGlobalVariables();

function todayHasShowDownGuide() {
    var lastShowTime = Number(_storage2.default.get('webup_guide_down_client') || 0);
    var hasShown = lastShowTime && Date.now() - lastShowTime < UPLOAD_CONSTANTS.GUIDE_INTERVAL;

    if (!hasShown) {
        _storage2.default.set('webup_guide_down_client', Date.now());
    }

    return hasShown;
}

function shouldShowDownloadGuide(mod, maxFileSize, batchCount) {
    var checkMod = mod !== MODULE_TYPES.SAFEBOX && mod !== MODULE_TYPES.SHAREDIR;
    var checkSize = maxFileSize > UPLOAD_CONSTANTS.FILE_SIZE_200M || batchCount > UPLOAD_CONSTANTS.BATCH_COUNT_THRESHOLD;
    var checkOS = _constants2.default.OS_NAME === 'windows';

    return checkMod && checkSize && checkOS && !todayHasShowDownGuide();
}

function showDownloadClientGuide(submitCallback) {
    _wyVipGuide2.default.show({
        cls: 'mod-popup-down-client',
        msg: '上传超大文件，客户端更稳定',
        desc: '传输大文件、多文件时，微云客户端比网页更稳定',
        btnText: '下载客户端',
        subBtnText: '直接上传',
        submit: function submit() {
            _report2.default.hot('uploadfile_limit_guide_down_client');
            window.open('https://www.weiyun.com/download.html');
        },
        subSubmit: submitCallback
    });
}

function getCurrentModule() {
    return _store2.default.state.nav.curModAlias;
}

function getCurrentDirNode(mod) {
    var _moduleMap;

    var moduleMap = (_moduleMap = {}, (0, _defineProperty3.default)(_moduleMap, MODULE_TYPES.SAFEBOX, function () {
        return _store2.default.state.safebox.curNode;
    }), (0, _defineProperty3.default)(_moduleMap, MODULE_TYPES.SHAREDIR, function () {
        return _store2.default.state.sharedir.curNode;
    }), (0, _defineProperty3.default)(_moduleMap, MODULE_TYPES.TEAM_FILE, function () {
        return _store2.default.state.teamFile.curNode;
    }), (0, _defineProperty3.default)(_moduleMap, MODULE_TYPES.DISK, function () {
        return _store2.default.state.disk.curNode;
    }), _moduleMap);

    var getter = moduleMap[mod];
    return getter ? getter() : null;
}

function setFileNodesCategory(fileNodes, mod) {
    fileNodes.forEach(function (fileNode) {
        if (mod === MODULE_TYPES.SAFEBOX) {
            fileNode.setCategory('safebox');
        } else if (mod === MODULE_TYPES.SHAREDIR) {
            fileNode.setCategory('sharedir');
        } else if (mod === MODULE_TYPES.TEAM_FILE) {
            fileNode.setCategory('team');
            fileNode.setExtraInfo({
                team_uin: _store2.default.state.team.curTeamNode.getTeamUin()
            });
        } else {
            fileNode.setCategory('disk');
        }
    });
}

function getFileStats(fileNodes) {
    var maxFileSize = 0;

    fileNodes.forEach(function (fileNode) {
        maxFileSize = Math.max(maxFileSize, fileNode.getSize());
    });

    return {
        maxFileSize: maxFileSize,
        batchCount: fileNodes.length
    };
}

function setTasksExtraInfo(tasks, mod) {
    if (mod === MODULE_TYPES.SHAREDIR) {
        tasks.forEach(function (task) {
            task.setExtraInfo({
                owner: _store2.default.state.sharedir.curShareDirNode.getOwner()
            });
        });
    } else if (mod === MODULE_TYPES.TEAM_FILE) {
        tasks.forEach(function (task) {
            task.setExtraInfo({
                team_uin: _store2.default.state.team.curTeamNode.getTeamUin()
            });
        });
    }
}

function submitUploadTasks(destDir, fileNodes, mod) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    var tasks = _wyUploader2.default.submitUpload(destDir, fileNodes, options);

    if (mod === MODULE_TYPES.SAFEBOX) {
        _store2.default.commit('manager/getSafeboxTask');
    } else {
        setTasksExtraInfo(tasks, mod);
        _store2.default.commit('manager/addTasks', tasks);
    }

    _stat2.default.addBatchTasks(tasks);
}

function checkUserSpaceStatus() {
    var spaceCleanInfo = _store2.default.state.userInfo.space_clean_info;
    var isTeamPage = location.href.indexOf('/team') >= 0;

    if (spaceCleanInfo.user_status === 1 && !isTeamPage) {
        _store2.default.dispatch('userInfo/showSpaceDialog', {
            isShow: true,
            isFromActionForbidden: true
        });
        return false;
    }

    return true;
}

function showBrowserUpgradeTip() {
    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '当前浏览器上传成功率较低，请';

    _wyToast2.default.warn({
        message: message,
        actionText: '升级浏览器',
        actionClick: function actionClick() {
            _store2.default.commit('control/goUpdateBrowser');
        }
    });
}

function handleBeforeSelect(dirs) {
    if (dirs.length) {
        _wyProgress2.default.show('正在分析文件夹');
    }
}

function handleAfterSelect(dirNodes, fileNodes) {
    _wyProgress2.default.hide();

    var mod = getCurrentModule();
    var allNodes = dirNodes.concat(fileNodes);

    console.log('start select upload ' + mod + ' dest, file count: ' + fileNodes.length + ', folder count: ' + dirNodes.length);

    if (!_support2.default.sliceUpload() && mod === MODULE_TYPES.TEAM_FILE) {
        showBrowserUpgradeTip('当前浏览器无法上传文件，请');
        return;
    }

    setFileNodesCategory(allNodes, mod);

    var _getFileStats = getFileStats(allNodes),
        maxFileSize = _getFileStats.maxFileSize,
        batchCount = _getFileStats.batchCount;

    if (shouldShowDownloadGuide(mod, maxFileSize, batchCount)) {
        showDownloadClientGuide(function () {
            selectUploadDest(allNodes);
        });
    } else {
        selectUploadDest(allNodes);
    }

    if (!_support2.default.sliceUpload() && !formUploadTipsShowed) {
        showBrowserUpgradeTip();
        formUploadTipsShowed = true;
    }
}

function handleBeforeDnd() {
    _wyProgress2.default.show('正在分析...');
}

function handleAfterDnd(dirNodes, fileNodes) {
    _wyProgress2.default.hide();

    if (!checkUserSpaceStatus()) {
        return;
    }

    var mod = getCurrentModule();
    var destDir = getCurrentDirNode(mod);
    var allNodes = dirNodes.concat(fileNodes);

    console.log('start dnd upload ' + mod + ' dest ' + destDir.getName() + ', file count: ' + fileNodes.length + ', folder count: ' + dirNodes.length);

    setFileNodesCategory(allNodes, mod);

    var _getFileStats2 = getFileStats(allNodes),
        maxFileSize = _getFileStats2.maxFileSize,
        batchCount = _getFileStats2.batchCount;

    if (mod === MODULE_TYPES.SAFEBOX) {
        submitUploadTasks(destDir, allNodes, mod, { name: 'safebox' });
        return;
    }

    if (shouldShowDownloadGuide(mod, maxFileSize, batchCount)) {
        showDownloadClientGuide(function () {
            submitUploadTasks(destDir, allNodes, mod);
        });
    } else {
        submitUploadTasks(destDir, allNodes, mod);
    }
}

function canDndUpload() {
    var mod = getCurrentModule();

    if (mod === MODULE_TYPES.DISK) {
        return true;
    }

    if (mod === MODULE_TYPES.TEAM_FILE && _store2.default.getters['teamFile/uploadEnable']) {
        return true;
    }

    if (mod === MODULE_TYPES.SAFEBOX && _store2.default.state.safebox.status === 'opened') {
        return true;
    }

    if (mod === MODULE_TYPES.SHAREDIR && !_store2.default.getters['sharedir/inRootNode']) {
        return true;
    }

    return false;
}

function handleDndFail(error) {
    _wyProgress2.default.hide();
    _wyToast2.default.error(error.message);
    console.log('dnd upload error: ' + error.message);
}

function init() {
    _wyUploader2.default.config({
        createDirThread: UPLOAD_CONSTANTS.CREATE_DIR_THREAD,
        scanThread: scanThread,
        uploadThread: UPLOAD_CONSTANTS.UPLOAD_THREAD,
        retryCount: UPLOAD_CONSTANTS.RETRY_COUNT,
        formInputCt: UPLOAD_CONSTANTS.FORM_INPUT_CT,
        dndEnable: true,
        dndCt: document.body,

        beforeSelect: handleBeforeSelect,
        afterSelect: handleAfterSelect,
        beforeDnd: handleBeforeDnd,
        afterDnd: handleAfterDnd,
        canDnd: canDndUpload,
        handleDndFail: handleDndFail
    });

    _wyUploader2.default.addProcessor('disk', {
        createDir: function createDir(task, dirNode) {
            return new _promise2.default(function (resolve, reject) {
                var data = {
                    pdir_key: dirNode.getPdirKey(),
                    ppdir_key: dirNode.getPPdirKey(),
                    dir_name: dirNode.getName()
                };

                if (dirNode.getPdirKey() === task.getDestDirNode().getId()) {
                    data.create_type = 2;
                } else {
                    data.create_type = 3;
                }

                _request2.default.webapp({
                    protocol: 'weiyunQdiskClient',
                    name: 'DiskDirCreate',
                    cmd: 2614,
                    data: data
                }).then(function (res) {
                    dirNode.setId(res.dir_key);
                    _store2.default.dispatch('disk/insertFileNode', {
                        fileInfo: res,
                        destDirKey: dirNode.getPdirKey()
                    });
                    resolve(res);
                }, function (error) {
                    console.log('disk createdir ' + dirNode.getName() + ' fail: ret: ' + error.ret + ' msg: ' + error.msg);
                    reject(error);
                });
            });
        },
        verify: function verify(task) {
            if (task.getSize() + _store2.default.state.userInfo.used_space > _store2.default.state.userInfo.total_space) {
                _store2.default.dispatch('control/showVipGuide', 'space');
                return {
                    ret: 2002014
                };
            }
        },
        beforePreUpload: function beforePreUpload(task) {
            startUploadTime = new Date();
            var fileNode = task.getFileNode();
            var re_file_name = fileNode.getName().replace(/(^\.*|\.*$)/g, '');
            var req = {
                ppdir_key: fileNode.getPPdirKey() || '',
                pdir_key: fileNode.getPdirKey() || '',
                file_size: fileNode.getSize(),
                filename: re_file_name,
                file_exist_option: 6,
                use_mutil_channel: true,
                file_sha: task._sha,
                file_md5: task._md5
            };

            if (fileNode.isImage() || fileNode.isVideo()) {
                req.ext_info = fileNode.getExtInfo();
            }

            if (fileNode.isSubFile()) {
                req.ext_info = req.ext_info || {};
                req.ext_info.file_upload_type = 1;
            }
            req = {
                common_upload_req: req,
                upload_scr: 0
            };

            return {
                reqData: req
            };
        },
        handlePreUploadDone: function handlePreUploadDone(task, result) {
            console.log('preupload done filename: ' + task.getFileNode().getName() + ' file_exist ' + result.file_exist + ' flow_state: ' + result.flow_state);
            var isVip = _store2.default.getters['userInfo/vip'];

            task.getFileNode().setId(result.common_upload_rsp.file_id);

            if (!result.file_exist && result.flow_state != 1) {
                _store2.default.commit('manager/setUploadingTipShowed', true);
            }

            var high_speed_flow_info = _store2.default.state.userInfo.high_speed_flow_info;
            var remain_flow = high_speed_flow_info.total_flow_size - high_speed_flow_info.used_flow_size;
            if (isVip && remain_flow - result.common_upload_rsp.flow_file_size < 0) {
                _store2.default.commit('manager/setFlowNotEnough', true);
            }
        },
        handleUploadPieceDone: function handleUploadPieceDone(task, result) {},
        handleUploadDone: function handleUploadDone(task) {
            var fileNode = task.getFileNode();
            if (task.getUploadMode() === 'form') {
                _store2.default.dispatch('disk/refresh');
                return;
            }

            var info = task.getPreUploadInfo().common_upload_rsp;

            var fileInfo = {
                file_id: info.file_id,
                filename: info.filename,
                file_ctime: info.file_ctime,
                file_mtime: info.file_mtime,
                file_size: fileNode.getSize(),
                file_version: info.file_version
            };

            if (_store2.default.state.disk) {
                _store2.default.dispatch('disk/insertFileNode', {
                    fileInfo: fileInfo,
                    destDirKey: fileNode.getPdirKey()
                });
            }

            _store2.default.commit('control/setRecentNeedUpdate', true);
            uploadReport('disk', task);
        },
        handleUploadError: function handleUploadError(task) {
            var ret = task.getErrorInfo().ret;
            if (_retMsgs2.default.isSpaceNotEnough(ret)) {
                _store2.default.commit('manager/setSpaceNotEnough', true);
                _store2.default.dispatch('control/showVipGuide', 'space');
            } else if (_retMsgs2.default.isLoginInvalid(ret)) {
                _store2.default.commit('userInfo/showLogin');
            } else if (_retMsgs2.default.isUserChanged(ret)) {
                _store2.default.dispatch('userInfo/showRefreshTip');
            }

            uploadReport('disk', task);
            console.log('upload fail filename: ' + task.getFileNode().getName() + ' ret: ' + ret);
        }
    });

    _wyUploader2.default.addProcessor('safebox', {
        createDir: function createDir(task, dirNode) {
            return new _promise2.default(function (resolve, reject) {

                var data = {
                    pdir_key: dirNode.getPdirKey(),
                    ppdir_key: dirNode.getPPdirKey(),
                    dir_name: dirNode.getName()
                };

                if (dirNode.getPdirKey() === task.getDestDirNode().getId()) {} else {
                    data.create_type = 3;
                }

                data = {
                    safe_req: data,
                    safe_token: _store2.default.state.safebox.safeToken
                };

                _request2.default.webapp({
                    protocol: 'weiyunSafeBox',
                    name: 'SafeBoxDirCreate',
                    cmd: 28431,
                    data: data
                }).then(function (res) {
                    _store2.default.commit('safebox/refreshSafeToken', res.safe_token);
                    res = res.safe_rsp;
                    dirNode.setId(res.dir_key);
                    _store2.default.dispatch('safebox/insertFileNode', {
                        fileInfo: res,
                        destDirKey: dirNode.getPdirKey()
                    });
                    resolve(res);
                }, function (error) {
                    console.log('safebox createdir ' + dirNode.getName() + ' fail: ret: ' + error.ret + ' msg: ' + error.msg);
                    reject(error);
                });
            });
        },
        verify: function verify(task) {
            if (task.getSize() + _store2.default.state.userInfo.used_space > _store2.default.state.userInfo.total_space) {
                return {
                    ret: 2002014
                };
            }
        },
        beforePreUpload: function beforePreUpload(task) {
            startUploadTime = new Date();
            var fileNode = task.getFileNode();
            var re_file_name = fileNode.getName().replace(/(^\.*|\.*$)/g, '');
            var req = {
                ppdir_key: fileNode.getPPdirKey() || '',
                pdir_key: fileNode.getPdirKey() || '',
                file_size: fileNode.getSize(),
                filename: re_file_name,
                file_exist_option: 6,
                use_mutil_channel: true,
                file_sha: task._sha,
                file_md5: task._md5
            };

            if (fileNode.isImage() || fileNode.isVideo()) {
                req.ext_info = fileNode.getExtInfo();
            }

            req = {
                safe_box_upload_req: {
                    safe_req: req
                },
                upload_scr: 3
            };

            return {
                reqData: req
            };
        },
        handlePreUploadDone: function handlePreUploadDone(task, result) {
            console.log('preupload done filename: ' + task.getFileNode().getName() + ' file_exist ' + result.file_exist + ' flow_state: ' + result.flow_state);

            task.getFileNode().setId(result.safe_box_upload_rsp.safe_rsp.file_id);

            if (!result.file_exist && result.flow_state != 1) {
                _store2.default.commit('manager/setUploadingTipShowed', true);
            }
        },
        handleUploadPieceDone: function handleUploadPieceDone(task, result) {},
        handleUploadDone: function handleUploadDone(task) {
            var fileNode = task.getFileNode();
            if (task.getUploadMode() === 'form') {
                _store2.default.dispatch('safebox/refresh');
                return;
            }

            var info = task.getPreUploadInfo().safe_box_upload_rsp.safe_rsp;

            var fileInfo = {
                file_id: info.file_id,
                filename: info.filename,
                file_ctime: info.file_ctime,
                file_mtime: info.file_mtime,
                file_size: fileNode.getSize(),
                file_version: info.file_version
            };

            _store2.default.dispatch('safebox/insertFileNode', {
                fileInfo: fileInfo,
                destDirKey: fileNode.getPdirKey()
            });
            uploadReport('safebox', task);
        },
        handleUploadError: function handleUploadError(task) {
            var ret = task.getErrorInfo().ret;
            if (_retMsgs2.default.isSpaceNotEnough(ret)) {
                _store2.default.commit('manager/setSpaceNotEnough', true);
            } else if (_retMsgs2.default.isLoginInvalid(ret)) {
                _store2.default.commit('userInfo/showLogin');
            } else if (_retMsgs2.default.isUserChanged(ret)) {
                _store2.default.dispatch('userInfo/showRefreshTip');
            } else if (_retMsgs2.default.isSafeBoxError(ret)) {
                _store2.default.dispatch('manager/showSafeBoxError', ret);
            }
            uploadReport('safebox', task);
            console.log('upload fail filename: ' + task.getFileNode().getName() + ' ret: ' + ret);
        }
    });

    _wyUploader2.default.addProcessor('sharedir', {
        createDir: function createDir(task, dirNode) {
            return new _promise2.default(function (resolve, reject) {

                var data = {
                    pdir_key: dirNode.getPdirKey(),
                    ppdir_key: dirNode.getPPdirKey(),
                    dir_name: dirNode.getName(),
                    owner: task.getExtraInfo().owner
                };
                if (dirNode.getPdirKey() === task.getDestDirNode().getId()) {
                    data.batch_info = task.getBatchInfo();
                }

                _request2.default.webapp({
                    protocol: 'weiyunShareDir',
                    name: 'ShareDirSubDirCreate',
                    cmd: 245207,
                    data: data
                }).then(function (res) {
                    dirNode.setId(res.dir_key);
                    _store2.default.dispatch('sharedir/insertFileNode', {
                        fileInfo: res,
                        destDirKey: dirNode.getPdirKey()
                    });
                    resolve(res);
                }, function (error) {
                    console.log('sharedir createdir ' + dirNode.getName() + ' fail: ret: ' + error.ret + ' msg: ' + error.msg);
                    reject(error);
                });
            });
        },
        verify: function verify() {},
        beforePreUpload: function beforePreUpload(task) {
            startUploadTime = new Date();
            var fileNode = task.getFileNode();
            var re_file_name = fileNode.getName().replace(/(^\.*|\.*$)/g, '');
            var req = {
                ppdir_key: fileNode.getPPdirKey() || '',
                pdir_key: fileNode.getPdirKey() || '',
                file_size: fileNode.getSize(),
                filename: re_file_name,
                file_exist_option: 6,
                use_mutil_channel: true,
                file_sha: task._sha,
                file_md5: task._md5
            };

            if (fileNode.isImage() || fileNode.isVideo()) {
                req.ext_info = fileNode.getExtInfo();
            }

            req.batch_info = task.getBatchInfo();
            req.owner = task.isSubTask() ? task.getParent().getExtraInfo().owner : task.getExtraInfo().owner;
            req = {
                share_dir_upload_req: req,
                upload_scr: 2
            };

            return {
                reqData: req
            };
        },
        handlePreUploadDone: function handlePreUploadDone(task, result) {
            console.log('preupload done filename: ' + task.getFileNode().getName() + ' file_exist ' + result.file_exist + ' flow_state: ' + result.flow_state);

            task.getFileNode().setId(result.share_dir_upload_rsp.file_id);

            if (!result.file_exist && result.flow_state != 1) {
                _store2.default.commit('manager/setUploadingTipShowed', true);
            }
        },
        handleUploadPieceDone: function handleUploadPieceDone(task, result) {},
        handleUploadDone: function handleUploadDone(task) {
            var fileNode = task.getFileNode();
            if (task.getUploadMode() === 'form') {
                _store2.default.dispatch('sharedir/refresh');
                return;
            }

            var info = task.getPreUploadInfo().share_dir_upload_rsp;
            var fileInfo = {
                file_id: info.file_id,
                filename: info.filename,
                file_ctime: info.file_ctime,
                file_mtime: info.file_mtime,
                file_size: fileNode.getSize(),
                file_version: info.file_version
            };

            _store2.default.dispatch('sharedir/insertFileNode', {
                fileInfo: fileInfo,
                destDirKey: fileNode.getPdirKey()
            });
            uploadReport('sharedir', task);
            _store2.default.commit('control/setRecentNeedUpdate', true);
        },
        handleUploadError: function handleUploadError(task) {
            var ret = task.getErrorInfo().ret;
            if (_retMsgs2.default.isSpaceNotEnough(ret)) {
                _store2.default.commit('manager/setSpaceNotEnough', true);
            } else if (_retMsgs2.default.isLoginInvalid(ret)) {
                _store2.default.commit('userInfo/showLogin');
            } else if (_retMsgs2.default.isUserChanged(ret)) {
                _store2.default.dispatch('userInfo/showRefreshTip');
            }
            uploadReport('sharedir', task);
            console.log('upload fail filename: ' + task.getFileNode().getName() + ' ret: ' + ret);
        }
    });

    _wyUploader2.default.addProcessor('team', {
        createDir: function createDir(task, dirNode) {
            return new _promise2.default(function (resolve, reject) {

                var createType = void 0;
                if (dirNode.getPdirKey() === task.getDestDirNode().getId()) {
                    createType = 2;
                } else {
                    createType = 3;
                }

                diskService.createDir({
                    pdirKey: dirNode.getPdirKey(),
                    ppdirKey: dirNode.getPPdirKey(),
                    dirName: dirNode.getName(),
                    batchId: task.getBatchInfo().batch_id,
                    createType: createType
                }).then(function (res) {
                    dirNode.setId(res.dir_key);
                    _store2.default.dispatch('teamFile/insertFileNode', {
                        fileInfo: res,
                        destDirKey: dirNode.getPdirKey()
                    });
                    resolve(res);
                }, function (error) {
                    console.log('team createdir ' + dirNode.getName() + ' fail: ret: ' + error.ret + ' msg: ' + error.msg);
                    reject(error);
                });
            });
        },
        verify: function verify(task) {
            var teamData = _store2.default.state.team.curTeamNode.getTeamData();
            if (task.getSize() + teamData.used_space > teamData.total_space) {
                return {
                    ret: 2002014
                };
            }
        },
        beforePreUpload: function beforePreUpload(task) {
            startUploadTime = new Date();
            var fileNode = task.getFileNode();
            var re_file_name = fileNode.getName().replace(/(^\.*|\.*$)/g, '');
            var req = {
                ppdir_key: fileNode.getPPdirKey() || '',
                pdir_key: fileNode.getPdirKey() || '',
                file_size: fileNode.getSize(),
                filename: re_file_name,
                file_exist_option: 6,
                use_mutil_channel: true,
                file_sha: task._sha,
                file_md5: task._md5
            };

            if (fileNode.isImage() || fileNode.isVideo()) {
                req.ext_info = fileNode.getExtInfo();
            }

            if (fileNode.isSubFile()) {
                req.ext_info = req.ext_info || {};
                req.ext_info.file_upload_type = 1;
            }
            req = {
                common_upload_req: req,
                upload_scr: 0
            };

            return {
                extReqHead: {
                    buss_type: _constants2.default.TEAM_BUSS_TYPE,
                    weiyun_team_info: {
                        team_uin: task.isSubTask() ? task.getParent().getExtraInfo().team_uin : task.getExtraInfo().team_uin
                    }
                },
                reqData: req
            };
        },
        handlePreUploadDone: function handlePreUploadDone(task, result) {
            console.log('preupload done filename: ' + task.getFileNode().getName() + ' file_exist ' + result.file_exist + ' flow_state: ' + result.flow_state);


            task.getFileNode().setId(result.common_upload_rsp.file_id);
        },
        handleUploadPieceDone: function handleUploadPieceDone(task, result) {},
        handleUploadDone: function handleUploadDone(task) {
            var fileNode = task.getFileNode();
            if (task.getUploadMode() === 'form') {
                _store2.default.dispatch('teamFile/refresh');
                return;
            }

            var info = task.getPreUploadInfo().common_upload_rsp;

            var fileInfo = {
                file_id: info.file_id,
                filename: info.filename,
                file_ctime: info.file_ctime,
                file_mtime: info.file_mtime,
                file_size: fileNode.getSize(),
                file_version: info.file_version
            };

            if (_store2.default.state.teamFile) {
                _store2.default.dispatch('teamFile/insertFileNode', {
                    fileInfo: fileInfo,
                    destDirKey: fileNode.getPdirKey()
                });
            }
            uploadReport('team', task);
        },
        handleUploadError: function handleUploadError(task) {
            var ret = task.getErrorInfo().ret;
            if (_retMsgs2.default.isSpaceNotEnough(ret)) {
                _store2.default.commit('manager/setSpaceNotEnough', true);
            } else if (_retMsgs2.default.isLoginInvalid(ret)) {
                _store2.default.commit('userInfo/showLogin');
            } else if (_retMsgs2.default.isUserChanged(ret)) {
                _store2.default.dispatch('userInfo/showRefreshTip');
            }
            uploadReport('team', task);
            console.log('upload fail filename: ' + task.getFileNode().getName() + ' ret: ' + ret);
        }
    });

    _wyUploader2.default.addProcessor('wyNote', {
        createDir: function createDir() {
            return new _promise2.default(function () {});
        },
        verify: function verify() {},
        beforePreUpload: function beforePreUpload(task) {
            startUploadTime = new Date();
            var fileNode = task.getFileNode();
            var re_file_name = fileNode.getName().replace(/(^\.*|\.*$)/g, '');
            var file = {
                filename: re_file_name,
                file_size: fileNode.getSize(),
                file_sha: task._sha,
                file_md5: task._md5,
                ext_info: fileNode.getExtInfo()

            };
            var req = {
                files: [file]
            };
            req = {
                note_pre_upload_req: req,
                upload_scr: 6
            };
            return {
                reqData: req
            };
        },
        handlePreUploadDone: function handlePreUploadDone(task, result) {
            var picInfo = result.note_pre_upload_rsp.files[0];
            var picUrl = picInfo.https_raw_url;
            if (_constants2.default.PROTOCOL === 'http:') {
                picUrl = picInfo.http_raw_url;
            }

            _store2.default.commit('wynote/setPicUrl', picUrl + '&size=64');
        },
        handleUploadPieceDone: function handleUploadPieceDone() {},
        handleUploadDone: function handleUploadDone(task) {
            var previewUrl = _store2.default.getters['wynote/getPreviewUrl'];

            var picInfo = task.getPreUploadInfo().note_pre_upload_rsp.files[0];
            var picUrl = picInfo.https_raw_url;
            var index = _store2.default.getters['wynote/getInsertIndex'];
            console.log('wyNote: 图片上传成功');
            var editorContainer = document.querySelector('.ql-editor');
            var imgs = editorContainer.querySelectorAll('img') || [];
            imgs = Array.prototype.slice.call(imgs);
            imgs.forEach(function (img) {
                var src = img.src;
                if (src === previewUrl) {
                    var preContent = window.editor.getContents(index);

                    if (preContent.ops[0].insert === '\n') {
                        index = index + 1;
                    }
                    window.editor.formatText(index, 1, { 'class': '', 'src': picUrl });
                    _store2.default.dispatch('wynote/autoSave');
                    _store2.default.commit('wynote/setUploadStatus', false);
                    return;
                }
            });
            uploadReport('wyNote', task);
        },
        handleUploadError: function handleUploadError(task) {
            _wyToast2.default.error('图片上传出错，请稍后重试');

            var editorContainer = document.querySelector('.ql-editor');
            var imgContainer = document.querySelector('.ql-image-container');
            var wrap = imgContainer.parentNode;

            editorContainer.removeChild(wrap);
            _store2.default.dispatch('wynote/autoSave');
            _store2.default.commit('wynote/setUploadStatus', false);
            uploadReport('wyNote', task);
        }
    });

    _emitter2.default.$on('upload:uploadfile', function () {
        console.log('start select uploadfile');

        if (_store2.default.state.userInfo.space_clean_info.user_status === 1 && location.href.indexOf('/team') < 0) {
            _store2.default.dispatch('userInfo/showSpaceDialog', { isShow: true, isFromActionForbidden: true });
        } else {
            _wyUploader2.default.uploadFile();
        }
    });

    _emitter2.default.$on('upload:uploadfolder', function () {
        console.log('start select uploadfolder');
        if (_store2.default.state.userInfo.space_clean_info.user_status === 1 && location.href.indexOf('/team') < 0) {
            _store2.default.dispatch('userInfo/showSpaceDialog', { isShow: true, isFromActionForbidden: true });
        } else {
            _wyUploader2.default.uploadFolder();
        }
    });
}

function uploadReport(busitype, task) {
    var info = busitype === 'wyNote' || busitype === 'sharedir' || busitype === 'safebox' ? task.getPreUploadInfo() : task.getPreUploadInfo().common_upload_rsp;
    var fileNode = task.getFileNode();
    var fileSize = +(fileNode.getSize() / 1024 / 1024).toFixed(2);
    if (!info) {
        console.error('no info found', busitype, task);
        return;
    }
    var uploadType = info.file_exist ? 'second' : 'normal';

    var vipInfo = _store2.default.state.userInfo.weiyun_vip_info;
    var vipType = 'normal';
    if (!vipInfo) {
        vipType = 'normal';
    } else if (vipInfo.super_vip) {
        vipType = 'svip';
    } else if (vipType.weiyun_vip) {
        vipType = 'vip';
    }

    var obj = {
        appId: _constants2.default.APPID,
        reportId: 'cmjn_weiyun_web_report_upload_v1',

        busitype: busitype
    };

    if (task.getErrorInfo().ret) {
        obj.dimensions = [vipType, uploadType, task.getErrorInfo().ret];
        obj.values = [fileSize, 0, 0, {
            value: 1,
            count: 1,
            policy: 'SUM'
        }];
    } else {
        var usedTime = +((new Date() - startUploadTime) / 1000).toFixed(2);
        var speed = +(1024 * fileSize / usedTime).toFixed(2);
        obj.dimensions = [vipType, uploadType, '0'];
        obj.values = [fileSize, speed, usedTime, {
            value: 1,
            count: 1,
            policy: 'SUM'
        }];
    }
    _report2.default.wseven(obj);
}

function selectUploadDest(fileNodes) {
    var mod = _store2.default.state.nav.curModAlias;
    var rootNode = void 0;
    var destDir = void 0;
    if (mod === 'safebox') {
        destDir = _store2.default.state.safebox.curNode;
        _wyUploader2.default.submitUpload(destDir, fileNodes, { name: 'safebox' });
        _store2.default.commit('manager/getSafeboxTask');
        return;
    } else if (mod === 'disk') {
        destDir = _store2.default.state.disk.curNode;
        var tasks = _wyUploader2.default.submitUpload(destDir, fileNodes);
        _store2.default.commit('manager/addTasks', tasks);
        return;
    } else if (mod === 'sharedir') {
        destDir = _store2.default.state.sharedir.curNode;
        var _tasks = _wyUploader2.default.submitUpload(destDir, fileNodes);
        _tasks.forEach(function (task) {
            task.setExtraInfo({
                owner: _store2.default.state.sharedir.curShareDirNode.getOwner()
            });
        });
        _store2.default.commit('manager/addTasks', _tasks);
        return;
    } else if (mod === 'teamFile') {
        destDir = _store2.default.state.teamFile.curNode;
        var _tasks2 = _wyUploader2.default.submitUpload(destDir, fileNodes);
        _tasks2.forEach(function (task) {
            task.setExtraInfo({
                team_uin: _store2.default.state.team.curTeamNode.getTeamUin()
            });
        });
        _store2.default.commit('manager/addTasks', _tasks2);
        return;
    } else {
        rootNode = new _FileNode2.default({
            dir_key: _store2.default.state.userInfo.main_dir_key,
            pdir_key: _store2.default.state.userInfo.root_dir_key,
            dir_name: '全部'
        });
        destDir = rootNode;
    }

    var instance = new WyUploadBoxCtor({
        el: document.createElement('div'),
        propsData: {
            rootNode: rootNode,
            fileNodes: fileNodes
        },
        data: {
            destDir: destDir
        },
        store: _store2.default
    });

    instance.$on('submit', function (destDir) {
        var tasks = _wyUploader2.default.submitUpload(destDir, fileNodes);
        if (mod === 'sharedir') {
            tasks.forEach(function (task) {
                task.setExtraInfo({
                    owner: _store2.default.state.sharedir.curShareDirNode.getOwner()
                });
            });
        }
        _store2.default.commit('manager/addTasks', tasks);
        _stat2.default.addBatchTasks(tasks);
        close();

        console.log('start select upload ' + mod + ' dest ' + destDir.getName());
    });

    instance.$on('createDir', function (dirInfo, pdirKey) {
        _store2.default.commit(mod + '/createDir', {
            dirInfo: dirInfo,
            pdirKey: pdirKey
        });
    });

    instance.$on('close', function () {
        close();
    });

    function close() {
        instance.$el.parentNode.removeChild(instance.$el);
        instance.$destroy();
        instance = null;
    }

    document.body.appendChild(instance.$el);
}

function todayHasShowDownGuide() {
    var lastShowTime = Number(_storage2.default.get('webup_guide_down_client') || 0);
    if (lastShowTime && Date.now() - lastShowTime < 24 * 60 * 60 * 1000) {
        return true;
    }
    _storage2.default.set('webup_guide_down_client', Date.now());
    return false;
}

exports.default = {
    init: init
};

/***/ }),

/***/ "2r6j":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _subTree = __webpack_require__("IMzu");

var _subTree2 = _interopRequireDefault(_subTree);

var _emitter = __webpack_require__("nhxF");

var _emitter2 = _interopRequireDefault(_emitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'wyTreeItem',
    components: {
        wySubTree: _subTree2.default
    },
    props: {
        fileNode: Object,
        rootExpended: {
            type: Boolean,
            default: true
        },
        noRoot: {
            type: Boolean,
            default: false
        },
        choose: {
            type: Boolean,
            default: false
        },
        step: Number },
    data: function data() {
        return {
            expanded: false,
            tempDirName: '新建文件夹'
        };
    },

    computed: {
        indent: function indent() {
            if (this.noRoot) {
                return (this.step - 1) * 12;
            } else {
                return this.step * 12;
            }
        },
        childNodes: function childNodes() {
            return this.fileNode.getKidDirs();
        },
        empty: function empty() {
            return this.fileNode.isLoadDone() && this.childNodes.length === 0;
        }
    },

    watch: {
        childNodes: function childNodes(nodes) {
            var _this = this;

            nodes.forEach(function (item) {
                if (item.isTempcreate()) {
                    _this.expanded = true;
                }
            });
        }
    },

    created: function created() {
        if (this.step === 0 && this.rootExpended) {
            this.toggleExpand();
        }
        if (this.choose) {
            _emitter2.default.$emit('chooseDir', this.fileNode);
        }
    },


    methods: {
        toggleExpand: function toggleExpand() {
            this.expanded = !this.expanded;
            _emitter2.default.$emit('chooseDir', this.fileNode);
            if (this.expanded && !this.fileNode.isLoadDone()) {
                _emitter2.default.$emit('expandDir', this.fileNode);
            }
        },
        createDir: function createDir() {
            _emitter2.default.$emit('createDir', this.tempDirName);
        }
    }
};

/***/ }),

/***/ "32nd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: {
        fileNodes: Array,
        step: Number,
        rootExpended: {
            type: Boolean,
            default: true
        },
        noRoot: {
            type: Boolean,
            default: false
        }
    },

    beforeCreate: function beforeCreate() {
        this.$options.components.wyTreeItem = __webpack_require__("NAr+").default;
    }
};

/***/ }),

/***/ "4tT4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__("Zrlr");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("wxAW");

var _createClass3 = _interopRequireDefault(_createClass2);

var _cookie = __webpack_require__("bm5r");

var _cookie2 = _interopRequireDefault(_cookie);

var _httpsTool = __webpack_require__("KhWn");

var _httpsTool2 = _interopRequireDefault(_httpsTool);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var uploadFormIframe = void 0;
var formUploadUrl = _httpsTool2.default.translateCgi('http://diffsync.cgi.weiyun.com');

var Form = function () {
    function Form(task) {
        (0, _classCallCheck3.default)(this, Form);

        this.task = task;
    }

    (0, _createClass3.default)(Form, [{
        key: 'upload',
        value: function upload() {
            var _this = this;

            var fileNode = this.task.getFileNode();
            var form = this.task.getFileNode().getRawForm();

            initForm(form);

            var sendParam = {
                name: 'web',
                ppdir: fileNode.getPPdirKey(),
                pdir: fileNode.getPdirKey(),

                p_skey: _cookie2.default.get('p_skey')
            };

            this.task.log('formupload start');

            if (!this._has_append_form_input) {
                for (var key in sendParam) {
                    var input = document.createElement('input');
                    input.type = 'hidden';
                    input.name = key;
                    input.value = sendParam[key];
                    form.appendChild(input);
                    this._has_append_form_input = true;
                    this._form_upload_re = 5;
                }
            }

            this.task.log('formUpload start');

            try {
                form.submit();
            } catch (e) {
                this.task.log('formupload submit error');
                if (this._form_upload_re !== 0) {
                    this.upload();
                    return;
                }

                setTimeout(function () {
                    _this.task.setErrorInfo({
                        ret: 2002016
                    });
                    _this.task.changeState('error');
                }, 50);

                return;
            }

            window.weiyun_post_end = function (json) {

                clearTimeout(timer);
                form.reset();

                if (_this.task.getState() === 'stop') {
                    return;
                }

                setTimeout(function () {
                    if (json.ret === 0) {
                        _this.task.changeState('done');
                    } else {
                        _this.task.setErrorInfo({
                            ret: json.ret

                        });
                        _this.task.changeState('error');
                    }
                }, 0);
            };

            var timer = setTimeout(function () {
                _this.task.setErrorInfo({
                    ret: 10001,
                    msg: '(10001)上传超时，请稍后重试'
                });
                _this.task.changeState('error');
            }, 180000);
        }
    }]);
    return Form;
}();

function initForm(form) {
    if (!uploadFormIframe) {
        var id = '_form_upload_iframe_';
        var iframe = document.createElement('iframe');
        iframe.name = id;
        iframe.id = id;
        iframe.style.display = 'none';
        iframe.tabindex = '-1';
        iframe.hideFocus = 'hidefocus';
        iframe.src = 'javascript:void(function(){document.open(); document.domain = "weiyun.com";console.log();document.close();}());';
        document.body.appendChild(iframe);
        uploadFormIframe = iframe;
    }

    form.method = 'post';
    form.action = formUploadUrl;
    form.target = '_form_upload_iframe_';
    form.enctype = 'multipart/form-data';
    form.style.position = 'absolute';
    form.style.left = '-9999px';
    form.style.top = '-9999px';

    document.body.appendChild(form);

    return form;
}

exports.default = Form;

/***/ }),

/***/ "4zSg":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_task_safebox_login_vue__ = __webpack_require__("oIHS");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_task_safebox_login_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_task_safebox_login_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_task_safebox_login_vue__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_task_safebox_login_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c0371db0_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_task_safebox_login_vue__ = __webpack_require__("KwJJ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("XyMi");
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_task_safebox_login_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c0371db0_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_task_safebox_login_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c0371db0_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_task_safebox_login_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "5Jc6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_task_vip_guide_vue__ = __webpack_require__("/deD");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_task_vip_guide_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_task_vip_guide_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_task_vip_guide_vue__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_task_vip_guide_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_62006b72_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_task_vip_guide_vue__ = __webpack_require__("wrey");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("XyMi");
function injectStyle (context) {
  __webpack_require__("CfXi")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_task_vip_guide_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_62006b72_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_task_vip_guide_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_62006b72_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_task_vip_guide_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "5PBU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showed),expression:"showed"}],staticClass:"ui-dnd",staticStyle:{"position":"fixed","z-index":"9999","background-color":"rgb(249, 245, 245)","opacity":"0.2","border":"5px solid","border-style":"dashed","top":"0px","left":"0px"},attrs:{"id":"_dnd"}},[_c('div',{staticStyle:{"top":"50%","left":"50%","margin-left":"-50px","margin-top":"-50px","font-size":"24px","opacity":"1","position":"absolute"}},[_vm._v("文件拖放到此处")])])}
var staticRenderFns = []


/***/ }),

/***/ "5p0q":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"dirbox-tree"},[_c('ul',{staticClass:"dirbox-tree-body"},[_c('wy-tree-item',{attrs:{"fileNode":_vm.rootNode,"rootExpended":_vm.rootExpended,"noRoot":_vm.noRoot,"step":0}})],1)])}
var staticRenderFns = []


/***/ }),

/***/ "6+KG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wyConfirm = __webpack_require__("IGnx");

var _wyConfirm2 = _interopRequireDefault(_wyConfirm);

var _wyManagerHeader = __webpack_require__("GZDe");

var _wyManagerHeader2 = _interopRequireDefault(_wyManagerHeader);

var _taskBreadcrumb = __webpack_require__("+DeM");

var _taskBreadcrumb2 = _interopRequireDefault(_taskBreadcrumb);

var _taskToolbar = __webpack_require__("pAxX");

var _taskToolbar2 = _interopRequireDefault(_taskToolbar);

var _taskSafeboxLogin = __webpack_require__("4zSg");

var _taskSafeboxLogin2 = _interopRequireDefault(_taskSafeboxLogin);

var _taskList = __webpack_require__("OZHb");

var _taskList2 = _interopRequireDefault(_taskList);

var _taskEmpty = __webpack_require__("GQfk");

var _taskEmpty2 = _interopRequireDefault(_taskEmpty);

var _taskVipGuide = __webpack_require__("5Jc6");

var _taskVipGuide2 = _interopRequireDefault(_taskVipGuide);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {

    components: {
        wyManagerHeader: _wyManagerHeader2.default,
        taskBreadcrumb: _taskBreadcrumb2.default,
        taskToolbar: _taskToolbar2.default,
        taskSafeboxLogin: _taskSafeboxLogin2.default,
        taskList: _taskList2.default,
        taskEmpty: _taskEmpty2.default,
        taskVipGuide: _taskVipGuide2.default
    },

    data: function data() {
        return {
            confirming: false,
            expand: true };
    },


    computed: {
        managerState: function managerState() {
            return this.$store.getters['manager/managerState'];
        },
        uploadTaskQueue: function uploadTaskQueue() {
            return this.$store.state.manager.uploadTaskQueue;
        },
        downloadTaskQueue: function downloadTaskQueue() {
            return this.$store.state.manager.downloadTaskQueue;
        },
        offlineTaskQueue: function offlineTaskQueue() {
            return this.$store.state.manager.offlineTaskQueue;
        },
        taskRootNode: function taskRootNode() {
            return this.$store.state.manager.taskRootNode;
        },
        hasTask: function hasTask() {
            return this.taskRootNode.getAllTasks().length > 0;
        },
        hasRunTask: function hasRunTask() {
            var has = false;
            var tasks = this.taskRootNode.getAllTasks();
            for (var i = 0, len = tasks.length; i < len; i++) {
                if (tasks[i].getState() !== 'pause' && tasks[i].getState() !== 'done') {
                    has = true;
                    break;
                }
            }
            return has;
        },
        stateCls: function stateCls() {
            var cls = '';

            if (this.expand) {
                cls += 'expand';
            }

            if (this.isShowGuide) {
                cls += ' show-guide';
            }

            if (this.inSubdir) {
                cls += ' subdir';
            }

            if (this.isVip && !this.isFlowNotEnough || this.isTeamMode || this.isTempVip) {
                cls += ' vip';
            }

            if (this.managerState === 'running') {
                cls += ' ing';
            } else if (this.managerState === 'error') {
                cls += ' fail';
            } else if (this.managerState === 'complete') {} else if (this.managerState === 'pause') {
                cls += ' cancel';
            }

            return cls;
        },
        inSubdir: function inSubdir() {
            return !!this.curMutiTask;
        },
        isEmpty: function isEmpty() {
            if (this.uploadTaskQueue.getTotal() === 0 && this.offlineTaskQueue.getTotal() === 0 && this.downloadTaskQueue.getTotal() === 0) {
                return true;
            }
            return false;
        },
        isVip: function isVip() {
            return this.$store.getters['userInfo/vip'];
        },
        isSuperVip: function isSuperVip() {
            return this.$store.getters['userInfo/superVip'];
        },
        isFlowNotEnough: function isFlowNotEnough() {
            return this.$store.state.manager.flowNotEnough;
        },
        isSpaceNotEnough: function isSpaceNotEnough() {
            return this.$store.state.manager.spaceNotEnough;
        },
        isTeamMode: function isTeamMode() {
            return this.$store.state.control.diskMode === 'team';
        },
        isShowGuide: function isShowGuide() {
            return (!this.isVip || this.isFlowNotEnough || this.isSpaceNotEnough) && !this.isSuperVip && !this.isTeamMode;
        },
        isTempVip: function isTempVip() {
            return this.$store.state.manager.tempVip;
        },
        curMutiTask: function curMutiTask() {
            return this.$store.state.manager.curMutiTask;
        },
        taskList: function taskList() {
            return this.taskRootNode.getAllTasks();
        },
        subTaskList: function subTaskList() {
            if (this.curMutiTask) {
                if (this.curMutiTask.getType() === 'belong' && this.curMutiTask.getBelongInfo().name === 'safebox') {
                    return this.curMutiTask.getSubTasks();
                } else {
                    return this.curMutiTask.getSubExecuteTasks();
                }
            }
            return [];
        },
        shouldShowSafeboxLogin: function shouldShowSafeboxLogin() {
            if (this.curMutiTask && this.curMutiTask.getType() === 'belong' && this.curMutiTask.getBelongInfo().name === 'safebox') {
                return this.$store.state.safebox && this.$store.state.safebox.loginTimeout;
            }
            return false;
        }
    },

    methods: {
        toggleExpand: function toggleExpand() {
            this.expand = !this.expand;
        },
        close: function close() {
            var _this = this;

            if (this.confirming) {
                return;
            }
            if (this.hasRunTask) {
                this.confirming = true;
                _wyConfirm2.default.alert({
                    title: '清除任务',
                    msg: '您还有任务在进行中，确定要清除吗',
                    desc: '',
                    ok: function ok() {
                        _this.confirming = false;
                        _this.$store.dispatch('manager/clearAll');
                    },
                    cancel: function cancel() {
                        _this.confirming = false;
                    }
                });
            } else {
                this.$store.dispatch('manager/clearAll');
            }
        }
    },

    created: function created() {
        if (!this.isVip) {
            this.$store.dispatch('manager/loadCouponInfo');
        }
    }
};

/***/ }),

/***/ "7I6H":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _offline = __webpack_require__("k3xn");

var _offline2 = _interopRequireDefault(_offline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _offline2.default;

/***/ }),

/***/ "8oD/":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__("Zrlr");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("wxAW");

var _createClass3 = _interopRequireDefault(_createClass2);

var _vue = __webpack_require__("7+uW");

var _vue2 = _interopRequireDefault(_vue);

var _extend = __webpack_require__("x2SO");

var _extend2 = _interopRequireDefault(_extend);

var _config = __webpack_require__("QIop");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BaseTask = function () {
    function BaseTask(opts) {
        (0, _classCallCheck3.default)(this, BaseTask);


        this._id = opts.id || new Date().getTime() + '_' + BaseTask.taskIndex++;
        this._name = opts.name || 'base task';
        this._type = opts.type;
        this._processed = 0;
        this._size = 0;
        this._state = 'wait';
        this._error_info = {};

        this._speed = 0;

        this._batch_id = opts.batchId;
        this._batch_total = opts.batchTotal;
        this._batch_index = opts.batchIndex;

        this._extra_info = {};
    }

    (0, _createClass3.default)(BaseTask, [{
        key: 'getId',
        value: function getId() {
            return this._id;
        }
    }, {
        key: 'getType',
        value: function getType() {
            return this._type;
        }
    }, {
        key: 'getState',
        value: function getState() {
            return this._state;
        }
    }, {
        key: 'getName',
        value: function getName() {
            return this._name;
        }
    }, {
        key: 'getSize',
        value: function getSize() {
            return this._size;
        }
    }, {
        key: 'getProcessed',
        value: function getProcessed() {
            return this._processed;
        }
    }, {
        key: 'getProcessedPercent',
        value: function getProcessedPercent() {
            return this.getProcessed() / this.getSize();
        }
    }, {
        key: 'getErrorInfo',
        value: function getErrorInfo() {
            return this._error_info;
        }
    }, {
        key: 'setErrorInfo',
        value: function setErrorInfo(error) {
            this._error_info = error;
            this._error_info.msg = _config2.default.retMsgs.get(this._error_info.ret, error.msg);
        }
    }, {
        key: 'hasSubTask',
        value: function hasSubTask() {
            return false;
        }
    }, {
        key: 'getSaveTime',
        value: function getSaveTime() {
            return 0;
        }
    }, {
        key: 'getSpeed',
        value: function getSpeed() {
            return this._speed;
        }
    }, {
        key: 'setIgnoreSaveTime',
        value: function setIgnoreSaveTime(ignore) {
            this._ignore_save_time = ignore;
        }
    }, {
        key: 'isIgnoreSaveTime',
        value: function isIgnoreSaveTime() {
            return this._ignore_save_time;
        }
    }, {
        key: 'setIgnoreCalcProcessed',
        value: function setIgnoreCalcProcessed(ignore) {
            this._ignore_calc_processed = ignore;
        }
    }, {
        key: 'isIgnoreCalcProcessed',
        value: function isIgnoreCalcProcessed() {
            return this._ignore_calc_processed;
        }
    }, {
        key: 'setParent',
        value: function setParent(parent) {
            this._parent = parent;
        }
    }, {
        key: 'getParent',
        value: function getParent() {
            return this._parent;
        }
    }, {
        key: 'isSubTask',
        value: function isSubTask() {
            return !!this._parent;
        }
    }, {
        key: 'setBatchInfo',
        value: function setBatchInfo(info) {
            this._batch_id = info.batchId + '';
            this._batch_total = info.batchTotal;
            this._batch_index = info.batchIndex;
        }
    }, {
        key: 'getBatchInfo',
        value: function getBatchInfo() {
            return {
                batch_id: this._batch_id,
                batch_total: this._batch_total,
                current_index: this._batch_index
            };
        }
    }, {
        key: 'setExtraInfo',
        value: function setExtraInfo(info) {
            (0, _extend2.default)(this._extra_info, info);
        }
    }, {
        key: 'getExtraInfo',
        value: function getExtraInfo() {
            return this._extra_info;
        }
    }, {
        key: 'isDone',
        value: function isDone() {
            return this._state === 'done';
        }
    }, {
        key: 'isSpeedUp',
        value: function isSpeedUp() {
            return false;
        }
    }, {
        key: 'canPause',
        value: function canPause() {
            return true;
        }
    }, {
        key: 'changeState',
        value: function changeState(newState, silent) {
            var oldState = this._state;
            if (oldState === 'stop') {
                return;
            }
            this._state = newState;

            if (typeof this[newState] === 'function') {
                this[newState]();
            }
            !silent && newState !== oldState && this.$emit('statechange', newState, oldState);
        }
    }, {
        key: '$on',
        value: function $on(eventName, callback) {
            if (!this._event) {
                this._event = new _vue2.default();
            }
            this._event.$on(eventName, callback);
        }
    }, {
        key: '$emit',
        value: function $emit(eventName) {
            var args = [].concat(Array.prototype.slice.call(arguments));
            args.splice(1, 0, this);
            this._event && this._event.$emit.apply(this._event, args);
        }
    }, {
        key: 'start',
        value: function start() {}
    }, {
        key: 'wait',
        value: function wait() {
            this._error_info = {};
        }
    }, {
        key: 'readying',
        value: function readying() {}
    }, {
        key: 'readydone',
        value: function readydone() {}
    }, {
        key: 'process',
        value: function process() {}
    }, {
        key: 'done',
        value: function done() {}
    }, {
        key: 'pause',
        value: function pause() {}
    }, {
        key: 'stop',
        value: function stop() {}
    }, {
        key: 'error',
        value: function error() {}
    }, {
        key: 'destroy',
        value: function destroy() {}
    }]);
    return BaseTask;
}();

BaseTask.STATE = ['wait', 'readying', 'readydone', 'process', 'done', 'pause', 'stop', 'error'];

BaseTask.taskIndex = 0;

exports.default = BaseTask;

/***/ }),

/***/ "9/0P":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(undefined);
// imports


// module
exports.push([module.i, ".tasks-vip-guide-div{display:flex;justify-content:space-between}", ""]);

// exports


/***/ }),

/***/ "9LMI":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__("Zx67");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("Zrlr");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("wxAW");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("zwoO");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("Pf15");

var _inherits3 = _interopRequireDefault(_inherits2);

var _fileType = __webpack_require__("3TOL");

var _fileType2 = _interopRequireDefault(_fileType);

var _FileNode = __webpack_require__("/eiI");

var _FileNode2 = _interopRequireDefault(_FileNode);

var _BaseTask2 = __webpack_require__("8oD/");

var _BaseTask3 = _interopRequireDefault(_BaseTask2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OfflineTask = function (_BaseTask) {
    (0, _inherits3.default)(OfflineTask, _BaseTask);

    function OfflineTask(opts) {
        (0, _classCallCheck3.default)(this, OfflineTask);

        opts.type = 'offline';
        opts.typeText = '离线下载';

        var _this = (0, _possibleConstructorReturn3.default)(this, (OfflineTask.__proto__ || (0, _getPrototypeOf2.default)(OfflineTask)).call(this, opts));

        _this._task_id = opts.task_id || 0;
        _this._task_name = opts.task_name;
        _this._task_size = opts.task_size;
        _this._current_size = opts.current_size;
        _this._task_status = opts.task_status;
        _this._create_time = opts.create_time;

        _this._error_info = {
            ret: opts.retcode,
            msg: opts.retmsg
        };

        _this._task_status_desc = opts.task_status_desc;
        _this._dir_path = opts.dir_path;
        _this._pdir_key = opts.pdir_key;
        _this._file_id = opts.file_id;

        _this._file_node = new _FileNode2.default({
            pdir_key: opts.pdir_key,
            file_id: opts.file_id,
            filename: opts.task_name,
            file_mtime: opts.create_time,
            file_ctime: opts.create_time,
            file_size: opts.task_size
        });

        if (_this._task_status === 1) {
            _this._state = 'done';
        }
        return _this;
    }

    (0, _createClass3.default)(OfflineTask, [{
        key: 'getId',
        value: function getId() {
            return this._task_id;
        }
    }, {
        key: 'getFileNode',
        value: function getFileNode() {
            return this._file_node;
        }
    }, {
        key: 'getName',
        value: function getName() {
            return this._task_name;
        }
    }, {
        key: 'getSize',
        value: function getSize() {
            return this._task_size;
        }
    }, {
        key: 'setPdirKey',
        value: function setPdirKey(key) {
            this._pdir_key = key || '';
            this._file_node.setPdirKey(key);
        }
    }, {
        key: 'getProcessed',
        value: function getProcessed() {
            return this._current_size;
        }
    }, {
        key: 'setProcessed',
        value: function setProcessed(processed) {
            this._current_size = processed;
        }
    }, {
        key: 'getProcessedPercent',
        value: function getProcessedPercent() {
            return this.getProcessed() / this.getSize();
        }
    }, {
        key: 'getIcon',
        value: function getIcon() {
            return this._file_node.getType();
        }
    }, {
        key: 'canPause',
        value: function canPause() {
            return false;
        }
    }, {
        key: 'start',
        value: function start() {
            this.changeState('process');
        }
    }, {
        key: 'wait',
        value: function wait() {
            this.changeState('process');
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            this.changeState('stop');
            this._file_node = null;
        }
    }]);
    return OfflineTask;
}(_BaseTask3.default);

OfflineTask.STATE = ['wait', 'process', 'done', 'pause', 'stop', 'error'];

exports.default = OfflineTask;

/***/ }),

/***/ "AYW9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"status-wrapper",staticStyle:{"display":"none"}},[_c('div',{staticClass:"status-blank"},[_c('i',{staticClass:"icon icon-list-blank"}),_vm._v(" "),_c('p',{staticClass:"txt txt-sub txt-block"},[_vm._v("会员专享超大容量"),_c('a',{staticClass:"txt txt-link",attrs:{"href":""}},[_vm._v("开通会员")])])])])}]


/***/ }),

/***/ "BKU2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__("Zrlr");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("wxAW");

var _createClass3 = _interopRequireDefault(_createClass2);

var _vue = __webpack_require__("7+uW");

var _vue2 = _interopRequireDefault(_vue);

var _config = __webpack_require__("QIop");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TaskQueue = function () {
    function TaskQueue() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        (0, _classCallCheck3.default)(this, TaskQueue);

        this._name = opts.name || 'taskQueue';
        this._scan_thread = _config2.default.scanThread;
        this._upload_thread = _config2.default.uploadThread;
        this._queue = [];
        this._waiting = [];
        this._readying = [];
        this._processing = [];

        this._state = 'idle';

        this._speed = '';

        this._save_time = 0;

        this._spend_time = 0;

        this._total_size = 0;
        this._processed = 0;
        this.handleQueueStateChange();
    }

    (0, _createClass3.default)(TaskQueue, [{
        key: 'getName',
        value: function getName() {
            return this._name;
        }
    }, {
        key: 'getProcessed',
        value: function getProcessed() {
            return this._processed;
        }
    }, {
        key: 'getProcessedPercent',
        value: function getProcessedPercent() {
            return this.getProcessed() / this.getTotalSize();
        }
    }, {
        key: 'getTotalSize',
        value: function getTotalSize() {
            return this._total_size;
        }
    }, {
        key: 'changeThread',
        value: function changeThread(type, thread) {
            if (type === 'scan') {
                this._scan_thread = thread;
            } else if (type === 'upload') {
                this._upload_thread = thread;
            }
        }
    }, {
        key: '$on',
        value: function $on(eventName, callback) {
            if (!this._event) {
                this._event = new _vue2.default();
            }
            this._event.$on(eventName, callback);
        }
    }, {
        key: '$emit',
        value: function $emit(eventName) {
            var args = [].concat(Array.prototype.slice.call(arguments));
            this._event && this._event.$emit.apply(this._event, args);
        }
    }, {
        key: 'tail',
        value: function tail(task) {
            this._queue.push(task);
            this._waiting.push(task);
            this._total_size += task.getSize();

            this.bindEvent(task);
        }
    }, {
        key: 'head',
        value: function head(task) {
            this._queue.unshift(task);
            this._waiting.unshift(task);
            this._total_size += task.getSize();

            this.bindEvent(task);
        }
    }, {
        key: 'bindEvent',
        value: function bindEvent(task) {
            var _this = this;

            task.$on('statechange', function (task, newState, oldState) {
                _this.handleTaskStateChange(task, newState, oldState);
            });
            task.$on('speedchange', function (speed) {
                _this.calcSpeed();
            });
            task.$on('processedchange', function (processed) {
                _this.calcProcessed();
            });

            task.$on('sizeadd', function (task, size) {
                _this._total_size += size;
            });
        }
    }, {
        key: 'changeState',
        value: function changeState(state) {
            var oldState = this._state;
            this._state = state;
            if (this._state !== oldState) {
                this.$emit('statechange', this._state, oldState);
            }
        }
    }, {
        key: 'getState',
        value: function getState() {
            return this._state;
        }
    }, {
        key: 'removeTask',
        value: function removeTask(task) {
            var taskId = task.getId();
            var queueAll = this._queue;
            var queueRun = this._processing;
            var queueWait = this._waiting;
            var queueReady = this._readying;

            for (var i = 0, len = queueAll.length; i < len; i++) {
                if (queueAll[i].getId() === taskId) {
                    queueAll.splice(i, 1);
                    break;
                }
            }

            var find = false;

            for (var _i = 0, _len = queueRun.length; _i < _len; _i++) {
                if (queueRun[_i].getId() === taskId) {
                    queueRun.splice(_i, 1);
                    find = true;
                    break;
                }
            }

            if (!find) {
                for (var _i2 = 0, _len2 = queueReady.length; _i2 < _len2; _i2++) {
                    if (queueReady[_i2].getId() === taskId) {
                        queueReady.splice(_i2, 1);
                        find = true;
                        break;
                    }
                }
            }

            if (!find) {
                for (var _i3 = 0, _len3 = queueWait.length; _i3 < _len3; _i3++) {
                    if (queueWait[_i3].getId() === taskId) {
                        queueWait.splice(_i3, 1);
                        break;
                    }
                }
            }

            if (this.getTotal() === 0) {
                this.changeState('idle');
            } else if (this.getExecuteCount() === 0) {
                this.changeState('complete');
            } else {
                this.getWaitingTaskToReady();
            }

            this._total_size -= task.getSize();
            this._processed -= task.getProcessed();
        }
    }, {
        key: 'handleTaskStateChange',
        value: function handleTaskStateChange(task, newState, oldState) {
            switch (newState) {
                case 'readydone':
                    this.getReadyTaskToRun();
                    break;
                case 'process':
                    this.getWaitingTaskToReady();
                    break;
                case 'pause':
                    this.handleOneTaskPause(task, oldState);
                    break;
                case 'stop':
                    this.removeTask(task);
                    break;
                case 'done':
                    this.handleOneTaskDone(task);
                    break;
                case 'error':
                    this.handleOneTaskError(task, oldState);
                    break;
                case 'wait':
                    this.startTask(task, oldState);
                    break;
            }
        }
    }, {
        key: 'handleOneTaskDone',
        value: function handleOneTaskDone(task) {
            var find = false;
            for (var i = 0, len = this._readying.length; i < len; i++) {
                if (this._readying[i].getId() === task.getId()) {
                    this._readying.splice(i, 1);
                    find = true;
                    break;
                }
            }

            if (!find) {
                for (var _i4 = 0, _len4 = this._processing.length; _i4 < _len4; _i4++) {
                    if (this._processing[_i4].getId() === task.getId()) {
                        this._processing.splice(_i4, 1);
                        break;
                    }
                }
            }

            if (this.isComplete()) {
                this.$emit('complete');
                this.changeState('complete');
            } else if (this.isError()) {
                this.$emit('error');
                this.changeState('error');
            } else if (this.isPause()) {
                this.$emit('pause');
                this.changeState('pause');
            } else if (this._readying.length) {
                this.getReadyTaskToRun();
            } else if (this._waiting.length) {
                this.getWaitingTaskToReady();
            }
        }
    }, {
        key: 'handleOneTaskError',
        value: function handleOneTaskError(task) {
            var find = false;
            var queueRun = this._processing;
            var queueWait = this._waiting;
            var queueReady = this._readying;
            var taskId = task.getId();
            var isReadying = false;

            for (var i = 0, len = queueRun.length; i < len; i++) {
                if (queueRun[i].getId() === taskId) {
                    queueRun.splice(i, 1);
                    find = true;
                    break;
                }
            }

            if (!find) {
                for (var _i5 = 0, _len5 = queueReady.length; _i5 < _len5; _i5++) {
                    if (queueReady[_i5].getId() === taskId) {
                        isReadying = true;
                        queueReady.splice(_i5, 1);
                        break;
                    }
                }
            }

            queueWait.push(task);

            if (this.isError()) {
                this.$emit('error');
                this.changeState('error');
            } else if (isReadying) {
                this.getWaitingTaskToReady();
            } else {
                this.getReadyTaskToRun();
            }
        }
    }, {
        key: 'getWaitingTaskToReady',
        value: function getWaitingTaskToReady() {
            if (this._state === 'running') {
                this.run();
            }
        }
    }, {
        key: 'getReadyTaskToRun',
        value: function getReadyTaskToRun() {

            if (this._processing.length === this._upload_thread) {
                return;
            }

            var task = void 0;

            for (var i = 0, len = this._readying.length; i < len; i++) {
                if (this._readying[i].getState() === 'readydone') {
                    task = this._readying.splice(i, 1)[0];
                    break;
                }
            }
            if (task) {
                this._processing.push(task);
                task.changeState('process');
            } else if (this.isPause()) {
                this.$emit('pause');
                this.changeState('pause');
            }
        }
    }, {
        key: 'handleOneTaskPause',
        value: function handleOneTaskPause(task, oldState) {
            if (oldState === 'readying' || oldState === 'readydone') {
                for (var i = 0, len = this._readying.length; i < len; i++) {
                    if (this._readying[i].getId() === task.getId()) {
                        this._readying.splice(i, 1);
                        break;
                    }
                }

                this._waiting.push(task);
                this.getWaitingTaskToReady();
            } else if (oldState === 'process') {
                for (var _i6 = 0, _len6 = this._processing.length; _i6 < _len6; _i6++) {
                    if (this._processing[_i6].getId() === task.getId()) {
                        this._processing.splice(_i6, 1);
                        break;
                    }
                }
                this._waiting.push(task);
                this.getReadyTaskToRun();
            } else {}

            if (this.isPause()) {
                this.$emit('pause');
                this.changeState('pause');
            } else if (this.isError()) {
                this.$emit('error');
                this.changeState('error');
            }
        }
    }, {
        key: 'startTask',
        value: function startTask(task, oldState) {
            if (oldState === 'error' || oldState === 'pause') {
                if (task.isSubTask() && task.getParent().getType() === 'belong') {
                    task.getParent().tryRunBySubTask();
                } else {
                    this.run();
                }
            } else if (oldState === 'done') {
                this._waiting.push(task);
            }
        }
    }, {
        key: 'hasProcessingTask',
        value: function hasProcessingTask() {
            return !!this._processing.length;
        }
    }, {
        key: 'getExecuteTasks',
        value: function getExecuteTasks() {
            return this._queue.filter(function (task) {
                if (task.getState() !== 'done') {
                    return true;
                }
            });
        }
    }, {
        key: 'getExecuteCount',
        value: function getExecuteCount() {
            return this.getExecuteTasks().length;
        }
    }, {
        key: 'getDoneTasks',
        value: function getDoneTasks() {
            return this._queue.filter(function (task) {
                if (task.getState() === 'done') {
                    return true;
                }
            });
        }
    }, {
        key: 'getAllTasks',
        value: function getAllTasks() {
            return this._queue;
        }
    }, {
        key: 'getWaitingTasks',
        value: function getWaitingTasks() {
            return this._waiting;
        }
    }, {
        key: 'getReadyingTasks',
        value: function getReadyingTasks() {
            return this._readying;
        }
    }, {
        key: 'getProcessTasks',
        value: function getProcessTasks() {
            return this._processing;
        }
    }, {
        key: 'getProcessTasksCount',
        value: function getProcessTasksCount() {
            return this._processing.length;
        }
    }, {
        key: 'getErrorTasks',
        value: function getErrorTasks() {
            return this._waiting.filter(function (task) {
                if (task.getState() === 'error') {
                    return true;
                }
            });
        }
    }, {
        key: 'getTotal',
        value: function getTotal() {
            return this._queue.length;
        }
    }, {
        key: 'getWaitingCount',
        value: function getWaitingCount() {
            return this._waiting.length;
        }
    }, {
        key: 'getReadyingCount',
        value: function getReadyingCount() {
            return this._readying.length;
        }
    }, {
        key: 'getProcessingCount',
        value: function getProcessingCount() {
            return this._processing.length;
        }
    }, {
        key: 'getDoneCount',
        value: function getDoneCount() {
            return this.getDoneTasks().length;
        }
    }, {
        key: 'getErrorCount',
        value: function getErrorCount() {
            return this.getErrorTasks().length;
        }
    }, {
        key: 'getTasksFromWaiting',
        value: function getTasksFromWaiting(num) {
            if (num < 1) {
                return;
            }
            var tasks = [];
            if (this._waiting.length === 0) {
                return tasks;
            }
            for (var i = 0, len = this._waiting.length; i < len; i++) {
                var state = this._waiting[i].getState();
                if (state !== 'pause' && state !== 'error') {
                    tasks.push(this._waiting[i]);
                    this._waiting.splice(i, 1);
                    this._waiting.length && i--;
                    len--;
                    if (--num === 0) {
                        break;
                    }
                }
            }
            return tasks;
        }
    }, {
        key: 'run',
        value: function run(isNotAll) {
            if (this._readying.length === this._scan_thread) {
                return;
            }
            var toReadyingTask = this.getTasksFromWaiting(this._scan_thread - this._readying.length);
            this._readying = this._readying.concat(toReadyingTask);
            toReadyingTask.forEach(function (task) {
                task.start(isNotAll);
            });

            this.changeState('running');
        }
    }, {
        key: 'start',
        value: function start(isNotAll) {
            this.changeState('running');
            this.run(isNotAll);
        }
    }, {
        key: 'restart',
        value: function restart() {
            if (this._state === 'idle' || this._state === 'complete') {
                return;
            }
            if (this._state === 'pause' || this._state === 'error') {
                this._waiting.forEach(function (task) {
                    task.changeState('wait', true);
                });
            }
            this.start();
        }
    }, {
        key: 'pause',
        value: function pause() {
            var _this2 = this;

            if (this._state === 'complete' || this._state === 'idle' || this._state === 'pause') {
                return;
            }
            this.changeState('pause');
            this._processing = [];
            this._readying = [];
            this._waiting = [];
            this._queue.forEach(function (task) {
                var type = task.getType();
                if (task.getState() !== 'done') {
                    if (type === 'belong') {
                        var subTasks = task.getSubTasks();
                        subTasks.forEach(function (subTask) {
                            subTask.changeState('pause', true);
                        });
                    } else {
                        task.changeState('pause', true);
                    }
                }
                if (task.getState() !== 'done') {
                    _this2._waiting.push(task);
                }
            });
            this.$emit('pause');
        }
    }, {
        key: 'clear',
        value: function clear() {
            this._queue.forEach(function (task) {
                task.destroy();
            });
        }
    }, {
        key: 'isComplete',
        value: function isComplete() {

            if (this.getExecuteCount() === 0) {
                return true;
            } else {
                return false;
            }
        }
    }, {
        key: 'isPause',
        value: function isPause() {
            var hasError = false;
            var hasCanRun = false;
            var hasPause = false;
            this.getExecuteTasks().forEach(function (task) {
                var state = task.getState();
                if (state === 'pause') {
                    hasPause = true;
                } else if (state === 'error') {
                    hasError = true;
                } else {
                    hasCanRun = true;
                }
            });
            if (!hasCanRun && !hasError && hasPause) {
                return true;
            } else {
                return false;
            }
        }
    }, {
        key: 'isError',
        value: function isError() {
            var hasError = false;
            var hasCanRun = false;
            var hasPause = false;
            this.getExecuteTasks().forEach(function (task) {
                var state = task.getState();
                if (state === 'pause') {
                    hasPause = true;
                } else if (state === 'error') {
                    hasError = true;
                } else {
                    hasCanRun = true;
                }
            });
            if (!hasCanRun && hasError) {
                    return true;
                } else {
                return false;
            }
        }
    }, {
        key: 'isRunning',
        value: function isRunning() {
            return this._readying.length || this._processing.length;
        }
    }, {
        key: 'handleQueueStateChange',
        value: function handleQueueStateChange() {
            var _this3 = this;

            this.$on('statechange', function (newState, oldState) {
                if (newState === 'running') {} else if (newState === 'complete') {
                    _this3._speed = 0;
                    _this3.calcSaveTime();
                } else if (newState === 'pause') {
                    _this3._speed = 0;
                } else if (newState === 'error') {
                    _this3._speed = 0;
                }
            });
        }
    }, {
        key: 'calcSpeed',
        value: function calcSpeed() {
            var now = +new Date();
            if (this._last_calc_speed_time && this._last_calc_speed_time < 1000) {
                return;
            }
            var speed = 0;
            this._processing.forEach(function (task) {
                speed += task.getSpeed();
            });
            this._speed = speed;
            this._last_calc_speed_time = now;

            this.$emit('speedchange', this._speed);
        }
    }, {
        key: 'calcProcessed',
        value: function calcProcessed() {
            var now = +new Date();
            if (this._last_calc_processed_time && this._last_calc_processed_time < 1000) {
                return;
            }
            var processed = 0;
            this._queue.forEach(function (task) {
                processed += task.getProcessed();
            });
            this._processed = processed;
            this._last_calc_processed_time = now;

            this.$emit('processedchange', this._processed);
        }
    }, {
        key: 'getSpeed',
        value: function getSpeed() {
            return this._speed;
        }
    }, {
        key: 'calcSaveTime',
        value: function calcSaveTime() {
            var saveTime = 0;
            this.getDoneTasks().forEach(function (task) {
                saveTime += task.getSaveTime();
                task.setIgnoreSaveTime(true);
            });
            this._save_time = saveTime;
        }
    }, {
        key: 'getSaveTime',
        value: function getSaveTime() {
            return this._save_time;
        }
    }]);
    return TaskQueue;
}();

exports.default = TaskQueue;

/***/ }),

/***/ "BSdR":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _promise = __webpack_require__("//Fk");

var _promise2 = _interopRequireDefault(_promise);

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = __webpack_require__("bOdI");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _emitter = __webpack_require__("bg3o");

var _emitter2 = _interopRequireDefault(_emitter);

var _request = __webpack_require__("yS1T");

var _request2 = _interopRequireDefault(_request);

var _console = __webpack_require__("vK/W");

var _console2 = _interopRequireDefault(_console);

var _vip = __webpack_require__("YDab");

var _vip2 = _interopRequireDefault(_vip);

var _retMsgs = __webpack_require__("T5wh");

var _retMsgs2 = _interopRequireDefault(_retMsgs);

var _wyToast = __webpack_require__("cYh5");

var _wyToast2 = _interopRequireDefault(_wyToast);

var _wyUploader = __webpack_require__("uOK7");

var _wyUploader2 = _interopRequireDefault(_wyUploader);

var _wyConfirm = __webpack_require__("IGnx");

var _wyConfirm2 = _interopRequireDefault(_wyConfirm);

var _report = __webpack_require__("5bB2");

var _report2 = _interopRequireDefault(_report);

var _store = __webpack_require__("+zu9");

var _store2 = _interopRequireDefault(_store);

var _TaskRootNode = __webpack_require__("iQAj");

var _TaskRootNode2 = _interopRequireDefault(_TaskRootNode);

var _OfflineTaskQueue = __webpack_require__("iABy");

var _OfflineTaskQueue2 = _interopRequireDefault(_OfflineTaskQueue);

var _OfflineTask = __webpack_require__("9LMI");

var _OfflineTask2 = _interopRequireDefault(_OfflineTask);

var _disk = __webpack_require__("eBVp");

var _disk2 = _interopRequireDefault(_disk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ERROR_CODES = {
    NOT_VIP: 25700,
    VIP_EXPIRED: 25701,
    SAFEBOX_NOT_ENABLED: 25702 };

var REPORT_CONFIG = {
    POSITION: 'safeboxpage',
    FUNCTION: 'safebox',
    ACTION: 'pop_upload'
};

function generateReportAID() {
    return _report2.default.transAID({
        position: REPORT_CONFIG.POSITION,
        function: REPORT_CONFIG.FUNCTION,
        action: REPORT_CONFIG.ACTION
    });
}

function reportPopupShow(errorCode, aid) {
    _report2.default.tdwReport('weiyun-vip_upgrade_pop-show', {
        common_ext: {
            position: REPORT_CONFIG.POSITION,
            function: REPORT_CONFIG.FUNCTION,
            aid: aid,
            ver1: errorCode === ERROR_CODES.VIP_EXPIRED ? 'expired' : 'new'
        }
    });
}

function reportPopupClick(aid) {
    _report2.default.tdwReport('weiyun-vip_upgrade_pop-click', {
        common_ext: {
            position: REPORT_CONFIG.POSITION,
            function: REPORT_CONFIG.FUNCTION,
            aid: aid
        }
    });
}

var diskService = void 0;
if (false) {
    diskService = _disk2.default.namespace('QIDIAN_TEAM');
} else if (false) {
    diskService = _disk2.default.namespace('QCLOUD_TEAM');
} else {
    diskService = _disk2.default.namespace('WEIYUN_TEAM');
}

var wyDownload = void 0;
if (false) {
    wyDownload = require('wy/components-appbox/wy-download').default;
} else {
    wyDownload = {
        taskQueue: {
            getState: function getState() {
                return 'idle';
            },
            getSpeed: function getSpeed() {
                return 0;
            },
            getTotal: function getTotal() {
                return 0;
            },
            getExecuteCount: function getExecuteCount() {
                return 0;
            },
            getErrorCount: function getErrorCount() {
                return 0;
            },
            getDoneCount: function getDoneCount() {
                return 0;
            }
        }
    };
}

function getErrorGuideConfig(errorCode) {
    var _configs;

    var configs = (_configs = {}, (0, _defineProperty3.default)(_configs, ERROR_CODES.NOT_VIP, {
        title: '开会员提示',
        msg: '开通会员，专享保险箱所有功能',
        desc: '',
        okBtnText: '开通会员'
    }), (0, _defineProperty3.default)(_configs, ERROR_CODES.VIP_EXPIRED, {
        title: '会员到期提示',
        msg: '续费会员，继续专享保险箱所有功能',
        desc: '',
        okBtnText: '开通会员'
    }), (0, _defineProperty3.default)(_configs, ERROR_CODES.SAFEBOX_NOT_ENABLED, {
        title: '提示',
        msg: '未移入成功，请先开启保险箱',
        desc: '首次开启后，后续可正常添加文件',
        okBtnText: '开启保险箱'
    }), _configs);

    return configs[errorCode] || null;
}

function showGuide(error, state) {
    var errorCode = error.ret,
        errorMessage = error.msg;

    var guideConfig = getErrorGuideConfig(errorCode);

    if (!guideConfig) {
        _wyToast2.default.error(errorMessage);
        return;
    }

    var aid = generateReportAID();
    reportPopupShow(errorCode, aid);

    var changeShowGuideState = function changeShowGuideState(state) {
        setTimeout(function () {
            state.isShowGuide = false;
        }, 5000);
    };

    _wyConfirm2.default.alert((0, _extends3.default)({}, guideConfig, {
        cancel: function cancel() {
            changeShowGuideState(state);
        },
        ok: function ok() {
            changeShowGuideState(state);
            handleVipError(errorCode, aid);
        }
    }));
}

function handleVipError(errorCode, aid) {
    if (errorCode === ERROR_CODES.NOT_VIP || errorCode === ERROR_CODES.VIP_EXPIRED) {
        reportPopupClick(aid);
        _store2.default.dispatch('control/buyVip', aid);
    } else if (errorCode === ERROR_CODES.SAFEBOX_NOT_ENABLED) {
        _store2.default.commit('nav/switchModule', {
            mod: {
                alias: 'safebox',
                path: '/disk/safebox'
            }
        });
    }
}

var console = _console2.default.namespace('manager');

var manager = {

    namespaced: true,

    state: {

        taskRootNode: new _TaskRootNode2.default(),

        uploadTaskQueue: null,

        downloadTaskQueue: null,

        offlineTaskQueue: new _OfflineTaskQueue2.default(),

        privilege: null,

        safeboxTaskNode: null,

        curMutiTask: null,

        tempVip: false,

        spaceNotEnough: false,

        flowNotEnough: false,

        couponInfo: {},

        experienceUploadFail: false,

        uploadingTipShowed: false,
        isShowGuide: false

    },

    getters: {
        curModAlias: function curModAlias(state, getters, rootState) {
            return rootState.nav.curModAlias;
        },
        managerState: function managerState(state) {
            var uploadTaskQueue = state.uploadTaskQueue;
            var offlineTaskQueue = state.offlineTaskQueue;
            var downloadTaskQueue = state.downloadTaskQueue;
            var uploadState = uploadTaskQueue.getState();
            var offlineState = offlineTaskQueue.getState();
            var downloadState = downloadTaskQueue.getState();

            if (uploadState === 'running' && uploadTaskQueue.getProcessingCount() === 0 && uploadTaskQueue.getDoneCount() === 0 && (!state.safeboxTaskNode || state.safeboxTaskNode.getState() !== 'process')) {
                return 'uploadReadying';
            }

            if (uploadState === 'running') {
                return 'uploading';
            }

            function isState(state) {
                for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                    args[_key - 1] = arguments[_key];
                }

                return args.indexOf(state) > -1;
            }

            if (uploadState === 'pause' && (offlineState === 'idle' || offlineState === 'pause' || offlineState === 'complete') && (downloadState === 'idle' || downloadState === 'pause' || downloadState === 'complete') || offlineState === 'pause' && (uploadState === 'idle' || uploadState === 'pause' || uploadState === 'complete') && (downloadState === 'idle' || downloadState === 'pause' || downloadState === 'complete') || downloadState === 'pause' && (uploadState === 'idle' || uploadState === 'pause' || uploadState === 'complete') && (offlineState === 'idle' || offlineState === 'pause' || offlineState === 'complete')) {
                return 'pause';
            }

            if (uploadState === 'error' && (offlineState === 'idle' || offlineState === 'error' || offlineState === 'complete' || offlineState === 'pause') && (downloadState === 'idle' || downloadState === 'error' || downloadState === 'complete' || downloadState === 'pause') || offlineState === 'error' && (uploadState === 'idle' || uploadState === 'error' || uploadState === 'complete' || uploadState === 'pause') && (downloadState === 'idle' || downloadState === 'error' || downloadState === 'complete' || downloadState === 'pause') || downloadState === 'error' && (uploadState === 'idle' || uploadState === 'error' || uploadState === 'complete' || uploadState === 'pause') && (offlineState === 'idle' || offlineState === 'error' || offlineState === 'complete' || offlineState === 'pause')) {
                if (state.spaceNotEnough) {
                    return 'spaceNotEnough';
                } else if (state.flowNotEnough) {
                    return 'flowNotEnough';
                }
                return 'error';
            }

            if (isState(uploadState, 'idle', 'complete', 'error', 'pause') && downloadState === 'running') {
                if (downloadTaskQueue.hasUploading()) {
                    return 'uploading';
                }
                return 'downloading';
            }

            if (isState(uploadState, 'idle', 'complete', 'error', 'pause') && offlineState === 'running') {
                return 'offlineDownloading';
            }

            if (uploadState === 'complete' && (offlineState === 'idle' || offlineState === 'complete') && (downloadState === 'idle' || downloadState === 'complete') || offlineState === 'complete' && (uploadState === 'idle' || uploadState === 'complete') && (downloadState === 'idle' || downloadState === 'complete') || downloadState === 'complete' && (uploadState === 'idle' || uploadState === 'complete') && (offlineState === 'idle' || offlineState === 'complete')) {
                return 'complete';
            }

            return 'idle';
        }
    },

    mutations: {
        init: function init(state) {
            state.uploadTaskQueue = _wyUploader2.default.taskQueue;
            state.downloadTaskQueue = wyDownload.taskQueue;
        },
        setTempVip: function setTempVip(state, isTempVip) {
            state.tempVip = isTempVip;
        },
        setUploadingTipShowed: function setUploadingTipShowed(state, tipShowed) {
            state.uploadingTipShowed = tipShowed;
        },
        setPrivilege: function setPrivilege(state, privilege) {
            state.privilege = privilege;
        },
        getSafeboxTask: function getSafeboxTask(state) {
            if (!state.safeboxTaskNode) {
                state.safeboxTaskNode = _wyUploader2.default.getBelongTask('safebox');
                state.taskRootNode.unshiftTask(state.safeboxTaskNode);
            }
        },
        addTasks: function addTasks(state, tasks) {
            state.taskRootNode.addTasks(tasks);
        },
        openMutiTask: function openMutiTask(state, task) {
            state.curMutiTask = task;
        },
        exitMutiTask: function exitMutiTask(state) {
            state.curMutiTask = null;
        },
        experienceUploadFail: function experienceUploadFail(state) {
            if (!state.experienceUploadFail) {
                state.experienceUploadFail = true;
                _wyToast2.default.error('极速上传启动失败，请稍侯重试');
            }
        },
        setSpaceNotEnough: function setSpaceNotEnough(state, enough) {
            state.spaceNotEnough = enough;
        },
        setFlowNotEnough: function setFlowNotEnough(state, enough) {
            state.flowNotEnough = enough;
        }
    },

    actions: {
        loadCloudConfig: function loadCloudConfig(_ref) {
            var commit = _ref.commit;

            return new _promise2.default(function (resolve) {
                _vip2.default.loadCloudConfig().then(function (cloudConfig) {
                    commit('setPrivilege', cloudConfig.cloudPrivilege);
                    resolve();
                });
            });
        },
        downloadOffline: function downloadOffline(_ref2, payload) {
            var dispatch = _ref2.dispatch;

            var offlineInfo = payload.offlineInfo;
            var fileNodes = payload.fileNodes || [];
            var destDir = payload.destDir;

            return new _promise2.default(function (resolve, reject) {
                _request2.default.webapp({
                    protocol: 'weiyunOdOfflineDownloadClient',
                    name: 'OdAddBtTask',
                    cmd: 28210,
                    data: {
                        torrent_hex: offlineInfo.torrent_hex || '',
                        is_default_dir: destDir ? false : true,
                        dir_name: offlineInfo.dir_name || '',
                        ppdir_key: destDir ? destDir.getPdirKey() : '',
                        pdir_key: destDir ? destDir.getId() : '',
                        file_list: fileNodes.map(function (fileNode) {
                            return fileNode.getOriData();
                        })
                    }
                }).then(function (res) {

                    dispatch('loadOfflineTasks');
                    resolve(res);
                }, function (error) {
                    if (_retMsgs2.default.isSpaceNotEnough(error.ret)) {
                        dispatch('control/showVipGuide', 'space', { root: true });
                    }
                    _wyToast2.default.error(error.msg || '添加离线任务失败');
                    reject(error);
                });
            });
        },
        loadOfflineTasks: function loadOfflineTasks(_ref3, auto) {
            var state = _ref3.state;

            _request2.default.webapp({
                protocol: 'weiyunOdOfflineDownloadClient',
                name: 'OdGetTaskList',
                cmd: 28220,
                data: {}
            }).then(function (res) {
                var taskList = res.task_list || [];
                taskList.forEach(function (item) {
                    var task = new _OfflineTask2.default(item);

                    if (!state.offlineTaskQueue.hasTask(task)) {
                        state.offlineTaskQueue.tail(task);
                        state.taskRootNode.addTask(task);
                    }
                    if (item.retcode) {
                        task.setErrorInfo({
                            ret: item.retcode,
                            msg: item.retmsg
                        });
                        task.changeState('error');
                    } else if (item.task_status === 1) {
                        task.changeState('done');
                    } else if (item.current_size) {
                        task.changeState('process');
                    }
                });
                if (taskList.length) {
                    state.offlineTaskQueue.start();
                }
            }, function (error) {
                !auto && _wyToast2.default.error(error.msg || '添加离线任务失败');
            });
        },
        loadCouponInfo: function loadCouponInfo(_ref4) {
            var state = _ref4.state;

            return new _promise2.default(function (resolve, reject) {
                _request2.default.webapp({
                    protocol: 'weiyunQdiskClient',
                    name: 'DiskUserConfigGet',
                    cmd: 2225,
                    data: {
                        'get_coupon': true,
                        'get_od_coupon': true,
                        'get_download_coupon': true

                    }
                }).then(function (respond) {
                    state.couponInfo = respond;
                    resolve(respond);
                }).catch(function (error) {
                    _wyToast2.default.error(error.msg || '获取体验券失败');
                    reject(error);
                });
            });
        },
        location: function location(_ref5, task) {
            var state = _ref5.state,
                commit = _ref5.commit;

            state.showed = false;
            if (task.getType() === 'belong' && task.getBelongInfo().name === 'safebox') {
                commit('nav/switchModule', {
                    mod: {
                        alias: 'safebox',
                        path: '/disk/safebox'
                    }
                }, { root: true });
            } else if (task.getFileNode().getCategory && task.getFileNode().getCategory() === 'team') {
                _emitter2.default.$emit('teamOperator:action', 'location', task.getFileNode());
            } else if (task.getType() === 'download') {
                window.external.OpenFileDirectory(task.task_id_, task.target_path_, task.getName());
            } else {
                _emitter2.default.$emit('operator:action', 'location', task.getFileNode());
            }
        },
        clearAll: function clearAll(_ref6) {
            var state = _ref6.state,
                commit = _ref6.commit,
                dispatch = _ref6.dispatch;

            if (false) {
                state.downloadTaskQueue.clear();
            }

            var taskRootNode = state.taskRootNode;
            var tasks = taskRootNode.getAllTasks().slice(0);

            dispatch('removeTempFile', tasks);

            tasks.forEach(function (task) {
                if (task === state.safeboxTaskNode) {
                    state.safeboxTaskNode = null;
                }
                task.destroy();
                taskRootNode.removeTask(task);
            });

            if (state.curMutiTask) {
                commit('exitMutiTask');
            }

            console.log('clearAll tasks');
        },
        removeTempFile: function removeTempFile(_ref7, tasks) {
            var rootState = _ref7.rootState;


            var tempUploadTasks = [];
            var tempOfflineTasks = [];

            tasks.forEach(function (task) {
                var type = task.getType();
                var state = task.getState();
                if (type === 'offline') {
                    if (state !== 'done') {
                        tempOfflineTasks.push(task);
                    }
                } else if (type === 'belong' && task.getBelongInfo().name === 'safebox') {
                    var subTasks = task.getSubExecuteTasks();
                    subTasks.forEach(function (task) {
                        if (task.getType() === 'dir') {
                            task.getSubExecuteTasks().forEach(function (task) {
                                if (task.getState() === 'process' || task.getState() === 'error' && task.hasPreUploaded()) {
                                    tempUploadTasks.push(task);
                                }
                            });
                        } else if (task.getState() === 'process' || task.getState() === 'error' && task.hasPreUploaded()) {
                            tempUploadTasks.push(task);
                        }
                    });
                } else if (type === 'dir') {
                    task.getSubExecuteTasks().forEach(function (task) {
                        if (task.getState() === 'process' || task.getState() === 'error' && task.hasPreUploaded()) {
                            tempUploadTasks.push(task);
                        }
                    });
                } else if (type != 'download') {
                    if (state === 'process' || state === 'error' && task.hasPreUploaded()) {
                        tempUploadTasks.push(task);
                    }
                }
            });

            if (tempUploadTasks.length) {
                if (rootState.control.diskMode === 'team') {
                    diskService.removeDirFile({
                        fileNodes: tempUploadTasks.map(function (task) {
                            return task.getFileNode();
                        }),
                        batchId: new Date().getTime() + ''
                    });
                } else {
                    _request2.default.webapp({
                        protocol: 'weiyunQdiskClient',
                        name: 'DiskTempFileBatchDelete',
                        cmd: 2508,
                        data: {
                            file_list: tempUploadTasks.map(function (task) {
                                var fileNode = task.getFileNode();
                                return {
                                    ppdir_key: fileNode.getPPdirKey(),
                                    pdir_key: fileNode.getPdirKey(),
                                    file_id: fileNode.getId(),
                                    filename: fileNode.getName()
                                };
                            })
                        }
                    }).then(function () {}).catch(function () {});
                }
            }

            if (tempOfflineTasks.length) {
                _request2.default.webapp({
                    protocol: 'weiyunOdOfflineDownloadClient',
                    name: 'OdDelTaskItem',
                    cmd: 28221,
                    data: {
                        task_id: tempUploadTasks.map(function (task) {
                            return task.getId();
                        })
                    }
                }).then(function () {}).catch(function () {});
            }
        },
        startAll: function startAll(_ref8) {
            var state = _ref8.state;

            state.uploadTaskQueue.restart();
            state.offlineTaskQueue.restart();
            if (false) {
                state.downloadTaskQueue.restart();
            }
            console.log('restartAll tasks');
        },
        retryError: function retryError(_ref9) {
            var state = _ref9.state;

            var errorUploadTasks = state.uploadTaskQueue.getErrorTasks();
            if (errorUploadTasks.length) {
                errorUploadTasks.forEach(function (task) {
                    task.changeState('wait');
                });
                state.uploadTaskQueue.start();
            }
            var errorOfflineTasks = state.offlineTaskQueue.getErrorTasks();
            if (errorOfflineTasks.length) {
                errorOfflineTasks.forEach(function (task) {
                    task.changeState('wait');
                });

                state.offlineTaskQueue.start();
            }
            if (false) {
                var errorDownloadTasks = state.downloadTaskQueue.getErrorTasks();
                if (errorDownloadTasks.length) {
                    errorDownloadTasks.forEach(function (task) {
                        task.changeState('wait');
                    });

                    state.downloadTaskQueue.start();
                }
            }
            console.log('retryError tasks');
        },
        cancelError: function cancelError(_ref10) {
            var state = _ref10.state;

            var errorTasks = state.uploadTaskQueue.getErrorTasks().concat(state.offlineTaskQueue.getErrorTasks());
            if (false) {
                errorTasks = errorTasks.concat(state.downloadTaskQueue.getErrorTasks());
            }
            errorTasks.forEach(function (task) {
                task.changeState('pause');
            });
            console.log('cancelError tasks');
        },
        pauseAll: function pauseAll(_ref11) {
            var state = _ref11.state;

            state.uploadTaskQueue.pause();
            state.offlineTaskQueue.pause();
            if (false) {
                state.downloadTaskQueue.pause();
            }
            console.log('pauseAll tasks');
        },
        showSafeBoxError: function showSafeBoxError(_ref12, errorCode) {
            var state = _ref12.state;

            var error = {
                ret: errorCode,
                msg: '保险箱操作失败'
            };
            if (state.isShowGuide) {
                return;
            }
            state.isShowGuide = true;
            showGuide(error, state);
        }
    }
};

exports.default = manager;

/***/ }),

/***/ "CfXi":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("9/0P");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("rjj0").default
var update = add("6086f66c", content, true, {});

/***/ }),

/***/ "CwKg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var code = "function start() {\n\n    //\u901A\u4FE1\u521D\u59CB\u5316\n    const messageInit = () => {\n\n        let encrypt = encryptInit();\n\n        //worker\u91CC\u9762\u4E0D\u80FD\u64CD\u4F5Cdom\uFF0C\u975Eworker\u91CC\u6A21\u62DF\u4E0B\u76F8\u5173API\n        try{\n            let body = document.body;\n            body.tagName;\n            return {\n                postMessage: function(event) {\n                    let data = event.data;\n                    let cmd = event.cmd;\n                    if(cmd === 'start') {\n                        let file = data.file;\n\n                        encrypt.sha(file, (res)=> {\n                            this.onmessage({\n                                cmd: 'encryptdone',\n                                data: {\n                                    sha: res.sha,\n                                    md5: res.md5,\n                                    hash: res.hash,\n                                    checkSha: res.checkSha,\n                                    checkData: res.checkData\n                                }\n                            });\n                        }, (error)=> {\n                            this.onmessage({\n                                cmd: 'encrypterror',\n                                error: error\n                            });\n                        });\n                        encrypt.onProcess((processed)=> {\n                            this.onmessage({\n                                cmd: 'encryptprocess',\n                                data: {\n                                    processed: processed\n                                }\n                            });\n                        });\n                    } else if(cmd === 'pause') {\n                        encrypt.pause();\n                    }\n                },\n                imitateMessage: function(onmessage) {\n                    this.onmessage = onmessage;\n                },\n                terminate() {}\n            }\n        }catch(e) {\n            onmessage = function(event) {\n                let data = event.data.data;\n                let cmd = event.data.cmd;\n                if(cmd === 'start') {\n                    let file = data.file;\n\n                    encrypt.sha(file, (res)=> {\n                        postMessage({\n                            cmd: 'encryptdone',\n                            data: {\n                                sha: res.sha,\n                                md5: res.md5,\n                                hash: res.hash,\n                                checkSha: res.checkSha,\n                                checkData: res.checkData\n                            }\n                        });\n                    }, (error)=> {\n                        postMessage({\n                            cmd: 'encrypterror',\n                            error: error\n                        });\n                    });\n                    encrypt.onProcess((processed)=> {\n                        postMessage({\n                            cmd: 'encryptprocess',\n                            data: {\n                                processed: processed\n                            }\n                        });\n                    });\n                } else if(cmd === 'pause') {\n                    encrypt.pause();\n                }\n            }\n        }\n    }\n\n\n    //\u8BA1\u7B97\u521D\u59CB\u5316\n    const encryptInit = () => {\n          //\u751F\u6210\u5305\u88F9\u51FD\u6570\u65B9\u4FBF\u8C03\u7528\n        const sha1_init = Module.cwrap('sha1_init');\n        const sha1_update = Module.cwrap('sha1_update',null,['array', 'number']);\n        const sha1_temp_hash = Module.cwrap('sha1_temp_hash','string');\n        const sha1_final = Module.cwrap('sha1_final','string');\n\n        const KB1 = Math.pow(2, 10);\n        const MB1 = Math.pow(2, 20);\n        const fragment = 512 * KB1; // \u5206\u7247\u5927\u5C0F\uFF0C\u9ED8\u8BA4512KB\u3002\n        const checkFragment = 128;\n        let SHA = SHAInit();\n        let MD5 = MD5Init();\n        let pausing = false; //\u662F\u5426\u6682\u505C\n        let onProcessCallback;//\u626B\u63CF\u8FDB\u5EA6\u56DE\u8C03\n        let lastProcessCallbackTime = 0; //\u4E0A\u4E00\u6B21\u8FDB\u5EA6\u56DE\u8C03\u65F6\u95F4\n        let md5Obj;\n        let hashList;\n\n        let sliceStart = 0;\n        let sliceEnd = 0;\n\n\n        //-------------------------------- readerFile\u6A21\u5757 start --------------------------------\n        function readerFile(file, start, end, succCallback, failCallback) {\n            let h5FileReader = new FileReader();\n\n            h5FileReader.onload = function(e) {\n                let buffer = new Uint8Array(e.target.result);\n                succCallback(buffer);\n            };\n\n            h5FileReader.onerror = function(e) {\n                failCallback(e);\n            };\n\n            h5FileReader.readAsArrayBuffer(blobFile(file, start, end));\n        }\n\n        function blobFile(file, start, end) {\n            if(file.webkitSlice) {\n                return file.webkitSlice(start, end);\n            } else if(file.mozSlice) {\n                return file.mozSlice(start, end);\n            } else {\n                return file.slice(start, end);\n            }\n        }\n        //-------------------------------- readerFile\u6A21\u5757 end --------------------------------\n\n        //-------------------------------- sha\u6A21\u5757 start --------------------------------\n        //\u8BA1\u7B97sha\n        function encryptSHA(file, succCallback, failCallback) {\n            let fileSize = file.size;\n            let md5 = md5Obj || new MD5();\n            let tempHashList = hashList || [];\n            let checkSha;   //\u6821\u9A8CSHA\uFF0C\u53D6\u5230\u6821\u9A8C\u6570\u636E\u5757\u7684SHA\u6821\u9A8C\u503C\n            let checkData;  //\u6821\u9A8C\u6570\u636E\u5757\uFF0C\u53D6\u6700\u540E128B\uFF0C\u5982\u679C\u6700\u540E\u4E00\u4E2A\u5206\u7247\u4E0D\u6EE1128B\u5219\u53D6\u8BE5\u5206\u7247\n            let checking = false; //\u662F\u5426\u5230\u4E86\u8BA1\u7B97\u6821\u9A8CSHA\n            let checkLen = 0;\n            let checkDataStart = 0;\n            let checkDataEnd = 0;\n\n            if(sliceStart === 0) { //\u6709\u53EF\u80FD\u6682\u505C\u518D\u7EE7\u7EED\uFF0C\u4E0D\u80FD\u91CD\u590Dinit\n                sha1_init();\n            }\n\n            if(fileSize === 0) {\n                failCallback({\n                    'ret': 2002023,\n                    'msg': 'fileSize equal 0\uFF0Chave moved or deleted'\n                });\n                return;\n            }\n\n            let handler = {\n                //FileReader\u56DE\u8C03\n                onFileReaderHandler: function(buffer) {\n                    sha1_update(buffer, sliceEnd-sliceStart);\n                    md5.append(buffer);\n                    handler.onUpdateHandler();\n                },\n                onFileErrorHandler: function(e) {\n                    md5Obj = null;\n                    tempHashList = null;\n                    sliceStart = 0;\n                    sliceEnd = 0;\n                    failCallback({\n                        'ret': 2002001,\n                        'msg': '[encrypt]: ' + (e.target.error && (e.target.error.stack || e.target.error.message) + '' || (e + '') || 'onFileErrorHandler') + ', name: ' + file.name + ', start: ' + sliceStart + ', end: ' + sliceEnd\n                    });\n                },\n                //sha\u8BA1\u7B97\u7ED3\u679C\u5904\u7406\n                onUpdateHandler: function() {\n                    let hash;\n\n                    //\u5B8C\u6210\u4E00\u6B21sha\u66F4\u65B0\uFF0C\u5982\u679C\u6587\u4EF6\u8FD8\u6709\u4F59\u4E0B\u7684\u5206\u7247\uFF0C\u7EE7\u7EED\u8BFB\u53D6\u6587\u4EF6\uFF1B\u6CA1\u6709\u5206\u7247\u5C31\u83B7\u53D6\u6574\u4E2Asha\u8FDB\u5165\u4E0A\u4F20\n                    if(sliceEnd < fileSize) {\n                        //\u5982\u679C\u626B\u63CF\u4E2D\u88AB\u6682\u505C\uFF0C\u628A\u8FDB\u5EA6\u4FDD\u5B58\u8D77\u6765\n                        if(pausing === true) {\n                            //update\u5B8C\u6210\u83B7\u53D6\u7D2F\u79EFsha\n                            tempHashList.push({\n                                'sha': sha1_temp_hash(),\n                                'offset': sliceStart,\n                                'size': sliceEnd - sliceStart\n                            });\n                            md5Obj = md5;\n                            hashList = tempHashList;\n                            return;\n                        }\n\n                        if(checking) {\n                            checkSha = sha1_temp_hash();\n                        } else {\n                            //update\u5B8C\u6210\u83B7\u53D6\u7D2F\u79EFsha\n                            tempHashList.push({\n                                'sha': sha1_temp_hash(),\n                                'offset': sliceStart,\n                                'size': sliceEnd - sliceStart\n                            });\n                            //1s\u66F4\u65B0\u4E00\u6B21\u8FDB\u5EA6\n                            if(lastProcessCallbackTime === 0 || (+new Date()) - lastProcessCallbackTime > 1000) {\n                                onProcessCallback(sliceEnd);\n                                lastProcessCallbackTime = +new Date();\n                            }\n                        }\n\n                        chunk();\n                    } else {\n\n                        //\u626B\u63CF\u5B8C\u6210\u83B7\u53D6\u6700\u7EC8sha\u548Cmd5\n                        hash = sha1_final();\n                        let md5Hash = md5.end();\n                        tempHashList.push({\n                            'sha': hash,\n                            'offset': sliceStart - checkLen,\n                            'size': sliceEnd - sliceStart + checkLen\n                        });\n\n                        //\u83B7\u53D6checkData\n                        let h5FileReader = new FileReader();\n                        h5FileReader.onload = function(e) {\n                            checkData = h5FileReader.result.slice(h5FileReader.result.indexOf(\"base64,\") + 7);\n                            if(fileSize < checkFragment) { //\u6587\u4EF6\u5927\u5C0F\u5C0F\u4E8EchecFragment\n                                checkSha = hash;\n                            }\n                            succCallback({\n                                sha: hash,\n                                md5: md5Hash,\n                                hash: tempHashList,\n                                checkSha: checkSha,\n                                checkData: checkData\n                            });\n                        };\n                        h5FileReader.onerror = function(e) {\n                            failCallback({\n                                ret: 2002024,\n                                msg: 'read check_data fail'\n                            });\n                        };\n\n                        h5FileReader.readAsDataURL(blobFile(file, checkDataStart, checkDataEnd));\n                    }\n                }\n            };\n\n            function chunk() {\n                sliceStart = sliceEnd;\n                sliceEnd = Math.min(sliceStart + fragment, fileSize);\n                if(sliceEnd === fileSize && !checking) { //\u5230\u4E86\u6700\u540E\u4E00\u4E2A\u5206\u7247\uFF0C\u5F00\u59CB\u8BA1\u7B97checkSha\u548CcheckData\n                    if(sliceEnd - sliceStart > checkFragment) {\n                        checking = true;\n\n                        sliceEnd = sliceEnd - (sliceEnd % checkFragment === 0 ? checkFragment : sliceEnd % checkFragment);\n                        checkLen = sliceEnd - sliceStart;\n\n                        checkDataStart = sliceEnd;\n                        checkDataEnd = fileSize;\n                    } else {\n                        checkSha = tempHashList.length && tempHashList[tempHashList.length - 1]['sha'];\n                        checkDataStart = sliceStart;\n                        checkDataEnd = sliceEnd;\n                    }\n                }\n                readerFile(file, sliceStart, sliceEnd, handler.onFileReaderHandler, handler.onFileErrorHandler);\n            }\n\n            pausing = false;\n            chunk();\n        }\n\n        //\u6682\u505C\u8BA1\u7B97sha\n        function pause() {\n            pausing = true;\n        }\n\n        function onProcess(fn) {\n            onProcessCallback = fn;\n        }\n\n        return {\n            sha: encryptSHA,\n            pause: pause,\n            onProcess: onProcess\n        };\n\n    }\n\nconst MD5Init = ()=> {\n        /*\n         * SparkMD5, a fast md5 implementation of the MD5 algorithm.\n         * https://github.com/satazor/js-spark-md5\n         *\n         * Copyright 2015 Andr\xE9 Cruz\n         * Released under the WTF public license\n         */\n        \n        'use strict';\n        \n        var add32 = function (a, b) {\n            return (a + b) & 0xFFFFFFFF;\n        },\n            hex_chr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];\n\n        function cmn(q, a, b, x, s, t) {\n            a = add32(add32(a, q), add32(x, t));\n            return add32((a << s) | (a >>> (32 - s)), b);\n        }\n\n        function md5cycle(x, k) {\n            var a = x[0], b = x[1], c = x[2], d = x[3];\n            a += (b & c | ~b & d) + k[0] - 680876936 | 0; a  = (a << 7 | a >>> 25) + b | 0;\n            d += (a & b | ~a & c) + k[1] - 389564586 | 0; d  = (d << 12 | d >>> 20) + a | 0;\n            c += (d & a | ~d & b) + k[2] + 606105819 | 0; c  = (c << 17 | c >>> 15) + d | 0;\n            b += (c & d | ~c & a) + k[3] - 1044525330 | 0; b  = (b << 22 | b >>> 10) + c | 0;\n            a += (b & c | ~b & d) + k[4] - 176418897 | 0; a  = (a << 7 | a >>> 25) + b | 0;\n            d += (a & b | ~a & c) + k[5] + 1200080426 | 0; d  = (d << 12 | d >>> 20) + a | 0;\n            c += (d & a | ~d & b) + k[6] - 1473231341 | 0; c  = (c << 17 | c >>> 15) + d | 0;\n            b += (c & d | ~c & a) + k[7] - 45705983 | 0; b  = (b << 22 | b >>> 10) + c | 0;\n            a += (b & c | ~b & d) + k[8] + 1770035416 | 0; a  = (a << 7 | a >>> 25) + b | 0;\n            d += (a & b | ~a & c) + k[9] - 1958414417 | 0; d  = (d << 12 | d >>> 20) + a | 0;\n            c += (d & a | ~d & b) + k[10] - 42063 | 0; c  = (c << 17 | c >>> 15) + d | 0;\n            b += (c & d | ~c & a) + k[11] - 1990404162 | 0; b  = (b << 22 | b >>> 10) + c | 0;\n            a += (b & c | ~b & d) + k[12] + 1804603682 | 0; a  = (a << 7 | a >>> 25) + b | 0;\n            d += (a & b | ~a & c) + k[13] - 40341101 | 0; d  = (d << 12 | d >>> 20) + a | 0;\n            c += (d & a | ~d & b) + k[14] - 1502002290 | 0; c  = (c << 17 | c >>> 15) + d | 0;\n            b += (c & d | ~c & a) + k[15] + 1236535329 | 0; b  = (b << 22 | b >>> 10) + c | 0;\n            a += (b & d | c & ~d) + k[1] - 165796510 | 0; a  = (a << 5 | a >>> 27) + b | 0;\n            d += (a & c | b & ~c) + k[6] - 1069501632 | 0; d  = (d << 9 | d >>> 23) + a | 0;\n            c += (d & b | a & ~b) + k[11] + 643717713 | 0; c  = (c << 14 | c >>> 18) + d | 0;\n            b += (c & a | d & ~a) + k[0] - 373897302 | 0; b  = (b << 20 | b >>> 12) + c | 0;\n            a += (b & d | c & ~d) + k[5] - 701558691 | 0; a  = (a << 5 | a >>> 27) + b | 0;\n            d += (a & c | b & ~c) + k[10] + 38016083 | 0; d  = (d << 9 | d >>> 23) + a | 0;\n            c += (d & b | a & ~b) + k[15] - 660478335 | 0; c  = (c << 14 | c >>> 18) + d | 0;\n            b += (c & a | d & ~a) + k[4] - 405537848 | 0; b  = (b << 20 | b >>> 12) + c | 0;\n            a += (b & d | c & ~d) + k[9] + 568446438 | 0; a  = (a << 5 | a >>> 27) + b | 0;\n            d += (a & c | b & ~c) + k[14] - 1019803690 | 0; d  = (d << 9 | d >>> 23) + a | 0;\n            c += (d & b | a & ~b) + k[3] - 187363961 | 0; c  = (c << 14 | c >>> 18) + d | 0;\n            b += (c & a | d & ~a) + k[8] + 1163531501 | 0; b  = (b << 20 | b >>> 12) + c | 0;\n            a += (b & d | c & ~d) + k[13] - 1444681467 | 0; a  = (a << 5 | a >>> 27) + b | 0;\n            d += (a & c | b & ~c) + k[2] - 51403784 | 0; d  = (d << 9 | d >>> 23) + a | 0;\n            c += (d & b | a & ~b) + k[7] + 1735328473 | 0; c  = (c << 14 | c >>> 18) + d | 0;\n            b += (c & a | d & ~a) + k[12] - 1926607734 | 0; b  = (b << 20 | b >>> 12) + c | 0;\n            a += (b ^ c ^ d) + k[5] - 378558 | 0; a  = (a << 4 | a >>> 28) + b | 0;\n            d += (a ^ b ^ c) + k[8] - 2022574463 | 0; d  = (d << 11 | d >>> 21) + a | 0;\n            c += (d ^ a ^ b) + k[11] + 1839030562 | 0; c  = (c << 16 | c >>> 16) + d | 0;\n            b += (c ^ d ^ a) + k[14] - 35309556 | 0; b  = (b << 23 | b >>> 9) + c | 0;\n            a += (b ^ c ^ d) + k[1] - 1530992060 | 0; a  = (a << 4 | a >>> 28) + b | 0;\n            d += (a ^ b ^ c) + k[4] + 1272893353 | 0; d  = (d << 11 | d >>> 21) + a | 0;\n            c += (d ^ a ^ b) + k[7] - 155497632 | 0; c  = (c << 16 | c >>> 16) + d | 0;\n            b += (c ^ d ^ a) + k[10] - 1094730640 | 0; b  = (b << 23 | b >>> 9) + c | 0;\n            a += (b ^ c ^ d) + k[13] + 681279174 | 0; a  = (a << 4 | a >>> 28) + b | 0;\n            d += (a ^ b ^ c) + k[0] - 358537222 | 0; d  = (d << 11 | d >>> 21) + a | 0;\n            c += (d ^ a ^ b) + k[3] - 722521979 | 0; c  = (c << 16 | c >>> 16) + d | 0;\n            b += (c ^ d ^ a) + k[6] + 76029189 | 0; b  = (b << 23 | b >>> 9) + c | 0;\n            a += (b ^ c ^ d) + k[9] - 640364487 | 0; a  = (a << 4 | a >>> 28) + b | 0;\n            d += (a ^ b ^ c) + k[12] - 421815835 | 0; d  = (d << 11 | d >>> 21) + a | 0;\n            c += (d ^ a ^ b) + k[15] + 530742520 | 0; c  = (c << 16 | c >>> 16) + d | 0;\n            b += (c ^ d ^ a) + k[2] - 995338651 | 0; b  = (b << 23 | b >>> 9) + c | 0;\n            a += (c ^ (b | ~d)) + k[0] - 198630844 | 0; a  = (a << 6 | a >>> 26) + b | 0;\n            d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0; d  = (d << 10 | d >>> 22) + a | 0;\n            c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0; c  = (c << 15 | c >>> 17) + d | 0;\n            b += (d ^ (c | ~a)) + k[5] - 57434055 | 0; b  = (b << 21 |b >>> 11) + c | 0;\n            a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0; a  = (a << 6 | a >>> 26) + b | 0;\n            d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0; d  = (d << 10 | d >>> 22) + a | 0;\n            c += (a ^ (d | ~b)) + k[10] - 1051523 | 0; c  = (c << 15 | c >>> 17) + d | 0;\n            b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0; b  = (b << 21 |b >>> 11) + c | 0;\n            a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0; a  = (a << 6 | a >>> 26) + b | 0;\n            d += (b ^ (a | ~c)) + k[15] - 30611744 | 0; d  = (d << 10 | d >>> 22) + a | 0;\n            c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0; c  = (c << 15 | c >>> 17) + d | 0;\n            b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0; b  = (b << 21 |b >>> 11) + c | 0;\n            a += (c ^ (b | ~d)) + k[4] - 145523070 | 0; a  = (a << 6 | a >>> 26) + b | 0;\n            d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0; d  = (d << 10 | d >>> 22) + a | 0;\n            c += (a ^ (d | ~b)) + k[2] + 718787259 | 0; c  = (c << 15 | c >>> 17) + d | 0;\n            b += (d ^ (c | ~a)) + k[9] - 343485551 | 0; b  = (b << 21 | b >>> 11) + c | 0;\n            x[0] = a + x[0] | 0; x[1] = b + x[1] | 0; x[2] = c + x[2] | 0; x[3] = d + x[3] | 0;\n        }\n\n        function md5blk_array(a) {\n            var md5blks = [], i;\n            for (i = 0; i < 64; i += 4) {\n                md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24);\n            }\n            return md5blks;\n        }\n\n        function md51_array(a) {\n            var n = a.length, state = [1732584193, -271733879, -1732584194, 271733878], i, length, tail, tmp, lo, hi;\n            for (i = 64; i <= n; i += 64) {\n                md5cycle(state, md5blk_array(a.subarray(i - 64, i)));\n            }\n            a = (i - 64) < n ? a.subarray(i - 64) : new Uint8Array(0);\n            length = a.length;\n            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];\n            for (i = 0; i < length; i += 1) {\n                tail[i >> 2] |= a[i] << ((i % 4) << 3);\n            }\n            tail[i >> 2] |= 0x80 << ((i % 4) << 3);\n            if (i > 55) {\n                md5cycle(state, tail);\n                for (i = 0; i < 16; i += 1) { tail[i] = 0; }\n            }\n            tmp = n * 8;\n            tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);\n            lo = parseInt(tmp[2], 16);\n            hi = parseInt(tmp[1], 16) || 0;\n            tail[14] = lo; tail[15] = hi;\n            md5cycle(state, tail);\n            return state;\n        }\n\n        function rhex(n) {\n            var s = '', j;\n            for (j = 0; j < 4; j += 1) {\n                s += hex_chr[(n >> (j * 8 + 4)) & 0x0F] + hex_chr[(n >> (j * 8)) & 0x0F];\n            }\n            return s;\n        }\n\n        function hex(x) {\n            var i;\n            for (i = 0; i < x.length; i += 1) { x[i] = rhex(x[i]); }\n            return x.join('');\n        }\n\n        function concatenateArrayBuffers(first, second, returnUInt8Array) {\n            var result = new Uint8Array(first.byteLength + second.byteLength);\n            result.set(new Uint8Array(first));\n            result.set(new Uint8Array(second), first.byteLength);\n            return returnUInt8Array ? result : result.buffer;\n        }\n\n        function SparkMD5ArrayBuffer() {\n            this.reset();\n        }\n\n        SparkMD5ArrayBuffer.prototype.append = function (arr) {\n            var buff = concatenateArrayBuffers(this._buff.buffer, arr, true), length = buff.length, i;\n            this._length += arr.byteLength;\n            for (i = 64; i <= length; i += 64) {\n                md5cycle(this._hash, md5blk_array(buff.subarray(i - 64, i)));\n            }\n            this._buff = (i - 64) < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);\n            return this;\n        };\n\n        SparkMD5ArrayBuffer.prototype.end = function (raw) {\n            var buff = this._buff, length = buff.length, tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], i, ret;\n            for (i = 0; i < length; i += 1) {\n                tail[i >> 2] |= buff[i] << ((i % 4) << 3);\n            }\n            this._finish(tail, length);\n            ret = hex(this._hash);\n            this.reset();\n            return ret;\n        };\n\n        SparkMD5ArrayBuffer.prototype.reset = function () {\n            this._buff = new Uint8Array(0);\n            this._length = 0;\n            this._hash = [1732584193, -271733879, -1732584194, 271733878];\n            return this;\n        };\n\n        SparkMD5ArrayBuffer.prototype.getState = function () {\n            var state = {\n                buff: this._buff,\n                length: this._length,\n                hash: this._hash.slice()\n            };\n            return state;\n        };\n\n        SparkMD5ArrayBuffer.prototype.setState = function (state) {\n            this._buff = state.buff;\n            this._length = state.length;\n            this._hash = state.hash;\n            return this;\n        };\n\n        SparkMD5ArrayBuffer.prototype.destroy = function () {\n            delete this._hash;\n            delete this._buff;\n            delete this._length;\n        };\n\n        SparkMD5ArrayBuffer.prototype._finish = function (tail, length) {\n            var i = length, tmp, lo, hi;\n            tail[i >> 2] |= 0x80 << ((i % 4) << 3);\n            if (i > 55) {\n                md5cycle(this._hash, tail);\n                for (i = 0; i < 16; i += 1) { tail[i] = 0; }\n            }\n            tmp = this._length * 8;\n            tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);\n            lo = parseInt(tmp[2], 16);\n            hi = parseInt(tmp[1], 16) || 0;\n            tail[14] = lo; tail[15] = hi;\n            md5cycle(this._hash, tail);\n        };\n\n        return SparkMD5ArrayBuffer;\n    }\n\n        const SHAInit = ()=> {\n        /*\n            * Rusha, a JavaScript implementation of the Secure Hash Algorithm, SHA-1,\n            * as defined in FIPS PUB 180-1, tuned for high performance with large inputs.\n            * (http://github.com/srijs/rusha)\n            *\n            * Inspired by Paul Johnstons implementation (http://pajhome.org.uk/crypt/md5).\n            *\n            * Copyright (c) 2013 Sam Rijs (http://awesam.de).\n            * Released under the terms of the MIT license as follows:\n            *\n            * Permission is hereby granted, free of charge, to any person obtaining a\n            * copy of this software and associated documentation files (the \"Software\"),\n            * to deal in the Software without restriction, including without limitation\n            * the rights to use, copy, modify, merge, publish, distribute, sublicense,\n            * and/or sell copies of the Software, and to permit persons to whom the\n            * Software is furnished to do so, subject to the following conditions:\n            *\n            * The above copyright notice and this permission notice shall be included in\n            * all copies or substantial portions of the Software.\n            *\n            * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n            * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n            * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n            * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n            * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n            * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS\n            * IN THE SOFTWARE.\n            */\n            var // Calculate the length of buffer that the sha1 routine uses\n            // including the padding.\n            padlen = function (len) {\n                for (len += 9; len % 64 > 0; len += 1);\n                return len;\n            };\n            var padZeroes = function (bin, len) {\n                var h8 = new Uint8Array(bin.buffer);\n                var om = len % 4;\n                var align = len - om;\n                switch (om) {\n                case 0:\n                    h8[align + 3] = 0;\n                case 1:\n                    h8[align + 2] = 0;\n                case 2:\n                    h8[align + 1] = 0;\n                case 3:\n                    h8[align + 0] = 0;\n                }\n                for (var i = (len >> 2) + 1; i < bin.length; i++)\n                    bin[i] = 0;\n            };\n            var padData = function (bin, chunkLen, msgLen) {\n                bin[chunkLen>>2] |= 0x80 << (24 - (chunkLen % 4 << 3));\n                // bin[(((chunkLen >> 2) + 2) & ~0x0f) + 14] = msgLen >> 29;\n                // To support msgLen >= 2 GiB, use a float division when computing the\n                // high 32-bits of the big-endian message length in bits.\n                bin[(((chunkLen >> 2) + 2) & ~0x0f) + 14] = (msgLen / (1 << 29)) |0;\n                bin[(((chunkLen >> 2) + 2) & ~0x0f) + 15] = msgLen << 3;\n            };\n            var // Convert an ArrayBuffer into its hexadecimal string representation.\n            hex = function (arrayBuffer) {\n                var i, x, hex_tab = '0123456789abcdef', res = '', binarray = new Uint8Array(arrayBuffer);\n                for (i = 0; i < binarray.length; i++) {\n                    x = binarray[i];\n                    res += hex_tab.charAt(x >> 4 & 15) + hex_tab.charAt(x >> 0 & 15);\n                }\n                return res;\n            };\n            var ceilHeapSize = function (v) {\n                // The asm.js spec says:\n                // The heap object's byteLength must be either\n                // 2^n for n in [12, 24) or 2^24 * n for n \u2265 1.\n                // Also, byteLengths smaller than 2^16 are deprecated.\n                var p;\n                if (// If v is smaller than 2^16, the smallest possible solution\n                    // is 2^16.\n                    v <= 65536)\n                    return 65536;\n                if (// If v < 2^24, we round up to 2^n,\n                    // otherwise we round up to 2^24 * n.\n                    v < 16777216) {\n                    for (p = 65536; p < v; p = p << 1);\n                } else {\n                    for (p = 16777216; p < v; p += 16777216);\n                }\n                return p;\n            };\n            var getRawDigest = function (heap, padMaxChunkLen) {\n                var io = new Int32Array(heap, padMaxChunkLen + 320, 5);\n                var out = new Int32Array(5);\n                var arr = new DataView(out.buffer);\n                arr.setInt32(0, io[0], false);\n                arr.setInt32(4, io[1], false);\n                arr.setInt32(8, io[2], false);\n                arr.setInt32(12, io[3], false);\n                arr.setInt32(16, io[4], false);\n                return out;\n            };\n            function Rusha(chunkSize) {\n                'use strict';\n                // Private object structure.\n                var self$2 = {};\n                chunkSize = chunkSize || 64 * 1024;\n                if (chunkSize % 64 > 0) {\n                    throw new Error('Chunk size must be a multiple of 128 bit');\n                }\n                self$2.offset = 0;\n                self$2.maxChunkLen = chunkSize;\n                self$2.padMaxChunkLen = padlen(chunkSize);\n                // The size of the heap is the sum of:\n                // 1. The padded input message size\n                // 2. The extended space the algorithm needs (320 byte)\n                // 3. The 160 bit state the algoritm uses\n                self$2.heap = new ArrayBuffer(ceilHeapSize(self$2.padMaxChunkLen + 320 + 20));\n                self$2.h32 = new Int32Array(self$2.heap);\n                self$2.h8 = new Int8Array(self$2.heap);\n                self$2.core = new Rusha._core({ Int32Array: Int32Array }, {}, self$2.heap);\n\n                self$2.tempHash = [];\n                initState();\n                function initState() {\n                    self$2.offset = 0;\n                    var io = new Int32Array(self$2.heap, self$2.padMaxChunkLen + 320, 5);\n                    io[0] = 1732584193;\n                    io[1] = -271733879;\n                    io[2] = -1732584194;\n                    io[3] = 271733878;\n                    io[4] = -1009589776;\n                }\n                function convBuf(buf, start, len, offset) {\n                    var om = offset % 4;\n                    var lm = (len + om) % 4;\n                    var j = len - lm;\n                    switch (om) {\n                    case 0:\n                        self$2.h8[offset] = buf[start + 3];\n                    case 1:\n                        self$2.h8[offset + 1 - (om << 1) | 0] = buf[start + 2];\n                    case 2:\n                        self$2.h8[offset + 2 - (om << 1) | 0] = buf[start + 1];\n                    case 3:\n                        self$2.h8[offset + 3 - (om << 1) | 0] = buf[start];\n                    }\n                    if (len < lm + om) {\n                        return;\n                    }\n                    for (var i = 4 - om; i < j; i = i + 4 | 0) {\n                        self$2.h32[offset + i >> 2 | 0] = buf[start + i] << 24 | buf[start + i + 1] << 16 | buf[start + i + 2] << 8 | buf[start + i + 3];\n                    }\n                    switch (lm) {\n                    case 3:\n                        self$2.h8[offset + j + 1 | 0] = buf[start + j + 2];\n                    case 2:\n                        self$2.h8[offset + j + 2 | 0] = buf[start + j + 1];\n                    case 1:\n                        self$2.h8[offset + j + 3 | 0] = buf[start + j];\n                    }\n                }\n                ;\n                var // Calculate the hash digest as an array of 5 32bit integers.\n                rawDigest = this.rawDigest = function (msg) {\n                    var msgLen = msg.byteLength;\n                    initState();\n                    msg = new Uint8Array(msg);\n                    var chunkLen = self$2.maxChunkLen;\n                    var chunkOffset = 0;\n                    for (; chunkOffset + chunkLen < msgLen; chunkOffset += chunkLen) {\n                        convBuf(msg, chunkOffset, chunkLen, 0);\n                        self$2.core.hash(chunkLen, self$2.padMaxChunkLen);\n                    }\n                    chunkLen = msgLen - chunkOffset;\n                    var padChunkLen = padlen(chunkLen);\n                    var view = new Int32Array(self$2.heap, 0, padChunkLen >> 2);\n                    convBuf(msg, chunkOffset, chunkLen, 0);\n                    padZeroes(view, chunkLen);\n                    padData(view, chunkLen, msgLen);\n                    self$2.core.hash(padChunkLen, self$2.padMaxChunkLen);\n                    return getRawDigest(self$2.heap, self$2.padMaxChunkLen);\n                };\n                // The digest and digestFrom* interface returns the hash digest\n                // as a hex string.\n                this.digest = function (msg) {\n                    return hex(rawDigest(msg).buffer);\n                };\n                var reset = this.reset = function () {\n                    initState();\n                };\n                this.append = function (chunk) {\n                    var chunkOffset = 0;\n                    var chunkLen = chunk.byteLength;\n                    var turnOffset = self$2.offset % self$2.maxChunkLen;\n                    chunk = new Uint8Array(chunk);\n                    self$2.offset += chunkLen;\n                    while (chunkOffset < chunkLen) {\n                        var inputLen = Math.min(chunkLen - chunkOffset, self$2.maxChunkLen - turnOffset);\n                        convBuf(chunk, chunkOffset, inputLen, turnOffset);\n                        turnOffset += inputLen;\n                        chunkOffset += inputLen;\n                        if (turnOffset === self$2.maxChunkLen) {\n                            self$2.core.hash(self$2.maxChunkLen, self$2.padMaxChunkLen);\n                            turnOffset = 0;\n                        }\n                    }\n                };\n\n                this.getTempHash = function() {\n                    var state = this.getState();\n                    let binarray = state.io;\n                    var hex_tab = \"0123456789abcdef\", str = \"\", temp = \"\",\n                    length = binarray.length, i, j, k, srcByte;\n\n                    for (i = 0; i < length; i += 1)\n                    {\n                        for(j = 0; j < 4; j += 1) {\n                            k = i * 4 + j;\n                            /* The below is more than a byte but it gets taken care of later */\n                            srcByte = binarray[k >>> 2] >>> ((3 - (k % 4)) * 8);\n                            temp += hex_tab.charAt((srcByte >>> 4) & 0xF) +\n                                hex_tab.charAt(srcByte & 0xF);\n                        }\n                        str += temp.match(/(ww)(ww)(ww)(ww)/).slice(1).reverse().join('');\n                        temp = \"\";\n                    }\n\n                    this.setState(state);\n\n                    return str;\n                };\n\n                this.arraybuffer2binb = function(arr, existingBin, existingBinLen) {\n                    var bin = [], i, existingByteLen, intOffset, byteOffset;\n\n                    bin = existingBin || [0];\n                    existingBinLen = existingBinLen || 0;\n                    existingByteLen = existingBinLen >>> 3;\n\n                    for (i = 0; i < arr.byteLength; i += 1)\n                    {\n                        byteOffset = i + existingByteLen;\n                        intOffset = byteOffset >>> 2;\n                        if (bin.length <= intOffset)\n                        {\n                            bin.push(0);\n                        }\n                        bin[intOffset] |= arr[i] << 8 * (3 - (byteOffset % 4));\n                    }\n\n                    return bin;\n                }\n\n                var rawEnd = this.rawEnd = function () {\n                    var msgLen = self$2.offset;\n                    var chunkLen = msgLen % self$2.maxChunkLen;\n                    var padChunkLen = padlen(chunkLen);\n                    var view = new Int32Array(self$2.heap, 0, padChunkLen >> 2);\n                    padZeroes(view, chunkLen);\n                    padData(view, chunkLen, msgLen);\n                    self$2.core.hash(padChunkLen, self$2.padMaxChunkLen);\n                    var result = getRawDigest(self$2.heap, self$2.padMaxChunkLen);\n                    initState();\n                    return result;\n                };\n                this.end = function () {\n                    return hex(rawEnd().buffer);\n                };\n                this.getState = function () {\n\n                    var turnOffset = self$2.offset % self$2.maxChunkLen,\n                        heap;\n\n                    if(!turnOffset){\n                        var io = new Int32Array(self$2.heap, self$2.padMaxChunkLen + 320, 5);\n                        heap = io.buffer.slice(io.byteOffset, io.byteOffset+io.byteLength)\n                    }else{\n                        heap = self$2.heap.slice(0);\n                    }\n\n                    return {\n                        offset: self$2.offset,\n                        heap: heap,\n                        io: io\n                    };\n                };\n                this.setState = function (state) {\n                    self$2.offset = state.offset;\n                    if(state.heap.byteLength === 20){\n                        var io = new Int32Array(self$2.heap, self$2.padMaxChunkLen + 320, 5);\n                        io.set(new Int32Array(state.heap));\n                    }else{\n                        self$2.h32.set(new Int32Array(state.heap));\n                    }\n                };\n            }\n            ;\n            // The low-level RushCore module provides the heart of Rusha,\n            // a high-speed sha1 implementation working on an Int32Array heap.\n            // At first glance, the implementation seems complicated, however\n            // with the SHA1 spec at hand, it is obvious this almost a textbook\n            // implementation that has a few functions hand-inlined and a few loops\n            // hand-unrolled.\n            Rusha._core = function RushaCore(stdlib, foreign, heap) {\n                var H = new stdlib.Int32Array(heap);\n                function hash(k, x) {\n                    // k in bytes\n                    k = k | 0;\n                    x = x | 0;\n                    var i = 0, j = 0, y0 = 0, z0 = 0, y1 = 0, z1 = 0, y2 = 0, z2 = 0, y3 = 0, z3 = 0, y4 = 0, z4 = 0, t0 = 0, t1 = 0;\n                    y0 = H[x + 320 >> 2] | 0;\n                    y1 = H[x + 324 >> 2] | 0;\n                    y2 = H[x + 328 >> 2] | 0;\n                    y3 = H[x + 332 >> 2] | 0;\n                    y4 = H[x + 336 >> 2] | 0;\n                    for (i = 0; (i | 0) < (k | 0); i = i + 64 | 0) {\n                        z0 = y0;\n                        z1 = y1;\n                        z2 = y2;\n                        z3 = y3;\n                        z4 = y4;\n                        for (j = 0; (j | 0) < 64; j = j + 4 | 0) {\n                            t1 = H[i + j >> 2] | 0;\n                            t0 = ((y0 << 5 | y0 >>> 27) + (y1 & y2 | ~y1 & y3) | 0) + ((t1 + y4 | 0) + 1518500249 | 0) | 0;\n                            y4 = y3;\n                            y3 = y2;\n                            y2 = y1 << 30 | y1 >>> 2;\n                            y1 = y0;\n                            y0 = t0;\n                            H[k + j >> 2] = t1;\n                        }\n                        for (j = k + 64 | 0; (j | 0) < (k + 80 | 0); j = j + 4 | 0) {\n                            t1 = (H[j - 12 >> 2] ^ H[j - 32 >> 2] ^ H[j - 56 >> 2] ^ H[j - 64 >> 2]) << 1 | (H[j - 12 >> 2] ^ H[j - 32 >> 2] ^ H[j - 56 >> 2] ^ H[j - 64 >> 2]) >>> 31;\n                            t0 = ((y0 << 5 | y0 >>> 27) + (y1 & y2 | ~y1 & y3) | 0) + ((t1 + y4 | 0) + 1518500249 | 0) | 0;\n                            y4 = y3;\n                            y3 = y2;\n                            y2 = y1 << 30 | y1 >>> 2;\n                            y1 = y0;\n                            y0 = t0;\n                            H[j >> 2] = t1;\n                        }\n                        for (j = k + 80 | 0; (j | 0) < (k + 160 | 0); j = j + 4 | 0) {\n                            t1 = (H[j - 12 >> 2] ^ H[j - 32 >> 2] ^ H[j - 56 >> 2] ^ H[j - 64 >> 2]) << 1 | (H[j - 12 >> 2] ^ H[j - 32 >> 2] ^ H[j - 56 >> 2] ^ H[j - 64 >> 2]) >>> 31;\n                            t0 = ((y0 << 5 | y0 >>> 27) + (y1 ^ y2 ^ y3) | 0) + ((t1 + y4 | 0) + 1859775393 | 0) | 0;\n                            y4 = y3;\n                            y3 = y2;\n                            y2 = y1 << 30 | y1 >>> 2;\n                            y1 = y0;\n                            y0 = t0;\n                            H[j >> 2] = t1;\n                        }\n                        for (j = k + 160 | 0; (j | 0) < (k + 240 | 0); j = j + 4 | 0) {\n                            t1 = (H[j - 12 >> 2] ^ H[j - 32 >> 2] ^ H[j - 56 >> 2] ^ H[j - 64 >> 2]) << 1 | (H[j - 12 >> 2] ^ H[j - 32 >> 2] ^ H[j - 56 >> 2] ^ H[j - 64 >> 2]) >>> 31;\n                            t0 = ((y0 << 5 | y0 >>> 27) + (y1 & y2 | y1 & y3 | y2 & y3) | 0) + ((t1 + y4 | 0) - 1894007588 | 0) | 0;\n                            y4 = y3;\n                            y3 = y2;\n                            y2 = y1 << 30 | y1 >>> 2;\n                            y1 = y0;\n                            y0 = t0;\n                            H[j >> 2] = t1;\n                        }\n                        for (j = k + 240 | 0; (j | 0) < (k + 320 | 0); j = j + 4 | 0) {\n                            t1 = (H[j - 12 >> 2] ^ H[j - 32 >> 2] ^ H[j - 56 >> 2] ^ H[j - 64 >> 2]) << 1 | (H[j - 12 >> 2] ^ H[j - 32 >> 2] ^ H[j - 56 >> 2] ^ H[j - 64 >> 2]) >>> 31;\n                            t0 = ((y0 << 5 | y0 >>> 27) + (y1 ^ y2 ^ y3) | 0) + ((t1 + y4 | 0) - 899497514 | 0) | 0;\n                            y4 = y3;\n                            y3 = y2;\n                            y2 = y1 << 30 | y1 >>> 2;\n                            y1 = y0;\n                            y0 = t0;\n                            H[j >> 2] = t1;\n                        }\n                        y0 = y0 + z0 | 0;\n                        y1 = y1 + z1 | 0;\n                        y2 = y2 + z2 | 0;\n                        y3 = y3 + z3 | 0;\n                        y4 = y4 + z4 | 0;\n                    }\n                    H[x + 320 >> 2] = y0;\n                    H[x + 324 >> 2] = y1;\n                    H[x + 328 >> 2] = y2;\n                    H[x + 332 >> 2] = y3;\n                    H[x + 336 >> 2] = y4;\n                }\n                return { hash: hash };\n            };\n\n        return Rusha;\n    }\n\n    var codeBase64 = 'AGFzbQEAAAABKwhgA39/fwF/YAF/AX9gAX8AYAABf2ACf38Bf2ACf38AYAAAYAR/f39/AX8C1gISA2Vudg5EWU5BTUlDVE9QX1BUUgN/AANlbnYIU1RBQ0tUT1ADfwADZW52CVNUQUNLX01BWAN/AANlbnYGbWVtb3J5AgGAAoACA2VudgV0YWJsZQFwAQYGA2Vudgl0YWJsZUJhc2UDfwADZW52BWFib3J0AAIDZW52DWVubGFyZ2VNZW1vcnkAAwNlbnYOZ2V0VG90YWxNZW1vcnkAAwNlbnYXYWJvcnRPbkNhbm5vdEdyb3dNZW1vcnkAAwNlbnYHX19fbG9jawACA2VudgtfX19zZXRFcnJObwACA2Vudg1fX19zeXNjYWxsMTQwAAQDZW52DV9fX3N5c2NhbGwxNDYABANlbnYMX19fc3lzY2FsbDU0AAQDZW52C19fX3N5c2NhbGw2AAQDZW52CV9fX3VubG9jawACA2VudhZfZW1zY3JpcHRlbl9tZW1jcHlfYmlnAAADHx4BAAEFAQEDAQAGBQMCBQABBwUEAAIAAQMBAwMFAwEGHwZ/ASMAC38BIwELfwEjAgt/AUEAC38BQQALfwFBAAsHhAIREV9fX2Vycm5vX2xvY2F0aW9uABIbX2Vtc2NyaXB0ZW5fZ2V0X2dsb2JhbF9saWJjACMHX2ZmbHVzaAATB19tYWxsb2MAJAtfc2hhMV9maW5hbAAlCl9zaGExX2luaXQAFQ9fc2hhMV90ZW1wX2hhc2gAJgxfc2hhMV91cGRhdGUAJwpkeW5DYWxsX2lpAB4MZHluQ2FsbF9paWlpABwTZXN0YWJsaXNoU3RhY2tTcGFjZQAdC2dldFRlbXBSZXQwABcLc2V0VGVtcFJldDAAGAhzZXRUaHJldwAZCnN0YWNrQWxsb2MAKQxzdGFja1Jlc3RvcmUAIAlzdGFja1NhdmUAKAkMAQAjAwsGGyIaHyEUCph0HisAIABB/wFxQRh0IABBCHVB/wFxQRB0ciAAQRB1Qf8BcUEIdHIgAEEYdnILxgMBA38gAkGAwABOBEAgACABIAIQCw8LIAAhBCAAIAJqIQMgAEEDcSABQQNxRgRAA0AgAEEDcQRAIAJFBEAgBA8LIAAgASwAADoAACAAQQFqIQAgAUEBaiEBIAJBAWshAgwBCwsgA0F8cSICQcAAayEFA0AgACAFTARAIAAgASgCADYCACAAIAEoAgQ2AgQgACABKAIINgIIIAAgASgCDDYCDCAAIAEoAhA2AhAgACABKAIUNgIUIAAgASgCGDYCGCAAIAEoAhw2AhwgACABKAIgNgIgIAAgASgCJDYCJCAAIAEoAig2AiggACABKAIsNgIsIAAgASgCMDYCMCAAIAEoAjQ2AjQgACABKAI4NgI4IAAgASgCPDYCPCAAQcAAaiEAIAFBwABqIQEMAQsLA0AgACACSARAIAAgASgCADYCACAAQQRqIQAgAUEEaiEBDAELCwUgA0EEayECA0AgACACSARAIAAgASwAADoAACAAIAEsAAE6AAEgACABLAACOgACIAAgASwAAzoAAyAAQQRqIQAgAUEEaiEBDAELCwsDQCAAIANIBEAgACABLAAAOgAAIABBAWohACABQQFqIQEMAQsLIAQLWwECfyMEKAIAIgIgAEEPakFwcSIAaiEBIABBAEogASACSHEgAUEASHIEQBADGkEMEAVBfw8LIwQgATYCACABEAJKBEAQAUUEQCMEIAI2AgBBDBAFQX8PCwsgAguvKwEcfyABKAAEIRYgASgACCELIAEoAAwhDCABKAAQIREgASgAFCENIAEoABghDiABKAAcIRIgASgAICEJIAEoACQhCiABKAAoIQ8gASgALCEQIAEoADAhEyABKAA0IQMgASgAOCEVIAEoADwhFCAAKAIAIRcgAEEEaiIZKAIAIQIgAEEIaiIaKAIAIQQgAEEMaiIbKAIAIQcgAEEQaiIcKAIAIQggASgAACIFEAxBmfOJ1AVqIBdBBXQgF0EbdnJqIAhqIAcgBHMgAnEgB3NqIQEgFhAMQZnzidQFaiAHaiACQR50IAJBAnZyIgcgBHMgF3EgBHNqIAFBBXQgAUEbdnJqIQIgCxAMQZnzidQFaiAEaiABIAcgF0EedCAXQQJ2ciIIc3EgB3NqIAJBBXQgAkEbdnJqIQQgDBAMQZnzidQFaiAHaiACIAFBHnQgAUECdnIiByAIc3EgCHNqIARBBXQgBEEbdnJqIQEgERAMQZnzidQFaiAIaiAEIAJBHnQgAkECdnIiCCAHc3EgB3NqIAFBBXQgAUEbdnJqIQIgDRAMQZnzidQFaiAHaiABIARBHnQgBEECdnIiByAIc3EgCHNqIAJBBXQgAkEbdnJqIQQgDhAMQZnzidQFaiAIaiACIAFBHnQgAUECdnIiCCAHc3EgB3NqIARBBXQgBEEbdnJqIQEgEhAMQZnzidQFaiAHaiAEIAJBHnQgAkECdnIiByAIc3EgCHNqIAFBBXQgAUEbdnJqIQIgCRAMQZnzidQFaiAIaiABIARBHnQgBEECdnIiCCAHc3EgB3NqIAJBBXQgAkEbdnJqIQQgChAMQZnzidQFaiAHaiACIAFBHnQgAUECdnIiByAIc3EgCHNqIARBBXQgBEEbdnJqIQEgDxAMQZnzidQFaiAIaiAEIAJBHnQgAkECdnIiCCAHc3EgB3NqIAFBBXQgAUEbdnJqIQIgEBAMQZnzidQFaiAHaiABIARBHnQgBEECdnIiByAIc3EgCHNqIAJBBXQgAkEbdnJqIQQgExAMQZnzidQFaiAIaiACIAFBHnQgAUECdnIiCCAHc3EgB3NqIARBBXQgBEEbdnJqIQEgAxAMQZnzidQFaiAHaiAEIAJBHnQgAkECdnIiByAIc3EgCHNqIAFBBXQgAUEbdnJqIQIgFRAMIhhBmfOJ1AVqIAhqIAEgBEEedCAEQQJ2ciIIIAdzcSAHc2ogAkEFdCACQRt2cmohBCAUEAwiHUGZ84nUBWogB2ogAiABQR50IAFBAnZyIgYgCHNxIAhzaiAEQQV0IARBG3ZyaiEBIAsgBXMgCXMgA3MQDCIHQQF0IAdBH3ZyIgdBmfOJ1AVqIAhqIAQgAkEedCACQQJ2ciIFIAZzcSAGc2ogAUEFdCABQRt2cmohAiAMIBZzIApzIBVzEAwiCEEBdCAIQR92ciIIQZnzidQFaiAGaiABIARBHnQgBEECdnIiBiAFc3EgBXNqIAJBBXQgAkEbdnJqIQQgESALcyAPcyAUcxAMIgtBAXQgC0EfdnIiC0GZ84nUBWogBWogAiABQR50IAFBAnZyIgUgBnNxIAZzaiAEQQV0IARBG3ZyaiEBIA0gDHMgEHMQDCAHcyIMQQF0IAxBH3ZyIgxBmfOJ1AVqIAZqIAQgAkEedCACQQJ2ciIGIAVzcSAFc2ogAUEFdCABQRt2cmohAiAOIBFzIBNzEAwgCHMiEUEBdCARQR92ciIRQaHX5/YGaiAFaiAEQR50IARBAnZyIgUgBnMgAXNqIAJBBXQgAkEbdnJqIQQgEiANcyADcxAMIAtzIg1BAXQgDUEfdnIiDUGh1+f2BmogBmogAUEedCABQQJ2ciIGIAVzIAJzaiAEQQV0IARBG3ZyaiEBIAkgDnMgFXMQDCAMcyIOQQF0IA5BH3ZyIg5Bodfn9gZqIAVqIAJBHnQgAkECdnIiBSAGcyAEc2ogAUEFdCABQRt2cmohAiAKIBJzIBRzEAwgEXMiEkEBdCASQR92ciISQaHX5/YGaiAGaiAEQR50IARBAnZyIgYgBXMgAXNqIAJBBXQgAkEbdnJqIQQgDyAJcxAMIAdzIA1zIglBAXQgCUEfdnIiCUGh1+f2BmogBWogAUEedCABQQJ2ciIFIAZzIAJzaiAEQQV0IARBG3ZyaiEBIBAgCnMQDCAIcyAOcyIKQQF0IApBH3ZyIgpBodfn9gZqIAZqIAJBHnQgAkECdnIiBiAFcyAEc2ogAUEFdCABQRt2cmohAiATIA9zEAwgC3MgEnMiD0EBdCAPQR92ciIPQaHX5/YGaiAFaiAEQR50IARBAnZyIgUgBnMgAXNqIAJBBXQgAkEbdnJqIQQgAyAQcxAMIAxzIAlzIhBBAXQgEEEfdnIiEEGh1+f2BmogBmogAUEedCABQQJ2ciIGIAVzIAJzaiAEQQV0IARBG3ZyaiEBIBUgE3MQDCARcyAKcyITQQF0IBNBH3ZyIhNBodfn9gZqIAVqIAJBHnQgAkECdnIiBSAGcyAEc2ogAUEFdCABQRt2cmohAiAUIANzEAwgDXMgD3MiA0EBdCADQR92ciIVQaHX5/YGaiAGaiAEQR50IARBAnZyIgQgBXMgAXNqIAJBBXQgAkEbdnJqIQMgByAYcyAOcyAQcyIUQQF0IBRBH3ZyIhRBodfn9gZqIAVqIAFBHnQgAUECdnIiBSAEcyACc2ogA0EFdCADQRt2cmohASAIIB1zIBJzIBNzIgZBAXQgBkEfdnIiBkGh1+f2BmogBGogAkEedCACQQJ2ciIEIAVzIANzaiABQQV0IAFBG3ZyaiECIAsgB3MgCXMgFXMiB0EBdCAHQR92ciIHQaHX5/YGaiAFaiADQR50IANBAnZyIgUgBHMgAXNqIAJBBXQgAkEbdnJqIQMgDCAIcyAKcyAUcyIIQQF0IAhBH3ZyIghBodfn9gZqIARqIAFBHnQgAUECdnIiBCAFcyACc2ogA0EFdCADQRt2cmohASARIAtzIA9zIAZzIgtBAXQgC0EfdnIiC0Gh1+f2BmogBWogAkEedCACQQJ2ciIFIARzIANzaiABQQV0IAFBG3ZyaiECIA0gDHMgEHMgB3MiDEEBdCAMQR92ciIMQaHX5/YGaiAEaiADQR50IANBAnZyIhYgBXMgAXNqIAJBBXQgAkEbdnJqIQMgDiARcyATcyAIcyIEQQF0IARBH3ZyIhFBodfn9gZqIAVqIAFBHnQgAUECdnIiASAWcyACc2ogA0EFdCADQRt2cmohBCASIA1zIBVzIAtzIg1BAXQgDUEfdnIiDUGh1+f2BmogFmogAkEedCACQQJ2ciIFIAFzIANzaiAEQQV0IARBG3ZyaiECIAkgDnMgFHMgDHMiDkEBdCAOQR92ciIOQaHX5/YGaiABaiADQR50IANBAnZyIhYgBXMgBHNqIAJBBXQgAkEbdnJqIQEgCiAScyAGcyARcyIDQQF0IANBH3ZyIhJBodfn9gZqIAVqIARBHnQgBEECdnIiGCAWcyACc2ogAUEFdCABQRt2cmohAyAPIAlzIAdzIA1zIgRBAXQgBEEfdnIiBEHc+e74eGogFmogASACQR50IAJBAnZyIgVyIBhxIAEgBXFyaiADQQV0IANBG3ZyaiECIBAgCnMgCHMgDnMiCUEBdCAJQR92ciIJQdz57vh4aiAYaiADIAFBHnQgAUECdnIiFnIgBXEgAyAWcXJqIAJBBXQgAkEbdnJqIQEgEyAPcyALcyAScyIKQQF0IApBH3ZyIgpB3Pnu+HhqIAVqIAIgA0EedCADQQJ2ciIFciAWcSACIAVxcmogAUEFdCABQRt2cmohAyAVIBBzIAxzIARzIg9BAXQgD0EfdnIiD0Hc+e74eGogFmogASACQR50IAJBAnZyIhZyIAVxIAEgFnFyaiADQQV0IANBG3ZyaiECIBQgE3MgEXMgCXMiEEEBdCAQQR92ciIQQdz57vh4aiAFaiADIAFBHnQgAUECdnIiBXIgFnEgAyAFcXJqIAJBBXQgAkEbdnJqIQEgBiAVcyANcyAKcyITQQF0IBNBH3ZyIhNB3Pnu+HhqIBZqIAIgA0EedCADQQJ2ciIWciAFcSACIBZxcmogAUEFdCABQRt2cmohAyAHIBRzIA5zIA9zIhVBAXQgFUEfdnIiFUHc+e74eGogBWogASACQR50IAJBAnZyIgVyIBZxIAEgBXFyaiADQQV0IANBG3ZyaiECIAggBnMgEnMgEHMiFEEBdCAUQR92ciIUQdz57vh4aiAWaiADIAFBHnQgAUECdnIiBnIgBXEgAyAGcXJqIAJBBXQgAkEbdnJqIQEgCyAHcyAEcyATcyIHQQF0IAdBH3ZyIgdB3Pnu+HhqIAVqIAIgA0EedCADQQJ2ciIFciAGcSACIAVxcmogAUEFdCABQRt2cmohAyAMIAhzIAlzIBVzIghBAXQgCEEfdnIiCEHc+e74eGogBmogASACQR50IAJBAnZyIgZyIAVxIAEgBnFyaiADQQV0IANBG3ZyaiECIBEgC3MgCnMgFHMiC0EBdCALQR92ciILQdz57vh4aiAFaiADIAFBHnQgAUECdnIiBXIgBnEgAyAFcXJqIAJBBXQgAkEbdnJqIQEgDSAMcyAPcyAHcyIMQQF0IAxBH3ZyIgxB3Pnu+HhqIAZqIAIgA0EedCADQQJ2ciIGciAFcSACIAZxcmogAUEFdCABQRt2cmohAyAOIBFzIBBzIAhzIhFBAXQgEUEfdnIiEUHc+e74eGogBWogASACQR50IAJBAnZyIgVyIAZxIAEgBXFyaiADQQV0IANBG3ZyaiECIBIgDXMgE3MgC3MiDUEBdCANQR92ciINQdz57vh4aiAGaiADIAFBHnQgAUECdnIiBnIgBXEgAyAGcXJqIAJBBXQgAkEbdnJqIQEgBCAOcyAVcyAMcyIOQQF0IA5BH3ZyIg5B3Pnu+HhqIAVqIAIgA0EedCADQQJ2ciIFciAGcSACIAVxcmogAUEFdCABQRt2cmohAyAJIBJzIBRzIBFzIhJBAXQgEkEfdnIiEkHc+e74eGogBmogASACQR50IAJBAnZyIgZyIAVxIAEgBnFyaiADQQV0IANBG3ZyaiECIAogBHMgB3MgDXMiBEEBdCAEQR92ciIEQdz57vh4aiAFaiADIAFBHnQgAUECdnIiBXIgBnEgAyAFcXJqIAJBBXQgAkEbdnJqIQEgDyAJcyAIcyAOcyIJQQF0IAlBH3ZyIglB3Pnu+HhqIAZqIAIgA0EedCADQQJ2ciIGciAFcSACIAZxcmogAUEFdCABQRt2cmohAyAQIApzIAtzIBJzIgpBAXQgCkEfdnIiCkHc+e74eGogBWogASACQR50IAJBAnZyIgVyIAZxIAEgBXFyaiADQQV0IANBG3ZyaiECIBMgD3MgDHMgBHMiD0EBdCAPQR92ciIPQdz57vh4aiAGaiADIAFBHnQgAUECdnIiBnIgBXEgAyAGcXJqIAJBBXQgAkEbdnJqIQEgFSAQcyARcyAJcyIQQQF0IBBBH3ZyIhBB1oOL03xqIAVqIANBHnQgA0ECdnIiBSAGcyACc2ogAUEFdCABQRt2cmohAyAUIBNzIA1zIApzIhNBAXQgE0EfdnIiE0HWg4vTfGogBmogAkEedCACQQJ2ciIGIAVzIAFzaiADQQV0IANBG3ZyaiECIAcgFXMgDnMgD3MiFUEBdCAVQR92ciIVQdaDi9N8aiAFaiABQR50IAFBAnZyIgUgBnMgA3NqIAJBBXQgAkEbdnJqIQEgCCAUcyAScyAQcyIUQQF0IBRBH3ZyIhRB1oOL03xqIAZqIANBHnQgA0ECdnIiBiAFcyACc2ogAUEFdCABQRt2cmohAyALIAdzIARzIBNzIgdBAXQgB0EfdnIiB0HWg4vTfGogBWogAkEedCACQQJ2ciIFIAZzIAFzaiADQQV0IANBG3ZyaiECIAwgCHMgCXMgFXMiCEEBdCAIQR92ciIIQdaDi9N8aiAGaiABQR50IAFBAnZyIgYgBXMgA3NqIAJBBXQgAkEbdnJqIQEgESALcyAKcyAUcyILQQF0IAtBH3ZyIgtB1oOL03xqIAVqIANBHnQgA0ECdnIiBSAGcyACc2ogAUEFdCABQRt2cmohAyANIAxzIA9zIAdzIgxBAXQgDEEfdnIiDEHWg4vTfGogBmogAkEedCACQQJ2ciIGIAVzIAFzaiADQQV0IANBG3ZyaiECIA4gEXMgEHMgCHMiEUEBdCARQR92ciIRQdaDi9N8aiAFaiABQR50IAFBAnZyIgUgBnMgA3NqIAJBBXQgAkEbdnJqIQEgEiANcyATcyALcyINQQF0IA1BH3ZyIg1B1oOL03xqIAZqIANBHnQgA0ECdnIiBiAFcyACc2ogAUEFdCABQRt2cmohAyAEIA5zIBVzIAxzIg5BAXQgDkEfdnIiDkHWg4vTfGogBWogAkEedCACQQJ2ciIFIAZzIAFzaiADQQV0IANBG3ZyaiECIAkgEnMgFHMgEXMiEkEBdCASQR92ciISQdaDi9N8aiAGaiABQR50IAFBAnZyIgYgBXMgA3NqIAJBBXQgAkEbdnJqIQEgCiAEcyAHcyANcyIEQQF0IARBH3ZyIhZB1oOL03xqIAVqIANBHnQgA0ECdnIiBCAGcyACc2ogAUEFdCABQRt2cmohAyAPIAlzIAhzIA5zIglBAXQgCUEfdnIiBUHWg4vTfGogBmogAkEedCACQQJ2ciIJIARzIAFzaiADQQV0IANBG3ZyaiECIBAgCnMgC3MgEnMiCkEBdCAKQR92ciIKQdaDi9N8aiAEaiABQR50IAFBAnZyIgQgCXMgA3NqIAJBBXQgAkEbdnJqIQEgEyAPcyAMcyAWcyIPQQF0IA9BH3ZyIg9B1oOL03xqIAlqIANBHnQgA0ECdnIiCSAEcyACc2ogAUEFdCABQRt2cmohAyAVIBBzIBFzIAVzIhBBAXQgEEEfdnIiEEHWg4vTfGogBGogAkEedCACQQJ2ciIEIAlzIAFzaiADQQV0IANBG3ZyaiECIBQgE3MgDXMgCnMiCkEBdCAKQR92ckHWg4vTfGogCWogAUEedCABQQJ2ciIJIARzIANzaiACQQV0IAJBG3ZyaiEBIAcgFXMgDnMgD3MiCkEBdCAKQR92ckHWg4vTfGogBGogA0EedCADQQJ2ciIEIAlzIAJzaiABQQV0IAFBG3ZyaiEDIAAgF0HWg4vTfGogCCAUcyAScyAQcyIAQQF0IABBH3ZyaiAJaiACQR50IAJBAnZyIgAgBHMgAXNqIANBBXQgA0EbdnJqNgIAIBkgAyAZKAIAajYCACAaIAFBHnQgAUECdnIgGigCAGo2AgAgGyAAIBsoAgBqNgIAIBwgBCAcKAIAajYCAAsaACAAQYBgSwR/EBJBACAAazYCAEF/BSAACwucAQEGfwJ/AkAgAEEUaiIBKAIAIABBHGoiAigCAE0NACAAQQBBACAAKAIkQQNxQQJqEQAAGiABKAIADQBBfwwBCyAAQQRqIgMoAgAiBCAAQQhqIgUoAgAiBkkEQCAAIAQgBmtBASAAKAIoQQNxQQJqEQAAGgsgAEEANgIQIAJBADYCACABQQA2AgAgBUEANgIAIANBADYCAEEACyIACwUAQcAIC5YBAQJ/AkAgAARAIAAoAkxBf0wEQCAAEBEhAAwCCyAAEBEhAQJ/QQBFIgIaIAELIQAFQfAKKAIABH9B8AooAgAQEwVBAAshAAJ/QZQQEARBnBAoAgAiAQsEQANAAn8gASgCTEF/ShpBAAshAiABKAIUIAEoAhxLBEAgARARIAByIQALIAEoAjgiAQ0ACwtBlBAQCgsLIAALggMBC38jBSEGIwVBMGokBSAGQRBqIQcgBkEgaiIDIABBHGoiCSgCACIENgIAIAMgAEEUaiIKKAIAIARrIgQ2AgQgAyABNgIIIAMgAjYCDCAGIgEgAEE8aiIMKAIANgIAIAEgAzYCBCABQQI2AggCQAJAIAQgAmoiBEGSASABEAcQECIFRg0AQQIhCCADIQEgBSEDA0AgA0EATgRAIAQgA2shBCABQQhqIQUgAyABKAIEIg1LIgsEQCAFIQELIAtBH3RBH3UgCGohCCABIAEoAgAgAyALBH8gDQVBAAtrIgNqNgIAIAFBBGoiBSAFKAIAIANrNgIAIAcgDCgCADYCACAHIAE2AgQgByAINgIIIARBkgEgBxAHEBAiA0YNAgwBCwsgAEEANgIQIAlBADYCACAKQQA2AgAgACAAKAIAQSByNgIAIAhBAkYEf0EABSACIAEoAgRrCyECDAELIAAgACgCLCIBIAAoAjBqNgIQIAkgATYCACAKIAE2AgALIAYkBSACC04AQYgLQYHGlLoGNgIAQYwLQYnXtv5+NgIAQZALQf6568V5NgIAQZQLQfaoyYEBNgIAQZgLQfDDy558NgIAQaALQQA2AgBBnAtBADYCAAvWBQEKfyMFIQkjBUEQaiQFIAkiBSABQRhqIgYoAgAiAkEYdjoAACAFIAJBEHY6AAEgBSACQQh2OgACIAUgAjoAAyAFIAFBFGoiBygCACIEQRh2OgAEIAUgBEEQdjoABSAFIARBCHY6AAYgBSAEOgAHIAlBCGoiCEGAfzoAACAHIARBCGoiCjYCACACQQFqIQMgBEF3SwRAIAYgAzYCACADIQILIAYgAjYCAEHAACAEQQN2QT9xIgJrIQMgAkEBakE/SwR/IAFBHGogAmogCCADEA0aIAEgAUEcahAPQQAhBCAHKAIABSACIQRBACEDIAoLIQIgAUEcaiAEaiAIIANqQQEgA2sQDRogAkH4A3FBwANHBEAgAUEcaiELA0AgCEEAOgAAIAcgAkEIaiIKNgIAIAYoAgAiBEEBaiEDIAJBd0sEQCAGIAM2AgAFIAQhAwsgBiADNgIAQcAAIAJBA3ZBP3EiAmshAyACQQFqQT9LBH8gAUEcaiACaiAIIAMQDRogASALEA9BACEEIAcoAgAFIAIhBEEAIQMgCgshAiABQRxqIARqIAggA2pBASADaxANGiACQfgDcUHAA0cNAAsLIAcgAkHAAGo2AgAgBigCACIEQQFqIQMgAkG/f0sEQCAGIAM2AgAFIAQhAwsgBiADNgIAQcAAIAJBA3ZBP3EiAmshAyACQQhqQT9LBH8gAUEcaiACaiAFIAMQDRogASABQRxqEA9BACEEIAMFIAIhBEEACyECIAFBHGogBGogBSACakEIIAJrEA0aQQAhAgNAIAAgAmogASACQQJ2QQJ0aigCACACQQN0QRhxQRhzdjoAACACQQFqIgJBFEcNAAsgAUIANwIAIAFCADcCCCABQgA3AhAgAUIANwIYIAFCADcCICABQgA3AiggAUIANwIwIAFCADcCOCABQgA3AkAgAUIANwJIIAFCADcCUCABQQA2AlggCSQFCwQAIwkLBgAgACQJCxAAIwdFBEAgACQHIAEkCAsLCABBARAAQQALCABBABAAQQALEwAgASACIAMgAEEDcUECahEAAAsKACAAJAUgASQGCwwAIAEgAEEBcREBAAtoAQN/IwUhBCMFQSBqJAUgBCEDIARBEGohBSAAQQM2AiQgACgCAEHAAHFFBEAgAyAAKAI8NgIAIANBk6gBNgIEIAMgBTYCCEE2IAMQCARAIABBfzoASwsLIAAgASACEBQhACAEJAUgAAsGACAAJAULYgECfyMFIQQjBUEgaiQFIAQiAyAAKAI8NgIAIANBADYCBCADIAE2AgggAyAEQRRqIgA2AgwgAyACNgIQQYwBIAMQBhAQQQBIBH8gAEF/NgIAQX8FIAAoAgALIQAgBCQFIAALLQECfyMFIQEjBUEQaiQFIAEiAiAAKAI8IgA2AgBBBiACEAkQECEAIAEkBSAACwUAQdQPC8ExAQx/IwUhCiMFQRBqJAUgCiEIAkAgAEH1AUkEQCAAQQtqQXhxIQNB5AsoAgAiBiAAQQtJBH9BECIDBSADC0EDdiIAdiIBQQNxBEAgAUEBcUEBcyAAaiIBQQN0QYwMaiIDQQhqIgUoAgAiAkEIaiIEKAIAIQAgAyAARgRAQeQLIAZBASABdEF/c3E2AgAFIAAgAzYCDCAFIAA2AgALIAIgAUEDdCIAQQNyNgIEIAIgAGpBBGoiACAAKAIAQQFyNgIAIAokBSAEDwsgA0HsCygCACIJSwRAIAEEQCABIAB0QQIgAHQiAEEAIABrcnEiAEEAIABrcUF/aiIBQQx2QRBxIQAgASAAdiIBQQV2QQhxIgIgAHIgASACdiIAQQJ2QQRxIgFyIAAgAXYiAEEBdkECcSIBciAAIAF2IgBBAXZBAXEiAXIgACABdmoiAUEDdEGMDGoiAkEIaiIEKAIAIgVBCGoiBygCACEAIAIgAEYEQEHkCyAGQQEgAXRBf3NxIgA2AgAFIAAgAjYCDCAEIAA2AgAgBiEACyAFIANBA3I2AgQgBSADaiIEIAFBA3QgA2siBUEBcjYCBCAEIAVqIAU2AgAgCQRAQfgLKAIAIQIgCUEDdiIDQQN0QYwMaiEBIABBASADdCIDcQR/IAFBCGoiAygCAAVB5AsgACADcjYCACABQQhqIQMgAQshACADIAI2AgAgACACNgIMIAIgADYCCCACIAE2AgwLQewLIAU2AgBB+AsgBDYCACAKJAUgBw8LQegLKAIAIgsEQCALQQAgC2txQX9qIgFBDHZBEHEhACABIAB2IgFBBXZBCHEiAiAAciABIAJ2IgBBAnZBBHEiAXIgACABdiIAQQF2QQJxIgFyIAAgAXYiAEEBdkEBcSIBciAAIAF2akECdEGUDmooAgAiAigCBEF4cSADayEBIAJBEGogAigCEEVBAnRqKAIAIgAEQANAIAAoAgRBeHEgA2siBSABSSIEBEAgBSEBCyAEBEAgACECCyAAQRBqIAAoAhBFQQJ0aigCACIADQAgASEFCwUgASEFCyACIAIgA2oiDEkEQCACKAIYIQgCQCACKAIMIgAgAkYEQCACQRRqIgEoAgAiAEUEQCACQRBqIgEoAgAiAEUEQEEAIQAMAwsLA0AgAEEUaiIEKAIAIgcEQCAHIQAgBCEBDAELIABBEGoiBCgCACIHBEAgByEAIAQhAQwBCwsgAUEANgIABSACKAIIIgEgADYCDCAAIAE2AggLCwJAIAgEQCACIAIoAhwiAUECdEGUDmoiBCgCAEYEQCAEIAA2AgAgAEUEQEHoCyALQQEgAXRBf3NxNgIADAMLBSAIQRBqIAgoAhAgAkdBAnRqIAA2AgAgAEUNAgsgACAINgIYIAIoAhAiAQRAIAAgATYCECABIAA2AhgLIAIoAhQiAQRAIAAgATYCFCABIAA2AhgLCwsgBUEQSQRAIAIgBSADaiIAQQNyNgIEIAIgAGpBBGoiACAAKAIAQQFyNgIABSACIANBA3I2AgQgDCAFQQFyNgIEIAwgBWogBTYCACAJBEBB+AsoAgAhBCAJQQN2IgFBA3RBjAxqIQAgBkEBIAF0IgFxBH8gAEEIaiIDKAIABUHkCyAGIAFyNgIAIABBCGohAyAACyEBIAMgBDYCACABIAQ2AgwgBCABNgIIIAQgADYCDAtB7AsgBTYCAEH4CyAMNgIACyAKJAUgAkEIag8FIAMhAAsFIAMhAAsFIAMhAAsFIABBv39LBEBBfyEABSAAQQtqIgBBeHEhAkHoCygCACIFBEAgAEEIdiIABH8gAkH///8HSwR/QR8FIAJBDiAAIABBgP4/akEQdkEIcSIAdCIBQYDgH2pBEHZBBHEiAyAAciABIAN0IgBBgIAPakEQdkECcSIBcmsgACABdEEPdmoiAEEHanZBAXEgAEEBdHILBUEACyEJQQAgAmshAwJAAkAgCUECdEGUDmooAgAiAARAQRkgCUEBdmshBEEAIQEgAiAJQR9GBH9BAAUgBAt0IQdBACEEA0AgACgCBEF4cSACayIGIANJBEAgBgRAIAAhASAGIQMFIAAhAUEAIQMMBAsLIAAoAhQiBkUgBiAAQRBqIAdBH3ZBAnRqKAIAIgBGckUEQCAGIQQLIAcgAEUiBkEBc3QhByAGRQ0ACwVBACEEQQAhAQsgBCABcgR/IAQFIAVBAiAJdCIAQQAgAGtycSIARQRAIAIhAAwHCyAAQQAgAGtxQX9qIgRBDHZBEHEhAEEAIQEgBCAAdiIEQQV2QQhxIgcgAHIgBCAHdiIAQQJ2QQRxIgRyIAAgBHYiAEEBdkECcSIEciAAIAR2IgBBAXZBAXEiBHIgACAEdmpBAnRBlA5qKAIACyIADQAgASEEDAELA0AgACgCBEF4cSACayIEIANJIgcEQCAEIQMLIAcEQCAAIQELIABBEGogACgCEEVBAnRqKAIAIgANACABIQQLCyAEBEAgA0HsCygCACACa0kEQCAEIAQgAmoiCE8EQCAKJAVBAA8LIAQoAhghCQJAIAQoAgwiACAERgRAIARBFGoiASgCACIARQRAIARBEGoiASgCACIARQRAQQAhAAwDCwsDQCAAQRRqIgcoAgAiBgRAIAYhACAHIQEMAQsgAEEQaiIHKAIAIgYEQCAGIQAgByEBDAELCyABQQA2AgAFIAQoAggiASAANgIMIAAgATYCCAsLAkAgCQR/IAQgBCgCHCIBQQJ0QZQOaiIHKAIARgRAIAcgADYCACAARQRAQegLIAVBASABdEF/c3EiADYCAAwDCwUgCUEQaiAJKAIQIARHQQJ0aiAANgIAIABFBEAgBSEADAMLCyAAIAk2AhggBCgCECIBBEAgACABNgIQIAEgADYCGAsgBCgCFCIBBH8gACABNgIUIAEgADYCGCAFBSAFCwUgBQshAAsCQCADQRBJBEAgBCADIAJqIgBBA3I2AgQgBCAAakEEaiIAIAAoAgBBAXI2AgAFIAQgAkEDcjYCBCAIIANBAXI2AgQgCCADaiADNgIAIANBA3YhASADQYACSQRAIAFBA3RBjAxqIQBB5AsoAgAiA0EBIAF0IgFxBH8gAEEIaiIDKAIABUHkCyADIAFyNgIAIABBCGohAyAACyEBIAMgCDYCACABIAg2AgwgCCABNgIIIAggADYCDAwCCyADQQh2IgEEfyADQf///wdLBH9BHwUgA0EOIAEgAUGA/j9qQRB2QQhxIgF0IgJBgOAfakEQdkEEcSIFIAFyIAIgBXQiAUGAgA9qQRB2QQJxIgJyayABIAJ0QQ92aiIBQQdqdkEBcSABQQF0cgsFQQALIgFBAnRBlA5qIQIgCCABNgIcIAhBEGoiBUEANgIEIAVBADYCACAAQQEgAXQiBXFFBEBB6AsgACAFcjYCACACIAg2AgAgCCACNgIYIAggCDYCDCAIIAg2AggMAgsgAigCACEAQRkgAUEBdmshAiADIAFBH0YEf0EABSACC3QhAQJAA0AgACgCBEF4cSADRg0BIAFBAXQhAiAAQRBqIAFBH3ZBAnRqIgEoAgAiBQRAIAIhASAFIQAMAQsLIAEgCDYCACAIIAA2AhggCCAINgIMIAggCDYCCAwCCyAAQQhqIgEoAgAiAyAINgIMIAEgCDYCACAIIAM2AgggCCAANgIMIAhBADYCGAsLIAokBSAEQQhqDwUgAiEACwUgAiEACwUgAiEACwsLC0HsCygCACICIABPBEBB+AsoAgAhASACIABrIgNBD0sEQEH4CyABIABqIgI2AgBB7AsgAzYCACACIANBAXI2AgQgAiADaiADNgIAIAEgAEEDcjYCBAVB7AtBADYCAEH4C0EANgIAIAEgAkEDcjYCBCABIAJqQQRqIgAgACgCAEEBcjYCAAsgCiQFIAFBCGoPC0HwCygCACIDIABLBEBB8AsgAyAAayIDNgIAQfwLQfwLKAIAIgEgAGoiAjYCACACIANBAXI2AgQgASAAQQNyNgIEIAokBSABQQhqDwtBvA8oAgAEf0HEDygCAAVBxA9BgCA2AgBBwA9BgCA2AgBByA9BfzYCAEHMD0F/NgIAQdAPQQA2AgBBoA9BADYCACAIIAhBcHFB2KrVqgVzIgE2AgBBvA8gATYCAEGAIAsiASAAQS9qIgRqIgdBACABayIGcSIFIABNBEAgCiQFQQAPC0GcDygCACIBBEBBlA8oAgAiAiAFaiIIIAJNIAggAUtyBEAgCiQFQQAPCwsgAEEwaiEIAkACQEGgDygCAEEEcQRAQQAhAwUCQAJAAkBB/AsoAgAiAUUNAEGkDyECA0ACQCACKAIAIgkgAU0EQCAJIAJBBGoiCSgCAGogAUsNAQsgAigCCCICDQEMAgsLIAcgA2sgBnEiA0H/////B0kEQCADEA4iASACKAIAIAkoAgBqRgRAIAFBf0cNBgUMAwsFQQAhAwsMAgtBABAOIgFBf0YEQEEAIQMFQcAPKAIAIgJBf2oiByABIgNqQQAgAmtxIANrIQIgByADcQR/IAIFQQALIAVqIgNBlA8oAgAiB2ohAiADIABLIANB/////wdJcQRAQZwPKAIAIgYEQCACIAdNIAIgBktyBEBBACEDDAULCyADEA4iAiABRg0FIAIhAQwCBUEAIQMLCwwBCyAIIANLIANB/////wdJIAFBf0dxcUUEQCABQX9GBEBBACEDDAIFDAQLAAsgBCADa0HEDygCACICakEAIAJrcSICQf////8HTw0CQQAgA2shBCACEA5Bf0YEQCAEEA4aQQAhAwUgAiADaiEDDAMLC0GgD0GgDygCAEEEcjYCAAsgBUH/////B0kEQCAFEA4iAUEAEA4iAkkgAUF/RyACQX9HcXEhBSACIAFrIgIgAEEoaksiBARAIAIhAwsgAUF/RiAEQQFzciAFQQFzckUNAQsMAQtBlA9BlA8oAgAgA2oiAjYCACACQZgPKAIASwRAQZgPIAI2AgALAkBB/AsoAgAiBARAQaQPIQICQAJAA0AgASACKAIAIgUgAkEEaiIHKAIAIgZqRg0BIAIoAggiAg0ACwwBCyACKAIMQQhxRQRAIAQgAUkgBCAFT3EEQCAHIAYgA2o2AgBB8AsoAgAhBUEAIARBCGoiAmtBB3EhAUH8CyAEIAJBB3EEfyABBUEAIgELaiICNgIAQfALIAUgAyABa2oiATYCACACIAFBAXI2AgQgAiABakEoNgIEQYAMQcwPKAIANgIADAQLCwsgAUH0CygCAEkEQEH0CyABNgIACyABIANqIQVBpA8hAgJAAkADQCACKAIAIAVGDQEgAigCCCICDQALDAELIAIoAgxBCHFFBEAgAiABNgIAIAJBBGoiAiACKAIAIANqNgIAQQAgAUEIaiIDa0EHcSECQQAgBUEIaiIHa0EHcSEJIAEgA0EHcQR/IAIFQQALaiIIIABqIQYgBSAHQQdxBH8gCQVBAAtqIgUgCGsgAGshByAIIABBA3I2AgQCQCAFIARGBEBB8AtB8AsoAgAgB2oiADYCAEH8CyAGNgIAIAYgAEEBcjYCBAUgBUH4CygCAEYEQEHsC0HsCygCACAHaiIANgIAQfgLIAY2AgAgBiAAQQFyNgIEIAYgAGogADYCAAwCCyAFKAIEIgBBA3FBAUYEfyAAQXhxIQkgAEEDdiEDAkAgAEGAAkkEQCAFKAIMIgAgBSgCCCIBRgRAQeQLQeQLKAIAQQEgA3RBf3NxNgIABSABIAA2AgwgACABNgIICwUgBSgCGCEEAkAgBSgCDCIAIAVGBEAgBUEQaiIBQQRqIgMoAgAiAARAIAMhAQUgASgCACIARQRAQQAhAAwDCwsDQCAAQRRqIgMoAgAiAgRAIAIhACADIQEMAQsgAEEQaiIDKAIAIgIEQCACIQAgAyEBDAELCyABQQA2AgAFIAUoAggiASAANgIMIAAgATYCCAsLIARFDQECQCAFIAUoAhwiAUECdEGUDmoiAygCAEYEQCADIAA2AgAgAA0BQegLQegLKAIAQQEgAXRBf3NxNgIADAMFIARBEGogBCgCECAFR0ECdGogADYCACAARQ0DCwsgACAENgIYIAVBEGoiAygCACIBBEAgACABNgIQIAEgADYCGAsgAygCBCIBRQ0BIAAgATYCFCABIAA2AhgLCyAFIAlqIQAgCSAHagUgBSEAIAcLIQUgAEEEaiIAIAAoAgBBfnE2AgAgBiAFQQFyNgIEIAYgBWogBTYCACAFQQN2IQEgBUGAAkkEQCABQQN0QYwMaiEAQeQLKAIAIgNBASABdCIBcQR/IABBCGoiAygCAAVB5AsgAyABcjYCACAAQQhqIQMgAAshASADIAY2AgAgASAGNgIMIAYgATYCCCAGIAA2AgwMAgsCfyAFQQh2IgAEf0EfIAVB////B0sNARogBUEOIAAgAEGA/j9qQRB2QQhxIgB0IgFBgOAfakEQdkEEcSIDIAByIAEgA3QiAEGAgA9qQRB2QQJxIgFyayAAIAF0QQ92aiIAQQdqdkEBcSAAQQF0cgVBAAsLIgFBAnRBlA5qIQAgBiABNgIcIAZBEGoiA0EANgIEIANBADYCAEHoCygCACIDQQEgAXQiAnFFBEBB6AsgAyACcjYCACAAIAY2AgAgBiAANgIYIAYgBjYCDCAGIAY2AggMAgsgACgCACEAQRkgAUEBdmshAyAFIAFBH0YEf0EABSADC3QhAQJAA0AgACgCBEF4cSAFRg0BIAFBAXQhAyAAQRBqIAFBH3ZBAnRqIgEoAgAiAgRAIAMhASACIQAMAQsLIAEgBjYCACAGIAA2AhggBiAGNgIMIAYgBjYCCAwCCyAAQQhqIgEoAgAiAyAGNgIMIAEgBjYCACAGIAM2AgggBiAANgIMIAZBADYCGAsLIAokBSAIQQhqDwsLQaQPIQIDQAJAIAIoAgAiBSAETQRAIAUgAigCBGoiCCAESw0BCyACKAIIIQIMAQsLQQAgCEFRaiICQQhqIgVrQQdxIQcgAiAFQQdxBH8gBwVBAAtqIgIgBEEQaiILSQR/IAQiAgUgAgtBCGohBiACQRhqIQUgA0FYaiEMQQAgAUEIaiIJa0EHcSEHQfwLIAEgCUEHcQR/IAcFQQAiBwtqIgk2AgBB8AsgDCAHayIHNgIAIAkgB0EBcjYCBCAJIAdqQSg2AgRBgAxBzA8oAgA2AgAgAkEEaiIHQRs2AgAgBkGkDykCADcCACAGQawPKQIANwIIQaQPIAE2AgBBqA8gAzYCAEGwD0EANgIAQawPIAY2AgAgBSEBA0AgAUEEaiIDQQc2AgAgAUEIaiAISQRAIAMhAQwBCwsgAiAERwRAIAcgBygCAEF+cTYCACAEIAIgBGsiB0EBcjYCBCACIAc2AgAgB0EDdiEDIAdBgAJJBEAgA0EDdEGMDGohAUHkCygCACICQQEgA3QiA3EEfyABQQhqIgIoAgAFQeQLIAIgA3I2AgAgAUEIaiECIAELIQMgAiAENgIAIAMgBDYCDCAEIAM2AgggBCABNgIMDAMLIAdBCHYiAQR/IAdB////B0sEf0EfBSAHQQ4gASABQYD+P2pBEHZBCHEiAXQiA0GA4B9qQRB2QQRxIgIgAXIgAyACdCIBQYCAD2pBEHZBAnEiA3JrIAEgA3RBD3ZqIgFBB2p2QQFxIAFBAXRyCwVBAAsiA0ECdEGUDmohASAEIAM2AhwgBEEANgIUIAtBADYCAEHoCygCACICQQEgA3QiBXFFBEBB6AsgAiAFcjYCACABIAQ2AgAgBCABNgIYIAQgBDYCDCAEIAQ2AggMAwsgASgCACEBQRkgA0EBdmshAiAHIANBH0YEf0EABSACC3QhAwJAA0AgASgCBEF4cSAHRg0BIANBAXQhAiABQRBqIANBH3ZBAnRqIgMoAgAiBQRAIAIhAyAFIQEMAQsLIAMgBDYCACAEIAE2AhggBCAENgIMIAQgBDYCCAwDCyABQQhqIgMoAgAiAiAENgIMIAMgBDYCACAEIAI2AgggBCABNgIMIARBADYCGAsFQfQLKAIAIgJFIAEgAklyBEBB9AsgATYCAAtBpA8gATYCAEGoDyADNgIAQbAPQQA2AgBBiAxBvA8oAgA2AgBBhAxBfzYCAEEAIQIDQCACQQN0QYwMaiIFIAU2AgwgBSAFNgIIIAJBAWoiAkEgRw0ACyADQVhqIQJBACABQQhqIgVrQQdxIQNB/AsgASAFQQdxBH8gAwVBACIDC2oiATYCAEHwCyACIANrIgM2AgAgASADQQFyNgIEIAEgA2pBKDYCBEGADEHMDygCADYCAAsLQfALKAIAIgEgAEsEQEHwCyABIABrIgM2AgBB/AtB/AsoAgAiASAAaiICNgIAIAIgA0EBcjYCBCABIABBA3I2AgQgCiQFIAFBCGoPCwsQEkEMNgIAIAokBUEAC3ABBX8jBSEBIwVBIGokBSABIgJBiAsQFkEAIQADQCAAQQF0IgNBoBBqIAIgAGosAAAiBEH/AXFBBHZB9ApqLAAAOgAAIANBAXJBoBBqIARBD3FB9ApqLAAAOgAAIABBAWoiAEEURw0ACyABJAVBoBALigEBBX8jBSECIwVBIGokBSACIgFBiAspAAA3AAAgAUGQCykAADcACCABQZgLKAAANgAQQQAhAANAIABBAXQiA0GgEGogASAAaiwAACIEQf8BcUEEdkH0CmosAAA6AAAgA0EBckGgEGogBEEPcUH0CmosAAA6AAAgAEEBaiIAQRRHDQALIAIkBUGgEAvPAQEEf0GcC0GcCygCACIFIAFBA3RqIgQ2AgBBoAsoAgAiA0EBaiECIAQgBUkEQEGgCyACNgIAIAIhAwtBoAsgAyABQR12ajYCACAFQQN2QT9xIgQgAWpBP0sEQCAEQaQLaiAAQcAAIARrIgIQDRpBiAtBpAsQDyACQT9qIAFJBEADQEGICyAAIAJqEA8gAkHAAGohAyACQf8AaiABSQRAIAMhAgwBBUEAIQQLCwVBACEEIAIhAwsFQQAhAwsgBEGkC2ogACADaiABIANrEA0aCwQAIwULGwEBfyMFIQEjBSAAaiQFIwVBD2pBcHEkBSABCwtXBwBBvAkLAvwHAEH0CQsBBQBBgAoLAQEAQZgKCw4BAAAAAgAAAFEIAAAABABBsAoLAQEAQb8KCwUK/////wBB8AoLFPQEAAAwMTIzNDU2Nzg5YWJjZGVm'\n    var Module = typeof Module !== \"undefined\" ? Module : {};\n    var moduleOverrides = {};\n    var key;\n    for (key in Module) {\n        if (Module.hasOwnProperty(key)) {\n            moduleOverrides[key] = Module[key]\n        }\n    }\n    var ENVIRONMENT_IS_WEB = false;\n    var ENVIRONMENT_IS_WORKER = false;\n    var ENVIRONMENT_IS_NODE = false;\n    var ENVIRONMENT_IS_SHELL = false;\n    if (Module[\"ENVIRONMENT\"]) {\n        if (Module[\"ENVIRONMENT\"] === \"WEB\") {\n            ENVIRONMENT_IS_WEB = true\n        } else if (Module[\"ENVIRONMENT\"] === \"WORKER\") {\n            ENVIRONMENT_IS_WORKER = true\n        } else if (Module[\"ENVIRONMENT\"] === \"NODE\") {\n            ENVIRONMENT_IS_NODE = true\n        } else if (Module[\"ENVIRONMENT\"] === \"SHELL\") {\n            ENVIRONMENT_IS_SHELL = true\n        } else {\n            throw new Error(\"The provided Module['ENVIRONMENT'] value is not valid. It must be one of: WEB|WORKER|NODE|SHELL.\")\n        }\n    } else {\n        ENVIRONMENT_IS_WEB = typeof window === \"object\";\n        ENVIRONMENT_IS_WORKER = typeof importScripts === \"function\";\n        ENVIRONMENT_IS_NODE = typeof process === \"object\" && typeof require === \"function\" && !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_WORKER;\n        ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER\n    }\n    if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {\n        Module[\"read\"] = function shell_read(url) {\n            var xhr = new XMLHttpRequest;\n            xhr.open(\"GET\", url, false);\n            xhr.send(null);\n            return xhr.responseText\n        }\n        ;\n        if (ENVIRONMENT_IS_WORKER) {\n            Module[\"readBinary\"] = function readBinary(url) {\n                var xhr = new XMLHttpRequest;\n                xhr.open(\"GET\", url, false);\n                xhr.responseType = \"arraybuffer\";\n                xhr.send(null);\n                return new Uint8Array(xhr.response)\n            }\n        }\n        Module[\"readAsync\"] = function readAsync(url, onload, onerror) {\n            var xhr = new XMLHttpRequest;\n            xhr.open(\"GET\", url, true);\n            xhr.responseType = \"arraybuffer\";\n            xhr.onload = function xhr_onload() {\n                if (xhr.status == 200 || xhr.status == 0 && xhr.response) {\n                    onload(xhr.response);\n                    return\n                }\n                onerror()\n            }\n            ;\n            xhr.onerror = onerror;\n            xhr.send(null)\n        }\n        ;\n        if (typeof arguments != \"undefined\") {\n            Module[\"arguments\"] = arguments\n        }\n        if (typeof console !== \"undefined\") {\n            if (!Module[\"print\"])\n                Module[\"print\"] = function shell_print(x) {\n                    console.log(x)\n                }\n                ;\n            if (!Module[\"printErr\"])\n                Module[\"printErr\"] = function shell_printErr(x) {\n                    console.warn(x)\n                }\n        } else {\n            var TRY_USE_DUMP = false;\n            if (!Module[\"print\"])\n                Module[\"print\"] = TRY_USE_DUMP && typeof dump !== \"undefined\" ? (function(x) {\n                    dump(x)\n                }\n                ) : (function(x) {}\n                )\n        }\n        if (typeof Module[\"setWindowTitle\"] === \"undefined\") {\n            Module[\"setWindowTitle\"] = (function(title) {\n                document.title = title\n            }\n            )\n        }\n    } else {\n        throw new Error(\"Unknown runtime environment. Where are we?\")\n    }\n    if (!Module[\"print\"]) {\n        Module[\"print\"] = (function() {}\n        )\n    }\n    if (!Module[\"printErr\"]) {\n        Module[\"printErr\"] = Module[\"print\"]\n    }\n    if (!Module[\"arguments\"]) {\n        Module[\"arguments\"] = []\n    }\n    if (!Module[\"thisProgram\"]) {\n        Module[\"thisProgram\"] = \"./this.program\"\n    }\n    if (!Module[\"quit\"]) {\n        Module[\"quit\"] = (function(status, toThrow) {\n            throw toThrow\n        }\n        )\n    }\n    Module.print = Module[\"print\"];\n    Module.printErr = Module[\"printErr\"];\n    Module[\"preRun\"] = [];\n    Module[\"postRun\"] = [];\n    for (key in moduleOverrides) {\n        if (moduleOverrides.hasOwnProperty(key)) {\n            Module[key] = moduleOverrides[key]\n        }\n    }\n    moduleOverrides = undefined;\n    var Runtime = {\n        setTempRet0: (function(value) {\n            tempRet0 = value;\n            return value\n        }\n        ),\n        getTempRet0: (function() {\n            return tempRet0\n        }\n        ),\n        stackSave: (function() {\n            return STACKTOP\n        }\n        ),\n        stackRestore: (function(stackTop) {\n            STACKTOP = stackTop\n        }\n        ),\n        getNativeTypeSize: (function(type) {\n            switch (type) {\n            case \"i1\":\n            case \"i8\":\n                return 1;\n            case \"i16\":\n                return 2;\n            case \"i32\":\n                return 4;\n            case \"i64\":\n                return 8;\n            case \"float\":\n                return 4;\n            case \"double\":\n                return 8;\n            default:\n                {\n                    if (type[type.length - 1] === \"*\") {\n                        return Runtime.QUANTUM_SIZE\n                    } else if (type[0] === \"i\") {\n                        var bits = parseInt(type.substr(1));\n                        assert(bits % 8 === 0);\n                        return bits / 8\n                    } else {\n                        return 0\n                    }\n                }\n            }\n        }\n        ),\n        getNativeFieldSize: (function(type) {\n            return Math.max(Runtime.getNativeTypeSize(type), Runtime.QUANTUM_SIZE)\n        }\n        ),\n        STACK_ALIGN: 16,\n        prepVararg: (function(ptr, type) {\n            if (type === \"double\" || type === \"i64\") {\n                if (ptr & 7) {\n                    assert((ptr & 7) === 4);\n                    ptr += 4\n                }\n            } else {\n                assert((ptr & 3) === 0)\n            }\n            return ptr\n        }\n        ),\n        getAlignSize: (function(type, size, vararg) {\n            if (!vararg && (type == \"i64\" || type == \"double\"))\n                return 8;\n            if (!type)\n                return Math.min(size, 8);\n            return Math.min(size || (type ? Runtime.getNativeFieldSize(type) : 0), Runtime.QUANTUM_SIZE)\n        }\n        ),\n        dynCall: (function(sig, ptr, args) {\n            if (args && args.length) {\n                return Module[\"dynCall_\" + sig].apply(null, [ptr].concat(args))\n            } else {\n                return Module[\"dynCall_\" + sig].call(null, ptr)\n            }\n        }\n        ),\n        functionPointers: [],\n        addFunction: (function(func) {\n            for (var i = 0; i < Runtime.functionPointers.length; i++) {\n                if (!Runtime.functionPointers[i]) {\n                    Runtime.functionPointers[i] = func;\n                    return 2 * (1 + i)\n                }\n            }\n            throw \"Finished up all reserved function pointers. Use a higher value for RESERVED_FUNCTION_POINTERS.\"\n        }\n        ),\n        removeFunction: (function(index) {\n            Runtime.functionPointers[(index - 2) / 2] = null\n        }\n        ),\n        warnOnce: (function(text) {\n            if (!Runtime.warnOnce.shown)\n                Runtime.warnOnce.shown = {};\n            if (!Runtime.warnOnce.shown[text]) {\n                Runtime.warnOnce.shown[text] = 1;\n                Module.printErr(text)\n            }\n        }\n        ),\n        funcWrappers: {},\n        getFuncWrapper: (function(func, sig) {\n            if (!func)\n                return;\n            assert(sig);\n            if (!Runtime.funcWrappers[sig]) {\n                Runtime.funcWrappers[sig] = {}\n            }\n            var sigCache = Runtime.funcWrappers[sig];\n            if (!sigCache[func]) {\n                if (sig.length === 1) {\n                    sigCache[func] = function dynCall_wrapper() {\n                        return Runtime.dynCall(sig, func)\n                    }\n                } else if (sig.length === 2) {\n                    sigCache[func] = function dynCall_wrapper(arg) {\n                        return Runtime.dynCall(sig, func, [arg])\n                    }\n                } else {\n                    sigCache[func] = function dynCall_wrapper() {\n                        return Runtime.dynCall(sig, func, Array.prototype.slice.call(arguments))\n                    }\n                }\n            }\n            return sigCache[func]\n        }\n        ),\n        getCompilerSetting: (function(name) {\n            throw \"You must build with -s RETAIN_COMPILER_SETTINGS=1 for Runtime.getCompilerSetting or emscripten_get_compiler_setting to work\"\n        }\n        ),\n        stackAlloc: (function(size) {\n            var ret = STACKTOP;\n            STACKTOP = STACKTOP + size | 0;\n            STACKTOP = STACKTOP + 15 & -16;\n            return ret\n        }\n        ),\n        staticAlloc: (function(size) {\n            var ret = STATICTOP;\n            STATICTOP = STATICTOP + size | 0;\n            STATICTOP = STATICTOP + 15 & -16;\n            return ret\n        }\n        ),\n        dynamicAlloc: (function(size) {\n            var ret = HEAP32[DYNAMICTOP_PTR >> 2];\n            var end = (ret + size + 15 | 0) & -16;\n            HEAP32[DYNAMICTOP_PTR >> 2] = end;\n            if (end >= TOTAL_MEMORY) {\n                var success = enlargeMemory();\n                if (!success) {\n                    HEAP32[DYNAMICTOP_PTR >> 2] = ret;\n                    return 0\n                }\n            }\n            return ret\n        }\n        ),\n        alignMemory: (function(size, quantum) {\n            var ret = size = Math.ceil(size / (quantum ? quantum : 16)) * (quantum ? quantum : 16);\n            return ret\n        }\n        ),\n        makeBigInt: (function(low, high, unsigned) {\n            var ret = unsigned ? +(low >>> 0) + +(high >>> 0) * 4294967296 : +(low >>> 0) + +(high | 0) * 4294967296;\n            return ret\n        }\n        ),\n        GLOBAL_BASE: 1024,\n        QUANTUM_SIZE: 4,\n        __dummy__: 0\n    };\n    Module[\"Runtime\"] = Runtime;\n    var ABORT = 0;\n    var EXITSTATUS = 0;\n    function assert(condition, text) {\n        if (!condition) {\n            abort(\"Assertion failed: \" + text)\n        }\n    }\n    function getCFunc(ident) {\n        var func = Module[\"_\" + ident];\n        assert(func, \"Cannot call unknown function \" + ident + \", make sure it is exported\");\n        return func\n    }\n    var JSfuncs = {\n        \"stackSave\": (function() {\n            Runtime.stackSave()\n        }\n        ),\n        \"stackRestore\": (function() {\n            Runtime.stackRestore()\n        }\n        ),\n        \"arrayToC\": (function(arr) {\n            var ret = Runtime.stackAlloc(arr.length);\n            writeArrayToMemory(arr, ret);\n            return ret\n        }\n        ),\n        \"stringToC\": (function(str) {\n            var ret = 0;\n            if (str !== null && str !== undefined && str !== 0) {\n                var len = (str.length << 2) + 1;\n                ret = Runtime.stackAlloc(len);\n                stringToUTF8(str, ret, len)\n            }\n            return ret\n        }\n        )\n    };\n    var toC = {\n        \"string\": JSfuncs[\"stringToC\"],\n        \"array\": JSfuncs[\"arrayToC\"]\n    };\n    function ccall(ident, returnType, argTypes, args, opts) {\n        var func = getCFunc(ident);\n        var cArgs = [];\n        var stack = 0;\n        if (args) {\n            for (var i = 0; i < args.length; i++) {\n                var converter = toC[argTypes[i]];\n                if (converter) {\n                    if (stack === 0)\n                        stack = Runtime.stackSave();\n                    cArgs[i] = converter(args[i])\n                } else {\n                    cArgs[i] = args[i]\n                }\n            }\n        }\n        var ret = func.apply(null, cArgs);\n        if (returnType === \"string\")\n            ret = Pointer_stringify(ret);\n        if (stack !== 0) {\n            Runtime.stackRestore(stack)\n        }\n        return ret\n    }\n    function cwrap(ident, returnType, argTypes) {\n        argTypes = argTypes || [];\n        var cfunc = getCFunc(ident);\n        var numericArgs = argTypes.every((function(type) {\n            return type === \"number\"\n        }\n        ));\n        var numericRet = returnType !== \"string\";\n        if (numericRet && numericArgs) {\n            return cfunc\n        }\n        return (function() {\n            return ccall(ident, returnType, argTypes, arguments)\n        }\n        )\n    }\n    Module[\"ccall\"] = ccall;\n    Module[\"cwrap\"] = cwrap;\n    var ALLOC_NORMAL = 0;\n    var ALLOC_STACK = 1;\n    var ALLOC_STATIC = 2;\n    var ALLOC_DYNAMIC = 3;\n    var ALLOC_NONE = 4;\n    Module[\"ALLOC_NORMAL\"] = ALLOC_NORMAL;\n    Module[\"ALLOC_STACK\"] = ALLOC_STACK;\n    Module[\"ALLOC_STATIC\"] = ALLOC_STATIC;\n    Module[\"ALLOC_DYNAMIC\"] = ALLOC_DYNAMIC;\n    Module[\"ALLOC_NONE\"] = ALLOC_NONE;\n    function getMemory(size) {\n        if (!staticSealed)\n            return Runtime.staticAlloc(size);\n        if (!runtimeInitialized)\n            return Runtime.dynamicAlloc(size);\n        return _malloc(size)\n    }\n    Module[\"getMemory\"] = getMemory;\n    function Pointer_stringify(ptr, length) {\n        if (length === 0 || !ptr)\n            return \"\";\n        var hasUtf = 0;\n        var t;\n        var i = 0;\n        while (1) {\n            t = HEAPU8[ptr + i >> 0];\n            hasUtf |= t;\n            if (t == 0 && !length)\n                break;\n            i++;\n            if (length && i == length)\n                break\n        }\n        if (!length)\n            length = i;\n        var ret = \"\";\n        if (hasUtf < 128) {\n            var MAX_CHUNK = 1024;\n            var curr;\n            while (length > 0) {\n                curr = String.fromCharCode.apply(String, HEAPU8.subarray(ptr, ptr + Math.min(length, MAX_CHUNK)));\n                ret = ret ? ret + curr : curr;\n                ptr += MAX_CHUNK;\n                length -= MAX_CHUNK\n            }\n            return ret\n        }\n        return UTF8ToString(ptr)\n    }\n    var UTF8Decoder = typeof TextDecoder !== \"undefined\" ? new TextDecoder(\"utf8\") : undefined;\n    function UTF8ArrayToString(u8Array, idx) {\n        var endPtr = idx;\n        while (u8Array[endPtr])\n            ++endPtr;\n        if (endPtr - idx > 16 && u8Array.subarray && UTF8Decoder) {\n            return UTF8Decoder.decode(u8Array.subarray(idx, endPtr))\n        } else {\n            var u0, u1, u2, u3, u4, u5;\n            var str = \"\";\n            while (1) {\n                u0 = u8Array[idx++];\n                if (!u0)\n                    return str;\n                if (!(u0 & 128)) {\n                    str += String.fromCharCode(u0);\n                    continue\n                }\n                u1 = u8Array[idx++] & 63;\n                if ((u0 & 224) == 192) {\n                    str += String.fromCharCode((u0 & 31) << 6 | u1);\n                    continue\n                }\n                u2 = u8Array[idx++] & 63;\n                if ((u0 & 240) == 224) {\n                    u0 = (u0 & 15) << 12 | u1 << 6 | u2\n                } else {\n                    u3 = u8Array[idx++] & 63;\n                    if ((u0 & 248) == 240) {\n                        u0 = (u0 & 7) << 18 | u1 << 12 | u2 << 6 | u3\n                    } else {\n                        u4 = u8Array[idx++] & 63;\n                        if ((u0 & 252) == 248) {\n                            u0 = (u0 & 3) << 24 | u1 << 18 | u2 << 12 | u3 << 6 | u4\n                        } else {\n                            u5 = u8Array[idx++] & 63;\n                            u0 = (u0 & 1) << 30 | u1 << 24 | u2 << 18 | u3 << 12 | u4 << 6 | u5\n                        }\n                    }\n                }\n                if (u0 < 65536) {\n                    str += String.fromCharCode(u0)\n                } else {\n                    var ch = u0 - 65536;\n                    str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023)\n                }\n            }\n        }\n    }\n    function UTF8ToString(ptr) {\n        return UTF8ArrayToString(HEAPU8, ptr)\n    }\n    function stringToUTF8Array(str, outU8Array, outIdx, maxBytesToWrite) {\n        if (!(maxBytesToWrite > 0))\n            return 0;\n        var startIdx = outIdx;\n        var endIdx = outIdx + maxBytesToWrite - 1;\n        for (var i = 0; i < str.length; ++i) {\n            var u = str.charCodeAt(i);\n            if (u >= 55296 && u <= 57343)\n                u = 65536 + ((u & 1023) << 10) | str.charCodeAt(++i) & 1023;\n            if (u <= 127) {\n                if (outIdx >= endIdx)\n                    break;\n                outU8Array[outIdx++] = u\n            } else if (u <= 2047) {\n                if (outIdx + 1 >= endIdx)\n                    break;\n                outU8Array[outIdx++] = 192 | u >> 6;\n                outU8Array[outIdx++] = 128 | u & 63\n            } else if (u <= 65535) {\n                if (outIdx + 2 >= endIdx)\n                    break;\n                outU8Array[outIdx++] = 224 | u >> 12;\n                outU8Array[outIdx++] = 128 | u >> 6 & 63;\n                outU8Array[outIdx++] = 128 | u & 63\n            } else if (u <= 2097151) {\n                if (outIdx + 3 >= endIdx)\n                    break;\n                outU8Array[outIdx++] = 240 | u >> 18;\n                outU8Array[outIdx++] = 128 | u >> 12 & 63;\n                outU8Array[outIdx++] = 128 | u >> 6 & 63;\n                outU8Array[outIdx++] = 128 | u & 63\n            } else if (u <= 67108863) {\n                if (outIdx + 4 >= endIdx)\n                    break;\n                outU8Array[outIdx++] = 248 | u >> 24;\n                outU8Array[outIdx++] = 128 | u >> 18 & 63;\n                outU8Array[outIdx++] = 128 | u >> 12 & 63;\n                outU8Array[outIdx++] = 128 | u >> 6 & 63;\n                outU8Array[outIdx++] = 128 | u & 63\n            } else {\n                if (outIdx + 5 >= endIdx)\n                    break;\n                outU8Array[outIdx++] = 252 | u >> 30;\n                outU8Array[outIdx++] = 128 | u >> 24 & 63;\n                outU8Array[outIdx++] = 128 | u >> 18 & 63;\n                outU8Array[outIdx++] = 128 | u >> 12 & 63;\n                outU8Array[outIdx++] = 128 | u >> 6 & 63;\n                outU8Array[outIdx++] = 128 | u & 63\n            }\n        }\n        outU8Array[outIdx] = 0;\n        return outIdx - startIdx\n    }\n    function stringToUTF8(str, outPtr, maxBytesToWrite) {\n        return stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite)\n    }\n    var UTF16Decoder = typeof TextDecoder !== \"undefined\" ? new TextDecoder(\"utf-16le\") : undefined;\n    function demangle(func) {\n        return func\n    }\n    function demangleAll(text) {\n        var regex = /__Z[wd_]+/g;\n        return text.replace(regex, (function(x) {\n            var y = demangle(x);\n            return x === y ? x : x + \" [\" + y + \"]\"\n        }\n        ))\n    }\n    function jsStackTrace() {\n        var err = new Error;\n        if (!err.stack) {\n            try {\n                throw new Error(0)\n            } catch (e) {\n                err = e\n            }\n            if (!err.stack) {\n                return \"(no stack trace available)\"\n            }\n        }\n        return err.stack.toString()\n    }\n    function stackTrace() {\n        var js = jsStackTrace();\n        if (Module[\"extraStackTrace\"])\n            js += \"\\n\" + Module[\"extraStackTrace\"]();\n        return demangleAll(js)\n    }\n    var WASM_PAGE_SIZE = 65536;\n    var ASMJS_PAGE_SIZE = 16777216;\n    function alignUp(x, multiple) {\n        if (x % multiple > 0) {\n            x += multiple - x % multiple\n        }\n        return x\n    }\n    var HEAP, buffer, HEAP8, HEAPU8, HEAP16, HEAPU16, HEAP32, HEAPU32, HEAPF32, HEAPF64;\n    function updateGlobalBuffer(buf) {\n        Module[\"buffer\"] = buffer = buf\n    }\n    function updateGlobalBufferViews() {\n        Module[\"HEAP8\"] = HEAP8 = new Int8Array(buffer);\n        Module[\"HEAP16\"] = HEAP16 = new Int16Array(buffer);\n        Module[\"HEAP32\"] = HEAP32 = new Int32Array(buffer);\n        Module[\"HEAPU8\"] = HEAPU8 = new Uint8Array(buffer);\n        Module[\"HEAPU16\"] = HEAPU16 = new Uint16Array(buffer);\n        Module[\"HEAPU32\"] = HEAPU32 = new Uint32Array(buffer);\n        Module[\"HEAPF32\"] = HEAPF32 = new Float32Array(buffer);\n        Module[\"HEAPF64\"] = HEAPF64 = new Float64Array(buffer)\n    }\n    var STATIC_BASE, STATICTOP, staticSealed;\n    var STACK_BASE, STACKTOP, STACK_MAX;\n    var DYNAMIC_BASE, DYNAMICTOP_PTR;\n    STATIC_BASE = STATICTOP = STACK_BASE = STACKTOP = STACK_MAX = DYNAMIC_BASE = DYNAMICTOP_PTR = 0;\n    staticSealed = false;\n    function abortOnCannotGrowMemory() {\n        abort(\"Cannot enlarge memory arrays. Either (1) compile with  -s TOTAL_MEMORY=X  with X higher than the current value \" + TOTAL_MEMORY + \", (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime, or (3) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 \")\n    }\n    function enlargeMemory() {\n        abortOnCannotGrowMemory()\n    }\n    var TOTAL_STACK = Module[\"TOTAL_STACK\"] || 5242880;\n    var TOTAL_MEMORY = Module[\"TOTAL_MEMORY\"] || 16777216;\n    if (TOTAL_MEMORY < TOTAL_STACK)\n        Module.printErr(\"TOTAL_MEMORY should be larger than TOTAL_STACK, was \" + TOTAL_MEMORY + \"! (TOTAL_STACK=\" + TOTAL_STACK + \")\");\n    if (Module[\"buffer\"]) {\n        buffer = Module[\"buffer\"]\n    } else {\n        if (typeof WebAssembly === \"object\" && typeof WebAssembly.Memory === \"function\") {\n            Module[\"wasmMemory\"] = new WebAssembly.Memory({\n                \"initial\": TOTAL_MEMORY / WASM_PAGE_SIZE,\n                \"maximum\": TOTAL_MEMORY / WASM_PAGE_SIZE\n            });\n            buffer = Module[\"wasmMemory\"].buffer\n        } else {\n            buffer = new ArrayBuffer(TOTAL_MEMORY)\n        }\n    }\n    updateGlobalBufferViews();\n    function getTotalMemory() {\n        return TOTAL_MEMORY\n    }\n    HEAP32[0] = 1668509029;\n    HEAP16[1] = 25459;\n    if (HEAPU8[2] !== 115 || HEAPU8[3] !== 99)\n        throw \"Runtime error: expected the system to be little-endian!\";\n    Module[\"HEAP\"] = HEAP;\n    Module[\"buffer\"] = buffer;\n    Module[\"HEAP8\"] = HEAP8;\n    Module[\"HEAP16\"] = HEAP16;\n    Module[\"HEAP32\"] = HEAP32;\n    Module[\"HEAPU8\"] = HEAPU8;\n    Module[\"HEAPU16\"] = HEAPU16;\n    Module[\"HEAPU32\"] = HEAPU32;\n    Module[\"HEAPF32\"] = HEAPF32;\n    Module[\"HEAPF64\"] = HEAPF64;\n    function callRuntimeCallbacks(callbacks) {\n        while (callbacks.length > 0) {\n            var callback = callbacks.shift();\n            if (typeof callback == \"function\") {\n                callback();\n                continue\n            }\n            var func = callback.func;\n            if (typeof func === \"number\") {\n                if (callback.arg === undefined) {\n                    Module[\"dynCall_v\"](func)\n                } else {\n                    Module[\"dynCall_vi\"](func, callback.arg)\n                }\n            } else {\n                func(callback.arg === undefined ? null : callback.arg)\n            }\n        }\n    }\n    var __ATPRERUN__ = [];\n    var __ATINIT__ = [];\n    var __ATMAIN__ = [];\n    var __ATEXIT__ = [];\n    var __ATPOSTRUN__ = [];\n    var runtimeInitialized = false;\n    var runtimeExited = false;\n    function preRun() {\n        if (Module[\"preRun\"]) {\n            if (typeof Module[\"preRun\"] == \"function\")\n                Module[\"preRun\"] = [Module[\"preRun\"]];\n            while (Module[\"preRun\"].length) {\n                addOnPreRun(Module[\"preRun\"].shift())\n            }\n        }\n        callRuntimeCallbacks(__ATPRERUN__)\n    }\n    function ensureInitRuntime() {\n        if (runtimeInitialized)\n            return;\n        runtimeInitialized = true;\n        callRuntimeCallbacks(__ATINIT__)\n    }\n    function preMain() {\n        callRuntimeCallbacks(__ATMAIN__)\n    }\n    function exitRuntime() {\n        callRuntimeCallbacks(__ATEXIT__);\n        runtimeExited = true\n    }\n    function postRun() {\n        if (Module[\"postRun\"]) {\n            if (typeof Module[\"postRun\"] == \"function\")\n                Module[\"postRun\"] = [Module[\"postRun\"]];\n            while (Module[\"postRun\"].length) {\n                addOnPostRun(Module[\"postRun\"].shift())\n            }\n        }\n        callRuntimeCallbacks(__ATPOSTRUN__)\n    }\n    function addOnPreRun(cb) {\n        __ATPRERUN__.unshift(cb)\n    }\n    function addOnPostRun(cb) {\n        __ATPOSTRUN__.unshift(cb)\n    }\n    function writeArrayToMemory(array, buffer) {\n        HEAP8.set(array, buffer)\n    }\n    assert(Math[\"imul\"] && Math[\"fround\"] && Math[\"clz32\"] && Math[\"trunc\"], \"this is a legacy browser, build with LEGACY_VM_SUPPORT\");\n    var Math_abs = Math.abs;\n    var Math_cos = Math.cos;\n    var Math_sin = Math.sin;\n    var Math_tan = Math.tan;\n    var Math_acos = Math.acos;\n    var Math_asin = Math.asin;\n    var Math_atan = Math.atan;\n    var Math_atan2 = Math.atan2;\n    var Math_exp = Math.exp;\n    var Math_log = Math.log;\n    var Math_sqrt = Math.sqrt;\n    var Math_ceil = Math.ceil;\n    var Math_floor = Math.floor;\n    var Math_pow = Math.pow;\n    var Math_imul = Math.imul;\n    var Math_fround = Math.fround;\n    var Math_round = Math.round;\n    var Math_min = Math.min;\n    var Math_clz32 = Math.clz32;\n    var Math_trunc = Math.trunc;\n    var runDependencies = 0;\n    var runDependencyWatcher = null;\n    var dependenciesFulfilled = null;\n    function addRunDependency(id) {\n        runDependencies++;\n        if (Module[\"monitorRunDependencies\"]) {\n            Module[\"monitorRunDependencies\"](runDependencies)\n        }\n    }\n    Module[\"addRunDependency\"] = addRunDependency;\n    function removeRunDependency(id) {\n        runDependencies--;\n        if (Module[\"monitorRunDependencies\"]) {\n            Module[\"monitorRunDependencies\"](runDependencies)\n        }\n        if (runDependencies == 0) {\n            if (runDependencyWatcher !== null) {\n                clearInterval(runDependencyWatcher);\n                runDependencyWatcher = null\n            }\n            if (dependenciesFulfilled) {\n                var callback = dependenciesFulfilled;\n                dependenciesFulfilled = null;\n                callback()\n            }\n        }\n    }\n    Module[\"removeRunDependency\"] = removeRunDependency;\n    Module[\"preloadedImages\"] = {};\n    Module[\"preloadedAudios\"] = {};\n    function integrateWasmJS() {\n        var wasmTextFile = \"sha1.wast\";\n        var wasmBinaryFile = \"sha1.wasm\";\n        var asmjsCodeFile = \"sha1.temp.asm.js\";\n        if (typeof Module[\"locateFile\"] === \"function\") {\n            wasmTextFile = Module[\"locateFile\"](wasmTextFile);\n            wasmBinaryFile = Module[\"locateFile\"](wasmBinaryFile);\n            asmjsCodeFile = Module[\"locateFile\"](asmjsCodeFile)\n        }\n        var wasmPageSize = 64 * 1024;\n        var info = {\n            \"global\": null,\n            \"env\": null,\n            \"asm2wasm\": {\n                \"f64-rem\": (function(x, y) {\n                    return x % y\n                }\n                ),\n                \"debugger\": (function() {\n                    debugger\n                }\n                )\n            },\n            \"parent\": Module\n        };\n        var exports = null;\n        function mergeMemory(newBuffer) {\n            var oldBuffer = Module[\"buffer\"];\n            if (newBuffer.byteLength < oldBuffer.byteLength) {\n                Module[\"printErr\"](\"the new buffer in mergeMemory is smaller than the previous one. in native wasm, we should grow memory here\")\n            }\n            var oldView = new Int8Array(oldBuffer);\n            var newView = new Int8Array(newBuffer);\n            newView.set(oldView);\n            updateGlobalBuffer(newBuffer);\n            updateGlobalBufferViews()\n        }\n        function fixImports(imports) {\n            return imports\n        }\n        function getBinary() {\n            try {\n                if (Module[\"wasmBinary\"]) {\n                    return new Uint8Array(Module[\"wasmBinary\"])\n                }\n                if (Module[\"readBinary\"]) {\n                    return Module[\"readBinary\"](wasmBinaryFile)\n                } else {\n                    throw \"on the web, we need the wasm binary to be preloaded and set on Module['wasmBinary']. emcc.py will do that for you when generating HTML (but not JS)\"\n                }\n            } catch (err) {\n                abort(err)\n            }\n        }\n        function getBinaryPromise() {\n            if (!Module[\"wasmBinary\"] && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) && typeof fetch === \"function\") {\n                return fetch(wasmBinaryFile, {\n                    credentials: \"same-origin\"\n                }).then((function(response) {\n                    if (!response[\"ok\"]) {\n                        throw \"failed to load wasm binary file at '\" + wasmBinaryFile + \"'\"\n                    }\n                    return response[\"arrayBuffer\"]()\n                }\n                )).catch((function() {\n                    return getBinary()\n                }\n                ))\n            }\n            return new Promise((function(resolve, reject) {\n                resolve(getBinary())\n            }\n            ))\n        }\n        function doNativeWasm(global, env, providedBuffer) {\n            if (typeof WebAssembly !== \"object\") {\n                Module[\"printErr\"](\"no native wasm support detected\");\n                return false\n            }\n            if (!(Module[\"wasmMemory\"]instanceof WebAssembly.Memory)) {\n                Module[\"printErr\"](\"no native wasm Memory in use\");\n                return false\n            }\n            env[\"memory\"] = Module[\"wasmMemory\"];\n            info[\"global\"] = {\n                \"NaN\": NaN,\n                \"Infinity\": Infinity\n            };\n            info[\"global.Math\"] = Math;\n            info[\"env\"] = env;\n            function receiveInstance(instance, module) {\n                exports = instance.exports;\n                if (exports.memory)\n                    mergeMemory(exports.memory);\n                Module[\"asm\"] = exports;\n                Module[\"usingWasm\"] = true;\n                removeRunDependency(\"wasm-instantiate\")\n            }\n            addRunDependency(\"wasm-instantiate\");\n            if (Module[\"instantiateWasm\"]) {\n                try {\n                    return Module[\"instantiateWasm\"](info, receiveInstance)\n                } catch (e) {\n                    Module[\"printErr\"](\"Module.instantiateWasm callback failed with error: \" + e);\n                    return false\n                }\n            }\n            function receiveInstantiatedSource(instance) {\n                receiveInstance(instance, {});\n            }\n            function instantiateArrayBuffer(receiver) {\n                var wasmModule = new WebAssembly.Module(base64ToBuffer(codeBase64));\n                var wa = new WebAssembly.Instance(wasmModule, info);\n                receiver(wa);\n\n                /*getBinaryPromise().then((function(binary) {\n                    return WebAssembly.instantiate(binary, info)\n                }\n                )).then(receiver).catch((function(reason) {\n                    Module[\"printErr\"](\"failed to asynchronously prepare wasm: \" + reason);\n                    abort(reason)\n                }\n                ))*/\n            }\n            //sha1.wasm\u5DF2\u7ECF\u751F\u6210base64\u5185\u8054\u5728\u4EE3\u7801\u4E2D\uFF0C\u4E0D\u9700\u8981\u518D\u8FDB\u884Cfetch\u83B7\u53D6\uFF0C@hibin\n            /*if (!Module[\"wasmBinary\"] && typeof WebAssembly.instantiateStreaming === \"function\" && wasmBinaryFile.indexOf(\"data:\") !== 0 && typeof fetch === \"function\") {\n                WebAssembly.instantiateStreaming(fetch(wasmBinaryFile, {\n                    credentials: \"same-origin\"\n                }), info).then(receiveInstantiatedSource).catch((function(reason) {\n                    Module[\"printErr\"](\"wasm streaming compile failed: \" + reason);\n                    Module[\"printErr\"](\"falling back to ArrayBuffer instantiation\");\n                    instantiateArrayBuffer(receiveInstantiatedSource)\n                }\n                ))\n            } else {*/\n                instantiateArrayBuffer(receiveInstantiatedSource)\n           // }\n            return Module[\"asm\"] || {}\n        }\n        Module[\"asmPreload\"] = Module[\"asm\"];\n        var asmjsReallocBuffer = Module[\"reallocBuffer\"];\n        var wasmReallocBuffer = (function(size) {\n            var PAGE_MULTIPLE = Module[\"usingWasm\"] ? WASM_PAGE_SIZE : ASMJS_PAGE_SIZE;\n            size = alignUp(size, PAGE_MULTIPLE);\n            var old = Module[\"buffer\"];\n            var oldSize = old.byteLength;\n            if (Module[\"usingWasm\"]) {\n                try {\n                    var result = Module[\"wasmMemory\"].grow((size - oldSize) / wasmPageSize);\n                    if (result !== (-1 | 0)) {\n                        return Module[\"buffer\"] = Module[\"wasmMemory\"].buffer\n                    } else {\n                        return null\n                    }\n                } catch (e) {\n                    return null\n                }\n            }\n        }\n        );\n        Module[\"reallocBuffer\"] = (function(size) {\n            if (finalMethod === \"asmjs\") {\n                return asmjsReallocBuffer(size)\n            } else {\n                return wasmReallocBuffer(size)\n            }\n        }\n        );\n        var finalMethod = \"\";\n        Module[\"asm\"] = (function(global, env, providedBuffer) {\n            env = fixImports(env);\n            if (!env[\"table\"]) {\n                var TABLE_SIZE = Module[\"wasmTableSize\"];\n                if (TABLE_SIZE === undefined)\n                    TABLE_SIZE = 1024;\n                var MAX_TABLE_SIZE = Module[\"wasmMaxTableSize\"];\n                if (typeof WebAssembly === \"object\" && typeof WebAssembly.Table === \"function\") {\n                    if (MAX_TABLE_SIZE !== undefined) {\n                        env[\"table\"] = new WebAssembly.Table({\n                            \"initial\": TABLE_SIZE,\n                            \"maximum\": MAX_TABLE_SIZE,\n                            \"element\": \"anyfunc\"\n                        })\n                    } else {\n                        env[\"table\"] = new WebAssembly.Table({\n                            \"initial\": TABLE_SIZE,\n                            element: \"anyfunc\"\n                        })\n                    }\n                } else {\n                    env[\"table\"] = new Array(TABLE_SIZE)\n                }\n                Module[\"wasmTable\"] = env[\"table\"]\n            }\n            if (!env[\"memoryBase\"]) {\n                env[\"memoryBase\"] = Module[\"STATIC_BASE\"]\n            }\n            if (!env[\"tableBase\"]) {\n                env[\"tableBase\"] = 0\n            }\n            var exports;\n            exports = doNativeWasm(global, env, providedBuffer);\n            if (!exports)\n                abort(\"no binaryen method succeeded. consider enabling more options, like interpreting, if you want that: https://github.com/kripken/emscripten/wiki/WebAssembly#binaryen-methods\");\n            return exports\n        }\n        )\n    }\n    integrateWasmJS();\n    var ASM_CONSTS = [];\n    STATIC_BASE = Runtime.GLOBAL_BASE;\n    STATICTOP = STATIC_BASE + 3168;\n    __ATINIT__.push();\n    var STATIC_BUMP = 3168;\n    Module[\"STATIC_BASE\"] = STATIC_BASE;\n    Module[\"STATIC_BUMP\"] = STATIC_BUMP;\n    STATICTOP += 16;\n    function ___lock() {}\n    var SYSCALLS = {\n        varargs: 0,\n        get: (function(varargs) {\n            SYSCALLS.varargs += 4;\n            var ret = HEAP32[SYSCALLS.varargs - 4 >> 2];\n            return ret\n        }\n        ),\n        getStr: (function() {\n            var ret = Pointer_stringify(SYSCALLS.get());\n            return ret\n        }\n        ),\n        get64: (function() {\n            var low = SYSCALLS.get()\n              , high = SYSCALLS.get();\n            if (low >= 0)\n                assert(high === 0);\n            else\n                assert(high === -1);\n            return low\n        }\n        ),\n        getZero: (function() {\n            assert(SYSCALLS.get() === 0)\n        }\n        )\n    };\n    function ___syscall140(which, varargs) {\n        SYSCALLS.varargs = varargs;\n        try {\n            var stream = SYSCALLS.getStreamFromFD()\n              , offset_high = SYSCALLS.get()\n              , offset_low = SYSCALLS.get()\n              , result = SYSCALLS.get()\n              , whence = SYSCALLS.get();\n            var offset = offset_low;\n            FS.llseek(stream, offset, whence);\n            HEAP32[result >> 2] = stream.position;\n            if (stream.getdents && offset === 0 && whence === 0)\n                stream.getdents = null;\n            return 0\n        } catch (e) {\n            if (typeof FS === \"undefined\" || !(e instanceof FS.ErrnoError))\n                abort(e);\n            return -e.errno\n        }\n    }\n    function ___syscall146(which, varargs) {\n        SYSCALLS.varargs = varargs;\n        try {\n            var stream = SYSCALLS.get()\n              , iov = SYSCALLS.get()\n              , iovcnt = SYSCALLS.get();\n            var ret = 0;\n            if (!___syscall146.buffer) {\n                ___syscall146.buffers = [null, [], []];\n                ___syscall146.printChar = (function(stream, curr) {\n                    var buffer = ___syscall146.buffers[stream];\n                    assert(buffer);\n                    if (curr === 0 || curr === 10) {\n                        (stream === 1 ? Module[\"print\"] : Module[\"printErr\"])(UTF8ArrayToString(buffer, 0));\n                        buffer.length = 0\n                    } else {\n                        buffer.push(curr)\n                    }\n                }\n                )\n            }\n            for (var i = 0; i < iovcnt; i++) {\n                var ptr = HEAP32[iov + i * 8 >> 2];\n                var len = HEAP32[iov + (i * 8 + 4) >> 2];\n                for (var j = 0; j < len; j++) {\n                    ___syscall146.printChar(stream, HEAPU8[ptr + j])\n                }\n                ret += len\n            }\n            return ret\n        } catch (e) {\n            if (typeof FS === \"undefined\" || !(e instanceof FS.ErrnoError))\n                abort(e);\n            return -e.errno\n        }\n    }\n    function ___syscall54(which, varargs) {\n        SYSCALLS.varargs = varargs;\n        try {\n            return 0\n        } catch (e) {\n            if (typeof FS === \"undefined\" || !(e instanceof FS.ErrnoError))\n                abort(e);\n            return -e.errno\n        }\n    }\n    function ___syscall6(which, varargs) {\n        SYSCALLS.varargs = varargs;\n        try {\n            var stream = SYSCALLS.getStreamFromFD();\n            FS.close(stream);\n            return 0\n        } catch (e) {\n            if (typeof FS === \"undefined\" || !(e instanceof FS.ErrnoError))\n                abort(e);\n            return -e.errno\n        }\n    }\n    function ___unlock() {}\n    function _emscripten_memcpy_big(dest, src, num) {\n        HEAPU8.set(HEAPU8.subarray(src, src + num), dest);\n        return dest\n    }\n    function ___setErrNo(value) {\n        if (Module[\"___errno_location\"])\n            HEAP32[Module[\"___errno_location\"]() >> 2] = value;\n        return value\n    }\n    __ATEXIT__.push((function() {\n        var fflush = Module[\"_fflush\"];\n        if (fflush)\n            fflush(0);\n        var printChar = ___syscall146.printChar;\n        if (!printChar)\n            return;\n        var buffers = ___syscall146.buffers;\n        if (buffers[1].length)\n            printChar(1, 10);\n        if (buffers[2].length)\n            printChar(2, 10)\n    }\n    ));\n    DYNAMICTOP_PTR = Runtime.staticAlloc(4);\n    STACK_BASE = STACKTOP = Runtime.alignMemory(STATICTOP);\n    STACK_MAX = STACK_BASE + TOTAL_STACK;\n    DYNAMIC_BASE = Runtime.alignMemory(STACK_MAX);\n    HEAP32[DYNAMICTOP_PTR >> 2] = DYNAMIC_BASE;\n    staticSealed = true;\n    Module[\"wasmTableSize\"] = 6;\n    Module[\"wasmMaxTableSize\"] = 6;\n    Module.asmGlobalArg = {};\n    Module.asmLibraryArg = {\n        \"abort\": abort,\n        \"enlargeMemory\": enlargeMemory,\n        \"getTotalMemory\": getTotalMemory,\n        \"abortOnCannotGrowMemory\": abortOnCannotGrowMemory,\n        \"___lock\": ___lock,\n        \"___setErrNo\": ___setErrNo,\n        \"___syscall140\": ___syscall140,\n        \"___syscall146\": ___syscall146,\n        \"___syscall54\": ___syscall54,\n        \"___syscall6\": ___syscall6,\n        \"___unlock\": ___unlock,\n        \"_emscripten_memcpy_big\": _emscripten_memcpy_big,\n        \"DYNAMICTOP_PTR\": DYNAMICTOP_PTR,\n        \"STACKTOP\": STACKTOP,\n        \"STACK_MAX\": STACK_MAX\n    };\n    var asm = Module[\"asm\"](Module.asmGlobalArg, Module.asmLibraryArg, buffer);\n    Module[\"asm\"] = asm;\n    var ___errno_location = Module[\"___errno_location\"] = (function() {\n        return Module[\"asm\"][\"___errno_location\"].apply(null, arguments)\n    }\n    );\n    var _emscripten_get_global_libc = Module[\"_emscripten_get_global_libc\"] = (function() {\n        return Module[\"asm\"][\"_emscripten_get_global_libc\"].apply(null, arguments)\n    }\n    );\n    var _fflush = Module[\"_fflush\"] = (function() {\n        return Module[\"asm\"][\"_fflush\"].apply(null, arguments)\n    }\n    );\n    var _malloc = Module[\"_malloc\"] = (function() {\n        return Module[\"asm\"][\"_malloc\"].apply(null, arguments)\n    }\n    );\n    var _sha1_final = Module[\"_sha1_final\"] = (function() {\n        return Module[\"asm\"][\"_sha1_final\"].apply(null, arguments)\n    }\n    );\n    var _sha1_init = Module[\"_sha1_init\"] = (function() {\n        return Module[\"asm\"][\"_sha1_init\"].apply(null, arguments)\n    }\n    );\n    var _sha1_temp_hash = Module[\"_sha1_temp_hash\"] = (function() {\n        return Module[\"asm\"][\"_sha1_temp_hash\"].apply(null, arguments)\n    }\n    );\n    var _sha1_update = Module[\"_sha1_update\"] = (function() {\n        return Module[\"asm\"][\"_sha1_update\"].apply(null, arguments)\n    }\n    );\n    var establishStackSpace = Module[\"establishStackSpace\"] = (function() {\n        return Module[\"asm\"][\"establishStackSpace\"].apply(null, arguments)\n    }\n    );\n    var getTempRet0 = Module[\"getTempRet0\"] = (function() {\n        return Module[\"asm\"][\"getTempRet0\"].apply(null, arguments)\n    }\n    );\n    var setTempRet0 = Module[\"setTempRet0\"] = (function() {\n        return Module[\"asm\"][\"setTempRet0\"].apply(null, arguments)\n    }\n    );\n    var setThrew = Module[\"setThrew\"] = (function() {\n        return Module[\"asm\"][\"setThrew\"].apply(null, arguments)\n    }\n    );\n    var stackAlloc = Module[\"stackAlloc\"] = (function() {\n        return Module[\"asm\"][\"stackAlloc\"].apply(null, arguments)\n    }\n    );\n    var stackRestore = Module[\"stackRestore\"] = (function() {\n        return Module[\"asm\"][\"stackRestore\"].apply(null, arguments)\n    }\n    );\n    var stackSave = Module[\"stackSave\"] = (function() {\n        return Module[\"asm\"][\"stackSave\"].apply(null, arguments)\n    }\n    );\n    var dynCall_ii = Module[\"dynCall_ii\"] = (function() {\n        return Module[\"asm\"][\"dynCall_ii\"].apply(null, arguments)\n    }\n    );\n    var dynCall_iiii = Module[\"dynCall_iiii\"] = (function() {\n        return Module[\"asm\"][\"dynCall_iiii\"].apply(null, arguments)\n    }\n    );\n    Runtime.stackAlloc = Module[\"stackAlloc\"];\n    Runtime.stackSave = Module[\"stackSave\"];\n    Runtime.stackRestore = Module[\"stackRestore\"];\n    Runtime.establishStackSpace = Module[\"establishStackSpace\"];\n    Runtime.setTempRet0 = Module[\"setTempRet0\"];\n    Runtime.getTempRet0 = Module[\"getTempRet0\"];\n    Module[\"asm\"] = asm;\n    function ExitStatus(status) {\n        this.name = \"ExitStatus\";\n        this.message = \"Program terminated with exit(\" + status + \")\";\n        this.status = status\n    }\n    ExitStatus.prototype = new Error;\n    ExitStatus.prototype.constructor = ExitStatus;\n    var initialStackTop;\n    var preloadStartTime = null;\n    dependenciesFulfilled = function runCaller() {\n        if (!Module[\"calledRun\"])\n            run();\n        if (!Module[\"calledRun\"])\n            dependenciesFulfilled = runCaller\n    }\n    ;\n    function run(args) {\n        args = args || Module[\"arguments\"];\n        if (preloadStartTime === null)\n            preloadStartTime = Date.now();\n        if (runDependencies > 0) {\n            return\n        }\n        preRun();\n        if (runDependencies > 0)\n            return;\n        if (Module[\"calledRun\"])\n            return;\n        function doRun() {\n            if (Module[\"calledRun\"])\n                return;\n            Module[\"calledRun\"] = true;\n            if (ABORT)\n                return;\n            ensureInitRuntime();\n            preMain();\n            if (Module[\"onRuntimeInitialized\"])\n                Module[\"onRuntimeInitialized\"]();\n            postRun()\n        }\n        if (Module[\"setStatus\"]) {\n            Module[\"setStatus\"](\"Running...\");\n            setTimeout((function() {\n                setTimeout((function() {\n                    Module[\"setStatus\"](\"\")\n                }\n                ), 1);\n                doRun()\n            }\n            ), 1)\n        } else {\n            doRun()\n        }\n    }\n    Module[\"run\"] = run;\n    function exit(status, implicit) {\n        if (implicit && Module[\"noExitRuntime\"]) {\n            return\n        }\n        if (Module[\"noExitRuntime\"]) {} else {\n            ABORT = true;\n            EXITSTATUS = status;\n            STACKTOP = initialStackTop;\n            exitRuntime();\n            if (Module[\"onExit\"])\n                Module[\"onExit\"](status)\n        }\n        if (ENVIRONMENT_IS_NODE) {\n            process[\"exit\"](status)\n        }\n        Module[\"quit\"](status, new ExitStatus(status))\n    }\n    Module[\"exit\"] = exit;\n    var abortDecorators = [];\n    function abort(what) {\n        if (Module[\"onAbort\"]) {\n            Module[\"onAbort\"](what)\n        }\n        if (what !== undefined) {\n            Module.print(what);\n            Module.printErr(what);\n            what = JSON.stringify(what)\n        } else {\n            what = \"\"\n        }\n        ABORT = true;\n        EXITSTATUS = 1;\n        var extra = \"\\nIf this abort() is unexpected, build with -s ASSERTIONS=1 which can give more information.\";\n        var output = \"abort(\" + what + \") at \" + stackTrace() + extra;\n        if (abortDecorators) {\n            abortDecorators.forEach((function(decorator) {\n                output = decorator(output, what)\n            }\n            ))\n        }\n        throw output\n    }\n    Module[\"abort\"] = abort;\n    if (Module[\"preInit\"]) {\n        if (typeof Module[\"preInit\"] == \"function\")\n            Module[\"preInit\"] = [Module[\"preInit\"]];\n        while (Module[\"preInit\"].length > 0) {\n            Module[\"preInit\"].pop()()\n        }\n    }\n\n    function base64ToBuffer(b) { const str = atob(b); const buffer = new Uint8Array(str.length); for (let i=0; i < str.length; i++) { buffer[i] = str.charCodeAt(i); } return buffer; }\n\n    run();\n\n    return messageInit();\n\n}";

exports.default = {
    start: code
};

/***/ }),

/***/ "DL6F":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _support = __webpack_require__("Im35");

var _support2 = _interopRequireDefault(_support);

var _config = __webpack_require__("QIop");

var _TaskQueue = __webpack_require__("BKU2");

var _TaskQueue2 = _interopRequireDefault(_TaskQueue);

var _FileTask = __webpack_require__("fzhe");

var _FileTask2 = _interopRequireDefault(_FileTask);

var _DirTask = __webpack_require__("q76F");

var _DirTask2 = _interopRequireDefault(_DirTask);

var _BelongTask = __webpack_require__("bIjq");

var _BelongTask2 = _interopRequireDefault(_BelongTask);

var _upload = __webpack_require__("m6a8");

var _upload2 = _interopRequireDefault(_upload);

var _stat = __webpack_require__("WZO8");

var _stat2 = _interopRequireDefault(_stat);

var _FileNode = __webpack_require__("/eiI");

var _FileNode2 = _interopRequireDefault(_FileNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var uploader = {
    belongTasks: {}

};

uploader.config = function (options) {
    (0, _config.set)(options);
    uploader.taskQueue = new _TaskQueue2.default();
    _upload2.default.dndInit();
};

uploader.addProcessor = function (name, processor) {
    (0, _config.addProcessor)(name, processor);
};

uploader.uploadFile = _upload2.default.selectFile;

uploader.uploadFolder = _upload2.default.selectFolder;

uploader.submitUpload = function (destDir, fileNodes) {
    var belongInfo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var priority = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;


    if (!destDir) {
        return;
    } else if (!(destDir instanceof _FileNode2.default)) {
        destDir = new _FileNode2.default({
            dir_key: destDir.dir_key,
            pdir_key: destDir.pdir_key || '',
            dir_name: destDir.dir_name || ''
        });
    }

    var belongTask = void 0;
    if (belongInfo && belongInfo.name) {
        belongTask = uploader.belongTasks[belongInfo.name];
        if (!belongTask) {
            belongTask = new _BelongTask2.default({
                belongInfo: belongInfo
            });
            uploader.belongTasks[belongInfo.name] = belongTask;
            belongTask.$on('statechange', function (task, newState) {
                if (newState === 'stop') {
                    uploader.belongTasks[belongInfo.name] = null;
                }
            });
        }
        uploader.taskQueue.removeTask(belongTask);
        uploader.taskQueue.head(belongTask);
    }

    var batchId = +new Date();
    var total = fileNodes.length;

    var tasks = [];

    fileNodes.forEach(function (fileNode, i) {

        var Ctor = fileNode.isDir() ? _DirTask2.default : _FileTask2.default;
        var task = new Ctor({
            fileNode: fileNode,
            destDir: destDir
        });

        task.setBatchInfo({
            batchId: batchId,
            batchTotal: total,
            batchIndex: i
        });

        tasks.push(task);

        if (belongTask) {
            belongTask.addSubTask(task);
        } else {
            uploader.taskQueue[priority ? 'head' : 'tail'](task);
        }
    });

    if (_support2.default.sliceUpload()) {

        _stat2.default.addBatchTasks(tasks);
    }

    if (belongTask && (belongTask.getState() === 'done' || belongTask.getState() === 'error' || belongTask.getState() === 'pause')) {
        belongTask.changeState('wait', true);
    }

    uploader.taskQueue.start(true);

    return tasks;
};

uploader.getBelongTask = function (name) {
    return uploader.belongTasks[name];
};

exports.default = uploader;

/***/ }),

/***/ "DVMa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_wy_upload_box_vue__ = __webpack_require__("Thlk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_wy_upload_box_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_wy_upload_box_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_wy_upload_box_vue__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_wy_upload_box_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3ab066f6_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_wy_upload_box_vue__ = __webpack_require__("hmaL");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("XyMi");
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_wy_upload_box_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3ab066f6_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_wy_upload_box_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3ab066f6_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_wy_upload_box_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "DqWA":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "591f1c48cc162f68c68db49d4c424f66.svg";

/***/ }),

/***/ "EQiE":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "96898e704d009e741c287ed868826424.svg";

/***/ }),

/***/ "F74N":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _taskVipGuide = __webpack_require__("5Jc6");

var _taskVipGuide2 = _interopRequireDefault(_taskVipGuide);

var _format = __webpack_require__("Lfum");

var _format2 = _interopRequireDefault(_format);

var _vip = __webpack_require__("YDab");

var _vip2 = _interopRequireDefault(_vip);

var _taskVipGuide3 = __webpack_require__("5Jc6");

var _taskVipGuide4 = _interopRequireDefault(_taskVipGuide3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: { TaskVipGuide: _taskVipGuide4.default },
    computed: {
        diskMode: function diskMode() {
            return this.$store.state.control.diskMode;
        },
        uploadTaskQueue: function uploadTaskQueue() {
            return this.$store.state.manager.uploadTaskQueue;
        },
        downloadTaskQueue: function downloadTaskQueue() {
            return this.$store.state.manager.downloadTaskQueue;
        },
        offlineTaskQueue: function offlineTaskQueue() {
            return this.$store.state.manager.offlineTaskQueue;
        },
        taskRootNode: function taskRootNode() {
            return this.$store.state.manager.taskRootNode;
        },
        managerState: function managerState() {
            return this.$store.getters['manager/managerState'];
        },
        uploadingTipShowed: function uploadingTipShowed() {
            return this.$store.state.manager.uploadingTipShowed;
        },
        isVip: function isVip() {
            return this.$store.getters['userInfo/vip'];
        },
        isSuperVip: function isSuperVip() {
            return this.$store.getters['userInfo/superVip'];
        },
        isFlowNotEnough: function isFlowNotEnough() {
            return this.$store.state.manager.flowNotEnough;
        },
        isSpaceNotEnough: function isSpaceNotEnough() {
            return this.$store.state.manager.spaceNotEnough;
        },
        isTeamMode: function isTeamMode() {
            return this.$store.state.control.diskMode === 'team';
        },
        isShowGuide: function isShowGuide() {
            return (!this.isVip || this.isFlowNotEnough || this.isSpaceNotEnough) && !this.isSuperVip && !this.isTeamMode;
        },
        privilege: function privilege() {
            return this.$store.state.manager.privilege || _vip2.default.privileges;
        },
        isTempVip: function isTempVip() {
            return this.$store.state.manager.tempVip;
        },
        speedupDone: function speedupDone() {
            if ((this.isVip || this.isTempVip) && this.managerState === 'complete') {
                return true;
            }
            return false;
        },
        hasDownload: function hasDownload() {
            return !!this.downloadTaskQueue.getTotal();
        },
        hasOffline: function hasOffline() {
            return !!this.offlineTaskQueue.getTotal();
        },
        stateCls: function stateCls() {
            var cls = '';

            if (this.managerState === 'offlineDownloading') {
                cls = 'tasking-offline';
            } else if (this.managerState === 'error' || this.managerState === 'spaceNotEnough') {
                cls = 'result-fail';
            } else if (this.managerState === 'uploadReadying') {
                cls = 'preparing';
            } else {
                if (this.managerState === 'uploading' || this.managerState === 'downloading') {
                    if (this.isVip || this.isTempVip) {
                        cls = 'tasking-vip';
                    } else {
                        cls = 'tasking-nor';
                    }
                }
                if (this.managerState === 'complete' || this.managerState === 'pause') {
                    cls = ' result-succ';
                }
            }
            return cls;
        },
        stateText: function stateText() {

            var stateText = '';

            switch (this.managerState) {
                case 'uploadReadying':
                    stateText = '准备中';
                    break;
                case 'uploading':
                    stateText = this.taskSpeed || '上传中';
                    break;
                case 'downloading':
                    stateText = this.taskSpeed || '下载中';
                    break;
                case 'offlineDownloading':
                    stateText = '离线下载中';
                    break;
                case 'pause':
                    var pauseCount = this.uploadTaskQueue.getExecuteCount() + this.downloadTaskQueue.getExecuteCount() + this.offlineTaskQueue.getExecuteCount();
                    stateText = pauseCount + '\u9879\u4EFB\u52A1\u5DF2\u53D6\u6D88';
                    break;
                case 'error':
                    var errorCount = this.uploadTaskQueue.getErrorCount() + this.downloadTaskQueue.getErrorCount() + this.offlineTaskQueue.getExecuteCount();
                    stateText = errorCount + '\u9879\u4EFB\u52A1\u5931\u8D25';
                    break;
                case 'spaceNotEnough':
                    stateText = '储存空间不足';
                    break;
                case 'complete':
                    stateText = '任务已完成';
                    break;
            }

            return stateText;
        },
        processText: function processText() {
            var stateText = '';
            var managerState = this.managerState;

            if (managerState === 'uploadReadying' || managerState === 'uploading' || managerState === 'downloading' || managerState === 'offlineDownloading') {
                var total = this.uploadTaskQueue.getTotal() + this.offlineTaskQueue.getTotal();
                var done = this.uploadTaskQueue.getProcessTasksCount() + this.offlineTaskQueue.getProcessingTasksCount();
                stateText = done + '/' + total + ' \u9879\u4EFB\u52A1\u8FDB\u884C\u4E2D';
            }

            return stateText;
        },
        smallStateText: function smallStateText() {
            var stateText = '';

            switch (this.managerState) {
                case 'uploadReadying':
                case 'speedup':
                case 'uploading':
                case 'downloading':
                case 'offlineDownloading':
                    var total = this.uploadTaskQueue.getTotal() + this.offlineTaskQueue.getTotal() + this.downloadTaskQueue.getTotal();
                    var done = this.uploadTaskQueue.getDoneCount() + this.offlineTaskQueue.getDoneCount() + this.downloadTaskQueue.getDoneCount();
                    stateText = done + 1 + '/' + total + ' \u9879\u4EFB\u52A1\u8FDB\u884C\u4E2D';
                    break;
                case 'pause':
                    var pauseCount = this.uploadTaskQueue.getExecuteCount() + this.offlineTaskQueue.getExecuteCount() + this.downloadTaskQueue.getExecuteCount();
                    stateText = pauseCount + '\u9879\u4EFB\u52A1\u5DF2\u53D6\u6D88';
                    break;
                case 'error':
                    var errorCount = this.uploadTaskQueue.getErrorCount() + this.offlineTaskQueue.getExecuteCount() + this.downloadTaskQueue.getErrorCount();
                    stateText = errorCount + '\u9879\u4EFB\u52A1\u5931\u8D25';
                    break;
                case 'spaceNotEnough':
                    stateText = '储存空间不足';
                    break;
                case 'complete':
                    stateText = '任务已完成';
                    break;
            }

            return stateText;
        },
        taskSpeed: function taskSpeed() {
            if (this.managerState === 'offlineDownloading') {
                return '';
            }

            var speed = this.uploadTaskQueue.getSpeed();
            var state = this.uploadTaskQueue.getState();
            var downloadSpeed = this.downloadTaskQueue.getSpeed();
            var downloadState = this.downloadTaskQueue.getState();

            var value = [];

            if (state === 'running' && speed) value.push(_format2.default.size(speed) + '/s');

            if (downloadState === 'running' && downloadSpeed) value.push(_format2.default.size(downloadSpeed) + '/s');

            return value.join('|');
        },
        spaceNotEnoughTip: function spaceNotEnoughTip() {
            return '\u5B8C\u6210\u672C\u6B21\u4EFB\u52A1\u8FD8\u9700' + this.needSpace + '\u7A7A\u95F4';
        },
        saveTime: function saveTime() {
            var saveTime = this.$store.state.manager.uploadTaskQueue.getSaveTime();
            var min1 = 60;
            saveTime = Math.round(saveTime / min1);
            if (saveTime > 0) {
                return saveTime;
            } else {
                return 0;
            }
        },
        needSpace: function needSpace() {
            var tasks = this.$store.state.manager.uploadTaskQueue.getExecuteTasks();
            var size = 0;
            tasks.forEach(function (task) {
                size += task.getSize();
            });
            return _format2.default.size(size);
        },
        processPercent: function processPercent() {
            var percent = Math.max(this.uploadTaskQueue.getProcessedPercent(), 0.01);
            return percent.toFixed(2);
        },
        curTeamNode: function curTeamNode() {
            return this.$store.state.team.curTeamNode;
        }
    },

    methods: {
        goVip: function goVip() {
            if (this.isSuperVip) {
                this.$store.commit('control/buySpace', 'wyweb_task_header');
            } else {
                this.$store.dispatch('control/popBuyVip', {
                    aid: 'wyweb_task_header',
                    type: 'svip'
                });
            }
        },
        buySpace: function buySpace() {
            this.$store.commit('control/buySpace', 'wyweb_task_header');
        },
        buyFlow: function buyFlow() {
            this.$store.commit('control/buyFlow', 'wyweb_task_header');
        },
        teamUpgrade: function teamUpgrade() {
            this.$store.commit('control/upgradeTeam', {
                teamNode: this.curTeamNode,
                aid: 'wyweb_manager_header'
            });
        }
    },

    comments: {
        taskVipGuide: _taskVipGuide2.default
    }

};

/***/ }),

/***/ "FVwl":
/***/ (function(module, exports, __webpack_require__) {

/**
 * filter xss
 *
 * @author Zongmin Lei<leizongmin@gmail.com>
 */

var FilterCSS = __webpack_require__("0Zbq").FilterCSS;
var DEFAULT = __webpack_require__("oz9r");
var parser = __webpack_require__("krhF");
var parseTag = parser.parseTag;
var parseAttr = parser.parseAttr;
var _ = __webpack_require__("noAI");

/**
 * returns `true` if the input value is `undefined` or `null`
 *
 * @param {Object} obj
 * @return {Boolean}
 */
function isNull(obj) {
  return obj === undefined || obj === null;
}

/**
 * get attributes for a tag
 *
 * @param {String} html
 * @return {Object}
 *   - {String} html
 *   - {Boolean} closing
 */
function getAttrs(html) {
  var i = _.spaceIndex(html);
  if (i === -1) {
    return {
      html: "",
      closing: html[html.length - 2] === "/",
    };
  }
  html = _.trim(html.slice(i + 1, -1));
  var isClosing = html[html.length - 1] === "/";
  if (isClosing) html = _.trim(html.slice(0, -1));
  return {
    html: html,
    closing: isClosing,
  };
}

/**
 * shallow copy
 *
 * @param {Object} obj
 * @return {Object}
 */
function shallowCopyObject(obj) {
  var ret = {};
  for (var i in obj) {
    ret[i] = obj[i];
  }
  return ret;
}

function keysToLowerCase(obj) {
  var ret = {};
  for (var i in obj) {
    if (Array.isArray(obj[i])) {
      ret[i.toLowerCase()] = obj[i].map(function (item) {
        return item.toLowerCase();
      });
    } else {
      ret[i.toLowerCase()] = obj[i];
    }
  }
  return ret;
}

/**
 * FilterXSS class
 *
 * @param {Object} options
 *        whiteList (or allowList), onTag, onTagAttr, onIgnoreTag,
 *        onIgnoreTagAttr, safeAttrValue, escapeHtml
 *        stripIgnoreTagBody, allowCommentTag, stripBlankChar
 *        css{whiteList, onAttr, onIgnoreAttr} `css=false` means don't use `cssfilter`
 */
function FilterXSS(options) {
  options = shallowCopyObject(options || {});

  if (options.stripIgnoreTag) {
    if (options.onIgnoreTag) {
      console.error(
        'Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time'
      );
    }
    options.onIgnoreTag = DEFAULT.onIgnoreTagStripAll;
  }
  if (options.whiteList || options.allowList) {
    options.whiteList = keysToLowerCase(options.whiteList || options.allowList);
  } else {
    options.whiteList = DEFAULT.whiteList;
  }

  options.onTag = options.onTag || DEFAULT.onTag;
  options.onTagAttr = options.onTagAttr || DEFAULT.onTagAttr;
  options.onIgnoreTag = options.onIgnoreTag || DEFAULT.onIgnoreTag;
  options.onIgnoreTagAttr = options.onIgnoreTagAttr || DEFAULT.onIgnoreTagAttr;
  options.safeAttrValue = options.safeAttrValue || DEFAULT.safeAttrValue;
  options.escapeHtml = options.escapeHtml || DEFAULT.escapeHtml;
  this.options = options;

  if (options.css === false) {
    this.cssFilter = false;
  } else {
    options.css = options.css || {};
    this.cssFilter = new FilterCSS(options.css);
  }
}

/**
 * start process and returns result
 *
 * @param {String} html
 * @return {String}
 */
FilterXSS.prototype.process = function (html) {
  // compatible with the input
  html = html || "";
  html = html.toString();
  if (!html) return "";

  var me = this;
  var options = me.options;
  var whiteList = options.whiteList;
  var onTag = options.onTag;
  var onIgnoreTag = options.onIgnoreTag;
  var onTagAttr = options.onTagAttr;
  var onIgnoreTagAttr = options.onIgnoreTagAttr;
  var safeAttrValue = options.safeAttrValue;
  var escapeHtml = options.escapeHtml;
  var cssFilter = me.cssFilter;

  // remove invisible characters
  if (options.stripBlankChar) {
    html = DEFAULT.stripBlankChar(html);
  }

  // remove html comments
  if (!options.allowCommentTag) {
    html = DEFAULT.stripCommentTag(html);
  }

  // if enable stripIgnoreTagBody
  var stripIgnoreTagBody = false;
  if (options.stripIgnoreTagBody) {
    stripIgnoreTagBody = DEFAULT.StripTagBody(
      options.stripIgnoreTagBody,
      onIgnoreTag
    );
    onIgnoreTag = stripIgnoreTagBody.onIgnoreTag;
  }

  var retHtml = parseTag(
    html,
    function (sourcePosition, position, tag, html, isClosing) {
      var info = {
        sourcePosition: sourcePosition,
        position: position,
        isClosing: isClosing,
        isWhite: Object.prototype.hasOwnProperty.call(whiteList, tag),
      };

      // call `onTag()`
      var ret = onTag(tag, html, info);
      if (!isNull(ret)) return ret;

      if (info.isWhite) {
        if (info.isClosing) {
          return "</" + tag + ">";
        }

        var attrs = getAttrs(html);
        var whiteAttrList = whiteList[tag];
        var attrsHtml = parseAttr(attrs.html, function (name, value) {
          // call `onTagAttr()`
          var isWhiteAttr = _.indexOf(whiteAttrList, name) !== -1;
          var ret = onTagAttr(tag, name, value, isWhiteAttr);
          if (!isNull(ret)) return ret;

          if (isWhiteAttr) {
            // call `safeAttrValue()`
            value = safeAttrValue(tag, name, value, cssFilter);
            if (value) {
              return name + '="' + value + '"';
            } else {
              return name;
            }
          } else {
            // call `onIgnoreTagAttr()`
            ret = onIgnoreTagAttr(tag, name, value, isWhiteAttr);
            if (!isNull(ret)) return ret;
            return;
          }
        });

        // build new tag html
        html = "<" + tag;
        if (attrsHtml) html += " " + attrsHtml;
        if (attrs.closing) html += " /";
        html += ">";
        return html;
      } else {
        // call `onIgnoreTag()`
        ret = onIgnoreTag(tag, html, info);
        if (!isNull(ret)) return ret;
        return escapeHtml(html);
      }
    },
    escapeHtml
  );

  // if enable stripIgnoreTagBody
  if (stripIgnoreTagBody) {
    retHtml = stripIgnoreTagBody.remove(retHtml);
  }

  return retHtml;
};

module.exports = FilterXSS;


/***/ }),

/***/ "FckT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_progress_vue__ = __webpack_require__("xZqV");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_progress_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_progress_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_progress_vue__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_progress_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7d00ecce_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_progress_vue__ = __webpack_require__("vUFI");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("XyMi");
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_progress_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7d00ecce_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_progress_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7d00ecce_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_progress_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "GQfk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_task_empty_vue__ = __webpack_require__("fQe1");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_task_empty_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_task_empty_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_task_empty_vue__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_task_empty_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5d28cc4a_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_task_empty_vue__ = __webpack_require__("AYW9");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("XyMi");
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_task_empty_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5d28cc4a_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_task_empty_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5d28cc4a_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_task_empty_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "GZDe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_wy_manager_header_vue__ = __webpack_require__("F74N");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_wy_manager_header_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_wy_manager_header_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_wy_manager_header_vue__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_wy_manager_header_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a44c26e6_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_wy_manager_header_vue__ = __webpack_require__("WTMD");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("XyMi");
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_wy_manager_header_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a44c26e6_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_wy_manager_header_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a44c26e6_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_wy_manager_header_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "GZIF":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(undefined);
// imports


// module
exports.push([module.i, ".modal .icon-vip-v2{width:24px;height:17px;background-image:url(" + __webpack_require__("EQiE") + ")}.modal .icon-vip-s-v2{width:24px;height:17px;background-image:url(" + __webpack_require__("DqWA") + ")}", ""]);

// exports


/***/ }),

/***/ "IMzu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_sub_tree_vue__ = __webpack_require__("32nd");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_sub_tree_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_sub_tree_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_sub_tree_vue__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_sub_tree_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_48d3d416_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_sub_tree_vue__ = __webpack_require__("f6Tq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("XyMi");
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_sub_tree_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_48d3d416_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_sub_tree_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_48d3d416_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_sub_tree_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "JKaU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_wy_manager_vue__ = __webpack_require__("6+KG");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_wy_manager_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_wy_manager_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_wy_manager_vue__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_wy_manager_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5f9ae1f2_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_wy_manager_vue__ = __webpack_require__("pbYk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("XyMi");
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_wy_manager_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5f9ae1f2_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_wy_manager_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5f9ae1f2_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_wy_manager_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "K6ED":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("cnlX"), __esModule: true };

/***/ }),

/***/ "KhWn":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var constants = __webpack_require__("4Uv1");
var xssFilter = __webpack_require__("ZZ5U");

var support_https_upload_type = ['webkit_plugin', 'active_plugin', 'upload_h5_flash'];

var map = {
    'disk.cgi.weiyun.com': 'user.weiyun.com/disk/',
    'pre.cgi.weiyun.com': 'user.weiyun.com/pre/',
    'stat.cgi.weiyun.com': 'user.weiyun.com/stat/',

    'web2.cgi.weiyun.com': 'user.weiyun.com/newcgi/',

    'download.cgi.weiyun.com': 'user.weiyun.com/download/',
    'tj.cgi.weiyun.com': 'user.weiyun.com/tj/',
    'web.cgi.weiyun.com': 'user.weiyun.com/oldcgi/',
    'diffsync.cgi.weiyun.com': 'user.weiyun.com/diffsync/',

    'docview.weiyun.com': 'user.weiyun.com/docview/',
    'user.weiyun.com': 'user.weiyun.com/',

    'c.isdspeed.qq.com': 'user.weiyun.com/isdspeed/c/',
    'p.qpic.cn': 'user.weiyun.com/',
    'shp.qpic.cn': 'user.weiyun.com/notepic/',
    'wx.cgi.weiyun.com': 'user.weiyun.com/wx/',
    'www.weiyun.com': 'www.weiyun.com/',
    'share.weiyun.com': 'share.weiyun.com/',
    'h5.weiyun.com': 'h5.weiyun.com/',
    'mp.weixin.qq.com': 'mp.weixin.qq.com/'
};

function translateUrl(url) {
    var link = document.createElement('a');

    link.href = url;
    var pathname = link.pathname.indexOf('/') === 0 ? link.pathname : '/' + link.pathname;

    return constants.PROTOCOL + '//' + translateHost(link.hostname) + (link.port ? ':' + translatePort(link.port) : '') + pathname + link.search + link.hash;
}

function translateDownloadUrl(url) {
    var link;

    if (constants.IS_APPBOX) {
        link = document.createElement('a');
        link.href = url;
        var pathname = link.pathname.indexOf('/') === 0 ? link.pathname : '/' + link.pathname;
        return link.protocol + '//' + translateHost(link.hostname) + (link.port ? ':' + link.port : '') + pathname + link.search + link.hash;
    } else {
        return translateUrl(url);
    }
}

function translateHost(host) {
    if (!host) {
        return host;
    }

    if (host.indexOf('.ftn.') > -1) {
        return host.split('.').slice(0, 3).join('-') + '.weiyun.com';
    }

    return host.replace(/\.qq\.com/, '.weiyun.com');
}

function translatePort(port) {
    if (constants.IS_HTTPS) {
        return constants.PORT;
    }
    return port;
}

function translateFtnupPort(port, uploadType) {
    if (constants.IS_APPBOX) {
        return port;
    }
    if (constants.IS_HTTPS) {
        return support_https_upload_type.indexOf(uploadType) > -1 ? constants.PORT : port;
    }

    return port;
}

function translateCgi(cgi) {
    var m = /^https?:\/\/([\w\.]+)(?:\/(.+))?/.exec(cgi);
    if (!constants.IS_HTTPS && constants.IS_DEBUG) {
        return cgi;
    }
    if (m && m[1] && map[m[1]]) {
        cgi = constants.PROTOCOL + '//' + map[m[1]] + (m[2] || '');
    }

    return cgi;
}

function translateNotepicUrl(notepicUrl) {
    if (!notepicUrl) {
        return '';
    } else if (notepicUrl.indexOf('tx_tls_gate') === -1) {
        if (xssFilter.isProxyWhiteListHostname(notepicUrl)) {
            return notepicUrl;
        }
        if (notepicUrl.indexOf('base64,') !== -1) {
            notepicUrl = notepicUrl.replace(/^http:\/\/|^https:\/\//, '');
        } else if (notepicUrl.indexOf('.weiyun.com/') === -1) {
            notepicUrl = 'https://proxy.gtimg.cn/tx_tls_gate=' + notepicUrl.replace(/^http:\/\/|^https:\/\//, '');
        }
    }
    return notepicUrl;
}

module.exports = {
    translateUrl: translateUrl,
    translateDownloadUrl: translateDownloadUrl,
    translateNotepicUrl: translateNotepicUrl,
    translateHost: translateHost,
    translatePort: translatePort,
    translateCgi: translateCgi,
    translateFtnupPort: translateFtnupPort
};

/***/ }),

/***/ "KwJJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"safebox-wrapper"},[_c('i',{staticClass:"icon icon-safebox-logo"}),_vm._v(" "),_c('div',{staticClass:"input-wrapper",class:{valid: !_vm.invalid}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.pwd),expression:"pwd"},{name:"placeholder",rawName:"v-placeholder",value:('输入保险箱密码'),expression:"'输入保险箱密码'"}],attrs:{"type":"password","name":"","id":"","required":"required"},domProps:{"value":(_vm.pwd)},on:{"input":function($event){if($event.target.composing){ return; }_vm.pwd=$event.target.value}}}),_vm._v(" "),_c('button',{staticClass:"btn btn-l btn-block",on:{"click":_vm.submit}},[_vm._v("确定")])])])}
var staticRenderFns = []


/***/ }),

/***/ "LKs4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__("Zrlr");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("wxAW");

var _createClass3 = _interopRequireDefault(_createClass2);

var _fileType = __webpack_require__("3TOL");

var _fileType2 = _interopRequireDefault(_fileType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OfflineFileNode = function () {
    function OfflineFileNode(opts) {
        (0, _classCallCheck3.default)(this, OfflineFileNode);

        this._ori_data = opts;
        this._torrent_index = opts.torrent_index;
        this._size = opts.filesize;
        this._name = opts.filename;
        this._file_path = opts.file_path;

        this._type = _fileType2.default.getTypeByName(this._name);

        this._offline_info = null;

        this._selected = false;
    }

    (0, _createClass3.default)(OfflineFileNode, [{
        key: 'getOriData',
        value: function getOriData() {
            return this._ori_data;
        }
    }, {
        key: 'getTorrentIndex',
        value: function getTorrentIndex() {
            return this._torrent_index;
        }
    }, {
        key: 'getSize',
        value: function getSize() {
            return this._size;
        }
    }, {
        key: 'getName',
        value: function getName() {
            return this._name;
        }
    }, {
        key: 'getType',
        value: function getType() {
            return this._type;
        }
    }, {
        key: 'getPath',
        value: function getPath() {
            return this._file_path;
        }
    }, {
        key: 'setOfflineInfo',
        value: function setOfflineInfo(info) {
            return this._offline_info = info;
        }
    }, {
        key: 'getOfflineInfo',
        value: function getOfflineInfo() {
            return this._offline_info;
        }
    }, {
        key: 'setSelected',
        value: function setSelected(selected) {
            this._selected = selected;
        }
    }, {
        key: 'isSelected',
        value: function isSelected() {
            return !!this._selected;
        }
    }]);
    return OfflineFileNode;
}();

exports.default = OfflineFileNode;

/***/ }),

/***/ "MVLL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{staticClass:"op-list"},[(_vm.managerState === 'error')?_c('li',{staticClass:"op-list-item",on:{"click":_vm.retryError}},[_c('button',{staticClass:"btn btn-link txt txt-sub"},[_vm._v("重试失败项")])]):_vm._e(),_vm._v(" "),(_vm.managerState === 'error')?_c('li',{staticClass:"op-list-item",on:{"click":_vm.cancelError}},[_c('button',{staticClass:"btn btn-link txt txt-sub"},[_vm._v("取消失败项")])]):_vm._e(),_vm._v(" "),(_vm.managerState !== 'error' && _vm.managerState !== 'pause' && _vm.managerState !== 'complete')?_c('li',{staticClass:"op-list-item",on:{"click":_vm.pauseAll}},[_c('button',{staticClass:"btn btn-link txt txt-sub"},[_vm._v("取消全部")])]):_vm._e(),_vm._v(" "),(_vm.managerState === 'pause')?_c('li',{staticClass:"op-list-item",on:{"click":_vm.retryAll}},[_c('button',{staticClass:"btn btn-link txt txt-sub"},[_vm._v("重试已取消")])]):_vm._e()])}
var staticRenderFns = []


/***/ }),

/***/ "NAr+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tree_item_vue__ = __webpack_require__("2r6j");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tree_item_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tree_item_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tree_item_vue__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tree_item_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_d21a319a_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_tree_item_vue__ = __webpack_require__("a4C9");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("XyMi");
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tree_item_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_d21a319a_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_tree_item_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_d21a319a_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_tree_item_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "NG4M":
/***/ (function(module, exports, __webpack_require__) {

/**
 * xss
 *
 * @author Zongmin Lei<leizongmin@gmail.com>
 */

var DEFAULT = __webpack_require__("oz9r");
var parser = __webpack_require__("krhF");
var FilterXSS = __webpack_require__("FVwl");

/**
 * filter xss function
 *
 * @param {String} html
 * @param {Object} options { whiteList, onTag, onTagAttr, onIgnoreTag, onIgnoreTagAttr, safeAttrValue, escapeHtml }
 * @return {String}
 */
function filterXSS(html, options) {
  var xss = new FilterXSS(options);
  return xss.process(html);
}

exports = module.exports = filterXSS;
exports.filterXSS = filterXSS;
exports.FilterXSS = FilterXSS;

(function () {
  for (var i in DEFAULT) {
    exports[i] = DEFAULT[i];
  }
  for (var j in parser) {
    exports[j] = parser[j];
  }
})();

// using `xss` on the browser, output `filterXSS` to the globals
if (typeof window !== "undefined") {
  window.filterXSS = module.exports;
}

// using `xss` on the WebWorker, output `filterXSS` to the globals
function isWorkerEnv() {
  return (
    typeof self !== "undefined" &&
    typeof DedicatedWorkerGlobalScope !== "undefined" &&
    self instanceof DedicatedWorkerGlobalScope
  );
}
if (isWorkerEnv()) {
  self.filterXSS = module.exports;
}


/***/ }),

/***/ "OJUo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal modal-show"},[_c('b',{staticClass:"modal-mask"}),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('div',{staticClass:"modal-dialog modal-dialog-480 modal-dialog-bt modal-dialog-tab"},[_c('div',{staticClass:"modal-dialog-hd clearfix"},[_c('h4',{staticClass:"modal-dialog-title"},[_vm._v("离线下载")]),_vm._v(" "),_c('button',{staticClass:"btn-icon icon icon-pop-close",attrs:{"aria-label":"关闭弹窗"},on:{"click":_vm.close}})]),_vm._v(" "),_c('div',{staticClass:"modal-dialog-bd"},[_c('nav',{staticClass:"modal-tab-nav"},[_c('ul',[_c('li',{staticClass:"tab-nav-item",class:{act: _vm.downloadType === 'torrent'},on:{"click":function($event){_vm.switchTab('torrent')}}},[_c('button',{staticClass:"btn btn-tab"},[_vm._v("BT下载")])]),_vm._v(" "),_c('li',{staticClass:"tab-nav-item",class:{act: _vm.downloadType === 'magnet'},on:{"click":function($event){_vm.switchTab('magnet')}}},[_c('button',{staticClass:"btn btn-tab"},[_vm._v("链接下载")])])])]),_vm._v(" "),_c('div',{staticClass:"modal-tab-cont"},[_c('ul',[_c('li',{staticClass:"tab-cont-item local",class:{act: _vm.downloadType === 'torrent'}},[_c('div',{staticClass:"input-wrapper"},[_c('button',{staticClass:"btn btn-block btn-active",on:{"click":_vm.uploadTorrent}},[_vm._v("选择本地BT文件")])]),_vm._v(" "),_c('p',{staticClass:"promotion with-icon"},[_c('i',{staticClass:"icon",class:_vm.vipIcon}),_vm._v(" "),_c('a',{staticClass:"btn-link",attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();return _vm.goVip($event)}}},[_vm._v(_vm._s(_vm.vipTips))])])]),_vm._v(" "),_c('li',{staticClass:"tab-cont-item online",class:{act: _vm.downloadType === 'magnet'}},[_c('div',{staticClass:"input-wrapper"},[_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.magnetUrl),expression:"magnetUrl"},{name:"placeholder",rawName:"v-placeholder",value:('输入http/磁力链'),expression:"'输入http/磁力链'"}],staticClass:"input-block",domProps:{"value":(_vm.magnetUrl)},on:{"input":function($event){if($event.target.composing){ return; }_vm.magnetUrl=$event.target.value}}})]),_vm._v(" "),_c('p',{staticClass:"promotion with-icon"},[(_vm.vipTips)?_c('i',{staticClass:"icon",class:_vm.vipIcon}):_vm._e(),_c('a',{staticClass:"btn-link",attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();return _vm.goVip($event)}}},[_vm._v(_vm._s(_vm.vipTips))])]),_vm._v(" "),_c('div',{staticClass:"modal-dialog-ft clearfix btn-group"},[_c('button',{staticClass:"btn",on:{"click":_vm.close}},[_vm._v("取消")]),_vm._v(" "),_c('button',{staticClass:"btn btn-active",class:{'btn-disable': !_vm.magnetUrl},on:{"click":_vm.next}},[_vm._v("下一步")])])])])])])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-dialog modal-dialog-tips"},[_c('p',[_vm._v("严禁存储、处理、传输、发布任何涉密、色情、暴力、侵权等违法违规信息")])])}]


/***/ }),

/***/ "OZHb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_task_list_vue__ = __webpack_require__("eQpE");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_task_list_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_task_list_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_task_list_vue__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_task_list_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5973dd4b_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_task_list_vue__ = __webpack_require__("OtxV");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("XyMi");
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_task_list_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5973dd4b_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_task_list_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5973dd4b_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_task_list_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "OtxV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{staticClass:"task-list-cont"},_vm._l((_vm.taskList),function(task){return _c('task-item',{key:task.getId(),attrs:{"task":task}})}))}
var staticRenderFns = []


/***/ }),

/***/ "P7gN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_task_item_vue__ = __webpack_require__("+MZZ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_task_item_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_task_item_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_task_item_vue__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_task_item_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b5e1a6c4_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_task_item_vue__ = __webpack_require__("i/hz");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("XyMi");
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_task_item_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b5e1a6c4_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_task_item_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b5e1a6c4_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_task_item_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "Pab7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_wy_offline_box_vue__ = __webpack_require__("Yp/v");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_wy_offline_box_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_wy_offline_box_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_wy_offline_box_vue__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_wy_offline_box_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6322a749_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_wy_offline_box_vue__ = __webpack_require__("OJUo");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("XyMi");
function injectStyle (context) {
  __webpack_require__("RbGW")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_wy_offline_box_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6322a749_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_wy_offline_box_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6322a749_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_wy_offline_box_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "PpZX":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _treeItem = __webpack_require__("NAr+");

var _treeItem2 = _interopRequireDefault(_treeItem);

var _subTree = __webpack_require__("IMzu");

var _subTree2 = _interopRequireDefault(_subTree);

var _emitter = __webpack_require__("nhxF");

var _emitter2 = _interopRequireDefault(_emitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {

    components: {
        wyTreeItem: _treeItem2.default,
        wySubTree: _subTree2.default
    },

    props: {
        rootNode: Object || Array,
        rootExpended: {
            type: Boolean,
            default: true
        },
        noRoot: {
            type: Boolean,
            default: false
        }
    },

    created: function created() {
        var _this = this;

        _emitter2.default.$on('chooseDir', function (fileNode) {
            _this.$emit('chooseDir', fileNode);
        });
        _emitter2.default.$on('expandDir', function (fileNode) {
            _this.$emit('expandDir', fileNode);
        });
        _emitter2.default.$on('createDir', function (tempDirName) {
            _this.$emit('createDir', tempDirName);
        });
    },
    destroyed: function destroyed() {
        _emitter2.default.$off('chooseDir');
        _emitter2.default.$off('expandDir');
        _emitter2.default.$off('createDir');
    }
};

/***/ }),

/***/ "QIop":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.set = set;
exports.addProcessor = addProcessor;

var _extend = __webpack_require__("x2SO");

var _extend2 = _interopRequireDefault(_extend);

var _support = __webpack_require__("Im35");

var _support2 = _interopRequireDefault(_support);

var _constants = __webpack_require__("4Uv1");

var _constants2 = _interopRequireDefault(_constants);

var _retMsgs = __webpack_require__("+WEU");

var _retMsgs2 = _interopRequireDefault(_retMsgs);

var _Slice = __webpack_require__("ub9P");

var _Slice2 = _interopRequireDefault(_Slice);

var _Form = __webpack_require__("4tT4");

var _Form2 = _interopRequireDefault(_Form);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GB1 = Math.pow(2, 30);
var KB1 = Math.pow(2, 10);

var config = {
    processors: {} };

function set(options) {

    config.biz = options.biz || 'disk';
    config.dndEnable = options.dndEnable || true;
    config.dndCt = options.dndCt;
    config.beforeSelect = options.beforeSelect;
    config.afterSelect = options.afterSelect;
    config.beforeDnd = options.beforeDnd;
    config.afterDnd = options.afterDnd;
    config.canDnd = options.canDnd;
    config.handleDndFail = options.handleDndFail;
    config.createDirThread = options.createDirThread || 6;
    config.scanThread = options.scanThread || 1;
    config.uploadThread = options.uploadThread || 1;
    config.retryCount = options.retryCount || 3;
    config.extInfoEnable = options.extInfoEnable || true;

    config.formInputCt = options.formInputCt || '_wy_form_upload_ct';

    config.maxFileSizeLimit = options.maxFileSizeLimit || GB1 * 50;
    config.emptyFileSHA = options.emptyFileSHA || 'da39a3ee5e6b4b0d3255bfef95601890afd80709';
    config.speedLimit = options.speedLimit || 0;
    config.fragmentSize = 512 * KB1;

    config.uploadModeCls = options.uploadModeCls || (_support2.default.sliceUpload() ? _Slice2.default : _Form2.default);

    config.retMsgs = _retMsgs2.default;
    config.uploadUrl = options.uploadUrl || _constants2.default.IS_DEBUG ? '//upload.weiyun.com/ftnup_v2/weiyun' : '//upload.weiyun.com/ftnup_v2/weiyun';
    config.backupUploadUrl = '//www.weiyun.com/ftnup_v2/weiyun';
    (0, _extend2.default)(_retMsgs2.default.codeMap, options.codeMap || {});

    return config;
}

function addProcessor(name, processor) {
    if (!config.processors[name]) {
        config.processors[name] = processor;
    } else {
        throw new Error('same processor has add');
    }
}

exports.default = config;

/***/ }),

/***/ "QPXW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__("7+uW");

var _vue2 = _interopRequireDefault(_vue);

var _store = __webpack_require__("x/Kw");

var _store2 = __webpack_require__("+zu9");

var _store3 = _interopRequireDefault(_store2);

var _wyManager = __webpack_require__("JKaU");

var _wyManager2 = _interopRequireDefault(_wyManager);

var _upload = __webpack_require__("tLAN");

var _upload2 = _interopRequireDefault(_upload);

var _offline = __webpack_require__("7I6H");

var _offline2 = _interopRequireDefault(_offline);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _store.register)();

function init() {
    _upload2.default.init();

    if (true) {
        _offline2.default.init();
    }

    _store3.default.commit('manager/init');
    _store3.default.dispatch('manager/loadCloudConfig');

    var WyManagerCtor = _vue2.default.extend(_wyManager2.default);

    var instance = new WyManagerCtor({
        el: document.createElement('div'),
        store: _store3.default
    });

    setTimeout(function () {
        try {
            document.getElementById('app').children[0].appendChild(instance.$el);
        } catch (e) {
            setTimeout(function () {
                try {
                    document.getElementById('app').children[0].appendChild(instance.$el);
                } catch (e) {}
            }, 1500);
        }
    }, 1500);
}

module.exports = {

    init: init

};

/***/ }),

/***/ "RbGW":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("mBT9");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("rjj0").default
var update = add("65c89289", content, true, {});

/***/ }),

/***/ "S6Y5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof2 = __webpack_require__("pFYg");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debug = false;

var BinaryFile = function BinaryFile(strData, iDataOffset, iDataLength) {
    var data = strData;
    var dataOffset = iDataOffset || 0;
    var dataLength = 0;

    this.getRawData = function () {
        return data;
    };

    if (typeof strData == "string") {
        dataLength = iDataLength || data.length;

        this.getByteAt = function (iOffset) {
            return data.charCodeAt(iOffset + dataOffset) & 0xFF;
        };
    } else if (typeof strData == "unknown") {
        dataLength = iDataLength || IEBinary_getLength(data);

        this.getByteAt = function (iOffset) {
            return IEBinary_getByteAt(data, iOffset + dataOffset);
        };
    }

    this.getLength = function () {
        return dataLength;
    };

    this.getSByteAt = function (iOffset) {
        var iByte = this.getByteAt(iOffset);
        if (iByte > 127) return iByte - 256;else return iByte;
    };

    this.getShortAt = function (iOffset, bBigEndian) {
        var iShort = bBigEndian ? (this.getByteAt(iOffset) << 8) + this.getByteAt(iOffset + 1) : (this.getByteAt(iOffset + 1) << 8) + this.getByteAt(iOffset);
        if (iShort < 0) iShort += 65536;
        return iShort;
    };
    this.getSShortAt = function (iOffset, bBigEndian) {
        var iUShort = this.getShortAt(iOffset, bBigEndian);
        if (iUShort > 32767) return iUShort - 65536;else return iUShort;
    };
    this.getLongAt = function (iOffset, bBigEndian) {
        var iByte1 = this.getByteAt(iOffset),
            iByte2 = this.getByteAt(iOffset + 1),
            iByte3 = this.getByteAt(iOffset + 2),
            iByte4 = this.getByteAt(iOffset + 3);

        var iLong = bBigEndian ? (((iByte1 << 8) + iByte2 << 8) + iByte3 << 8) + iByte4 : (((iByte4 << 8) + iByte3 << 8) + iByte2 << 8) + iByte1;
        if (iLong < 0) iLong += 4294967296;
        return iLong;
    };
    this.getSLongAt = function (iOffset, bBigEndian) {
        var iULong = this.getLongAt(iOffset, bBigEndian);
        if (iULong > 2147483647) return iULong - 4294967296;else return iULong;
    };
    this.getStringAt = function (iOffset, iLength) {
        var aStr = [];
        for (var i = iOffset, j = 0; i < iOffset + iLength; i++, j++) {
            aStr[j] = String.fromCharCode(this.getByteAt(i));
        }
        return aStr.join("");
    };

    this.getCharAt = function (iOffset) {
        return String.fromCharCode(this.getByteAt(iOffset));
    };
    this.toBase64 = function () {
        return window.btoa(data);
    };
    this.fromBase64 = function (strBase64) {
        data = window.atob(strBase64);
    };
};

var BinaryAjax = function BinaryAjax() {

    function createRequest() {
        var oHTTP = null;
        if (window.XMLHttpRequest) {
            oHTTP = new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            oHTTP = new ActiveXObject("Microsoft.XMLHTTP");
        }
        return oHTTP;
    }

    function getHead(strURL, fncCallback, fncError) {
        var oHTTP = createRequest();
        if (oHTTP) {
            if (fncCallback) {
                if (typeof oHTTP.onload != "undefined") {
                    oHTTP.onload = function () {
                        if (oHTTP.status == "200") {
                            fncCallback(this);
                        } else {
                            if (fncError) fncError();
                        }
                        oHTTP = null;
                    };
                } else {
                    oHTTP.onreadystatechange = function () {
                        if (oHTTP.readyState == 4) {
                            if (oHTTP.status == "200") {
                                fncCallback(this);
                            } else {
                                if (fncError) fncError();
                            }
                            oHTTP = null;
                        }
                    };
                }
            }
            oHTTP.open("HEAD", strURL, true);
            oHTTP.send(null);
        } else {
            if (fncError) fncError();
        }
    }

    function sendRequest(strURL, fncCallback, fncError, aRange, bAcceptRanges, iFileSize) {
        var oHTTP = createRequest();
        if (oHTTP) {

            var iDataOffset = 0;
            if (aRange && !bAcceptRanges) {
                iDataOffset = aRange[0];
            }
            var iDataLen = 0;
            if (aRange) {
                iDataLen = aRange[1] - aRange[0] + 1;
            }

            if (fncCallback) {
                if (typeof oHTTP.onload != "undefined") {
                    oHTTP.onload = function () {

                        if (oHTTP.status == "200" || oHTTP.status == "206" || oHTTP.status == "0") {
                            this.binaryResponse = new BinaryFile(this.responseText, iDataOffset, iDataLen);
                            this.fileSize = iFileSize || this.getResponseHeader("Content-Length");
                            fncCallback(this);
                        } else {
                            if (fncError) fncError();
                        }
                        oHTTP = null;
                    };
                } else {
                    oHTTP.onreadystatechange = function () {
                        if (oHTTP.readyState == 4) {
                            if (oHTTP.status == "200" || oHTTP.status == "206" || oHTTP.status == "0") {
                                this.binaryResponse = new BinaryFile(oHTTP.responseBody, iDataOffset, iDataLen);
                                this.fileSize = iFileSize || this.getResponseHeader("Content-Length");
                                fncCallback(this);
                            } else {
                                if (fncError) fncError();
                            }
                            oHTTP = null;
                        }
                    };
                }
            }
            oHTTP.open("GET", strURL, true);

            if (oHTTP.overrideMimeType) oHTTP.overrideMimeType('text/plain; charset=x-user-defined');

            if (aRange && bAcceptRanges) {
                oHTTP.setRequestHeader("Range", "bytes=" + aRange[0] + "-" + aRange[1]);
            }

            oHTTP.setRequestHeader("If-Modified-Since", "Sat, 1 Jan 1970 00:00:00 GMT");

            oHTTP.send(null);
        } else {
            if (fncError) fncError();
        }
    }

    return function (strURL, fncCallback, fncError, aRange) {

        if (aRange) {
            getHead(strURL, function (oHTTP) {
                var iLength = parseInt(oHTTP.getResponseHeader("Content-Length"), 10);
                var strAcceptRanges = oHTTP.getResponseHeader("Accept-Ranges");

                var iStart, iEnd;
                iStart = aRange[0];
                if (aRange[0] < 0) iStart += iLength;
                iEnd = iStart + aRange[1] - 1;

                sendRequest(strURL, fncCallback, fncError, [iStart, iEnd], strAcceptRanges == "bytes", iLength);
            });
        } else {
            sendRequest(strURL, fncCallback, fncError);
        }
    };
};

var needTags = [1, 2, 3, 4, 306, 34665, 34853, 40962, 40963, 36867, 36868];

var exif = {};

exif.Tags = {
    0xA002: "PixelXDimension",
    0xA003: "PixelYDimension",
    0x9003: "DateTimeOriginal",
    0x9004: "DateTimeDigitized" };

exif.TiffTags = {
    0x8769: "ExifIFDPointer",
    0x8825: "GPSInfoIFDPointer",

    0x0132: "DateTime"
};

exif.GPSTags = {
    0x0001: "GPSLatitudeRef",
    0x0002: "GPSLatitude",
    0x0003: "GPSLongitudeRef",
    0x0004: "GPSLongitude"
};

exif.StringValues = {
    ExposureProgram: {
        0: "Not defined",
        1: "Manual",
        2: "Normal program",
        3: "Aperture priority",
        4: "Shutter priority",
        5: "Creative program",
        6: "Action program",
        7: "Portrait mode",
        8: "Landscape mode"
    },
    MeteringMode: {
        0: "Unknown",
        1: "Average",
        2: "CenterWeightedAverage",
        3: "Spot",
        4: "MultiSpot",
        5: "Pattern",
        6: "Partial",
        255: "Other"
    },
    LightSource: {
        0: "Unknown",
        1: "Daylight",
        2: "Fluorescent",
        3: "Tungsten (incandescent light)",
        4: "Flash",
        9: "Fine weather",
        10: "Cloudy weather",
        11: "Shade",
        12: "Daylight fluorescent (D 5700 - 7100K)",
        13: "Day white fluorescent (N 4600 - 5400K)",
        14: "Cool white fluorescent (W 3900 - 4500K)",
        15: "White fluorescent (WW 3200 - 3700K)",
        17: "Standard light A",
        18: "Standard light B",
        19: "Standard light C",
        20: "D55",
        21: "D65",
        22: "D75",
        23: "D50",
        24: "ISO studio tungsten",
        255: "Other"
    },
    Flash: {
        0x0000: "Flash did not fire",
        0x0001: "Flash fired",
        0x0005: "Strobe return light not detected",
        0x0007: "Strobe return light detected",
        0x0009: "Flash fired, compulsory flash mode",
        0x000D: "Flash fired, compulsory flash mode, return light not detected",
        0x000F: "Flash fired, compulsory flash mode, return light detected",
        0x0010: "Flash did not fire, compulsory flash mode",
        0x0018: "Flash did not fire, auto mode",
        0x0019: "Flash fired, auto mode",
        0x001D: "Flash fired, auto mode, return light not detected",
        0x001F: "Flash fired, auto mode, return light detected",
        0x0020: "No flash function",
        0x0041: "Flash fired, red-eye reduction mode",
        0x0045: "Flash fired, red-eye reduction mode, return light not detected",
        0x0047: "Flash fired, red-eye reduction mode, return light detected",
        0x0049: "Flash fired, compulsory flash mode, red-eye reduction mode",
        0x004D: "Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",
        0x004F: "Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",
        0x0059: "Flash fired, auto mode, red-eye reduction mode",
        0x005D: "Flash fired, auto mode, return light not detected, red-eye reduction mode",
        0x005F: "Flash fired, auto mode, return light detected, red-eye reduction mode"
    },
    SensingMethod: {
        1: "Not defined",
        2: "One-chip color area sensor",
        3: "Two-chip color area sensor",
        4: "Three-chip color area sensor",
        5: "Color sequential area sensor",
        7: "Trilinear sensor",
        8: "Color sequential linear sensor"
    },
    SceneCaptureType: {
        0: "Standard",
        1: "Landscape",
        2: "Portrait",
        3: "Night scene"
    },
    SceneType: {
        1: "Directly photographed"
    },
    CustomRendered: {
        0: "Normal process",
        1: "Custom process"
    },
    WhiteBalance: {
        0: "Auto white balance",
        1: "Manual white balance"
    },
    GainControl: {
        0: "None",
        1: "Low gain up",
        2: "High gain up",
        3: "Low gain down",
        4: "High gain down"
    },
    Contrast: {
        0: "Normal",
        1: "Soft",
        2: "Hard"
    },
    Saturation: {
        0: "Normal",
        1: "Low saturation",
        2: "High saturation"
    },
    Sharpness: {
        0: "Normal",
        1: "Soft",
        2: "Hard"
    },
    SubjectDistanceRange: {
        0: "Unknown",
        1: "Macro",
        2: "Close view",
        3: "Distant view"
    },
    FileSource: {
        3: "DSC"
    },

    Components: {
        0: "",
        1: "Y",
        2: "Cb",
        3: "Cr",
        4: "R",
        5: "G",
        6: "B"
    }
};

function addEvent(oElement, strEvent, fncHandler) {
    if (oElement.addEventListener) {
        oElement.addEventListener(strEvent, fncHandler, false);
    } else if (oElement.attachEvent) {
        oElement.attachEvent("on" + strEvent, fncHandler);
    }
}

function imageHasData(oImg) {
    return !!oImg.exifdata;
}

function getImageData(oImg, fncCallback) {
    BinaryAjax(oImg.src, function (oHTTP) {
        var oEXIF = findEXIFinJPEG(oHTTP.binaryResponse);
        oImg.exifdata = oEXIF || {};
        if (fncCallback) fncCallback();
    });
}

function findEXIFinJPEG(oFile) {
    var aMarkers = [];

    if (oFile.getByteAt(0) != 0xFF || oFile.getByteAt(1) != 0xD8) {
        return false;
    }

    var iOffset = 2;
    var iLength = oFile.getLength();
    while (iOffset < iLength) {
        if (oFile.getByteAt(iOffset) != 0xFF) {
            if (debug) console.log("Not a valid marker at offset " + iOffset + ", found: " + oFile.getByteAt(iOffset));
            return false;
        }

        var iMarker = oFile.getByteAt(iOffset + 1);

        if (iMarker == 22400) {
            if (debug) console.log("Found 0xFFE1 marker");
            return readEXIFData(oFile, iOffset + 4, oFile.getShortAt(iOffset + 2, true) - 2);
        } else if (iMarker == 225) {
            if (debug) console.log("Found 0xFFE1 marker");
            return readEXIFData(oFile, iOffset + 4, oFile.getShortAt(iOffset + 2, true) - 2);
        } else {
            iOffset += 2 + oFile.getShortAt(iOffset + 2, true);
        }
    }
}

function readTags(oFile, iTIFFStart, iDirStart, oStrings, bBigEnd) {
    var iEntries = oFile.getShortAt(iDirStart, bBigEnd);
    var oTags = {};
    for (var i = 0; i < iEntries; i++) {
        var iEntryOffset = iDirStart + i * 12 + 2;

        var index = oFile.getShortAt(iEntryOffset, bBigEnd);
        if (needTags.indexOf(index) != -1) {
            var strTag = oStrings[oFile.getShortAt(iEntryOffset, bBigEnd)];
            if (!strTag && debug) console.log("Unknown tag: " + oFile.getShortAt(iEntryOffset, bBigEnd));

            oTags[strTag] = readTagValue(oFile, iEntryOffset, iTIFFStart, iDirStart, bBigEnd);
        }
    }
    return oTags;
}

function readTagValue(oFile, iEntryOffset, iTIFFStart, iDirStart, bBigEnd) {
    var iType = oFile.getShortAt(iEntryOffset + 2, bBigEnd);
    var iNumValues = oFile.getLongAt(iEntryOffset + 4, bBigEnd);
    var iValueOffset = oFile.getLongAt(iEntryOffset + 8, bBigEnd) + iTIFFStart;

    switch (iType) {
        case 1:
        case 7:
            if (iNumValues == 1) {
                return oFile.getByteAt(iEntryOffset + 8, bBigEnd);
            } else {
                var iValOffset = iNumValues > 4 ? iValueOffset : iEntryOffset + 8;
                var aVals = [];
                for (var n = 0; n < iNumValues; n++) {
                    aVals[n] = oFile.getByteAt(iValOffset + n);
                }
                return aVals;
            }
            break;

        case 2:
            var iStringOffset = iNumValues > 4 ? iValueOffset : iEntryOffset + 8;
            return oFile.getStringAt(iStringOffset, iNumValues - 1);


        case 3:
            if (iNumValues == 1) {
                return oFile.getShortAt(iEntryOffset + 8, bBigEnd);
            } else {
                var iValOffset = iNumValues > 2 ? iValueOffset : iEntryOffset + 8;
                var aVals = [];
                for (var n = 0; n < iNumValues; n++) {
                    aVals[n] = oFile.getShortAt(iValOffset + 2 * n, bBigEnd);
                }
                return aVals;
            }


        case 4:
            if (iNumValues == 1) {
                return oFile.getLongAt(iEntryOffset + 8, bBigEnd);
            } else {
                var aVals = [];
                for (var n = 0; n < iNumValues; n++) {
                    aVals[n] = oFile.getLongAt(iValueOffset + 4 * n, bBigEnd);
                }
                return aVals;
            }
            break;
        case 5:
            if (iNumValues == 1) {
                return oFile.getLongAt(iValueOffset, bBigEnd) / oFile.getLongAt(iValueOffset + 4, bBigEnd);
            } else {
                var aVals = [];
                for (var n = 0; n < iNumValues; n++) {
                    aVals[n] = oFile.getLongAt(iValueOffset + 8 * n, bBigEnd) / oFile.getLongAt(iValueOffset + 4 + 8 * n, bBigEnd);
                }
                return aVals;
            }
            break;
        case 9:
            if (iNumValues == 1) {
                return oFile.getSLongAt(iEntryOffset + 8, bBigEnd);
            } else {
                var aVals = [];
                for (var n = 0; n < iNumValues; n++) {
                    aVals[n] = oFile.getSLongAt(iValueOffset + 4 * n, bBigEnd);
                }
                return aVals;
            }
            break;
        case 10:
            if (iNumValues == 1) {
                return oFile.getSLongAt(iValueOffset, bBigEnd) / oFile.getSLongAt(iValueOffset + 4, bBigEnd);
            } else {
                var aVals = [];
                for (var n = 0; n < iNumValues; n++) {
                    aVals[n] = oFile.getSLongAt(iValueOffset + 8 * n, bBigEnd) / oFile.getSLongAt(iValueOffset + 4 + 8 * n, bBigEnd);
                }
                return aVals;
            }
            break;
    }
}

function readEXIFData(oFile, iStart, iLength) {
    if (oFile.getStringAt(iStart, 4) != "Exif") {
        if (debug) console.log("Not valid EXIF data! " + oFile.getStringAt(iStart, 4));
        return false;
    }

    var bBigEnd;

    var iTIFFOffset = iStart + 6;

    if (oFile.getShortAt(iTIFFOffset) == 0x4949) {
        bBigEnd = false;
    } else if (oFile.getShortAt(iTIFFOffset) == 0x4D4D) {
        bBigEnd = true;
    } else {
        if (debug) console.log("Not valid TIFF data! (no 0x4949 or 0x4D4D)");
        return false;
    }

    if (oFile.getShortAt(iTIFFOffset + 2, bBigEnd) != 0x002A) {
        if (debug) console.log("Not valid TIFF data! (no 0x002A)");
        return false;
    }

    if (oFile.getLongAt(iTIFFOffset + 4, bBigEnd) != 0x00000008) {
        if (debug) console.log("Not valid TIFF data! (First offset not 8)", oFile.getShortAt(iTIFFOffset + 4, bBigEnd));
        return false;
    }

    var oTags = readTags(oFile, iTIFFOffset, iTIFFOffset + 8, exif.TiffTags, bBigEnd);

    if (oTags.ExifIFDPointer) {
        var oEXIFTags = readTags(oFile, iTIFFOffset, iTIFFOffset + oTags.ExifIFDPointer, exif.Tags, bBigEnd);
        for (var strTag in oEXIFTags) {
            switch (strTag) {
                case "LightSource":
                case "Flash":
                case "MeteringMode":
                case "ExposureProgram":
                case "SensingMethod":
                case "SceneCaptureType":
                case "SceneType":
                case "CustomRendered":
                case "WhiteBalance":
                case "GainControl":
                case "Contrast":
                case "Saturation":
                case "Sharpness":
                case "SubjectDistanceRange":
                case "FileSource":
                    oEXIFTags[strTag] = exif.StringValues[strTag][oEXIFTags[strTag]];
                    break;

                case "ExifVersion":
                case "FlashpixVersion":
                    oEXIFTags[strTag] = String.fromCharCode(oEXIFTags[strTag][0], oEXIFTags[strTag][1], oEXIFTags[strTag][2], oEXIFTags[strTag][3]);
                    break;

                case "ComponentsConfiguration":
                    oEXIFTags[strTag] = exif.StringValues.Components[oEXIFTags[strTag][0]] + exif.StringValues.Components[oEXIFTags[strTag][1]] + exif.StringValues.Components[oEXIFTags[strTag][2]] + exif.StringValues.Components[oEXIFTags[strTag][3]];
                    break;
            }
            oTags[strTag] = oEXIFTags[strTag];
        }
    }

    if (oTags.GPSInfoIFDPointer) {
        var oGPSTags = readTags(oFile, iTIFFOffset, iTIFFOffset + oTags.GPSInfoIFDPointer, exif.GPSTags, bBigEnd);
        for (var strTag in oGPSTags) {
            switch (strTag) {
                case "GPSVersionID":
                    oGPSTags[strTag] = oGPSTags[strTag][0] + "." + oGPSTags[strTag][1] + "." + oGPSTags[strTag][2] + "." + oGPSTags[strTag][3];
                    break;
            }
            oTags[strTag] = oGPSTags[strTag];
        }
    }

    return oTags;
}

exif.getData = function (oImg, fncCallback) {
    if (!oImg.complete) return false;
    if (!imageHasData(oImg)) {
        getImageData(oImg, fncCallback);
    } else {
        if (fncCallback) fncCallback();
    }
    return true;
};

exif.getTag = function (oImg, strTag) {
    if (!imageHasData(oImg)) return;
    return oImg.exifdata[strTag];
};

exif.getAllTags = function (oImg) {
    if (!imageHasData(oImg)) return {};
    var oData = oImg.exifdata;
    var oAllTags = {};
    for (var a in oData) {
        if (oData.hasOwnProperty(a)) {
            oAllTags[a] = oData[a];
        }
    }
    return oAllTags;
};

exif.pretty = function (oImg) {
    if (!imageHasData(oImg)) return "";
    var oData = oImg.exifdata;
    var strPretty = "";
    for (var a in oData) {
        if (oData.hasOwnProperty(a)) {
            if ((0, _typeof3.default)(oData[a]) == "object") {
                strPretty += a + " : [" + oData[a].length + " values]\r\n";
            } else {
                strPretty += a + " : " + oData[a] + "\r\n";
            }
        }
    }
    return strPretty;
};

exif.readFromBinaryFile = function (oFile) {
    return findEXIFinJPEG(oFile);
};

var getFilePart = function getFilePart(file) {
    var filePart = void 0;
    if (file.slice) {
        filePart = file.slice(0, 131072);
    } else if (file.webkitSlice) {
        filePart = file.webkitSlice(0, 131072);
    } else if (file.mozSlice) {
        filePart = file.mozSlice(0, 131072);
    } else {
        filePart = file;
    }

    return filePart;
};

exif.fileExif = function (id, file, callback) {
    var reader = new FileReader();

    reader.onload = function (event) {
        var content = event.target.result;
        var binaryResponse = new BinaryFile(content);

        callback(id, exif.readFromBinaryFile(binaryResponse));
    };
    reader.onerror = function (event) {
        callback(null);
    };

    if (reader.readAsBinaryString) {
        reader.readAsBinaryString(getFilePart(file));
    } else {
        callback(null);
    }
};

exif.fileExif = function (file, callback) {
    var reader = new FileReader();

    reader.onload = function (event) {
        var content = event.target.result;
        var binaryResponse = new BinaryFile(content);

        callback(exif.readFromBinaryFile(binaryResponse));
    };
    reader.onerror = function (event) {
        callback(null);
    };

    if (reader.readAsBinaryString) {
        reader.readAsBinaryString(getFilePart(file));
    } else {
        callback(null);
    }
};

exports.default = exif;

/***/ }),

/***/ "Thlk":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _request = __webpack_require__("yS1T");

var _request2 = _interopRequireDefault(_request);

var _report = __webpack_require__("Vyex");

var _report2 = _interopRequireDefault(_report);

var _FileNode = __webpack_require__("/eiI");

var _FileNode2 = _interopRequireDefault(_FileNode);

var _wyToast = __webpack_require__("cYh5");

var _wyToast2 = _interopRequireDefault(_wyToast);

var _wyTree = __webpack_require__("tf/G");

var _wyTree2 = _interopRequireDefault(_wyTree);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	components: {
		wyTree: _wyTree2.default
	},

	props: {
		rootNode: Object,
		fileNodes: Array
	},

	data: function data() {
		return {
			errMsg: '',
			userChoose: false,
			tempDir: null,
			destDir: null,
			photoGroupShowed: false,
			photoGroups: [],
			destPhotoGroup: null,
			tempPhotoGroup: '',
			selectedGroupName: '' };
	},


	computed: {
		path: function path() {
			var destDir = this.destDir;
			var pathsName = [destDir.getName()];
			var parent = destDir.getParent();
			while (parent) {
				pathsName.push(parent.getName());
				parent = parent.getParent();
			}
			return pathsName.reverse().join('\\');
		},
		totalSize: function totalSize() {
			var size = 0;
			this.fileNodes.map(function (item) {
				size += item.getSize();
			});
			return size;
		},
		fileIcon: function fileIcon() {
			return 'icon-' + this.fileNodes[0].getType() + '-m';
		},
		usePhotoGroup: function usePhotoGroup() {
			var use = true;
			for (var i = 0, len = this.fileNodes.length; i < len; i++) {
				if (!this.fileNodes[i].isImage()) {
					use = false;
					break;
				}
			}
			return use;
		},
		maxLevel: function maxLevel() {
			return this.$store.state.userInfo.max_dir_layer_number;
		},
		selectedDirLevel: function selectedDirLevel() {
			return this.fileNodes[0].isDir() && this.fileNodes[0].getMaxLevel();
		}
	},

	methods: {
		chooseDir: function chooseDir(destDir) {
			this.destDir && this.destDir.setSelected(false);
			destDir.setSelected(true);
			this.destDir = destDir;
			var pathsName = [destDir.getName()];
			var parent = destDir.getParent();
			while (parent) {
				pathsName.push(parent.getName());
				parent = parent.getParent();
			}
			if (this.selectedDirLevel && pathsName.length + this.selectedDirLevel > this.maxLevel) {
				this.errMsg = '所选的目录层级过深';
				return;
			} else {
				this.errMsg = '';
			}

			this.userChoose = true;

			_report2.default.hot('uploadbox_path');
			_report2.default.beacon('web_uploadbox_path', {
				count: 1
			});
		},
		expandDir: function expandDir() {
			var _this = this;

			if (this.destDir.isLoadDone()) {
				return;
			}
			_request2.default.webapp({
				protocol: 'weiyunQdisk',
				name: 'DiskDirBatchList',
				cmd: 2209,
				data: {
					pdir_key: this.destDir.getPdirKey(),
					dir_list: [{
						dir_key: this.destDir.getId(),
						get_type: 1
					}]
				}
			}).then(function (res) {
				var dirList = res.dir_list[0]['dir_list'];
				dirList.forEach(function (item) {
					_this.destDir.addNode(new _FileNode2.default(item));
				});
				_this.destDir.setLoadDone(true);
			}).catch(function (error) {
				_wyToast2.default.error(error.msg || error.message);
			});
		},
		createDir: function createDir(tempDirName) {
			var _this2 = this;

			if (!tempDirName) {
				this.removeTempDir();
				return;
			}
			_request2.default.webapp({
				protocol: 'weiyunQdiskClient',
				name: 'DiskDirCreate',
				cmd: 2614,
				data: {
					pdir_key: this.destDir.getId(),
					ppdir_key: this.destDir.getPdirKey(),
					dir_name: tempDirName
				}
			}).then(function (res) {
				_this2.removeTempDir();
				_this2.destDir.unshiftNode(new _FileNode2.default(res));
				_this2.$emit('createDir', res, _this2.destDir.getId());
				_wyToast2.default.ok('新建文件夹成功');
			}).catch(function (error) {
				_wyToast2.default.error(error.msg || error.message);
			});
			_report2.default.hot('uploadbox_createfolder');
			_report2.default.beacon('web_uploadbox_createfolder', {
				count: 1
			});
		},
		toggleShowPhotoGroup: function toggleShowPhotoGroup() {
			this.photoGroupShowed = !this.photoGroupShowed;
			if (this.photoGroupShowed && this.photoGroups.length === 0) {
				this.loadPhotoGroups();
			}
		},
		loadPhotoGroups: function loadPhotoGroups() {
			var _this3 = this;

			_request2.default.webapp({
				protocol: 'weiyunFileLibClient',
				name: 'LibGetPicGroup',
				cmd: 26121,
				data: {}
			}).then(function (res) {
				var items = res['groups'];
				_this3.photoGroups = items;
				_this3.destPhotoGroup = items[0];
			}).catch(function (error) {
				console.error(error);
			});
		},
		createPhotoGroup: function createPhotoGroup() {
			var _this4 = this;

			_request2.default.webapp({
				protocol: 'weiyunFileLibClient',
				name: 'LibCreatePicGroup',
				cmd: 26122,
				data: {
					group_name: this.tempPhotoGroup
				}
			}).then(function (res) {
				_this4.photoGroups.push({
					group_id: res.group_id,
					group_name: res.group_name
				});
			}).catch(function (error) {
				console.error(error);
			});
		},
		selectPhotoGroup: function selectPhotoGroup(group) {
			this.destPhotoGroup = group;
		},
		close: function close() {
			this.$emit('close');
		},
		submit: function submit() {
			if (this.destDir && !this.errMsg) {
				this.$emit('submit', this.destDir, this.photoGroupShowed ? this.destPhotoGroup : null);
			}
			_report2.default.hot('uploadbox_start');
			_report2.default.beacon('web_uploadbox_start', {
				count: 1
			});
		},
		preCreateDir: function preCreateDir() {

			if (!this.userChoose) {
				this.chooseDir(this.rootNode);
				this.expandDir();
			}

			this.removeTempDir();
			var tempDir = new _FileNode2.default({
				dir_key: '__temp__',
				pdir_key: this.destDir.getId(),
				dir_name: '新建文件夹',
				tempcreate: true
			});
			this.destDir.unshiftNode(tempDir);
			this.tempDir = tempDir;
		},
		modalClick: function modalClick(e) {},
		removeTempDir: function removeTempDir() {
			if (this.tempDir) {
				this.tempDir.getParent().removeNode(this.tempDir);
				this.tempDir = null;
			}
		}
	}

};

/***/ }),

/***/ "U5jH":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _constants = __webpack_require__("4Uv1");

var _constants2 = _interopRequireDefault(_constants);

var _config = __webpack_require__("QIop");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    data: function data() {
        return {
            showed: false
        };
    },
    mounted: function mounted() {
        var _this = this;

        this.$nextTick(function () {

            var appEl = document.getElementById('app');

            document.addEventListener("dragenter", function (e) {
                e.preventDefault();
                e.stopPropagation();
                var dataTransfer = e.dataTransfer;
                if (dataTransfer.files && dataTransfer.files.length || dataTransfer.items && dataTransfer.items[0] && dataTransfer.items[0].kind === 'file' || _constants2.default.BROWSER_NAME === 'safari') {
                    if (_config2.default.canDnd && _config2.default.canDnd() || !_config2.default.canDnd) {
                        _this.toggleShowBox(true);
                    }
                }
            }, false);

            var dnd = document.getElementById('_dnd');

            var state = 0;

            dnd.addEventListener('dragenter', function (e) {
                e.preventDefault();
                e.stopPropagation();
                state = 1;
            });

            dnd.addEventListener('dragover', function (e) {
                e.preventDefault();
                e.stopPropagation();
                state = 2;
            });

            dnd.addEventListener('dragleave', function (e) {
                if (state === 2) {
                    _this.toggleShowBox(false);
                }
                state = 3;
            });

            dnd.addEventListener('drop', function (e) {
                state = 4;
                e.preventDefault();
                e.stopPropagation();
                _this.dndUpload(e);
            });
        });
    },


    methods: {
        toggleShowBox: function toggleShowBox(isShow) {
            this.showed = isShow;
        },
        dndUpload: function dndUpload(e) {
            var dataTransfer = e.dataTransfer;
            if (dataTransfer.files && dataTransfer.files.length) {
                this.$emit('dndUpload', dataTransfer);
            }
            this.showed = false;
        }
    }
};

/***/ }),

/***/ "Uo+f":
/***/ (function(module, exports, __webpack_require__) {

/**
 * cssfilter
 *
 * @author 老雷<leizongmin@gmail.com>
 */

var _ = __webpack_require__("jCb9");


/**
 * 解析style
 *
 * @param {String} css
 * @param {Function} onAttr 处理属性的函数
 *   参数格式： function (sourcePosition, position, name, value, source)
 * @return {String}
 */
function parseStyle (css, onAttr) {
  css = _.trimRight(css);
  if (css[css.length - 1] !== ';') css += ';';
  var cssLength = css.length;
  var isParenthesisOpen = false;
  var lastPos = 0;
  var i = 0;
  var retCSS = '';

  function addNewAttr () {
    // 如果没有正常的闭合圆括号，则直接忽略当前属性
    if (!isParenthesisOpen) {
      var source = _.trim(css.slice(lastPos, i));
      var j = source.indexOf(':');
      if (j !== -1) {
        var name = _.trim(source.slice(0, j));
        var value = _.trim(source.slice(j + 1));
        // 必须有属性名称
        if (name) {
          var ret = onAttr(lastPos, retCSS.length, name, value, source);
          if (ret) retCSS += ret + '; ';
        }
      }
    }
    lastPos = i + 1;
  }

  for (; i < cssLength; i++) {
    var c = css[i];
    if (c === '/' && css[i + 1] === '*') {
      // 备注开始
      var j = css.indexOf('*/', i + 2);
      // 如果没有正常的备注结束，则后面的部分全部跳过
      if (j === -1) break;
      // 直接将当前位置调到备注结尾，并且初始化状态
      i = j + 1;
      lastPos = i + 1;
      isParenthesisOpen = false;
    } else if (c === '(') {
      isParenthesisOpen = true;
    } else if (c === ')') {
      isParenthesisOpen = false;
    } else if (c === ';') {
      if (isParenthesisOpen) {
        // 在圆括号里面，忽略
      } else {
        addNewAttr();
      }
    } else if (c === '\n') {
      addNewAttr();
    }
  }

  return _.trim(retCSS);
}

module.exports = parseStyle;


/***/ }),

/***/ "WBZC":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__("Zrlr");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("wxAW");

var _createClass3 = _interopRequireDefault(_createClass2);

var _store = __webpack_require__("+zu9");

var _store2 = _interopRequireDefault(_store);

var _report = __webpack_require__("Vyex");

var _report2 = _interopRequireDefault(_report);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Batch = function () {
    function Batch(tasks) {
        var _this = this;

        (0, _classCallCheck3.default)(this, Batch);

        this._tasks = tasks;
        this._dirty = false;
        this._total = tasks.length;
        this._total_size = 0;
        this._done_cnt = 0;
        this._has_sub_task = false;
        this._tasks.forEach(function (task) {
            _this.addEvent(task);
            _this._total_size += task.getSize();
            if (task.hasSubTask()) {
                _this._has_sub_task = true;
            }
        });

        this._has_start_stat = false;
        this._has_error = false;
    }

    (0, _createClass3.default)(Batch, [{
        key: 'addEvent',
        value: function addEvent(task) {
            var _this2 = this;

            task.$on('statechange', function () {
                var state = task.getState();

                switch (state) {
                    case 'pause':
                    case 'stop':
                        _this2.ignore();
                        break;
                    case 'error':
                        _this2._has_error = true;
                        _this2.endBatchStat();
                        break;
                    case 'readying':
                        _this2.startBatchStat();
                        break;
                    case 'done':
                        if (task.hasExperiencing && task.hasExperiencing() || task.isFileExist && task.isFileExist()) {
                            _this2.ignore();
                        }
                        _this2._done_cnt++;
                        _this2.endBatchStat();
                        break;
                }
            });
        }
    }, {
        key: 'ignore',
        value: function ignore() {
            this._dirty = true;
            this._tasks = null;
        }
    }, {
        key: 'startBatchStat',
        value: function startBatchStat() {
            if (this._has_start_stat) {
                return;
            }
            this._has_start_stat = true;
            this._start_time = +new Date();
        }
    }, {
        key: 'endBatchStat',
        value: function endBatchStat() {

            this._end_time = +new Date();

            if (this._dirty || !this._total_size) {
                return;
            }

            if (this._done_cnt !== this._total) {
                return;
            }

            var speed = Math.floor(this._total_size / ((this._end_time - this._start_time) / 1000));

            speed = Math.floor(speed / 1024);
            if (this._has_sub_task) {
                _report2.default.md({
                    id: _store2.default.getters['userInfo/vip'] ? 180000726 : 180000727,
                    code: this._has_error ? 1 : 0,
                    type: this._has_error ? 1 : 0,
                    delay: speed
                });
            } else {
                _report2.default.md({
                    id: _store2.default.getters['userInfo/vip'] ? 180000722 : 180000724,
                    code: this._has_error ? 1 : 0,
                    type: this._has_error ? 1 : 0,
                    delay: speed
                });
            }

            if (!_store2.default.getters['userInfo/vip'] && performance.getEntriesByName) {
                var timingEntries = performance.getEntriesByName('https://upload.weiyun.com/ftnup_v2/weiyun?cmd=247121');

                var len = timingEntries.length;
                var time = 0;
                var cnt = 0;
                for (var i = 0; i < len; i++) {
                    var entry = timingEntries[i];
                    if (entry.duration < 1000) {
                        time += parseInt(entry.duration);
                        cnt++;
                    }
                    if (cnt > 4) {
                        break;
                    }
                }

                if (!time || !cnt) {
                    return;
                }

                var per = time / cnt;

                _report2.default.md({
                    id: 185000317,
                    code: 0,
                    type: 0,
                    delay: per
                });
            }
        }
    }]);
    return Batch;
}();

var addBatchTasks = function addBatchTasks(tasks) {
    new Batch(tasks);
};

exports.default = {
    addBatchTasks: addBatchTasks
};

/***/ }),

/***/ "WTMD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"tasks-header",class:[_vm.stateCls]},[_c('div',{staticClass:"summary-wrapper"},[_c('b',{staticClass:"before",style:({transform: 'scaleX('+_vm.processPercent+')'})}),_vm._v(" "),_c('i',{staticClass:"icon icon-status"}),_vm._v(" "),(_vm.taskSpeed)?_c('b',{staticClass:"vip-speed"},[_vm._v(_vm._s(_vm.taskSpeed))]):_vm._e(),_vm._v(" "),_c('p',{staticClass:"txt"},[_vm._v(_vm._s(_vm.smallStateText))]),_vm._v(" "),(_vm.managerState === 'spaceNotEnough' && _vm.isSuperVip)?_c('p',{staticClass:"txt txt-link"},[_c('a',{attrs:{"href":"javascript:void(0)"},on:{"click":_vm.buySpace}},[_vm._v("升级空间")])]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"title-wrapper"},[(_vm.diskMode === 'person')?_c('div',{staticClass:"info"},[(_vm.speedupDone && _vm.saveTime)?_c('p',{staticClass:"txt txt-sub"},[_vm._v(_vm._s(_vm.isVip ? '会员' : '试用')+"加速共为您节省 "),_c('strong',[_vm._v(_vm._s(_vm.saveTime))]),_vm._v(" 分钟")]):(_vm.managerState === 'spaceNotEnough')?_c('p',{staticClass:"txt txt-sub"},[_vm._v(_vm._s(_vm.spaceNotEnoughTip))]):_c('p',{staticClass:"txt txt-sub"},[_vm._v(_vm._s(_vm.processText))]),_vm._v(" "),(_vm.managerState === 'spaceNotEnough')?_c('p',{staticClass:"txt txt-link"},[(_vm.isSuperVip)?_c('span',[_c('a',{attrs:{"href":"javascript:void(0)"},on:{"click":_vm.buySpace}},[_vm._v("升级空间")])]):_vm._e()]):_vm._e()]):_c('div',{staticClass:"info"},[(_vm.managerState === 'spaceNotEnough' && _vm.curTeamNode.hasTeamAuth('TEAM_MANAGE'))?_c('p',{staticClass:"txt txt-link"},[_c('span',{staticClass:"vip-speed"},[_c('a',{attrs:{"href":"javascript:void(0)"},on:{"click":_vm.teamUpgrade}},[_vm._v("扩充存储空间")])])]):(_vm.managerState === 'spaceNotEnough')?_c('p',{staticClass:"txt txt-sub"},[_vm._v("\n                请联系管理员扩充存储空间\n            ")]):_c('p',{staticClass:"txt txt-sub"},[_vm._v(_vm._s(_vm.processText))])]),_vm._v(" "),_c('h2',{staticClass:"title"},[_vm._v(_vm._s(_vm.stateText))])])])}
var staticRenderFns = []


/***/ }),

/***/ "WZO8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__("Zrlr");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("wxAW");

var _createClass3 = _interopRequireDefault(_createClass2);

var _axios = __webpack_require__("mtWM");

var _axios2 = _interopRequireDefault(_axios);

var _constants = __webpack_require__("4Uv1");

var _constants2 = _interopRequireDefault(_constants);

var _cookie = __webpack_require__("bm5r");

var _cookie2 = _interopRequireDefault(_cookie);

var _support = __webpack_require__("Im35");

var _support2 = _interopRequireDefault(_support);

var _extend = __webpack_require__("x2SO");

var _extend2 = _interopRequireDefault(_extend);

var _config = __webpack_require__("QIop");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var uin = parseInt((_cookie2.default.get('uin') || '').replace(/^[oO0]*/, ''));

var baseData = {
    t_terminal: _constants2.default.BROWSER.isMobile ? 'H5' : 'WEB',
    t_network: 5,
    t_action: 2,
    t_err_code: 0,
    t_uin: 0,
    t_report_time: 0,
    t_app_ver: '3.0.0.0',
    t_total_size: 0,
    t_file_name: 0,
    t_file_size: 0,
    t_file_sha: '',
    t_conn_num: 0,
    t_total_delay: 0,

    t_err_msg: '',
    t_ack_packet_delay: 0,
    t_extend2: '' };

var KB512 = 512 * Math.pow(2, 10);

var ACTION_MAP = {
    'inbox': [9, 10] };

var Batch = function () {
    function Batch(tasks) {
        var _this = this;

        (0, _classCallCheck3.default)(this, Batch);

        this._tasks = tasks;
        this._dirty = false;
        this._total = tasks.length;
        this._total_size = 0;
        this._done_cnt = 0;
        this._has_sub_task = false;
        this._tasks.forEach(function (task) {
            _this.addEvent(task);
            _this._total_size += task.getSize();
            if (task.hasSubTask()) {
                _this._has_sub_task = true;
            }
        });

        this._has_start_stat = false;
        this._has_error = false;

        this._conn_num = 0;
        this._batch_num = this._tasks.length;
        this._batch_id = this._tasks[0].getBatchInfo().batch_id;

        this._t_actions = ACTION_MAP[_config2.default.biz];
    }

    (0, _createClass3.default)(Batch, [{
        key: 'addEvent',
        value: function addEvent(task) {
            var _this2 = this;

            task.$on('statechange', function () {
                var state = task.getState();

                switch (state) {
                    case 'pause':
                    case 'stop':
                        _this2.ignore();
                        break;
                    case 'error':
                        _this2._has_error = true;
                        _this2.statSingleTask(task);
                        _this2.endBatchStat();
                        break;
                    case 'readying':
                        _this2.startBatchStat();
                        break;
                    case 'done':
                        if (task.hasExperiencing && task.hasExperiencing() || task.isFileExist && task.isFileExist()) {
                            _this2.ignore();
                        }
                        if (!_this2._conn_num && task.getType() === 'file' && !task.isFileExist()) {
                            _this2._conn_num = task.getPreUploadInfo().channel_list && task.getPreUploadInfo().channel_list.length;
                        } else if (!_this2._conn_num && task.getType() === 'dir') {
                            var subTask = task.getSubDoneTasks()[0];
                            _this2._conn_num = subTask.getPreUploadInfo().channel_list && subTask.getPreUploadInfo().channel_list.length;
                        }
                        _this2._done_cnt++;
                        _this2.statSingleTask(task);
                        _this2.endBatchStat();
                        break;
                }
            });
        }
    }, {
        key: 'ignore',
        value: function ignore() {
            this._dirty = true;
            this._tasks = null;
        }
    }, {
        key: 'statSingleTask',
        value: function statSingleTask(task) {}
    }, {
        key: 'startBatchStat',
        value: function startBatchStat() {
            if (this._has_start_stat) {
                return;
            }
            this._has_start_stat = true;
            this._start_time = +new Date();
        }
    }, {
        key: 'endBatchStat',
        value: function endBatchStat() {

            this._end_time = +new Date();

            var spendTime = this._end_time - this._start_time;

            if (this._dirty || !this._total_size) {
                return;
            }

            if (this._done_cnt !== this._total) {
                return;
            }

            this.ignore();
        }
    }]);
    return Batch;
}();

var addBatchTasks = function addBatchTasks(tasks) {
    new Batch(tasks);
};

exports.default = {
    addBatchTasks: addBatchTasks,

    statSingleTask: Batch.prototype.statSingleTask
};

/***/ }),

/***/ "YDab":
/***/ (function(module, exports, __webpack_require__) {

"use strict";



var _getIterator2 = __webpack_require__("BO1k");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _promise = __webpack_require__("//Fk");

var _promise2 = _interopRequireDefault(_promise);

var _assign = __webpack_require__("woOf");

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var constants = __webpack_require__("4Uv1");
var request = __webpack_require__("yS1T");

var _require = __webpack_require__("0noh"),
    spaceInfo = _require.spaceInfo;

var TYPE = {
    SVIP: 'svip',
    VIP: 'vip',
    NORMAL: 'normal'
};

var PRIVILEGE_TYPE = {
    CAPACITY: 'capacity',

    HIGH_SPEED_DOWNLOAD: 'highSpeedDownload',

    HIGH_SPEED_UPLOAD: 'highSpeedUpload',

    DOCUMENT_SEARCH: 'documentSearch',

    FILE_COMPRESS: 'fileCompress',

    MOBILE_BACKUP: 'mobileBackup',

    MULTI_SPEED_PLAY: 'multiSpeedPlay',

    CLOUD_PLAY: 'cloudPlay',

    SAFE_BOX: 'safeBox',

    RECYCLE_RESERVE: 'recycleReserve',

    ORIGINAL_VIDEO_BACKUP: 'originalVideoBackup',

    OFFLINE_DOWNLOAD: 'offlineDownload'
};

var svipPrivilege = {};
var vipPrivilege = {};
var normalPrivilege = {};

svipPrivilege[PRIVILEGE_TYPE.CAPACITY] = {
    id: PRIVILEGE_TYPE.CAPACITY,
    class: 'capacity_vip',
    title: '存储空间',
    abbr: '超大空间',
    desc: '尊享充裕存储空间，上传备份更任性',
    detail: '微云超级会员尊享超大存储空间，特权存储空间有效期与会员时长一致。',
    levelDesc: '开通会员后，根据会员等级可获得更多会员存储空间',
    normalDesc: '\u666E\u901A\u7528\u6237\uFF1A' + spaceInfo.FREE_MAX_SPACE_TEXT,
    image: 'https://qzonestyle.gtimg.cn/aoi/sola/20180605151936_5DPD01x7J8.png',
    value: ['6TB', '6TB', '6TB', '6TB', '7TB', '7TB', '8TB', '8TB'],
    has: true
};
vipPrivilege[PRIVILEGE_TYPE.CAPACITY] = (0, _assign2.default)({}, svipPrivilege[PRIVILEGE_TYPE.CAPACITY], {
    value: ['3TB', '3TB', '3TB', '3TB', '4TB', '4TB', '4TB', '4TB'],
    has: true
});
normalPrivilege[PRIVILEGE_TYPE.CAPACITY] = (0, _assign2.default)({}, svipPrivilege[PRIVILEGE_TYPE.CAPACITY], {
    value: [spaceInfo.FREE_MAX_SPACE_TEXT, spaceInfo.FREE_MAX_SPACE_TEXT, spaceInfo.FREE_MAX_SPACE_TEXT, spaceInfo.FREE_MAX_SPACE_TEXT, spaceInfo.FREE_MAX_SPACE_TEXT, spaceInfo.FREE_MAX_SPACE_TEXT, spaceInfo.FREE_MAX_SPACE_TEXT, spaceInfo.FREE_MAX_SPACE_TEXT],
    has: false
});

svipPrivilege[PRIVILEGE_TYPE.HIGH_SPEED_DOWNLOAD] = {
    id: PRIVILEGE_TYPE.HIGH_SPEED_DOWNLOAD,
    class: 'download_vip',
    title: '极速下载',
    abbr: '极速下载',
    desc: '下载极速通道，超大文件任性下',
    detail: '微云超级会员尊享极速传输通道，成倍提升上传/下载任务的速度。超大文件也能极速上传下载。',
    levelDesc: '',

    image: 'https://qzonestyle.gtimg.cn/aoi/sola/20180605151936_iWoB7JOoA9.png',
    value: '无限量',
    has: true
};
vipPrivilege[PRIVILEGE_TYPE.HIGH_SPEED_DOWNLOAD] = (0, _assign2.default)({}, svipPrivilege[PRIVILEGE_TYPE.HIGH_SPEED_DOWNLOAD], {});
normalPrivilege[PRIVILEGE_TYPE.HIGH_SPEED_DOWNLOAD] = (0, _assign2.default)({}, svipPrivilege[PRIVILEGE_TYPE.HIGH_SPEED_DOWNLOAD], {
    value: false,
    has: false
});

svipPrivilege[PRIVILEGE_TYPE.HIGH_SPEED_UPLOAD] = {
    id: PRIVILEGE_TYPE.HIGH_SPEED_UPLOAD,
    class: 'upload_vip',
    title: '每日极速上传',
    abbr: '极速上传',
    desc: '超大极速上传流量，批量上传超快速',
    detail: '微云超级会员尊享超大极速上传流量，当天极速上传流量用完后，任务列表中超出流量外的任务会以低速进行上传，到下一自然日可恢复极速上传。',
    levelDesc: '开通会员后，根据会员等级可获得更多每日极速上传量',

    image: 'https://vfiles.gtimg.cn/wupload/xy/docs_manage/uO2idHio.png',

    has: true
};
vipPrivilege[PRIVILEGE_TYPE.HIGH_SPEED_UPLOAD] = (0, _assign2.default)({}, svipPrivilege[PRIVILEGE_TYPE.HIGH_SPEED_UPLOAD], {
    value: ['20GB', '20GB', '20GB', '20GB', '20GB', '20GB', '20GB', '20GB'],
    has: true
});
normalPrivilege[PRIVILEGE_TYPE.HIGH_SPEED_UPLOAD] = (0, _assign2.default)({}, svipPrivilege[PRIVILEGE_TYPE.HIGH_SPEED_UPLOAD], {
    value: false,
    has: false
});

svipPrivilege[PRIVILEGE_TYPE.DOCUMENT_SEARCH] = {
    id: PRIVILEGE_TYPE.DOCUMENT_SEARCH,
    class: 'text_vip',
    title: '搜索文档正文内容',
    abbr: '正文检索',
    desc: '支持文档全文搜索，快速找您想找',
    detail: '微云超级会员尊享文档正文检索特权，目前微云支持Word、Excel、PPT、TXT、PDF文件的全文搜索。',
    levelDesc: '',
    normalDesc: '',
    image: 'https://qzonestyle.gtimg.cn/aoi/sola/20181213190004_OfOtwrMCcm.jpg',
    value: true,
    has: true
};
vipPrivilege[PRIVILEGE_TYPE.DOCUMENT_SEARCH] = (0, _assign2.default)({}, svipPrivilege[PRIVILEGE_TYPE.DOCUMENT_SEARCH], {
    value: false,
    has: false
});
normalPrivilege[PRIVILEGE_TYPE.DOCUMENT_SEARCH] = (0, _assign2.default)({}, svipPrivilege[PRIVILEGE_TYPE.DOCUMENT_SEARCH], {
    value: false,
    has: false
});

svipPrivilege[PRIVILEGE_TYPE.FILE_COMPRESS] = {
    id: PRIVILEGE_TYPE.FILE_COMPRESS,
    class: 'archive_vip',
    title: '压缩包在线解压',
    abbr: '在线解压',
    desc: '无需下载更便捷，云端解压直接查看',
    detail: '微云超级会员尊享在线解压压缩包特权，无需下载，云端解压直接查看。微云超级会员支持在线解压4G内压缩包。',
    levelDesc: '',
    normalDesc: '',
    image: 'https://qzonestyle.gtimg.cn/aoi/sola/20181213184053_qrTwbNDXvd.jpg',
    value: '4GB内',
    has: true
};
vipPrivilege[PRIVILEGE_TYPE.FILE_COMPRESS] = (0, _assign2.default)({}, svipPrivilege[PRIVILEGE_TYPE.FILE_COMPRESS], {
    value: '2GB内',
    has: true
});
normalPrivilege[PRIVILEGE_TYPE.FILE_COMPRESS] = (0, _assign2.default)({}, svipPrivilege[PRIVILEGE_TYPE.FILE_COMPRESS], {
    value: '不支持在线解压',
    has: false
});

svipPrivilege[PRIVILEGE_TYPE.MOBILE_BACKUP] = {
    id: PRIVILEGE_TYPE.MOBILE_BACKUP,
    class: 'mobile_backup_vip',
    title: '手机备份视频',
    abbr: '手机备份视频',
    desc: '手机专享自动备份视频',
    detail: '会员专享备份手机视频特权，开通微云超级会员服务后，可在手机端上传视频以及选择开启【自动备份视频】功能。',
    levelDesc: '',
    normalDesc: '',
    image: 'https://vfiles.gtimg.cn/wupload/xy/docs_manage/fg5lhnVh.png',
    value: true,
    has: true
};
vipPrivilege[PRIVILEGE_TYPE.MOBILE_BACKUP] = (0, _assign2.default)({}, svipPrivilege[PRIVILEGE_TYPE.MOBILE_BACKUP], {
    value: false,
    has: false
});
normalPrivilege[PRIVILEGE_TYPE.MOBILE_BACKUP] = (0, _assign2.default)({}, svipPrivilege[PRIVILEGE_TYPE.MOBILE_BACKUP], {
    value: false,
    has: false
});

svipPrivilege[PRIVILEGE_TYPE.MULTI_SPEED_PLAY] = {
    id: PRIVILEGE_TYPE.MULTI_SPEED_PLAY,
    class: 'playback_rate_vip',
    title: '视频倍速播放',
    abbr: '倍速播放',
    desc: '视频倍速播放，调节看剧速度',
    detail: '微云超级会员尊享视频倍速播放特权，在微云移动端在线播放视频时，超级会员可选择加快或减慢视频播放速率，目前微云支持5种播放速率切换，即0.75倍、1倍、1.25倍、1.5倍、2.0倍。',
    levelDesc: '',
    normalDesc: '',
    image: 'https://qzonestyle.gtimg.cn/aoi/sola/20181213184054_lGUhlUg0zH.jpeg',
    value: true,
    has: true
};
vipPrivilege[PRIVILEGE_TYPE.MULTI_SPEED_PLAY] = (0, _assign2.default)({}, svipPrivilege[PRIVILEGE_TYPE.MULTI_SPEED_PLAY], {
    value: false,
    has: false
});
normalPrivilege[PRIVILEGE_TYPE.MULTI_SPEED_PLAY] = (0, _assign2.default)({}, svipPrivilege[PRIVILEGE_TYPE.MULTI_SPEED_PLAY], {
    value: false,
    has: false
});

svipPrivilege[PRIVILEGE_TYPE.CLOUD_PLAY] = {
    id: PRIVILEGE_TYPE.CLOUD_PLAY,
    class: 'fast_video_load',
    title: '视频极速加载',
    abbr: '视频极速加载',
    desc: '高清视频极速加载，在线播放更流畅',
    detail: '微云超级会员专属云播加速通道，极速加载高清视频，尊享更流畅的播放体验。',
    levelDesc: '',
    normalDesc: '普通用户：无权限（≤100KB/s）',
    image: 'https://qzonestyle.gtimg.cn/aoi/sola/20180605153358_zCb6SGjjFX.png',
    value: true,
    has: true
};
vipPrivilege[PRIVILEGE_TYPE.CLOUD_PLAY] = (0, _assign2.default)({}, svipPrivilege[PRIVILEGE_TYPE.CLOUD_PLAY], {});
normalPrivilege[PRIVILEGE_TYPE.CLOUD_PLAY] = (0, _assign2.default)({}, svipPrivilege[PRIVILEGE_TYPE.CLOUD_PLAY], {
    value: false,
    has: false
});

svipPrivilege[PRIVILEGE_TYPE.SAFE_BOX] = {
    id: PRIVILEGE_TYPE.SAFE_BOX,
    title: '文件保险箱',
    class: 'safe_vip',
    abbr: '保险箱',
    desc: '私密文件单独存储，加密保护更安心',
    detail: '微云超级会员尊享文件保险箱功能，开启保险箱后，可直接添加本地文件到保险箱，也可将微云文件移入保险箱。保险箱内文件无法分享，且不会进入回收站，删除文件将永久删除。会员到期后，将无法再向保险箱添加新文件，已有文件依然可以访问和操作。',
    levelDesc: '',
    normalDesc: '',
    image: 'https://qzonestyle.gtimg.cn/aoi/sola/20180605151936_w4aagbgO7G.png',
    value: true,
    has: true
};
vipPrivilege[PRIVILEGE_TYPE.SAFE_BOX] = (0, _assign2.default)({}, svipPrivilege[PRIVILEGE_TYPE.SAFE_BOX], {});
normalPrivilege[PRIVILEGE_TYPE.SAFE_BOX] = (0, _assign2.default)({}, svipPrivilege[PRIVILEGE_TYPE.SAFE_BOX], {
    value: false,
    has: false
});

svipPrivilege[PRIVILEGE_TYPE.RECYCLE_RESERVE] = {
    id: PRIVILEGE_TYPE.RECYCLE_RESERVE,
    class: 'recycle_vip',
    title: '回收站保留期',
    abbr: '回收站保留',
    desc: '回收站文件保留更久，已删文件找回更轻松',
    detail: '微云回收站内的文件保留一段时间后会自动清除(永久删除)。微云超级会员专享回收站文件超长保留时间。已删文件也能轻松找回。',
    levelDesc: '开通会员后，根据会员等级可提高回收站保留期时长',
    normalDesc: '普通用户：保留7天',
    image: 'https://qzonestyle.gtimg.cn/aoi/sola/20191024105826_5yON7kMn5z.png',
    value: ['90天', '90天', '90天', '90天', '90天', '90天', '90天', '90天'],
    has: true
};
vipPrivilege[PRIVILEGE_TYPE.RECYCLE_RESERVE] = (0, _assign2.default)({}, svipPrivilege[PRIVILEGE_TYPE.RECYCLE_RESERVE], {
    value: ['30天', '30天', '35天', '35天', '40天', '40天', '45天', '45天'],
    has: true
});
normalPrivilege[PRIVILEGE_TYPE.RECYCLE_RESERVE] = (0, _assign2.default)({}, svipPrivilege[PRIVILEGE_TYPE.RECYCLE_RESERVE], {
    value: ['7天', '7天', '7天', '7天', '7天', '7天', '7天', '7天'],
    has: false
});

svipPrivilege[PRIVILEGE_TYPE.ORIGINAL_VIDEO_BACKUP] = {
    id: PRIVILEGE_TYPE.ORIGINAL_VIDEO_BACKUP,
    class: 'video_backup_vip',
    title: '备份原画视频',
    abbr: '原画视频',
    desc: '备份视频源文件，原画体验更逼真',
    detail: '微云超级会员专享原画视频备份，保留原始视频文件。',
    levelDesc: '',
    normalDesc: '',
    image: 'https://qzonestyle.gtimg.cn/aoi/sola/20180605151937_NvFoy7PtK7.png',
    value: true,
    has: true
};
vipPrivilege[PRIVILEGE_TYPE.ORIGINAL_VIDEO_BACKUP] = (0, _assign2.default)({}, svipPrivilege[PRIVILEGE_TYPE.ORIGINAL_VIDEO_BACKUP], {
    value: false,
    has: false
});
normalPrivilege[PRIVILEGE_TYPE.ORIGINAL_VIDEO_BACKUP] = (0, _assign2.default)({}, svipPrivilege[PRIVILEGE_TYPE.ORIGINAL_VIDEO_BACKUP], {
    value: false,
    has: false
});

var hasCloud = false;
var loadCloudConfig = function loadCloudConfig() {
    var cloudPrivilege = {};

    cloudPrivilege[TYPE.SVIP] = (0, _assign2.default)({}, svipPrivilege);
    cloudPrivilege[TYPE.VIP] = (0, _assign2.default)({}, vipPrivilege);
    cloudPrivilege[TYPE.NORMAL] = (0, _assign2.default)({}, normalPrivilege);

    if (!constants.BROWSER.isIOS) {
        PRIVILEGE_TYPE.OFFLINE_DOWNLOAD = 'offlineDownload';

        cloudPrivilege[TYPE.SVIP][PRIVILEGE_TYPE.OFFLINE_DOWNLOAD] = {
            id: PRIVILEGE_TYPE.OFFLINE_DOWNLOAD,
            class: 'download_vip',
            title: '每日离线下载',
            abbr: '离线下载',
            desc: '每日多次离线下载，网络资源获取更方便',
            detail: '微云超级会员尊享每日多次离线下载，用户可通过下载链接或种子文件将资源直接下载到微云。每个链接/种子算作一次。由于App Store的相关规定，iOS客户端暂无法使用离线下载功能。',
            levelDesc: '开通会员后，根据会员等级提高每日离线下载次数上限',
            normalDesc: '普通用户：无权限（可试用）',
            imagePc: 'https://vfiles.gtimg.cn/wupload/xy/docs_manage/ViMeRSY4.png',
            image: 'https://qzonestyle.gtimg.cn/aoi/sola/20180605151936_gDF9GAwsPv.png',
            value: ['40次', '45次', '50次', '55次', '60次', '65次', '70次', '75次'],
            has: true
        };
        cloudPrivilege[TYPE.VIP][PRIVILEGE_TYPE.OFFLINE_DOWNLOAD] = (0, _assign2.default)({}, svipPrivilege[PRIVILEGE_TYPE.OFFLINE_DOWNLOAD], {
            value: ['20次', '25次', '30次', '35次', '40次', '45次', '50次', '55次'],
            has: true
        });
        cloudPrivilege[TYPE.NORMAL][PRIVILEGE_TYPE.OFFLINE_DOWNLOAD] = (0, _assign2.default)({}, svipPrivilege[PRIVILEGE_TYPE.OFFLINE_DOWNLOAD], {
            value: false,
            has: false
        });
    }

    return new _promise2.default(function (resolve) {
        if (hasCloud) {
            resolve({
                cloudPrivilege: cloudPrivilege,
                isCloud: true
            });
        }
        request.webapp({
            protocol: 'weiyunCloudConfig',
            name: 'DiskConfigGet',
            cmd: 207000,
            data: {}
        }).then(function (result) {
            var GtoT = function GtoT(G) {
                var T = G / 1024;
                if (T === parseInt(T)) {
                    return T + 'TB';
                } else {
                    return T.toFixed(2) + 'TB';
                }
            };

            var valueInfo = ((result || {}).key_value_info || {}).items || [];
            var capacityInfo = void 0,
                flowInfo = void 0,
                recycleInfo = void 0;
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = (0, _getIterator3.default)(valueInfo), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var item = _step.value;

                    if (item.key === 'Space_info') {
                        try {
                            capacityInfo = JSON.parse(item.value);
                        } catch (e) {
                            capacityInfo = {};
                        }
                        if (capacityInfo.svip) {
                            var queue = [];
                            var _iteratorNormalCompletion2 = true;
                            var _didIteratorError2 = false;
                            var _iteratorError2 = undefined;

                            try {
                                for (var _iterator2 = (0, _getIterator3.default)(capacityInfo.svip), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                                    var value = _step2.value;

                                    queue.push(GtoT(value));
                                }
                            } catch (err) {
                                _didIteratorError2 = true;
                                _iteratorError2 = err;
                            } finally {
                                try {
                                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                        _iterator2.return();
                                    }
                                } finally {
                                    if (_didIteratorError2) {
                                        throw _iteratorError2;
                                    }
                                }
                            }

                            svipPrivilege[PRIVILEGE_TYPE.CAPACITY] = (0, _assign2.default)({}, svipPrivilege[PRIVILEGE_TYPE.CAPACITY], {
                                value: queue
                            });
                        }
                        if (capacityInfo.vip) {
                            var _queue = [];
                            var _iteratorNormalCompletion3 = true;
                            var _didIteratorError3 = false;
                            var _iteratorError3 = undefined;

                            try {
                                for (var _iterator3 = (0, _getIterator3.default)(capacityInfo.vip), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                                    var _value = _step3.value;

                                    _queue.push(GtoT(_value));
                                }
                            } catch (err) {
                                _didIteratorError3 = true;
                                _iteratorError3 = err;
                            } finally {
                                try {
                                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                                        _iterator3.return();
                                    }
                                } finally {
                                    if (_didIteratorError3) {
                                        throw _iteratorError3;
                                    }
                                }
                            }

                            vipPrivilege[PRIVILEGE_TYPE.CAPACITY] = (0, _assign2.default)({}, svipPrivilege[PRIVILEGE_TYPE.CAPACITY], {
                                value: _queue
                            });
                        }
                        if (capacityInfo.non_vip) {
                            var _queue2 = [];
                            var _iteratorNormalCompletion4 = true;
                            var _didIteratorError4 = false;
                            var _iteratorError4 = undefined;

                            try {
                                for (var _iterator4 = (0, _getIterator3.default)(capacityInfo.svip), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                                    var _value2 = _step4.value;

                                    _value2;
                                    _queue2.push(capacityInfo.non_vip + 'GB');
                                }
                            } catch (err) {
                                _didIteratorError4 = true;
                                _iteratorError4 = err;
                            } finally {
                                try {
                                    if (!_iteratorNormalCompletion4 && _iterator4.return) {
                                        _iterator4.return();
                                    }
                                } finally {
                                    if (_didIteratorError4) {
                                        throw _iteratorError4;
                                    }
                                }
                            }
                        }
                    }

                    if (item.key === 'Recycle_info') {
                        try {
                            recycleInfo = JSON.parse(item.value);
                        } catch (e) {
                            recycleInfo = {};
                        }
                        if (recycleInfo.svip) {
                            var _queue3 = [];
                            var _iteratorNormalCompletion5 = true;
                            var _didIteratorError5 = false;
                            var _iteratorError5 = undefined;

                            try {
                                for (var _iterator5 = (0, _getIterator3.default)(recycleInfo.svip), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                                    var _value3 = _step5.value;

                                    _queue3.push(_value3 + '天');
                                }
                            } catch (err) {
                                _didIteratorError5 = true;
                                _iteratorError5 = err;
                            } finally {
                                try {
                                    if (!_iteratorNormalCompletion5 && _iterator5.return) {
                                        _iterator5.return();
                                    }
                                } finally {
                                    if (_didIteratorError5) {
                                        throw _iteratorError5;
                                    }
                                }
                            }

                            svipPrivilege[PRIVILEGE_TYPE.RECYCLE_RESERVE] = (0, _assign2.default)({}, svipPrivilege[PRIVILEGE_TYPE.RECYCLE_RESERVE], {
                                value: _queue3
                            });
                        }
                        if (recycleInfo.vip) {
                            var _queue4 = [];
                            var _iteratorNormalCompletion6 = true;
                            var _didIteratorError6 = false;
                            var _iteratorError6 = undefined;

                            try {
                                for (var _iterator6 = (0, _getIterator3.default)(recycleInfo.vip), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                                    var _value4 = _step6.value;

                                    _queue4.push(_value4 + '天');
                                }
                            } catch (err) {
                                _didIteratorError6 = true;
                                _iteratorError6 = err;
                            } finally {
                                try {
                                    if (!_iteratorNormalCompletion6 && _iterator6.return) {
                                        _iterator6.return();
                                    }
                                } finally {
                                    if (_didIteratorError6) {
                                        throw _iteratorError6;
                                    }
                                }
                            }

                            vipPrivilege[PRIVILEGE_TYPE.RECYCLE_RESERVE] = (0, _assign2.default)({}, svipPrivilege[PRIVILEGE_TYPE.RECYCLE_RESERVE], {
                                value: _queue4
                            });
                        }
                        if (recycleInfo.non_vip) {
                            var _queue5 = [];
                            var _iteratorNormalCompletion7 = true;
                            var _didIteratorError7 = false;
                            var _iteratorError7 = undefined;

                            try {
                                for (var _iterator7 = (0, _getIterator3.default)(recycleInfo.svip), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                                    var _value5 = _step7.value;

                                    _value5;
                                    _queue5.push(recycleInfo.non_vip + '天');
                                }
                            } catch (err) {
                                _didIteratorError7 = true;
                                _iteratorError7 = err;
                            } finally {
                                try {
                                    if (!_iteratorNormalCompletion7 && _iterator7.return) {
                                        _iterator7.return();
                                    }
                                } finally {
                                    if (_didIteratorError7) {
                                        throw _iteratorError7;
                                    }
                                }
                            }

                            normalPrivilege[PRIVILEGE_TYPE.RECYCLE_RESERVE] = (0, _assign2.default)({}, svipPrivilege[PRIVILEGE_TYPE.RECYCLE_RESERVE], {
                                value: _queue5
                            });
                        }
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }

            hasCloud = true;

            cloudPrivilege.normal.fileCompress.value = '不支持在线解压';
            resolve({
                cloudPrivilege: cloudPrivilege,
                isCloud: true
            });
        }).catch(function (error) {
            resolve({
                error: error,
                cloudPrivilege: cloudPrivilege,
                isCloud: false
            });
        });
    });
};

module.exports.TYPE = TYPE;
module.exports.PRIVILEGE_TYPE = PRIVILEGE_TYPE;
module.exports.privileges = {};
module.exports.privileges[TYPE.SVIP] = svipPrivilege;
module.exports.privileges[TYPE.VIP] = vipPrivilege;
module.exports.privileges[TYPE.NORMAL] = normalPrivilege;
module.exports.loadCloudConfig = loadCloudConfig;

/***/ }),

/***/ "Yp/v":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wyToast = __webpack_require__("cYh5");

var _wyToast2 = _interopRequireDefault(_wyToast);

var _report = __webpack_require__("5bB2");

var _report2 = _interopRequireDefault(_report);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var aid = _report2.default.transAID({
    position: "btdbox",
    function: "btdownload",
    action: "linktext_fixed"
});

exports.default = {
    data: function data() {
        return {
            downloadType: 'torrent',
            magnetUrl: ''
        };
    },
    mounted: function mounted() {
        _report2.default.tdwReport("weiyun-vip_linktext-show", {
            common_ext: {
                position: "btdbox",
                function: "btdownload",
                aid: aid
            }
        });
    },


    computed: {
        vipTips: function vipTips() {
            if (this.$store.getters['userInfo/superVip']) {
                return '微云超级会员 尊享每日多次离线下载';
            } else if (this.$store.getters['userInfo/vip']) {
                return '微云会员尊享每日多次离线下载';
            }
            return '试用机会5次 开通微云超级会员可享40次/天';
        },
        vipIcon: function vipIcon() {
            var isCommonVip = this.$store.getters['userInfo/vip'] && !this.$store.getters['userInfo/superVip'];
            return {
                'icon-vip-s-v2': !isCommonVip,
                'icon-vip-v2': isCommonVip
            };
        }
    },

    methods: {
        switchTab: function switchTab(type) {
            this.downloadType = type;
        },
        close: function close() {
            this.$emit('close');
        },
        next: function next() {
            if (this.magnetUrl) {
                this.$emit('submit', {
                    type: 'magnet',
                    magnetUrl: this.magnetUrl
                });
            }
        },
        uploadTorrent: function uploadTorrent() {
            var _this = this;

            var button = this.initButton();
            button.addEventListener('change', function (e) {
                var file = e.target.files[0];
                if (file.name.split('.').pop() !== 'torrent') {
                    _wyToast2.default.error('请选择种子文件');
                    return;
                }
                _this.$emit('submit', {
                    type: 'torrent',
                    file: file
                });
                button.parentNode.removeChild(button);
            });

            button.click();
        },
        initButton: function initButton() {
            var input = document.createElement('input');
            input.style.position = 'absolute';
            input.style.left = '-999px';
            input.type = 'file';

            document.body.appendChild(input);
            return input;
        },
        goVip: function goVip() {
            _report2.default.tdwReport("weiyun-vip_linktext-click", {
                common_ext: {
                    position: "btdbox",
                    function: "btdownload",
                    aid: aid
                }
            });
            this.$store.dispatch('control/buyVip', aid);
        }
    }
};

/***/ }),

/***/ "ZZ5U":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getIterator2 = __webpack_require__("BO1k");

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function VaildURL(sUrl) {
    return (/^(https?:\/\/)?[\w\-.]+\.(qq|taotao)\.com($|\/|\\)/i.test(sUrl) || /^[\w][\w\/\.\-_%]+$/i.test(sUrl) || /^[\/\\][^\/\\]/i.test(sUrl) ? true : false
    );
}

function HtmlEncode(sStr) {
    sStr = sStr.replace(/>/g, "&gt;");
    sStr = sStr.replace(/</g, "&lt;");
    sStr = sStr.replace(/"/g, "&quot;");
    sStr = sStr.replace(/'/g, "&#39;");
    return sStr;
}

function HtmlUnEncode(sStr) {
    sStr = sStr.replace(/&gt;/g, ">");
    sStr = sStr.replace(/&lt;/g, "<");
    sStr = sStr.replace(/&quot;/g, '"');
    sStr = sStr.replace(/&#39;/g, "'");
    return sStr;
}

function HtmlAttributeEncode(sStr) {
    sStr = sStr.replace(/&/g, "&amp;");
    sStr = sStr.replace(/>/g, "&gt;");
    sStr = sStr.replace(/</g, "&lt;");
    sStr = sStr.replace(/"/g, "&quot;");
    sStr = sStr.replace(/'/g, "&#39;");
    sStr = sStr.replace(/=/g, "&#61;");
    sStr = sStr.replace(/`/g, "&#96;");
    return sStr;
}

function UriComponentEncode(sStr) {
    sStr = encodeURIComponent(sStr);
    sStr = sStr.replace(/~/g, "%7E");
    sStr = sStr.replace(/!/g, "%21");
    sStr = sStr.replace(/\*/g, "%2A");
    sStr = sStr.replace(/\(/g, "%28");
    sStr = sStr.replace(/\)/g, "%29");
    sStr = sStr.replace(/'/g, "%27");
    sStr = sStr.replace(/\?/g, "%3F");
    sStr = sStr.replace(/;/g, "%3B");
    return sStr;
}

String.prototype.escHtmlEp = function () {
    return this.replace(/[&'"<>\/\\\-\x00-\x1f\x80-\xff]/g, function (r) {
        return "&#" + r.charCodeAt(0) + ";";
    });
};

String.prototype.escHtml = function () {
    return this.replace(/[&'"<>\/\\\-\x00-\x09\x0b-\x0c\x1f\x80-\xff]/g, function (r) {
        return "&#" + r.charCodeAt(0) + ";";
    }).replace(/\r\n/g, "<BR>").replace(/\n/g, "<BR>").replace(/\r/g, "<BR>").replace(/ /g, "&nbsp;");
};

String.prototype.escScript = function () {
    return this.replace(/[\\"']/g, function (r) {
        return "\\" + r;
    }).replace(/%/g, "\\x25").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\x01/g, "\\x01");
};

String.prototype.escUrl = function () {
    return escape(this).replace(/\+/g, "%2B");
};

String.prototype.escHrefScript = function () {
    return this.escScript().escMiniUrl().escHtmlEp();
};

String.prototype.escRegexp = function () {
    return this.replace(/[\\\^\$\*\+\?\{\}\.\(\)\[\]]/g, function (a) {
        return "\\" + a;
    });
};

var jumpWhiteList = ['www.weiyun.com', 'share.weiyun.com', 'h5.weiyun.com', 's.weiyun.com'];

function checkHtmlContentClickEvent(e) {
    var nodes = e.composedPath();
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = (0, _getIterator3.default)(nodes), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var n = _step.value;

            if (n.tagName === 'A') {
                if (!jumpWhiteList.includes(n.hostname)) {
                    e.preventDefault();
                    break;
                }
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}

function tryAnchorFilter(htmlContent) {
    return htmlContent.replace(/<a(.*?)href=['"](.*?)['"](.*?)>(.*)<(.*?)\/(.*?)a(.*?)>/ig, function (target) {
        var href = arguments.length <= 2 ? undefined : arguments[2];
        var url = new URL(href, 'https://www.weiyun.com');
        if (jumpWhiteList.includes(url.hostname)) return target;
        var content = arguments.length <= 4 ? undefined : arguments[4];
        return HtmlAttributeEncode(getInnerText(content));
    });
}

function getInnerText(content) {
    return content.replace(/<(.*?)>(.*)<(.*?)\/(.*?)>/ig, function (target) {
        var innerContent = arguments.length <= 2 ? undefined : arguments[2];
        return getInnerText(innerContent);
    });
}

var xss = __webpack_require__("NG4M");

function wyHtmlTagFilter(content) {
    if (typeof content !== 'string') return '';
    var safeContent = xss(content, {
        whiteList: {
            p: ['style', 'class'],
            a: ['style', 'target', 'href', 'title'],
            img: ['style', 'src', 'alt', 'title', 'width', 'height'],
            ol: ['style', 'class'],
            ul: ['style', 'class'],
            li: ['style', 'class'],
            br: [],
            b: ['style', 'class'],
            strong: ['style', 'class'],
            em: ['style', 'class'],
            s: ['style', 'class'],
            u: ['style', 'class'],
            span: ['style', 'class'],
            div: ['style', 'class'],
            input: ['style', 'class', 'type']
        },

        onIgnoreTagAttr: function onIgnoreTagAttr(tag, name, value) {
            if (name.substr(0, 5) === "data-") {
                return name + '="' + xss.escapeAttrValue(value) + '"';
            }
        }
    });
    return safeContent;
}

function checkAnchorNodes(anchorNodes) {
    anchorNodes.forEach(function (n) {
        if (!jumpWhiteList.includes(n.hostname)) {
            n.href = '';
            n.replaceWith(n.innerText);
        }
    });
}

function isProxyWhiteListHostname(url) {
    var hostname = getHostname(url);
    var hostnameRegexps = [/^(.*?)\.qq\.com$/ig, /^qq\.com$/ig, /^(.*?)\.weiyun\.com$/ig];
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = (0, _getIterator3.default)(hostnameRegexps), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var exp = _step2.value;

            if (exp.test(hostname)) return true;
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
            }
        } finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }

    return jumpWhiteList.includes(hostname);
}

function getHostname(url) {
    var a = document.createElement('a');
    a.href = url;
    return a.hostname;
}

module.exports = {
    isProxyWhiteListHostname: isProxyWhiteListHostname,
    tryAnchorFilter: tryAnchorFilter,
    getInnerText: getInnerText,
    checkAnchorNodes: checkAnchorNodes,
    checkHtmlContentClickEvent: checkHtmlContentClickEvent,
    VaildURL: VaildURL,
    HtmlEncode: HtmlEncode,
    HtmlUnEncode: HtmlUnEncode,
    HtmlAttributeEncode: HtmlAttributeEncode,
    UriComponentEncode: UriComponentEncode,
    wyHtmlTagFilter: wyHtmlTagFilter
};

/***/ }),

/***/ "a4C9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',[_c('a',{class:{expand: _vm.expanded, selected: _vm.fileNode.isSelected(), created: _vm.fileNode.isTempcreate(), loading: _vm.loading, disabled: _vm.disabled},style:({'padding-left': _vm.indent+'px', 'display': _vm.noRoot && _vm.step === 0 ? 'none' : ''}),attrs:{"href":"javascript:void(0)"},on:{"click":_vm.toggleExpand}},[(_vm.fileNode.isTempcreate())?_c('span',{staticClass:"ui-text",on:{"click":function($event){$event.stopPropagation();}}},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.tempDirName),expression:"tempDirName"},{name:"focus",rawName:"v-focus"}],attrs:{"type":"text"},domProps:{"value":(_vm.tempDirName)},on:{"keypress":function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }$event.preventDefault();return _vm.createDir($event)},"blur":_vm.createDir,"input":function($event){if($event.target.composing){ return; }_vm.tempDirName=$event.target.value}}})]):_c('span',{staticClass:"ui-text"},[(!_vm.empty)?_c('i'):_vm._e(),_vm._v("\n\t\t\t\t"+_vm._s(_vm.fileNode.getName())+"\n\t\t\t")])]),_vm._v(" "),(_vm.childNodes.length && _vm.expanded)?_c('wy-sub-tree',{attrs:{"fileNodes":_vm.childNodes,"rootExpended":_vm.rootExpended,"noRoot":_vm.noRoot,"step":_vm.step+1}}):_vm._e()],1)}
var staticRenderFns = []


/***/ }),

/***/ "aK2O":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.statSingleTask = undefined;

var _attaReport = __webpack_require__("oAUA");

var statSingleTask = exports.statSingleTask = function statSingleTask(task) {
    if (task.getType() !== 'file') {
        return;
    }

    var spendTime = task.getSpendTime();

    var _task$getBatchInfo = task.getBatchInfo(),
        batch_total = _task$getBatchInfo.batch_total;

    var preUploadInfo = task.getPreUploadInfo();
    var channel_count = task.getChannelCount() || 4;
    var uploaded_data_len = preUploadInfo.uploaded_data_len || 0;
    var size = task.getSize();
    var ret = task.getErrorInfo().ret || 0;
    var msg = task.getErrorInfo().msg || '';
    var data = {
        action: batch_total > 1 ? _attaReport.ActionType.batchUpload : _attaReport.ActionType.upload,
        file_size: size,
        total_time: spendTime,
        total_size: size - uploaded_data_len,
        err_code: ret,
        err_msg: msg,
        channel_count: channel_count
    };
    (0, _attaReport.attaReport)(data);
};

/***/ }),

/***/ "bIjq":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__("Zx67");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("Zrlr");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("wxAW");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("zwoO");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("Pf15");

var _inherits3 = _interopRequireDefault(_inherits2);

var _support = __webpack_require__("Im35");

var _support2 = _interopRequireDefault(_support);

var _BaseTask2 = __webpack_require__("8oD/");

var _BaseTask3 = _interopRequireDefault(_BaseTask2);

var _TaskQueue = __webpack_require__("BKU2");

var _TaskQueue2 = _interopRequireDefault(_TaskQueue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BelongTask = function (_BaseTask) {
    (0, _inherits3.default)(BelongTask, _BaseTask);

    function BelongTask(opts) {
        (0, _classCallCheck3.default)(this, BelongTask);


        opts.type = 'belong';

        var _this = (0, _possibleConstructorReturn3.default)(this, (BelongTask.__proto__ || (0, _getPrototypeOf2.default)(BelongTask)).call(this, opts));

        _this._belong_info = opts.belongInfo || {};
        _this._execute_size = 0;

        _this.createTaskQueue();
        return _this;
    }

    (0, _createClass3.default)(BelongTask, [{
        key: 'getBelongInfo',
        value: function getBelongInfo() {
            return this._belong_info;
        }
    }, {
        key: 'getName',
        value: function getName() {
            return (this._belong_info.name || 'belong') + '_BelongTask';
        }
    }, {
        key: 'hasSubTask',
        value: function hasSubTask() {
            return true;
        }
    }, {
        key: 'createTaskQueue',
        value: function createTaskQueue() {
            var _this2 = this;

            if (this._task_queue) {
                return;
            }

            this._task_queue = new _TaskQueue2.default({
                name: (this._belong_info.name || 'belong') + ' taskQueue'
            });

            this._task_queue.$on('error', function () {
                _this2.handleTaskQueueDone();
            });

            this._task_queue.$on('statechange', function (newState) {
                if (newState === 'idle') {
                    _this2.destroy();
                } else if (newState === 'complete') {
                    _this2.changeState('done');
                } else if (newState === 'pause') {
                    _this2.changeState('pause');
                }
            });
        }
    }, {
        key: 'handleTaskQueueDone',
        value: function handleTaskQueueDone() {
            if (this._task_queue.getExecuteTasks().length) {
                this.setErrorInfo({
                    ret: 2002013,
                    msg: this._task_queue.getExecuteTasks().length + '个文件（夹）上传失败'
                });
                this.changeState('error');
            } else {
                this.changeState('done');
            }
        }
    }, {
        key: 'canPause',
        value: function canPause() {
            return !!_support2.default.sliceUpload();
        }
    }, {
        key: 'calcProcessed',
        value: function calcProcessed() {
            if (!this._task_queue) {
                return 0;
            }

            var processedSize = 0;

            this._task_queue.getAllTasks().forEach(function (task) {
                if (task.getState() !== 'error') {
                    processedSize += task.getProcessed();
                }
            });

            this._processed = processedSize;

            this.$emit('processedchange', this._processed);
        }
    }, {
        key: 'calcSpeed',
        value: function calcSpeed() {
            var speed = 0;
            this._task_queue.getProcessTasks().forEach(function (task) {
                speed += task.getSpeed();
            });
            this._speed = speed;
            this.$emit('speedchange');
        }
    }, {
        key: 'hasSubTask',
        value: function hasSubTask() {
            return true;
        }
    }, {
        key: 'getExecuteSize',
        value: function getExecuteSize() {
            return this._execute_size;
        }
    }, {
        key: 'getDoneSize',
        value: function getDoneSize() {
            var size = 0;
            this.getDoneTasks().forEach(function (task) {
                size += task.getSize();
            });
            return size;
        }
    }, {
        key: 'getProcessed',
        value: function getProcessed() {
            return this._processed;
        }
    }, {
        key: 'getProcessedPercent',
        value: function getProcessedPercent() {
            return this.getProcessed() / this.getSize();
        }
    }, {
        key: 'getSaveTime',
        value: function getSaveTime() {
            if (this.isIgnoreSaveTime()) {
                return 0;
            }
            var saveTime = 0;
            this._task_queue.getDoneTasks().forEach(function (task) {
                saveTime += task.getSaveTime();
            });
            return saveTime;
        }
    }, {
        key: 'addSubTask',
        value: function addSubTask(task) {
            var _this3 = this;

            task.setParent(this);
            this._task_queue.tail(task);

            this._size += task.getSize();

            task.$on('processedchange', function () {
                _this3.calcProcessed();
            });

            task.$on('speedchange', function () {
                _this3.calcSpeed();
            });

            this._execute_size += task.getSize();

            this.$emit('sizeadd', task.getSize());
        }
    }, {
        key: 'getSubTasks',
        value: function getSubTasks() {
            return this._task_queue.getAllTasks();
        }
    }, {
        key: 'getSubExecuteTasks',
        value: function getSubExecuteTasks() {
            if (!this._task_queue) {
                return [];
            } else {
                return this._task_queue.getExecuteTasks();
            }
        }
    }, {
        key: 'getSubDoneTasks',
        value: function getSubDoneTasks() {
            if (!this._task_queue) {
                return [];
            } else {
                return this._task_queue.getDoneTasks();
            }
        }
    }, {
        key: 'getTotal',
        value: function getTotal() {
            if (!this._task_queue) {
                return 0;
            }
            return this._task_queue.getTotal();
        }
    }, {
        key: 'removeSubExecuteTasks',
        value: function removeSubExecuteTasks() {
            var _this4 = this;

            this.getSubExecuteTasks().forEach(function (task) {
                _this4._task_queue.removeTask(task);
            });
        }
    }, {
        key: 'removeSubDoneTasks',
        value: function removeSubDoneTasks() {
            var _this5 = this;

            this.getSubDoneTasks().forEach(function (task) {
                _this5._task_queue.removeTask(task);
            });
        }
    }, {
        key: 'tryRunBySubTask',
        value: function tryRunBySubTask() {
            if (this.getState() === 'pause' || this.getState() === 'error') {
                this._run_by_sub_task = true;
                this.changeState('wait');
            }
        }
    }, {
        key: 'start',
        value: function start(isNotAll) {
            if (!this._run_by_sub_task) {
                var tasks = this._task_queue.getExecuteTasks();
                if (!isNotAll) {
                    tasks.forEach(function (task) {
                        task.changeState('wait', true);
                    });
                } else {
                    tasks.filter(function (task) {
                        return task.getState() !== 'pause' && task.getState() !== 'error';
                    }).forEach(function (task) {
                        task.changeState('wait', true);
                    });
                }
            }
            this.changeState('readying');
        }
    }, {
        key: 'readying',
        value: function readying() {
            var _this6 = this;

            setTimeout(function () {
                _this6.changeState('readydone');
            }, 0);
        }
    }, {
        key: 'process',
        value: function process() {
            this._task_queue.start();
            this._run_by_sub_task = false;
        }
    }, {
        key: 'done',
        value: function done() {
            this._task_queue.getDoneTasks().forEach(function (task) {
                task.setIgnoreCalcProcessed(true);
            });

            this._execute_size = 0;
        }
    }, {
        key: 'pause',
        value: function pause() {
            this._task_queue.pause();
        }
    }, {
        key: 'stop',
        value: function stop() {}
    }, {
        key: 'error',
        value: function error() {
            this._task_queue.getDoneTasks().forEach(function (task) {
                task.setIgnoreCalcProcessed(true);
            });

            this._execute_size = 0;
        }
    }, {
        key: 'destroy',
        value: function destroy() {

            if (this.getState() === 'done') {
                this._task_queue.getDoneTasks().forEach(function (task) {
                    task.destroy();
                });
            } else {
                this._task_queue.getExecuteTasks().forEach(function (task) {
                    task.destroy();
                });
            }

            if (this._task_queue.getTotal() === 0) {
                this._task_queue.changeState('idle');
            }

            this.changeState('stop');
        }
    }]);
    return BelongTask;
}(_BaseTask3.default);

exports.default = BelongTask;

/***/ }),

/***/ "cnlX":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("iInB");
var $Object = __webpack_require__("FeBl").Object;
module.exports = function getOwnPropertyDescriptor(it, key){
  return $Object.getOwnPropertyDescriptor(it, key);
};

/***/ }),

/***/ "dcLn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_wy_dnd_box_vue__ = __webpack_require__("U5jH");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_wy_dnd_box_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_wy_dnd_box_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_wy_dnd_box_vue__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_wy_dnd_box_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5031fb20_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_wy_dnd_box_vue__ = __webpack_require__("5PBU");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("XyMi");
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_wy_dnd_box_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5031fb20_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_wy_dnd_box_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5031fb20_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_wy_dnd_box_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "dfRI":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__("Xxa5");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__("exGp");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _promise = __webpack_require__("//Fk");

var _promise2 = _interopRequireDefault(_promise);

var _getIterator2 = __webpack_require__("BO1k");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _toConsumableArray2 = __webpack_require__("Gu7T");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var generateFileNodes = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(files) {
        var fileNodes, hasMaybeFolder, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, file, isFolder, fileNode;

        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        fileNodes = [];
                        hasMaybeFolder = false;
                        _iteratorNormalCompletion2 = true;
                        _didIteratorError2 = false;
                        _iteratorError2 = undefined;
                        _context.prev = 5;
                        _iterator2 = (0, _getIterator3.default)(files);

                    case 7:
                        if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                            _context.next = 23;
                            break;
                        }

                        file = _step2.value;

                        if (!isSpecialFile(file)) {
                            _context.next = 11;
                            break;
                        }

                        return _context.abrupt('continue', 20);

                    case 11:
                        if (!(_constants2.default.BROWSER_NAME === 'safari' && !file.type)) {
                            _context.next = 18;
                            break;
                        }

                        _context.next = 14;
                        return detectFolder(file);

                    case 14:
                        isFolder = _context.sent;

                        if (!isFolder) {
                            _context.next = 18;
                            break;
                        }

                        hasMaybeFolder = true;
                        return _context.abrupt('break', 23);

                    case 18:
                        fileNode = createUploadFileNode({
                            file_id: UPLOAD_FILE_PREFIX + file.name,
                            filename: file.name,
                            file_size: file.size
                        }, file);


                        fileNodes.push(fileNode);

                    case 20:
                        _iteratorNormalCompletion2 = true;
                        _context.next = 7;
                        break;

                    case 23:
                        _context.next = 29;
                        break;

                    case 25:
                        _context.prev = 25;
                        _context.t0 = _context['catch'](5);
                        _didIteratorError2 = true;
                        _iteratorError2 = _context.t0;

                    case 29:
                        _context.prev = 29;
                        _context.prev = 30;

                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
                            _iterator2.return();
                        }

                    case 32:
                        _context.prev = 32;

                        if (!_didIteratorError2) {
                            _context.next = 35;
                            break;
                        }

                        throw _iteratorError2;

                    case 35:
                        return _context.finish(32);

                    case 36:
                        return _context.finish(29);

                    case 37:
                        return _context.abrupt('return', { fileNodes: fileNodes, hasMaybeFolder: hasMaybeFolder });

                    case 38:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this, [[5, 25, 29, 37], [30,, 32, 36]]);
    }));

    return function generateFileNodes(_x2) {
        return _ref.apply(this, arguments);
    };
}();

var handleDraggedFolders = function () {
    var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(dirs, files) {
        var dirNodes, dirProcessPromises, _ref3, fileNodes, hasMaybeFolder;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        dirNodes = [];
                        dirProcessPromises = dirs.map(function (dir) {
                            return new _promise2.default(function (resolve, reject) {
                                var rootNode = new _UploadFileNode2.default({
                                    dir_name: dir.name,
                                    dir_key: UPLOAD_DIR_PREFIX,
                                    relative_path: dir.relativePath,
                                    tempcreate: true
                                });

                                walkFileSystem(rootNode, dir, function (data) {
                                    rootNode.setTotalSize(data.file_total_size);
                                    dirNodes.push(rootNode);
                                    resolve();
                                }, reject);
                            });
                        });
                        _context2.prev = 2;
                        _context2.next = 5;
                        return _promise2.default.all(dirProcessPromises);

                    case 5:
                        if (!files.length) {
                            _context2.next = 14;
                            break;
                        }

                        _context2.next = 8;
                        return generateFileNodes([].concat((0, _toConsumableArray3.default)(files)));

                    case 8:
                        _ref3 = _context2.sent;
                        fileNodes = _ref3.fileNodes;
                        hasMaybeFolder = _ref3.hasMaybeFolder;

                        if (!hasMaybeFolder) {
                            _context2.next = 13;
                            break;
                        }

                        throw new Error('您的浏览器暂时不支持文件夹上传');

                    case 13:
                        return _context2.abrupt('return', { dirNodes: dirNodes, fileNodes: fileNodes });

                    case 14:
                        return _context2.abrupt('return', { dirNodes: dirNodes, fileNodes: [] });

                    case 17:
                        _context2.prev = 17;
                        _context2.t0 = _context2['catch'](2);
                        throw _context2.t0;

                    case 20:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, this, [[2, 17]]);
    }));

    return function handleDraggedFolders(_x3, _x4) {
        return _ref2.apply(this, arguments);
    };
}();

var _vue = __webpack_require__("7+uW");

var _vue2 = _interopRequireDefault(_vue);

var _support = __webpack_require__("Im35");

var _support2 = _interopRequireDefault(_support);

var _constants = __webpack_require__("4Uv1");

var _constants2 = _interopRequireDefault(_constants);

var _config = __webpack_require__("QIop");

var _config2 = _interopRequireDefault(_config);

var _UploadFileNode = __webpack_require__("14s7");

var _UploadFileNode2 = _interopRequireDefault(_UploadFileNode);

var _wyDndBox = __webpack_require__("dcLn");

var _wyDndBox2 = _interopRequireDefault(_wyDndBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UPLOAD_FILE_PREFIX = '__upload_file__';
var UPLOAD_DIR_PREFIX = '__upload_dir__';
var HIDDEN_POSITION_LEFT = '-999px';
var SPECIAL_FILE_NAMES = ['.', '..'];

var WyDndBoxCtor = _vue2.default.extend(_wyDndBox2.default);

function createHiddenInput(type) {
    var input = document.createElement('input');
    input.style.position = 'absolute';
    input.style.left = HIDDEN_POSITION_LEFT;
    input.type = 'file';

    if (type === 'folder') {
        input.webkitdirectory = true;
        input.directory = true;
    } else {
        input.multiple = 'multiple';
    }

    document.body.appendChild(input);
    return input;
}

function isSpecialFile(file) {
    return !file.name && !file.size || SPECIAL_FILE_NAMES.includes(file.name);
}

function cleanupElement(element) {
    if (element && element.parentNode) {
        element.parentNode.removeChild(element);
    }
}

function createUploadFileNode(options) {
    var rawFile = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

    var fileNode = new _UploadFileNode2.default(options);
    if (rawFile) {
        fileNode.setRawFile(rawFile);
    }
    return fileNode;
}

function handleSliceUpload() {
    var button = createHiddenInput('file');

    button.addEventListener('change', function (e) {
        var selectedFiles = [].concat((0, _toConsumableArray3.default)(e.target.files));

        _config2.default.beforeSelect([], selectedFiles);

        var fileNodes = selectedFiles.map(function (file) {
            return createUploadFileNode({
                file_id: UPLOAD_FILE_PREFIX + file.name,
                filename: file.name,
                file_size: file.size,
                tempcreate: true
            }, file);
        });

        _config2.default.afterSelect([], fileNodes);
        cleanupElement(button);
    });

    button.click();
}

function handleFormUpload() {
    var form = document.createElement('form');
    var input = document.getElementById(_config2.default.formInputCt).getElementsByTagName('input')[0];

    _config2.default.beforeSelect([], [input]);

    var fileName = input.value.split(/\\|\//).pop() || '';
    form.appendChild(input);

    var fileNode = new _UploadFileNode2.default({
        file_id: UPLOAD_FILE_PREFIX + fileName,
        filename: fileName,
        file_size: 0,
        tempcreate: true
    });

    fileNode.setRawForm(form);
    _config2.default.afterSelect([], [fileNode]);
}

function selectFile() {
    if (_support2.default.sliceUpload()) {
        handleSliceUpload();
    } else {
        handleFormUpload();
    }
}

function findNodeByName(dirName, parentNode) {
    return parentNode.getKidNodes().find(function (kid) {
        return kid.getName() === dirName;
    });
}

function buildTreeNode(paths, file, rootNode) {
    if (!rootNode) {
        rootNode = new _UploadFileNode2.default({
            dir_key: UPLOAD_DIR_PREFIX,
            dir_name: paths[0],
            tempcreate: true
        });
    }

    var parentNode = rootNode;

    for (var i = 1; i < paths.length; i++) {
        var dirNode = findNodeByName(paths[i], parentNode);

        if (!dirNode) {
            dirNode = new _UploadFileNode2.default({
                dir_key: UPLOAD_DIR_PREFIX + paths[i],
                dir_name: paths[i],
                tempcreate: true,
                is_sub_file: true
            });
            parentNode.addNode(dirNode);
        }

        parentNode = dirNode;
    }

    var fileNode = createUploadFileNode({
        file_id: UPLOAD_FILE_PREFIX + file.name,
        filename: file.name,
        file_size: file.size,
        tempcreate: true,
        is_sub_file: true
    }, file);

    parentNode.addNode(fileNode);

    return rootNode;
}

function analysisSelectedFolder(files) {
    var maxLevel = 0;
    var totalSize = 0;
    var rootNode = null;

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = (0, _getIterator3.default)(files), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var file = _step.value;

            var paths = (file.relativePath || (file.relativePath = file.webkitRelativePath)).split('/');

            if (isSpecialFile(file)) {
                continue;
            }

            paths.pop();
            rootNode = buildTreeNode(paths, file, rootNode);
            maxLevel = Math.max(maxLevel, paths.length);
            totalSize += file.size;
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    if (rootNode) {
        rootNode.setTotalSize(totalSize);
        rootNode.setMaxLevel(maxLevel);
    }

    return rootNode ? [rootNode] : [];
}

function selectFolder() {
    var button = createHiddenInput('folder');

    button.addEventListener('change', function (e) {
        var files = [].concat((0, _toConsumableArray3.default)(e.target.files));

        _config2.default.beforeSelect(files, []);

        var fileNodes = analysisSelectedFolder(files);

        _config2.default.afterSelect(fileNodes, []);

        cleanupElement(button);
    });

    button.click();
    console.log('selectFolder start');
}

function detectFolder(file) {
    return new _promise2.default(function (resolve) {
        var reader = new FileReader();

        reader.onerror = function () {
            return resolve(true);
        };
        reader.onload = function () {
            return resolve(false);
        };

        reader.readAsDataURL(file.slice(0, 8));
    });
}

function getFileSystemEntry(item) {
    try {
        return item.webkitGetAsEntry && item.webkitGetAsEntry() || item.getAsEntry() || null;
    } catch (e) {
        return null;
    }
}

function categorizeDraggedItems(dataTransfer) {
    var rawFiles = [].concat((0, _toConsumableArray3.default)(dataTransfer.files));
    var items = dataTransfer.items ? [].concat((0, _toConsumableArray3.default)(dataTransfer.items)) : [];
    var files = [];
    var dirs = [];

    for (var i = 0; i < rawFiles.length; i++) {
        var entry = getFileSystemEntry(items[i]);

        if (entry && entry.isDirectory) {
            dirs.push(entry);
        } else {
            files.push(rawFiles[i]);
        }
    }

    return { files: files, dirs: dirs };
}

function dndInit() {
    var _this = this;

    if (!_config2.default.dndEnable || !_support2.default.dndUpload()) {
        return;
    }

    var instance = new WyDndBoxCtor({
        el: document.createElement('div')
    });

    instance.$on('dndUpload', function () {
        var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(dataTransfer) {
            var _categorizeDraggedIte, files, dirs, _ref5, dirNodes, fileNodes, _ref6, _fileNodes, hasMaybeFolder;

            return _regenerator2.default.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            _categorizeDraggedIte = categorizeDraggedItems(dataTransfer), files = _categorizeDraggedIte.files, dirs = _categorizeDraggedIte.dirs;


                            _config2.default.beforeDnd(dirs, files);

                            _context3.prev = 2;

                            if (!dirs.length) {
                                _context3.next = 12;
                                break;
                            }

                            _context3.next = 6;
                            return handleDraggedFolders(dirs, files);

                        case 6:
                            _ref5 = _context3.sent;
                            dirNodes = _ref5.dirNodes;
                            fileNodes = _ref5.fileNodes;

                            _config2.default.afterDnd(dirNodes, fileNodes);
                            _context3.next = 22;
                            break;

                        case 12:
                            if (!files.length) {
                                _context3.next = 22;
                                break;
                            }

                            _context3.next = 15;
                            return generateFileNodes(files);

                        case 15:
                            _ref6 = _context3.sent;
                            _fileNodes = _ref6.fileNodes;
                            hasMaybeFolder = _ref6.hasMaybeFolder;

                            if (!hasMaybeFolder) {
                                _context3.next = 21;
                                break;
                            }

                            _config2.default.handleDndFail(new Error('您的浏览器暂时不支持文件夹上传'));
                            return _context3.abrupt('return');

                        case 21:

                            _config2.default.afterDnd([], _fileNodes);

                        case 22:
                            _context3.next = 27;
                            break;

                        case 24:
                            _context3.prev = 24;
                            _context3.t0 = _context3['catch'](2);

                            _config2.default.handleDndFail(_context3.t0);

                        case 27:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, _this, [[2, 24]]);
        }));

        return function (_x5) {
            return _ref4.apply(this, arguments);
        };
    }());

    var container = typeof _config2.default.dndCt === 'string' ? document.getElementById(_config2.default.dndCt) : _config2.default.dndCt;

    if (container && container.appendChild) {
        container.appendChild(instance.$el);
    } else {
        document.body.appendChild(instance.$el);
    }
}

function walkFileSystem(parentNode, directory, callback, errorCallback) {
    if (!callback.pending) {
        callback.pending = 0;
        callback.files = [];
        callback.rootNode = parentNode;
        callback.dir_total_num = 0;
        callback.max_dir_file_num = 0;
        callback.file_total_num = 0;
        callback.file_total_size = 0;
    }

    callback.pending++;

    var reader = directory.createReader();
    var relativePath = directory.fullPath.replace(/^\//, "").replace(/(.+?)\/?$/, "$1/");
    var entries = [];

    var readEntries = function readEntries() {
        reader.readEntries(function (results) {
            if (results.length) {
                entries.push.apply(entries, (0, _toConsumableArray3.default)(results));
                readEntries();
                return;
            }

            callback.pending--;
            callback.max_dir_file_num = Math.max(callback.max_dir_file_num, entries.length);
            entries.sort();

            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = (0, _getIterator3.default)(entries), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var entry = _step3.value;

                    if (entry.isFile) {
                        processFileEntry(entry, relativePath, parentNode, callback, errorCallback);
                    } else {
                        processDirEntry(entry, relativePath, parentNode, callback, errorCallback);
                    }
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }

            checkCompletion(callback);
        }, errorCallback);
    };

    readEntries();
}

function processFileEntry(entry, relativePath, parentNode, callback, errorCallback) {
    callback.pending++;

    entry.file(function (file) {
        if (isSpecialFile(file)) {
            callback.pending--;
            checkCompletion(callback);
            return;
        }

        file.relativePath = relativePath + file.name;

        var fileNode = createUploadFileNode({
            filename: file.name,
            file_id: UPLOAD_FILE_PREFIX + file.relativePath,
            file_size: file.size,
            relative_path: file.relativePath,
            tempcreate: true,
            is_sub_file: true
        }, file);

        parentNode.addNode(fileNode);
        callback.file_total_size += file.size;
        callback.file_total_num++;
        callback.files.push(file);

        callback.pending--;
        checkCompletion(callback);
    }, errorCallback);
}

function processDirEntry(entry, relativePath, parentNode, callback, errorCallback) {
    entry.relativePath = relativePath + entry.name;

    var dirNode = new _UploadFileNode2.default({
        dir_name: entry.name,
        dir_key: UPLOAD_DIR_PREFIX + entry.relativePath,
        relative_path: entry.relativePath,
        tempcreate: true,
        is_sub_file: true
    });

    parentNode.addNode(dirNode);
    callback.dir_total_num++;

    walkFileSystem(dirNode, entry, callback, errorCallback);
}

function checkCompletion(callback) {
    if (callback.pending === 0) {
        var result = {
            rootNode: callback.rootNode,
            files: callback.files,
            dir_total_num: callback.dir_total_num,
            max_dir_file_num: callback.max_dir_file_num,
            file_total_num: callback.file_total_num,
            file_total_size: callback.file_total_size
        };

        delete callback.dir_total_num;
        delete callback.max_dir_file_num;
        delete callback.file_total_num;
        delete callback.file_total_size;
        delete callback.files;
        delete callback.rootNode;

        callback(result);
    }
}

exports.default = {
    selectFile: selectFile,
    selectFolder: selectFolder,
    dndInit: dndInit
};

/***/ }),

/***/ "eQpE":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _taskItem = __webpack_require__("P7gN");

var _taskItem2 = _interopRequireDefault(_taskItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {

    components: {
        taskItem: _taskItem2.default
    },

    props: {
        taskList: Array
    }
};

/***/ }),

/***/ "f6Tq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{staticClass:"dirbox-sub-tree"},_vm._l((_vm.fileNodes),function(node,index){return _c('wy-tree-item',{key:node.getId(),attrs:{"fileNode":node,"choose":index === 0 && _vm.noRoot && _vm.step === 1,"rootExpended":_vm.rootExpended,"noRoot":_vm.noRoot,"step":_vm.step}})}))}
var staticRenderFns = []


/***/ }),

/***/ "fQe1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {};

/***/ }),

/***/ "fxan":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {

    computed: {
        curMutiTask: function curMutiTask() {
            return this.$store.state.manager.curMutiTask;
        },
        taskItems: function taskItems() {
            var items = [];
            items.push(this.curMutiTask);
            if (this.curMutiTask.getParent() && this.$store.state.manager.taskRootNode.getTask(this.curMutiTask.getParent().getId())) {
                items.unshift(this.curMutiTask.getParent());
            }
            return items;
        }
    },

    methods: {
        goBack: function goBack() {
            this.$store.commit('manager/exitMutiTask');
        },
        goTask: function goTask(task) {
            if (task.getType() === 'belong' && task.getBelongInfo().name === 'safebox' && this.taskItems.length === 2) {
                this.$store.commit('manager/openMutiTask', task);
            }
        }
    }
};

/***/ }),

/***/ "fy5w":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("GZIF");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("rjj0").default
var update = add("727b4321", content, true, {});

/***/ }),

/***/ "fzhe":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = __webpack_require__("mvHQ");

var _stringify2 = _interopRequireDefault(_stringify);

var _getPrototypeOf = __webpack_require__("Zx67");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("Zrlr");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("wxAW");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("zwoO");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = __webpack_require__("yEsh");

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = __webpack_require__("Pf15");

var _inherits3 = _interopRequireDefault(_inherits2);

var _account = __webpack_require__("TH1B");

var _account2 = _interopRequireDefault(_account);

var _support = __webpack_require__("Im35");

var _support2 = _interopRequireDefault(_support);

var _report = __webpack_require__("Vyex");

var _report2 = _interopRequireDefault(_report);

var _format = __webpack_require__("Lfum");

var _format2 = _interopRequireDefault(_format);

var _BaseTask2 = __webpack_require__("8oD/");

var _BaseTask3 = _interopRequireDefault(_BaseTask2);

var _encryptWorker = __webpack_require__("svmM");

var _encryptWorker2 = _interopRequireDefault(_encryptWorker);

var _attaStat = __webpack_require__("aK2O");

var _encryptWorkerWa = __webpack_require__("CwKg");

var _encryptWorkerWa2 = _interopRequireDefault(_encryptWorkerWa);

var _config = __webpack_require__("QIop");

var _config2 = _interopRequireDefault(_config);

var _stat2 = __webpack_require__("WZO8");

var _stat3 = _interopRequireDefault(_stat2);

var _speedDetect = __webpack_require__("ugtg");

var _speedDetect2 = _interopRequireDefault(_speedDetect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GB1 = Math.pow(2, 30);
var MB1 = Math.pow(2, 20);

var FileTask = function (_BaseTask) {
    (0, _inherits3.default)(FileTask, _BaseTask);

    function FileTask(opts) {
        (0, _classCallCheck3.default)(this, FileTask);


        opts.type = 'file';

        var _this = (0, _possibleConstructorReturn3.default)(this, (FileTask.__proto__ || (0, _getPrototypeOf2.default)(FileTask)).call(this, opts));

        _this._file_node = opts.fileNode;
        _this._size = opts.fileNode.getSize() || 0;
        _this._dest_dir = opts.destDir;
        _this._upload_mode = _support2.default.sliceUpload() ? 'slice' : 'form';
        _this._sha = null;
        _this._md5 = null;
        _this._hash = null;

        _this._scan_processed = 0;
        _this._scan_done = false;

        _this._is_speed_up = false;
        _this._is_temp_speed_up = false;

        _this._pre_upload_info = {};

        _this._spend_time = 0;
        _this._start_timestamp = 0;

        _this._error_retry = 0;

        _this._has_pre_uploaded = false;

        _this._has_do_pause = false;

        _this._has_do_auto_retry = false;
        _this._upload_start_time = 0;
        _this._upload_end_time = 0;

        _this._start_scan_time = 0;
        _this._scan_speed = 0;
        _this._scan_spend_time = 0;
        _this._start_scan_timestamp = 0;

        _this._file_node.setPdirKey(opts.destDir.getId());
        _this._file_node.setPPdirKey(opts.destDir.getPdirKey());

        _this.uploader = new _config2.default.uploadModeCls(_this);

        _this.__LOG__ = [];
        _this._channel_count = 0;return _this;
    }

    (0, _createClass3.default)(FileTask, [{
        key: 'getFileNode',
        value: function getFileNode() {
            return this._file_node;
        }
    }, {
        key: 'getDestDirNode',
        value: function getDestDirNode() {
            return this._dest_dir;
        }
    }, {
        key: 'getName',
        value: function getName() {
            return this._file_node.getName() + '_FileTask';
        }
    }, {
        key: 'getProcessor',
        value: function getProcessor() {
            var cate = this._file_node.getCategory();
            var processor = _config2.default.processors[cate];

            if (!processor) {
                throw new Error('there is not config processor');
            }

            return processor;
        }
    }, {
        key: 'setProcessed',
        value: function setProcessed(processed) {
            this._processed = processed;
            this.$emit('processedchange', this._processed);
        }
    }, {
        key: 'getScanProcessed',
        value: function getScanProcessed() {
            return this._scan_processed;
        }
    }, {
        key: 'getScanProcessedPercent',
        value: function getScanProcessedPercent() {
            return this.getScanProcessed() / this.getSize();
        }
    }, {
        key: 'getUploadMode',
        value: function getUploadMode() {
            return this._upload_mode;
        }
    }, {
        key: 'getPreUploadInfo',
        value: function getPreUploadInfo() {
            return this._pre_upload_info;
        }
    }, {
        key: 'isFileExist',
        value: function isFileExist() {
            return this._pre_upload_info && this._pre_upload_info.file_exist;
        }
    }, {
        key: 'hasPreUploaded',
        value: function hasPreUploaded() {
            return this._has_pre_uploaded;
        }
    }, {
        key: 'isSpeedUp',
        value: function isSpeedUp() {
            return this._is_speed_up;
        }
    }, {
        key: 'setSpeedUp',
        value: function setSpeedUp(speedUp) {
            this._is_speed_up = speedUp;
        }
    }, {
        key: 'setChannelCount',
        value: function setChannelCount(count) {
            this._channel_count = count;
        }
    }, {
        key: 'getChannelCount',
        value: function getChannelCount() {
            return this._channel_count;
        }
    }, {
        key: 'isFirstUploadMode',
        value: function isFirstUploadMode() {
            var isOpenId = _account2.default.getType().indexOf('openid') > -1;
            return this.getSize() <= _config2.default.fragmentSize && !isOpenId;
        }
    }, {
        key: 'setErrorInfo',
        value: function setErrorInfo(error) {
            (0, _get3.default)(FileTask.prototype.__proto__ || (0, _getPrototypeOf2.default)(FileTask.prototype), 'setErrorInfo', this).call(this, error);
            this._file_node.setErrorInfo(this._error_info);
        }
    }, {
        key: 'setHasDoAuthTry',
        value: function setHasDoAuthTry(hasDo) {
            this._has_do_auto_retry = hasDo;
        }
    }, {
        key: 'canPause',
        value: function canPause() {
            return this._upload_mode === 'slice';
        }
    }, {
        key: 'calcSpendTime',
        value: function calcSpendTime() {
            var now = +new Date();
            this._spend_time = this._spend_time + (now - this._start_timestamp);
            this._start_timestamp = now;
        }
    }, {
        key: 'getSpendTime',
        value: function getSpendTime() {
            return this._spend_time;
        }
    }, {
        key: 'calcScanSpendTime',
        value: function calcScanSpendTime() {
            var now = +new Date();
            this._scan_spend_time = this._scan_spend_time + (now - this._start_scan_timestamp);
            this._start_scan_timestamp = now;
        }
    }, {
        key: 'getScanSpendTime',
        value: function getScanSpendTime() {
            return this._scan_spend_time;
        }
    }, {
        key: 'getSaveTime',
        value: function getSaveTime() {
            if (!this._pre_upload_info.speedlimit && !_config2.default.speedLimit) {
                return;
            }

            var oriSpendTime = Math.floor(this.getSize() / (this._pre_upload_info.speedlimit || _config2.default.speedLimit));
            var curSpendTime = Math.floor(this._spend_time / 1000);

            return Math.max(oriSpendTime - curSpendTime, 0);
        }
    }, {
        key: 'beforePreUpload',
        value: function beforePreUpload() {

            var req = this.getProcessor().beforePreUpload && this.getProcessor().beforePreUpload(this) || { reqData: {} };
            var blob = '';

            if (this.isFirstUploadMode()) {
                blob = this._file_node.getRawFile();
            }

            if (this._is_temp_speed_up) {
                req.reqData.add_channel = true;
            }

            req.reqData.channel_count = 4;

            req.reqData.check_sha = this._checkSha;
            req.reqData.check_data = this._checkData;
            req.reqData.block_size = _config2.default.fragmentSize;

            if (blob) {
                return {
                    req: req,
                    blob: blob
                };
            } else {
                req.reqData.block_info_list = this._hash;
                return {
                    req: req
                };
            }
        }
    }, {
        key: 'getSha',
        value: function getSha() {
            return this._sha;
        }
    }, {
        key: 'getMd5',
        value: function getMd5() {
            return this._md5;
        }
    }, {
        key: 'start',
        value: function start() {
            var _this2 = this;

            this._error_retry = 0;
            setTimeout(function () {
                if (_this2.getState() === 'wait') {
                    _this2.changeState('readying');
                }
            }, 0);
        }
    }, {
        key: 'readying',
        value: function readying() {
            var _this3 = this;

            if (this._upload_mode === 'slice') {
                if (!this._scan_done) {
                    if (this.getSize() === 0) {
                        this._sha = _config2.default.emptyFileSHA;
                        this._scan_done = true;
                        setTimeout(function () {
                            _this3.changeState('readydone');
                        }, 0);
                    } else {
                        var error = this.getProcessor().verify(this._file_node, this);
                        if (error) {
                            this.setErrorInfo(error);
                            setTimeout(function () {
                                _this3.changeState('error');
                            }, 0);
                        } else {
                            var goReadying = function goReadying() {
                                if (_this3.isFirstUploadMode()) {
                                    setTimeout(function () {
                                        _this3.changeState('readydone');
                                    }, 0);
                                    return;
                                }
                                _this3._start_scan_time = +new Date();
                                _this3._start_scan_timestamp = +new Date();
                                if (!_this3._worker) {
                                    _this3.initEncryptWorker();
                                }
                                _this3._worker.postMessage({
                                    cmd: 'start',
                                    data: {
                                        file: _this3._file_node.getRawFile()
                                    }
                                });
                            };
                            if (_config2.default.extInfoEnable && (this._file_node.isImage() || this._file_node.isVideo())) {
                                this._file_node.extractExtInfo(function () {
                                    goReadying();
                                });
                            } else {
                                goReadying();
                            }
                        }
                    }
                } else {
                    setTimeout(function () {
                        _this3.changeState('readydone');
                    }, 0);
                }
            } else {
                setTimeout(function () {
                    _this3.changeState('readydone');
                }, 0);
            }
        }
    }, {
        key: 'initEncryptWorker',
        value: function initEncryptWorker() {
            var _this4 = this;

            if (_support2.default.blobWorker()) {
                this.log('initEncryptWorker: blobWorker');
                var blob = void 0;
                if (_support2.default.webassembly()) {
                    blob = new Blob(['(', _encryptWorkerWa2.default.start.toString(), ')();']);
                    console.log('use webassembly');
                } else {
                    blob = new Blob(['(', _encryptWorker2.default.start.toString(), ')();']);
                }
                var objUrl = window.URL.createObjectURL(blob);
                var worker = new Worker(objUrl);

                worker.onmessage = function (event) {
                    var data = event.data;
                    if (_this4.getState() === 'stop') {
                        _this4._worker.terminate();
                        _this4._worker = null;
                        window.URL.revokeObjectURL(objUrl);
                        return;
                    }
                    if (data.cmd === 'encryptprocess') {
                        _this4._scan_processed = data.data.processed;
                    } else if (data.cmd === 'encryptdone') {
                        _this4._scan_done = true;
                        _this4._sha = data.data.sha;
                        _this4._md5 = data.data.md5;
                        _this4._hash = data.data.hash;
                        _this4._checkSha = data.data.checkSha;
                        _this4._checkData = data.data.checkData;
                        _this4._worker.terminate();
                        _this4._worker = null;
                        window.URL.revokeObjectURL(objUrl);
                        if (_this4.getState() !== 'pause') {
                            _this4.changeState('readydone');
                        }
                        if (_this4._start_scan_time && !_this4._has_do_pause) {
                            _this4._scan_speed = _this4.getSize() / (+new Date() - _this4._start_scan_time);
                        }
                        _this4.calcScanSpendTime();
                    } else if (data.cmd === 'encrypterror') {
                        _this4.log(data.error.msg);
                        _this4.setErrorInfo(data.error);
                        _this4.changeState('error');
                        _this4.calcScanSpendTime();
                    }
                };

                this._worker = worker;
            } else {
                this.log('initEncryptWorker: not worker');
                this._worker = _encryptWorker2.default.start();
                this._worker.imitateMessage(function (event) {
                    var data = event;

                    if (_this4.getState() === 'stop') {
                        _this4._worker.terminate();
                        _this4._worker = null;
                        return;
                    }

                    if (data.cmd === 'encryptprocess') {
                        _this4._scan_processed = data.data.processed;
                    } else if (data.cmd === 'encryptdone') {
                        _this4._scan_done = true;
                        _this4._sha = data.data.sha;
                        _this4._md5 = data.data.md5;
                        _this4._hash = data.data.hash;
                        _this4._checkSha = data.data.checkSha;
                        _this4._checkData = data.data.checkData;
                        _this4._worker.terminate();
                        _this4._worker = null;
                        if (_this4.getState() !== 'pause') {
                            _this4.changeState('readydone');
                        }
                        _this4.calcScanSpendTime();
                    } else if (data.cmd === 'encrypterror') {
                        _this4.log(data.error.msg);
                        _this4.setErrorInfo(data.error);
                        _this4.changeState('error');
                        _this4.calcScanSpendTime();
                    }
                });
            }
        }
    }, {
        key: 'process',
        value: function process() {
            var _this5 = this;

            this._upload_start_time = +new Date();
            this._start_timestamp = +new Date();
            this.log('upload state: process');
            if (this._upload_mode === 'slice') {
                if (this._pre_upload_info.file_exist) {
                    this.setProcessed(this.getSize());
                    setTimeout(function () {
                        _this5.changeState('done');
                    }, 0);
                    return;
                }

                if (this.getProcessor().doUpload) {
                    this.getProcessor().doUpload(this);
                } else {
                    this.uploader.upload();
                }
            } else {
                if (this.getProcessor().doUpload) {
                    this.getProcessor().doUpload(this);
                } else {
                    this.uploader.upload();
                }
            }

            if (this._has_pre_uploaded && this.getProcessed()) {
                this.startCalcSpeed();
            }
        }
    }, {
        key: 'handlePreUploadDone',
        value: function handlePreUploadDone(result) {

            this._pre_upload_info = result;
            this._has_pre_uploaded = true;

            if (result.uploaded_data_len) {
                this.setProcessed(result.uploaded_data_len);
            }

            this.getProcessor().handlePreUploadDone && this.getProcessor().handlePreUploadDone(this, result);

            this.startCalcSpeed();

            this.log('preUpload: file_exist:' + result.file_exist);
        }
    }, {
        key: 'handleUploadPieceDone',
        value: function handleUploadPieceDone(result) {
            this.getProcessor().handleUploadPieceDone && this.getProcessor().handleUploadPieceDone(this, result);
        }
    }, {
        key: 'done',
        value: function done() {
            this.setProcessed(this.getSize());
            this._upload_end_time = +new Date();

            if (!this._speed && !this.isFileExist() && !this._has_do_pause && this.getSize() < MB1) {
                this._speed = this.getSize() / ((this._upload_end_time - this._upload_start_time) / 1000);
                this.$emit('speedchange');
            }

            this.calcSpendTime();
            this.stat();
            (0, _attaStat.statSingleTask)(this);
            this.stopCalcSpeed();

            this.getProcessor().handleUploadDone(this);

            this.log('upload state:done');

            if (this._has_do_auto_retry) {
                _report2.default.hot('upload_has_do_auto_retry');
            }
        }
    }, {
        key: 'pause',
        value: function pause() {
            this.log('upload state:pause');
            if (this._worker) {
                this._worker.postMessage({
                    cmd: 'pause'
                });
                this.calcScanSpendTime();
            }
            this.calcSpendTime();
            this.stopCalcSpeed();
            this._has_do_pause = true;
        }
    }, {
        key: 'stop',
        value: function stop() {
            this.log('upload state:stop');
            this.calcSpendTime();
            this.stopCalcSpeed();
            this.destroyForm();
        }
    }, {
        key: 'error',
        value: function error() {
            this.log('upload state:error');
            this.calcSpendTime();
            this.stat();
            this.stopCalcSpeed();
            this._file_node && this._file_node.setErrorInfo(this.getErrorInfo());
            this.getProcessor().handleUploadError(this);
            this._processed = 0;
        }
    }, {
        key: 'destroy',
        value: function destroy() {

            this.changeState('stop');

            this.destroyForm();
            this._sha_obj = null;
            this._file_node = null;
            this._dest_dir = null;
            this._sha = null;
            this._pre_upload_info = null;
            this.uploader = null;

            this.log('upload state:destroy');
        }
    }, {
        key: 'destroyForm',
        value: function destroyForm() {
            if (this._upload_mode === 'form') {
                var form = this._file_node.getRawForm();
                if (form) {
                    form.parentNode.removeChild(form);
                    this._file_node.setRawForm(null);
                }
            }
        }
    }, {
        key: 'startCalcSpeed',
        value: function startCalcSpeed() {
            var _this6 = this;

            if (this._calc_speeding) {
                return;
            }
            if (this._calc_speed_timer) {
                clearInterval(this._calc_speed_timer);
            }
            var lastProcessed = this.getProcessed();
            var M50 = 1024 * 1024 * 50;


            var pList = [];

            this._calc_speed_timer = setInterval(function () {

                var curProcessed = _this6.getProcessed();

                var secProcessed = curProcessed - lastProcessed;

                if (secProcessed < 0) {
                    return;
                }

                lastProcessed = curProcessed;

                pList.push(secProcessed);

                if (pList.length > 10) {
                    pList.shift();
                }

                var total = 0;
                pList.forEach(function (sec) {
                    total = total + sec;
                });

                var speed = total / (3 * pList.length);
                if (speed < 1 || speed > M50) {
                    return;
                }

                _this6._speed = speed;

                _this6.$emit('speedchange');
            }, 3000);

            this._calc_speeding = true;
        }
    }, {
        key: 'stopCalcSpeed',
        value: function stopCalcSpeed() {
            if (this._calc_speed_timer) {
                clearInterval(this._calc_speed_timer);
                this._calc_speed_timer = null;
            }
            this._calc_speeding = false;
            this._speed = 0;
        }
    }, {
        key: 'stat',
        value: function stat() {
            var _this7 = this;

            var error = this.getErrorInfo();
            var code = error.ret || 0;
            if (this._upload_mode === 'slice') {
                _report2.default.md({
                    id: 180000723,
                    code: code,
                    type: 0,
                    delay: 100
                });

                _report2.default.md({
                    id: 180000730,
                    code: this.isFileExist() ? 1 : 0,
                    type: 0,
                    delay: 100
                });

                if (this._scan_speed && this.getSize() > 50 * MB1) {
                    _report2.default.md({
                        id: 183000188,
                        code: navigator.hardwareConcurrency || 0,
                        type: 0,
                        delay: this._scan_speed });
                }
            } else {
                _report2.default.md({
                    id: 180000729,
                    code: code,
                    type: 0,
                    delay: 100
                });
            }

            if (code === 2002021) {
                _speedDetect2.default.detectNetwork().then(function () {
                    _report2.default.log({
                        key: 'xplatform.upload.' + code,
                        log: ['\n[err_info]\n', '\nerror.msg:' + error.msg, '\nerror.ret:' + error.ret, '\nerror.trace:' + error.trace, '\nfile_name:' + _this7.getName(), '\nfile_size:' + _this7.getSize(), '\nupload_processed:' + _this7.getProcessed(), '\nfile_sha:' + _this7._sha, '\nupload_mode:' + _this7._upload_mode, '\nstate:' + _this7._state, '\nspeed:' + _this7._speed, '\nhas_do_pause:' + _this7._has_do_pause, '\ndetect_upload_network:ok', '\n[pre_upload_info]\n' + (0, _stringify2.default)(_this7._pre_upload_info, null, '\t'), '\n[process log]\n' + _this7.__LOG__.join('\n')]
                    });
                }).catch(function (error) {
                    _report2.default.log({
                        key: 'xplatform.upload.' + code,
                        log: ['\n[err_info]\n', '\nerror.msg:' + error.msg, '\nerror.ret:' + error.ret, '\nerror.trace:' + error.trace, '\nfile_name:' + _this7.getName(), '\nfile_size:' + _this7.getSize(), '\nupload_processed:' + _this7.getProcessed(), '\nfile_sha:' + _this7._sha, '\nupload_mode:' + _this7._upload_mode, '\nstate:' + _this7._state, '\nspeed:' + _this7._speed, '\nhas_do_pause:' + _this7._has_do_pause, '\ndetect_upload_network:' + (0, _stringify2.default)(error), '\n[pre_upload_info]\n' + (0, _stringify2.default)(_this7._pre_upload_info, null, '\t'), '\n[process log]\n' + _this7.__LOG__.join('\n')]
                    });
                });
            } else {
                _report2.default.log({
                    key: 'xplatform.upload.' + code,
                    log: ['\n[err_info]\n', '\nerror.msg:' + error.msg, '\nerror.ret:' + error.ret, '\nerror.trace:' + error.trace, '\nfile_name:' + this.getName(), '\nfile_size:' + this.getSize(), '\nupload_processed:' + this.getProcessed(), '\nfile_sha:' + this._sha, '\nupload_mode:' + this._upload_mode, '\nstate:' + this._state, '\nspeed:' + this._speed, '\nhas_do_pause:' + this._has_do_pause, '\n[pre_upload_info]\n' + (0, _stringify2.default)(this._pre_upload_info, null, '\t'), '\n[process log]\n' + this.__LOG__.join('\n')]
                });
            }

            var fileSize = this.getSize();
            if (fileSize > GB1) {
                _report2.default.hot('upload_over_1GB');
            } else if (fileSize > 500 * MB1) {
                _report2.default.hot('upload_over_500MB');
            } else if (fileSize > 100 * MB1) {
                _report2.default.hot('upload_over_100MB');
            } else if (fileSize > 50 * MB1) {
                _report2.default.hot('upload_over_50MB');
            } else if (fileSize > 10 * MB1) {
                _report2.default.hot('upload_over_10MB');
            } else if (fileSize > MB1) {
                _report2.default.hot('upload_over_1MB');
            } else {
                _report2.default.hot('upload_less_1MB');
            }

            if (this.isSubTask() && this.getParent().getType() === 'dir') {
                _stat3.default.statSingleTask(this);
            }
        }
    }, {
        key: 'log',
        value: function log(msg) {
            var date = new Date();
            var time = _format2.default.date(date) + ' ' + date.getMilliseconds();
            this.__LOG__.push('[' + time + '] ' + msg);
        }
    }, {
        key: 'getLog',
        value: function getLog() {
            return this.__LOG__;
        }
    }]);
    return FileTask;
}(_BaseTask3.default);

FileTask.STATE = ['wait', 'readying', 'readydone', 'process', 'done', 'pause', 'stop', 'error'];

exports.default = FileTask;

/***/ }),

/***/ "h5/z":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _request = __webpack_require__("yS1T");

var _request2 = _interopRequireDefault(_request);

var _FileNode = __webpack_require__("/eiI");

var _FileNode2 = _interopRequireDefault(_FileNode);

var _wyToast = __webpack_require__("cYh5");

var _wyToast2 = _interopRequireDefault(_wyToast);

var _wyTree = __webpack_require__("tf/G");

var _wyTree2 = _interopRequireDefault(_wyTree);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {

    components: {
        wyTree: _wyTree2.default
    },

    props: {
        rootNode: Object,
        fileNodes: Array,
        name: String,
        type: String },

    data: function data() {
        return {
            stage: 1,
            path: '微云/离线下载',
            errMsg: '',
            tempDir: null,
            destDir: null,
            manualChangeDestDir: false,
            allSelected: true };
    },


    computed: {
        iconCls: function iconCls() {
            if (this.type === 'torrent') {
                return 'icon-bt-m';
            } else if (this.type === 'magnet') {
                return 'icon-shared-link-m';
            }
        },
        selectedList: function selectedList() {
            return this.fileNodes.filter(function (file) {
                if (file.isSelected()) {
                    return true;
                }
            });
        },
        vipTips: function vipTips() {
            if (this.$store.getters['userInfo/superVip']) {
                return '微云超级会员 尊享每日多次离线下载';
            } else if (this.$store.getters['userInfo/vip']) {
                return '微云会员尊享每日多次离线下载';
            }
            return '试用机会5次 开通微云超级会员可享40次/天';
        },
        vipIcon: function vipIcon() {
            var isCommonVip = this.$store.getters['userInfo/vip'] && !this.$store.getters['userInfo/superVip'];
            return {
                'icon-vip-s-v2': !isCommonVip,
                'icon-vip-v2': isCommonVip
            };
        }
    },

    created: function created() {
        this.fileNodes.forEach(function (fileNode) {
            fileNode.setSelected(true);
        });
    },


    methods: {
        toggleAllSelect: function toggleAllSelect() {
            var _this = this;

            this.allSelected = !this.allSelected;
            this.fileNodes.forEach(function (file) {
                file.setSelected(_this.allSelected ? true : false);
            });
        },
        toggleFileSelected: function toggleFileSelected(file) {
            file.setSelected(!file.isSelected());

            this.allSelected = this.selectedList.length === this.fileNodes.length;
        },
        changeDestDir: function changeDestDir() {
            this.manualChangeDestDir = true;
        },
        chooseDir: function chooseDir(destDir) {
            this.destDir && this.destDir.setSelected(false);
            destDir.setSelected(true);
            this.destDir = destDir;
            var pathsName = [destDir.getName()];
            var parent = destDir.getParent();
            while (parent) {
                pathsName.push(parent.getName());
                parent = parent.getParent();
            }

            this.path = pathsName.reverse().join('\\');

            this.userChoose = true;
        },
        expandDir: function expandDir() {
            var _this2 = this;

            if (this.destDir.isLoadDone()) {
                return;
            }
            _request2.default.webapp({
                protocol: 'weiyunQdisk',
                name: 'DiskDirBatchList',
                cmd: 2209,
                data: {
                    pdir_key: this.destDir.getPdirKey(),
                    dir_list: [{
                        dir_key: this.destDir.getId(),
                        get_type: 1
                    }]
                }
            }).then(function (res) {
                var dirList = res.dir_list[0]['dir_list'];
                dirList.forEach(function (item) {
                    _this2.destDir.addNode(new _FileNode2.default(item));
                });
                _this2.destDir.setLoadDone(true);
            }).catch(function (error) {
                _wyToast2.default.error(error.msg || error.message);
            });
        },
        close: function close() {
            this.$emit('close');
        },
        submit: function submit() {
            if (this.selectedList.length === 0) {
                return;
            }
            this.$emit('submit', {
                destDir: this.destDir,
                fileNodes: this.selectedList
            });
        },
        goVip: function goVip() {
            this.$store.dispatch('control/buyVip', 'wyweb_offline_result');
        }
    }
};

/***/ }),

/***/ "hQBp":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {

    computed: {
        managerState: function managerState() {
            return this.$store.getters['manager/managerState'];
        }
    },

    methods: {
        retryError: function retryError() {
            this.$store.dispatch('manager/retryError');
        },
        cancelError: function cancelError() {
            this.$store.dispatch('manager/cancelError');
        },
        pauseAll: function pauseAll() {
            this.$store.dispatch('manager/pauseAll');
        },
        retryAll: function retryAll() {
            this.$store.dispatch('manager/startAll');
        }
    }

};

/***/ }),

/***/ "hmaL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal modal-show",on:{"click":_vm.modalClick}},[_c('b',{staticClass:"modal-mask"}),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('div',{staticClass:"modal-dialog modal-dialog-480 modal-dialog-dirtree"},[_c('div',{staticClass:"modal-dialog-hd clearfix"},[_c('h4',{staticClass:"modal-dialog-title"},[_vm._v("上传到")]),_vm._v(" "),_c('button',{staticClass:"btn-icon icon icon-pop-close",attrs:{"aria-label":"关闭弹窗"},on:{"click":_vm.close}})]),_vm._v(" "),_c('div',{staticClass:"modal-dialog-bd"},[_c('div',{staticClass:"mod-dirbox"},[_c('div',{staticClass:"dirbox-dirs"},[_c('wy-tree',{attrs:{"rootNode":_vm.rootNode,"rootExpended":true},on:{"chooseDir":_vm.chooseDir,"expandDir":_vm.expandDir,"createDir":_vm.createDir}}),_vm._v(" "),(_vm.errMsg)?_c('div',{staticClass:"console err"},[_c('i',{staticClass:"icon"}),_vm._v(_vm._s(_vm.errMsg))]):_vm._e()],1)])]),_vm._v(" "),_c('div',{staticClass:"modal-dialog-ft clearfix btn-group"},[_c('button',{staticClass:"btn",on:{"click":_vm.close}},[_vm._v("取消")]),_vm._v(" "),_c('button',{staticClass:"btn btn-active",on:{"click":_vm.submit}},[_vm._v("开始上传")]),_vm._v(" "),_c('button',{staticClass:"btn btn-link",on:{"click":function($event){$event.stopPropagation();return _vm.preCreateDir($event)}}},[_vm._v("新建文件夹")])])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-dialog modal-dialog-tips"},[_c('p',[_vm._v("严禁存储、处理、传输、发布任何涉密、色情、暴力、侵权等违法违规信息")])])}]


/***/ }),

/***/ "huvo":
/***/ (function(module, exports, __webpack_require__) {

/**
 * cssfilter
 *
 * @author 老雷<leizongmin@gmail.com>
 */

var DEFAULT = __webpack_require__("/cOS");
var parseStyle = __webpack_require__("Uo+f");
var _ = __webpack_require__("jCb9");


/**
 * 返回值是否为空
 *
 * @param {Object} obj
 * @return {Boolean}
 */
function isNull (obj) {
  return (obj === undefined || obj === null);
}

/**
 * 浅拷贝对象
 *
 * @param {Object} obj
 * @return {Object}
 */
function shallowCopyObject (obj) {
  var ret = {};
  for (var i in obj) {
    ret[i] = obj[i];
  }
  return ret;
}

/**
 * 创建CSS过滤器
 *
 * @param {Object} options
 *   - {Object} whiteList
 *   - {Function} onAttr
 *   - {Function} onIgnoreAttr
 *   - {Function} safeAttrValue
 */
function FilterCSS (options) {
  options = shallowCopyObject(options || {});
  options.whiteList = options.whiteList || DEFAULT.whiteList;
  options.onAttr = options.onAttr || DEFAULT.onAttr;
  options.onIgnoreAttr = options.onIgnoreAttr || DEFAULT.onIgnoreAttr;
  options.safeAttrValue = options.safeAttrValue || DEFAULT.safeAttrValue;
  this.options = options;
}

FilterCSS.prototype.process = function (css) {
  // 兼容各种奇葩输入
  css = css || '';
  css = css.toString();
  if (!css) return '';

  var me = this;
  var options = me.options;
  var whiteList = options.whiteList;
  var onAttr = options.onAttr;
  var onIgnoreAttr = options.onIgnoreAttr;
  var safeAttrValue = options.safeAttrValue;

  var retCSS = parseStyle(css, function (sourcePosition, position, name, value, source) {

    var check = whiteList[name];
    var isWhite = false;
    if (check === true) isWhite = check;
    else if (typeof check === 'function') isWhite = check(value);
    else if (check instanceof RegExp) isWhite = check.test(value);
    if (isWhite !== true) isWhite = false;

    // 如果过滤后 value 为空则直接忽略
    value = safeAttrValue(name, value);
    if (!value) return;

    var opts = {
      position: position,
      sourcePosition: sourcePosition,
      source: source,
      isWhite: isWhite
    };

    if (isWhite) {

      var ret = onAttr(name, value, opts);
      if (isNull(ret)) {
        return name + ':' + value;
      } else {
        return ret;
      }

    } else {

      var ret = onIgnoreAttr(name, value, opts);
      if (!isNull(ret)) {
        return ret;
      }

    }
  });

  return retCSS;
};


module.exports = FilterCSS;


/***/ }),

/***/ "i/hz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"tasks-item",class:[_vm.stateCls]},[_c('div',{staticClass:"item-inner clearfix"},[_c('div',{staticClass:"item-tit",on:{"click":_vm.openMutiTask}},[_c('div',{staticClass:"thumb"},[_c('i',{staticClass:"icon icon-m",class:[_vm.iconCls]})]),_vm._v(" "),_c('div',{staticClass:"info"},[_c('p',{staticClass:"tit"},[_c('span',{staticClass:"tit-inner"},[_vm._v(_vm._s(_vm.name))])]),_vm._v(" "),_c('span',{staticClass:"txt txt-sub"},[_vm._v(_vm._s(_vm.size))]),_vm._v(" "),_c('span',{staticClass:"txt txt-sub"},[_vm._v(_vm._s(_vm.type))]),_vm._v(" "),(_vm.state === 'error')?_c('span',{staticClass:"txt txt-fail",attrs:{"title":_vm.errMsg}},[_vm._v(_vm._s(_vm.errMsg)),(_vm.errRet === 2002021)?_c('a',{attrs:{"href":"javascript:void(0)"},on:{"click":_vm.feedback}},[_vm._v("，请点击反馈联系我们")]):_vm._e()]):_vm._e()])]),_vm._v(" "),_c('div',{staticClass:"task-info"},[(_vm.taskSvipSpeed !== '')?_c('p',{staticClass:"task-txt-status txt txt-sub"},[_vm._v("超级会员加速")]):_vm._e(),_vm._v(" "),(_vm.taskSvipSpeed !== '')?_c('p',{staticClass:"task-txt-status txt txt-sub txt-strong"},[_vm._v(_vm._s(_vm.taskSvipSpeed))]):_vm._e(),_vm._v(" "),_c('p',{staticClass:"task-txt-status txt",class:{'txt-sub txt-strong': _vm.isSuperVip && !_vm.isOffline && _vm.state === 'process' && _vm.taskSvipSpeed === ''}},[_vm._v(_vm._s(_vm.stateText))]),_vm._v(" "),_c('div',{staticClass:"task-progress-status"},[_c('div',{staticClass:"progress-wrapper"},[_c('b',{staticClass:"progress"},[_c('svg',{attrs:{"width":"36px","height":"36px","viewBox":"0 0 36 36","version":"1.1","xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[_c('circle',{style:({'stroke-dashoffset': _vm.processed}),attrs:{"id":"Combined-Shape","stroke":_vm.processColor,"fill":"transparent","stroke-width":"3","cx":"18","cy":"18","r":"16"}})])]),_vm._v(" "),_c('button',{staticClass:"btn btn-icon",on:{"click":_vm.changeState}})]),_vm._v(" "),(_vm.state === 'pause')?_c('p',{staticClass:"task-txt-status txt txt-sub"},[_vm._v("已取消")]):_vm._e()])])])])}
var staticRenderFns = []


/***/ }),

/***/ "iABy":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__("Zrlr");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("wxAW");

var _createClass3 = _interopRequireDefault(_createClass2);

var _vue = __webpack_require__("7+uW");

var _vue2 = _interopRequireDefault(_vue);

var _request = __webpack_require__("yS1T");

var _request2 = _interopRequireDefault(_request);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OfflineTaskQueue = function () {
    function OfflineTaskQueue() {
        (0, _classCallCheck3.default)(this, OfflineTaskQueue);

        this._queue = [];
        this._task_map = {};

        this._updating_timer = null;

        this._update_retry = 3;

        this._state = 'idle';
    }

    (0, _createClass3.default)(OfflineTaskQueue, [{
        key: '$on',
        value: function $on(eventName, callback) {
            if (!this._event) {
                this._event = new _vue2.default();
            }
            this._event.$on(eventName, callback);
        }
    }, {
        key: '$emit',
        value: function $emit() {
            var args = [].concat(Array.prototype.slice.call(arguments));
            this._event && this._event.$emit.apply(this._event, args);
        }
    }, {
        key: 'head',
        value: function head(task) {
            var _this = this;

            if (this.hasTask(task)) {
                return;
            }
            this._queue.unshift(task);
            this._task_map[task.getId()] = task;
            task.$on('statechange', function (task, newState, oldState) {
                _this.handleTaskStateChange(task, newState, oldState);
            });
        }
    }, {
        key: 'tail',
        value: function tail(task) {
            var _this2 = this;

            if (this.hasTask(task)) {
                return;
            }
            this._queue.push(task);
            this._task_map[task.getId()] = task;
            task.$on('statechange', function (task, newState, oldState) {
                _this2.handleTaskStateChange(task, newState, oldState);
            });
        }
    }, {
        key: 'hasTask',
        value: function hasTask(task) {
            if (this._task_map[task.getId()]) {
                return true;
            }
        }
    }, {
        key: 'changeState',
        value: function changeState(state) {
            this._state = state;
        }
    }, {
        key: 'getState',
        value: function getState() {
            return this._state;
        }
    }, {
        key: 'handleTaskStateChange',
        value: function handleTaskStateChange(task, newState, oldState) {
            switch (newState) {
                case 'stop':
                    this.removeTask(task);
                    break;
                case 'wait':
                    this.startTask(task, oldState);
                    break;
                case 'pause':
                    this.handleTaskPause();
                    break;
                case 'done':
                    this.handleTaskDone();
                    break;
                case 'error':
                    this.handleTaskError();
                    break;
            }
        }
    }, {
        key: 'handleTaskDone',
        value: function handleTaskDone() {
            if (this.isComplete()) {
                this.$emit('complete');
                this.changeState('complete');
            }
        }
    }, {
        key: 'handleTaskError',
        value: function handleTaskError() {
            if (this.isError()) {
                this.$emit('error');
                this.changeState('error');
            }
        }
    }, {
        key: 'handleTaskPause',
        value: function handleTaskPause() {
            if (this.isPause()) {
                this.$emit('pause');
                this.changeState('pause');
            }
        }
    }, {
        key: 'removeTask',
        value: function removeTask(task) {
            var _this3 = this;

            for (var i = 0, len = this._queue.length; i < len; i++) {
                if (task.getId() === this._queue[i].getId()) {
                    this._queue.splice(i, 1);
                    break;
                }
            }

            this._remove_task_ids = this._remove_task_ids || [];
            this._remove_task_ids.push(task.getId());

            delete this._task_map[task.getId()];

            if (this._queue.length === 0) {
                this.changeState('idle');
            }

            if (this.lazyTimer) {
                return;
            }

            this.lazyTimer = setTimeout(function () {
                _this3.lazyRemoveTask();
            }, 500);
        }
    }, {
        key: 'lazyRemoveTask',
        value: function lazyRemoveTask() {

            if (!this._remove_task_ids) {
                return;
            }
            _request2.default.webapp({
                protocol: 'weiyunOdOfflineDownloadClient',
                name: 'OdDelTaskItem',
                cmd: 28221,
                data: {
                    task_id: this._remove_task_ids
                }
            }).then(function () {}, function () {});

            this._remove_task_ids = null;
            this.lazyTimer = null;
        }
    }, {
        key: 'getExecuteTasks',
        value: function getExecuteTasks() {
            return this._queue.filter(function (task) {
                if (task.getState() !== 'done') {
                    return true;
                }
            });
        }
    }, {
        key: 'getExecuteCount',
        value: function getExecuteCount() {
            return this.getExecuteTasks().length;
        }
    }, {
        key: 'getDoneTasks',
        value: function getDoneTasks() {
            return this._queue.filter(function (task) {
                if (task.getState() === 'done') {
                    return true;
                }
            });
        }
    }, {
        key: 'getAllTasks',
        value: function getAllTasks() {
            return this._queue;
        }
    }, {
        key: 'getProcessingTasks',
        value: function getProcessingTasks() {
            var tasks = [];
            this._queue.forEach(function (task) {
                var state = task.getState();
                if (state !== 'error' && state !== 'done') {
                    tasks.push(task);
                }
            });
            return tasks;
        }
    }, {
        key: 'getProcessingTasksCount',
        value: function getProcessingTasksCount() {
            return this.getProcessingTasks().length;
        }
    }, {
        key: 'getErrorTasks',
        value: function getErrorTasks() {
            return this._queue.filter(function (task) {
                if (task.getState() === 'error') {
                    return true;
                }
            });
        }
    }, {
        key: 'getDoneCount',
        value: function getDoneCount() {
            return this.getDoneTasks().length;
        }
    }, {
        key: 'getTotal',
        value: function getTotal() {
            return this.getAllTasks().length;
        }
    }, {
        key: 'startTask',
        value: function startTask(task, oldState) {
            if (oldState === 'error') {
                _request2.default.webapp({
                    protocol: 'weiyunOdOfflineDownloadClient',
                    name: 'OdContinueTask',
                    cmd: 28230,
                    data: {
                        sub_task_list: [task.getId()]
                    }
                }).then(function () {
                    task.changeState('wait');
                }, function () {
                    task.changeState('error');
                });
            }
            this.changeState('running');
        }
    }, {
        key: 'start',
        value: function start() {
            var _this4 = this;

            if (this.getTotal() === 0) {
                return;
            } else if (this.getExecuteCount() === 0 && this.getDoneCount()) {
                this.changeState('complete');
                return;
            }

            if (this.getState() === 'error') {
                return;
            }

            this.changeState('running');

            if (this._updating_timer) {
                return;
            }

            this._updating_timer = setInterval(function () {
                _this4.updateTaskStatus();
            }, 10 * 1000);

            this.getExecuteTasks().forEach(function (task) {
                var state = task.getState();
                if (state !== 'error') {
                    task.start();
                }
            });
        }
    }, {
        key: 'restart',
        value: function restart() {
            if (this._state === 'idle' || this._state === 'complete') {
                return;
            }
            this.getExecuteTasks().forEach(function (task) {
                var state = task.getState();
                if (state !== 'done') {
                    task.changeState('process');
                }
            });
            this.start();
        }
    }, {
        key: 'pause',
        value: function pause() {
            if (this._updating_timer) {
                clearInterval(this._updating_timer);
                this._updating_timer = null;
            }
            this.getExecuteTasks().forEach(function (task) {
                task.changeState('pause');
            });

            if (this.getExecuteCount()) {
                this.changeState('pause');
            }
        }
    }, {
        key: 'updateTaskStatus',
        value: function updateTaskStatus() {
            var _this5 = this;

            _request2.default.webapp({
                protocol: 'weiyunOdOfflineDownloadClient',
                name: 'OdGetTaskList',
                cmd: 28220,
                data: {}
            }).then(function (res) {
                var taskList = res.task_list;
                taskList.forEach(function (item) {
                    var task = _this5._task_map[item.task_id];
                    if (!task) {
                        return;
                    }

                    if (item.retcode) {
                        task.setErrorInfo({
                            ret: item.retcode,
                            msg: item.retmsg
                        });
                        task.changeState('error');
                    } else if (task.getState() !== 'pause') {
                        task.setProcessed(task.current_size);
                        if (item.task_status === 1) {
                            task.setPdirKey(item.pdir_key);
                            task.changeState('done');
                        } else if (item.current_size) {
                            task.changeState('process');
                        }
                    }
                });

                if (_this5.getExecuteCount() === 0) {
                    if (_this5._updating_timer) {
                        clearInterval(_this5._updating_timer);
                        _this5._updating_timer = null;
                    }
                }
            }, function () {});
        }
    }, {
        key: 'isComplete',
        value: function isComplete() {

            if (this.getExecuteCount() === 0) {
                return true;
            } else {
                return false;
            }
        }
    }, {
        key: 'isPause',
        value: function isPause() {
            var hasError = false;
            var hasCanRun = false;
            var hasPause = false;
            this.getExecuteTasks().forEach(function (task) {
                var state = task.getState();
                if (state === 'pause') {
                    hasPause = true;
                } else if (state === 'error') {
                    hasError = true;
                } else {
                    hasCanRun = true;
                }
            });
            if (!hasCanRun && !hasError && hasPause) {
                return true;
            } else {
                return false;
            }
        }
    }, {
        key: 'isError',
        value: function isError() {
            var hasError = false;
            var hasCanRun = false;
            var hasPause = false;
            this.getExecuteTasks().forEach(function (task) {
                var state = task.getState();
                if (state === 'pause') {
                    hasPause = true;
                } else if (state === 'error') {
                    hasError = true;
                } else {
                    hasCanRun = true;
                }
            });
            if (!hasCanRun && hasError) {
                    return true;
                } else {
                return false;
            }
        }
    }, {
        key: 'isRunning',
        value: function isRunning() {
            var hasRun = false;
            this.getExecuteTasks().forEach(function (task) {
                var state = task.getState();
                if (state === 'process') {
                    hasRun = true;
                }
            });

            return hasRun;
        }
    }]);
    return OfflineTaskQueue;
}();

exports.default = OfflineTaskQueue;

/***/ }),

/***/ "iBK5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal modal-show"},[_c('b',{staticClass:"modal-mask"}),_vm._v(" "),_vm._m(0),_vm._v(" "),_c('div',{staticClass:"modal-dialog modal-dialog-480 modal-dialog-bt modal-dialog-bt-analysis"},[_c('div',{staticClass:"modal-dialog-hd clearfix"},[_c('h4',{staticClass:"modal-dialog-title"},[_vm._v("离线下载")]),_vm._v(" "),_c('button',{staticClass:"btn-icon icon icon-pop-close",attrs:{"aria-label":"关闭弹窗"},on:{"click":_vm.close}})]),_vm._v(" "),_c('div',{staticClass:"modal-dialog-bd"},[_c('div',{staticClass:"modal-bd-cont"},[_c('div',{staticClass:"bt-file-info"},[_c('i',{staticClass:"icon icon-m",class:[_vm.iconCls]}),_vm._v(" "),_c('span',{staticClass:"file-info"},[_c('span',{staticClass:"file-name",attrs:{"title":_vm.name}},[_vm._v(_vm._s(_vm.name))])])]),_vm._v(" "),_c('div',{staticClass:"bt-files-list"},[_c('div',{staticClass:"bt-file"},[_c('div',{staticClass:"mod-check",class:{act: _vm.allSelected}},[_c('i',{staticClass:"icon icon-check-s icon-checkbox",on:{"click":_vm.toggleAllSelect}}),_vm._v(" "),_c('span',{staticClass:"check-txt"},[_vm._v("全选")])]),_vm._v(" "),_c('div',{staticClass:"mod-list-group mod-list-group-short"},[_c('div',{staticClass:"list-group-bd"},[_c('ul',{staticClass:"list-group"},_vm._l((_vm.fileNodes),function(file,i){return _c('li',{key:i,staticClass:"list-group-item",class:{act: file.isSelected()}},[_c('div',{staticClass:"item-tit"},[_c('div',{staticClass:"label"},[_c('i',{staticClass:"icon icon-check-s icon-checkbox",on:{"click":function($event){_vm.toggleFileSelected(file)}}})]),_vm._v(" "),_c('div',{staticClass:"thumb"},[_c('i',{staticClass:"icon icon-m",class:['icon-'+file.getType() + '-m']})]),_vm._v(" "),_c('div',{staticClass:"info"},[_c('span',{staticClass:"tit"},[_vm._v(_vm._s(file.getName()))]),_vm._v(" "),_c('span',{staticClass:"tit tit-sub"},[_vm._v(_vm._s(_vm._f("SizeFormat")(file.getSize())))])])])])}))])])]),_vm._v(" "),_c('div',{staticClass:"dirbox-dirs"},[_c('div',{staticClass:"dirbox-dir dirbox-curdir"},[_c('label',[_vm._v("保存到：")]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.path))]),_vm._v(" "),_c('a',{staticClass:"dirbox-chdir",attrs:{"href":"javascript:void(0)"},on:{"click":_vm.changeDestDir}},[_vm._v("修改")])]),_vm._v(" "),(_vm.manualChangeDestDir)?_c('wy-tree',{attrs:{"rootNode":_vm.rootNode},on:{"chooseDir":_vm.chooseDir,"expandDir":_vm.expandDir}}):_vm._e()],1)])]),_vm._v(" "),_c('p',{staticClass:"promotion with-icon"},[_c('i',{staticClass:"icon",class:_vm.vipIcon}),_c('a',{staticClass:"btn-link",attrs:{"href":"#"},on:{"click":function($event){$event.preventDefault();return _vm.goVip($event)}}},[_vm._v(_vm._s(_vm.vipTips))])])]),_vm._v(" "),_c('div',{staticClass:"modal-dialog-ft clearfix btn-group"},[_c('button',{staticClass:"btn",on:{"click":_vm.close}},[_vm._v("取消")]),_vm._v(" "),_c('button',{staticClass:"btn btn-active",class:{'btn-disable': _vm.selectedList.length === 0},on:{"click":_vm.submit}},[_vm._v("保存("+_vm._s(_vm.selectedList.length)+")")])])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-dialog modal-dialog-tips"},[_c('p',[_vm._v("严禁存储、处理、传输、发布任何涉密、色情、暴力、侵权等违法违规信息")])])}]


/***/ }),

/***/ "iInB":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject                 = __webpack_require__("TcQ7")
  , $getOwnPropertyDescriptor = __webpack_require__("LKZe").f;

__webpack_require__("uqUo")('getOwnPropertyDescriptor', function(){
  return function getOwnPropertyDescriptor(it, key){
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});

/***/ }),

/***/ "iQAj":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__("Zrlr");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("wxAW");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TaskRootNode = function () {
    function TaskRootNode() {
        (0, _classCallCheck3.default)(this, TaskRootNode);

        this._kid_tasks = [];
        this._kid_map = {};
    }

    (0, _createClass3.default)(TaskRootNode, [{
        key: 'addTasks',
        value: function addTasks(tasks) {
            var _this = this;

            tasks.forEach(function (task) {
                _this.addTask(task);
            });
        }
    }, {
        key: 'addTask',
        value: function addTask(task) {
            this._kid_tasks.push(task);
            this._kid_map[task.getId()] = task;
        }
    }, {
        key: 'unshiftTask',
        value: function unshiftTask(task) {
            this._kid_tasks.unshift(task);
            this._kid_map[task.getId()] = task;
        }
    }, {
        key: 'removeTask',
        value: function removeTask(task) {

            var taskId = task.getId();

            delete this._kid_map[taskId];

            for (var i = 0, len = this._kid_tasks.length; i < len; i++) {
                if (this._kid_tasks[i].getId() === taskId) {
                    this._kid_tasks.splice(i, 1);
                    break;
                }
            }
        }
    }, {
        key: 'removeAll',
        value: function removeAll() {
            this._kid_tasks = [];
            this._kid_map = {};
        }
    }, {
        key: 'getTask',
        value: function getTask(taskId) {
            return this._kid_map[taskId];
        }
    }, {
        key: 'getAllTasks',
        value: function getAllTasks() {
            return this._kid_tasks;
        }
    }, {
        key: 'getExecuteTasks',
        value: function getExecuteTasks() {
            return this._kid_tasks.filter(function (task) {
                if (task.isSafebox() && task.getExecuteTasks().length) {
                    return true;
                } else if (!task.isSafebox() && task.getState() !== 'done') {
                    return true;
                }
            });
        }
    }, {
        key: 'getExecuteCount',
        value: function getExecuteCount() {
            return this.getExecuteTasks().length;
        }
    }, {
        key: 'getExecuteErrorCount',
        value: function getExecuteErrorCount() {
            var cnt = 0;
            this.getExecuteTasks().forEach(function (task) {
                if (task.getState() !== 'error') {
                    cnt++;
                }
            });
            return cnt;
        }
    }, {
        key: 'getDoneTasks',
        value: function getDoneTasks() {
            return this._kid_tasks.filter(function (task) {
                if (task.isSafebox() && task.getDoneTasks().length) {
                    return true;
                } else if (!task.isSafebox() && task.getState() === 'done') {
                    return true;
                }
            });
        }
    }, {
        key: 'getDoneCount',
        value: function getDoneCount() {
            return this.getDoneTasks().length;
        }
    }]);
    return TaskRootNode;
}();

exports.default = TaskRootNode;

/***/ }),

/***/ "jCb9":
/***/ (function(module, exports) {

module.exports = {
  indexOf: function (arr, item) {
    var i, j;
    if (Array.prototype.indexOf) {
      return arr.indexOf(item);
    }
    for (i = 0, j = arr.length; i < j; i++) {
      if (arr[i] === item) {
        return i;
      }
    }
    return -1;
  },
  forEach: function (arr, fn, scope) {
    var i, j;
    if (Array.prototype.forEach) {
      return arr.forEach(fn, scope);
    }
    for (i = 0, j = arr.length; i < j; i++) {
      fn.call(scope, arr[i], i, arr);
    }
  },
  trim: function (str) {
    if (String.prototype.trim) {
      return str.trim();
    }
    return str.replace(/(^\s*)|(\s*$)/g, '');
  },
  trimRight: function (str) {
    if (String.prototype.trimRight) {
      return str.trimRight();
    }
    return str.replace(/(\s*$)/g, '');
  }
};


/***/ }),

/***/ "jngM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tree_vue__ = __webpack_require__("PpZX");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tree_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tree_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tree_vue__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tree_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4dc5ef8e_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_tree_vue__ = __webpack_require__("5p0q");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("XyMi");
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tree_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4dc5ef8e_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_tree_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4dc5ef8e_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_tree_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "k3xn":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__("7+uW");

var _vue2 = _interopRequireDefault(_vue);

var _store = __webpack_require__("+zu9");

var _store2 = _interopRequireDefault(_store);

var _FileNode = __webpack_require__("/eiI");

var _FileNode2 = _interopRequireDefault(_FileNode);

var _console = __webpack_require__("vK/W");

var _console2 = _interopRequireDefault(_console);

var _wyProgress = __webpack_require__("w9vE");

var _wyProgress2 = _interopRequireDefault(_wyProgress);

var _wyToast = __webpack_require__("cYh5");

var _wyToast2 = _interopRequireDefault(_wyToast);

var _wyOfflineBox = __webpack_require__("Pab7");

var _wyOfflineBox2 = _interopRequireDefault(_wyOfflineBox);

var _wyOfflineResult = __webpack_require__("oJix");

var _wyOfflineResult2 = _interopRequireDefault(_wyOfflineResult);

var _parser = __webpack_require__("l56W");

var _parser2 = _interopRequireDefault(_parser);

var _OfflineFileNode = __webpack_require__("LKs4");

var _OfflineFileNode2 = _interopRequireDefault(_OfflineFileNode);

var _emitter = __webpack_require__("bg3o");

var _emitter2 = _interopRequireDefault(_emitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WyOfflineBoxCtor = _vue2.default.extend(_wyOfflineBox2.default);
var WyOfflineResultCtor = _vue2.default.extend(_wyOfflineResult2.default);

function init() {

    _store2.default.dispatch('manager/loadOfflineTasks', true);

    _emitter2.default.$on('offline:download', function () {
        start();
    });
}

var console = _console2.default.namespace('manager');

function start() {
    if (!_store2.default.state.userInfo.loaded) {
        return;
    }
    var instance = new WyOfflineBoxCtor({
        el: document.createElement('div'),
        store: _store2.default
    });

    instance.$on('submit', function (opts) {
        _wyProgress2.default.show('正在解析种子');
        if (opts.type === 'torrent') {
            _parser2.default.parseTorrent(opts.file).then(function (result) {
                result.type = 'torrent';
                result.name = opts.file.name;
                showResult(result);
                _wyProgress2.default.hide();
                close();
            }, function (error) {
                _wyProgress2.default.hide();
                _wyToast2.default.error(error.msg || '解析种子出错，请重试');
            });
        } else if (opts.type === 'magnet') {
            _parser2.default.parseMagnet(opts.magnetUrl).then(function (result) {
                result.type = 'magnet';
                result.name = result.dir_name || opts.magnetUrl;
                showResult(result);
                _wyProgress2.default.hide();
                close();
            }, function (error) {
                _wyProgress2.default.hide();
                _wyToast2.default.error(error.msg || '解析种子出错，请重试');
            });
        }
    });

    instance.$on('close', function () {
        close();
    });

    function close() {
        instance.$el.parentNode.removeChild(instance.$el);
        instance.$destroy();
        instance.$off('submit');
        instance.$off('close');
        instance = null;
    }

    document.body.appendChild(instance.$el);
}

function showResult(result) {
    if (!result.file_list || !result.file_list.length) {
        _store2.default.dispatch('manager/loadOfflineTasks');
        console.log('start download offline');
        return;
    }

    var rootNode = new _FileNode2.default({
        dir_key: _store2.default.state.userInfo.main_dir_key,
        pdir_key: _store2.default.state.userInfo.root_dir_key,
        dir_name: '全部'
    });

    var fileNodes = [];
    result.file_list.forEach(function (item) {
        var fileNode = new _OfflineFileNode2.default(item);
        fileNode.setOfflineInfo(result);
        fileNodes.push(fileNode);
    });

    var instance = new WyOfflineResultCtor({
        el: document.createElement('div'),
        propsData: {
            rootNode: rootNode,
            fileNodes: fileNodes,
            type: result.type,
            name: result.name
        },
        store: _store2.default
    });

    instance.$on('close', function () {
        close();
    });

    instance.$on('submit', function (data) {
        _store2.default.dispatch('manager/downloadOffline', {
            offlineInfo: result,
            destDir: data.destDir,
            fileNodes: data.fileNodes
        }).then(function () {
            console.log('start download offline');
            close();
        }, function (error) {});
    });

    function close() {
        instance.$el.parentNode.removeChild(instance.$el);
        instance.$destroy();
        instance.$off('submit');
        instance.$off('close');
        instance = null;
    }

    document.body.appendChild(instance.$el);
}

exports.default = {
    init: init,
    start: start
};

/***/ }),

/***/ "krhF":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Simple HTML Parser
 *
 * @author Zongmin Lei<leizongmin@gmail.com>
 */

var _ = __webpack_require__("noAI");

/**
 * get tag name
 *
 * @param {String} html e.g. '<a hef="#">'
 * @return {String}
 */
function getTagName(html) {
  var i = _.spaceIndex(html);
  var tagName;
  if (i === -1) {
    tagName = html.slice(1, -1);
  } else {
    tagName = html.slice(1, i + 1);
  }
  tagName = _.trim(tagName).toLowerCase();
  if (tagName.slice(0, 1) === "/") tagName = tagName.slice(1);
  if (tagName.slice(-1) === "/") tagName = tagName.slice(0, -1);
  return tagName;
}

/**
 * is close tag?
 *
 * @param {String} html 如：'<a hef="#">'
 * @return {Boolean}
 */
function isClosing(html) {
  return html.slice(0, 2) === "</";
}

/**
 * parse input html and returns processed html
 *
 * @param {String} html
 * @param {Function} onTag e.g. function (sourcePosition, position, tag, html, isClosing)
 * @param {Function} escapeHtml
 * @return {String}
 */
function parseTag(html, onTag, escapeHtml) {
  "use strict";

  var rethtml = "";
  var lastPos = 0;
  var tagStart = false;
  var quoteStart = false;
  var currentPos = 0;
  var len = html.length;
  var currentTagName = "";
  var currentHtml = "";

  chariterator: for (currentPos = 0; currentPos < len; currentPos++) {
    var c = html.charAt(currentPos);
    if (tagStart === false) {
      if (c === "<") {
        tagStart = currentPos;
        continue;
      }
    } else {
      if (quoteStart === false) {
        if (c === "<") {
          rethtml += escapeHtml(html.slice(lastPos, currentPos));
          tagStart = currentPos;
          lastPos = currentPos;
          continue;
        }
        if (c === ">" || currentPos === len - 1) {
          rethtml += escapeHtml(html.slice(lastPos, tagStart));
          currentHtml = html.slice(tagStart, currentPos + 1);
          currentTagName = getTagName(currentHtml);
          rethtml += onTag(
            tagStart,
            rethtml.length,
            currentTagName,
            currentHtml,
            isClosing(currentHtml)
          );
          lastPos = currentPos + 1;
          tagStart = false;
          continue;
        }
        if (c === '"' || c === "'") {
          var i = 1;
          var ic = html.charAt(currentPos - i);

          while (ic.trim() === "" || ic === "=") {
            if (ic === "=") {
              quoteStart = c;
              continue chariterator;
            }
            ic = html.charAt(currentPos - ++i);
          }
        }
      } else {
        if (c === quoteStart) {
          quoteStart = false;
          continue;
        }
      }
    }
  }
  if (lastPos < len) {
    rethtml += escapeHtml(html.substr(lastPos));
  }

  return rethtml;
}

var REGEXP_ILLEGAL_ATTR_NAME = /[^a-zA-Z0-9\\_:.-]/gim;

/**
 * parse input attributes and returns processed attributes
 *
 * @param {String} html e.g. `href="#" target="_blank"`
 * @param {Function} onAttr e.g. `function (name, value)`
 * @return {String}
 */
function parseAttr(html, onAttr) {
  "use strict";

  var lastPos = 0;
  var lastMarkPos = 0;
  var retAttrs = [];
  var tmpName = false;
  var len = html.length;

  function addAttr(name, value) {
    name = _.trim(name);
    name = name.replace(REGEXP_ILLEGAL_ATTR_NAME, "").toLowerCase();
    if (name.length < 1) return;
    var ret = onAttr(name, value || "");
    if (ret) retAttrs.push(ret);
  }

  // 逐个分析字符
  for (var i = 0; i < len; i++) {
    var c = html.charAt(i);
    var v, j;
    if (tmpName === false && c === "=") {
      tmpName = html.slice(lastPos, i);
      lastPos = i + 1;
      lastMarkPos = html.charAt(lastPos) === '"' || html.charAt(lastPos) === "'" ? lastPos : findNextQuotationMark(html, i + 1);
      continue;
    }
    if (tmpName !== false) {
      if (
        i === lastMarkPos
      ) {
        j = html.indexOf(c, i + 1);
        if (j === -1) {
          break;
        } else {
          v = _.trim(html.slice(lastMarkPos + 1, j));
          addAttr(tmpName, v);
          tmpName = false;
          i = j;
          lastPos = i + 1;
          continue;
        }
      }
    }
    if (/\s|\n|\t/.test(c)) {
      html = html.replace(/\s|\n|\t/g, " ");
      if (tmpName === false) {
        j = findNextEqual(html, i);
        if (j === -1) {
          v = _.trim(html.slice(lastPos, i));
          addAttr(v);
          tmpName = false;
          lastPos = i + 1;
          continue;
        } else {
          i = j - 1;
          continue;
        }
      } else {
        j = findBeforeEqual(html, i - 1);
        if (j === -1) {
          v = _.trim(html.slice(lastPos, i));
          v = stripQuoteWrap(v);
          addAttr(tmpName, v);
          tmpName = false;
          lastPos = i + 1;
          continue;
        } else {
          continue;
        }
      }
    }
  }

  if (lastPos < html.length) {
    if (tmpName === false) {
      addAttr(html.slice(lastPos));
    } else {
      addAttr(tmpName, stripQuoteWrap(_.trim(html.slice(lastPos))));
    }
  }

  return _.trim(retAttrs.join(" "));
}

function findNextEqual(str, i) {
  for (; i < str.length; i++) {
    var c = str[i];
    if (c === " ") continue;
    if (c === "=") return i;
    return -1;
  }
}

function findNextQuotationMark(str, i) {
  for (; i < str.length; i++) {
    var c = str[i];
    if (c === " ") continue;
    if (c === "'" || c === '"') return i;
    return -1;
  }
}

function findBeforeEqual(str, i) {
  for (; i > 0; i--) {
    var c = str[i];
    if (c === " ") continue;
    if (c === "=") return i;
    return -1;
  }
}

function isQuoteWrapString(text) {
  if (
    (text[0] === '"' && text[text.length - 1] === '"') ||
    (text[0] === "'" && text[text.length - 1] === "'")
  ) {
    return true;
  } else {
    return false;
  }
}

function stripQuoteWrap(text) {
  if (isQuoteWrapString(text)) {
    return text.substr(1, text.length - 2);
  } else {
    return text;
  }
}

exports.parseTag = parseTag;
exports.parseAttr = parseAttr;


/***/ }),

/***/ "l56W":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _promise = __webpack_require__("//Fk");

var _promise2 = _interopRequireDefault(_promise);

var _request = __webpack_require__("yS1T");

var _request2 = _interopRequireDefault(_request);

var _wyToast = __webpack_require__("cYh5");

var _wyToast2 = _interopRequireDefault(_wyToast);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function parseTorrent(file) {
    return new _promise2.default(function (resolve, reject) {
        readerFile(file).then(function (result) {
            _request2.default.webapp({
                protocol: 'weiyunOdOfflineDownloadClient',
                name: 'OdAddBtTorrentFile',
                cmd: 28209,
                data: {
                    torrent_name: file.name,
                    torrent_data: binb2hex(result)
                }
            }).then(function (res) {
                resolve(res);
            }, function (error) {
                reject(error);
            });
        }, function (error) {
            reject(error);
        });
    });
}

function parseMagnet(url) {
    return new _promise2.default(function (resolve, reject) {
        _request2.default.webapp({
            protocol: 'weiyunOdOfflineDownloadClient',
            name: 'OdAddUrlTask',
            cmd: 28211,
            data: {
                url: url
            }
        }).then(function (res) {
            resolve(res);
        }, function (error) {
            reject(error);
        });
    });
}

function binb2hex(bin) {
    var dataView = new DataView(bin);
    var hex = '';
    for (var i = 0, len = dataView.byteLength, byte; i < len; i++) {
        try {
            byte = dataView.getUint8(i, false).toString(16);

            hex += byte.length === 2 ? byte : ('0' + byte).slice(-2);
        } catch (e) {}
    }
    return hex;
}

function readerFile(file) {
    return new _promise2.default(function (resolve, reject) {
        var h5_file_reader = new FileReader();

        h5_file_reader.onload = function (e) {
            resolve(e.target.result);
        };

        h5_file_reader.onerror = function (e) {
            reject(e);
        };

        h5_file_reader.readAsArrayBuffer(file);
    });
}

exports.default = {
    parseTorrent: parseTorrent,
    parseMagnet: parseMagnet
};

/***/ }),

/***/ "m6a8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _upload = __webpack_require__("dfRI");

var _upload2 = _interopRequireDefault(_upload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _upload2.default;

/***/ }),

/***/ "mBT9":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(undefined);
// imports


// module
exports.push([module.i, ".modal .icon-vip-s-v2,.modal .icon-vip-v2{width:25px;height:25px;background-size:100% 100%;margin-right:5px;top:-1px}.modal .icon-vip-v2{background-image:url(" + __webpack_require__("EQiE") + ")}.modal .icon-vip-s-v2{background-image:url(" + __webpack_require__("DqWA") + ")}", ""]);

// exports


/***/ }),

/***/ "nhxF":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = __webpack_require__("7+uW");

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var emitter = new _vue2.default();

exports.default = emitter;

/***/ }),

/***/ "noAI":
/***/ (function(module, exports) {

module.exports = {
  indexOf: function (arr, item) {
    var i, j;
    if (Array.prototype.indexOf) {
      return arr.indexOf(item);
    }
    for (i = 0, j = arr.length; i < j; i++) {
      if (arr[i] === item) {
        return i;
      }
    }
    return -1;
  },
  forEach: function (arr, fn, scope) {
    var i, j;
    if (Array.prototype.forEach) {
      return arr.forEach(fn, scope);
    }
    for (i = 0, j = arr.length; i < j; i++) {
      fn.call(scope, arr[i], i, arr);
    }
  },
  trim: function (str) {
    if (String.prototype.trim) {
      return str.trim();
    }
    return str.replace(/(^\s*)|(\s*$)/g, "");
  },
  spaceIndex: function (str) {
    var reg = /\s|\n|\t/;
    var match = reg.exec(str);
    return match ? match.index : -1;
  },
};


/***/ }),

/***/ "oAUA":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cookie = __webpack_require__("bm5r");
var constants = __webpack_require__("4Uv1");

var url = 'https://h.trace.qq.com/kv';
var uploadUrl = 'https://upload.weiyun.com/ftnup_v2/weiyun';
var attaid = '05100065072';
var token = '4155811933';

var ActionType = {
    download: 1,
    upload: 2,
    batchDownload: 3,
    batchUpload: 4
};

var getUin = function getUin() {
    return (cookie.get('uin') || cookie.get('wx_uid') || '').replace(/o0*/, '') || cookie.get('openid') || '';
};

function reportByImg(url, params) {
    var arrs = [];
    for (var key in params) {
        arrs.push(key + '=' + params[key]);
    }
    var img = new Image();
    img.src = url + '?' + arrs.join('&');
}

function attaReport(params) {
    var data = (0, _extends3.default)({
        attaid: attaid,
        token: token,
        terminal: constants.BROWSER.isMobile ? 'H5' : 'WEB',
        server_ip: uploadUrl,
        uin: getUin()
    }, params);
    reportByImg(url, data);
}

module.exports = {
    attaReport: attaReport,
    ActionType: ActionType
};

/***/ }),

/***/ "oIHS":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _promise = __webpack_require__("//Fk");

var _promise2 = _interopRequireDefault(_promise);

var _stringify = __webpack_require__("mvHQ");

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	data: function data() {
		return {
			pwd: '',
			invalid: true };
	},


	computed: {
		status: function status() {
			return this.$store.state.safebox.status;
		},
		uin: function uin() {
			return this.$store.state.userInfo.uin;
		},
		publicKey: function publicKey() {
			return this.$store.state.safebox.publicKey;
		}
	},

	watch: {
		pwd: function pwd(newValue) {
			if (newValue.length > 3 && newValue.length < 17) {
				this.invalid = false;
			} else {
				this.invalid = true;
			}
		}
	},

	methods: {
		submit: function submit() {
			var _this = this;

			if (this.invalid) {
				return;
			}
			this.loadSHA().then(function (_ref) {
				var encrypt = _ref.encrypt,
				    SHA = _ref.SHA;

				var shaObj = new SHA("SHA-1", "TEXT");
				shaObj.update(_this.pwd + _this.uin, 'TEXT');
				encrypt.setPublicKey(_this.publicKey);
				var safeKey = {
					password: shaObj.getHash("HEX"),
					uin: _this.uin + '',
					time: (new Date().getTime() + '').slice(0, -3) + '' };
				safeKey = encrypt.getKey().encrypt((0, _stringify2.default)(safeKey));
				_this.$store.dispatch('safebox/verifyPwd', {
					safeKey: safeKey
				});
			});
		},
		loadSHA: function loadSHA() {
			return new _promise2.default(function (resolve, reject) {
				if (window.JSEncrypt && window.jsSHA) {
					resolve({
						encrypt: new window.JSEncrypt(),
						SHA: window.jsSHA
					});
				} else {

					lazyload.js(['jsencrypt', 'sha'], function (mod, mod1) {
						resolve({
							encrypt: new window.JSEncrypt(),
							SHA: window.jsSHA
						});
					});
				}
			});
		}
	}
};

/***/ }),

/***/ "oJix":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_wy_offline_result_vue__ = __webpack_require__("h5/z");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_wy_offline_result_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_wy_offline_result_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_wy_offline_result_vue__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_wy_offline_result_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_47c391a2_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_wy_offline_result_vue__ = __webpack_require__("iBK5");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("XyMi");
function injectStyle (context) {
  __webpack_require__("fy5w")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_wy_offline_result_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_47c391a2_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_wy_offline_result_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_47c391a2_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_wy_offline_result_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "oz9r":
/***/ (function(module, exports, __webpack_require__) {

/**
 * default settings
 *
 * @author Zongmin Lei<leizongmin@gmail.com>
 */

var FilterCSS = __webpack_require__("0Zbq").FilterCSS;
var getDefaultCSSWhiteList = __webpack_require__("0Zbq").getDefaultWhiteList;
var _ = __webpack_require__("noAI");

function getDefaultWhiteList() {
  return {
    a: ["target", "href", "title"],
    abbr: ["title"],
    address: [],
    area: ["shape", "coords", "href", "alt"],
    article: [],
    aside: [],
    audio: [
      "autoplay",
      "controls",
      "crossorigin",
      "loop",
      "muted",
      "preload",
      "src",
    ],
    b: [],
    bdi: ["dir"],
    bdo: ["dir"],
    big: [],
    blockquote: ["cite"],
    br: [],
    caption: [],
    center: [],
    cite: [],
    code: [],
    col: ["align", "valign", "span", "width"],
    colgroup: ["align", "valign", "span", "width"],
    dd: [],
    del: ["datetime"],
    details: ["open"],
    div: [],
    dl: [],
    dt: [],
    em: [],
    figcaption: [],
    figure: [],
    font: ["color", "size", "face"],
    footer: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    header: [],
    hr: [],
    i: [],
    img: ["src", "alt", "title", "width", "height"],
    ins: ["datetime"],
    li: [],
    mark: [],
    nav: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    section: [],
    small: [],
    span: [],
    sub: [],
    summary: [],
    sup: [],
    strong: [],
    strike: [],
    table: ["width", "border", "align", "valign"],
    tbody: ["align", "valign"],
    td: ["width", "rowspan", "colspan", "align", "valign"],
    tfoot: ["align", "valign"],
    th: ["width", "rowspan", "colspan", "align", "valign"],
    thead: ["align", "valign"],
    tr: ["rowspan", "align", "valign"],
    tt: [],
    u: [],
    ul: [],
    video: [
      "autoplay",
      "controls",
      "crossorigin",
      "loop",
      "muted",
      "playsinline",
      "poster",
      "preload",
      "src",
      "height",
      "width",
    ],
  };
}

var defaultCSSFilter = new FilterCSS();

/**
 * default onTag function
 *
 * @param {String} tag
 * @param {String} html
 * @param {Object} options
 * @return {String}
 */
function onTag(tag, html, options) {
  // do nothing
}

/**
 * default onIgnoreTag function
 *
 * @param {String} tag
 * @param {String} html
 * @param {Object} options
 * @return {String}
 */
function onIgnoreTag(tag, html, options) {
  // do nothing
}

/**
 * default onTagAttr function
 *
 * @param {String} tag
 * @param {String} name
 * @param {String} value
 * @return {String}
 */
function onTagAttr(tag, name, value) {
  // do nothing
}

/**
 * default onIgnoreTagAttr function
 *
 * @param {String} tag
 * @param {String} name
 * @param {String} value
 * @return {String}
 */
function onIgnoreTagAttr(tag, name, value) {
  // do nothing
}

/**
 * default escapeHtml function
 *
 * @param {String} html
 */
function escapeHtml(html) {
  return html.replace(REGEXP_LT, "&lt;").replace(REGEXP_GT, "&gt;");
}

/**
 * default safeAttrValue function
 *
 * @param {String} tag
 * @param {String} name
 * @param {String} value
 * @param {Object} cssFilter
 * @return {String}
 */
function safeAttrValue(tag, name, value, cssFilter) {
  // unescape attribute value firstly
  value = friendlyAttrValue(value);

  if (name === "href" || name === "src") {
    // filter `href` and `src` attribute
    // only allow the value that starts with `http://` | `https://` | `mailto:` | `/` | `#`
    value = _.trim(value);
    if (value === "#") return "#";
    if (
      !(
        value.substr(0, 7) === "http://" ||
        value.substr(0, 8) === "https://" ||
        value.substr(0, 7) === "mailto:" ||
        value.substr(0, 4) === "tel:" ||
        value.substr(0, 11) === "data:image/" ||
        value.substr(0, 6) === "ftp://" ||
        value.substr(0, 2) === "./" ||
        value.substr(0, 3) === "../" ||
        value[0] === "#" ||
        value[0] === "/"
      )
    ) {
      return "";
    }
  } else if (name === "background") {
    // filter `background` attribute (maybe no use)
    // `javascript:`
    REGEXP_DEFAULT_ON_TAG_ATTR_4.lastIndex = 0;
    if (REGEXP_DEFAULT_ON_TAG_ATTR_4.test(value)) {
      return "";
    }
  } else if (name === "style") {
    // `expression()`
    REGEXP_DEFAULT_ON_TAG_ATTR_7.lastIndex = 0;
    if (REGEXP_DEFAULT_ON_TAG_ATTR_7.test(value)) {
      return "";
    }
    // `url()`
    REGEXP_DEFAULT_ON_TAG_ATTR_8.lastIndex = 0;
    if (REGEXP_DEFAULT_ON_TAG_ATTR_8.test(value)) {
      REGEXP_DEFAULT_ON_TAG_ATTR_4.lastIndex = 0;
      if (REGEXP_DEFAULT_ON_TAG_ATTR_4.test(value)) {
        return "";
      }
    }
    if (cssFilter !== false) {
      cssFilter = cssFilter || defaultCSSFilter;
      value = cssFilter.process(value);
    }
  }

  // escape `<>"` before returns
  value = escapeAttrValue(value);
  return value;
}

// RegExp list
var REGEXP_LT = /</g;
var REGEXP_GT = />/g;
var REGEXP_QUOTE = /"/g;
var REGEXP_QUOTE_2 = /&quot;/g;
var REGEXP_ATTR_VALUE_1 = /&#([a-zA-Z0-9]*);?/gim;
var REGEXP_ATTR_VALUE_COLON = /&colon;?/gim;
var REGEXP_ATTR_VALUE_NEWLINE = /&newline;?/gim;
// var REGEXP_DEFAULT_ON_TAG_ATTR_3 = /\/\*|\*\//gm;
var REGEXP_DEFAULT_ON_TAG_ATTR_4 =
  /((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a):/gi;
// var REGEXP_DEFAULT_ON_TAG_ATTR_5 = /^[\s"'`]*(d\s*a\s*t\s*a\s*)\:/gi;
// var REGEXP_DEFAULT_ON_TAG_ATTR_6 = /^[\s"'`]*(d\s*a\s*t\s*a\s*)\:\s*image\//gi;
var REGEXP_DEFAULT_ON_TAG_ATTR_7 =
  /e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi;
var REGEXP_DEFAULT_ON_TAG_ATTR_8 = /u\s*r\s*l\s*\(.*/gi;

/**
 * escape double quote
 *
 * @param {String} str
 * @return {String} str
 */
function escapeQuote(str) {
  return str.replace(REGEXP_QUOTE, "&quot;");
}

/**
 * unescape double quote
 *
 * @param {String} str
 * @return {String} str
 */
function unescapeQuote(str) {
  return str.replace(REGEXP_QUOTE_2, '"');
}

/**
 * escape html entities
 *
 * @param {String} str
 * @return {String}
 */
function escapeHtmlEntities(str) {
  return str.replace(REGEXP_ATTR_VALUE_1, function replaceUnicode(str, code) {
    return code[0] === "x" || code[0] === "X"
      ? String.fromCharCode(parseInt(code.substr(1), 16))
      : String.fromCharCode(parseInt(code, 10));
  });
}

/**
 * escape html5 new danger entities
 *
 * @param {String} str
 * @return {String}
 */
function escapeDangerHtml5Entities(str) {
  return str
    .replace(REGEXP_ATTR_VALUE_COLON, ":")
    .replace(REGEXP_ATTR_VALUE_NEWLINE, " ");
}

/**
 * clear nonprintable characters
 *
 * @param {String} str
 * @return {String}
 */
function clearNonPrintableCharacter(str) {
  var str2 = "";
  for (var i = 0, len = str.length; i < len; i++) {
    str2 += str.charCodeAt(i) < 32 ? " " : str.charAt(i);
  }
  return _.trim(str2);
}

/**
 * get friendly attribute value
 *
 * @param {String} str
 * @return {String}
 */
function friendlyAttrValue(str) {
  str = unescapeQuote(str);
  str = escapeHtmlEntities(str);
  str = escapeDangerHtml5Entities(str);
  str = clearNonPrintableCharacter(str);
  return str;
}

/**
 * unescape attribute value
 *
 * @param {String} str
 * @return {String}
 */
function escapeAttrValue(str) {
  str = escapeQuote(str);
  str = escapeHtml(str);
  return str;
}

/**
 * `onIgnoreTag` function for removing all the tags that are not in whitelist
 */
function onIgnoreTagStripAll() {
  return "";
}

/**
 * remove tag body
 * specify a `tags` list, if the tag is not in the `tags` list then process by the specify function (optional)
 *
 * @param {array} tags
 * @param {function} next
 */
function StripTagBody(tags, next) {
  if (typeof next !== "function") {
    next = function () {};
  }

  var isRemoveAllTag = !Array.isArray(tags);
  function isRemoveTag(tag) {
    if (isRemoveAllTag) return true;
    return _.indexOf(tags, tag) !== -1;
  }

  var removeList = [];
  var posStart = false;

  return {
    onIgnoreTag: function (tag, html, options) {
      if (isRemoveTag(tag)) {
        if (options.isClosing) {
          var ret = "[/removed]";
          var end = options.position + ret.length;
          removeList.push([
            posStart !== false ? posStart : options.position,
            end,
          ]);
          posStart = false;
          return ret;
        } else {
          if (!posStart) {
            posStart = options.position;
          }
          return "[removed]";
        }
      } else {
        return next(tag, html, options);
      }
    },
    remove: function (html) {
      var rethtml = "";
      var lastPos = 0;
      _.forEach(removeList, function (pos) {
        rethtml += html.slice(lastPos, pos[0]);
        lastPos = pos[1];
      });
      rethtml += html.slice(lastPos);
      return rethtml;
    },
  };
}

/**
 * remove html comments
 *
 * @param {String} html
 * @return {String}
 */
function stripCommentTag(html) {
  var retHtml = "";
  var lastPos = 0;
  while (lastPos < html.length) {
    var i = html.indexOf("<!--", lastPos);
    if (i === -1) {
      retHtml += html.slice(lastPos);
      break;
    }
    retHtml += html.slice(lastPos, i);
    var j = html.indexOf("-->", i);
    if (j === -1) {
      break;
    }
    lastPos = j + 3;
  }
  return retHtml;
}

/**
 * remove invisible characters
 *
 * @param {String} html
 * @return {String}
 */
function stripBlankChar(html) {
  var chars = html.split("");
  chars = chars.filter(function (char) {
    var c = char.charCodeAt(0);
    if (c === 127) return false;
    if (c <= 31) {
      if (c === 10 || c === 13) return true;
      return false;
    }
    return true;
  });
  return chars.join("");
}

exports.whiteList = getDefaultWhiteList();
exports.getDefaultWhiteList = getDefaultWhiteList;
exports.onTag = onTag;
exports.onIgnoreTag = onIgnoreTag;
exports.onTagAttr = onTagAttr;
exports.onIgnoreTagAttr = onIgnoreTagAttr;
exports.safeAttrValue = safeAttrValue;
exports.escapeHtml = escapeHtml;
exports.escapeQuote = escapeQuote;
exports.unescapeQuote = unescapeQuote;
exports.escapeHtmlEntities = escapeHtmlEntities;
exports.escapeDangerHtml5Entities = escapeDangerHtml5Entities;
exports.clearNonPrintableCharacter = clearNonPrintableCharacter;
exports.friendlyAttrValue = friendlyAttrValue;
exports.escapeAttrValue = escapeAttrValue;
exports.onIgnoreTagStripAll = onIgnoreTagStripAll;
exports.StripTagBody = StripTagBody;
exports.stripCommentTag = stripCommentTag;
exports.stripBlankChar = stripBlankChar;
exports.cssFilter = defaultCSSFilter;
exports.getDefaultCSSWhiteList = getDefaultCSSWhiteList;


/***/ }),

/***/ "pAxX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_task_toolbar_vue__ = __webpack_require__("hQBp");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_task_toolbar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_task_toolbar_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_task_toolbar_vue__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_task_toolbar_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a8b988ba_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_task_toolbar_vue__ = __webpack_require__("MVLL");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("XyMi");
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_task_toolbar_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a8b988ba_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_task_toolbar_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_a8b988ba_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_task_toolbar_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "pbYk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.hasTask),expression:"hasTask"}],staticClass:"mod-tasks",class:[_vm.stateCls],staticStyle:{"visibility":"visible"}},[_c('div',{staticClass:"operation"},[_c('button',{staticClass:"btn btn-icon",attrs:{"aria-hidden":"true"},on:{"click":_vm.toggleExpand}},[_c('i',{staticClass:"icon icon-window-fold"})]),_vm._v(" "),_c('button',{staticClass:"btn btn-icon",attrs:{"aria-label":"关闭"},on:{"click":_vm.close}},[_c('i',{staticClass:"icon icon-close"})])]),_vm._v(" "),_c('wy-manager-header'),_vm._v(" "),_c('div',{staticClass:"tasks-body"},[_c('div',{staticClass:"tasks-cont"},[_c('div',{staticClass:"tasks-op-wrapper"},[(!!_vm.inSubdir)?_c('task-breadcrumb'):_vm._e(),_vm._v(" "),_c('task-toolbar')],1),_vm._v(" "),_c('task-vip-guide'),_vm._v(" "),_c('div',{staticClass:"tasks-group-wrapper"},[_c('div',{staticClass:"tasks-group-viewport"},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.isEmpty && !_vm.curMutiTask),expression:"!isEmpty && !curMutiTask"}],staticClass:"tasks-list-wrapper"},[_c('task-list',{attrs:{"taskList":_vm.taskList}})],1),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.isEmpty && _vm.curMutiTask),expression:"!isEmpty && curMutiTask"}],staticClass:"tasks-list-wrapper"},[_c('task-list',{directives:[{name:"show",rawName:"v-show",value:(!_vm.shouldShowSafeboxLogin),expression:"!shouldShowSafeboxLogin"}],attrs:{"taskList":_vm.subTaskList}}),_vm._v(" "),(_vm.shouldShowSafeboxLogin)?_c('task-safebox-login'):_vm._e()],1),_vm._v(" "),(_vm.isEmpty)?_c('task-empty'):_vm._e()],1)])],1)])],1)}
var staticRenderFns = []


/***/ }),

/***/ "q76F":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__("Zx67");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__("Zrlr");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("wxAW");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__("zwoO");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("Pf15");

var _inherits3 = _interopRequireDefault(_inherits2);

var _support = __webpack_require__("Im35");

var _support2 = _interopRequireDefault(_support);

var _config = __webpack_require__("QIop");

var _config2 = _interopRequireDefault(_config);

var _BaseTask2 = __webpack_require__("8oD/");

var _BaseTask3 = _interopRequireDefault(_BaseTask2);

var _FileTask = __webpack_require__("fzhe");

var _FileTask2 = _interopRequireDefault(_FileTask);

var _TaskQueue = __webpack_require__("BKU2");

var _TaskQueue2 = _interopRequireDefault(_TaskQueue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DirTask = function (_BaseTask) {
    (0, _inherits3.default)(DirTask, _BaseTask);

    function DirTask(opts) {
        (0, _classCallCheck3.default)(this, DirTask);


        opts.type = 'dir';

        var _this = (0, _possibleConstructorReturn3.default)(this, (DirTask.__proto__ || (0, _getPrototypeOf2.default)(DirTask)).call(this, opts));

        _this._file_node = opts.fileNode;
        _this._dest_dir = opts.destDir;
        _this._size = opts.fileNode.getTotalSize();
        _this._waiting_dirs = [];
        _this._fail_dirs = [];
        _this._sub_task_file_exist = false;
        _this._root_dir_create_done = false;

        _this._file_node.setPdirKey(opts.destDir.getId());
        _this._file_node.setPPdirKey(opts.destDir.getPdirKey());

        _this.createTaskQueue();
        return _this;
    }

    (0, _createClass3.default)(DirTask, [{
        key: 'hasSubTask',
        value: function hasSubTask() {
            return true;
        }
    }, {
        key: 'getFileNode',
        value: function getFileNode() {
            return this._file_node;
        }
    }, {
        key: 'getDestDirNode',
        value: function getDestDirNode() {
            return this._dest_dir;
        }
    }, {
        key: 'getName',
        value: function getName() {
            return this._file_node.getName() + '_DirTask';
        }
    }, {
        key: 'getProcessor',
        value: function getProcessor() {
            var cate = this._file_node.getCategory();
            var processor = _config2.default.processors[cate];

            if (!processor) {
                throw new Error('there is not config processor');
                return;
            }

            return processor;
        }
    }, {
        key: 'isFileExist',
        value: function isFileExist() {
            return !!this._sub_task_file_exist;
        }
    }, {
        key: 'createTaskQueue',
        value: function createTaskQueue() {
            var _this2 = this;

            if (this._task_queue) {
                return;
            }

            this._task_queue = new _TaskQueue2.default({
                name: this.getName() + ' taskQueue'
            });

            this._task_queue.$on('complete', function () {
                _this2.handleTaskQueueDone();
            });

            this._task_queue.$on('error', function () {
                _this2.handleTaskQueueDone();
            });

            this._task_queue.$on('pause', function () {
                _this2.changeState('pause');
            });
        }
    }, {
        key: 'handleTaskQueueDone',
        value: function handleTaskQueueDone() {
            var _this3 = this;

            var dir = this._waiting_dirs.shift();
            if (dir) {
                this.addTask(dir);
            } else {
                if (this._task_queue.getExecuteTasks().length || this._fail_dirs.length) {
                    this.setErrorInfo({
                        ret: 2002013,
                        msg: this._task_queue.getExecuteTasks().length + this._fail_dirs.length + '个文件（夹）上传失败'
                    });
                    setTimeout(function () {
                        _this3.changeState('error');
                    }, 0);
                } else {
                    setTimeout(function () {
                        _this3.changeState('done');
                    }, 0);
                }
            }
        }
    }, {
        key: 'getSubErrorDirTasks',
        value: function getSubErrorDirTasks() {
            var tasks = [];
            this._fail_dirs.forEach(function (dir) {
                var task = new DirTaskNode({
                    dir_name: dir.getName(),
                    dir_key: '__upload_dir__'
                });
                task.setErrorInfo(dir.getErrorInfo());
                task.changeState('error');
                tasks.push(task);
            });
            return tasks;
        }
    }, {
        key: 'getSubTasks',
        value: function getSubTasks() {
            return this._task_queue.getAllTasks();
        }
    }, {
        key: 'getSubExecuteTasks',
        value: function getSubExecuteTasks() {
            if (!this._task_queue) {
                return [];
            }
            return this._task_queue.getExecuteTasks();
        }
    }, {
        key: 'getSubDoneTasks',
        value: function getSubDoneTasks() {
            if (!this._task_queue) {
                return [];
            }
            return this._task_queue.getDoneTasks();
        }
    }, {
        key: 'canPause',
        value: function canPause() {
            return !!_support2.default.sliceUpload();
        }
    }, {
        key: 'calcProcessed',
        value: function calcProcessed() {
            if (!this._task_queue) {
                return 0;
            }

            var processedSize = 0;

            this._task_queue.getAllTasks().forEach(function (task) {
                if (task.getState() !== 'error') {
                    processedSize += task.getProcessed();
                }
            });

            this._processed = processedSize;

            this.$emit('processedchange', this._processed);
        }
    }, {
        key: 'calcSpeed',
        value: function calcSpeed() {
            var speed = 0;
            this._task_queue.getProcessTasks().forEach(function (task) {
                speed += task.getSpeed();
            });
            this._speed = speed;
            this.$emit('speedchange');
        }
    }, {
        key: 'start',
        value: function start() {
            var _this4 = this;

            this._task_queue.getExecuteTasks().forEach(function (task) {
                task.changeState('wait', true);
            });
            setTimeout(function () {
                _this4.changeState('readying');
            }, 0);
        }
    }, {
        key: 'readying',
        value: function readying() {
            var _this5 = this;

            if (this._root_dir_create_done) {
                setTimeout(function () {
                    _this5.changeState('readydone');
                }, 0);
                return;
            }

            if (!this._file_node) {
                this.changeState('stop');
                return;
            }

            var processor = this.getProcessor();

            processor.createDir(this, this._file_node).then(function (res) {
                _this5._file_node.setId(res.dir_key);
                _this5.addTask(_this5._file_node);
                _this5.changeState('readydone');
                _this5._root_dir_create_done = true;
            }).catch(function (error) {
                _this5.setErrorInfo(error);
                _this5.changeState('error');
            });
        }
    }, {
        key: 'addTask',
        value: function addTask(parentDir) {
            var _this6 = this;

            var kidDirs = parentDir.getKidDirs();
            var kidFiles = parentDir.getKidFiles();

            if (!kidDirs.length && !kidFiles.length) {
                this.handleTaskQueueDone();
                return;
            }

            kidFiles.forEach(function (kid) {
                kid.setCategory(_this6._file_node.getCategory());

                var task = new _FileTask2.default({
                    fileNode: kid,
                    destDir: parentDir
                });

                task.setParent(_this6);

                task.$on('processedchange', function () {
                    _this6.calcProcessed();
                });
                task.$on('speedchange', function () {
                    _this6.calcSpeed();
                });
                task.$on('statechange', function () {
                    if (task.getState() === 'done' && task.isFileExist()) {
                        _this6._sub_task_file_exist = true;
                    }
                });

                _this6._task_queue.tail(task);
            });

            if (kidFiles.length) {
                setTimeout(function () {
                    _this6._task_queue.run();
                }, 0);
            }

            kidDirs.length && this.createKidDirs(parentDir, kidDirs);
        }
    }, {
        key: 'createKidDirs',
        value: function createKidDirs(parentDir, kidDirs) {
            var _this7 = this;

            var tempKidDirs = kidDirs.splice(0, _config2.default.createDirThread);
            var dirLen = kidDirs.length;
            var tempDirLen = tempKidDirs.length;

            var processor = this.getProcessor();

            tempKidDirs.forEach(function (kid) {
                kid.setCategory(_this7._file_node.getCategory());
                kid.setPdirKey(parentDir.getId());
                processor.createDir(_this7, kid).then(function (res) {
                    kid.setId(res.dir_key);
                    _this7._waiting_dirs.push(kid);
                    res.pdir_key = parentDir.getId();
                    tempDirLen--;
                    if (_this7._task_queue.getExecuteCount() === 0 && dirLen === 0) {
                        _this7.handleTaskQueueDone();
                    } else if (tempDirLen === 0) {
                        _this7.createKidDirs(parentDir, kidDirs);
                    }
                }).catch(function (error) {
                    tempDirLen--;
                    kid.setErrorInfo(error);
                    _this7._fail_dirs.push(kid);
                });
            });
        }
    }, {
        key: 'process',
        value: function process() {
            if (this._task_queue.getState() === 'pause') {
                this._task_queue.restart();
            } else {
                this._task_queue.start();
            }
        }
    }, {
        key: 'done',
        value: function done() {
            this._waiting_dirs = null;
            this._fail_dirs = null;
        }
    }, {
        key: 'pause',
        value: function pause() {
            this._task_queue.pause();
        }
    }, {
        key: 'stop',
        value: function stop() {}
    }, {
        key: 'error',
        value: function error() {
            this._file_node.setErrorInfo(this._error_info);
        }
    }, {
        key: 'destroy',
        value: function destroy() {

            if (this.getState() === 'done') {
                this._task_queue.getDoneTasks().forEach(function (task) {
                    task.destroy();
                });
            } else {
                this._task_queue.getExecuteTasks().forEach(function (task) {
                    task.destroy();
                });
            }

            this.changeState('stop');

            this._file_node = null;
            this._dest_dir = null;
            this._waiting_dirs = null;
            this._fail_dirs = null;
        }
    }]);
    return DirTask;
}(_BaseTask3.default);

exports.default = DirTask;

/***/ }),

/***/ "qJ6A":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"mod-act-panel"},[_c('div',{staticClass:"mod-breadcrumb"},[_c('ul',{staticClass:"breadcrumb clearfix"},[_c('li',{staticClass:"item",on:{"click":_vm.goBack}},[_c('a',{attrs:{"href":"javascript:void(0)"}},[_vm._v("全部任务")])]),_vm._v(" "),_vm._l((_vm.taskItems),function(task,i){return _c('li',{key:i,staticClass:"item",class:{cur: i === _vm.taskItems.length - 1},on:{"click":function($event){_vm.goTask(task)}}},[_c('i',{staticClass:"icon icon-bread-next"}),_vm._v(" "),_c('i',{staticClass:"icon",class:{'icon-safebox-s' : task.getType() === 'belong' && task.getBelongInfo().name === 'safebox'}}),_vm._v(" "),_c('a',{attrs:{"href":"javascript:void(0)"}},[_vm._v(_vm._s(task.getType() === 'belong' && task.getBelongInfo().name === 'safebox' ? '保险箱' : task.getFileNode().getName()))])])})],2)])])}
var staticRenderFns = []


/***/ }),

/***/ "svmM":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _config = __webpack_require__("QIop");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function start() {
    var messageInit = function messageInit() {

        var encrypt = encryptInit();

        try {
            var body = document.body;
            body.tagName;
            return {
                postMessage: function postMessage(event) {
                    var _this = this;

                    var data = event.data;
                    var cmd = event.cmd;
                    if (cmd === 'start') {
                        var file = data.file;

                        encrypt.sha(file, function (res) {
                            _this.onmessage({
                                cmd: 'encryptdone',
                                data: {
                                    sha: res.sha,
                                    md5: res.md5,
                                    hash: res.hash,
                                    checkSha: res.checkSha,
                                    checkData: res.checkData
                                }
                            });
                        }, function (error) {
                            _this.onmessage({
                                cmd: 'encrypterror',
                                error: error
                            });
                        });
                        encrypt.onProcess(function (processed) {
                            _this.onmessage({
                                cmd: 'encryptprocess',
                                data: {
                                    processed: processed
                                }
                            });
                        });
                    } else if (cmd === 'pause') {
                        encrypt.pause();
                    }
                },
                imitateMessage: function imitateMessage(onmessage) {
                    this.onmessage = onmessage;
                },
                terminate: function terminate() {}
            };
        } catch (e) {
            onmessage = function onmessage(event) {
                var data = event.data.data;
                var cmd = event.data.cmd;
                if (cmd === 'start') {
                    var file = data.file;

                    encrypt.sha(file, function (res) {
                        postMessage({
                            cmd: 'encryptdone',
                            data: {
                                sha: res.sha,
                                md5: res.md5,
                                hash: res.hash,
                                checkSha: res.checkSha,
                                checkData: res.checkData
                            }
                        });
                    }, function (error) {
                        postMessage({
                            cmd: 'encrypterror',
                            error: error
                        });
                    });
                    encrypt.onProcess(function (processed) {
                        postMessage({
                            cmd: 'encryptprocess',
                            data: {
                                processed: processed
                            }
                        });
                    });
                } else if (cmd === 'pause') {
                    encrypt.pause();
                }
            };
        }
    };

    var getFragmentSize = function getFragmentSize() {
        try {
            return _config2.default.fragmentSize;
        } catch (error) {
            var KB1 = Math.pow(2, 10);

            var fragmentSize = 512 * KB1;
            return fragmentSize;
        }
    };

    var encryptInit = function encryptInit() {
        var fragment = getFragmentSize();
        var checkFragment = 128;
        var SHA = SHAInit();
        var MD5 = MD5Init();
        var pausing = false;
        var onProcessCallback = void 0;
        var lastProcessCallbackTime = 0;
        var shaObj = void 0;
        var md5Obj = void 0;
        var hashList = void 0;

        var sliceStart = 0;
        var sliceEnd = 0;

        function readerFile(file, start, end, succCallback, failCallback) {
            var h5FileReader = new FileReader();

            h5FileReader.onload = function (e) {
                succCallback(e.target.result);
            };

            h5FileReader.onerror = function (e) {
                failCallback(e);
            };

            h5FileReader.readAsArrayBuffer(blobFile(file, start, end));
        }

        function blobFile(file, start, end) {
            if (file.webkitSlice) {
                return file.webkitSlice(start, end);
            } else if (file.mozSlice) {
                return file.mozSlice(start, end);
            } else {
                return file.slice(start, end);
            }
        }

        function encryptSHA(file, succCallback, failCallback) {
            var fileSize = file.size;
            var sha = shaObj || new SHA(checkFragment);
            var md5 = md5Obj || new MD5();
            var tempHashList = hashList || [];
            var checkSha = void 0;
            var checkData = void 0;
            var checking = false;
            var checkLen = 0;
            var checkDataStart = 0;
            var checkDataEnd = 0;

            if (fileSize === 0) {
                failCallback({
                    'ret': 2002023,
                    'msg': 'fileSize equal 0，have moved or deleted'
                });
                return;
            }

            var handler = {
                onFileReaderHandler: function onFileReaderHandler(buffer) {
                    sha.append(buffer);
                    md5.append(buffer);
                    handler.onUpdateHandler();
                },
                onFileErrorHandler: function onFileErrorHandler(e) {
                    shaObj = null;
                    md5Obj = null;
                    tempHashList = null;
                    sliceStart = 0;
                    sliceEnd = 0;
                    failCallback({
                        'ret': 2002001,
                        'msg': '[encrypt]: ' + (e.target.error && (e.target.error.stack || e.target.error.message) + '' || e + '' || 'onFileErrorHandler') + ', name: ' + file.name + ', start: ' + sliceStart + ', end: ' + sliceEnd
                    });
                },

                onUpdateHandler: function onUpdateHandler() {
                    var hash = void 0;

                    if (sliceEnd < fileSize) {
                        if (pausing === true) {
                            tempHashList.push({
                                'sha': sha.getTempHash(),
                                'offset': sliceStart,
                                'size': sliceEnd - sliceStart
                            });
                            shaObj = sha;
                            md5Obj = md5;
                            hashList = tempHashList;
                            return;
                        }

                        if (checking) {
                            checkSha = sha.getTempHash();
                        } else {
                            tempHashList.push({
                                'sha': sha.getTempHash(),
                                'offset': sliceStart,
                                'size': sliceEnd - sliceStart
                            });

                            if (lastProcessCallbackTime === 0 || +new Date() - lastProcessCallbackTime > 1000) {
                                onProcessCallback(sliceEnd);
                                lastProcessCallbackTime = +new Date();
                            }
                        }

                        chunk();
                    } else {
                        hash = sha.end();
                        var md5Hash = md5.end();
                        tempHashList.push({
                            'sha': hash,
                            'offset': sliceStart - checkLen,
                            'size': sliceEnd - sliceStart + checkLen
                        });

                        var h5FileReader = new FileReader();
                        h5FileReader.onload = function (e) {
                            checkData = h5FileReader.result.slice(h5FileReader.result.indexOf("base64,") + 7);
                            if (fileSize < checkFragment) {
                                checkSha = hash;
                            }
                            succCallback({
                                sha: hash,
                                md5: md5Hash,
                                hash: tempHashList,
                                checkSha: checkSha,
                                checkData: checkData
                            });
                        };
                        h5FileReader.onerror = function (e) {
                            failCallback({
                                ret: 2002024,
                                msg: 'read check_data fail'
                            });
                        };

                        h5FileReader.readAsDataURL(blobFile(file, checkDataStart, checkDataEnd));
                    }
                }
            };

            function chunk() {
                sliceStart = sliceEnd;
                sliceEnd = Math.min(sliceStart + fragment, fileSize);
                if (sliceEnd === fileSize && !checking) {
                    if (sliceEnd - sliceStart > checkFragment) {
                        checking = true;

                        sliceEnd = sliceEnd - (sliceEnd % checkFragment === 0 ? checkFragment : sliceEnd % checkFragment);
                        checkLen = sliceEnd - sliceStart;

                        checkDataStart = sliceEnd;
                        checkDataEnd = fileSize;
                    } else {
                        checkSha = tempHashList.length && tempHashList[tempHashList.length - 1]['sha'];
                        checkDataStart = sliceStart;
                        checkDataEnd = sliceEnd;
                    }
                }
                readerFile(file, sliceStart, sliceEnd, handler.onFileReaderHandler, handler.onFileErrorHandler);
            }

            pausing = false;
            chunk();
        }

        function pause() {
            pausing = true;
        }

        function onProcess(fn) {
            onProcessCallback = fn;
        }

        return {
            sha: encryptSHA,
            pause: pause,
            onProcess: onProcess
        };
    };

    var MD5Init = function MD5Init() {

        'use strict';

        var add32 = function add32(a, b) {
            return a + b & 0xFFFFFFFF;
        },
            hex_chr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

        function cmn(q, a, b, x, s, t) {
            a = add32(add32(a, q), add32(x, t));
            return add32(a << s | a >>> 32 - s, b);
        }

        function md5cycle(x, k) {
            var a = x[0],
                b = x[1],
                c = x[2],
                d = x[3];
            a += (b & c | ~b & d) + k[0] - 680876936 | 0;a = (a << 7 | a >>> 25) + b | 0;
            d += (a & b | ~a & c) + k[1] - 389564586 | 0;d = (d << 12 | d >>> 20) + a | 0;
            c += (d & a | ~d & b) + k[2] + 606105819 | 0;c = (c << 17 | c >>> 15) + d | 0;
            b += (c & d | ~c & a) + k[3] - 1044525330 | 0;b = (b << 22 | b >>> 10) + c | 0;
            a += (b & c | ~b & d) + k[4] - 176418897 | 0;a = (a << 7 | a >>> 25) + b | 0;
            d += (a & b | ~a & c) + k[5] + 1200080426 | 0;d = (d << 12 | d >>> 20) + a | 0;
            c += (d & a | ~d & b) + k[6] - 1473231341 | 0;c = (c << 17 | c >>> 15) + d | 0;
            b += (c & d | ~c & a) + k[7] - 45705983 | 0;b = (b << 22 | b >>> 10) + c | 0;
            a += (b & c | ~b & d) + k[8] + 1770035416 | 0;a = (a << 7 | a >>> 25) + b | 0;
            d += (a & b | ~a & c) + k[9] - 1958414417 | 0;d = (d << 12 | d >>> 20) + a | 0;
            c += (d & a | ~d & b) + k[10] - 42063 | 0;c = (c << 17 | c >>> 15) + d | 0;
            b += (c & d | ~c & a) + k[11] - 1990404162 | 0;b = (b << 22 | b >>> 10) + c | 0;
            a += (b & c | ~b & d) + k[12] + 1804603682 | 0;a = (a << 7 | a >>> 25) + b | 0;
            d += (a & b | ~a & c) + k[13] - 40341101 | 0;d = (d << 12 | d >>> 20) + a | 0;
            c += (d & a | ~d & b) + k[14] - 1502002290 | 0;c = (c << 17 | c >>> 15) + d | 0;
            b += (c & d | ~c & a) + k[15] + 1236535329 | 0;b = (b << 22 | b >>> 10) + c | 0;
            a += (b & d | c & ~d) + k[1] - 165796510 | 0;a = (a << 5 | a >>> 27) + b | 0;
            d += (a & c | b & ~c) + k[6] - 1069501632 | 0;d = (d << 9 | d >>> 23) + a | 0;
            c += (d & b | a & ~b) + k[11] + 643717713 | 0;c = (c << 14 | c >>> 18) + d | 0;
            b += (c & a | d & ~a) + k[0] - 373897302 | 0;b = (b << 20 | b >>> 12) + c | 0;
            a += (b & d | c & ~d) + k[5] - 701558691 | 0;a = (a << 5 | a >>> 27) + b | 0;
            d += (a & c | b & ~c) + k[10] + 38016083 | 0;d = (d << 9 | d >>> 23) + a | 0;
            c += (d & b | a & ~b) + k[15] - 660478335 | 0;c = (c << 14 | c >>> 18) + d | 0;
            b += (c & a | d & ~a) + k[4] - 405537848 | 0;b = (b << 20 | b >>> 12) + c | 0;
            a += (b & d | c & ~d) + k[9] + 568446438 | 0;a = (a << 5 | a >>> 27) + b | 0;
            d += (a & c | b & ~c) + k[14] - 1019803690 | 0;d = (d << 9 | d >>> 23) + a | 0;
            c += (d & b | a & ~b) + k[3] - 187363961 | 0;c = (c << 14 | c >>> 18) + d | 0;
            b += (c & a | d & ~a) + k[8] + 1163531501 | 0;b = (b << 20 | b >>> 12) + c | 0;
            a += (b & d | c & ~d) + k[13] - 1444681467 | 0;a = (a << 5 | a >>> 27) + b | 0;
            d += (a & c | b & ~c) + k[2] - 51403784 | 0;d = (d << 9 | d >>> 23) + a | 0;
            c += (d & b | a & ~b) + k[7] + 1735328473 | 0;c = (c << 14 | c >>> 18) + d | 0;
            b += (c & a | d & ~a) + k[12] - 1926607734 | 0;b = (b << 20 | b >>> 12) + c | 0;
            a += (b ^ c ^ d) + k[5] - 378558 | 0;a = (a << 4 | a >>> 28) + b | 0;
            d += (a ^ b ^ c) + k[8] - 2022574463 | 0;d = (d << 11 | d >>> 21) + a | 0;
            c += (d ^ a ^ b) + k[11] + 1839030562 | 0;c = (c << 16 | c >>> 16) + d | 0;
            b += (c ^ d ^ a) + k[14] - 35309556 | 0;b = (b << 23 | b >>> 9) + c | 0;
            a += (b ^ c ^ d) + k[1] - 1530992060 | 0;a = (a << 4 | a >>> 28) + b | 0;
            d += (a ^ b ^ c) + k[4] + 1272893353 | 0;d = (d << 11 | d >>> 21) + a | 0;
            c += (d ^ a ^ b) + k[7] - 155497632 | 0;c = (c << 16 | c >>> 16) + d | 0;
            b += (c ^ d ^ a) + k[10] - 1094730640 | 0;b = (b << 23 | b >>> 9) + c | 0;
            a += (b ^ c ^ d) + k[13] + 681279174 | 0;a = (a << 4 | a >>> 28) + b | 0;
            d += (a ^ b ^ c) + k[0] - 358537222 | 0;d = (d << 11 | d >>> 21) + a | 0;
            c += (d ^ a ^ b) + k[3] - 722521979 | 0;c = (c << 16 | c >>> 16) + d | 0;
            b += (c ^ d ^ a) + k[6] + 76029189 | 0;b = (b << 23 | b >>> 9) + c | 0;
            a += (b ^ c ^ d) + k[9] - 640364487 | 0;a = (a << 4 | a >>> 28) + b | 0;
            d += (a ^ b ^ c) + k[12] - 421815835 | 0;d = (d << 11 | d >>> 21) + a | 0;
            c += (d ^ a ^ b) + k[15] + 530742520 | 0;c = (c << 16 | c >>> 16) + d | 0;
            b += (c ^ d ^ a) + k[2] - 995338651 | 0;b = (b << 23 | b >>> 9) + c | 0;
            a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;a = (a << 6 | a >>> 26) + b | 0;
            d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;d = (d << 10 | d >>> 22) + a | 0;
            c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;c = (c << 15 | c >>> 17) + d | 0;
            b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;b = (b << 21 | b >>> 11) + c | 0;
            a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;a = (a << 6 | a >>> 26) + b | 0;
            d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;d = (d << 10 | d >>> 22) + a | 0;
            c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;c = (c << 15 | c >>> 17) + d | 0;
            b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;b = (b << 21 | b >>> 11) + c | 0;
            a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;a = (a << 6 | a >>> 26) + b | 0;
            d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;d = (d << 10 | d >>> 22) + a | 0;
            c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;c = (c << 15 | c >>> 17) + d | 0;
            b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;b = (b << 21 | b >>> 11) + c | 0;
            a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;a = (a << 6 | a >>> 26) + b | 0;
            d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;d = (d << 10 | d >>> 22) + a | 0;
            c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;c = (c << 15 | c >>> 17) + d | 0;
            b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;b = (b << 21 | b >>> 11) + c | 0;
            x[0] = a + x[0] | 0;x[1] = b + x[1] | 0;x[2] = c + x[2] | 0;x[3] = d + x[3] | 0;
        }

        function md5blk_array(a) {
            var md5blks = [],
                i;
            for (i = 0; i < 64; i += 4) {
                md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24);
            }
            return md5blks;
        }

        function md51_array(a) {
            var n = a.length,
                state = [1732584193, -271733879, -1732584194, 271733878],
                i,
                length,
                tail,
                tmp,
                lo,
                hi;
            for (i = 64; i <= n; i += 64) {
                md5cycle(state, md5blk_array(a.subarray(i - 64, i)));
            }
            a = i - 64 < n ? a.subarray(i - 64) : new Uint8Array(0);
            length = a.length;
            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            for (i = 0; i < length; i += 1) {
                tail[i >> 2] |= a[i] << (i % 4 << 3);
            }
            tail[i >> 2] |= 0x80 << (i % 4 << 3);
            if (i > 55) {
                md5cycle(state, tail);
                for (i = 0; i < 16; i += 1) {
                    tail[i] = 0;
                }
            }
            tmp = n * 8;
            tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
            lo = parseInt(tmp[2], 16);
            hi = parseInt(tmp[1], 16) || 0;
            tail[14] = lo;tail[15] = hi;
            md5cycle(state, tail);
            return state;
        }

        function rhex(n) {
            var s = '',
                j;
            for (j = 0; j < 4; j += 1) {
                s += hex_chr[n >> j * 8 + 4 & 0x0F] + hex_chr[n >> j * 8 & 0x0F];
            }
            return s;
        }

        function hex(x) {
            var i;
            for (i = 0; i < x.length; i += 1) {
                x[i] = rhex(x[i]);
            }
            return x.join('');
        }

        function concatenateArrayBuffers(first, second, returnUInt8Array) {
            var result = new Uint8Array(first.byteLength + second.byteLength);
            result.set(new Uint8Array(first));
            result.set(new Uint8Array(second), first.byteLength);
            return returnUInt8Array ? result : result.buffer;
        }

        function SparkMD5ArrayBuffer() {
            this.reset();
        }

        SparkMD5ArrayBuffer.prototype.append = function (arr) {
            var buff = concatenateArrayBuffers(this._buff.buffer, arr, true),
                length = buff.length,
                i;
            this._length += arr.byteLength;
            for (i = 64; i <= length; i += 64) {
                md5cycle(this._hash, md5blk_array(buff.subarray(i - 64, i)));
            }
            this._buff = i - 64 < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);
            return this;
        };

        SparkMD5ArrayBuffer.prototype.end = function (raw) {
            var buff = this._buff,
                length = buff.length,
                tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                i,
                ret;
            for (i = 0; i < length; i += 1) {
                tail[i >> 2] |= buff[i] << (i % 4 << 3);
            }
            this._finish(tail, length);
            ret = hex(this._hash);
            this.reset();
            return ret;
        };

        SparkMD5ArrayBuffer.prototype.reset = function () {
            this._buff = new Uint8Array(0);
            this._length = 0;
            this._hash = [1732584193, -271733879, -1732584194, 271733878];
            return this;
        };

        SparkMD5ArrayBuffer.prototype.getState = function () {
            var state = {
                buff: this._buff,
                length: this._length,
                hash: this._hash.slice()
            };
            return state;
        };

        SparkMD5ArrayBuffer.prototype.setState = function (state) {
            this._buff = state.buff;
            this._length = state.length;
            this._hash = state.hash;
            return this;
        };

        SparkMD5ArrayBuffer.prototype.destroy = function () {
            delete this._hash;
            delete this._buff;
            delete this._length;
        };

        SparkMD5ArrayBuffer.prototype._finish = function (tail, length) {
            var i = length,
                tmp,
                lo,
                hi;
            tail[i >> 2] |= 0x80 << (i % 4 << 3);
            if (i > 55) {
                md5cycle(this._hash, tail);
                for (i = 0; i < 16; i += 1) {
                    tail[i] = 0;
                }
            }
            tmp = this._length * 8;
            tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
            lo = parseInt(tmp[2], 16);
            hi = parseInt(tmp[1], 16) || 0;
            tail[14] = lo;tail[15] = hi;
            md5cycle(this._hash, tail);
        };

        return SparkMD5ArrayBuffer;
    };

    var SHAInit = function SHAInit() {
        var padlen = function padlen(len) {
            for (len += 9; len % 64 > 0; len += 1) {}
            return len;
        };
        var padZeroes = function padZeroes(bin, len) {
            var h8 = new Uint8Array(bin.buffer);
            var om = len % 4;
            var align = len - om;
            switch (om) {
                case 0:
                    h8[align + 3] = 0;
                case 1:
                    h8[align + 2] = 0;
                case 2:
                    h8[align + 1] = 0;
                case 3:
                    h8[align + 0] = 0;
            }
            for (var i = (len >> 2) + 1; i < bin.length; i++) {
                bin[i] = 0;
            }
        };
        var padData = function padData(bin, chunkLen, msgLen) {
            bin[chunkLen >> 2] |= 0x80 << 24 - (chunkLen % 4 << 3);

            bin[((chunkLen >> 2) + 2 & ~0x0f) + 14] = msgLen / (1 << 29) | 0;
            bin[((chunkLen >> 2) + 2 & ~0x0f) + 15] = msgLen << 3;
        };
        var hex = function hex(arrayBuffer) {
            var i,
                x,
                hex_tab = '0123456789abcdef',
                res = '',
                binarray = new Uint8Array(arrayBuffer);
            for (i = 0; i < binarray.length; i++) {
                x = binarray[i];
                res += hex_tab.charAt(x >> 4 & 15) + hex_tab.charAt(x >> 0 & 15);
            }
            return res;
        };
        var ceilHeapSize = function ceilHeapSize(v) {
            var p;
            if (v <= 65536) return 65536;
            if (v < 16777216) {
                for (p = 65536; p < v; p = p << 1) {}
            } else {
                for (p = 16777216; p < v; p += 16777216) {}
            }
            return p;
        };
        var getRawDigest = function getRawDigest(heap, padMaxChunkLen) {
            var io = new Int32Array(heap, padMaxChunkLen + 320, 5);
            var out = new Int32Array(5);
            var arr = new DataView(out.buffer);
            arr.setInt32(0, io[0], false);
            arr.setInt32(4, io[1], false);
            arr.setInt32(8, io[2], false);
            arr.setInt32(12, io[3], false);
            arr.setInt32(16, io[4], false);
            return out;
        };
        function Rusha(chunkSize) {
            'use strict';

            var self$2 = {};
            chunkSize = chunkSize || 64 * 1024;
            if (chunkSize % 64 > 0) {
                throw new Error('Chunk size must be a multiple of 128 bit');
            }
            self$2.offset = 0;
            self$2.maxChunkLen = chunkSize;
            self$2.padMaxChunkLen = padlen(chunkSize);

            self$2.heap = new ArrayBuffer(ceilHeapSize(self$2.padMaxChunkLen + 320 + 20));
            self$2.h32 = new Int32Array(self$2.heap);
            self$2.h8 = new Int8Array(self$2.heap);
            self$2.core = new Rusha._core({ Int32Array: Int32Array }, {}, self$2.heap);

            self$2.tempHash = [];
            initState();
            function initState() {
                self$2.offset = 0;
                var io = new Int32Array(self$2.heap, self$2.padMaxChunkLen + 320, 5);
                io[0] = 1732584193;
                io[1] = -271733879;
                io[2] = -1732584194;
                io[3] = 271733878;
                io[4] = -1009589776;
            }
            function convBuf(buf, start, len, offset) {
                var om = offset % 4;
                var lm = (len + om) % 4;
                var j = len - lm;
                switch (om) {
                    case 0:
                        self$2.h8[offset] = buf[start + 3];
                    case 1:
                        self$2.h8[offset + 1 - (om << 1) | 0] = buf[start + 2];
                    case 2:
                        self$2.h8[offset + 2 - (om << 1) | 0] = buf[start + 1];
                    case 3:
                        self$2.h8[offset + 3 - (om << 1) | 0] = buf[start];
                }
                if (len < lm + om) {
                    return;
                }
                for (var i = 4 - om; i < j; i = i + 4 | 0) {
                    self$2.h32[offset + i >> 2 | 0] = buf[start + i] << 24 | buf[start + i + 1] << 16 | buf[start + i + 2] << 8 | buf[start + i + 3];
                }
                switch (lm) {
                    case 3:
                        self$2.h8[offset + j + 1 | 0] = buf[start + j + 2];
                    case 2:
                        self$2.h8[offset + j + 2 | 0] = buf[start + j + 1];
                    case 1:
                        self$2.h8[offset + j + 3 | 0] = buf[start + j];
                }
            }
            ;
            var rawDigest = this.rawDigest = function (msg) {
                var msgLen = msg.byteLength;
                initState();
                msg = new Uint8Array(msg);
                var chunkLen = self$2.maxChunkLen;
                var chunkOffset = 0;
                for (; chunkOffset + chunkLen < msgLen; chunkOffset += chunkLen) {
                    convBuf(msg, chunkOffset, chunkLen, 0);
                    self$2.core.hash(chunkLen, self$2.padMaxChunkLen);
                }
                chunkLen = msgLen - chunkOffset;
                var padChunkLen = padlen(chunkLen);
                var view = new Int32Array(self$2.heap, 0, padChunkLen >> 2);
                convBuf(msg, chunkOffset, chunkLen, 0);
                padZeroes(view, chunkLen);
                padData(view, chunkLen, msgLen);
                self$2.core.hash(padChunkLen, self$2.padMaxChunkLen);
                return getRawDigest(self$2.heap, self$2.padMaxChunkLen);
            };

            this.digest = function (msg) {
                return hex(rawDigest(msg).buffer);
            };
            var reset = this.reset = function () {
                initState();
            };
            this.append = function (chunk) {
                var chunkOffset = 0;
                var chunkLen = chunk.byteLength;
                var turnOffset = self$2.offset % self$2.maxChunkLen;
                chunk = new Uint8Array(chunk);
                self$2.offset += chunkLen;
                while (chunkOffset < chunkLen) {
                    var inputLen = Math.min(chunkLen - chunkOffset, self$2.maxChunkLen - turnOffset);
                    convBuf(chunk, chunkOffset, inputLen, turnOffset);
                    turnOffset += inputLen;
                    chunkOffset += inputLen;
                    if (turnOffset === self$2.maxChunkLen) {
                        self$2.core.hash(self$2.maxChunkLen, self$2.padMaxChunkLen);
                        turnOffset = 0;
                    }
                }
            };

            this.getTempHash = function () {
                var state = this.getState();
                var binarray = state.io;
                var hex_tab = "0123456789abcdef",
                    str = "",
                    temp = "",
                    length = binarray.length,
                    i,
                    j,
                    k,
                    srcByte;

                for (i = 0; i < length; i += 1) {
                    for (j = 0; j < 4; j += 1) {
                        k = i * 4 + j;

                        srcByte = binarray[k >>> 2] >>> (3 - k % 4) * 8;
                        temp += hex_tab.charAt(srcByte >>> 4 & 0xF) + hex_tab.charAt(srcByte & 0xF);
                    }
                    str += temp.match(/(\w\w)(\w\w)(\w\w)(\w\w)/).slice(1).reverse().join('');
                    temp = "";
                }

                this.setState(state);

                return str;
            };

            this.arraybuffer2binb = function (arr, existingBin, existingBinLen) {
                var bin = [],
                    i,
                    existingByteLen,
                    intOffset,
                    byteOffset;

                bin = existingBin || [0];
                existingBinLen = existingBinLen || 0;
                existingByteLen = existingBinLen >>> 3;

                for (i = 0; i < arr.byteLength; i += 1) {
                    byteOffset = i + existingByteLen;
                    intOffset = byteOffset >>> 2;
                    if (bin.length <= intOffset) {
                        bin.push(0);
                    }
                    bin[intOffset] |= arr[i] << 8 * (3 - byteOffset % 4);
                }

                return bin;
            };

            var rawEnd = this.rawEnd = function () {
                var msgLen = self$2.offset;
                var chunkLen = msgLen % self$2.maxChunkLen;
                var padChunkLen = padlen(chunkLen);
                var view = new Int32Array(self$2.heap, 0, padChunkLen >> 2);
                padZeroes(view, chunkLen);
                padData(view, chunkLen, msgLen);
                self$2.core.hash(padChunkLen, self$2.padMaxChunkLen);
                var result = getRawDigest(self$2.heap, self$2.padMaxChunkLen);
                initState();
                return result;
            };
            this.end = function () {
                return hex(rawEnd().buffer);
            };
            this.getState = function () {

                var turnOffset = self$2.offset % self$2.maxChunkLen,
                    heap;

                if (!turnOffset) {
                    var io = new Int32Array(self$2.heap, self$2.padMaxChunkLen + 320, 5);
                    heap = io.buffer.slice(io.byteOffset, io.byteOffset + io.byteLength);
                } else {
                    heap = self$2.heap.slice(0);
                }

                return {
                    offset: self$2.offset,
                    heap: heap,
                    io: io
                };
            };
            this.setState = function (state) {
                self$2.offset = state.offset;
                if (state.heap.byteLength === 20) {
                    var io = new Int32Array(self$2.heap, self$2.padMaxChunkLen + 320, 5);
                    io.set(new Int32Array(state.heap));
                } else {
                    self$2.h32.set(new Int32Array(state.heap));
                }
            };
        }
        ;

        Rusha._core = function RushaCore(stdlib, foreign, heap) {
            var H = new stdlib.Int32Array(heap);
            function hash(k, x) {
                k = k | 0;
                x = x | 0;
                var i = 0,
                    j = 0,
                    y0 = 0,
                    z0 = 0,
                    y1 = 0,
                    z1 = 0,
                    y2 = 0,
                    z2 = 0,
                    y3 = 0,
                    z3 = 0,
                    y4 = 0,
                    z4 = 0,
                    t0 = 0,
                    t1 = 0;
                y0 = H[x + 320 >> 2] | 0;
                y1 = H[x + 324 >> 2] | 0;
                y2 = H[x + 328 >> 2] | 0;
                y3 = H[x + 332 >> 2] | 0;
                y4 = H[x + 336 >> 2] | 0;
                for (i = 0; (i | 0) < (k | 0); i = i + 64 | 0) {
                    z0 = y0;
                    z1 = y1;
                    z2 = y2;
                    z3 = y3;
                    z4 = y4;
                    for (j = 0; (j | 0) < 64; j = j + 4 | 0) {
                        t1 = H[i + j >> 2] | 0;
                        t0 = ((y0 << 5 | y0 >>> 27) + (y1 & y2 | ~y1 & y3) | 0) + ((t1 + y4 | 0) + 1518500249 | 0) | 0;
                        y4 = y3;
                        y3 = y2;
                        y2 = y1 << 30 | y1 >>> 2;
                        y1 = y0;
                        y0 = t0;
                        H[k + j >> 2] = t1;
                    }
                    for (j = k + 64 | 0; (j | 0) < (k + 80 | 0); j = j + 4 | 0) {
                        t1 = (H[j - 12 >> 2] ^ H[j - 32 >> 2] ^ H[j - 56 >> 2] ^ H[j - 64 >> 2]) << 1 | (H[j - 12 >> 2] ^ H[j - 32 >> 2] ^ H[j - 56 >> 2] ^ H[j - 64 >> 2]) >>> 31;
                        t0 = ((y0 << 5 | y0 >>> 27) + (y1 & y2 | ~y1 & y3) | 0) + ((t1 + y4 | 0) + 1518500249 | 0) | 0;
                        y4 = y3;
                        y3 = y2;
                        y2 = y1 << 30 | y1 >>> 2;
                        y1 = y0;
                        y0 = t0;
                        H[j >> 2] = t1;
                    }
                    for (j = k + 80 | 0; (j | 0) < (k + 160 | 0); j = j + 4 | 0) {
                        t1 = (H[j - 12 >> 2] ^ H[j - 32 >> 2] ^ H[j - 56 >> 2] ^ H[j - 64 >> 2]) << 1 | (H[j - 12 >> 2] ^ H[j - 32 >> 2] ^ H[j - 56 >> 2] ^ H[j - 64 >> 2]) >>> 31;
                        t0 = ((y0 << 5 | y0 >>> 27) + (y1 ^ y2 ^ y3) | 0) + ((t1 + y4 | 0) + 1859775393 | 0) | 0;
                        y4 = y3;
                        y3 = y2;
                        y2 = y1 << 30 | y1 >>> 2;
                        y1 = y0;
                        y0 = t0;
                        H[j >> 2] = t1;
                    }
                    for (j = k + 160 | 0; (j | 0) < (k + 240 | 0); j = j + 4 | 0) {
                        t1 = (H[j - 12 >> 2] ^ H[j - 32 >> 2] ^ H[j - 56 >> 2] ^ H[j - 64 >> 2]) << 1 | (H[j - 12 >> 2] ^ H[j - 32 >> 2] ^ H[j - 56 >> 2] ^ H[j - 64 >> 2]) >>> 31;
                        t0 = ((y0 << 5 | y0 >>> 27) + (y1 & y2 | y1 & y3 | y2 & y3) | 0) + ((t1 + y4 | 0) - 1894007588 | 0) | 0;
                        y4 = y3;
                        y3 = y2;
                        y2 = y1 << 30 | y1 >>> 2;
                        y1 = y0;
                        y0 = t0;
                        H[j >> 2] = t1;
                    }
                    for (j = k + 240 | 0; (j | 0) < (k + 320 | 0); j = j + 4 | 0) {
                        t1 = (H[j - 12 >> 2] ^ H[j - 32 >> 2] ^ H[j - 56 >> 2] ^ H[j - 64 >> 2]) << 1 | (H[j - 12 >> 2] ^ H[j - 32 >> 2] ^ H[j - 56 >> 2] ^ H[j - 64 >> 2]) >>> 31;
                        t0 = ((y0 << 5 | y0 >>> 27) + (y1 ^ y2 ^ y3) | 0) + ((t1 + y4 | 0) - 899497514 | 0) | 0;
                        y4 = y3;
                        y3 = y2;
                        y2 = y1 << 30 | y1 >>> 2;
                        y1 = y0;
                        y0 = t0;
                        H[j >> 2] = t1;
                    }
                    y0 = y0 + z0 | 0;
                    y1 = y1 + z1 | 0;
                    y2 = y2 + z2 | 0;
                    y3 = y3 + z3 | 0;
                    y4 = y4 + z4 | 0;
                }
                H[x + 320 >> 2] = y0;
                H[x + 324 >> 2] = y1;
                H[x + 328 >> 2] = y2;
                H[x + 332 >> 2] = y3;
                H[x + 336 >> 2] = y4;
            }
            return { hash: hash };
        };

        return Rusha;
    };

    return messageInit();
}

exports.default = {
    start: start
};

/***/ }),

/***/ "tLAN":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _upload = __webpack_require__("1p47");

var _upload2 = _interopRequireDefault(_upload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _upload2.default;

/***/ }),

/***/ "tf/G":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tree = __webpack_require__("jngM");

var _tree2 = _interopRequireDefault(_tree);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _tree2.default;

/***/ }),

/***/ "uOK7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _uploader = __webpack_require__("DL6F");

var _uploader2 = _interopRequireDefault(_uploader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _uploader2.default;

/***/ }),

/***/ "ub9P":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__("Dd8w");

var _extends3 = _interopRequireDefault(_extends2);

var _toConsumableArray2 = __webpack_require__("Gu7T");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _stringify = __webpack_require__("mvHQ");

var _stringify2 = _interopRequireDefault(_stringify);

var _promise = __webpack_require__("//Fk");

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = __webpack_require__("Zrlr");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__("wxAW");

var _createClass3 = _interopRequireDefault(_createClass2);

var _axios = __webpack_require__("mtWM");

var _axios2 = _interopRequireDefault(_axios);

var _cookie = __webpack_require__("bm5r");

var _cookie2 = _interopRequireDefault(_cookie);

var _report = __webpack_require__("Vyex");

var _report2 = _interopRequireDefault(_report);

var _constants = __webpack_require__("4Uv1");

var _constants2 = _interopRequireDefault(_constants);

var _config = __webpack_require__("QIop");

var _config2 = _interopRequireDefault(_config);

var _speedDetect = __webpack_require__("ugtg");

var _speedDetect2 = _interopRequireDefault(_speedDetect);

var _account = __webpack_require__("TH1B");

var _account2 = _interopRequireDefault(_account);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UPLOAD_STATE = {
    CONTINUE: 1,
    FINISHED: 2,
    WAIT_OTHER: 3 };

var ERROR_CODES = {
    NO_CHANNEL: 2002004,
    UPLOAD_FAILED: 2002005,
    UPLOAD_STATE_ERROR: 2002006,
    JSON_PARSE_ERROR: 2002003,
    SERVER_ERROR: 2002020,
    TIMEOUT: 2002025,
    CANCELED: 2002026,
    NETWORK_ERROR: 2002021,
    REQUEST_ERROR: 2002022,
    FILE_DELETED: 2002027,
    BLOB_ERROR: 2002028,
    GATEWAY_BLOCKED: 2002029
};

var REQUEST_TIMEOUT = 120000;
var Slice = function () {
    function Slice(task) {
        (0, _classCallCheck3.default)(this, Slice);

        this.task = task;
        this._error_retry = 0;
        this._has2002021 = false;
        this._pre_upload_info = null;
        this._channel_info = {
            loaded_map: {},
            waiting: [],
            holding: [],
            channel_count: 1,
            ext_channel_count: 0,
            orig_channel_count: 0,
            flow_state: 0 };
    }

    (0, _createClass3.default)(Slice, [{
        key: 'upload',
        value: function upload() {
            if (this._shouldResumeUpload()) {
                this._resumeUpload();
                return;
            }

            this.preUpload().then(this._handlePreUploadSuccess.bind(this)).catch(this._handlePreUploadError.bind(this));
        }
    }, {
        key: '_shouldResumeUpload',
        value: function _shouldResumeUpload() {
            return this.task.getProcessed() > 0 || this._channel_info.holding && this._channel_info.holding.length > 0;
        }
    }, {
        key: '_resumeUpload',
        value: function _resumeUpload() {
            var _this = this;

            var holding = this._channel_info.holding;


            if (holding && holding.length > 0) {
                this._channel_info.channel_count = holding.length;
                holding.forEach(function (info) {
                    return _this.uploadPiece(info);
                });
                this.task.log('start holding');
                this._channel_info.holding = [];
            } else if (this.task.getProcessed() === this.task.getSize()) {
                setTimeout(function () {
                    _this.task.changeState('done');
                }, 0);
            }
        }
    }, {
        key: '_handlePreUploadSuccess',
        value: function _handlePreUploadSuccess(result) {
            this._error_retry = 0;
            if (this._isTaskStoppedOrPaused()) {
                return;
            }

            this._pre_upload_info = result;
            this.task.handlePreUploadDone(result);

            if (this._isFileAlreadyExists(result)) {
                this._handleFileExists();
            } else {
                this._startChannelUpload(result);
            }
        }
    }, {
        key: '_isTaskStoppedOrPaused',
        value: function _isTaskStoppedOrPaused() {
            var state = this.task.getState();
            if (state === 'stop') {
                this.task.log('preUpload: but task has stop');
                return true;
            }
            if (state === 'pause') {
                this.task.log('preUpload: but task has pause');
                return true;
            }
            return false;
        }
    }, {
        key: '_isFileAlreadyExists',
        value: function _isFileAlreadyExists(result) {
            return result.file_exist || result.upload_state === UPLOAD_STATE.FINISHED;
        }
    }, {
        key: '_handleFileExists',
        value: function _handleFileExists() {
            this.task.setProcessed(this.task.getSize());
            this.task.changeState('done');
        }
    }, {
        key: '_startChannelUpload',
        value: function _startChannelUpload(result) {
            this._channel_info.orig_channel_count = result.channel_list.length;
            this._channel_info.channel_count = result.channel_list.length;
            this._channel_info.ext_channel_count = result.ext_channel_count;
            this.task.setChannelCount(result.channel_list.length);

            if (this._channel_info.flow_state === 1) {
                this.task.setSpeedUp(true);
            }

            this.uploadPiece(result);
        }
    }, {
        key: '_handlePreUploadError',
        value: function _handlePreUploadError(error) {
            if (this._error_retry > _config2.default.retryCount - 1 || !_config2.default.retMsgs.canRetry(error.ret)) {
                this.task.log('preUpload error: ' + error.ret + ' ' + error.msg);
                this.task.setErrorInfo(error);
                this.task.changeState('error');
            } else {
                this._retryPreUpload();
            }
        }
    }, {
        key: '_retryPreUpload',
        value: function _retryPreUpload() {
            var _this2 = this;

            this._error_retry++;

            var retryDelay = Math.pow(2, this._error_retry) * 3000;
            setTimeout(function () {
                _this2.upload();
            }, retryDelay);

            this.task.log('preUpload retry: ' + this._error_retry);
            this.task.setHasDoAuthTry(true);
        }
    }, {
        key: 'preUpload',
        value: function preUpload() {
            var _this3 = this;

            return new _promise2.default(function (resolve, reject) {
                var data = _this3.task.beforePreUpload();
                var isOpenId = _account2.default.getType().indexOf('openid') > -1;
                var uploadRequest = isOpenId ? _this3.preUploadRequest.bind(_this3) : _this3.uploadRequest.bind(_this3);

                uploadRequest({
                    cmd: 247120,
                    name: 'PreUpload',
                    extReqHead: data.req.extReqHead,
                    data: {
                        req: data.req.reqData,
                        blob: data.blob
                    }
                }).then(resolve).catch(reject);
            });
        }
    }, {
        key: 'uploadPiece',
        value: function uploadPiece(info) {
            if (this.task.getState() === 'error') {
                this._channel_info.holding.push(info);
                return;
            }

            var uploadState = info.upload_state;

            switch (uploadState) {
                case UPLOAD_STATE.CONTINUE:
                    this._handleContinueUpload(info);
                    break;
                case UPLOAD_STATE.FINISHED:
                    this._handleUploadFinished();
                    break;
                case UPLOAD_STATE.WAIT_OTHER:
                    this._handleWaitOther(info);
                    break;
                default:
                    this._handleInvalidUploadState(info);
            }
        }
    }, {
        key: '_handleContinueUpload',
        value: function _handleContinueUpload(info) {
            var _this4 = this;

            if (!info.channel_list && info.channel) {
                info.channel_list = [info.channel];
            }

            if (!info.channel_list || !info.channel_list.length) {
                this._setTaskError(ERROR_CODES.NO_CHANNEL, '上传通道中断，没有上传的通道信息');
                return;
            }

            info.channel_list.forEach(function (channel) {
                _this4._uploadChannel({
                    upload_key: _this4._pre_upload_info.upload_key,
                    channel: channel,
                    ex: info.ex
                }, info);
            });
        }
    }, {
        key: '_uploadChannel',
        value: function _uploadChannel(uploadData, originInfo) {
            var _this5 = this;

            this.doUploadPiece(uploadData).then(function (result) {
                return _this5._handlePieceSuccess(result);
            }).catch(function (error) {
                return _this5._handlePieceError(error, originInfo);
            });

            this._error_retry = 0;
        }
    }, {
        key: '_handlePieceSuccess',
        value: function _handlePieceSuccess(result) {
            var taskState = this.task.getState();

            if (taskState === 'stop') {
                return;
            }

            if (taskState === 'pause') {
                this._channel_info.holding.push(result);
                this.task.log('holding: ' + (0, _stringify2.default)(result));
            } else {
                this.uploadPiece(result);
                this.task.handleUploadPieceDone(result);
            }
        }
    }, {
        key: '_handlePieceError',
        value: function _handlePieceError(error, originInfo) {
            var taskState = this.task.getState();

            if (taskState === 'stop') {
                return;
            }

            if (taskState === 'pause') {
                this._channel_info.holding.push(originInfo);
                return;
            }

            if (!_config2.default.retMsgs.canRetry(error.ret)) {
                this._handleFatalError(error, originInfo);
            } else if (error.ret === -89012) {
                this._handleTimeoutError();
            } else {
                this._handleRetryableError(error, originInfo);
            }
        }
    }, {
        key: '_handleFatalError',
        value: function _handleFatalError(error, info) {
            this._channel_info.holding.push(info);
            this._setTaskError(error.ret, error.msg, error.trace);
        }
    }, {
        key: '_handleTimeoutError',
        value: function _handleTimeoutError() {
            this._channel_info.channel_count--;
            this.task.log('error by 5min out of time, channel_count: ' + this._channel_info.channel_count);

            if (this._channel_info.channel_count === 0) {
                this.task.log('error by 5min out of time, retry check file');
                this._channel_info.holding = [];
                this.task.setProcessed(0);
                this.upload();
            }
        }
    }, {
        key: '_handleRetryableError',
        value: function _handleRetryableError(error, info) {
            error.uploadData.upload_state = UPLOAD_STATE.CONTINUE;
            this._channel_info.waiting.push(error.uploadData);
            this._channel_info.channel_count--;

            this.task.log('go wait when request error: ' + error.ret + ', channel: ' + this._channel_info.channel_count + ', uploadData: ' + (0, _stringify2.default)(error.uploadData, null, '\t'));

            if (this._shouldRetry()) {
                this._retryWaitingChannels();
            } else if (this._error_retry >= _config2.default.retryCount) {
                this._handleMaxRetryReached(error, info);
            }
        }
    }, {
        key: '_shouldRetry',
        value: function _shouldRetry() {
            return this._channel_info.channel_count === 0 && this._error_retry < _config2.default.retryCount;
        }
    }, {
        key: '_retryWaitingChannels',
        value: function _retryWaitingChannels() {
            var _this6 = this;

            this._error_retry++;

            var retryDelay = Math.pow(2, this._error_retry) * 3000;
            var waitingChannels = [].concat((0, _toConsumableArray3.default)(this._channel_info.waiting));
            this._channel_info.waiting = [];

            waitingChannels.forEach(function (channelInfo) {
                setTimeout(function () {
                    _this6._channel_info.channel_count++;
                    _this6.uploadPiece(channelInfo);
                }, retryDelay);
            });

            this.task.log('UploadPiece retry: ' + this._error_retry);
            this.task.setHasDoAuthTry(true);
        }
    }, {
        key: '_handleMaxRetryReached',
        value: function _handleMaxRetryReached(error, info) {
            this._channel_info.waiting = [];
            this._channel_info.holding.push(info);
            this._setTaskError(error.ret, error.msg, error.trace);
        }
    }, {
        key: '_handleUploadFinished',
        value: function _handleUploadFinished() {
            this.task.changeState('done');
            this._channel_info.loaded_map = {};
            this._channel_info.holding = [];
        }
    }, {
        key: '_handleWaitOther',
        value: function _handleWaitOther(info) {
            this._channel_info.channel_count--;

            if (this._channel_info.waiting && this._channel_info.waiting.length) {
                this.task.log('upload next waiting channel, waiting count: ' + this._channel_info.waiting.length + ', channel_count: ' + this._channel_info.channel_count);
                this._channel_info.channel_count++;
                this.uploadPiece(this._channel_info.waiting.pop());
            } else if (this._channel_info.channel_count === 0) {
                this._setTaskError(ERROR_CODES.UPLOAD_FAILED, '\u5206\u7247\u4E0A\u4F20\u5931\u8D25\uFF0CuploadState: ' + info.upload_state);
            }
        }
    }, {
        key: '_handleInvalidUploadState',
        value: function _handleInvalidUploadState(info) {
            this._setTaskError(ERROR_CODES.UPLOAD_STATE_ERROR, '\u5206\u7247\u4E0A\u4F20\u5931\u8D25\uFF0CuploadState: ' + info.upload_state);
        }
    }, {
        key: '_setTaskError',
        value: function _setTaskError(ret, msg, trace) {
            this.task.setErrorInfo({ ret: ret, msg: msg, trace: trace });
            this.task.log('UploadPiece error: ' + ret + ' ' + msg);
            this.task.changeState('error');
        }
    }, {
        key: 'doUploadPiece',
        value: function doUploadPiece(uploadData) {
            var _this7 = this;

            return new _promise2.default(function (resolve, reject) {
                _this7._channel_info.loaded_map[uploadData.channel.id] = 0;

                var end = Math.min(uploadData.channel.offset + _config2.default.fragmentSize, _this7.task.getSize());

                _this7.blobFile(_this7.task.getFileNode().getRawFile(), uploadData.channel.offset, end).then(function (sliceBlob) {
                    if (sliceBlob.size === 0) {
                        reject({
                            ret: ERROR_CODES.FILE_DELETED,
                            msg: '',
                            uploadData: uploadData
                        });
                    } else {
                        setTimeout(function () {
                            _this7._uploadBlob(sliceBlob, uploadData, end, resolve, reject);
                        }, 0);
                    }
                }).catch(function () {
                    reject({
                        ret: ERROR_CODES.BLOB_ERROR,
                        msg: '',
                        uploadData: uploadData
                    });
                });
            });
        }
    }, {
        key: '_uploadBlob',
        value: function _uploadBlob(blob, uploadData, end, resolve, reject) {
            var _this8 = this;

            var lastLoaded = 0;

            this.uploadRequest({
                cmd: 247121,
                name: 'UploadPiece',
                data: {
                    req: uploadData,
                    blob: blob
                },
                uploadProgress: function uploadProgress(loaded) {
                    _this8._channel_info.loaded_map[uploadData.channel.id] = loaded;
                    var processed = _this8.task.getProcessed() + loaded - lastLoaded;
                    _this8.task.setProcessed(processed);
                    lastLoaded = loaded;
                }
            }).then(function (res) {
                var curFragmentLoaded = _this8._channel_info.loaded_map[uploadData.channel.id];

                var processed = Math.min(_this8.task.getProcessed() - curFragmentLoaded + (end - uploadData.channel.offset), _this8.task.getSize() - 1);
                _this8.task.setProcessed(processed);
                resolve(res);
            }).catch(function (error) {
                reject({
                    ret: error.ret,
                    msg: error.msg,
                    trace: error.trace,
                    uploadData: uploadData
                });
            });
        }
    }, {
        key: 'preUploadRequest',
        value: function preUploadRequest(option) {
            var req_header = this._buildRequestHeader(option.cmd, true);
            var url = 'https://www.weiyun.com/api/v3/ftn_pre_upload';
            var req_body = this._buildRequestBody(option);
            var param = { req_header: req_header, req_body: req_body };

            return this._executeRequest(url, param, option, false);
        }
    }, {
        key: 'uploadRequest',
        value: function uploadRequest(option) {
            var req_header = this._buildRequestHeader(option.cmd, false);
            var url = (this._has2002021 ? _config2.default.backupUploadUrl : _config2.default.uploadUrl) + '?cmd=' + option.cmd;
            var req_body = this._buildRequestBody(option);

            var formData = new FormData();
            formData.append('json', (0, _stringify2.default)({ req_header: req_header, req_body: req_body }));

            if (option.data && option.data.blob) {
                formData.append('upload', option.data.blob);
            }

            return this._executeRequest(url, formData, option, true);
        }
    }, {
        key: '_buildRequestHeader',
        value: function _buildRequestHeader(cmd, isPreUpload) {
            var baseHeader = {
                cmd: cmd,
                appid: _constants2.default.APPID,
                major_version: 3,
                minor_version: 0,
                fix_version: 0
            };

            if (isPreUpload) {
                return (0, _extends3.default)({}, baseHeader, {
                    type: 1,
                    version: 3,
                    user_flag: _account2.default.getType().indexOf('weixin') > -1 ? 1 : 0,
                    env_id: _cookie2.default.get('env_id'),
                    login_keytype: _account2.default.getLoginType(_account2.default.getType())
                });
            }

            return (0, _extends3.default)({}, baseHeader, {
                version: 0,
                user_flag: _account2.default.getType() === 'weixin' ? 1 : 0
            });
        }
    }, {
        key: '_buildRequestBody',
        value: function _buildRequestBody(option) {
            var req_body = { ReqMsg_body: {} };

            if (option.extReqHead) {
                req_body.ReqMsg_body.ext_req_head = option.extReqHead;
            }

            req_body.ReqMsg_body['weiyun.' + option.name + 'MsgReq_body'] = option.data && option.data.req;

            return req_body;
        }
    }, {
        key: '_executeRequest',
        value: function _executeRequest(url, data, option, isFormData) {
            var _this9 = this;

            return new _promise2.default(function (resolve, reject) {
                var startTime = Date.now();
                var axiosConfig = _this9._buildAxiosConfig(option, isFormData);

                _axios2.default.post(url, data, axiosConfig).then(function (res) {
                    var endTime = Date.now();
                    _this9._handleResponse(res, option, startTime, endTime, resolve, reject);
                }).catch(function (error) {
                    var endTime = Date.now();
                    _this9._handleRequestError(error, option, startTime, endTime, reject);
                });
            });
        }
    }, {
        key: '_buildAxiosConfig',
        value: function _buildAxiosConfig(option, isFormData) {
            var config = {
                timeout: REQUEST_TIMEOUT,
                withCredentials: !this._has2002021
            };

            if (isFormData) {
                config.headers = { 'content-type': 'multipart/form-data' };
                config.onUploadProgress = function (e) {
                    if (e.lengthComputable && option.uploadProgress) {
                        option.uploadProgress(e.loaded);
                    }
                };
            }

            return config;
        }
    }, {
        key: '_handleResponse',
        value: function _handleResponse(res, option, startTime, endTime, resolve, reject) {
            var trace = res.headers && res.headers['x-trace-id'];
            try {
                var data = res.data;
                var rspHead = (data.result || data).rsp_header;
                var rspBodyWrapper = ((data.result || data).rsp_body || {}).RspMsg_body || {};

                if (!rspHead) {
                    reject({ ret: -1, msg: 'response content is error', trace: trace });
                    return;
                }

                if (rspHead.retcode === 0) {
                    this.reportPb(option.cmd, option.name, 0, 0, endTime - startTime);
                    var rspBody = rspBodyWrapper['weiyun.' + option.name + 'MsgRsp_body'] || rspBodyWrapper['weiyun' + option.name + 'MsgRsp_body'] || {};
                    resolve(rspBody);
                } else {
                    this.reportPb(option.cmd, option.name, rspHead.retcode, 1, endTime - startTime);
                    reject((0, _extends3.default)({
                        ret: rspHead.retcode,
                        msg: rspHead.retmsg,
                        trace: trace
                    }, rspHead));
                }
            } catch (e) {
                this.reportPb(option.cmd, option.name, ERROR_CODES.JSON_PARSE_ERROR, 1, endTime - startTime);
                reject({
                    ret: ERROR_CODES.JSON_PARSE_ERROR,
                    msg: e.message,
                    trace: trace
                });
            }
        }
    }, {
        key: '_handleRequestError',
        value: function _handleRequestError(error, option, startTime, endTime, reject) {
            var _parseRequestError2 = this._parseRequestError(error),
                ret = _parseRequestError2.ret,
                msg = _parseRequestError2.msg,
                trace = _parseRequestError2.trace;

            this.reportPb(option.cmd, option.name, ret, 1, endTime - startTime);

            if (this._has2002021) {
                _speedDetect2.default.detectNetwork().then(function () {
                    reject({ ret: ERROR_CODES.GATEWAY_BLOCKED, msg: msg, trace: trace });
                }).catch(function () {
                    reject({ ret: ret, msg: msg, trace: trace });
                });
            } else {
                reject({ ret: ret, msg: msg, trace: trace });
            }
        }
    }, {
        key: '_parseRequestError',
        value: function _parseRequestError(error) {
            var ret = void 0,
                msg = void 0,
                trace = void 0;

            if (error.response) {
                ret = error.response.status || ERROR_CODES.SERVER_ERROR;
                msg = error.response.statusText || error.stack || error.message;
                msg += '\n ' + (0, _stringify2.default)(error.response.headers, null, '\t');
                trace = error.response.headers && error.response.headers['x-trace-id'];
            } else if (error.request) {
                var errorCodeMap = {
                    'ECONNABORTED': ERROR_CODES.TIMEOUT,
                    'ECONNCANCELED': ERROR_CODES.CANCELED
                };

                ret = errorCodeMap[error.code] || ERROR_CODES.NETWORK_ERROR;
                msg = error.stack || error.message;

                if (ret === ERROR_CODES.NETWORK_ERROR) {
                    this._has2002021 = true;
                }
            } else {
                ret = ERROR_CODES.REQUEST_ERROR;
                msg = error.stack || error.message;
            }

            return { ret: ret, msg: msg, trace: trace };
        }
    }, {
        key: 'reportPb',
        value: function reportPb(cmd, name, code, result, time) {
            _report2.default.pb({
                proto: 'weiyunUpload',
                cmdname: name,
                cmd: cmd,
                code: code,
                result: result
            });

            _report2.default.habo({
                cgi: 'upload.weiyun.com/fileup/weiyun?cmd=' + name,
                type: result,
                code: code,
                time: time
            });
        }
    }, {
        key: 'blobFile',
        value: function blobFile(file, start, end) {
            var _this10 = this;

            return new _promise2.default(function (resolve, reject) {
                if (_constants2.default.BROWSER.QBCore) {
                    _this10._handleQBCoreBlob(file, start, end, resolve, reject);
                } else {
                    var blob = _this10.blobSlice(file, start, end);
                    resolve(blob);
                }
            });
        }
    }, {
        key: '_handleQBCoreBlob',
        value: function _handleQBCoreBlob(file, start, end, resolve, reject) {
            var _this11 = this;

            var h5_file_reader = new FileReader();

            h5_file_reader.onload = function (e) {
                var sliceIndex = e.target.result.indexOf('base64,') + 7;
                resolve(_this11.convertBase64UrlToBlob(e.target.result.slice(sliceIndex)));
                h5_file_reader.onload = h5_file_reader.onerror = null;
            };

            h5_file_reader.onerror = function (e) {
                reject(e);
                h5_file_reader.onload = h5_file_reader.onerror = null;
            };

            h5_file_reader.readAsDataURL(this.blobSlice(file, start, end));
        }
    }, {
        key: 'blobSlice',
        value: function blobSlice(file, start, end) {
            if (file.webkitSlice) {
                return file.webkitSlice(start, end);
            } else if (file.mozSlice) {
                return file.mozSlice(start, end);
            } else {
                return file.slice(start, end);
            }
        }
    }, {
        key: 'convertBase64UrlToBlob',
        value: function convertBase64UrlToBlob(urlData) {
            var bytes = window.atob(urlData);
            var ab = new ArrayBuffer(bytes.length);
            var ia = new Uint8Array(ab);

            for (var i = 0; i < bytes.length; i++) {
                ia[i] = bytes.charCodeAt(i);
            }

            return new Blob([ab], { type: 'application/octet-stream' });
        }
    }]);
    return Slice;
}();

exports.default = Slice;

/***/ }),

/***/ "ugtg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stringify = __webpack_require__("mvHQ");

var _stringify2 = _interopRequireDefault(_stringify);

var _promise = __webpack_require__("//Fk");

var _promise2 = _interopRequireDefault(_promise);

var _axios = __webpack_require__("mtWM");

var _axios2 = _interopRequireDefault(_axios);

var _constants = __webpack_require__("4Uv1");

var _constants2 = _interopRequireDefault(_constants);

var _config = __webpack_require__("QIop");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var speed = void 0;
var error = void 0;
var KB512 = 512 * Math.pow(2, 10);

function detect(blob) {

    var req_header = {
        'cmd': 247123,
        'appid': _constants2.default.APPID,
        'major_version': 3,
        'minor_version': 0,
        'fix_version': 0,
        'version': 0
    };
    var url = _config2.default.backupUploadUrl + '?cmd=247123';
    var req_body = {};
    req_body['ReqMsg_body'] = {};
    req_body['ReqMsg_body']['weiyun.SpeedTestMsgReq_body'] = {
        direction: 0
    };

    return new _promise2.default(function (resolve, reject) {
        var formData = new FormData();
        formData.append('json', (0, _stringify2.default)({
            'req_header': req_header,
            'req_body': req_body
        }));

        formData.append('upload', blob);

        var startTime = +new Date();

        _axios2.default.post(url, formData, {
            timeout: 120000,
            withCredentials: true,
            headers: {
                'content-type': 'multipart/form-data'
            }
        }).then(function (res) {
            var endTime = +new Date();
            var spend = endTime - startTime;
            speed = blob.size / ((endTime - startTime) / 1000);
            speed = parseInt(speed);
            resolve({
                spend: spend,
                speed: speed
            });
        }).catch(function (error) {
            var ret = void 0;
            var msg = void 0;
            if (error.response) {
                ret = error.response.status || 2002020;
                msg = error.response.statusText || error.stack || error.message;
            } else if (error.request) {
                ret = 2002021;
                msg = error.stack || error.message;
            } else {
                ret = 2002022;
                msg = error.stack || error.message;
            }
            reject({
                ret: ret,
                msg: msg
            });
        });
    });
}

function detectNetwork() {

    var req_header = {
        'cmd': 247163,
        'appid': _constants2.default.APPID,
        'major_version': 3,
        'minor_version': 0,
        'fix_version': 0,
        'version': 0
    };
    var url = _config2.default.backupUploadUrl + '?cmd=247163';

    return new _promise2.default(function (resolve, reject) {
        var startTime = +new Date();

        _axios2.default.post(url, {}).then(function (res) {
            resolve();
        }).catch(function (error) {
            var ret = void 0;
            var msg = void 0;
            if (error.response) {
                ret = error.response.status || 2002020;
                msg = error.response.statusText || error.stack || error.message;
            } else if (error.request) {
                ret = 2002021;
                msg = error.stack || error.message;
            } else {
                ret = 2002022;
                msg = error.stack || error.message;
            }
            reject({
                ret: ret,
                msg: msg
            });
        });
    });
}

function run() {
    var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : KB512;

    new _promise2.default(function (resolve, reject) {
        detect(getBlob(size)).then(function (info) {
            console.log('s:', info.spend / 1000);
            console.log('Byte/s:', speed);
            if (info.spend < 1000) {
                run(size * 2);
            } else {
                resolve(info.speed);
            }
        }).catch(function (err) {
            error = err;
            reject(err);
        });
    });
}

function getBlob(size) {
    var a = [];
    for (var i = 0; i < size; i++) {
        a.push('a');
    };
    return new Blob(a);
}

exports.default = {
    run: run,
    speed: speed,
    detectNetwork: detectNetwork,
    error: error
};

/***/ }),

/***/ "vUFI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"mod-msg"},[_c('div',{staticClass:"msg-inner loading clearfix",class:{show: _vm.visiable, hide: !_vm.visiable}},[_c('p',{staticClass:"txt"},[_c('i',{staticClass:"icon icon-msg",attrs:{"aria-hidden":"true"}}),_vm._v(" "),_c('span',{attrs:{"data-id":"label"}},[_vm._v(_vm._s(_vm.message)+" "+_vm._s(_vm.progress))])])])])}
var staticRenderFns = []


/***/ }),

/***/ "w9vE":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__("7+uW");

var _vue2 = _interopRequireDefault(_vue);

var _progress = __webpack_require__("FckT");

var _progress2 = _interopRequireDefault(_progress);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WyProgressCtor = _vue2.default.extend(_progress2.default);

var instance = void 0;

function createInstance(message, total) {
    if (instance) {
        instance.$destroy();
        instance.$el.parentNode.removeChild(instance.$el);
    }
    instance = new WyProgressCtor({
        el: document.createElement('div'),
        propsData: {
            message: message
        }
    });

    instance.update(0, total);
    document.body.appendChild(instance.$el);
}

exports.default = {
    show: function show(message, total) {
        if (this.isProgressing()) {
            this.update(null, total);
        } else {
            createInstance(message, total);
        }
    },
    update: function update(progressed, total) {
        if (!instance) {
            throw new Error('wy-progress not inited');
        }
        instance.update(progressed, total);
    },
    hide: function hide() {
        if (!instance) {
            return;
        }
        instance.hide();

        setTimeout(function () {
            if (!instance) {
                return;
            }
            instance.$destroy();
            instance.$el.parentNode.removeChild(instance.$el);
            instance = null;
        }, 2000);
    },
    isProgressing: function isProgressing() {
        return !!instance;
    }
};

/***/ }),

/***/ "wrey":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"tasks-vip-guide"},[_c('div',{staticClass:"tasks-vip-guide-div"},[_vm._v("\n        "+_vm._s(_vm.textTips)+" \n        "),_vm._v(" "),(!_vm.isVip || !_vm.isSuperVip)?_c('span',{staticClass:"tasks-open-vip",on:{"click":_vm.goVipPage}},[_vm._v("开通超级会员")]):_vm._e()])])}
var staticRenderFns = []


/***/ }),

/***/ "x/Kw":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.register = register;

var _store = __webpack_require__("+zu9");

var _store2 = _interopRequireDefault(_store);

var _manager = __webpack_require__("BSdR");

var _manager2 = _interopRequireDefault(_manager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function register() {

    _store2.default.registerModule('manager', _manager2.default);

    window.addEventListener('beforeunload', function (e) {
        if (!window.history || !('pushState' in window.history)) {
            return;
        }
        if (_store2.default.state.manager.uploadTaskQueue.getExecuteCount()) {
            var message = '您还有上传任务在进行中';
            (e || window.event).returnValue = message;
            return message;
        }
        return;
    });
}

/***/ }),

/***/ "xZqV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: {
        message: {
            type: String,
            default: ''
        }
    },

    data: function data() {
        return {
            visiable: true,
            progressed: 0,
            total: 0
        };
    },


    computed: {
        progress: function progress() {
            if (!this.total) {
                return '';
            }
            return this.total === '%' ? '' + this.progressed + this.total : this.progressed + '/' + this.total;
        }
    },

    methods: {
        update: function update(progressed, total) {
            if (typeof total === 'number' || total === '%') {
                this.total = total;
            }
            if (typeof progressed === 'number') {
                this.progressed = this.total === '%' ? Math.min(progressed, 100) : progressed;
            }
        },
        hide: function hide() {
            this.visiable = false;
        }
    }
};

/***/ }),

/***/ "yEsh":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _getPrototypeOf = __webpack_require__("Zx67");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _getOwnPropertyDescriptor = __webpack_require__("K6ED");

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = (0, _getOwnPropertyDescriptor2.default)(object, property);

  if (desc === undefined) {
    var parent = (0, _getPrototypeOf2.default)(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

/***/ })

});