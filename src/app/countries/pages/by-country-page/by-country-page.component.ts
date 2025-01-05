import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-by-country-page',
  standalone: false,

  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {

  public countries: Country[] = [];

  constructor( private CountriesService: CountriesService ) {}

  searchByCountry( term: string ): void {
    this.CountriesService.searchCountry( term )
      .subscribe( (countries: Country[]) => (this.countries = countries));
  };

};
