const c = [
	() => import("..\\..\\..\\src\\routes\\__layout.svelte"),
	() => import("..\\components\\error.svelte"),
	() => import("..\\..\\..\\src\\routes\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\register.svelte"),
	() => import("..\\..\\..\\src\\routes\\login\\__layout.reset.svelte"),
	() => import("..\\..\\..\\src\\routes\\login\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\app\\__layout.reset.svelte"),
	() => import("..\\..\\..\\src\\routes\\app\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\app\\orcamento\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\app\\graficos\\index.svelte"),
	() => import("..\\..\\..\\src\\routes\\app\\extrato\\index.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/register.svelte
	[/^\/register\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/login/index.svelte
	[/^\/login\/?$/, [c[4], c[5]], []],

	// src/routes/auth/createCookie.js
	[/^\/auth\/createCookie\/?$/],

	// src/routes/auth/logout.js
	[/^\/auth\/logout\/?$/],

	// src/routes/auth/login.js
	[/^\/auth\/login\/?$/],

	// src/routes/app/index.svelte
	[/^\/app\/?$/, [c[6], c[7]], []],

	// src/routes/app/orcamento/index.svelte
	[/^\/app\/orcamento\/?$/, [c[6], c[8]], []],

	// src/routes/app/graficos/index.svelte
	[/^\/app\/graficos\/?$/, [c[6], c[9]], []],

	// src/routes/app/extrato/index.svelte
	[/^\/app\/extrato\/?$/, [c[6], c[10]], []]
];

// we import the root layout/error components eagerly, so that
// connectivity errors after initialisation don't nuke the app
export const fallback = [c[0](), c[1]()];