"use client";

import { useState } from "react";
import { useRecoilState } from "recoil";
import { sendMessageAtom } from "@/app/common/store/chat/chat";

export const ChatForm: React.FC = () => {
  const [message, setMessage] = useState<string>(""); // 入力ボックスのテキストを保持
  const [, setSender] = useRecoilState(sendMessageAtom); // ユーザーが送信したアクションをグローバルに保管

  const sendMessage = async () => {
    if (!message) return;

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          role: "user",
          message: message,
        }),
      });

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const data = await response.json();
      setSender(true); // これでユーザーが送信したというアクションをChatMessageに伝える
    } catch (err) {
      console.error(err);
    }

    setMessage("");
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        padding: 20,
        background: "#fff",
      }}
    >
      <div style={{ display: "flex", gap: 10 }}>
        <input
          style={{
            width: "100%",
            padding: 10,
            borderRadius: 10,
            border: "1px solid #ccc",
          }}
          type="text"
          value={message}
          placeholder="新しいチャットを送る..."
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" && e.nativeEvent.isComposing === false) {
              e.preventDefault();
              sendMessage();
            }
          }}
        />
        <button
          style={{
            padding: 10,
            background: "#006BD6",
            color: "white",
            borderRadius: 10,
            border: "none",
          }}
          onClick={() => {
            sendMessage();
          }}
        >
          送信
        </button>
      </div>
    </div>
  );
};
