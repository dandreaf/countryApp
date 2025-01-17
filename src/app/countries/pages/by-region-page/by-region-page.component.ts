import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { Region } from '../../interfaces/region.type';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'countries-by-region-page',
  standalone: false,

  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent implements OnInit {

  public countries: Country[] = [];
  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', ' Oceania'];
  public selectedRegion?: Region;
  public isLoading: boolean = false;

  constructor( private CountriesService: CountriesService ) {}

  ngOnInit(): void {
    this.countries = this.CountriesService.cacheStore.byRegion.countries;
    this.selectedRegion = this.CountriesService.cacheStore.byRegion.region;
  }

  searchByRegion( region: Region ): void {
    this.selectedRegion = region;
    this.isLoading = true;
    this.CountriesService.searchRegion( region )
      .subscribe( (countries: Country[]) => {
        this.countries = countries;
        this.isLoading = false;
      });
  };

}
