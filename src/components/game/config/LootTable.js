export const getItem = () => {
    let entries = [
        {
            name: "Carp",
            weight: 100,
            price: 2,
            accumulatedWeight: null
        },
        {
            name: "Cod",
            weight: 100,
            price: 2,
            accumulatedWeight: null
        },
        {
            name: "Sunfish",
            weight: 90,
            price: 4,
            accumulatedWeight: null
        },
        {
            name: "Trout",
            weight: 75,
            price: 6,
            accumulatedWeight: null
        },
        {
            name: "Smallmouth Bass",
            weight: 75,
            price: 6,
            accumulatedWeight: null
        },
        {
            name: "Largemouth Bass",
            weight: 40,
            price: 7,
            accumulatedWeight: null
        },
        {
            name: "Catfish",
            weight: 30,
            price: 9,
            accumulatedWeight: null
        },
    ]
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