import { Component, OnInit } from '@angular/core';
import { ResourceService } from '../services/resource.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resource-api',
  imports: [CommonModule],
  templateUrl: './resource-api.component.html',
  styleUrl: './resource-api.component.scss',
})
export class ResourceApiComponent implements OnInit {
  apiData: any;

  constructor(private _resourceService: ResourceService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    // this._resourceService.getAllData().subscribe((res) => {
    //   console.log(res);
    //   this.apiData = res;
    // });

    // this.apiData = this._resourceService.rxResourceData;

    this.apiData = this._resourceService.resourceData;
  }
}
