Selenium.prototype.doTypeRandomEmail = function(locator) {
    // All locator-strategies are automatically handled by "findElement"
    var element = this.page().findElement(locator);
    /* The following block generates a random email string */
    var allowedChars = "abcdefghiklmnopqrstuvwxyz";
    var stringLength = 8;
    var randomstring = '';
 
    for (var i=0; i<stringLength; i++) {
        var rnum = Math.floor(Math.random() * allowedChars.length);
        randomstring += allowedChars.substring(rnum,rnum+1);
    }
    // Append a domain name
    randomstring += "@m2iformation.com"
    // Replace the element text with the new text
    this.browserbot.replaceText(element, randomstring);
};

Selenium.prototype.doTypeRandomReference = function(locator) {
    // All locator-strategies are automatically handled by "findElement"
    var element = this.page().findElement(locator);
    /* The following block generates a random email string */
    var allowedChars = "ABCDEFGHIJKLMNOPQRSTUVWYZ";
    var stringLength = 4;
    var randomstring = '';
 
    for (var i=0; i<stringLength; i++) {
        var rnum = Math.floor(Math.random() * allowedChars.length);
        randomstring += allowedChars.substring(rnum,rnum+1);
    }
    // Append a domain name
    randomstring += "-";
	for (var i=0; i<stringLength; i++) {
        var rnum = Math.floor(Math.random() * 9);
        randomstring += rnum;
    }
    // Replace the element text with the new text
    this.browserbot.replaceText(element, randomstring);
};