import { forwardRef } from "react";
import { Checkbox } from "~/components/ui/checkbox";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";
import { useForm } from "react-hook-form";
import { type TFormType } from "./types";
import { useCreateBookMutation } from "~/store/api/books/books.api";
import { toast } from "sonner";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

import { genreOptions } from "./utils";
import type { TGenre } from "~/store/api/books/books.types";
interface IAddNewBookFormProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const AddNewBookForm = forwardRef<HTMLInputElement, IAddNewBookFormProps>(
  ({ setOpen }, ref) => {
    const [createBook] = useCreateBookMutation();
    const { register, handleSubmit, watch, setValue } = useForm<TFormType>();
    const onSubmit = async (data: TFormType) => {
      try {
        await createBook({
          title: data.title,
          author: data.author,
          genre: data.genre,
          isbn: data.isbn,
          description: data.description,
          copies: Number(data.copies),
          available: data.available,
        }).unwrap();
        toast.success("Event has been created.");
        setOpen(false);
      } catch (error) {
        console.info(error);
        toast.error("Something went wrong.");
      }
    };
    return (
      <form className="space-y-3.5" onSubmit={handleSubmit(onSubmit)}>
        <Input placeholder="Title" type="text" {...register("title")} />
        <Input placeholder="Author" type="text" {...register("author")} />
        <Select
          value={watch("genre")}
          onValueChange={(value) => setValue("genre", value as TGenre)}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select Genre" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {genreOptions?.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Input placeholder="isbn" type="text" {...register("isbn")} />
        <Textarea placeholder="Description" {...register("description")} />
        <Input placeholder="Copies" type="number" {...register("copies")} />
        <div className="flex items-center gap-1">
          <Checkbox
            id="available"
            checked={watch("available")}
            onCheckedChange={(checked) =>
              setValue("available", Boolean(checked))
            }
          />
          <Label htmlFor="available">Available</Label>
        </div>
        <input type="submit" ref={ref} className="hidden" />
      </form>
    );
  }
);

AddNewBookForm.displayName = "AddNewBookForm";

export default AddNewBookForm;
