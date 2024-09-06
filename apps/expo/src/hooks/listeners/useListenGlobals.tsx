import { useCataloguesStore } from "@simple/stores";
import { events } from "artisn-rn/analytics";
import { useEffect, useRef } from "react";

import { Workflow } from "types/workflow.types";

const { logSelectWorkflow } = events.workflow;

const useListenGlobals = () => {
  const selectedCatalogue = useCataloguesStore(
    state => state.selectedCatalogue
  );
  const { name } = selectedCatalogue ?? {};
  const selectWorkflowLogged = useRef(false);

  useEffect(() => {
    if (selectWorkflowLogged.current) return;
    logSelectWorkflow({
      workflow: name as Workflow
    });
    selectWorkflowLogged.current = true;
  }, [name]);
};

export default useListenGlobals;
