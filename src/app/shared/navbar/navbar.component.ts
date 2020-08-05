import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {
  search = new FormControl('');
  constructor() { }

  ngOnInit(): void {
    this.search.valueChanges.pipe(debounceTime(300)).subscribe((resp: string) => {
			this.searchEmiter.emit(resp);
		});
  }
  @Output('search') searchEmiter = new EventEmitter<string>();
}
