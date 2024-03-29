import { EventEmitter } from "@angular/core";

export class AccountsService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unkown'
    }
  ];
  statusUpdated = new EventEmitter
  
  addAccount(name: string, status: string) {
    this.accounts.push({ name: name, status: status });
  }
  
  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
  }
}