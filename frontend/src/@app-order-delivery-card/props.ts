/* eslint-disable @typescript-eslint/no-explicit-any */
import { OrderDeliveryCardProps } from 'components/OrderDeliveryCard/props';
import { UserData } from 'types/auth';
import { PluginProps } from 'types/plugin';

export type Props = PluginProps<
  OrderDeliveryCardProps & {
    authData: UserData;
  }
>;
