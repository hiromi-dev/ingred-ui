# ingred-ui

>

[![NPM](https://img.shields.io/npm/v/ingred-ui.svg)](https://www.npmjs.com/package/ingred-ui) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
yarn add ssh://git@github.com:yarnpkg/yarn.git
```

```bash
yarn add ingred-ui styled-components react-select
```

## ~~Install~~

> 現在はまだ npm publish されていない為
> 下記コマンドは利用できません。

For npm users:

```bash
npm install --save ingred-ui styled-components
```

For Yarn users:

```bash
yarn add ingred-ui styled-components
```

## Usage

```tsx
import * as React from "react";

import { ThemeProvider, createTheme, Button } from "ingred-ui";

class Example extends React.Component {
  render() {
    const theme = createTheme();
    return (
      <ThemeProvider theme={theme}>
        <Button>Sample</Button>
      </ThemeProvider>
    );
  }
}
```

## License

MIT © [voyagegroup](https://github.com/voyagegroup)
