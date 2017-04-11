import { Component, OnInit } from '@angular/core';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css'],
  providers: [PlayerService]
})
export class ManagerComponent implements OnInit {

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  }

  submitForm(name: string, position: string, playerNumber, img) {
      if (name === '' || position === '' || playerNumber === '' ) {
          alert('Form not completed');
          return;
      }
      if (img === '') {
          let newPlayer: Player = new Player(name, position, playerNumber);
          this.playerService.addPlayer(newPlayer);
      } else {
          let newPlayer: Player = new Player(name, position, playerNumber, img);
          this.playerService.addPlayer(newPlayer);
      }
  }

}
