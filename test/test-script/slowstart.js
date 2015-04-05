var port = require("system").stdin.readLine();

setTimeout(function() {
    require('webserver').create().listen('127.0.0.1:' + port, function (req, res) {
        try {
            res.statusCode = 200;
            res.write(req.post);
            res.close();
        } catch (e) {
            res.statusCode = 500;
            res.write(JSON.stringify(e));
            res.close();
        }
    });
}, 2000);

