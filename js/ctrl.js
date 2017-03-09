chrome.commands.onCommand.addListener(function (command) {
	switch(command){
		case "last_0":
			goToTab(0);
			break;
		case "last_1":
			goToTab(1);
			break;
		case "last_2":
			goToTab(2);
			break;
		case "last_3":
			goToTab(3);
			break;
	}
});

var goToTab = function(index){
	chrome.tabs.query({}, function(result){
		chrome.tabs.update(result[result.length - 1 - index].id, {"active" : true})
	});
}