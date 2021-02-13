import React from 'react';
import {
  CapricornSvg,
  AquariusSVG,
  PiscesSVG,
  AriesSVG,
  TaurusSVG,
  GeminiSVG,
  CancerSVG,
  LeoSVG,
  VirgoSVG,
  LibraSVG,
  ScorpioSVG,
  SagittariusSVG,
} from '../../assets/svgs';

export function getZodiac2(month: number, date: number) {
  //bound is zero indexed and returns the day of month where the boundary occurs
  //ie. bound[0] = 20; means January 20th is the boundary for a zodiac sign
  var bound = [20, 19, 20, 20, 20, 21, 22, 22, 21, 22, 21, 21];
  //startMonth is zero indexed and returns the zodiac sign of the start of that month
  //ie. startMonth[0] = "Capricorn"; means start of January is Zodiac Sign "Capricorn"
  var startMonth = [
    'Capricorn',
    'Aquarius',
    'Pisces',
    'Aries',
    'Taurus',
    'Gemini',
    'Cancer',
    'Leo',
    'Virgo',
    'Libra',
    'Scorpio',
    'Sagittarius',
  ];
  let monthIndex = month - 1; //so we can use zero indexed arrays
  let signMonthIndex;
  if (date <= bound[monthIndex]) {
    //it's start of month -- before or equal to bound date
    signMonthIndex = monthIndex;
  } else {
    //it must be later than bound, we use the next month's startMonth
    signMonthIndex = (monthIndex + 1) % 12; //mod 12 to loop around to January index.
  }
  return startMonth[signMonthIndex]; //return the Zodiac sign of start Of that month.
}

export function getZodiacSVG(month: number, date: number) {
  //bound is zero indexed and returns the day of month where the boundary occurs
  //ie. bound[0] = 20; means January 20th is the boundary for a zodiac sign
  var bound = [20, 19, 20, 20, 20, 21, 22, 22, 21, 22, 21, 21];
  //startMonth is zero indexed and returns the zodiac sign of the start of that month
  //ie. startMonth[0] = "Capricorn"; means start of January is Zodiac Sign "Capricorn"
  var startMonth = [
    <CapricornSvg width={20} height={20} />,
    <AquariusSVG width={20} height={20} />,
    <PiscesSVG width={20} height={20} />,
    <AriesSVG width={20} height={20} />,
    <TaurusSVG width={20} height={20} />,
    <GeminiSVG width={20} height={20} />,
    <CancerSVG width={20} height={20} />,
    <LeoSVG width={20} height={20} />,
    <VirgoSVG width={20} height={20} />,
    <LibraSVG width={20} height={20} />,
    <ScorpioSVG width={20} height={20} />,
    <SagittariusSVG width={20} height={20} />,
  ];
  let monthIndex = month - 1; //so we can use zero indexed arrays
  let signMonthIndex;
  if (date <= bound[monthIndex]) {
    //it's start of month -- before or equal to bound date
    signMonthIndex = monthIndex;
  } else {
    //it must be later than bound, we use the next month's startMonth
    signMonthIndex = (monthIndex + 1) % 12; //mod 12 to loop around to January index.
  }
  return startMonth[signMonthIndex]; //return the Zodiac sign of start Of that month.
}
