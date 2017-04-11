import { Injectable } from '@angular/core';
import { Player } from './player.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class PlayerService {
  players: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.players = angularFire.database.list('players');
  }
  getPlayers() {
    return this.players;
  }
  getPlayer(playerKey) {
    return this.angularFire.database.object('players/' + playerKey);
  }

  addPlayer(newPlayer: Player) {
    this.players.push(newPlayer);
  }
  deletePlayer(playerToDelete) {
    let fbPlayerObj = this.getPlayer(playerToDelete.$key);
    fbPlayerObj.remove();
  }

  updatePlayer(playerToUpdate) {
      let fbPlayerObj = this.getPlayer(playerToUpdate.$key);
      fbPlayerObj.update({
          name: playerToUpdate.name,
          position: playerToUpdate.position,
          playerNumber: playerToUpdate.playerNumber,
          img: playerToUpdate.img
      })

  }


}
