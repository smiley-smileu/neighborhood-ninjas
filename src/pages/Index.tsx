
import Header from "@/components/Header";
import WelcomeHero from "@/components/WelcomeHero";
import TaskCard, { Task } from "@/components/TaskCard";
import TasksMap from "@/components/TasksMap";

// Sample data for demonstration
const featuredTasks: Task[] = [
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
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pb-16">
        <WelcomeHero />
        
        <div className="container mx-auto px-4 py-16 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-3xl font-bold mb-6">Recent Tasks</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {featuredTasks.map((task) => (
                    <TaskCard key={task.id} task={task} />
                  ))}
                </div>
              </section>
              
              <section>
                <h2 className="text-3xl font-bold mb-6">How It Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-ninja-light rounded-lg p-6 text-center">
                    <div className="w-12 h-12 bg-ninja-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="font-bold text-white">1</span>
                    </div>
                    <h3 className="font-bold text-lg mb-2">Post a Task</h3>
                    <p className="text-muted-foreground">
                      Describe what you need delivered, set pickup and dropoff locations, and suggest a fee.
                    </p>
                  </div>
                  
                  <div className="bg-ninja-light rounded-lg p-6 text-center">
                    <div className="w-12 h-12 bg-ninja-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="font-bold text-white">2</span>
                    </div>
                    <h3 className="font-bold text-lg mb-2">Get Connected</h3>
                    <p className="text-muted-foreground">
                      A neighbor who's available and heading in that direction accepts your task.
                    </p>
                  </div>
                  
                  <div className="bg-ninja-light rounded-lg p-6 text-center">
                    <div className="w-12 h-12 bg-ninja-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="font-bold text-white">3</span>
                    </div>
                    <h3 className="font-bold text-lg mb-2">Task Completed</h3>
                    <p className="text-muted-foreground">
                      Your item gets delivered, and you can thank your neighbor for their help!
                    </p>
                  </div>
                </div>
              </section>
            </div>
            
            <div>
              <TasksMap />
            </div>
          </div>
        </div>
      </main>
      
      <footer className="bg-muted py-8 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2025 Neighborhood Ninjas. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Connecting neighbors through simple deliveries.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
