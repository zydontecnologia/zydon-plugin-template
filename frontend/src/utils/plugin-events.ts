import { Events, SwapToken } from 'types/plugin';

/**
 * Emite um evento customizado no `window` para a aplicação host.
 *
 * @param name - Nome do evento registrado em {@link Events}.
 * @param detail - Payload opcional enviado no `detail` do `CustomEvent`.
 *
 * @example
 * ```ts
 * pluginEvents.emit('NAVIGATE', { path: '/pedidos' });
 * ```
 */
const emit = (name: keyof typeof Events, detail?: unknown) => {
  window.dispatchEvent(new CustomEvent(name, { detail: detail || null }));
};

/**
 * Registra um listener para um evento emitido pela aplicação host.
 *
 * @param name - Nome do evento a escutar.
 * @param callback - Função chamada com o `detail` do evento recebido.
 * @returns Função para remover o listener (`cleanup`).
 *
 * @example
 * ```ts
 * const cleanup = pluginEvents.listen('NAVIGATE', (detail) => {
 *   console.log('Navegou para:', detail);
 * });
 *
 * // Para parar de escutar:
 * cleanup();
 * ```
 */
const listen = (
  name: keyof typeof Events,
  callback: (detail: unknown) => void,
) => {
  const handler = (e: Event) => callback((e as CustomEvent).detail);
  window.addEventListener(name, handler);
  return () => window.removeEventListener(name, handler);
};

/**
 * Solicita navegação à aplicação host.
 *
 * @param path - Rota de destino (ex: `'/pedidos'`).
 *
 * @example
 * ```ts
 * pluginEvents.navigate('/pedidos');
 * ```
 */
const navigate = (path: string) => emit('NAVIGATE', { path });

/**
 * Solicita refresh de token à aplicação host e aguarda a resposta.
 *
 * Envia callbacks `onSuccess`/`onError` via `detail` do evento,
 * permitindo que a host resolva a Promise com a sessão atualizada.
 *
 * @returns Promise com o objeto de sessão atualizado pela host.
 *
 * @example
 * ```ts
 * const session = await pluginEvents.refreshToken();
 * console.log(session?.accessToken);
 * ```
 */
const refreshToken = (): Promise<unknown> =>
  new Promise((resolve, reject) => {
    emit('REFRESH_TOKEN', { onSuccess: resolve, onError: reject });
  });

/** Solicita logout à aplicação host. */
const logout = () => emit('LOGOUT');

/** Solicita abertura do pedido rápido na aplicação host. */
const openQuickOrder = () => emit('OPEN_QUICK_ORDER');

/**
 * Solicita swap de dados do token à aplicação host.
 *
 * @param params - Dados para swap (`partnerId`, `newOrderId`, `paymentMethodId`).
 * @param update - Se deve atualizar a sessão no Redux (default: `true`).
 * @returns Promise com o objeto de sessão atualizado pela host.
 *
 * @example
 * ```ts
 * const session = await pluginEvents.swapData({ partnerId: '123' });
 * ```
 */
const swapData = (params: SwapToken, update?: boolean): Promise<unknown> =>
  new Promise((resolve, reject) => {
    emit('SWAP_DATA', {
      ...params,
      update,
      onSuccess: resolve,
      onError: reject,
    });
  });

/**
 * Solicita swap de modelo de pedido à aplicação host.
 *
 * @param id - ID do modelo de pedido.
 * @returns Promise com o objeto de sessão atualizado pela host.
 *
 * @example
 * ```ts
 * const session = await pluginEvents.swapNewOrder('order-456');
 * ```
 */
const swapNewOrder = (id: string): Promise<unknown> =>
  new Promise((resolve, reject) => {
    emit('SWAP_NEW_ORDER', { id, onSuccess: resolve, onError: reject });
  });

/**
 * Solicita swap de parceiro/cliente à aplicação host.
 *
 * @param id - ID do parceiro.
 * @returns Promise com o objeto de sessão atualizado pela host.
 *
 * @example
 * ```ts
 * const session = await pluginEvents.swapPartner('partner-789');
 * ```
 */
const swapPartner = (id: string): Promise<unknown> =>
  new Promise((resolve, reject) => {
    emit('SWAP_PARTNER', { id, onSuccess: resolve, onError: reject });
  });

/**
 * Solicita swap de forma de pagamento à aplicação host.
 *
 * @param id - ID da forma de pagamento.
 * @returns Promise com o objeto de sessão atualizado pela host.
 *
 * @example
 * ```ts
 * const session = await pluginEvents.swapPaymentMethod('pm-101');
 * ```
 */
const swapPaymentMethod = (id: string): Promise<unknown> =>
  new Promise((resolve, reject) => {
    emit('SWAP_PAYMENT_METHOD', { id, onSuccess: resolve, onError: reject });
  });

/**
 * Utilitário para comunicação bidirecional entre plugin e aplicação host via `CustomEvents`.
 *
 * Pode ser usado fora de componentes React (em services, utils, interceptors, etc.).
 * Para uso dentro de componentes, utilize o hook `usePluginEvents`.
 *
 * @example
 * ```ts
 * import { pluginEvents } from 'utils/plugin-events';
 *
 * pluginEvents.navigate('/pedidos');
 * const session = await pluginEvents.refreshToken();
 * pluginEvents.logout();
 * ```
 */
export const pluginEvents = {
  emit,
  listen,
  navigate,
  refreshToken,
  logout,
  openQuickOrder,
  swapData,
  swapNewOrder,
  swapPartner,
  swapPaymentMethod,
};
