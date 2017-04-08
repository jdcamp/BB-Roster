import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Player } from '../Player.model';

@Component({
  selector: 'app-player-page',
  templateUrl: './player-page.component.html',
  styleUrls: ['./player-page.component.css']
})
export class PlayerPageComponent implements OnInit {
  playerNumber: number = null;
  constructor(private route: ActivatedRoute, private location: Location) { }
  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.playerNumber = parseInt(urlParameters['id'], 10);
    });

  }
}
