// 클릭 기록(11/10): 누를 때마다 ntfy 기록 채널에 한 줄 → 사장님 PC 판매 알림 프로그램이 2분마다 모아 클릭기록.csv에 저장
window.LOG = function (l) {
  fetch('https://ntfy.sh/cayanne-clicks-0c5e51e34e', {method: 'POST', mode: 'no-cors', keepalive: true,
    body: l + ' | ' + (document.referrer || '-') + ' | ' + (navigator.userAgent || '').slice(0, 90)});
};
