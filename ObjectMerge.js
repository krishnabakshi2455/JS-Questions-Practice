function mergeObjects(object1,object2) {
    
    let merged={}

    for (const key in object1) {
        merged[key] = object1[key]
    }
    for (const key in object2) {
        if (object2.hasOwnProperty(key)) {
            merged[key] = object2[key]
            
        }
    }
    return merged
}
let obj1={
   a:1,
   b:2,
   c:3
}
let obj2={
    b:7,
    d:8,
    e:9

}
console.log(mergeObjects(obj1,obj2));
