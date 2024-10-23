# 使用官方的 Node.js 镜像作为基础镜像
FROM node:18.20.4-alpine AS verdaccio

# 定义工作目录变量
ENV WORKDIR=/usr/src/app

# 创建工作目录
WORKDIR $WORKDIR

# 更换 npm 源并安装 verdaccio 和 PM2
RUN npm install -g verdaccio pm2

# 创建 PM2 配置文件
COPY ecosystem.config.js .

# 设置要暴露的端口
EXPOSE 4873

# 使用 PM2 启动 verdaccio
CMD ["pm2-runtime", "ecosystem.config.js"]
