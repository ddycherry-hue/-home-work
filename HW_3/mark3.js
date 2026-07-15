

const bankCards = ["2221_1863_9836_8263", "4829_9937_9038_2536", "2221_8263_9387_9389", "2221_2568_0939_0849", "9229_9268_9737_2937", "2193_0293_9382_7499", "2221_2873_2936_0927"]

let paypalCard = 0

for(const bankCard of bankCards){

    const firstNumBank = bankCard[0] + bankCard[1] + bankCard[2] + bankCard[3]

    if(firstNumBank === "2221"){
        paypalCard++
    }
}

console.log("Paypal cards " + paypalCard + " of " + bankCards.length);

const tins = ["01548290147", "109283746501", "028172635490", "112233445566", "200192837465", "123456789012", "010203040506"]

let womenTin = 0
let menTin = 0
let companyTin = 0

for(let i = 0; i < tins.length; i++){
    const textTins = tins[i][0]


    if(textTins === "1"){
        womenTin++
    } else if(textTins === "2"){
        menTin++
    }else if(textTins === "0"){
        companyTin++
    }
}

console.log("Womens: " + womenTin)
console.log("Mens: " + menTin)
console.log("companys : " + companyTin)


const points100 = [42, 17, 88, 5, 63, 29, 9, 1, 10, 54]

const points5 = []

for(let i = 0; i < points100.length; i++){
    const score = points100[i]

    if(score >= 0 && score <= 20) {
        points5.push(1)
    } else if(score >=21 && score <= 40){
        points5.push(2)
    } else if(score >= 41 && score <= 60){
        points5.push(3)
    } else if(score >= 61 && score <= 80){
        points5.push(4)
    } else if(score >= 81 && score <= 100){
        points5.push(5)
    }

}
console.log("100 points score " + points100);
console.log("5 points score " + points5);



















































