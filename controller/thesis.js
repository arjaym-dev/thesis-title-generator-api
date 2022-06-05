const Thesis = require("../helper/thesis")

/* Helper Func */
const getRandomIndex = require("../helper/getRandomIndex")

const GenerateTitleController = async (req, res) => {
  const thesisIndex = getRandomIndex(Thesis.length)
  const thesis = Thesis[thesisIndex]

  res.status(200).send({
    data: thesis,
  })
}

module.exports = GenerateTitleController
