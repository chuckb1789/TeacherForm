import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'student',
    templateUrl: 'student.component.html',
})
export class StudentComponent {
    @Input('group')
    public studentForm: FormGroup;

    @Input() teacher: string;
    @Output() teacherChange: EventEmitter<number>;

    constructor() {
      this.teacher = "";
      this.teacherChange = new EventEmitter<number>();
    }

}
