import { Component, OnInit, Input, Output } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent implements OnInit {
  title = 'Teacher Form';

  public teacherForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  teacher: number;

  teacherIdentification: number;

  onTeacherChange() {
    this.teacherIdentification = this.teacher;
  }

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

    public showTeacherForm = false;

    data = [];

    studentData = "";

    processForm() {
      //Show Teacher Form data.
      console.log(this.teacherForm.value);
      //Save Data to an array of objects.
      this.data.push( "teacherForm: ", this.teacherForm.value );
      //Save Student data to an array of objects.
      this.studentData = this.teacherForm.value.students;
      //Show data in the array of objects.
      console.log(this.data);
      console.log("Student Data: ", this.studentData);

      return this.showTeacherForm = true;


    }

    addTeacher() {
          var resetForm = <HTMLFormElement>document.getElementById("entireForm")
          resetForm.reset();
          this.showTeacherForm = false;
      };

}
