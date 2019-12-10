import { compose } from "recompose";

import Auth from "./components";
import withHandlers from "./containers/withHandlers";
import lifecycle from "./containers/lifecycle";
import connect from "./containers/connect";

export default compose(connect, withHandlers, lifecycle)(Auth);
