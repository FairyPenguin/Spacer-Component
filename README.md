# Spacer Component [React]

Simple, light-weight and clean alternative solution for using margin to create horizontal spaces.

Currently, only React[Nextjs - Remix] supported (Web Components & Vue Version WIP):

## Bundle Size

![npm bundle size](https://img.shields.io/bundlephobia/min/spacer-component?style=for-the-badge)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/spacer-component?style=for-the-badge)

| Bundle             | Size    |
| ------------------ | ------- |
| Minified           | 3.66 kB |
| Minified + Gzipped | 1.26 B  |

## installation

```sh
> NPM
npm i spacer-component
```

```sh
> PNPM

pnpm add spacer-component
```

```sh
> Yarn

yarn install spacer-component
```

## What is the Spacer Component

Simply it's a better solution than using **"css margin"** to create horizontal spaces between elemnts/components in your projects.

it gives you the option to choose the space you need from a range of spaces with **0.25 increment**

## Features

- Helps with avoiding the margin problems and unexpected behavior.
- Light-weight with Small-footprint.
- No styles or theme just plain hidden space, fits with any theme or styling.
- Fully typed with typescript.
- Wide range of incrementaled spaces.
- Support two versions of the space range of
  - space: a single space range.
  - blockSpace: a boubled value space.
    > for example: 1rem = 1rem top in space & 1rem in blockSpace = 2rem --(block / horizontally)-- space
  - Uses CSS-Modules for classes scoping and avoids any confilct with your existing styles.
- Clear,meaningful and underatandble (KISS) props names and values,
  0.25rem is equal to 0.25rem no magic or weired naming or guessing games, the values names are same as the CSS values.
- Uses padding.

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

    {/* This result in 0.25rem = 4px horizontal space*/}

        <Spacer space={"0.25rem"} />

      </section>

    {/* This result in 0.5(0.25*2)rem = 8px horizontal space*/}

        <Spacer blockSpace={"0.25rem"} />

      <div>

          {/* This result in 1rem = 16px horizontal space*/}

        <Spacer space={"1rem"} />

      </div>

```

4. Choose the suitable space for your needs
   > The space prop values are avilable via intellisense it's fully-typed,just add "" or (CTRL + SPACE) and you will get a list of all the avilable values.
   > One prop is "**REQUIRED**" at least.
   > Both props type is "**STRING**".

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

## Props Guide

> For now the only avilable Props are `space` and `blockSpace` one is required at least for the component to work.

This tables demonstarte the "Space and blockSpace Props( **string** )" Values to the total horizontal space.

> In the space prop: simply the value you choose and it's result

| Space Prop Value | Value (Rem) | Value (Pixels) |
| :--------------: | :---------: | :------------: |
|        0         |      0      |       0        |
|     0.125rem     |  0.125rem   |       2        |
|     0.25rem      |   0.25rem   |       4        |
|      0.5rem      |   0.5rem    |       8        |
|     0.75rem      |   0.75rem   |       12       |
|       1rem       |    1rem     |       16       |
|     1.25rem      |   1.25rem   |       20       |
|      1.5rem      |   1.5rem    |       24       |
|     1.75rem      |   1.75rem   |       28       |
|       2rem       |    2rem     |       32       |
|     2.25rem      |   2.25rem   |       36       |
|      2.5rem      |   2.5rem    |       40       |
|     2.75rem      |   2.75rem   |       44       |
|       3rem       |    3rem     |       48       |
|     3.25rem      |   3.25rem   |       52       |
|      3.5rem      |   3.5rem    |       56       |
|     3.75rem      |   3.75rem   |       60       |
|       4rem       |    4rem     |       64       |
|     4.25rem      |   4.25rem   |       68       |
|      4.5rem      |   4.5rem    |       72       |
|     4.75rem      |   4.75rem   |       76       |
|       5rem       |    5rem     |       80       |
|     5.25rem      |   5.25rem   |       84       |
|      5.5rem      |   5.5rem    |       88       |
|     5.75rem      |   5.75rem   |       92       |
|       6rem       |    6rem     |       96       |
|     6.25rem      |   6.25rem   |      100       |

---

> In the blockSpace prop: The value you choose is doubled \* 2
> for example 1rem = 1rem\*2 = (2rem = 32px)

| blockSpace Prop Value | Value (Rem) | Value (Pixels) |
| :-------------------: | :---------: | :------------: |
|           0           |      0      |      0px       |
|       0.125rem        |   0.25rem   |      4px       |
|        0.25rem        |   0.5rem    |      8px       |
|        0.5rem         |    1rem     |      16px      |
|        0.75rem        |   1.5rem    |      24px      |
|         1rem          |    2rem     |      32px      |
|        1.25rem        |   2.5rem    |      40px      |
|        1.5rem         |    3rem     |      48px      |
|        1.75rem        |   3.5rem    |      56px      |
|         2rem          |    4rem     |      64px      |
|        2.25rem        |   4.5rem    |      72px      |
|        2.5rem         |    5rem     |      80px      |
|        2.75rem        |   5.5rem    |      88px      |
|         3rem          |    6rem     |      96px      |
|        3.25rem        |   6.5rem    |     104px      |
|        3.5rem         |    7rem     |     112px      |
|        3.75rem        |   7.5rem    |     120px      |
|         4rem          |    8rem     |     128px      |
|        4.25rem        |   8.5rem    |     136px      |
|        4.5rem         |    9rem     |     144px      |
|        4.75rem        |   9.5rem    |     152px      |
|         5rem          |    10rem    |     160px      |
|        5.25rem        |   10.5rem   |     168px      |
|        5.5rem         |    11rem    |     176px      |
|        5.75rem        |   11.5rem   |     184px      |
|         6rem          |    12rem    |     192px      |
|        6.25rem        |   12.5rem   |     200px      |

## Changelog
