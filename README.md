
<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
<div align='center'>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
</div>


<!-- PROJECT LOGO -->
<br />
<div align="center">

  <h3 align="center">:thumbsup:js-lotto</h3>

  <p align="center">
    javascript로 만든 로또 어플리케이션
    <br />
    <br />
    <br />
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project




javascript를 이용해 만들어 본 간단한 로또 시뮬레이터입니다.

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* HTML
* CSS
* Vanilla javascript
* Cypress
* ESLint
* Prettier

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites
1. npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Repo를 clone한다
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
2. NPM pakage들을 설치한다
   ```sh
   npm install
   ```
3. CORS 해결을 위해 http-server 등을 이용해 프로젝트를 실행한다
   ```sh
   npm install http-server
   http-server
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap

- [x] 로또 구입 금액을 입력받는다. 
  - [x] 로또 1장의 가격(1,000원) 이하의 금액이 입력될 경우 재입력을 요청한다. 
  - [x] 최소 화폐단위(1원) 미만의 자릿수가 포함된 경우 재입력을 요청한다. 
  - [x] 1,000으로 나누어 떨어지지 않는 금액이 입력될 경우 거슬러 줄 금액을 알려주고 구매를 계속 진행한다. 
- [x] 입력받은 금액으로 살 수 있는 만큼 로또를 발급한다. 
  - [x] 모든 로또를 자동구매 방식으로 발급한다.
  - [x] 로또 한 장 당 번호의 개수는 6개이며, 번호는 1~45 사이 랜덤한 정수로 구성된다. 
  - [x] 각 번호는 서로 중복되지 않는다.
- [x] 발급 후 토글 버튼을 클릭하면 복권 번호를 확인할 수 있다.
  - [x] 기본 설정은 표시하지 않는 것으로 되어 있다. 
- [x] 로또를 발급받으면 당첨 번호를 입력할 수 있는 칸이 표시된다. 
  - [x] 6개의 당첨 번호와 1개의 보너스 번호 중 하나라도 입력되지 않으면 재입력을 요청한다. 
  - [x] 1~45 사이 정수가 아닌 값이 입력될 경우 재입력을 요청한다. 
  - [x] 중복되는 번호가 입력될 경우 재입력을 요청한다.  
- [x] 올바른 당첨 번호를 입력하면 결과 확인하기 버튼이 활성화된다. 
  - [x] 버튼 클릭 시 얻은 수익 및 당첨된 복권들의 등수를 모달 창으로 표시된다.
  - [x] 일치하는 번호가 3, 4, 5, 6개일 때 각각 4, 3, 2, 1등으로 표시한다.
  - [x] 일치하는 번호가 5개일 때만 보너스 번호 일치 여부를 확인한다. 
- [x] 결과 확인하기 버튼을 클릭하면 다시하기 버튼이 생성된다. 

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>
