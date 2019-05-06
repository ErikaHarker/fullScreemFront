import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TriggerbottonComponent } from './triggerbotton/triggerbotton.component';


const routes: Routes = [
  { path: '', component: TriggerbottonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
