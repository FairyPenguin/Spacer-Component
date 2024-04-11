# Spacer Component _React_

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, only React[Nextjs - Remix] supported (Vue Version Soon):

## Instaltion

```npm
npm i spacer-component
```

```npm
pnpm add spacer-component
```

```npm
yarn install spacer-component
```

## What is the Spacer Component

Simply it's better solution than using **"css margin"** to ccreate spaces between elemnts/components in your projects.

it gives you the option to choose the space you need from arange of spaces with -0.25 increment-

## Features

- Forget margin problems and unexpected behavior
- Small-footprint
- Fully types with typescript
- Wide range of incrementaled spaces
- Clear,meaningful and underatandble (KISS) props names and values,
  0.25rem is equal to 0.25rem no magic or weired naming or guessing games, the values names are same as the CSS values.
- Uses padding block property so the value you choose is multiplied by 2 of course to get the full space,
  for example ==> 1rem = 1rem top + 1rem bottom = 2rem (block)

## Getting Started

After installiton,

1. Import the component in any page or component in your project

```jsx
import { Spacer } from "spacer-component";
```

2. Import the Spacer CSS file

```jsx
import "spacer-component/styles";
```

3. Use the component in your jsx

```jsx

      <section>

      </section>

        <Spacer space={"0.25rem"} />

      <section>

      </section>

```

4. Choose the suitable space for your needs

```jsx
{
  /* Default value = 0.25rem = padding-block: 0.25rem = 8px space  */
}
<Spacer space={"0.25rem"} />;
{
  /* Default value = 0.25rem = padding-block: 0.25rem = 8px space  */
}
<Spacer space={"0.25rem"} />;
{
  /* Default value = 0.25rem = padding-block: 0.25rem = 8px space  */
}
<Spacer space={"0.25rem"} />;
{
  /* Default value = 0.25rem = padding-block: 0.25rem = 8px space  */
}
<Spacer space={"0.25rem"} />;
{
  /* Default value = 0.25rem = padding-block: 0.25rem = 8px space  */
}
<Spacer space={"0.25rem"} />;
{
  /* Default value = 0.25rem = padding-block: 0.25rem = 8px space  */
}
<Spacer space={"0.25rem"} />;
```

## But why not using the regular css marign instead?

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:
