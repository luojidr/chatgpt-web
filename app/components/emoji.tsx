import EmojiPicker, {
  Emoji,
  EmojiStyle,
  Theme as EmojiTheme,
} from "emoji-picker-react";

import { ModelType } from "../store";

import BotIcon from "../icons/bot.svg";
import BlackBotIcon from "../icons/yf_chat.svg";
import UserChatIcon from "../icons/user_chat.svg";

export function getEmojiUrl(unified: string, style: EmojiStyle) {
  // Whoever owns this Content Delivery Network (CDN), I am using your CDN to serve emojis
  // Old CDN broken, so I had to switch to this one
  // Author: https://github.com/H0llyW00dzZ
  return `https://fastly.jsdelivr.net/npm/emoji-datasource-apple/img/${style}/64/${unified}.png`;
}

export function AvatarPicker(props: {
  onEmojiClick: (emojiId: string) => void;
}) {
  return (
    <EmojiPicker
      width={"100%"}
      lazyLoadEmojis
      theme={EmojiTheme.AUTO}
      getEmojiUrl={getEmojiUrl}
      onEmojiClick={(e) => {
        props.onEmojiClick(e.unified);
      }}
    />
  );
}

export function Avatar(props: { model?: ModelType; avatar?: string }) {
  if (props.model) {
    return (
      <div className="no-dark">
        {props.model?.startsWith("gpt-4") ? (
          <BlackBotIcon
            className="user-avatar"
            style={{ width: "40px", height: "40px" }}
          />
        ) : (
          <BotIcon
            className="user-avatar"
            style={{ width: "50px", height: "50px" }}
          />
        )}
      </div>
    );
  }

  return (
    <div className="no-dark">
      <UserChatIcon
        className="user-avatar"
        style={{ width: "40px", height: "40px" }}
      />
    </div>
  );
}

export function EmojiAvatar(props: { avatar: string; size?: number }) {
  return <Emoji unified={props.avatar} size={40} getEmojiUrl={getEmojiUrl} />;
}
