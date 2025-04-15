
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { MapPin } from "lucide-react";

const taskFormSchema = z.object({
  title: z.string().min(3, { message: "Title must be at least 3 characters" }),
  description: z.string().min(10, { message: "Please provide more details" }),
  pickup: z.string().min(3, { message: "Pickup location is required" }),
  dropoff: z.string().min(3, { message: "Dropoff location is required" }),
  fee: z.coerce.number().min(50, { message: "Minimum fee is ₱50" }),
});

type TaskFormValues = z.infer<typeof taskFormSchema>;

const TaskForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<TaskFormValues>({
    resolver: zodResolver(taskFormSchema),
    defaultValues: {
      title: "",
      description: "",
      pickup: "",
      dropoff: "",
      fee: 50,
    },
  });

  const onSubmit = (data: TaskFormValues) => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Task created:", data);
      toast.success("Task posted successfully!");
      form.reset();
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-ninja-primary">Post a New Task</CardTitle>
        <CardDescription>
          Fill out the details to post your delivery task
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Task Title</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Pick up groceries" {...field} />
                  </FormControl>
                  <FormDescription>
                    A short, clear title describing the task
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Provide details about the task, items to be delivered, etc."
                      className="min-h-[100px]" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="pickup"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Pickup Location</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <MapPin className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input className="pl-8" placeholder="Pickup address" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="dropoff"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Dropoff Location</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <MapPin className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input className="pl-8" placeholder="Delivery address" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="fee"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Delivery Fee (₱)</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <span className="absolute left-2 top-2.5 text-muted-foreground">₱</span>
                      <Input className="pl-6" type="number" {...field} />
                    </div>
                  </FormControl>
                  <FormDescription>
                    Suggested minimum fee: ₱50
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button 
              type="submit" 
              className="w-full bg-ninja-primary hover:bg-ninja-primary/90"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Posting..." : "Post Task"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default TaskForm;
