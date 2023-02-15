let count = 0;
let orgObj = {};
let requiredSidClient = null;
let host = null;

try {
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message == "PROVIDE-DATA") {
      sendResponse(orgObj);
    } else if (message.cookie) {
      requiredSidClient = message.cookie.value;
      chrome.cookies.getAll(
        {
          domain: "salesforce.com",
          name: "sid_Client",
        },
        (resp) => createorgObj(resp)
      );
      sendResponse("close window");
    }
  });
  
} catch (error) {}

function createorgObj(valueSID) {
  for (var idx = 0; idx < valueSID.length; idx++) {
    if (requiredSidClient && requiredSidClient == valueSID[idx].value) {
      orgObj.host = valueSID[idx].domain;
      const url1 = "https://" + valueSID[idx].domain;
      var replacementNodeName = valueSID[idx].domain.substring(
        0,
        valueSID[idx].domain.indexOf(".salesforce.com")
      ); 
      orgObj.instanceUrl = url1;
      orgObj.salesforcePodName = replacementNodeName;
      var currentURL = "https://" + valueSID[idx].domain;
      chrome.cookies.get(
        {
          url: "https://" + valueSID[idx].domain,
          name: "sid",
        },
        (cookie) => {
          if (cookie.value) {
            orgObj.userSessionToken = cookie.value;
            orgObj.orgId = cookie.value.substr(0, cookie.value.indexOf("!"));
            fetch(url1 + "/services/data/v41.0/", {
              headers: new Headers({
                "Api-User-Agent": "Example/1.0",
                Authorization: "Bearer " + cookie.value, //`Bearer ${cookie.value}`
                Accept: "application/json",
                "Content-Type": "application/json",
              }),
            })
              .then((response) => response.json())
              .then((data) => {
                if (!data.identity) return null; // show message on popup : Please reload the page before opening salesforce suit
                var identity = data.identity;
                var logUserId = "005" + identity.split("/005")[1];
                orgObj.LogUserId = logUserId;
                console.log("orgObject", orgObj);
                chrome.tabs.create({ url: "index.html" });
              });
          }
        }
      );
    }
  }
}
