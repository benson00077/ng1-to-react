export const AppComponent = {
  bindings: {},
  template: `
		<navbar></navbar>
		<a ui-sref="hello" ui-sref-active="active">Hello</a>
    <a ui-sref="about" ui-sref-active="active">About</a>
		<ui-view></ui-view>
		<md-toolbar layout="column" layout-align="center center"> My toolbar </md-toolbar>
	`,
};