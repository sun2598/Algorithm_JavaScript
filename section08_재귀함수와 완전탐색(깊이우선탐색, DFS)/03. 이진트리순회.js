// 아래 그림과 같은 이진트리로 전위순회와 후위순회를 연습해보세요.
//       1
//    2      3
//  4  5    6  7
//
// 전위순회 (부모-왼-오) 출력 : 1 2 4 5 3 6 7
// 중위순회 (왼-부모-오) 출력 : 4 2 5 1 6 3 7
// 후위순회 (왼-오-부모) 출력 : 4 5 2 6 7 3 1

// =========================================================================
// <방법 1> : 트리 구조 구현

//                     100 <- 주소값                                    |             |
//                    [ 1 ] <- 데이터 (node.data == 1)                  | DFS(null)   |
//                   200|300                                          | DFS(400)    |
//          200                   300                                 | DFS(200)    |
//         [ 2 ]                 [ 3 ]                                | DFS(100)    |
//        400|500               600|700                               |_____________|
//     400       500         600        700
//   [ 4 ]      [ 5 ]       [ 6 ]      [ 7 ]
// null|null  null|null   null|null  null|null

// 트리 노드 정의
const tree = {
    data: 1,
    left: {
        data: 2,
        left: {
            data: 4,
            left: null,
            right: null
        },
        right: {
            data: 5,
            left: null,
            right: null
        }
    },
    right: {
        data: 3,
        left: {
            data: 6,
            left: null,
            right: null
        },
        right: {
            data: 7,
            left: null,
            right: null
        }
    }
};

function solution(node) {
    let answer = "";

    // 전위 순회 (Pre-order traversal)
    function preOrder(node) {
        if (node !== null) {
            answer += node.data + " "; // 현재 노드 방문
            preOrder(node.left); // 왼쪽 자식 방문
            preOrder(node.right); // 오른쪽 자식 방문
        }
    }
    // 중위 순회 (In-order traversal)
    function inOrder(node) {
        if (node !== null) {
            inOrder(node.left); // 왼쪽 자식 방문
            answer += node.data + " "; // 현재 노드 방문
            inOrder(node.right); // 오른쪽 자식 방문
        }
    }
    // 후위 순회 (Post-order traversal)
    function postOrder(node) {
        if (node !== null) {
            postOrder(node.left); // 왼쪽 자식 방문
            postOrder(node.right); // 오른쪽 자식 방문
            answer += node.data + " "; // 현재 노드 방문
        }
    }

    // 전위 순회
    answer = ""; // 초기화
    preOrder(node);
    console.log("Pre-order traversal:", answer);
    // 중위 순회
    answer = ""; // 초기화
    inOrder(node);
    console.log("In-order traversal:", answer);
    // 후위 순회
    answer = ""; // 초기화
    postOrder(node);
    console.log("Post-order traversal:", answer);
}

solution(tree);

// =========================================================================
// <방법 2> : 간단한 수학적 표현을 통해 트리 구조를 간접적으로 구현
function solution2(n) {
    let answer = "";

    function DFS(v) {
        if (v > 7) {
            return;
        } else {
            // 1. 전위순회
            answer += (v + ' '); // 현재 노드의 값을 정답 문자열에 추가
            DFS(v * 2); // 왼쪽 자식 노드로 이동 (v의 왼쪽 자식 노드는 v * 2)
            DFS(v * 2 + 1); // 오른쪽 자식 노드로 이동 (v의 오른쪽 자식 노드는 v * 2 + 1)
            // 2. 중위순회
            // DFS(v * 2); // 왼쪽 자식 노드로 이동 (v의 왼쪽 자식 노드는 v * 2)
            // answer += (v + ' '); // 현재 노드의 값을 정답 문자열에 추가
            // DFS(v * 2 + 1); // 오른쪽 자식 노드로 이동 (v의 오른쪽 자식 노드는 v * 2 + 1)
            // 3. 후위순회
            // DFS(v * 2); // 왼쪽 자식 노드로 이동 (v의 왼쪽 자식 노드는 v * 2)
            // DFS(v * 2 + 1); // 오른쪽 자식 노드로 이동 (v의 오른쪽 자식 노드는 v * 2 + 1)
            // answer += (v + ' '); // 현재 노드의 값을 정답 문자열에 추가
        }
    }

    DFS(n); // 초기 호출: 루트 노드부터 탐색 시작 (DFS(1))
    return answer;
}

console.log(solution2(1)); // 1 2 4 5 3 6 7 