# 创建项目

1.初始化项目

```sh
pnpm dlx nuxi@latest init bbs-nuxt
```

2.安装tailwindcss

``` sh
pnpm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

配置

```js
// nuxt.config.js
export default defineNuxtConfig({
    devtools: {enabled: true},
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
})
// tailwind.config.js
module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}
```

引入

```css
/*assets/css/main.css*/
@tailwind base;
@tailwind components;
@tailwind utilities;
```

```js
// tailwind.config.js
export default defineNuxtConfig({
    devtools: {enabled: true},
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
})
```

解决Prisma needs to perform transactions, which requires your MongoDB server to be run as a replica set.

1. 修改 MongoDB 配置文件
   编辑 MongoDB 配置文件 mongod.cfg，添加副本集配置。以下是示例配置：

```yaml
# 副本集配置
replication:
replSetName: "rs0"
```

2. 重新启动 MongoDB 服务
   确保 MongoDB 服务使用新的配置文件启动。可以通过以下命令重新启动 MongoDB 服务：

```sh
net stop MongoDB
net start MongoDB
```

3. 初始化副本集
   启动 MongoDB 后，需要初始化副本集。打开 MongoDB Shell 并运行以下命令：

打开命令提示符并运行 MongoDB Shell：

```sh
mongosh
```

在 MongoDB Shell 中执行以下命令：

```sh
rs.initiate()
```

检查副本集状态：

```js
rs.status()
```

4. 验证副本集状态
   确保副本集已成功初始化，并且状态正常。rs.status() 命令应返回类似以下的输出：

```json
{
  "set": "rs0",
  "date": "ISODate('2024-05-16T00:00:00Z')",
  "myState": 1
}
```

myState: 1 表示当前节点是主节点，并且副本集已成功初始化。


