
"use client";

import { Button, Modal } from "flowbite-react";
import { Star } from "lucide-react";
import { useState } from "react";

export function PremiumModal() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>

      <div onClick={() => { setOpenModal(true) }} style={{ borderRadius: '5px', cursor: 'pointer' }} className="text-xl gap-x-3 flex items-center justify-center bg-[#037B21] py-3 px-3">
        <Star className="text-white" />
        <p className="text-white font-bold">Premium</p>
      </div>

      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Premium Service</Modal.Header>
        <Modal.Body>
          <div className="flex items-center justify-center">
            Our premium server now not available.
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModal(false)}>Okay</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
