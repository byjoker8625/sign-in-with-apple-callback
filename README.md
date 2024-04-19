# sign-in-with-apple-callback

Simple node and express callback handler for [sign_in_with_apple](https://pub.dev/packages/sign_in_with_apple) flutter
package.

The application is just redirecting to the flutter mobile app and responding to
the [sign_in_with_apple](https://pub.dev/packages/sign_in_with_apple) handler. Providing the app with the generated
token by apple and every other data send to the callback endpoint.

## Configuration

| Field     | Status   | Example               | Description                                  |
|-----------|----------|-----------------------|----------------------------------------------|
| CLIENT_ID | required | com.example.app       | The flutter app identifier or application id |
| ENDPOINT  | optional | /oauth/apple/callback | The url of the endpoint                      |

## Installation

```bash
docker run --name sign-in-with-apple-callback -p 3080:3080 -e CLIENT_ID="com.example.app" -e ENDPOINT="/oauth/apple/callback" -d ghcr.io/byjoker8625/sign-in-with-apple-callback:latest
```






