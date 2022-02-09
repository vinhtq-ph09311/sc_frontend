import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SecurityMgmtRoutingModule } from "./security-mgmt-routing.module";
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzModalModule } from 'ng-zorro-antd/modal';

import { AccountComponent } from "./account.component";


@NgModule({
    imports: [
      CommonModule,  
      SecurityMgmtRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      NzCardModule,
      NzTableModule,
      NzDropDownModule,
      NzIconModule,
      NzSwitchModule,
      NzButtonModule,
      NzSelectModule,
      NzDatePickerModule,
      NzFormModule,
      NzInputModule,
      NzCollapseModule,
      NzSpaceModule,
      NzModalModule
    ],
    declarations: [
      AccountComponent
    ]
  })
export class SecurityMgmtModule {}