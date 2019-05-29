export default {
	title: "Learn",
	codeSandbox: false,
	typescript: true,
	theme: "docz-default-theme",
	themeConfig: {
		colors: {
			primary: "#005cfe",
			secondary: "#03afe8",
			gray: "#d9d9ed",
		},
		styles: {
			body: `
				font-family: Helvetica Neue;
				font-size: 16px;
				line-height: 1.3;
			`,
			h1: `
				margin: 40px 0 20px;
				font-size: 40px;
				font-weight: bold;
				letter-spacing: -1;
			`,
			h2: `
				margin: 30px 0 20px;
				font-weight: bold;
				font-size: 28px;
				letter-spacing: -0.02em;
			`,
			h3: `
				margin: 25px 0 10px;
				font-size: 20px;
				font-weight: bold;
			`,
			h4: `
				margin: 25px 0 10px;
				font-size: 16px;
				font-weight: bold;
			`,
			h5: `
				margin: 20px 0 10px;
				font-size: 16px;
				font-weight: bold;
			`,
			h6: `
				margin: 20px 0 10px;
				font-size: 16px;
				font-weight: bold;
				text-transform: uppercase;
			`,
			ol: `
				padding: 0;
				margin: 10px 0 10px;
			`,
			ul: `
				padding: 0;
				margin: 10px 0 10px;
			`,
			playground: `
				padding: 40px;
			`,
			code: `
				margin: 0 3px;
				border-radius: 3px;
				font-family: Menlo;
				padding: 2px 5px;
				font-size: 0.8em;
				border: '1px solid rgba(0, 0, 0, 0.02)';
			`,
			pre: `
				font-family: Menlo;
				font-size: 14px;
				line-height: 1.8;
			`,
			paragraph: `
				margin: 10px 0 20px 0;
			`,
			table: `
				overflow-y: hidden;
				width: 100%;
				font-family: Menlo;
				font-size: 14px;
				overflow-x: initial;
				display: block;
			`,
			blockquote: `
				margin: 25px 0;
				padding: 20px;
				font-style: italic;
				font-size: 16px;
			`,
		},
	},
}
