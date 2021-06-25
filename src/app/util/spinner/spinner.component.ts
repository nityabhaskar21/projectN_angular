import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { LoadingService } from '../loading.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
  showSpinner: boolean = false;

  constructor(
    private loadingService: LoadingService,
    private cdRef: ChangeDetectorRef
  ) {
    this.init();
  }

  ngOnInit(): void {}

  init() {
    this.loadingService.loadingS.subscribe(status => {
      this.showSpinner = status === true;
      this.cdRef.detectChanges();
    });
  }
}
