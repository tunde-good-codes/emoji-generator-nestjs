import { Controller, Get, Query, Req } from "@nestjs/common";
import { EmojiService } from "./emoji.service";
import { EmojiValidationPipe } from "src/common/emoji-validation/emoji-validation.pipe";
import type { Request } from "express";

@Controller("emoji")
export class EmojiController {
  constructor(private readonly emojiService: EmojiService) {}

  @Get()
  getEmoji(
    @Req() request: Request,
    @Query("index", EmojiValidationPipe) index: number
  ) {
    return {
      emoji: this.emojiService.getRandomEmoji(index),
      browser: request.headers.browser,
    };
  }
}
