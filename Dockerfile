FROM node:20

WORKDIR /app
COPY . .

# 安装依赖并构建项目
RUN npm install && npm run build

# 安装 serve 用于托管 dist 文件夹
RUN npm install -g serve

EXPOSE 3006

# 使用 serve 启动构建后的静态页面
CMD ["serve", "-s", "dist", "-l", "3006"]