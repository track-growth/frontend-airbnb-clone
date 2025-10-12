/**
 * @file AuthModal.tsx
 * @description 회원가입/로그인 modal UI
 */

import { useState } from 'react';
import { SignUpForm } from '@/widgets';

export const AuthModal = ({ isOpen, close }: { isOpen: boolean; close: () => void }) => {
  const [isSignUp, setIsSignUp] = useState(true);

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 z-1 flex items-center justify-center p-4"
        onClick={close}
      >
        <article
          className="bg-white rounded-4xl shadow-xl w-full max-w-md p-6"
          onClick={e => e.stopPropagation()}
        >
          {/* NOTE: 상단 닫기 버튼, 타이틀 */}
          <header className="flex items-center mb-7">
            <button onClick={close} className="text-4xl" aria-label="닫기">
              ×
            </button>
            <div className="flex items-center justify-center w-full">
              <h3 className="font-bold text-gray-900">{isSignUp ? '회원가입' : '로그인'}</h3>
            </div>
          </header>

          {/* NOTE: 회원가입/로그인 form */}
          <section>
            <h3 className="text-xl font-semibold">에어비앤비에 오신 것을 환영합니다</h3>

            <SignUpForm closeModalFn={close} />
          </section>

          {/* NOTE: 하단 로그인/회원가입 이동 버튼 */}
          <section className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              {isSignUp ? '이미 계정이 있으신가요?' : '계정이 없으신가요?'}
              <button
                onClick={() => setIsSignUp(!isSignUp)}
                className="ml-1 text-blue-600 hover:text-blue-800 font-medium"
              >
                {isSignUp ? '로그인' : '회원가입'}
              </button>
            </p>
          </section>
        </article>
      </div>
    </>
  );
};
