import { Component, Input, OnInit } from '@angular/core';
import {
  faBirthdayCake,
  faDatabase,
  faEnvelope,
  faMapMarkedAlt,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input('user') user: any;
  faEnvelope = faEnvelope;
  faDatabase = faDatabase;
  faPhone = faPhone;
  faMapMarkedAlt = faMapMarkedAlt;
  faCake = faBirthdayCake;

  constructor() {}

  ngOnInit(): void {}
}
