import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'star'
})
export class StarPipe implements PipeTransform {

  transform(ch: string) {
    let voy = ["A", "E", "U", "I", "O", "Y", "a", "e", "u", "i", "o", "y"];
    let result = "";
    for (let i = 0; i < ch.length; i++) {
      let x = ch[i];
      for (let j = 0; j < voy.length; j++) {
        if (ch[i] == voy[j]) {
          x = "*";
          break

        };
      }
      result = result + x;
    }
    return result;
  }

}
