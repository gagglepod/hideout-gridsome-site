# Default starter for Gridsome

This is the project you get when you run `gridsome create new-project`.

### 1. Install Gridsome CLI tool if you don't have

`npm install --global @gridsome/cli`

### 2. Create a Gridsome project

1. `gridsome create my-gridsome-site` to install default starter
2. `cd my-gridsome-site` to open the folder
3. `gridsome develop` to start a local dev server at `http://localhost:8080`
4. Happy coding 🎉🙌
"# hideout-gridsome-site"  git init git add README.md git commit -m "first commit" git branch -M main git remote add origin https://github.com/gagglepod/hideout-gridsome-site.git git push -u origin main

# GraphQL Sandbox
### `http://localhost:8080/___explore`
```
{
  allWordPressPost {
    edges {
      node {
				title
        excerpt
        slug
        date
        link
        guid
      }
    }
  }
}
```