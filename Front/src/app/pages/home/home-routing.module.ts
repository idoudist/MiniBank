import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from 'src/app/guards/auth.guard';



const routes: Routes = [
    {
        path: '',
        canActivate: [AuthGuard],
        component: HomeComponent,
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeRoutingModule {
}
