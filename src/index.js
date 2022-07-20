import {searchElByClass} from "./search";
import {appendContent} from "./append";

const title = "<h1>Make H1</h1>"

const pastePlace = searchElByClass(".appendPlace");

appendContent(pastePlace, title)

