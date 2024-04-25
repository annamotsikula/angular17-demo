import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  // template: '<h2>Angular Demo Title</h2>',
  styleUrl: './app.component.scss',
  // styles: [
  //   'h1 {color: red};'
  // ]
})
export class AppComponent {
  title = 'ng-project-04';
}
