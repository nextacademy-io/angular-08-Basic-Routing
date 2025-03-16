# Angular Workshop: Basic Routing



https://github.com/user-attachments/assets/f4848f13-0ed1-4984-9167-a4c61f3eac29



In this task, you'll use some basic routing capabilities. We'll create a NavbarComponent with two `navLinks`: `Clashes` and `Users`.
We also introduce two new components as entry point for each of this use cases: `ClashListComponent` and `UsersListComponent`. By default, the user will be redirected to the `/clashes` route.

---

### **1. Create the _/clashes_ entry component**

```ts
ng generate component clash/clash-list
```

Move all the exisitng clash related code from the `app.component.{html|ts}` files to the newly created `clash-list.component.{html|ts}` files.

The "old" `app.component.html` should look like this:

```html
<main class="container mx-auto mt-8">
  <router-outlet></router-outlet>
</main>
```

Make sure to clean your `app.component.ts` of any unneeded references and imports.

### **2. Move all "clash" related files into the newly created _src/app/clash_ directory.**

- `src/app/clash.ts` to `src/app/clash/clash.ts`
- `src/app/clash.service.ts` to `src/app/clash/clash.service.ts`
- `src/app/clash-card/**` to `src/app/clash/clash-card/**`

### **3. Create the _/peers_ entry component**

```ts
ng generate component peer/peer-list
```

For now, you can leave it like it is.

### **4. Add routing configurations for `/clashes` and `/peers`**

Modify the file `app.routes.ts`.

Hint:

```ts
export const routes: Routes = [
  {
    path: "foo",
    component: FooListComponent,
  },
];
```

Make a redirect to `/clashes` for the catch-all path `**`.

**⇒ At this stage you can test the routing configuration by entering http://localhost:4200/ (which redirects to: http://localhost:4200/clashes) and http://localhost:4200/peers manually into your browsers address bar.**

### **5. Create a `NavbarComponent`**

1. `ng generate component navbar`
2. Use this component in the `app.component.html` (probably above the `<main></main>` tag).
3. Basic Markup for the `navbar.component.html`:

```html
<nav class="bg-green-100 p-4 border-b-1 border-green-400">
  <ul class="flex flex-row space-x-4 text-green-600 font-medium">
    <li>
      <a>Clashes</a>
    </li>
    <li>
      <a>Peers</a>
    </li>
  </ul>
</nav>
```

4. Use the `routerLink` directive.
5. Use the `routerLinkActive` directive.

Don't forget to import the directives in the `imports` of the `NavbarComponent` `@Component({ ... })` decorator.
