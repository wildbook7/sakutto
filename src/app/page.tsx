import { ChatForm } from "@/app/components/chat/ChatForm";
import { ChatMessage } from "@/app/components/chat/ChatMessage";

export default function Home() {
  return (
    <>
      <ChatMessage />
      <ChatForm />
    </>
  );
}
