import { Injectable } from "@nestjs/common";

@Injectable()
export class EmojiService {
  getRandomEmoji(): string {
    const allEmojis = this.emojis();
    const index = Math.floor(Math.random() * allEmojis.length);

    return allEmojis[index] + ` enjoy! ${index}`;
  }
  emojis() {
    return [
      "😀",
      "😃",
      "😄",
      "😁",
      "😆",
      "😅",
      "😂",
      "🤣",
      "😊",
      "😇",
      "🙂",
      "🙃",
      "😉",
      "😌",
      "😍",
      "🥰",
      "😘",
      "😗",
      "😙",
      "😚",
      "☀️",
    ];
  }
}
