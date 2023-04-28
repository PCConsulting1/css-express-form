import ListContainer from '../ListContainer';

import PriceCard from './PriceCard';
import plans from './prices.data';

export default function () {
  return (
    <ListContainer>
      {plans.map((plan) => (
        <PriceCard
          key={plan.title}
          title={plan.title}
          description={plan.description}
          bullets={plan.bullets}
          price={plan.price}
        />
      ))}
    </ListContainer>
  );
}
