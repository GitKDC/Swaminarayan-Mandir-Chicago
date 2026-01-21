import { Button } from "@/components/ui/Button";
import { ABOUT_TABS, type AboutTab } from "./types";

interface Props {
  active: AboutTab;
  onChange: (tab: AboutTab) => void;
}

export default function AboutTabs({ active, onChange }: Props) {
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-10">
      {ABOUT_TABS.map((tab) => (
        <Button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={`px-4 py-2 rounded-md text-sm transition
            ${
              active === tab.id
                ? "default"
                : "outline"
            }
          `}
        >
          {tab.label}
        </Button>
      ))}
    </div>
  );
}
