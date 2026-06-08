"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, type ReactNode } from "react";

type ProjectModalProps = {
  children: ReactNode;
};

export default function ProjectModal({ children }: ProjectModalProps) {
  const router = useRouter();
  const dialogRef = useRef<HTMLDialogElement>(null);

  const close = useCallback(() => {
    router.back();
  }, [router]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    dialog.showModal();
    document.body.style.overflow = "hidden";

    const onCancel = (event: Event) => {
      event.preventDefault();
      close();
    };

    dialog.addEventListener("cancel", onCancel);

    return () => {
      dialog.removeEventListener("cancel", onCancel);
      dialog.close();
      document.body.style.overflow = "";
    };
  }, [close]);

  return (
    <dialog
      ref={dialogRef}
      className="project-modal"
      onClick={(event) => {
        if (event.target === dialogRef.current) close();
      }}
    >
      <div className="project-modal__panel" role="document">
        <button
          type="button"
          className="project-modal__close"
          onClick={close}
          aria-label="닫기"
        >
          <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
            <path d="M1 1 L9 9 M9 1 L1 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
        <div className="project-modal__stage">{children}</div>
      </div>
    </dialog>
  );
}
