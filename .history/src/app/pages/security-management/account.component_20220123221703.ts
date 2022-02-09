import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Account } from '../../model/account/account';
import { AccountService } from '../../services/account/account.service';


@Component({
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  total = 1;
  listAccount: Account[] = [];
  loading = true;
  pageSize = 10;
  pageIndex = 1;

  hiddenAdvancedSearchForm = true;

  accountForm!: FormGroup;
  listOfControl: Array<{ id: number; controlInstance: string }> = [];

  constructor(private fb: FormBuilder, private accountService: AccountService) {}

  ngOnInit(): void {
    this.getListAccount(this.pageIndex, this.pageSize, null, null);
    this.accountForm = this.fb.group({});
    this.addField();
  }

  visible = false;

  toggleCollapse(): void {
    this.hiddenAdvancedSearchForm = !this.hiddenAdvancedSearchForm;
  }

  isVisible = false;

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  addField(e?: MouseEvent): void {
    if (e) {
      e.preventDefault();
    }
    const id = this.listOfControl.length > 0 ? this.listOfControl[this.listOfControl.length - 1].id + 1 : 0;

    const control = {
      id,
      controlInstance: `role${id}`
    };
    const index = this.listOfControl.push(control);
    console.log(this.listOfControl[this.listOfControl.length - 1]);
    this.accountForm.addControl(
      this.listOfControl[index - 1].controlInstance,
      new FormControl(null, Validators.required)
    );
  }

  removeField(i: { id: number; controlInstance: string }, e: MouseEvent): void {
    e.preventDefault();
    if (this.listOfControl.length > 1) {
      const index = this.listOfControl.indexOf(i);
      this.listOfControl.splice(index, 1);
      console.log(this.listOfControl);
      this.accountForm.removeControl(i.controlInstance);
    }
  }


  getListAccount(pageIndex: number, pageSize: number, sortField: string | null, sortOrder: string | null) : void {
      this.loading = true;
      this.accountService.getListAccount(pageIndex, pageSize, sortField, sortOrder).subscribe((response : any) => {
      console.log(response);

      this.loading = false;
      this.total = response.response_data.total_element;
      this.listAccount = response.response_data.data;
    });
  }
  
}