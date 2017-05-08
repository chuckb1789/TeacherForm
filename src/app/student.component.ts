import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'student',
    templateUrl: 'student.component.html',
})
export class StudentComponent {
    @Input('group')
    public studentForm: FormGroup;
}
