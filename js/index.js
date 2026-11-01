// 7console.log("안녕");

//검색기능
  //document는 html파일을 뜻함.
  // + .querySelector는 문서파일에서 너가 원하는 선택자 뭘 찾을거야.
const searchEl = document.querySelector('#head_layout .inner .search');
//console.log(searchEl);  //잘되는지 확인용.

  // 자바스크립트 변수 앞에 꼭 붙여야하는 명칭 3가지
  // var ,let :변수
  // (요즘 var를 잘안씀. 왜냐면 외부에서 데이터를 불러올때 제대로 못불러오거나 누락or깨짐? 있다함.)
  // const:상수 (선택자를 사용할땐 이걸 주로 사용함.)

  // 실무에서 구글에서 구글링해서 사용할텐데. 보통 var로 되어있다함.
  // 그래서 실무에서 var로 쓰라고 하지않는 이상 외부에서 데이터 가져오는건 let쓰는 습관을 들여야함.


// 변수 선언
//3가지중 1가지 + 


const searchInputEl = document.querySelector('#head_layout .inner .search input');

searchEl.addEventListener('click', function(){
    searchInputEl.focus();
console.log(1);
});

//검색창에 통합검색 회색글씨 추가.
searchInputEl.addEventListener('focus',function(){
  searchInputEl.setAttribute('placeholder', '통합검색')
  searchEl.classList.add('focused');
  //<input type="text" placeholder= "통합검색"> 랑 똑같은건데 자바문법에 맞게 변경
});

//이걸 안해주면 줄어들고나서도 통합검색이라는 글씨가 돋보기에 그대로 남음
searchInputEl.addEventListener('blur',function(){
  searchInputEl.setAttribute('placeholder', '')
  searchEl.classList.remove('focused');
});

const badgesEl = document.querySelector('#head_layout .badges');
const totopEl = document.querySelector('#to-top');

//홈페이지 로드되었을떄
window.onload = function(){
      gsap.to(totopEl , .6 ,{
      x:100
    })
}

window.addEventListener('scroll', _.throttle(function(){
  if(window.scrollY >500){
//배지 숨기기
// badgesEl.style.display = "none";
    gsap.to(badgesEl , .6 ,{
      opacity : 0,
      display:'none'
    })
        gsap.to(totopEl , .6 ,{
      x : 0,
    })
    //{}안에 내가 적용시킬걸 적어주면됨.
  }else{
  //배지 보이기
  // badgesEl.style.display = "block";
  gsap.to(badgesEl , .6 ,{
      opacity : 1,
      display:'block'
    })
    gsap.to(totopEl , .6 ,{
      x:100
    })
  }
  // console.log('scrll!!!');
},300));

// 상단으로 이동
totopEl.addEventListener('click', function(){
  gsap.to(window, .7 ,{
    scrollTo : 0
  })
})


// 모든 요소를 포함해야하기 때문에 ALL을 써줌. 안써줄경우 맨처음 나오는것만 포함함.
const fadeEls = document.querySelectorAll('.banner .fade-in');
console.log(fadeEls);
let sec = 0;  
fadeEls.forEach(function(fadeEl,idx){//호잇치 문 써서 fadeEl에 있는 갯수만큼 반복.
  // console.log(fadeEl);
  if(idx == 1){
  gsap.to(fadeEl, 0.3,{
  delay : 4.2,
  opacity:1
  })

}else{
  gsap.to(fadeEl, .1,{
  delay : (sec) * .7,
  opacity:1
  })
  sec++;
  }
});

var swiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        autoplay:true,
        loop : true
      });


var swiper = new Swiper('.swiper', {
        autoplay:{
          delay:3000 //5초
        },
        loop : true,
        slidesPerView : 3, //한번에 보여줄 슬라이드 개수
        spaceBetween : 10, //슬라이드 사이 여백
        centeredSlides : true,// 1번 슬라이드가 가운데
        pagination : {
          el:'.promotion .swiper-pagination',
          clickable : true
        },
        navigation:{
          prevEl : '.promotion .swiper-button-prev',
          nextEl : '.promotion .swiper-button-next'
        }
      });

      // AWARDS SWIPER
      var swiper2 = new Swiper('.awards .awards-swiper',{
        loop : true,
        autoplay:{
          delay:3000 //5초
        },
        spaceBetween : 10, //슬라이드 사이 여백
        slidesPerView : 5, //한번에 보여줄 슬라이드 개수
      });

//promotion 토글 기능
// 슬라이드 영역 토글 버튼
const promotionEl = document.querySelector('.promotion');
//슬라이드 영역 토글 기능
const promotionToggleEl = document.querySelector('.toggle-promotion');

// console.log(promotionEl);
// console.log(promotionToggleEl);

promotionToggleEl.addEventListener('click', function(){
  if(promotionEl.classList.contains('hide')){
    //참일경우 hide 존재
    promotionEl.classList.remove('hide');
    //180돌리고 
    promotionToggleEl.classList.add('rot');
  }else{
    promotionEl.classList.add('hide');
    promotionToggleEl.classList.remove('rot');
  }
});

//스크롤 영역 감지
const spyEls = document.querySelectorAll("#body_layout .scroll-spy");

spyEls.forEach(function(spyEl){
  new ScrollMagic.Scene({ //Scene 감지할 요소 추가
    triggerElement : spyEl, //보여짐 여부를 감지할 요소
    triggerHook : 0.8 //화면 80% 지점에서 보여짐 여부 감지
  })
  .setClassToggle(spyEl, 'show') //요소가 화면에 감지되면 show 클래스 추가
  .addTo(new ScrollMagic.Controller()); //코드 내부에 기능 할당(필수!)
})
