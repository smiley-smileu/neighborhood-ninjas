
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'other';
  timestamp: string;
}

interface MessageThreadProps {
  contact: {
    id: string;
    name: string;
    avatar?: string;
    taskTitle: string;
  };
  messages: Message[];
}

const MessageThread = ({ contact, messages: initialMessages }: MessageThreadProps) => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [newMessage, setNewMessage] = useState('');
  
  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    
    const message: Message = {
      id: `msg-${Date.now()}`,
      content: newMessage,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    
    setMessages([...messages, message]);
    setNewMessage('');
  };

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="border-b px-4 py-3 flex-shrink-0">
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src={contact.avatar} />
            <AvatarFallback className="bg-ninja-primary text-primary-foreground">
              {contact.name.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div>
            <CardTitle className="text-base">{contact.name}</CardTitle>
            <p className="text-xs text-muted-foreground">Task: {contact.taskTitle}</p>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="flex-grow overflow-auto p-4 space-y-4">
        {messages.map(message => (
          <div 
            key={message.id} 
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div 
              className={`max-w-[80%] px-4 py-2 rounded-2xl ${
                message.sender === 'user' 
                  ? 'bg-ninja-primary text-primary-foreground rounded-tr-sm' 
                  : 'bg-muted rounded-tl-sm'
              }`}
            >
              <p>{message.content}</p>
              <p className={`text-xs ${message.sender === 'user' ? 'text-primary-foreground/70' : 'text-muted-foreground'} text-right mt-1`}>
                {message.timestamp}
              </p>
            </div>
          </div>
        ))}
      </CardContent>
      
      <div className="p-4 border-t mt-auto">
        <form 
          className="flex gap-2" 
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
        >
          <Input
            className="flex-1"
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <Button
            type="submit"
            size="icon"
            className="bg-ninja-primary hover:bg-ninja-primary/90"
          >
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </Card>
  );
};

export default MessageThread;
