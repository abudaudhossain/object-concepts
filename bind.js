const heroAlom = {
    id: 101,
    name: "Hero Alom",
    money: 8000,
    treatDey: function (expensive){
        this.money = this.money - expensive;
        console.log(this);
        return this.money;
    }
}
const zeroAlom = {
    id: 102,
    name: "Zero Alom",
    money: 4000,
    
}
const hetoSakib = {
    id: 103,
    name: "Hero Sakib",
    money: 12000,
}

// const alomSaveMoney = heroAlom.treatDey(1200);
console.log(heroAlom.treatDey(1200));
console.log(heroAlom.treatDey(800));

const zeroAlomTreat = heroAlom.treatDey.bind(zeroAlom);
console.log(zeroAlomTreat(1200));
console.log(zeroAlomTreat(1200));

const sakibTreat = heroAlom.treatDey.bind(hetoSakib);
console.log(sakibTreat(1600));
console.log(sakibTreat(1200));