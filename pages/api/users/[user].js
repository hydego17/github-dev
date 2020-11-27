import axios from "axios";

export default async function getUsers(req, res) {
  // Get the current user query
  const user = req.query.user;

  try {
    const response = await axios.get(`https://api.github.com/users/${user}`, {
      headers: {
        Authorization: `token ${process.env.ACCESS_TOKEN}`,
      },
    });
    const posts = response.data;

    res.status(200).json(posts);
  } catch (err) {
    res.status(err.status || 400).json({ message: "API Error" });
    console.error(err.message);
  }
}
