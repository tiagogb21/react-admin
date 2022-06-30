import React from 'react';

import {
  AiOutlineShoppingCart,
  AiOutlineBgColors,
  AiOutlineLine,
  AiOutlinePieChart,
} from 'react-icons/ai';
import {
  BsPeopleFill,
  BsCalendar3,
  BsJournalText,
  BsLayoutSidebarInsetReverse,
} from 'react-icons/bs';
import { FaPeopleArrows, FaCalendarCheck } from 'react-icons/fa';
import { RiShoppingBag2Fill } from 'react-icons/ri';
import { TbChartInfographic } from 'react-icons/tb';

const icons = [
  [<RiShoppingBag2Fill />],
  [
    <AiOutlineShoppingCart />,
    <BsPeopleFill />,
    <FaPeopleArrows />,
  ],
  [
    <BsCalendar3 />,
    <FaCalendarCheck />,
    <BsJournalText />,
    <AiOutlineBgColors />,
  ],
  [
    <AiOutlineLine />,
    <TbChartInfographic />,
    <BsLayoutSidebarInsetReverse />,
    <AiOutlinePieChart />,
  ],
];

export default icons;
