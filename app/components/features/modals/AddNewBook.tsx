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
import { useRef } from "react";

export function AddNewBook() {
  const buttonRef = useRef<HTMLInputElement>(null);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="text-sm font-medium hover:text-blue-500 border-0 rounded-none"
        >
          Add Book
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle> Add New Book</DialogTitle>
          <DialogDescription>Add a new book to your library</DialogDescription>
        </DialogHeader>
        <AddNewBookForm ref={buttonRef} />
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
