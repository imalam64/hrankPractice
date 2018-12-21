const string = 'efg';

function encode_string(s) {
    let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    
    let encode = [];

    s = s.replace(/[aeiou]/ig,'')
    
    // get value of encode
    for(let i=0; i < s.length; i++){
            let add = (alphabet.indexOf(s[i])+1) + (alphabet.indexOf(s[i+1])+1)
            if (add < 26){
                encode[i] = alphabet[add]
            } else{
                encode[i] = alphabet[add -26]
        }
    }

    console.log(encode.join(''));

    return encode.join('');
}

encode_string(string)