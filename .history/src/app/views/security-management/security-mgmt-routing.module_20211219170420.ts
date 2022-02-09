import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account.component';

const routes: Routes = [
    {
        path: '',
        data: {
          title: 'Quản lý bảo mật'
        },
        children: [
          {
            path: '',
            redirectTo: 'account'
          },
          {
            path: 'account',
            component: AccountComponent,
            data: {
              title: 'Tài khoản'
            }
          }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SecurityMgmtRoutingModule {}