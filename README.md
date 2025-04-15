# JWT Token Validator Action

This action checks if given token is in JWT format.

## Inputs

### `token`

**Required** The token. Default `""`.

## Outputs

none

## Example usage

```yaml
uses: xevolic/jwt-token-validator-action@v1
with:
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
```
