import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'add-word',
  templateUrl: './add-word.component.html',
  styleUrls: ['./add-word.component.scss'],
})
export class AddWordComponent {
    constructor(
		@Optional() readonly dialogRef: MatDialogRef<AddWordComponent>,
		@Inject(MAT_DIALOG_DATA) readonly dialogData: any
    ) {}

    newWord: string = '';
    translate: string = '';

    onSave() {
        this.dialogRef.close({ word: this.newWord, translate: this.translate});
    }

    OnCancel() {
        this.dialogRef.close();
    }
}
