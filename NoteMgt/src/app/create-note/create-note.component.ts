import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Note } from '../Models/Note';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent implements OnInit {

  public note = "";
  public reminderTime = "";
  public noteType = 0;


  constructor(private cs: CommonService, private router: Router) { }

  ngOnInit(): void {
  }

  public SaveNote() {
    if (this.note.trim() === "") {
      alert("Please Provide Note");
      return;
    }
    if (this.noteType <= 0) {
      alert("Please Provide Note Type");
      return;
    }


    let note = new Note();
    note.noteMessage = this.note;
    note.noteTypeInt = this.noteType;
    note.reminderTime = new Date(this.reminderTime);

    this.cs.Save(note).subscribe((data) => {
      let note = data as Note;
      if (note.id > 0) {
        alert("Success");
        this.router.navigate(["/dashboard"]);
      }
      else {
        alert("Failed");
      }
    })
  }

}
