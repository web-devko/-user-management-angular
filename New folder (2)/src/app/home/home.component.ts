import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { PrimeNGConfig } from 'primeng/api';
import { QuoteService } from './quote.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  quote: string | undefined;
  isLoading = false;
  val: string;
  value4: string;
  constructor(private quoteService: QuoteService, private primengConfig: PrimeNGConfig) {}
  text2: string;
  ngOnInit() {
    this.primengConfig.ripple = true;
    this.isLoading = true;
    this.quoteService
      .getRandomQuote({ category: 'dev' })
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((quote: string) => {
        this.quote = quote;
      });
  }
}
