import { useState, useEffect, useRef } from "react";
import { useChatHistory, useSendMessage } from "@/hooks/use-chat";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bot, Send, User as UserIcon, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import ReactMarkdown from "react-markdown";

interface DashboardChatProps {
    sessionId: string | null;
    initialMessage?: string;
}

export function DashboardChat({ sessionId, initialMessage }: DashboardChatProps) {
    const { data: chatHistory, isLoading: isChatLoading } = useChatHistory(sessionId || "");
    const sendMessage = useSendMessage();
    const [message, setMessage] = useState("");
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [chatHistory, sendMessage.isPending]);

    const handleSendChat = (e: React.FormEvent) => {
        e.preventDefault();
        if (!message.trim() || !sessionId) return;

        sendMessage.mutate({ sessionId, message }, {
            onSuccess: () => setMessage("")
        });
    };

    return (
        <Card className="h-full flex flex-col shadow-xl border-primary/20 bg-card/50 backdrop-blur-sm overflow-hidden min-h-[400px]">
            <CardHeader className="pb-3 border-b border-primary/10 bg-primary/5">
                <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-primary text-base">
                        <Bot className="w-5 h-5 animate-pulse" />
                        SynthMind AI Assistant
                    </div>
                    <div className="px-2 py-0.5 rounded bg-primary/10 border border-primary/20 text-[10px] font-bold text-primary uppercase tracking-tighter">
                        Live AI Audit
                    </div>
                </CardTitle>
            </CardHeader>

            <CardContent className="flex-1 flex flex-col p-0 min-h-0 bg-transparent">
                <ScrollArea className="flex-1 p-4" ref={scrollRef}>
                    <div className="space-y-4">
                        {/* Initial greeting or automated report if history is empty */}
                        {(!chatHistory || chatHistory.length === 0) && (
                            <div className="flex gap-3 flex-row">
                                <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                    <Bot size={14} />
                                </div>
                                <div className="bg-white/50 backdrop-blur-sm text-foreground border border-primary/10 rounded-2xl px-4 py-2 rounded-tl-none shadow-sm">
                                    <div className="prose prose-sm dark:prose-invert max-w-none">
                                        <ReactMarkdown>
                                            {initialMessage || "Based on current telemetry, your system will not survive organic growth. Reviewing your technical trajectories now... 🦾\n\nAsk me about your latency trajectories, hardware bottlenecks, or scalability risks."}
                                        </ReactMarkdown>
                                    </div>
                                </div>
                            </div>
                        )}

                        {chatHistory?.map((msg: any) => (
                            <div
                                key={msg.id}
                                className={cn(
                                    "flex gap-3 text-sm",
                                    msg.role === "user" ? "flex-row-reverse" : "flex-row"
                                )}
                            >
                                <div className={cn(
                                    "w-8 h-8 rounded-full flex items-center justify-center shrink-0",
                                    msg.role === "user" ? "bg-muted text-foreground" : "bg-primary/10 text-primary border border-primary/20"
                                )}>
                                    {msg.role === "user" ? <UserIcon size={14} /> : <Bot size={14} />}
                                </div>
                                <div className={cn(
                                    "rounded-2xl px-4 py-2 max-w-[85%] border shadow-sm",
                                    msg.role === "user"
                                        ? "bg-primary text-primary-foreground border-primary rounded-tr-none"
                                        : "bg-white/50 backdrop-blur-sm text-foreground border-primary/10 rounded-tl-none"
                                )}>
                                    <div className="prose prose-sm dark:prose-invert max-w-none">
                                        <ReactMarkdown>{msg.content}</ReactMarkdown>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {sendMessage.isPending && (
                            <div className="flex gap-3 flex-row">
                                <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                                    <Bot size={14} />
                                </div>
                                <div className="bg-primary/5 border border-primary/10 rounded-2xl px-4 py-3 rounded-tl-none flex items-center">
                                    <div className="flex space-x-1">
                                        <div className="w-2 h-2 bg-primary/40 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                                        <div className="w-2 h-2 bg-primary/40 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                                        <div className="w-2 h-2 bg-primary/40 rounded-full animate-bounce"></div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </ScrollArea>

                <div className="p-4 border-t border-primary/10 bg-muted/20">
                    <form onSubmit={handleSendChat} className="flex gap-2">
                        <Input
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Ask about architectural risks..."
                            className="flex-1 bg-background border-primary/20 focus-visible:ring-primary/20"
                            disabled={sendMessage.isPending || !sessionId}
                        />
                        <Button size="icon" type="submit" disabled={sendMessage.isPending || !message.trim() || !sessionId} className="shadow-lg shadow-primary/20">
                            <Send className="w-4 h-4" />
                        </Button>
                    </form>
                </div>
            </CardContent>
        </Card>
    );
}
