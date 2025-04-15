
import Header from "@/components/Header";
import TaskForm from "@/components/TaskForm";

const NewTask = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 max-w-5xl">
        <h1 className="text-3xl font-bold mb-8 text-center">Create New Task</h1>
        <TaskForm />
      </main>
    </div>
  );
};

export default NewTask;
