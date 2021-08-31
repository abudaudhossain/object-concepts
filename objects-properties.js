const myFreind = {
    id: 101,
    name: 'korimun',
    sub: "math",
    fatherName: 'khaimun',
    matherName: "karimuni",
    freind: ['varimun', 'darimun', 'sarimun'],
    blance: 5000,
    trytdea: function(bill, bunaces ){
        this.blance = this.blance - bill - bunaces;
        return this.blance;
    }
}

const myBlance = myFreind.trytdea(900, 100);
const myBlance2 = myFreind.trytdea(670, 60);
console.log(myBlance2);

const objKeys = Object.keys(myFreind);
const objValues = Object.values(myFreind);
// console.log(objValues);
const objPair = Object.entries(myFreind);
// console.log(objPair[5][1][0]);

// Object.seal(myFreind);
Object.freeze(myFreind);
myFreind.name = 'vaitun';
delete myFreind.freind;
// console.log(myFreind);

// console.log(myFreind);

for(const prop in myFreind){
//    console.log(prop, ": ",myFreind[prop])
}
// console.log(name);
for(const prop of Object.keys(myFreind)){
    // console.log(prop, ": ",myFreind[prop])
}

for(const [prop, value] of Object.entries(myFreind)){
    console.log(prop, ': ', value);
}