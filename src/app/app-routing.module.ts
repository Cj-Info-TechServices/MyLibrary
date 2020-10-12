import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBooksComponent } from './add-books/add-books.component';
import { DashBoardComponent} from "./dash-board/dash-board.component";
import { PendingReadsComponent } from './pending-reads/pending-reads.component';
import { ReadsComponent } from './reads/reads.component';
import { UpdateBookStatusComponent } from './update-book-status/update-book-status.component';


const routes: Routes = [{path:'', component: DashBoardComponent},
                        {path:'reads', component: ReadsComponent},
                        {path:'dashboard', component: DashBoardComponent},
                        {path: 'pendingReads', component: PendingReadsComponent},
                        {path: 'addBooks', component: AddBooksComponent},
                        {path: 'updateBookStatus', component: UpdateBookStatusComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
