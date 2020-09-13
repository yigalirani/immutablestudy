const immutable = require('immutable');
const { Map,List  } = immutable
const map1 = Map({ a: 1, b: 2, c: 3 });
const map2 = map1.set('b', 50);
map1.get('b') + " vs. " + map2.get('b'); // 2 vs. 50
console.log(map1.get('a'))
function timit(f,name,n){
    var start = +new Date();  // log start timestamp
    f();
    var end =  +new Date();  // log end timestamp
    var diff = end - start; 
    console.log(name,",ms:",diff,'persec:',n/diff)   
}
function test_immutablejs(size){
    const lst=List()
    var v=lst
    for (let i=0;i<size;i++){
        v=v.push(i)
    }
    console.log(v.size)
}
function test_listjs(size){
    const lst=[]
    var v=lst
    for (let i=0;i<size;i++){
        v.push(i)
    }
    console.log(v.length)
}
n=10000000
timit(_=>test_listjs(n),'test_listjs',n)
timit(_=>test_immutablejs(n),'test_immutablejs',n)