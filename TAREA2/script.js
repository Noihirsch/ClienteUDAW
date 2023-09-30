function multiplySeven() {
    for (let i = 1; i <= 10; i++) {
        document.write('7*' + i + '= \n');
        var a = 7*i;
        document.write(a);
        document.write('<br>');
    }
    document.getElementById("apartado1").innerHTML = a;
}

function sumEight(){
     var i = 0; // Set the number of iterations
     var x = 0;
    while (i < 10) {
        document.write('8 +' + x + '= \n');
        x += 8;
        i++;
        document.write(x);
        document.write('<br>')
    }
}


function divideByNine(){
    var i = 0; 
    var y = 9;
    var x = 9;
   while (i < 10) {
       document.write(y + '/9 = \n');
        x = y/9;
       i++;
       y=y+9;
       document.write(x);
       document.write('<br>')
   }
}

function operateInBits(){
    let a = 125>>3;
    let b= 40<<22;
    let c = 25>>1;
    let d= 10<<4;

    document.write('10 x 8 =' + a);document.write('<br>')
    document.write('40 * 4 =' + b);document.write('<br>')
    document.write('25/2 =' + c);document.write('<br>')
    document.write('10*16=' + d);document.write('<br>')


}