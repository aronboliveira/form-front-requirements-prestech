import { classes } from "@/lib/client/vars";
export default function ContextualQuestions() {
    return (
        <>
        <fieldset>
            <div className="divDailyTasks" id="leadDailyTasks">
                <label className={classes.inpLabClasses} id="labelLeadDailyTasks" htmlFor="textLeadDailyTasks">
                    Quais são as suas principais tarefas diárias?</label>
                <textarea className={classes.contextualTextClasses}
                id="textLeadDailyTasks" name="daily_tasks" required
                autoComplete="on" />
            </div>
            <div className="divMainTasks" id="leadMainTasks">
                <label className={classes.inpLabClasses} id="labelLeadMainTasks" htmlFor="textLeadMainTasks">
                    Quais são suas principais atividades na empresa que poderiam
                    ser beneficadas com novas automações e outros recursos virtuais?</label>
                <textarea className={classes.contextualTextClasses}
                id="textLeadMainTasks" name="main_tasks" required
                autoComplete="on" />
            </div>
            <div className="divMainSw" id="leadMainSw">
                <label className={classes.inpLabClasses} id="labelLeadMainSw" htmlFor="textLeadMainSw">
                    Quais ferramentas ou sistemas você utiliza rotineiramente?</label>
                {/* //TODO LISTA CONTEXTUALIZADA */}
            </div>
            <div className="divAddSw" id="leadAddSw">
                <label className={classes.inpLabClasses} id="labelAddSw" htmlFor="textAddSw">
                    Caso utilize outros Softwares no contexto anterior, mencione aqui:
                </label>
                <textarea className={classes.contextualTextClasses}
                id="textAddSw" name="sw_add"
                autoComplete="on"></textarea>
            </div>
        </fieldset>
        <fieldset>
            <div className="divPriorization" id="leadPriorization">
                <label className={classes.inpLabClasses} id="labelLeadPriorization" htmlFor="textLeadPriorization">
                    Como você utiliza tecnologias para a organização e planejamento
                    das suas atividades de trabalho?</label>
                <textarea className={classes.contextualTextClasses}
                id="textLeadPriorization" required
                autoComplete="on" name="priorizations"></textarea>
            </div>
            <div className="divOptimize" id="divLeadOptimize">
                <label className={classes.inpLabClasses} id="labelLeadOptimize" htmlFor="textLeadOptimize">
                    Existem, no seu trabalho, processos manuais ou repetitivos que você
                    acredita que poderiam ser melhorados com tecnologias
                    novas ou mais atualizadas?
                </label>
                <textarea className={classes.contextualTextClasses}
                id="textLeadOptimize" required autoComplete="on"
                name="optimizations"></textarea>
            </div>
            <div className="divChallenges" id="divLeadChallenges">
                <label className={classes.inpLabClasses} id="labelLeadChallenges" htmlFor="textLeadChallenges">
                    Quais desafios você encontra ao utilizar as suas atuais
                    tecnologias de trabalho? Comente comparando com outras tecnologias
                    similares, se adequado, ou com maneiras como você gostaria de melhorar.
                </label>
                <textarea className={classes.contextualTextClasses}
                 id="textLeadChallenges" required name="challenges"
                autoComplete="on"></textarea>
            </div>
            <div className="divCollaboration" id="divLeadCollaboration">
                <label className={classes.inpLabClasses} id="labelLeadCollaboration" htmlFor="textLeadCollaboration">
                    De que forma você utiliza as tecnologias para colaborar e integrar
                    com a sua equipe de trabalho?
                </label>
                <textarea className={classes.contextualTextClasses}
                id="textLeadCollaboration" required name="collaboration"
                autoComplete="on"></textarea>
            </div>
        </fieldset>
        </>
        )
}