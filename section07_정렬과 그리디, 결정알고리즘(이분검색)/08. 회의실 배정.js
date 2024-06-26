// 한 개의 회의실이 있는데 이를 사용하고자 하는 n개의 회의들에 대하여 회의실 사용표를 만들려고 한다. 
// 각 회의에 대해 시작시간과 끝나는 시간이 주어져 있고, 각 회의가 겹치지 않게 하면서 회의실을 사용할 수 있는 최대수의 회의를 찾아라. 
// 단, 회의는 한번 시작하면 중간에 중단될 수 없으며 한 회의가 끝나는 것과 동시에 다음 회의가 시작될 수 있다.

function solution(meeting) {
    let answer = 0; // 최대 회의 수를 저장할 변수

    // 1. 회의를 끝나는 시간을 기준으로 오름차순 정렬 (끝나는 시간이 빠른 회의를 먼저 처리함으로써 최대한 많은 회의를 배정)
    // 만약 끝나는 시간이 같다면 시작 시간이 빠른 순으로 정렬
    meeting.sort((a, b) => {
        if (a[1] === b[1]) {
            return a[0] - b[0];
        } else {
            return a[1] - b[1];
        }
    });
    // [ [ 2, 3 ], [ 1, 4 ], [ 3, 5 ], [ 4, 6 ], [ 5, 7 ] ]

    let et = 0; // 마지막으로 선택된 회의의 끝나는 시간을 저장할 변수
    // 2. 정렬된 회의 목록을 순회하면서 회의 스케줄링
    for (let x of meeting) {
        if (x[0] >= et) { // 시작 시간이 이전 회의의 끝나는 시간보다 크거나 같다면 스케줄 가능
            answer++; // 회의 수 증가
            et = x[1]; // 현재 회의의 끝나는 시간을 et로 업데이트
        }
    }

    return answer; // 최대 회의 수 반환
}

let arr = [[1, 4], [2, 3], [3, 5], [4, 6], [5, 7]]; // 회의의 시작시간, 끝나는 시간
console.log(solution(arr)); // 3 -> (2, 3), (3, 5), (5, 7)이 회의실을 이용할 수 있다.