import { Component } from '@angular/core';
import { SupportBoxComponent } from '../../support-box/support-box';

@Component({
  selector: 'app-shape-outside-demo',
  imports: [SupportBoxComponent],
  templateUrl: './shape-outside.html',
  styleUrl: './shape-outside.scss',
})
export class ShapeOutsideDemo {
  readonly paragraphs = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non tempus magna. In et lectus at quam malesuada ullamcorper. Curabitur et faucibus tortor. Sed vitae sagittis erat, in luctus ante. Integer ultricies, eros vitae faucibus varius, velit velit faucibus justo, sed hendrerit enim dui eget orci.',
    'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin in nisl id lorem tincidunt suscipit. Duis a turpis at ipsum fermentum posuere vitae sed nunc. Phasellus eu nunc urna. Aliquam erat volutpat. Pellentesque id sem ac massa rutrum volutpat.',
    'Mauris vitae tempor arcu. Sed sodales, neque id eleifend dapibus, ipsum mi sodales nisl, vel aliquet libero lectus at velit. Etiam in justo sed risus tempor luctus. Integer accumsan, neque eget tempor iaculis, sem nunc sodales quam, sed tristique leo lacus sit amet dolor.',
    'Nunc vitae neque et ipsum ultricies sollicitudin. Donec imperdiet sem vitae sapien elementum viverra. Sed interdum ipsum at est iaculis, nec porta justo feugiat. Duis ultrices nibh vitae nisl pulvinar, nec pulvinar urna aliquam. Phasellus mattis leo quis augue facilisis fringilla.',
    'Fusce eget sem at nibh interdum eleifend. Duis congue massa sed est venenatis, ut tristique mauris sodales. Integer viverra, libero a gravida ullamcorper, velit est varius risus, in facilisis augue mauris sed erat. Suspendisse potenti. Donec posuere consectetur efficitur.',
  ];
}
