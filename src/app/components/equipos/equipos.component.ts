import { Component } from '@angular/core';
import { Team } from '../../models/team';


@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent {
  teamArray: Team[] = [
    { id: 1, name: "Barcelona", stadium: "USA" , webSite: "as", nationality: "as", fundationAge: new Date(1995,11,17), coach: "as", capacity: 3, value: 4},
    { id: 2, name: "Real Madrid", stadium: "USA" , webSite: "", nationality: "", fundationAge: new Date(1995,11,17), coach: "", capacity: 3, value: 4},
    { id: 3, name: "Boca", stadium: "USA" , webSite: "", nationality: "", fundationAge: new Date(1995,11,17), coach: "", capacity: 3, value: 4},
  ];

  selectedTeam: Team = new Team();

  openForEdit(team: Team) {
    this.selectedTeam = team;
  }


  addOrEdit() {
    if (this.selectedTeam.id === 0) {
      this.selectedTeam.id = this.teamArray.length + 1;
      this.teamArray.push(this.selectedTeam);
    }
    this.selectedTeam = new Team();
  }
  delete() {
    if(confirm('¿Estas seguro de eliminar este equipo?')){
      this.teamArray =this.teamArray.filter(x => x != this.selectedTeam);
      this.selectedTeam = new Team();
    }
  }
}
