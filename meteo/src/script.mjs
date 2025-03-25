
import { Components } from "./components/Components.mjs";
import { getPotentialCityToSearch } from "./searchEvent.mjs";
import { handleSearchBarreEvent } from "./eventSubmitSearch.mjs";
import { ChooseSuggestions } from "./chooseSuggestions.mjs";


main();

function main(){

    

    getPotentialCityToSearch();
    handleSearchBarreEvent();
    ChooseSuggestions();

}