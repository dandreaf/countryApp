import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-by-region-page',
  standalone: false,

  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {

  public countries: Country[] = [];

  constructor( private CountriesService: CountriesService ) {}

  searchByRegion( region: string ): void {
    this.CountriesService.searchRegion( region )
      .subscribe( (countries: Country[]) => (this.countries = countries));
  };

}
