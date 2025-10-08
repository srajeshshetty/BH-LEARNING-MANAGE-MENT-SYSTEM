import { CheckCircle2, Circle, Clock, BookOpen, GraduationCap } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Task {
  id: number;
  title: string;
  status: "completed" | "in-progress" | "pending";
  day?: number;
}

const tasks: Task[] = [
  { id: 1, title: "Task 1", status: "completed", day: 1 },
  { id: 2, title: "Task 2", status: "completed", day: 2 },
  { id: 3, title: "Task 3", status: "in-progress", day: 3 },
  { id: 4, title: "Task 4", status: "pending", day: 4 },
  { id: 5, title: "Task 5", status: "pending", day: 5 },
  { id: 6, title: "Task 6", status: "pending", day: 6 },
  { id: 7, title: "Task 7", status: "pending", day: 7 },
  { id: 8, title: "Task 8", status: "pending", day: 8 },
];

export function Sidebar() {
  const completedTasks = tasks.filter(t => t.status === "completed").length;
  const progressPercent = (completedTasks / tasks.length) * 100;

  return (
    <div className="w-64 border-r border-border bg-card h-screen flex flex-col">
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-2 mb-4">
          <GraduationCap className="h-6 w-6 text-primary" />
          <h2 className="font-semibold text-lg">MERN Stack</h2>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Progress</span>
            <span className="font-medium text-primary">{Math.round(progressPercent)}%</span>
          </div>
          <Progress value={progressPercent} className="h-2" />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>{completedTasks} / {tasks.length}</span>
            <span>Tasks Completed</span>
          </div>
        </div>
      </div>

      <ScrollArea className="flex-1 p-4">
        <div className="space-y-1">
          {tasks.map((task) => (
            <button
              key={task.id}
              className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-colors ${
                task.status === "in-progress"
                  ? "bg-primary/10 text-primary border border-primary/20"
                  : "hover:bg-accent/50 text-foreground"
              }`}
            >
              {task.status === "completed" && (
                <CheckCircle2 className="h-4 w-4 text-success flex-shrink-0" />
              )}
              {task.status === "in-progress" && (
                <Clock className="h-4 w-4 text-primary flex-shrink-0" />
              )}
              {task.status === "pending" && (
                <Circle className="h-4 w-4 text-muted-foreground flex-shrink-0" />
              )}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">{task.title}</span>
                  {task.day && (
                    <Badge variant="secondary" className="text-xs">
                      Day {task.day}
                    </Badge>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      </ScrollArea>

      <div className="p-4 border-t border-border">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <BookOpen className="h-4 w-4" />
          <span>Project Phase</span>
        </div>
      </div>
    </div>
  );
}
