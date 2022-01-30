# 집 소개기능 - 사진과 가구 정보 조합

### ✨사용 기술

---

Front

- React
- module-css
- redux toolkit

### 🔱실행 순서

---

1.  설치

        npx create-react-app wanted_pre_onboarding_ggumim
        yarn install
        yarn add react-redux @reduxjs/toolkit

2.  실행
    yarn start

### 🗂 폴더 구조

    src
    ├─ components
    │              ├ RoomImage
    ├ layout     │
    │              └ Slide
    ├ store.
    │
    ├ utils
    │
    └ App.js

### 기능 설명

[x] 가구 정보가 있는 곳에 돋보기 모양의 버튼을 표시
[x] 돋보기를 클릭하면 상품정보 tool tip 출력되면서 돋보기모양이 닫기 버튼으로 변경
[x]닫기 버튼을 클릭하면 tool tip을 없애고 돋보기 버튼으로 변경

- tool tip은 하나만 노출. tool tip이 노출되고 있는 상태에서 다른 가구를 선택하면 노출되고 있 던 tool tip은 닫히고 새로 클릭한 가구 tool tip만 노출
- 하단에 있는 상품목록에서 해당 가구가 선택되었으면 tool tip 출력
- 선택된 가구는 선택되었으면 표시
- 할인율이 존재하는 경우에는 상단에 할인율(discountRate) 표시
