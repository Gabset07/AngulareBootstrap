import { FooterComponent } from './components/footer/footer.component';
import { GirafaComponent } from './components/girafa/girafa.component';
import { LeaoComponent } from './components/leao/leao.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'components/inicio',component:InicioComponent},
  {path:'components/leao',component:LeaoComponent},
  {path:'components/girafa',component:GirafaComponent},
  {path:'components/footer',component:FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
