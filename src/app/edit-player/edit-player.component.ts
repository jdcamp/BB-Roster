import { Component, OnInit, Input} from '@angular/core';
import { Player } from '../player.model';
<<<<<<< HEAD
import { PlayerService} from '../player.service';
=======
>>>>>>> c8529ab83508a1f19ea1c63be0df1dd10c2ed086

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
<<<<<<< HEAD
  styleUrls: ['./edit-player.component.css'],
  providers: [PlayerService]
=======
  styleUrls: ['./edit-player.component.css']
>>>>>>> c8529ab83508a1f19ea1c63be0df1dd10c2ed086
})
export class EditPlayerComponent implements OnInit {
    @Input() currentPlayer;

<<<<<<< HEAD
  constructor(private playerService: PlayerService) { }
=======
  constructor() { }
>>>>>>> c8529ab83508a1f19ea1c63be0df1dd10c2ed086

  ngOnInit() {
  }

<<<<<<< HEAD
  deletePlayerButton(player) {
      this.playerService.deletePlayer(player);
  }

=======
>>>>>>> c8529ab83508a1f19ea1c63be0df1dd10c2ed086
}
