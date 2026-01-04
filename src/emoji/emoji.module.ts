import { Module } from "@nestjs/common";
import { EmojiController } from "./emoji.controller";
import { EmojiService } from "./emoji.service";

@Module({
  providers: [EmojiService],
  controllers: [EmojiController],
  imports: [],
  exports: [],
})
export class EmojiModule {}
