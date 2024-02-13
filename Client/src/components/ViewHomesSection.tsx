import { memo } from 'react';
import type { FC } from 'react';
import React from 'react';

import resets from './_resets.module.css';
import classes from './ViewHomesSection.module.css';

interface Props {
  className?: string;
}
/* @figmaId 24:649 */
const ViewHomesSection: FC<Props> = memo(function ViewHomesSection(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.frame457}>
        <div className={classes.frame453}>
          <div className={classes.lowEnergyCosts}>Low energy costs</div>
          <div className={classes.oneOfTheMostSignificantBenefit}>
            One of the most significant benefits of owning an Eco Haven Realty Home is lower energy costs. Our
            eco-friendly homes are designed to use less energy with our solar powered system, saving money on bills.
          </div>
        </div>
        <div className={classes.frame456}></div>
      </div>
      <div className={classes.frame458}>
        <div className={classes.frame4532}>
          <div className={classes.smallerCarbonFootprint}>Smaller carbon footprint </div>
          <div className={classes.ourEcoFriendlyHomesAlsoHaveASm}>
            Our eco-friendly homes also have a smaller carbon footprint. They constantly use renewable energy sources
            and re less waste which means they have a lower impact on the environment.
          </div>
        </div>
        <div className={classes.frame4562}></div>
      </div>
      <div className={classes.frame459}>
        <div className={classes.frame4533}>
          <div className={classes.indoor}>Indoor </div>
          <div className={classes.ourHybridVentilationStrategyIn}>
            Our hybrid ventilation strategy includes both natural and mechanical ventilation, while our airtight wooden
            structure reduces risk of mold development, ensuring a healthy home.
          </div>
        </div>
        <div className={classes.frame4563}></div>
      </div>
      <div className={classes.frame460}>
        <div className={classes.benefitsOfOwningAnEcoFriendlyH}>Benefits of owning an eco-friendly home.</div>
        <div className={classes.highQualityHomesWithLowCarbonI}>High-quality homes with low-carbon impact.</div>
      </div>
    </div>
  );
});

export default ViewHomesSection