import { Component, OnInit } from '@angular/core';
import {NoteService} from '../services/note.service';
import {Note} from '../services/note.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {

  noteList: Note[];
  constructor(private noteService: NoteService, public router: Router) { }

  ngOnInit(): void {
    this.noteList = this.noteService.getNotes();
  }

}
