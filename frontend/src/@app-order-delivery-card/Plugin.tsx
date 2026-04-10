import OrderDeliveryCard from 'components/OrderDeliveryCard';

import { Props } from './props';

const Plugin = ({ authData, ...other }: Props) => {
  return (
    <OrderDeliveryCard {...other} organizationId={authData.organizationId} />
  );
};

export default Plugin;
