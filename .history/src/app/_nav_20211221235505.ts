import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    title: true,
    name: 'ADMIN SYSTEM - HỆ THỐNG GIÁM SÁT TẬP TRUNG'
  },
  {
    divider: true
  },
  {
    name: 'Bảng điều khiển',
    url: '/dashboard',
    icon: 'icon-speedometer',
  },
  {
    name: 'Quản lý bảo mật',
    url: '/security',
    icon: 'icon-lock',
    children: [
      {
        name: 'Tài khoản',
        url: '/security/account',
        icon: 'icon-user',
        // children: [
        //   {
        //     name: 'Tài khoản',
        //     url: '/security/account',
        //     icon: 'icon-user'
        //   }
        // ]
      }
    ]
  },
];
