
let example = ["Hello", "there", "students", "of", "SEDC", "!"];
let m = "";
function sentanceMaker() {
    for (i = 0; i < example.length; i++) {

        if (example[i] == ("!" || "." || "," || "?") ){
            m = m + example[i] + " ";
            
        }
        else{
            m = m + " " + example[i];
        }
      
    }
}

sentanceMaker();

console.log(m);



let sentance = ["Is", "this", "really", "working", "?", "Honestly", "idk", ",", "why", "does", "it", "only", "work", "when", "I", "added", "the", "&&", "symbol", "instead", "of", "the", "||", "symbol", "!", "?"]
let n = "";
function sentanceMaker2() {
   
    for (i = 0; i < sentance.length; i++) {

        if (sentance[i].includes("!"||"."||","||"?") ){
            n = n + sentance[i];
        }
        else{
            n = n + " " + sentance[i];
        }
      
    }
}

sentanceMaker2();


console.log(n);


//Probav da go napravam da moze da funkcionira so "." "," "?" "!" ali ne znam zoshto ne mi raboti

//nekoi znaci gi odvojuva nekoi ne. More or less raboti as requested.