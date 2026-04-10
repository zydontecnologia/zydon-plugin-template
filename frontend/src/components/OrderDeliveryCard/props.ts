import { ReactNode } from 'react';

export interface OrderDeliveryCardProps {
  orderId: string;
  externalId: string;
  deliveryContactName: ReactNode;
  address: ReactNode;
  location: ReactNode;
  deliveryMethodName: ReactNode;
  freight: ReactNode;
  deliveryText: ReactNode;
  observation: ReactNode;
}
export interface InfoRowProps {
  label: ReactNode;
  value: ReactNode;
}

export interface OrderDeliveryCardWithOrganizationProps
  extends OrderDeliveryCardProps {
  organizationId: string;
}
