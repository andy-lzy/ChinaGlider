import { useState } from "react";

import Title from "../components/Text/Title";
import { useCity } from "../components/Context/CityContext";
import { useProvince } from "../components/Context/ProvinceContext";
import { useTripIntensity } from "../components/Context/TripIntensityContext";
import { useTripStyle } from "../components/Context/TripStyleContext";
import { useDaysCount } from "../components/Context/DaysCountContext";
import NavigationButton from "../components/Button/NavigationButton";

const PlanGeneratorPage = () => {
    // State and handlers for the first form (e.g., Province form)
    const { province: selectedProvince } = useProvince();
    const { city: selectedCity } = useCity();
    const { daysCount: selectedDaysCount } = useDaysCount();
    const { tripIntensity: selectedIntencity } = useTripIntensity();
    const { tripStyle: selectedStyle } = useTripStyle();

    var provinceValue = `Selected Province: ` + selectedProvince;
    var cityValue = `Selected city: ` + selectedCity;
    var daysCountValue = `Selected number of days: ` + selectedDaysCount;
    var intensityValue = `Selected intensity: ` + selectedIntencity;
    var styleValue = `Selected Style: ` + selectedStyle;
  
    return (
      <div className="pageLayout">
        <div>
          <Title text={provinceValue} className={"greetingTitle"} />
          <Title text={cityValue} className={"greetingTitle"} />
          <Title text={daysCountValue} className={"greetingTitle"} />
          <Title text={intensityValue} className={"greetingTitle"} />
          <Title text={styleValue} className={"greetingTitle"} />
        </div>

        <NavigationButton className="backButton" to="/style-selection">
          BACK
        </NavigationButton>
      </div>
    );
  };
  
  export default PlanGeneratorPage;