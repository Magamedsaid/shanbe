// function system (a,...b){
//     b.forEach(function (e,i,c){
//          e.forEach (function (u){
//             a.concat(u)
//          })
//     })
//     return a
// }
// console.log(system([1,2,3],[4,5,6],[1,2,3,4]));
// task 2
// function system (a,b){
//     return a.indexOf(b)
// }
// console.log(system([1,2,3],2));
// task 3
// function system (a){
//     return a.filter(function (e,i) {
//     return    e==e[i+1]
//     })
    
// }
// console.log(system([1,1,2,4]));
// task4
// function system (a){
//     return a.filter(function (e,i) {
//     return    e>0
//     })
    
// }
// console.log(system([1,1,2,-4]));
// task 5
// function system (a){
//    cnt=0
//    s=0
//    a.forEach(function (e){
//     s+=e
//     cnt++
//    })
//     return s/cnt
// }
// console.log(system([1,3,2,4,5]));
// task 6
// function system (a){
//    s=''
//    f=''
//    s+=a
// f+=a.reverse()
//    return f==s

// }
// console.log(system([1,2,3,2,1]));
// task 7
// function system (a,b,c){
//     let v =[]
//   c.forEach(function(e){
//     if(e>a&&e<b){
//         // console.log(e);
//         v.push(e)
//     }
//   })
// return v
// }
// console.log(system(3, 8, [1, 5, 95, 0, 4, 7]));  
// task 8
// function system (a){
//     s=0
//     a.forEach(function(e){
//         s+=e
//     })
//     return s
// }
// console.log(system([1,2,3,4,5]));
// task 9
// function system (a){
//         s=[]
//         a.forEach(function(e){
//           if(typeof(e)=="string")s.push("string")
//             if(typeof(e)=="object")s.push("object")
//                 if(typeof(e)=="number")s.push("number")
//                     if(typeof(e)=="boolean")s.push("boolean")
//         })
//         return s
//     }
//     console.log(system([21.1, "float", "array", ["I’m array"], true, 214]));
// task 10

    // function system (a){
    //           let  s=[]
    //             a.forEach(function(e){
    //              s.push(e.length)
    //             })
    //             return s
    //         }
    
    //         console.log(system(["13213","{12321}"]));
// task 11
// function system(arr){
    //         return arr.reverse().map(num => -num);
    //     }
    // console.log(invertArray([1,2,3,4,5,6]));
    // task 12
    // function system(a){
//     return a.map((e)=>{
//         return e*2
//     })
// }
// console.log(asd([2,5,3]));
//
///////////////////////// homework
// function system (a){
//     return a.shift()
// }
// console.log(system([1,2,3]));
// task 2
// function system (a,b){
// let s=[ ]
//  s.push(a)
//  s.push(b)
// return s
// }
// console.log(system(1,2));
// task 3
// function system (a){
//  return  a.reverse( a-1 )
// }
// console.log(system([1,2,3,4,5]));
// task 4
// function system (a){
//   return a.map(function (e){
//     e+=1
// })
//   return e
// }
// console.log(system([0,1,2,3,4]));
// task 5
// function system (a){
//     return a.pop()
// }
// console.log(system([1,2,3]));
// task 6
// function system (a){
//     let s=''
//     a.forEach(function (e){
//         s+=e
//     })
//     return s
// }
// console.log(system([1234567543]));
// task 7
// function system (a,b){
//  return   a.includes(b)
// }
// console.log(system([1,3,4,5,6],));
// task 8
// function system (a,b){
//     return a.indexOf(b)
// }
// console.log(system(["hi", "edabit", "fgh", "abc"], "fgh"));
// task 9
// function system (a,b){
//     return a.concat(b)
// }
// console.log(system([1,2,3],[4,5,6]));
// task 10
// function system(a){
//     let s=[]
//     a.forEach(function (e){
//         s.push(Number(e))
//     })
// return s
// }
// console.log(system(["9.14"]));
