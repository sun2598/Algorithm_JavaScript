function solution(board, moves) {
    let answer = 0; // 제거된 인형의 총 개수
    
    let stack = []; // 뽑은 인형을 저장할 스택
    moves.forEach(pos => { // 크레인의 이동 경로(위치)를 순회
        for (let i = 0; i < board.length; i++) { // 보드의 각 행을 순회
            if (board[i][pos - 1] !== 0) { // 만약 현재 위치에 인형이 있으면 (0은 인형이 없는 상태를 나타냄)
                let tmp = board[i][pos - 1]; // 인형을 임시 변수에 저장
                board[i][pos - 1] = 0; // 인형을 뽑았으므로 해당 위치를 0으로 변경
                if (tmp === stack[stack.length - 1]) { // 스택의 맨 위 인형과 현재 뽑은 인형이 같으면
                    stack.pop(); // 스택에서 인형 제거
                    answer += 2; // 같은 인형 2개가 제거되었으므로, answer 값을 2 증가
                } else {
                    stack.push(tmp); // 아니면 스택에 현재 뽑은 인형 추가
                }
                break; // 인형을 하나 뽑았으므로 for 루프 종료
            }
        }
    });

    return answer; // 제거된 인형의 총 개수 반환
}

let a = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1]
];

let b = [1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(a, b));