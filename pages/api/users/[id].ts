import { NextApiHandler } from "next";
import data from "../../../seeds/data.json"

const user: NextApiHandler = (req, res) => {
  const { id } = req.query;
  const userData = data.find(x => String(x.id) === String(id));

  if (!userData) {
    res.status(404).json({
      error: {
        message: "Not Found",
        status_code: 404
      }
    })
    return
  }
  res.status(200).json({
    data: userData,
    message: "Succeeded",
    status_code: 200
  })
}

export default user