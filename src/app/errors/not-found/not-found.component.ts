import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import { User } from 'src/app/_models/user';
import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  loggedIn : boolean = false;

  constructor(private accountService : AccountService ) {
    var loggedUser = accountService.getLoggedInUser();
    this.loggedIn = (loggedUser !== null);
   }

  ngOnInit(): void {
  }

}
