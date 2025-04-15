
import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, DollarSign } from "lucide-react";
import { toast } from "sonner";

export interface Task {
  id: string;
  title: string;
  description: string;
  pickup: string;
  dropoff: string;
  fee: number;
  status: "open" | "accepted" | "picked" | "delivered";
  timePosted: string;
  distance: number;
}

interface TaskCardProps {
  task: Task;
}

const TaskCard = ({ task }: TaskCardProps) => {
  const [status, setStatus] = useState(task.status);
  
  const handleAcceptTask = () => {
    setStatus("accepted");
    toast.success("Task accepted successfully!");
  };

  const handleStatusUpdate = (newStatus: "picked" | "delivered") => {
    setStatus(newStatus);
    toast.success(`Task marked as ${newStatus === "picked" ? "picked up" : "delivered"}!`);
  };
  
  const statusColors = {
    open: "bg-green-100 text-green-800",
    accepted: "bg-blue-100 text-blue-800",
    picked: "bg-amber-100 text-amber-800",
    delivered: "bg-purple-100 text-purple-800",
  };
  
  const statusLabels = {
    open: "Open",
    accepted: "Accepted",
    picked: "Picked Up",
    delivered: "Delivered",
  };

  return (
    <Card className="task-card overflow-hidden border-2 hover:shadow-lg h-full">
      <div className={`h-2 w-full ${status === "open" ? "bg-ninja-primary" : "bg-ninja-secondary"}`} />
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <h3 className="font-bold text-lg">{task.title}</h3>
          <Badge className={statusColors[status]}>
            {statusLabels[status]}
          </Badge>
        </div>
        <div className="flex items-center text-muted-foreground text-sm">
          <Clock className="h-3 w-3 mr-1" />
          <span>{task.timePosted}</span>
          <span className="mx-2">•</span>
          <MapPin className="h-3 w-3 mr-1" />
          <span>{task.distance} km away</span>
        </div>
      </CardHeader>
      <CardContent className="space-y-4 pt-0">
        <p className="text-sm text-muted-foreground line-clamp-2">{task.description}</p>
        
        <div className="grid grid-cols-2 gap-2 mt-2">
          <div className="p-2 bg-muted rounded-md">
            <p className="text-xs text-muted-foreground">Pickup</p>
            <p className="text-sm font-medium">{task.pickup}</p>
          </div>
          <div className="p-2 bg-muted rounded-md">
            <p className="text-xs text-muted-foreground">Dropoff</p>
            <p className="text-sm font-medium">{task.dropoff}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between border-t pt-4">
        <div className="flex items-center font-bold text-ninja-secondary">
          <DollarSign className="h-4 w-4 mr-1" />
          <span>₱{task.fee.toFixed(2)}</span>
        </div>
        
        {status === "open" && (
          <Button 
            onClick={handleAcceptTask} 
            className="bg-ninja-primary hover:bg-ninja-primary/90"
          >
            Accept Task
          </Button>
        )}
        
        {status === "accepted" && (
          <Button 
            onClick={() => handleStatusUpdate("picked")}
            className="bg-ninja-secondary hover:bg-ninja-secondary/90"
          >
            Mark as Picked Up
          </Button>
        )}
        
        {status === "picked" && (
          <Button 
            onClick={() => handleStatusUpdate("delivered")}
            variant="outline"
            className="border-ninja-accent text-ninja-accent hover:bg-ninja-accent hover:text-white"
          >
            Mark as Delivered
          </Button>
        )}
        
        {status === "delivered" && (
          <Button variant="ghost" disabled>
            Completed
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default TaskCard;
