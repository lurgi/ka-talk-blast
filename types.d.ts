//types.d.ts
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY: string;
      NEXT_PUBLIC_KAKAO_REST_API_KEY: string;
      NEXT_PUBLIC_KAKAO_CLIENT_SECRET: string;
    }
  }
  interface Window {
    Kakao: any;
  }
}

export {};
