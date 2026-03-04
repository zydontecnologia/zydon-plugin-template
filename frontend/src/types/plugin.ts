export enum Events {
  NAVIGATE = 'NAVIGATE',
  REFRESH_TOKEN = 'REFRESH_TOKEN',
  LOGOUT = 'LOGOUT',
  START_NEW_ORDER = 'START_NEW_ORDER',
  CLOSE_ORDER = 'CLOSE_ORDER',
  RELOAD_CART = 'RELOAD_CART',
  OPEN_QUICK_ORDER = 'OPEN_QUICK_ORDER',
}

export type PluginProps<P = Record<string, unknown>> = P & {
  primaryColor: string;
};
