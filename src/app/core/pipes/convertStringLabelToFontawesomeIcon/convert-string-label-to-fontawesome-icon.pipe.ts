import { Pipe, PipeTransform } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import {
  faBriefcase,
  faHourglass
} from '@fortawesome/free-solid-svg-icons';

@Pipe({
  name: 'convertStringLabelToFontawesomeIcon',
  standalone : true
})
export class ConvertStringLabelToFontawesomeIconPipe implements PipeTransform {

  transform(value: string): IconProp {
    switch (value) {
      case 'faBriefcase':
        return faBriefcase
      case 'faHourglass':
        return faHourglass
      default:
        return faHourglass;
    }
  }

}
