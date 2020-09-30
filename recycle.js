// https://www.codewars.com/kata/5b6db1acb118141f6b000060
// Filter objects into the following bins: paper, glass, organic, plastic

let items = [
    { type: 'rotten apples', material: 'organic' },
    { type: 'out of date yogurt', material: 'organic', secondMaterial: 'plastic' },
    { type: 'wine bottle', material: 'glass', secondMaterial: 'paper' },
    { type: 'amazon box', material: 'paper' },
    { type: 'beer bottle', material: 'glass', secondMaterial: 'paper' }
];

function recycle(array) {
    let bins = []
    let paper = array.filter(item => item.material === 'paper' || item.secondMaterial === 'paper' ).map(item=>item.type)
    let glass = array.filter(item => item.material === 'glass' || item.secondMaterial === 'glass' ).map(item=>item.type)
    let organic = array.filter(item => item.material === 'organic' || item.secondMaterial === 'organic' ).map(item=>item.type)
    let plastic = array.filter(item => item.material === 'plastic' || item.secondMaterial === 'plastic' ).map(item=>item.type)
    bins.push(paper,glass, organic, plastic)
    return bins
}

console.log(recycle(items))