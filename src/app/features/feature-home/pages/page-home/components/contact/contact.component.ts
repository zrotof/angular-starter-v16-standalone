import { Component, ViewEncapsulation } from '@angular/core';
import { NgIf } from '@angular/common';

import { Subscription, finalize } from 'rxjs';

import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MailService } from 'src/app/core/services/mail/mail.service';

import {
  faPhone,
  faEnvelope,
  faPaperPlane,
  faHandshakeSimple,
  faTriangleExclamation
}from '@fortawesome/free-solid-svg-icons'

@Component({
    selector: 'app-contact',
    imports: [
        NgIf,
        ToastModule,
        FontAwesomeModule,
        ReactiveFormsModule,
        ProgressSpinnerModule
    ],
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
    providers: [MessageService],
    encapsulation: ViewEncapsulation.None
})
export class ContactComponent {

  faPhone = faPhone;
  faEnvelope = faEnvelope;
  faPaperPlane = faPaperPlane;
  faHandshakeSimple = faHandshakeSimple ;
  faTriangleExclamation = faTriangleExclamation;

  contactForm !: FormGroup;
  isContactFormSubmitted = false;
  error = false;
  success = false;
  isContactFormSubmittedAndNotErrorOnClientSide = false; 
  
  subscrition !: Subscription;

  constructor(
    private fb: FormBuilder, 
    private mailService: MailService, 
    private messageService: MessageService
  ){ }

  ngOnInit(): void {
    this.initContactForm();
  }

  initContactForm() : void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: [''],
      message: ['', [Validators.required, Validators.minLength(15)]]
    })
  }

  // convenience getter for easy access to form fields
  get f() { return this.contactForm.controls; }

  // Function used in contact section 
  onSubmitContactForm(){
    this.isContactFormSubmitted = true;

    // stop here if form is invalid
    if (this.contactForm.invalid) {
        return;
    }

    this.isContactFormSubmittedAndNotErrorOnClientSide = true;

    this.subscrition = this.mailService.sendMail(JSON.stringify(this.contactForm.value))
    .pipe(finalize(() => this.isContactFormSubmittedAndNotErrorOnClientSide = false))
    .subscribe({
      next : () => {
        const message = {
          icon : this.faHandshakeSimple,
          summary : "j'ai bien reçu votre message",
          details : "Je vous recontacterai très prochainement.",
          greetings : "À tout de suite !"
        }

        this.messageService.add({ styleClass: 'successMessage', severity:"success", sticky: true, data: message});
        this.onReset();
      },
      error : () => {
        const message = {
          icon : this.faTriangleExclamation,
          summary : "Erreur lors de l'envoi",
          details : "veuillez re-essayer ou écrivez-mois directement au 0783189171 ou directement à l'adresse mail manduel21@gmail.com .",
          greetings : "Merci !"
        }
        
        this.messageService.add({ styleClass: 'errorMessage', severity:"error", sticky: true, data: message});
      }
    });
  }

  closeToast() {
    this.messageService.clear();
  }

  //Reset the form
  onReset() {
    this.isContactFormSubmitted = false;
    this.contactForm.reset();
  }

  ngOnDestroy() {
    this.subscrition.unsubscribe();
  }
}
