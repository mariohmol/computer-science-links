const tesplit = "01/12/2020";

function splitString(text, split) {
    console.log(`Entering recursion with ${text}`)
    if (!text.length) {
        return []
    }

    const index = text.indexOf(split)
    if (index === -1) {
        console.log(`There is no more ${split} found, return the remainin string`)
        return [text]
    }
    
    const newItem = text.slice(0,index)
    console.log(`Cutting with ${newItem}`)

    const remaing = text.slice(index+1)
    return [ newItem, ...splitString(remaing, split)]
}

const result = splitString(tesplit, '/')
console.log(result)