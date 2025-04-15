
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

const TasksMap = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  
  const categories = [
    { id: "all", label: "All Tasks" },
    { id: "groceries", label: "Groceries" },
    { id: "medicine", label: "Medicine" },
    { id: "documents", label: "Documents" },
    { id: "packages", label: "Packages" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={activeCategory === category.id ? "default" : "outline"}
            className={`rounded-full ${activeCategory === category.id ? "bg-ninja-primary hover:bg-ninja-primary/90" : ""}`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.label}
          </Button>
        ))}
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Nearby Tasks</CardTitle>
          <CardDescription>
            Tasks available in your area
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative rounded-lg overflow-hidden border bg-card text-card-foreground shadow">
            <div className="h-[400px] bg-muted relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-muted-foreground">
                  Map view placeholder (requires geolocation integration)
                </p>
              </div>
              
              {/* Map markers */}
              <div className="absolute left-1/4 top-1/3 group">
                <div className="w-6 h-6 bg-ninja-primary rounded-full flex items-center justify-center animate-bounce-subtle cursor-pointer">
                  <MapPin className="h-4 w-4 text-white" />
                </div>
                <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-white p-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity w-48 z-10">
                  <p className="font-bold text-sm">Pickup groceries</p>
                  <p className="text-xs text-muted-foreground">0.8 km away • ₱150</p>
                </div>
              </div>
              
              <div className="absolute right-1/3 bottom-1/4 group">
                <div className="w-6 h-6 bg-ninja-secondary rounded-full flex items-center justify-center animate-bounce-subtle cursor-pointer">
                  <MapPin className="h-4 w-4 text-white" />
                </div>
                <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-white p-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity w-48 z-10">
                  <p className="font-bold text-sm">Deliver documents</p>
                  <p className="text-xs text-muted-foreground">1.2 km away • ₱200</p>
                </div>
              </div>
              
              <div className="absolute right-1/4 top-1/2 group">
                <div className="w-6 h-6 bg-ninja-accent rounded-full flex items-center justify-center animate-bounce-subtle cursor-pointer">
                  <MapPin className="h-4 w-4 text-white" />
                </div>
                <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-white p-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity w-48 z-10">
                  <p className="font-bold text-sm">Pick up medicine</p>
                  <p className="text-xs text-muted-foreground">0.5 km away • ₱80</p>
                </div>
              </div>
              
              {/* Your location */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-8 h-8 bg-ninja-primary rounded-full flex items-center justify-center border-4 border-white">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div className="absolute h-16 w-16 rounded-full bg-ninja-primary/20 animate-ping -top-4 -left-4"></div>
              </div>
            </div>
          </div>
          
          <div className="mt-4 flex justify-center">
            <Badge variant="outline" className="bg-background">
              Location services simulation only. No real GPS data used.
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TasksMap;
