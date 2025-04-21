import { Component, HostBinding, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { AppService } from "../../services/app.service";
import { TourDetails } from "./tour-details";

@Component({
  selector: 'app-package-details',
  templateUrl: './package-details.component.html',
  styleUrls: ['./package-details.component.scss']
})
export class PackageDetailsComponent implements OnInit {
  packageName!: string;
  faPlus = faPlus as IconProp;
  faMinus = faMinus as IconProp;

  packageInclusion: String[] = [
    '3AC Train Ticket Reservation.',
    'Road Transport Push Back Bus.',
    'Food & Accommodation.',
    'Morning, Night - Tiffin, Tea & Afternoon - Lunch.',
  ];

  packageExclusion: String[] = [
    'Pooja charges in all temples.',
    'Food in train',
    'Local transport charges',
    'Tips & Porter charges',
    'Additional sight seeing other than mentioned in the itinerary',
    'Entrance Fees & Guide charges'
  ];  
  
  tourDetails: TourDetails[] = [
    { tourName: 'Kashi', no_of_days: 12, package_cost: 28500, 
      visitingPlaces: ['Kashi', 'Ayodhya', 'Prayagraj'], 
      dayWiseDetails: [
                        {day: 1, schedule: ['Train Journey From Hyderabad to Kashi.']},
                        {day: 2, schedule: ['Arrival at kashi by afternoon.', 'Kala Bhairav Darshan at.']},
                        {day: 3, schedule: ['Ganga Snan at Kedar Ghat 7:00AM.', 'In the evening enjoy boat ride and Ganga Aarti.', 'Pinda Pradanam/any other pooja (optional).']},
                        {day: 4, schedule: ['Visit and perfom ritual at Kashi Vishwanath Temple.', 'Darshan of Annapurn Devi and Vishalakshi Devi.']},
                        {day: 5, schedule: ['Early morning Departure to Prayagraj.', 'Triveni Sangam Snan.', 'Bade Hanuman and Madhaveshwari Temple.','Pinda Pradanam/Veni Dhana pooja (optional).', 'Return to Kashi by night.']},
                        {day: 6, schedule: ['Visit local temples in Kashi.', 'Tulsi Manas Mandir.', 'Gavalam Temple.', 'Til Bandareshwar Temple.', 'Durga Manas Mandir.', 'Birla Mandir (BHU).']},
                        {day: 7, schedule: ['Early Morning 5AM Varahi Mata Darshan.']},
                        {day: 8, schedule: ['Early Morning Departure to Ayodhya.', 'Visit Sarayu River.', 'Visit Bala Rama Temple.', 'Visit Hanuman Gadi.', 'Return to Kashi.']},
                        {day: 9, schedule: ['Stay in Hotel for personal visit and shopping.']},
                        {day: 10, schedule: ['Visit Manikarnika Ghat for Ganga snan at 12:00PM.']},
                        {day: 11, schedule: ['Departure from Kashi to Hyderabad by train.']},
                        {day: 12, schedule: ['Arrival in Hyderabad by night.']}
                      ]
    },
    { tourName: 'Chardham', no_of_days: 15, package_cost: 42500, 
      visitingPlaces: ['Delhi', 'Haridiwar', 'Yamunotri', 'Uttar Kashi', 'Gangotri', 'Kedarnath', 'Gupta Kashi', 'Badrinath', 'Rishikesh'], 
      dayWiseDetails: [
                        {day: 1, schedule: ['Departure from Secunderabad to Delhi by train.']},
                        {day: 2, schedule: ['Arrival in Delhi.', 'Check-in at hotel.', 'Delhi Local Sight Seeing', 'Night stay in hotel.']},
                        {day: 3, schedule: ['Departure to Haridwar.', 'Manasa Devi and Chandi Devi Shakti Peth Darshan.', 'Attend Ganga Aarti in Evening.']},
                        {day: 4, schedule: ['Departure to Barkot.', 'Reach Barkot by night and hotel check-in.']},
                        {day: 5, schedule: ['Departure to Janaki Chatti.', 'Trekking to Yamunotri Dham darshan and return.', 'Return to Barkot.']},
                        {day: 6, schedule: ['Departure to Uttar Kashi.', 'Kashi Vishwanath Temple Darshan at Uttar Kashi.']},
                        {day: 7, schedule: ['Visit Gangotri Dham.', 'Return to uttar kashi for overnight stay.']},
                        {day: 8, schedule: ['Departure to Sitapur.', 'Hotel Check-in and night stay.']},
                        {day: 9, schedule: ['Visit Kedarnath Dham.']},
                        {day: 10, schedule: ['Return to Sitapur Hotel from Kedarnath Dham.', 'Rest and dinner.']},
                        {day: 11, schedule: ['Departure to Badrinath.', 'Reach Badrinath and Stay at hotel.']},
                        {day: 12, schedule: ['Badrinath Dham Darhsan.', 'Pinda Pradanam.', 'Visit to Managaon village.']},
                        {day: 13, schedule: ['Return to Haridwar via Risikesh.', 'Visit Ram Jula & Laxman Jula at Rishikesh.', 'Reach Haridwar for night stay.']},
                        {day: 14, schedule: ['Departure to Delhi.', 'Return Journey from Delhi to Secunderabad by train.']},
                        {day: 15, schedule: ['Reach Secunderabad.']}
                      ]
    },
    { tourName: 'Puri Jaganath', no_of_days: 5, package_cost: 12500, 
      visitingPlaces: ['Bhubaneshwar', 'Puri', 'Konark', 'Birija Devi'], 
      dayWiseDetails: [
                        {day: 1, schedule: ['Departure from Secunderabad to Bhubaneshwar by train 3:00 AM.', 'Arrival at Bhubaneshwar at 11:30PM.', 'Hotel check-in for night stay.']},
                        {day: 2, schedule: ['Visit Birija Devi.', 'Return to Bhubaneshwar hotel by 2:00PM.', 'Bhubaneshwar Local sight seeing.']},
                        {day: 3, schedule: ['Visit Puri.', 'Puri Jaganath Darshan.', 'Konark Sun Temple.', 'Return to Bhubaneshwar.']},
                        {day: 4, schedule: ['Departure from Bhubaneshwar to Secunderabad by train.']},
                        {day: 5, schedule: ['Arrival at Secunderabad.']}
                      ]
    },
    { tourName: 'Amarnath', no_of_days: 15, package_cost: 37500, 
      visitingPlaces: ['Delhi', 'Naina Devi', 'Chintapurnima', 'Jwalamukhi', 'Bajreshwari', 'Chamunda', 'Katra Vaishno Devi', 'Srinagar', 'Baltal', 'Amritsar', 'Amarnath', 'Kurukshetra'], 
      dayWiseDetails: [
                        {day: 1, schedule: ['Departure from Secunderabad to Delhi by train.']},
                        {day: 2, schedule: ['Arrival at Delhi.', 'Delhi local sight seeing.']},
                        {day: 3, schedule: ['Travel to Naina Devi.', 'Darshan at Naina Devi temple.', 'Hotel Check-in for night stay.']},
                        {day: 4, schedule: ['Travel to Chintapurni and Jwalamukhi.', 'Darshan at Chintapurnima temple.', 'Darshan at Jwalamukhi temple.', 'Hotel Check-in for night stay.']},
                        {day: 5, schedule: ['Travel to Vajreshwari and Chamunda.', 'Darshan at Vajreshwari and Chamunda Devi temple.', 'Reach to Katra.', 'Hotel Check-in for night stay at Katra.']},
                        {day: 6, schedule: ['Trekking 16km from katra to Vaishno Devi.', 'Darshan at Vaishno Devi temple.', 'Return to Katra.']},
                        {day: 7, schedule: ['Travel to Baltal.', 'Hotel Check-in for night stay at Baltal.']},
                        {day: 8, schedule: ['Trek/Helicoptor to Amarnath Cave.', 'Darshan at Amarnath Cave.', 'Return to Baltal.']},
                        {day: 9, schedule: ['Stay at Balat.']},
                        {day: 10, schedule: ['Travel to Srinagar.', 'Srinagar local sight seeing,.', 'Darshan at Shankaracharya temple.', 'visit Dal Lake.', 'Night stay at hotel.']},
                        {day: 11, schedule: ['Travel to Amritsar.', 'Visit Golden temple and Jalianwala Bagh.', 'Night stay at hotel.']},
                        {day: 12, schedule: ['Visit Wagha border.', 'Travel to Kurukshetra.']},
                        {day: 13, schedule: ['Arrival at Kurukshetra.', 'Visit local temples.', 'Travel to Delhi.', 'Hotel Check-in for night stay at Delhi.']},
                        {day: 14, schedule: ['Departure from Delhi to Secunderabad by train.']},
                        {day: 15, schedule: ['Arrial at Secunderabad.']}
                      ]
    },
    { tourName: 'Gujarat', no_of_days: 10, package_cost: 28500, 
      visitingPlaces: ['Ujjain', 'Omkareshwar', 'Statue of Unity', 'Somnath', 'Mul Dwaraka', 'Dwaraka', 'Nagesham', 'Beyt Dwaraka', 'Ahmedhabad'], 
      dayWiseDetails: [
                        {day: 1, schedule: ['Travel to Hyderabd to Ujjain By Train ']},
                        {day: 2, schedule: ['Reached Ujjain.', 'Check-in hotel.', 'Darshan to Ujjain mahakaleshwar.', 'Over night stay.']},
                        {day: 3, schedule: ['Local Temple visit.', 'Night stay.']},
                        {day: 4, schedule: ['Early morning travel to OM KARESHWAR.', 'Darshan to Omkareshwar temple.', 'Darshan to  mamaleshwar.', 'drive to Vadodara and over night stay.']},
                        {day: 5, schedule: ['Drive to Ekta nagar.', 'Visit State of uninty (sardar vallabhai statue).', 'drive to Somanath and over night stay.']},
                        {day: 6, schedule: ['Drashan Somanth darshan and perform pooja.', 'Afternoon drive Dwaraka.', 'Darshan Mul Dwaraka.', 'Reached Dwaraka and check-in hotel.', 'Darshan to Sri krishna bagvan.','over night stay.']},
                        {day: 7, schedule: ['Early mornig Drive to Nagesham to nagesham to ahmedabad.', 'Darshan to Ngesham and performing pooja activites.', 'darshan to beyt dwaraka (krishna temple).', 'drive to ahmedabad over night stay.']},
                        {day: 8, schedule: ['Ahmedabad local sight seeing.', 'Night stay.',]},
                        {day: 9, schedule: ['ReTURN journey to Hydrebad from ahmedabad by tarin.']},
                        {day: 10, schedule: ['Reached Hyderabad.']}
                      ]
    },
    { tourName: 'Nepal', no_of_days: 14, package_cost: 43500, 
      visitingPlaces: ['Naimisharanyam', 'Ayodhya', 'Pokhara', 'Mukthinath', 'Manokamana', 'Kathmandu', 'Janakpuri', 'Kashi'], 
      dayWiseDetails: [
                        {day: 1, schedule: ['Depature from Hyderabad to Lucknow by train.']},
                        {day: 2, schedule: ['Reached lucknow.', 'Drive to Namishanranyam by bus.', 'Hotel check-in for night stay.']},
                        {day: 3, schedule: ['Visit Gomuthi river at 6AM.', 'darshan at Balaji temople.', 'performing Satyanarayana pooja.', 'Night stay']},
                        {day: 4, schedule: ['Morning started travel to Ayodhya.', 'Visit to Sarayu river.', 'bala rama darshan.', 'Hanuman gadi Darshan.', 'Travel to nepal boader(sounali ).', 'Night stay.']},
                        {day: 5, schedule: ['Travel to pokhra.', 'check-in Hotel.', 'Night stay.']},
                        {day: 6, schedule: ['Travel to muktinath by road/flight.', 'Holy bath at mukthinath{108 jaladara).', 'darshan to mukthinath (vishnu bagan).', 'Over night stay at jumsom.']},
                        {day: 7, schedule: ['Return to Pokhra.', 'Checkin to hotel.','local sightseeing.','Over nighth stay.']},
                        {day: 8, schedule: ['Travel to manokamana.', 'Darshan to manokamana by roapway.', 'Driver to kathmandu night stay']},
                        {day: 9, schedule: ['Darshan to Pashupatinath and performing pooja activies.', 'Darshan to Jalnarayan temple.', 'local sightseeing.', 'Over night stay']},
                        {day: 10, schedule: ['Travel to Janakpuri.', 'Darshan to Janaka Mandir.', 'Over night stay.']},
                        {day: 11, schedule: ['Travel to Varanasi.', 'Over night stay.']},
                        {day: 12, schedule: ['Visit kedargaht for Ganga snanam option for pooja performs.', 'Darshan to Vishwanath .', 'Local Temple Darshanam.', 'Visit Ganga harati.']},
                        {day: 13, schedule: ['Return to Hyderabad from Varanasi by Train.']},
                        {day: 14, schedule: ['Reached to Hyderabad']}
                      ]
    },    
  ]
  currentTourDetails: TourDetails | undefined;

  constructor(private router:Router, private route:ActivatedRoute, private appService: AppService) {

    this.appService.setUrl(this.router.url);
    this.appService.currenturl$.subscribe((value) => {
      if (typeof(value) == "string"){
        setTimeout(() => {
          let page = value.split('/')[2];
          this.currentTourDetails = this.tourDetails.find((tour) => {
            let tourNameTemp = tour.tourName;
            return tourNameTemp.replace(" ","").toLowerCase() == page?.toLocaleLowerCase()
          });
          }, 3);
      }
    });
    this.route.params.forEach(e => {
      this.packageName = e.packagename;
      if (this.packageName == undefined || this.packageName == ''){
        this.router.navigateByUrl('packages/kashi')
      }      
    })
   }

  ngOnInit(): void {
  }

}
