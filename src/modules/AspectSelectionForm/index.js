import { compose } from "recompose";

import AspectSelectionForm from "./components";
import withHandlers from "./containers/withHandlers";
import connect from "./containers/connect";
import lifecycle from "./containers/lifecycle";

import "./style.scss";

export default compose(connect, withHandlers, lifecycle)(AspectSelectionForm);
