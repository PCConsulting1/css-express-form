import WelcomeBanner from '../components/Welcome';
import PriceList from '../components/prices/PriceList';
import ServiceList from '../components/services/ServiceList';

export default function () {
  return (
    <>
      <WelcomeBanner />
      <PriceList />
      <ServiceList />
    </>
  );
}
