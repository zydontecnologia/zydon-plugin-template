export enum Events {
  NAVIGATE = 'NAVIGATE',
  REFRESH_TOKEN = 'REFRESH_TOKEN',
  LOGOUT = 'LOGOUT',
  START_NEW_ORDER = 'START_NEW_ORDER',
  CLOSE_ORDER = 'CLOSE_ORDER',
  RELOAD_CART = 'RELOAD_CART',
  OPEN_QUICK_ORDER = 'OPEN_QUICK_ORDER',
  SWAP_DATA = 'SWAP_DATA',
  SWAP_NEW_ORDER = 'SWAP_NEW_ORDER',
  SWAP_PARTNER = 'SWAP_PARTNER',
  SWAP_PAYMENT_METHOD = 'SWAP_PAYMENT_METHOD',
}

export interface SwapToken {
  partnerId?: string;
  newOrderId?: string;
  paymentMethodId?: string;
}

export type PluginProps<P = Record<string, unknown>> = P & {
  primaryColor: string;
};
