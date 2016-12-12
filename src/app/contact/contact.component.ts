import { Component } from '@angular/core'

@Component({
  selector: 'fs-app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent {
  private _personalCard: any
  private _locationCard: any

  public constructor() {
    const birth = new Date('06/08/1990')
    const now = new Date()
    const age = now.getMonth() - birth.getMonth() > 0 ?
      now.getFullYear() - birth.getFullYear() :
      (now.getFullYear() - birth.getFullYear()) - 1

    this._personalCard = {
      info: {
        name: 'Felipe Mikio de Vasconcelos Monobe',
        age,
        country: 'Brazil',
        occupation: 'Fullstack developer',
        email: 'fmvmonobe@gmail.com',
        facebook: 'https://www.facebook.com/felipe.monobe',
        linkedin: 'https://br.linkedin.com/pub/felipe-monobe/68/8a8/5b8'
      },
      options: {
        title: 'Personal',
        icon: 'face'
      }
    }
    this._locationCard = {
      info: {
        address: '932, Manuel Jacinto St.',
        location: 'São Paulo, SP - 05624-001',
        phone: '(11) 3742-1287'
      },
      options: {
        title: 'Location',
        icon: 'room',
        valuesOnly: true
      }
    }
  }
}
