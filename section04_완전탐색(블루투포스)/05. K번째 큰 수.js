// 현수는 1부터 100사이의 자연수가 적힌 N장의 카드를 가지고 있습니다. 같은 숫자의 카드가 여러장 있을 수 있습니다. 
// 현수는 이 중 3장을 뽑아 각 카드에 적힌 수를 합한 값을 기록하려고 합니다. 3장을 뽑을 수 있는 모든 경우를 기록합니다. 
// 기록한 값 중 K번째로 큰 수를 출력하는 프로그램을 작성하세요.
// 만약 큰 수부터 만들어진 수가 25 25 23 23 22 20 19......이고 K값이 3이라면 K번째 큰 값은 22입니다.

// 나의 풀이 -> 비추
function solution(n, k, card) {
    let answer;

    let sum = [];
    // 3장을 뽑을 수 있는 모든 경우
    for (let i = 0; i < n - 2; i++) {
        for (let j = i + 1; j < n - 1; j++) {
            for (let k = j + 1; k < n; k++) {
                if (sum.indexOf(card[i] + card[j] + card[k]) == -1) { // indexOf -> 배열의 모든 요소를 순회하기 때문에, 시간 복잡도 높음
                    sum.push(card[i] + card[j] + card[k]); // 중복된 합 제거
                }
            }
        }
    }
    sum = sum.sort((a, b) => b - a); // 내림차순 정렬
    answer = sum[k - 1]

    return answer;
}

// 강의 풀이 -> Set 사용!
function solution2(n, k, card){
    let answer;

    let tmp = new Set(); // 중복을 허용하지 않고, 순서가 없는 Set을 사용

    for (let i = 0; i < n - 2; i++) {
        for (let j = i + 1; j < n - 1; j++) {
            for (let k = j + 1; k < n; k++) {
                tmp.add(card[i] + card[j] + card[k]); // 중복된 합을 자동으로 제거
            }
        }
    }
    let sum = Array.from(tmp).sort((a, b) => b - a); // Set -> Array 변환 후, 내림차순 정렬
    answer = sum[k - 1]; // K번째로 큰 수

    return answer;
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution2(10, 3, arr)); // 143