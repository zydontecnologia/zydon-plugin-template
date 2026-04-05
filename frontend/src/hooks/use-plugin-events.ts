import { pluginEvents } from 'utils/plugin-events';

/**
 * Hook para comunicação bidirecional entre plugin e aplicação host via `CustomEvents`.
 *
 * Wrapper React do utilitário {@link pluginEvents} para uso em componentes.
 * Para uso fora de componentes (services, utils, interceptors), importe
 * diretamente `pluginEvents` de `utils/plugin-events`.
 *
 * @returns Objeto com métodos de comunicação com a aplicação host.
 *
 * @example
 * ```tsx
 * const { refreshToken, navigate, logout } = usePluginEvents();
 *
 * const session = await refreshToken();
 * navigate('/pedidos');
 * ```
 */
const usePluginEvents = () => pluginEvents;

export default usePluginEvents;
