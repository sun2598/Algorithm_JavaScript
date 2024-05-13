// 임의의 N개의 숫자가 입력으로 주어집니다. 
// N개의 수를 오름차순으로 정렬한 다음 N개의 수 중 한 개의 수인 M이 주어지면 이분검색으로 M이 정렬된 상태에서 몇 번째에 있는지 구하는 프로그램을 작성하세요. 
// 단 중복값은 존재하지 않습니다.

function solution(target, arr) {
    let answer; // 정렬된 상태에서 몇 번째에 있는지

    // <이분검색>
    // - 이미 '정렬되어' 있는 배열에서 특정한 값을 찾아내는 알고리즘
    // - 배열의 중간에 있는 임의의 값을 선택하여 찾고자 하는 값 X와 비교
    // X가 중간 값보다 작으면 중간 값을 기준으로 좌측의 데이터들을 대상으로, X가 중간값보다 크면 배열의 우측을 대상으로 다시 탐색
    // 동일한 방법으로 다시 중간의 값을 임의로 선택하고 비교. 해당 값을 찾을 때까지 이 과정을 반복

    arr.sort((a, b) => a - b); // 일단 정렬하고 시작

    //        target
    // [12, 23, 32, 57, 65, 81, 87, 99]
    //  lt          mid             rt  (처음)
    //  lt  mid rt                      (1회전)

    let lt = 0;
    let rt = arr.length - 1;
    while (lt <= rt) {
        let mid = parseInt((lt + rt) / 2); // Math.floor도 가능
        if (arr[mid] === target) {
            answer = mid + 1;
            break;
        } else if (arr[mid] > target) {
            rt = mid - 1; // 1 빼주는거 잊지말기
        } else {
            lt = mid + 1; // 1 더해주는거 잊지말기
        }
    }

    return answer;
}

let arr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(32, arr)); // 3