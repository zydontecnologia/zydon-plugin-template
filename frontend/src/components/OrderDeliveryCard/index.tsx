import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import SimpleCard from '@zydon/common/components/SimpleCard';

import { OrderDeliveryCardWithOrganizationProps } from './props';

const OrderDeliveryCard = (props: OrderDeliveryCardWithOrganizationProps) => {
  return (
    <SimpleCard gap={3}>
      <Typography variant="subtitle2">Entrega</Typography>

      <TextField
        value={JSON.stringify(props, null, 2)}
        multiline
        label="Props que vc recebe"
      />
    </SimpleCard>
  );
};

export default OrderDeliveryCard;
