let cipher = (str, slide) => {
    if(slide < 0 ) {
        slide += 26
    }
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let out = ''
    for(let i = 0; i < str.length; i++) {
        let letterIndex = alphabet.indexOf(str[i].toLowerCase())
        if(letterIndex === - 1) {
            out += ''
        } else {
            out += alphabet[(letterIndex+slide)%26]

        }
    }
    return out
}

console.log(cipher('i love cryptography',3))
console.log(cipher('l oryh fubswrjurskb',-3))