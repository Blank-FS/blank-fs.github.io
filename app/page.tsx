import ProfileCard from "@/components/general/ProfileCard";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Main from "@/components/general/Main";
import { ModeToggle } from "@/components/ui/mode-toggle";
import Link from "next/link";
import MobileHeader from "@/components/general/MobileHeader";
import { sectionIds } from "@/data/content";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <MobileHeader />
      <Card className="p-4 w-full max-w-400 md:flex-row rounded-none">
        <div>
          <div className="sticky top-4 flex flex-col gap-12">
            <ProfileCard />
            <div className="hidden md:flex justify-end gap-8">
              <nav className="flex flex-col items-end gap-4 py-2">
                {sectionIds.map((id) => {
                  const label = id.replace("-section", "").replace("-", " ");
                  return (
                    <Link
                      key={id}
                      href={`#${id}`}
                      className="dark:hover:text-cyan-500 hover:text-cyan-700"
                    >
                      <h3>{label.charAt(0).toUpperCase() + label.slice(1)}</h3>
                    </Link>
                  );
                })}
              </nav>
              <div>
                <Separator orientation="vertical" className="bg-primary" />
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <Separator orientation="vertical" />
        </div>
        <div className="block md:hidden">
          <Separator orientation="horizontal" />
        </div>
        <Main />
        <div className="relative">
          <div className="sticky top-4 md:flex justify-end hidden z-50">
            <ModeToggle className="shadow-md shadow-muted-foreground" />
          </div>
        </div>
      </Card>
    </div>
  );
}
