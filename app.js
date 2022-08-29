function getData() {
    var place = document.getElementById("place").value;
    var person = document.getElementById("person").value;
    var verb = document.getElementById("verb").value;
    var adj = document.getElementById("adj").value;
    var adverb = document.getElementById("adverb").value;

    document.getElementById("sentence").innerHTML = sentences
    (verb, adverb, person, place, adj);

    //   0  1  2  3  4
}

function sentences(verb, adverb, person, place, adj){
    sentenceArray =[`today I had to ${verb} ${adverb}.
But right in the middle of it, ${person} came with this ${adj}
book and wanted to go to ${place} book and wanted to go ${place}, ${person} was in
${place} trying to ${verb}. however, ${person} left a
${adj} shirt behind, while crying ${adverb}. it's been a
long time since ${person} decided to ${verb} in ${place}.
what some people said was that ${person} screamed
this stawberry is ${adj}!! we thought ${person} went crazy.`]


ranN = Math.floor(Math.random() * sentenceArray.length) 
/// 0 to 2
return sentenceArray[ranN];
}

