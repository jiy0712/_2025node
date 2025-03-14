const letter = ['a', 'b', 'c', 'd']

for(let i = 0; i<letter.length; i++){
    console.log(letter[i])
}

letter.forEach(function(l){
    console.log(l)
})

for(const l of letter){
    console.log(l)
}

//funstion -> =>, 1개이니 {} 제외
letter.forEach(l => console.log(l))