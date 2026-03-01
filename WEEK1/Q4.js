//smallest element in array
let smallest=marks[0]
for(i=1;i<marks.length;i++)
    if(smallest>marks[i])
        smallest=marks[i]
console.log("Smallest element in the marks array=",smallest)