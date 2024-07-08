import Link from "next/link";
import * as React from "react";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="backdrop-blur sticky top-0 z-40 w-full h-[60px] flex items-center justify-between container border-b ">
      <div className="flex items-center space-x-4">
        <a href="" className="text-2xl font-bold ">
          Summa <span className="text-primary">AI.</span>
        </a>
      </div>

      <div className="flex items-center justify-end space-x-4">
        <nav className="flex items-center space-x-1">
          <Button variant="outline">Get Started</Button>
        </nav>
      </div>
    </header>
  );
}
