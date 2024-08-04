const { PrismaClient } = require("@prisma/client");
const express = require("express");
const app = express();
const port = 3000;

const cors = require("cors");

const prisma = new PrismaClient();

app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));

app.get("/", (req, res) => {
  res.json({ message: "Hello World 123!" });
});

app.get("/blog/:cat", async (req, res) => {
  try {
    const category = req.params.cat;
    let blogs;

    if (category !== "all") {
      blogs = await prisma.post.findMany({
        where: {
          category: category,
        },
      });
    } else {
      blogs = await prisma.post.findMany();
    }

    res.json({ data: blogs });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while retrieving the blog posts" });
  }
});

app.get("/blogbyid/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const blog = await prisma.post.findUnique({
      where: {
        id: id,
      },
    });
    if (blog) {
      res.json({ data: blog });
    } else {
      res.status(404).json({ error: "Blog post not found" });
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while retrieving the blog post" });
  }
});

app.post("/blog", async (req, res) => {
  try {
    const { title, category, content } = req.body;
    // console.log("content: " + content)
    const result = await prisma.post.create({
      data: {
        title,

        content,
        category,
      },
    });
    res.status(200).json({ message: "Added new blog", desc: result });
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while adding the blog post" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
