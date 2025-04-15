
import { useState } from "react";
import Header from "@/components/Header";
import TaskCard, { Task } from "@/components/TaskCard";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SlidersHorizontal, Search } from "lucide-react";

// Sample data for demonstration
const allTasks: Task[] = [
  {
    id: "task1",
    title: "Pick up medicine from Mercury Drug",
    description: "Need someone to pick up my prescription medication from Mercury Drug in Alabang Town Center. It's already paid for, just need pickup and delivery to my home.",
    pickup: "Mercury Drug, Alabang Town Center",
    dropoff: "Ayala Alabang Village",
    fee: 100,
    status: "open",
    timePosted: "10 minutes ago",
    distance: 1.2,
  },
  {
    id: "task2",
    title: "Deliver documents to Makati office",
    description: "Need these important documents delivered to our Makati office by 3pm today. Package is small and light.",
    pickup: "BF Homes, Parañaque",
    dropoff: "Ayala Ave, Makati",
    fee: 250,
    status: "open",
    timePosted: "45 minutes ago",
    distance: 2.5,
  },
  {
    id: "task3",
    title: "Pick up food order from Jollibee",
    description: "Can someone pick up my Jollibee order? It's already paid for online. Just pick up and deliver to my location.",
    pickup: "Jollibee, SM Southmall",
    dropoff: "Las Piñas City Hall",
    fee: 80,
    status: "open",
    timePosted: "30 minutes ago",
    distance: 0.8,
  },
  {
    id: "task4",
    title: "Groceries from Robinsons Supermarket",
    description: "Need someone to pick up my grocery order. It's a small order with about 5 items, already paid online. Just show the receipt at collection.",
    pickup: "Robinsons Supermarket, Las Piñas",
    dropoff: "Almanza Uno, Las Piñas",
    fee: 120,
    status: "open",
    timePosted: "1 hour ago",
    distance: 1.5,
  },
  {
    id: "task5",
    title: "Return package to Lazada Hub",
    description: "Need help returning this package to the Lazada return hub. Package is medium-sized but light. Return code is already generated.",
    pickup: "Pilar Village, Las Piñas",
    dropoff: "Lazada Hub, SM Southmall",
    fee: 100,
    status: "accepted",
    timePosted: "2 hours ago",
    distance: 2.1,
  },
  {
    id: "task6",
    title: "Pickup birthday cake from Red Ribbon",
    description: "Need someone to pick up a pre-ordered birthday cake from Red Ribbon. It's paid for and reserved under the name Maria Santos.",
    pickup: "Red Ribbon, BF Resort Village",
    dropoff: "Phase 1, BF Homes",
    fee: 100,
    status: "picked",
    timePosted: "3 hours ago",
    distance: 3.2,
  },
];

const Tasks = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterDistance, setFilterDistance] = useState("all");
  
  // Filter tasks based on search query and distance filter
  const filteredTasks = allTasks.filter(task => {
    // Search filter
    const matchesSearch = 
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.pickup.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.dropoff.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Distance filter
    let matchesDistance = true;
    if (filterDistance === "1km") {
      matchesDistance = task.distance <= 1;
    } else if (filterDistance === "3km") {
      matchesDistance = task.distance <= 3;
    } else if (filterDistance === "5km") {
      matchesDistance = task.distance <= 5;
    }
    
    return matchesSearch && matchesDistance;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 max-w-7xl pb-24">
        <h1 className="text-3xl font-bold mb-8">Browse Tasks</h1>
        
        <div className="mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search tasks..."
                className="pl-10"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
            </div>
            <Button className="bg-ninja-primary hover:bg-ninja-primary/90 w-full sm:w-auto">
              <SlidersHorizontal className="h-4 w-4 mr-2" /> Filter
            </Button>
          </div>
          
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            <Button
              variant={filterDistance === "all" ? "default" : "outline"}
              className={`rounded-full ${filterDistance === "all" ? "bg-ninja-primary hover:bg-ninja-primary/90" : ""}`}
              onClick={() => setFilterDistance("all")}
            >
              All Distances
            </Button>
            <Button
              variant={filterDistance === "1km" ? "default" : "outline"}
              className={`rounded-full ${filterDistance === "1km" ? "bg-ninja-primary hover:bg-ninja-primary/90" : ""}`}
              onClick={() => setFilterDistance("1km")}
            >
              Within 1km
            </Button>
            <Button
              variant={filterDistance === "3km" ? "default" : "outline"}
              className={`rounded-full ${filterDistance === "3km" ? "bg-ninja-primary hover:bg-ninja-primary/90" : ""}`}
              onClick={() => setFilterDistance("3km")}
            >
              Within 3km
            </Button>
            <Button
              variant={filterDistance === "5km" ? "default" : "outline"}
              className={`rounded-full ${filterDistance === "5km" ? "bg-ninja-primary hover:bg-ninja-primary/90" : ""}`}
              onClick={() => setFilterDistance("5km")}
            >
              Within 5km
            </Button>
          </div>
        </div>
        
        <Tabs defaultValue="list" className="mb-8">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="list">List View</TabsTrigger>
            <TabsTrigger value="map">Map View</TabsTrigger>
          </TabsList>
          <TabsContent value="list">
            {filteredTasks.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {filteredTasks.map((task) => (
                  <TaskCard key={task.id} task={task} />
                ))}
              </div>
            ) : (
              <Card className="mt-6">
                <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="rounded-full bg-muted p-3 mb-4">
                    <Search className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <h3 className="font-semibold text-xl mb-1">No tasks found</h3>
                  <p className="text-muted-foreground mb-6">
                    Try adjusting your search or filters
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSearchQuery("");
                      setFilterDistance("all");
                    }}
                  >
                    Clear filters
                  </Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>
          <TabsContent value="map">
            <Card>
              <CardContent className="p-0">
                <div className="h-[600px] bg-muted relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-muted-foreground">
                      Map view placeholder (requires geolocation integration)
                    </p>
                  </div>
                  
                  {/* Sample markers */}
                  {filteredTasks.map((task, index) => {
                    // Calculate random positions for demonstration
                    const left = 10 + (index * 15) % 80;
                    const top = 20 + (index * 17) % 60;
                    
                    return (
                      <div 
                        key={task.id}
                        className="absolute group"
                        style={{ left: `${left}%`, top: `${top}%` }}
                      >
                        <div className="w-6 h-6 bg-ninja-primary rounded-full flex items-center justify-center cursor-pointer">
                          <span className="text-xs text-white font-bold">{index + 1}</span>
                        </div>
                        <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-white p-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity w-48 z-10">
                          <p className="font-bold text-sm">{task.title}</p>
                          <p className="text-xs text-muted-foreground">{task.distance} km away • ₱{task.fee}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Tasks;
