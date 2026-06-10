import { useModalStore } from "../store/useModalCartStore";
import { useRef } from "react";
import { Link } from "react-router";
import CloseIcon from "../../../shared/components/icons/CloseIcon";

export default function CartModal() {
  const isOpen = useModalStore((state) => state.isOpen);
  const closeModal = useModalStore((state) => state.closeModal);
  const content = useModalStore((state) => state.content);

  const windowContent = useRef(null);

  function handleOnClick(e: React.MouseEvent<HTMLUnknownElement>) {
    console.log(e);
    // closeModal();
    if (
      windowContent.current &&
      !windowContent.current.contains(e.target as Node)
    ) {
      closeModal();
    }
  }

  return (
    <div
      className={`bg-black/50 w-full h-full fixed top-0 left-0 transition-opacity ${isOpen ? "block" : "hidden"}`}
      onClick={handleOnClick}
    >
      <div
        ref={windowContent}
        className="p-10 fixed w-200 top-1/2 left-1/2 -translate-1/2 bg-(--bg-color-primary) rounded"
      >
        <div className="mb-5">
          <button
            className="absolute top-10 right-10 cursor-pointer"
            onClick={closeModal}
          >
            <CloseIcon />
          </button>
          <h3 className="text-lg font-medium text-(--secondary-color)">
            <span className="font-bold"> {content?.title}</span> is aan je
            winkelwagen toegevoegd
          </h3>
        </div>
        <div className="flex justify-between">
          <div className="w-2/3">
            <div className="flex justify-between items-center">
              <img className="w-40" src={content?.images[0]} alt="" />
              <p className="text">{content?.description}</p>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-5">
            <Link to="/cart">
              <button
                className="w-full p-2 text-white font-medium bg-(--primary-color) hover:bg-(--secondary-color) rounded cursor-pointer"
                onClick={closeModal}
              >
                Bekijk de winkelwagen
              </button>
            </Link>

            <hr />
            <button
              className="w-full p-2 bg-white border-(--secondary-color) rounded cursor-pointer"
              onClick={closeModal}
            >
              Ga verder met winkelen
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
