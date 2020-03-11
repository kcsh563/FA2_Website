//used for toggle

function myfunction() {
    var x = document.getElementById("dropDown");
    if (x.className.indexOf("w3-show") == -1) {

        x.className += "w3-show";

    } else { //hide dropdown

        x.className = x.className.replace("w3-show", "");
    }

}