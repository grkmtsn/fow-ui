import trTR from 'antd/es/locale/tr_TR';
import enUS from 'antd/es/locale/en_US';
import enGB from 'antd/es/locale/en_GB';
import deDE from 'antd/es/locale/de_DE';
import arEG from 'antd/es/locale/ar_EG';
import azAZ from 'antd/es/locale/az_AZ';
import ruRU from 'antd/es/locale/ru_RU';

const languages = [
  {
    id: 1,
    title: 'Türkçe',
    locale: trTR,
    direction: 'ltr',
    moment: 'tr',
  },
  {
    id: 2,
    title: 'English(US)',
    locale: enUS,
    direction: 'ltr',
    moment: 'en-gb',
  },
  {
    id: 3,
    title: 'English(GB)',
    locale: enGB,
    direction: 'ltr',
    moment: 'en-gb',
  },
  {
    id: 4,
    title: 'Deutsche',
    locale: deDE,
    direction: 'ltr',
    moment: 'de',
  },
  {
    id: 5,
    title: 'عربى',
    locale: arEG,
    direction: 'rtl',
    moment: 'ar',
  },
  {
    id: 6,
    title: 'Azərbaycan',
    locale: azAZ,
    direction: 'ltr',
    moment: 'az',
  },
  {
    id: 7,
    title: 'русский',
    locale: ruRU,
    direction: 'ltr',
    moment: 'ru',
  },
];

export default languages;
