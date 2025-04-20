import ProfileCard from "@/components/general/ProfileCard";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Main from "@/components/general/Main";
import { ModeToggle } from "@/components/ui/mode-toggle";
import Link from "next/link";
import MobileHeader from "@/components/general/MobileHeader";
import { sectionIds } from "@/data/content";
import ScrollToTopButton from "@/components/general/ScrollToTopButton";
import MobileFooter from "@/components/general/MobileFooter";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <MobileHeader />
      <Card className="w-full max-w-400 rounded-none p-4 md:flex-row">
        <div>
          <div className="sticky top-4 flex flex-col gap-12">
            <ProfileCard />
            <div className="hidden justify-end gap-8 md:flex">
              <nav className="flex flex-col items-end gap-4 py-2">
                {sectionIds.map((id) => {
                  const label = id.replace("-section", "").replace("-", " ");
                  return (
                    <Link
                      key={id}
                      href={`#${id}`}
                      className="hover:text-cyan-700 dark:hover:text-cyan-500"
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
        <div className="hidden md:block">
          <Separator orientation="vertical" />
        </div>
        <div className="relative hidden flex-col items-center justify-between md:flex">
          <div className="sticky top-4 z-50 flex justify-end">
            <ModeToggle className="shadow-muted-foreground shadow-md" />
          </div>
          <p className="sticky bottom-8 origin-bottom-left text-neutral-800 [writing-mode:vertical-rl] dark:text-neutral-400">
            © 2025 Felix Shen. All Rights Reserved
          </p>
        </div>
        <ScrollToTopButton />
      </Card>
      <MobileFooter />
    </div>
  );
}
