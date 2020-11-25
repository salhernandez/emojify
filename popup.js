var storage = chrome.storage.local;

//when the extension opens
// "load" is triggered when a page is fully loaded
window.addEventListener('load', function (evt) {
  isFreshInstall();
  changeUI();

  document.getElementById('emojify-button').onclick = doSwitchOnStack
});

function isFreshInstall(){
  //check for key
  //if it doesn't exist
    //create options payload and set it
    //create freshInstall key, and set to false
  //else
    //it exists and its not fresh install
    storage.get("freshInstall", function(items){

      //not a fresh install
      if(items.freshInstall === false){
      }
      else{//fresh install
          chrome.storage.local.set({ "freshInstall": false }, function(){
            let anObject = {
              userOptions: {
                stackOverflow: true
              }
            }

            //set value
            storage.set({'options': anObject}, function() {
            });
          });
      }
    });
  }

  //UI related code
function doSwitchOnStack() {
  let stackButton = document.getElementById('emojify-button');
    //turn off
    if(stackButton.className == "on") {
      stackButton.className="off";
      stackButton.innerHTML = "off";
      updateData("stackOverflow", false);

    } else {//turn on
      stackButton.className="on";
      stackButton.innerHTML = "on";
      updateData("stackOverflow", true);
    }
}

//aruments, what to update, value
//saved using chrome extenion API
function updateData(uType, uValue){
  /*Grab Value. Update the needed header, set the values again
  */
  let tempOptions = {};
  storage.get('options', function(items) {

    //if the object has been created before
    if (items.options) {
      // textarea.value = items.css;
      // alert("Loaded saved options: ");
      //store options object
      tempOptions = items.options;

      //update value
      tempOptions.userOptions[uType] = uValue;

      //set value
      storage.set({'options': tempOptions}, function() {
        // Notify that we saved.
        // alert("Settings saved with updates: "+uType+" to "+uValue);
      });
    }

    //if the object has not been created before
    else{
      let anObject =
      {
        userOptions: {
          stackOverflow: true
        }
      }

      //update the object
      anObject.userOptions[uType] = uValue;

      //set value
      storage.set({'options': anObject}, function() {
      // Notify that we saved.
      // alert("Settings saved");
    });
  }
  });
}

function changeUI(){
  storage.get('options', function(items) {
    if (items.options) {
      let stackButton = document.getElementById('emojify-button');

      if(items.options.userOptions.stackOverflow) {
        stackButton.className="on";
        stackButton.innerHTML="on";

      } else {
        stackButton.className="off";
        stackButton.innerHTML="off";
      }
    }
  });
}

chrome.runtime.onMessage.addListener(function(request, sender) {
  if (request.action == "consoleLog") {
    // console.log("consoleLog", request.source)
  }
  if (request.action == "getSource") {
    // message.innerText = request.source;
    // console.log("getSource", request.source)
  }
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
      if (changeInfo.status == 'complete') {

        storage.get('options', function (items) {


          if (items.options.userOptions.stackOverflow) {
            chrome.tabs.executeScript(tabId, {
              file: "replaceText.js"
            }, function () {
              // If you try and inject into an extensions page or the webstore/NTP you'll get an error
              if (chrome.runtime.lastError) {
                // message.innerText = 'There was an error injecting script : \n' + chrome.runtime.lastError.message;
                console.log('There was an error injecting script : \n' + chrome.runtime.lastError.message)
              }
            });
          }


        });

      }
})