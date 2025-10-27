/**
 * @description main.tsx는 애플리케이션의 진입점(entry point)입니다.
 * - 애플리케이션의 root component인 App을 렌더링합니다.
 * - StrictMode를 사용하여 애플리케이션의 안정성을 높입니다. (local 개발 환경에서만 두 번 렌더링합니다)
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '@/app/App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
