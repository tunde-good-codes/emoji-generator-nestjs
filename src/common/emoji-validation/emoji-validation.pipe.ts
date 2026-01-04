import { BadRequestException, Injectable, PipeTransform } from "@nestjs/common";

@Injectable()
export class EmojiValidationPipe implements PipeTransform {
  transform(value: any) {
    if (!value) {
      return;
    }
    if (isNaN(value)) {
      throw new BadRequestException(
        `faied validation: ${value} is not a number`
      );
    }
    return value;
  }
}
