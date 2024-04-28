//1
function getStringHasMaxLength(arr) {
    let maxLength = 0
    for (let i=0;i<arr.length;i++) {
        if (arr[i].length >= maxLength) {
            maxLength = arr[i].length
        }
    }
    let result = [];
    for (let i=0;i<arr.length;i++) {
        if (arr[i].length == maxLength) {
            result.push(arr[i])
        }
    }
    return result
}

console.log(getStringHasMaxLength(['aba', 'aa', 'ad', 'c', 'vcd']))
//2
let users = [
    {
        name: "Bùi Công Sơn",
        age: 30,
        isStatus: true
    },
    {
        name: "Nguyễn Thị Hằng",
        age: 27,
        isStatus:false
    },
    {
        name:"Phan Văn Dũng",
        age :20,
        isStatus:false
    }
];

// Function 1
function filterUsersByAgeAndStatus(users) {
    let result=[] 
    for(const user of users){
        if(user.age>25&&user.isStatus==true){
            result.push(user)
        }
    }
    return result
}

console.log(filterUsersByAgeAndStatus(users))

// Function 2
function sortUsersByAge(users) {
    users.sort((a, b) => a.age - b.age);
    return users;
}

console.log(sortUsersByAge(users))

//3
function getCountElement(arr) {
    const countMap = {}
    for (const element of arr) {
        if (countMap[element]) {
            countMap[element]++
        } else {
            countMap[element] = 1
        }
    }
    return countMap
}
console.log(getCountElement(["one", "two", "three", "one", "one", "three"]))