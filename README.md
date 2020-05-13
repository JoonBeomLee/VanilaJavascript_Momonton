# VanilaJavascript_Momonton
노마드코더) 자바스크립트 연습 Momonton Clone Coding 

초보자를 위한 javascript - vanilla javascript part 1

Module 1
# What is Javascript?
    - javascript란 무엇인가?
    - javascript의 버전

# Vanilla JavaScript?
    - Vanilla javascript란 무엇인가?
    - Vanilla javascript를 배워야하는 이유
    - framework?

# Variable
    - 변수란 무엇인가?

# let, const, var
    - 변수의 선언과 사용
    - 초기화시 let을 많이 사용 var는 지양
    - const(상수)

# 주석
    - 단일 주석 //
    - 다수 주석 /* */

# Data Types on JS
    - Datatype의 정의
    - boolean (true, false) 
    - 종류

# Array
    - javascript에서 Array의 정의
    - Array 문법 
        - 변수 = [] 
        - 선언과 호출

# Object
    - javascript에서 Object의 정의
    - Object 문법
        - 선언과 호출
        - 선언 : {label : data} 쌍으로 저장

Module 2
2-1
# Function 
    - function 
    - argument
    - parameter
    
2-1.1
    - `` 백틱을 이용한 text 출력 ( 사용법 ) 
    - 함수의 return 값
    - Object 안에 함수 넣기

2-2 JS DOM Functions
    - DOM(Document Object Model)
    - getElementsById()
    - console.dir = 객체내 보유 함수 출력  
    - querySelector() = #id명으로 서치 가능
    - JS를 통해서 HTML을 조종할 수 있다.
    
2-4 Events and event handlers
    - window 객체 (페이지 객체)
    - window.addEventListener("event", calledfuntion) # event시 funtion 호출
    - javascript는 event에 반응하기 위해 만들어짐 ( 반응형 )
    - tag의 선택으로 html코드에 반응성을 띄게 할 수 있다.

2-5 조건문
    - if / else / and / or
    - ==(타입 관계없이 비교) | ===(타입까지 비교) 의 차이 # === 추천
    - var = promt() # 알림창, 사용자 입력 받아 반환

2-6 if / else function practice part 1
    - javascript를 통해 click event에 반응하는 html 문서 
    - always use MDN #이벤트 근원 확인 가능, 매우 중요, 유연한 프로그래밍 가능

2-7 if / else function practive part 2
    - html / css / javascript 파일은 각각의 역할에 충실하는 것이 좋다. 
      -> javascript function 내부에서 색을 변경하는 등의 css의 역할을 대신하는 것은 좋은 코딩 습관이 아니다. 

    - classList에 class가 포함되어 있는지 확인해서 상태 변경하기 ( html class 추가 / 제거 )
      or toggle을 활용한 event 처리

3-1 Making a JS Clock part 1
    - js file 사용시에 html에 연결하고 init() 함수를 통해서 초기화를 먼저 하고 만드는 습관
    - 어떤 project를 만들때, 기획하고 작성하는 과정에서 분할 정복을 기본으로 하자.  -> 파일을 쪼개서 작성하는 습관
    - getTime() 만들기

3-2 Making a JS Clock part 2
    - setInterval()을 통한 실시간 clock
    - setInterval(arg1, arg2) #arg1(실행할 함수), arg2(실행간격)

3-3 Saving the User Name part 1
    - localStorage
        - getItem() / setItem()

3-4 Saving the User Name part 2
    - localstorage에 이름 저장하기
    - form은 웹 페이지에 정보를 제출 하는 양식? - default로 값을 다른 곳으로 보내려고 한다. 
    - addEventListener("a", functionA ); -> "a" event를 발생시키면 functionA 함수를 호출한다.
    - localstorae는 웹페이지에 기반하기 때문에 다른 웹 페이지로 가면 다른 저장 목록이 있다. (URLs를 기반으로 작동)

3-5 Making a To-do List part 1
    - localStorage를 이용한 To-do List 저장 및 출력
    - javascript를 사용해서 element를 만들고 부모 클래스에 추가 하는 방법

3-6 Making a To-do List part 2
    - User에게 받은 To-do 목록을 Array에 저장해서 List로 만들기
    - To-do 정보를 담고 있는 Object를 만들어서 Array에 추가
    - localstorage는 모든 데이터를 string으로 받으려고 한다. 따라서 js의 object를 저장할 수는 없다. 그래서 object를 string으로 변환해 주어야함
    - JSON.stringify() : 데이터를 string으로 바꾸어줌.
    - 기존 저장된 To-do List를 불러와 출력하기 위해서 string으로 변환된 데이터를 불러오는 과정에서 다시 object로 변환하기 
        - JSON.parse()
    - Array forEach() 구문 -> Array의 각각의 요소에 대해서 함수를 실행시키는 구문

3-7 Making a To-do List part 3
    - To-do List의 delete button을 누르면 요소가 삭제되는 것을 구현
        - 1. HTML에서의 삭제
        - 2. JS에서의 삭제
        - 3. localstorage에서의 삭제
    - 마우스 click 이벤트의 추적 
        - event.target.parentNode로 이벤트를 발생시킨 버튼의 부모를 찾아서 id 값을 찾아 li를 삭제한다. -> delete child element mdn
            - remove child
    - filter() 함수
    - filter() 와 forEach()를 강조함

3-8 Image Background
    - unsplash free image download
    - random number를 활용한 background image 출력
    - Math.random() / Math.ceil() / Math.floor()
