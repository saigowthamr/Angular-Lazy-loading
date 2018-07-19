import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import {  PostsComponent} from './posts.component'


const routes: Routes = [
    { path: "", component: PostsComponent},

];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class PostsRoutingModule { }