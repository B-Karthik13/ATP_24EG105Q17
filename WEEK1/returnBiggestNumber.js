//write a function that receives 3 numbers args and return the big number
let func= function(x,y,z)
{
if(x>y&&x>z)
   return x
if(y>x&&y>z)
    return y
if(z>x&&z>y)
    return z
}
let biggest=func(10,20,15)
console.log("The biggest number=",biggest)