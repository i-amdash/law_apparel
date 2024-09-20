"use client";

import usePreviewModal from "@/hooks/use-preview-modal";
import Gallery from "@/components/ui/shop/Gallery";
import Info from "@/components/ui/shop/Info";
import Modal from "@/components/ui/shop/modal";


const PreviewModal = () => {
  const previewModal = usePreviewModal();
  const painting = usePreviewModal((state) => state.data);

  if (!painting) {
    return null;
  }

  return ( 
    <Modal 
      open={previewModal.isOpen} 
      onClose={previewModal.onClose}
    >
      <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
        <div className="sm:col-span-4 lg:col-span-5">
          <Gallery images={painting.images} />
        </div>
        <div className="sm:col-span-8 lg:col-span-7">
          <Info data={painting} />
        </div>
      </div>
    </Modal>
  );
}
 
export default PreviewModal;
