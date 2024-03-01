import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

export function SftDetails() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(84.4), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="flex items-center justify-start w-full gap-2 text-muted-foreground mt-2">
        <span className="text-sm">Process</span>
        <Progress value={progress} />
        <span className="text-sm flex items-center gap-1">
          <p className="font-semibold">84.4%</p>
          <p className="text-muted-foreground/80">Minted</p>
        </span>
      </div>
      <div className="grid md:grid-cols-2 gap-x-6 w-full mt-6 gap-4 md:gap-6">
        <div className="w-full h-full">
          <Card className="border-border/40 shadow-lg">
            <CardHeader>
              <CardTitle>Overview</CardTitle>
              <CardDescription>
                Deploy your new project in one-click.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground dark:text-primary grid md:grid-cols-2 gap-6 w-full px-6 md:px-0">
              <div className="flex flex-row-reverse md:flex-col items-center justify-between md:justify-center gap-2 w-full md:h-28">
                <span className="text-4xl font-medium md:text-5xl">12,333</span>
                <span className="text-base md:text-sm">Distribution Type</span>
              </div>
              <div className="flex flex-row-reverse md:flex-col items-center justify-between md:justify-center gap-2 w-full md:h-28">
                <span className="text-4xl font-medium md:text-5xl">12,333</span>
                <span className="text-base md:text-sm">Distribution Type</span>
              </div>
              <div className="flex flex-row-reverse md:flex-col items-center justify-between md:justify-center gap-2 w-full md:h-28">
                <span className="text-4xl font-medium md:text-5xl">12,333</span>
                <span className="text-base md:text-sm">Distribution Type</span>
              </div>
              <div className="flex flex-row-reverse md:flex-col items-center justify-between md:justify-center gap-2 w-full md:h-28">
                <span className="text-4xl font-medium md:text-5xl">12,333</span>
                <span className="text-base md:text-sm">Distribution Type</span>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="w-full h-full">
          <Card className="border-border/40 shadow-lg">
            <CardHeader>
              <CardTitle>Progress</CardTitle>
              <CardDescription>
                Deploy your new project in one-click.
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground dark:text-primary grid md:grid-cols-2 gap-6 w-full px-6 md:px-0">
              <div className="flex flex-row-reverse md:flex-col items-center justify-between md:justify-center gap-2 w-full md:h-28">
                <span className="text-4xl font-medium md:text-5xl">12,333</span>
                <span className="text-base md:text-sm">Distribution Type</span>
              </div>
              <div className="flex flex-row-reverse md:flex-col items-center justify-between md:justify-center gap-2 w-full md:h-28">
                <span className="text-4xl font-medium md:text-5xl">12,333</span>
                <span className="text-base md:text-sm">Distribution Type</span>
              </div>
              <div className="flex flex-row-reverse md:flex-col items-center justify-between md:justify-center gap-2 w-full md:h-28">
                <span className="text-4xl font-medium md:text-5xl">12,333</span>
                <span className="text-base md:text-sm">Distribution Type</span>
              </div>
              <div className="flex flex-row-reverse md:flex-col items-center justify-between md:justify-center gap-2 w-full md:h-28">
                <span className="text-4xl font-medium md:text-5xl">12,333</span>
                <span className="text-base md:text-sm">Distribution Type</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <Button className="rounded-lg w-full mt-4 mb-2 md:mt-8 md:mb-6 h-12 bg-blue-900 hover:bg-blue-950 dark:text-white dark:bg-blue-800 dark:hover:bg-opacity-75">
        Mint
      </Button>
    </>
  );
}
