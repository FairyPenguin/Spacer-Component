# Spacer Component [React]

A simple and clean alternative solution for usign margin to create horizontal spaces.

Currently, only React[Nextjs - Remix] supported (Vue Version Soon):

## Bundle Size

![minified size 2.0 KB](https://flat.badgen.net/bundlephobia/min/spacer-component)
![minizipped size 939 B](https://flat.badgen.net/bundlephobia/minzip/spacer-component)

| Bundle             | Size  |
| ------------------ | ----- |
| Minified           | 2 kB  |
| Minified + Gzipped | 939 B |

## installation

> NPM

```bash

npm i spacer-component
```

> PNPM

```bash

pnpm add spacer-component
```

> Yarn

```bash

yarn install spacer-component
```

## What is the Spacer Component

Simply it's better solution than using **"css margin"** to ccreate horizontal spaces between elemnts/components in your projects.

it gives you the option to choose the space you need from arange of spaces with **0.25 increment**

## Features

- Forget margin problems and unexpected behavior.
- Small-footprint.
- Fully typed with typescript.
- Wide range of incrementaled spaces.
- Clear,meaningful and underatandble (KISS) props names and values,
  0.25rem is equal to 0.25rem no magic or weired naming or guessing games, the values names are same as the CSS values.
- Uses padding block property so the value you choose is multiplied by 2 of course to get the full horizontal space,
  for example ==> -- 1rem = 1rem top + 1rem bottom = 2rem (block / horizontally)-- space

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
  /* Default value = 0.25rem 
  = padding-block: 0.25rem 
  = total 8px horizontal space  */
}
<Spacer space={"0.25rem"} />;
{
  /* Default value = 0.25rem 
  = padding-block: 0.25rem 
  = total 8px horizontal space  */
}
<Spacer space={"0.50rem"} />;
{
  /* Default value = 0.25rem 
  = padding-block: 0.25rem 
  = total 8px horizontal space  */
}
<Spacer space={"0.75rem"} />;
{
  /* Default value = 0.25rem 
  = padding-block: 0.25rem 
  = total 8px horizontal space  */
}
<Spacer space={"1rem"} />;
{
  /* Default value = 0.25rem 
  = padding-block: 0.25rem 
  = total 8px horizontal space  */
}
<Spacer space={"1.125rem"} />;
{
  /* Default value = 0.25rem 
  = padding-block: 0.25rem 
  = total 8px horizontal space  */
}
<Spacer space={"1.5rem"} />;
```

## But why not using the regular css marign instead?

