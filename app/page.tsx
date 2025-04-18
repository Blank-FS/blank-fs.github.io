import ProfileCard from "@/components/general/ProfileCard";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Main from "@/components/general/Main";
import { ModeToggle } from "@/components/ui/mode-toggle";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Card className="p-4 w-full max-w-400 md:flex-row rounded-none">
        <div>
          <ProfileCard />
        </div>
        <div className="hidden md:block">
          <Separator orientation="vertical" />
        </div>
        <div className="block md:hidden">
          <Separator orientation="horizontal" />
        </div>
        <div className="relative">
          <div className="sticky top-4 md:flex justify-end hidden z-50">
            <ModeToggle />
          </div>
          <Main />
        </div>
      </Card>
    </div>
  );
}
