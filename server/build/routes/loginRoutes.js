"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var router = (0, express_1.Router)();
exports.router = router;
function requireAuth(req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.status(403);
    res.send('Not forbidden');
}
;
router.post('/login', function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    if (email && password && email == 'test@email.com' && password == 'password') {
        req.session = { loggedIn: true };
        res.redirect('/');
    }
    else {
        res.send('Invalid email or password');
    }
});
router.get('/', function (req, res) {
    if (req.session && req.session.loggedIn) {
        res.send("\n    <div>\n      <h3>You are logged in</h3>\n      <a href=\"/logout\">Logout</a>\n    </div>\n    ");
    }
    else {
        res.send("\n      <div>\n        <h3>You are not logged in</h3>\n        <a href=\"/login\">Login</a>\n      </div>\n    ");
    }
});
router.get('/logout', function (req, res) {
    req.session = undefined;
    res.redirect('/');
});
router.get('/protected', requireAuth, function (req, res) {
    res.send('Welcome to protected route!');
});
