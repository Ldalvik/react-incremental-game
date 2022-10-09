export const getItem = (entries) => {
    let count = 0
    const accumulatedWeight = entries.reduce((accumulator, item) => {
        entries[count].accumulatedWeight = accumulator + item.weight;
        count++
        return accumulator + item.weight;
    }, 0)
    const r = Math.random() * accumulatedWeight;
    return entries.find(function (entry) {
        return entry.accumulatedWeight >= r;
    })
}

export const getChance = (entries, itemName) => {
    const accumulatedWeight = entries.reduce((accumulator, item) => {
        return accumulator + item.weight;
    }, 0)
    const weight = entries.find(item => item.name === itemName).weight
    return weight / accumulatedWeight
}