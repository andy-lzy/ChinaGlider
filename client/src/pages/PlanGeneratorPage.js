import { useState, useEffect } from "react";

import Title from "../components/Text/Title";
import { useCity } from "../components/Context/CityContext";
import { useProvince } from "../components/Context/ProvinceContext";
import { useTripIntensity } from "../components/Context/TripIntensityContext";
import { useTripStyle } from "../components/Context/TripStyleContext";
import { useDaysCount } from "../components/Context/DaysCountContext";
import ChatGptResponse from "../Providers/ChatGptResponse";
import NavigationButton from "../components/Button/NavigationButton";

const PlanGeneratorPage = () => {
  const { province: selectedProvince } = useProvince();
  const { city: selectedCity } = useCity();
  const { daysCount: selectedDaysCount } = useDaysCount();
  const { tripStyle: selectedStyle } = useTripStyle();
  const { tripIntensity: selectedIntencity } = useTripIntensity();

  const inputData = {
    city: selectedCity,
    province: selectedProvince,
    days: selectedDaysCount,
    style: selectedStyle,
    intensity: selectedIntencity
  }
  console.log(JSON.stringify(inputData));

  return (
    <div>
      <h1>Travel Plan</h1>
      <ChatGptResponse inputData={inputData} />
    </div>
  );
};

export default PlanGeneratorPage;