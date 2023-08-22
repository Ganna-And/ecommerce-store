"use client";



import PreviewModal from "@/app/components/preview-modal";
import { useEffect, useState } from "react";

export default function ModalProvider() {

    const [isMounted, setIsMounted] = useState(false);

    useEffect(()=>{
        setIsMounted(true)
    },[])
  return (
   <>
   <PreviewModal />
   </>
  )
}
