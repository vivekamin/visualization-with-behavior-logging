console.log("in content home");

//console.log(document.querySelector(".ui.label").innerText);

//chrome.storage.sync.set({'username':document.querySelector(".ui.label").innerText});
//let el = document.querySelector("i.power.icon");

function callback(e){
    console.log(e);
    if (e.target.tagName == 'A' || e.target.tagName == 'BUTTON'){
        console.log(e.target.innerText);
        if(e.target.innerText.includes("Login")){
            console.log("Logging In");
            setTimeout(function(){
                let elem = document.querySelector(".ui.label");
                if(elem){
                    console.log(elem.innerText);
                    chrome.storage.sync.set({'username':elem.innerText}, function() {
                        console.log('Value is set to ' + elem.innerText)
                    });
                }
                
            },1000);
        }

        if(e.target.innerText.includes("SignOut")){
            console.log("Logging out");
            chrome.storage.sync.set({'username':''}, function() {
                console.log('Value is set to ' + '')
            });
           
            // setTimeout(function(){
            //     let elem = document.querySelector(".ui.label");
            //     if(elem){
            //         console.log(elem.innerText);
            //         chrome.storage.sync.set({'username':elem.innerText});
            //     }
                
            // },2000);
        }
    }
    // if(e.target.innerText.includes("SignOut")){
    //     console.log("logout")
    // }
    // if(e.target.innerText.includes("SignOut")){

    // }

       
    // else{
    //     chrome.storage.sync.set({'username':document.querySelector(".ui.label").innerText});
    // }
    // chrome.storage.sync.get('username',function (result) {
    //     console.log(result.username);
    // });

}

if (document.addEventListener) {
    document.addEventListener('click', callback, false);
}
