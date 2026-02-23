import { Routes } from "@angular/router";
import { authGuard } from "../../core/guards/auth.guard";
import { DashboardComponent } from "./dashboard/dashboard.component";

export const DASHBOARD_ROUTES: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard]
  }
];
