// 지니레코드에서는 불세출의 가수 조영필의 라이브 동영상을 DVD로 만들어 판매하려 한다. 
// DVD에는 총 N개의 곡이 들어가는데, DVD에 녹화할 때에는 라이브에서의 순서가 그대로 유지되어야 한다. 
// 즉, 1번 노래와 5번 노래를 같은 DVD에 녹화하기 위해서는 1번과 5번 사이의 모든 노래도 같은 DVD에 녹화해야 한다. 
// 또한 한 노래를 쪼개서 두 개의 DVD에 녹화하면 안된다.
// 지니레코드 입장에서는 이 DVD가 팔릴 것인지 확신할 수 없기 때문에 이 사업에 낭비되는 DVD를 가급적 줄이려고 한다. 
// 고민 끝에 지니레코드는 M개의 DVD에 모든 동영상을 녹화하기로 하였다. 이 때 DVD의 크기(녹화 가능한 길이)를 최소로 하려고 한다. 
// 그리고 M개의 DVD는 모두 같은 크기여야 제조원가가 적게 들기 때문에 꼭 같은 크기로 해야 한다.

function count(songs, capacity) {
    let cnt = 1; // DVD 개수
    let sum = 0; // 각 DVD의 용량
    for (let x of songs) {
        if (sum + x > capacity) { // 현재 곡을 추가하면 용량 초과
            cnt++;
            sum = x; // 새로운 DVD에 현재 곡 추가
        } else {
            sum += x; // 현재 DVD에 곡 추가
        }
    }
    return cnt; // 필요한 DVD 개수 반환
}
function solution(m, songs) { // m개의 DVD에 녹화
    let answer; // DVD의 최소 용량 크기

    // <이분검색>
    // 9 10 11 ... 27 ... 43 44 45
    // lt          mid          rt -> 용량이 27일때 괜찮은지 확인 (필요한 DVD가 m개를 초과하지 않는지 확인)

    let lt = Math.max(...songs); // 가능한 최소 용량 (가장 긴 곡의 길이)
    let rt = songs.reduce((acc, value) => acc + value, 0); // 가능한 최대 용량 (모든 곡의 길이 합)
    
    while (lt <= rt) {
        let mid = parseInt((lt + rt) / 2);
        if (count(songs, mid) <= m) { // 필요한 DVD 개수가 m 이하인 경우
            answer = mid; // 현재 용량이 가능한 용량
            rt = mid - 1; // 더 작은 용량을 시도
        } else {
            lt = mid + 1; // 더 큰 용량을 시도
        }
    }
    
    return answer;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // 곡의 길이 (분 단위)
console.log(solution(3, arr)); // 답 : 17
// 설명 : 3개의 DVD용량이 17분짜리이면 (1, 2, 3, 4, 5) (6, 7), (8, 9) 이렇게 3개의 DVD로 녹음을 할 수 있다. 
// 17분 용량보다 작은 용량으로는 3개의 DVD에 모든 영상을 녹화할 수 없다.