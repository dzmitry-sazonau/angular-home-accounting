import { User } from './../../shared/modals/user.modal';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from 'app/shared/servives/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'wfm-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  form: FormGroup;


  constructor(
    private userService: UsersService,
    private router: Router,
  ) { }


  ngOnInit() {
    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
      'password': new FormControl(null, [Validators.required, Validators.minLength(4)]),
      'name': new FormControl(null, [Validators.required]),
      'agree': new FormControl(null, [Validators.required, Validators.requiredTrue])
    })
  }

  onSubmit() {
    const {email, password, name} = this.form.value;
    const user: User = {
      email,
      password,
      name
    }
    this.userService.createNewUser(user)
      .subscribe(() => {
        this.router.navigate(['/login'], {
          queryParams: {
            nowCanLogin: true
          }
        })
      })
  }

  forbiddenEmails = (control: FormControl): Promise<any> => {
    return new Promise((resolve) => {
      this.userService.getUserByEmail(control.value)
        .subscribe((user: User) => {
          if (user) {
            resolve({forbiddenEmails: true});
          } else {
            resolve(null)
          }
        })
    })
  }

}

