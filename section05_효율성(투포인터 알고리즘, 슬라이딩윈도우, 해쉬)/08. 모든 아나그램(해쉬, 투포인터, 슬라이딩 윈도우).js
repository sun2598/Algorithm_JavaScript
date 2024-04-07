// S문자열에서 T문자열과 아나그램이 되는 S의 부분문자열의 개수를 구하는 프로그램을 작성하세요.
// 아나그램 판별시 대소문자가 구분됩니다. 부분문자열은 연속된 문자열이어야 합니다.

function compareMaps(map1, map2) {
    if (map1.size !== map2.size) {
        return false;
    }
    for (let [key, value] of map1) {
        if (!map2.has(key) || map2.get(key) !== value)  { // map 끼리의 비교는 이렇게!
            return false;
        }
    }
    return true;
}
function solution(s, t) {
    let answer = 0;

    let map1 = new Map(); // s
    let map2 = new Map(); // t

    for (let x of t) {
        if (map2.has(x)) {
            map2.set(x, map2.get(x) + 1);
        } else {
            map2.set(x, 1);
        }
    }
    // b  a  c  a  A  a  c  b  a
    // lt    rt
    //    lt    rt

    // 초기 윈도우 (rt 직전까지만)
    let len = t.length - 1; // 2
    for (let i = 0; i < len; i++) {
        if (map1.has(s[i])) {
            map1.set(s[i], map1.get(s[i]) + 1);
        } else {
            map1.set(s[i], 1);
        }
    }
    let lt = 0;
    for (let rt = len; rt < s.length; rt++) {
        if (map1.has(s[rt])) {
            map1.set(s[rt], map1.get(s[rt]) + 1);
        } else {
            map1.set(s[rt], 1);
        }
        if (compareMaps(map1, map2)) {
            answer++;
        }
        map1.set(s[lt], map1.get(s[lt]) - 1);
        if (map1.get(s[lt]) === 0) {
            map1.delete(s[lt]);
        }
        lt++;
    }

    return answer;
}

let a = 'bacaAacba';
let b = 'abc';
console.log(solution(a, b));