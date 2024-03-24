import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

const yourUsername = "angelaYu";
const yourPassword = "senha123";
const yourAPIKey = "fb63468a-c6f2-452f-87ff-43e7a63de272";
const yourBearerToken = "b78ab00a-21ed-4acb-889b-5e8573d8a03f";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  const response = await axios.get("https://secrets-api.appbrewery.com/random");
  const data = JSON.stringify(response.data);
  res.render("index.ejs", { content: data });
});

app.get("/basicAuth", async (req, res) => {
  const response = await axios.get(
    "https://secrets-api.appbrewery.com/all?page=1",
    {
      auth: {
        username: yourUsername,
        password: yourPassword,
      },
    }
  );

  const data = JSON.stringify(response.data);

  res.render("index.ejs", { content: data });
});

app.get("/apiKey", async (req, res) => {
  const response = await axios.get(
    `https://secrets-api.appbrewery.com/filter?score=5&apiKey=${yourAPIKey}`
  );
  const data = JSON.stringify(response.data);
  res.render("index.ejs", { content: data });
});

app.get("/bearerToken", async (req, res) => {
  const response = await axios.get(
    "https://secrets-api.appbrewery.com/secrets/2",
    {
      headers: {
        Authorization: `Bearer ${yourBearerToken}`,
      },
    }
  );

  const data = JSON.stringify(response.data);
  res.render("index.ejs", { content: data });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
