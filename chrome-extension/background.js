console.log("in background!");

var request = new XMLHttpRequest();
// xj.open("POST", "http://localhost:3000/api/todos/haha/", true);
// xj.setRequestHeader("Content-Type", "application/json");
// xj.send(JSON.stringify({ action: "hello"}));
// xj.onreadystatechange = function () { if (xj.readyState == 4) { console.log(xj.responseText); } }

// chrome.runtime.onMessageExternal.addListener(
//     function(request, sender, sendResponse) {
//     console.log("got message from website:-"+sender.mes);
//     });


chrome.runtime.onConnect.addListener(function (port) {
    console.assert(port.name == "channel");
    port.onMessage.addListener(function (data) {
        console.log( data);
        if (data) {
            // chrome.storage.sync.get(['CurrentUser'], function (items) {
            //     console.log('session retrieved', items);
            //     data = {}
            //     data['sessionId'] = items.CurrentUser+"123";
            //     data['username'] = items.CurrentUser;
            //     data['behaviourInfo'] = message;
            //     console.log(data);
            //
            //     //Send call to api
            //     request.open("POST", "http://localhost:3000/api/Events/createEvent", true);
            //     request.setRequestHeader("Content-Type", "application/json");
            //     request.send(JSON.stringify(data));
            //     request.onreadystatechange = function () {
            //         if (request.readyState == 4) {
            //             // console.log(request.responseText);
            //         }
            //     }
            //
            //
            // });
            // chrome.storage.sync.get(['CurrentUser'],function (result) {
            //     console.log("gotfrom local storage: ",result);
            // })
            // data = {}
            // data['sessionId'] = "qwer";//items.CurrentUser+"123";
            // data['username'] = "qwer123";//items.CurrentUser;
            // data['event'] = message;
            chrome.storage.sync.get('username',function (result) {
                    //console.log("gotfrom local storage: ",result);
                    console.log(result.username);
                    data.data['email'] = result.username;
                    console.log(data.data);
                    request.open("POST", data.url, true);
                    request.setRequestHeader("Content-Type", "application/json");
                    request.send(JSON.stringify(data.data));
                    request.onreadystatechange = function () {
                        if (request.readyState == 4) {
                            // console.log(request.responseText);
                        }
                    }

                })
            console.log("got data from contentscript ",data.data);

            //Send call to api
            

        }

    });
});


chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(sender.tab ?
            "from a content script:" + sender.tab.url :
            "from the extension");
        console.log(request.abc);

    });

chrome.runtime.onConnect.addListener(function(port) {
    console.assert(port.name == "knockknock");
    port.onMessage.addListener(function(msg) {
        if (msg.joke == "Knock knock"){
            console.log("got message from content");
            port.postMessage({question: "Who's there?"});
        }

        else if (msg.answer == "Madame")
            port.postMessage({question: "Madame who?"});
        else if (msg.answer == "Madame... Bovary")
            port.postMessage({question: "I don't get it."});
    });
});