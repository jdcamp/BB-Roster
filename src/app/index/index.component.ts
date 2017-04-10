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
})
export class IndexComponent implements OnInit {
  constructor() {}

  ngOnInit() {
  }


}
