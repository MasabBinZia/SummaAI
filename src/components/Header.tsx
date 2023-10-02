import React from "react";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { GithubIcon } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full">
      <div className="container text-white flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        Logo
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Link href="/" target="_blank">
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <GithubIcon className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
