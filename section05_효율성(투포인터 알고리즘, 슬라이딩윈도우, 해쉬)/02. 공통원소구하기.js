// A, B 두 개의 집합이 주어지면 두 집합의 공통 원소를 추출하여 오름차순으로 출력하는 프로그램을 작성하세요.

function solution(arr1, arr2) {
    let answer = [];

    // 두 배열이 정렬되어있지 않음 -> 정렬해야 투포인터 알고리즘 사용 가능!
    arr1 = arr1.sort((a, b) => a - b);
    arr2 = arr2.sort((a, b) => a - b);
    // [1, 2, 3, 5, 9]
    // p1
    // [2, 3, 5, 7, 8]
    // p2

    let n = arr1.length;
    let m = arr2.length;
    let p1 = 0;
    let p2 = 0;
    
    while (p1 < n && p2 < m) {
        if (arr1[p1] == arr2[p2]) {
            answer.push(arr1[p1++]);
            p2++;
        } else if (arr1[p1] < arr2[p2]) {
            p1++;
        } else {
            p2++;
        }
    }

    return answer;
}

let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];
console.log(solution(a, b));