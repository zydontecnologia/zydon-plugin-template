import Common from '@zydon/common/components/Common';
import Viewer from '@zydon/plugin/components/Viewer';

import { mockPluginProps, primaryColor } from 'mocks/data';

import AppPlugin from './@app/App';
import AppCheckout from './@app-checkout/App';
import AppCheckoutPartnerPlugin from './@app-checkout-partner/App';
import AppCheckoutSellerPlugin from './@app-checkout-seller/App';
import AppNewOrderPlugin from './@app-new-order/App';
import AppNewOrderPartnerPlugin from './@app-new-order-partner/App';
import AppNewOrderSellerPlugin from './@app-new-order-seller/App';
import AppOrderDeliveryCard from './@app-order-delivery-card/App';
import AppProductDetailPlugin from './@app-product-detail/App';
import AppProductDetailActionsPlugin from './@app-product-detail-actions/App';
import AppProductSearchResultsView from './@app-product-search-results/App';
import AppProductsListView from './@app-products-list/App';
import AppProductsListItemView from './@app-products-list-item/App';
import AppScreen from './@app-screen/App';
import AppSearch from './@app-search/App';
import OrderDeliveryCardAdmin from './@configs/components/OrderDeliveryCard';
import Configs from './@configs/Configs';

import '@zydon/common/styles.css';

const App = () => (
  <Common primaryColor={primaryColor}>
    <Viewer
      configView={<Configs />}
      appView={<AppPlugin {...mockPluginProps.app} />}
      newOrderView={<AppNewOrderPlugin {...mockPluginProps.newOrder} />}
      newOrderPartnerView={
        <AppNewOrderPartnerPlugin {...mockPluginProps.newOrder} />
      }
      newOrderSellerView={
        <AppNewOrderSellerPlugin {...mockPluginProps.newOrder} />
      }
      checkoutView={<AppCheckout {...mockPluginProps.checkout} />}
      checkoutPartnerView={
        <AppCheckoutPartnerPlugin {...mockPluginProps.checkout} />
      }
      checkoutSellerView={
        <AppCheckoutSellerPlugin {...mockPluginProps.checkout} />
      }
      productDetailView={
        <AppProductDetailPlugin {...mockPluginProps.productDetail} />
      }
      productDetailActionsView={
        <AppProductDetailActionsPlugin
          {...mockPluginProps.productDetailActions}
        />
      }
      productsListView={
        <AppProductsListView {...mockPluginProps.productsList} />
      }
      productsListItemView={
        <AppProductsListItemView {...mockPluginProps.productsListItem} />
      }
      screenView={<AppScreen {...mockPluginProps.appScreen} />}
      centerHeader={<AppSearch {...mockPluginProps.appSearch} />}
      productSearchResultsView={
        <AppProductSearchResultsView
          {...mockPluginProps.productSearchResults}
        />
      }
      adminDeliveryCardView={
        <OrderDeliveryCardAdmin {...mockPluginProps.orderDeliveryCardAdmin} />
      }
      deliveryCardView={
        <AppOrderDeliveryCard {...mockPluginProps.orderDeliveryCard} />
      }
    />
  </Common>
);

export default App;
