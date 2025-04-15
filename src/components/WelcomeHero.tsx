
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Package2 } from "lucide-react";

const WelcomeHero = () => {
  return (
    <div className="relative overflow-hidden bg-background py-12">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-ninja-light text-ninja-accent">
              Community-powered deliveries
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              <span className="text-ninja-primary">Local delivery tasks,</span>
              <br />
              <span>completed by neighbors</span>
            </h1>
            
            <p className="text-xl text-muted-foreground">
              Post small delivery errands or earn money by completing nearby tasks. 
              Neighborhood Ninjas connects people in your community through simple deliveries.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-ninja-primary hover:bg-ninja-primary/90">
                <Link to="/tasks/new">Post a Task</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/tasks">Browse Tasks</Link>
              </Button>
            </div>
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Package2 className="h-4 w-4" />
                <span>100+ Tasks Completed</span>
              </div>
              <div className="h-1 w-1 rounded-full bg-muted-foreground"></div>
              <div>Hyperlocal Community</div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-ninja-primary to-ninja-accent p-1">
              <div className="h-full w-full rounded-[calc(1.5rem-0.25rem)] bg-muted/50 backdrop-blur-sm flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-white/10"></div>
                <img
                  src="/placeholder.svg"
                  alt="Neighborhood Ninjas App"
                  className="h-4/5 w-4/5 object-cover rounded-xl animate-bounce-subtle"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute top-1/2 -translate-y-1/2 -right-64 w-[600px] h-[600px] rounded-full bg-ninja-light blur-3xl opacity-20"></div>
      <div className="absolute top-1/4 -left-32 w-[400px] h-[400px] rounded-full bg-ninja-accent blur-3xl opacity-10"></div>
    </div>
  );
};

export default WelcomeHero;
