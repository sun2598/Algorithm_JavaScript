function solution(n, k) {
    let answer; // 마지막으로 남는 왕자의 번호를 저장할 변수

    // 초기 큐 설정: 1부터 n까지의 왕자 번호로 초기화
    // 방법1)
    // let queue = Array.from({ length: n }, (v, i) => i + 1);
    // 방법2)
    for (let i = 1; i <= n; i++) {
        queue.push(i);
    }

    while (queue.length) {
        // k번째 왕자 전까지, 맨 앞 왕자를 맨 뒤로 이동
        for (let i = 1; i < k; i++) {
            queue.push(queue.shift()); // shift() : 맨 앞 요소 제거
        }
        // k번째 왕자 제거
        queue.shift();
        // 큐에 남은 왕자가 한 명만 있으면, 그 왕자가 마지막으로 남는 왕자
        if (queue.length === 1) {
            answer = queue.shift(); // 마지막으로 남은 왕자가 answer
        }
    }
    return answer; // 마지막으로 남은 왕자의 번호 반환
}

console.log(solution(8, 3)); // 7