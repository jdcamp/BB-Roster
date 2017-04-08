import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Player } from '../Player.model';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-player-page',
  templateUrl: './player-page.component.html',
  styleUrls: ['./player-page.component.css']
})
export class PlayerPageComponent implements OnInit {
  playerId: number = null;
  playerToDisplay: Player;
  constructor(private route: ActivatedRoute, private location: Location, private playerService: PlayerService) { }
  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.playerId = parseInt(urlParameters['id'], 10);
    });
    this.playerToDisplay = this.playerService.getPlayer(this.playerId);

  }
}
