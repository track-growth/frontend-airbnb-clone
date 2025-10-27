# Entities Layer

비즈니스 entity를 나타내는 Layer입니다.

- 선택적인 레이어입니다.
- 실제 비즈니스 데이터 모델을 정의합니다.
- User나 Product와 같은 데이터 구조가 해당하며, 특정 비즈니스 개체(users, products 등)를 통합 관리합니다.
- ex. 사용자, 리뷰, 댓글 등

### Entities Layer 계층 구조

- **Can use:** `shared` layer만 import하여 사용할 수 있습니다.
- **Can be used by:** `shared` layer를 제외한 모든 layer에서 widgets layer를 import할 수 있습니다.
