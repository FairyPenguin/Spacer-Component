# Spacer Component [React]

A simple and clean alternative solution for usign margin to create spaces.

Currently, only React[Nextjs - Remix] supported (Vue Version Soon):

## Bundle Size

![minified size 2.0 KB](https://flat.badgen.net/bundlephobia/min/spacer-component)
![minizipped size 939 B](https://flat.badgen.net/bundlephobia/minzip/spacer-component)

| Size               | Bundle |
| ------------------ | ------ |
| Minified           | 2 kB   |
| Minified + Gzipped | 939 B  |

### installation {#installation}

### What is the Spacer Component {#what-is-the-spacer-component}

## installation

```bash
// NPM

npm i spacer-component
```

```bash
// PNPM

pnpm add spacer-component
```

```bash
// Yarn

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
