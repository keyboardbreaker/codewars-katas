/*
    https://www.codewars.com/kata/5a58d889880385c2f40000aa/train/javascript
    
    automorphic
    when a number "n" is squared and the end contains n.
    e.g.

    n = 6, n^2 = 36 -> 36 ends with n.
    n = 5 n^2 = 25 -> 25 ends with n.
    n = 25, n^2 = 625 -> 625 ends with n.

    key takeaway:
    you can use endsWith on a string to to match
*/

function automorphic(n){
    let nSquaredString = (Math.pow(n, 2)).toString();
    if(nSquaredString.endsWith(n.toString())) {
      return "Automorphic";
    }
    return "Not!!";
}