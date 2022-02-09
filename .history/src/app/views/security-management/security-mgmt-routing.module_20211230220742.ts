import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account.component';

const routes: Routes = [
    {
        path: '',
        data: {
          title: 'Security Management'
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
              title: 'Account'
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