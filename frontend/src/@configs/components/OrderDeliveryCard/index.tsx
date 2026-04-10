import ComponentPluginWrapper from 'components/ComponentPluginWrapper';
import OrderDeliveryCardComponent from 'components/OrderDeliveryCard';
import { OrderDeliveryCardProps } from 'components/OrderDeliveryCard/props';
import useAuth from 'hooks/use-auth';

const OrderDeliveryCard = (props: OrderDeliveryCardProps) => {
  const { authData: { organization_id } = {} } = useAuth();

  return (
    <ComponentPluginWrapper>
      <OrderDeliveryCardComponent
        {...props}
        organizationId={organization_id!}
      />
    </ComponentPluginWrapper>
  );
};

export default OrderDeliveryCard;
