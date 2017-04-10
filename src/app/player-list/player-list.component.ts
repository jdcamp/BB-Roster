import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css'],
  providers: [PlayerService]

})
export class PlayerListComponent implements OnInit {
    players: FirebaseListObservable<any[]>;
    currentRoute: string = this.router.url;

    constructor(private router: Router, private playerService: PlayerService) {}

    ngOnInit() {
        this.players = this.playerService.getPlayers();
    }
    viewPlayer(player) {
        this.router.navigate(['player', player.$key]);
    }

}
