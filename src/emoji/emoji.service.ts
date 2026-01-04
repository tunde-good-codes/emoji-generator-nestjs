import { Injectable } from "@nestjs/common";

@Injectable()
export class EmojiService {
  getRandomEmoji(index?: number): string {
    const allEmojis = this.emojis();
    const randomIndex = index || Math.floor(Math.random() * allEmojis.length);
    console.log(index);

    return allEmojis[randomIndex] + ` enjoy! ${randomIndex}`;
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
