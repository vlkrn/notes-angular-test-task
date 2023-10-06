import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {NoteComponent} from './note/note.component';

const routes: Routes = [
    {
        path: ':id',
        component: NoteComponent,
    },
    {
        path: '**',
        redirectTo: '/'
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
