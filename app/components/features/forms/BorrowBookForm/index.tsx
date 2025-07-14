import { forwardRef } from "react";
import { Input } from "~/components/ui/input";
import { useForm } from "react-hook-form";
import { type TFormType } from "./types";
import { useGetBookByIdQuery } from "~/store/api/books/books.api";
import { toast } from "sonner";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import type { IBorrowBookProps } from "../../modals/BorrowBook";
import { useCreateBorrowBookMutation } from "~/store/api/borrow/borrow.api";
import { Button } from "~/components/ui/button";
import { ChevronDownIcon } from "lucide-react";
import { Calendar } from "~/components/ui/calendar";
interface IBorrowBookFormProps extends IBorrowBookProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const BorrowBookForm = forwardRef<HTMLInputElement, IBorrowBookFormProps>(
  ({ setOpen, id }, ref) => {
    const [createBorrowBook] = useCreateBorrowBookMutation();
    const { register, handleSubmit, watch, setValue, reset, setError } =
      useForm<TFormType>();
    const { data: getBookDataRes, ...getBookApiState } = useGetBookByIdQuery({
      id,
    });
    const dueDate = watch("dueDate");
    const onSubmit = async (data: TFormType) => {
      try {
        await createBorrowBook({
          book: id,
          dueDate: new Date().toISOString(),
          quantity: Number(data.quantity),
        }).unwrap();
        toast.success("Book has been borrowed.");
        setOpen(false);
      } catch (error : any) {
         toast.error(`${error.data.message}`);
      }
    };
    return (
      <form className="space-y-3.5" onSubmit={handleSubmit(onSubmit)}>
        <Input placeholder="Quantity" type="number" {...register("quantity")} />
        <Popover modal>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              id="date"
              className="w-full justify-between font-normal"
            >
              {dueDate
                ? new Date(dueDate).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })
                : "Select a date"}
              <ChevronDownIcon className="ml-1 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto overflow-hidden p-0" align="start">
            <Calendar
              mode="single"
              selected={dueDate ? new Date(dueDate) : undefined}
              captionLayout="dropdown"
              onSelect={(date) => {
                const isoDate = date?.toISOString();
                setValue("dueDate", isoDate || "");
              }}
            />
          </PopoverContent>
        </Popover>
        <input type="submit" ref={ref} className="hidden" />
      </form>
    );
  }
);

BorrowBookForm.displayName = "BorrowBookForm";

export default BorrowBookForm;
