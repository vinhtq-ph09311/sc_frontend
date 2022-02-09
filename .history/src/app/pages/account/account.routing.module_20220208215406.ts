import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountListComponent } from './components/account-list/account-list.component';


const routes: Routes = [
    {
        path: '',
        data: {
          title: 'Security'
        },
        children: [
          {
            path: '',
            redirectTo: 'account'
          },
          {
            path: 'account',
            component: AccountListComponent,
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
export class AccountRoutingModule {}