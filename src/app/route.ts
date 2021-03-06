import { Routes } from "@angular/router";
import { QuizComponent } from "./quiz/quiz.component";
import { RegisterComponent } from "./register/register.component";
import { ResultComponent } from "./result/result.component";


export const appRoutes:Routes=[
{path:'register', component:RegisterComponent},
{path: 'quiz', component:QuizComponent},
{path:'result', component:ResultComponent},
{path:'', redirectTo:'/register', pathMatch:'full'}

];