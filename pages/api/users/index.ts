import { NextApiHandler } from "next";
import data from "../../../seeds/data.json"

const users: NextApiHandler = (_req, res) => {
  res.status(200).json({
    data,
    message: "Succeeded",
    status_code: 200
  })
}

export default users