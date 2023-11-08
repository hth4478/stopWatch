const stopWatch = document.getElementById("stopWatch");
const totalTimeText = document.getElementById("totalTime");
const cntText = document.getElementById("cnt");
let settingTime = 0; //경과 시간
let cnt = 0; // 누적 실행 횟수
let totTime = 0; // 누적 실행 시간
let timerId, hour, min, sec; // 재귀함수 호출 변수 및 시간 설정 변수


function printTime() {
    settingTime++;
    stopWatch.innerText = getTimeFormatString(settingTime);
}

//시작 - 재귀호출로 반복실행
function startBtnOnClick() {
    printTime();
    stopBtnOnClick();
    timerId = setTimeout(startBtnOnClick, 1000);
}

//일시정지
function stopBtnOnClick() {
    if (timerId != null) {
        clearTimeout(timerId);
    }
}

//초기화
function resetBtnOnClick() {
    stopBtnOnClick()
    totTime = totTime+settingTime;
    if(stopWatch.innerText != "00:00:00"){
        cnt++;
        cntText.innerText = "누적 실행 횟수 : "+cnt+"회"
        totalTimeText.innerText = "누적 실행 시간 : "+getTimeFormatString(totTime);
    }
    stopWatch.innerText = "00:00:00";
    settingTime = 0;
}

// 시간(int)을 시, 분, 초 문자열로 변환
function getTimeFormatString(time) {
    hour = parseInt(String(time / (60 * 60)));
    min = parseInt(String((time - (hour * 60 * 60)) / 60));
    sec = time % 60;

    return String(hour).padStart(2, '0') + ":" + String(min).padStart(2, '0') + ":" + String(sec).padStart(2, '0');
}