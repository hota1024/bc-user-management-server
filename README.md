# User Management Server

## 🐢 モデル

### 🚶 `User`

| name | type | description |
|:---:|:---:|:---:|
| id | integer primary AI | ユーザーID |
| email | string | ユーザーのメールアドレス |
| password | string | ハッシュ化されたパスワード |

## 🛍️ サービス

### 🚶 `UserService`

#### `createUser` 関数

与えられたパラメーターからユーザーを作成し、返します。

```ts
import { createUser } from './services/UserService'

const user = await createUser({
  email: 'test@example.com',
  password: '<ハッシュ済みパスワード>'
})
```

### `listUsers` 関数

すべてのユーザーを返します。

```ts
import { listUsers } from './services/UserService'

const users = await listUsers()
```

### `deleteUser` 関数

指定したIDのユーザーを削除します。

```ts
import { deleteUser } from './services/UserService'

await deleteUser(2) // idが2のユーザーを削除します。
```
