import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';

function pseudoMustHaveA(control: AbstractControl): ValidationErrors | null{
  let valeur : string | null = control.value;
  if( valeur && !valeur.includes('a') && !valeur.includes('A') )
    return null;
  
  else
    return {
      "message": "le pseudo doit comprendre un a ou un A"
    }
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  form: FormGroup = new FormGroup({
      'pseudo': new FormControl(null, [Validators.required, Validators.maxLength(20), pseudoMustHaveA]),
      'destinataire': new FormControl('propriétaire'),
      'message': new FormControl()
    }
  )

  services: string[] = ['propriétaire', 'service', 'cuisine']

  constructor(private _service: MessageService, private _router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this._service.envoyerMessage( this.form.value ).subscribe( mess => {
      alert("votre message a bien été envoyé");
      this._router.navigateByUrl("/accueil");
    })
  }

}
