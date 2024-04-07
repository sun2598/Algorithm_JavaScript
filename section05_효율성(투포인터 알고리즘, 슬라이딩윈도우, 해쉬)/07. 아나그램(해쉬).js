// Anagram이란 두 문자열이 알파벳의 나열 순서는 다르지만 그 구성이 일치하면 두 단어는 아나그램이라고 합니다.
// 예를 들면 AbaAeCe 와 baeeACA 는 알파벳을 나열 순서는 다르지만 그 구성을 살펴보면 A(2), a(1), b(1), C(1), e(2)로 알파벳과 그 개수가 모두 일치합니다.
// 즉 어느 한 단어를 재배열하면 상대편 단어가 될 수 있는 것을 아나그램이라 합니다.
// 길이가 같은 두 개의 단어가 주어지면 두 단어가 아나그램인지 판별하는 프로그램을 작성하세요. 아나그램 판별시 대소문자가 구분됩니다.

function solution(str1, str2) {
    let answer = 'YES';

    let map = new Map();
    for (let x of str1) {
        if (map.has(x)) {
            map.set(x, map.get(x) + 1);
        } else {
            map.set(x, 1);
        }
    }
    for (let x of str2) {
        if (!map.has(x) || map.get(x) == 0) { // 0이 되면 (1을 더 빼야 하는 상황인데 이미 0) 바로 NO 리턴.
            return 'NO';
        }
        map.set(x, map.get(x) - 1); // 여기서 하나씩 빼다가
    }

    return answer;
}

let a = 'AbaAeCe';
let b = 'baeeACA';
console.log(solution(a, b));