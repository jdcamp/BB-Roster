import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Player } from '../Player.model';
import { PlayerService } from '../player.service';
import { FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-player-page',
  templateUrl: './player-page.component.html',
  styleUrls: ['./player-page.component.css'],
  providers: [PlayerService]
})
export class PlayerPageComponent implements OnInit {
  playerId: string;
  playerToDisplay;
  constructor(private route: ActivatedRoute, private location: Location, private playerService: PlayerService) { }
  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.playerId = urlParameters['id'];
    });
    this.playerToDisplay = this.playerService.getPlayer(this.playerId);

  }
}
