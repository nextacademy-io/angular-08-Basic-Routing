import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterOutlet } from '@angular/router';
import { ClashCardComponent } from './clash-card/clash-card.component';
import { ClashService } from './clash.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ClashCardComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  clashService = inject(ClashService);
  clashes = toSignal(this.clashService.findAll());
}
