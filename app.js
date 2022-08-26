function getData() {
    var place = document.getElementById("place").value;
    var person = document.getElementById("person").value;
    var verb = document.getElementById("verb").value;
    var adj = document.getElementById("adj").value;
    var adverb = document.getElementById("adverb").value;

    console.log ([place, person, verb, adj, adverb])
    return [place, person, verb, adj, adverb]
}

function sentences(){
    sentenceArray =[`today I had to ${verb} ${adverb}.
But right in the middle of it, ${person} came with this ${adj}
book and wanted to go to ${place} `]
}

