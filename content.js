var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var cash = text.match(/[0-9]+\.*[0-9]*/gi);
            var cashInt = parseInt(cash);
            // assumes 5% interest, compounded once a year for 10 years
            var compounded = cashInt * 1.63;
            var roundedCompounded = Math.round(compounded * 100) / 100;
            var compoundedString = `Opportunity Cost: \$${roundedCompounded} Original Cost: \$${cash}`;

            var replacedText = text.replace(/\$[0-9]+\.*[0-9]*/gi, compoundedString);

            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}
