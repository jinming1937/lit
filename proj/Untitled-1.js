/* */
/***/
!function (module, exports, __webpack_require__) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = undefined;

  var _Modal2 = __webpack_require__(108);

  var _Modal3 = _interopRequireDefault(_Modal2);

  var _Form2 = __webpack_require__(69);

  var _Form3 = _interopRequireDefault(_Form2);

  var _refers2 = __webpack_require__(16);

  var _refers3 = _interopRequireDefault(_refers2);

  var _TextArea2 = __webpack_require__(109);

  var _TextArea3 = _interopRequireDefault(_TextArea2);

  var _EnumSelect2 = __webpack_require__(111);

  var _EnumSelect3 = _interopRequireDefault(_EnumSelect2);

  var _InputNumber2 = __webpack_require__(113);

  var _InputNumber3 = _interopRequireDefault(_InputNumber2);

  var _rule3 = __webpack_require__(89);

  var _rule4 = _interopRequireDefault(_rule3);

  var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) { descriptor.writable = true; } Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) { defineProperties(Constructor.prototype, protoProps); } if (staticProps) { defineProperties(Constructor, staticProps); } return Constructor; }; }();

  var _class;

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

  var _react = __webpack_require__(10);

  var _react2 = _interopRequireDefault(_react);

  var _Grid = __webpack_require__(103);

  var _Grid2 = _interopRequireDefault(_Grid);

  var _SplitInput = __webpack_require__(115);

  var _SplitInput2 = _interopRequireDefault(_SplitInput);

  var _Notification = __webpack_require__(45);

  var _Notification2 = _interopRequireDefault(_Notification);

  var _mobxReact = __webpack_require__(23);

  var _$config = __webpack_require__(52);

  var _index = __webpack_require__(98);

  var _index2 = _interopRequireDefault(_index);

  var _store = __webpack_require__(97);

  var _store2 = _interopRequireDefault(_store);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) { Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } }

  var required = _rule4.default.required;


  var selectRult = {
    rule: required.rule,
    message: ''
  };

  var checkAdjustNumber = function checkAdjustNumber(num) {
    return {
      rule: function rule(value) {
        console.log('jm234567890');
        console.log(_rule2);
        if (!required.rule(value)) {
          _Notification2.default.error('请填写调整数量后再提交');
        } else if (Number(value) > num) {
          _Notification2.default.error('输入数量不得大于待处理数量!');
        }
        console.log(typeof num === 'undefined' ? 'undefined' : _typeof(num));
        return Number(value) > 0 && Number(value) <= num;
      },
      message: ''
    };
  };

  var Grid = (0, _mobxReact.observer)(_class = function (_Component) {
    _inherits(Grid, _Component);

    function Grid() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, Grid);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Grid.__proto__ || Object.getPrototypeOf(Grid)).call.apply(_ref, [this].concat(args))), _this), _this.getColumns = function (windowType) {
        return (0, _$config.filterColumns)([{
          title: '商品编码',
          dataIndex: 'skuCode',
          width: 80,
          fixed: 'left'
        }, {
          title: '商品名称',
          dataIndex: 'skuName'
        }, {
          title: '批次',
          dataIndex: 'skuSeq',
          width: 180
        }, {
          title: '所属货位',
          dataIndex: 'locationCode',
          width: 90
        }, {
          title: '待处理数量',
          dataIndex: 'diffQty',
          width: 80
        }, {
          title: '调整数量',
          dataIndex: 'adjustQty',
          width: 120,
          render: function render(t, r, i) {
            return _react2.default.createElement(_InputNumber3.default, {
              validator: checkAdjustNumber(r.diffQty),
              placeholder: '-0',
              bind: 'list.' + i + '.movingCount',
              name: i + '-inputCount'
            });
          },
          bizType: 'adjusting'
        }, {
          title: '目标库区',
          dataIndex: 'aimKuqu',
          width: 120,
          render: function render(t, r, i) {
            return _react2.default.createElement(_EnumSelect3.default, {
              className: 'w70',
              bind: 'list.' + i + '.areaCode',
              goblin: 'fe.areaCode',
              getPopupContainer: function getPopupContainer() {
                return document.body;
              },
              validator: selectRult,
              onSelect: function onSelect(a) {
                return _store2.default.setLocationPrefix(i, a);
              }
            });
          },
          bizType: 'moving'
        }, {
          title: '目标货位',
          dataIndex: 'mubiao',
          width: 166,
          render: function render(t, r, i) {
            return _react2.default.createElement(_SplitInput2.default, {
              bind: 'list.' + i + '.locationCode',
              name: i + '-input',
              lastInputOnBlur: function lastInputOnBlur() {
                return _store2.default.fetchInventory(i, r.skuCode);
              }
              // validator={rule}
            });
          },
          bizType: 'moving'
        }, {
          title: '调整原因',
          dataIndex: 'adjustReason',
          width: 120,
          render: function render(t, r, i) {
            return _react2.default.createElement(_EnumSelect3.default, {
              className: 'w100',
              bind: 'list.' + i + '.adjustReason',
              placeholder: '\u9009\u62E9\u539F\u56E0',
              goblin: 'moliere_storage_adjust_reason',
              validator: selectRult,
              getPopupContainer: function getPopupContainer() {
                return document.body;
              }
            });
          },
          bizType: 'adjusting'
        }, {
          title: '移位数量',
          dataIndex: 'movingCount',
          width: 120,
          render: function render(i) {
            return _react2.default.createElement(_InputNumber3.default, {
              // validator={rule}
              bind: 'list.' + i + '.movingCount',
              name: i + '-inputCount'
            });
          },
          // validator: ['该商品存在默认拣货位', '该货位不能混批'],
          bizType: 'moving'
        }, {
          title: '备注',
          dataIndex: 'memo',
          width: 180,
          render: function render(t, r, i) {
            return _react2.default.createElement(_TextArea3.default, {
              autosize: { maxRows: 2, minRows: 2 },
              className: 'w160',
              maxLength: '30',
              style: { resize: 'none' },
              bind: 'list.' + i + '.memo'
            });
          }
        }], windowType);
      }, _this.validator = function () {
        _refers3.default.modalGrid.validate(function () {
          _store2.default.adjust();
        });
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Grid, [{
      key: 'render',
      value: function render() {
        var visible = _store2.default.visible,
          hideModal = _store2.default.hideModal,
          model = _store2.default.model,
          getDataSource = _store2.default.getDataSource,
          windowType = _store2.default.windowType;

        var _getColumns = this.getColumns(windowType),
          columns = _getColumns.columns,
          totalWidth = _getColumns.totalWidth;

        var _adjusting$moving$win = {
          adjusting: {
            okText: '提交审核',
            title: '库存调整',
            warning: '请确认需要调整的商品和原因，提交后不可更改'
          },
          moving: {
            okText: '确认移位',
            title: '移位',
            warning: '请确认需要移位的商品和原因，提交后不可更改'
          }
        }[windowType],
          okText = _adjusting$moving$win.okText,
          title = _adjusting$moving$win.title,
          warning = _adjusting$moving$win.warning;

        return _react2.default.createElement(
          _Modal3.default,
          {
            visible: visible,
            onOk: this.validator,
            onCancel: hideModal,
            okText: okText,
            title: title,
            width: 1080,
            maskClosable: false
          },
          _react2.default.createElement(
            _Form3.default,
            { model: model, name: 'modalGrid' },
            _react2.default.createElement(_Grid2.default, {
              name: 'inventoryAdjustModalGrid',
              autoload: false,
              columns: columns,
              dataSource: getDataSource(),
              pagination: false,
              scroll: { x: totalWidth, y: 300 }
            })
          ),
          _react2.default.createElement(
            'div',
            { className: _index2.default.tip },
            warning
          )
        );
      }
    }]);

    return Grid;
  }(_react.Component)) || _class;

  window.refers.EnumStore.collect(['fe.areaCode', 'moliere_storage_adjust_reason']);
  exports.default = Grid;

  /***/
}