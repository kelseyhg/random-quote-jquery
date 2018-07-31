


$(document).ready(function() {

	function getRandomInt(max) {
	  return Math.floor(Math.random() * Math.floor(max));
	}

	$("#get-quote").click(function(){
		console.log("clicked");
		var quoteNum = getRandomInt(bibleQuotes.length);
		$("#quote").text(bibleQuotes[quoteNum]);
	});

});


var bibleQuotes = ["His feet were like fine brass, as if they burned in a furnace; and his voice was the sound of many waters.",

"The first beast was like a lion, and the second beast like a calf, and the third beast had a face as a man, and the fourth beast was like a flying eagle.",

"For the great day of his wrath is come; and who shall be able to stand",

"I saw another mighty angel come down from heaven, clothed with a cloud: and a rainbow was upon his head, and his face was as it were the sun, and his feet as pillars of fire.",

"The Beast which I saw was like a leopard, and his feet were as the feet of a bear, and his mouth was the mouth of a lion.",

"One of the four Beasts gave unto the seven angels seven golden vials full of the wrath of God.",

"Every island fled away, and the mountains were not found.",

"He was clothed with a vesture dipped in blood.",

"Ye may eat the flesh of kings, and the flesh of captains, and the flesh of mighty men.",

"Whosoever was not found written in the book of life was cast into the lake of fire.",

"Thy teeth are like a flock of sheep that are even shorn.",

"I have washed my feet; how shall I defile them.",

"Your country is desolate, your cities are burned with fire.",

"Go up, thou bald head; go up, thou bald head!"

];


