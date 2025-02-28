# MackanTrainer

Welcome, feel free to check out this website on GitHub pages

To get it running locally you can run the following commands

```
npm install
npm run dev
```

To get production ready files it should be built with `npm run build`

This project is based on the `preact + TypeScript + Vite` template

```
npm create vite@latest MackanTrainer -- --template preact-ts
```

To start a Docker container run the following commands

```
docker build -t mackan:latest .
docker run --name mackan -d --restart unless-stopped -p 80:80 mackan:latest
```

![mackan](https://github.com/user-attachments/assets/1d5da495-fe3a-4a8c-96d9-d03897abe396)

## Thanks to

https://www.redblobgames.com/grids/hexagons/
