$(function(){
});

//굿사이트 정보 데이터
var goodsiteInfo = [
    {
        imgSrc: 'images/site1.png',
        url: 'http://swabtheworld.com/en/',
        title: 'SWAB THE WORLD'
    },
    {
        imgSrc: 'images/site2.png',
        url: 'https://newestamericans.com/',
        title: '노스웨스트 아메리칸즈'
    },
    {
        imgSrc: 'images/site3.gif',
        url: 'http://waaarhol.com',
        title: '앤디워홀'
    },
];


var num = 0; // 데이터 인텍스 번호
$('.siteLink').attr('href', goodSiteInfo[0].url); // 초기 url 값


//사이트 정보 변경 함수
function changeSiteInfo(num) {

/*이미지 변경*/
$('#sidebar > figure img').attr('src', goodsiteInfo[num].imgSrc);

/* 홈페이지 주소 변경*/ 
$('#sidebar > figure .url').text(goodsiteInfo[num].url);

/*타이틀 제목 변경*/ 
$('#sidebar > figure .home_title').text(goodsiteInfo[num].title);

//siteLink에 링크 url 추가 (새창열기)
$('.siteLink').attr('href',goodsiteInfo[num].url);

}

// 다음 사이트 정보
function nextSiteInfo() {
    // 다음 이미지 카운트
    num = num + 1;
    // 마지막 정보이면 처음으로
    if(num > 2) {
      num = 0;
    }
    console.log(num);
    changeSiteInfo(num);
  }
  

//이전 사이트 정보
function prevSiteInfo() {
    num = num - 1;
    if(num < 0) {
        num = 2;
    }
    console.log(num);
    changeSiteInfo(num);
}