submit.onclick = function() {
	var submit = document.getElementById("submit");
    var name = document.getElementById("name");
    var number = document.getElementById("number");
	var color = document.getElementById("color");
    var place = document.getElementById("place");
	var story = document.getElementById("story");
    
    var sentence = "<p>Welcome, " + name.value + ".";
     document.write(sentence);
     var sentence = "<p>once upon a time there was a boy called " + number.value + " his friends used to make fun of him because of his name...";
    document.write(sentence);
    var sentence = "<p>so one day he thought why is his name a number and not a color so he started introducing himself to people as " + color.value + " and they still made fun of him!!  ";
    document.write(sentence);
    var sentence = "<p>so he gave up and became sad and left everything and went to  " + place.value + "  which is his favorite place and started crying!.. HOW SAD IT IS !! Short story long, do not name your kids after numbers and colors !!! ";
    document.write(sentence);
};