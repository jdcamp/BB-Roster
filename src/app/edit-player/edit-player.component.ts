import { Component, OnInit, Input} from '@angular/core';
import { Player } from '../player.model';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {
    @Input() currentPlayer;

  constructor() { }

  ngOnInit() {
  }

}
