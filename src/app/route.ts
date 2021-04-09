import { Routes } from "@angular/router";
import { AdminComponent } from "./admin/admin.component";
import { AuthGuard } from "./authG/auth.guard";
import { QuizComponent } from "./quiz/quiz.component";
import { RegisterComponent } from "./register/register.component";
import { ResultComponent } from "./result/result.component";


export const appRoutes:Routes=[
{path:'register', component:RegisterComponent},
{path: 'quiz', component:QuizComponent, canActivate:[AuthGuard]},
{path:'result', component:ResultComponent,canActivate:[AuthGuard]},
{path:'', redirectTo:'/register', pathMatch:'full'},
{path:'admin', component:AdminComponent},

];