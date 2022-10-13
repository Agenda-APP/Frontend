import React, { FC } from "react";
import { Button, Variant } from "./components/UI/Button/Button";

const App: FC = () => (
  <div>
    <Button variant={Variant.primary}>кнопка</Button>
    <Button variant={Variant.transparent}>кнопка</Button>
    <Button variant={Variant.warning}>кнопка</Button>
  </div>
);

export default App;
