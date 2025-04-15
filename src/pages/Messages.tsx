
import { useState } from "react";
import Header from "@/components/Header";
import MessageThread from "@/components/MessageThread";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

// Sample data
const contacts = [
  {
    id: "contact1",
    name: "Maria Santos",
    taskTitle: "Pick up medicine from Mercury Drug",
    lastMessage: "I'm on my way to pickup the medicine now",
    timestamp: "10:25 AM",
    unread: 2,
  },
  {
    id: "contact2",
    name: "Juan Dela Cruz",
    taskTitle: "Deliver documents to Makati office",
    lastMessage: "Thanks for accepting my task!",
    timestamp: "Yesterday",
    unread: 0,
  },
  {
    id: "contact3",
    name: "Anna Reyes",
    taskTitle: "Pick up food order from Jollibee",
    lastMessage: "The food is ready for pickup",
    timestamp: "2 days ago",
    unread: 0,
  },
];

// Sample messages for the first contact
const sampleMessages = [
  {
    id: "msg1",
    content: "Hi! Thanks for accepting my task.",
    sender: "other",
    timestamp: "10:10 AM",
  },
  {
    id: "msg2",
    content: "No problem! Happy to help. When do you need the medicine?",
    sender: "user",
    timestamp: "10:12 AM",
  },
  {
    id: "msg3",
    content: "I need it today if possible. The pharmacy closes at 9 PM.",
    sender: "other",
    timestamp: "10:15 AM",
  },
  {
    id: "msg4",
    content: "I'll pick it up this afternoon around 4 PM. Is that okay?",
    sender: "user",
    timestamp: "10:18 AM",
  },
  {
    id: "msg5",
    content: "That's perfect! Thank you so much!",
    sender: "other",
    timestamp: "10:20 AM",
  },
  {
    id: "msg6",
    content: "I'm on my way to pickup the medicine now",
    sender: "user",
    timestamp: "10:25 AM",
  },
];

const Messages = () => {
  const [selectedContact, setSelectedContact] = useState(contacts[0]);
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredContacts = contacts.filter(contact => 
    contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.taskTitle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 max-w-7xl">
        <h1 className="text-3xl font-bold mb-8">Messages</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[calc(100vh-16rem)]">
          <div className="md:col-span-1 flex flex-col h-full">
            <div className="mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search conversations..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            
            <Card className="flex-grow overflow-hidden flex flex-col">
              <CardHeader className="p-4 border-b">
                <h2 className="font-semibold text-lg">Recent Conversations</h2>
              </CardHeader>
              <CardContent className="p-0 flex-grow overflow-auto">
                <ul className="divide-y">
                  {filteredContacts.map(contact => (
                    <li 
                      key={contact.id}
                      className={`px-4 py-3 cursor-pointer hover:bg-muted transition-colors ${
                        selectedContact.id === contact.id ? 'bg-ninja-light' : ''
                      }`}
                      onClick={() => setSelectedContact(contact)}
                    >
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarFallback className="bg-ninja-primary text-primary-foreground">
                            {contact.name.slice(0, 2).toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-grow min-w-0">
                          <div className="flex justify-between items-center">
                            <h3 className="font-medium truncate">{contact.name}</h3>
                            <span className="text-xs text-muted-foreground whitespace-nowrap ml-1">
                              {contact.timestamp}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground truncate">
                            {contact.taskTitle}
                          </p>
                          <p className="text-sm truncate">
                            {contact.lastMessage}
                          </p>
                        </div>
                        {contact.unread > 0 && (
                          <div className="w-5 h-5 bg-ninja-primary rounded-full flex items-center justify-center">
                            <span className="text-xs text-white">{contact.unread}</span>
                          </div>
                        )}
                      </div>
                    </li>
                  ))}
                  
                  {filteredContacts.length === 0 && (
                    <li className="px-4 py-8 text-center">
                      <p className="text-muted-foreground">No conversations found</p>
                    </li>
                  )}
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className="md:col-span-2 h-full">
            <MessageThread 
              contact={{
                id: selectedContact.id,
                name: selectedContact.name,
                taskTitle: selectedContact.taskTitle,
              }}
              messages={sampleMessages}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Messages;
