import { UserService } from './card/user.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  // title = 'random-card';
  user: any;

  constructor(
    private _userService: UserService,
    private _toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this._userService.getUser().subscribe(
      (data: any) => {
        this.user = data.results[0];
        console.log(this.user);
      },
      (err: any) => {
        this._toastr.error(err.status, 'Opps! Something went wrong');
      }
    );
  }
}
