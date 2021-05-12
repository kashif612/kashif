import nykaaLogoFirst from 'Images/nykaa-logo-first.png';
import nykaaLogoRest from 'Images/nykaa-logo-rest.png';

import tailoredTechLogoFirst from 'Images/tailoredtech-logo-first.png';
import tailoredTechLogoRest from 'Images/tailoredtech-logo-rest.png';

import mitLogoFirst from 'Images/mit-logo-first.png';
import mitLogoRest from 'Images/mit-logo-rest.png';

import nykaaBackgroundImage from 'Images/background/background-image-nykaa.jpg';
import tailoredTechBackgroundImage from 'Images/background/background-image-tailoredtech.jpg';
import collegeBackgroundImage from 'Images/background/background-image-college.jpg';

export const timelineListValue = [
  {
    id: 'magicbricks',
    companyName: 'MagicBricks',
    link: 'https://www.magicbricks.com/',
    position: 'Business Development',
    duration: 'Feb 2016 - Sep 2018 (1.8 months)',
    location: 'Noida',
    roleDetail: 'In Nykaa I got to work as a React frontend developer, worked on production bugs and features like Mobile Signup flow implementation, Nykaa Pro, Recent search and search history and their AR makeup implementation with Modiface.',
    companyDetail: 'Magicbricks is a Property portal website where the advertisement is done and I work as an business devlopement .',
    firstLogo: nykaaLogoFirst,
    restLogo: nykaaLogoRest,
    restMargin: 26, // the secound image margin because logo length is different
    backgroundImage: nykaaBackgroundImage,
    projects: ['magicbricks']
  },
  {
    id: 'tailoredtech',
    companyName: 'Easy Consultant',
    link: 'https://www.easyeducationconsultant.in/',
    position: 'Fullstack Developer',
    duration: 'May 2018 - Jan 2020 (1 years & 8 months)',
    location: 'Noida',
    roleDetail: 'In Easy Consultant I got to experience many roles. I was initially working as an Android developer for a year then jumped on to these tech stacks :- Laravel, React-Native and React.',
    companyDetail: 'Easy Consultant Tech was a service based startup specialised in web and mobile development, and had clients like Nykaa, Ezone, Sportobuddy, healthcode, hippily, wok express, etc.<br /> Easy consultant later got acqui-hired by MB.',
    firstLogo: tailoredTechLogoFirst,
    restLogo: tailoredTechLogoRest,
    restMargin: 34,
    backgroundImage: tailoredTechBackgroundImage,
    projects: ['Dal', 'pulse', 'measure', 'wakency', 'benefactory', 'lighthouse']
  },
  {
    id: 'mit',
    companyName: 'College',
    position: 'Android & Web',
    duration: '2015 - 2016 (1 years)',
    location: 'Pune',
    roleDetail: '',
    companyDetail: '',
    firstLogo: mitLogoFirst,
    restLogo: mitLogoRest,
    restMargin: 37,
    backgroundImage: collegeBackgroundImage,
    projects: ['vc_music_player']
  }
];

