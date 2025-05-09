export const safeLocalStorage = {
  isAvailable(): boolean {
    if (typeof window === 'undefined') return false;
    try {
      const testKey = '__storage_test__';
      window.localStorage.setItem(testKey, '1');
      window.localStorage.removeItem(testKey);
      return true;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
      return false;
    }
  },

  getItem(key: string): string | null {
    if (typeof window === 'undefined') return null;
    if (!this.isAvailable()) return null;
    try {
      return window.localStorage.getItem(key);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
      return null;
    }
  },

  setItem(key: string, value: string): void {
    if (typeof window === 'undefined') return;
    if (!this.isAvailable()) return;
    try {
      window.localStorage.setItem(key, value);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
      // silently fail if blocked (e.g., Safari private mode)
    }
  },

  removeItem(key: string): void {
    if (typeof window === 'undefined') return;
    if (!this.isAvailable()) return;
    try {
      window.localStorage.removeItem(key);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
      // silently fail
    }
  }
};
