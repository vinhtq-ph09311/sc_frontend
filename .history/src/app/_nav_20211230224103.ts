import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    title: true,
    name: 'ADMIN SYSTEM - MONITORING AND WARNING SYSTEM'
  },
  {
    divider: true
  },
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
  },
  {
    name: 'Security',
    url: '/security',
    icon: 'icon-lock',
    children: [
      {
        name: 'Account',
        url: '/security/account',
        icon: 'icon-user ml-2'
      }
    ]
  },
];
