import { Component } from '@angular/core';
import { AccountsService } from './accounts.service';import { AccountComponent } from './account/account.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountsService, AccountComponent]
})
export class AppComponent {
  accounts: { name: string, status: string }[] = [];

  constructor(private accountsService: AccountsService) { }
  
  ngOnInit() {
    this.accounts = this.accountsService.accounts;
  }

}
