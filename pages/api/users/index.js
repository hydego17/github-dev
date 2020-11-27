import axios from "axios";

export default async function getUsers(req, res) {
  // Get random number for user query
  const random = Number(req.query.since);
  const offset = Number(req.query.offset);

  try {
    const response = await axios.get(
      `https://api.github.com/users?since=${random}`,
      {
        headers: {
          Authorization: `token ${process.env.ACCESS_TOKEN}`,
        },
      }
    );
    const posts = response.data;

    res.status(200).json(posts);
  } catch (err) {
    res.status(err.status || 400).json({ message: "API Error" });
    console.error(err.message);
  }
}
