import { SignIn } from "@clerk/nextjs";
import { Section, Container } from "@/components/craft";

export default function Page() {
  return (
    <Section className="min-h-screen">
      <Container className="lg:w-1/2">
        <div className="flex flex-col items-center text-center">
          <SignIn />
        </div>
      </Container>
    </Section>
  );
}
