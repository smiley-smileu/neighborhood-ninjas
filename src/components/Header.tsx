
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { MapPin, Package2, MessageSquare, User } from "lucide-react";

const Header = () => {
  const isMobile = useIsMobile();
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-ninja-primary p-1 text-white">
            <Package2 size={24} />
          </div>
          <Link to="/" className="font-bold text-xl text-ninja-primary">
            Neighborhood Ninjas
          </Link>
        </div>

        {!isMobile ? (
          <nav className="flex items-center gap-6">
            <Link to="/" className="text-sm font-medium hover:text-ninja-primary transition-colors">
              Home
            </Link>
            <Link to="/tasks" className="text-sm font-medium hover:text-ninja-primary transition-colors">
              Tasks
            </Link>
            <Link to="/messages" className="text-sm font-medium hover:text-ninja-primary transition-colors">
              Messages
            </Link>
            <Link to="/profile" className="text-sm font-medium hover:text-ninja-primary transition-colors">
              Profile
            </Link>
            <Button variant="default" className="bg-ninja-primary hover:bg-ninja-primary/90">
              Post Task
            </Button>
          </nav>
        ) : null}
      </div>
      
      {isMobile && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t">
          <div className="container flex justify-between py-2">
            <Link to="/" className="flex flex-col items-center px-4 py-2 text-muted-foreground hover:text-ninja-primary">
              <MapPin size={20} />
              <span className="text-xs">Tasks</span>
            </Link>
            <Link to="/tasks" className="flex flex-col items-center px-4 py-2 text-muted-foreground hover:text-ninja-primary">
              <Package2 size={20} />
              <span className="text-xs">Browse</span>
            </Link>
            <Link to="/messages" className="flex flex-col items-center px-4 py-2 text-muted-foreground hover:text-ninja-primary">
              <MessageSquare size={20} />
              <span className="text-xs">Messages</span>
            </Link>
            <Link to="/profile" className="flex flex-col items-center px-4 py-2 text-muted-foreground hover:text-ninja-primary">
              <User size={20} />
              <span className="text-xs">Profile</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
