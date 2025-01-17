import { FormCtx } from "@/components/forms/RequirementForm";
import { classes, friendlyRoles } from "@/lib/client/vars";
import { IFormCtx } from "@/lib/definitions/client/interfaces/contexts";
import { PseudoNum, roleType, techAppKey } from "@/lib/definitions/foundations";
import StringHelper from "@/lib/helpers/StringHelper";
import React, { useContext, useEffect, useRef, useState } from "react";
import TechCheckboxes from "./TechCheckboxes";
import { ErrorBoundary } from "react-error-boundary";
import GenericErrorComponent from "../../errors/Error";
export default function TechnologiesLists() {
  let role: roleType = "undefined";
  const base = "TechCb",
    [key, setKey] = useState<string>(crypto.randomUUID()),
    fsBase = `fs${base}`,
    legBase = `leg${base}`,
    groupedApps: Record<roleType, Array<techAppKey[]>> = {
      executivoAdministrativo: [
        ["office365", "outlook", "slack", "googleDrive"],
        ["zoom", "trello", "sapErp", "msDynamicsCrm"],
        ["msTeams", "sharePoint", "powerBi", "yammer"],
        ["asana", "box", "oneDrive", "sapFico"],
      ],
      financeiro: [
        ["oracleFinance", "msExcel", "quickBooks", "totvsProtheus"],
        ["netSuite", "xero", "tableau", "sql"],
        ["python", "googleFinance", "eikonReuters", "bloombergTerminal"],
        ["freshBooks", "salesforce", "msDynamics365", "pipedrive"],
      ],
      comercial: [
        ["hubspot", "linkedInSalesNavigator", "mailchimp", "zoomInfo"],
        ["googleWorkspace", "excel", "whatsAppBusiness", "twilio"],
        ["googleAds", "facebookAds", "instagramAds", "googleAnalytics"],
        ["semRush", "rdStation", "canva", "wordpress"],
      ],
      marketing: [
        ["hootsuite", "buffer", "linkedInCampaignManager", "adobeIllustrator"],
        ["adobePhotoshop", "windows10_11", "macOs", "activeDirectoryBasic"],
        ["remoteDesktop", "ferramentasAntivirus", "zendesk", "chromeOs"],
        ["ios", "android", "ferramentasRedeBasicas", "sistemasTicketBasicos"],
      ],
      suporteTecnicoN1: [
        ["windowsServer", "linuxServer", "activeDirectoryAdvanced", "exchange"],
        ["serviceNow", "itilTools", "vmwareVirtualBox", "cisco"],
        ["firewallFortinet", "wireshark", "scripting", "monitoramento"],
        [
          "endpointManagement",
          "antimalwareEnterpriseTools",
          "backupRestoreAvancado",
          "totvs",
        ],
      ],
      suporteTecnicoN2: [
        ["sapEcc", "jira", "docker", "oracleDatabase"],
        ["postgreSql", "mySql", "linuxBash", "git"],
        ["jenkins", "grafana", "java", "javaScript"],
        ["csharp", "nodeJs", "react", "angular"],
      ],
      operatorio: [
        ["sapEcc", "jira", "docker", "oracleDatabase"],
        ["postgreSql", "mySql", "linuxBash", "git"],
        ["jenkins", "grafana", "java", "javaScript"],
        ["csharp", "nodeJs", "react", "angular"],
      ],
      desenvolvimento: [
        ["sapEcc", "jira", "docker", "oracleDatabase"],
        ["postgreSql", "mySql", "linuxBash", "git"],
        ["jenkins", "grafana", "java", "javaScript"],
        ["csharp", "nodeJs", "react", "angular"],
      ],
      devOps: [
        ["gitHub", "sqlDatabases", "noSql", "aws"],
        ["azure", "kubernetes", "gitLabCiCd", "terraform"],
        ["ansible", "chef", "puppet", "prometheus"],
      ],
      undefined: [[]],
    },
    ctx = useContext<IFormCtx>(FormCtx);
  role = ctx?.role || "undefined";
  const cRole = StringHelper.capitalize(role),
    roleApps = groupedApps[role],
    r = useRef<HTMLFieldSetElement | null>(null);
  useEffect(() => {
    if (!r.current) return;
    if (role === "undefined") {
      r.current.style.display = "none";
      return;
    } else setKey(crypto.randomUUID());
  }, [r, role]);
  return (
    <ErrorBoundary
      FallbackComponent={() => (
        <GenericErrorComponent message='Erro gerando conjunto de campos para tecnologias específicas' />
      )}
    >
      <fieldset
        className={`${classes.mainFsClasses} ${fsBase}`}
        id={`${fsBase}${cRole}`}
        ref={r}
        key={key}
      >
        <legend className={`${legBase}`} id={`${legBase}${cRole}`}>
          Tecnologias usadas: {friendlyRoles[role] || friendlyRoles.undefined}
        </legend>
        {roleApps.map((apps, i) => (
          <TechCheckboxes
            key={`techcbs__${i}`}
            apps={apps}
            num={(i + 1).toString() as PseudoNum}
          />
        ))}
      </fieldset>
    </ErrorBoundary>
  );
}
