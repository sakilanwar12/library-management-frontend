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
import { useRef, useState } from "react";
import BorrowBookForm from "../forms/BorrowBookForm";
export interface IBorrowBookProps {
  id: string;
}
export function BorrowBook({ id }: IBorrowBookProps) {
  const buttonRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={"secondary"}>Borrow</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle> Add New Book</DialogTitle>
          <DialogDescription>Add a new book to your library</DialogDescription>
        </DialogHeader>
        <BorrowBookForm setOpen={setOpen} id={id} ref={buttonRef} />
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
