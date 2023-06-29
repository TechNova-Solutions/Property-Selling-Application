import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  AbstractControlOptions,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { allDistricts } from 'src/app/constants/districts';
import { District } from 'src/app/model/District';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/shared/user.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  http: any;
  registrationForm!: FormGroup;

  constructor(public service: UserService, private formBuilder: FormBuilder) {}

  districts: District[] = allDistricts;

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group(
      {
        userName: ['', Validators.required],
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, this.validateEmail]],
        contactNumber: ['', [Validators.required, Validators.minLength(4)]],
        address: [''],
        district: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(4)]],
        confirmPassword: ['', Validators.required],
      },
      {
        validators: this.comparePasswords,
      } as AbstractControlOptions
    );

    this.registrationForm.reset();
  }

  comparePasswords(formBuilder: FormGroup) {
    let confirmPswrdCtrl = formBuilder.get('confirmPassword');
    let passwordCtrl = formBuilder.get('password');
    if (confirmPswrdCtrl && passwordCtrl) {
      if (
        confirmPswrdCtrl.errors == null ||
        'passwordMismatch' in confirmPswrdCtrl.errors
      ) {
        if (passwordCtrl.value !== confirmPswrdCtrl.value) {
          confirmPswrdCtrl.setErrors({ passwordMismatch: true });
        } else {
          confirmPswrdCtrl.setErrors(null);
        }
      }
    }
  }




  get f(): { [key: string]: AbstractControl } {
    return this.registrationForm.controls;
  }

  validateEmail(control: AbstractControl): { [key: string]: any } | null {
    const emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailReg.test(control.value)) {
      return {
        isValidEmail: {
          value: false,
        },
      };
    }
    return null;
  }


  onSubmit(): void {
    var body: User = {
      UserName: this.registrationForm.value.userName,
      FirstName: this.registrationForm.value.firstName,
      LastName: this.registrationForm.value.lastName,
      Email: this.registrationForm.value.email,
      ContactNumber: this.registrationForm.value.contactNumber,
      Address: this.registrationForm.value.address,
      District: this.registrationForm.value.district,
      Password: this.registrationForm.value.password,
      Role: 'Customer',
    };

    this.service.register(body).subscribe({
      next: (res) => {
        console.log(res);
        this.registrationForm.reset();
      },
      error(err) {
        console.error(err);
      },
    });
  }
}
