const fs = require('fs');
const _ = require('lodash');
const bibtexParse = require('bibtex-parse-js');
const Handlebars = require("handlebars");


const TOOLS_TMPL = "./templates/tools.hbs", RESEARCH_TMPL = "./templates/research.hbs";

const condense_bib_list = (bib_entries) => _.map(
    bib_entries, (entry) => ({ ...{ handle:entry.citationKey, type:entry.entryType }, ...entry.entryTags })
); 

const end2end_papers = condense_bib_list(bibtexParse.toJSON(fs.readFileSync("./references/end2end.bib", "utf-8")) ),
      benchmark_papers = condense_bib_list(bibtexParse.toJSON(fs.readFileSync("./references/benchmarks.bib", "utf-8")) ),
      surveys_papers = condense_bib_list(bibtexParse.toJSON(fs.readFileSync("./references/surveys.bib", "utf-8")) );

const framework_sw = condense_bib_list( bibtexParse.toJSON(fs.readFileSync("./references/framework-gh.bib", "utf-8")) ),
      dashboard_sw = condense_bib_list( bibtexParse.toJSON(fs.readFileSync("./references/dashboard-gh.bib", "utf-8")) ),
      llm_assisted_sw = condense_bib_list( bibtexParse.toJSON(fs.readFileSync("./references/llm_assisted-gh.bib", "utf-8")) ),
      env_sw = condense_bib_list( bibtexParse.toJSON(fs.readFileSync("./references/env-gh.bib", "utf-8")) );




const gen_doc_tools = () => {
    const tmpl_str = fs.readFileSync(TOOLS_TMPL,"utf-8");
    const tmpl = Handlebars.compile(tmpl_str), list = {
        frameworks: framework_sw,
        dashboard: dashboard_sw,
        llm_assisted: llm_assisted_sw,
        env: env_sw
    };
    
    const res = tmpl( list );
    console.log(res);
}

const gen_doc_research = () => {
    const tmpl_str = fs.readFileSync(RESEARCH_TMPL,"utf-8");
    const tmpl = Handlebars.compile(tmpl_str), list = { 
        surveys: surveys_papers,
        e2e: _.sortBy(end2end_papers,'year').reverse(),
        benchmarks: _.sortBy(benchmark_papers,'year').reverse()
    };
    
    const res = tmpl( list );
    console.log(res);
}


(async function () {
    // gen_doc_tools();
    // gen_doc_research();

    // console.log(surveys_papers);

})();