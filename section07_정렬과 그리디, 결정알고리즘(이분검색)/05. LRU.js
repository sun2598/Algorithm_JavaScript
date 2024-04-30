// Least Recently Used(카카오 캐시 문제 변형)
// 캐시메모리는 CPU와 주기억장치(DRAM) 사이의 고속의 임시 메모리로서 CPU가 처리할 작업을 저장해 놓았다가 필요할 바로 사용해서 처리속도를 높이는 장치이다. 
// 워낙 비싸고 용량이 작아 효율적으로 사용해야 한다. 철수의 컴퓨터는 캐시메모리 사용 규칙이 LRU 알고리즘을 따른다. 
// LRU 알고리즘은 Least Recently Used 의 약자로 직역하자면 가장 최근에 사용되지 않은 것 정도의 의미를 가지고 있습니다. 
// 캐시에서 작업을 제거할 때 가장 오랫동안 사용하지 않은 것을 제거하겠다는 알고리즘입니다.

// 캐시 메모리 상태 변화
// 1 0 0 0 0 -> Cache Miss
// 2 1 0 0 0 -> Cache Miss
// 3 2 1 0 0 -> Cache Miss
// 2 3 1 0 0 -> Cache Hit
// 6 2 3 1 0 -> Cache Miss
// 2 6 3 1 0 -> Cache Hit
// 3 2 6 1 0 -> Cache Hit
// 5 3 2 6 1 -> Cache Miss
// 7 5 3 2 6 -> Cache Miss

function solution(size, arr) {
    let answer = Array.from({ length: size }, () => 0); // 캐시 초기화 (모두 0으로)

    arr.forEach(x => {
        let pos = -1;
        for (let i = 0; i < size; i++) {
            if (x === answer[i]) { // Cache Hit 검사
                pos = i; // Hit된 위치
            }
        }
        if (pos === -1) { // Cache Miss
            for (let i = size - 1; i >= 1; i--) {
                answer[i] = answer[i - 1]; // 모든 요소를 오른쪽으로 이동
            }
        } else { // Cache Hit
            for (let i = pos; i >= 1; i--) {
                answer[i] = answer[i - 1]; // Hit된 요소까지 모든 요소를 오른쪽으로 이동
            }
        }
        answer[0] = x; // 새 요소를 캐시의 맨 앞에 추가
    });

    return answer;
}

let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7]; // 맨 앞이 가장 최근에 쓰인 작업, 맨 뒤는 가장 오랫동안 쓰이지 않은 작업
console.log(solution(5, arr)); // 캐시의 크기: 5