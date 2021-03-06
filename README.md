# terraform-plugins

This action installs third-party [Terraform Plugins](https://www.terraform.io/docs/plugins/index.html) for use in [GitHub Actions](https://github.com/features/actions).

# Usage

See [action.yml](action.yml)

The action automatically creates the user plugins directory `~/.terraform.d/plugins`.

```yaml
steps:
  - uses: actions/checkout@master
  - uses: jasonwalsh/terraform-plugins@v1
    with:
      plugins: |
        https://github.com/gavinbunney/terraform-provider-kubectl/releases/download/v1.4.2/terraform-provider-kubectl-linux-amd64
```

**Note:** GitHub Actions inputs do not support arrays. Make sure the `plugins` input is a list of strings separated by a newline.

# License

[MIT License](LICENSE)
