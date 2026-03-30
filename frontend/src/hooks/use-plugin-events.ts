import { Events } from 'types/plugin';

/**
 * Hook para comunicação bidirecional entre plugin e aplicação host via CustomEvents.
 *
 * @example
 * ```ts
 * const { refreshToken, navigate, logout } = usePluginEvents();
 *
 * const session = await refreshToken();
 * navigate('/pedidos');
 * ```
 */
const usePluginEvents = () => {
  /**
   * Emite um evento customizado no `window` para a aplicação host.
   *
   * @param name - Nome do evento registrado em `Events`.
   * @param detail - Payload opcional enviado no `detail` do `CustomEvent`.
   */
  const emit = (name: keyof typeof Events, detail?: unknown) => {
    window.dispatchEvent(new CustomEvent(name, { detail: detail || null }));
  };

  /**
   * Registra um listener para um evento emitido pela aplicação host.
   *
   * @param name - Nome do evento a escutar.
   * @param callback - Função chamada com o `detail` do evento recebido.
   * @returns Função para remover o listener.
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
   * const session = await refreshToken();
   * console.log(session?.token);
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

  return { emit, listen, navigate, refreshToken, logout, openQuickOrder };
};

export default usePluginEvents;
