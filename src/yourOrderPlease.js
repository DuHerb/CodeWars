export function order(words){
  var splitted = words.split(' ');
  var sorted = [];
  if(words.length == "") {
    return "";
  } else {
    for(var i = 0; i < splitted.length; i++) {
      sorted.push("");
    }
    for(var j = 0; j < splitted.length; j++) {
      var word = splitted[j].split('');
      for(var c = 0; c < word.length; c++) {
        if(!isNaN(word[c])) {
          sorted[parseInt(word[c] - 1)] = splitted[j];
        }
      }
    }
    return sorted.join(" ");
  }
}