export interface Mappable {
  location: {
    lat: number;
    lng:number;
  };
  markerContent(): string;
}

export class CustomMap {
  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom:1,
      center: {
        lat:0,
        lng:0
      }
    });
  }

  private googleMap: google.maps.Map;

  addMarker(mappable:Mappable): void{
    const newMarker = new google.maps.Marker({
      map:this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    });

    newMarker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent()
      });
      infoWindow.open(this.googleMap, newMarker);
    })
  }

  /* addCompanyMarker(company:Company):void{
    new google.maps.Marker({
      map:this.googleMap,
      position: {
        lat: company.location.lat,
        lng: company.location.lng
      }
    });
  } */

}
