try {
  getcookie();
} catch (error) {}
let excluderegex =
  /(login|help|developer|success|appexchange|partners|test).salesforce.com/;
function getcookie() {
  chrome.tabs.query({ currentWindow: true, active: true }, (resp) => {
    let tab = resp[0];
    if (
      (tab.url.includes(".force.com") ||
      tab.url.includes(".salesforce.com") && !tab.url.match(excluderegex))
    )
      chrome.cookies.get({ url: tab.url, name: "sid_Client" }, (resp) => {
        if (resp) {
          chrome.runtime.sendMessage({ cookie: resp }, () => {
            window.close();
          });
        }
      });
  });
}
