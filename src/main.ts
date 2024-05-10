import { setup } from "@detail-dev/trace";

setup({
  localDevMode: true
});
import {app} from './server'
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.info(`server up on port ${PORT}`);
});
