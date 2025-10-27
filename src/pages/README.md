# Page Layer

사용자에게 노출되는 각 화면을 담당하는 Layer입니다.

- 애플리케이션의 각 페이지가 포함됩니다.
- ex. 홈페이지, 로그인/로그아웃 페이지, 숙소 상세 페이지

### Page Layer 계층 구조

- **Can use:** `shared`, `entities`, `features`, `widgets` layer를 import하여 사용할 수 있습니다.
- **Can be used by:** `app` layer에서만 widgets layer를 import할 수 있습니다.
