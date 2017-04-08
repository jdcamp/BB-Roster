import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Player } from '../player.model';
import { PlayerService } from '../player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  providers: [PlayerService]
})
export class IndexComponent implements OnInit {
  players: FirebaseListObservable<any[]>;
  constructor(private router: Router, private playerService: PlayerService) {}

  ngOnInit() {
      this.players = this.playerService.getPlayers();
  }
  viewPlayer(player) {
      this.router.navigate(['player', player.$key]);
  }

}
