// foreach, map, filter, reduce

arr = [10, 11, 12, 13, 14, 15];

// 1. forEach(콜백함수)
// - forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
// - array의 요소마다 콜백함수 호출
// - 다음과 같은 구조라고 보면됨!
// function forEach(predicate, thisArg) { // predicate : 콜백함수(필수) / thisArg : 콜백함수 내부에서 this로 사용할 변수
//     for (let i = 0; i < arr.length; i++) {
//         predicate(arr[i], i);
//     }
// }
arr.forEach(function(v, i) {
    console.log(v, i, this);
}, [1, 2]);
// 10 0 [ 1, 2 ]
// 11 1 [ 1, 2 ]
// 12 2 [ 1, 2 ]
// 13 3 [ 1, 2 ]
// 14 4 [ 1, 2 ]
// 15 5 [ 1, 2 ]

// 2. map
// - map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
// - array의 요소마다 콜백함수 호출 -> 콜백함수가 각 요소를 가공된 값으로 변환(mapping) 후 리턴
// - 무조건 원본 array와 동일한 길이의 새로운 배열을 생성! ⭐️
// - 다음과 같은 구조라고 보면됨!
// function map(predicate, thisArg) { // predicate : 콜백함수(필수) / thisArg : 콜백함수 내부에서 this로 사용할 변수
//     let list = [];
//     for (let i = 0; i < arr.length; i++) {
//         list.push(predicate(arr[i], i));
//     }
//     return list;
// }
let answer1 = arr.map(function(v, i) {
    if (v % 2 == 0) return v; // 짝수로만 이루어진 배열 리턴
}, [1, 2]);
console.log(answer1); // [ 10, undefined, 12, undefined, 14, undefined ] -> 무조건 arr의 길이만큼 push하기 때문에 undefined 있음

// 3. filter
// - filter<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[];
// - array의 요소마다 콜백함수 호출 -> 콜백함수가 true/false를 리턴 -> true인 요소만 모아서 새로운 배열 생성
// - 원본 array와 길이가 다를 수 있음! ⭐️
// - 다음과 같은 구조라고 보면됨!
// function filter(predicate, thisArg) { // predicate : 콜백함수(필수) / thisArg : 콜백함수 내부에서 this로 사용할 변수
//     let list = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (predicate(arr[i], i))  {
//             list.push(arr[i]);
//         }
//     }
//     return list;
// }
let answer2 = arr.filter(function(v, i) {
    return v % 2 == 0; // 짝수로만 이루어진 배열 리턴
}, [1, 2]);
console.log(answer2); // [ 10, 12, 14 ] -> arr의 길이와 무관한 새로운 배열

// 4. reduce
// - reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T;
// - array의 요소마다 콜백함수 호출 -> 값들이 누적
// - 다음과 같은 구조라고 보면됨!
// function reduce(predicate, val) {
//     let result = val;
//     for (let i = 0; i < arr.length; i++) {
//         result = predicate(result, arr[i])
//     }
//     return result;
// }
let answer3 = arr.reduce(function(prev, curr) {
    // prev : 이전의 콜백함수에서 return된 값
    // curr : 현재 요소
    return prev + curr;
}, 0); // val : 0 (초기값)
console.log(answer3); // 75