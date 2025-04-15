
import Header from "@/components/Header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import TaskCard, { Task } from "@/components/TaskCard";
import { CalendarIcon, MapPinIcon, PhoneIcon, AtSignIcon, Edit, Settings } from "lucide-react";

// Sample data for demonstration
const myTasks: Task[] = [
  {
    id: "task1",
    title: "Pickup birthday cake from Red Ribbon",
    description: "Need someone to pick up a pre-ordered birthday cake from Red Ribbon. It's paid for and reserved under my name.",
    pickup: "Red Ribbon, BF Resort Village",
    dropoff: "Phase 1, BF Homes",
    fee: 100,
    status: "open",
    timePosted: "3 hours ago",
    distance: 3.2,
  },
];

const acceptedTasks: Task[] = [
  {
    id: "task2",
    title: "Deliver documents to Makati office",
    description: "Need these important documents delivered to our Makati office by 3pm today. Package is small and light.",
    pickup: "BF Homes, Parañaque",
    dropoff: "Ayala Ave, Makati",
    fee: 250,
    status: "accepted",
    timePosted: "45 minutes ago",
    distance: 2.5,
  },
  {
    id: "task3",
    title: "Pick up medicine from Mercury Drug",
    description: "Need someone to pick up my prescription medication from Mercury Drug in Alabang Town Center. It's already paid for, just need pickup and delivery to my home.",
    pickup: "Mercury Drug, Alabang Town Center",
    dropoff: "Ayala Alabang Village",
    fee: 100,
    status: "picked",
    timePosted: "10 minutes ago",
    distance: 1.2,
  },
];

const completedTasks: Task[] = [
  {
    id: "task4",
    title: "Groceries from Robinsons Supermarket",
    description: "Need someone to pick up my grocery order. It's a small order with about 5 items, already paid online. Just show the receipt at collection.",
    pickup: "Robinsons Supermarket, Las Piñas",
    dropoff: "Almanza Uno, Las Piñas",
    fee: 120,
    status: "delivered",
    timePosted: "Yesterday",
    distance: 1.5,
  },
  {
    id: "task5",
    title: "Return package to Lazada Hub",
    description: "Need help returning this package to the Lazada return hub. Package is medium-sized but light. Return code is already generated.",
    pickup: "Pilar Village, Las Piñas",
    dropoff: "Lazada Hub, SM Southmall",
    fee: 100,
    status: "delivered",
    timePosted: "2 days ago",
    distance: 2.1,
  },
];

const Profile = () => {
  return (
    <div className="min-h-screen flex flex-col pb-24">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <Card>
              <CardHeader className="relative pb-0">
                <div className="h-24 bg-gradient-to-r from-ninja-primary to-ninja-accent rounded-t-lg"></div>
                <div className="absolute left-1/2 -translate-x-1/2 top-12">
                  <Avatar className="h-24 w-24 border-4 border-background">
                    <AvatarFallback className="text-2xl bg-ninja-secondary text-white">JD</AvatarFallback>
                  </Avatar>
                </div>
              </CardHeader>
              <CardContent className="pt-16 text-center">
                <h1 className="text-2xl font-bold">Juan Dela Cruz</h1>
                <p className="text-muted-foreground">Member since April 2025</p>
                
                <div className="flex justify-center mt-4 space-x-2">
                  <Badge variant="secondary">Verified ✓</Badge>
                  <Badge variant="outline" className="bg-ninja-light">4.9 ★</Badge>
                </div>
                
                <div className="mt-6 space-y-3 text-left">
                  <div className="flex items-center gap-2">
                    <MapPinIcon className="h-4 w-4 text-muted-foreground" />
                    <span>Las Piñas City, Metro Manila</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <PhoneIcon className="h-4 w-4 text-muted-foreground" />
                    <span>+63 916 123 4567</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <AtSignIcon className="h-4 w-4 text-muted-foreground" />
                    <span>juan.delacruz@email.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                    <span>8 tasks completed</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center gap-4">
                <Button variant="outline" className="flex gap-2">
                  <Edit className="h-4 w-4" />
                  Edit Profile
                </Button>
                <Button variant="outline" className="flex gap-2">
                  <Settings className="h-4 w-4" />
                  Settings
                </Button>
              </CardFooter>
            </Card>
          </div>
          
          <div className="lg:col-span-2">
            <Tabs defaultValue="myTasks" className="w-full">
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="myTasks">My Tasks</TabsTrigger>
                <TabsTrigger value="accepted">Accepted</TabsTrigger>
                <TabsTrigger value="completed">Completed</TabsTrigger>
              </TabsList>
              
              <TabsContent value="myTasks">
                <h2 className="text-xl font-bold mb-4">Tasks You Posted</h2>
                {myTasks.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {myTasks.map(task => (
                      <TaskCard key={task.id} task={task} />
                    ))}
                  </div>
                ) : (
                  <Card>
                    <CardContent className="flex flex-col items-center justify-center py-12">
                      <p className="text-center text-muted-foreground mb-4">
                        You haven't posted any tasks yet.
                      </p>
                      <Button>Post a Task</Button>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>
              
              <TabsContent value="accepted">
                <h2 className="text-xl font-bold mb-4">Tasks You're Working On</h2>
                {acceptedTasks.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {acceptedTasks.map(task => (
                      <TaskCard key={task.id} task={task} />
                    ))}
                  </div>
                ) : (
                  <Card>
                    <CardContent className="flex flex-col items-center justify-center py-12">
                      <p className="text-center text-muted-foreground mb-4">
                        You haven't accepted any tasks yet.
                      </p>
                      <Button>Browse Tasks</Button>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>
              
              <TabsContent value="completed">
                <h2 className="text-xl font-bold mb-4">Completed Tasks</h2>
                {completedTasks.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {completedTasks.map(task => (
                      <TaskCard key={task.id} task={task} />
                    ))}
                  </div>
                ) : (
                  <Card>
                    <CardContent className="flex flex-col items-center justify-center py-12">
                      <p className="text-center text-muted-foreground">
                        No completed tasks yet.
                      </p>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
