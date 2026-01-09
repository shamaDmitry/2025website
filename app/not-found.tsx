import { Button } from "@/components/controls/Button";
import { Headline } from "@/components/typo/headline";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center p-10 px-4 flex-1">
      <Headline tag="h2" className="mb-4">
        Not Found
      </Headline>

      <p className="mb-5">Could not find requested resource</p>

      <Button isLink href="/">
        Return Home
      </Button>
    </div>
  );
}
