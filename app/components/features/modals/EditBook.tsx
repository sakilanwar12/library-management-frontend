import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import AddNewBookForm from "../forms/AddNewBookForm";
import { useRef, useState } from "react";
import { SquarePenIcon } from "lucide-react";

export function EditBook() {
  const buttonRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={"secondary"}>
          <SquarePenIcon className="w-4 h-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle> Edit Book</DialogTitle>
          <DialogDescription>Edit a book</DialogDescription>
        </DialogHeader>
        <AddNewBookForm ref={buttonRef} setOpen={setOpen} />
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button type="button" onClick={() => buttonRef.current?.click()}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
