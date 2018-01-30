import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  notes=[
    {
      id: '1',
      date: '2016-01-01',
      title: 'Ionic 2',
      content: 'Learn the basics of Ionic 2.'
    },
    {
      id: '2',
      date: '2016-01-01',
      title: 'Ionic 2',
      content: 'Learn the basics of Ionic 2.'
    },
    {
      id: '3',
      date: '2016-01-01',
      title: 'Ionic 2',
      content: 'Learn the basics of Ionic 2.'
    }
  ];

  onItemClick(note) {
    //console.log("item-click", note);
    this.navCtrl.push(DetailPage, {
      noteParam: note
    });
  }
}