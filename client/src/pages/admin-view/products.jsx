import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Fragment, useState } from "react";

function AdminProduct() {
    const [openCreateProductsDialog, setOpenCreateProductsDialog] = useState(false);
  return (
    <Fragment>
      <div className="mb-5 w-full flex justify-end">
        <Button
          onClick={() => setOpenCreateProductsDialog(true)}
          className="py-5 rounded-sm shadow-md"
        >
          Add New Product
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4"></div>
      <Sheet open={openCreateProductsDialog}
      onOpenChange={()=>{
        setOpenCreateProductsDialog(false)
      }}
      >
   <SheetContent side="right" className="overflow-auto"></SheetContent>

      </Sheet>
    </Fragment>
  );
}

export default AdminProduct;
