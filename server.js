require("dotenv").config()
const express = require("express")

const app = express()

const path = require("path")

const posts = [
  {
    title: "CLIs mais simples com Util.parseArgs",
    desc: "Entenda sobre como o Node.js facilitou a criação de ferramentas de linhas de comando com o novo método parseArgs!",
    thumb: "https://raw.githubusercontent.com/khaosdoctor/blog-assets/master/images/2022/10/Blog-cover-Template-1.png",
    link: "https://blog.lsantos.dev/parseargs/"
  },

  {
    title: "Tudo sobre o novo operador satisfies no TypeScript",
    desc: "Com a versão beta 4.9 do TypeScript, ganhamos um novo operador, o 'satisfies', bora entender como que esse novo operador pode ser útil e porque ele é super legal!",
    thumb: "https://raw.githubusercontent.com/khaosdoctor/blog-assets/master/images/2022/10/Blog-cover-Template.png",
    link: "https://blog.lsantos.dev/ts-satisfies/"
  },

  {
    title: "Criando bots para o Telegram com o GrammY",
    desc: "Aprenda a criar bots incríveis para o Telegram usando uma ferramenta sensacional que vai revolucionar a forma como você trabalhar com automações.",
    thumb: "https://raw.githubusercontent.com/khaosdoctor/blog-assets/master/images/2022/09/Blog-cover-Template-2.png",
    link: "https://blog.lsantos.dev/telegram-grammy-bot/"
  },

  {
    title: "As 5 coisas mais difíceis em computação",
    desc: "Depois de quase 11 anos de carreira, eu resolvi escrever um pouco sobre as coisas que eu acho mais complexas em programação, e não é escrever código!",
    thumb: "https://images.unsplash.com/photo-1503525148566-ef5c2b9c93bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDk3fHxNYWR8ZW58MHx8fHwxNjU5MDIwMTk2&ixlib=rb-1.2.1&q=80&w=1200",
    link: "https://blog.lsantos.dev/5-coisas-dificeis-computacao/"
  },

  {
    title: "Usando tokens JWT de forma segura",
    desc: "Você usou tokens JWT de forma insegura em todos os seus projetos! Nesse artigo você vai aprender a proteger seus tokens contra ataques!",
    thumb: "https://raw.githubusercontent.com/khaosdoctor/blog-assets/master/images/2022/08/cover.jpg",
    link: "https://blog.lsantos.dev/jwt-seguro/"
  },

  {
    title: "O que há de novo no TypeScript 4.7",
    desc: "Fique por dentro das principais novidades da versão 4.7 do TypeScript. Que, entre muitas coisas, inclui a possibilidade de uso de ESModules nativos!",
    thumb: "https://raw.githubusercontent.com/khaosdoctor/blog-assets/master/images/2022/06/10b88c68-typescript-logo.png",
    link: "https://blog.lsantos.dev/typescript-47/"
  },

  {
    title: "Por que você deveria repensar o uso do Date.now",
    desc: "Nesse artigo eu vou te mostrar porque o Date.now() é muito problemático, principalmente quando a gente precisa fazer contagem de tempo ou medições de duração com JavaScript e por que você precisa parar de usá-lo.",
    thumb: "https://raw.githubusercontent.com/khaosdoctor/blog-assets/master/images/2022/06/IMG_5875-26-Editar-full.jpg",
    link: "https://blog.lsantos.dev/por-que-nao-usar-date-now/"
  }
]

if (process.env.NODE_ENV !== "development") {
  app.use(express.static(path.join(__dirname, "client/dist")))

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/dist/index.html", (err) => {
      if (err) {
        res.statusCode(500).send(err)
      }
    }))
  })
}

app.get("/api", (req, res) => {
  res.send(posts)
})

app.listen(process.env.PORT || 3000, () => console.log("Server Running"))