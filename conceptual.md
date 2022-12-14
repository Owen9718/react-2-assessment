### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
  To create single page applications

- What is a single page application?
  A website the changes the content on a single page instead of relocating

- What are some differences between client side and server side routing?
  Server side routing makes many request to render applications. Client side only does it once for initial render.

- What are two ways of handling redirects with React Router? When would you use each?
  history.push or '<Redirect/>'. Use Redirect when someone is where they shouldn't be. Use history.push after a user action.
- What are two different ways to handle page-not-found user experiences using React Router? 
  Using a redirect or inside of a Switch include a Route with a NotFound component.
- How do you grab URL parameters from within a component using React Router?
Using useParams()
- What is context in React? When would you use it?
  Context is used to have univeral data across app. Use it to avoid repetition or apply themes.
- Describe some differences between class-based components and function
  components in React.
  Function components allow us to add state a lot easier and use hooks.

- What are some of the problems that hooks were designed to solve?
  Hooks make it easy to extract logic and they make it easy to reuse it. Hooks were created to solve three problems: wrapper hell, huge components, and confusing classes