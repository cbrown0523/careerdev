
function translatePigLatin(str) {
    if(str.match(/^[aeiou]/))
     return str +' way';
     const con1 = str.match(/^[^aeiou]+/)[0];
     return str.substring(con1.length) + con1 + "ay";
  }
  
  translatePigLatin("consonant");
  