# App Layer

애플리케이션 로직이 초기화되는 Layer입니다.

- 전체 애플리케이션의 기본 구조를 세워서, 애플리케이션의 진입점 역할을 합니다.
- 앱을 실행하는 모든 것(Providers, Routers, Global Styles, Global Type 선언 등)이 App Layer에서 정의됩니다.
- 전역적으로 필요한 설정을 처리하여 애플리케이션의 통합된 구조를 제공합니다.

### App Layer 계층 구조

- 모든 계층의 Layer를 import하여 사용할 수 있습니다.
- 다른 계층에서는 App Layer에 접근이 불가합니다.
