import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-load-aspx',
  templateUrl: './load-aspx.component.html',
  styleUrls: ['./load-aspx.component.scss']
})
export class LoadAspxComponent implements OnInit {


  @Input() _URL: string | undefined;

   urlSafe: SafeResourceUrl | undefined;

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit(): void {
     this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this._URL!);
  }

}
