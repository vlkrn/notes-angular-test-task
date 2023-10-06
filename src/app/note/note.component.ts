import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Note, NoteService} from '../services/note.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-note',
    templateUrl: './note.component.html',
    styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit, OnDestroy {

    note: Note;
    formGroup: FormGroup;

    subscriptions: Subscription[] = [];

    constructor(private noteService: NoteService, private route: ActivatedRoute, private router: Router) {
    }

    ngOnInit(): void {
        this.subscriptions.push(this.route.params.subscribe((params: Params) => {
            const id = parseInt(params['id'], 10);
            this.note = this.noteService.getNote(id);
            if (!this.note) {
                this.formGroup = new FormGroup({
                    title: new FormControl('', Validators.required),
                    text: new FormControl('', Validators.required)
                });
            }
        }));
    }

    ngOnDestroy() {
        this.subscriptions.forEach(sb => sb.unsubscribe());
    }

    saveNote(): void {
        const newId = Date.now();
        this.noteService.addNote({...this.formGroup.value, id: newId});
        this.router.navigate([newId]);
    }
}
