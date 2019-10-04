module.exports = function multiply(first, second) {
  // your solution


 /*   var lengthFirst = first.length;
    var lengthSecond = second.length;
    var minLength = Math.min(lengthFirst, lengthSecond);
    var bigLength = Math.max(lengthFirst, lengthSecond);
    var smaller = Math.min(first, second).toString();
    var bigger = Math.max(first, second).toString();
    var arrayBigger = [];
    for (var i = 1; i < (bigLength + 1); i++) {
        arrayBigger.push(bigger[i - 1]);
    }
    var arraySmaller = [];
    for (var b = 1; b < (minLength + 1); b++) {
        arraySmaller.push(smaller[b - 1]);
    }
    var arr = arrayBigger;
    var arr2 = arraySmaller;
    var scalar = 0;
    var r = [];
    var p = 0;
    var n = [];
    var c = 0;
    var o = 0;
    var a = 0;
    var x = 0;
    var result = 0;
    var f = 0;
    var res = 0;
    var t = 0;
    var lastResult = '';
    var sum = [];
    var ch = [];
    for (var e = 1; e < arr2.length + 1; e++) {
        n = [];
        r = [];
        p = [];
        var kk = 0;
        scalar = arr2[arr2.length - e];
        for (var l = 0; l <= arr.length - 1; l++) {
            r.push(arr[l] * scalar);
        }


        o = 0;

        for (var j = 1; j <= (r.length); j++) {
            p = r[r.length - j];
            c = Math.floor(p / 10);
            n.unshift(p - c * 10 + o);
            o = c * 10 / 10;

        }
        if (o > 0) {
            n.unshift(o)
        }
        ch1 = n


        if (e != 1) {
            for (y = 1; y <= e - 1; y++) {
                ch1.push(0)
            }

        }

        q = ch1.length;




        var s = JSON.stringify(sum);
        s = JSON.parse(s);
        s.unshift(0)
        sum=[]




        for(m=0;m<q;m++){
            sum.push(ch1[m]);
        }

        var smLength = Math.min(s.length, sum.length);
        var bsLength = Math.max(s.length, sum.length);

        if (smLength!=bsLength){
            for (y=1;y<=(bsLength-smLength); y++){
                s.unshift(0)
            }
        }

        for(z=0;z<bsLength;z++){
            sum[z]=sum[z]+s[z];
        }
        var sum1=[]
        o=0;
        for (var w = 1; w <= (sum.length); w++) {
            p = sum[sum.length - w];
            c = Math.floor(p / 10);
            sum1.unshift(p - c * 10 + o);
            o = c * 10 / 10;
        }


    }
    var sumLast='';
    for(s=0;s<sum1.length;s++){
        sumLast=sumLast+sum1[s];
    }
*/

    var sumLast=(BigInt(first)*BigInt(second)).toString();

    return(sumLast)
}
