chrome.commands.onCommand.addListener(function (command) {
	switch(command){
		case "last_0":
			goToTab(0);
	}
});

var goToTab = function(index){
	chrome.tabs.query({}, function(result){
		console.log(result);
	});
}