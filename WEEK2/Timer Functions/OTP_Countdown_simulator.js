/*
2.OTP Countdown Simulator (Console App)
------------------------------------
        
        Simulate OTP sending flow in Node.js:
        
        Show “OTP Sent Successfully”
        
        Start 10-second countdown
        
        Allow resend only after countdown ends
*/

console.log("OTP Sent Successfully")
let second=5;
let countdown=setInterval(() => {
    second--;
    console.log(second)
    if(second==0){
        console.log("Resend OTP")
        clearInterval(countdown)
    }
},1000)



