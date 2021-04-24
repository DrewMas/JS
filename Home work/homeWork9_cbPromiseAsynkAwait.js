// function wakeUp(time, cb) {
//     setTimeout(() => {
//         time > 8 ? cb(`You're gonna be late`) : cb(null, 'You woke up on time');
//     }, 1000)
// }
//
// function takeShower(isHotWater, cb) {
//     setTimeout(() => {
//         !isHotWater ? cb(`You're gonna be late as you need to heat water`) : cb(null, `You can still make it on time`);
//     }, 1500);
// }
//
// function haveBreakfast (products, cb){
//     setTimeout(()=>{
//         !products ? cb (`You'd need to grab a burger on youy way to work, so you're gonna be late`) : cb (null, 'It was a tasty breakfast');
//     },700)
// }
//
// function timeStartWorking(onTime, cb) {
//     setTimeout(()=> {
//         timeStartWorking > 10 ? cb(`You won't get money for todays day`) : cb(null,`You'll make some money`);
//     }, 2000)
// }
//
// function isJobDone(money, cb) {
//     setTimeout(()=> {
//         isJobDone ? cb (`You won't have money to get dinner`) : cb(null,`Bon appetite`);
//     }, 1000)
// }
//
// wakeUp(7, (err, data) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log(data);
//
//     takeShower(true, (err, data) => {
//         if (err) {
//             console.log(err);
//             return;
//         }
//         console.log(data);
//
//         haveBreakfast(true, (err,data) => {
//             if (err){
//                 console.log(err);
//                 return;
//             }
//             console.log(data);
//
//             timeStartWorking(9.5, (err,data)=> {
//                 if (err){
//                     console.log(err);
//                     return;
//                 }
//                 console.log(data);
//
//                 isJobDone(false, (err, data)=> {
//                     if (err){
//                         console.log(err);
//                         return;
//                     }
//                     console.log(data);
//                 })
//             })
//         })
//     })
// })
//
//
//


function wakeUp(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (time <= 8) {
                resolve('You woke up on time');
            }
            reject(`You're gonna be late`);

        }, 1000)
    })
}

function takeShower(isHotWater) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isHotWater) {
                resolve(`You can still make it on time`)
            }
            reject(`You're gonna be late as you need to heat water`)
        }, 1500);
    })
}


function haveBreakfast(products) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (products) {
                resolve(`It was a tasty breakfast`);
            }
            reject(`You'd need to grab a burger on youy way to work, so you're gonna be late`);
        }, 700)
    })
}

function timeStartWorking(onTime) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (onTime < 10) {
                resolve(`You'll make some money`);
            }
            reject(`You won't get money for todays day`);
        }, 2000)
    })
}

function isJobDone(money) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (money) {
                resolve(`Bon appetite`);
            }
            reject(`You won't have money to get dinner`);
        }, 1000)
    })
}
//
// wakeUp(8)
//     .then(value => {
//         console.log(value);
//         return takeShower(true)
//     })
//     .then(value => {
//         console.log(value);
//         return haveBreakfast(true)
//     })
//     .then(value =>{
//         console.log(value);
//         return timeStartWorking(9.5)
//     })
//     .then(value => {
//         console.log(value);
//         return isJobDone(true)
//     })
//     .then(value => {
//         console.log(value);
//     })
//     .catch(reason => {
//         console.warn(reason);
//     })
//

async function day() {
    try {
        let wake = await wakeUp(8);
        console.log(wake);

        let shower = await takeShower(true);
        console.log(shower);

        let breakfast = await haveBreakfast(true);
        console.log(breakfast);

        let startWork = await timeStartWorking(9.5);
        console.log(startWork);

        let jobDone = await isJobDone(true);
        console.log(jobDone);

    }catch (err) {
        console.warn(err);
    }
}
day();