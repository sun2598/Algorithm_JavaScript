// N개의 평면상의 좌표(x, y)가 주어지면 모든 좌표를 오름차순으로 정렬하는 프로그램을 작성하세요. 
// 정렬기준은 먼저 x값에 의해서 정렬하고, x값이 같을 경우 y값에 의해 정렬합니다.

function solution(arr) {
    let answer = arr;

    arr.sort((a, b) => {
        if (a[0] === b[0]) { // a와 b의 x 좌표가 같다면,
            return a[1] - b[1]; // y 좌표에 따라 정렬 (오름차순)
        } else {
            return a[0] - b[0]; // x 좌표가 다르면 x 좌표에 따라 정렬 (오름차순)
        }
    });

    return answer;
}

let arr = [[2, 7], [1, 3], [1, 2], [2, 5], [3, 6]];
console.log(solution(arr));