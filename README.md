This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started
First, install the project:

```bash
npx create-next-app@latest

What is your project named? next-todolist
Would you like to use TypeScript? No / Yes #yes
Would you like to use ESLint? No / Yes # no
Would you like to use Tailwind CSS? No / Yes #yes
Would you like to use `src/` directory? No / Yes #yes
Would you like to use App Router? (recommended) No / Yes # yes
Would you like to customize the default import alias (@/*)? No / Yes # yes
What import alias would you like configured? @/*

```
Second, install prisma and dayjs:

```bash
npm i prisma dayjs -D
npx prisma init --datasource-provider sqlite # 这里可以使用多种数据库类型
```
我们使用sqlite作为数据库存储，它比较轻量，也实现了常见的关系型数据库功能，不需要安装额外的程序。

初始化后我们可以看到在项目根目录下多了prisma文件夹，文件夹下有schema.prisma文件。打开此文件定义我们的表结构：

```bash
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}

model Todo {
  id Int @id @default(autoincrement()) // 主键 自增id
  name String // 任务名
  time String // 执行时间
  created DateTime @default(now()) // 记录默认创建时间
}
```

定义好todo表之后，执行[`npx prisma migrate dev --name init`]命令，他将在prisma文件夹下生成[`dev.db`]文件，就是sqlite的数据存储文件，同时将表结构写入数据库。并自动安装了[`@prisma/client`]，这个库用来操作数据库。

At last, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
