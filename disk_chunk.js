webpackJsonp(["disk"],{

/***/ "/0Po":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var onlyCallOnce = exports.onlyCallOnce = function onlyCallOnce(fn) {
    var isCalled = false;
    return function () {
        if (isCalled) {
            return;
        }
        fn();
        isCalled = true;
    };
};

/***/ }),

/***/ "/vUQ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {

    props: {
        nodeList: Array,
        selectable: Boolean,
        sortInfo: Object
    },

    data: function data() {
        return {
            showed: false
        };
    },


    computed: {
        reverseSupport: function reverseSupport() {
            var support = false;
            this.sortInfo.items.forEach(function (item) {
                if (typeof item.reverse !== 'undefined') {
                    support = true;
                }
            });
            return support;
        },
        reverse: function reverse() {
            var sortField = this.sortInfo.sortField;
            var reverse = void 0;
            this.sortInfo.items.forEach(function (item) {
                if (item.value === sortField) {
                    reverse = item.reverse;
                }
            });
            return reverse;
        },
        sortName: function sortName() {
            var sortField = this.sortInfo.sortField;
            var name = void 0;
            this.sortInfo.items.forEach(function (item) {
                if (item.value === sortField) {
                    name = item.name;
                }
            });
            return name;
        },
        selectedList: function selectedList() {
            return this.nodeList.filter(function (item) {
                if (item.isSelected()) {
                    return true;
                }
            });
        },
        allSelected: function allSelected() {
            return this.nodeList.length && this.nodeList.length === this.selectedList.length;
        },
        canSort: function canSort() {
            var cnt = 0;
            this.sortInfo.items.forEach(function (item) {
                if (item.value || item.reverse) {
                    cnt++;
                }
            });

            return cnt > 1 ? true : false;
        }
    },

    mounted: function mounted() {
        document.body.addEventListener('click', this.hideMenu);
        document.addEventListener('contextmenu', this.hideMenu);
    },
    destroyed: function destroyed() {
        document.body.removeEventListener('click', this.hideMenu);
    },


    methods: {
        triggerSelectAll: function triggerSelectAll() {
            this.$emit('triggerSelectAll');
        },
        switchSort: function switchSort(info) {
            if (typeof info.reverse === 'undefined') {
                info.reverse = this.reverse;
            }
            if (typeof info.sortField === 'undefined') {
                info.sortField = this.sortInfo.sortField;
            }
            this.$emit('switchSort', info);
            this.showed = false;
        },
        hideMenu: function hideMenu(e) {
            if (this.$el.contains && !this.$el.contains(e.target) && this.$el != e.target) {
                this.showed = false;
            }
            if (this.$el.compareDocumentPosition && !(this.$el.compareDocumentPosition(e.target) & 16) && this.$el != e.target) {
                this.showed = false;
            }
        }
    }
};

/***/ }),

/***/ "13Ol":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{staticClass:"layout-main-hd"},[_c('wy-notice-bar',{attrs:{"isCleanAlertStatus":_vm.isCleanAlertStatus,"isShowCleanToast":_vm.isShowCleanToast,"spaceCleanLeftDays":_vm.spaceCleanLeftDays},on:{"showSpaceDialog":_vm.showSpaceCleanDialog}}),_vm._v(" "),(!_vm.isShowCleanToast && !_vm.isShowResetToast)?_c('wy-space-emergency-notice'):_vm._e(),_vm._v(" "),(_vm.isShowResetToast)?_c('div',{staticClass:"reset-notice"},[_c('i',{staticClass:"warn"}),_vm._v("你的账号因为长期超额存储未处理，已被重置"),_c('a',{on:{"click":function($event){$event.preventDefault();return _vm.showResetDialog($event)}}},[_vm._v("了解详情")]),_c('i',{staticClass:"close",on:{"click":_vm.closeResetTips}})]):_vm._e(),_vm._v(" "),(!_vm.isShowCleanToast && !_vm.isShowResetToast)?_c('wy-coupon-notice-bar'):_vm._e(),_vm._v(" "),_c('div',{staticClass:"mod-act-panel"},[_c('div',{staticClass:"act-panel-inner clearfix"},[_c('wy-breadcrumb',{attrs:{"curNode":_vm.curNode,"rootName":'全部'},on:{"returnRoot":_vm.returnRoot,"openDirNode":_vm.openDirNode}}),_vm._v(" "),_c('wy-switch',{attrs:{"viewMode":_vm.viewMode},on:{"switchView":_vm.switchView}}),_vm._v(" "),_c('div',{attrs:{"id":"_mod_act_bar4"}})],1)])],1),_vm._v(" "),_c('div',{staticClass:"layout-main-bd"},[(!_vm.isEmpty)?_c('div',[(_vm.viewMode === 'list')?_c('wy-list',{ref:"normalList",attrs:{"listHeader":_vm.listHeader,"nodeList":_vm.nodeList,"selectable":_vm.selectable,"dragable":_vm.dragable,"hasLoadDone":_vm.hasLoadDone},on:{"loadMore":_vm.loadMore,"itemClick":_vm.itemClick,"dragdrop":_vm.dragdrop,"sortReverse":_vm.sortReverse,"itemContextmenu":_vm.itemContextmenu,"confirmRename":_vm.confirmRename,"confirmCreate":_vm.confirmCreate}}):(_vm.viewMode === 'thumb')?_c('wy-thumb-list',{ref:"thumbList",attrs:{"itemWidth":_vm.itemWidth,"folderWidth":_vm.folderWidth,"nodeList":_vm.nodeList,"selectable":_vm.selectable,"sortInfo":_vm.sortInfo,"dragable":_vm.dragable,"hasLoadDone":_vm.hasLoadDone},on:{"loadMore":_vm.loadMore,"itemClick":_vm.itemClick,"dragdrop":_vm.dragdrop,"switchSort":_vm.switchSort,"itemContextmenu":_vm.itemContextmenu,"confirmRename":_vm.confirmRename,"confirmCreate":_vm.confirmCreate}}):_vm._e()],1):_c('wy-disk-empty')],1)])}
var staticRenderFns = []


/***/ }),

/***/ "1TPr":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _report = __webpack_require__("Vyex");

var _report2 = _interopRequireDefault(_report);

var _platForReport = __webpack_require__("hFxg");

var _txdocsAid = __webpack_require__("kIId");

var _report3 = __webpack_require__("5bB2");

var _report4 = _interopRequireDefault(_report3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var linkTextAid = _report4.default.transAID({
    position: "list",
    function: "space",
    action: "yellowbar_notenough"
});

exports.default = {
    data: function data() {
        return {
            isClosed: false
        };
    },
    mounted: function mounted() {
        _report4.default.tdwReport("weiyun-vip_yellowbar-show", {
            common_ext: {
                position: "list",
                function: "space",
                aid: linkTextAid
            }
        });
    },

    methods: {
        manageSpaceVip: function manageSpaceVip() {
            if (this.isVip) {
                this.$store.commit('control/buySpace', linkTextAid);
            } else {
                this.$store.dispatch('control/popBuyVip', {
                    aid: linkTextAid,
                    type: 'svip'
                });
            }
            _report4.default.tdwReport("weiyun-vip_yellowbar-click", {
                common_ext: {
                    position: "list",
                    function: "space",
                    aid: linkTextAid
                }
            });
        },
        manuallyClose: function manuallyClose() {
            this.isClosed = true;

            _report2.default.beacon('weiyun_spacefull_bar_click', {
                btnname: 'close',
                usertype: this.usertype,
                plat: (0, _platForReport.getPlatForReport)()
            });
            this.$store.dispatch('userInfo/closedNotionInfo', { actionId: '2' });
        }
    },
    computed: {
        isVip: function isVip() {
            var _$store$state$userInf = this.$store.state.userInfo.weiyun_vip_info,
                weiyun_vip = _$store$state$userInf.weiyun_vip,
                super_vip = _$store$state$userInf.super_vip;

            return weiyun_vip || super_vip;
        },
        usertype: function usertype() {
            var usertype = this.isVip ? 'member' : 'nomember';
            return usertype;
        },
        isShowNotice: function isShowNotice() {
            if (this.isClosed) {
                return false;
            }

            var isNoticeLoaded = this.$store.state.userInfo.isPopUpCouponAndNoticeLoaded;
            if (!isNoticeLoaded) {
                return false;
            }
            var yellobarInfo = this.$store.state.userInfo.space_yellow_bar_info;
            if (yellobarInfo.text && yellobarInfo.button_text) {
                return true;
            }
            return false;
        },
        noticeText: function noticeText() {
            var yellobarInfo = this.$store.state.userInfo.space_yellow_bar_info;
            return yellobarInfo.text;
        },
        linkText: function linkText() {
            var yellobarInfo = this.$store.state.userInfo.space_yellow_bar_info;
            return yellobarInfo.button_text;
        }
    }
};

/***/ }),

/***/ "1TRa":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_list_body_vue__ = __webpack_require__("awOJ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_list_body_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_list_body_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_list_body_vue__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_list_body_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7a7aaa14_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_list_body_vue__ = __webpack_require__("b/Bi");
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_list_body_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7a7aaa14_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_list_body_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7a7aaa14_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_list_body_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "1X1I":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.isShowNotice)?_c('div',{class:[_vm.isMobile ? 'space-emergency-notice-bar-mobile' : 'space-emergency-notice-bar']},[_c('i',{staticClass:"space-emergency-notice-icon"}),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.noticeText))]),_vm._v(" "),_c('a',{staticClass:"space-emergency-notice-link",on:{"click":function($event){$event.preventDefault();return _vm.manageSpaceVip($event)}}},[_vm._v(" "+_vm._s(_vm.linkText))]),_vm._v(" "),_c('div',{staticClass:"flex-grow"}),_vm._v(" "),_c('div',{staticClass:"space-emergency-notice-close",on:{"click":function($event){$event.preventDefault();return _vm.manuallyClose($event)}}})]):_vm._e()}
var staticRenderFns = []


/***/ }),

/***/ "1i6a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.count === 1)?_c('div',{staticClass:"mod-moudle"},[_c('div',{staticClass:"moudle-inner"},[_c('div',{staticClass:"moudle-pic"},[(_vm.firstFileNode.isImage() || _vm.firstFileNode.isVideo())?_c('img',{attrs:{"src":_vm.firstFileNode.getThumbUrl(64),"alt":_vm.firstFileNode.getName()}}):_vm._e(),_vm._v(" "),(_vm.firstFileNode.isVideo())?_c('span',{staticClass:"duration"},[_c('span',{staticClass:"inner"},[_vm._v(_vm._s(_vm._f("LongTimeFormat")(_vm.firstFileNode.getLongTime())))])]):_vm._e(),_vm._v(" "),_c('i',{staticClass:"icon icon-m",class:[_vm.fileIcon]})]),_vm._v(" "),_c('div',{staticClass:"moudle-con"},[_c('span',{staticClass:"tit"},[_vm._v(_vm._s(_vm.firstFileNode.getName()))])])])]):_c('div',{staticClass:"mod-moudle mult"},[_c('div',{staticClass:"moudle-inner"},[_c('div',{staticClass:"moudle-pic"},[(_vm.firstFileNode.isImage() || _vm.firstFileNode.isVideo())?_c('img',{attrs:{"src":_vm.firstFileNode.getThumbUrl(64),"alt":_vm.firstFileNode.getName()}}):_vm._e(),_vm._v(" "),(_vm.firstFileNode.isVideo())?_c('span',{staticClass:"duration"},[_c('span',{staticClass:"inner"},[_vm._v(_vm._s(_vm._f("LongTimeFormat")(_vm.firstFileNode.getLongTime())))])]):_vm._e(),_vm._v(" "),_c('i',{staticClass:"icon icon-m",class:[_vm.fileIcon]})]),_vm._v(" "),_c('div',{staticClass:"moudle-con"},[_c('span',{staticClass:"tit"},[_vm._v(_vm._s(_vm.firstFileNode.getName()))])]),_vm._v(" "),_c('div',{staticClass:"moudle-attr"},[_c('span',{staticClass:"count"},[_vm._v(_vm._s(_vm.count))])])])])}
var staticRenderFns = []


/***/ }),

/***/ "1jKk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"mod-breadcrumb",style:({display: _vm.hidden ? 'none' : ''})},[_c('ul',{staticClass:"breadcrumb clearfix"},[_c('li',{staticClass:"item all",class:{cur: _vm.dirNodes.length === 0},on:{"click":_vm.returnRoot}},[_c('a',{attrs:{"href":"javascript:void(0)"}},[_c('i',{staticClass:"icon",class:[_vm.rootIcon]}),_vm._v(_vm._s(_vm.rootName))])]),_vm._v(" "),_vm._l((_vm.dirNodes),function(dir,i){return _c('li',{key:i,staticClass:"item",class:{more: dir.ignore, cur: i === _vm.dirNodes.length - 1},on:{"click":function($event){_vm.openDir(dir)}}},[_c('i',{staticClass:"icon icon-bread-next"}),_vm._v(" "),_c('a',{attrs:{"href":"javascript:void(0)","title":dir.ignore ? dir.name : dir.getName()}},[_vm._v(_vm._s(dir.ignore ? dir.name : dir.getName()))])])})],2)])}
var staticRenderFns = []


/***/ }),

/***/ "2234":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: {
        isShowCleanToast: Boolean,
        isCleanAlertStatus: Boolean,
        spaceCleanLeftDays: Number
    },
    methods: {
        showSpaceCleanDialog: function showSpaceCleanDialog() {
            this.$emit('showSpaceDialog');
        }
    },
    computed: {
        isVipNotice: function isVipNotice() {
            var isOldVip = this.$store.getters['userInfo/oldVip'] || this.$store.getters['userInfo/oldSuperVip'];
            var isNotice = this.$store.state.userInfo.space_clean_info.left_cleaning_days > 120;
            return isOldVip && isNotice;
        }
    }
};

/***/ }),

/***/ "2EGv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_thumb_list_vue__ = __webpack_require__("4f1W");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_thumb_list_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_thumb_list_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_thumb_list_vue__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_thumb_list_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_18560295_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_thumb_list_vue__ = __webpack_require__("CitZ");
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_thumb_list_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_18560295_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_thumb_list_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_18560295_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_thumb_list_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "3vdG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _emitter = __webpack_require__("D63v");

var _emitter2 = _interopRequireDefault(_emitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {

    name: 'wyContextmenuItem',

    props: ['item'],

    methods: {
        itemClick: function itemClick(item) {
            item.method && _emitter2.default.$emit('itemClick', item.method, item);
        },
        subBtnClick: function subBtnClick(item) {
            item.subBtn.method && _emitter2.default.$emit('itemClick', item.subBtn.method, item);
        },
        itemMouseover: function itemMouseover(item) {
            item.name && _emitter2.default.$emit('itemHover', item.name, item);
        }
    }
};

/***/ }),

/***/ "4f1W":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _vue = __webpack_require__("7+uW");

var _vue2 = _interopRequireDefault(_vue);

var _wyDragPointer = __webpack_require__("SBSc");

var _wyDragPointer2 = _interopRequireDefault(_wyDragPointer);

var _wyLoadmore = __webpack_require__("GyQT");

var _wyLoadmore2 = _interopRequireDefault(_wyLoadmore);

var _thumbHeader = __webpack_require__("Sb35");

var _thumbHeader2 = _interopRequireDefault(_thumbHeader);

var _thumbFolderList = __webpack_require__("RkKR");

var _thumbFolderList2 = _interopRequireDefault(_thumbFolderList);

var _thumbFileList = __webpack_require__("LH2o");

var _thumbFileList2 = _interopRequireDefault(_thumbFileList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WyDragPointer = _vue2.default.extend(_wyDragPointer2.default);

exports.default = {
	components: {
		wyThumbHeader: _thumbHeader2.default,
		wyThumbFolderList: _thumbFolderList2.default,
		wyThumbFileList: _thumbFileList2.default,
		wyLoadmore: _wyLoadmore2.default
	},

	props: {
		itemWidth: Number,
		folderWidth: Number,
		selectable: Boolean,
		dragable: Boolean,
		sortInfo: {
			type: Object,
			default: function _default() {
				return {
					items: []
				};
			}
		},
		hasLoadDone: {
			type: Boolean,
			default: true
		},
		nodeList: Array
	},

	data: function data() {
		return {
			lastSelectFileNode: null,
			offset: 0,
			dirEnd: 100,
			fileEnd: 100,
			count: 100,
			editingItem: null
		};
	},

	computed: {
		dirNodeList: function dirNodeList() {
			var dirList = this.nodeList.filter(function (item) {
				return item.isDir();
			});
			return dirList.slice(this.offset, this.dirEnd);
		},
		fileNodeList: function fileNodeList() {
			var fileList = this.nodeList.filter(function (item) {
				return !item.isDir();
			});
			return fileList.slice(this.offset, this.fileEnd);
		},
		selectedList: function selectedList() {
			return this.nodeList.filter(function (item) {
				if (item.isSelected()) {
					return true;
				}
			});
		}
	},
	watch: {
		nodeList: function nodeList(val, old) {
			if (val.length === 0) {
				this.dirEnd = this.count;
				this.fileEnd = this.count;
			}

			if (val[0] && old[0] && val[0].getParent() !== old[0].getParent()) {
				this.$el.scrollTop = 0;
			} else {
				this.$el.scrollTop = this.$el.scrollTop + 1;
			}
		}
	},

	deactivated: function deactivated() {
		this.dirEnd = this.count;
		this.fileEnd = this.count;
	},

	methods: {
		loadMore: function loadMore() {
			if (this.fileNodeList.length === this.fileEnd) {
				this.fileEnd += this.count;
			}
			if (this.dirNodeList.length === this.dirEnd) {
				this.dirEnd += this.count;
			}

			if (this.nodeList.length > this.dirEnd + this.fileEnd) {
				return;
			}

			this.$emit('loadMore');
		},
		selectEnable: function selectEnable() {
			if (!this.selectable) {
				return false;
			}
			return true;
		},
		dragEnable: function dragEnable() {
			if (!this.dragable) {
				return false;
			}
			return true;
		},
		clearSelected: function clearSelected() {
			this.nodeList.map(function (item) {
				item.setSelected(false);
			});
		},
		triggerSelectAll: function triggerSelectAll() {
			if (this.selectedList.length === this.nodeList.length) {
				this.clearSelected();
			} else {
				this.selectAll();
			}
		},
		selectCallback: function selectCallback(isSelect) {
			if (!isSelect) {
				this.clearSelected();
				this.lastSelectFileNode = null;
			}
		},
		selectAll: function selectAll() {
			this.nodeList.forEach(function (item) {
				item.setSelected(true);
			});
		},
		dragCallback: function dragCallback(dragItem) {
			if (!this.dragable) {
				return;
			}
			var node = dragItem.fileNode;
			if (!node.isSelected()) {
				this.nodeList.map(function (item) {
					item.setSelected(false);
				});

				node.setSelected(true);
			}

			var pointer = new WyDragPointer({
				el: document.createElement('div'),
				propsData: {
					fileNodes: this.selectedList
				}
			});

			return pointer.$el;
		},
		dropCallback: function dropCallback(dropItem) {
			if (!this.dragable) {
				return;
			}
			if (dropItem.fileNode.isSelected()) {
				return;
			}
			this.$emit('dragdrop', dropItem.fileNode);
		},
		hasItemEditing: function hasItemEditing(editingItem) {
			this.editingItem = editingItem;
		},
		blurEditingItem: function blurEditingItem(editingItem) {
			var item = null;
			var parent = editingItem.isDir() ? this.$refs.thumbFolderList : this.$refs.thumbFileList;
			var array = parent.$refs.listItem;
			for (var i = 0; i < array.length; i++) {
				if (array[i].fileNode.getId() === editingItem.getId()) {
					item = array[i];
				}
			}
			if (item) {
				item.$refs.renamingInput && item.$refs.renamingInput.blur();
				item.$refs.creatingInput && item.$refs.creatingInput.blur();
			}
			this.editingItem = null;
		},
		itemClick: function itemClick(fileNode) {
			this.$emit('itemClick', fileNode);
		},
		lastItemSelect: function lastItemSelect(fileNode) {
			this.lastSelectFileNode = fileNode;
		},
		singleSelect: function singleSelect(fileNode) {
			this.clearSelected();
			fileNode.setSelected(true);
			this.lastItemSelect(fileNode);
		},
		ctrlAndClick: function ctrlAndClick(fileNode) {
			fileNode.setSelected(!fileNode.isSelected());
			if (fileNode.isSelected()) {
				this.lastItemSelect(fileNode);
			}
		},
		shiftAndClick: function shiftAndClick(fileNode) {
			if (this.lastSelectFileNode) {
				var lastSelectIdx = fileNode.getParent().indexOf(this.lastSelectFileNode);
				var curSelectIdx = fileNode.getParent().indexOf(fileNode);
				if (lastSelectIdx > -1 && curSelectIdx > -1) {
					var startIdx = Math.min(lastSelectIdx, curSelectIdx);
					var endIdx = Math.max(lastSelectIdx, curSelectIdx);
					this.nodeList.forEach(function (item, i) {
						if (i >= startIdx && i <= endIdx) {
							item.setSelected(true);
						} else {
							item.setSelected(false);
						}
					});
				}
			} else {
				fileNode.setSelected(true);
				this.lastSelectFileNode = fileNode;
			}
		},
		itemContextmenu: function itemContextmenu(fileNode, position) {
			if (!fileNode.isSelected()) {
				this.clearSelected();
				fileNode.setSelected(true);
			}
			this.$emit('itemContextmenu', position);
		},
		switchSort: function switchSort(info) {
			this.$emit('switchSort', info);
		},
		confirmRename: function confirmRename() {
			this.$emit('confirmRename');
		},
		confirmCreate: function confirmCreate(fileNode) {
			this.$emit('confirmCreate', fileNode);
		}
	}
};

/***/ }),

/***/ "4n74":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__("Xxa5");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__("exGp");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _emitter = __webpack_require__("bg3o");

var _emitter2 = _interopRequireDefault(_emitter);

var _router = __webpack_require__("DEX7");

var _router2 = _interopRequireDefault(_router);

var _FileNode = __webpack_require__("/eiI");

var _FileNode2 = _interopRequireDefault(_FileNode);

var _request = __webpack_require__("yS1T");

var _request2 = _interopRequireDefault(_request);

var _storage = __webpack_require__("4R99");

var _storage2 = _interopRequireDefault(_storage);

var _support = __webpack_require__("Im35");

var _support2 = _interopRequireDefault(_support);

var _report = __webpack_require__("Vyex");

var _report2 = _interopRequireDefault(_report);

var _console = __webpack_require__("vK/W");

var _console2 = _interopRequireDefault(_console);

var _speed = __webpack_require__("6KcY");

var _speed2 = _interopRequireDefault(_speed);

var _wyContextmenu = __webpack_require__("wIaR");

var _wyContextmenu2 = _interopRequireDefault(_wyContextmenu);

var _wyToast = __webpack_require__("cYh5");

var _wyToast2 = _interopRequireDefault(_wyToast);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var console = _console2.default.namespace('disk');
var loading = false;

var BASE_VIEW_KEY = 'disk_view_mode';
var BASE_SORT_KEY = 'disk_sort_field';

if (window.syncData && window.syncData.userInfo) {
    BASE_VIEW_KEY += '_' + window.syncData.userInfo.uin;
    BASE_SORT_KEY += '_' + window.syncData.userInfo.uin;
}

var viewMode = _storage2.default.get(BASE_VIEW_KEY) || 'list';
var sortField = Number(_storage2.default.get(BASE_SORT_KEY) || 2);

exports.default = {

    namespaced: true,

    state: {

        modAlias: 'disk',

        rootNode: null,

        curNode: null,

        loadParams: {
            start: 0,
            count: 100,
            sortField: sortField
        },

        headerItems: [{
            text: '名称',
            name: 'name',
            sortable: true,
            reverse: true,
            sortField: 1
        }, {
            text: '上次修改时间',
            name: 'time',
            sortable: true,
            reverse: false,
            sortField: 2
        }, {
            text: '大小',
            name: 'size',
            sortable: false,
            reverse: false,
            sortField: 3
        }],

        viewMenu: [{
            name: '列表',
            value: 'list'
        }, {
            name: '缩略图',
            value: 'thumb',
            spliter: true
        }],

        sortMenu: [{
            name: '文件名',
            value: 1,
            reverse: true
        }, {
            name: '修改时间',
            value: 2,
            reverse: false
        }],

        viewMode: viewMode,
        sortField: sortField,

        locationDirItems: [],

        rootNodeInited: false,

        firstloaded: false },

    getters: {
        activated: function activated(state, getters, rootState) {
            return rootState.nav.curModAlias === state.modAlias && !rootState.control.searching;
        },
        listHeader: function listHeader(state) {
            var items = state.headerItems.slice(0, 3);
            var curNode = state.curNode;
            var rootNode = state.rootNode;

            if (curNode && curNode.getId() !== rootNode.getId()) {
                if (curNode.isInboxDir()) {
                    items.push({
                        text: '上传者',
                        name: 'uploader',
                        sortable: false,
                        reverse: false,
                        sortField: 3
                    });
                }
            }

            return {
                items: items,
                sortField: state.sortField
            };
        },
        allCheckerShow: function allCheckerShow() {
            return true;
        },
        breadcrumbShow: function breadcrumbShow() {
            return true;
        },
        viewMenuShow: function viewMenuShow(state) {
            return state.viewMenuShow;
        },
        curSortItem: function curSortItem(state) {
            var sortField = state.sortField;
            var find = void 0;
            state.headerItems.forEach(function (item) {
                if (item.sortField === sortField) {
                    find = item;
                    return false;
                }
            });
            return find;
        },
        sortReverse: function sortReverse(state, getters) {
            if (state.sortField === 1) {
                return !getters['curSortItem'].reverse;
            }
            return getters['curSortItem'].reverse;
        },
        menuItems: function menuItems(state) {
            var menuItems = [{
                name: '刷新',
                method: 'refresh'
            }, {
                name: '视图',
                secItems: [{
                    name: '列表',
                    icon: 'sel',
                    selected: state.viewMode === 'list' ? true : false,
                    method: 'listShow'
                }, {
                    name: '缩略图',
                    icon: 'sel',
                    selected: state.viewMode !== 'list' ? true : false,
                    method: 'thumbShow'
                }]
            }];

            if (_support2.default.sliceUpload()) {
                menuItems.push({
                    name: '上传文件',
                    method: 'uploadFile'
                });
            }

            if (_support2.default.folderUpload()) {
                menuItems.push({
                    name: '上传文件夹',
                    method: 'uploadFolder'
                });
            }

            menuItems.push({
                name: '新建文件夹',
                method: 'createFolder'
            });

            return menuItems;
        }
    },

    mutations: {
        initRootNode: function initRootNode(state, userInfo) {
            state.rootNode = new _FileNode2.default({
                dir_key: userInfo.main_dir_key,
                pdir_key: userInfo.root_dir_key,
                dir_name: '全部'
            });

            state.curNode = state.rootNode;
            state.rootNodeInited = true;
        },
        addNodes: function addNodes(state, payload) {
            payload['dir_list'].forEach(function (dirData) {
                var dirNode = new _FileNode2.default(dirData);
                dirNode.setParent(state.curNode);
                state.curNode.addNode(dirNode);
            });
            payload['file_list'].forEach(function (fileData) {
                var fileNode = new _FileNode2.default(fileData);
                fileNode.setParent(state.curNode);
                state.curNode.addNode(fileNode);
                if (!state.curNode.isInboxDir() && fileNode._ext_info && fileNode._ext_info.inbox_key) {
                    state.curNode.setInboxDir(fileNode._ext_info.inbox_key);
                }
            });
        },
        remove: function remove(state, fileNodes) {
            fileNodes.map(function (item) {
                item.getParent().removeNode(item);
            });
        },
        setLocationDirItems: function setLocationDirItems(state, locationDirItems) {
            state.locationDirItems = locationDirItems;
        },
        unshiftToCurNode: function unshiftToCurNode(state, fileNode) {
            state.curNode.unshiftNode(fileNode);
        },
        removeFromCurNode: function removeFromCurNode(state, fileNode) {
            state.curNode.removeNode(fileNode);
        },
        createDir: function createDir(state, payload) {
            var dirInfo = payload.dirInfo;
            var pdirKey = payload.pdirKey;
            if (state.curNode.getId() === pdirKey) {
                dirInfo.pdir_key = pdirKey;
                state.curNode.unshiftNode(new _FileNode2.default(dirInfo));
            } else {
                var destNode = state.rootNode.getKid(pdirKey, true);
                destNode && destNode.setDirty(true);
            }
        },
        setFirstLoaded: function setFirstLoaded(state, loaded) {
            state.firstloaded = loaded;
        },
        changeSizeSortable: function changeSizeSortable(state, sortable) {
            var sizeItem = state.headerItems[state.headerItems.length - 1];
            sizeItem.sortable = !!sortable;
        }
    },
    actions: {
        loadDiskRootFiles: function loadDiskRootFiles(context) {
            context.commit('initRootNode', context.rootState.userInfo);

            if (location.pathname.indexOf('/folder/') > -1) {
                var destDirKey = location.pathname.split('/').pop();
                context.dispatch('openDirByKey', destDirKey);
            } else {
                context.dispatch('loadDiskFiles');
            }
        },
        loadDiskFiles: function loadDiskFiles(context) {
            var state = context.state;
            if (loading || state.curNode.isLoadDone()) {
                return;
            }
            if (false) {
                var nodesCache = electron.remote.require('./store/disk').loadKidNodes(state.curNode.getId());
                if (nodesCache && nodesCache.length) {
                    state.curNode.setLoadDone(true);
                    context.commit('addNodes', nodesCache);
                }
            }
            loading = true;

            return _request2.default.webapp({
                protocol: 'weiyunQdisk',
                name: 'DiskDirBatchList',
                cmd: 2209,
                data: {
                    pdir_key: state.curNode.getPdirKey(),
                    dir_list: [{
                        dir_key: state.curNode.getId(),
                        get_type: 0,
                        start: state.loadParams.start,
                        count: state.loadParams.count,
                        sort_field: state.loadParams.sortField,
                        reverse_order: context.getters['sortReverse'],
                        get_abstract_url: true,
                        get_dir_detail_info: true }]
                }
            }).then(function () {
                var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(res) {
                    var rspData, data;
                    return _regenerator2.default.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    rspData = res['dir_list'][0];
                                    _context.prev = 1;
                                    _context.next = 4;
                                    return _request2.default.webapp({
                                        protocol: 'weiyunFileLibClient',
                                        name: 'LibBatchQueryGroupStar',
                                        cmd: 26251,
                                        data: {
                                            items: res['dir_list'][0]['file_list'].map(function (item) {
                                                return {
                                                    pdir_key: item.pdir_key || '',
                                                    file_id: item.file_id,
                                                    filename: item.filename
                                                };
                                            }),
                                            query_option: 3
                                        }
                                    });

                                case 4:
                                    data = _context.sent;

                                    rspData['file_list'].forEach(function (item, index) {
                                        return item['star_flag'] = data['FileItem_items'][index]['star_flag'];
                                    });
                                    _context.next = 11;
                                    break;

                                case 8:
                                    _context.prev = 8;
                                    _context.t0 = _context['catch'](1);

                                    console.log('查询加星（收藏）信息报错', _context.t0);

                                case 11:

                                    loading = false;

                                    state.curNode.setLoadDone(rspData.finish_flag);
                                    state.curNode.addHideKidCount(rspData.hide_dir_count + rspData.hide_file_count);
                                    state.curNode.setDirty(false);
                                    context.commit('addNodes', rspData);

                                    if (state.locationDirItems.length > 0) {
                                        context.dispatch('location', state.locationDirItems);
                                        context.commit('setLocationDirItems', []);
                                    }

                                    if (false) {
                                        electron.remote.require('./store/disk').saveKidNodes(state.curNode.getId(), rspData);
                                    }

                                    if (state.rootNode === state.curNode && state.loadParams.start === 0 && !state.firstloaded) {
                                        context.commit('setFirstLoaded', true);
                                        _emitter2.default.$emit('module:disk:firstloaded');
                                        if (_speed2.default.canReport && !context.rootState.userInfo.is_pwd_open) {
                                            _speed2.default.storePoint('22162-1-1', 29, +new Date() - _speed2.default.base_time);
                                            _speed2.default.report('22162-1-1', true);
                                        }
                                    }

                                case 19:
                                case 'end':
                                    return _context.stop();
                            }
                        }
                    }, _callee, this, [[1, 8]]);
                }));

                return function (_x) {
                    return _ref.apply(this, arguments);
                };
            }(), function (error) {
                loading = false;
                _wyToast2.default.error(error.msg);
            });
        },
        loadMoreFiles: function loadMoreFiles(_ref2) {
            var state = _ref2.state,
                dispatch = _ref2.dispatch;

            state.loadParams.start = state.curNode.getKidCount() + state.curNode.getHideKidCount();
            dispatch('loadDiskFiles');
        },
        openDirByKey: function openDirByKey(_ref3, dirKey) {
            var state = _ref3.state,
                commit = _ref3.commit,
                dispatch = _ref3.dispatch;

            var destNode = state.rootNode.getKid(dirKey, true);
            if (destNode) {
                if (destNode !== state.curNode) {
                    dispatch('openDirNode', destNode);
                }
                return;
            }

            _request2.default.webapp({
                protocol: 'weiyunFileLibClient',
                name: 'LibDirPathGet',
                cmd: 26150,
                data: {
                    dir_key: dirKey
                }
            }).then(function (res) {
                dispatch('location', res.items);
            }).catch(function () {
                commit('control/reloadPage', null, {
                    root: true
                });
            });
        },
        openDirNode: function openDirNode(_ref4, dirNode) {
            var state = _ref4.state,
                dispatch = _ref4.dispatch;


            state.curNode = dirNode;
            if (dirNode.getKidCount() === 0 || dirNode.isDirty()) {
                if (dirNode.isDirty()) {
                    dirNode.removeAll();
                }
                state.loadParams.start = 0;
                dispatch('loadDiskFiles');
            }
            if (location.pathname.indexOf(dirNode.getId()) === -1) {
                setTimeout(function () {
                    _router2.default.push('/disk/folder/' + dirNode.getId());
                }, 0);
            }
            console.log('openDir: name:' + dirNode.getName() + ' dirKey:' + dirNode.getId());
        },
        returnRoot: function returnRoot(_ref5) {
            var state = _ref5.state,
                dispatch = _ref5.dispatch;


            if (!state.rootNodeInited) {
                return;
            }
            state.curNode = state.rootNode;
            state.cate = 'personal';
            if (state.curNode.getKidCount() === 0 || state.curNode.isDirty()) {
                if (state.curNode.isDirty()) {
                    state.curNode.removeAll();
                }
                state.loadParams.start = 0;
                dispatch('loadDiskFiles');
            }
            if (location.pathname !== '/disk') {
                setTimeout(function () {
                    _router2.default.push('/disk');
                }, 0);
            }
            console.log('returnRoot');
        },
        createFolder: function createFolder(_ref6) {
            var state = _ref6.state;


            if (!state.rootNodeInited) {
                return;
            }

            var idx = 0;
            state.curNode.getKidDirs().forEach(function (dir) {
                if (dir.getName() === '新建文件夹') {
                    idx++;
                }
            });
            var tempFolder = new _FileNode2.default({
                dir_key: '__temp__',
                pdir_key: state.curNode.getId(),
                ppdir_key: state.curNode.getPdirKey(),
                dir_name: '\u65B0\u5EFA\u6587\u4EF6\u5939' + (idx > 0 ? idx : ''),
                tempcreate: true
            });
            state.curNode.unshiftNode(tempFolder);
        },
        createDocument: function createDocument(_ref7, type) {
            var state = _ref7.state;

            var nameMap = {
                doc: '新建 Microsoft Word 文档.docx',
                xls: '新建 Microsoft Excel 工作表.xlsx',
                ppt: '新建 Microsoft PowerPoint 演示文稿.pptx'
            };
            var tempNode = new _FileNode2.default({
                file_id: '__temp__',
                pdir_key: state.curNode.getId(),
                ppdir_key: state.curNode.getPdirKey(),
                filename: nameMap[type],
                tempcreate: true
            });
            state.curNode.unshiftNode(tempNode);
        },
        switchView: function switchView(context, mode) {
            context.state.viewMode = mode;
            _storage2.default.set(BASE_VIEW_KEY, mode);
            console.log('switchView viewMode: ' + mode);
        },
        switchSort: function switchSort(_ref8, payload) {
            var state = _ref8.state,
                dispatch = _ref8.dispatch;

            state.sortField = payload.sortField;
            state.loadParams.sortField = payload.sortField;
            _storage2.default.set(BASE_SORT_KEY, payload.sortField);
            state.headerItems.forEach(function (item) {
                if (item.sortField === payload.sortField) {
                    item.reverse = payload.reverse;
                    return false;
                }
            });
            state.sortMenu.forEach(function (item) {
                if (item.value === payload.sortField) {
                    item.reverse = payload.reverse;
                    return false;
                }
            });

            state.loadParams.start = 0;
            state.curNode.removeAll();
            dispatch('loadDiskFiles');
            console.log('switchSort sortField: ' + payload.sortField);
        },
        location: function location(_ref9, dirItems) {
            var state = _ref9.state,
                dispatch = _ref9.dispatch,
                commit = _ref9.commit;

            state.cate = 'personal';
            if (loading && state.curNode === state.rootNode) {
                commit('setLocationDirItems', dirItems);
                return;
            }

            var targetNode = state.rootNode;
            dirItems.forEach(function (item) {
                if (item.dir_key === targetNode.getId()) {} else {
                    var dirNode = new _FileNode2.default(item);
                    var tempNode = targetNode.getKid(dirNode.getId());
                    if (tempNode) {
                        dirNode = tempNode;
                    } else {
                        targetNode.addNode(dirNode);
                    }
                    targetNode.setDirty(true);
                    targetNode = dirNode;
                    targetNode.setDirty(true);
                }
            });

            if (targetNode === state.rootNode) {
                dispatch('returnRoot');
            } else {
                dispatch('openDirNode', targetNode);
            }
        },
        insertFileNode: function insertFileNode(_ref10, payload) {
            var state = _ref10.state,
                dispatch = _ref10.dispatch;

            var fileInfo = payload.fileInfo;
            var destDirKey = payload.destDirKey;
            if (destDirKey === state.curNode.getId()) {
                var fileNode = new _FileNode2.default(fileInfo);
                if (fileNode.isImage() || fileNode.isVideo()) {
                    dispatch('refresh');
                } else {
                    state.curNode.unshiftNode(fileNode);
                }
            } else {
                var destNode = state.rootNode.getKid(destDirKey, true);
                destNode && destNode.setDirty(true);
            }
        },
        moveToDir: function moveToDir(_ref11, destDirKey) {
            var state = _ref11.state,
                dispatch = _ref11.dispatch;

            if (destDirKey === state.curNode.getId()) {
                dispatch('refresh');
            } else {
                var destNode = state.rootNode.getKid(destDirKey, true);
                destNode && destNode.setDirty(true);
            }
        },
        showEmptyContextMenu: function showEmptyContextMenu(context, position) {
            if (!context.rootGetters['userInfo/loaded']) {
                return;
            }
            _wyContextmenu2.default.show({
                items: context.getters.menuItems,
                position: position,
                itemClick: function itemClick(method) {
                    context.dispatch(method);
                }
            });
        },
        refresh: function refresh(_ref12) {
            var state = _ref12.state,
                dispatch = _ref12.dispatch;

            state.loadParams.start = 0;
            state.curNode.removeAll();
            _report2.default.hot('ctxmenu_refresh');
            _report2.default.beacon('web_ctxmenu_refresh', { count: 1 });

            return dispatch('loadDiskFiles');
        },
        listShow: function listShow(context) {
            context.dispatch('switchView', 'list');
            _report2.default.hot('ctxmenu_switch_list');
            _report2.default.beacon('web_ctxmenu_switch_list', { count: 1 });
        },
        thumbShow: function thumbShow(context) {
            context.dispatch('switchView', 'thumb');
            _report2.default.hot('ctxmenu_switch_thumb');
            _report2.default.beacon('web_ctxmenu_switch_thumb', { count: 1 });
        },
        uploadFile: function uploadFile() {
            _emitter2.default.$emit('upload:uploadfile');
            _report2.default.hot('ctxmenu_uploadfile');
            _report2.default.beacon('web_ctxmenu_uploadfile', { count: 1 });
        },
        uploadFolder: function uploadFolder() {
            _emitter2.default.$emit('upload:uploadfolder');
            _report2.default.hot('ctxmenu_uploadfolder');
            _report2.default.beacon('web_ctxmenu_uploadfolder', { count: 1 });
        },
        getFileNode: function getFileNode(_ref13, fileId) {
            var state = _ref13.state;

            return state.curNode.getKid(fileId);
        }
    }
};

/***/ }),

/***/ "4zjU":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"menu-item",class:{act: _vm.item.selected},on:{"mousedown":function($event){$event.preventDefault();$event.stopPropagation();},"click":function($event){$event.preventDefault();$event.stopPropagation();_vm.itemClick(_vm.item)},"mouseenter":function($event){_vm.itemMouseover(_vm.item)}}},[(_vm.item.subBtn)?_c('button',{staticClass:"btn",class:['btn-' + _vm.item.subBtn.cls],on:{"click":function($event){_vm.subBtnClick(_vm.item)}}},[_c('span',{staticClass:"txt"},[_vm._v(_vm._s(_vm.item.subBtn.text))])]):_vm._e(),_vm._v(" "),_c('span',{staticClass:"txt"},[(_vm.item.icon)?_c('i',{staticClass:"icon",class:['icon-' + _vm.item.icon]}):_vm._e(),_vm._v(" "),(_vm.item.secItems && _vm.item.secItems.length)?_c('i',{staticClass:"icon icon-trig"}):_vm._e(),_vm._v("\n        "+_vm._s(_vm.item.name)+"\n        "),(_vm.item.subIcon)?_c('i',{staticClass:"icon",class:['icon-' + _vm.item.subIcon]}):_vm._e(),_vm._v(" "),(_vm.item.subName)?_c('span',{staticClass:"sub-txt"},[_vm._v(_vm._s(_vm.item.subName))]):_vm._e()]),_vm._v(" "),(_vm.item.split)?_c('div',{staticClass:"spliter"}):_vm._e(),_vm._v(" "),(_vm.item.secItems)?_c('div',{staticClass:"mod-bubble-menu mod-bubble-menu-sec with-border"},[_c('ul',{staticClass:"menu-list"},_vm._l((_vm.item.secItems),function(item,i){return _c('wy-contextmenu-item',{key:i,attrs:{"item":item}})}))]):_vm._e()])}
var staticRenderFns = []


/***/ }),

/***/ "5R7R":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _list = __webpack_require__("EfeZ");

var _list2 = _interopRequireDefault(_list);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _list2.default;

/***/ }),

/***/ "8DuR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{directives:[{name:"select-item",rawName:"v-select-item",value:(_vm.toggleSelect),expression:"toggleSelect"}],staticClass:"item",class:{act: _vm.selected},on:{"contextmenu":function($event){$event.stopPropagation();$event.preventDefault();return _vm.itemContextmenu($event)},"click":_vm.itemClick}},[_c('div',{staticClass:"inner"},[_c('i',{staticClass:"icon-wrapper"},[_c('i',{ref:"dragThumb",staticClass:"icon",class:[_vm.iconCls]})]),_vm._v(" "),_c('span',{directives:[{name:"show",rawName:"v-show",value:(!_vm.editing),expression:"!editing"}],ref:"dragInfo",staticClass:"txt",attrs:{"title":_vm.fileNode.getName()}},[_vm._v(_vm._s(_vm.fileNode.getName()))]),_vm._v(" "),(_vm.editing)?_c('span',{staticClass:"txt",on:{"click":function($event){$event.preventDefault();$event.stopPropagation();},"mousedown":function($event){$event.stopPropagation();}}},[(_vm.renaming)?_c('input',{directives:[{name:"focus",rawName:"v-focus"}],ref:"renamingInput",staticClass:"ui-input",attrs:{"type":"text"},domProps:{"value":_vm.fileNode.getName()},on:{"blur":function($event){_vm.confirmRename($event, _vm.fileNode)},"keyup":[function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.blur($event)},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"esc",27,$event.key,"Escape")){ return null; }$event.preventDefault();$event.stopPropagation();return _vm.cancelEditing($event)}]}}):(_vm.creating)?_c('input',{directives:[{name:"focus",rawName:"v-focus"}],ref:"creatingInput",staticClass:"ui-input",attrs:{"type":"text"},domProps:{"value":_vm.fileNode.getName()},on:{"blur":function($event){_vm.confirmCreate($event, _vm.fileNode)},"keyup":[function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.blur($event)},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"esc",27,$event.key,"Escape")){ return null; }$event.preventDefault();$event.stopPropagation();return _vm.cancelEditing($event)}]}}):_vm._e()]):_vm._e()]),_vm._v(" "),_c('i',{staticClass:"icon icon-check-s icon-checkbox",on:{"click":function($event){$event.stopPropagation();_vm.toggleSelect($event, !_vm.selected)}}})])}
var staticRenderFns = []


/***/ }),

/***/ "8cVY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_loadmore_vue__ = __webpack_require__("SLAE");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_loadmore_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_loadmore_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_loadmore_vue__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_loadmore_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_94ace956_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_loadmore_vue__ = __webpack_require__("VkbS");
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_loadmore_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_94ace956_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_loadmore_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_94ace956_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_loadmore_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "9Oxu":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {

	props: {
		fileNode: Object,
		allChecked: Boolean,
		editingItemKey: String,
		pureIcon: Boolean
	},

	data: function data() {
		return {
			draggable: true,
			cancelEdited: false,
			lastClickTime: 0
		};
	},


	computed: {
		fileIcon: function fileIcon() {
			if (this.fileNode.isVideo() && !this.pureIcon) {
				return 'icon-gray-m';
			}
			if (this.fileNode.isDir() && this.fileNode.isInboxDir() && !this.fileNode.isInboxClose()) {
				return 'icon-inbox-m';
			}
			if (this.fileNode.isImage() && !this.pureIcon) {
				return this.fileNode.canPreview() ? '' : 'icon-gray-m icon-error-m';
			}
			return 'icon-' + this.fileNode.getType() + '-m';
		},
		droppable: function droppable() {
			return this.fileNode.isDir();
		},
		selected: function selected() {
			return this.fileNode.isSelected();
		},
		renaming: function renaming() {
			return this.fileNode.isRenaming && this.fileNode.isRenaming();
		},
		creating: function creating() {
			return this.fileNode.isTempcreate && this.fileNode.isTempcreate();
		},
		editing: function editing() {
			return this.renaming || this.creating;
		},
		filePath: function filePath() {
			return this.fileNode.getExtInfo().path || '';
		}
	},

	watch: {
		editing: function editing(val) {
			this.$emit('hasItemEditing', val ? this.fileNode.getId() : null);
		}
	},

	mounted: function mounted() {
		if (this.creating) {
			this.$emit('hasItemEditing', this.fileNode.getId());
		}
	},


	methods: {
		itemClick: function itemClick(e) {

			if (this.fileNode.isTempcreate()) {
				return;
			}

			var now = +new Date();
			var dblclick = false;

			if (now - this.lastClickTime < 300) {
				dblclick = true;
			}

			this.lastClickTime = now;
			if (e.shiftKey) {
				this.$emit('shiftAndClick', this.fileNode);
			} else if (e.ctrlKey) {
				this.$emit('ctrlAndClick', this.fileNode);
			} else if (!dblclick && (e.target === this.$refs.dragInfo || e.target.parentNode === this.$refs.dragThumb || e.target.parentNode.parentNode === this.$refs.dragThumb)) {
				if (this.editingItemKey) {
					this.$emit('blurEditingItem', this.editingItemKey);
				} else {
					this.$emit('itemClick', this.fileNode, e);
				}
			} else if (dblclick && !(e.target === this.$refs.dragInfo || e.target.parentNode === this.$refs.dragThumb)) {
				if (this.editingItemKey) {
					this.$emit('blurEditingItem', this.editingItemKey);
				} else {
					this.$emit('itemClick', this.fileNode, e);
				}
			} else if (!dblclick) {
				if (this.editingItemKey) {
					this.$emit('blurEditingItem', this.editingItemKey);
				} else {
					this.$emit('singleSelect', this.fileNode);
				}
			}
		},
		itemDblclick: function itemDblclick(e) {
			console.log('itemDblclick');
			this.dbl = true;
		},
		pathClick: function pathClick(fileNode) {
			if (fileNode.isDir()) {
				window.open('//www.weiyun.com/disk/folder/' + fileNode.getId());
			} else {
				window.open('//www.weiyun.com/disk/folder/' + fileNode.getPdirKey());
			}
		},
		itemContextmenu: function itemContextmenu(e) {
			this.$emit('itemContextmenu', this.fileNode, {
				x: e.clientX,
				y: e.clientY
			});
		},
		toggleSelect: function toggleSelect(e, selected) {
			if (typeof selected === 'undefined') {
				selected = e;
				e = {};
			}
			this.fileNode.setSelected(selected);
			if (selected && !e.shiftKey) {
				this.$emit('lastItemSelect', this.fileNode);
			}
			if (e.shiftKey) {
				this.$emit('shiftAndClick', this.fileNode);
			}
		},
		blur: function blur(e) {
			e.currentTarget.blur();
		},
		confirmRename: function confirmRename(e, fileNode) {
			var fileName = e.currentTarget.value;

			if (fileNode.isSelected() && this.renaming) {
				fileNode.setTempname(fileName);
				this.$emit('confirmRename');
			} else {
				fileNode.setRenaming(false);
				fileNode.setTempname('');
			}
		},
		confirmCreate: function confirmCreate(e, fileNode) {
			var fileName = e.currentTarget.value;

			if (this.cancelEdited) {
				return;
			}
			fileNode.setTempname(fileName);

			this.$emit('confirmCreate', fileNode);
		},
		cancelEditing: function cancelEditing(e) {
			if (this.renaming) {
				this.fileNode.setRenaming(false);
				this.fileNode.setTempname('');
			} else {
				this.cancelEdited = true;
				this.fileNode.setTempname('');
				this.$emit('confirmCreate', this.fileNode);
			}
			this.fileNode.setSelected(false);
		},
		onError: function onError() {
			this.fileNode.setPreviewError();
		}
	}
};

/***/ }),

/***/ "ABew":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _listHeader = __webpack_require__("mPwe");

var _listHeader2 = _interopRequireDefault(_listHeader);

var _listBody = __webpack_require__("1TRa");

var _listBody2 = _interopRequireDefault(_listBody);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	components: {
		wyListHeader: _listHeader2.default,
		wyListBody: _listBody2.default
	},
	props: {
		selectable: Boolean,
		dragable: Boolean,
		hasLoadDone: Boolean,
		showFrame: Boolean,
		isNoBlankClick: Boolean,
		isNoClearOthers: Boolean,
		listHeader: Object,
		nodeList: Array,
		subscript: String,
		needClear: Boolean,
		pureIcon: Boolean
	},

	computed: {
		selectedList: function selectedList() {
			return this.nodeList.filter(function (item) {
				if (item.isSelected()) {
					return true;
				}
			});
		},
		isInboxDir: function isInboxDir() {
			var parentNode = this.nodeList[0].getParent();
			return parentNode && parentNode.isInboxDir();
		}
	},
	filters: {
		getUploaderName: function getUploaderName(fileNode) {
			return fileNode.getExtInfo().upload_nickname;
		}
	},
	methods: {
		loadMore: function loadMore() {
			this.$emit('loadMore');
		},
		isStarTime: function isStarTime() {
			return this.listHeader && this.listHeader['items'] && this.listHeader['items'][1] && this.listHeader['items'][1]['name'] === 'stime';
		},
		clearSelected: function clearSelected() {
			this.nodeList.map(function (item) {
				item.setSelected(false);
			});
		},
		selectAll: function selectAll() {
			this.nodeList.map(function (item) {
				item.setSelected(true);
			});
		},
		triggerSelectAll: function triggerSelectAll() {
			if (this.selectedList.length === this.nodeList.length) {
				this.clearSelected();
			} else {
				this.selectAll();
			}
		},
		dragdrop: function dragdrop(destDir) {
			this.$emit('dragdrop', destDir);
		},
		sortReverse: function sortReverse(opt) {
			this.$emit('sortReverse', opt);
		},
		filterChange: function filterChange(item, menuItem) {
			this.$emit('filterChange', item, menuItem);
		},
		itemClick: function itemClick(fileNode) {
			this.$emit('itemClick', fileNode);
		},
		itemContextmenu: function itemContextmenu(fileNode, position) {
			if (!fileNode.isSelected()) {
				this.clearSelected();
				fileNode.setSelected(true);
			}
			this.$emit('itemContextmenu', position);
		},
		confirmRename: function confirmRename() {
			this.$emit('confirmRename');
		},
		confirmCreate: function confirmCreate(fileNode) {
			this.$emit('confirmCreate', fileNode);
		}
	}
};

/***/ }),

/***/ "B3Hc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_notice_bar_vue__ = __webpack_require__("1TPr");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_notice_bar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_notice_bar_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_notice_bar_vue__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_notice_bar_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8f3c5bb0_hasScoped_true_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_notice_bar_vue__ = __webpack_require__("1X1I");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("XyMi");
function injectStyle (context) {
  __webpack_require__("l+Gp")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-8f3c5bb0"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_notice_bar_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8f3c5bb0_hasScoped_true_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_notice_bar_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8f3c5bb0_hasScoped_true_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_notice_bar_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "BC/i":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"mod-figure-list"},[_c('div',{staticClass:"figure-box clearfix"},[_c('ul',{ref:"list",staticClass:"figures-list clearfix"},_vm._l((_vm.fileNodeList),function(fileNode){return _c('wyThumbFile',{key:fileNode.getId(),ref:"listItem",refInFor:true,attrs:{"fileNode":fileNode,"allChecked":_vm.allChecked,"itemWidth":_vm.itemWidth,"editingItem":_vm.editingItem},on:{"hasItemEditing":_vm.hasItemEditing,"blurEditingItem":_vm.blurEditingItem,"itemClick":_vm.itemClick,"shiftAndClick":_vm.shiftAndClick,"ctrlAndClick":_vm.ctrlAndClick,"lastItemSelect":_vm.lastItemSelect,"singleSelect":_vm.singleSelect,"itemContextmenu":_vm.itemContextmenu,"confirmRename":_vm.confirmRename,"confirmCreate":_vm.confirmCreate}})}))])])}
var staticRenderFns = []


/***/ }),

/***/ "BTf5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_notice_bar_vue__ = __webpack_require__("z3SN");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_notice_bar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_notice_bar_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_notice_bar_vue__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_notice_bar_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1cb58e34_hasScoped_true_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_notice_bar_vue__ = __webpack_require__("J2M3");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("XyMi");
function injectStyle (context) {
  __webpack_require__("jNAy")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1cb58e34"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_notice_bar_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1cb58e34_hasScoped_true_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_notice_bar_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1cb58e34_hasScoped_true_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_notice_bar_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "CitZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"mod-list-group mod-list-group-thumb"},[(_vm.sortInfo.items.length)?_c('wy-thumb-header',{directives:[{name:"show",rawName:"v-show",value:(_vm.nodeList.length),expression:"nodeList.length"}],attrs:{"nodeList":_vm.nodeList,"sortInfo":_vm.sortInfo,"selectable":_vm.selectable},on:{"switchSort":_vm.switchSort,"triggerSelectAll":_vm.triggerSelectAll}}):_vm._e(),_vm._v(" "),_c('div',{directives:[{name:"select-box",rawName:"v-select-box",value:({selectEnable: _vm.selectEnable, selectCallback: _vm.selectCallback}),expression:"{selectEnable: selectEnable, selectCallback: selectCallback}"},{name:"dragdrop",rawName:"v-dragdrop",value:({dragRefs: ['dragThumb', 'dragInfo'], dragEnable: _vm.dragEnable, dragCallback: _vm.dragCallback, dropCallback: _vm.dropCallback}),expression:"{dragRefs: ['dragThumb', 'dragInfo'], dragEnable: dragEnable, dragCallback: dragCallback, dropCallback: dropCallback}"},{name:"lazy-load",rawName:"v-lazy-load"},{name:"scroll-bottom",rawName:"v-scroll-bottom",value:(_vm.loadMore),expression:"loadMore"}],ref:"listScrollBox",staticClass:"list-group-bd",attrs:{"tabindex":"0"},on:{"keydown":function($event){if(!('button' in $event)&&$event.keyCode!==65){ return null; }if(!$event.ctrlKey){ return null; }$event.stopPropagation();$event.preventDefault();return _vm.selectAll($event)}}},[(_vm.dirNodeList.length)?_c('wyThumbFolderList',{ref:"thumbFolderList",attrs:{"dirNodeList":_vm.dirNodeList,"folderWidth":_vm.folderWidth,"editingItem":_vm.editingItem},on:{"hasItemEditing":_vm.hasItemEditing,"blurEditingItem":_vm.blurEditingItem,"itemClick":_vm.itemClick,"shiftAndClick":_vm.shiftAndClick,"ctrlAndClick":_vm.ctrlAndClick,"lastItemSelect":_vm.lastItemSelect,"singleSelect":_vm.singleSelect,"itemContextmenu":_vm.itemContextmenu,"confirmRename":_vm.confirmRename,"confirmCreate":_vm.confirmCreate}}):_vm._e(),_vm._v(" "),(_vm.fileNodeList.length)?_c('wyThumbFileList',{ref:"thumbFileList",attrs:{"fileNodeList":_vm.fileNodeList,"itemWidth":_vm.itemWidth,"editingItem":_vm.editingItem},on:{"hasItemEditing":_vm.hasItemEditing,"blurEditingItem":_vm.blurEditingItem,"itemClick":_vm.itemClick,"shiftAndClick":_vm.shiftAndClick,"ctrlAndClick":_vm.ctrlAndClick,"lastItemSelect":_vm.lastItemSelect,"singleSelect":_vm.singleSelect,"itemContextmenu":_vm.itemContextmenu,"confirmRename":_vm.confirmRename,"confirmCreate":_vm.confirmCreate}}):_vm._e(),_vm._v(" "),_c('wyLoadmore',{directives:[{name:"show",rawName:"v-show",value:(!_vm.hasLoadDone),expression:"!hasLoadDone"}],attrs:{"empty":_vm.nodeList.length === 0}}),_vm._v(" "),(_vm.nodeList.length > 0 && _vm.hasLoadDone)?_c('div',{staticClass:"list-group-info"},[_c('p',{staticClass:"info-con"},[_vm._v("共"),_c('b',{staticClass:"count"},[_vm._v(_vm._s(_vm.nodeList.length))]),_vm._v("项")])]):_vm._e()],1)],1)}
var staticRenderFns = []


/***/ }),

/***/ "D63v":
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

/***/ "DW8/":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _thumbList = __webpack_require__("2EGv");

var _thumbList2 = _interopRequireDefault(_thumbList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _thumbList2.default;

/***/ }),

/***/ "ELTj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_menu_list_vue__ = __webpack_require__("LLyr");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_menu_list_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_menu_list_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_menu_list_vue__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_menu_list_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7e5ef3b3_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_menu_list_vue__ = __webpack_require__("rEHN");
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_menu_list_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7e5ef3b3_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_menu_list_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7e5ef3b3_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_menu_list_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "EfeZ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_list_vue__ = __webpack_require__("ABew");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_list_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_list_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_list_vue__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_list_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3ffe97fc_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_list_vue__ = __webpack_require__("MrPn");
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_list_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3ffe97fc_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_list_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3ffe97fc_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_list_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "GaFJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"mod-status"},[_c('div',{staticClass:"empty-box"},[_c('div',{staticClass:"status-inner"},[_c('i',{staticClass:"icon icon-nofile"}),_vm._v(" "),_c('h2',{staticClass:"title"},[_vm._v("暂无文件")]),_vm._v(" "),_c('p',{staticClass:"txt"},[_vm._v("请点击左上角的“上传”按钮添加")])])])])}]


/***/ }),

/***/ "GyQT":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _loadmore = __webpack_require__("8cVY");

var _loadmore2 = _interopRequireDefault(_loadmore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _loadmore2.default;

/***/ }),

/***/ "HBnT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"list-group-hd"},[_c('div',{staticClass:"list-group-tit-wrap"},_vm._l((_vm.headerItems),function(item,i){return _c('div',{key:i,staticClass:"list-group-tit",class:[
                     item.name,
                     {checked: i === 0 && _vm.hasSelected},
                     {cur: item.sortField === _vm.sortField},
                     {up: item.reverse === true},
                     {act: item.showFilter},
					 {dis: !item.sortable && !item.filterable},
                     {hide: i !== 0 && _vm.hasSelected}],on:{"click":function($event){_vm.onItemClick(item)}}},[(i === 0 && _vm.selectable)?_c('span',{staticClass:"mod-check",class:{act: _vm.allSelected}},[_c('i',{staticClass:"icon icon-check-s icon-checkbox",on:{"click":function($event){$event.stopPropagation();return _vm.triggerSelectAll($event)}}}),_vm._v(" "),_c('span',{staticClass:"check-info"},[_vm._v("已选择 "),_c('b',{staticClass:"check-info-num"},[_vm._v(_vm._s(_vm.selectedList.length))]),_vm._v(" 项")])]):_vm._e(),_vm._v(" "),_c('span',{staticClass:"tit-con"},[_vm._v(_vm._s(item.text)),_c('i',{staticClass:"icon",class:[{'icon-sort': item.sortField === _vm.sortField}, {'icon-trig': item.filterable}]})]),_vm._v(" "),(item.filterable)?_c('div',{directives:[{name:"show",rawName:"v-show",value:(item.showFilter),expression:"item.showFilter"}],staticClass:"mod-bubble-menu with-border"},[_c('ul',_vm._l((item.filterItems),function(menuItem,j){return _c('li',{key:j,staticClass:"menu-item",class:{act: menuItem.act},on:{"click":function($event){_vm.onMenuItemClick(item, menuItem)}}},[_c('span',{staticClass:"txt"},[_c('i',{staticClass:"icon icon-sel"}),_vm._v(_vm._s(menuItem.text))])])}))]):_vm._e()])}))])}
var staticRenderFns = []


/***/ }),

/***/ "IalN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_wy_disk_vue__ = __webpack_require__("nQO8");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_wy_disk_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_wy_disk_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_wy_disk_vue__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_wy_disk_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f5487204_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_wy_disk_vue__ = __webpack_require__("13Ol");
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_wy_disk_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f5487204_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_wy_disk_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f5487204_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_wy_disk_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "J2M3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.isShowNotice)?_c('div',{class:[_vm.isMobile ? 'coupon-notice-bar-mobile' : 'coupon-notice-bar']},[_c('i',{staticClass:"coupon-notice-icon"}),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.noticeText))]),_vm._v(" "),_c('a',{staticClass:"coupon-notice-link",on:{"click":function($event){$event.preventDefault();return _vm.collectCoupon($event)}}},[_vm._v(" "+_vm._s(_vm.linkText))]),_vm._v(" "),_c('div',{staticClass:"flex-grow"}),_vm._v(" "),_c('div',{staticClass:"coupon-notice-close",on:{"click":function($event){$event.preventDefault();return _vm.manuallyClose($event)}}})]):_vm._e()}
var staticRenderFns = []


/***/ }),

/***/ "LH2o":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_thumb_file_list_vue__ = __webpack_require__("ZjH0");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_thumb_file_list_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_thumb_file_list_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_thumb_file_list_vue__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_thumb_file_list_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9fe0175c_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_thumb_file_list_vue__ = __webpack_require__("BC/i");
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_thumb_file_list_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9fe0175c_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_thumb_file_list_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_9fe0175c_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_thumb_file_list_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "LLyr":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _menuItem = __webpack_require__("ySHS");

var _menuItem2 = _interopRequireDefault(_menuItem);

var _emitter = __webpack_require__("D63v");

var _emitter2 = _interopRequireDefault(_emitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var menuWidth = 180;
var itemHeight = 30;
var padHeight = 6;

var traverseItems = function traverseItems(items, level, fn) {
    fn(level);
    level++;
    items.forEach(function (item) {
        if (item.secItems) {
            traverseItems(item.secItems, level, fn);
        }
    });
};

exports.default = {

    name: 'wyContextmenu',

    components: {
        wyContextmenuItem: _menuItem2.default
    },

    props: {
        position: Object,
        items: Array
    },

    computed: {
        left: function left() {
            var position = this.position;
            if (position.x + menuWidth > window.innerWidth) {
                return position.x - (position.x + menuWidth - window.innerWidth) - 8;
            }
            return position.x;
        },
        top: function top() {
            var position = this.position;
            var menuHeight = this.items.length * itemHeight + padHeight * 2;
            if (position.y + menuHeight > window.innerHeight) {
                return position.y - (position.y + menuHeight - window.innerHeight) - 20;
            }
            return position.y;
        },
        reverse: function reverse() {
            var level = 0;
            var map = {};
            traverseItems(this.items, 1, function (l) {
                if (!map[l]) {
                    map[l] = true;
                    level++;
                }
            });

            if (level * menuWidth + this.position.x > window.innerWidth) {
                return true;
            }
            return false;
        }
    },

    mounted: function mounted() {
        var _this = this;

        _emitter2.default.$on('itemClick', function (method, item) {
            _this.$emit('itemClick', method, item);
        });
        _emitter2.default.$on('itemHover', function (name, item) {
            _this.$emit('itemHover', name, item);
        });
    },
    destroyed: function destroyed() {
        _emitter2.default.$off('itemClick');
        _emitter2.default.$off('itemHover');
    }
};

/***/ }),

/***/ "LhN1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_thumb_file_vue__ = __webpack_require__("wa7I");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_thumb_file_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_thumb_file_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_thumb_file_vue__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_thumb_file_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1e1e54b8_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_thumb_file_vue__ = __webpack_require__("qAZv");
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_thumb_file_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1e1e54b8_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_thumb_file_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1e1e54b8_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_thumb_file_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "MX0j":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _switch = __webpack_require__("euSY");

var _switch2 = _interopRequireDefault(_switch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _switch2.default;

/***/ }),

/***/ "MrPn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"mod-list-group mod-list-group-files"},[(_vm.listHeader)?_c('wy-list-header',{directives:[{name:"show",rawName:"v-show",value:(_vm.nodeList.length),expression:"nodeList.length"}],attrs:{"listHeader":_vm.listHeader,"selectable":_vm.selectable,"nodeList":_vm.nodeList},on:{"sortReverse":_vm.sortReverse,"filterChange":_vm.filterChange,"triggerSelectAll":_vm.triggerSelectAll}}):_vm._e(),_vm._v(" "),_c('wy-list-body',{ref:"normalListBody",attrs:{"nodeList":_vm.nodeList,"subscript":_vm.subscript,"selectable":_vm.selectable,"dragable":_vm.dragable,"pureIcon":_vm.pureIcon,"hasLoadDone":_vm.hasLoadDone,"showFrame":_vm.showFrame,"isNoBlankClick":_vm.isNoBlankClick,"needClear":_vm.needClear,"isNoClearOthers":_vm.isNoClearOthers},on:{"loadMore":_vm.loadMore,"dragdrop":_vm.dragdrop,"itemClick":_vm.itemClick,"itemContextmenu":_vm.itemContextmenu,"confirmRename":_vm.confirmRename,"confirmCreate":_vm.confirmCreate},scopedSlots:_vm._u([{key:"item-info",fn:function(props){return [_vm._t("item-info",[_c('div',{staticClass:"item-info"},[_c('span',{staticClass:"item-info-list"},[_c('span',{staticClass:"txt txt-time"},[_vm._v(_vm._s(_vm._f("PrettyDateFormat")(_vm.isStarTime() ? props.fileNode.getStarTime(): props.fileNode.getModifyTime(),true)))])]),_vm._v(" "),_c('span',{staticClass:"item-info-list"},[_c('span',{staticClass:"txt txt-size"},[_vm._v(_vm._s(props.fileNode.getReadabilitySize() || '-'))])]),_vm._v(" "),(_vm.isInboxDir)?_c('span',{staticClass:"item-info-list"},[_c('span',{staticClass:"txt txt-member"},[_vm._v(_vm._s(_vm._f("getUploaderName")(props.fileNode)))])]):_vm._e()])],{fileNode:props.fileNode})]}}])})],1)}
var staticRenderFns = []


/***/ }),

/***/ "OMWq":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {};

/***/ }),

/***/ "OrS1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"list-group-hd"},[_c('div',{staticClass:"list-group-tit-wrap"},[_c('div',{staticClass:"list-group-tit name cur",class:{up: _vm.reverseSupport && _vm.reverse, act: _vm.showed && _vm.canSort, dis: !_vm.canSort, checked: _vm.selectedList.length > 0}},[_c('span',{staticClass:"mod-check",class:{act: _vm.allSelected}},[_c('i',{staticClass:"icon icon-check-s icon-checkbox",on:{"click":function($event){$event.stopPropagation();return _vm.triggerSelectAll($event)}}}),_vm._v(" "),(_vm.selectable)?_c('span',{staticClass:"check-info"},[_vm._v("已选择\n                    "),_c('b',{staticClass:"check-info-num"},[_vm._v(_vm._s(_vm.selectedList.length))]),_vm._v(" 项")]):_vm._e()]),_vm._v(" "),_c('span',{staticClass:"tit-con",on:{"click":function($event){_vm.showed=!_vm.showed}}},[_vm._v("\n                "+_vm._s(_vm.sortName)+"\n                "),_c('i',{staticClass:"icon icon-sort"})]),_vm._v(" "),(_vm.canSort)?_c('div',{staticClass:"mod-bubble-menu with-border"},[_c('ul',[(_vm.reverseSupport)?_c('li',{staticClass:"menu-item",class:{act: _vm.reverse === true},on:{"click":function($event){_vm.switchSort({reverse: true})}}},[_vm._m(0)]):_vm._e(),_vm._v(" "),(_vm.reverseSupport)?_c('li',{staticClass:"menu-item",class:{act: _vm.reverse === false},on:{"click":function($event){_vm.switchSort({reverse: false})}}},[_vm._m(1),_vm._v(" "),_c('div',{staticClass:"spliter"})]):_vm._e(),_vm._v(" "),_vm._l((_vm.sortInfo.items),function(item,i){return _c('li',{key:i,staticClass:"menu-item",class:{act: item.value === _vm.sortInfo.sortField},on:{"click":function($event){_vm.switchSort({sortField: item.value})}}},[_c('span',{staticClass:"txt"},[_c('i',{staticClass:"icon icon-sel"}),_vm._v(_vm._s(item.name))])])})],2)]):_vm._e()])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"txt"},[_c('i',{staticClass:"icon icon-sel"}),_vm._v("升序")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"txt"},[_c('i',{staticClass:"icon icon-sel"}),_vm._v("降序")])}]


/***/ }),

/***/ "RPi2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_thumb_folder_vue__ = __webpack_require__("pT0X");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_thumb_folder_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_thumb_folder_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_thumb_folder_vue__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_thumb_folder_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ae7a4460_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_thumb_folder_vue__ = __webpack_require__("8DuR");
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_thumb_folder_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ae7a4460_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_thumb_folder_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ae7a4460_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_thumb_folder_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "RkKR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_thumb_folder_list_vue__ = __webpack_require__("ZZpA");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_thumb_folder_list_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_thumb_folder_list_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_thumb_folder_list_vue__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_thumb_folder_list_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_47fd230e_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_thumb_folder_list_vue__ = __webpack_require__("XU6w");
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_thumb_folder_list_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_47fd230e_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_thumb_folder_list_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_47fd230e_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_thumb_folder_list_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "S/NW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_toolbar_vue__ = __webpack_require__("TncT");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_toolbar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_toolbar_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_toolbar_vue__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_toolbar_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_245d1270_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_toolbar_vue__ = __webpack_require__("ioQX");
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_toolbar_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_245d1270_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_toolbar_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_245d1270_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_toolbar_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "SBSc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _poniter = __webpack_require__("xE/G");

var _poniter2 = _interopRequireDefault(_poniter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _poniter2.default;

/***/ }),

/***/ "SLAE":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    props: {
        hidden: false,
        empty: false,
        showFrame: false
    }
};

/***/ }),

/***/ "Sb35":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_thumb_header_vue__ = __webpack_require__("/vUQ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_thumb_header_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_thumb_header_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_thumb_header_vue__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_thumb_header_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2dac3d23_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_thumb_header_vue__ = __webpack_require__("OrS1");
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_thumb_header_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2dac3d23_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_thumb_header_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2dac3d23_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_thumb_header_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "TncT":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _menuItem = __webpack_require__("oWpG");

var _menuItem2 = _interopRequireDefault(_menuItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: {
        wyBarmenuItem: _menuItem2.default
    },
    props: {
        items: Array,
        hiddenText: {
            default: false,
            type: Boolean
        }
    },

    data: function data() {
        return {
            hidden: true,
            moreShowed: false
        };
    },


    computed: {
        expandItems: function expandItems() {
            return this.items.filter(function (item) {
                return !item.more;
            });
        },
        moreItems: function moreItems() {
            return this.items.filter(function (item) {
                return item.more;
            });
        }
    },

    watch: {
        hidden: function hidden(val) {
            if (val) {
                this.moreShowed = false;
            }
        }
    },

    mounted: function mounted() {
        document.body.addEventListener('click', this.hideMore);
    },
    destroyed: function destroyed() {
        document.body.removeEventListener('click', this.hideMore);
        emitter.$off('itemClick');
    },


    methods: {
        showMore: function showMore() {
            this.moreShowed = !this.moreShowed;
        },
        itemClick: function itemClick(item) {
            item.method && this.$emit('itemClick', item.method, item);
            this.moreShowed = false;
        },
        hideMore: function hideMore(e) {
            if (this.$el.contains && !this.$el.contains(e.target) && this.$el != e.target) {
                this.moreShowed = false;
            }
            if (this.$el.compareDocumentPosition && !(this.$el.compareDocumentPosition(e.target) & 16) && this.$el != e.target) {
                this.moreShowed = false;
            }
        }
    }
};

/***/ }),

/***/ "U3So":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_list_item_vue__ = __webpack_require__("9Oxu");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_list_item_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_list_item_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_list_item_vue__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_list_item_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4b63d6b0_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_list_item_vue__ = __webpack_require__("tU3S");
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_list_item_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4b63d6b0_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_list_item_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4b63d6b0_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_list_item_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "U6jU":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {

    props: {
        fileNodes: Array
    },

    computed: {
        count: function count() {
            return this.fileNodes.length;
        },
        firstFileNode: function firstFileNode() {
            return this.fileNodes[0];
        },
        fileIcon: function fileIcon() {
            return 'icon-' + this.firstFileNode.getType() + '-m';
        }
    }
};

/***/ }),

/***/ "VkbS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"load-more-main"},[(!_vm.hidden && _vm.showFrame)?_c('table',[_vm._m(0),_vm._v(" "),_c('tbody',_vm._l((2),function(i){return _c('tr',[_vm._m(1,true),_vm._v(" "),_vm._m(2,true),_vm._v(" "),_vm._m(3,true),_vm._v(" "),_vm._m(4,true)])}))]):_vm._e(),_vm._v(" "),(!_vm.hidden && !_vm.showFrame)?_c('div',{staticClass:"mod-loadmore",class:{load: _vm.empty}},[_c('i',{staticClass:"icon icon-load-bullet-left"}),_vm._v(" "),_c('i',{staticClass:"icon icon-load-bullet"}),_vm._v(" "),_c('i',{staticClass:"icon icon-load-bullet-right"})]):_vm._e()])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('thead',[_c('tr',[_c('th',[_c('div',{staticClass:"block-1"})]),_vm._v(" "),_c('th',[_c('div',{staticClass:"block-2"})]),_vm._v(" "),_c('th',[_c('div',{staticClass:"block-3"})]),_vm._v(" "),_c('th',[_c('div',{staticClass:"block-3"})])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('div',{staticClass:"block-4"}),_vm._v(" "),_c('div',{staticClass:"block-wrapper"},[_c('div',{staticClass:"block-5"}),_vm._v(" "),_c('div',{staticClass:"block-6"})])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('div',{staticClass:"block-7"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('div',{staticClass:"block-8"})])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('td',[_c('div',{staticClass:"block-9"})])}]


/***/ }),

/***/ "XU6w":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"mod-item-list"},[_c('ul',{ref:"list",staticClass:"item-list clearfix"},_vm._l((_vm.dirNodeList),function(dirNode){return _c('wyThumbFolder',{key:dirNode.getId(),ref:"listItem",refInFor:true,attrs:{"fileNode":dirNode,"folderWidth":_vm.folderWidth,"editingItem":_vm.editingItem},on:{"hasItemEditing":_vm.hasItemEditing,"blurEditingItem":_vm.blurEditingItem,"itemClick":_vm.itemClick,"shiftAndClick":_vm.shiftAndClick,"ctrlAndClick":_vm.ctrlAndClick,"lastItemSelect":_vm.lastItemSelect,"singleSelect":_vm.singleSelect,"itemContextmenu":_vm.itemContextmenu,"confirmRename":_vm.confirmRename,"confirmCreate":_vm.confirmCreate}})}))])}
var staticRenderFns = []


/***/ }),

/***/ "YsRn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"mod-action-wrap mod-action-wrap-c mod-action-wrap-d  mod-action-wrap-mode clearfix",style:({display: _vm.hidden ? 'none' : ''})},[_c('div',{staticClass:"action-item",on:{"click":function($event){_vm.switchView(_vm.viewMode === 'list' ? 'thumb' : 'list')}}},[_c('div',{staticClass:"action-item-con"},[_c('i',{staticClass:"icon",class:_vm.viewMode === 'list' ? 'icon-mode-thumb' : 'icon-mode-list'}),_vm._v(" "),_c('span',{staticClass:"act-txt"},[_vm._v(_vm._s(_vm.viewMode === 'list' ? '缩略图' : '列表'))])])])])}
var staticRenderFns = []


/***/ }),

/***/ "Yxjc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__("2234");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c1571256_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__("yfA0");
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c1571256_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c1571256_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "ZZpA":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _thumbFolder = __webpack_require__("RPi2");

var _thumbFolder2 = _interopRequireDefault(_thumbFolder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: {
        wyThumbFolder: _thumbFolder2.default
    },
    props: {
        folderWidth: Number,
        allChecked: Boolean,
        dirNodeList: Array,
        editingItem: Object
    },
    methods: {
        hasItemEditing: function hasItemEditing(editingItem) {
            this.$emit('hasItemEditing', editingItem);
        },
        blurEditingItem: function blurEditingItem(editingItem) {
            this.$emit('blurEditingItem', editingItem);
        },
        itemClick: function itemClick(fileNode) {
            this.$emit('itemClick', fileNode);
        },
        itemContextmenu: function itemContextmenu(fileNode, position) {
            this.$emit('itemContextmenu', fileNode, position);
        },
        lastItemSelect: function lastItemSelect(fileNode) {
            this.$emit('lastItemSelect', fileNode);
        },
        shiftAndClick: function shiftAndClick(fileNode) {
            this.$emit('shiftAndClick', fileNode);
        },
        ctrlAndClick: function ctrlAndClick(fileNode) {
            this.$emit('ctrlAndClick', fileNode);
        },
        singleSelect: function singleSelect(fileNode) {
            this.$emit('singleSelect', fileNode);
        },
        confirmRename: function confirmRename() {
            this.$emit('confirmRename');
        },
        confirmCreate: function confirmCreate(fileNode) {
            this.$emit('confirmCreate', fileNode);
        }
    }
};

/***/ }),

/***/ "ZjH0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _thumbFile = __webpack_require__("LhN1");

var _thumbFile2 = _interopRequireDefault(_thumbFile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    components: {
        wyThumbFile: _thumbFile2.default
    },
    props: {
        itemWidth: Number,
        allChecked: Boolean,
        fileNodeList: Array,
        editingItem: Object
    },
    methods: {
        hasItemEditing: function hasItemEditing(editingItem) {
            this.$emit('hasItemEditing', editingItem);
        },
        blurEditingItem: function blurEditingItem(editingItem) {
            this.$emit('blurEditingItem', editingItem);
        },
        itemClick: function itemClick(fileNode) {
            this.$emit('itemClick', fileNode);
        },
        itemContextmenu: function itemContextmenu(fileNode, position) {
            this.$emit('itemContextmenu', fileNode, position);
        },
        lastItemSelect: function lastItemSelect(fileNode) {
            this.$emit('lastItemSelect', fileNode);
        },
        singleSelect: function singleSelect(fileNode) {
            this.$emit('singleSelect', fileNode);
        },
        shiftAndClick: function shiftAndClick(fileNode) {
            this.$emit('shiftAndClick', fileNode);
        },
        ctrlAndClick: function ctrlAndClick(fileNode) {
            this.$emit('ctrlAndClick', fileNode);
        },
        confirmRename: function confirmRename() {
            this.$emit('confirmRename');
        },
        confirmCreate: function confirmCreate(fileNode) {
            this.$emit('confirmCreate', fileNode);
        }
    }
};

/***/ }),

/***/ "a6vS":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {

    props: {
        listHeader: Object,
        selectable: Boolean,
        nodeList: Array
    },

    data: function data() {
        return {
            hasItemClick: false
        };
    },


    computed: {
        headerItems: function headerItems() {
            return this.listHeader.items;
        },
        sortField: function sortField() {
            return typeof this.listHeader.sortField !== 'undefined' ? this.listHeader.sortField : 'sortField';
        },
        selectedList: function selectedList() {
            return this.nodeList.filter(function (item) {
                if (item.isSelected()) {
                    return true;
                }
            });
        },
        hasSelected: function hasSelected() {
            return this.selectedList.length > 0;
        },
        allSelected: function allSelected() {
            return this.nodeList.length && this.nodeList.length === this.selectedList.length;
        }
    },

    mounted: function mounted() {
        document.body.addEventListener('click', this.hideFilterMenu);
    },
    destroyed: function destroyed() {
        document.body.removeEventListener('click', this.hideFilterMenu);
    },


    methods: {
        triggerSelectAll: function triggerSelectAll() {
            this.$emit('triggerSelectAll');
        },
        onItemClick: function onItemClick(item) {
            var _this = this;

            if (this.hasSelected) {
                return;
            }

            if (item.sortable) {
                this.$emit('sortReverse', {
                    name: item.name,
                    sortField: item.sortField,
                    reverse: item.sortField === this.sortField ? !item.reverse : item.reverse
                });

                this.hasItemClick = true;
            }

            if (item.filterable) {
                item.showFilter = !item.showFilter;
                this.hasItemClick = true;
            }

            setTimeout(function () {
                _this.hasItemClick = false;
            }, 100);
        },
        hideFilterMenu: function hideFilterMenu(e) {
            if (!this.hasItemClick) {
                this.headerItems.forEach(function (item) {
                    if (item.filterable && item.showFilter) {
                        item.showFilter = false;
                    }
                });
            }
        },
        onMenuItemClick: function onMenuItemClick(item, menuItem) {
            item.text = menuItem.text;

            item.filterItems.forEach(function (i) {
                i.act = false;
                if (i === menuItem) {
                    menuItem.act = true;
                }
            });

            this.$emit('filterChange', item, menuItem);
        }
    }
};

/***/ }),

/***/ "awOJ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _vue = __webpack_require__("7+uW");

var _vue2 = _interopRequireDefault(_vue);

var _wyDragPointer = __webpack_require__("SBSc");

var _wyDragPointer2 = _interopRequireDefault(_wyDragPointer);

var _wyLoadmore = __webpack_require__("GyQT");

var _wyLoadmore2 = _interopRequireDefault(_wyLoadmore);

var _listItem = __webpack_require__("U3So");

var _listItem2 = _interopRequireDefault(_listItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WyDragPointer = _vue2.default.extend(_wyDragPointer2.default);

exports.default = {
	components: {
		wyFileItem: _listItem2.default,
		wyLoadmore: _wyLoadmore2.default
	},
	props: {
		subscript: String,
		selectable: Boolean,
		dragable: Boolean,
		hasLoadDone: Boolean,
		showFrame: Boolean,
		isNoBlankClick: Boolean,
		isNoClearOthers: Boolean,
		nodeList: Array,
		pureIcon: Boolean
	},

	data: function data() {
		return {
			lastSelectFileNode: null,
			offset: 0,
			end: 50,
			count: 50,
			editingItemKey: null
		};
	},


	computed: {
		tmpNodeList: function tmpNodeList() {
			var list = this.nodeList.slice(this.offset, this.end);
			return list;
		},
		draggable: function draggable() {
			return this.dragable;
		},
		selectedList: function selectedList() {
			return this.nodeList.filter(function (item) {
				if (item.isSelected()) {
					return true;
				}
			});
		}
	},

	watch: {
		nodeList: function nodeList(val, old) {
			var _this = this;

			if (val.length === 0) {
				this.end = this.count;
			}

			if (val[0] && old[0] && val[0].getParent() !== old[0].getParent()) {
				this.$el.scrollTop = 0;
			} else if (val.length !== old.length) {
				_vue2.default.nextTick(function () {
					_this.$el.scrollTop = _this.$el.scrollTop + 1;
				});
			}
		},
		selectList: function selectList(val, old) {
			if (val.length === this.nodeList.length) {
				val[0].getParent().setSelected(true);
			} else {
				val[0].getParent().setSelected(false);
			}
		}
	},

	deactivated: function deactivated() {
		this.end = this.count;
	},


	methods: {
		loadMore: function loadMore() {
			this.end += this.count;
			if (this.nodeList.length > this.end) {
				return;
			} else {
				this.$emit('loadMore');
			}
		},
		selectEnable: function selectEnable() {
			if (!this.selectable) {
				return false;
			}
			return true;
		},
		dragEnable: function dragEnable() {
			if (!this.draggable) {
				return false;
			}
			return true;
		},
		clearSelected: function clearSelected() {
			this.nodeList.map(function (item) {
				item.setSelected(false);
			});
		},
		selectCallback: function selectCallback(isSelect) {
			if (!this.selectable) {
				return;
			}
			if (!isSelect && !this.isNoBlankClick) {
				this.clearSelected();
				this.lastSelectFileNode = null;
			}
		},
		selectAll: function selectAll() {
			this.nodeList.forEach(function (item) {
				item.setSelected(true);
			});
		},
		dragCallback: function dragCallback(dragItem) {
			if (!this.draggable) {
				return;
			}
			var node = dragItem.fileNode;
			if (!node.isSelected()) {
				this.nodeList.map(function (item) {
					item.setSelected(false);
				});

				node.setSelected(true);
			}

			var pointer = new WyDragPointer({
				el: document.createElement('div'),
				propsData: {
					fileNodes: this.selectedList
				}
			});

			return pointer.$el;
		},
		dropCallback: function dropCallback(dropItem) {
			if (!this.draggable) {
				return;
			}
			var node = dropItem.fileNode;
			if (node.isSelected()) {
				return;
			}
			this.$emit('dragdrop', dropItem.fileNode);
		},
		hasItemEditing: function hasItemEditing(editingItemKey) {
			this.editingItemKey = editingItemKey;
		},
		blurEditingItem: function blurEditingItem(editingItemKey) {
			var editingItem = null;
			var array = this.$refs.listItem;
			for (var i = 0; i < array.length; i++) {
				if (array[i].fileNode.getId() === editingItemKey) {
					editingItem = array[i];
				}
			}
			if (editingItem) {
				editingItem.$refs.renamingInput && editingItem.$refs.renamingInput.blur();
				editingItem.$refs.creatingInput && editingItem.$refs.creatingInput.blur();
			}
			this.editingItemKey = null;
		},
		itemClick: function itemClick(fileNode) {
			this.$emit('itemClick', fileNode);
		},
		lastItemSelect: function lastItemSelect(fileNode) {
			this.lastSelectFileNode = fileNode;
		},
		singleSelect: function singleSelect(fileNode) {
			if (!this.isNoClearOthers) {
				this.clearSelected();
				fileNode.setSelected(true);
			} else {
				fileNode.setSelected(!fileNode.isSelected());
			}
			this.lastItemSelect(fileNode);
		},
		ctrlAndClick: function ctrlAndClick(fileNode) {
			fileNode.setSelected(!fileNode.isSelected());
			if (fileNode.isSelected()) {
				this.lastItemSelect(fileNode);
			}
		},
		shiftAndClick: function shiftAndClick(fileNode) {
			if (this.lastSelectFileNode) {
				var lastSelectIdx = fileNode.getParent().indexOf(this.lastSelectFileNode);
				var curSelectIdx = fileNode.getParent().indexOf(fileNode);
				if (lastSelectIdx > -1 && curSelectIdx > -1) {
					var startIdx = Math.min(lastSelectIdx, curSelectIdx);
					var endIdx = Math.max(lastSelectIdx, curSelectIdx);
					this.nodeList.forEach(function (item, i) {
						if (i >= startIdx && i <= endIdx) {
							item.setSelected(true);
						} else {
							item.setSelected(false);
						}
					});
				}
			} else {
				fileNode.setSelected(true);
				this.lastSelectFileNode = fileNode;
			}
		},
		itemContextmenu: function itemContextmenu(fileNode, position) {
			this.$emit('itemContextmenu', fileNode, position);
		},
		confirmRename: function confirmRename() {
			this.$emit('confirmRename');
		},
		confirmCreate: function confirmCreate(fileNode) {
			this.$emit('confirmCreate', fileNode);
		}
	}
};

/***/ }),

/***/ "b/Bi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"select-box",rawName:"v-select-box",value:({selectEnable: _vm.selectEnable, selectCallback: _vm.selectCallback}),expression:"{selectEnable: selectEnable, selectCallback: selectCallback}"},{name:"dragdrop",rawName:"v-dragdrop",value:({dragRefs: ['dragThumb', 'dragInfo'], dragEnable: _vm.dragEnable, dragCallback: _vm.dragCallback, dropCallback: _vm.dropCallback}),expression:"{dragRefs: ['dragThumb', 'dragInfo'], dragEnable: dragEnable, dragCallback: dragCallback, dropCallback: dropCallback}"},{name:"lazy-load",rawName:"v-lazy-load"},{name:"scroll-bottom",rawName:"v-scroll-bottom",value:(_vm.loadMore),expression:"loadMore"}],ref:"listScrollBox",staticClass:"list-group-bd",style:({display: _vm.hasLoadDone && _vm.nodeList.length === 0 ? 'none' : ''}),attrs:{"tabindex":"0"},on:{"keydown":function($event){if(!('button' in $event)&&$event.keyCode!==65){ return null; }if(!$event.ctrlKey){ return null; }$event.stopPropagation();$event.preventDefault();return _vm.selectAll($event)}}},[_c('div',{staticClass:"list-group-wrapper"},[_c('ul',{ref:"list",staticClass:"list-group"},_vm._l((_vm.tmpNodeList),function(fileNode){return _c('wy-file-item',{key:fileNode.getId(),ref:"listItem",refInFor:true,attrs:{"fileNode":fileNode,"editingItemKey":_vm.editingItemKey,"pureIcon":_vm.pureIcon},on:{"hasItemEditing":_vm.hasItemEditing,"blurEditingItem":_vm.blurEditingItem,"itemClick":_vm.itemClick,"shiftAndClick":_vm.shiftAndClick,"lastItemSelect":_vm.lastItemSelect,"ctrlAndClick":_vm.ctrlAndClick,"singleSelect":_vm.singleSelect,"itemContextmenu":_vm.itemContextmenu,"confirmRename":_vm.confirmRename,"confirmCreate":_vm.confirmCreate},scopedSlots:_vm._u([{key:"item-info",fn:function(props){return [_vm._t("item-info",null,{fileNode:props.fileNode})]}}])})}))]),_vm._v(" "),_c('wyLoadmore',{directives:[{name:"show",rawName:"v-show",value:(!_vm.hasLoadDone),expression:"!hasLoadDone"}],attrs:{"empty":_vm.nodeList.length === 0,"showFrame":_vm.showFrame}}),_vm._v(" "),(_vm.nodeList.length > 0 && _vm.hasLoadDone)?_c('div',{staticClass:"list-group-info"},[_c('p',{staticClass:"info-con"},[_vm._v("共"),_c('b',{staticClass:"count"},[_vm._v(_vm._s(_vm.nodeList.length))]),_vm._v("项 "+_vm._s(_vm.subscript || ''))])]):_vm._e()],1)}
var staticRenderFns = []


/***/ }),

/***/ "czlB":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(undefined);
// imports


// module
exports.push([module.i, ".space-emergency-notice-bar[data-v-8f3c5bb0]{margin:10px 60px 0 50px;padding:0 12px;display:flex;align-items:center}.space-emergency-notice-bar-mobile[data-v-8f3c5bb0],.space-emergency-notice-bar[data-v-8f3c5bb0]{height:30px;line-height:30px;text-align:left;font-size:12px;border:1px solid #ead896;background:#fff8db;border-radius:4px}.space-emergency-notice-bar-mobile[data-v-8f3c5bb0]{margin:10px 12px 8px;padding:0 5px}.space-emergency-notice-icon[data-v-8f3c5bb0]{display:inline-block;width:16px;height:16px;vertical-align:middle;background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M11.465 12.58c.127-.104.25-.215.368-.33 1.117-1.102 1.732-2.611 1.732-4.25 0-.17-.007-.34-.02-.506a2.87 2.87 0 0 1 1.06 2.232c0 1.684-1.195 2.759-3.14 2.855zm-6.18.009c-1.283 0-2.317-.315-2.99-.91-.59-.522-.9-1.263-.9-2.144 0-.932.325-1.741.918-2.278a2.441 2.441 0 0 1 1.657-.636c.098 0 .197.005.296.017.736.082 1.308.435 1.569.97.192.392.181.82-.029 1.174-.164.276-.386.446-.661.506a1.308 1.308 0 0 1-.984-.212L3.463 10.3c.584.373 1.313.51 1.973.368.659-.143 1.2-.543 1.565-1.159a2.653 2.653 0 0 0 .083-2.528c-.427-.874-1.254-1.476-2.3-1.689.17-.376.41-.71.715-.991.624-.574 1.499-.89 2.465-.89a4.01 4.01 0 0 1 2.994 1.324c.782.857 1.213 2.016 1.213 3.265 0 1.255-.466 2.405-1.31 3.238-.897.884-2.13 1.35-3.568 1.35H5.285zm7.861-6.906C12.316 3.501 10.334 2 7.964 2c-1.314 0-2.522.446-3.403 1.257a4.49 4.49 0 0 0-1.25 2.007 3.803 3.803 0 0 0-1.928.942C.49 7.014 0 8.196 0 9.535c0 1.3.477 2.409 1.378 3.207.93.823 2.281 1.258 3.907 1.258H11.177C14.062 14 16 12.282 16 9.726a4.277 4.277 0 0 0-2.854-4.043z' fill='%23CC9862'/%3E%3C/svg%3E\") no-repeat center 100%;margin-right:8px}.space-emergency-notice-link[data-v-8f3c5bb0]{color:#c4925e;cursor:pointer}.space-emergency-notice-close[data-v-8f3c5bb0]{height:20px;width:20px;background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M11.065 10l4.179 4.36a.625.625 0 0 1-.905.863l-4.218-4.401a.628.628 0 0 1-.242 0L5.66 15.223a.625.625 0 1 1-.904-.863L8.935 10 4.756 5.64a.625.625 0 1 1 .904-.863L9.88 9.179a.628.628 0 0 1 .242 0l4.218-4.402a.625.625 0 1 1 .905.863L11.065 10z' fill='%23AAA'/%3E%3C/svg%3E\") no-repeat center 100%;cursor:pointer}.flex-grow[data-v-8f3c5bb0]{flex:1}", ""]);

// exports


/***/ }),

/***/ "euSY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_switch_vue__ = __webpack_require__("wae7");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_switch_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_switch_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_switch_vue__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_switch_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5801af33_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_switch_vue__ = __webpack_require__("YsRn");
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_switch_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5801af33_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_switch_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5801af33_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_switch_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "hOCW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_breadcrumb_vue__ = __webpack_require__("sgf8");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_breadcrumb_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_breadcrumb_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_breadcrumb_vue__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_breadcrumb_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_23a463fa_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_breadcrumb_vue__ = __webpack_require__("1jKk");
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_breadcrumb_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_23a463fa_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_breadcrumb_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_23a463fa_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_breadcrumb_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "ioQX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"mod-action-wrap mod-action-wrap-menu clearfix",class:{'mod-action-wrap-c': _vm.hiddenText},style:({display: _vm.hidden ? 'none': ''})},[_vm._l((_vm.expandItems),function(item){return _c('div',{key:item.method,staticClass:"action-item",on:{"click":function($event){$event.stopPropagation();_vm.itemClick(item)}}},[_c('div',{staticClass:"action-item-con"},[_c('span',{class:[item.txtShowed ? 'txt' : 'act-txt']},[_vm._v(_vm._s(item.name))])])])}),_vm._v(" "),(_vm.moreItems.length)?_c('div',{staticClass:"action-item",class:{act: _vm.moreShowed}},[_c('div',{staticClass:"action-item-con",on:{"click":function($event){$event.stopPropagation();return _vm.showMore($event)}}},[_vm._v("\n                更多\n            ")]),_vm._v(" "),_c('div',{staticClass:"mod-bubble-menu with-border"},[_c('ul',{staticClass:"menu-list"},_vm._l((_vm.moreItems),function(item){return _c('wy-barmenu-item',{key:item.name,attrs:{"item":item},on:{"itemClick":_vm.itemClick}})}))])]):_vm._e()],2)}
var staticRenderFns = []


/***/ }),

/***/ "jECP":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: "wyBarmenuItem",

  props: ["item"],

  methods: {
    itemClick: function itemClick(item) {
      item.method && this.$emit("itemClick", item);
    }
  }
};

/***/ }),

/***/ "jNAy":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("my8l");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("rjj0").default
var update = add("3a19221d", content, true, {});

/***/ }),

/***/ "l+Gp":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("czlB");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("rjj0").default
var update = add("e8a7c53a", content, true, {});

/***/ }),

/***/ "lxL6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.register = register;

var _router = __webpack_require__("DEX7");

var _router2 = _interopRequireDefault(_router);

var _store = __webpack_require__("+zu9");

var _store2 = _interopRequireDefault(_store);

var _disk = __webpack_require__("4n74");

var _disk2 = _interopRequireDefault(_disk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function register() {
    _store2.default.registerModule('disk', _disk2.default);

    _router2.default.beforeEach(function (to, from, next) {
        if (to.name === 'disk' && to.path.indexOf('/folder/') > -1) {
            var destDirKey = to.path.split('/').pop();
            _store2.default.dispatch('disk/openDirByKey', destDirKey);
        } else if (from.path.indexOf('/folder/') > -1 && to.path === '/disk') {
            _store2.default.dispatch('disk/returnRoot');
        }

        next();
    });
}

/***/ }),

/***/ "mPwe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_list_header_vue__ = __webpack_require__("a6vS");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_list_header_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_list_header_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_list_header_vue__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_list_header_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_34621054_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_list_header_vue__ = __webpack_require__("HBnT");
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_list_header_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_34621054_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_list_header_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_34621054_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_list_header_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "my8l":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(undefined);
// imports


// module
exports.push([module.i, ".coupon-notice-bar[data-v-1cb58e34]{margin:10px 60px 0 50px;padding:0 12px;display:flex;align-items:center}.coupon-notice-bar-mobile[data-v-1cb58e34],.coupon-notice-bar[data-v-1cb58e34]{height:30px;line-height:30px;text-align:left;font-size:12px;border:1px solid #ead896;background:#fff8db;border-radius:4px}.coupon-notice-bar-mobile[data-v-1cb58e34]{margin:10px 12px 8px;padding:0 5px}.coupon-notice-icon[data-v-1cb58e34]{display:inline-block;width:16px;height:16px;vertical-align:middle;background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16' fill='none'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M11.465 12.58c.127-.104.25-.215.368-.33 1.117-1.102 1.732-2.611 1.732-4.25 0-.17-.007-.34-.02-.506a2.87 2.87 0 0 1 1.06 2.232c0 1.684-1.195 2.759-3.14 2.855zm-6.18.009c-1.283 0-2.317-.315-2.99-.91-.59-.522-.9-1.263-.9-2.144 0-.932.325-1.741.918-2.278a2.441 2.441 0 0 1 1.657-.636c.098 0 .197.005.296.017.736.082 1.308.435 1.569.97.192.392.181.82-.029 1.174-.164.276-.386.446-.661.506a1.308 1.308 0 0 1-.984-.212L3.463 10.3c.584.373 1.313.51 1.973.368.659-.143 1.2-.543 1.565-1.159a2.653 2.653 0 0 0 .083-2.528c-.427-.874-1.254-1.476-2.3-1.689.17-.376.41-.71.715-.991.624-.574 1.499-.89 2.465-.89a4.01 4.01 0 0 1 2.994 1.324c.782.857 1.213 2.016 1.213 3.265 0 1.255-.466 2.405-1.31 3.238-.897.884-2.13 1.35-3.568 1.35H5.285zm7.861-6.906C12.316 3.501 10.334 2 7.964 2c-1.314 0-2.522.446-3.403 1.257a4.49 4.49 0 0 0-1.25 2.007 3.803 3.803 0 0 0-1.928.942C.49 7.014 0 8.196 0 9.535c0 1.3.477 2.409 1.378 3.207.93.823 2.281 1.258 3.907 1.258H11.177C14.062 14 16 12.282 16 9.726a4.277 4.277 0 0 0-2.854-4.043z' fill='%23CC9862'/%3E%3C/svg%3E\") no-repeat center 100%;margin-right:8px}.coupon-notice-link[data-v-1cb58e34]{color:#c4925e;cursor:pointer}.coupon-notice-close[data-v-1cb58e34]{height:20px;width:20px;background:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M11.065 10l4.179 4.36a.625.625 0 0 1-.905.863l-4.218-4.401a.628.628 0 0 1-.242 0L5.66 15.223a.625.625 0 1 1-.904-.863L8.935 10 4.756 5.64a.625.625 0 1 1 .904-.863L9.88 9.179a.628.628 0 0 1 .242 0l4.218-4.402a.625.625 0 1 1 .905.863L11.065 10z' fill='%23AAA'/%3E%3C/svg%3E\") no-repeat center 100%;cursor:pointer}.flex-grow[data-v-1cb58e34]{flex:1}", ""]);

// exports


/***/ }),

/***/ "nQO8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = __webpack_require__("7+uW");

var _vue2 = _interopRequireDefault(_vue);

var _emitter = __webpack_require__("bg3o");

var _emitter2 = _interopRequireDefault(_emitter);

var _report = __webpack_require__("Vyex");

var _report2 = _interopRequireDefault(_report);

var _wyList = __webpack_require__("5R7R");

var _wyList2 = _interopRequireDefault(_wyList);

var _wyThumbList = __webpack_require__("DW8/");

var _wyThumbList2 = _interopRequireDefault(_wyThumbList);

var _wyContextmenu = __webpack_require__("wIaR");

var _wyContextmenu2 = _interopRequireDefault(_wyContextmenu);

var _wyToolbar = __webpack_require__("poUJ");

var _wyToolbar2 = _interopRequireDefault(_wyToolbar);

var _wySwitch = __webpack_require__("MX0j");

var _wySwitch2 = _interopRequireDefault(_wySwitch);

var _wyBreadcrumb = __webpack_require__("uTdc");

var _wyBreadcrumb2 = _interopRequireDefault(_wyBreadcrumb);

var _wyCleanNoticeBar = __webpack_require__("Yxjc");

var _wyCleanNoticeBar2 = _interopRequireDefault(_wyCleanNoticeBar);

var _wyDiskEmpty = __webpack_require__("sGmn");

var _wyDiskEmpty2 = _interopRequireDefault(_wyDiskEmpty);

var _noticeBar = __webpack_require__("BTf5");

var _noticeBar2 = _interopRequireDefault(_noticeBar);

var _noticeBar3 = __webpack_require__("B3Hc");

var _noticeBar4 = _interopRequireDefault(_noticeBar3);

var _request = __webpack_require__("yS1T");

var _request2 = _interopRequireDefault(_request);

var _constants = __webpack_require__("4Uv1");

var _constants2 = _interopRequireDefault(_constants);

var _webReport = __webpack_require__("x/ku");

var _webReport2 = _interopRequireDefault(_webReport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: "wyDisk",

  components: {
    wyList: _wyList2.default,
    wyThumbList: _wyThumbList2.default,
    wyDiskEmpty: _wyDiskEmpty2.default,
    wySwitch: _wySwitch2.default,
    wyBreadcrumb: _wyBreadcrumb2.default,
    wyNoticeBar: _wyCleanNoticeBar2.default,
    wyCouponNoticeBar: _noticeBar2.default,
    wySpaceEmergencyNotice: _noticeBar4.default
  },

  data: function data() {
    return {
      isShowCleanNotice: false,

      curNodeScrollMap: {}
    };
  },


  computed: {
    activated: function activated() {
      return this.$store.getters["disk/activated"];
    },
    spaceEmergencyDialog: function spaceEmergencyDialog() {
      var userInfo = this.$store.state.userInfo;
      var needPop = userInfo.pop_space_info.need_popup;
      return needPop;
    },
    selectable: function selectable() {
      return this.activated;
    },
    dragable: function dragable() {
      return this.activated;
    },
    itemWidth: function itemWidth() {
      return this.$store.state.layout.itemWidth;
    },
    folderWidth: function folderWidth() {
      return this.$store.state.layout.folderWidth;
    },
    viewMode: function viewMode() {
      return this.$store.state.disk.viewMode;
    },
    sortField: function sortField() {
      return this.$store.state.disk.sortField;
    },
    listHeader: function listHeader() {
      return this.$store.getters["disk/listHeader"];
    },
    userInfoLoaded: function userInfoLoaded() {
      return this.$store.state.userInfo.loaded && this.$store.state.userInfo.isPopUpCouponAndNoticeLoaded;
    },
    isVip: function isVip() {
      return this.$store.getters["userInfo/vip"];
    },
    superVip: function superVip() {
      return this.$store.getters["userInfo/superVip"];
    },
    nodeList: function nodeList() {
      return this.$store.state.disk.curNode && this.$store.state.disk.curNode.getKidNodes() || [];
    },
    teamList: function teamList() {
      if (this.$store.state.team && this.$store.state.team.teamList) {
        return this.$store.state.team.teamList;
      } else {
        return [];
      }
    },
    novipMaxDownloadSize: function novipMaxDownloadSize() {
      return this.$store.state.control.novipMaxDownloadSize;
    },
    allSelected: function allSelected() {
      return this.nodeList.length && this.selectedList.length === this.nodeList.length;
    },
    selectedList: function selectedList() {
      return this.nodeList.filter(function (item) {
        if (item.isSelected()) {
          return true;
        }
      });
    },
    selectedTotalSize: function selectedTotalSize() {
      var totalSize = 0;
      this.selectedList.forEach(function (item) {
        totalSize += item.getSize();
      });
      return totalSize;
    },
    isEmpty: function isEmpty() {
      var curNode = this.curNode;
      if (curNode && curNode.isEmpty()) {
        return true;
      }
      return false;
    },
    cate: function cate() {
      return this.$store.state.disk.cate;
    },
    hasLoadDone: function hasLoadDone() {
      return this.curNode && this.curNode.isLoadDone();
    },
    curNode: function curNode() {
      return this.$store.state.disk.curNode;
    },
    rootNode: function rootNode() {
      return this.$store.state.disk.rootNode;
    },
    sortInfo: function sortInfo() {
      return {
        sortField: this.sortField,
        items: this.$store.state.disk.sortMenu
      };
    },
    menuItems: function menuItems() {
      var singleSelect = this.selectedList.length === 1;
      var singleFileNode = this.selectedList[0];

      var showCollectMethod = !this.selectedList.some(function (item) {
        return item.isDir();
      });

      var isAllCollected = this.selectedList.every(function (item) {
        return item.getStarFlag() === 1;
      });
      var menuItems = [];

      if (this.selectedTotalSize > this.novipMaxDownloadSize) {
        if (!this.superVip) {
          menuItems.push({
            name: '开通超会极速下载',
            method: 'downloadTurbo',
            subIcon: 'turbo'
          });
          menuItems.push({
            name: '普通下载',
            method: 'downloadNormal'
          });
        } else {
          menuItems.push({
            name: '极速下载',
            method: 'download',
            subIcon: 'turbo'
          });
        }
      } else {
        menuItems = [{
          name: '下载',
          method: 'download'
        }];
      }

      menuItems.push({
        name: '分享',
        method: 'share',
        split: true
      });

      if (showCollectMethod) {
        menuItems.push({
          name: isAllCollected ? "取消收藏" : "收藏",
          method: "collect"
        });
      }

      if (singleSelect && singleFileNode.isPdf()) {
        menuItems.push({
          name: "PDF转Office文档",
          secItems: [{
            name: "Word",
            method: "pdfTransfer",
            payload: "word"
          }, {
            name: "Excel",
            method: "pdfTransfer",
            payload: "excel"
          }, {
            name: "PPT",
            method: "pdfTransfer",
            payload: "ppt"
          }]
        });
      }

      if (singleSelect && singleFileNode.isOfficeEditDoc()) {
        menuItems.push({
          name: "编辑",
          method: "edit"
        });
        menuItems.push({
          name: "邀请好友编辑",
          method: "shareEdit",
          split: true
        });
      }

      if (singleSelect && singleFileNode.isCompress()) {
        menuItems.push({
          name: "解压",
          method: "preview",
          split: true
        });
      }

      menuItems.push({
        name: "移动到",
        method: "move"
      });

      if (singleSelect && singleFileNode.isDir()) {
        menuItems.push({
          name: "收集文件",
          method: "inbox"
        });
      }
      if (singleSelect && singleFileNode.isDir() && singleFileNode.isInboxDir() && !singleFileNode.isInboxClose()) {
        menuItems.push({
          name: "关闭收集",
          method: "closeInbox"
        });
      }

      menuItems.push({
        name: "添加到共享组",
        method: "add2sharedir"
      });

      menuItems.push({
        name: "移入保险箱",
        method: "move2safebox",
        split: true
      });

      if (this.teamList.length) {
        menuItems.push({
          name: "复制到",
          secItems: [].concat(this.teamList.map(function (v) {
            return { name: v._name, method: "copy", payload: v };
          }))
        });
      } else {}

      menuItems.push({
        name: "删除",
        method: "remove",
        split: singleSelect ? false : true
      });

      if (singleSelect) {
        menuItems.push({
          name: "重命名",
          method: "rename",
          split: true
        });
      }

      menuItems.push({
        name: "详细信息",
        method: "fileInfo"
      });

      return menuItems;
    },
    toolbarItems: function toolbarItems() {
      var singleSelect = this.selectedList.length === 1;
      var singleFileNode = this.selectedList[0];

      var showCollectMethod = !this.selectedList.some(function (item) {
        return item.isDir();
      });

      var isAllCollected = this.selectedList.every(function (item) {
        return item.getStarFlag() === 1;
      });
      var items = [{
        name: "下载",
        icon: "download",
        method: "download"
      }, {
        name: "分享",
        icon: "share",
        method: "share"
      }, {
        name: "删除",
        icon: "trash",
        method: "remove"
      }];

      if (showCollectMethod) {
        items.push({
          name: isAllCollected ? "取消收藏" : "收藏",
          method: 'collect',
          more: true
        });
      }

      if (singleSelect && this.selectedList[0].isOfficeEditDoc()) {
        items.push({
          name: "编辑",
          method: "edit",
          more: true
        });
        items.push({
          name: "邀请好友编辑",
          method: "shareEdit",
          more: true
        });
      }
      if (singleSelect && singleFileNode.isDir()) {
        items.push({
          name: "收集文件",
          method: "inbox",
          more: true
        });
      }

      items.push({
        name: "移动到",
        method: "move",
        more: true
      });

      if (this.teamList.length) {
        items.push({
          name: "复制到",
          more: true,
          secItems: [].concat(this.teamList.map(function (v) {
            return { name: v._name, method: "copy", payload: v };
          }))
        });
      } else {}

      if (singleSelect) {
        items.push({
          name: "重命名",
          method: "rename",
          more: true
        });
      }

      items.push({
        name: "添加到共享组",
        method: "add2sharedir",
        more: true
      });

      items.push({
        name: "移入保险箱",
        method: "move2safebox",
        more: true
      });

      if (singleSelect && singleFileNode.isCompress()) {
        items.push({
          name: "解压",
          method: "preview",
          more: true
        });
      }

      return items;
    },
    isShowCleanToast: function isShowCleanToast() {
      return this.$store.state.userInfo.isShowSpaceCleanToast;
    },
    spaceCleanLeftDays: function spaceCleanLeftDays() {
      return this.$store.state.userInfo.space_clean_info.left_cleaning_days;
    },
    isShowResetToast: function isShowResetToast() {
      return this.$store.state.userInfo.isShowResetToast;
    },
    isCleanAlertStatus: function isCleanAlertStatus() {
      return this.$store.getters["userInfo/cleanAlertStatus"];
    }
  },

  watch: {
    curNode: function curNode(val, old) {
      var _this = this;

      var oldNodeId = old ? old.getId() : null;
      var nodeId = val ? val.getId() : null;
      this.$nextTick(function () {
        var list = null;
        var scrollTop = 0;
        if (!_this.isEmpty && _this.viewMode === "list") {
          list = _this.$refs.normalList.$refs.normalListBody.$refs.listScrollBox;
          if (_this.curNodeScrollMap.hasOwnProperty(nodeId)) {
            scrollTop = _this.curNodeScrollMap[nodeId].list || 0;
            _this.$nextTick(function () {
              list.scrollTop = scrollTop;
            });
          }
        } else if (!_this.isEmpty && _this.viewMode === "thumb") {
          list = _this.$refs.thumbList.$refs.listScrollBox;
          if (_this.curNodeScrollMap.hasOwnProperty(nodeId)) {
            scrollTop = _this.curNodeScrollMap[nodeId].thumb || 0;
            _this.$nextTick(function () {
              list.scrollTop = scrollTop;
            });
          }
        }
        if (val.isRoot()) _this.curNodeScrollMap = {};
      });
    },
    activated: function activated(val) {
      if (val && !this.$store.state.control.searching) {
        this.toolbar && (this.toolbar.hidden = true);
        if (this.$store.state.control.diskNeedUpdate) {
          this.$store.dispatch("disk/refresh");
        }
      } else {
        this.toolbar && (this.toolbar.hidden = true);
      }
      this.$store.commit("control/setDiskNeedUpdate", false);
    },
    userInfoLoaded: function userInfoLoaded(loaded) {
      var _this2 = this;

      if (loaded) {
        this.$store.dispatch("disk/loadDiskRootFiles");

        if (this.spaceEmergencyDialog) {
          this.$store.dispatch("userInfo/showSpaceEmergencyDialog", {
            clearDir: function clearDir() {
              _this2.$router.push("/disk/cleardir");
            }
          });
        }
      }
    },
    selectedList: function selectedList() {
      if (!this.activated) {
        return;
      }
      if (this.selectedList.length > 0) {
        this.toolbar.hidden = false;
        this.toolbar.items = this.toolbarItems;
      } else {
        this.toolbar.hidden = true;
      }
      this.$store.commit("control/triggerSelectionMode", this.selectedList.length > 0);
    },
    viewMode: function viewMode() {
      this.nodeList.map(function (item) {
        item.setSelected(false);
      });
    }
  },

  created: function created() {
    if (this.userInfoLoaded) {
      this.$store.dispatch("disk/loadDiskRootFiles");
    }
  },
  mounted: function mounted() {
    var _this3 = this;

    this.renderToolbar();
    if (this.userInfoLoaded) {
      if (this.spaceEmergencyDialog) {
        this.$store.dispatch("userInfo/showSpaceEmergencyDialog", {
          clearDir: function clearDir() {
            _this3.$router.push("/disk/cleardir");
          }
        });
      }
    }
    _webReport2.default.tdwReport("web-disk_tab-show");
  },


  methods: {
    loadMore: function loadMore() {
      this.$store.dispatch("disk/loadMoreFiles");
    },
    itemClick: function itemClick(fileNode) {
      this.clearSelected();
      if (fileNode.isDir()) {
        if (!this.isEmpty) {
          var list = this.viewMode === "list" ? this.$refs.normalList.$refs.normalListBody.$refs.listScrollBox : this.$refs.thumbList.$refs.listScrollBox;
          var curNode = this.curNode;

          var dirNodeId = curNode.getId();
          this.curNodeScrollMap[dirNodeId] = {};
          this.curNodeScrollMap[dirNodeId][this.viewMode] = list.scrollTop;
        }

        this.$store.dispatch("disk/openDirNode", fileNode);
      } else {
        fileNode.setSelected(true);
        this.doOperatorAction("preview", fileNode);
      }
      _wyContextmenu2.default.hide();
    },
    dragdrop: function dragdrop(destDir) {
      if (!this.selectedList.length) {
        return;
      }
      destDir.setDirty(true);
      _emitter2.default.$emit("operator:action", "moveTo", this.selectedList, destDir, {
        mod: "disk"
      });
    },
    clearSelected: function clearSelected() {
      this.selectedList.forEach(function (item) {
        item.setSelected(false);
      });
    },
    selectAll: function selectAll() {
      this.nodeList.forEach(function (item) {
        item.setSelected(true);
      });
    },
    sortReverse: function sortReverse(opt) {
      this.$store.dispatch("disk/switchSort", opt);
    },
    switchSort: function switchSort(opt) {
      this.$store.dispatch("disk/switchSort", opt);
    },
    switchView: function switchView(viewMode) {
      this.$store.dispatch("disk/switchView", viewMode);
    },
    itemContextmenu: function itemContextmenu(position) {
      var _this4 = this;

      if (this.menuItems.find(function (item) {
        return item.subIcon === 'turbo';
      })) {
        var osName = _constants2.default.OS_NAME === 'window' ? 'wd' : _constants2.default.OS_NAME;
        var plaftform = _constants2.default.IS_WY_CLIENT ? 'desk' : "web";

        var aid = osName + "_" + plaftform + "_listrightbt_fastdownload";

        _report2.default.beacon('weiyun_vip_entrance_show', {
          'vip_type': this.superVip ? 'svip' : this.isVip ? 'vip' : 'novip',

          'position': 'listrightbt',

          'feature': 'fastdownload',
          aid: aid
        });
      }

      _wyContextmenu2.default.show({
        items: this.menuItems,
        position: position,
        itemClick: function itemClick(method, item) {
          _this4.doOperatorAction(item);
          _report2.default.hot("ctxmenu_" + method);
          _report2.default.beacon("web_ctxmenu_" + method, { count: 1 });
          if (method === "pdfTransfer") {
            _webReport2.default.tdwReport("weiyun-vip_entrance-click", {
              common_ext: {
                position: "disktab",
                function: "pdfswitchto",
                ver1: "pdf2" + item.payload
              }
            });
          }
        },
        itemHover: function itemHover(name, item) {
          if (name === "PDF转Office文档") {
            _webReport2.default.tdwReport("weiyun-vip_entrance-click", {
              common_ext: {
                position: "disktab",
                function: "pdfswitchto",
                ver1: "pdfswitchto"
              }
            });
          }
        }
      });
    },
    confirmRename: function confirmRename() {
      this.doOperatorAction("submitRename");
    },
    confirmCreate: function confirmCreate(fileNode) {
      if (!fileNode.getTempname()) {
        this.$store.commit("disk/remove", [fileNode]);
        return;
      }
      this.doOperatorAction("create", [fileNode]);
    },
    doOperatorAction: function doOperatorAction(item, fileNodes) {
      var method = "";

      if (typeof item === "string") {
        method = item;
        item = { method: method };
      } else {
        method = item.method;
      }
      _emitter2.default.$emit("operator:action", method, fileNodes || this.selectedList, {
        mod: "disk",
        payload: item.payload
      });
    },
    renderToolbar: function renderToolbar() {
      var _this5 = this;

      var Ctor = _vue2.default.extend(_wyToolbar2.default);
      this.toolbar = new Ctor({
        el: document.createElement("div"),
        propsData: {
          items: this.toolbarItems
        },
        data: {
          hidden: true
        }
      });

      this.toolbar.$on("itemClick", function (method, item) {
        _this5.doOperatorAction(item);
        _report2.default.hot("toolbar_" + method);
        _report2.default.beacon("web_toolbar_" + method, { count: 1 });
      });
      document.getElementById("_mod_act_bar4").appendChild(this.toolbar.$el);
    },
    returnRoot: function returnRoot() {
      this.$store.dispatch("disk/returnRoot");
    },
    openDirNode: function openDirNode(dirNode) {
      if (!this.isEmpty) {
        var list = this.viewMode === "list" ? this.$refs.normalList.$refs.normalListBody.$refs.listScrollBox : this.$refs.thumbList.$refs.listScrollBox;
        var curNode = this.curNode;

        var dirNodeId = curNode.getId();
        this.curNodeScrollMap[dirNodeId] = {};
        this.curNodeScrollMap[dirNodeId][this.viewMode] = list.scrollTop;
      }

      this.$store.dispatch("disk/openDirNode", dirNode);
    },
    showSpaceCleanDialog: function showSpaceCleanDialog() {
      this.$store.dispatch("userInfo/showSpaceDialog", { isShow: true });
    },
    showResetDialog: function showResetDialog() {
      this.$store.dispatch("userInfo/showResetDialog", {
        isShow: true,
        isCloseTips: false
      });
    },
    closeResetTips: function closeResetTips() {
      this.$store.dispatch("userInfo/showResetDialog", {
        isShow: false,
        isCloseTips: true
      });
    }
  }
};

/***/ }),

/***/ "ne8/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"menu-item",class:{ act: _vm.item.selected },on:{"mousedown":function($event){$event.preventDefault();$event.stopPropagation();},"click":function($event){$event.preventDefault();$event.stopPropagation();_vm.itemClick(_vm.item)}}},[_c('span',{staticClass:"txt"},[(_vm.item.icon)?_c('i',{staticClass:"icon",class:['icon-' + _vm.item.icon]}):_vm._e(),_vm._v(" "),(_vm.item.secItems && _vm.item.secItems.length)?_c('i',{staticClass:"icon icon-trig"}):_vm._e(),_vm._v("\n    "+_vm._s(_vm.item.name)+"\n    "),(_vm.item.subIcon)?_c('i',{staticClass:"icon",class:['icon-' + _vm.item.subIcon]}):_vm._e(),_vm._v(" "),(_vm.item.subName)?_c('span',{staticClass:"sub-txt"},[_vm._v(_vm._s(_vm.item.subName))]):_vm._e()]),_vm._v(" "),(_vm.item.split)?_c('div',{staticClass:"spliter"}):_vm._e(),_vm._v(" "),(_vm.item.secItems)?_c('div',{staticClass:"mod-bubble-menu mod-bubble-menu-sec with-border",staticStyle:{"left":"199px","top":"0"}},[_c('ul',{staticClass:"menu-list"},_vm._l((_vm.item.secItems),function(item,i){return _c('wy-barmenu-item',{key:i,attrs:{"item":item},on:{"itemClick":function($event){_vm.itemClick(item)}}})}))]):_vm._e()])}
var staticRenderFns = []


/***/ }),

/***/ "oWpG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_menu_item_vue__ = __webpack_require__("jECP");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_menu_item_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_menu_item_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_menu_item_vue__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_menu_item_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_17c23cbd_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_menu_item_vue__ = __webpack_require__("ne8/");
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_menu_item_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_17c23cbd_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_menu_item_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_17c23cbd_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_menu_item_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "obUq":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _store = __webpack_require__("lxL6");

var _wyDisk = __webpack_require__("IalN");

var _wyDisk2 = _interopRequireDefault(_wyDisk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _store.register)();

exports.default = _wyDisk2.default;

/***/ }),

/***/ "pT0X":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {
	props: {
		folderWidth: Number,
		allChecked: Boolean,
		fileNode: Object,
		editingItem: Object
	},
	data: function data() {
		return {
			draggable: true,
			droppable: true,
			cancelEdited: false,
			lastClickTime: 0
		};
	},


	computed: {
		iconCls: function iconCls() {
			if (this.fileNode.isDir() && this.fileNode.isInboxDir() && !this.fileNode.isInboxClose()) {
				return 'icon-inbox-l';
			}
			return 'icon-' + this.fileNode.getType() + '-l';
		},
		folderStyle: function folderStyle() {
			return 'width:' + this.folderWidth + 'px';
		},
		selected: function selected() {
			return this.fileNode.isSelected();
		},
		renaming: function renaming() {
			return this.fileNode.isRenaming && this.fileNode.isRenaming();
		},
		creating: function creating() {
			return this.fileNode.isTempcreate && this.fileNode.isTempcreate();
		},
		editing: function editing() {
			return this.renaming || this.creating;
		}
	},

	watch: {
		editing: function editing(val) {
			this.$emit('hasItemEditing', val ? this.fileNode : null);
		}
	},

	mounted: function mounted() {
		if (this.creating) {
			this.$emit('hasItemEditing', this.fileNode);
		}
	},


	methods: {
		itemClick: function itemClick(e) {
			if (this.fileNode.isTempcreate()) {
				return;
			}
			var now = +new Date();
			var dblclick = false;

			if (now - this.lastClickTime < 300) {
				dblclick = true;
			}

			this.lastClickTime = now;

			if (e.shiftKey) {
				this.$emit('shiftAndClick', this.fileNode);
			} else if (e.ctrlKey) {
				this.$emit('ctrlAndClick', this.fileNode);
			} else if (!dblclick && (e.target === this.$refs.dragInfo || e.target === this.$refs.dragThumb)) {
				if (this.editingItem) {
					this.$emit('blurEditingItem', this.editingItem);
				} else {
					this.$emit('itemClick', this.fileNode, e);
				}
			} else if (dblclick && !(e.target === this.$refs.dragInfo || e.target === this.$refs.dragThumb)) {
				if (this.editingItem) {
					this.$emit('blurEditingItem', this.editingItem);
				} else {
					this.$emit('itemClick', this.fileNode, e);
				}
			} else if (!dblclick) {
				if (this.editingItem) {
					this.$emit('blurEditingItem', this.editingItem);
				} else {
					this.$emit('singleSelect', this.fileNode);
				}
			}
		},
		itemContextmenu: function itemContextmenu(e) {

			this.$emit('itemContextmenu', this.fileNode, {
				x: e.clientX,
				y: e.clientY
			});
		},
		toggleSelect: function toggleSelect(e, selected) {
			if (typeof selected === 'undefined') {
				selected = e;
				e = {};
			}
			this.fileNode.setSelected(selected);
			if (selected && !e.shiftKey) {
				this.$emit('lastItemSelect', this.fileNode);
			}
			if (e.shiftKey) {
				this.$emit('shiftAndClick', this.fileNode);
			}
		},
		blur: function blur(e) {
			e.currentTarget.blur();
		},
		confirmRename: function confirmRename(e, fileNode) {
			var fileName = e.currentTarget.value;

			if (fileNode.isSelected() && this.renaming) {
				fileNode.setTempname(fileName);
				this.$emit('confirmRename');
			} else {
				fileNode.setRenaming(false);
				fileNode.setTempname('');
			}
		},
		confirmCreate: function confirmCreate(e, fileNode) {
			var fileName = e.currentTarget.value;

			if (this.cancelEdited) {
				return;
			}

			fileNode.setTempname(fileName);

			this.$emit('confirmCreate', fileNode);
		},
		cancelEditing: function cancelEditing(e) {
			if (this.renaming) {
				this.fileNode.setRenaming(false);
				this.fileNode.setTempname('');
			} else {
				this.cancelEdited = true;
				this.fileNode.setTempname('');
				this.$emit('confirmCreate', this.fileNode);
			}
			this.fileNode.setSelected(false);
		}
	}
};

/***/ }),

/***/ "poUJ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toolbar = __webpack_require__("S/NW");

var _toolbar2 = _interopRequireDefault(_toolbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _toolbar2.default;

/***/ }),

/***/ "qAZv":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{directives:[{name:"select-item",rawName:"v-select-item",value:(_vm.toggleSelect),expression:"toggleSelect"}],staticClass:"figure-list-item",class:{ act: _vm.selected },on:{"contextmenu":function($event){$event.stopPropagation();$event.preventDefault();return _vm.itemContextmenu($event)},"click":_vm.itemClick}},[_c('div',{staticClass:"figure-list-item-inner"},[_c('i',{staticClass:"icon icon-check-s icon-checkbox",on:{"click":function($event){$event.stopPropagation();_vm.toggleSelect($event, !_vm.selected)}}}),_vm._v(" "),_c('div',{staticClass:"figure-list-item-pic"},[_c('div',{ref:"dragThumb",staticClass:"img-wrapper"},[(_vm.fileNode.isVideo())?_c('img',{directives:[{name:"lazy-image",rawName:"v-lazy-image:src",value:({ url: _vm.thumbUrl }),expression:"{ url: thumbUrl }",arg:"src"}],staticClass:"is-img",class:{ 'is-video': _vm.fileNode.isVideo() },attrs:{"alt":_vm.fileNode.getName()}}):_vm._e(),_vm._v(" "),(_vm.fileNode.isImage())?_c('img',{staticClass:"is-img is-loaded",attrs:{"src":_vm.thumbUrl,"alt":_vm.fileNode.getName()},on:{"error":_vm.onError}}):_vm._e(),_vm._v(" "),(_vm.fileNode.isVideo())?_c('div',{staticClass:"duration"},[_vm._m(0)]):_vm._e(),_vm._v(" "),_c('i',{staticClass:"icon icon-l",class:[_vm.largeIcon]})])]),_vm._v(" "),_c('div',{staticClass:"figure-list-item-txt"},[_c('p',{staticClass:"tit"},[_c('span',{directives:[{name:"show",rawName:"v-show",value:(!_vm.editing),expression:"!editing"}],ref:"dragInfo",staticClass:"txt",attrs:{"title":_vm.fileNode.getName()}},[_vm._v(_vm._s(_vm.fileNode.getName()))]),_vm._v(" "),(_vm.editing)?_c('span',{staticClass:"txt",on:{"click":function($event){$event.preventDefault();$event.stopPropagation();},"mousedown":function($event){$event.stopPropagation();}}},[(_vm.renaming)?_c('input',{directives:[{name:"focus",rawName:"v-focus"}],ref:"renamingInput",staticClass:"ui-input",attrs:{"type":"text"},domProps:{"value":_vm.fileNode.getName()},on:{"blur":function($event){_vm.confirmRename($event, _vm.fileNode)},"keyup":[function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.blur($event)},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"esc",27,$event.key,"Escape")){ return null; }$event.preventDefault();$event.stopPropagation();return _vm.cancelEditing($event)}]}}):(_vm.creating)?_c('input',{directives:[{name:"focus",rawName:"v-focus"}],ref:"creatingInput",staticClass:"ui-input",attrs:{"type":"text"},domProps:{"value":_vm.fileNode.getName()},on:{"blur":function($event){_vm.confirmCreate($event, _vm.fileNode)},"keyup":[function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.blur($event)},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"esc",27,$event.key,"Escape")){ return null; }$event.preventDefault();$event.stopPropagation();return _vm.cancelEditing($event)}]}}):_vm._e()]):_vm._e()])])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"icon-background"},[_c('i',{staticClass:"icon icon-playable"})])}]


/***/ }),

/***/ "rEHN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"mod-bubble-menu mod-bubble-context-menu with-border",class:{reverse: _vm.reverse},style:({left: _vm.left + 'px', top: _vm.top + 'px'})},[_c('ul',{staticClass:"menu-list"},_vm._l((_vm.items),function(item){return _c('wy-contextmenu-item',{key:item.method,attrs:{"item":item}})}))])}
var staticRenderFns = []


/***/ }),

/***/ "sGmn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_wy_disk_empty_vue__ = __webpack_require__("OMWq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_wy_disk_empty_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_wy_disk_empty_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_wy_disk_empty_vue__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_wy_disk_empty_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0ae260fa_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_wy_disk_empty_vue__ = __webpack_require__("GaFJ");
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_wy_disk_empty_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0ae260fa_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_wy_disk_empty_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0ae260fa_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_wy_disk_empty_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "sgf8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {

    props: {
        rootIcon: String,
        rootName: String,
        curNode: Object
    },

    data: function data() {
        return {
            hidden: false,
            maxlevel: 6
        };
    },


    computed: {
        dirNodes: function dirNodes() {
            var list = [];
            var cur = this.curNode;
            if (!cur) {
                return list;
            }
            list.push(cur);
            while (cur = cur.getParent()) {
                list.push(cur);
            }

            list.pop();

            if (list.length >= this.maxlevel - 1) {
                list = list.slice(0, this.maxlevel - 1);
                list.splice(list.length - 1, 1, { name: '...', ignore: true });
            }

            list.reverse();

            return list;
        },
        levelCls: function levelCls() {
            return 'level' + this.dirNodes.length;
        }
    },

    created: function created() {
        this.calcLevel();
        window.addEventListener('resize', this.calcLevel);
    },
    destroyed: function destroyed() {
        window.removeEventListener('resize', this.calcLevel);
    },


    methods: {
        calcLevel: function calcLevel() {},
        returnRoot: function returnRoot() {
            this.$emit('returnRoot');
        },
        openDir: function openDir(item) {
            if (!item.ignore) {
                this.$emit('openDirNode', item);
            }
        }
    }
};

/***/ }),

/***/ "tU3S":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{directives:[{name:"select-item",rawName:"v-select-item",value:(_vm.toggleSelect),expression:"toggleSelect"}],staticClass:"list-group-item checked",class:{act: _vm.selected},on:{"contextmenu":function($event){$event.stopPropagation();$event.preventDefault();return _vm.itemContextmenu($event)},"click":_vm.itemClick}},[_c('div',{staticClass:"item-inner"},[_c('div',{staticClass:"item-tit"},[_c('div',{staticClass:"label",on:{"click":function($event){$event.stopPropagation();_vm.toggleSelect($event, !_vm.selected)}}},[_c('i',{staticClass:"icon icon-check-s icon-checkbox"})]),_vm._v(" "),_c('div',{ref:"dragThumb",staticClass:"thumb"},[(_vm.fileNode.isVideo() && !_vm.pureIcon)?_c('img',{directives:[{name:"lazy-image",rawName:"v-lazy-image:src",value:({url:_vm.fileNode.getThumbUrl(64)}),expression:"{url:fileNode.getThumbUrl(64)}",arg:"src"}],staticClass:"is-img is-video",attrs:{"alt":_vm.fileNode.getName()}}):_vm._e(),_vm._v(" "),(_vm.fileNode.isImage() && !_vm.pureIcon)?_c('img',{staticClass:"is-img",attrs:{"src":_vm.fileNode.getThumbUrl(64),"alt":_vm.fileNode.getName()},on:{"error":_vm.onError}}):_vm._e(),_vm._v(" "),(_vm.fileNode.isVideo() && !_vm.pureIcon)?_c('span',{staticClass:"duration"},[_c('span',{staticClass:"inner"},[_vm._v(_vm._s(_vm._f("LongTimeFormat")(_vm.fileNode.getLongTime())))])]):_vm._e(),_vm._v(" "),_c('i',{staticClass:"icon icon-m",class:[_vm.fileIcon]})]),_vm._v(" "),_c('div',{class:['info', _vm.filePath ? 'has-path' : '']},[(!_vm.editing || _vm.filePath)?_c('div',[_c('a',{directives:[{name:"show",rawName:"v-show",value:(!_vm.editing),expression:"!editing"}],ref:"dragInfo",staticClass:"tit",attrs:{"href":"javascript:void(0)","title":_vm.fileNode.getName()}},[_vm._v(_vm._s(_vm.fileNode.getName()))]),_vm._v(" "),_c('br'),_vm._v(" "),(_vm.filePath)?_c('a',{attrs:{"href":"javascript:void(0)"},on:{"click":function($event){$event.stopPropagation();_vm.pathClick(_vm.fileNode)}}},[_vm._v(_vm._s(_vm.filePath))]):_vm._e()]):_vm._e(),_vm._v(" "),(_vm.editing)?_c('span',{staticClass:"fileedit",on:{"click":function($event){$event.preventDefault();$event.stopPropagation();},"mousedown":function($event){$event.stopPropagation();}}},[(_vm.renaming)?_c('input',{directives:[{name:"focus",rawName:"v-focus"}],ref:"renamingInput",staticClass:"ui-input",attrs:{"type":"text"},domProps:{"value":_vm.fileNode.getName()},on:{"blur":function($event){_vm.confirmRename($event, _vm.fileNode)},"keyup":[function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.blur($event)},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"esc",27,$event.key,"Escape")){ return null; }$event.preventDefault();$event.stopPropagation();return _vm.cancelEditing($event)}]}}):(_vm.creating)?_c('input',{directives:[{name:"focus",rawName:"v-focus"}],ref:"creatingInput",staticClass:"ui-input",attrs:{"type":"text"},domProps:{"value":_vm.fileNode.getName()},on:{"blur":function($event){_vm.confirmCreate($event, _vm.fileNode)},"keyup":[function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.blur($event)},function($event){if(!('button' in $event)&&_vm._k($event.keyCode,"esc",27,$event.key,"Escape")){ return null; }$event.preventDefault();$event.stopPropagation();return _vm.cancelEditing($event)}]}}):_vm._e()]):_vm._e()])]),_vm._v(" "),_vm._t("item-info",null,{fileNode:_vm.fileNode})],2)])}
var staticRenderFns = []


/***/ }),

/***/ "uTdc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _breadcrumb = __webpack_require__("hOCW");

var _breadcrumb2 = _interopRequireDefault(_breadcrumb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _breadcrumb2.default;

/***/ }),

/***/ "wIaR":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__("7+uW");

var _vue2 = _interopRequireDefault(_vue);

var _menuList = __webpack_require__("ELTj");

var _menuList2 = _interopRequireDefault(_menuList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ContextMenuCtor = _vue2.default.extend(_menuList2.default);

var instance = void 0;

function createInstence(items, position) {
    if (instance) {
        destroy();
    }
    instance = new ContextMenuCtor({
        el: document.createElement('div'),
        propsData: {
            items: items,
            position: position
        }
    });

    document.body.appendChild(instance.$el);

    return instance;
}

function close(e) {
    if (!instance || !instance.$el) {
        return;
    }
    var parent = e.target;
    var find = true;
    while (parent !== instance.$el) {
        if (!parent) {
            find = false;
            break;
        }
        parent = parent.parentNode;
        if (parent === document.body) {
            find = false;
            break;
        }
    }

    if (!find) {
        destroy();
    }
}

function destroy() {
    if (instance) {
        document.removeEventListener('mousedown', close);
        instance.$emit('destroy');
        instance.$el.parentNode.removeChild(instance.$el);
        instance.$destroy();
        instance = null;
    }
}

function show(opts) {
    if (!opts.items) {
        throw new Error('menu items undefined');
    } else if (!opts.items.length) {
        instance && destroy();
        return;
    }
    createInstence(opts.items, opts.position);
    instance.$on('itemClick', opts.itemClick);
    instance.$on('itemClick', destroy);
    if (opts.itemHover) {
        instance.$on('itemHover', opts.itemHover);
    }

    instance.$on('destroy', function () {
        opts.hide && opts.hide();
    });
    document.addEventListener('mousedown', close);
}

module.exports.show = show;
module.exports.hide = destroy;

/***/ }),

/***/ "wa7I":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {
	props: {
		itemWidth: Number,
		allChecked: Boolean,
		fileNode: Object,
		editingItem: Object
	},
	data: function data() {
		return {
			draggable: true,
			droppable: false,
			cancelEdited: false,
			lastClickTime: 0
		};
	},


	computed: {
		selected: function selected() {
			return this.fileNode.isSelected();
		},
		largeIcon: function largeIcon() {
			if (this.fileNode.isVideo()) {
				return 'icon-gray-l';
			}
			if (this.fileNode.isImage()) {
				return this.fileNode.canPreview() ? '' : 'icon-error-l';
			}
			return 'icon-' + this.fileNode.getType() + '-l';
		},
		smallIcon: function smallIcon() {
			return 'icon-' + this.fileNode.getType() + '-s';
		},
		thumbUrl: function thumbUrl() {
			return this.fileNode.isVideo() ? this.fileNode.getThumbUrl(256) : this.fileNode.getThumbUrl(256);
		},
		renaming: function renaming() {
			return this.fileNode.isRenaming && this.fileNode.isRenaming();
		},
		creating: function creating() {
			return this.fileNode.isTempcreate && this.fileNode.isTempcreate();
		},
		editing: function editing() {
			return this.renaming || this.creating;
		}
	},

	watch: {
		editing: function editing(val) {
			this.$emit('hasItemEditing', val ? this.fileNode : null);
		}
	},

	mounted: function mounted() {
		if (this.creating) {
			this.$emit('hasItemEditing', this.fileNode);
		}
	},


	methods: {
		itemClick: function itemClick(e) {
			var now = +new Date();
			var dblclick = false;

			if (now - this.lastClickTime < 300) {
				dblclick = true;
			}

			this.lastClickTime = now;

			if (e.shiftKey) {
				this.$emit('shiftAndClick', this.fileNode);
			} else if (e.ctrlKey) {
				this.$emit('ctrlAndClick', this.fileNode);
			} else if (!dblclick && (e.target === this.$refs.dragInfo || e.target.parentNode === this.$refs.dragThumb)) {
				if (this.editingItem) {
					this.$emit('blurEditingItem', this.editingItem);
				} else {
					this.$emit('itemClick', this.fileNode, e);
				}
			} else if (dblclick && !(e.target === this.$refs.dragInfo || e.target.parentNode === this.$refs.dragThumb)) {
				if (this.editingItem) {
					this.$emit('blurEditingItem', this.editingItem);
				} else {
					this.$emit('itemClick', this.fileNode, e);
				}
			} else if (!dblclick) {
				if (this.editingItem) {
					this.$emit('blurEditingItem', this.editingItem);
				} else {
					this.$emit('singleSelect', this.fileNode);
				}
			}
		},
		itemContextmenu: function itemContextmenu(e) {
			this.$emit('itemContextmenu', this.fileNode, {
				x: e.clientX,
				y: e.clientY
			});
		},
		toggleSelect: function toggleSelect(e, selected) {
			if (typeof selected === 'undefined') {
				selected = e;
				e = {};
			}
			this.fileNode.setSelected(selected);
			if (selected && !e.shiftKey) {
				this.$emit('lastItemSelect', this.fileNode);
			}
			if (e.shiftKey) {
				this.$emit('shiftAndClick', this.fileNode);
			}
		},
		blur: function blur(e) {
			e.currentTarget.blur();
		},
		confirmRename: function confirmRename(e, fileNode) {
			var fileName = e.currentTarget.value;

			if (fileNode.isSelected() && this.renaming) {
				fileNode.setTempname(fileName);
				this.$emit('confirmRename');
			} else {
				fileNode.setRenaming(false);
				fileNode.setTempname('');
			}
		},
		confirmCreate: function confirmCreate(e, fileNode) {
			var fileName = e.currentTarget.value;

			if (this.cancelEdited) {
				return;
			}

			fileNode.setTempname(fileName);

			this.$emit('confirmCreate', fileNode);
		},
		cancelEditing: function cancelEditing(e) {
			if (this.renaming) {
				this.fileNode.setRenaming(false);
				this.fileNode.setTempname('');
			} else {
				this.cancelEdited = true;
				this.fileNode.setTempname('');
				this.$emit('confirmCreate', this.fileNode);
			}
			this.fileNode.setSelected(false);
		},
		onError: function onError() {
			this.fileNode.setPreviewError();
		}
	}
};

/***/ }),

/***/ "wae7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {

    props: {
        viewMode: String
    },

    data: function data() {
        return {
            hidden: false
        };
    },


    methods: {
        switchView: function switchView(viewMode) {
            this.$emit('switchView', viewMode);
        }
    }
};

/***/ }),

/***/ "xE/G":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_poniter_vue__ = __webpack_require__("U6jU");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_poniter_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_poniter_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_poniter_vue__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_poniter_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2a92cd12_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_poniter_vue__ = __webpack_require__("1i6a");
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_poniter_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2a92cd12_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_poniter_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2a92cd12_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_poniter_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "ySHS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_menu_item_vue__ = __webpack_require__("3vdG");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_menu_item_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_menu_item_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_menu_item_vue__) if(["default","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_menu_item_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_12fa8604_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_menu_item_vue__ = __webpack_require__("4zjU");
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_menu_item_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_12fa8604_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_menu_item_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_12fa8604_hasScoped_false_optionsId_96_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_menu_item_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "yfA0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.isShowCleanToast)?_c('div',{staticClass:"clean-notice",class:[_vm.isCleanAlertStatus ? 'alert-status' : '']},[_c('i'),_vm._v(" "),(_vm.isVipNotice)?_c('span',[_vm._v("空间已满，快开通会员重享特权吧")]):_c('span',[_vm._v(_vm._s(_vm.isCleanAlertStatus ? '当前账号有被冻结风险' : '存储空间已满')+"，"+_vm._s(_vm.spaceCleanLeftDays)+"天后账号将被冻结")]),_vm._v(" "),_c('a',{on:{"click":function($event){$event.preventDefault();return _vm.showSpaceCleanDialog($event)}}},[_vm._v("了解详情")])]):_vm._e()}
var staticRenderFns = []


/***/ }),

/***/ "z3SN":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__("Xxa5");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__("exGp");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _constants = __webpack_require__("4Uv1");

var _constants2 = _interopRequireDefault(_constants);

var _index = __webpack_require__("jfu6");

var _index2 = __webpack_require__("d5U5");

var _wyToast = __webpack_require__("cYh5");

var _wyToast2 = _interopRequireDefault(_wyToast);

var _const = __webpack_require__("XaId");

var _report = __webpack_require__("Vyex");

var _report2 = _interopRequireDefault(_report);

var _vipStatus = __webpack_require__("LUej");

var _onlyCallOnce = __webpack_require__("/0Po");

var _platForReport = __webpack_require__("hFxg");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UPDATE_INTERVAL = 10 * 60 * 1000;

exports.default = {
    data: function data() {
        return {
            isUserHasCoupon: false,
            isClosed: false
        };
    },

    watch: {
        isShowNotice: function isShowNotice(newValue) {
            if (newValue) {
                _report2.default.beacon('weiyun_coupon_send_show', {
                    pagename: this.pagenameForNoticeBar,
                    usertype: this.usertype,
                    plat: (0, _platForReport.getPlatForReport)()
                });
            }
        }
    },
    methods: {
        collectCoupon: function collectCoupon() {
            var _this = this;

            return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
                var aid, _ref, coupon, showWyWebpayBox;

                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                aid = '';

                                if (_this.isUserVipAboutToExpired) {
                                    aid = _const.couponRelatedAids.WEB_WILLEXPIRE_BAR;
                                }
                                if (_this.isUserVipExpired) {
                                    aid = _const.couponRelatedAids.WEB_EXPIRED_BAR;
                                }
                                _context.next = 5;
                                return (0, _index.requestUsersCouponInfoFor12MSvip)({
                                    grant_if_empty: true
                                });

                            case 5:
                                _ref = _context.sent;
                                coupon = _ref.coupon;

                                if (coupon) {
                                    _context.next = 10;
                                    break;
                                }

                                _wyToast2.default.error('优惠券领取失败，请稍后重试');
                                return _context.abrupt('return');

                            case 10:
                                showWyWebpayBox = (0, _onlyCallOnce.onlyCallOnce)(function () {
                                    _this.$store.dispatch('control/popBuyVip', {
                                        type: 'svip',
                                        aid: aid,
                                        sandbox: !!_constants2.default.IS_DEBUG
                                    });
                                });

                                (0, _index2.showWyCouponBox)({
                                    title: '优惠券已领取',
                                    onClickMainButtonBeforeCouponExpired: function onClickMainButtonBeforeCouponExpired() {
                                        showWyWebpayBox();
                                        _report2.default.beacon('weiyun_coupon_get_click', {
                                            btnname: 'use',
                                            usertype: _this.usertype,
                                            plat: (0, _platForReport.getPlatForReport)()
                                        });
                                    },
                                    onBoxShow: function onBoxShow() {
                                        showWyWebpayBox();
                                        _report2.default.beacon('weiyun_coupon_get_show', {
                                            pagename: _this.pagenameForNoticeBar,
                                            usertype: _this.usertype,
                                            plat: (0, _platForReport.getPlatForReport)()
                                        });
                                    },
                                    onManuallyClose: function onManuallyClose() {
                                        _report2.default.beacon('weiyun_coupon_get_click', {
                                            btnname: 'close',
                                            usertype: _this.usertype,
                                            plat: (0, _platForReport.getPlatForReport)()
                                        });
                                    }
                                });
                                _report2.default.beacon('weiyun_coupon_send_click', {
                                    pagename: _this.pagenameForNoticeBar,
                                    btnname: 'get',
                                    usertype: _this.usertype,
                                    plat: (0, _platForReport.getPlatForReport)()
                                });
                                _this.close();

                            case 14:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this);
            }))();
        },
        manuallyClose: function manuallyClose() {
            _report2.default.beacon('weiyun_coupon_send_click', {
                pagename: this.pagenameForNoticeBar,
                btnname: 'close',
                usertype: this.usertype,
                plat: (0, _platForReport.getPlatForReport)()
            });
            this.$store.dispatch('userInfo/closedNotionInfo', { actionId: '1' });
            this.close();
        },
        close: function close() {
            this.isClosed = true;
        }
    },
    computed: {
        usertype: function usertype() {
            var _$store$state$userInf = this.$store.state.userInfo.weiyun_vip_info,
                weiyun_vip = _$store$state$userInf.weiyun_vip,
                super_vip = _$store$state$userInf.super_vip;

            var isNormalUser = !(weiyun_vip || super_vip);
            var usertype = isNormalUser ? 'nomember' : 'member';
            return usertype;
        },
        pagenameForNoticeBar: function pagenameForNoticeBar() {
            var pagenameForNoticeBar = '';
            if (this.isUserVipExpired) {
                pagenameForNoticeBar = 'expired_bar';
            }
            if (this.isUserVipAboutToExpired) {
                pagenameForNoticeBar = 'willexpire_bar';
            }
            return pagenameForNoticeBar;
        },
        isMobile: function isMobile() {
            return !!_constants2.default.BROWSER.isMobile;
        },
        isUserVipExpired: function isUserVipExpired() {
            var userInfo = this.$store.state.userInfo;
            return (0, _vipStatus.getHasVipExpired)(userInfo);
        },
        isUserVipAboutToExpired: function isUserVipAboutToExpired() {
            var userInfo = this.$store.state.userInfo;
            return (0, _vipStatus.getIsVipAboutToExpireIn14Days)(userInfo);
        },
        isShowNotice: function isShowNotice() {
            if (this.isClosed) {
                return false;
            }

            var isNoticeLoaded = this.$store.state.userInfo.isPopUpCouponAndNoticeLoaded;
            if (!isNoticeLoaded) {
                return false;
            }
            var yellobarInfo = this.$store.state.userInfo.coupon_yellow_bar_info;
            if (yellobarInfo.text && yellobarInfo.button_text) {
                return true;
            }
            return false;
        },
        noticeText: function noticeText() {
            var yellobarInfo = this.$store.state.userInfo.coupon_yellow_bar_info;
            return yellobarInfo.text;
        },
        linkText: function linkText() {
            var yellobarInfo = this.$store.state.userInfo.coupon_yellow_bar_info;
            return yellobarInfo.button_text;
        }
    }
};

/***/ })

});