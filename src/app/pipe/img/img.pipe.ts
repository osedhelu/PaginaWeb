import { Pipe, PipeTransform } from '@angular/core';
import { URL_IMG } from "../../config/config";
@Pipe({
  name: 'img'
})
export class ImgPipe implements PipeTransform {
 
	transform(img: string ): any {
		return `${URL_IMG}/${img}`;
	}

}



