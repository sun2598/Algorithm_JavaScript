// 한 개의 문자열을 입력받아 해당 문자열에 알파벳 대문자가 몇 개 있는지 알아내는 프로그램 을 작성하세요.

function solution(s) {         
    let answer = 0;
    
    for (let x of s) {

        // <ASCII 번호>
        // 0 ~ 9 : 48 ~ 57
        // A ~ Z : 65 ~ 90
        // a ~ z : 97 ~ 122
        
        // 방법1
        let num = x.charCodeAt();
        if (num >= 65 && num <= 90) {
            answer++;
        }

        // 방법2
        // if (x == x.toUpperCase()) {
        //     answer++;
        // }
    }


    return answer;
}

let str = "KoreaTimeGood";
console.log(solution(str));