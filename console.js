$(document).ready(function() {
    // Make a custom log for mobile devices
    if (isMobile()) {
        console.log = function(message) {
            if ($("#console-log").length == 0) {
                $("body").append($('<ul id="console-log" style="position:fixed; top:0; left:0; width:100%; list-style-type:none; margin:0; padding:0; padding: 10px; font-size:9px; background:rgba(0,0,0,.7); color:white; font-family: monospace; z-index: 10000; text-align: left;"><li>Mobile console.log</li></ul>'));
            }
            
            message = typeof message == 'object' ? JSON.stringify(message) : message;
            message = (new Date()).toTimeString().split(' ')[0] + ' <b style="color: red;">msg</b>: ' + message;
            
            $("#console-log").append($('<li style="margin-left:none;">' + message + '</li>'));
        }
    }
});

function isMobile() {
    var useragent = navigator.userAgent;
    return useragent.indexOf('Android') != -1
            || useragent.indexOf('iPhone') != -1
            || useragent.indexOf('iPod') != -1
            || useragent.indexOf('iPad') != -1;
}
