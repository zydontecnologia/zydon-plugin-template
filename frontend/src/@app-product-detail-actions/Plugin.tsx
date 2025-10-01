import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Icon from '@zydon/common/components/Icon';

import { Props } from './props';

const Plugin = ({ product }: Props) => {
  return (
    <Stack gap={2}>
      <Button
        component="a"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.youtube.com/@zydonoficial"
        size="large"
        startIcon={<Icon icon="YOUTUBE" />}
        variant="soft"
        color="error"
      >
        Conhecer mais o produto: {product.name}
      </Button>

      <Button
        component="a"
        target="_blank"
        rel="noopener noreferrer"
        href="https://api.whatsapp.com/send/?phone=5534933006691&text=Ol%C3%A1%21+Gostaria+de+saber+mais+sobre+a+Zydon.&type=phone_number&app_absent=0"
        size="large"
        startIcon={<Icon icon="WHATSAPP" />}
        variant="soft"
        color="success"
      >
        Quero comprar
      </Button>
    </Stack>
  );
};

export default Plugin;
