import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-view-detail',
  templateUrl: './view-detail.page.html',
  styleUrls: ['./view-detail.page.scss'],
})
export class ViewDetailPage implements OnInit {

  public pug: any;

  constructor(private data: DataService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.pug = this.data.getPugById(parseInt(id, 10));
  }

  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'List' : '';
  }
}
