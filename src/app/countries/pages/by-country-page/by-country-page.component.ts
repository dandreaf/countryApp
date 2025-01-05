import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-by-country-page',
  standalone: false,

  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent implements OnInit {

  public countries: Country[] = [];
  public isLoading: boolean = false;
  public initialValue: string = '';

  constructor( private CountriesService: CountriesService ) {}

  ngOnInit(): void {
    this.countries = this.CountriesService.cacheStore.byCountry.countries;
    this.initialValue = this.CountriesService.cacheStore.byCountry.term;
  };

  searchByCountry( term: string ): void {
    this.isLoading = true;
    this.CountriesService.searchCountry( term )
      .subscribe( (countries: Country[]) => {
        this.countries = countries;
        this.isLoading = false;
      });
  };

};
