'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _glob = require('glob');

var _glob2 = _interopRequireDefault(_glob);

var _child_process = require('child_process');

var _path = require('path');

var _libLog = require('../lib/log');

var _libLog2 = _interopRequireDefault(_libLog);

(0, _libLog2['default'])('Board:: Starting Job Runner…');

(0, _glob2['default'])('jobs/**/*.js', {
    cwd: (0, _path.join)(__dirname, '..')
}, function (err, files) {
    console.log(files);

    if (err) {
        return;
    }

    files.forEach(function (file) {
        var process = (0, _child_process.spawn)('node', [(0, _path.join)(__dirname, '..', file)]);

        process.stdout.on('data', function (data) {
            (0, _libLog2['default'])(data.toString());
        });

        process.stderr.on('data', function (data) {
            (0, _libLog2['default'])(data.toString());
        });
    });
});

(0, _libLog2['default'])('Board:: Job Runner has started.');

//# sourceMappingURL=runner.js.map