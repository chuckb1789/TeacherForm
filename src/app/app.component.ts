import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent implements OnInit {
  title = 'Teacher Form';

  public teacherForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    //build our form here.
    this.teacherForm = this.fb.group({
      teacherName: [""],
      teacherID: [""],
      school: [""],
      students: this.fb.array([])

    });

    this.addStudent();

    console.log(this.teacherForm);
  }

  initStudent() {
        return this.fb.group({
            name: ['', Validators.required],
            teacherID: [''],
            numFriends: [''],
        });
    }

  addStudent() {
        const control = <FormArray>this.teacherForm.controls['students'];
        const addrCtrl = this.initStudent();

        control.push(addrCtrl);
    };

    removeStudent(i: number) {
        const control = <FormArray>this.teacherForm.controls['students'];
        control.removeAt(i);
    };

    processForm() {
      console.log(this.teacherForm.value);
    }

}
