import React from 'react'
import { BackendIcon, FrontendIcon, OtherIcon } from './icons'
const backendIcon = <BackendIcon style={{ width: 34, height: 44 }} />
const frontendIcon = <FrontendIcon style={{ width: 44, height: 37 }} />
const otherIcon = <OtherIcon style={{ width: 44, height: 42 }} />

export const Profile = {
  image: 'https://avatars3.githubusercontent.com/u/13077861?s=400&u=387637c3b96878442518fb56263c40316456d40f&v=4',
  mediumSlug: '@fatiherdogan',
  name: 'Fatih Erdoğan',
  title: 'Full Stack Developer',
  contact: {
    linkedin: { title: ' /fatiherdogan01', link: 'https://www.linkedin.com/in/fatiherdogan01' },
    github: { title: ' /fatiherdogan01', link: 'https://www.github.com/fatiherdogan01' },
    email: { title: ' fatiherdogan01@gmail.com', link: 'mailto:fatiherdogan01@gmail.com' }
  }
}

export const Skills = [
  {
    title: 'Frontend',
    icon: frontendIcon,
    skill: ['React/Redux', 'JavaScript', 'HTML/CSS', 'Figma', 'PS']

  }, {
    title: 'Backend/Mobil',
    icon: backendIcon,
    skill: ['.NET', 'SwiftUI', 'Kotlin', 'React Native', 'Flutter']
  },
  {
    title: 'Teknolojiler',
    icon: otherIcon,
    skill: ['Unity', 'SQL', 'Machine Learning']
  }
]
export const Projects = [
  {
    name: 'TYT AYT 2021',
    title: 'Mobil Uygulama',
    link: 'https://play.google.com/store/apps/details?id=com.yks.sistemi',
    label: ['Android', 'React Native'],
  }, {
    name: 'Color Wheel',
    title: 'Mobil Oyun',
    link: 'https://play.google.com/store/apps/details?id=com.efsoft.colorwheel',
    label: ['Android', 'Unity'],
  }, {
    name: 'TYT AYT 2021',
    title: 'Mobil Uygulama',
    link: 'https://apps.apple.com/tr/app/tyt-ayt-2021/id1526494035?l=tr',
    label: ['iOS', 'React Native'],
  }, {
    name: 'Fitness Home',
    title: 'Mobil Uygulama',
    link: 'https://play.google.com/store/apps/details?id=com.fitnesshome',
    label: ['Android', 'React Native'],
  },
]





