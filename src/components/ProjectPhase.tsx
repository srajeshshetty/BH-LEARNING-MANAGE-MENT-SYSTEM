import { Calendar, GitBranch, Activity, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

export function ProjectPhase() {
  return (
    <div className="space-y-6">
      <Card className="border-primary/20">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Badge className="bg-warning text-white">Day 15</Badge>
                <Badge variant="outline">Project Task</Badge>
              </div>
              <CardTitle className="text-3xl mt-3">Project Phase</CardTitle>
              <CardDescription className="text-base leading-relaxed mt-2">
                BH LearnSphere is a next-generation Learning Management System (LMS) that goes beyond traditional 
                course delivery. This project aims to create an intelligent, scalable, and engaging platform for 
                learners and instructors. The system will support various content types, facilitate real-time 
                interaction, and incorporate AI-driven features to create personalized learning paths.
              </CardDescription>
            </div>
            <Badge className="bg-info text-white flex items-center gap-1.5">
              <Activity className="h-3 w-3" />
              Leaderboard
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-info/10 rounded-lg">
                    <Calendar className="h-5 w-5 text-info" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">05:44 AM</p>
                    <p className="text-xs text-muted-foreground">Oct 10, 2025</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-success/10 rounded-lg">
                    <GitBranch className="h-5 w-5 text-success" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">0</p>
                    <p className="text-xs text-muted-foreground">submissions</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-warning/10 rounded-lg">
                    <Activity className="h-5 w-5 text-warning" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">In Progress</p>
                    <p className="text-xs text-muted-foreground">Status</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Button className="mt-4 w-full sm:w-auto">
            <Eye className="h-4 w-4 mr-2" />
            View Task Instructions
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <GitBranch className="h-5 w-5 text-primary" />
            Submit Your Solution
          </CardTitle>
          <CardDescription>
            Make sure your repository is public and contains all required files
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="github-url">GitHub Repository URL *</Label>
              <Input
                id="github-url"
                placeholder="https://github.com/username/repository"
                className="font-mono text-sm"
              />
              <p className="text-xs text-muted-foreground">
                Make sure your repository is public and contains all required files.
              </p>
            </div>

            <Button className="w-full sm:w-auto">
              <GitBranch className="h-4 w-4 mr-2" />
              Submit Task
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
