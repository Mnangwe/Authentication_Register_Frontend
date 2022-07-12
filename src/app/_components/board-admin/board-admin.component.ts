import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.scss']
})
export class BoardAdminComponent implements OnInit {
  content?: any
  constructor( private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAdminBoard()
      .subscribe({
        next: data => {
          this.content = data
        },
        error: err => {
          this.content = JSON.parse(err.error).message
        }
      })
  }

}
