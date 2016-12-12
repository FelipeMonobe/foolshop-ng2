import { Component } from '@angular/core'
import { LoginService } from './login.service'

@Component({
  selector: 'fs-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  constructor(private _loginService: LoginService) {}

  list = []
  test = this._loginService
    .search('cats')
    .then(r => {
      this.list = r.map(item => item)
    })
}
