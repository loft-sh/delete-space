<p align="center">
  <a href="https://github.com/loft-sh/delete-space/actions"><img alt="create-loft-space status" src="https://github.com/loft-sh/delete-space/workflows/build-test/badge.svg"></a>
</p>

# delete-space

This is a GitHub Action to delete a space in loft. It is intended to be used with the [setup-loft GitHub Action](https://github.com/loft-sh/setup-loft) to first install the Loft CLI.

## Usage

This action will delete a Loft Space.

### Example: Delete a space named `staging` on commits to `main`.
```yaml
name: Deploy to Staging
on:
  push:
    branches:
      - 'main'
jobs:
  deploy-staging:
    runs-on: ubuntu-latest
    steps:
      - name: Install Loft CLI
        uses: loft-sh/setup-loft@main
        with:
          url: ${{ secrets.LOFT_URL }}
          access-key: ${{ secrets.LOFT_ACCESS_KEY }}
      - name: Create staging Space
        uses: loft-sh/create-space@main
        with:
          name: staging
      - name: Delete staging Space
        uses: loft-sh/delete-space@main
        with:
          name: staging
```

## Customizing

### inputs

The following inputs can be used as `step.with` keys

| Name                | Type     | Description                        |
|---------------------|----------|------------------------------------|
| `name`              | String   | The name of the space to delete
| `cluster`           | String   | The cluster on which to delete the space (if there are multiple spaces with the same name across multiple clusters)multiple clusters)
| `project`           | String   | The project to use (requires Loft 3.0 and above)
