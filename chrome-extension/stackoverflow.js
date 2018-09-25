console.log("in content2");
var currentusername;
chrome.storage.sync.get('CurrentUser',function (data) {
     currentusername= data.CurrentUser;
    console.log(currentusername);
});
var request = new XMLHttpRequest();

function pushData(url, data){
    request.open("POST", "http://localhost:3001/events", true);
    request.setRequestHeader("Content-Type", "application/json");
    request.send(JSON.stringify(data));
    request.onreadystatechange = function () {
        if (request.readyState == 4) {
            // console.log(request.responseText);
        }
    }
    console.log(request.status);
}

console.log("in content2 after got message"+currentusername);
let totalScroll = 0;
var port = chrome.runtime.connect({ name: "channel" });
function callback(e) {
    console.log(e);
    var e = window.e || e;
    var target = e.target
    let message = {}
    let data = {}
    let a1 = document.querySelectorAll("a.post-tag.js-gps-track");
    console.log(a1);
    let tags = [];
    if(e.target.className == 'question-hyperlink'){
        

        for(let i = 0; i<a1.length; i++){
            //console.log(a1[i].innerHTML);
            tags.push(a1[i].innerHTML);
        }
    }
    if (e.target.tagName == 'A' || target.tagName == 'BUTTON') {
        
        var Qa1 = target.parentNode.parentNode.getElementsByClassName("post-tag");

        

        // message = e.target;

        console.log(Qa1);
        if(Qa1.length > 0){
            console.log(tags);
            tags = [];
            for(let i = 0; i<Qa1.length; i++){
                //console.log(Qa1[i].innerHTML);
                tags.push(Qa1[i].innerHTML);
            }
        }
        console.log(tags);
       
        //var a = document.getElementsByClassName("question-hyperlink")
        //var b = document.getElementsByClassName("post-tag js-gps-track")
        // console.log(b)
        // console.log(a[0].innerHTML)
        message['type'] = e.type;
        message['tagName'] = target.tagName;
        message['className'] = target.className;
        message['innerHTML'] = target.innerHTML;
        message['relevantTags'] = tags;
        // chrome.storage.sync.get('username',function (result) {
        //     console.log("gotfrom local storage: ",result);
        //     message['email'] = result.username;
        // })
        if(message['className'].includes("star-off")){
                console.log("Create event of bookmark");
                data = {
                    event_name: 'Click',
                    event_relevance: 'Bookmark'

                }
        }
        else if(message['className'].includes("vote-up-off")){
            console.log("Create event of bookmark");
            data = {
                event_name: 'Click',
                event_relevance: 'Vote up'
            }
        }
        else if(message['className'].includes("vote-down-off")){
            console.log("Create event of bookmark");
            data = {
                event_name: 'Click',
                event_relevance: 'Vote down'
            }
        }
        else if(message['className'].includes("question-hyperlink")){
            console.log("Create event of bookmark");
            data = {
                event_name: 'Click',
                event_relevance: 'Question Viewed'
            }
        }
        else if(message['innerHTML'].includes("add a comment")){
            console.log("Create event of bookmark");
            data = {
                event_name: 'Click',
                event_relevance: 'Commented'
            }
        }
        else if(message['innerHTML'].includes("Ask Question")){
            console.log("Create event of bookmark");
            data = {
                event_name: 'Click',
                event_relevance: 'Question Asked'
            }
        }
        else if(message['innerHTML'].includes("Post Your Answer")){
            console.log("Create event of bookmark");
            data = {
                event_name: 'Click',
                event_relevance: 'Answer Posted'
            }
        }
        
        
        // message['pathname'] = target.pathName;
        console.log("the message is ", message)
        console.log("---")
        console.log("stringified message is ",JSON.stringify(message))
        if(data.event_relevance){
            port.postMessage({url:"http://localhost:3001/events", data: data});
        }
        
            if(tags.length > 0){
                data = {
                    tag_name : tags
                }
                port.postMessage({url:"http://localhost:3001/tags", data: data});
            }
        
        
        // port.postMessage(target)
    }
    if (target.tagName == 'BUTTON') {
        console.log(e);
    }
   
}
let isScrolling;
function scrollCallback(e){
    //console.log(e);
    totalScroll++;
    let a1 = document.querySelectorAll("a.post-tag.js-gps-track");
    clearTimeout(this.isScrolling);
    this.isScrolling = setTimeout(function(){
        console.log(e);
        if(!(e.path[0].URL.includes("stackoverflow.com/questions/tagged"))){
            let tags = []
            for(let i = 0; i<a1.length; i++){
                //console.log(a1[i].innerHTML);
                tags.push(a1[i].innerHTML);
            }
            let data = {
                event_name: 'Scroll',
                event_relevance : tags,
                event_count: totalScroll
            }
            console.log(data);
            if(data.event_relevance){
                port.postMessage({url:"http://localhost:3001/events", data: data});
            }


        }
        console.log(totalScroll);
        console.log(a1);
        totalScroll = 0;

    },100);


}

if (document.addEventListener) {
    document.addEventListener('click', callback, false);
}

if (document.addEventListener) {
    document.addEventListener('scroll', scrollCallback, false);
}
