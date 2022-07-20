function condition() {
    var text = "Information is that portion of the content of a signal or message which conveys meaning. Information is not knowledge itself, but rather the representation of it. Information is often layered: The data available at one level are processed into information to be interpreted at the next level. For example, in written text each symbol or letter conveys information relevant to the word it is part of, each word conveys information relevant to the phrase it is part of, each phrase conveys information relevant to the sentence it is part of, and so on until information at the top level is interpreted and becomes knowledge of the pertinent domain. In a digital signal there is a base level of information that conveys bits which may then be interpreted into the symbols, letters, numbers, or structures that convey the information available at the next level up. The key characteristic of information is that it is subject to interpretation and processing.";

    if (document.getElementById('condition').innerHTML == '') {
        alert('You have to click on [OK] the button')
        document.getElementById('condition').innerHTML = text;
    }
    else {
        alert('You have to re-click on [OK] the button')
        document.getElementById('condition').innerHTML = '';
    }
}
