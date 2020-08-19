//s1 2 4 6 8  10 12 14...
var series="";
var n;
for(i=1;i<10;i++){
    n=i*2;
    series=series+n+ " ";//clear bujtesina
}
console.log("series1=",series);


//s2 1 4 7 10 13 16...
series="1 ";
n=1;
for(i=1;i<10;i++){
    n=n+3;//clear bujini
    series=series+n+" ";//clear bujtesina
}
console.log("series2=",series);

//s3 0 3 8 15 24 35 48...
series=" ";

for(i=1;i<10;i++){
    n=i*i-1;
    series=series+n+" ";//clear bujtesina
}
console.log("series3=",series);

//s4 1 4 3 8 5 12 7 16 9 20...
series=" ";

for(i=1;i<10;i++){
    n=i;
    if(n%2==0){
        n=i*2;
    }
    series=series+n+" ";//clear bujtesina
}
console.log("series4=",series);

//s5 0 1 1 2 3 5 8 13....fibonacci series
series="0 1 ";
n=0;
var x=0;
var y=1;
for(i=1;i<10;i++){
    n=x+y;
    x=y;
    y=n;
    series=series+n+" ";//clear bujtesina
}
console.log("series5=",series);

//multiplication series
var series;
for(var i=1;i<10;i++){
    series=i+"=";
    for(var j=1;j<11;j++){
        series+=i*j+" ";
    }
    console.log(series);
}

