import  { forwardRef } from "react";
import { Checkbox } from "~/components/ui/checkbox";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";

const AddNewBookForm = forwardRef<HTMLInputElement>((_, ref) => {
  return (
    <form
      className="space-y-3.5"
      onSubmit={(e) => {
        e.preventDefault();
        console.log("Hello world");
      }}
    >
      <Input placeholder="Title" type="text" />
      <Input placeholder="Author" type="text" />
      <Input placeholder="Genre" type="text" />
      <Input placeholder="isbn" type="text" />
      <Textarea placeholder="Description" />
      <Input placeholder="Copies" type="number" />
      <div className="flex items-center gap-1">
        <Checkbox id="available" />
        <Label htmlFor="available">Available</Label>
      </div>
      <input type="submit" ref={ref} className="hidden" />
    </form>
  );
});

AddNewBookForm.displayName = "AddNewBookForm";

export default AddNewBookForm;
