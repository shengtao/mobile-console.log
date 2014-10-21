// Make a custom log for mobile devices
if (isMobile()) {
    console.log = function(message) {
        var log = document.querySelector("#console-log");
        if (!log) {
            log = document.createElement('ul');
            log.id = 'console-log';

            var styleText = 'position:fixed; top:0; left:0; width:100%; list-style-type:none; margin:0; padding:0; padding: 5px; font-size:9px; background:rgba(0,0,0,.7); color:white; font-family: monospace; z-index: 10000; text-align: left;';
            log.style.cssText = styleText;

            document.body.insertBefore(log, document.body.childNodes[0]);
        }

        message = typeof message == 'object' ? JSON.stringify(message) : message;
        message = (new Date()).toTimeString().split(' ')[0] + ' <b style="color: red;">msg</b>: ' + message;

        log.innerHTML += '<li style="word-break: break-all;">' + message + '</li>';
    }
}

function isMobile() {
    var useragent = navigator.userAgent;
    return useragent.indexOf('Android') != -1
            || useragent.indexOf('iPhone') != -1
            || useragent.indexOf('iPod') != -1
            || useragent.indexOf('iPad') != -1;
}
