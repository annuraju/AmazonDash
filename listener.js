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
      return "Yes";
    };
    
    ext.send_msg = function(){
        var msg = JSON.stringify({
            "command": "sniff"
        });
        window.socket.send(msg);
        
        window.socket.onmessage = function (message) {
            if (debugLevel)
                console.log(message);
            switch (message.data) {
                case 'play-doh':
                    alert("Play-Doh button pressed");
                    xhr.open('GET', "http://192.168.1.188/cgi-bin/relay.cgi?toggle", true);
                    xhr.send(); 
                    return ScratchExtensions.getStatus('My first extension').status;
                case 'ON':
                    alert("ON button pressed");
                    xhr.open('GET', "http://192.168.1.188/cgi-bin/relay.cgi?toggle", true);
                    xhr.send(); 
                    return 2;
                case 'Goldfish':
                    alert("Goldfish button pressed");
                    xhr.open('GET', "http://192.168.1.188/cgi-bin/relay.cgi?toggle", true);
                    xhr.send(); 
                    return result;
                case 'Charmin':
                    alert("Charmin button pressed");
                    xhr.open('GET', "http://192.168.1.188/cgi-bin/relay.cgi?toggle", true);
                    xhr.send(); 
                    return result;
                case 'Energizer':
                    alert("Energizer button pressed");
                    xhr.open('GET', "http://192.168.1.188/cgi-bin/relay.cgi?toggle", true);
                    xhr.send(); 
                    return result;
                case 'HonestKids':
                    alert("HonestKids button pressed");
                    xhr.open('GET', "http://192.168.1.188/cgi-bin/relay.cgi?toggle", true);
                    xhr.send(); 
                    return result;                    
                case 'off':
                    console.log("OFF Button pressed");
                    break;
            }
        };
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

        window.socket.onmessage = function (message) {
            if (debugLevel)
                console.log(message);
            switch (message.data) {
                case 'on':
                    alert("Button pressed");
                    console.log("ON Button pressed");
                    result = "on";
                    return result;
                case 'off':
                    console.log("OFF Button pressed");
                    break;
            }
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
        xhr.open('GET', "http://192.168.1.188/cgi-bin/relay.cgi?toggle", true);
        xhr.send();    
    };
    
    ext.off = function(){
        print("OFF");
    };
    
    ext.toggle = function(){
        print("TOGGLE");
    };

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
