# Features Layer

비즈니스 가치를 가지는 사용자 시나리오나 기능을 다루는 Layer입니다.

- 선택적인 레이어입니다.
- 특정 기능의 복합적인 비즈니스 로직인 경우에 적합합니다.
- 여러 entities를 조합하거나 복잡한 비즈니스 규칙이 있는 경우 해당 레이어를 활용합니다.
- ex. 사용자의 주요 액션 (좋아요, 리뷰 작성, 상품 평가 등)

### Features Layer 계층 구조

- **Can use:** `shared`, `entities` layer를 import하여 사용할 수 있습니다.
- **Can be used by:** `widgets`, `pages`, `app` layer에서 features layer를 import할 수 있습니다.
