function ch(){
    var a = document.getElementById('a').value
    var dub = a

    if ( a == dub.toUpperCase()){
        document.getElementById('aa').innerHTML = 'The String has uppercase letter'
    }else
    if( a == dub.toLowerCase()){
        document.getElementById('aa').innerHTML = 'The String has lowercase letter'
    }else{
        document.getElementById('aa').innerHTML = 'It is not a Alphabets'
    }
}
   
function a(){
    var a = document.getElementById('1').value
    var a1 = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    var a2 = a1.filter(day)
    document.getElementById('1.').innerHTML = a2
    if(a >= 7){
        alert('This is not a week day')
    }
    function day(value, index){
        return index == a
    }
}
function b(){
    var a = document.getElementById('2').value
    var a1 = ['Jaunary','February','March','April','May','June','july','August','September','October','November','December']
    var a2 = a1.filter(day)
    document.getElementById('2.').innerHTML = a2
    if(a >= 12){
        alert('This is not a Mouth')
    }
    function day(value, index){
        return index == a
    }
}
function c(){
    var a = document.getElementById('3').value
    var a5k = 0
    var a1k = 0
    var a500 = 0
    var a100 = 0
    var a50 = 0
    var a10 = 0
    var a5 = 0
    var a2 = 0
    var a1 = 0
    if(a >= 5000){
        a5k = a / 5000
        a -= a5k*5000
        var b = a % 5000
        if( b >= 1000){
            a1k = b / 1000
            b -= a1k*1000
            var c = b % 1000
            if( c >= 500){
                a500 = c / 500
                c -= a500*500
                var d = c % 500
                if( d >= 100){
                    a100 = d / 100
                    d -= a100*100
                    var e = d % 100
                    if( e >= 50){
                        a50 = e /50
                        e -= a50*50
                        var f = e % 50
                        if ( f >= 10){
                            a10 = f / 10
                            f -= a10*10
                            var g = f % 10
                            if( g >= 5){
                                a5 = g / 5
                                g -= a5*5
                                var h = g % 5
                                if( h >= 2){
                                    a2 = h/2
                                    h -= a2*2
                                    var i = h % 2
                                    if(i > 0 ){
                                        a1 = i
                                    }
                                }

                            }
                        }
                    }
                }
            }
        }
    }
    if( a >= 1000){
        a1k = a / 1000
        a -= a1k*1000
    }
    if( a >= 500){
        a500 = a / 500
        a -= a500*500
    }
    if( a >= 100){
        a100 = a / 100
        a -= a100*100
    }
    if( a >= 50){
        a50 = a /50
        a -= a50*50
    }
    if ( a>= 10){
        a10 = a / 10
        a -= a10*10
    }
    if( a>=5){
        a5 = a / 5
        a -= a5*5
    }
    if(a>=2){
        a2 = a/2
        a -= a2*2
    }
    if(a>=0){
        a1 = a
    }
    var aa = a5k + a1k + a500 + a100 + a50  + a10
    document.getElementById('3.').innerHTML =`Total Number of Notes = ${aa} , Notes of 5000 = ${a5k}, Notess of 1000 = ${a1k} , Notes of 500 = ${a500} ,Notes of 100 = ${a100} , Notes of 50 = ${a50} ,Notes of 10 = ${a10}, Coins of 5 = ${a5} , Coins of 2 = ${a2},Coins of 1 = ${a1}`


}
function d() {
    var a = parseInt(document.getElementById('4').value)
    var b = parseInt(document.getElementById('4.').value)
    var c = parseInt(document.getElementById('4..').value)
    if( a + b + c == 180 ){
        document.getElementById('4...').innerHTML = 'This is a Triangle'
    }else{
        document.getElementById('4...').innerHTML = 'This is not a Triangle'
    }

}
function e(){
    var a = parseInt(document.getElementById('5').value)
    var b = parseInt(document.getElementById('5.').value)
    var c = parseInt(document.getElementById('5..').value)
    if(a + b > c && a + c > b && b + c > a){
        document.getElementById('5...').innerHTML = 'This is a Triangle'
    }else{
        document.getElementById('5...').innerHTML = 'This is not a Triangle'
    }
}
function f(){
    var a = parseInt(document.getElementById('6').value)
    var b = parseInt(document.getElementById('6.').value)
    var c = parseInt(document.getElementById('6..').value)
    if( a == b == c){
        document.getElementById('6...').innerHTML ='This is a equilateral triangle'
    }else
    if( a==b || b == c || c == a){
        document.getElementById('6...').innerHTML ='This is a isoscale triangle' 
    }else{
        document.getElementById('6...').innerHTML ='This is a scalene triangle'  
    }
}
function g(){
    var a = parseInt(document.getElementById('7').value)
    var b = parseInt(document.getElementById('7.').value)
    var c = parseInt(document.getElementById('7..').value)
    let discriminant = b * b - 4 * a * c;
    if (discriminant > 0){
        root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        document.getElementById('7...').innerHTML = `The roots of quadratic equation are ${root1} and ${root2}`
    }
    else
    if(discriminant == 0){
        root1 = root2 = -b / (2 * a);
        document.getElementById('7...').innerHTML = `The roots of quadratic equation are ${root1} and ${root2}`
    }
}
function h(){
    var a = parseInt(document.getElementById('8').value)
    var b = parseInt(document.getElementById('8.').value)
    if( b > a){
        document.getElementById('8..').innerHTML ='Congratulations...!You earn Profit'
    }else{
        document.getElementById('8..').innerHTML ='Sorry ..! Your in Loss'
    }
}
function i(){
    var a = document.getElementById('9').value
    var b = document.getElementById('9.').value
    var c = a.indexOf(b)
    document.getElementById('9..').innerHTML = `The Occurence of ${b} at the index of ${c}`
}
function j(){
    var a = document.getElementById('10').value
    var b = document.getElementById('10.').value
    var c = 0
    for( let i = 0 ; i < a.length ; i++ ){
        if(a[i]==b){
            c++
        }
    }
    document.getElementById('10..').innerHTML =`The ${b} in string are are ${c} times`
}
function k(){
    var a = document.getElementById('11').value
    var mf = 1;
    var m = 0;
    var item;
    for (var i=0; i<a.length; i++)
    {
        for (var j=i; j<a.length; j++)
        {
                if (a[i] == a[j])
                 m++;
                if (mf<m)
                {
                  mf=m; 
                  item = a[i];
                }
        }
        m=0;
    }
 document.getElementById('11.').innerHTML = `${item} has highest frequency character`
 
}
function l(){
    var a = document.getElementById('12').value
    var mf = 1;
    var m = 0;
    var item;
    for (var i=0; i<a.length; i++)
    {
        for (var j=i; j<a.length; j++)
        {
                if (a[i] == a[j])
                 m++;
                if (mf>=m)
                {
                  mf=m; 
                  item = a[i];
                }
        }
        m=0;
    }
 document.getElementById('12.').innerHTML = `${item} has Lowest frequency character`
 
}
function m(){
    var a = document.getElementById('13').value
    var count = 0
    for(var i=0; i<a.length; i++) {
        if(a[i] == a) {
          count++;
              }
        }
    document.getElementById('13.').innerHTML = count    
}

function n(){
    var a = document.getElementById('14').value
    var b = document.getElementById('14.').value
    for( let i = 0 ; i < a.length ; i++){
        if(a[i] == b){
            var b = a.replace(a[i] ,'')
            
        }

    }
    document.getElementById('14..').innerHTML = `New String is ${b}`
}
function o(){
    var a = document.getElementById('15').value
    var b = document.getElementById('15.').value
    var c = a.split('')
    var d = c.reverse()
    var e = d.join('')
    for( let i = 0; i < e.length;i++ ){
        if(e[i]==b){
            var f = e.replace(e[i],'')
        }
    }
    var g = f.split('')
    var h = g.reverse()
    var i = h.join('')
    document.getElementById('15..').innerHTML = `New String is ${i}`
}
function p(){
    var a = document.getElementById('16').value
    var b = document.getElementById('16.').value
    for( let i = 0 ; i < a.length; i++){
        if( a[i]==b ){
            
            var c = a.replace( /a[i]/g ,'')
        }
    }
    document.getElementById('16..').innerHTML =`New String is ${c}`
}
function q(){
    var a = document.getElementById('17').value
    var b = a.split('')
    var c = b.filter(function(item, pos, self) {
        return self. indexOf(item) == pos;
        })
    var d = c.join('')    
    document.getElementById('17.').innerHTML =`New string is ${d}`    
}
function r(){
    var a = document.getElementById('18').value
    var b = document.getElementById('18.').value
    var c = document.getElementById('18..').value
    for( let i = 0;i < a.length ; i++){
        if(a[i]==b){
            var d = a.replace( b , c )
        }
    }
    document.getElementById('18...').innerHTML = `New String is ${d}`
}
function s(){
    var a = document.getElementById('19').value
    var b = document.getElementById('19.').value
    var o = document.getElementById('19..').value
    var c = a.split('')
    var d = c.reverse()
    var e = d.join('')
    for( let i = 0; i < e.length;i++ ){
        if(e[i]==b){
            var f = e.replace( b, o)
        }
    }
    var g = f.split('')
    var h = g.reverse()
    var i = h.join('')
    document.getElementById('19...').innerHTML = `New String is ${i}`
}
function t(){
    var a = document.getElementById('20').value
    var b = document.getElementById('20.').value
    var c = document.getElementById('20..').value
    for( let i = 0;i < a.length ; i++){
        if(a[i]==b){
            var d = a.replace( / b /g , c )
        }
    }
    document.getElementById('20...').innerHTML = `New String is ${d}`
}
function u(){
    var a = document.getElementById('21').value
    var b = document.getElementById('21.').value
    var c = a.split(' ')
    var d =c.indexOf(b)
    
    document.getElementById('21..').innerHTML = `Word at ${d} position`
}
function v(){
    var a = document.getElementById('22').value
    var b = document.getElementById('22.').value
    var c = a.split(' ')
    var d =c.lastIndexOf(b)
    
    document.getElementById('22..').innerHTML = `Word at ${d} position`
}
function x(){
    var a = document.getElementById('24').value
    var b = document.getElementById('24.').value 
    var c = a.split(' ')
    var d = c.indexOf(b)
    
    document.getElementById('24..').innerHTML = `The Occerence of word at ${d} index in string`
}
function w(){
    var a = document.getElementById('23').value
    var b = document.getElementById('23.').value 
    var c = a.split(' ')
    var d = 0
    for( let i = 0 ; i < c.length;i++){
        if(c[i] == b){
            d++
        }
    }
    document.getElementById('23..').innerHTML = `The Occerence of word are ${d} times in string`
}
function y(){
    var a = document.getElementById('25').value
    var b = document.getElementById('25.').value 
    var c = a.split(' ')
    var d = c.indexOf(b)
    c.splice(d,1)
    var e =c.join(" ") 
    document.getElementById('25..').innerHTML = `New String is ${e}`
}
function z(){
    var a = document.getElementById('26').value
    var b = document.getElementById('26.').value 
    var c = a.split(' ')
    var d = c.lastIndexOf(b)
    c.splice(d,1)
    var e =c.join(" ") 
    document.getElementById('26..').innerHTML = `New String is ${e}`
}
function aa(){
    var a = document.getElementById('27').value
    var b = document.getElementById('27.').value 
    var c = a.split(' ')
    for( let i = 0 ; i < c.length ;i++){
        var d = c.indexOf(b)
        c.splice(d,1)
    }
    var e =c.join(" ") 
    document.getElementById('27..').innerHTML = `New String is ${e}`

}
function bb(){
    var a = document.getElementById('28').value
    var b = a.trimStart()
    document.getElementById('28.').innerHTML = `New String is ${b}`
}
function cc(){
    var a = document.getElementById('29').value
    var b = a.trimEnd()
    document.getElementById('29.').innerHTML = `New String is ${b}`
}
function dd(){
    var a = document.getElementById('30').value
    var b = a.trim()
    document.getElementById('30.').innerHTML = `New String is ${b}`
}
function ff(){
    var a = document.getElementById('31').value
    var b = a.replace(/\s+/g,'')
    document.getElementById('31.').innerHTML = `New String is ${b}` 
}
function ee(){
    var a = document.getElementById('32').value
    var b = a.split(" ")
    var c = b.reduce((m,n)=>({...m, [n]:-~m[n]}),{})
    document.getElementById('32.').innerHTML = `See Result in Console`
    console.log(c)
}
function ff(){
    var a = document.getElementById('33').value
    var b = a.split(' ')
    let c = [...new Set(b)]
    document.getElementById('33.').innerHTML = `The unique element are: ${c}`
}
function gg(){
    var a = document.getElementById('34').value
    var b = a.split(" ")
    var c = b.reduce((m,n)=>({...m, [n]:-~m[n]}),{})
    document.getElementById('34.').innerHTML = `See Result in Console`
    console.log(c)
}
function hh(){
    var a = document.getElementById('35').value
    var b = a.split(" ")
    var b = a.split(' ')
    let c = [...new Set(b)]
    document.getElementById('35.').innerHTML = `[${c}]`
}
function ii(){
    var a = document.getElementById('36').value
    var b = a.split(' ')
    var c = document.getElementById('36.').value
    var d = c.split(' ')
    var e = b.concat(d)
    document.getElementById('36..').innerHTML = `[${e}]`
}
function jj(){
    var a = document.getElementById('37').value
    var b = a.split(' ')
    var c = b.reverse()
    document.getElementById('37.').innerHTML = `[${c}]`
}
function kk(){
    var a = document.getElementById('38').value
    var b = a.split(' ')
    var c = []
    var d = []
    for(let i = 0; i < b.length ; i++){
        if(b[i] %2 === 0){
            c.push(b[i])
        }else{
            d.push(b[i])
        }
    }
    document.getElementById('38.').innerHTML = `The even elements are [${c}]`
    document.getElementById('38..').innerHTML = `The odd elements are [${d}]`
}
function ll(){
    var a = document.getElementById('39').value
    var b = a.split(' ')
    var c = document.getElementById('39.').value
    var d = b.reduce(function(acc, curr, index) {
        if (curr == c) {
          acc.push(index);
        }
        return acc;
      }, []);
      document.getElementById('39..').innerHTML = `The element ${c} found at ${d} indexes`
}
function asc(){
    var a = document.getElementById('40').value
    var b = a.split(' ')
    var c = b.sort(function(a, b){return a-b})
    document.getElementById('40.').innerHTML = `[${c}]`
}
function des(){
    var a = document.getElementById('40').value
    var b = a.split(' ')
    var c = b.sort(function(a, b){return b-a})
    document.getElementById('40.').innerHTML = `[${c}]`
}
function sort(){
    var a = document.getElementById('41').value
    var b = a.split(' ')
    var c = []
    var d = []
    for(let i = 0; i < b.length ; i++){
        if(b[i] %2 === 0){
            c.push(b[i])
        }else{
            d.push(b[i])
        }
    }
    var e = c.sort()
    var f = d.sort()
    document.getElementById('41.').innerHTML = `The sort even elements are [${e}]`
    document.getElementById('41..').innerHTML = `The sort odd elements are [${f}]`
}
function left(){
    var a = document.getElementById('42').value
    var b = a.split(' ')
    function rotate( array , times ){
        array = array.slice();
        while( times-- ){
          var temp = array.shift();
          array.push( temp )
        }
        return array;
      }
    var c = rotate( b , 1)
    document.getElementById('42.').innerHTML = `[${c}]`

}
function right(){
    var a = document.getElementById('43').value
    var b = a.split(' ')
    function rotate( array , times ){
        array = array.slice();
        while( times-- ){
          var temp = array.shift();
          array.push( temp )
        }
        return array;
      }
    var c = rotate( b , 3)
    document.getElementById('43.').innerHTML = `[${c}]`
}
function natu(){
    var a = parseInt(document.getElementById('44').value)
    var b = 0
    for( let i = 1; i <= a;i++){
      b += i
    }
    document.getElementById('44.').innerHTML = `The sum of all Natural Number from 1 to ${a} is : ${b}`
}
function even(){
    var a = parseInt(document.getElementById('45').value)
    var b = []
    for(let i = 1;i<=a;i++){
        if(i%2==0){
             b.push(i)
        }
    }
    var d = b.reduce(function(a, b){
        return a + b;
    }, 0)
    document.getElementById('45.').innerHTML =`The sum of all even number from 1 to ${a} is : ${d}`
}
function odd(){
    var a = parseInt(document.getElementById('46').value)
    var b = []
    for(let i = 1;i<=a;i++){
        if(i%2!=0){
             b.push(i)
        }
    }
    var d = b.reduce(function(a, b){
        return a + b;
    }, 0)
    document.getElementById('46.').innerHTML =`The sum of all odd number from 1 to ${a} is : ${d}`
}
function table(){
    var a = parseInt(document.getElementById('47').value) 
    for( let i = 1;i<=10;i++){
        var c = a * i
        document.getElementById('47.').innerHTML = `See table in Console`
        console.log(`${a} * ${i} = ${c}`)
    }
}
function coun(){
    var a = document.getElementById('48').value
    var b = a.length
    document.getElementById('48.').innerHTML = `The digit in ${a} are ${b}`
}
function fi(){
    var a = document.getElementById('49').value
    var b = a[0]
    var c = a[a.length-1]
    document.getElementById('49.').innerHTML = `The first is: ${b} ,and the last digit is: ${c}`
}
function fin(){
    var a = document.getElementById('50').value
    var b = a[0]
    var c = a[a.length-1]
    var d = parseInt(b)
    var e = parseInt(c)
    var f = d + e
    document.getElementById('50.').innerHTML =`The sum of first and last digits is : ${f}`
}
function swap(){
    var a = document.getElementById('51').value
    var b = a[0]
    var c = a[a.length-1]
    var d = a.replace(b,c)
    var e = a.replace(c,b)
    var f = d.slice(0,d.length-1)
    var i = e.slice(e.length-1,e.length)
    var j = f.concat(i)
    document.getElementById('51.').innerHTML = `New number is : ${j}`
}
function cal(){
    var value = document.getElementById('52').value
    sum = 0;

    while (value) {
        sum += value % 10;
        value = Math.floor(value / 10);
    }
    document.getElementById('52.').innerHTML = `The Sum of digits is : ${sum}`
}
function pro(){
    var value = document.getElementById('53').value,
    product = 1

    while (value) {
        product *= value % 10;
        value = Math.floor(value / 10);
    }
    document.getElementById('53.').innerHTML = `The product of digits is : ${product}`
}