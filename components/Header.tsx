import Link from "next/link";
import * as React from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { cn } from "@/lib/utils";

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
          <SignedOut>
            <Link
              href={"/sign-in"}
              className={cn(
                buttonVariants({ variant: "outline" }),
                "w-full text-white"
              )}
            >
              Get Started
            </Link>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </nav>
      </div>
    </header>
  );
}
