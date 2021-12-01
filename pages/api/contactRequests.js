export default function handler(req, res) {
  if (req.method === "POST") {
    console.log(req.body);
    res.status(200).send();
  } else {
    res.status(405).json("Game Over");
  }
}
