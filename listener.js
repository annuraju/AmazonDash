(function(ext) {

    var socket = null;
    var debugLevel = true;
    var xhr = new XMLHttpRequest();
    var result = null;

    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    ext.my_first_block = function() {
      console.log("I am here!!");
    };
    
    ext.send_msg = function(){
        var msg = JSON.stringify({
            "command": "sniff"
        });
        window.socket.send(msg);

        window.socket.onmessage = function (message) {
            if (debugLevel)
                console.log(message);
            result = message.data;
        };
            
        return result;
    };
    
    ext.cnct = function () {
        if(debugLevel)
            console.log('Connecting to Server');
        window.socket = new WebSocket("ws://127.0.0.1:9000");
        window.socket.onopen = function () {
            var msg = JSON.stringify({
                "command": "ready"
            });
            window.socket.send(msg);
            if(debugLevel)
                console.log("Connected!");
            myStatus = 2;
            myMsg = 'ready';
            connected = true;
        };
        
        window.socket.onclose = function (e) {
            console.log("Connection closed.");
            socket = null;
            connected = false;
            myStatus = 1;
            myMsg = 'not_ready'
        };
    };
    
    ext.on = function(){
        switch (result) {
            case "1":
                xhr.open('GET', "http://192.168.1.188/cgi-bin/relay.cgi?on", true);
                xhr.send();                
                break;
            case "2":
                xhr.open('GET', "http://192.168.1.146/cgi-bin/relay.cgi?on", true);
                xhr.send();
                break;
            case "3":
                xhr.open('GET', "http://192.168.1.142/cgi-bin/relay.cgi?on", true);
                xhr.send();
                break;
            case "4":
                xhr.open('GET', "http://192.168.1.103/cgi-bin/relay.cgi?on", true);
                xhr.send();
                break;
            case "5":
                xhr.open('GET', "http://192.168.1.183/cgi-bin/relay.cgi?on", true);
                xhr.send();
                break;
            case "6":
                xhr.open('GET', "http://192.168.1.164/cgi-bin/relay.cgi?on", true);
                xhr.send();
                break;
            case "7":
                xhr.open('GET', "http://192.168.1.117/cgi-bin/relay.cgi?on", true);
                xhr.send();
                break;                
        }
    };
    
    ext.off = function(){
        switch (result) {
            case "1":
                xhr.open('GET', "http://192.168.1.188/cgi-bin/relay.cgi?off", true);
                xhr.send();                
                break;
            case "2":
                xhr.open('GET', "http://192.168.1.146/cgi-bin/relay.cgi?off", true);
                xhr.send();
                break;
            case "3":
                xhr.open('GET', "http://192.168.1.142/cgi-bin/relay.cgi?off", true);
                xhr.send();
                break;
            case "4":
                xhr.open('GET', "http://192.168.1.103/cgi-bin/relay.cgi?off", true);
                xhr.send();
                break;
            case "5":
                xhr.open('GET', "http://192.168.1.183/cgi-bin/relay.cgi?off", true);
                xhr.send();
                break;
            case "6":
                xhr.open('GET', "http://192.168.1.164/cgi-bin/relay.cgi?off", true);
                xhr.send();
                break;
            case "7":
                xhr.open('GET', "http://192.168.1.117/cgi-bin/relay.cgi?off", true);
                xhr.send();
                break;                
        }    
        
    };
    
    ext.toggle = function(){
        switch (result) {
            case "1":
                xhr.open('GET', "http://192.168.1.188/cgi-bin/relay.cgi?toggle", true);
                xhr.send();                
                break;
            case "2":
                xhr.open('GET', "http://192.168.1.146/cgi-bin/relay.cgi?toggle", true);
                xhr.send();
                break;
            case "3":
                xhr.open('GET', "http://192.168.1.142/cgi-bin/relay.cgi?toggle", true);
                xhr.send();
                break;
            case "4":
                xhr.open('GET', "http://192.168.1.103/cgi-bin/relay.cgi?toggle", true);
                xhr.send();
                break;
            case "5":
                xhr.open('GET', "http://192.168.1.183/cgi-bin/relay.cgi?toggle", true);
                xhr.send();
                break;
            case "6":
                xhr.open('GET', "http://192.168.1.164/cgi-bin/relay.cgi?toggle", true);
                xhr.send();
                break;
            case "7":
                xhr.open('GET', "http://192.168.1.117/cgi-bin/relay.cgi?toggle", true);
                xhr.send();
                break;                
        }    };

    ext._getStatus=function(){
        return{status:2,msg:"Ready"}
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            // Block type, block name, function name
            [' ', 'my first block', 'my_first_block'],
            [' ', 'connect', 'cnct'],
            ['r', 'send message', 'send_msg'],
            [' ', 'on', 'on'],
            [' ', 'off', 'off'],
            [' ', 'toggle', 'toggle'],
        ]
    };

    // Register the extension
    ScratchExtensions.register('My first extension', descriptor, ext);
})({});
