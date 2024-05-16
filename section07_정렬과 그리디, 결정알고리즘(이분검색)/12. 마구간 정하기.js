// N개의 마구간이 수직선상에 있습니다. 각 마구간은 x1, x2, x3, ......, xN의 좌표를 가지며, 마구간 간에 좌표가 중복되는 일은 없습니다.
// 현수는 C마리의 말을 가지고 있는데, 이 말들은 서로 가까이 있는 것을 좋아하지 않습니다. 
// 각 마구간에는 한 마리의 말만 넣을 수 있고, 가장 가까운 두 말의 거리가 최대가 되게 말을 마구간에 배치하고 싶습니다.
// C마리의 말을 N개의 마구간에 배치했을 때 가장 가까운 두 말의 거리가 최대가 되는 그 최대 값을 출력하는 프로그램을 작성하세요.

function count(stable, dist) {
    // 주어진 거리(dist)로 몇 마리의 말을 배치할 수 있는지 계산하는 함수
    var count = 1; // 첫 번째 말을 첫 마구간에 배치
    var current = stable[0]; // 현재 말이 배치된 위치
    
    for (let i = 1; i < stable.length; i++) { // 두 번째 마구간부터 확인
        if (stable[i] - current >= dist) { // 현재 마구간과의 거리가 주어진 거리 이상일 경우
            count++; // 말을 배치
            current = stable[i]; // 현재 위치를 업데이트
        }
    }
    return count;
}

function solution(c, stable) { // c마리의 말
    let answer; // 가장 가까운 두 말의 최대 거리
    
    // 일단 오름차순 정렬
    stable.sort((a, b) => a - b);

    // [1, 2, 4, 8, 9] -> 여기에 3마리를 넣어야함

    // <이분 검색>
    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
    // lt          mid          rt -> 최소 거리가 5일때 괜찮은지 확인 (c마리 이상을 배치할 수 있는지 확인)

    let lt = 1; // 가능한 최소 거리
    let rt = stable[stable.length - 1] - stable[0]; // 가능한 최대 거리
    while (lt <= rt) {
        let mid = parseInt((lt + rt) / 2);
        if (count(stable, mid) >= c) { // 현재 거리로 c 마리 이상의 말을 배치할 수 있다면
            answer = mid; // 현재 거리를 가능한 거리로 설정
            lt = mid + 1; // 더 먼 거리를 시도
        } else {
            rt = mid - 1; // 더 가까운 거리를 시도
        }
    }
    return answer;
}

let arr = [1, 2, 8, 4, 9]; // 마구간의 좌표 xi
console.log(solution(3, arr)); // 3