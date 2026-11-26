/* eslint-disable no-useless-assignment */
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";

function CommonForm({
  formControls,
  formData,
  setFormData,
  onSubmit,
  buttonText,
  isBtnDisabled,
}) {
  function renderInputsByComponentType(getControlItem) {
    let element = null;
    const value = formData[getControlItem.name] || "";

    const inputClass =
      "h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-900 shadow-none placeholder:text-slate-400 focus-visible:border-indigo-500 focus-visible:bg-white focus-visible:ring-4 focus-visible:ring-indigo-500/10 transition-all duration-200";

    switch (getControlItem.componentType) {
      case "input":
        element = (
          <Input
            className={inputClass}
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            id={getControlItem.name}
            type={getControlItem.type}
            value={value}
            onChange={(event) =>
              setFormData({
                ...formData,
                [getControlItem.name]: event.target.value,
              })
            }
          />
        );
        break;

      case "select":
        element = (
          <Select
            onValueChange={(value) =>
              setFormData({
                ...formData,
                [getControlItem.name]: value,
              })
            }
            value={value}
          >
            <SelectTrigger className={`${inputClass} [&>span]:text-slate-400`}>
              <SelectValue placeholder={getControlItem.placeholder} />
            </SelectTrigger>

            <SelectContent>
              {getControlItem.options && getControlItem.options.length > 0
                ? getControlItem.options.map((optionItem) => (
                    <SelectItem key={optionItem.id} value={optionItem.id}>
                      {optionItem.label}
                    </SelectItem>
                  ))
                : null}
            </SelectContent>
          </Select>
        );
        break;

      case "textarea":
        element = (
          <Textarea
            className="min-h-28 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 shadow-none placeholder:text-slate-400 focus-visible:border-indigo-500 focus-visible:bg-white focus-visible:ring-4 focus-visible:ring-indigo-500/10 transition-all duration-200"
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            id={getControlItem.id || getControlItem.name}
            value={value}
            onChange={(event) =>
              setFormData({
                ...formData,
                [getControlItem.name]: event.target.value,
              })
            }
          />
        );
        break;

      default:
        element = (
          <Input
            className={inputClass}
            name={getControlItem.name}
            placeholder={getControlItem.placeholder}
            id={getControlItem.name}
            type={getControlItem.type}
            value={value}
            onChange={(event) =>
              setFormData({
                ...formData,
                [getControlItem.name]: event.target.value,
              })
            }
          />
        );
        break;
    }

    return element;
  }

  return (
    <form onSubmit={onSubmit} className="w-full">
      <div className="flex flex-col gap-5">
        {formControls.map((controlItem) => (
          <div className="grid w-full gap-2" key={controlItem.name}>
            <Label
              htmlFor={controlItem.name}
              className="text-sm font-semibold text-slate-700"
            >
              {controlItem.label}
            </Label>

            {renderInputsByComponentType(controlItem)}
          </div>
        ))}
      </div>

      <Button
        disabled={isBtnDisabled}
        type="submit"
        className="mt-7 h-12 w-full rounded-xl bg-indigo-600 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition-all duration-300 hover:bg-indigo-700 hover:shadow-indigo-300 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
      >
        {buttonText || "Submit"}
      </Button>
    </form>
  );
}

export default CommonForm;
