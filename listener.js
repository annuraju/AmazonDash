(function(ext) {

    var socket = null;
    var debugLevel = true;
    var xhr = new XMLHttpRequest();
    var result = null;
    var button_result1 = 0;
    var button_result2 = 0;
    var button_result3 = 0;
    var button_result4 = 0;
    var button_result5 = 0;
    var button_result6 = 0;
    var button_result7 = 0;
    var button_result8 = 0;
    var button_result9 = 0;
    var button_result10 = 0;
    var button_result11 = 0;
    var button_result12 = 0;
    var button_result13 = 0;
    var button_result14 = 0;
    var button_result15 = 0;
    var button_result16 = 0;
    var button_result17 = 0;
    var button_result18 = 0;
    var button_result19 = 0;
    var button_result20 = 0;
    
    var plug = null;

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
    
    ext.check_status = function(){
        console.log(result);
        plug = result;
        result  = 0;
        return plug;
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
            
            switch (message.data) {
                case "1":
                    button_result1 = 1;                
                    break;
                case "2":
                    button_result2 = 1;                
                    break;
                case "3":
                    button_result3 = 1;                
                    break;
                case "4":
                    button_result4 = 1;                
                    break;
                case "5":
                    button_result5 = 1;                
                    break;
                case "6":
                    button_result6 = 1;                
                    break;
                case "7":
                    button_result7 = 1;                
                    break;
                case "8":
                    button_result8 = 1;                
                    break;
                case "9":
                    button_result9 = 1;                
                    break;
                case "10":
                    button_result10 = 1;                
                    break;
                case "11":
                    button_result11 = 1;                
                    break;
                case "12":
                    button_result12 = 1;                
                    break;
                case "13":
                    button_result13 = 1;                
                    break;
                case "14":
                    button_result14 = 1;                
                    break;
                case "15":
                    button_result15 = 1;                
                   break;
                case "16":
                    button_result16 = 1;                
                    break; 
                case "17":
                    button_result17 = 1;                
                    break;
                case "18":
                    button_result18 = 1;                
                    break;
                case "19":
                    button_result19 = 1;                
                    break;
                case "20":
                    button_result20 = 1;                
                    break;
            }           
        };       
        return result;
    };    
    
    ext.cnct = function () {
        if(debugLevel)
            console.log('Connecting to Server');
        window.socket = new WebSocket("ws://192.168.1.134:9000");
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
    
    ext.switch_on_plug = function(s){
        switch (s) {
            case "1":
                xhr.open('GET', "http://192.168.1.188/cgi-bin/relay.cgi?on", true);
                xhr.send();                
                break;
            case "2":
                xhr.open('GET', "http://192.168.1.146/cgi-bin/relay.cgi?on", true);
                xhr.send();
                break;
            case "3":
                xhr.open('GET', "http://192.168.1.141/cgi-bin/relay.cgi?on", true);
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
                xhr.open('GET', "http://192.168.1.170/cgi-bin/relay.cgi?on", true);
                xhr.send();
                break;
            case "8":
                xhr.open('GET', "http://192.168.1.144/cgi-bin/relay.cgi?on", true);
                xhr.send();
                break;
            case "9":
                xhr.open('GET', "http://192.168.1.198/cgi-bin/relay.cgi?on", true);
                xhr.send();
                break;
            case "10":
                xhr.open('GET', "http://192.168.1.152/cgi-bin/relay.cgi?on", true);
                xhr.send();
                break;
            case "11":
                xhr.open('GET', "http://192.168.1.177/cgi-bin/relay.cgi?on", true);
                xhr.send();
                break;
            case "12":
                xhr.open('GET', "http://192.168.1.105/cgi-bin/relay.cgi?on", true);
                xhr.send();
                break;
            case "13":
                xhr.open('GET', "http://192.168.1.199/cgi-bin/relay.cgi?on", true);
                xhr.send();
                break;
            case "14":
                xhr.open('GET', "http://192.168.1.122/cgi-bin/relay.cgi?on", true);
                xhr.send();
                break;
            case "15":
                xhr.open('GET', "http://192.168.1.110/cgi-bin/relay.cgi?on", true);
                xhr.send();
                break;
            case "16":
                xhr.open('GET', "http://192.168.167/cgi-bin/relay.cgi?on", true);
                xhr.send();
                break;     
            case "17":
                xhr.open('GET', "http://192.168.1.152/cgi-bin/relay.cgi?on", true);
                xhr.send();
                break;
            case "18":
                xhr.open('GET', "http://192.168.1.177/cgi-bin/relay.cgi?on", true);
                xhr.send();
                break;
            case "19":
                xhr.open('GET', "http://192.168.1.105/cgi-bin/relay.cgi?on", true);
                xhr.send();
                break;
            case "20":
                xhr.open('GET', "http://192.168.1.199/cgi-bin/relay.cgi?on", true);
                xhr.send();
                break;               
        }            
    };
    
    ext.on = function(){
        if(button_result1 == 1)
            xhr.open('GET', "http://192.168.1.188/cgi-bin/relay.cgi?on", true);
            xhr.send();                
        if(button_result2 == 1)
            xhr.open('GET', "http://192.168.1.146/cgi-bin/relay.cgi?on", true);
            xhr.send();
        if(button_result3 == 1)
            xhr.open('GET', "http://192.168.1.141/cgi-bin/relay.cgi?on", true);
            xhr.send();
        if(button_result4 == 1)
            xhr.open('GET', "http://192.168.1.103/cgi-bin/relay.cgi?on", true);
            xhr.send();
        if(button_result5 == 1)
            xhr.open('GET', "http://192.168.1.183/cgi-bin/relay.cgi?on", true);
            xhr.send();
        if(button_result6 == 1)
            xhr.open('GET', "http://192.168.1.164/cgi-bin/relay.cgi?on", true);
            xhr.send();
        if(button_result7 == 1)
            xhr.open('GET', "http://192.168.1.170/cgi-bin/relay.cgi?on", true);
            xhr.send();
        if(button_result8 == 1)
            xhr.open('GET', "http://192.168.1.144/cgi-bin/relay.cgi?on", true);
            xhr.send();
        if(button_result9 == 1)
            xhr.open('GET', "http://192.168.1.198/cgi-bin/relay.cgi?on", true);
            xhr.send();
        if(button_result10 == 1)
            xhr.open('GET', "http://192.168.1.152/cgi-bin/relay.cgi?on", true);
            xhr.send();
        if(button_result11 == 1)
            xhr.open('GET', "http://192.168.1.177/cgi-bin/relay.cgi?on", true);
            xhr.send();
        if(button_result12 == 1)
            xhr.open('GET', "http://192.168.1.105/cgi-bin/relay.cgi?on", true);
            xhr.send();
        if(button_result13 == 1)
            xhr.open('GET', "http://192.168.1.199/cgi-bin/relay.cgi?on", true);
            xhr.send();
        if(button_result14 == 1)
            xhr.open('GET', "http://192.168.1.122/cgi-bin/relay.cgi?on", true);
            xhr.send();
        if(button_result15 == 1)
            xhr.open('GET', "http://192.168.1.110/cgi-bin/relay.cgi?on", true);
            xhr.send();
        if(button_result16 == 1)
            xhr.open('GET', "http://192.168.167/cgi-bin/relay.cgi?on", true);
            xhr.send();
        if(button_result17 == 1)
            xhr.open('GET', "http://192.168.1.152/cgi-bin/relay.cgi?on", true);
            xhr.send();
        if(button_result18 == 1)
            xhr.open('GET', "http://192.168.1.177/cgi-bin/relay.cgi?on", true);
            xhr.send();
        if(button_result19 == 1)
            xhr.open('GET', "http://192.168.1.105/cgi-bin/relay.cgi?on", true);
            xhr.send();
        if(button_result20 == 1)
            xhr.open('GET', "http://192.168.1.199/cgi-bin/relay.cgi?on", true);
            xhr.send();
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
                xhr.open('GET', "http://192.168.1.141/cgi-bin/relay.cgi?off", true);
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
                xhr.open('GET', "http://192.168.1.170/cgi-bin/relay.cgi?off", true);
                xhr.send();
                break;
            case "8":
                xhr.open('GET', "http://192.168.1.144/cgi-bin/relay.cgi?off", true);
                xhr.send();
                break;
            case "9":
                xhr.open('GET', "http://192.168.1.198/cgi-bin/relay.cgi?off", true);
                xhr.send();
                break;
            case "10":
                xhr.open('GET', "http://192.168.1.152/cgi-bin/relay.cgi?off", true);
                xhr.send();
                break;
            case "11":
                xhr.open('GET', "http://192.168.1.177/cgi-bin/relay.cgi?off", true);
                xhr.send();
                break;
            case "12":
                xhr.open('GET', "http://192.168.1.105/cgi-bin/relay.cgi?off", true);
                xhr.send();
                break;
            case "13":
                xhr.open('GET', "http://192.168.1.199/cgi-bin/relay.cgi?off", true);
                xhr.send();
                break;
            case "14":
                xhr.open('GET', "http://192.168.1.122/cgi-bin/relay.cgi?off", true);
                xhr.send();
                break;
            case "15":
                xhr.open('GET', "http://192.168.1.110/cgi-bin/relay.cgi?off", true);
                xhr.send();
                break;
            case "16":
                xhr.open('GET', "http://192.168.167/cgi-bin/relay.cgi?off", true);
                xhr.send();
                break; 
            case "17":
                xhr.open('GET', "http://192.168.1.152/cgi-bin/relay.cgi?off", true);
                xhr.send();
                break;
            case "18":
                xhr.open('GET', "http://192.168.1.177/cgi-bin/relay.cgi?off", true);
                xhr.send();
                break;
            case "19":
                xhr.open('GET', "http://192.168.1.105/cgi-bin/relay.cgi?off", true);
                xhr.send();
                break;
            case "20":
                xhr.open('GET', "http://192.168.1.199/cgi-bin/relay.cgi?off", true);
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
                xhr.open('GET', "http://192.168.1.141/cgi-bin/relay.cgi?toggle", true);
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
                xhr.open('GET', "http://192.168.1.170/cgi-bin/relay.cgi?toggle", true);
                xhr.send();
                break;
            case "8":
                xhr.open('GET', "http://192.168.1.144/cgi-bin/relay.cgi?toggle", true);
                xhr.send();
                break;
            case "9":
                xhr.open('GET', "http://192.168.1.198/cgi-bin/relay.cgi?toggle", true);
                xhr.send();
                break;
            case "10":
                xhr.open('GET', "http://192.168.1.152/cgi-bin/relay.cgi?toggle", true);
                xhr.send();
                break;
            case "11":
                xhr.open('GET', "http://192.168.1.177/cgi-bin/relay.cgi?toggle", true);
                xhr.send();
                break;
            case "12":
                xhr.open('GET', "http://192.168.1.105/cgi-bin/relay.cgi?toggle", true);
                xhr.send();
                break;
            case "13":
                xhr.open('GET', "http://192.168.1.199/cgi-bin/relay.cgi?toggle", true);
                xhr.send();
                break;
            case "14":
                xhr.open('GET', "http://192.168.1.122/cgi-bin/relay.cgi?toggle", true);
                xhr.send();
                break;
            case "15":
                xhr.open('GET', "http://192.168.1.110/cgi-bin/relay.cgi?toggle", true);
                xhr.send();
                break;
            case "16":
                xhr.open('GET', "http://192.168.167/cgi-bin/relay.cgi?toggle", true);
                xhr.send();
                break;        
            case "17":
                xhr.open('GET', "http://192.168.1.152/cgi-bin/relay.cgi?toggle", true);
                xhr.send();
                break;
            case "18":
                xhr.open('GET', "http://192.168.1.177/cgi-bin/relay.cgi?toggle", true);
                xhr.send();
                break;
            case "19":
                xhr.open('GET', "http://192.168.1.105/cgi-bin/relay.cgi?toggle", true);
                xhr.send();
                break;
            case "20":
                xhr.open('GET', "http://192.168.1.199/cgi-bin/relay.cgi?toggle", true);
                xhr.send();
                break;

        }   
        
    };

    ext._getStatus=function(){
        return{status:2,msg:"Ready"}
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            // Block type, block name, function name
            [' ', 'my first block', 'my_first_block'],
            [' ', 'start sniffer', 'cnct'],
            ['r', 'sniffed', 'send_msg'],
            [' ', 'on', 'on'],
            [' ', 'switch on plug %s', 'switch_on_plug', 's'],
            [' ', 'off', 'off'],
            [' ', 'toggle', 'toggle'],
        ]
    };

    // Register the extension
    ScratchExtensions.register('My first extension', descriptor, ext);
})({});
