'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('/Users/aplchian/Desktop/code/practice/minesweeper-alex/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _css = require('/Users/aplchian/Desktop/code/practice/minesweeper-alex/node_modules/next/dist/lib/css.js');

var _css2 = _interopRequireDefault(_css);

var _head = require('/Users/aplchian/Desktop/code/practice/minesweeper-alex/node_modules/next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _cowsayBrowser = require('cowsay-browser');

var _cowsayBrowser2 = _interopRequireDefault(_cowsayBrowser);

var _Link = require('next/Link');

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'div',
    null,
    ' Click ',
    _react2.default.createElement(
      _Link2.default,
      { href: '/about' },
      _react2.default.createElement(
        'a',
        null,
        'here'
      )
    ),
    ' to read more '
  );
};

var style = (0, _css2.default)({
  background: 'red',
  ':hover': {
    background: 'gray'
  },
  '@media (max-width: 600px)': {
    background: 'blue'
  }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbInN0eWxlIiwiYmFja2dyb3VuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O2tCQUVlO0FBQUEsU0FDYjtBQUFBO0FBQUE7QUFBQTtBQUFZO0FBQUE7QUFBQSxRQUFNLE1BQUssUUFBWDtBQUFvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXBCLEtBQVo7QUFBQTtBQUFBLEdBRGE7QUFBQSxDOztBQU1mLElBQU1BLFFBQVEsbUJBQUk7QUFDaEJDLGNBQVksS0FESTtBQUVoQixZQUFVO0FBQ1JBLGdCQUFZO0FBREosR0FGTTtBQUtoQiwrQkFBNkI7QUFDM0JBLGdCQUFZO0FBRGU7QUFMYixDQUFKLENBQWQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FwbGNoaWFuL0Rlc2t0b3AvY29kZS9wcmFjdGljZS9taW5lc3dlZXBlci1hbGV4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNzcyBmcm9tICduZXh0L2NzcydcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBjb3dzYXkgZnJvbSAnY293c2F5LWJyb3dzZXInXG5pbXBvcnQgTGluayBmcm9tICduZXh0L0xpbmsnXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcbiAgPGRpdj4gQ2xpY2sgPExpbmsgaHJlZj1cIi9hYm91dFwiPjxhPmhlcmU8L2E+PC9MaW5rPiB0byByZWFkIG1vcmUgPC9kaXY+XG4pXG5cblxuXG5jb25zdCBzdHlsZSA9IGNzcyh7XG4gIGJhY2tncm91bmQ6ICdyZWQnLFxuICAnOmhvdmVyJzoge1xuICAgIGJhY2tncm91bmQ6ICdncmF5J1xuICB9LFxuICAnQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSc6IHtcbiAgICBiYWNrZ3JvdW5kOiAnYmx1ZSdcbiAgfVxufSlcbiJdfQ==