import { ErrorBoundary } from "react-error-boundary";
import DOMHandler from "@/lib/client/handlers/DOMHandler";
import GenericErrorComponent from "../bloc/errors/Error";
import { DlgProps } from "@/lib/definitions/client/interfaces/components";
import useDialog from "@/lib/client/hooks/useDialog";
import s from "@/styles/modules/dialog.module.scss";
import { redirect } from "next/navigation";
export default function TimeoutModal({ dispatch, state = true }: DlgProps) {
  const { mainRef } = useDialog({ dispatch, state, param: "timeout" });
  return (
    <>
      {state && (
        <dialog
          role='alertdialog'
          ref={mainRef}
          className={`${s.modalContent} ${s.modalContent__fit}`}
          style={{ width: "80%" }}
          id='recover-alert'
          onClick={ev => {
            if (
              DOMHandler.isClickOutside(ev, ev.currentTarget).some(
                coord => coord === true
              )
            ) {
              ev.currentTarget.close();
              dispatch(!state);
            }
          }}
        >
          <ErrorBoundary
            FallbackComponent={() => (
              <GenericErrorComponent message='Erro renderizando janela modal' />
            )}
          >
            <section role='alert' className='flexNoWC flexAlItCt rGap2v'>
              <div role='group' className=' flexNoWC flexAlItCt wsBs'>
                <p>
                  <b>Tempo para preenchimento esgotado ⏳</b>
                </p>
                <p>
                  O tempo para preencher o formulário foi esgotado. Recarregue a
                  página para reiniciar.
                </p>
              </div>
              <button
                className='btn btn-info bold'
                onClick={() => redirect("/")}
              >
                Recarregar
              </button>
            </section>
          </ErrorBoundary>
        </dialog>
      )}
    </>
  );
}
