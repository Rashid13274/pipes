import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { ConvertPipe } from './convert.pipe'; // Import the pipe

@Component({
  selector: 'app-root',
  standalone: true, // Marks the component as standalone
  imports: [FormsModule, CommonModule, ConvertPipe], // Import CommonModule here
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  receiverName:string = '';
  paymentDate = '';
  amount!: number;
  hight!:number;
  miles!:number;

  

  onNameChange(event:Event){
    let input = event.target as HTMLInputElement;
    this.receiverName = input.value;

  }

  onDateChange(event:Event){
    let input = event.target as HTMLInputElement;
    this.paymentDate = input.value;

  }

  onAmountChange(event:Event){
    let input = event.target as HTMLInputElement;
    let temp  = input.value;
    this.amount = parseFloat(temp);

  }

  onHightChange(event:Event){
    let input = event.target as HTMLInputElement;
    this.hight = parseFloat(input.value);

  }

  onMilesChange(event:Event){
    let input = event.target as HTMLInputElement;
    this.miles = parseFloat(input.value);
  } 
}
