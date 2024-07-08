import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { ArrowRight, Star } from "lucide-react";

import { Button } from "@/components/ui/button";

import { Section, Container } from "@/components/craft";

import SummaForm from "./Form";

export default function Hero() {
  return (
    <Section className="min-h-screen">
      <Container className="lg:w-1/2">
        <div className="flex flex-col items-center text-center">
          <Button
            asChild
            className="not-prose mb-6 flex w-fit"
            size="sm"
            variant="outline"
          >
            <Link href="">
              <Star className="w-4 text-yellow-500 mr-2" /> Star on Github{" "}
              <ArrowRight className="ml-2 w-4" />
            </Link>
          </Button>
          <h1 className="!mb-0 text-4xl font-bold">
            <Balancer>
              Unlock the Power of Information with{" "}
              <span className="text-primary">SummaAI.</span>
            </Balancer>
          </h1>
          <h3 className="text-muted-foreground">
            <Balancer>
              Effortlessly Summarize Articles with Cutting-Edge AI Technology –
              Get the Key Points in Seconds!
            </Balancer>
          </h3>
          <SummaForm />
        </div>
      </Container>
    </Section>
  );
}
