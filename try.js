var arr = [1, 2, 1, 1, 2, 3, 4, 5, 5, 5]

// let obj = Object.assign({}, arr)
var obj = {}

for (var i = 0; i < arr.length; i++) {
    obj[i] = (arr[i] || 0) + 1
}



console.log(obj)