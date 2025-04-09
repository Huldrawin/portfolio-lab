{
  # Used to configure the development environment for your project
  # See https://idx.dev/nix for more information
  idx = {
    # The command to start a preview of your app
    previews = {
      enable = true;
      previews = {
        web = {
          command = ["npx" "serve" "-s" "." "-l" "$PORT"];
          manager = "web";
        };
      };
    };
  };

}