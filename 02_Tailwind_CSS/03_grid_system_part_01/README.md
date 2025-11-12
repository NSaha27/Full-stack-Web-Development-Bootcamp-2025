-----------------------------------------------
TAILWIND CSS
-----------------------------------------------

Responsive Tailwind CSS
-----------------------------------------------

In a responsive grid system we mainly focus on mobile first approach.

To achieve responsiveness, we break the whole page into different breakpoints.

Breakpoints
------------
"sm" - this breakpoint has a minimum width of 640px or 40rem.
"md" - this breakpoint has a minimum width of 768px or 48rem.
"lg" - this breakpoint has a minimum width of 1024px or 64rem.
"xl" - this breakpoint has a minimum width of 1280px or 80rem.
"2xl" - this breakpoint has a minimum width of 1536px or 96rem.

*** these breakpoints are applicable to almost any utility classes of Tailwind CSS.

Process of achieving responsiveness -
  sm:utility_class
  md:utility_class
  lg:utility_class
  xl:utility_class
  2xl:utility_class

We can set custom breakpoint values as well, ex. -
  
  using the "--breakpoint-*" theme variable,

  inside app.css
  ---------------
  @import "tailwindcss";

  @theme {
    --breakpoint-xs: 30rem;
    --breakpoint-sm: 580px;
  }

Targetting a breakpoint range -
  md:max-xl:utility_class
  lg:max-xl:utility_class

Targetting a breakpoint range of arbitrary values -
  md:max-[992px]:utility_class
  max-[480px]:utility_class

Container Queries
------------------
It is used to add a container class to a block element. The element on which it is being applied, works as a parent element and takes a fixed length of the screen. Any breakpoint inside this container gets sized according to the size of the parent element instead that of the viewport.

Note - use the @ prefix before the container class and the breakpoints.

ex.
  <div class="@container">
    <div class="flex flex-col @md:flex-row">
      <!-- ... -->
    </div>
  </div>

Maximum Container Query and Query Range -
ex.
  <div class="@container">
    <div class="flex flex-row @max-md:flex-col">
      <!-- ... -->
    </div>
  </div>

  <div class="@container">
    <div class="flex flex-row @sm:@max-lg:flex-col">
      <!-- ... -->
    </div>
  </div>