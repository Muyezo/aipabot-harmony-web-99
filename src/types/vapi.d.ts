interface VapiInstance {
  toggle: () => void;
}

declare global {
  interface Window {
    vapiInstance: VapiInstance | null;
    vapiSDK: {
      run: (config: any) => VapiInstance;
    };
  }
}

export {};