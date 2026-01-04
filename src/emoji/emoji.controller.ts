import { Controller, Get } from "@nestjs/common";
import { EmojiService } from "./emoji.service";

@Controller("emoji")
export class EmojiController {
  constructor(private readonly emojiService: EmojiService) {}

  @Get()
  getRandomEmoji() {
    return this.emojiService.getRandomEmoji();
  }
}
