import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { AdminComponent } from './components/admin/admin.component';
import { MatchesComponent } from './components/matches/matches.component';
import { PlayersComponent } from './components/players/players.component';
import { TeamsComponent } from './components/teams/teams.component';
import { MatchinfoComponent } from './components/matchinfo/matchinfo.component';
import { TeamInfoComponent } from './components/team-info/team-info.component';
import { PlayerInfoComponent } from './player-info/player-info.component';
import { ResearchComponent } from './research/research.component';
import { EditMatchComponent } from './edit-match/edit-match.component';
import { EditTeamComponent } from './edit-team/edit-team.component';
import { EditPlayerComponent } from './edit-player/edit-player.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signin', component: LoginComponent },
  { path: 'inscription', component: SignupComponent },
  { path: 'signUpAdmin', component: SignupComponent },
  { path: "addPlayer", component: AddPlayerComponent },
  { path: "addmatch", component: AddMatchComponent },
  { path: "addteam", component: AddTeamComponent },
  { path: "matches", component: MatchesComponent },
  { path: "player", component: PlayersComponent },
  { path: "teams", component: TeamsComponent },
  { path: "admin", component: AdminComponent },
  { path: 'matchInfo/:id', component: MatchinfoComponent },
  { path: 'teamInfo/:id', component: TeamInfoComponent },
  { path: 'playerInfo/:id', component: PlayerInfoComponent },
  { path: 'edit-match/:id', component: EditMatchComponent },
  { path: 'edit-team/:id', component: EditTeamComponent },
  { path: 'edit-player/:id', component: EditPlayerComponent },
  { path: 'research', component: ResearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
