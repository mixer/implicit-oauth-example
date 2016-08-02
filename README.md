# implicit-oauth-example
An example site for carrying out the implicit OAuth Flow with Beam.

# Setup
1. Create an OAuth Application at our [Developer Lab](https://beam.pro/lab).

1. Using a webserver redirect a url on that server  e.g. `interactive.example.com/request` to the Beam OAuth authorize page with your OAuth Client Id and Scopes filled out:

  `https://beam.pro/oauth/authorize?response_type=token&redirect_uri=<redirecturl>&scope=<scopes>&client_id=<clientid>`

  Example url:

  `https://beam.pro/oauth/authorize?response_type=token&redirect_uri=https://interactive.example.com&scope=tetris:robot:self&client_id=abc123456`

1. Ensure your redirect uri sends users to the index of this repository.

# Flow

User visits link `interactive.example.com/request` and sees the OAuth Page:
![](images/authorize_box.png)

They click accept and are then forwarded back to your url where they will see their token:
![](images/token.png)

The user can then paste this token into your Project's config.

# Customization

Feel free to customize the page for your branding. Please ensure you follow the [Beam Branding Guidelines](https://github.com/WatchBeam/beam-branding-kit/)
