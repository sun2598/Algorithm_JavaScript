// 왕비를 피해 일곱 난쟁이들과 함께 평화롭게 생활하고 있던 백설공주에게 위기가 찾아왔다. 일과를 마치고 돌아온 난쟁이가 일곱 명이 아닌 아홉 명이었던 것이다.
// 아홉 명의 난쟁이는 모두 자신이 "백설 공주와 일곱 난쟁이"의 주인공이라고 주장했다. 
// 뛰어난 수학적 직관력을 가지고 있던 백설공주는, 다행스럽게도 일곱 난쟁이의 키의 합이 100이 됨을 기억해 냈다.
// 아홉 난쟁이의 키가 주어졌을 때, 백설공주를 도와 일곱 난쟁이를 찾는 프로그램을 작성하시오.
// 가능한 정답이 여러 가지인 경우에는 아무거나 출력한다.

function solution(arr) {
    let answer = arr; // 얕은 복사 -> 같은 주소 공유

    let sum = arr.reduce(function(prev, curr) {
        return prev + curr;
    }, 0);

    let flag = false;

    for (let i = 0; i < 8; i++) {
        for (let j = i + 1; j < 9; j++) {
            if (sum - (arr[i] + arr[j]) === 100) {
                arr.splice(j, 1); // j 인덱스에 있는 요소 딱 하나 삭제
                arr.splice(i, 1); // -> j를 먼저 지우는 이유 : i를 먼저 지우면 인덱스값이 앞으로 밀려서..
                flag = true;
                break;
            }
        }
        if (flag) break;
    }

    return answer;
}

let arr = [22, 7, 21, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));