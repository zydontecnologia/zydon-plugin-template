import { Events } from 'types/plugin';

const usePluginEvents = () => {
  const emit = (name: keyof typeof Events, detail?: unknown) => {
    window.dispatchEvent(new CustomEvent(name, { detail: detail || null }));
  };

  const listen = (
    name: keyof typeof Events,
    callback: (detail: unknown) => void,
  ) => {
    const handler = (e: Event) => callback((e as CustomEvent).detail);
    window.addEventListener(name, handler);
    return () => window.removeEventListener(name, handler);
  };

  const navigate = (path: string) => emit('NAVIGATE', { path });

  const refreshToken = () => emit('REFRESH_TOKEN');

  const logout = () => emit('LOGOUT');

  const openQuickOrder = () => emit('OPEN_QUICK_ORDER');

  return { emit, listen, navigate, refreshToken, logout, openQuickOrder };
};

export default usePluginEvents;
